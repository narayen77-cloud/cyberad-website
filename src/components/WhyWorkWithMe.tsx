import { useLanguage } from "./LanguageContext";
import { ShieldCheck, Award, Users, Target, Building2 } from "lucide-react";
import residentialImage from "../assets/images/vertical_residential.jpg";
import commercialImage from "../assets/images/vertical_commercial.jpg";
import marketingImage from "../assets/images/vertical_marketing.jpg";

export function WhyWorkWithMe() {
  const { language } = useLanguage();
  const lang = (language as "en" | "ta" | "es") || "en";

  const bullets = [
    {
      icon: Target,
      title: {
        en: "Business-First Approach",
        ta: "வணிகம் சார்ந்த அணுகுமுறை",
        es: "Enfoque de Negocios Primero"
      },
      desc: {
        en: "We focus on measurable results, qualified leads, and practical marketing strategies that support real business growth.",
        ta: "வணிக வளர்ச்சிக்கு ஆதரவளிக்கும் நடைமுறை உத்திகள், தகுதியான லீட்கள் மற்றும் அளவிடக்கூடிய முடிவுகளில் மட்டுமே கவனம் செலுத்துகிறோம்.",
        es: "Nos enfocamos en resultados medibles, prospectos calificados y estrategias prácticas de marketing que impulsan un crecimiento comercial real."
      }
    },
    {
      icon: Award,
      title: {
        en: "30+ Years of Business Experience",
        ta: "30+ ஆண்டுகால வணிக அனுபவம்",
        es: "Más de 30 Años de Experiencia Comercial"
      },
      desc: {
        en: "Combining decades of business experience with modern digital marketing to help real estate businesses grow.",
        ta: "ரியல் எஸ்டேட் வணிகங்களை வளர்க்க பல தசாப்த கால வணிக அனுபவத்துடன் நவீன டிஜிட்டல் மார்க்கெட்டிங்கை இணைக்கிறோம்.",
        es: "Combinamos décadas de experiencia empresarial con marketing digital moderno para ayudar a crecer a los negocios inmobiliarios."
      }
    },
    {
      icon: Building2,
      title: {
        en: "Real Estate Focus",
        ta: "ரியல் எஸ்டேட் துறைக்கான கவனம்",
        es: "Especialización Inmobiliaria"
      },
      desc: {
        en: "Specialized digital marketing solutions designed exclusively for property sales, rentals, residential projects, commercial developments, and land marketing.",
        ta: "குடியிருப்பு திட்டங்கள், வணிக மேம்பாடுகள், நில விற்பனை மற்றும் வாடகை போன்ற தேவைகளுக்கு வடிவமைக்கப்பட்ட பிரத்யேக டிஜிட்டல் மார்க்கெட்டிங் தீர்வுகள்.",
        es: "Soluciones de marketing digital especializado, diseñadas exclusivamente para venta de propiedades, alquileres, desarrollos residenciales, comerciales y terrenos."
      }
    },
    {
      icon: Users,
      title: {
        en: "Dedicated Project Management",
        ta: "பிரத்தியேக திட்ட மேலாண்மை",
        es: "Gestión de Proyectos Dedicada"
      },
      desc: {
        en: "Every project is managed with personal attention, clear communication, and a single point of contact from planning to execution.",
        ta: "ஒவ்வொரு திட்டமும் திட்டமிடல் முதல் செயல்முறை வரை தனிப்பட்ட கவனம், தெளிவான தகவல் தொடர்பு மற்றும் ஒரே ஒரு தொடர்பு புள்ளி மூலம் நிர்வகிக்கப்படுகிறது.",
        es: "Cada proyecto se gestiona con atención personalizada, comunicación clara y un único punto de contacto desde la planificación hasta la ejecución."
      }
    }
  ];

  const highlights = [
    { labelEn: "Real Estate Lead Funnels", labelTa: "ரியல் எஸ்டேட் லீட் புனல்கள்", labelEs: "Embudos Inmobiliarios" },
    { labelEn: "Online Property Portals", labelTa: "முன்னணி சொத்து இணையதளங்கள் (Portals)", labelEs: "Portales Inmobiliarios" },
    { labelEn: "Search & Social Media Ads", labelTa: "தேடு பொறி & சமூக வலைத்தள விளம்பரங்கள்", labelEs: "Anuncios en Redes y Buscadores" }
  ];

  const galleryItems = [
    {
      img: residentialImage,
      title: {
        en: "Residential Developments",
        ta: "குடியிருப்பு திட்டங்கள்",
        es: "Proyectos Residenciales"
      },
      desc: {
        en: "High-converting search ads and immersive project landing pages.",
        ta: "வாங்குபவர்களைக் கவரும் பிரத்யேக லேண்டிங் பக்கங்கள்.",
        es: "Páginas de aterrizaje inmersivas y campañas de conversión."
      }
    },
    {
      img: commercialImage,
      title: {
        en: "Commercial & Office Spaces",
        ta: "வணிக மற்றும் அலுவலக இடங்கள்",
        es: "Espacios Comerciales y Oficinas"
      },
      desc: {
        en: "Connecting developers with premium corporate investors and buyers.",
        ta: "பெரும் கார்ப்பரேட் முதலீட்டாளர்களை ஈர்க்கும் உத்திகள்.",
        es: "Conectando constructores con inversores corporativos premium."
      }
    },
    {
      img: marketingImage,
      title: {
        en: "Online Portal Marketing",
        ta: "சொத்து இணையதள விளம்பரம்",
        es: "Marketing de Portales Online"
      },
      desc: {
        en: "Maximizing listing visibility and automating live lead capture.",
        ta: "முன்னணி போர்டல் விளம்பரங்கள் மற்றும் தானியங்கி லீட் மேனேஜ்மெண்ட்.",
        es: "Maximizando visibilidad de anuncios y captura de prospectos."
      }
    }
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
              <h2 className={`serif font-normal text-brand-offwhite leading-tight ${
                lang === "ta" 
                  ? "text-3xl md:text-4xl lg:text-5xl" 
                  : "text-4xl md:text-5xl lg:text-6xl"
              }`}>
                {lang === "ta" ? "சொத்து உரிமையாளர்கள் எங்களை ஏன் தேர்ந்தெடுக்கிறார்கள்?" : lang === "es" ? "Por qué los Propietarios nos Eligen" : "Why Property Owners Choose Us"}
              </h2>
              <p className="text-sm md:text-base text-brand-offwhite/70 font-light leading-relaxed">
                {lang === "ta"
                  ? "நாங்கள் பில்டர்கள், டெவலப்பர்கள், நில உரிமையாளர்கள் மற்றும் ரியல் எஸ்டேட் வல்லுநர்களுக்கு தொழில்நுட்ப மார்க்கெட்டிங், இலக்கு விளம்பரங்கள் மற்றும் பிரத்யேக இணையதளங்கள் மூலம் தகுதியான லீட்களைப் பெற உதவுகிறோம்."
                  : lang === "es"
                  ? "Ayudamos a constructores, desarrolladores, propietarios de tierras y profesionales de bienes raíces a generar consultas calificadas mediante marketing tecnológico, campañas segmentadas y experiencias digitales de alta conversión."
                  : "We help builders, developers, landowners, and real estate professionals generate qualified enquiries through technology-driven marketing, targeted campaigns, and high-converting digital experiences."}
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

        {/* Dynamic Image Gallery Row */}
        <div className="mt-20 pt-16 border-t border-white/10">
          <div className="mb-10 text-center lg:text-left">
            <span className="text-[10px] font-mono tracking-widest text-brand-gold uppercase block mb-2">
              {lang === "ta" ? "காட்சிப் படங்கள்" : lang === "es" ? "GALERÍA VISUAL" : "VISUAL SHOWCASE"}
            </span>
            <h3 className="text-2xl md:text-3xl font-serif text-brand-offwhite tracking-tight">
              {lang === "ta" ? "உயர் செயல்திறன் கொண்ட ரியல் எஸ்டேட் பிரிவுகள்" : lang === "es" ? "Segmentos de Alto Rendimiento" : "High-Performance Property Verticals"}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <div 
                key={index}
                className="group relative h-80 rounded-3xl overflow-hidden border border-white/10 bg-white/5 transition-all hover:border-brand-gold/40 flex flex-col justify-end"
              >
                {/* Image overlay */}
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/40 to-transparent mix-blend-multiply opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                <img 
                  src={item.img} 
                  alt={item.title[lang] || item.title.en}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover z-0 scale-102 group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Info Overlay */}
                <div className="p-6 relative z-20 space-y-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-block px-2.5 py-1 bg-brand-gold/20 backdrop-blur-md rounded-lg text-[9px] font-mono text-brand-gold tracking-wider uppercase mb-1">
                    {lang === "ta" ? "துறை" : lang === "es" ? "SECTOR" : "ACTIVE VERTICAL"}
                  </span>
                  <h4 className="text-lg md:text-xl font-serif text-brand-offwhite tracking-tight">
                    {item.title[lang] || item.title.en}
                  </h4>
                  <p className="text-xs font-light text-brand-offwhite/70 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-2">
                    {item.desc[lang] || item.desc.en}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
