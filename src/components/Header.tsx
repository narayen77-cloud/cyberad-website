import React from 'react';
import { motion } from 'motion/react';
import { Shield } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Header() {
  const { language, t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full" id="site-header">
      {/* Top Clarification Bar */}
      <div className="w-full bg-[#111827] text-[#f3f4f6] text-xs py-2.5 px-4 font-mono border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="font-semibold tracking-wider text-emerald-400">
              {language === 'en' ? 'B2B PERFORMANCE AGENCY' : 'B2B செயல்திறன் முகமை'}
            </span>
            <span className="text-gray-500">|</span>
            <span className="text-gray-300">
              {language === 'en' ? 'Exclusively for Real Estate Professionals' : 'ரியல் எஸ்டேட் வல்லுநர்களுக்கான பிரத்தியேக சேவை'}
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-gray-300 bg-gray-800/60 px-2.5 py-0.5 rounded border border-gray-700">
            <Shield className="w-3.5 h-3.5 text-emerald-400" />
            <span className="font-medium">
              {language === 'en' ? 'Strict Notice: Not a Property Listing Website' : 'கண்டிப்பான அறிவிப்பு: இது சொத்து பட்டியல் இணையதளம் அல்ல'}
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm py-2.5 sm:py-4 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
            className="flex items-center cursor-pointer group"
          >
            <img 
              src="https://assets.cyberad.in/logo.png" 
              alt="CyberAd Logo" 
              className="h-16 sm:h-20 md:h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 font-sans text-xs font-bold uppercase tracking-wider text-slate-500">
            <button 
              onClick={() => scrollToSection('target-partners')} 
              className="hover:text-indigo-650 hover:translate-y-[-1px] transition-all cursor-pointer"
            >
              {t('whoWeWorkWith', 'header')}
            </button>
            <button 
              onClick={() => scrollToSection('services-section')} 
              className="hover:text-indigo-650 hover:translate-y-[-1px] transition-all cursor-pointer"
            >
              {language === 'en' ? 'Services' : 'சேவைகள்'}
            </button>
            <button 
              onClick={() => scrollToSection('qualification-process')} 
              className="hover:text-indigo-650 hover:translate-y-[-1px] transition-all cursor-pointer"
            >
              {t('ourProcess', 'header')}
            </button>
          </nav>

          {/* Action CTA */}
          <div className="flex items-center gap-3 md:gap-4">
            <button
              onClick={() => scrollToSection('partner-form')}
              className="font-display font-semibold text-xs md:text-sm tracking-wide bg-slate-900 hover:bg-indigo-600 text-white px-4 md:px-5 py-2.5 rounded-full shadow-lg shadow-slate-200 transition-all duration-300 hover:translate-y-[-1px] cursor-pointer"
            >
              {t('callToAction', 'common')}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
