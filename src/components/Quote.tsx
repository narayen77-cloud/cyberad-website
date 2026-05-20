import { useLanguage } from "./LanguageContext";
import { motion } from "motion/react";
import { Quote as QuoteIcon } from "lucide-react";

export function Quote() {
  const { language } = useLanguage();

  return (
    <section className="py-24 px-6 bg-brand-gold/5 border-y border-brand-gold/10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <QuoteIcon className="w-12 h-12 text-brand-gold/20 absolute -top-8 -left-8" />
          
          <h2 className="text-[31px] serif italic leading-relaxed mb-8 text-brand-charcoal">
            {language === 'ta' ? (
              <>
                "பொருள் கருவி காலம் வினையிடனொடு ஐந்தும்<br />
                இருள்தீர எண்ணிச் செயல்."
              </>
            ) : (
              "\"பொருள் கருவி காலம் வினையிடனொடு ஐந்தும் இருள்தீர எண்ணிச் செயல்.\""
            )}
          </h2>
          
          <div className="w-12 h-px bg-brand-gold/40 mx-auto mb-8" />
          
          <p className="text-xl md:text-2xl font-light text-brand-charcoal/60 serif italic leading-relaxed max-w-2xl mx-auto">
            "Do an act after a due consideration of the five, viz. money, means, time, execution and place."
          </p>
          
          <p className="mt-6 text-xs font-bold uppercase tracking-[0.3em] text-brand-gold">
            — Thirukkural 675
          </p>
        </motion.div>
      </div>
    </section>
  );
}
