import { useState } from "react";
import { useLanguage } from "./LanguageContext";
import { motion, AnimatePresence } from "motion/react";
import { 
  Users, Globe, FileText, Palette, FileSpreadsheet, 
  Video, Bot, ShieldCheck, ChevronDown, MessageSquare 
} from "lucide-react";

interface ServiceOption {
  icon: any;
  label: { en: string; ta: string; es: string };
  outcome: { en: string; ta: string; es: string };
  desc: { en: string; ta: string; es: string };
  suboptions: string[];
}

const SERVICES: ServiceOption[] = [
  {
    icon: Users,
    label: {
      en: "I Need More Customers",
      ta: "எனக்கு அதிக வாடிக்கையாளர்கள் தேவை (More Customers)",
      es: "Necesito más clientes"
    },
    outcome: {
      en: "Get More Customers",
      ta: "அதிக வாடிக்கையாளர்களைப் பெறுங்கள்",
      es: "Consiga más clientes"
    },
    desc: {
      en: "Launch target-driven advertising to fill your pipeline directly.",
      ta: "உங்கள் வணிகத்திற்கு நேரடியாக புதிய வாடிக்கையாளர்களை ஈர்க்கும் விளம்பரங்கள்.",
      es: "Lance publicidad segmentada para llenar su embudo de ventas directamente."
    },
    suboptions: ["Google Ads", "Facebook Ads", "Instagram Ads", "WhatsApp Campaigns"]
  },
  {
    icon: Globe,
    label: {
      en: "I Need A Website",
      ta: "எனக்கு இணையதளம் தேவை (Website)",
      es: "Necesito un sitio web"
    },
    outcome: {
      en: "Get Your Business Online",
      ta: "உங்கள் வணிகத்தை ஆன்லைனில் கொண்டு வாருங்கள்",
      es: "Ponga su negocio en línea"
    },
    desc: {
      en: "Establish your solid, high-performing digital retail location.",
      ta: "இணையத்தில் உங்கள் நிறுவனத்திற்கான தனித்துவமான முகவரி.",
      es: "Establezca una ubicación digital sólida y de alto rendimiento para su negocio."
    },
    suboptions: ["Business Website", "Personal Website", "Product Website", "Landing Page"]
  },
  {
    icon: FileText,
    label: {
      en: "I Need Content",
      ta: "எனக்கு உள்ளடக்கங்கள் தேவை (Content)",
      es: "Necesito contenido"
    },
    outcome: {
      en: "Get Professional Content",
      ta: "தொழில்முறை உள்ளடக்கங்களைப் பெறுங்கள்",
      es: "Obtenga contenido profesional"
    },
    desc: {
      en: "Turn casual readers into active buyers with clean, persuasive writing.",
      ta: "வாடிக்கையாளர்களைக் கவரும் வகையிலான எழுத்துக்கள் மற்றும் கட்டுரைகள்.",
      es: "Convierta lectores casuales en clientes activos con redacción persuasiva."
    },
    suboptions: ["Social Media Posts", "Blog Articles", "Product Descriptions", "Website Content"]
  },
  {
    icon: Palette,
    label: {
      en: "I Need Design Support",
      ta: "எனக்கு வடிவமைப்பு ஆதரவு தேவை (Design Support)",
      es: "Necesito soporte de diseño"
    },
    outcome: {
      en: "Get Professional Visuals",
      ta: "சிறந்த வடிவமைப்பு மற்றும் விளம்பரப் படங்கள்",
      es: "Obtenga recursos visuales profesionales"
    },
    desc: {
      en: "Deliver sharp real-world graphics that elevate offline visibility.",
      ta: "உள்ளூர் வணிகத்தை பிரபலமாக்கும் உயர்தர வடிவமைப்புப் பலகைகள் மற்றும் தாள்கள்.",
      es: "Entregue gráficos nítidos para el mundo real que eleven su visibilidad fuera de línea."
    },
    suboptions: ["Flyers", "Brochures", "Visiting Cards", "Posters"]
  },
  {
    icon: Video,
    label: {
      en: "I Need Video Support",
      ta: "எனக்கு வீடியோ வடிவமைப்பு தேவை (Video Support)",
      es: "Necesito soporte de video"
    },
    outcome: {
      en: "Engage Buyers with Video",
      ta: "வீடியோக்கள் மூலம் வாடிக்கையாளர்களை ஈர்க்கவும்",
      es: "Atraiga compradores con video"
    },
    desc: {
      en: "Aesthetic cinematic motion reels and corporate presentations of your setup.",
      ta: "உங்கள் வணிகத்தைப் பற்றிய கண்ணைக் கவரும் வீடியோக்கள் மற்றும் ரீல்ஸ்கள்.",
      es: "Reels cinematográficos estéticos y presentaciones corporativas de su negocio."
    },
    suboptions: ["Promotional Videos", "Product Videos", "Social Media Reels", "Corporate Videos"]
  },
  {
    icon: FileSpreadsheet,
    label: {
      en: "I Need a Pitch Deck / Presentation",
      ta: "எனக்கு பிட்ச் டெக் அல்லது விளக்கக்காட்சி தேவை (Pitch Deck / Presentation)",
      es: "Necesito un Pitch Deck o Presentación"
    },
    outcome: {
      en: "Pitch Your Business to Investors & Buyers",
      ta: "முதலீட்டாளர்கள் மற்றும் வாடிக்கையாளர்களை ஈர்க்கவும்",
      es: "Presente su negocio a inversores y compradores"
    },
    desc: {
      en: "Explain complex values in 20 seconds to strategic buyers with gorgeous pitches.",
      ta: "முதலீட்டாளர்கள் மற்றும் வாங்குபவர்களை ஈர்க்கும் உலகத்தரம் வாய்ந்த விளக்கக்காட்சிகள்.",
      es: "Explique valores complejos en 20 segundos a compradores estratégicos con diapositivas estéticas."
    },
    suboptions: ["Investor Pitch Deck", "Sales Presentation", "Company Profile", "Training Presentation"]
  },
  {
    icon: Bot,
    label: {
      en: "I Need Messaging Automation",
      ta: "எனக்கு தானியங்கி பதில்கள் தேவை (Automation)",
      es: "Necesito automatización de mensajes"
    },
    outcome: {
      en: "Automate Leads While You Sleep",
      ta: "வாடிக்கையாளர் உரையாடல்களை ஆட்டோமேஷன் செய்திடுங்கள்",
      es: "Automatice prospectos mientras duerme"
    },
    desc: {
      en: "No lead left behind. Instant responses via custom smart message systems.",
      ta: "24/7 பதிலளிக்கும் வாட்ஸ்அப் விளம்பர அமைப்புகள்.",
      es: "Ningún cliente se pierde. Respuestas instantáneas mediante sistemas de mensajería inteligente."
    },
    suboptions: ["WhatsApp Bots", "Auto-Responders", "Messaging Funnels", "Support Chats"]
  },
  {
    icon: ShieldCheck,
    label: {
      en: "I Need Business Support",
      ta: "எனக்கு வணிக ஆதரவு தேவை (Business Support)",
      es: "Necesito soporte empresarial"
    },
    outcome: {
      en: "Setup Strategic Growth Systems",
      ta: "வணிக உத்திகளை கட்டமைத்துக் கொள்ளுங்கள்",
      es: "Configure sistemas de crecimiento estratégico"
    },
    desc: {
      en: "One-on-one expert audit, scaling pathways, and conversion optimization.",
      ta: "உங்கள் வணிக வளர்ச்சிக்கான நேரடி ஆலோசனைகள் மற்றும் திட்டமிடல்.",
      es: "Auditoría experta uno a uno, rutas de escalado y optimización de conversión."
    },
    suboptions: ["Brand Consulting", "One-on-One Audits", "Scaling Strategy", "Performance Tracking"]
  }
];

export function WhatDoYouNeed() {
  const { language } = useLanguage();
  const lang = (language as "en" | "ta" | "es") || "en";
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleInquire = (srv: ServiceOption, sub?: string) => {
    const selectedText = sub ? `${srv.outcome[lang]} -> ${sub}` : srv.outcome[lang];
    const message = encodeURIComponent(
      `Hi CyberAD, I checked your website and I need help with: ${selectedText}. Can we connect?`
    );
    window.open(`https://wa.me/918925693013?text=${message}`, "_blank");
  };

  return (
    <section id="services" className="py-24 px-4 sm:px-6 bg-white border-t border-brand-charcoal/5 relative">
      <div className="absolute top-0 inset-x-0 h-12 bg-gradient-to-b from-brand-charcoal/[0.01] to-transparent pointer-events-none" />
      
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-brand-gold uppercase block">
            {lang === "ta" ? "உங்கள் தேவை என்ன?" : lang === "es" ? "¿QUÉ NECESITA?" : "CHOOSE YOUR PATH"}
          </span>
          <h2 className="text-4xl md:text-6xl serif font-normal text-brand-charcoal pb-2">
            {lang === "ta" ? "நமக்கு என்ன தேவை?" : lang === "es" ? "¿Qué necesita hoy?" : "What Do You Need?"}
          </h2>
          <p className="text-sm md:text-base text-brand-charcoal/50 font-light max-w-lg mx-auto leading-relaxed">
            {lang === "ta" 
              ? "கீழே உள்ள 8 விருப்பங்களில் ஒன்றை தேர்வு செய்யுங்கள். எளிமையான நேர்மையான மொழியில் எங்களது தீர்வு."
              : lang === "es"
              ? "Seleccione una opción a continuación. Vendemos resultados claros sin complicaciones técnicas."
              : "Select any request below to see our direct real-world outcome with no technical jargon."}
          </p>
        </div>

        {/* 8 clickable large buttons in clean stack */}
        <div className="space-y-4">
          {SERVICES.map((srv, index) => {
            const isExpanded = expandedIndex === index;
            const Icon = srv.icon;

            return (
              <div 
                key={index}
                className={`border rounded-2xl md:rounded-[2rem] transition-all duration-300 overflow-hidden ${
                  isExpanded 
                    ? "bg-brand-charcoal text-brand-offwhite border-brand-charcoal shadow-lg" 
                    : "bg-brand-offwhite text-brand-charcoal border-brand-charcoal/5 hover:border-brand-gold/30 hover:bg-white"
                }`}
              >
                <button
                  type="button"
                  id={`srv-btn-${index}`}
                  onClick={() => handleToggle(index)}
                  className="w-full flex items-center justify-between p-5 md:p-7 text-left outline-none cursor-pointer group"
                >
                  <div className="flex items-center gap-4 md:gap-6">
                    <div className={`p-3 rounded-xl transition-all ${
                      isExpanded ? "bg-brand-gold/20 text-brand-gold" : "bg-brand-charcoal/5 text-brand-charcoal group-hover:bg-brand-gold/10 group-hover:text-brand-gold"
                    }`}>
                      <Icon className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div>
                      <span className="block text-xs font-mono font-medium opacity-50 uppercase tracking-widest mb-1">
                        {lang === "ta" ? `விருப்பம் 0${index + 1}` : lang === "es" ? `Opción 0${index + 1}` : `Selection 0${index + 1}`}
                      </span>
                      <h3 className="text-lg md:text-2xl font-serif tracking-tight">
                        {srv.label[lang] || srv.label.en}
                      </h3>
                    </div>
                  </div>
                  <ChevronDown className={`w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 opacity-60 ${
                    isExpanded ? "rotate-180 text-brand-gold" : ""
                  }`} />
                </button>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="p-5 md:p-7 pt-0 border-t border-brand-white/10 space-y-6">
                        <div className="space-y-2">
                          <div className="flex items-center gap-1.5 pt-4">
                            <span className="text-[10px] font-mono tracking-widest text-brand-gold uppercase font-bold">
                              {lang === "ta" ? "விற்பனை இலக்கு:" : lang === "es" ? "RESULTADO REAL:" : "REAL-WORLD OUTCOME:"}
                            </span>
                            <span className="text-xs font-mono lowercase text-brand-offwhite/40">
                              (instead of jargon)
                            </span>
                          </div>
                          <p className="text-xl md:text-2xl font-serif italic text-brand-gold">
                            "{srv.outcome[lang] || srv.outcome.en}"
                          </p>
                          <p className="text-xs md:text-sm font-light text-brand-offwhite/70 max-w-xl leading-relaxed">
                            {srv.desc[lang] || srv.desc.en}
                          </p>
                        </div>

                        {/* List suboptions */}
                        <div className="space-y-3">
                          <span className="text-[10px] font-mono tracking-widest text-brand-offwhite/40 uppercase block">
                            {lang === "ta" ? "வழங்கப்படும் சேவைகள்:" : lang === "es" ? "SERVICIOS ESPECÍFICOS:" : "WHAT WE COVER:"}
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {srv.suboptions.map((sub, sidx) => (
                              <button
                                key={sidx}
                                onClick={() => handleInquire(srv, sub)}
                                className="px-3.5 py-1.5 bg-brand-offwhite/10 hover:bg-brand-gold/20 hover:text-brand-gold border border-brand-offwhite/10 rounded-full text-[11px] md:text-xs font-mono font-medium text-brand-offwhite/80 transition-all cursor-pointer whitespace-nowrap"
                              >
                                {sub} ↗
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* WhatsApp primary check */}
                        <div className="pt-4 border-t border-brand-offwhite/10 flex flex-wrap gap-4 items-center justify-between">
                          <p className="text-[11px] font-mono text-brand-offwhite/40">
                            * {lang === "ta" ? "கட்டண விவரங்கள் வாட்ஸ்அப்பில உடனுக்குடன்" : lang === "es" ? "Presupuesto instantáneo vía WhatsApp" : "One-point contact: simple estimation."}
                          </p>
                          <button
                            onClick={() => handleInquire(srv)}
                            className="px-6 py-2.5 bg-brand-gold hover:bg-white text-brand-charcoal hover:text-brand-charcoal font-bold uppercase text-[10px] tracking-widest rounded-full transition-all cursor-pointer flex items-center gap-2 shadow"
                          >
                            <MessageSquare className="w-3.5 h-3.5" />
                            <span>{lang === "ta" ? "விசாரிக்கவும்" : lang === "es" ? "Pedir información" : "Inquire Now"}</span>
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
