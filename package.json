import { useLanguage } from "./LanguageContext";
import { motion } from "motion/react";
import { MessageSquare, ClipboardList, ThumbsUp, PlayCircle } from "lucide-react";

interface Step {
  num: string;
  icon: any;
  title: { en: string; ta: string; es: string };
  desc: { en: string; ta: string; es: string };
}

const STEPS: Step[] = [
  {
    num: "01",
    icon: MessageSquare,
    title: {
      en: "Tell us what you need",
      ta: "உங்கள் தேவையை எங்களிடம் கூறுங்கள்",
      es: "Cuéntenos lo que necesita"
    },
    desc: {
      en: "Select a package above or click to chat. We speak plain language, no agency jargon.",
      ta: "மேலே உள்ள பட்டனில் உங்களுக்குத் தேவையான சேவையைத் தேர்ந்தெடுங்கள் அல்லது எங்களிடம் பேசுங்கள்.",
      es: "Sencillamente elija una opción o inicie un chat. Hablamos claro, sin adornos."
    }
  },
  {
    num: "02",
    icon: ClipboardList,
    title: {
      en: "We prepare a plan & estimate",
      ta: "நாங்கள் தெளிவான கணக்கீடு செய்கிறோம்",
      es: "Preparamos un plan y cotización"
    },
    desc: {
      en: "You get a direct 1-page action timeline with a clear, fixed price estimate. No hidden fees.",
      ta: "உங்கள் பட்ஜெட்டிற்கு ஏத்த மிகத் தெளிவான, நிலையான கட்டண அறிக்கை மற்றும் கால அட்டவணை பெறுவீர்கள்.",
      es: "Recibe una propuesta directa de una sola página con precios fijos. Sin sorpresas."
    }
  },
  {
    num: "03",
    icon: ThumbsUp,
    title: {
      en: "You approve",
      ta: "நீங்கள் அங்கீகரித்தவுடன் தொடங்குவோம்",
      es: "Usted aprueba"
    },
    desc: {
      en: "We agree on results and dates. We keep contact straight with a single-point support coordinator.",
      ta: "நாங்கள் முடிவுகளையும் தேதிகளையும் முன்கூட்டியே முடிவு செய்கிறோம். நீங்கள் எப்போது வேண்டுமானாலும் எங்களைத் தொடர்புகொள்ளலாம்.",
      es: "Nos alineamos en fechas y resultados reales antes de arrancar."
    }
  },
  {
    num: "04",
    icon: PlayCircle,
    title: {
      en: "We start work",
      ta: "நாங்கள் வேலையைத் தொடங்குகிறோம்",
      es: "Comenzamos el trabajo"
    },
    desc: {
      en: "Your website goes online, campaigns deploy, and lead messages start coming to your phone.",
      ta: "உங்கள் வலைத்தளம் நேரலையாகும், விளம்பரங்கள் தொடங்கப்படும், வாடிக்கையாளர்கள் உங்களோடு பேசத் தொடங்குவார்கள்.",
      es: "Su portal se activa, lanzamos la campaña y los prospectos directos llegarán a su celular."
    }
  }
];

export function HowItWorks() {
  const { language } = useLanguage();
  const lang = (language as "en" | "ta" | "es") || "en";

  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 bg-white border-t border-brand-charcoal/5 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-brand-gold uppercase block">
            {lang === "ta" ? "எவ்வாறு செயல்படுகிறது?" : lang === "es" ? "EL PROCESO" : "SIMPLE COOPERATION"}
          </span>
          <h2 className="text-4xl md:text-6xl serif font-normal text-brand-charcoal">
            {lang === "ta" ? "இது எப்படிச் செயல்படுகிறது?" : lang === "es" ? "Cómo Funciona" : "How It Works"}
          </h2>
          <p className="text-sm md:text-base text-brand-charcoal/50 font-light max-w-lg mx-auto">
            {lang === "ta"
              ? "மிக எளிய மற்றும் வெளிப்படையான 4 படிகளில், உங்கள் வணிகத்திற்கான முழுமையான டிஜிட்டல் வளர்ச்சி உத்திகள்."
              : lang === "es"
              ? "Un proceso transparente y de confianza diseñado para mantener el control de su presupuesto."
              : "No massive agency paperwork. We keep our process simple, direct, and completely outcome-driven."}
          </p>
        </div>

        {/* Staggered Modern Cards Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group p-6 md:p-8 bg-brand-offwhite rounded-[2rem] border border-brand-charcoal/5 hover:border-brand-gold/30 hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 bg-brand-charcoal text-white rounded-xl group-hover:bg-brand-gold group-hover:text-brand-charcoal transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-2xl font-mono font-light text-brand-charcoal/25">
                      {step.num}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-serif tracking-tight text-brand-charcoal font-medium">
                    {step.title[lang] || step.title.en}
                  </h3>
                </div>

                <p className="text-xs md:text-sm font-light text-brand-charcoal/65 leading-relaxed pt-2">
                  {step.desc[lang] || step.desc.en}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
