import React from 'react';
import { motion } from 'motion/react';
import { Megaphone, ArrowDown, Shield } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import luxuryVillaHero from '@/assets/luxury-villa-hero.png';

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
          
          {/* Hero Content Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Exclusive Tagline Badge */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/30 rounded-full px-4.5 py-1.5"
            >
              <Megaphone className="w-3.5 h-3.5 text-indigo-400" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-300">
                {language === 'en' ? 'B2B DIRECT LEAD SOURCING' : 'B2B நேரடி வாடிக்கையாளர் ஈர்ப்பு'}
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.15]"
            >
              {language === 'en' ? (
                <>
                  We Don't Just List Properties.<br />
                  We Help You <span className="text-indigo-400">Sell Them.</span>
                </>
              ) : (
                <>
                  நாங்கள் சொத்துக்களை பட்டியலிடுவதில்லை.<br />
                  அவற்றை விற்க <span className="text-indigo-400">உதவுகிறோம்.</span>
                </>
              )}
            </motion.h1>

            {/* Core Value Statement */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed"
            >
              {language === 'en' 
                ? "Bypass public directories and shared broker listing portals. We build private, high-intent advertising funnels on Meta & Google to deliver verified buyer leads directly to your sales team."
                : "பொதுவான சொத்துப் பட்டியல்களைத் தவிர்த்திடுங்கள். தகுதியான வாங்குபவர்களை நேரடியாக ஈர்க்கும் விளம்பரப் பாதைகளை மெட்டா மற்றும் கூகுளில் அமைத்து, உங்கள் நிறுவனத்திற்கு லீட்களை வழங்குகிறோம்."}
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
                className="font-display font-semibold text-sm bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 transition-all duration-300 hover:translate-y-[-1px] cursor-pointer"
              >
                {t('launchCampaign', 'common')}
              </button>
            </motion.div>

            {/* Disclaimer & Strategic Note replacing older box */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-start gap-2.5 text-xs text-slate-300 bg-slate-800/40 p-4.5 rounded-2xl border border-slate-850 max-w-lg mt-4 shadow-inner"
            >
              <Shield className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
              <p className="leading-relaxed font-medium">
                {language === 'en' 
                  ? "Not a property listing website. We help real estate professionals generate qualified leads and close more sales."
                  : "இது சொத்துப் பட்டியல் இணையதளம் அல்ல. ரியல் எஸ்டேட் வல்லுநர்கள் தகுதியான லீட்களை உருவாக்கவும், அதிக விற்பனையை முடிக்கவும் நாங்கள் உதவுகிறோம்."}
              </p>
            </motion.div>

          </div>

          {/* Clean Mockup / Visual Column (5 cols) */}
          <div className="lg:col-span-5">
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
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                    {language === 'en' ? 'ACTIVE CAMPAIGN PREVIEW' : 'செயலில் உள்ள விளம்பர மாதிரி'}
                  </span>
                  <h3 className="font-display font-bold text-xl text-white tracking-tight mt-1">
                    Luxury Property Launch
                  </h3>
                </div>

                {/* Campaign Image Mockup */}
                <div className="relative rounded-2xl overflow-hidden border border-slate-800 aspect-video">
                  <img 
                    src={luxuryVillaHero}
                    alt="Luxury Real Estate Campaign"
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
