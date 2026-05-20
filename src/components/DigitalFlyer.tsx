import { motion } from "motion/react";
import { useLanguage } from "./LanguageContext";
import { X, MessageCircle, ArrowRight, User, Target, ShoppingBag, MessageSquareCode, Calendar, Zap, Timer, Globe } from "lucide-react";

export function DigitalFlyer({ onClose }: { onClose: () => void }) {
  const { t } = useLanguage();

  const services = [
    { icon: User, title: t.services.socialMedia.title },
    { icon: Target, title: t.services.marketing.title },
    { icon: ShoppingBag, title: t.services.ecommerce.title },
    { icon: MessageSquareCode, title: t.services.automation.title },
    { icon: Calendar, title: t.services.event.title },
    { icon: Zap, title: t.services.personal.title },
    { icon: Timer, title: t.services.trial.title },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-charcoal overflow-y-auto py-10 px-4"
    >
      <button 
        onClick={onClose}
        className="fixed top-6 right-6 text-brand-offwhite/40 hover:text-brand-offwhite transition-colors cursor-pointer z-[110]"
      >
        <X className="w-8 h-8" />
      </button>

      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        className="relative w-full max-w-[450px] aspect-[9/16] bg-brand-charcoal text-brand-offwhite overflow-hidden shadow-2xl rounded-[2.5rem] border border-brand-offwhite/10"
        id="digital-flyer-content"
      >
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-gold/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="relative h-full flex flex-col p-10">
          {/* Logo Section */}
          <div className="flex items-center gap-3 mb-12">
            <div className="w-10 h-10 bg-brand-blue flex items-center justify-center rounded-lg shadow-lg">
              <span className="text-brand-offwhite font-serif text-2xl font-bold italic">C</span>
            </div>
            <span className="serif text-lg font-semibold tracking-tight uppercase text-brand-blue opacity-90">Cyber Enterprises</span>
          </div>

          {/* Headline */}
          <div className="mb-10">
            <h1 className="text-4xl md:text-5xl serif italic leading-tight mb-4 text-brand-gold">
              {t.hero.title}
            </h1>
            <p className="text-brand-offwhite/60 text-sm font-light leading-relaxed">
              {t.hero.subtitle}
            </p>
          </div>

          {/* Services Grid */}
          <div className="flex-1">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-offwhite/30 mb-6 border-l-2 border-brand-gold pl-3">
              Strategic Packages
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {services.map((s, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-8 h-8 rounded-lg bg-brand-offwhite/5 flex items-center justify-center group-hover:bg-brand-gold/20 transition-colors">
                    <s.icon className="w-4 h-4 text-brand-gold" />
                  </div>
                  <span className="text-xs font-medium text-brand-offwhite/80 group-hover:text-brand-offwhite transition-colors">
                    {s.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer / CTA */}
          <div className="mt-10 pt-10 border-t border-brand-offwhite/5">
            <div className="flex flex-col gap-4">
              <a 
                href="https://wa.me/918925693013" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-between w-full p-4 bg-[#25D366] text-white rounded-2xl font-bold group hover:scale-105 transition-transform"
              >
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Connect on WhatsApp</span>
                </div>
                <ArrowRight className="w-4 h-4" />
              </a>
              
              <div className="flex items-center justify-between px-2">
                <div className="flex items-center gap-2 text-brand-offwhite/40">
                  <Globe className="w-3 h-3" />
                  <span className="text-[10px] uppercase tracking-widest font-bold">www.cyberad.in</span>
                </div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-brand-gold font-bold">Growth Systems</span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute -bottom-10 -right-10 w-40 h-40 border border-brand-gold/10 rounded-full" />
        <div className="absolute top-1/2 -left-10 w-20 h-20 border border-brand-blue/10 rounded-full" />
      </motion.div>
      
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 text-brand-offwhite/40 text-[10px] uppercase tracking-widest text-center">
        Screenshot this preview for your social media handles
      </div>
    </motion.div>
  );
}
