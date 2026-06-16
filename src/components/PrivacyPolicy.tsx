import { useLanguage } from "./LanguageContext";
import { motion } from "motion/react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PrivacyPolicy({ onClose }: { onClose: () => void }) {
  const { language } = useLanguage();

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] bg-brand-offwhite overflow-y-auto px-6 py-20"
    >
      <div className="max-w-3xl mx-auto relative">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={onClose}
          className="fixed top-8 right-8 rounded-full bg-brand-charcoal/5 hover:bg-brand-charcoal/10"
        >
          <X className="w-6 h-6" />
        </Button>

        <header className="mb-12">
          <h1 className="text-4xl serif italic mb-4">Privacy Policy for Cyber Enterprises</h1>
          <p className="text-xs font-bold uppercase tracking-widest opacity-40">Last Updated: April 30, 2024</p>
        </header>

        <div className="prose prose-brand max-w-none text-brand-charcoal/80 space-y-8 font-light leading-relaxed">
          <section>
            <p>At Cyber Enterprises, we value your privacy and are committed to protecting your personal data in compliance with the Digital Personal Data Protection (DPDP) Act of India. This Privacy Policy explains how we collect, use, and safeguard information when you interact with us or our clients via our WhatsApp Marketing services and website.</p>
          </section>

          <section>
            <h2 className="text-2xl serif italic mb-4 text-brand-charcoal">1. Information We Collect</h2>
            <p>We may collect the following information when you interact with our WhatsApp services or website:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>Contact Details:</strong> Name, phone number, and email address.</li>
              <li><strong>Inquiry Data:</strong> Information you provide when asking about our services (e.g., school admissions, solar installations).</li>
              <li><strong>Usage Data:</strong> Details of your interactions with our automated WhatsApp flows (e.g., button clicks, message read status).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl serif italic mb-4 text-brand-charcoal">2. How We Use Your Information</h2>
            <p>We use the collected data for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>Communication:</strong> To provide instant automated responses to your inquiries on WhatsApp.</li>
              <li><strong>Service Delivery:</strong> To share brochures, fee structures, and promotional materials as requested by you.</li>
              <li><strong>Lead Management:</strong> To help our clients connect with interested prospects.</li>
              <li><strong>Compliance:</strong> To maintain records of user consent (Opt-ins) as required by Meta and Indian law.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl serif italic mb-4 text-brand-charcoal">3. WhatsApp Communication & Consent</h2>
            <p><strong>Opt-in:</strong> We only send marketing messages to users who have provided explicit consent via website forms, ads, or by messaging us first.</p>
            <p><strong>Opt-out:</strong> You can stop receiving messages at any time by replying with "STOP" or "UNSUBSCRIBE".</p>
            <p><strong>24-Hour Window:</strong> We adhere to Meta’s policy of responding within 24 hours of a user-initiated message.</p>
          </section>

          <section>
            <h2 className="text-2xl serif italic mb-4 text-brand-charcoal">4. Data Sharing and Security</h2>
            <p><strong>No Data Selling:</strong> We do not sell, rent, or trade your personal data to third-party data brokers.</p>
            <p><strong>Service Providers:</strong> We share data only with verified Business Solution Providers (BSPs) and Meta.</p>
            <p><strong>Security:</strong> We implement industry-standard encryption to protect your data from unauthorized access or breaches.</p>
          </section>

          <section>
            <h2 className="text-2xl serif italic mb-4 text-brand-charcoal">5. Your Rights</h2>
            <p>Under the DPDP Act, you have the right to access and review data, request corrections, request deletion, and withdraw consent at any time.</p>
          </section>

          <footer className="pt-12 border-t border-brand-charcoal/5">
            <h2 className="text-xl serif italic mb-4 text-brand-charcoal">6. Contact Us</h2>
            <p className="font-medium">Cyber Enterprises</p>
            <p>184/12 E Hospital Road, Cuddalore, Tamil Nadu</p>
            <p>Email: <a href="mailto:support@cyberad.in" className="hover:underline text-brand-gold">support@cyberad.in</a></p>
            <p>WhatsApp: 9092979797</p>
          </footer>
        </div>
        
        <div className="mt-20 flex justify-center">
          <Button onClick={onClose} className="rounded-full px-12 bg-brand-charcoal text-brand-offwhite h-14">
            Close Policy
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
