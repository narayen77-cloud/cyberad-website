import { useLanguage } from "./LanguageContext";
import { ExternalLink, Sparkles, Layout } from "lucide-react";
import { trackEvent } from "../lib/tracking";

export function FeaturedProject() {
  const { language } = useLanguage();
  const lang = (language as "en" | "ta" | "es") || "en";

  const handleDemoClick = () => {
    trackEvent("live_demo_click", "Engagement", {
      target_url: "https://plots.cyberad.in/"
    });
  };

  return (
    <section id="portfolio" className="py-24 px-4 sm:px-6 bg-brand-offwhite relative overflow-hidden">
      {/* Subtle top/bottom grid texture accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--color-brand-gold)_0%,transparent_60%)] opacity-[0.02] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        
        {/* Minimalist Top Accent */}
        <div className="inline-flex items-center gap-2 bg-brand-gold/10 px-3.5 py-1.5 rounded-full border border-brand-gold/20 mb-8">
          <Sparkles className="w-3.5 h-3.5 text-brand-gold animate-pulse" />
          <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-brand-gold uppercase">
            {lang === "ta" ? "நேரடி மாதிரித் திட்டம்" : lang === "es" ? "PROYECTO DE DEMOSTRACIÓN" : "LIVE MARKETING DEMO"}
          </span>
        </div>

        {/* Simplified Header */}
        <div className="space-y-4 max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-brand-charcoal tracking-tight leading-tight">
            {lang === "ta" ? "உங்கள் சொத்து எவ்வாறு சந்தைப்படுத்தப்படும்?" : lang === "es" ? "Así se Presentará su Propiedad" : "See How We Market Any Property"}
          </h2>
          <p className="text-sm md:text-base text-brand-charcoal/60 font-light leading-relaxed">
            {lang === "ta"
              ? "பில்டர்கள், நில உரிமையாளர்கள் மற்றும் முதலீட்டாளர்களுக்காக வடிவமைக்கப்பட்ட எங்களது பிரத்யேக டிஜிட்டல் மார்க்கெட்டிங் கட்டமைப்பை நேரடி இணையதளம் மூலம் உடனே அனுபவியுங்கள்."
              : lang === "es"
              ? "Explore un ejemplo real de cómo combinamos páginas de destino de alta velocidad, recorridos virtuales e integraciones automáticas para acelerar sus ventas."
              : "Experience exactly how we present developers' properties to high-intent buyers, integrating premium design, virtual walkthroughs, and instant inquiry routes."}
          </p>
        </div>

        {/* Minimalist "Live Demo" Showcase Card */}
        <div className="bg-white border border-brand-charcoal/10 rounded-[2rem] p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 max-w-2xl mx-auto">
          
          {/* Simulated Browser Chrome Mockup / Thumbnail */}
          <div className="border border-brand-charcoal/10 rounded-xl overflow-hidden bg-brand-offwhite mb-6 relative group select-none">
            {/* Browser Header */}
            <div className="bg-brand-charcoal/[0.03] border-b border-brand-charcoal/5 px-4 py-3 flex items-center justify-between">
              <div className="flex gap-1.5 shrink-0">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
              </div>
              <div className="bg-white border border-brand-charcoal/5 rounded px-4 py-0.5 text-[10px] font-mono text-brand-charcoal/40 flex-1 max-w-xs text-center truncate">
                plots.cyberad.in
              </div>
              <div className="w-8" />
            </div>

            {/* Visual Thumbnail Area */}
            <div className="py-12 px-6 flex flex-col items-center justify-center text-center space-y-3 bg-gradient-to-b from-white to-brand-offwhite relative">
              <div className="w-12 h-12 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center mb-1">
                <Layout className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif font-medium text-brand-charcoal">
                {lang === "ta" ? "இன்டராக்டிவ் லேஅவுட் மார்க்கெட்டிங் தளம்" : lang === "es" ? "Plataforma de Marketing Interactivo" : "Interactive Property Showcase"}
              </h3>
              <p className="text-xs text-brand-charcoal/50 max-w-sm leading-relaxed font-light">
                {lang === "ta"
                  ? "வாட்ஸ்அப் ஆட்டோமேஷன், 3D கூகுள் எர்த் டூர் மற்றும் தகுதியான லீட்களைப் பெறும் பிரத்யேக தளம்."
                  : lang === "es"
                  ? "Experimente el viaje de marketing completo: mapas interactivos, recorridos 3D y WhatsApp automático."
                  : "Explore the live customer journey: high-speed layout maps, 3D terrain guides, brochure delivery, and WhatsApp automations."}
              </p>
            </div>
          </div>

          {/* Action Details */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-brand-charcoal/5 pt-6">
            <div className="text-left sm:max-w-xs">
              <span className="text-[10px] font-mono font-bold text-brand-gold uppercase tracking-wider block mb-0.5">
                {lang === "ta" ? "நேரடி மாதிரி" : lang === "es" ? "DEMOSTRACIÓN COMPLETA" : "COMPLETE MARKETING EXPERIENCE"}
              </span>
              <p className="text-xs text-brand-charcoal/50 font-light">
                {lang === "ta"
                  ? "இதன் மூலம் உங்கள் சொத்து எவ்வாறு உலகத்தரம் வாய்ந்ததாகத் தோன்றும் என்பதை அறியலாம்."
                  : lang === "es"
                  ? "Descubra cómo podemos presentar profesionalmente sus desarrollos o parcelas."
                  : "Imagine how your own property will be professionally marketed to affluent buyers."}
              </p>
            </div>

            <a
              href="https://plots.cyberad.in/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleDemoClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-brand-charcoal hover:bg-brand-gold text-white hover:text-white font-mono text-[10px] font-bold uppercase tracking-widest rounded-full transition-all duration-300 shadow-sm cursor-pointer hover:scale-[1.02]"
            >
              <span>{lang === "ta" ? "மாதிரி திட்டத்தைக் காண்க" : lang === "es" ? "Ver Proyecto de Muestra" : "View Sample Project"}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
