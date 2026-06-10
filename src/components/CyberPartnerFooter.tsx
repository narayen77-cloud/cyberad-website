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
      className="w-full max-w-4xl mx-auto mt-8 p-6 md:p-8 bg-neutral-50/75 border border-brand-charcoal/5 rounded-3xl animate-fadeIn"
    >
      <div className="flex flex-col items-center text-center space-y-4">
        {/* Humble, loving badge */}
        <div className="flex items-center gap-2 text-brand-charcoal/40 text-[11px] font-bold uppercase tracking-[0.2em]">
          <Heart className="w-3 h-3 text-brand-gold animate-pulse fill-brand-gold/10" />
          <span>
            {isTamil ? "வடிவமைப்பு & டிஜிட்டல் பார்ட்னர்" : "Digital Partner & Support"}
          </span>
        </div>

        {/* Respectful message */}
        <p className="max-w-2xl text-xs md:text-sm text-brand-charcoal/70 leading-relaxed font-sans font-normal tracking-wide px-4">
          {isTamil ? (
            "சைபர் என்டர்பிரைசஸ் ஒரு முதன்மையான, குடும்பத்திற்குச் சொந்தமான டிஜிட்டல் மார்க்கெட்டிங் மற்றும் தொழில்நுட்ப ஆலோசனை நிறுவனமாக செயல்படுகிறது. நாங்கள் உலகெங்கிலும் உள்ள பிராண்டுகளுக்கு நம்பிக்கையையும், பாரம்பரிய மதிப்புகளையும் மற்றும் அதிநவீன டிஜிட்டல் வளர்ச்சி தீர்வுகளையும் இணைக்கிறோம்."
          ) : (
            "Cyber Enterprises operates as a premier, family-owned digital marketing and technology consultancy. We bridge trust, traditional values, and cutting-edge digital growth solutions for brands across the world."
          )}
        </p>
      </div>
    </div>
  );
}
