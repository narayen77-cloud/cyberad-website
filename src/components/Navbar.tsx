import { useLanguage } from "./LanguageContext";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

export function Navbar() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <nav className="fixed top-0 w-full z-50 bg-brand-offwhite/80 backdrop-blur-md border-b border-brand-charcoal/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center"
        >
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex items-center">
            <img 
              src="/logo.png" 
              alt="CYBERAD.IN Logo" 
              className="w-full h-full object-contain rounded-full bg-white transition-transform hover:scale-105 duration-300"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
                (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className="hidden text-base sm:text-lg font-bold uppercase tracking-wider text-brand-charcoal flex items-center h-full ml-3 font-serif">
              Cyber <span className="text-brand-gold ml-1">Enterprises</span>
            </div>
          </div>
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#hero" className="text-sm font-medium hover:text-brand-gold transition-colors">
            {language === "ta" ? "முகப்பு" : language === "es" ? "Inicio" : "Home"}
          </a>
          <a href="#about" className="text-sm font-medium hover:text-brand-gold transition-colors">
            {language === "ta" ? "பற்றி" : language === "es" ? "Nosotros" : "About"}
          </a>
          <a href="#portfolio" className="text-sm font-medium hover:text-brand-gold transition-colors">
            {language === "ta" ? "கேஸ் ஸ்டடி" : language === "es" ? "Portafolio" : "Portfolio"}
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-brand-gold transition-colors">
            {language === "ta" ? "தொடர்பு" : language === "es" ? "Contacto" : "Contact"}
          </a>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs font-sans font-medium border border-brand-charcoal/10 rounded-full p-0.5 bg-brand-charcoal/[0.03]">
            <button
              onClick={() => setLanguage("ta")}
              className={`px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-full transition-all duration-300 text-[10px] sm:text-xs font-medium cursor-pointer ${
                language === "ta" 
                  ? "bg-brand-gold text-brand-offwhite shadow-sm font-semibold" 
                  : "text-brand-charcoal/60 hover:text-brand-charcoal"
              }`}
            >
              தமிழ்
            </button>
            <span className="text-brand-charcoal/10 select-none text-[8px] sm:text-xs">|</span>
            <button
              onClick={() => setLanguage("en")}
              className={`px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-full transition-all duration-300 text-[10px] sm:text-xs font-medium cursor-pointer ${
                language === "en" 
                  ? "bg-brand-gold text-brand-offwhite shadow-sm font-semibold" 
                  : "text-brand-charcoal/60 hover:text-brand-charcoal"
              }`}
            >
              English
            </button>
            <span className="text-brand-charcoal/10 select-none text-[8px] sm:text-xs">|</span>
            <button
              onClick={() => setLanguage("es")}
              className={`px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-full transition-all duration-300 text-[10px] sm:text-xs font-medium cursor-pointer ${
                language === "es" 
                  ? "bg-brand-gold text-brand-offwhite shadow-sm font-semibold" 
                  : "text-brand-charcoal/60 hover:text-brand-charcoal"
              }`}
            >
              Español
            </button>
          </div>
          <a
            href="#contact"
            className="hidden sm:inline-block rounded-full px-4 sm:px-6 py-2 bg-brand-charcoal hover:bg-brand-gold text-brand-offwhite hover:text-white text-xs font-bold uppercase tracking-wider transition-all"
          >
            {language === "ta" ? "தொடங்கு" : language === "es" ? "Comenzar" : "Start now"}
          </a>
        </div>
      </div>
    </nav>
  );
}
