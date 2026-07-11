/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { LanguageProvider } from "./components/LanguageContext";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { SampleBuilds } from "./components/SampleBuilds";
import { WhyWorkWithMe } from "./components/WhyWorkWithMe";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { PrivacyPolicy } from "./components/PrivacyPolicy";
import { TrackingAuditConsole } from "./components/TrackingAuditConsole";
import { initClarityScript, trackEvent } from "./lib/tracking";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CheckCircle2, MessageSquare, X } from "lucide-react";

export default function App() {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [thankYouMessage, setThankYouMessage] = useState("");

  useEffect(() => {
    // 1. Initialize MS Clarity session logging
    initClarityScript();

    // 2. Fire the default entry base Page View event to GTM
    trackEvent("page_view", "Engagement", {
      page_title: "Cyber Enterprises | Premium Digital Marketing & AI Growth Systems",
      page_path: "/home",
      referrer: document.referrer,
    });
  }, []);

  useEffect(() => {
    if (showPrivacy || showThankYou) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showPrivacy, showThankYou]);

  // Global listener for dynamic Thank-You simulations
  useEffect(() => {
    const handleInquiryAction = (e: Event) => {
      const customEvent = e as CustomEvent;
      setThankYouMessage(customEvent.detail?.message || "Our strategist has been alerted and is connecting with you now.");
      setShowThankYou(true);
    };

    window.addEventListener("lead_submitted_virtual", handleInquiryAction);
    return () => {
      window.removeEventListener("lead_submitted_virtual", handleInquiryAction);
    };
  }, []);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-brand-offwhite text-brand-charcoal font-sans selection:bg-brand-gold/30">
        <Navbar />
        <main>
          <Hero />

          {/* Section 3 — How It Works (Timeline-based 4 steps) */}
          <HowItWorks />

          {/* Section 4 — Recent Work (Completed project screenshots) */}
          <SampleBuilds />

          {/* Section 5 — Why Work With Me? (Outcome Positioning) */}
          <WhyWorkWithMe />

          {/* Clean Local Contact Form (WhatsApp / Email only, as requested) */}
          <Contact />
        </main>
        <Footer 
          onShowPrivacy={() => setShowPrivacy(true)} 
        />

        {/* Dynamic Auditing Debug Drawer Console */}
        <TrackingAuditConsole />

        {/* Global Thank You Page Modal */}
        <AnimatePresence>
          {showThankYou && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              role="dialog"
              className="fixed inset-0 z-[300] flex items-center justify-center p-4 bg-brand-charcoal/90 backdrop-blur-sm"
            >
              <motion.div
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                className="bg-white rounded-[2rem] border border-brand-charcoal/5 max-w-md w-full p-8 text-center relative shadow-2xl"
              >
                <button
                  onClick={() => setShowThankYou(false)}
                  className="absolute top-6 right-6 p-1.5 hover:bg-brand-charcoal/5 rounded-full transition-colors cursor-pointer text-brand-charcoal/40 hover:text-brand-charcoal"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <h3 className="text-2xl md:text-3xl serif italic text-brand-charcoal mb-4">
                  Thank You!
                </h3>
                
                <p className="text-base font-semibold text-brand-charcoal mb-2">
                  Your enquiry has been received successfully.
                </p>

                <p className="text-sm font-light text-brand-charcoal/60 leading-relaxed mb-8">
                  Thank you for contacting Cyberad. Our team will review your request and get in touch with you shortly.
                </p>

                <button
                  onClick={() => setShowThankYou(false)}
                  className="w-full py-3.5 bg-brand-charcoal hover:bg-brand-gold hover:text-brand-charcoal text-white rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer"
                >
                  Return to Home
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showPrivacy && (
            <PrivacyPolicy onClose={() => setShowPrivacy(false)} />
          )}
        </AnimatePresence>
      </div>
    </LanguageProvider>
  );
}

