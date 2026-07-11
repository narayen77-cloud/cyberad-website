import { useState } from "react";
import { useLanguage } from "./LanguageContext";
import { Mail, MapPin, CheckCircle, Loader2 } from "lucide-react";
import { trackEvent } from "../lib/tracking";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  const { language: rawLanguage, t } = useLanguage();
  const lang = (rawLanguage as string) === "es" ? "es" : (rawLanguage as string) === "ta" ? "ta" : "en";

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getSuccessMessage = () => {
    if (lang === "ta") {
      return "நன்றி. உங்கள் விசாரணை எங்களுக்குக் கிடைத்துவிட்டது, விரைவில் உங்களைத் தொடர்பு கொள்வோம்.";
    }
    if (lang === "es") {
      return "Gracias. Hemos recibido su consulta y nos pondremos en contacto con usted en breve.";
    }
    return "Thank you. We have received your enquiry and will contact you shortly.";
  };

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
          subject: `New Lead from Cyberad.in: ${name}`
        })
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        
        // 1. Fire GA4 event
        if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
          (window as any).gtag("event", "generate_lead", {
            event_category: "Engagement",
            event_label: "Contact Form Submission",
            lead_name: name,
            lead_email: email,
            lead_mobile: mobile
          });
        }

        // 2. Fire Meta Pixel Lead event
        if (typeof window !== "undefined" && typeof (window as any).fbq === "function") {
          (window as any).fbq("track", "Lead", {
            content_name: "Contact Form Lead",
            content_category: "Lead Acquisition"
          });
        }

        // 3. Local Audit GTM Suite logging
        trackEvent("lead_form_submission", "Conversions", {
          name,
          email,
          phone: mobile,
          source: "Contact Form Web3Forms"
        });

        trackEvent("thank_you_page_view", "Conversions", {
          path: "/thank-you-contact-form",
          title: "Thank You"
        });

        // Trigger global virtual thank you page event to show simulation dialog
        window.dispatchEvent(
          new CustomEvent("lead_submitted_virtual", {
            detail: { message: "Contact Form Web3Forms Lead Submission Completed." }
          })
        );
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch (err: any) {
      console.error("Web3Forms submission error:", err);
      setError("Failed to submit. Please check your internet connection.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 bg-brand-charcoal/[0.02] border-t border-brand-charcoal/5 relative">
      <div className="max-w-7xl mx-auto">
        
         {/* Contact Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (Brand Statement and Direct Action Hooks) */}
          <div className="space-y-8">
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

            {/* Quick Contact Information Blocks */}
            <div className="space-y-6 pt-6 border-t border-brand-charcoal/5">
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

          {/* Right Column (Aesthetic Contact Form Panel) */}
          <div className="bg-white border border-brand-charcoal/5 rounded-[2.5rem] p-8 md:p-10 shadow-sm relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[3px] bg-brand-gold rounded-b" />
            
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl serif italic text-brand-charcoal">
                  {lang === "ta" ? "நன்றி!" : lang === "es" ? "¡Gracias!" : "Enquiry Received"}
                </h3>
                <p className="text-sm font-light text-brand-charcoal/60 leading-relaxed max-w-sm mx-auto">
                  {getSuccessMessage()}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl serif italic text-brand-charcoal mb-4">
                  {lang === "ta" ? "எங்களுக்கு எழுதுங்கள்" : lang === "es" ? "Escríbenos" : "Send an Enquiry"}
                </h3>

                {error && (
                  <div className="p-3.5 bg-destructive/10 text-destructive text-xs rounded-xl font-light">
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
                    className="h-11 px-4 border-brand-charcoal/10 focus:border-brand-gold focus:ring-brand-gold"
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
                    className="h-11 px-4 border-brand-charcoal/10 focus:border-brand-gold focus:ring-brand-gold"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase font-mono font-bold tracking-widest text-brand-charcoal/60 block">
                    {lang === "ta" ? "மின்னஞ்சல் (விரும்பினால்)" : lang === "es" ? "Correo Electrónico (Opcional)" : "Email (Optional)"}
                  </label>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={lang === "ta" ? "மின்னஞ்சல் முகவரி" : lang === "es" ? "Correo electrónico" : "Email Address"}
                    className="h-11 px-4 border-brand-charcoal/10 focus:border-brand-gold focus:ring-brand-gold"
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
                    className="min-h-[100px] px-4 py-3 border-brand-charcoal/10 focus:border-brand-gold focus:ring-brand-gold"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full h-11 bg-brand-charcoal hover:bg-brand-gold hover:text-brand-charcoal text-white rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
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
  );
}

