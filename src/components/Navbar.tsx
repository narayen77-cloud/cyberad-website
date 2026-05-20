import { useLanguage } from "./LanguageContext";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { motion } from "motion/react";

export function Navbar() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <nav className="fixed top-0 w-full z-50 bg-brand-offwhite/80 backdrop-blur-md border-b border-brand-charcoal/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4"
        >
          <div className="relative w-10 h-10">
            <img 
              src="/logo.png" 
              alt="Cyber Enterprises Logo" 
              className="w-full h-full object-contain rounded-lg"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
                (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className="w-10 h-10 bg-brand-blue flex items-center justify-center rounded-lg hidden">
              <span className="text-brand-offwhite font-serif text-2xl font-bold italic">C</span>
            </div>
          </div>
          <span className="serif text-xl md:text-2xl font-semibold tracking-tight uppercase text-brand-blue">Cyber Enterprises</span>
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm font-medium hover:text-brand-gold transition-colors">{t.nav.services}</a>
          <a href="#industries" className="text-sm font-medium hover:text-brand-gold transition-colors">{t.nav.industries}</a>
          <a href="#contact" className="text-sm font-medium hover:text-brand-gold transition-colors">{t.nav.contact}</a>
        </div>

        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setLanguage(language === "en" ? "ta" : "en")}
            className="flex items-center gap-2 font-medium"
          >
            <Globe className="w-4 h-4" />
            {language === "en" ? "தமிழ்" : "English"}
          </Button>
          <Button className="rounded-full px-6 bg-brand-charcoal hover:bg-brand-charcoal/90 text-brand-offwhite">
            {t.hero.cta}
          </Button>
        </div>
      </div>
    </nav>
  );
}
