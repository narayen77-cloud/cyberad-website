import { useLanguage } from "./LanguageContext";
import { motion } from "motion/react";
import { ExternalLink, Globe, Laptop, ArrowUpRight, CheckCircle2 } from "lucide-react";

interface BuildItem {
  id: string;
  url: string;
  categoryKey: string;
  title: string;
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
    id: "stfathima",
    url: "https://stfathima.netlify.app/",
    categoryKey: "education",
    title: "St. Fathima Allied Health Institute",
    description: {
      en: "A dedicated healthcare education platform providing structured information on DMLT and allied health courses, fees, and admission paths for aspiring medical professionals.",
      ta: "மாணவர்களுக்கு DMLT மற்றும் அதன் சார்ந்த மருத்துவக் கல்வி விவரங்கள், கட்டண முறைகள் மற்றும் சேர்க்கை வழிகளை வழங்கும் பிரத்யேக சுகாதாரக் கல்வி இணையதளம்.",
      es: "Una plataforma educativa dedicada al área de la salud que proporciona información estructurada sobre cursos de DMLT, tarifas y vías de admisión para futuros profesionales médicos."
    },
    metrics: {
      en: ["Allied Health Programs", "Structured Fees Directory", "Dynamic Admission Path"],
      ta: ["துணை மருத்துவப் படிப்புகள்", "கட்டண விவரங்கள்", "எளிதான சேர்க்கை வழி"],
      es: ["Programas de Salud", "Estructura de Tarifas", "Ruta de Admisión Directa"]
    },
    screenshotHint: "Healthcare Education Platform"
  },
  {
    id: "mihirasolar",
    url: "https://mihirasolar.com/",
    categoryKey: "solar",
    title: "Mihira Solar",
    description: {
      en: "A professional clean-energy business website showcasing sustainable solar installation services, product structures, and cost-effective renewable energy solutions for residential and commercial clients.",
      ta: "வீடுகள் மற்றும் வணிக நிறுவனங்களுக்குத் தேவையான சூரிய மின்சக்தி அமைப்புகள், தயாரிப்பு விவரங்கள் மற்றும் செலவு குறைந்த கட்டமைப்பு முறைகளை விளக்கும் இணையதளம்.",
      es: "Un sitio web profesional de energía limpia que presenta servicios de instalación solar sostenible, estructuras de productos y soluciones rentables para clientes residenciales y comerciales."
    },
    metrics: {
      en: ["Sustainable Solar Setup", "Residential & Commercial", "Cost-effective Energy Solutions"],
      ta: ["சூரிய ஆற்றல் அமைப்புகள்", "வீடு & வணிக பயன்பாடு", "செலவு குறைந்த தீர்வ بیاடுகள்"],
      es: ["Instalación Solar Sostenible", "Residencial y Comercial", "Energía Rentable"]
    },
    screenshotHint: "Clean-Energy Business Website"
  },
  {
    id: "veenussindia",
    url: "https://veenussindia.com/",
    categoryKey: "industrial",
    title: "Veenuss Aesthetics",
    description: {
      en: "A premium business platform designed for Veenuss Aesthetics, highlighting advanced beauty treatments, clinical skincare services, and specialized wellness solutions.",
      ta: "மேம்பட்ட அழகு சிகிச்சைகள், மருத்துவ ரீதியான சருமப் பராமரிப்பு சேவைகள் மற்றும் பிரத்யேக ஆரோக்கிய தீர்வுகளை முன்னிலைப்படுத்தும் வீனஸ் அழகியல் தளம்.",
      es: "Una plataforma de negocios premium diseñada para Veenuss Aesthetics, destacando tratamientos de belleza de vanguardia, servicios clínicos de cuidado de la piel y soluciones de bienestar especializadas."
    },
    metrics: {
      en: ["Advanced Beauty Treatments", "Clinical Skincare Solutions", "Specialized Wellness Plans"],
      ta: ["மேம்பட்ட அழகு சிகிச்சைகள்", "மருத்துவ சருமப் பராமரிப்பு", "சிறப்பு ஆரோக்கிய முறைகள்"],
      es: ["Tratamientos de Belleza", "Cuidado Clínico de Piel", "Soluciones de Bienestar"]
    },
    screenshotHint: "Aesthetics & Wellness Platform"
  },
  {
    id: "aksharavidya",
    url: "https://aksharavidyaashram-admission.netlify.app/",
    categoryKey: "admission",
    title: "Akshara Vidyaashram Admissions",
    description: {
      en: "A streamlined institutional portal built specifically to manage school admissions, showcase campus features, and guide parents through the enrollment process.",
      ta: "பள்ளி மாணவர் சேர்க்கையை நெறிப்படுத்தவும், வளாகச் சிறப்புகளை விளக்கிப் பெற்றோர்களுக்கு எளிய சேர்க்கை வழிகாட்டியாகவும் உருவாக்கப்பட்ட தளம்.",
      es: "Un portal institucional optimizado diseñado específicamente para gestionar las admisiones escolares, exhibir las instalaciones del campus y guiar a los padres en el proceso de inscripción."
    },
    metrics: {
      en: ["Streamlined School Enrollment", "Campus Features Showcase", "Step-by-Step Parent Guidance"],
      ta: ["எளிதான சேர்க்கை நுழைவாயில்", "வளாக வசதிகள் காட்சி", "பெற்றோர்களுக்கான வழிகாட்டி"],
      es: ["Admisión Escolar Simplificada", "Instalaciones del Campus", "Guía Paso a Paso para Padres"]
    },
    screenshotHint: "Institutional Admission Portal"
  }
];

export function SampleBuilds() {
  const { language: rawLanguage, t } = useLanguage();
  const lang = (rawLanguage as string) === "es" ? "es" : (rawLanguage as string) === "ta" ? "ta" : "en";

  const tBuilds = t.builds || {
    title: "Featured Realizations",
    subtitle: "High-performance digital products engineered to solve complex delivery and scale challenges.",
    visit: "Launch Live Site",
    categories: {
      education: "Education Portal",
      solar: "Solar & Renewable Systems",
      industrial: "Industrial Manufacturing Showcase",
      admission: "Interactive Admission Systems"
    }
  };

  return (
    <section id="sample-builds" className="py-24 px-6 bg-brand-offwhite border-t border-brand-charcoal/5 relative overflow-hidden">
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

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {BUILDS.map((build, index) => {
            const catLabel = tBuilds.categories?.[build.categoryKey as keyof typeof tBuilds.categories] || build.categoryKey;
            
            return (
              <motion.div
                key={build.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white border border-brand-charcoal/5 rounded-[2rem] p-6 lg:p-8 flex flex-col justify-between hover:shadow-xl transition-all duration-500 overflow-hidden"
              >
                {/* Visual Glass Highlight */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full blur-2xl group-hover:bg-brand-gold/10 transition-colors" />

                <div>
                  {/* Category Card Header */}
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-gold bg-brand-gold/5 px-3 py-1 rounded-full border border-brand-gold/10">
                      {catLabel}
                    </span>
                    <span className="text-[10px] font-mono text-brand-charcoal/40 uppercase tracking-wider flex items-center gap-1">
                      <Globe className="w-3.5 h-3.5" />
                      {build.screenshotHint}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-serif italic text-brand-charcoal group-hover:text-brand-gold transition-colors duration-300 mb-3 flex items-center gap-1.5">
                    {build.title}
                  </h3>
                  
                  <p className="text-sm font-light text-brand-charcoal/70 leading-relaxed mb-6">
                    {build.description[lang] || build.description.en}
                  </p>

                  {/* Operational Metrics (Checks) */}
                  <div className="space-y-2 mb-8 pt-4 border-t border-brand-charcoal/5">
                    {(build.metrics[lang] || build.metrics.en).map((mObj, mIdx) => (
                      <div key={mIdx} className="flex items-center gap-2.5 text-xs font-light text-brand-charcoal/80">
                        <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                        <span>{mObj}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Action Link */}
                <div className="pt-4 mt-auto">
                  <a
                    href={build.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-6 py-3 bg-brand-charcoal hover:bg-brand-gold text-white hover:text-brand-charcoal rounded-full text-[11px] font-bold uppercase tracking-widest transition-all duration-300 shadow-sm"
                  >
                    <span>{tBuilds.visit || "Launch Live Site"}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
