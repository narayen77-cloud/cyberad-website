import { useLanguage } from "./LanguageContext";
import { motion } from "motion/react";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const { language, t } = useLanguage();

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

            {/* Three CTA Buttons from brief */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-start items-stretch">
              <Button 
                size="lg" 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="rounded-full h-12 px-6 bg-brand-charcoal text-brand-offwhite hover:bg-brand-charcoal/90 hover:scale-102 transition-all cursor-pointer text-xs md:text-sm"
              >
                {language === "ta" ? "இலவச ஆலோசனை பெறுக" : language === "es" ? "Consulta Gratuita" : "Get a Free Consultation"}
              </Button>
              <a 
                href="https://wa.me/918925693013"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full h-12 px-6 bg-[#25D366] hover:bg-[#128C7E] text-white hover:scale-102 transition-all cursor-pointer text-xs md:text-sm font-semibold shadow-sm"
              >
                <span>{language === "ta" ? "வாட்ஸ்அப் செய்க" : language === "es" ? "Escríbenos por WhatsApp" : "WhatsApp Us"}</span>
              </a>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => document.getElementById('campaign')?.scrollIntoView({ behavior: 'smooth' })}
                className="rounded-full h-12 px-6 border-brand-charcoal/10 hover:bg-brand-charcoal/5 cursor-pointer text-xs md:text-sm"
              >
                {language === "ta" ? "விளம்பரக் கட்டணம் காண்க" : language === "es" ? "Pedir Cotización" : "Request a Quote"}
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative aspect-[4/3] sm:aspect-[16/10] md:aspect-[4/3] w-full max-w-xl mx-auto md:max-w-none rounded-3xl overflow-hidden shadow-2xl mt-4 md:mt-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop" 
            alt="Warm and highly positive team collaborated around a computer bathed in sunlit golden leverage" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover contrast-[1.05] transition-all duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/40 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 p-5 backdrop-blur-md bg-brand-offwhite/10 border border-brand-offwhite/20 rounded-2xl">
            <p className="text-brand-offwhite font-serif italic text-sm sm:text-base md:text-lg leading-snug">
              "Technology shouldn't be a barrier. It should be your greatest leverage."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
