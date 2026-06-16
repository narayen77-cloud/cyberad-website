import { useLanguage } from "./LanguageContext";
import { motion } from "motion/react";

export function Industries() {
  const { t } = useLanguage();

  const industries = [
    {
      title: t.industries.education,
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop",
      span: "md:col-span-2",
    },
    {
      title: t.industries.solar,
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop",
      span: "md:col-span-1",
    },
    {
      title: t.industries.smallBusiness,
      image: "https://images.unsplash.com/photo-1556740734-75474a702e8d?q=80&w=2070&auto=format&fit=crop",
      span: "md:col-span-1",
    },
    {
      title: t.industries.premium,
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop",
      span: "md:col-span-2",
    },
  ];

  return (
    <section id="industries" className="py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl text-center mb-16 serif italic">{t.industries.title}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`relative h-[400px] rounded-3xl overflow-hidden group cursor-pointer ${industry.span}`}
            >
              <img 
                src={industry.image} 
                alt={industry.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10">
                <h3 className="text-3xl text-brand-offwhite serif italic">{industry.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
