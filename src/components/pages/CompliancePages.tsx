import { useEffect } from "react";
import { useLanguage } from "../LanguageContext";
import { Link } from "../RouterContext";
import { ShieldCheck, FileText, CheckCircle2, Clock } from "lucide-react";

interface PolicyProps {
  type: "privacy" | "terms" | "cookies";
}

export default function CompliancePages({ type }: PolicyProps) {
  const { language } = useLanguage();
  const lang = (language as "en" | "ta" | "es") || "en";

  useEffect(() => {
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://cyberad.in"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": type === "privacy" ? "Privacy Policy" : type === "terms" ? "Terms & Conditions" : "Cookie Policy",
          "item": `https://cyberad.in/${type === "privacy" ? "privacy-policy" : type === "terms" ? "terms" : "cookie-policy"}`
        }
      ]
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "compliance-schemas";
    script.innerHTML = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById("compliance-schemas");
      if (el) el.remove();
    };
  }, [type]);

  const renderContent = () => {
    switch (type) {
      case "privacy":
        return (
          <div className="space-y-8">
            <header className="mb-12 text-left relative z-10 border-b border-brand-charcoal/5 pb-8">
              <span className="inline-block px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
                DPDP Act Compliance
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-brand-charcoal mb-4 tracking-tight leading-tight">
                Privacy Policy
              </h1>
              <p className="text-xs font-mono text-brand-gold font-bold uppercase tracking-[0.15em] opacity-80">
                Last Updated: April 30, 2026
              </p>
            </header>

            <div className="text-brand-charcoal/80 space-y-8 font-light leading-relaxed text-sm sm:text-base font-sans text-left">
              <p className="text-brand-charcoal/95 text-base sm:text-lg italic font-serif">
                At Cyber Enterprises, we value your privacy and are committed to protecting your personal data in compliance with the Digital Personal Data Protection (DPDP) Act of India. This Privacy Policy explains how we collect, use, and safeguard information when you interact with us or our clients via our WhatsApp Marketing services and website.
              </p>

              <section className="border-t border-brand-charcoal/5 pt-6 space-y-3">
                <h2 className="text-xl font-serif italic text-brand-charcoal flex items-center gap-3">
                  <span className="font-sans font-bold text-xs bg-brand-gold/10 px-2.5 py-1 rounded border border-brand-gold/20 text-brand-gold">1</span>
                  Information We Collect
                </h2>
                <div className="pl-8 text-brand-charcoal/70 space-y-2 text-sm">
                  <p>We collect direct details when you interact with our forms, services, or WhatsApp channels:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>Contact Details:</strong> Name, phone number, and email address.</li>
                    <li><strong>Inquiry Data:</strong> Information you share in the consultation forms.</li>
                    <li><strong>Usage Data:</strong> Details of your interactions with our automated WhatsApp templates (e.g., clicks, schedules).</li>
                  </ul>
                </div>
              </section>

              <section className="border-t border-brand-charcoal/5 pt-6 space-y-3">
                <h2 className="text-xl font-serif italic text-brand-charcoal flex items-center gap-3">
                  <span className="font-sans font-bold text-xs bg-brand-gold/10 px-2.5 py-1 rounded border border-brand-gold/20 text-brand-gold">2</span>
                  How We Use Your Information
                </h2>
                <div className="pl-8 text-brand-charcoal/70 space-y-2 text-sm">
                  <p>We use your information strictly for operational and communication delivery:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>Communication:</strong> To provide instant automated replies to inquiries.</li>
                    <li><strong>Service Delivery:</strong> To share ad setups, brochures, and estimates.</li>
                    <li><strong>Compliance:</strong> To record consent (Opt-ins) required by Meta API policies and Indian law.</li>
                  </ul>
                </div>
              </section>

              <section className="border-t border-brand-charcoal/5 pt-6 space-y-3">
                <h2 className="text-xl font-serif italic text-brand-charcoal flex items-center gap-3">
                  <span className="font-sans font-bold text-xs bg-brand-gold/10 px-2.5 py-1 rounded border border-brand-gold/20 text-brand-gold">3</span>
                  Consent & Opt-Out
                </h2>
                <p className="pl-8 text-brand-charcoal/70 text-sm">
                  We strictly operate on an Opt-in basis. If you choose to stop receiving automated WhatsApp notifications from us, you can reply with <strong>"STOP"</strong> or <strong>"UNSUBSCRIBE"</strong> at any time to instantly revoke consent.
                </p>
              </section>

              <section className="border-t border-brand-charcoal/5 pt-6 space-y-3">
                <h2 className="text-xl font-serif italic text-brand-charcoal flex items-center gap-3">
                  <span className="font-sans font-bold text-xs bg-brand-gold/10 px-2.5 py-1 rounded border border-brand-gold/20 text-brand-gold">4</span>
                  Contact Information
                </h2>
                <p className="pl-8 text-brand-charcoal/70 text-sm">
                  For questions about your data, consent management, or details correction, contact our support team at <a href="mailto:support@cyberad.in" className="text-brand-gold hover:underline">support@cyberad.in</a>.
                </p>
              </section>
            </div>
          </div>
        );

      case "terms":
        return (
          <div className="space-y-8">
            <header className="mb-12 text-left relative z-10 border-b border-brand-charcoal/5 pb-8">
              <span className="inline-block px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
                Legal Contractual Terms
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-brand-charcoal mb-4 tracking-tight leading-tight">
                Terms & Conditions
              </h1>
              <p className="text-xs font-mono text-brand-gold font-bold uppercase tracking-[0.15em] opacity-80">
                Last Updated: April 30, 2026
              </p>
            </header>

            <div className="text-brand-charcoal/80 space-y-8 font-light leading-relaxed text-sm sm:text-base font-sans text-left">
              <p className="text-brand-charcoal/95 text-base sm:text-lg italic font-serif">
                Welcome to Cyber Enterprises. By accessing our services, websites, or engaging our digital growth coordination, you agree to comply with and be bound by the following Terms & Conditions.
              </p>

              <section className="border-t border-brand-charcoal/5 pt-6 space-y-3">
                <h2 className="text-xl font-serif italic text-brand-charcoal flex items-center gap-3">
                  <span className="font-sans font-bold text-xs bg-brand-gold/10 px-2.5 py-1 rounded border border-brand-gold/20 text-brand-gold">1</span>
                  Scope of Services
                </h2>
                <p className="pl-8 text-brand-charcoal/70 text-sm">
                  Cyber Enterprises provides digital marketing consultancy, Meta/Google ad setups, landing page creation, and WhatsApp Cloud API automations. We operate strictly as advisors and support coordinators. We do not guarantee a specific volume of sales as sales depend on external market parameters, pricing, and buyer decisions.
                </p>
              </section>

              <section className="border-t border-brand-charcoal/5 pt-6 space-y-3">
                <h2 className="text-xl font-serif italic text-brand-charcoal flex items-center gap-3">
                  <span className="font-sans font-bold text-xs bg-brand-gold/10 px-2.5 py-1 rounded border border-brand-gold/20 text-brand-gold">2</span>
                  Payments & Billing
                </h2>
                <p className="pl-8 text-brand-charcoal/70 text-sm">
                  All campaign setups, fixed quotes, and subscription service retainers are billed in advance. Ad budgets are paid directly by the client to Google or Meta ad managers. Retainer payments are strictly non-refundable once campaign operations or code development has started.
                </p>
              </section>

              <section className="border-t border-brand-charcoal/5 pt-6 space-y-3">
                <h2 className="text-xl font-serif italic text-brand-charcoal flex items-center gap-3">
                  <span className="font-sans font-bold text-xs bg-brand-gold/10 px-2.5 py-1 rounded border border-brand-gold/20 text-brand-gold">3</span>
                  Limitation of Liability
                </h2>
                <p className="pl-8 text-brand-charcoal/70 text-sm">
                  Cyber Enterprises will not be liable for any ad account suspension, WhatsApp API number blocks by Meta, or business downtime due to external platform server issues. We adhere strictly to Meta and Google ad guidelines to minimize risk.
                </p>
              </section>
            </div>
          </div>
        );

      case "cookies":
        return (
          <div className="space-y-8">
            <header className="mb-12 text-left relative z-10 border-b border-brand-charcoal/5 pb-8">
              <span className="inline-block px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
                User Cookie Settings
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-brand-charcoal mb-4 tracking-tight leading-tight">
                Cookie Policy
              </h1>
              <p className="text-xs font-mono text-brand-gold font-bold uppercase tracking-[0.15em] opacity-80">
                Last Updated: April 30, 2026
              </p>
            </header>

            <div className="text-brand-charcoal/80 space-y-8 font-light leading-relaxed text-sm sm:text-base font-sans text-left">
              <p className="text-brand-charcoal/95 text-base sm:text-lg italic font-serif">
                This Cookie Policy explains how Cyber Enterprises uses cookies and similar tracking pixels to enhance your website experience and collect analytics.
              </p>

              <section className="border-t border-brand-charcoal/5 pt-6 space-y-3">
                <h2 className="text-xl font-serif italic text-brand-charcoal flex items-center gap-3">
                  <span className="font-sans font-bold text-xs bg-brand-gold/10 px-2.5 py-1 rounded border border-brand-gold/20 text-brand-gold">1</span>
                  What are Cookies?
                </h2>
                <p className="pl-8 text-brand-charcoal/70 text-sm">
                  Cookies are small text files stored in your browser by websites you visit. They help the site identify you, save preferences (such as your language choice), and collect anonymous usage patterns.
                </p>
              </section>

              <section className="border-t border-brand-charcoal/5 pt-6 space-y-3">
                <h2 className="text-xl font-serif italic text-brand-charcoal flex items-center gap-3">
                  <span className="font-sans font-bold text-xs bg-brand-gold/10 px-2.5 py-1 rounded border border-brand-gold/20 text-brand-gold">2</span>
                  How We Use Cookies
                </h2>
                <div className="pl-8 text-brand-charcoal/70 space-y-2 text-sm">
                  <p>We use cookies for the following categories:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>Essential Cookies:</strong> Needed to save language preferences and forms inputs.</li>
                    <li><strong>Analytics & Tracking:</strong> Google Analytics 4, Meta Pixel, and Microsoft Clarity cookies are loaded to track traffic metrics and click events dynamically.</li>
                  </ul>
                </div>
              </section>

              <section className="border-t border-brand-charcoal/5 pt-6 space-y-3">
                <h2 className="text-xl font-serif italic text-brand-charcoal flex items-center gap-3">
                  <span className="font-sans font-bold text-xs bg-brand-gold/10 px-2.5 py-1 rounded border border-brand-gold/20 text-brand-gold">3</span>
                  Managing Cookies
                </h2>
                <p className="pl-8 text-brand-charcoal/70 text-sm">
                  You can disable analytics and tracking cookies at any time by configuring your browser's cookie privacy settings. Disabling essential cookies may affect some interactive elements on our website.
                </p>
              </section>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="w-full min-h-[90vh] bg-brand-offwhite pt-32 pb-24 px-4 sm:px-6">
      <main className="max-w-4xl mx-auto bg-white border border-brand-charcoal/5 rounded-[2.5rem] p-8 sm:p-12 md:p-16 shadow-sm relative">
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />

        {renderContent()}

        <div className="mt-12 pt-6 border-t border-brand-charcoal/5 flex items-center justify-between text-xs font-mono font-bold uppercase tracking-wider text-brand-charcoal/40">
          <Link to="/" className="hover:text-brand-gold transition-colors inline-flex items-center gap-1">
            <span>&larr; Return to Home</span>
          </Link>
          <div className="flex gap-4">
            <Link to="/privacy-policy" className={`hover:text-brand-gold ${type === "privacy" ? "text-brand-gold" : ""}`}>Privacy</Link>
            <span>|</span>
            <Link to="/terms" className={`hover:text-brand-gold ${type === "terms" ? "text-brand-gold" : ""}`}>Terms</Link>
            <span>|</span>
            <Link to="/cookie-policy" className={`hover:text-brand-gold ${type === "cookies" ? "text-brand-gold" : ""}`}>Cookies</Link>
          </div>
        </div>
      </main>
    </div>
  );
}
