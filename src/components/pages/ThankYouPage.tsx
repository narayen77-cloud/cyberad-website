import { useEffect } from "react";
import { Link } from "../RouterContext";
import { motion } from "motion/react";
import { CheckCircle2, Home, Sparkles } from "lucide-react";
import { trackEvent } from "../../lib/tracking";

export default function ThankYouPage() {
  useEffect(() => {
    // Track thank you pageview
    trackEvent("thank_you_page_view", "Conversions", {
      path: "/thank-you",
      title: "Thank You | Cyber Enterprises"
    });
  }, []);

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-20 bg-gradient-to-b from-brand-offwhite via-brand-offwhite to-white relative overflow-hidden">
      <div className="absolute top-20 right-[-10%] w-[50%] h-[50%] bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-[-10%] w-[45%] h-[45%] bg-brand-charcoal/5 blur-[100px] rounded-full pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.96, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-white border border-brand-charcoal/5 rounded-[2.8rem] p-8 md:p-10 text-center shadow-2xl relative z-10"
      >
        <div className="w-20 h-20 bg-emerald-50 border border-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner relative">
          <CheckCircle2 className="w-10 h-10" />
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute inset-0 rounded-full bg-emerald-500/10 -z-10"
          />
        </div>

        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-charcoal/5 border border-brand-charcoal/5 text-brand-charcoal/60 text-[9px] font-mono font-bold uppercase tracking-wider rounded-full mb-4">
          <Sparkles className="w-3 h-3 text-brand-gold" />
          ENQUIRY RECORDED
        </span>

        <h1 className="text-3xl md:text-4xl serif italic text-brand-charcoal mb-4">
          Thank You!
        </h1>

        <p className="text-sm font-light text-brand-charcoal/70 leading-relaxed mb-8">
          We have successfully recorded your details. Our technical growth partner will analyze your requirements and reach out to discuss your campaign strategy shortly.
        </p>

        <div className="flex flex-col gap-3">
          <Link
            to="/"
            className="w-full py-4 bg-brand-charcoal hover:bg-brand-gold text-brand-offwhite hover:text-brand-charcoal rounded-full text-xs font-mono font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-brand-charcoal/10 hover:shadow-brand-gold/20 cursor-pointer"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
          
          <Link
            to="#contact"
            className="w-full py-3.5 border border-brand-charcoal/10 hover:border-brand-gold text-brand-charcoal hover:text-brand-gold rounded-full text-xs font-mono font-bold uppercase tracking-widest transition-all duration-300 inline-block cursor-pointer"
          >
            Submit Another Inquiry
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
