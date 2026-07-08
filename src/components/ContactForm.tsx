import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, ShieldAlert, Sparkles, Send } from 'lucide-react';
import { ContactSubmission } from '../types';
import { useLanguage } from '../context/LanguageContext';

export default function ContactForm() {
  const { language, t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    companyName: '' // Will hold the 'Place of the Property'
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [submissionDetails, setSubmissionDetails] = useState<ContactSubmission | null>(null);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg(null);

    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY || "0558b39e-9300-4d1b-ae16-305c2f725d68";

    const payload = {
      access_key: accessKey,
      subject: `New Real Estate Campaign Lead - ${formData.name}`,
      from_name: "ERDM Lead Engine",
      name: formData.name,
      email: formData.email || "Not Provided",
      phone: formData.phone,
      property_location: formData.companyName
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(payload)
      });
      const result = await response.json();
      if (result.success) {
        const details: ContactSubmission = {
          id: Math.random().toString(36).substring(2, 9),
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          companyName: formData.companyName,
          role: 'real_estate_professional',
          ticketSize: 'standard',
          monthlyBudget: 'default',
          message: `Property Location: ${formData.companyName}`,
          timestamp: new Date().toLocaleTimeString()
        };
        setSubmissionDetails(details);
        setSubmitted(true);

        // Fire GA4 Event with debug_mode: true
        if (typeof window !== 'undefined') {
          const gtag = (window as any).gtag;
          if (typeof gtag === 'function') {
            gtag('event', 'generate_lead', {
              form_name: 'Leadscyber RE Contact Form',
              lead_source: 'Website',
              page_location: window.location.href,
              page_title: document.title,
              debug_mode: true
            });
          }
        }

        // Fire Meta Pixel Event
        if (typeof window !== 'undefined') {
          const fbq = (window as any).fbq;
          if (typeof fbq === 'function') {
            const pixelParams: any = {
              content_name: 'Leadscyber RE Contact Form'
            };
            const metaTestCode = import.meta.env.VITE_META_TEST_EVENT_CODE;
            if (metaTestCode) {
              pixelParams.test_event_code = metaTestCode;
            }
            fbq('track', 'Lead', pixelParams);
          }
        }
      } else {
        setErrorMsg(result.message || "Failed to submit request. Please verify your access key.");
      }
    } catch (err) {
      setErrorMsg("An error occurred. Please verify your network connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="partner-form" className="py-20 px-6 bg-white border-b border-slate-100">
      <div className="max-w-3xl mx-auto">
        
        {/* Centered Form Header */}
        <div className="text-center mb-12 space-y-3">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            {t('headline', 'contactForm')}
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-sans max-w-xl mx-auto leading-relaxed">
            {t('description', 'contactForm')}
          </p>
        </div>

        {/* Form Container Card */}
        <div className="bg-slate-50 border border-slate-200 rounded-[2.5rem] p-6 md:p-10 shadow-sm relative">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form 
                key="contact-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wide block">
                      {language === 'en' ? 'Full Name' : 'முழு பெயர்'}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={t('placeholderName', 'contactForm')}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-indigo-655 focus:ring-1 focus:ring-indigo-650 transition-all font-sans text-slate-800 placeholder-slate-400"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wide block">
                      {t('phone', 'contactForm')}
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder={t('placeholderPhone', 'contactForm')}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-indigo-650 focus:ring-1 focus:ring-indigo-650 transition-all font-sans text-slate-800 placeholder-slate-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Email (Optional) */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wide block">
                      {language === 'en' ? 'Email Address (Optional)' : 'மின்னஞ்சல் முகவரி (விருப்பத்திற்குரியது)'}
                    </label>
                    <input
                      type="email"
                      placeholder={t('placeholderEmail', 'contactForm')}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-indigo-650 focus:ring-1 focus:ring-indigo-650 transition-all font-sans text-slate-800 placeholder-slate-400"
                    />
                  </div>

                  {/* Place of the Property */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wide block">
                      {language === 'en' ? 'Place of the Property' : 'சொத்து அமைந்துள்ள இடம்'}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={language === 'en' ? 'e.g., Adyar, Chennai' : 'எ.கா., அடையார், சென்னை'}
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-indigo-650 focus:ring-1 focus:ring-indigo-650 transition-all font-sans text-slate-800 placeholder-slate-400"
                    />
                  </div>
                </div>

                {/* Error Message Block */}
                {errorMsg && (
                  <div className="bg-rose-50 border border-rose-100 rounded-xl p-3.5 text-xs text-rose-650 flex items-start gap-2.5">
                    <ShieldAlert className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={submitting}
                  className={`w-full ${submitting ? 'bg-slate-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'} text-white font-display font-semibold text-sm py-3.5 px-4 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer mt-2`}
                >
                  {submitting ? (
                    <span>{language === 'en' ? 'Submitting...' : 'சமர்ப்பிக்கப்படுகிறது...'}</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>{t('submitBtn', 'contactForm')}</span>
                    </>
                  )}
                </button>

                <div className="text-center text-[10px] text-slate-400 font-mono mt-2">
                  {t('secureNotice', 'contactForm')}
                </div>
              </motion.form>
            ) : (
              <motion.div 
                key="success-screen"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="space-y-6 text-center py-6"
              >
                <div className="inline-flex items-center justify-center bg-indigo-50 text-indigo-600 p-4 rounded-full border border-indigo-200/50 shadow-sm mb-2">
                  <CheckCircle className="w-10 h-10" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-display font-bold text-2xl text-slate-900">
                    {t('successTitle', 'contactForm')}
                  </h3>
                  <p className="text-xs font-mono text-slate-400 uppercase tracking-wide">
                    {t('successRef', 'contactForm')}: ERDM-{submissionDetails?.id} ● {t('successFiledAt', 'contactForm')} {submissionDetails?.timestamp}
                  </p>
                  <p className="text-sm text-slate-600 max-w-md mx-auto font-sans">
                    {language === 'en'
                      ? <>Thank you, <strong className="text-slate-900 font-semibold">{submissionDetails?.name}</strong>. Your inquiry has been submitted successfully.</>
                      : <>நன்றி, <strong className="text-slate-900 font-semibold">{submissionDetails?.name}</strong>. உங்கள் கோரிக்கை வெற்றிகரமாகச் சமர்ப்பிக்கப்பட்டது.</>}
                  </p>
                </div>

                {/* Lead Goal Summary Card */}
                <div className="bg-white border border-slate-200 rounded-2xl p-6 text-left max-w-md mx-auto space-y-3.5 shadow-sm">
                  <div className="flex items-center gap-2 text-indigo-600">
                    <Sparkles className="w-4.5 h-4.5" />
                    <span className="font-display font-bold text-xs uppercase tracking-wide">
                      {language === 'en' ? 'SUBMITTED INQUIRY DETAILS' : 'சமர்ப்பிக்கப்பட்ட விவரங்கள்'}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-xs border-y border-slate-100 py-3.5 font-mono">
                    <div>
                      <span className="text-slate-400 block text-[9px] uppercase">
                        {language === 'en' ? 'PHONE:' : 'தொலைபேசி:'}
                      </span>
                      <span className="font-semibold text-slate-800">{submissionDetails?.phone}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[9px] uppercase">
                        {language === 'en' ? 'PROPERTY LOCATION:' : 'சொத்து இடம்:'}
                      </span>
                      <span className="font-semibold text-indigo-600">{submissionDetails?.companyName}</span>
                    </div>
                  </div>

                  <div className="bg-indigo-50/50 p-3.5 rounded-xl border border-indigo-100/50 text-xs text-indigo-900/80 leading-relaxed font-sans font-medium">
                    {language === 'en'
                      ? <>💡 Our team is reviewing the location potential for <strong>{submissionDetails?.companyName}</strong>. We will get back to you shortly at <strong>{submissionDetails?.phone}</strong>.</>
                      : <>💡 <strong>{submissionDetails?.companyName}</strong> பகுதிக்கான விளம்பரத் திட்டத்தை எங்கள் குழு ஆய்வு செய்கிறது. விரைவில் <strong>{submissionDetails?.phone}</strong> எண்ணில் உங்களைத் தொடர்பு கொள்வோம்.</>}
                  </div>
                </div>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      companyName: ''
                    });
                  }}
                  className="font-display font-semibold text-xs text-indigo-600 hover:text-indigo-750 bg-indigo-50 border border-indigo-200/50 px-5 py-2.5 rounded-full cursor-pointer transition-all"
                >
                  {t('submitAnother', 'contactForm')}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
