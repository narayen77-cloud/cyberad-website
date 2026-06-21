import { useState, useEffect } from "react";
import { useLanguage } from "./LanguageContext";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const carouselImages = [
  {
    src: "/assets/hero_carousel_0.jpg",
    alt: "Social Media Marketing",
    title: {
      en: "Social Media Presence",
      ta: "சமூக ஊடக விளம்பரம்",
      es: "Presencia en Redes Sociales"
    },
    desc: {
      en: "Command authority, build community, and engage customers consistently.",
      ta: "உங்கள் பிராண்டை நுகர்வோரிடம் கொண்டு சேர்க்கும் சமூக ஊடக கட்டமைப்பு.",
      es: "Construya autoridad, comunidad y atraiga clientes de forma constante."
    }
  },
  {
    src: "/assets/hero_carousel_1.jpg",
    alt: "Blood Test Vial",
    title: {
      en: "Diagnostic & Health Tech Marketing",
      ta: "மருத்துவ தொழில்நுட்ப மார்க்கெட்டிங்",
      es: "Marketing de Tecnología Médica"
    },
    desc: {
      en: "High-impact lead generation campaigns built for specialized clinics.",
      ta: "மருத்துவமனைகள் மற்றும் லேப்களுக்கான பிரத்யேக விளம்பர உத்திகள்.",
      es: "Campañas de generación de leads de alto impacto para clínicas especializadas."
    }
  },
  {
    src: "/assets/hero_carousel_2.jpg",
    alt: "Digital Marketing Setup",
    title: {
      en: "Digital Strategy & Auditing",
      ta: "டிஜிட்டல் உத்திகள் & ஆலோசனைகள்",
      es: "Estrategia Digital y Auditoría"
    },
    desc: {
      en: "Targeted campaigns and data-driven funnels to maximize your ROI.",
      ta: "உங்கள் வணிக வளர்ச்சியை அதிகப்படுத்த உதவும் முறையான தரவு பகுப்பாய்வு.",
      es: "Campañas dirigidas y embudos basados en datos para maximizar su ROI."
    }
  },
  {
    src: "/assets/hero_carousel_3.jpg",
    alt: "Shopkeeper in store",
    title: {
      en: "Local Business Growth",
      ta: "உள்ளூர் வணிக வளர்ச்சி",
      es: "Crecimiento de Negocios Locales"
    },
    desc: {
      en: "Empowering traditional brick-and-mortar stores to scale online.",
      ta: "பாரம்பரிய கடைகள் மற்றும் வணிகங்களை ஆன்லைனில் எளிதாக விரிவுபடுத்துங்கள்.",
      es: "Empoderamos a las tiendas físicas tradicionales a escalar en línea."
    }
  },
  {
    src: "/assets/hero_carousel_4.jpg",
    alt: "Team business desk",
    title: {
      en: "Scale Operations & Revenue",
      ta: "வணிக ஆட்டோமேஷன் மற்றும் வருவாய்",
      es: "Operaciones a Escala e Ingresos"
    },
    desc: {
      en: "Streamline workflows, automate funnels, and scale revenue.",
      ta: "உங்கள் விற்பனையை தானியங்குப்படுத்தி அதிக லாபத்தை ஈட்டுங்கள்.",
      es: "Optimice los flujos de trabajo, automatice embudos y escale ingresos."
    }
  }
];

export function Hero() {
  const { language, t } = useLanguage();
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 px-4 sm:px-6 overflow-hidden min-h-[90vh] flex items-center">
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
            <h1 id="hero-title" className={`serif font-normal break-words sm:break-normal mb-6 md:mb-8 ${
              language === 'ta'
                ? "text-[21px] xs:text-2xl sm:text-3xl md:text-[38px] lg:text-[44px] leading-[1.35] md:leading-[1.25] tracking-normal"
                : "text-3xl sm:text-4xl md:text-5xl lg:text-[54px] leading-tight md:leading-[1.15] tracking-tighter"
            }`}>
              {t.hero.title}
            </h1>
            
            {/* Main Subheading (with bolded keywords) */}
            <p className={`text-brand-charcoal/80 mb-4 font-normal ${
              language === 'ta' 
                ? "text-sm sm:text-base leading-relaxed" 
                : "text-base sm:text-lg leading-relaxed"
            }`}>
              {language === 'en' ? (
                <>
                  We empower local enterprises with high-impact <strong className="font-bold text-brand-charcoal">automation</strong>, <strong className="font-bold text-brand-charcoal">multi-page websites</strong>, and <strong className="font-bold text-brand-charcoal">strategic marketing</strong> built to scale your revenue.
                </>
              ) : language === 'ta' ? (
                <>
                  உங்களது வணிகத்தை அதிவேகமாக வளர்க்கும் உயர்ரக <strong className="font-bold text-brand-charcoal">ஆட்டோமேஷன்</strong>, <strong className="font-bold text-brand-charcoal">வலைதளங்கள்</strong>, மற்றும் <strong className="font-bold text-brand-charcoal">மார்க்கெட்டிங் உத்திகளை</strong> நாங்கள் வழங்குகிறோம்.
                </>
              ) : (
                <>
                  Impulsamos las empresas locales con <strong className="font-bold text-brand-charcoal">automatización</strong> de alto impacto, <strong className="font-bold text-brand-charcoal">sitios web multi-página</strong> y <strong className="font-bold text-brand-charcoal">marketing estratégico</strong> para escalar sus ingresos.
                </>
              )}
            </p>

            {/* Secondary Products List Subheading from brief */}
            <p className="text-xs sm:text-sm text-brand-charcoal/50 mb-8 md:mb-10 font-mono tracking-wide uppercase leading-relaxed">
              {language === 'ta'
                ? "இணையதளங்கள், கூகுள் விளம்பரங்கள், மெட்டா விளம்பரங்கள், வீடியோக்கள், விளக்கக்காட்சிகள், கட்டுரைகள் மற்றும் வணிக உதவி சேவைகள்."
                : language === 'es'
                ? "Sitios Web, Google Ads, Meta Ads, Videos, Presentaciones, Creación de Contenido y Servicios de Soporte."
                : "Websites, Google Ads, Meta Ads, Videos, Presentations, Content Creation and Business Support Services."}
            </p>


          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative aspect-[4/3] sm:aspect-[16/10] md:aspect-[4/3] w-full max-w-xl mx-auto md:max-w-none rounded-3xl overflow-hidden shadow-2xl mt-4 md:mt-0 group bg-brand-charcoal/10"
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={activeSlide}
              src={carouselImages[activeSlide].src}
              alt={carouselImages[activeSlide].alt}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </AnimatePresence>

          {/* Dark gradient overlay for caption readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/90 via-brand-charcoal/30 to-transparent" />

          {/* Caption text block overlay */}
          <div className="absolute bottom-6 left-6 right-6 p-5 backdrop-blur-md bg-brand-charcoal/40 border border-white/10 rounded-2xl">
            <span className="inline-block text-[9px] uppercase font-mono font-bold tracking-widest text-brand-gold bg-brand-gold/10 px-2 py-0.5 rounded-md mb-2">
              🔬 {language === "ta" ? "வளர்ச்சித் திட்டம்" : language === "es" ? "PLAN DE CRECIMIENTO" : "GROWTH STRATEGY"}
            </span>
            <h4 className="text-white font-serif italic text-base leading-snug">
              {carouselImages[activeSlide].title[language as "en" | "ta" | "es"] || carouselImages[activeSlide].title.en}
            </h4>
            <p className="text-xs text-white/75 mt-1 font-light leading-relaxed">
              {carouselImages[activeSlide].desc[language as "en" | "ta" | "es"] || carouselImages[activeSlide].desc.en}
            </p>
          </div>

          {/* Prev/Next manual button overlays */}
          <button
            onClick={() => setActiveSlide((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1))}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-brand-charcoal/40 hover:bg-brand-charcoal/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer border border-white/10 z-20"
            title="Previous Slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => setActiveSlide((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1))}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-brand-charcoal/40 hover:bg-brand-charcoal/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer border border-white/10 z-20"
            title="Next Slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dot indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
            {carouselImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  idx === activeSlide 
                    ? "bg-brand-gold w-3.5" 
                    : "bg-white/40 hover:bg-white/70 w-1.5"
                }`}
                title={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
