import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, Building, Briefcase, Calendar, CheckCircle, ShieldAlert, Sparkles, Send } from 'lucide-react';
import { ContactSubmission } from '../types';
import { useLanguage, translations } from '../context/LanguageContext';

export default function ContactForm() {
  const { language, t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    companyName: '',
    role: 'builder',
    ticketSize: 'mid',
    monthlyBudget: '150000',
    message: ''
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [submissionDetails, setSubmissionDetails] = useState<ContactSubmission | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const details: ContactSubmission = {
      id: Math.random().toString(36).substring(2, 9),
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      companyName: formData.companyName,
      role: formData.role,
      ticketSize: formData.ticketSize,
      monthlyBudget: formData.monthlyBudget,
      message: formData.message,
      timestamp: new Date().toLocaleTimeString()
    };

    setSubmissionDetails(details);
    setSubmitted(true);
  };

  const getRoleLabel = (role: string) => {
    const rolesData = translations[language].contactForm.roles || translations['en'].contactForm.roles;
    return rolesData[role] || role;
  };

  return (
    <section id="partner-form" className="py-20 px-6 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Side Info Panel (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-indigo-600 uppercase bg-indigo-50 px-3.5 py-1.5 rounded-full">
                {t('badge', 'contactForm')}
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 mt-4 tracking-tight">
                {t('headline', 'contactForm')}
              </h2>
              <p className="text-slate-500 mt-3 text-sm sm:text-base font-sans">
                {t('description', 'contactForm')}
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3 bg-slate-50 border border-slate-100 p-4 rounded-2xl">
                <Building className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-mono font-bold text-slate-700 uppercase block">
                    {t('corpDesigned', 'contactForm')}
                  </span>
                  <p className="text-xs text-slate-500 font-sans mt-0.5 leading-relaxed">
                    {t('corpDesignedDesc', 'contactForm')}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-slate-50 border border-slate-100 p-4 rounded-2xl">
                <Calendar className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-mono font-bold text-slate-700 uppercase block">
                    {t('consultationIncl', 'contactForm')}
                  </span>
                  <p className="text-xs text-slate-500 font-sans mt-0.5 leading-relaxed">
                    {t('consultationInclDesc', 'contactForm')}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-rose-50/20 border border-rose-100 p-4 rounded-2xl">
                <ShieldAlert className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-mono font-bold text-rose-800 uppercase block">
                    {t('antiListings', 'contactForm')}
                  </span>
                  <p className="text-xs text-rose-600/80 font-sans mt-0.5 leading-relaxed">
                    {t('antiListingsDesc', 'contactForm')}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 text-[11px] font-mono text-slate-400">
              <span>{t('callDuration', 'contactForm')}</span>
            </div>
          </div>

          {/* Form / Success Screen Panel (7 cols) */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-[2rem] p-6 md:p-8 shadow-sm">
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
                        {t('fullName', 'contactForm')}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={t('placeholderName', 'contactForm')}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition-all font-sans"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wide block">
                        {t('corpEmail', 'contactForm')}
                      </label>
                      <input
                        type="email"
                        required
                        placeholder={t('placeholderEmail', 'contactForm')}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition-all font-sans"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                        className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition-all font-sans"
                      />
                    </div>

                    {/* Company Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wide block">
                        {formData.role === 'buyer' 
                          ? (language === 'en' ? 'Preferred Locations / City' : 'விருப்பமான இடங்கள் / நகரம்') 
                          : t('companyName', 'contactForm')}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={formData.role === 'buyer'
                          ? (language === 'en' ? 'e.g., Adyar, OMR' : 'எ.கா., அடையார், OMR')
                          : t('placeholderCompany', 'contactForm')}
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition-all font-sans"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Professional Role */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wide block">
                        {t('profClass', 'contactForm')}
                      </label>
                      <select
                        value={formData.role}
                        onChange={(e) => {
                          const newRole = e.target.value;
                          setFormData({ 
                            ...formData, 
                            role: newRole,
                            monthlyBudget: newRole === 'buyer' ? 'immediate' : '150000'
                          });
                        }}
                        className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition-all font-sans"
                      >
                        <option value="builder">{t('classificationOptionBuilder', 'contactForm')}</option>
                        <option value="developer">{t('classificationOptionDeveloper', 'contactForm')}</option>
                        <option value="agency">{t('classificationOptionAgency', 'contactForm')}</option>
                        <option value="owner">{t('classificationOptionOwner', 'contactForm')}</option>
                        <option value="partner">{t('classificationOptionPartner', 'contactForm')}</option>
                        <option value="buyer">{t('classificationOptionBuyer', 'contactForm')}</option>
                      </select>
                    </div>

                    {/* Target Property Segment */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wide block">
                        {t('avgValue', 'contactForm')}
                      </label>
                      <select
                        value={formData.ticketSize}
                        onChange={(e) => setFormData({ ...formData, ticketSize: e.target.value })}
                        className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition-all font-sans"
                      >
                        <option value="affordable">{t('segmentOptionAffordable', 'contactForm')}</option>
                        <option value="mid">{t('segmentOptionMid', 'contactForm')}</option>
                        <option value="luxury">{t('segmentOptionLuxury', 'contactForm')}</option>
                      </select>
                    </div>
                  </div>

                  {/* Estimated Ad Budget */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wide block">
                      {formData.role === 'buyer' 
                        ? (language === 'en' ? 'Your Target Purchase Timeframe' : 'உங்கள் வாங்கும் கால அவகாசம்') 
                        : t('targetBudget', 'contactForm')}
                    </label>
                    {formData.role === 'buyer' ? (
                      <select
                        value={formData.monthlyBudget}
                        onChange={(e) => setFormData({ ...formData, monthlyBudget: e.target.value })}
                        className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition-all font-sans"
                      >
                        <option value="immediate">{language === 'en' ? 'Immediate (Within 3 months)' : 'உடனடி (3 மாதங்களுக்குள்)'}</option>
                        <option value="mid_term">{language === 'en' ? 'Mid-term (Within 6 months)' : 'நடுத்தர காலம் (6 மாதங்களுக்குள்)'}</option>
                        <option value="long_term">{language === 'en' ? 'Long-term (1+ years)' : 'நீண்ட காலம் (1+ ஆண்டுகள்)'}</option>
                      </select>
                    ) : (
                      <select
                        value={formData.monthlyBudget}
                        onChange={(e) => setFormData({ ...formData, monthlyBudget: e.target.value })}
                        className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition-all font-sans"
                      >
                        <option value="150000">{t('budgetOption1', 'contactForm')}</option>
                        <option value="300000">{t('budgetOption2', 'contactForm')}</option>
                        <option value="750000">{t('budgetOption3', 'contactForm')}</option>
                        <option value="1200000">{t('budgetOption4', 'contactForm')}</option>
                      </select>
                    )}
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wide block">
                      {formData.role === 'buyer' 
                        ? (language === 'en' ? 'Specific Requirements & Features' : 'குறிப்பிட்ட தேவைகள் மற்றும் அம்சங்கள்') 
                        : t('goalsDetails', 'contactForm')}
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder={formData.role === 'buyer'
                        ? (language === 'en' ? 'e.g., 3 BHK Gated Community, balcony, swimming pool, North-facing...' : 'எ.கா., 3 BHK கேடட் கம்யூனிட்டி, பால்கனி, நீச்சல் குளம், வடக்கு பார்த்த வாசல்...')
                        : t('placeholderDetails', 'contactForm')}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition-all font-sans resize-none text-slate-800 placeholder-slate-400"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-display font-semibold text-sm py-3.5 px-4 rounded-full shadow-lg shadow-indigo-100/30 hover:shadow-indigo-200/50 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer mt-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>{t('submitBtn', 'contactForm')}</span>
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
                  className="space-y-6 text-center py-8"
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
                      {submissionDetails?.role === 'buyer' ? (
                        language === 'en' 
                          ? <>Thank you, <strong className="text-slate-900 font-semibold">{submissionDetails?.name}</strong>. We have received your property requirements for <strong className="text-slate-900 font-semibold">{submissionDetails?.companyName}</strong>. We will notify you immediately once matching developer inventory becomes available.</>
                          : <>நன்றி, <strong className="text-slate-900 font-semibold">{submissionDetails?.name}</strong>. <strong className="text-slate-900 font-semibold">{submissionDetails?.companyName}</strong> பகுதியில் உங்கள் சொத்து தேவைகளைப் பெற்றுக்கொண்டோம். பொருத்தமான திட்டங்கள் கிடைக்கும்போது உங்களுக்கு உடனடியாக அறிவிப்போம்.</>
                      ) : (
                        <>{t('successGreeting', 'contactForm')}, <strong className="text-slate-900 font-semibold">{submissionDetails?.name}</strong>. {t('successAnalyzedFor', 'contactForm')} <strong className="text-slate-900 font-semibold">{submissionDetails?.companyName}</strong>.</>
                      )}
                    </p>
                  </div>

                  {/* Personalized Lead Goal Summary Card */}
                  <div className="bg-white border border-slate-200 rounded-2xl p-6 text-left max-w-md mx-auto space-y-3.5 shadow-sm">
                    <div className="flex items-center gap-2 text-indigo-600">
                      <Sparkles className="w-4.5 h-4.5" />
                      <span className="font-display font-bold text-xs uppercase tracking-wide">
                        {submissionDetails?.role === 'buyer' 
                          ? (language === 'en' ? 'BUYER MATCHING ENGINE' : 'வாங்குபவர் விருப்பத்தேர்வு')
                          : t('targetPipeline', 'contactForm')}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-xs border-y border-slate-100 py-3.5 font-mono">
                      <div>
                        <span className="text-slate-400 block">
                          {submissionDetails?.role === 'buyer' 
                            ? (language === 'en' ? 'PROFILE TYPE:' : 'சுயவிவர வகை:') 
                            : `${t('partnerType', 'contactForm')}:`}
                        </span>
                        <span className="font-semibold text-slate-800">{getRoleLabel(submissionDetails?.role || '')}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block">
                          {submissionDetails?.role === 'buyer' 
                            ? (language === 'en' ? 'TIMEFRAME:' : 'கால அவகாசம்:') 
                            : `${t('monthlyBudgetLabel', 'contactForm')}:`}
                        </span>
                        <span className="font-semibold text-indigo-600">
                          {submissionDetails?.role === 'buyer' 
                            ? (submissionDetails?.monthlyBudget === 'immediate' 
                                ? (language === 'en' ? 'Immediate' : 'உடனடி') 
                                : submissionDetails?.monthlyBudget === 'mid_term' 
                                  ? (language === 'en' ? 'Mid-term' : 'நடுத்தர காலம்') 
                                  : (language === 'en' ? 'Long-term' : 'நீண்ட காலம்'))
                            : `₹${Number(submissionDetails?.monthlyBudget || 0).toLocaleString('en-IN')} / ${language === 'en' ? 'mo' : 'மாதம்'}`}
                        </span>
                      </div>
                    </div>

                    <div className="bg-indigo-50/50 p-3.5 rounded-xl border border-indigo-100/50 text-xs text-indigo-900/80 leading-relaxed font-sans font-medium">
                      {submissionDetails?.role === 'buyer' ? (
                        language === 'en'
                          ? <>💡 <strong>What Happens Next:</strong> Our lead matching system is storing your preference metrics. As a real estate lead generation agency, we work closely with developers. Once matching projects open up, you will be notified on <strong>{submissionDetails?.phone}</strong>.</>
                          : <>💡 <strong>அடுத்து என்ன நடக்கும்:</strong> எங்கள் சிஸ்டம் உங்கள் விருப்பங்களைச் சேமித்துக் கொண்டது. நாங்கள் பில்டர்களுடன் நெருக்கமாகப் பணிபுரிகிறோம். உங்களுக்கான பொருத்தமான சொத்துக்கள் கிடைக்கும்போது <strong>{submissionDetails?.phone}</strong> எண்ணிற்கு அறிவிப்பு அனுப்புவோம்.</>
                      ) : (
                        <>💡 <strong>{t('whatHappensNext', 'contactForm')}</strong> {t('whatHappensNextDesc', 'contactForm')} ({language === 'en' ? 'Phone:' : 'தொலைபேசி:'} <strong>{submissionDetails?.phone}</strong>).</>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        companyName: '',
                        role: 'builder',
                        ticketSize: 'mid',
                        monthlyBudget: '150000',
                        message: ''
                      });
                    }}
                    className="font-display font-semibold text-xs text-indigo-600 hover:text-indigo-700 bg-indigo-50 border border-indigo-200/50 px-5 py-2.5 rounded-full cursor-pointer transition-all"
                  >
                    {t('submitAnother', 'contactForm')}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
