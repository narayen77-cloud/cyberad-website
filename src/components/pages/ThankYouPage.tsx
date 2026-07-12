import { useEffect } from "react";
import { Link } from "../RouterContext";
import { useLanguage } from "../LanguageContext";
import { motion } from "motion/react";
import { CheckCircle2, ArrowLeft, Home, Sparkles } from "lucide-react";
import { trackEvent } from "../../lib/tracking";

export default function ThankYouPage() {
  const { language } = useLanguage();
  const lang = (language as "en" | "ta" | "es") || "en";

  useEffect(() => {
    // Track thank you pageview
    trackEvent("thank_you_page_view", "Conversions", {
      path: "/thank-you",
      title: "Thank You | Cyber Enterprises"
    });
  }, []);

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-20 bg-gradient-to-b from-brand-offwhite via-brand-offwhite to-white relative overflow-hidden">
      <div className="absolute top-20 right-[-10%] w-[50%] h-[50%] bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-[-10%] w-[45%] h-[45%] bg-brand-charcoal/5 blur-[100px] rounded-full pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.96, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-white border border-brand-charcoal/5 rounded-[2.8rem] p-8 md:p-10 text-center shadow-2xl relative z-10"
      >
        <div className="w-20 h-20 bg-emerald-50 border border-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner relative">
          <CheckCircle2 className="w-10 h-10" />
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute inset-0 rounded-full bg-emerald-500/10 -z-10"
          />
        </div>

        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-charcoal/5 border border-brand-charcoal/5 text-brand-charcoal/60 text-[9px] font-mono font-bold uppercase tracking-wider rounded-full mb-4">
          <Sparkles className="w-3 h-3 text-brand-gold" />
          {lang === "ta" ? "விசாரணை பெறப்பட்டது" : lang === "es" ? "SOLICITUD REGISTRADA" : "ENQUIRY RECORDED"}
        </span>

        <h1 className="text-3xl md:text-4xl serif italic text-brand-charcoal mb-4">
          {lang === "ta" ? "மிக்க நன்றி!" : lang === "es" ? "¡Muchas Gracias!" : "Thank You!"}
        </h1>

        <p className="text-sm font-light text-brand-charcoal/70 leading-relaxed mb-8">
          {lang === "ta" ? (
            "உங்கள் விவரங்கள் பெறப்பட்டன. எங்கள் தொழில்நுட்ப ஆலோசனைக் குழுவினர் விரைவில் உங்களைத் தொடர்பு கொண்டு உங்களுடைய திட்டத்தைப் பற்றி விவாதிப்பர்."
          ) : lang === "es" ? (
            "Hemos recibido sus detalles de contacto con éxito. Nuestro socio principal analizará su requerimiento y le contactará en breve."
          ) : (
            "We have successfully recorded your details. Our technical growth partner will analyze your requirements and reach out to discuss your campaign strategy shortly."
          )}
        </p>

        <div className="flex flex-col gap-3">
          <Link
            to="/"
            className="w-full py-4 bg-brand-charcoal hover:bg-brand-gold text-brand-offwhite hover:text-brand-charcoal rounded-full text-xs font-mono font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-brand-charcoal/10 hover:shadow-brand-gold/20 cursor-pointer"
          >
            <Home className="w-4 h-4" />
            <span>{lang === "ta" ? "முகப்பு பக்கம் திரும்புக" : lang === "es" ? "Volver al Inicio" : "Return to Home"}</span>
          </Link>
          
          <Link
            to="#contact"
            className="w-full py-3.5 border border-brand-charcoal/10 hover:border-brand-gold text-brand-charcoal hover:text-brand-gold rounded-full text-xs font-mono font-bold uppercase tracking-widest transition-all duration-300 inline-block cursor-pointer"
          >
            {lang === "ta" ? "மற்றொரு கேள்வி கேட்க" : lang === "es" ? "Nueva Consulta" : "Submit Another Inquiry"}
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
