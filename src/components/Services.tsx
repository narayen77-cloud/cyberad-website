import { useLanguage } from "./LanguageContext";
import { motion } from "motion/react";
import { Target, MessageCircle, ShoppingBag, Zap, Calendar, User, Timer, MessageSquareCode } from "lucide-react";

export function Services() {
  const { t } = useLanguage();

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
      icon: Timer,
      title: t.services.trial.title,
      description: t.services.trial.description,
      isHighlight: true,
    },
  ];

  const handleInquiry = (packageTitle: string) => {
    const message = encodeURIComponent(`Hi Cyber Enterprises, I'm interested in the ${packageTitle}. Can we discuss more?`);
    window.open(`https://wa.me/918925693013?text=${message}`, '_blank');
  };

  return (
    <section id="services" className="py-32 px-6">
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
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-8 rounded-[2.5rem] border transition-all group relative overflow-hidden ${
                service.isHighlight 
                  ? "bg-brand-charcoal text-brand-offwhite border-brand-charcoal" 
                  : "bg-white border-brand-charcoal/5 hover:border-brand-gold/30 hover:shadow-2xl hover:shadow-brand-gold/5"
              }`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-8 ${
                service.isHighlight ? "bg-brand-gold/20" : "bg-brand-charcoal/5 group-hover:bg-brand-gold/10"
              }`}>
                <service.icon className={`w-6 h-6 ${service.isHighlight ? "text-brand-gold" : "text-brand-charcoal group-hover:text-brand-gold"}`} />
              </div>
              
              <h3 className="text-2xl mb-4 serif italic">{service.title}</h3>
              <p className={`mb-8 leading-relaxed font-light text-sm ${
                service.isHighlight ? "text-brand-offwhite/70" : "text-brand-charcoal/60"
              }`}>
                {service.description}
              </p>

              <a 
                href={`https://wa.me/918925693013?text=${encodeURIComponent(`Hi Cyber Enterprises, I'm interested in the ${service.title}. Can we discuss more?`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer ${
                  service.isHighlight 
                    ? "text-brand-gold hover:text-brand-offwhite" 
                    : "text-brand-charcoal hover:text-brand-gold"
                }`}
              >
                {t.services.cta} <MessageCircle className="w-4 h-4 fill-current" />
              </a>

              {service.isHighlight && (
                <div className="absolute top-6 right-6 px-3 py-1 bg-brand-gold text-brand-charcoal text-[10px] font-bold uppercase tracking-widest rounded-full">
                  Trial
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
