import { useLanguage } from "./LanguageContext";
import { MessageCircle, Mail, MapPin } from "lucide-react";

export function Contact() {
  const { language: rawLanguage, t } = useLanguage();
  const lang = (rawLanguage as string) === "es" ? "es" : (rawLanguage as string) === "ta" ? "ta" : "en";

  return (
    <section id="contact" className="py-24 px-6 bg-brand-charcoal/[0.02] border-t border-brand-charcoal/5 relative">
      <div className="max-w-7xl mx-auto">
        
         {/* Contact Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (Brand Statement and Direct Action Hooks) */}
          <div className="space-y-6">
            <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-brand-gold uppercase block">
              {lang === "ta" ? "தொடர்பு விவரங்கள்" : lang === "es" ? "CANAL DIRECTO" : "DIRECT CHANNEL"}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl serif italic text-brand-charcoal tracking-tight leading-tight">
              {t.contact?.title || "Let's Scale Your Business"}
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
                  <a href="mailto:support@cyberad.in" className="text-base font-serif italic text-brand-charcoal hover:text-brand-gold transition-colors">
                    support@cyberad.in
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-gold/10 text-brand-gold rounded-full shrink-0">
                  <MapPin className="w-5 h-5" />
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

            {/* Micro WhatsApp Direct CTA Banner */}
            <div className="p-6 bg-[#25D366]/5 rounded-3xl border border-[#25D366]/10 space-y-4">
              <p className="text-xs font-light text-brand-charcoal/70 leading-relaxed">
                {lang === "ta" 
                  ? "உடனடி பதிலுக்கும், எங்களோடு நேரடி கலந்துரையாடலுக்கும் கீழே உள்ள வாட்ஸ்அப் பட்டனை சொடுக்கவும்." 
                  : lang === "es" 
                  ? "¿Tiene prisa? Conéctese con nuestro estratega directamente en un toque a través de WhatsApp." 
                  : "Prefer instant communication? Start a live dialog with our coordinator instantly via WhatsApp."}
              </p>
              <a 
                href="https://wa.me/918925693013" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#25D366] text-white hover:bg-[#128C7E] rounded-full text-xs font-bold uppercase tracking-widest transition-all shadow-sm w-full justify-center sm:w-auto"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>{lang === "ta" ? "வாட்ஸ்அப் உரையாடல்" : lang === "es" ? "Hablar en WhatsApp" : "Connect Directly"}</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

