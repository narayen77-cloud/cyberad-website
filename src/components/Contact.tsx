import { useLanguage } from "./LanguageContext";
import { MessageCircle } from "lucide-react";

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 px-6 bg-brand-charcoal/[0.02]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-7xl serif italic mb-8 leading-tight">
          {t.contact.title}
        </h2>
        <p className="text-xl text-brand-charcoal/60 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          We don't just run ads; we build systems that scale your value to the right generation.
          The fastest way to connect and get a custom strategy is via WhatsApp.
        </p>
        
        <div className="flex flex-col items-center gap-8">
          <a 
            href="https://wa.me/918925693013" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-4 px-10 py-6 bg-[#25D366] text-white rounded-[2rem] text-xl font-bold hover:scale-105 transition-all shadow-2xl shadow-[#25D366]/30 group"
          >
            <MessageCircle className="w-8 h-8 fill-current group-hover:animate-pulse" />
            Connect on WhatsApp
          </a>
          
          <div className="flex flex-col items-center gap-2">
            <p className="font-serif text-lg italic text-brand-charcoal/80">cyberwaba@gmail.com</p>
            <p className="text-brand-charcoal/40 uppercase tracking-[0.3em] text-[10px] font-bold">
              {t.footer.location}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
