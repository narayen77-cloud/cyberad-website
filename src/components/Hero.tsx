import { useLanguage } from "./LanguageContext";
import { motion } from "motion/react";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative pt-40 pb-20 px-6 overflow-hidden min-h-[90vh] flex items-center">
      <div className="absolute top-20 right-[-10%] w-[50%] h-[50%] bg-brand-gold/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-20 left-[-10%] w-[40%] h-[40%] bg-brand-charcoal/5 blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold uppercase tracking-widest mb-6">
              {t.hero.technicalGap}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] leading-tight tracking-tighter mb-8 serif font-normal">
              {t.hero.title}
            </h1>
            <p className="text-xl text-brand-charcoal/60 max-w-lg mb-10 leading-relaxed font-light">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
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
          className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl"
        >
          <img 
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" 
            alt="Digital Strategy" 
            className="w-full h-full object-cover grayscale-[0.2] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/40 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 p-6 backdrop-blur-md bg-brand-offwhite/10 border border-brand-offwhite/20 rounded-2xl">
            <p className="text-brand-offwhite font-serif italic text-lg leading-snug">
              "Technology shouldn't be a barrier. It should be your greatest leverage."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
