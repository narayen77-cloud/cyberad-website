import { useLanguage } from "./LanguageContext";
import { Instagram, Facebook, MessageCircle, Globe } from "lucide-react";
import { CyberPartnerFooter } from "./CyberPartnerFooter";

export function Footer({ onShowPrivacy, onShowFlyer }: { onShowPrivacy: () => void; onShowFlyer: () => void }) {
  const { t } = useLanguage();

  return (
    <footer className="py-12 border-t border-brand-charcoal/5 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* Cyber Enterprises Digital Partner Footer Badge Preview */}
        <CyberPartnerFooter />

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-brand-charcoal/60 pt-6 border-t border-brand-charcoal/5">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-6">
              <button 
                onClick={onShowFlyer}
                className="text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 border border-brand-gold text-brand-gold rounded-full hover:bg-brand-gold hover:text-brand-charcoal transition-all cursor-pointer"
              >
                Get Digital Flyer
              </button>
              <span className="opacity-20 hidden md:block">|</span>
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
              <button 
                onClick={onShowPrivacy}
                className="text-[10px] font-bold uppercase tracking-[0.2em] hover:text-brand-gold transition-colors cursor-pointer"
              >
                {t.footer.privacy}
              </button>
            </div>
          </div>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">{t.footer.location}</p>
        </div>
      </div>
    </footer>
  );
}
