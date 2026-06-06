import { useState } from "react";
import { useLanguage } from "./LanguageContext";
import { motion, AnimatePresence } from "motion/react";
import { 
  Check, Play, ArrowRight, CheckSquare, Sparkles, MessageCircle, Mail 
} from "lucide-react";

const GOALS = [
  { id: "calls", labelEn: "More Calls", labelTa: "அதிக தொலைபேசி அழைப்புகள்", labelEs: "Más llamadas" },
  { id: "whatsapp", labelEn: "More WhatsApp Messages", labelTa: "அதிக வாட்ஸ்அப் மெசேஜ்கள்", labelEs: "Más mensajes de WhatsApp" },
  { id: "visits", labelEn: "More Website Visits", labelTa: "அதிக இணையதள வருகைகள்", labelEs: "Más visitas web" },
  { id: "leads", labelEn: "More Leads", labelTa: "அதிக நேரடி வாடிக்கையாளர்கள்", labelEs: "Más prospectos" },
  { id: "awareness", labelEn: "Brand Awareness", labelTa: "பிராண்ட் அறிமுகம்", labelEs: "Reconocimiento de marca" }
];

const PLATFORMS = ["Google", "Facebook", "Instagram", "WhatsApp"];

const BUDGETS = [1000, 5000, 10000, 25000, 50000, 100000];

const DURATIONS = ["7 Days", "15 Days", "30 Days", "60 Days", "90 Days"];

const DURATIONS_TA = ["7 நாட்கள்", "15 நாட்கள்", "30 நாட்கள்", "60 நாட்கள்", "90 நாட்கள்"];

const DURATIONS_ES = ["7 Días", "15 Días", "30 Días", "60 Días", "90 Días"];

const CATEGORIES = [
  { id: "Real Estate", labelEn: "Real Estate", labelTa: "ரியல் எஸ்டேட்", labelEs: "Bienes raíces" },
  { id: "Hospital", labelEn: "Hospital", labelTa: "மருத்துவமனை", labelEs: "Hospital" },
  { id: "Clinic", labelEn: "Clinic", labelTa: "கிளினிக் (தனியார் மருத்துவமனை)", labelEs: "Clínica" },
  { id: "Solar", labelEn: "Solar", labelTa: "சோலார் மின்சக்தி", labelEs: "Energía solar" },
  { id: "Education", labelEn: "Education", labelTa: "கல்வித் துறை", labelEs: "Educación" },
  { id: "Manufacturing", labelEn: "Manufacturing", labelTa: "உற்பத்தித் துறை", labelEs: "Manufactura" },
  { id: "Retail", labelEn: "Retail", labelTa: "சில்லறை வணிகம்", labelEs: "Venta minorista" },
  { id: "Other", labelEn: "Other Business", labelTa: "இதர வணிகம்", labelEs: "Otro negocio" }
];

export function CampaignConfigurator() {
  const { language } = useLanguage();
  const lang = (language as "en" | "ta" | "es") || "en";

  // Form states
  const [goal, setGoal] = useState("whatsapp");
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(["Google", "WhatsApp"]);
  const [budgetIndex, setBudgetIndex] = useState(2); // default ₹10,000
  const [duration, setDuration] = useState("30 Days");
  const [businessCategory, setBusinessCategory] = useState("Solar");

  // Lead fields
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handlePlatformToggle = (plat: string) => {
    if (selectedPlatforms.includes(plat)) {
      if (selectedPlatforms.length > 1) {
        setSelectedPlatforms(selectedPlatforms.filter(p => p !== plat));
      }
    } else {
      setSelectedPlatforms([...selectedPlatforms, plat]);
    }
  };

  const currentBudget = BUDGETS[budgetIndex];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      setErrorMsg(
        lang === "ta" 
          ? "தயவுசெய்து உங்கள் பெயர் மற்றும் மொபைல் எண்ணை உள்ளிடவும்" 
          : lang === "es"
          ? "Por favor, introduzca su nombre y número de contacto"
          : "Please enter your name and contact number."
      );
      return;
    }

    setErrorMsg("");
    setLoading(true);

    const goalLabel = GOALS.find(g => g.id === goal)?.labelEn || goal;

    const leadData = {
      name,
      phone,
      email,
      campaignDetails: {
        goal: goalLabel,
        platforms: selectedPlatforms.join(", "),
        estimatedBudget: `₹${currentBudget.toLocaleString("en-IN")}`,
        duration,
        businessCategory
      },
      message: `Interactive Campaign Configurator submission: Target Goal is "${goalLabel}" on [${selectedPlatforms.join(", ")}] over ${duration} with budget ₹${currentBudget.toLocaleString("en-IN")} in the "${businessCategory}" sector.`
    };

    try {
      const response = await fetch("/api/submit-lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(leadData)
      });

      if (!response.ok) {
        throw new Error("Failed to store lead details");
      }

      setSuccess(true);
      
      // Post-treatment: provide clear option to WhatsApp or Email directly with preformatted content
      const summaryText = `*Campaign Brief Request*
Name: ${name}
Phone: ${phone}
Email: ${email || "None"}
Business Sector: ${businessCategory}
Campaign Goal: ${goalLabel}
Target Platforms: ${selectedPlatforms.join(", ")}
Planned Budget: ₹${currentBudget.toLocaleString("en-IN")}
Duration: ${duration}`;

      // Trigger automatic popup / backup direct buttons below the success block
    } catch (err: any) {
      console.error(err);
      setErrorMsg("Something went wrong, but you can still submit directly via WhatsApp or Email.");
    } finally {
      setLoading(false);
    }
  };

  const handleWhatsAppInstant = () => {
    const goalLabel = GOALS.find(g => g.id === goal)?.labelEn || goal;
    const txt = `Hi CyberAD! I built a campaign on your Configurator:
• Name: ${name || "Client"}
• Phone: ${phone || "N/A"}
• Sector: ${businessCategory}
• Goal: ${goalLabel}
• Platforms: ${selectedPlatforms.join(", ")}
• Budget: ₹${currentBudget.toLocaleString("en-IN")}
• Duration: ${duration}`;
    window.open(`https://wa.me/918925693013?text=${encodeURIComponent(txt)}`, "_blank");
  };

  return (
    <section id="campaign" className="py-24 px-4 sm:px-6 bg-brand-offwhite border-t border-brand-charcoal/5 relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-gold/10 text-brand-gold text-xs font-bold uppercase tracking-[0.25em] rounded-full">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === "ta" ? "விளம்பரக் கணக்கீடு" : lang === "es" ? "DISEÑA TU CAMPAÑA" : "CAMPAIGN CONSTRUCTOR"}</span>
          </div>
          <h2 className="text-4xl md:text-6xl serif font-normal text-brand-charcoal">
            {lang === "ta" ? "உங்கள் விளம்பரத்தைத் திட்டமிடுங்கள்" : lang === "es" ? "Inicie su Campaña Publicitaria" : "Start Your Advertising Campaign"}
          </h2>
          <p className="text-sm md:text-base text-brand-charcoal/50 font-light max-w-lg mx-auto leading-relaxed">
            {lang === "ta"
              ? "ஒரு பைசா கூட வீணாகாமல் உங்களது இலக்குகளைத் துல்லியமாக அடைய உங்கள் பட்ஜெட்டிற்கு ஏத்த விளம்பரத்தைத் திட்டமிடுங்கள்."
              : lang === "es"
              ? "Defina los objetivos de su negocio con nuestro configurador interactivo de campañas independientes de fricción."
              : "Tell us what you want to achieve, specify your platforms and budget, and we'll engineer the system."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Configurator Form */}
          <div className="lg:col-span-7 bg-white border border-brand-charcoal/5 rounded-[2.5rem] p-6 md:p-10 shadow-sm space-y-8">
            
            <AnimatePresence mode="wait">
              {!success ? (
                <form key="config-form" onSubmit={handleSubmit} className="space-y-8">
                  
                  {/* Step 1: Goal */}
                  <div className="space-y-4">
                    <label className="text-xs font-mono font-bold uppercase tracking-widest text-brand-charcoal/40 block">
                      1. {lang === "ta" ? "விளம்பரத்தின் முதன்மை நோக்கம் என்ன?" : lang === "es" ? "Seleccione un objetivo comercial:" : "Choose Campaign Goal:"}
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {GOALS.map((g) => {
                        const isSelected = goal === g.id;
                        return (
                          <button
                            type="button"
                            key={g.id}
                            onClick={() => setGoal(g.id)}
                            className={`p-4 rounded-2xl border text-left transition-all duration-300 flex items-center justify-between cursor-pointer ${
                              isSelected 
                                ? "bg-brand-charcoal border-brand-charcoal text-brand-offwhite shadow" 
                                : "bg-brand-offwhite/50 border-brand-charcoal/5 text-brand-charcoal hover:border-brand-gold/30 hover:bg-white"
                            }`}
                          >
                            <span className="text-xs md:text-sm font-medium">
                              {lang === "ta" ? g.labelTa : lang === "es" ? g.labelEs : g.labelEn}
                            </span>
                            <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                              isSelected ? "border-brand-gold bg-brand-gold text-brand-charcoal" : "border-brand-charcoal/20"
                            }`}>
                              {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Step 2: Platform */}
                  <div className="space-y-4">
                    <label className="text-xs font-mono font-bold uppercase tracking-widest text-brand-charcoal/40 block">
                      2. {lang === "ta" ? "எந்த தளங்களில் விளம்பரம் செய்ய வேண்டும்?" : lang === "es" ? "Plataformas objetivo (casilla de verificación):" : "Target Platforms:"}
                    </label>
                    <div className="flex flex-wrap gap-2.5">
                      {PLATFORMS.map((plat) => {
                        const isSelected = selectedPlatforms.includes(plat);
                        return (
                          <button
                            type="button"
                            key={plat}
                            onClick={() => handlePlatformToggle(plat)}
                            className={`px-5 py-3 rounded-full border text-xs font-mono uppercase tracking-wider font-semibold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                              isSelected 
                                ? "bg-brand-gold/15 text-brand-gold border-brand-gold" 
                                : "bg-brand-offwhite/50 border-brand-charcoal/5 text-brand-charcoal/50 hover:bg-white hover:text-brand-charcoal"
                            }`}
                          >
                            <CheckSquare className={`w-4 h-4 ${isSelected ? "text-brand-gold" : "opacity-30"}`} />
                            <span>{plat}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Step 3: Budget and Duration */}
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex justify-between items-end">
                        <label className="text-xs font-mono font-bold uppercase tracking-widest text-brand-charcoal/40">
                          3. {lang === "ta" ? "விளம்பரக் கட்டணத் திட்டம்" : lang === "es" ? "Presupuesto estimado de anuncios:" : "Expected Budget Estimate:"}
                        </label>
                        <span className="text-2xl font-serif font-bold text-brand-gold">
                          ₹{currentBudget.toLocaleString("en-IN")}
                        </span>
                      </div>
                      <input 
                        type="range"
                        min="0"
                        max={BUDGETS.length - 1}
                        step="1"
                        value={budgetIndex}
                        onChange={(e) => setBudgetIndex(parseInt(e.target.value))}
                        className="w-full accent-brand-gold cursor-pointer h-2 bg-brand-charcoal/5 rounded-lg"
                      />
                      <div className="flex justify-between text-[10px] font-mono text-brand-charcoal/40 uppercase tracking-widest">
                        <span>Min (₹1k)</span>
                        <span>Med (₹10k)</span>
                        <span>Max (₹1L+)</span>
                      </div>
                    </div>

                    <div className="space-y-4 pt-2">
                      <label className="text-xs font-mono font-bold uppercase tracking-widest text-brand-charcoal/40 block">
                        4. {lang === "ta" ? "விளம்பரக் காலம்:" : lang === "es" ? "Duración de campaña:" : "Campaign Duration:"}
                      </label>
                      <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                        {DURATIONS.map((dur, idx) => {
                          const isSelected = duration === dur;
                          const mappedLabel = lang === "ta" ? DURATIONS_TA[idx] : lang === "es" ? DURATIONS_ES[idx] : dur;
                          return (
                            <button
                              type="button"
                              key={dur}
                              onClick={() => setDuration(dur)}
                              className={`py-2 px-1 text-center rounded-xl border text-xs font-medium cursor-pointer transition-all ${
                                isSelected 
                                  ? "bg-brand-charcoal border-brand-charcoal text-brand-offwhite font-bold" 
                                  : "bg-brand-offwhite/50 border-brand-charcoal/5 text-brand-charcoal hover:bg-white"
                              }`}
                            >
                              {mappedLabel}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Step 4: Business Category */}
                  <div className="space-y-4">
                    <label className="text-xs font-mono font-bold uppercase tracking-widest text-brand-charcoal/40 block">
                      5. {lang === "ta" ? "வணிகத்தின் வகை:" : lang === "es" ? "Categoría del negocio:" : "Your Business Sector:"}
                    </label>
                    <select
                      value={businessCategory}
                      onChange={(e) => setBusinessCategory(e.target.value)}
                      className="w-full p-4 bg-brand-offwhite border border-brand-charcoal/5 text-brand-charcoal rounded-2xl text-xs md:text-sm font-medium outline-none focus:border-brand-gold transition-colors block"
                    >
                      {CATEGORIES.map((cat) => (
                        <option key={cat.id} value={cat.id}>
                          {lang === "ta" ? cat.labelTa : lang === "es" ? cat.labelEs : cat.labelEn}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Customer Information with Name, Phone, Email */}
                  <div className="pt-6 border-t border-brand-charcoal/5 space-y-4">
                    <label className="text-xs font-mono font-bold uppercase tracking-widest text-brand-charcoal/40 block">
                      {lang === "ta" ? "உங்கள் தொடர்பு விவரங்களைப் பகிரவும்:" : lang === "es" ? "Sus detalles de contacto:" : "Your Contact Details:"}
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input 
                        type="text"
                        placeholder={lang === "ta" ? "உங்கள் பெயர் *" : lang === "es" ? "Su name *" : "Your Name *"}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="p-4 bg-brand-offwhite border border-brand-charcoal/5 text-brand-charcoal text-xs md:text-sm rounded-2xl outline-none focus:border-brand-gold"
                      />
                      <input 
                        type="tel"
                        placeholder={lang === "ta" ? "மொபைல் எண் (WhatsApp) *" : lang === "es" ? "WhatsApp/Teléfono *" : "WhatsApp/Phone Number *"}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        className="p-4 bg-brand-offwhite border border-brand-charcoal/5 text-brand-charcoal text-xs md:text-sm rounded-2xl outline-none focus:border-brand-gold"
                      />
                    </div>
                    <input 
                      type="email"
                      placeholder={lang === "ta" ? "மின்னஞ்சல் முகவரி (விரும்பினால்)" : lang === "es" ? "Email (opcional)" : "Email Address (optional)"}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full p-4 bg-brand-offwhite border border-brand-charcoal/5 text-brand-charcoal text-xs md:text-sm rounded-2xl outline-none focus:border-brand-gold block"
                    />
                  </div>

                  {errorMsg && (
                    <p className="p-3 bg-red-50 text-red-600 rounded-xl text-xs font-medium">
                      {errorMsg}
                    </p>
                  )}

                  <button
                    disabled={loading}
                    type="submit"
                    className="w-full p-4 bg-brand-charcoal hover:bg-brand-gold text-white hover:text-brand-charcoal font-bold uppercase text-xs tracking-widest rounded-full transition-all duration-300 shadow cursor-pointer flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <span className="animate-pulse">Processing...</span>
                    ) : (
                      <>
                        <span>{lang === "ta" ? "கட்டண அறிக்கை கோருக" : lang === "es" ? "Solicitar presupuesto" : "Generate Campaign Layout"}</span>
                        <Play className="w-3.5 h-3.5 fill-current" />
                      </>
                    )}
                  </button>

                </form>
              ) : (
                // SUCCESS STATE
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-6 text-center py-8"
                >
                  <div className="w-16 h-16 bg-brand-gold/15 text-brand-gold rounded-full flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8 stroke-[3]" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl md:text-3xl font-serif text-brand-charcoal">
                      {lang === "ta" ? "விளம்பரக் கோரிக்கை சேமிக்கப்பட்டது!" : lang === "es" ? "¡Campaña Diseñada Exitosamente!" : "Campaign Draft Created!"}
                    </h3>
                    <p className="text-sm font-light text-brand-charcoal/60 leading-relaxed max-w-md mx-auto">
                      {lang === "ta"
                        ? "அருமை! உங்கள் கணக்கீடு விவரங்கள் எமது சிஸ்டம் டேட்டாபேஸில் பத்திரமாக பதிவாகியுள்ளது. எங்களது வாட்ஸ்அப் அல்லது மின்னஞ்சல் நேரடி தொடர்பு மூலம் இந்த அறிக்கையை உடனே பெற கீழ் உள்ள பட்டனை சொடுக்கவும்."
                        : lang === "es"
                        ? "Su configuración se ha guardado en la base de datos local. Conéctese ahora por WhatsApp para activar la propuesta de inmediato."
                        : "Awesome! Your custom setup details have been recorded. Our strategist has been notified, but for instant action, send your details to WhatsApp."}
                    </p>
                  </div>

                  <div className="pt-6 flex flex-col sm:flex-row justify-center gap-4">
                    <button
                      onClick={handleWhatsAppInstant}
                      className="px-8 py-4 bg-[#25D366] text-white hover:bg-[#128C7E] rounded-full text-xs font-bold uppercase tracking-widest transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>{lang === "ta" ? "வாட்ஸ்அப்பில் அனுப்பவும்" : lang === "es" ? "Enviar a WhatsApp" : "Send to WhatsApp Now"}</span>
                    </button>
                    <button
                      onClick={() => setSuccess(false)}
                      className="px-8 py-4 bg-brand-charcoal hover:bg-brand-gold text-white hover:text-brand-charcoal rounded-full text-xs font-bold uppercase tracking-widest transition-all cursor-pointer"
                    >
                      {lang === "ta" ? "மீண்டும் கணக்கிடு" : lang === "es" ? "Reiniciar" : "Edit Campaign Info"}
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

          {/* Right Column: Dynamic Realtime Bill / Summary Output Card */}
          <div className="lg:col-span-5 bg-brand-charcoal text-brand-offwhite rounded-[2.5rem] p-6 md:p-8 space-y-6 shadow-xl relative overflow-hidden self-start">
            {/* Ambient Background Blur */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="space-y-4">
              <span className="text-[10px] font-mono tracking-[0.25em] text-brand-gold uppercase block font-semibold pb-2 border-b border-white/5">
                {lang === "ta" ? "நேரடி விளம்பர அறிக்கை" : lang === "es" ? "PROPUESTA DE ESTIMACIÓN" : "ESTIMATION PROPOSAL CURRENTLY"}
              </span>
              
              <div className="space-y-3">
                <span className="text-[10px] font-mono text-brand-offwhite/40 uppercase block">OUTCOME DIRECTION:</span>
                <p className="text-xl font-serif italic text-brand-gold">
                  "{GOALS.find(g => g.id === goal)?.labelEn || goal}"
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5 font-mono text-xs">
                <div>
                  <span className="text-brand-offwhite/40 block text-[10px] uppercase mb-1">PLATFORMS:</span>
                  <span className="font-semibold block text-brand-offwhite">{selectedPlatforms.join(", ")}</span>
                </div>
                <div>
                  <span className="text-brand-offwhite/40 block text-[10px] uppercase mb-1">DURATION:</span>
                  <span className="font-semibold block text-brand-offwhite">
                    {lang === "ta" ? DURATIONS_TA[DURATIONS.indexOf(duration)] || duration : lang === "es" ? DURATIONS_ES[DURATIONS.indexOf(duration)] || duration : duration}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5 font-mono text-xs">
                <div>
                  <span className="text-brand-offwhite/40 block text-[10px] uppercase mb-1">SECTOR:</span>
                  <span className="font-semibold block text-brand-offwhite">{businessCategory}</span>
                </div>
                <div>
                  <span className="text-brand-offwhite/40 block text-[10px] uppercase mb-1">STATUS:</span>
                  <span className="font-semibold text-brand-gold uppercase tracking-wider block">★ VERIFY READY</span>
                </div>
              </div>

              <div className="pt-6 border-t border-white/5 space-y-2">
                <div className="flex justify-between items-baseline font-mono">
                  <span className="text-[10px] text-brand-offwhite/40 uppercase">PROPOSED AD BUDGET:</span>
                  <span className="text-2xl font-serif font-bold text-brand-gold">₹{currentBudget.toLocaleString("en-IN")}</span>
                </div>
                <p className="text-[10px] font-mono text-brand-offwhite/40 leading-relaxed italic">
                  * Budget goes 100% directly to your ad accounts (Google, Meta). No markups.
                </p>
              </div>
            </div>

            {/* Simple outcome explanation keeping in human direct style */}
            <div className="p-4 bg-white/5 rounded-2xl text-[11px] font-light text-brand-offwhite/85 leading-relaxed space-y-1.5">
              <span className="text-brand-gold font-mono uppercase tracking-widest text-[9px] block">Outcome Promise:</span>
              <p>We configure the campaigns, build professional landing pages, write specific copies, and establish the WhatsApp automation. You simply handle the incoming leads.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
