import { useLanguage } from "./LanguageContext";
import { motion } from "motion/react";
import { Quote as QuoteIcon } from "lucide-react";

export function Quote() {
  const { language } = useLanguage();

  return (
    <section id="thirukkural" className="py-20 px-4 sm:px-6 bg-white border-y border-brand-gold/40 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[3px] bg-brand-gold" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-[3px] bg-brand-gold" />
      
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <QuoteIcon className="w-12 h-12 text-brand-gold/15 absolute -top-8 -left-4 sm:-left-8" />
          
          {/* Permanent Original Tamil Verse (Sharp Black Typography) */}
          <h2 className="text-base sm:text-lg md:text-xl serif font-semibold text-black leading-relaxed tracking-tight mb-6">
            செய்க பொருளைச் செறுநர் செருக்கறுக்கும்<br />
            எஃகதனிற் கூரிய தில்.
          </h2>
          
          <div className="w-16 h-px bg-brand-gold/40 mx-auto mb-6" />
          
          {/* Localized Translation Layer precisely below */}
          <div className="min-h-[50px] flex items-center justify-center">
            {language === 'es' ? (
              <p className="text-sm sm:text-base md:text-lg font-sans font-light text-brand-charcoal/80 italic leading-relaxed max-w-2xl mx-auto">
                "Acumula riqueza; es el instrumento más eficaz para destruir la arrogancia de tus enemigos. No existe arma más afilada que ella."
              </p>
            ) : (
              <p className="text-sm sm:text-base md:text-lg font-sans font-light text-brand-charcoal/80 italic leading-relaxed max-w-2xl mx-auto">
                "Forge your wealth — no blade cuts deeper than prosperity against the arrogance of enemies."
              </p>
            )}
          </div>
          
          <p className="mt-8 text-[11px] font-bold uppercase tracking-[0.3em] text-brand-gold">
            {language === 'ta' ? "— திருக்குறள் 759" : "— Thirukkural 759"}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

