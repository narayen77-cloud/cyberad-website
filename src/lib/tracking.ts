/**
 * Cyber Enterprises Tracking & Analytics Suite
 * Contains tracking helper methods and GTM hooks.
 */

export interface TrackingIDs {
  gtmContainerId: string;
  ga4MeasurementId: string;
  metaPixelId: string;
  googleAdsConversionId: string;
  googleAdsConversionLabel: string;
  linkedInInsightTagId: string;
  clarityProjectId: string;
}

export const TRACKING_IDS: TrackingIDs = {
  gtmContainerId: "GTM-P9RMQ9CG",
  ga4MeasurementId: "G-VWJ28W6KCV",
  metaPixelId: "283749283749283",
  googleAdsConversionId: "AW-11234567890",
  googleAdsConversionLabel: "lead_submission_conversion",
  linkedInInsightTagId: "5829104",
  clarityProjectId: "m3v1h4n8x2",
};

export interface TrackedEvent {
  id: string;
  timestamp: string;
  eventName: string;
  category: string;
  properties: Record<string, any>;
  firedTags: string[];
}

// Memory tracking queue for live verification console
let eventHistory: TrackedEvent[] = [];
let changeListeners: (() => void)[] = [];

function notifyListeners() {
  changeListeners.forEach((listener) => listener());
}

export function subscribeToEvents(callback: () => void) {
  changeListeners.push(callback);
  return () => {
    changeListeners = changeListeners.filter((l) => l !== callback);
  };
}

export function getEventHistory(): TrackedEvent[] {
  return [...eventHistory];
}

export function clearEventHistory() {
  eventHistory = [];
  notifyListeners();
}

/**
 * Pushes events to GTM dataLayer and custom tracking console
 */
export function trackEvent(
  eventName: string,
  category: string,
  properties: Record<string, any> = {}
) {
  const timestamp = new Date().toLocaleTimeString();
  const eventId = Math.random().toString(36).substr(2, 9);

  // 1. Log to GTM dataLayer
  if (typeof window !== "undefined") {
    const dataLayer = (window as any).dataLayer || [];
    dataLayer.push({
      event: eventName,
      eventCategory: category,
      ...properties,
    });
    (window as any).dataLayer = dataLayer;
  }

  // 2. Identify which tags are configured to fire on this event in the GTM client
  const firedTags: string[] = ["Google Tag Manager"];
  
  if (eventName === "page_view") {
    firedTags.push("GA4 Config Tag (G-VWJ28W6KCV)", "Meta Pixel Base (283749283749283)", "Clarity Base (m3v1h4n8x2)", "LinkedIn Insight Tag (5829104)");
  } else if (eventName.includes("whatsapp") || eventName.includes("click") || eventName.includes("submission")) {
    firedTags.push("GA4 Event Event Tracker", "Meta Pixel Lead Event");
    if (eventName === "lead_form_submission" || eventName === "contact_form_submission") {
      firedTags.push("Google Ads Conversion Linker", "Google Ads Lead Conversion (AW-11234567890)");
    }
  }

  const newEvent: TrackedEvent = {
    id: eventId,
    timestamp,
    eventName,
    category,
    properties,
    firedTags,
  };

  eventHistory.unshift(newEvent);
  
  // Guard container length
  if (eventHistory.length > 50) {
    eventHistory.pop();
  }

  notifyListeners();
}

/**
 * Dynamically initializes Microsoft Clarity integration on runtime
 */
export function initClarityScript() {
  if (typeof window === "undefined" || (window as any).clarityIsInitialized) return;

  const projectId = TRACKING_IDS.clarityProjectId;
  
  try {
    (function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=true;t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];y.parentNode?.insertBefore(t,y);
    })(window as any, document, "clarity", "script", projectId);
    
    (window as any).clarityIsInitialized = true;
    console.log(`Clarity initialized with Project ID: ${projectId}`);
    
    // Track GA4 Configuration on load
    trackEvent("page_view", "Engagement", {
      page_path: window.location.pathname + window.location.search,
      page_title: document.title,
      referrer: document.referrer,
    });
  } catch (err) {
    console.error("Failed to load Clarity script:", err);
  }
}
