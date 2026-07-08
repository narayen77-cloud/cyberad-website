import React from 'react';
import { Building2, ShieldCheck, FileText } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { language, t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400 py-16 px-6 border-t border-slate-900">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Column 1: Logo & Statement (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="bg-indigo-600 text-white p-2.5 rounded-xl">
                <Building2 className="w-5 h-5" />
              </div>
              <span className="font-display font-bold text-lg text-white tracking-tight leading-tight">
                {t('title', 'header')}
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {t('desc', 'footer')}
            </p>
          </div>

          {/* Column 2: Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-3.5">
            <span className="text-xs font-mono font-bold text-slate-300 uppercase tracking-widest block">
              {t('quickLinks', 'footer')}
            </span>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => scrollToSection('target-partners')} 
                  className="hover:text-indigo-400 transition-colors cursor-pointer text-left"
                >
                  {t('quickLinksAudience', 'footer')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('marketing-engine')} 
                  className="hover:text-indigo-400 transition-colors cursor-pointer text-left"
                >
                  {t('quickLinksEngine', 'footer')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('qualification-process')} 
                  className="hover:text-indigo-400 transition-colors cursor-pointer text-left"
                >
                  {t('quickLinksFunnel', 'footer')}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact/Address Details (4 cols) */}
          <div className="md:col-span-4 space-y-3.5">
            <span className="text-xs font-mono font-bold text-slate-300 uppercase tracking-widest block">
              {t('performanceChannel', 'footer')}
            </span>
            <div className="space-y-2.5 text-sm font-sans">
              <p className="flex items-start gap-2">
                <span className="font-mono text-indigo-400 font-bold">EMAIL:</span>
                <span className="text-slate-300">SUPPORT@CYBERAD.IN</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="font-mono text-indigo-400 font-bold">{language === 'en' ? 'HOURS:' : 'வேலை நேரம்:'}</span>
                <span className="text-slate-300">{language === 'en' ? 'Mon - Fri: 10:00 AM - 6:00 PM' : 'திங்கள் - வெள்ளி: காலை 10:00 - மாலை 6:00'}</span>
              </p>
              <div className="inline-flex items-center gap-1.5 bg-slate-900 border border-slate-800 px-3.5 py-1.5 rounded-full text-xs text-emerald-400 font-mono mt-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                {t('activeClientSupport', 'footer')}
              </div>
            </div>
          </div>

        </div>

        {/* Extensive Disclaimers (Extremely important for user intent) */}
        <div className="border-t border-slate-900 pt-8 space-y-6">
          {/* General Lead Quality Disclaimer */}
          <div className="bg-slate-900/40 border border-indigo-950/40 p-5 rounded-2xl text-xs text-slate-400 font-sans leading-relaxed">
            <span className="font-bold text-indigo-400 font-display block mb-1 uppercase tracking-wider">
              {language === 'en' ? 'LEAD QUALITY & SALES CONVERSION DISCLAIMER' : 'லீட் தரம் மற்றும் விற்பனை மாற்றம் பற்றிய பொறுப்புத் துறப்பு'}
            </span>
            <p>
              {t('disclaimer', 'footer')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-500 leading-relaxed font-sans">
            
            {/* Left Box */}
            <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-900 space-y-2">
              <div className="flex items-center gap-1.5 text-slate-300 font-bold font-display">
                <ShieldCheck className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>
                  {language === 'en' ? 'NOT A PROPERTY LISTING PORTAL' : 'சொத்துப் பட்டியல் போர்டல் அல்ல'}
                </span>
              </div>
              <p>
                {language === 'en' 
                  ? 'This application and its associated digital services do not list individual properties, coordinate apartment rentals, showcase vacant homes, or represent individual buyers. We are not a real estate brokerage or property dealer. Our services are exclusively structured as high-performance B2B digital ad management, landing page creation, SEO, and sales CRM automation.'
                  : 'இந்தச் செயலி மற்றும் அதன் சேவைகள் தனிப்பட்ட சொத்துக்களை பட்டியலிடுவதோ, வாடகைக்கு விடுவதோ அல்லது தனிப்பட்ட வாங்குபவர்களை பிரதிநிதித்துவப்படுத்துவதோ இல்லை. நாங்கள் ரியல் எஸ்டேட் தரகர் அல்ல. எங்கள் சேவைகள் பிரத்தியேகமாக பில்டர்களுக்கான B2B டிஜிட்டல் விளம்பர மேலாண்மை, லேண்டிங் பக்க உருவாக்கம் மற்றும் விற்பனை CRM ஆட்டோமேஷன் ஆகியவற்றைக் கொண்டவை.'}
              </p>
            </div>

            {/* Right Box */}
            <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-900 space-y-2">
              <div className="flex items-center gap-1.5 text-slate-300 font-bold font-display">
                <FileText className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>
                  {language === 'en' ? 'B2B ENGAGEMENT PREMISE' : 'B2B ஒப்பந்தக் கோட்பாடு'}
                </span>
              </div>
              <p>
                {language === 'en'
                  ? 'We collaborate solely with home builders, land developers, corporate agencies, asset managers, and channel partners to launch highly optimized digital marketing campaigns on Meta (Facebook, Instagram) and Google. All lead data generated is 100% exclusive to the contracted developer partner and synced directly to their private CRM.'
                  : 'நாங்கள் வீட்டு பில்டர்கள், நில மேம்பாட்டாளர்கள், பெருநிறுவன முகமைகளுடன் மட்டுமே இணைந்து மெட்டா மற்றும் கூகுள் விளம்பரங்களை இயக்குகிறோம். உருவாக்கப்படும் அனைத்து வாடிக்கையாளர் விவரங்களும் 100% அந்தந்த பில்டர்களுக்கு மட்டுமே சொந்தமானது மற்றும் அவர்களின் CRM உடன் நேரடியாக இணைக்கப்படுகிறது.'}
              </p>
            </div>

          </div>

          {/* Copyright line */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-slate-600 pt-4 border-t border-slate-900/50">
            <span>© 2026 {t('copyright', 'footer')}</span>
            <div className="flex gap-4">
              <span className="hover:text-slate-400 transition-colors cursor-pointer">{t('termsOfService', 'footer')}</span>
              <span>•</span>
              <span className="hover:text-slate-400 transition-colors cursor-pointer">{t('privacyCharter', 'footer')}</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
