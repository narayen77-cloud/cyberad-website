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
      setError("Name and Mobile Number are required");
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
                YOUR DIGITAL GROWTH PARTNER
              </span>

              <h1 className="serif font-bold text-brand-charcoal text-4xl sm:text-5xl lg:text-6xl leading-[1.15] tracking-tight">
                Generate More Leads. <br />
                <span className="serif italic text-brand-gold">Close More Sales.</span>
              </h1>

              <p className="text-base sm:text-lg text-brand-charcoal/80 font-normal max-w-xl leading-relaxed">
                Digital marketing and AI automation that help your business grow.
              </p>

              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <Link
                  to="#contact"
                  onClick={ctaClick}
                  className="px-8 py-4 bg-brand-charcoal hover:bg-brand-gold text-brand-offwhite hover:text-brand-charcoal rounded-full text-xs font-mono font-bold uppercase tracking-widest transition-all duration-300 shadow-lg shadow-brand-charcoal/10 hover:shadow-brand-gold/20 flex items-center gap-2 group cursor-pointer"
                >
                  <span>Get Free Consultation</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="#services"
                  className="px-8 py-4 border border-brand-charcoal/10 hover:border-brand-gold text-brand-charcoal hover:text-brand-gold rounded-full text-xs font-mono font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer"
                >
                  Learn More
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
              TRUSTED BY LOCAL ENTERPRISES
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
              CORE SERVICES
            </span>
            <h2 className="text-4xl md:text-5xl serif italic text-brand-charcoal">
              Premium Growth Services
            </h2>
            <p className="text-sm sm:text-base text-brand-charcoal/60 max-w-xl mx-auto font-light leading-relaxed">
              Select the target solution designed to match your current operational stage.
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
                  AI Automation
                </h3>
                <p className="text-sm text-white/70 font-light leading-relaxed mb-8">
                  Smart WhatsApp API chatbots, automated CRM database sync, and 24/7 lead nurturing assistants.
                </p>
              </div>
              <div className="pt-6 border-t border-white/10">
                <Link
                  to="#ai-automation"
                  className="text-xs font-mono font-bold uppercase tracking-widest text-brand-gold hover:text-white inline-flex items-center gap-1 group/link cursor-pointer"
                >
                  <span>Learn More</span>
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
                  Digital Marketing
                </h3>
                <p className="text-sm text-brand-charcoal/60 font-light leading-relaxed mb-8">
                  Data-driven Meta & Google Ads campaigns and local search optimization (SEO) to build consistent sales pipelines.
                </p>
              </div>
              <div className="pt-6 border-t border-brand-charcoal/5">
                <Link
                  to="#digital-marketing"
                  className="text-xs font-mono font-bold uppercase tracking-widest text-brand-charcoal hover:text-brand-gold inline-flex items-center gap-1 group/link cursor-pointer"
                >
                  <span>Learn More</span>
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
                WHY CYBERAD
              </span>
              <h2 className="text-4xl md:text-5xl serif italic text-brand-offwhite leading-tight">
                Real Business Experience. Measurable Results.
              </h2>
              <p className="text-sm text-brand-offwhite/60 font-light leading-relaxed">
                We don't sell fancy marketing slides. We build solid software, manage high-conversion campaigns, set up workflows, and act as your dedicated support coordinator.
              </p>
            </div>

            <div className="md:col-span-7 grid sm:grid-cols-2 gap-6">
              <div className="p-6 bg-white/5 border border-white/10 rounded-3xl space-y-3">
                <div className="p-2 bg-brand-gold/15 text-brand-gold w-fit rounded-lg">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-serif italic text-brand-offwhite">
                  30+ Years Experience
                </h3>
                <p className="text-xs text-brand-offwhite/60 font-light leading-relaxed">
                  We understand how business actually operates, manage expenses, scale client retention, and secure cash flow.
                </p>
              </div>

              <div className="p-6 bg-white/5 border border-white/10 rounded-3xl space-y-3">
                <div className="p-2 bg-brand-gold/15 text-brand-gold w-fit rounded-lg">
                  <UserCheck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-serif italic text-brand-offwhite">
                  One-Point Contact
                </h3>
                <p className="text-xs text-brand-offwhite/60 font-light leading-relaxed">
                  No support tickets, no waiting lines, and no junior interns. You coordinate operations directly with a dedicated expert.
                </p>
              </div>

              <div className="p-6 bg-white/5 border border-white/10 rounded-3xl space-y-3">
                <div className="p-2 bg-brand-gold/15 text-brand-gold w-fit rounded-lg">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-serif italic text-brand-offwhite">
                  Pure Outcome Focus
                </h3>
                <p className="text-xs text-brand-offwhite/60 font-light leading-relaxed">
                  Zero vanity metrics. We focus strictly on verified leads, WhatsApp connection volume, and sales growth.
                </p>
              </div>

              <div className="p-6 bg-white/5 border border-white/10 rounded-3xl space-y-3">
                <div className="p-2 bg-brand-gold/15 text-brand-gold w-fit rounded-lg">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-serif italic text-brand-offwhite">
                  Global MNC Exposure
                </h3>
                <p className="text-xs text-brand-offwhite/60 font-light leading-relaxed">
                  Benefit from system designs built for multinational corporations, scaled with care for local enterprises.
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="col-span-full border-t border-white/10 my-12" />

            {/* Our Professional Standards / Values */}
            <div className="col-span-full space-y-12">
              <div className="text-center space-y-2">
                <span className="text-[9px] font-mono font-bold tracking-[0.3em] text-brand-gold uppercase block">
                  OUR STANDARDS
                </span>
                <h3 className="text-3xl serif italic text-brand-offwhite">
                  Our Professional Standards
                </h3>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="p-8 bg-white/5 border border-white/10 rounded-[2rem] space-y-4">
                  <h4 className="text-xl font-serif italic text-brand-gold">
                    1. Results That Matter
                  </h4>
                  <p className="text-xs text-brand-offwhite/60 font-light leading-relaxed">
                    We focus on generating enquiries, customers, and revenue. Every campaign, workflow, and system we design is built to increase your bottom line, not just vanity metrics.
                  </p>
                </div>

                <div className="p-8 bg-white/5 border border-white/10 rounded-[2rem] space-y-4">
                  <h4 className="text-xl font-serif italic text-brand-gold">
                    2. Honest Advice
                  </h4>
                  <p className="text-xs text-brand-offwhite/60 font-light leading-relaxed">
                    We recommend only what benefits your business. If a platform doesn't suit your target audience, or a strategy isn't yielding real returns, we tell you directly without agency jargon.
                  </p>
                </div>

                <div className="p-8 bg-white/5 border border-white/10 rounded-[2rem] space-y-4">
                  <h4 className="text-xl font-serif italic text-brand-gold">
                    3. Long-Term Partnership
                  </h4>
                  <p className="text-xs text-brand-offwhite/60 font-light leading-relaxed">
                    We work with you to improve and scale over time. From ad optimization to custom tech setups, we build sustainable customer acquisition systems that fuel future growth.
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
              Data-Driven Ad Campaigns that <span className="serif italic text-brand-gold">Drive Revenue</span>
            </h2>
            <p className="text-base text-brand-charcoal/70 font-light leading-relaxed max-w-xl">
              Deploy outcome-focused advertising campaigns, customized landing page funnels, and localized search engine optimization to capture and convert customer demand.
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
              AI WhatsApp & Sales <span className="serif italic text-brand-gold">Automation Systems</span>
            </h2>
            <p className="text-base text-brand-offwhite/70 font-light leading-relaxed max-w-xl">
              Supercharge your business with smart WhatsApp API chatbots, automated CRM database sync, and 24/7 qualified lead generation systems.
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
                DIRECT CHANNEL
              </span>
              <h2 className="text-4xl md:text-5xl serif italic text-brand-charcoal leading-tight">
                Let's Scale Your Business
              </h2>
              <p className="text-sm text-brand-charcoal/60 font-light leading-relaxed">
                We don't just run advertising campaigns. We craft end-to-end, high-performance customer acquisition funnels and messaging systems designed to scale your business sustainably.
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
                    Enquiry Received
                  </h3>
                  <p className="text-sm font-light text-brand-charcoal/60 max-w-sm mx-auto leading-relaxed">
                    Thank you. We have received your enquiry and will contact you shortly.
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
                      Name *
                    </label>
                    <Input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your Name"
                      className="h-11 px-4 border-brand-charcoal/10 focus:border-brand-gold focus:ring-brand-gold bg-white"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-mono font-bold tracking-widest text-brand-charcoal/60 block">
                      Mobile Number *
                    </label>
                    <Input
                      type="tel"
                      required
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      placeholder="Mobile Number"
                      className="h-11 px-4 border-brand-charcoal/10 focus:border-brand-gold focus:ring-brand-gold bg-white"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-mono font-bold tracking-widest text-brand-charcoal/60 block">
                      Email (Optional)
                    </label>
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email Address"
                      className="h-11 px-4 border-brand-charcoal/10 focus:border-brand-gold focus:ring-brand-gold bg-white"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-mono font-bold tracking-widest text-brand-charcoal/60 block">
                      Message (Optional)
                    </label>
                    <Textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Your Message..."
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
                        <span>Sending...</span>
                      </>
                    ) : (
                      <span>Submit Enquiry</span>
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
