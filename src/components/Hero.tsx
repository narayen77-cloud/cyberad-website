import { useLanguage } from "./LanguageContext";
import { motion } from "motion/react";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "../assets/images/hero_real_estate.jpg";

export function Hero() {
  const { language, t } = useLanguage();

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 px-4 sm:px-6 overflow-hidden min-h-[90vh] flex items-center">
      <div className="absolute top-20 right-[-10%] w-[50%] h-[50%] bg-brand-gold/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-20 left-[-10%] w-[40%] h-[40%] bg-brand-charcoal/5 blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center w-full">
        <div className="relative z-10 max-w-xl mx-auto md:mx-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-gold/10 text-brand-gold text-xs font-bold uppercase tracking-widest mb-6">
              {t.hero.technicalGap}
            </span>
            <h1 id="hero-title" className={`serif font-normal break-words sm:break-normal mb-4 ${
              language === 'ta'
                ? "text-[28px] xs:text-3xl sm:text-4xl md:text-[42px] lg:text-[48px] leading-[1.25] tracking-normal"
                : "text-4xl sm:text-5xl md:text-6xl lg:text-[64px] leading-tight tracking-tight text-brand-charcoal"
            }`}>
              {t.hero.title}
            </h1>
            
            {/* Subheading: Exclusively for Real Estate */}
            <h2 className={`font-serif italic font-medium text-brand-gold mb-4 ${
              language === 'ta'
                ? "text-lg sm:text-xl leading-relaxed"
                : "text-xl sm:text-2xl leading-relaxed"
            }`}>
              {t.hero.subheading}
            </h2>

            {/* Description */}
            <p className={`text-brand-charcoal/70 mb-8 font-light ${
              language === 'ta' 
                ? "text-sm sm:text-base leading-relaxed" 
                : "text-base sm:text-lg leading-relaxed"
            }`}>
              {t.hero.description}
            </p>

            {/* Dual CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-charcoal hover:bg-brand-gold text-white hover:text-white font-mono text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300 shadow-sm hover:scale-[1.02] cursor-pointer"
              >
                <span>{t.hero.ctaPrimary}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#portfolio"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 border border-brand-charcoal/20 hover:border-brand-charcoal hover:bg-brand-charcoal/5 text-brand-charcoal font-mono text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              >
                <span>{t.hero.ctaSecondary}</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative aspect-[4/3] sm:aspect-[16/10] md:aspect-[4/3] w-full max-w-xl mx-auto md:max-w-none rounded-3xl overflow-hidden shadow-2xl mt-4 md:mt-0"
        >
          <img 
            src={heroImage} 
            alt="A set of keys with a house keychain in front of miniature model houses, representing real estate and home ownership" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover contrast-[1.05] transition-all duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/40 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 p-5 backdrop-blur-md bg-brand-offwhite/10 border border-brand-offwhite/20 rounded-2xl">
            <p className="text-brand-offwhite font-serif italic text-sm sm:text-base md:text-lg leading-snug">
              "Technology shouldn't be a barrier. It should be your greatest leverage."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
