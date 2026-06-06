import { useLanguage } from "./LanguageContext";
import { motion } from "motion/react";
import { MessageCircle, Check, Sparkles } from "lucide-react";

interface ServicePack {
  title: { en: string; ta: string; es: string };
  price: string;
  subtitle: { en: string; ta: string; es: string };
  bullets: { en: string[]; ta: string[]; es: string[] };
}

const PACKAGES: ServicePack[] = [
  {
    title: {
      en: "Starter Website",
      ta: "ஸ்டார்டர் இணையதளம்",
      es: "Sitio Web Inicial"
    },
    price: "₹2,999",
    subtitle: {
      en: "Single-page professional website",
      ta: "ஒற்றைப் பக்க தொழில்முறை தளம்",
      es: "Sitio web comercial de una sola página"
    },
    bullets: {
      en: [
        "1 Fully custom web page",
        "Mobile-optimized design",
        "WhatsApp click-to-chat setup",
        "Includes basic design consultation",
        "Ready in 3 to 5 days"
      ],
      ta: [
        "1 தனிப்பயனாக்கப்பட்ட முழுமையானப் பக்கம்",
        "மொபைல் மற்றும் கணினிக்கு ஏற்ற வடிவமைப்பு",
        "நேரடி வாட்ஸ்அப் பட்டன் இணைப்பு",
        "அடிப்படை மார்க்கெட்டிங் ஆலோசனை",
        "3 முதல் 5 நாட்களில் தயார்"
      ],
      es: [
        "1 Página web completamente a la medida",
        "Optimizado para celulares y tablets",
        "Botón de chat directo de WhatsApp",
        "Consulta básica de conversión incluida",
        "Listo en 3 a 5 días hábiles"
      ]
    }
  },
  {
    title: {
      en: "Starter Ad Campaign",
      ta: "ஸ்டார்டர் விளம்பரப் பிரச்சாரம்",
      es: "Campaña de Anuncios Inicial"
    },
    price: "₹999 Setup",
    subtitle: {
      en: "Customer pays ad budgets separately",
      ta: "விளம்பரச் செலவு தனித்துக் கட்டப்பட வேண்டும்",
      es: "El cliente paga el gasto publicitario aparte"
    },
    bullets: {
      en: [
        "Meta or Google campaign setup",
        "Targeting & audience config",
        "1 Lead generation system setup",
        "WhatsApp integration with ad",
        "14 Days monitoring support"
      ],
      ta: [
        "மெட்டா அல்லது கூகுள் விளம்பர அமைப்பு",
        "இலக்கு பார்வையாளர்கள் குறியீடு",
        "1 உயர்நிலை வாடிக்கையாளர் ஈர்ப்பு விளம்பரம்",
        "நேரடி வாட்ஸ்அப் மெசேஜ் இணைப்பு",
        "14 நாட்கள் விளம்பரக் கண்காணிப்பு"
      ],
      es: [
        "Configuración en Meta Ads o Google Ads",
        "Segmentación y público objetivo exacto",
        "1 Anuncio dinámico para prospectos",
        "Integración de chat de WhatsApp con anuncio",
        "14 Días de monitoreo y soporte"
      ]
    }
  },
  {
    title: {
      en: "Introductory Flyer Trial",
      ta: "துண்டுப்பிரசுரம் (Flyers Offer)",
      es: "Prueba de Folletos"
    },
    price: "₹149",
    subtitle: {
      en: "We design 3 gorgeous digital flyers",
      ta: "3 உயர்தர விளம்பரத் துண்டுப்பிரசுரங்கள்",
      es: "Diseño de 3 volantes profesionales"
    },
    bullets: {
      en: [
        "3 Premium flyer design versions",
        "High-resolution digital formats",
        "Custom offers branding theme",
        "2 Fast design revisions",
        "Delivered in 48 hours"
      ],
      ta: [
        "3 உயர்தரத் தனித்துவ வடிவங்கள்",
        "அச்சிடத் தயாரான PDF மற்றும் படங்கள்",
        "உங்கள் கடையின் சிறப்புத் திட்டங்கள்",
        "2 வடிவ திருத்தங்கள் வரை",
        "48 மணிநேரத்திற்குள் விரைவான விநியோகம்"
      ],
      es: [
        "3 Versiones de volantes premium",
        "Alta resolución para impresión",
        "Temas personalizados de su negocio",
        "2 Rondas de cambios rápidos",
        "Entrega rápida en 48 horas"
      ]
    }
  }
];

export function TrialOffer() {
  const { language } = useLanguage();
  const lang = (language as "en" | "ta" | "es") || "en";

  const handleInquire = (pack: ServicePack) => {
    const txt = `Hi CyberAD, I'm interested in your Small Trial Offer: "${pack.title[lang]}" for ${pack.price}. Can we get started?`;
    window.open(`https://wa.me/918925693013?text=${encodeURIComponent(txt)}`, "_blank");
  };

  return (
    <section id="trial-offers" className="py-24 px-4 sm:px-6 bg-brand-offwhite border-t border-brand-charcoal/5 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-gold/10 text-brand-gold text-xs font-bold uppercase tracking-[0.25em] rounded-full">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>{lang === "ta" ? "சிறிய சோதனைச் சேவை" : lang === "es" ? "PRUEBA SIN COMPROMISO" : "SMALL TRIAL OFFER"}</span>
          </div>
          <h2 className="text-4xl md:text-6xl serif font-normal text-brand-charcoal">
            {lang === "ta" ? "சிறிய சோதனைச் சலுகைகள்" : lang === "es" ? "Ofertas Especiales de Prueba" : "Small Trial Offer"}
          </h2>
          <p className="text-sm md:text-base text-brand-charcoal/50 font-light max-w-xl mx-auto leading-relaxed">
            {lang === "ta"
              ? "எங்கள் திறனைச் சோதித்துப் பார்க்க எளிய மற்றும் மிகக் குறைந்த கட்டணத்தில் மூன்று ஸ்டார்டர் தொகுப்புகள் — எந்தவித உள்காரணங்களும் இன்றி."
              : lang === "es"
              ? "Pruebe la calidad de nuestro soporte técnico con tres ofertas iniciales de bajo precio y sin contratos a largo plazo."
              : "Test the caliber of our digital support before committing. No complex contracts, just solid first impressions."}
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PACKAGES.map((pack, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-[2.5rem] border border-brand-charcoal/5 p-8 flex flex-col justify-between hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
            >
              {/* Top gradient highlight */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-brand-gold/50 to-brand-gold group-hover:h-2 transition-all" />
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-serif text-brand-charcoal tracking-tight font-medium">
                    {pack.title[lang] || pack.title.en}
                  </h3>
                  <p className="text-xs font-light text-brand-charcoal/50 leading-relaxed mt-1">
                    {pack.subtitle[lang] || pack.subtitle.en}
                  </p>
                </div>

                <div className="py-4 border-y border-brand-charcoal/5">
                  <span className="text-3xl md:text-4xl font-serif font-bold text-brand-gold">
                    {pack.price}
                  </span>
                </div>

                <ul className="space-y-3">
                  {(pack.bullets[lang] || pack.bullets.en).map((bull, bidx) => (
                    <li key={bidx} className="flex items-start gap-2.5 text-xs md:text-sm font-light text-brand-charcoal/75">
                      <Check className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                      <span>{bull}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => handleInquire(pack)}
                  className="w-full py-3.5 bg-brand-charcoal hover:bg-brand-gold text-white hover:text-brand-charcoal rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow cursor-pointer flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>{lang === "ta" ? "வாட்ஸ்அப் மூலம் தொடர்புகொள்க" : lang === "es" ? "Pedir por WhatsApp" : "Inquire via WhatsApp"}</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
