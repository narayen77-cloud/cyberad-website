import { useLanguage } from "./LanguageContext";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

export function Navbar() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <nav className="fixed top-0 w-full z-50 bg-brand-offwhite/80 backdrop-blur-md border-b border-brand-charcoal/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center"
        >
          <div className="relative w-36 sm:w-44 h-11">
            <img 
              src="/logo.png" 
              alt="CYBERAD.IN Logo" 
              className="w-full h-full object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
                (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className="hidden text-lg font-bold uppercase tracking-wider text-brand-blue flex items-center h-full">
              Cyber Enterprises
            </div>
          </div>
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm font-medium hover:text-brand-gold transition-colors">{t.nav.services}</a>
          <a href="#industries" className="text-sm font-medium hover:text-brand-gold transition-colors">{t.nav.industries}</a>
          {language !== "es" && (
            <a href="#insights" className="text-sm font-medium hover:text-brand-gold transition-colors">{t.nav.insights}</a>
          )}
          <a href="#contact" className="text-sm font-medium hover:text-brand-gold transition-colors">{t.nav.contact}</a>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs font-sans font-medium border border-brand-charcoal/10 rounded-full p-0.5 bg-brand-charcoal/[0.03]">
            <button
              onClick={() => setLanguage("ta")}
              className={`px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-full transition-all duration-300 text-[10px] sm:text-xs font-medium cursor-pointer ${
                language === "ta" 
                  ? "bg-brand-gold text-brand-charcoal shadow-sm font-semibold" 
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
                  ? "bg-brand-gold text-brand-charcoal shadow-sm font-semibold" 
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
                  ? "bg-brand-gold text-brand-charcoal shadow-sm font-semibold" 
                  : "text-brand-charcoal/60 hover:text-brand-charcoal"
              }`}
            >
              Español
            </button>
          </div>
          <Button className="rounded-full px-4 sm:px-6 py-1 bg-brand-charcoal hover:bg-brand-charcoal/90 text-brand-offwhite text-xs font-bold uppercase tracking-wider">
            {t.hero.cta}
          </Button>
        </div>
      </div>
    </nav>
  );
}
