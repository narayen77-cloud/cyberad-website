/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { LanguageProvider } from "./components/LanguageContext";
import { RouterProvider, useRouter } from "./components/RouterContext";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { TrackingAuditConsole } from "./components/TrackingAuditConsole";
import { initClarityScript } from "./lib/tracking";
import { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";

// Page Imports
import Home from "./components/pages/Home";
import ThankYouPage from "./components/pages/ThankYouPage";
import NotFound from "./components/pages/NotFound";
import CompliancePages from "./components/pages/CompliancePages";

function AppContent() {
  const { path } = useRouter();

  useEffect(() => {
    initClarityScript();
  }, []);

  const renderActivePage = () => {
    switch (path) {
      case "/":
        return <Home />;
      case "/privacy-policy":
        return <CompliancePages type="privacy" />;
      case "/terms":
        return <CompliancePages type="terms" />;
      case "/cookie-policy":
        return <CompliancePages type="cookies" />;
      case "/thank-you":
        return <ThankYouPage />;
      default:
        return <NotFound />;
    }
  };

  return (
    <div className="min-h-screen bg-brand-offwhite text-brand-charcoal font-sans selection:bg-brand-gold/30 flex flex-col justify-between">
      <div>
        <Navbar />
        <main className="pt-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={path}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              {renderActivePage()}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      <Footer onShowPrivacy={() => { window.history.pushState(null, "", "/privacy-policy"); window.dispatchEvent(new PopStateEvent("popstate")); }} />

      <TrackingAuditConsole />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <RouterProvider>
        <AppContent />
      </RouterProvider>
    </LanguageProvider>
  );
}


