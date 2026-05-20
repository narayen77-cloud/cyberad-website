import { useLanguage } from "./LanguageContext";
import { ThumbsUp, Send, Heart, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export function CyberPartnerFooter() {
  const { language } = useLanguage();

  const isTamil = language === "ta";

  // Pre-filled WhatsApp details
  const phoneNumber = "918925693013";
  const appreciationText = encodeURIComponent("I visited this website and appreciated the experience.");
  const inquiryText = encodeURIComponent("Hello Cyber Enterprises, I am interested in creating a website/business presence similar to this.");

  const appreciationUrl = `https://wa.me/${phoneNumber}?text=${appreciationText}`;
  const inquiryUrl = `https://wa.me/${phoneNumber}?text=${inquiryText}`;

  // GTM and GA Tracking function
  const handleTracking = (buttonName: string) => {
    if (typeof window !== "undefined") {
      // Ensure dataLayer exists
      (window as any).dataLayer = (window as any).dataLayer || [];
      
      // Push direct event to GTM / GA4
      (window as any).dataLayer.push({
        event: "cyber_footer_click",
        button_clicked: buttonName,
        destination_url: buttonName === "appreciate" ? appreciationUrl : inquiryUrl,
        client_domain: "cyberad.in",
        timestamp: new Date().toISOString()
      });
    }
  };

  return (
    <div 
      id="cyber-partner-section" 
      className="w-full max-w-4xl mx-auto mt-8 p-6 md:p-8 bg-neutral-50/75 border border-brand-charcoal/5 rounded-3xl"
    >
      <div className="flex flex-col items-center text-center space-y-4">
        {/* Humble, loving badge */}
        <div className="flex items-center gap-2 text-brand-charcoal/40 text-[11px] font-bold uppercase tracking-[0.2em]">
          <Heart className="w-3 h-3 text-brand-gold animate-pulse fill-brand-gold/10" />
          <span>
            {isTamil ? "வடிவமைப்பு & டிஜிட்டல் பார்ட்னர்" : "Digital Partner & Support"}
          </span>
          <span className="opacity-30">•</span>
          <a 
            href="https://cyberad.in" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-brand-gold hover:underline transition-all font-sans lowercase tracking-wide"
          >
            cyberad.in
          </a>
        </div>

        {/* Respectful message */}
        <p className="max-w-xl text-xs md:text-sm text-brand-charcoal/60 leading-relaxed font-sans font-normal">
          {isTamil ? (
            "நாங்கள் உங்களை மனதார வரவேற்கிறோம். எங்கள் பிராண்டான சைபர் என்டர்பிரைசஸ் மூலம் இந்த இணையதளம் நேர்த்தியாக வடிவமைக்கப்பட்டுள்ளது. பார்வையாளர்கள் எளிதாகவும் வேகமாகவும் தேவையானதை பெற வழிவகுக்கிறது."
          ) : (
            "We are deeply grateful for your presence. This website is respectfully designed and digitally supported with care by Cyber Enterprises to bridge trust, traditional values, and digital growth."
          )}
        </p>

        {/* CTA Buttons in a single line/flex block with pristine spacing */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto pt-2">
          {/* 👍 Appreciated This Website */}
          <motion.a
            id="gtm-appreciate-btn"
            href={appreciationUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleTracking("appreciate")}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-2.5 w-full sm:w-auto px-5 py-3 bg-white border border-brand-charcoal/10 rounded-full text-xs font-bold text-brand-charcoal hover:shadow-md hover:border-brand-gold/30 transition-all cursor-pointer"
          >
            <ThumbsUp className="w-4 h-4 text-brand-gold" />
            <span>
              {isTamil ? "👍 இணையதளம் பிடித்திருக்கிறது" : "👍 Appreciated This Website"}
            </span>
          </motion.a>

          {/* 📩 Interested in Something Similar */}
          <motion.a
            id="gtm-similar-btn"
            href={inquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleTracking("similar")}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-2.5 w-full sm:w-auto px-6 py-3 bg-brand-charcoal text-white rounded-full text-xs font-bold hover:bg-neutral-800 hover:shadow-lg transition-all cursor-pointer"
          >
            <Send className="w-3.5 h-3.5 text-brand-gold" />
            <span>
              {isTamil ? "📩 இதே போன்ற சேவை தேவை" : "📩 Interested in Something Similar"}
            </span>
          </motion.a>
        </div>
        
        {/* Discrete sub-text */}
        <div className="text-[9px] text-brand-charcoal/30 uppercase tracking-widest pt-2">
          {isTamil ? "ஒரே கிளிக் தொடர்பு • தட்டச்சு செய்ய வேண்டியதில்லை" : "One-Click Instant Connect • No Typing Required"}
        </div>
      </div>
    </div>
  );
}
