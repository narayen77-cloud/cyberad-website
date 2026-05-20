import { useState } from "react";
import { useLanguage } from "./LanguageContext";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Loader2 } from "lucide-react";
import ReactMarkdown from "react-markdown";

export function AIAgent() {
  const { t, language } = useLanguage();
  const [industry, setIndustry] = useState("education");
  const [loading, setLoading] = useState(false);
  const [strategy, setStrategy] = useState("");
  const [error, setError] = useState("");

  const generateStrategy = async () => {
    setLoading(true);
    setStrategy("");
    setError("");
    try {
      const response = await fetch("/api/strategy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ industry, language }),
      });
      
      const contentType = response.headers.get("content-type");
      let data;
      
      if (contentType && contentType.includes("application/json")) {
        data = await response.json();
      } else {
        throw new Error(`Server error (${response.status}). Please check your connection or try again later.`);
      }
      
      if (!response.ok) {
        throw new Error(data.error || data.details || "Failed to generate strategy");
      }
      
      setStrategy(data.strategy);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto bg-brand-gold/5 border border-brand-gold/20 rounded-[3rem] p-10 md:p-16">
        <div className="flex items-center gap-3 mb-8">
          <Sparkles className="w-6 h-6 text-brand-gold" />
          <h2 className="text-3xl md:text-4xl serif italic">{t.aiTool.title}</h2>
        </div>
        
        <p className="text-brand-charcoal/70 mb-8 font-light italic">
          {t.aiTool.prompt}
        </p>

        <div className="flex flex-wrap gap-3 mb-10">
          {["education", "solar", "smallBusiness", "premium"].map((ind) => (
            <button
              key={ind}
              onClick={() => setIndustry(ind)}
              className={`px-6 py-3 rounded-full border transition-all ${
                industry === ind 
                ? "bg-brand-charcoal text-brand-offwhite border-brand-charcoal" 
                : "bg-transparent border-brand-charcoal/10 hover:border-brand-charcoal/40"
              }`}
            >
              {ind === "smallBusiness" ? t.industries.smallBusiness : ind.charAt(0).toUpperCase() + ind.slice(1)}
            </button>
          ))}
        </div>

        <Button 
          onClick={generateStrategy} 
          disabled={loading}
          className="w-full md:w-auto h-14 px-10 rounded-full bg-brand-gold hover:bg-brand-gold/90 text-brand-offwhite text-lg font-medium cursor-pointer"
        >
          {loading ? <Loader2 className="mr-2 animate-spin h-5 w-5" /> : null}
          {loading ? (language === "ta" ? "உத்தி உருவாக்கப்படுகிறது..." : "Generating Strategy...") : t.aiTool.button}
        </Button>

        <AnimatePresence mode="wait">
          {loading && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-12 flex flex-col items-center justify-center space-y-4 p-12 bg-white/20 rounded-2xl border border-brand-gold/5"
            >
              <div className="relative">
                <div className="w-16 h-16 border-4 border-brand-gold/20 border-t-brand-gold rounded-full animate-spin" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-brand-gold animate-pulse" />
                </div>
              </div>
              <div className="text-center">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                  className="text-brand-charcoal font-medium italic"
                >
                  {language === "ta" 
                    ? "சைபர் என்டர்பிரைசஸ் AI உங்கள் தரவை ஆய்வு செய்கிறது..." 
                    : "Cyber Enterprises AI is analyzing market variables..."}
                </motion.p>
                <p className="text-xs text-brand-charcoal/40 uppercase tracking-[0.2em] mt-2">
                  {language === "ta" ? "தயவுசெய்து ஒரு நிமிடம் காத்திருக்கவும்" : "Please wait a moment"}
                </p>
              </div>
            </motion.div>
          )}

          {error && !loading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-12 p-6 bg-red-50 border border-red-200 rounded-2xl text-red-700 text-sm flex items-center gap-3"
            >
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              {error}
            </motion.div>
          )}

          {strategy && !loading && (
            <motion.div
              key="strategy-result"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-12 p-8 md:p-12 bg-white backdrop-blur-md border border-brand-gold/20 rounded-[2rem] shadow-2xl shadow-brand-gold/5"
            >
              <div className="flex items-center gap-2 mb-6 p-3 bg-brand-gold/10 rounded-xl w-fit">
                <Sparkles className="w-4 h-4 text-brand-gold" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-charcoal">AI Generated Result</span>
              </div>
              <div className="prose prose-brand max-w-none text-brand-charcoal/80 leading-relaxed overflow-hidden">
                <ReactMarkdown>{strategy}</ReactMarkdown>
              </div>
              
              <div className="mt-10 pt-8 border-t border-brand-gold/10 flex flex-col sm:flex-row items-center justify-between gap-6">
                <p className="text-sm italic text-brand-charcoal/60">
                  {language === "ta" 
                    ? "இது உங்கள் துறைக்கான ஆரம்ப உத்தி. தனிப்பயனாக்கப்பட்ட முழுமையான திட்டத்திற்கு எங்களைத் தொடர்பு கொள்ளவும்." 
                    : "This is a preliminary AI strategy. For a full commercial execution plan, connect with us."}
                </p>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-6 py-3 bg-brand-charcoal text-brand-offwhite rounded-full text-sm font-bold hover:scale-105 transition-transform"
                >
                  {t.contact.title}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
