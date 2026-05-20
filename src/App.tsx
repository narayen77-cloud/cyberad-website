/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { LanguageProvider } from "./components/LanguageContext";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Industries } from "./components/Industries";
import { AIAgent } from "./components/AIAgent";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { Quote } from "./components/Quote";
import { PrivacyPolicy } from "./components/PrivacyPolicy";
import { DigitalFlyer } from "./components/DigitalFlyer";
import { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";

export default function App() {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showFlyer, setShowFlyer] = useState(false);

  useEffect(() => {
    if (showPrivacy || showFlyer) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showPrivacy, showFlyer]);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-brand-offwhite text-brand-charcoal font-sans selection:bg-brand-gold/30">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <Industries />
          <Quote />
          <AIAgent />
          <Contact />
        </main>
        <Footer 
          onShowPrivacy={() => setShowPrivacy(true)} 
          onShowFlyer={() => setShowFlyer(true)}
        />
        <FloatingWhatsApp />

        <AnimatePresence>
          {showPrivacy && (
            <PrivacyPolicy onClose={() => setShowPrivacy(false)} />
          )}
          {showFlyer && (
            <DigitalFlyer onClose={() => setShowFlyer(false)} />
          )}
        </AnimatePresence>
      </div>
    </LanguageProvider>
  );
}

