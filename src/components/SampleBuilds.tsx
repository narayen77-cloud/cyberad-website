import { useLanguage } from "./LanguageContext";
import { motion } from "motion/react";
import { ExternalLink, Globe, Laptop, ArrowUpRight } from "lucide-react";

interface BuildItem {
  id: string;
  url: string;
  categoryKey: string;
  title: string;
  image: string;
  description: {
    en: string;
    ta: string;
    es: string;
  };
  metrics: {
    en: string[];
    ta: string[];
    es: string[];
  };
  screenshotHint: string;
}

const BUILDS: BuildItem[] = [
  {
    id: "mehrasolar",
    url: "https://mihirasolar.com/",
    categoryKey: "solar",
    title: "Mihira Renewable Energy",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=600&auto=format&fit=crop",
    description: {
      en: "A professional clean-energy business website showcasing sustainable solar installation services, product structures, and cost-effective renewable energy solutions.",
      ta: "வீடுகள் மற்றும் வணிக நிறுவனங்களுக்குத் தேவையான சூரிய மின்சக்தி அமைப்புகள் மற்றும் தயாரிப்பு விவரங்களை விளக்கும் இணையதளம்.",
      es: "Un sitio web profesional de energía limpia que presenta servicios de instalación solar sostenible, estructuras de productos y soluciones rentables."
    },
    metrics: {
      en: ["Sustainable Solar", "Energy Planning", "Responsive Design"],
      ta: ["சூரிய மின்சக்தி", "செலவுத் திட்டம்", "மொபைல் வடிவமைப்பு"],
      es: ["Energía Solar", "Planificación Rentable", "Diseño Responsive"]
    },
    screenshotHint: "Clean-Energy Business Website"
  },
  {
    id: "venusaesthetics",
    url: "https://veenussindia.com/",
    categoryKey: "clinical",
    title: "Veenuss Aesthetics",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=600&auto=format&fit=crop",
    description: {
      en: "A premium business platform designed for Veenuss Aesthetics, highlighting advanced beauty treatments, clinical skincare services, and specialized wellness solutions.",
      ta: "மேம்பட்ட அழகு சிகிச்சைகள், மருத்துவ ரீதியான சருமப் பராமரிப்பு சேவைகள் மற்றும் பிரத்தியேக ஆரோக்கிய தீர்வுகளை முன்னிலைப்படுத்தும் வீனஸ் அழகியல் தளம்.",
      es: "Una plataforma estética premium diseñada para destacar tratamientos de belleza avanzados y servicios de cuidado clínico de la piel."
    },
    metrics: {
      en: ["Skincare Highlight", "Clinical Presentation", "Inquiry Sync"],
      ta: ["சருமப் பாரமரிப்பு", "மருத்துவ அழகு", "வாட்ஸ்அப் பட்டன்"],
      es: ["Estética Avanzada", "Presentación Clínica", "Consulta Rápida"]
    },
    screenshotHint: "Aesthetics & Wellness Platform"
  },
  {
    id: "venusayush",
    url: "https://veenussindia.com/",
    categoryKey: "ayur",
    title: "Veenus Ayushcare Center",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=600&auto=format&fit=crop",
    description: {
      en: "A clinical portal showcasing traditional herbal wisdom combined with modern diagnostic approaches for organic recovery and wellness.",
      ta: "பாரம்பரிய ஆயுர்வேத மற்றும் இயற்கை மருத்துவத்தின் நன்மைகளை எடுத்துரைக்கும் ஒரு மருத்துவ இணையதளம்.",
      es: "Un portal clínico de bienestar que presenta la sabiduría de la medicina tradicional para una recuperación orgánica y saludable."
    },
    metrics: {
      en: ["Organic Therapy", "Holistic Treatment", "Easy Delivery"],
      ta: ["இயற்கை சிகிச்சை", "முழுமையான மருத்துவம்", "எளிதான தொடர்பு"],
      es: ["Terapias Orgánicas", "Tratamiento Holístico", "Clínica Ágil"]
    },
    screenshotHint: "Holistic Health Care Website"
  },
  {
    id: "cyberadwebsite",
    url: "https://cyberad.in/",
    categoryKey: "agency",
    title: "CyberAD Website",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
    description: {
      en: "Our own high-performance, clutter-free digital support partner platform built in simple language to scale offline businesses.",
      ta: "எங்களது சொந்த அதிநவீன மற்றும் எளிய மொழியில் அமைந்த இணையதளம்.",
      es: "Nuestra propia plataforma web de soporte digital construida sin jerga técnica para potenciar negocios tradicionales."
    },
    metrics: {
      en: ["Multi-Language", "Outcome-Driven", "No Technical Jargon"],
      ta: ["பன்மொழி வசதி", "விளைவுகள் வடிவம்", "எளிய மொழி"],
      es: ["Multi-Idioma", "Enfoque Ventas", "Cero Jerga"]
    },
    screenshotHint: "Your Digital Support Partner"
  }
];

export function SampleBuilds() {
  const { language: rawLanguage } = useLanguage();
  const lang = (rawLanguage as string) === "es" ? "es" : (rawLanguage as string) === "ta" ? "ta" : "en";

  const tBuilds = {
    title: lang === "ta" ? "சமீபத்திய படைப்புகள்" : lang === "es" ? "Trabajo Reciente" : "Recent Work",
    subtitle: lang === "ta" 
      ? "பாரம்பரிய வணிகங்களை வெற்றிகரமாக ஆன்லைனில் கொண்டு சேர்த்த எங்களது முந்தைய படைப்புகள்:" 
      : lang === "es" 
      ? "Portafolios activos y sistemas implementados que impulsan el crecimiento de negocios físicos:" 
      : "Pristine digital products built to empower traditional operations and maximize revenue. Look at our active creations:",
    visit: lang === "ta" ? "இணையதளத்தைப் பார்" : lang === "es" ? "Visitar Sitio" : "Launch Live Site",
    categories: {
      solar: lang === "ta" ? "சோலார் மின்சக்தி" : lang === "es" ? "Tecnología Solar" : "Solar Clean-Tech",
      clinical: lang === "ta" ? "அழகு சிகிச்சை" : lang === "es" ? "Clínica Estética" : "Aesthetics & Clinical",
      ayur: lang === "ta" ? "இயற்கை மருத்துவம்" : lang === "es" ? "Salud Ayush" : "Ayush Holistic Care",
      agency: lang === "ta" ? "தொழில்நுட்ப உதவி" : lang === "es" ? "Soporte de Agencia" : "Technical Support"
    }
  };

  return (
    <section id="sample-builds" className="py-24 px-4 sm:px-6 bg-brand-offwhite border-t border-brand-charcoal/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-gold/10 text-brand-gold text-xs font-bold uppercase tracking-[0.25em] rounded-full">
              <Laptop className="w-3 h-3" />
              <span>{lang === "ta" ? "நேரடி தயாரிப்புகள்" : lang === "es" ? "Portafolio Real" : "LIVE PRODUCTIONS"}</span>
            </div>
            <h2 className="text-4xl md:text-6xl serif italic tracking-tight text-brand-charcoal">
              {tBuilds.title}
            </h2>
            <p className="text-lg text-brand-charcoal/60 font-light leading-relaxed">
              {tBuilds.subtitle}
            </p>
          </div>
          
          <div className="hidden lg:block">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-charcoal/40 font-mono">
              {lang === "ta" ? "நிலை: 100% நேரடிச் செயல்பாடு" : lang === "es" ? "Estado: 100% Producción" : "STATUS: 100% DEPLOYED & ACTIVE"}
            </span>
          </div>
        </div>

        {/* Responsive Grid of Horizontal Split Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {BUILDS.map((build, index) => {
            const catLabel = tBuilds.categories?.[build.categoryKey as keyof typeof tBuilds.categories] || build.categoryKey;
            
            return (
              <motion.div
                key={build.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white border border-brand-charcoal/5 rounded-[2rem] hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col sm:flex-row h-full min-h-[220px]"
              >
                {/* Left/Top Image Section */}
                <div className="w-full sm:w-2/5 relative h-48 sm:h-auto min-h-[160px] overflow-hidden">
                  <img 
                    src={build.image} 
                    alt={build.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-brand-charcoal/10 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-0" />
                </div>

                {/* Right/Bottom Content Section */}
                <div className="w-full sm:w-3/5 p-6 flex flex-col justify-between relative z-10">
                  {/* Visual Glass Highlight */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gold/5 rounded-full blur-2xl group-hover:bg-brand-gold/10 transition-colors pointer-events-none" />

                  <div>
                    {/* Category Card Header */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[9px] font-bold uppercase tracking-widest text-brand-gold bg-brand-gold/5 px-2.5 py-0.5 rounded-full border border-brand-gold/10">
                        {catLabel}
                      </span>
                      <span className="text-[9px] font-mono text-brand-charcoal/40 uppercase tracking-wider flex items-center gap-0.5">
                        <Globe className="w-3 h-3" />
                        {build.screenshotHint}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-serif italic text-brand-charcoal group-hover:text-brand-gold transition-colors duration-300 mb-2">
                      {build.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-xs font-light text-brand-charcoal/70 leading-relaxed mb-4">
                      {build.description[lang] || build.description.en}
                    </p>

                    {/* Operational Metrics (Compact Badges) */}
                    <div className="flex flex-wrap gap-1.5 mb-4 pt-3 border-t border-brand-charcoal/5">
                      {(build.metrics[lang] || build.metrics.en).map((mObj, mIdx) => (
                        <span 
                          key={mIdx} 
                          className="text-[9px] font-mono bg-brand-charcoal/5 text-brand-charcoal/70 px-2 py-0.5 rounded"
                        >
                          {mObj}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Direct Action Link */}
                  <div className="pt-2">
                    <a
                      href={build.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-4 py-2 bg-brand-charcoal hover:bg-brand-gold text-white hover:text-brand-charcoal rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300 shadow-sm"
                    >
                      <span>{tBuilds.visit || "Launch Live Site"}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
