import { useLanguage } from "./LanguageContext";
import { motion } from "motion/react";
import { Target, ShoppingBag, Zap, Calendar, User, MessageSquareCode } from "lucide-react";

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
              className="p-8 rounded-[2.5rem] border transition-all group relative overflow-hidden bg-white border-brand-charcoal/5 hover:border-brand-gold/30 hover:shadow-2xl hover:shadow-brand-gold/5 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-8 bg-brand-charcoal/5 group-hover:bg-brand-gold/10">
                  <service.icon className="w-6 h-6 text-brand-charcoal group-hover:text-brand-gold" />
                </div>
                
                <h3 className="text-2xl mb-4 serif italic">{service.title}</h3>
                <p className="leading-relaxed font-light text-sm text-brand-charcoal/60 mb-8">
                  {service.description}
                </p>
              </div>

              <div className="pt-4 border-t border-brand-charcoal/5 mt-auto">
                <button
                  onClick={() => handleInquiry(service.title)}
                  className="text-xs font-bold uppercase tracking-widest text-brand-charcoal hover:text-brand-gold transition-all duration-300 inline-flex items-center gap-1.5 cursor-pointer group/btn"
                >
                  {language === 'ta' ? "உத்தியை ஆராயுங்கள்" : "Explore Strategy"}
                  <span className="transform group-hover/btn:translate-x-1 transition-transform inline-block">&rarr;</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
