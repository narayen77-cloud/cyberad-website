import { useLanguage } from "./LanguageContext";
import { motion } from "motion/react";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const { language, t } = useLanguage();

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 px-6 overflow-hidden min-h-[90vh] flex items-center">
      <div className="absolute top-20 right-[-10%] w-[50%] h-[50%] bg-brand-gold/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-20 left-[-10%] w-[40%] h-[40%] bg-brand-charcoal/5 blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center w-full">
        <div className="relative z-10 max-w-xl mx-auto md:mx-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold uppercase tracking-widest mb-6">
              {t.hero.technicalGap}
            </span>
            <h1 className={`serif font-normal break-words sm:break-normal mb-6 md:mb-8 ${
              language === 'ta'
                ? "text-[21px] xs:text-2xl sm:text-3xl md:text-[38px] lg:text-[44px] leading-[1.35] md:leading-[1.25] tracking-normal"
                : "text-3xl sm:text-4xl md:text-5xl lg:text-[54px] leading-tight md:leading-[1.15] tracking-tighter"
            }`}>
              {t.hero.title}
            </h1>
            <p className={`text-brand-charcoal/60 max-w-lg mb-8 md:mb-10 font-light ${
              language === 'ta' 
                ? "text-sm sm:text-base md:text-lg leading-relaxed" 
                : "text-base sm:text-lg lg:text-xl leading-relaxed"
            }`}>
              {language === 'en' ? (
                <>
                  We empower local enterprises with high-impact <strong className="font-semibold text-brand-charcoal">automation</strong>, <strong className="font-semibold text-brand-charcoal">multi-page websites</strong>, and <strong className="font-semibold text-brand-charcoal">strategic marketing</strong> built to scale your revenue.
                </>
              ) : (
                t.hero.subtitle
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-start">
              <Button 
                size="lg" 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="rounded-full h-14 px-8 bg-brand-charcoal text-brand-offwhite hover:scale-105 transition-transform cursor-pointer"
              >
                {t.hero.cta} <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="rounded-full h-14 px-8 border-brand-charcoal/10 hover:bg-brand-charcoal/5 cursor-pointer"
              >
                {t.nav.services}
              </Button>
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
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" 
            alt="Digital Strategy" 
            className="w-full h-full object-cover grayscale-[0.2] contrast-[1.1]"
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
