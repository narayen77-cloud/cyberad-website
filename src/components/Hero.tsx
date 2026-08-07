import React from 'react';
import { motion } from 'motion/react';
import { Megaphone, ArrowDown, Shield } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import leadGenHeroImg from '@/assets/media__1783586024004.jpg';

export default function Hero() {
  const { language, t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 py-20 lg:py-28 px-6 text-white border-b border-slate-800">
      {/* Decorative premium architectural grids */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full border border-white"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full border-2 border-dashed border-white"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white rotate-45"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Content Column (6 cols) */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-6">
            
            {/* Exclusive Tagline Badge */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/30 rounded-full px-4.5 py-1.5"
            >
              <Megaphone className="w-3.5 h-3.5 text-indigo-400" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-300">
                {language === 'en' ? 'We power the digital engine for builders and property sellers' : 'ரியல் எஸ்டேட் விளம்பர முகமை'}
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.2] text-white"
            >
              {language === 'en' ? (
                <>
                  Lead Generation That <span className="text-indigo-400">Sells Property</span>.
                </>
              ) : (
                <>
                  சொத்துக்களை விற்க உதவும் <span className="text-indigo-400">லீட் ஜெனரேஷன்</span>.
                </>
              )}
            </motion.h1>

            {/* Core Value Statement */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base text-slate-350 max-w-xl leading-relaxed font-sans font-medium"
            >
              {language === 'en' 
                ? "Not impressions. Not vanity metrics. More Leads. More Site Visits. More Sales."
                : "வெறும் விளம்பரப் பார்வைகள் அல்ல. வெற்று அளவீடுகள் அல்ல. அதிக லீட்கள். அதிக தளம் வருகைகள். அதிக விற்பனை."}
            </motion.p>

            {/* Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <button
                onClick={() => scrollToSection('partner-form')}
                className="font-display font-semibold text-xs bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 transition-all duration-300 hover:translate-y-[-1px] cursor-pointer"
              >
                {t('launchCampaign', 'common')}
              </button>
            </motion.div>

            {/* Disclaimer & Strategic Note replacing older box */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-start gap-2.5 text-sm text-slate-300 bg-slate-850/60 p-4 rounded-2xl border border-slate-800 max-w-lg mt-4 shadow-inner"
            >
              <Shield className="w-4.5 h-4.5 text-indigo-400 shrink-0 mt-0.5" />
              <p className="leading-relaxed font-bold font-sans text-white">
                {language === 'en' 
                  ? "Built for Leads. Not Listings."
                  : "லீட்களுக்காக கட்டப்பட்டது. சொத்துப் பட்டியல்களுக்காக அல்ல."}
              </p>
            </motion.div>

          </div>

          {/* Clean Mockup / Visual Column (6 cols) */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-slate-900 border border-slate-800 rounded-[2.5rem] p-6 shadow-2xl relative overflow-hidden"
            >
              {/* Highlight ribbon */}
              <div className="absolute top-4 right-4 bg-indigo-600/90 text-white text-[9px] font-mono uppercase tracking-widest px-3 py-1 rounded-full border border-indigo-500/50">
                {language === 'en' ? 'Exclusive Pipeline' : 'நேரடி விளம்பரம்'}
              </div>

              <div className="space-y-6">
                {/* Campaign Image Mockup */}
                <div className="relative rounded-2xl overflow-hidden border border-slate-800 aspect-[16/10] mt-4">
                  <img 
                    src={leadGenHeroImg}
                    alt="Lead Generation Campaign"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>
                  <span className="absolute bottom-3 left-4 text-[9px] font-mono font-bold text-white tracking-wider bg-emerald-500/90 px-2 py-0.5 rounded">
                    ● ACTIVE ADS
                  </span>
                </div>

                <div className="flex justify-between items-center text-[10px] font-mono text-slate-500 pt-2 border-t border-slate-800">
                  <span>{t('clientSpecific', 'hero')}</span>
                  <span className="text-emerald-400">● {language === 'en' ? 'Real-Time Sync' : 'உடனடி ஒத்திசைவு'}</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-12 lg:mt-16">
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-1 cursor-pointer text-slate-500 hover:text-indigo-400 transition-colors"
            onClick={() => scrollToSection('campaigns-showcase')}
          >
            <span className="text-[9px] font-mono tracking-widest uppercase">
              {language === 'en' ? 'Explore Campaigns' : 'பிரச்சாரங்களை ஆராயுங்கள்'}
            </span>
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
