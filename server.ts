import express from "express";
import path from "path";
import fs from "fs/promises";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

/**
 * Automatically parses a Google Form URL to detect the submission POST URL
 * and maps Name, Phone, and Brief question entry IDs dynamically.
 */
async function getGoogleFormConfig(sourceUrl: string) {
  // Determine Form ID or exact action formResponse URL
  let formId = "1YRKRanmyPgfzHbLhn6bh6PZB-8cTffLWv9jgqdIyWLA"; // Default fallback form ID
  
  const match = sourceUrl.match(/\/forms\/d\/(e\/)?([a-zA-Z0-9-_]+)/);
  if (match) {
    formId = match[2];
  }

  // Construct target URLs
  const viewUrl = `https://docs.google.com/forms/d/${formId}/viewform`;
  const postUrl = `https://docs.google.com/forms/d/${formId}/formResponse`;

  // Default Entry ID Fallbacks
  let entryName = process.env.GOOGLE_FORM_ENTRY_NAME || "entry.1000001";
  let entryPhone = process.env.GOOGLE_FORM_ENTRY_PHONE || "entry.1000002";
  let entryBrief = process.env.GOOGLE_FORM_ENTRY_BRIEF || "entry.1000003";

  try {
    console.log(`[Google Form Auto-Detector] Fetching form view to extract schemas: ${viewUrl}`);
    const res = await fetch(viewUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
      }
    });

    if (res.ok) {
      const html = await res.text();
      // Extract FB_PUBLIC_LOAD_DATA_
      const loadDataMatch = html.match(/FB_PUBLIC_LOAD_DATA_\s*=\s*(.*?);\s*<\/script>/);
      if (loadDataMatch) {
        let jsonStr = loadDataMatch[1].trim();
        if (jsonStr.endsWith(";")) {
          jsonStr = jsonStr.slice(0, -1);
        }
        const loadData = JSON.parse(jsonStr);
        if (loadData && loadData[1] && loadData[1][1]) {
          const questions = loadData[1][1];
          console.log(`[Google Form Auto-Detector] Successfully parsed ${questions.length} question fields dynamically.`);
          
          let nameFound = false;
          let phoneFound = false;
          let briefFound = false;

          for (const q of questions) {
            const label = (q[1] || "").toLowerCase();
            const entryId = q[4]?.[0]?.[0];
            if (entryId) {
              const fullEntry = `entry.${entryId}`;
              // Map label containing Name, Phone/WhatsApp, Brief/Message
              if (!nameFound && (label.includes("name") || label.includes("பெயர்") || label.includes("nombre"))) {
                entryName = fullEntry;
                nameFound = true;
                console.log(`- Automatically mapped Name to field: ${fullEntry} ("${q[1]}")`);
              } else if (!phoneFound && (label.includes("phone") || label.includes("whatsapp") || label.includes("number") || label.includes("contact") || label.includes("தொடர்பு") || label.includes("cel") || label.includes("tel") || label.includes("கைபேசி"))) {
                entryPhone = fullEntry;
                phoneFound = true;
                console.log(`- Automatically mapped Phone to field: ${fullEntry} ("${q[1]}")`);
              } else if (!briefFound && (label.includes("brief") || label.includes("detail") || label.includes("consultation") || label.includes("விவரம்") || label.includes("message") || label.includes("comment") || label.includes("mensaj"))) {
                entryBrief = fullEntry;
                briefFound = true;
                console.log(`- Automatically mapped Brief to field: ${fullEntry} ("${q[1]}")`);
              }
            }
          }
        }
      }
    } else {
      console.warn(`[Google Form Auto-Detector] Could not fetch form page (status ${res.status}). Using fallback entry schemas.`);
    }
  } catch (error) {
    console.error("[Google Form Auto-Detector] Unexpected error during dynamic auto-mapping:", error);
  }

  return { postUrl, entryName, entryPhone, entryBrief };
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Lazy-loaded Gemini API client to prevent startup crash if GEMINI_API_KEY is not defined
  let aiClient: GoogleGenAI | null = null;
  function getGeminiClient() {
    if (!aiClient) {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error("AI service configuration is missing. Please set GEMINI_API_KEY in Secrets.");
      }
      aiClient = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });
    }
    return aiClient;
  }

  // API Routes
  app.post("/api/submit-lead", async (req, res) => {
    console.log("Lead form submission received:", req.body);
    try {
      const { name, phone, brief, lang } = req.body;
      if (!name || !phone) {
        return res.status(400).json({ error: "Name and contact number are required" });
      }

      const timestamp = new Date().toISOString();
      const newLead = { name, phone, brief, lang, timestamp };

      // 1. Durably write/append to local leads_db.json file
      const dbPath = path.join(process.cwd(), "leads_db.json");
      let leads: any[] = [];
      try {
        const fileContent = await fs.readFile(dbPath, "utf-8");
        leads = JSON.parse(fileContent);
      } catch (err) {
        // If file doesn't exist, start empty
      }
      leads.push(newLead);
      await fs.writeFile(dbPath, JSON.stringify(leads, null, 2), "utf-8");
      console.log("Lead securely saved locally to leads_db.json");

      // 2. Optional: Dispatch to Webhook URL if set in environment
      if (process.env.LEAD_WEBHOOK_URL) {
        try {
          console.log("Dispatching lead to LEAD_WEBHOOK_URL:", process.env.LEAD_WEBHOOK_URL);
          await fetch(process.env.LEAD_WEBHOOK_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newLead)
          });
          console.log("Lead webhook dispatch successful!");
        } catch (webhookErr: any) {
          console.error("Failed to dispatch to webhook:", webhookErr);
        }
      }

      // 3. Dispatch to Google Form (with Dynamic Auto-Detection & Fallbacks)
      const formSourceUrl = process.env.GOOGLE_FORM_POST_URL || "https://docs.google.com/forms/d/1YRKRanmyPgfzHbLhn6bh6PZB-8cTffLWv9jgqdIyWLA/edit";
      if (formSourceUrl) {
        try {
          console.log(`[Google Form Pipeline] Resolving configuration for form URL: ${formSourceUrl}`);
          const config = await getGoogleFormConfig(formSourceUrl);
          
          const params = new URLSearchParams();
          params.append(config.entryName, name);
          params.append(config.entryPhone, phone);
          params.append(config.entryBrief, brief || "");

          console.log(`[Google Form Pipeline] Dispatching POST submission to action URL: ${config.postUrl}`);
          console.log(`[Google Form Pipeline] Payload mapped parameters: Name: ${config.entryName}, Phone: ${config.entryPhone}, Brief: ${config.entryBrief}`);

          const formResponse = await fetch(config.postUrl, {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: params.toString()
          });

          if (formResponse.ok) {
            console.log("[Google Form Pipeline] Google Form submission completed successfully!");
          } else {
            console.warn(`[Google Form Pipeline] Form submission action returned status code: ${formResponse.status}`);
          }
        } catch (formErr: any) {
          console.error("[Google Form Pipeline] Failed to submit to Google Form:", formErr);
        }
      }

      res.json({ success: true, message: "Lead saved successfully on site" });
    } catch (error: any) {
      console.error("Internal Lead Submission Error:", error);
      res.status(500).json({ error: "Failed to submit lead", details: error.message });
    }
  });

  app.get("/api/leads", async (req, res) => {
    try {
      const clientPasscode = req.headers["x-admin-passcode"];
      const actualPasscode = process.env.ADMIN_PASSCODE || "admin123";
      if (clientPasscode !== actualPasscode) {
        return res.status(401).json({ error: "Unauthorized: Invalid passcode" });
      }

      const dbPath = path.join(process.cwd(), "leads_db.json");
      let leads: any[] = [];
      try {
        const fileContent = await fs.readFile(dbPath, "utf-8");
        leads = JSON.parse(fileContent);
      } catch (err) {
        // If file doesn't exist, we start empty
      }
      res.json({ success: true, leads });
    } catch (error: any) {
      console.error("Failed to read leads:", error);
      res.status(500).json({ error: "Failed to load leads", details: error.message });
    }
  });

  app.post("/api/leads/clear", async (req, res) => {
    try {
      const clientPasscode = req.headers["x-admin-passcode"];
      const actualPasscode = process.env.ADMIN_PASSCODE || "admin123";
      if (clientPasscode !== actualPasscode) {
        return res.status(401).json({ error: "Unauthorized: Invalid passcode" });
      }

      const dbPath = path.join(process.cwd(), "leads_db.json");
      await fs.writeFile(dbPath, JSON.stringify([], null, 2), "utf-8");
      res.json({ success: true, message: "Lead database cleared successfully" });
    } catch (error: any) {
      console.error("Failed to clear leads:", error);
      res.status(500).json({ error: "Failed to clear lead database" });
    }
  });

  app.post("/api/strategy", async (req, res) => {
    console.log("Strategy request received:", req.body);
    try {
      const { industry, language } = req.body;
      
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        console.error("GEMINI_API_KEY is not defined in environment variables");
        return res.status(500).json({ error: "AI service configuration is missing. Please check Secrets." });
      }

      const prompt = `Act as a premium digital marketing expert for the ${industry} sector in India. 
      Provide a concise, 3-point digital marketing strategy to help a business owner who is not very tech-savvy. 
      The tone should be professional and encouraging. 
      Provide the response in ${language === 'ta' ? 'Tamil' : 'English'}.
      Focus on Meta Ads, Google Ads, and Lead retention through AI.`;

      console.log("Calling Gemini API with prompt length:", prompt.length);

      const ai = getGeminiClient();
      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
      });

      if (!response.text) {
        console.error("Gemini returned empty response");
        return res.status(500).json({ error: "AI failed to generate a response. Please try again." });
      }

      console.log("Strategy successfully generated");
      res.json({ strategy: response.text });
    } catch (error: any) {
      console.error("Gemini Error Details:", error);
      res.status(500).json({ 
        error: "Failed to generate strategy", 
        details: error.message || "Unknown error"
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
