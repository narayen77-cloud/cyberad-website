import React from 'react';
import { motion } from 'motion/react';
import { Target, Users, Landmark, Megaphone, ArrowDown, HelpCircle, ShieldAlert, BadgeCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import luxuryVillaHero from '@/assets/luxury-villa-hero.png';

export default function Hero() {
  const { language, t } = useLanguage();

  const scrollToForm = () => {
    const element = document.getElementById('partner-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProcess = () => {
    const element = document.getElementById('qualification-process');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 py-16 lg:py-24 px-6 border-b border-slate-200">
      {/* Decorative architectural background elements */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full border border-slate-900"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full border-2 border-dashed border-slate-900"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-slate-900 rotate-45"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Content Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Exclusive Tagline Badge */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-200/80 rounded-full px-4 py-1.5"
            >
              <Megaphone className="w-3.5 h-3.5 text-indigo-600" />
              <span className="text-xs font-display font-semibold uppercase tracking-wider text-indigo-800">
                {t('badge', 'hero')}
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.1]"
            >
              {t('headlineStart', 'hero')}
              <span className="text-slate-400 font-light line-through decoration-red-500/60 decoration-3">
                {t('headlineProperties', 'hero')}
              </span>
              {t('headlineMiddle', 'hero')}
              <span className="text-indigo-600 underline decoration-indigo-400/50 decoration-wavy">
                {t('headlineBuilders', 'hero')}
              </span>
              {t('headlineEnd', 'hero')}
            </motion.h1>

            {/* Core Value Statement */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-500 max-w-xl leading-relaxed"
            >
              {t('description', 'hero')}
            </motion.p>

            {/* Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <button
                onClick={scrollToForm}
                className="font-display font-semibold text-sm bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3.5 rounded-full shadow-lg shadow-indigo-200 hover:shadow-indigo-300 transition-all duration-300 hover:translate-y-[-1px] cursor-pointer"
              >
                {t('launchCampaign', 'common')}
              </button>
              <button
                onClick={scrollToProcess}
                className="font-display font-semibold text-sm bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 px-6 py-3.5 rounded-full shadow-sm transition-all duration-300 hover:translate-y-[-1px] cursor-pointer"
              >
                {t('ourProcess', 'header')}
              </button>
            </motion.div>

            {/* Critical disclaimer in small high-impact layout */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-start gap-2 text-xs text-slate-500 bg-slate-100/80 p-3.5 rounded-2xl border border-slate-200/60 max-w-lg mt-4"
            >
              <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                <strong className="text-slate-800 font-semibold">{t('b2bScopeTitle', 'hero')}</strong> {t('b2bScopeText', 'hero')}
              </p>
            </motion.div>

          </div>

          {/* Epic "Builder's Epiphany Box" Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Real Estate Campaign Visual Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-lg relative aspect-video cursor-pointer"
            >
              <img 
                src={luxuryVillaHero}
                alt="Elite Real Estate Architecture"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent"></div>
              <div className="absolute bottom-5 left-6 right-6 flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-white bg-indigo-600/90 px-3 py-1 rounded-full backdrop-blur-sm">
                  {language === 'en' ? 'Active Campaign Mockup' : 'செயலில் உள்ள மாதிரி பிரச்சாரம்'}
                </span>
                <span className="text-[10px] font-mono text-slate-200 font-medium">
                  {language === 'en' ? '₹12 Cr+ Villa Launch' : '₹12 கோடி+ வில்லா அறிமுகம்'}
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-white border border-slate-200 rounded-[2rem] p-6 md:p-8 shadow-xl relative"
            >
              {/* Highlight ribbon */}
              <div className="absolute -top-3 right-6 bg-slate-900 text-white text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded border border-slate-700">
                {t('b2bNotice', 'common')}
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-display font-bold text-xl text-slate-900 tracking-tight">
                    {t('epiphanyTitle', 'hero')}
                  </h3>
                  <p className="text-xs text-slate-400 font-mono mt-1 uppercase tracking-wider">
                    {t('epiphanySubtitle', 'hero')}
                  </p>
                </div>

                <div className="space-y-4 border-l-2 border-indigo-500 pl-4 py-1">
                  <div>
                    <span className="text-xs font-semibold text-slate-400 block uppercase font-mono tracking-wider">
                      {t('pitfallLabel', 'hero')}
                    </span>
                    <p className="text-sm font-medium text-slate-600 italic">
                      {t('pitfallText', 'hero')}
                    </p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-indigo-600 block uppercase font-mono tracking-wider">
                      {t('breakthroughLabel', 'hero')}
                    </span>
                    <p className="text-sm font-semibold text-slate-900">
                      {t('breakthroughText', 'hero')}
                    </p>
                  </div>
                </div>

                <div className="bg-indigo-50/50 rounded-xl p-4 border border-indigo-100/50 space-y-2.5">
                  <div className="flex items-center gap-2">
                    <BadgeCheck className="w-5 h-5 text-indigo-600 shrink-0" />
                    <span className="font-display font-bold text-sm text-indigo-950">
                      {t('singleMandateTitle', 'hero')}
                    </span>
                  </div>
                  <p className="text-xs text-indigo-950/80 leading-relaxed font-sans">
                    {t('singleMandateText', 'hero')}
                  </p>
                </div>

                <div className="flex justify-between items-center text-[10px] font-mono text-slate-400 pt-2 border-t border-slate-100">
                  <span>{t('clientSpecific', 'hero')}</span>
                  <span className="text-indigo-600">● {t('activePipeline', 'hero')}</span>
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
            className="flex flex-col items-center gap-1 cursor-pointer text-slate-400 hover:text-indigo-600 transition-colors"
            onClick={() => {
              const element = document.getElementById('target-partners');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span className="text-[10px] font-mono tracking-widest uppercase">
              {language === 'en' ? 'Explore Partners' : 'கூட்டாளர்களை ஆராயுங்கள்'}
            </span>
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
