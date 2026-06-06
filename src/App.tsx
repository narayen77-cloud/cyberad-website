/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { LanguageProvider } from "./components/LanguageContext";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { WhatDoYouNeed } from "./components/WhatDoYouNeed";
import { Services } from "./components/Services";
import { HowItWorks } from "./components/HowItWorks";
import { SampleBuilds } from "./components/SampleBuilds";
import { JargonTranslator } from "./components/JargonTranslator";
import { WhyWorkWithMe } from "./components/WhyWorkWithMe";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { PrivacyPolicy } from "./components/PrivacyPolicy";
import { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";

export default function App() {
  const [showPrivacy, setShowPrivacy] = useState(false);

  useEffect(() => {
    if (showPrivacy) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showPrivacy]);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-brand-offwhite text-brand-charcoal font-sans selection:bg-brand-gold/30">
        <Navbar />
        <main>
          <Hero />
          {/* Section 1 — What Do You Need? (8 large outcome-driven options) */}
          <WhatDoYouNeed />
          
          {/* Section: Dynamic Service Offerings */}
          <Services />

          {/* Section 3 — How It Works (Timeline-based 4 steps) */}
          <HowItWorks />

          {/* Section 4 — Recent Work (Completed project screenshots) */}
          <SampleBuilds />

          {/* Visual Language — Jargon to Object Translation */}
          <JargonTranslator />

          {/* Section 5 — Why Work With Me? (Outcome Positioning) */}
          <WhyWorkWithMe />

          {/* Clean Local Contact Form (WhatsApp / Email only, as requested) */}
          <Contact />
        </main>
        <Footer 
          onShowPrivacy={() => setShowPrivacy(true)} 
        />
        <FloatingWhatsApp />

        <AnimatePresence>
          {showPrivacy && (
            <PrivacyPolicy onClose={() => setShowPrivacy(false)} />
          )}
        </AnimatePresence>
      </div>
    </LanguageProvider>
  );
}

