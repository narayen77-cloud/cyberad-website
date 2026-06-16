import { useLanguage } from "./LanguageContext";
import { motion } from "motion/react";
import { Target, ShoppingBag, Zap, Calendar, User, MessageSquareCode, FileText } from "lucide-react";
import { trackEvent } from "../lib/tracking";

export function Services() {
  const { language, t } = useLanguage();

  const services = [
    {
      icon: User,
      title: t.services.socialMedia.title,
      description: t.services.socialMedia.description,
    },
    {
      icon: Target,
      title: t.services.marketing.title,
      description: t.services.marketing.description,
    },
    {
      icon: ShoppingBag,
      title: t.services.ecommerce.title,
      description: t.services.ecommerce.description,
    },
    {
      icon: MessageSquareCode,
      title: t.services.automation.title,
      description: t.services.automation.description,
    },
    {
      icon: Calendar,
      title: t.services.event.title,
      description: t.services.event.description,
    },
    {
      icon: Zap,
      title: t.services.personal.title,
      description: t.services.personal.description,
    },
    {
      icon: FileText,
      title: t.services.pitchDeck?.title || "Investor Pitch Deck & Growth",
      description: t.services.pitchDeck?.description || "A premium, high-conversion strategic master deck carefully designed to secure venture funding, capital, and elite institutional partnerships.",
      isPremium: true
    }
  ];

  const handleInquiry = (packageTitle: string) => {
    const message = encodeURIComponent(`Hi Cyber Enterprises, I'm interested in the premium ${packageTitle}. Can we discuss more?`);
    
    // GTM Audit Logs
    trackEvent("lead_form_submission", "Conversions", {
      item_name: `Package Deck: ${packageTitle}`,
      category: "Growth Packages",
    });
    trackEvent("whatsapp_click", "Engagement", {
      click_ref: "Explore Strategy Click",
      package_title: packageTitle,
    });
    trackEvent("thank_you_page_view", "Conversions", {
      path: "/thank-you-service",
      title: "Thank You | Custom Growth Request",
    });

    // Alert context listeners for the Thank You modal
    window.dispatchEvent(
      new CustomEvent("lead_submitted_virtual", {
        detail: { message: `Premium Pack Choice: ${packageTitle}` }
      })
    );

    window.open(`https://wa.me/918925693013?text=${message}`, '_blank');
  };

  return (
    <section id="services" className="py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl serif italic mb-6">
            {t.services.title}
          </h2>
          <p className="text-xl text-brand-charcoal/60 max-w-2xl mx-auto font-light">
            Strategy over noise. Select the package that matches your current growth stage.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const isPremium = service.isPremium;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-8 rounded-[2.5rem] border transition-all group relative overflow-hidden flex flex-col justify-between ${
                  isPremium 
                  ? "bg-brand-charcoal border-brand-gold/40 text-white shadow-xl shadow-brand-gold/5" 
                  : "bg-white border-brand-charcoal/5 text-brand-charcoal hover:border-brand-gold/30 hover:shadow-2xl hover:shadow-brand-gold/5"
                }`}
              >
                {/* Premium badge at the top */}
                {isPremium && (
                  <div className="absolute top-4 right-6 bg-brand-gold/20 text-brand-gold font-mono font-bold text-[8.5px] uppercase tracking-widest px-2.5 py-1 rounded-full border border-brand-gold/30">
                    {language === 'ta' ? "பிரீமியம் உத்தி" : language === 'es' ? "PREMIUM STRATEGY" : "PREMIUM STRATEGY"}
                  </div>
                )}

                <div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-8 ${
                    isPremium 
                    ? "bg-brand-gold/10" 
                    : "bg-brand-charcoal/5 group-hover:bg-brand-gold/10"
                  }`}>
                    <service.icon className={`w-6 h-6 ${
                      isPremium 
                      ? "text-brand-gold" 
                      : "text-brand-charcoal group-hover:text-brand-gold"
                    }`} />
                  </div>
                  
                  <h3 className={`text-2xl mb-4 serif italic ${isPremium ? "text-brand-gold" : "text-brand-charcoal"}`}>
                    {service.title}
                  </h3>
                  <p className={`leading-relaxed font-light text-sm mb-8 ${isPremium ? "text-white/70" : "text-brand-charcoal/60"}`}>
                    {service.description}
                  </p>
                </div>

                <div className={`pt-4 border-t mt-auto ${isPremium ? "border-white/10" : "border-brand-charcoal/5"}`}>
                  <button
                    onClick={() => handleInquiry(service.title)}
                    className={`text-xs font-bold uppercase tracking-widest transition-all duration-300 inline-flex items-center gap-1.5 cursor-pointer group/btn ${
                      isPremium 
                      ? "text-brand-gold hover:text-white" 
                      : "text-brand-charcoal hover:text-brand-gold"
                    }`}
                  >
                    {language === 'ta' ? "உத்தியை ஆராயுங்கள்" : (isPremium ? "Acquire Premium Pack" : "Explore Strategy")}
                    <span className="transform group-hover/btn:translate-x-1 transition-transform inline-block">&rarr;</span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
