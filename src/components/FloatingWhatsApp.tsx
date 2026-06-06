import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import { trackEvent } from "../lib/tracking";

export function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/918925693013"
      target="_blank"
      rel="noreferrer"
      onClick={() => {
        trackEvent("whatsapp_click", "Engagement", { destination: "Floating Widget Bubble" });
        trackEvent("contact_form_submission", "Conversions", { type: "Floating WhatsApp Interaction" });
        trackEvent("thank_you_page_view", "Conversions", { path: "/thank-you-floating", title: "Thank You" });
        
        window.dispatchEvent(
          new CustomEvent("lead_submitted_virtual", {
            detail: { message: "Sticky Float WhatsApp Chat Connection" }
          })
        );
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl shadow-[#25D366]/40 flex items-center justify-center border-4 border-white cursor-pointer"
    >
      <MessageCircle className="w-8 h-8 fill-current" />
    </motion.a>
  );
}
