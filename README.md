import { useLanguage } from "./LanguageContext";
import { motion } from "motion/react";
import { HelpCircle, Sparkles } from "lucide-react";

interface TranslationConcept {
  concept: string;
  conceptTa: string;
  conceptEs: string;
  realObject: string;
  realObjectTa: string;
  realObjectEs: string;
  image: string;
  caption: string;
  captionTa: string;
  captionEs: string;
}

const CONCEPTS: TranslationConcept[] = [
  {
    concept: "Marketing Funnel",
    conceptTa: "மார்க்கெட்டிங் ஃபனல்",
    conceptEs: "Embudo de Marketing",
    realObject: "Kitchen/Workshop Funnel used to pour liquids",
    realObjectTa: "சமையலறை அல்லது பட்டறை புனல் (Liquid Funnel)",
    realObjectEs: "Embudo de plástico de cocina",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop",
    caption: "Many people see your business. Fewer become interested. Some become active customers.",
    captionTa: "அதிகப் பேர் உங்கள் விளம்பரத்தைப் பார்ப்பார்கள்; சிலர் மட்டுமே ஆர்வம் காட்டுவார்கள்; இறுதியில் சிலர் பொருட்கள் வாங்குவார்கள்.",
    captionEs: "Mucha gente ve su anuncio. Menos se interesan. Algunos terminan comprando."
  },
  {
    concept: "Lead Generation",
    conceptTa: "லீட் ஜெனரேஷன் (வாடிக்கையாளர் ஈர்ப்பு)",
    conceptEs: "Generación de Prospectos",
    realObject: "A robust fishing net or basket",
    realObjectTa: "வலை அல்லது மீன்பிடி கூடை (Fishing Net)",
    realObjectEs: "Red o cesta de pesca",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    caption: "Finding and collecting people who may have a real interest in your services.",
    captionTa: "உங்கள் வணிகத்திற்குத் தேவையான, உண்மையானத் தேவை உள்ள வாடிக்கையாளர்களைத் தேடிக் கண்டறிவது.",
    captionEs: "Identificar y reunir personas que tienen un interés real directo en su negocio."
  },
  {
    concept: "Branding",
    conceptTa: "பிராண்டிங் (அடையாளம்)",
    conceptEs: "Creación de Marca",
    realObject: "Plain container vs. custom glossy labeled bottle",
    realObjectTa: "வெற்றுப் பாட்டில் vs பளபளப்பான முத்திரை பாட்டில்",
    realObjectEs: "Envase genérico vs botella con marca premium",
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=800&auto=format&fit=crop",
    caption: "Making your offline business instantly recognizable and memorable in a crowded street.",
    captionTa: "நெரிசலான தெருவிலும் உங்கள் கடை பெயரையும் முத்திரையையும் மக்கள் எளிதில் அடையாளம் காண்பது.",
    captionEs: "Hacer que su negocio físico sea fácilmente reconocible y memorable en la calle."
  },
  {
    concept: "Website",
    conceptTa: "இணையதளம் (வெப்சைட்)",
    conceptEs: "Sitio Web",
    realObject: "A physical retail store with a clear signboard",
    realObjectTa: "பெரிய பெயர் பலகை கொண்ட உங்களது நேரடிக் கடை",
    realObjectEs: "Tienda física con su propio letrero claro",
    image: "https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=800&auto=format&fit=crop",
    caption: "Your business location on the internet where customers visit to see what you sell.",
    captionTa: "இணையத்தில் உங்கள் நிறுவனத்திற்கான மின்னணு முகவரியும், உங்களது கடையின் தோற்றமும்.",
    captionEs: "La dirección e instalación digital de su tienda en internet para recibir visitas."
  },
  {
    concept: "Content Creation",
    conceptTa: "உள்ளடக்க வடிவம்",
    conceptEs: "Creación de Contenido",
    realObject: "Camera, notebook, printing press, or microphone",
    realObjectTa: "கேமரா, டைரி, பத்திரிகை அச்சு அல்லது மைக்ரோஃபோன்",
    realObjectEs: "Cámara, cuaderno, pluma o micrófono",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop",
    caption: "The accurate information (images, text, voice) people see or hear about your business.",
    captionTa: "மக்கள் உங்கள் கடத்தைப் பற்றிப் படிக்கும், பார்க்கும் அல்லது கேட்கும் உண்மையானத் தகவல்.",
    captionEs: "Toda la información visual, texto o audio de valor que las personas ven sobre su marca."
  },
  {
    concept: "Website Traffic",
    conceptTa: "இணையதள போக்குவரத்து (டிராஃபிக்)",
    conceptEs: "Tráfico Web",
    realObject: "Road with multiple delivery vehicles moving to your shop",
    realObjectTa: "சாலையில் உங்கள் கடையை நோக்கி நகரும் மக்கள் நடமாட்டம்",
    realObjectEs: "Calle con vehículos dirigiéndose a su tienda",
    image: "https://images.unsplash.com/photo-1504270997636-07ddfbd48945?q=80&w=800&auto=format&fit=crop",
    caption: "The flow of active people arriving at your website coordinates daily.",
    captionTa: "தினசரி உங்களது இணையதளக் பக்கத்திற்கு வந்து செல்லும் மக்களின் வருகை.",
    captionEs: "El flujo continuo de personas interesadas que ingresan a su sitio web."
  },
  {
    concept: "Conversion",
    conceptTa: "கன்வெர்ஷன் (விற்பனையாக மாறுதல்)",
    conceptEs: "Conversión",
    realObject: "Many people entering a shop, with only one person making a purchase",
    realObjectTa: "கடைக்குள் நுழையும் பல வாடிக்கையாளர்கள், ஒரு நபர் மட்டுமே பில் போடுவது",
    realObjectEs: "Muchas personas ingresando a tienda, una sola pagando en caja",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=800&auto=format&fit=crop",
    caption: "A casual digital visitor taking action and becoming a paying customer.",
    captionTa: "சாதாரணமாக உங்களை வேடிக்கை பார்த்த நபர் உங்களுக்கு பணம் செலுத்தி வாடிக்கையாளராவது.",
    captionEs: "Un visitante digital que toma acción y se convierte en un cliente de pago."
  }
];

// Custom rendered visual devices to represent concepts directly as requested by the user
function VisualDevice({ concept }: { concept: string }) {
  const { language } = useLanguage();
  const lang = (language as "en" | "ta" | "es") || "en";

  if (concept === "Marketing Funnel") {
    return (
      <div className="absolute inset-0 bg-gradient-to-br from-brand-charcoal via-neutral-900 to-brand-charcoal flex flex-col items-center justify-center p-4 overflow-hidden">
        {/* Abstract grids */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:16px_24px]" />
        
        {/* Funnel geometry */}
        <div className="relative w-28 h-28 flex flex-col items-center justify-center filter drop-shadow-[0_8px_20px_rgba(212,175,55,0.2)]">
          {/* Top funnel rim */}
          <div className="w-24 h-6 bg-gradient-to-r from-brand-gold via-brand-gold/90 to-brand-gold/50 rounded-full border border-brand-gold/50 flex items-center justify-center text-[7.5px] font-mono font-bold text-brand-charcoal tracking-wider">
            AWARENESS
          </div>
          {/* Middle tier */}
          <div className="w-18 h-5.5 bg-gradient-to-r from-brand-gold/90 via-brand-gold/75 to-brand-gold/40 rounded-full border border-brand-gold/45 flex items-center justify-center text-[7px] font-mono font-bold text-brand-charcoal -mt-1.5 z-10">
            INTEREST
          </div>
          {/* Third tier */}
          <div className="w-12 h-5 bg-gradient-to-r from-brand-gold/80 via-brand-gold/60 to-brand-gold/30 rounded-full border border-brand-gold/35 flex items-center justify-center text-[6px] font-mono font-bold text-brand-charcoal -mt-1.5 z-20">
            DESIRE
          </div>
          {/* Bottom spout */}
          <div className="w-4 h-6 bg-gradient-to-b from-brand-gold/70 to-brand-gold/30 rounded-b-md border-x border-b border-brand-gold/25 -mt-1 z-30" />
          
          {/* Coin drop animation */}
          <motion.div 
            animate={{ y: [0, 18, 0], opacity: [1, 0.8, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-2 h-2 rounded-full bg-brand-gold absolute bottom-2 z-40 shadow-[0_0_10px_#d4af37]"
          />
        </div>

        {/* Sticker label exactly as requested */}
        <div className="absolute bottom-2 rotate-[-2deg] bg-yellow-300 text-brand-charcoal font-mono font-black text-[9px] uppercase tracking-wider py-1 px-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,0.15)] border border-brand-charcoal rounded z-50">
          {lang === "ta" ? "வாட்ஸ்அப் ஃபனல்" : lang === "es" ? "EMBUDO WHATSAPP" : "WhatsApp Funnel"}
        </div>
      </div>
    );
  }

  if (concept === "Branding") {
    return (
      <div className="absolute inset-0 bg-gradient-to-br from-brand-charcoal via-neutral-900 to-brand-charcoal flex flex-col items-center justify-center p-4 overflow-hidden">
        {/* Grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:16px_24px]" />
        
        {/* Beautiful glass bottle filled with syrup-like amber liquid */}
        <div className="relative w-28 h-28 flex flex-col items-center justify-end pb-2 filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.4)]">
          {/* Cork crown */}
          <div className="w-4 h-2.5 bg-amber-800 rounded-t border border-amber-950 z-10" />
          {/* Bottle Neck */}
          <div className="w-3.5 h-3 bg-white/20 border-x border-white/30 z-10" />
          
          {/* Main glass bottle with liquid */}
          <div className="relative w-14 h-18 bg-white/10 rounded-2xl border border-white/20 flex items-end justify-center overflow-hidden">
            {/* Shimmers */}
            <div className="absolute left-1 top-1 w-1 h-12 bg-white/10 rounded-full" />
            <div className="absolute right-1 top-1 w-0.5 h-12 bg-white/5 rounded-full" />
            
            {/* Syrup-like viscous liquid */}
            <div className="w-full h-[68%] bg-gradient-to-t from-orange-600 via-amber-500 to-amber-600 border-t border-brand-gold/40 flex flex-col items-center justify-center relative shadow-inner">
              {/* Little liquid bubbles */}
              <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse" />
              <div className="absolute bottom-6 right-3.5 w-1 h-1 bg-white/30 rounded-full animate-bounce" />
            </div>

            {/* Sticker label on the bottle reading "Branding Solution" exactly as requested */}
            <div className="absolute top-3 left-1 right-1 bg-amber-50 border border-amber-900/30 shadow-md rounded-[4px] px-1 py-1 flex flex-col items-center justify-center z-20">
              <span className="font-serif font-bold tracking-tighter text-[5.5px] uppercase text-amber-950 border-b border-amber-950/10 pb-0.5 w-full text-center">
                PREMIUM ELIXIR
              </span>
              <span className="font-mono font-black text-[6px] leading-[1.1] text-brand-charcoal uppercase mt-1 text-center w-full">
                {lang === "ta" ? "பிராண்டிங் சொல்யூஷன்" : lang === "es" ? "SOLUCIÓN DE MARCA" : "Branding Solution"}
              </span>
            </div>
          </div>
        </div>

        {/* Small sticker tag at bottom */}
        <div className="absolute bottom-1 bg-amber-800/90 text-brand-gold border border-brand-gold/20 text-[7px] font-mono px-2 py-0.5 rounded uppercase tracking-wider">
          {lang === "ta" ? "இயற்கை கரைசல்" : lang === "es" ? "ELIXIR CONCENTRADO" : "Concentrated Syrup"}
        </div>
      </div>
    );
  }

  if (concept === "Conversion") {
    return (
      <div className="absolute inset-0 bg-gradient-to-br from-brand-charcoal via-neutral-900 to-brand-charcoal flex flex-col items-center justify-center p-4 overflow-hidden">
        {/* Grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:16px_24px]" />
        
        {/* Shop entrance scene: many grey visitors, ONLY one purchase customer paying */}
        <div className="w-full flex items-center justify-between gap-2 px-1 pb-1">
          {/* Left: Store building outline */}
          <div className="flex flex-col gap-1 px-2 py-1.5 bg-neutral-800 rounded-lg border border-white/5 space-y-1 w-24">
            <span className="text-[7.5px] font-mono text-brand-gold/60 uppercase leading-none block">SHOP DOORWAY</span>
            <div className="flex flex-col gap-1">
              <div className="text-[9px] text-neutral-400 font-mono flex items-center gap-1">
                <span>👤</span> <span className="text-[7px]">Visitor 01</span>
              </div>
              <div className="text-[9px] text-neutral-400 font-mono flex items-center gap-1">
                <span>👤</span> <span className="text-[7px]">Visitor 02</span>
              </div>
              <div className="text-[9px] text-neutral-400 font-mono flex items-center gap-1">
                <span>👤</span> <span className="text-[7px]">Visitor 03</span>
              </div>
            </div>
          </div>

          {/* Center arrow */}
          <div className="flex flex-col items-center shrink-0">
            <span className="text-[8px] font-mono text-white/30 uppercase">Ratio 10:1</span>
            <span className="text-brand-gold text-sm animate-pulse font-bold">➔</span>
          </div>

          {/* Right: The lucky individual making the cash payment */}
          <div className="p-2 bg-brand-gold/15 border-2 border-brand-gold rounded-xl flex flex-col items-center justify-center text-center w-24 relative overflow-hidden animate-bounce">
            <div className="absolute top-0 right-0 w-2 h-2 bg-green-500 rounded-full animate-ping" />
            <span className="text-[8px] text-brand-gold font-bold font-mono">1 CUSTOMER</span>
            <span className="text-base my-0.5">💰💵</span>
            <span className="text-[6.5px] text-white bg-green-600 font-bold px-1.5 rounded uppercase font-mono">
              PAID CASH
            </span>
          </div>
        </div>

        {/* Sticker banner */}
        <div className="absolute bottom-2 rotate-[1deg] bg-green-500 text-white font-mono font-bold text-[8.5px] tracking-widest py-1 px-3 shadow border border-white/20 rounded">
          {lang === "ta" ? "விற்பனை மாற்றம்" : lang === "es" ? "CLIENTE DE PAGO" : "ACTIVE CONVERSION"}
        </div>
      </div>
    );
  }

  // Fallbacks: Show beautiful technical dashboard nodes
  return null;
}

export function JargonTranslator() {
  const { language } = useLanguage();
  const lang = (language as "en" | "ta" | "es") || "en";

  return (
    <section id="jargon-dictionary" className="py-24 px-4 sm:px-6 bg-white border-t border-brand-charcoal/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-gold/10 text-brand-gold text-xs font-bold uppercase tracking-[0.25em] rounded-full">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{lang === "ta" ? "எளிமையான விளக்கங்கள்" : lang === "es" ? "TRADUCTOR DE JERGA" : "JARGON TO OBJECT"}</span>
          </div>
          <h2 className="text-4xl md:text-6xl serif font-normal text-brand-charcoal">
            {lang === "ta" ? "ஜோடிக்கப்பட்ட எளிய விளக்கங்கள்" : lang === "es" ? "Diccionario Sin Jerga Directo" : "No Fancy Jargon, Just Real Objects"}
          </h2>
          <p className="text-sm md:text-base text-brand-charcoal/50 font-light max-w-xl mx-auto leading-relaxed">
            {lang === "ta"
              ? "டிஜிட்டல் உலகத்தை புரிந்து கொள்ள உங்களது அன்றாடப் பயன்பாட்டுப் பொருட்களைக் கொண்டு விளக்கப்பட்ட மார்க்கெட்டிங் அகராதி."
              : lang === "es"
              ? "Explicamos conceptos complejos utilizando objetos cotidianos sencillos para que entienda todo claramente."
              : "We translate complex marketing terms into real everyday objects, so small business owners can understand them without agency secrets."}
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {CONCEPTS.map((concept, index) => {
            // Check if we render a custom visual representation device
            const hasCustomVisual = false;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-brand-offwhite border border-brand-charcoal/5 rounded-[2rem] overflow-hidden hover:border-brand-gold/20 hover:shadow-xl hover:shadow-brand-gold/[0.01] transition-all flex flex-col justify-between"
              >
                {/* Screenshot or representation image / container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900 border-b border-brand-charcoal/5">
                  {hasCustomVisual ? (
                    <VisualDevice concept={concept.concept} />
                  ) : (
                    <>
                      <img 
                        referrerPolicy="no-referrer"
                        src={concept.image} 
                        alt={concept.concept} 
                        className="w-full h-full object-cover grayscale brightness-95 hover:grayscale-0 transition-all duration-700"
                      />
                      <div className="absolute top-3 left-3 bg-brand-charcoal text-brand-gold text-[9px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-full border border-brand-gold/15 shadow">
                        Comparison Object
                      </div>
                    </>
                  )}
                </div>

                {/* Translation Content */}
                <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[9px] font-mono font-medium text-brand-charcoal/40 uppercase">agency word:</span>
                      <span className="text-xs font-mono font-bold line-through text-red-500 opacity-60">
                        {lang === "ta" ? concept.conceptTa : lang === "es" ? concept.conceptEs : concept.concept}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-serif text-brand-charcoal leading-tight">
                      {lang === "ta" ? concept.realObjectTa : lang === "es" ? concept.realObjectEs : concept.realObject}
                    </h3>
                  </div>

                  <div className="pt-3 border-t border-brand-charcoal/5 space-y-1">
                    <span className="text-[9px] font-mono font-medium text-brand-gold uppercase tracking-widest block">Direct Meaning:</span>
                    <p className="text-xs md:text-sm font-light text-brand-charcoal/75 leading-relaxed italic">
                      "{lang === "ta" ? concept.captionTa : lang === "es" ? concept.captionEs : concept.caption}"
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

