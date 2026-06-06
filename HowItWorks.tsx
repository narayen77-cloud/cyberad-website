import { useLanguage } from "./LanguageContext";
import { Instagram, Facebook, MessageCircle, Globe } from "lucide-react";
import { CyberPartnerFooter } from "./CyberPartnerFooter";

export function Footer({ onShowPrivacy }: { onShowPrivacy: () => void }) {
  const { language, t } = useLanguage();

  return (
    <footer className="py-12 border-t border-brand-charcoal/5 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* Cyber Enterprises Digital Partner Footer Badge Preview */}
        <CyberPartnerFooter />

        {/* Brand positioning row */}
        <div className="text-center pt-6 pb-2 border-t border-brand-charcoal/5">
          <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-brand-charcoal/60 leading-relaxed px-4">
            {language === 'ta' 
              ? "டிஜிட்டல் வளர்ச்சி • வாட்ஸ்அப் ஆட்டோமேஷன் • உத்திசார் பிராண்டிங் • AI-இயக்க மார்க்கெட்டிங்"
              : "Digital Growth • WhatsApp Automation • Strategic Branding • AI-Driven Marketing"
            }
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-brand-charcoal/60 pt-6 border-t border-brand-charcoal/5">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-6">
              <a href="https://www.facebook.com/share/1XHudMJnxJ/" target="_blank" rel="noreferrer" className="hover:text-brand-gold transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/cybernarayanan?igsh=aDFqamdra3lkYTZ4" target="_blank" rel="noreferrer" className="hover:text-brand-gold transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://wa.me/918925693013" target="_blank" rel="noreferrer" className="hover:text-brand-gold transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="https://www.cyberad.in/" target="_blank" rel="noreferrer" className="hover:text-brand-gold transition-colors">
                <Globe className="w-5 h-5" />
              </a>
            </div>
            <div className="flex items-center gap-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em]">{t.footer.rights}</p>
              <span className="opacity-20">|</span>
              <a 
                href="/privacy-policy.html"
                className="text-[10px] font-bold uppercase tracking-[0.2em] hover:text-brand-gold transition-colors"
              >
                {t.footer.privacy}
              </a>
              <span className="opacity-20">|</span>
              <a 
                href="/refund-policy.html"
                className="text-[10px] font-bold uppercase tracking-[0.2em] hover:text-brand-gold transition-colors"
              >
                {t.footer.refund}
              </a>
            </div>
          </div>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">{t.footer.location}</p>
        </div>
      </div>
    </footer>
  );
}
