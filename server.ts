import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

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
