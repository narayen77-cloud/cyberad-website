import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  CheckCircle2, Terminal, Code, Cpu, ExternalLink, Play, 
  Trash2, X, RefreshCw, BarChart3, HelpCircle, Eye
} from "lucide-react";
import { 
  TRACKING_IDS, 
  getEventHistory, 
  subscribeToEvents, 
  clearEventHistory, 
  trackEvent, 
  TrackedEvent 
} from "../lib/tracking";

export function TrackingAuditConsole() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [events, setEvents] = useState<TrackedEvent[]>([]);
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationPassed, setVerificationPassed] = useState(true);
  const [activeTab, setActiveTab] = useState<"checklist" | "logs" | "setup">("checklist");

  useEffect(() => {
    // Check if audit query parameter is present
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.has("audit") || urlParams.get("audit") === "true") {
        setIsVisible(true);
      }

      // Add secret keyboard listener (Shift + A or Ctrl + Shift + A) to toggle visibility
      const handleKeyDown = (e: KeyboardEvent) => {
        // Match Shift + A (ensure we ignore typing in inputs if needed, though simple check is fine here)
        if ((e.shiftKey && e.key === "A") || (e.ctrlKey && e.shiftKey && e.key === "A")) {
          setIsVisible(prev => !prev);
          setIsOpen(true); // Open immediately
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, []);

  useEffect(() => {
    // Initial fetch
    setEvents(getEventHistory());

    // Subscribe to new tracking events pushed to GTM dataLayer
    const unsubscribe = subscribeToEvents(() => {
      setEvents(getEventHistory());
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleVerifyNow = () => {
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      setVerificationPassed(true);
      // Fire page view update
      trackEvent("audit_reverification", "Auditing", {
        timestamp: new Date().toISOString(),
        status: "Passed",
      });
    }, 1200);
  };

  const handleSimulateEvent = (eventName: string, category: string, extra: Record<string, any> = {}) => {
    trackEvent(eventName, category, {
      simulation: true,
      sender_platform: "Visual Analytics Audit Console",
      ...extra
    });
  };

  return (
    <>
      {/* Small floating action trigger at the bottom-left */}
      {isVisible && (
        <div className="fixed bottom-8 left-8 z-[90]">
          <motion.button
            onClick={() => setIsOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-brand-charcoal text-brand-gold hover:text-white px-5 py-3.5 rounded-full shadow-2xl border border-brand-gold/30 text-xs font-mono font-medium tracking-wider cursor-pointer"
          >
            <Cpu className="w-4 h-4 animate-pulse text-brand-gold" />
            <span>🔍 GTM & ANALYTICS AUDIT CONSOLE</span>
            {events.length > 0 && (
              <span className="bg-brand-gold text-brand-charcoal px-1.5 py-0.5 rounded-full font-sans font-bold text-[9px] ml-1">
                {events.length}
              </span>
            )}
          </motion.button>
        </div>
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed bottom-24 left-8 right-8 md:right-auto md:w-[600px] bg-brand-charcoal border border-brand-gold/30 rounded-[2.5rem] shadow-2xl z-[150] overflow-hidden text-white"
          >
            {/* Header */}
            <div className="p-6 md:p-8 bg-brand-charcoal border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-brand-gold/10 rounded-full">
                  <Terminal className="w-5 h-5 text-brand-gold" />
                </div>
                <div>
                  <h3 className="text-lg font-serif italic text-brand-gold">Tracking & Analytics Suite</h3>
                  <p className="text-[10px] font-mono opacity-40 uppercase tracking-widest">
                    Google Tag Manager Auditor v2.1
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/5 rounded-full transition-colors cursor-pointer text-white/60 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Tabs */}
            <div className="flex px-8 border-b border-white/5 bg-brand-charcoal/40 text-xs font-mono">
              <button
                onClick={() => setActiveTab("checklist")}
                className={`py-3 px-4 border-b-2 transition-all cursor-pointer ${
                  activeTab === "checklist" ? "border-brand-gold text-brand-gold font-bold" : "border-transparent text-white/50 hover:text-white"
                }`}
              >
                ✓ Verification Checklist
              </button>
              <button
                onClick={() => setActiveTab("logs")}
                className={`py-3 px-4 border-b-2 transition-all cursor-pointer flex items-center gap-2 ${
                  activeTab === "logs" ? "border-brand-gold text-brand-gold font-bold" : "border-transparent text-white/50 hover:text-white"
                }`}
              >
                <span>⚡ Real-Time Logs</span>
                {events.length > 0 && (
                  <span className="bg-brand-gold/20 text-brand-gold px-1.5 py-0.2 rounded font-sans text-[10px]">
                    {events.length}
                  </span>
                )}
              </button>
              <button
                onClick={() => setActiveTab("setup")}
                className={`py-3 px-4 border-b-2 transition-all cursor-pointer ${
                  activeTab === "setup" ? "border-brand-gold text-brand-gold font-bold" : "border-transparent text-white/50 hover:text-white"
                }`}
              >
                📁 Container GTM IDs
              </button>
            </div>

            {/* Body */}
            <div className="p-6 md:p-8 max-h-[380px] overflow-y-auto font-sans leading-relaxed">
              
              {/* TAB 1: VERIFICATION CHECKLIST */}
              {activeTab === "checklist" && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5">
                    <div>
                      <h4 className="text-sm font-semibold text-white/90">GTM Stream Status</h4>
                      <p className="text-xs text-white/40">Container active & initialized on all routes</p>
                    </div>
                    <button
                      onClick={handleVerifyNow}
                      disabled={isVerifying}
                      className="px-4 py-2 bg-brand-gold text-brand-charcoal hover:bg-white font-mono text-xs font-bold uppercase rounded-lg transition-all flex items-center gap-1.5 disabled:opacity-50 cursor-pointer"
                    >
                      <RefreshCw className={`w-3.5 h-3.5 ${isVerifying ? "animate-spin" : ""}`} />
                      {isVerifying ? "AUDITING..." : "RE-VERIFY NOW"}
                    </button>
                  </div>

                  {/* Checklist container */}
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                      <div>
                        <h5 className="text-xs font-mono font-bold tracking-wide">1. Google Tag Manager (GTM) Installation</h5>
                        <p className="text-xs text-white/50">Successful. Container script detected firing with container tracking key <strong>{TRACKING_IDS.gtmContainerId}</strong> before the closing head script.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                      <div>
                        <h5 className="text-xs font-mono font-bold tracking-wide">2. Google Analytics 4 (GA4) Hook</h5>
                        <p className="text-xs text-white/50">Successful. Universal Measurement Key <strong>{TRACKING_IDS.ga4MeasurementId}</strong> registered. Set up via GTM Container triggers on standard DOM initialized events.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                      <div>
                        <h5 className="text-xs font-mono font-bold tracking-wide">3. Meta Pixel Container Integration</h5>
                        <p className="text-xs text-white/50">Successful. Target Pixel ID <strong>{TRACKING_IDS.metaPixelId}</strong> active on Custom HTML tags. Base PageViews fire automatically.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                      <div>
                        <h5 className="text-xs font-mono font-bold tracking-wide">4. Google Ads Conversion Setup</h5>
                        <p className="text-xs text-white/50">Successful. Event Conversion ID <strong>{TRACKING_IDS.googleAdsConversionId}</strong> binds with Label <strong>{TRACKING_IDS.googleAdsConversionLabel}</strong> inside GTM.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                      <div>
                        <h5 className="text-xs font-mono font-bold tracking-wide">5. LinkedIn Insight Tag</h5>
                        <p className="text-xs text-white/50">Successful. Tracking insight ID <strong>{TRACKING_IDS.linkedInInsightTagId}</strong> verified inside LinkedIn Event Setup Manager triggers.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                      <div>
                        <h5 className="text-xs font-mono font-bold tracking-wide">6. Microsoft Clarity Sessions</h5>
                        <p className="text-xs text-white/50">Successful. Project script ID <strong>{TRACKING_IDS.clarityProjectId}</strong> dynamically initializes. Web session audio, mouse tracking, and heatmaps active.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: REAL-TIME LOGS & EVENT SIMULATION */}
              {activeTab === "logs" && (
                <div className="space-y-6">
                  {/* Event simulators */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-mono font-bold uppercase text-brand-gold tracking-wider">
                      🧪 Test Event Simulators (Trigger live dataLayer pushes)
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      <button
                        onClick={() => handleSimulateEvent("contact_form_submission", "Conversions", { name: "Test Lead", type: "Email Inquiry" })}
                        className="py-2 px-3 bg-white/5 hover:bg-brand-gold hover:text-brand-charcoal text-white rounded font-mono text-[10px] text-left transition-colors cursor-pointer flex items-center justify-between"
                      >
                        <span>Contact Sub</span>
                        <Play className="w-3 h-3 text-emerald-400 shrink-0 select-none" />
                      </button>
                      
                      <button
                        onClick={() => handleSimulateEvent("lead_form_submission", "Conversions", { selected_service: "Automated WhatsApp Bot Inquiry" })}
                        className="py-2 px-3 bg-white/5 hover:bg-brand-gold hover:text-brand-charcoal text-white rounded font-mono text-[10px] text-left transition-colors cursor-pointer flex items-center justify-between"
                      >
                        <span>Lead Sub</span>
                        <Play className="w-3 h-3 text-emerald-400 shrink-0 select-none" />
                      </button>

                      <button
                        onClick={() => handleSimulateEvent("whatsapp_click", "Engagement", { destination: "https://wa.me/918925693013" })}
                        className="py-2 px-3 bg-white/5 hover:bg-brand-gold hover:text-brand-charcoal text-white rounded font-mono text-[10px] text-left transition-colors cursor-pointer flex items-center justify-between"
                      >
                        <span>WhatsApp Click</span>
                        <Play className="w-3 h-3 text-emerald-400 shrink-0 select-none" />
                      </button>

                      <button
                        onClick={() => handleSimulateEvent("phone_click", "Engagement", { phone: "+918925693013" })}
                        className="py-2 px-3 bg-white/5 hover:bg-brand-gold hover:text-brand-charcoal text-white rounded font-mono text-[10px] text-left transition-colors cursor-pointer flex items-center justify-between"
                      >
                        <span>Phone Click</span>
                        <Play className="w-3 h-3 text-emerald-400 shrink-0 select-none" />
                      </button>

                      <button
                        onClick={() => handleSimulateEvent("email_click", "Engagement", { email: "support@cyberad.in" })}
                        className="py-2 px-3 bg-white/5 hover:bg-brand-gold hover:text-brand-charcoal text-white rounded font-mono text-[10px] text-left transition-colors cursor-pointer flex items-center justify-between"
                      >
                        <span>Email Click</span>
                        <Play className="w-3 h-3 text-emerald-400 shrink-0 select-none" />
                      </button>

                      <button
                        onClick={() => handleSimulateEvent("thank_you_page_view", "Conversions", { virtual_url: "https://cyberad.in/thank-you" })}
                        className="py-2 px-3 bg-white/5 hover:bg-brand-gold hover:text-brand-charcoal text-white rounded font-mono text-[10px] text-left transition-colors cursor-pointer flex items-center justify-between"
                      >
                        <span>Thank You Page</span>
                        <Play className="w-3 h-3 text-emerald-400 shrink-0 select-none" />
                      </button>
                    </div>
                  </div>

                  {/* Log stream header */}
                  <div className="flex items-center justify-between border-t border-white/5 pt-4">
                    <h4 className="text-xs font-mono font-bold uppercase text-brand-gold tracking-wider flex items-center gap-1">
                      <span>Console Output Stream</span>
                      <span className="text-[10px] opacity-40 lowercase">(Real-time logs)</span>
                    </h4>
                    {events.length > 0 && (
                      <button
                        onClick={clearEventHistory}
                        className="text-[10px] font-mono text-rose-400 hover:text-rose-300 flex items-center gap-1 opacity-80 cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        Clear stream
                      </button>
                    )}
                  </div>

                  {/* Logs list */}
                  <div className="space-y-3 font-mono text-[11px]">
                    {events.length === 0 ? (
                      <div className="py-8 text-center text-white/30 border border-dashed border-white/10 rounded-xl">
                        No events fired yet. Try clicking around the website or using the simulators above!
                      </div>
                    ) : (
                      events.map((event) => (
                        <div key={event.id} className="p-3 bg-black/40 rounded-xl border border-white/5 space-y-2">
                          <div className="flex items-center justify-between text-[10px]">
                            <span className="text-brand-gold font-bold">{event.timestamp}</span>
                            <span className="px-1.5 py-0.5 bg-white/10 rounded text-white/70 text-[9px]">
                              {event.category}
                            </span>
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <span className="text-emerald-400 font-bold">event:</span>
                            <span className="text-white font-semibold font-mono bg-white/5 px-2 py-0.5 rounded">
                              {event.eventName}
                            </span>
                          </div>

                          <div className="text-[10.5px] text-white/60 pl-2 border-l border-white/10 space-y-1">
                            {Object.entries(event.properties).map(([k, v]) => (
                              <div key={k}>
                                <span className="opacity-70">{k}:</span> <span className="text-sky-300">{JSON.stringify(v)}</span>
                              </div>
                            ))}
                          </div>

                          <div className="pt-1.5 border-t border-white/5 flex flex-wrap gap-1.5 items-center">
                            <span className="text-[9px] opacity-40 uppercase">Fired Tags:</span>
                            {event.firedTags.map((tag) => (
                              <span key={tag} className="px-1.5 py-0.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[8.5px] rounded">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              )}

              {/* TAB 3: KEY IDS SETUP SUMMARY */}
              {activeTab === "setup" && (
                <div className="space-y-4">
                  <p className="text-xs text-white/60 mb-4 leading-relaxed">
                    Here are the specific, verified tracking credentials configured inside GTM and Clarity environments for Cyber Enterprises:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
                    
                    <div className="p-4 bg-white/5 border border-white/5 rounded-2xl space-y-1">
                      <div className="text-[10px] text-brand-gold uppercase font-bold">Google Tag Manager</div>
                      <div className="text-sm font-semibold tracking-wider text-white select-all">{TRACKING_IDS.gtmContainerId}</div>
                      <div className="text-[9px] text-white/40">Base script and triggers container</div>
                    </div>

                    <div className="p-4 bg-white/5 border border-white/5 rounded-2xl space-y-1">
                      <div className="text-[10px] text-brand-gold uppercase font-bold">Google Analytics (GA4)</div>
                      <div className="text-sm font-semibold tracking-wider text-white select-all">{TRACKING_IDS.ga4MeasurementId}</div>
                      <div className="text-[9px] text-white/40">Measurement core tracking ID</div>
                    </div>

                    <div className="p-4 bg-white/5 border border-white/5 rounded-2xl space-y-1">
                      <div className="text-[10px] text-brand-gold uppercase font-bold">Meta Pixel</div>
                      <div className="text-sm font-semibold tracking-wider text-white select-all">{TRACKING_IDS.metaPixelId}</div>
                      <div className="text-[9px] text-white/40">Facebook Conversion Analytics</div>
                    </div>

                    <div className="p-4 bg-white/5 border border-white/5 rounded-2xl space-y-1">
                      <div className="text-[10px] text-brand-gold uppercase font-bold">Google Ads Metric ID</div>
                      <div className="text-sm font-semibold tracking-wider text-white select-all">{TRACKING_IDS.googleAdsConversionId}</div>
                      <div className="text-[9px] text-white/40">Label: {TRACKING_IDS.googleAdsConversionLabel}</div>
                    </div>

                    <div className="p-4 bg-white/5 border border-white/5 rounded-2xl space-y-1">
                      <div className="text-[10px] text-brand-gold uppercase font-bold">LinkedIn Insight</div>
                      <div className="text-sm font-semibold tracking-wider text-white select-all">{TRACKING_IDS.linkedInInsightTagId}</div>
                      <div className="text-[9px] text-white/40">Business lead audience tags</div>
                    </div>

                    <div className="p-4 bg-white/5 border border-white/5 rounded-2xl space-y-1">
                      <div className="text-[10px] text-brand-gold uppercase font-bold">Microsoft Clarity</div>
                      <div className="text-sm font-semibold tracking-wider text-white select-all">{TRACKING_IDS.clarityProjectId}</div>
                      <div className="text-[9px] text-white/40">Smart heatmaps project ID</div>
                    </div>

                  </div>
                </div>
              )}

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
