import { useLanguage } from "./LanguageContext";
import { Mail, MapPin } from "lucide-react";
import { trackEvent } from "../lib/tracking";

export function Contact() {
  const { language: rawLanguage, t } = useLanguage();
  const lang = (rawLanguage as string) === "es" ? "es" : (rawLanguage as string) === "ta" ? "ta" : "en";

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 bg-brand-charcoal/[0.02] border-t border-brand-charcoal/5 relative">
      <div className="max-w-7xl mx-auto">
        
         {/* Contact Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (Brand Statement and Direct Action Hooks) */}
          <div className="space-y-6">
            <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-brand-gold uppercase block">
              {lang === "ta" ? "தொடர்பு விவரங்கள்" : lang === "es" ? "CANAL DIRECTO" : "DIRECT CHANNEL"}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl serif font-normal text-brand-charcoal tracking-tight leading-tight">
              {lang === "en" ? (
                <>
                  Accelerate <span className="text-brand-gold font-serif italic">Property Sales</span>
                </>
              ) : lang === "ta" ? (
                <>
                  உங்கள் சொத்து <span className="text-brand-gold font-serif italic">விற்பனையை உயர்த்துவோம்</span>
                </>
              ) : (
                <>
                  Acelere sus <span className="text-brand-gold font-serif italic">Ventas de Propiedades</span>
                </>
              )}
            </h2>
            <p className="text-base text-brand-charcoal/60 font-light leading-relaxed">
              We don't just run advertising campaigns. We craft end-to-end, high-performance customer acquisitions and intelligent messaging pipelines designed to scale your business sustainably.
            </p>
          </div>

          {/* Right Column (Aesthetic Direct Contact Panel) */}
          <div className="bg-white border border-brand-charcoal/5 rounded-[2.5rem] p-8 md:p-10 shadow-sm relative space-y-8">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[3px] bg-brand-gold rounded-b" />

            {/* Quick Contact Information Blocks */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-gold/10 text-brand-gold rounded-full shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-brand-charcoal/40 font-mono mb-1">
                    {lang === "ta" ? "மின்னஞ்சல்" : lang === "es" ? "Correo Electrónico" : "EMAIL INQUIRIES"}
                  </h4>
                  <a 
                    href="mailto:support@cyberad.in" 
                    onClick={() => trackEvent("email_click", "Engagement", { email: "support@cyberad.in", placement: "Contact Panel" })}
                    className="text-base font-serif italic text-brand-charcoal hover:text-brand-gold transition-colors"
                  >
                    support@cyberad.in
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-gold/10 text-brand-gold rounded-full shrink-0 items-center justify-center flex">
                  <span 
                    onClick={() => trackEvent("phone_click", "Engagement", { phone: "+91-89256-93013", placement: "Contact Panel Desk" })}
                    className="cursor-pointer hover:text-brand-gold transition-all duration-300"
                    title="Click to dial"
                  >
                    <MapPin className="w-5 h-5 text-brand-gold" />
                  </span>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-brand-charcoal/40 font-mono mb-1">
                    {lang === "ta" ? "தலைமையகம்" : lang === "es" ? "Sede Central" : "REGIONAL HQ"}
                  </h4>
                  <p className="text-base text-brand-charcoal/80 font-light">
                    {t.footer?.location || "Southern India"}
                  </p>
                </div>
              </div>
            </div>


          </div>

        </div>

      </div>
    </section>
  );
}

