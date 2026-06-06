import { useLanguage } from "./LanguageContext";
import { motion } from "motion/react";
import { Check, ShieldCheck, HeartHandshake, Briefcase, Award, Globe, Users, HardHat } from "lucide-react";

export function WhyWorkWithMe() {
  const { language } = useLanguage();
  const lang = (language as "en" | "ta" | "es") || "en";

  const bullets = [
    {
      icon: HeartHandshake,
      title: {
        en: "Honest and Direct",
        ta: "நேர்மையான மற்றும் நேரடியான அணுகுமுறை",
        es: "Honesto y Directo"
      },
      desc: {
        en: "No imaginary claims of a giant 200-person agency. No useless design trophies. We discuss results in clean, simple numbers.",
        ta: "நாங்கள் போலியான விளம்பரங்கள் அல்லது அவார்டுகள் பற்றிப் பேசுவதில்லை. எளிய தமிழில் நேரடி விற்பனை வாய்ப்புகள் பற்றி மட்டுமே பேசுவோம்.",
        es: "Sin falsas promesas de grandes agencias artificiales. Sin trofeos inútiles de diseño. Hablamos en resultados reales de negocio."
      }
    },
    {
      icon: Briefcase,
      title: {
        en: "30+ Years Business Experience",
        ta: "30+ ஆண்டுகால வணிக அனுபவம்",
        es: "Más de 30 Años de Experiencia Comercial"
      },
      desc: {
        en: "We understand how business actually operates, manage expenses, scale client retention, and secure cash flow.",
        ta: "ஒரு வணிகம் எவ்வாறு செயல்படுகிறது, வரவு செலவுகள் மற்றும் பணப்புழக்கத்தை எவ்வாறு சீரமைக்க வேண்டும் என்பதை நாங்கள் நன்கு அறிவோம்.",
        es: "Entendemos cómo opera un negocio tradicional, gestionamos presupuestos con cautela y cuidamos el flujo de caja."
      }
    },
    {
      icon: Globe,
      title: {
        en: "Worked with MNCs & Global Brands",
        ta: "MNCs மற்றும் சர்வதேச நிறுவனங்களோடு பணி",
        es: "Colaboración con Multinacionales"
      },
      desc: {
        en: "Benefit from system designs built for multinational corporations and international business exposure, scaled with care for local enterprises.",
        ta: "சர்வதேச அளவில் முன்னணி நிறுவனங்கள் மற்றும் MNCகளுக்கு வழங்கப்பட்ட உயர்தர டிஜிட்டல் வளர்ச்சி உத்திகள்.",
        es: "Benefíciese de metodologías de nivel corporativo internacional, adaptadas especialmente para pequeñas y medianas empresas."
      }
    },
    {
      icon: Users,
      title: {
        en: "One-Point Contact",
        ta: "ஒரே ஒரு தொடர்புப் புள்ளி (Single Point Contact)",
        es: "Canal de Contacto Único"
      },
      desc: {
        en: "No support tickets, no long waiting lines, and no junior interns. You coordinate your campaigns and operations directly with one expert.",
        ta: "எங்களிடம் பேசும் போது உங்களோடு ஒரு சர்வதேச அனுபவம் வாய்ந்த ஆலோசகர் மட்டுமே நேரடியாக தொடர்புகொள்வார் — இடைத்தரகர்கள் எவரும் இல்லை.",
        es: "Sin tickets de soporte, sin esperas y sin pasantes inexpertos. Coordina todo de manera directa y ágil con un especialista calificado."
      }
    }
  ];

  const highlights = [
    { labelEn: "Website Creation", labelTa: "இணையதள உருவாக்கம்", labelEs: "Creación de Sitios Web" },
    { labelEn: "Advertising Campaigns", labelTa: "விளம்பரப் பிரச்சாரங்கள்", labelEs: "Campañas Publicitarias" },
    { labelEn: "Content Creation", labelTa: "உள்ளடக்க வடிவமைப்பு", labelEs: "Creación de Contenido" }
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 bg-brand-charcoal text-brand-offwhite relative overflow-hidden">
      {/* Background radial effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text / Positioning Block */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-brand-gold uppercase block">
                {lang === "ta" ? "எங்கள் தனித்துவம்" : lang === "es" ? "NUESTRO RESPALDO" : "OUR POSITIONING"}
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl serif italic font-normal text-brand-offwhite leading-tight">
                {lang === "ta" ? "உங்கள் டிஜிட்டல் ஆதரவு பார்ட்னர்" : lang === "es" ? "Su Socio de Apoyo Digital" : "Your Digital Support Partner"}
              </h2>
              <p className="text-sm md:text-base text-brand-offwhite/60 font-light leading-relaxed">
                {lang === "ta"
                  ? "நாங்கள் ஆடம்பர வார்த்தைகளை உபயோகிக்கும் மார்க்கெட்டிங் ஏஜென்சி இல்லை; உங்கள் வணிகத்தை ஆட்டோமேஷன் மற்றும் விளம்பரங்கள் மூலம் உண்மையாக வளர்க்கும் உங்களது நேரடி ஆதரவு பங்குதாரர்."
                  : lang === "es"
                  ? "No somos una agencia convencional que complica de más las cosas. Actuamos como un equipo de soporte técnico integral integrado a su negocio."
                  : "We don't sell fancy marketing slides. We build solid software, manage conversions, set up systems, and act as your dedicated support coordinator."}
              </p>
            </div>

            {/* Outlined highlights */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              <span className="text-[10px] font-mono tracking-widest text-brand-offwhite/40 uppercase block">
                {lang === "ta" ? "நாங்கள் வழங்கும் முதன்மைப் பிரிவுகள்:" : lang === "es" ? "NUESTRAS ESPECIALIDADES CLAVE:" : "CORE DELIVERY CATEGORIES:"}
              </span>
              <div className="flex flex-wrap gap-2">
                {highlights.map((hl, index) => (
                  <span 
                    key={index} 
                    className="px-3.5 py-1.5 bg-white/5 border border-white/15 rounded-full text-xs font-mono text-brand-gold"
                  >
                    ✦ {lang === "ta" ? hl.labelTa : lang === "es" ? hl.labelEs : hl.labelEn}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Grid: 4 Core Features */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {bullets.map((b, index) => {
              const Icon = b.icon;
              return (
                <div 
                  key={index} 
                  className="p-6 md:p-8 bg-white/5 border border-white/10 rounded-2xl md:rounded-[2rem] space-y-4 hover:border-brand-gold/30 transition-colors"
                >
                  <div className="p-3 bg-brand-gold/15 text-brand-gold rounded-xl w-fit">
                    <Icon className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg md:text-xl font-serif text-brand-offwhite tracking-tight">
                      {b.title[lang] || b.title.en}
                    </h3>
                    <p className="text-xs md:text-xs font-light text-brand-offwhite/60 leading-relaxed">
                      {b.desc[lang] || b.desc.en}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
