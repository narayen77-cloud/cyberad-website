import { useEffect, useState } from "react";
import { useLanguage } from "../LanguageContext";
import { Link, useRouter } from "../RouterContext";
import { motion } from "motion/react";
import { 
  Cpu, Target, CheckCircle2, ArrowRight, Star, 
  MessageSquare, Sparkles, Shield, UserCheck, BarChart3, Mail, MapPin, Loader2, CheckCircle,
  ChevronDown, MessageSquareCode, Zap, Database, Megaphone, Search, Globe
} from "lucide-react";
import { trackEvent } from "../../lib/tracking";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import heroImg from "../../assets/images/hero-lead-generation.jpg";
import aiImg from "../../assets/images/whatsapp-automation.png";
import marketingImg from "../../assets/images/digital-marketing-services.png";

export default function Home() {
  const { language, t } = useLanguage();
  const lang = (language as "en" | "ta" | "es") || "en";
  const { navigate } = useRouter();

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
    trackEvent("faq_interaction", "Engagement", {
      faq_index: index,
      page: "Home AI Section",
      action: openFaq === index ? "close" : "open"
    });
  };

  const faqData = [
    {
      q: {
        en: "Are chatbots the only automation you provide?",
        ta: "ஆட்டோமேஷனில் சாட்போட்கள் மட்டுமே வழங்குகிறீர்களா?",
        es: "¿Los chatbots son la única automatización que ofrecen?"
      },
      a: {
        en: "No. Chatbots are simply one frontend interface. Behind the scenes, we engineer custom webhooks, secure API connectors, automated CRM sheets syncing, and serverless logic scripts that streamline all your manual operations.",
        ta: "இல்லை. சாட்போட்கள் என்பது ஒரு எளிய இடைமுகம் மட்டுமே. பின்புலத்தில், உங்கள் வணிக செயல்பாடுகளை எளிதாக்க தனிப்பயன் வெப்ஹூக்குகள், பாதுகாப்பான ஏபிஐ இணைப்பிகள் மற்றும் தரவு ஒத்திசைவு அமைப்புகளை உருவாக்குகிறோம்.",
        es: "No. Los chatbots son solo una interfaz frontal. En el fondo, diseñamos webhooks personalizados, conectores API seguros, sincronización automatizada de CRM y scripts lógicos sin servidor que agilizan sus operaciones."
      }
    },
    {
      q: {
        en: "Can you sync data with our existing CRM?",
        ta: "எங்கள் தற்போதைய CRM உடன் தரவை ஒத்திசைக்க முடியுமா?",
        es: "¿Pueden sincronizar datos con nuestro CRM existente?"
      },
      a: {
        en: "Yes. We design API pipelines to securely route lead, sales, and customer inquiry data to any major CRM platform or database system, keeping your sales team synchronized in real-time.",
        ta: "ஆம். உங்கள் விற்பனை குழுவிற்கு நிகழ்நேர தரவுகளை வழங்க, ஏதேனும் ஒரு முன்னணி CRM தளம் அல்லது தரவுத்தளத்துடன் பாதுகாப்பான ஏபிஐ இணைப்புகளை உருவாக்குகிறோம்.",
        es: "Sí. Diseñamos pipelines de API para enrutar de forma segura los datos de prospectos y ventas a cualquier CRM o sistema de base de datos importante, manteniendo a su equipo de ventas sincronizado."
      }
    }
  ];

  // Dynamic Schema Injection
  useEffect(() => {
    const orgSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Cyber Enterprises",
      "url": "https://cyberad.in",
      "logo": "https://cyberad.in/logo.png",
      "sameAs": [
        "https://www.facebook.com/share/1XHudMJnxJ/",
        "https://www.instagram.com/cyber_enterprises?igsh=MXJldmsxeHF1Mm5wNg=="
      ]
    };

    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Cyber Enterprises",
      "image": "https://cyberad.in/logo.png",
      "@id": "https://cyberad.in/#localbusiness",
      "url": "https://cyberad.in",
      "telephone": "+91-89256-93013",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "Tamil Nadu",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "11.7480",
        "longitude": "79.7714"
      }
    };

    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Cyber Enterprises",
      "url": "https://cyberad.in",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://cyberad.in/insights?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "home-schemas";
    script.innerHTML = JSON.stringify([orgSchema, localBusinessSchema, websiteSchema]);
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById("home-schemas");
      if (el) el.remove();
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !mobile) {
      setError(lang === "ta" ? "பெயர் மற்றும் கைபேசி எண் தேவை" : lang === "es" ? "Nombre y teléfono requeridos" : "Name and Mobile Number are required");
      return;
    }

    setSubmitting(true);
    setError(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: "07031dc1-f48b-40ea-909d-a5aeffee8b95",
          name,
          phone: mobile,
          email: email || "Not Provided",
          message: message || "No message entered",
          subject: `New Lead from Cyberad.in (Home): ${name}`
        })
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        
        // Firing tracking events
        if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
          (window as any).gtag("event", "generate_lead", {
            event_category: "Engagement",
            event_label: "Home Form Submission",
            lead_name: name,
            lead_email: email,
            lead_mobile: mobile
          });
        }

        if (typeof window !== "undefined" && typeof (window as any).fbq === "function") {
          (window as any).fbq("track", "Lead", {
            content_name: "Home Form Lead",
            content_category: "Lead Acquisition"
          });
        }

        trackEvent("lead_form_submission", "Conversions", {
          name,
          email,
          phone: mobile,
          source: "Home Contact Form"
        });

        navigate("/thank-you");
      } else {
        setError(data.message || "Something went wrong.");
      }
    } catch (err: any) {
      setError("Failed to submit. Please check your connection.");
    } finally {
      setSubmitting(false);
    }
  };

  const ctaClick = () => {
    trackEvent("cta_click", "Engagement", {
      placement: "Home Hero CTA",
      target: "/contact"
    });
  };

  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-44 md:pb-36 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-brand-offwhite via-brand-offwhite to-white">
        <div className="absolute top-20 right-[-10%] w-[50%] h-[50%] bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-10 left-[-10%] w-[45%] h-[45%] bg-brand-charcoal/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-6 space-y-8 z-10 text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-charcoal/5 border border-brand-charcoal/5 text-brand-charcoal/80 text-[10px] font-mono font-bold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5 text-brand-gold animate-spin" />
                {lang === "ta" ? "உங்கள் டிஜிட்டல் வளர்ச்சி பார்ட்னர்" : lang === "es" ? "SU SOCIO DE CRECIMIENTO DIGITAL" : "YOUR DIGITAL GROWTH PARTNER"}
              </span>

              <h1 className="serif font-bold text-brand-charcoal text-4xl sm:text-5xl lg:text-6xl leading-[1.15] tracking-tight">
                {lang === "ta" ? (
                  <>
                    அதிக லீட்களை உருவாக்குங்கள். <span className="serif italic text-brand-gold">அதிக விற்பனையை முடியுங்கள்.</span>
                  </>
                ) : lang === "es" ? (
                  <>
                    Genere más leads. <span className="serif italic text-brand-gold">Cierre más ventas.</span>
                  </>
                ) : (
                  <>
                    Generate More Leads. <br />
                    <span className="serif italic text-brand-gold">Close More Sales.</span>
                  </>
                )}
              </h1>

              <p className="text-base sm:text-lg text-brand-charcoal/80 font-normal max-w-xl leading-relaxed">
                {lang === "ta" ? (
                  "உங்கள் வணிக வளர்ச்சிக்கு உதவும் டிஜிட்டல் மார்க்கெட்டிங் மற்றும் AI ஆட்டோமேஷன்."
                ) : lang === "es" ? (
                  "Marketing digital y automatización de IA que ayudan a que su negocio crezca."
                ) : (
                  "Digital marketing and AI automation that help your business grow."
                )}
              </p>

              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <Link
                  to="#contact"
                  onClick={ctaClick}
                  className="px-8 py-4 bg-brand-charcoal hover:bg-brand-gold text-brand-offwhite hover:text-brand-charcoal rounded-full text-xs font-mono font-bold uppercase tracking-widest transition-all duration-300 shadow-lg shadow-brand-charcoal/10 hover:shadow-brand-gold/20 flex items-center gap-2 group cursor-pointer"
                >
                  <span>{lang === "ta" ? "இலவச ஆலோசனை பெறுங்கள்" : lang === "es" ? "Iniciar Consulta" : "Get Free Consultation"}</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="#services"
                  className="px-8 py-4 border border-brand-charcoal/10 hover:border-brand-gold text-brand-charcoal hover:text-brand-gold rounded-full text-xs font-mono font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer"
                >
                  {lang === "ta" ? "மேலும் அறிய" : lang === "es" ? "Saber Más" : "Learn More"}
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="md:col-span-6 relative">
            {/* Glow background */}
            <div className="absolute inset-0 -m-8 bg-brand-gold/10 rounded-[4.5rem] blur-3xl -z-10 animate-pulse pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full h-[450px] md:h-[550px] rounded-[3.5rem] overflow-hidden shadow-2xl border border-brand-charcoal/5"
            >
              <img 
                src={heroImg} 
                alt="Cyber Enterprises Lead Generation growth metrics and marketing strategy chart" 
                className="w-full h-full object-cover contrast-[1.03] hover:scale-105 transition-transform duration-700"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-5 backdrop-blur-md bg-brand-offwhite/10 border border-brand-offwhite/20 rounded-2xl">
                <p className="text-brand-offwhite font-serif italic text-xs sm:text-sm leading-snug">
                  "Technology shouldn't be a barrier. It should be your greatest leverage."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 1.5. Trusted By Bar */}
      <section className="py-10 border-y border-brand-charcoal/5 bg-brand-charcoal/[0.01]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">
            <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-brand-charcoal/40 uppercase text-center md:text-left shrink-0">
              {lang === "ta" ? "தொழில்முனைவோரால் நம்பப்படுகிறது" : lang === "es" ? "CON LA CONFIANZA DE EMPRESAS" : "TRUSTED BY LOCAL ENTERPRISES"}
            </span>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-xs font-serif italic font-semibold text-brand-charcoal/30">
              <span className="hover:text-brand-gold transition-colors duration-300">Mihira Energy</span>
              <span className="hover:text-brand-gold transition-colors duration-300">Veenuss Aesthetics</span>
              <span className="hover:text-brand-gold transition-colors duration-300">Dr. Narayanan's Portal</span>
              <span className="hover:text-brand-gold transition-colors duration-300">Ayushcare Systems</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Services Section */}
      <section id="services" className="py-28 px-4 sm:px-6 bg-white relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-brand-gold uppercase block">
              {lang === "ta" ? "எங்கள் சேவைகள்" : lang === "es" ? "QUÉ OFRECEMOS" : "CORE SERVICES"}
            </span>
            <h2 className="text-4xl md:text-5xl serif italic text-brand-charcoal">
              {lang === "ta" ? "உயர்-தாக்க வளர்ச்சி சேவைகள்" : lang === "es" ? "Especialidades de Alto Impacto" : "Premium Growth Services"}
            </h2>
            <p className="text-sm sm:text-base text-brand-charcoal/60 max-w-xl mx-auto font-light leading-relaxed">
              {lang === "ta" ? "உங்கள் தற்போதைய வணிக வளர்ச்சிக்கு தேவையான தீர்வைத் தேர்ந்தெடுக்கவும்." : lang === "es" ? "Seleccione la solución diseñada para adaptarse a su etapa operativa actual." : "Select the target solution designed to match your current operational stage."}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Service 1: AI Automation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-[2.5rem] bg-brand-charcoal border border-brand-gold/20 text-white flex flex-col justify-between hover:shadow-2xl hover:shadow-brand-gold/5 transition-all duration-300 group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 text-brand-gold flex items-center justify-center mb-8">
                  <Cpu className="w-6 h-6 animate-pulse" />
                </div>
                <h3 className="text-2xl font-serif italic text-brand-gold mb-4">
                  {lang === "ta" ? "AI ஆட்டோமேஷன்" : lang === "es" ? "Automatización con IA" : "AI Automation"}
                </h3>
                <p className="text-sm text-white/70 font-light leading-relaxed mb-8">
                  {lang === "ta" ? "24/7 வாடிக்கையாளர் தொடர்புகளைக் கையாளும் வாட்ஸ்அப் சாட்போட் மற்றும் கூகுள் ஷீட்ஸ் ஆட்டோமேஷன்." : lang === "es" ? "Chatbots inteligentes en la API de WhatsApp, sincronización automatizada con CRM y asistentes de venta activos 24/7." : "Smart WhatsApp API chatbots, automated CRM database sync, and 24/7 lead nurturing assistants."}
                </p>
              </div>
              <div className="pt-6 border-t border-white/10">
                <Link
                  to="#ai-automation"
                  className="text-xs font-mono font-bold uppercase tracking-widest text-brand-gold hover:text-white inline-flex items-center gap-1 group/link cursor-pointer"
                >
                  <span>{lang === "ta" ? "மேலும் அறிய" : lang === "es" ? "Saber Más" : "Learn More"}</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

            {/* Service 2: Digital Marketing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 rounded-[2.5rem] bg-brand-offwhite border border-brand-charcoal/5 flex flex-col justify-between hover:border-brand-gold/40 hover:shadow-2xl transition-all duration-300 group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-brand-charcoal/5 group-hover:bg-brand-gold/10 text-brand-charcoal group-hover:text-brand-gold flex items-center justify-center mb-8 transition-colors">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-serif italic text-brand-charcoal mb-4 group-hover:text-brand-gold transition-colors">
                  {lang === "ta" ? "டிஜிட்டல் மார்க்கெட்டிங்" : lang === "es" ? "Marketing Digital" : "Digital Marketing"}
                </h3>
                <p className="text-sm text-brand-charcoal/60 font-light leading-relaxed mb-8">
                  {lang === "ta" ? "கூகுள் மற்றும் மெட்டா விளம்பரங்கள் மூலமாக நிலையான விற்பனை வாய்ப்புகளை உருவாக்கும் மார்க்கெட்டிங் உத்திகள்." : lang === "es" ? "Campañas de publicidad optimizadas en Google y Meta junto con SEO local para generar un flujo constante de ventas." : "Data-driven Meta & Google Ads campaigns and local search optimization (SEO) to build consistent sales pipelines."}
                </p>
              </div>
              <div className="pt-6 border-t border-brand-charcoal/5">
                <Link
                  to="#digital-marketing"
                  className="text-xs font-mono font-bold uppercase tracking-widest text-brand-charcoal hover:text-brand-gold inline-flex items-center gap-1 group/link cursor-pointer"
                >
                  <span>{lang === "ta" ? "மேலும் அறிய" : lang === "es" ? "Saber Más" : "Learn More"}</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Why Choose CyberAd Section */}
      <section id="about" className="py-24 px-4 sm:px-6 bg-brand-charcoal text-brand-offwhite relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5 space-y-6">
              <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-brand-gold uppercase block">
                {lang === "ta" ? "ஏன் எங்களை தேர்ந்தெடுக்க வேண்டும்?" : lang === "es" ? "NUESTRA GARANTÍA" : "WHY CYBERAD"}
              </span>
              <h2 className="text-4xl md:text-5xl serif italic text-brand-offwhite leading-tight">
                {lang === "ta" ? "உண்மையான அனுபவம். உண்மையான முடிவுகள்." : lang === "es" ? "Experiencia Comercial Real, no Falsas Métricas." : "Real Business Experience. Measurable Results."}
              </h2>
              <p className="text-sm text-brand-offwhite/60 font-light leading-relaxed">
                {lang === "ta" ? "நாங்கள் ஆடம்பர வார்த்தைகளை உபயோகிக்கும் மார்க்கெட்டிங் ஏஜென்சி இல்லை; உங்கள் வணிகத்தை ஆட்டோமேஷன் மற்றும் விளம்பரங்கள் மூலம் வளர்க்கும் நேரடி வளர்ச்சி பங்குதாரர்." : lang === "es" ? "No vendemos reportes llenos de tecnicismos complejos. Diseñamos sistemas de software sólidos, gestionamos pautas y le garantizamos contacto directo con un experto." : "We don't sell fancy marketing slides. We build solid software, manage high-conversion campaigns, set up workflows, and act as your dedicated support coordinator."}
              </p>
            </div>

            <div className="md:col-span-7 grid sm:grid-cols-2 gap-6">
              <div className="p-6 bg-white/5 border border-white/10 rounded-3xl space-y-3">
                <div className="p-2 bg-brand-gold/15 text-brand-gold w-fit rounded-lg">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-serif italic text-brand-offwhite">
                  {lang === "ta" ? "30+ ஆண்டுகள் அனுபவம்" : lang === "es" ? "+30 Años de Experiencia" : "30+ Years Experience"}
                </h3>
                <p className="text-xs text-brand-offwhite/60 font-light leading-relaxed">
                  {lang === "ta" ? "ஒரு வணிகம் எவ்வாறு செயல்படுகிறது, வரவு செலவுகள் மற்றும் பணப்புழக்கத்தை எவ்வாறு சீரமைக்க வேண்டும் என்பதை நாங்கள் நன்கு அறிவோம்." : lang === "es" ? "Entendemos cómo opera un negocio tradicional, gestionamos presupuestos con cautela y cuidamos el flujo de caja." : "We understand how business actually operates, manage expenses, scale client retention, and secure cash flow."}
                </p>
              </div>

              <div className="p-6 bg-white/5 border border-white/10 rounded-3xl space-y-3">
                <div className="p-2 bg-brand-gold/15 text-brand-gold w-fit rounded-lg">
                  <UserCheck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-serif italic text-brand-offwhite">
                  {lang === "ta" ? "நேரடி ஆலோசகர் தொடர்பு" : lang === "es" ? "Contacto Directo Especializado" : "One-Point Contact"}
                </h3>
                <p className="text-xs text-brand-offwhite/60 font-light leading-relaxed">
                  {lang === "ta" ? "உங்களோடு ஒரு சர்வதேச அனுபவம் வாய்ந்த ஆலோசகர் மட்டுமே நேரடியாக தொடர்புகொள்வார் — இடைத்தரகர்கள் எவரும் இல்லை." : lang === "es" ? "Sin tickets de soporte, sin esperas y sin pasantes inexpertos. Coordina todo de manera directa y ágil con un especialista." : "No support tickets, no waiting lines, and no junior interns. You coordinate operations directly with a dedicated expert."}
                </p>
              </div>

              <div className="p-6 bg-white/5 border border-white/10 rounded-3xl space-y-3">
                <div className="p-2 bg-brand-gold/15 text-brand-gold w-fit rounded-lg">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-serif italic text-brand-offwhite">
                  {lang === "ta" ? "விளைவுகளில் மட்டுமே கவனம்" : lang === "es" ? "Enfoque en Resultados Reales" : "Pure Outcome Focus"}
                </h3>
                <p className="text-xs text-brand-offwhite/60 font-light leading-relaxed">
                  {lang === "ta" ? "தேவையற்ற விளம்பரக் குறியீடுகள் இல்லை; வாடிக்கையாளர் அழைப்புகள் மற்றும் விற்பனையில் மட்டுமே கவனம்." : lang === "es" ? "Medimos prospectos calificados, interacciones y aumento directo de ingresos, no impresiones sin valor." : "Zero vanity metrics. We focus strictly on verified leads, WhatsApp connection volume, and sales growth."}
                </p>
              </div>

              <div className="p-6 bg-white/5 border border-white/10 rounded-3xl space-y-3">
                <div className="p-2 bg-brand-gold/15 text-brand-gold w-fit rounded-lg">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-serif italic text-brand-offwhite">
                  {lang === "ta" ? "MNC உலகளாவிய தரம்" : lang === "es" ? "Calidad y Estilo Global" : "Global MNC Exposure"}
                </h3>
                <p className="text-xs text-brand-offwhite/60 font-light leading-relaxed">
                  {lang === "ta" ? "சர்வதேச அளவில் முன்னணி நிறுவனங்கள் மற்றும் MNCகளுக்கு வழங்கப்பட்ட உயர்தர டிஜிட்டல் வளர்ச்சி உத்திகள்." : lang === "es" ? "Benefíciese de metodologías de nivel corporativo internacional, adaptadas especialmente para pequeñas y medianas empresas." : "Benefit from system designs built for multinational corporations, scaled with care for local enterprises."}
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="col-span-full border-t border-white/10 my-12" />

            {/* Our Professional Standards / Values */}
            <div className="col-span-full space-y-12">
              <div className="text-center space-y-2">
                <span className="text-[9px] font-mono font-bold tracking-[0.3em] text-brand-gold uppercase block">
                  {lang === "ta" ? "எங்கள் மதிப்புகள்" : lang === "es" ? "NUESTROS VALORES" : "OUR STANDARDS"}
                </span>
                <h3 className="text-3xl serif italic text-brand-offwhite">
                  {lang === "ta" ? "தொழில்முறை நெறிமுறைகள்" : lang === "es" ? "Nuestros Estándares Profesionales" : "Our Professional Standards"}
                </h3>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="p-8 bg-white/5 border border-white/10 rounded-[2rem] space-y-4">
                  <h4 className="text-xl font-serif italic text-brand-gold">
                    {lang === "ta" ? "1. பயனுள்ள முடிவுகள்" : lang === "es" ? "1. Resultados Reales" : "1. Results That Matter"}
                  </h4>
                  <p className="text-xs text-brand-offwhite/60 font-light leading-relaxed">
                    {lang === "ta" ? (
                      "வருவாய், வாடிக்கையாளர்கள் மற்றும் புதிய வாய்ப்புகளை உருவாக்குவதில் மட்டுமே எங்கள் கவனம். வெற்று விளம்பரக் குறியீடுகளைத் தவிர்த்து, உண்மையான வளர்ச்சியைத் தருகிறோம்."
                    ) : lang === "es" ? (
                      "Nos enfocamos en generar consultas, clientes e ingresos reales. Cada sistema está diseñado para impactar su balance, no métricas de vanidad."
                    ) : (
                      "We focus on generating enquiries, customers, and revenue. Every campaign, workflow, and system we design is built to increase your bottom line, not just vanity metrics."
                    )}
                  </p>
                </div>

                <div className="p-8 bg-white/5 border border-white/10 rounded-[2rem] space-y-4">
                  <h4 className="text-xl font-serif italic text-brand-gold">
                    {lang === "ta" ? "2. நேர்மையான ஆலோசனை" : lang === "es" ? "2. Consejo Honesto" : "2. Honest Advice"}
                  </h4>
                  <p className="text-xs text-brand-offwhite/60 font-light leading-relaxed">
                    {lang === "ta" ? (
                      "உங்கள் வணிகத்திற்குப் பயனளிக்கும் உத்திகளை மட்டுமே பரிந்துரைப்போம். ஒரு தளம் உங்களுக்குப் பொருந்தவில்லை எனில், அதை நேரடியாக உங்களிடம் தெரிவிப்போம்."
                    ) : lang === "es" ? (
                      "Recomendamos solo lo que beneficia a su negocio. Si una plataforma o estrategia no genera retornos reales, se lo diremos directamente."
                    ) : (
                      "We recommend only what benefits your business. If a platform doesn't suit your target audience, or a strategy isn't yielding real returns, we tell you directly without agency jargon."
                    )}
                  </p>
                </div>

                <div className="p-8 bg-white/5 border border-white/10 rounded-[2rem] space-y-4">
                  <h4 className="text-xl font-serif italic text-brand-gold">
                    {lang === "ta" ? "3. நீண்ட கால பார்ட்னர்" : lang === "es" ? "3. Alianza a Largo Plazo" : "3. Long-Term Partnership"}
                  </h4>
                  <p className="text-xs text-brand-offwhite/60 font-light leading-relaxed">
                    {lang === "ta" ? (
                      "உங்கள் வணிகத்துடன் இணைந்து வளர்வதே எங்கள் நோக்கம். நீடித்த வாடிக்கையாளர் ஈர்ப்பு அமைப்புகள் மூலம் எதிர்கால வளர்ச்சியை உறுதி செய்கிறோம்."
                    ) : lang === "es" ? (
                      "Trabajamos con usted para mejorar y escalar a lo largo del tiempo. Construimos sistemas sostenibles de adquisición para respaldar su crecimiento futuro."
                    ) : (
                      "We work with you to improve and scale over time. From ad optimization to custom tech setups, we build sustainable customer acquisition systems that fuel future growth."
                    )}
                  </p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      {/* 4. Digital Marketing & Paid Acquisition Section */}
      <section id="digital-marketing" className="py-24 px-4 sm:px-6 bg-brand-offwhite text-brand-charcoal relative overflow-hidden border-t border-brand-charcoal/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 order-2 md:order-1">
            <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-brand-charcoal/5 shadow-2xl relative">
              <img 
                src={marketingImg} 
                alt="Digital marketing analytics chart dashboard on laptop screen" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-brand-charcoal/10" />
            </div>
          </div>

          <div className="md:col-span-7 space-y-6 text-left order-1 md:order-2">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-brand-gold/15 text-brand-gold text-[10px] font-mono font-bold uppercase tracking-wider rounded-full">
              <Target className="w-3.5 h-3.5" />
              Paid Acquisition & SEO
            </span>
            <h2 className="serif font-bold text-4xl sm:text-5xl leading-tight text-brand-charcoal">
              {lang === "ta" ? (
                <>
                  விளம்பர உத்திகள் மூலம் <span className="serif italic text-brand-gold">விற்பனை பெருக்குதல்</span>
                </>
              ) : lang === "es" ? (
                <>
                  Pauta Publicitaria para <span className="serif italic text-brand-gold">Escalar Ventas</span>
                </>
              ) : (
                <>
                  Data-Driven Ad Campaigns that <span className="serif italic text-brand-gold">Drive Revenue</span>
                </>
              )}
            </h2>
            <p className="text-base text-brand-charcoal/70 font-light leading-relaxed max-w-xl">
              {lang === "ta" ? (
                "வடிவமைக்கப்பட்ட விளம்பரக் கோட்பாடுகள், துல்லியமான டார்கெட்டிங் மற்றும் பகுப்பாய்வுகள் மூலமாக உங்கள் முதலீட்டிற்கு அதிக லாபம் தரும் மார்க்கெட்டிங் தீசுகள்."
              ) : lang === "es" ? (
                "Optimice sus presupuestos publicitarios. Llegue a clientes con intención de compra mediante Google Search, anuncios en Instagram y SEO local."
              ) : (
                "Deploy outcome-focused advertising campaigns, customized landing page funnels, and localized search engine optimization to capture and convert customer demand."
              )}
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex gap-3">
                <Megaphone className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif italic text-brand-charcoal font-semibold text-base">Meta Ads Optimization</h4>
                  <p className="text-xs text-brand-charcoal/60 font-light leading-relaxed">Highly customized creative imagery and video ads designed to stop the scroll on Facebook & Instagram.</p>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <Search className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif italic text-brand-charcoal font-semibold text-base">Google Search & Local SEO</h4>
                  <p className="text-xs text-brand-charcoal/60 font-light leading-relaxed">High-converting Google Search campaigns and optimized Google Business profile setup to catch intent.</p>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <Globe className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif italic text-brand-charcoal font-semibold text-base">Conversion Tracking & Analytics</h4>
                  <p className="text-xs text-brand-charcoal/60 font-light leading-relaxed">Google Tag Manager, GA4 event flows, Meta Pixel triggers, and direct WhatsApp sync events verified.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4.5. AI WhatsApp & Sales Automation Section */}
      <section id="ai-automation" className="py-24 px-4 sm:px-6 bg-brand-charcoal text-brand-offwhite relative overflow-hidden border-t border-white/5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 space-y-6 text-left">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-brand-gold/15 text-brand-gold text-[10px] font-mono font-bold uppercase tracking-wider rounded-full">
              <Cpu className="w-3.5 h-3.5" />
              Enterprise Tech Stack
            </span>
            <h2 className="serif font-bold text-4xl sm:text-5xl leading-tight">
              {lang === "ta" ? (
                <>
                  AI வாட்ஸ்அப் மற்றும் <span className="serif italic text-brand-gold">விற்பனை ஆட்டோமேஷன்</span>
                </>
              ) : lang === "es" ? (
                <>
                  Automatización de Ventas e <span className="serif italic text-brand-gold">IA en WhatsApp</span>
                </>
              ) : (
                <>
                  AI WhatsApp & Sales <span className="serif italic text-brand-gold">Automation Systems</span>
                </>
              )}
            </h2>
            <p className="text-base text-brand-offwhite/70 font-light leading-relaxed max-w-xl">
              {lang === "ta" ? (
                "உங்கள் வணிகத்தை ஸ்மார்ட் வாட்ஸ்அப் ஏபிஐ சாட்போட்கள், தானியங்கி சிஆர்எம் மற்றும் 24/7 லீட் தகுதிப்படுத்தும் உதவியாளர்களுடன் மேம்படுத்துங்கள்."
              ) : lang === "es" ? (
                "Potencie su negocio con chatbots inteligentes en la API de WhatsApp, sincronización automatizada con CRM y asistentes virtuales activos las 24 horas."
              ) : (
                "Supercharge your business with smart WhatsApp API chatbots, automated CRM database sync, and 24/7 qualified lead generation systems."
              )}
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex gap-3">
                <MessageSquareCode className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif italic text-brand-offwhite font-semibold text-base">MACH Architectures</h4>
                  <p className="text-xs text-brand-offwhite/60 font-light leading-relaxed">Headless, API-first integrations connecting WhatsApp directly to database channels.</p>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <Zap className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif italic text-brand-offwhite font-semibold text-base">Instant Webhook Sync</h4>
                  <p className="text-xs text-brand-offwhite/60 font-light leading-relaxed">Every incoming enquiry qualifies, routes, and logs directly to Google Sheets or CRMs instantly.</p>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <Database className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif italic text-brand-offwhite font-semibold text-base">Database Lead Handshake</h4>
                  <p className="text-xs text-brand-offwhite/60 font-light leading-relaxed">Conversational qualification pipelines ensure sales teams only receive high-intent prospects.</p>
                </div>
              </div>
            </div>

            {/* AI FAQ Accordion */}
            <div className="pt-8 border-t border-white/10 space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-widest text-brand-gold">Frequently Asked Questions</h4>
              <div className="space-y-3">
                {faqData.map((faq, index) => (
                  <div key={index} className="border border-white/10 rounded-2xl overflow-hidden bg-white/5">
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      className="w-full p-4 text-left flex justify-between items-center text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-brand-offwhite hover:text-brand-gold transition-colors"
                    >
                      <span>{faq.q[lang]}</span>
                      <ChevronDown className={`w-4 h-4 text-brand-gold transition-transform duration-300 ${openFaq === index ? "transform rotate-180" : ""}`} />
                    </button>
                    {openFaq === index && (
                      <div className="px-4 pb-4 text-xs sm:text-sm text-brand-offwhite/60 font-light leading-relaxed border-t border-white/5 pt-3 animate-fadeIn">
                        {faq.a[lang]}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl relative">
              <img 
                src={aiImg} 
                alt="AI chatbot automation platform displayed on tablet and mobile phone screen dashboard mockup" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-brand-charcoal/20" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Contact Form Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 bg-brand-offwhite border-t border-brand-charcoal/5 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5 space-y-6">
              <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-brand-gold uppercase block">
                {lang === "ta" ? "தொடர்பு கொள்ள" : lang === "es" ? "CONTACTO DIRECTO" : "DIRECT CHANNEL"}
              </span>
              <h2 className="text-4xl md:text-5xl serif italic text-brand-charcoal leading-tight">
                {t.contact?.title || "Let's Scale Your Business"}
              </h2>
              <p className="text-sm text-brand-charcoal/60 font-light leading-relaxed">
                {lang === "ta" ? "நாங்கள் விளம்பரங்களை மட்டும் இயக்குவதில்லை; உங்கள் வணிகத்தை ஆட்டோமேஷன் மற்றும் உத்திகள் மூலம் நிலையாக வளர்க்க டிஜிட்டல் வளர்ச்சி அமைப்புகளை உருவாக்குகிறோம்." : lang === "es" ? "No solo ejecutamos campañas publicitarias. Diseñamos embudos completos de adquisición y automatización listos para hacer crecer su negocio." : "We don't just run advertising campaigns. We craft end-to-end, high-performance customer acquisition funnels and messaging systems designed to scale your business sustainably."}
              </p>

              <div className="space-y-4 pt-6 border-t border-brand-charcoal/5">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-brand-gold/10 text-brand-gold rounded-full">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold font-mono text-brand-charcoal/40 uppercase tracking-wider">Email Inquiries</h4>
                    <a href="mailto:support@cyberad.in" className="text-sm font-serif italic text-brand-charcoal hover:text-brand-gold transition-colors">
                      support@cyberad.in
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-brand-gold/10 text-brand-gold rounded-full">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold font-mono text-brand-charcoal/40 uppercase tracking-wider">Regional HQ</h4>
                    <p className="text-sm text-brand-charcoal/80 font-light">Southern India | Global Presence</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-7 bg-white border border-brand-charcoal/5 rounded-[2.5rem] p-8 md:p-10 relative shadow-sm">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl serif italic text-brand-charcoal">
                    {lang === "ta" ? "நன்றி!" : lang === "es" ? "¡Gracias!" : "Enquiry Received"}
                  </h3>
                  <p className="text-sm font-light text-brand-charcoal/60 max-w-sm mx-auto leading-relaxed">
                    {lang === "ta" ? "உங்கள் விசாரணை பெறப்பட்டது. விரைவில் உங்களைத் தொடர்பு கொள்கிறோம்." : lang === "es" ? "Hemos recibido su consulta correctamente y nos contactaremos pronto." : "Thank you. We have received your enquiry and will contact you shortly."}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {error && (
                    <div className="p-4 bg-red-50 border border-red-200 text-red-700 text-xs rounded-2xl">
                      {error}
                    </div>
                  )}

                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-mono font-bold tracking-widest text-brand-charcoal/60 block">
                      {lang === "ta" ? "பெயர் *" : lang === "es" ? "Nombre *" : "Name *"}
                    </label>
                    <Input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={lang === "ta" ? "உங்கள் பெயர்" : lang === "es" ? "Su nombre" : "Your Name"}
                      className="h-11 px-4 border-brand-charcoal/10 focus:border-brand-gold focus:ring-brand-gold bg-white"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-mono font-bold tracking-widest text-brand-charcoal/60 block">
                      {lang === "ta" ? "கைபேசி எண் *" : lang === "es" ? "Número de Móvil *" : "Mobile Number *"}
                    </label>
                    <Input
                      type="tel"
                      required
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      placeholder={lang === "ta" ? "கைபேசி எண்" : lang === "es" ? "Número de móvil" : "Mobile Number"}
                      className="h-11 px-4 border-brand-charcoal/10 focus:border-brand-gold focus:ring-brand-gold bg-white"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-mono font-bold tracking-widest text-brand-charcoal/60 block">
                      {lang === "ta" ? "மின்னஞ்சல் (விரும்பினால்)" : lang === "es" ? "Correo (Opcional)" : "Email (Optional)"}
                    </label>
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={lang === "ta" ? "மின்னஞ்சல் முகவரி" : lang === "es" ? "Correo electrónico" : "Email Address"}
                      className="h-11 px-4 border-brand-charcoal/10 focus:border-brand-gold focus:ring-brand-gold bg-white"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-mono font-bold tracking-widest text-brand-charcoal/60 block">
                      {lang === "ta" ? "செய்தி (விரும்பினால்)" : lang === "es" ? "Mensaje (Opcional)" : "Message (Optional)"}
                    </label>
                    <Textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={lang === "ta" ? "உங்கள் செய்தி..." : lang === "es" ? "Escriba su mensaje..." : "Your Message..."}
                      className="min-h-[100px] px-4 py-3 border-brand-charcoal/10 focus:border-brand-gold focus:ring-brand-gold bg-white"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full h-12 bg-brand-charcoal hover:bg-brand-gold hover:text-brand-charcoal text-white rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>{lang === "ta" ? "அனுப்பப்படுகிறது..." : lang === "es" ? "Enviando..." : "Sending..."}</span>
                      </>
                    ) : (
                      <span>{lang === "ta" ? "சமர்ப்பிக்கவும்" : lang === "es" ? "Enviar Consulta" : "Submit Enquiry"}</span>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
