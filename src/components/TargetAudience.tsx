import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Hammer, Building2, Users, CheckCircle2, ChevronRight, Ban, Megaphone } from 'lucide-react';
import { TargetAudience as TargetAudienceType } from '../types';
import { useLanguage, translations } from '../context/LanguageContext';

// Import images
import teamHighFive from '@/assets/media__1783588780848.jpg';
import landLayoutImg from '@/assets/media__1783589612214.jpg';
import skyscrapersImg from '@/assets/media__1783590494707.jpg';
import forSaleSign from '@/assets/media__1783591363812.jpg';

export default function TargetAudience() {
  const { language, t } = useLanguage();

  const audienceIds = ['builders', 'developers', 'agencies', 'singleSellers'];
  const audienceIcons: Record<string, string> = {
    builders: 'Hammer',
    developers: 'Building2',
    agencies: 'Users',
    singleSellers: 'Megaphone'
  };

  const audiences: TargetAudienceType[] = audienceIds.map(id => {
    const data = translations[language].targetAudience.audienceTypes[id] || translations['en'].targetAudience.audienceTypes[id];
    return {
      id,
      title: data.title,
      subtitle: data.subtitle,
      badge: data.badge,
      description: data.description,
      icon: audienceIcons[id],
      painPoints: data.painPoints || [],
      solutions: data.solutions || []
    };
  });

  const [activeAudience, setActiveAudience] = useState<string>('builders');

  const audienceImages: Record<string, { url: string; alt: string; tag: string }> = {
    builders: {
      url: teamHighFive,
      alt: 'Professional real estate team celebrating project milestone with high fives',
      tag: 'DIRECT AUDIENCE POOL'
    },
    developers: {
      url: landLayoutImg,
      alt: 'Developer pointing at land layout master plan on a computer screen',
      tag: 'PRE-LAUNCH VELOCITY TARGETS'
    },
    agencies: {
      url: skyscrapersImg,
      alt: 'Low-angle view of modern high-rise corporate skyscrapers against a blue sky',
      tag: 'DIRECT LEAD DELIVERY'
    },
    singleSellers: {
      url: forSaleSign,
      alt: 'Red For Sale sign in front of a modern house under construction',
      tag: 'SINGLE UNIT SALE'
    }
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Hammer': return <Hammer className="w-5 h-5 text-indigo-600" />;
      case 'Building2': return <Building2 className="w-5 h-5 text-indigo-600" />;
      case 'Megaphone': return <Megaphone className="w-5 h-5 text-indigo-600" />;
      case 'Users': return <Users className="w-5 h-5 text-indigo-600" />;
      default: return <Building2 className="w-5 h-5 text-indigo-600" />;
    }
  };

  const selectedData = audiences.find(aud => aud.id === activeAudience) || audiences[0];

  return (
    <section id="target-partners" className="py-20 px-6 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto">
        
         {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-indigo-600 uppercase bg-indigo-50 px-3.5 py-1.5 rounded-full">
            {t('badge', 'targetAudience')}
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 mt-4 tracking-tight">
            {t('headline', 'targetAudience')}
          </h2>
          <p className="text-slate-500 mt-3 text-sm sm:text-base font-sans">
            {t('description', 'targetAudience')}
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Navigation Sidebar (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block pl-2 mb-2">
              {t('selectCategory', 'targetAudience')}
            </span>
            {audiences.map((aud) => (
              <button
                key={aud.id}
                onClick={() => setActiveAudience(aud.id)}
                className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between cursor-pointer group ${
                  activeAudience === aud.id
                    ? 'bg-slate-900 border-slate-950 text-white shadow-lg shadow-slate-900/15'
                    : 'bg-slate-50/50 border-slate-200 hover:bg-slate-50 hover:border-slate-300 text-slate-700'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div className={`p-2.5 rounded-xl transition-colors ${
                    activeAudience === aud.id ? 'bg-indigo-600 text-white' : 'bg-white text-slate-700 shadow-sm'
                  }`}>
                    {getIcon(aud.icon)}
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold tracking-wider uppercase opacity-60 block text-[9px]">
                      {aud.badge}
                    </span>
                    <span className="font-display font-bold text-base block mt-0.5">
                      {aud.title}
                    </span>
                  </div>
                </div>
                <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${
                  activeAudience === aud.id ? 'text-indigo-400 translate-x-1' : 'text-slate-400 group-hover:translate-x-1'
                }`} />
              </button>
            ))}
          </div>

          {/* Interactive Core Details (7 cols) */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-[2rem] p-6 md:p-8 relative min-h-[440px] flex flex-col justify-between">
            
            {/* Top watermarked tag */}
            <div className="absolute top-4 right-4 text-[10px] font-mono text-slate-400 bg-white/80 border border-slate-200 px-2.5 py-1 rounded-full">
              {t('specSheet', 'targetAudience')}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedData.id}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* Header of detail */}
                <div className="space-y-4">
                  <div>
                    <span className="inline-block bg-indigo-100 text-indigo-800 text-[10px] font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                      {selectedData.badge}
                    </span>
                    <h3 className="font-display font-bold text-2xl text-slate-900">
                      {selectedData.id === 'builders' 
                        ? (language === 'en' ? 'Build Projects. We Bring Buyers.' : 'திட்டங்களை உருவாக்குங்கள். வாங்குபவர்களை நாங்கள் அழைத்து வருகிறோம்.') 
                        : `${t('helpPrefix', 'targetAudience')} ${selectedData.title}`}
                    </h3>
                    <p className="text-xs text-slate-500 font-mono mt-0.5 italic">
                      {selectedData.id === 'builders' 
                        ? (language === 'en' ? 'You build exceptional properties. We generate the enquiries.' : 'நீங்கள் சிறந்த சொத்துக்களை உருவாக்குங்கள். லீட்களை நாங்கள் உருவாக்குகிறோம்.') 
                        : selectedData.subtitle}
                    </p>
                  </div>

                  {/* Premium Sector Specific Image Placeholder */}
                  <div className="relative rounded-[1.5rem] overflow-hidden border border-slate-200 aspect-[21/10] bg-slate-100 group">
                    <img 
                      src={audienceImages[selectedData.id]?.url || 'https://picsum.photos/seed/builders/800/350'}
                      alt={audienceImages[selectedData.id]?.alt || 'Sector Visualizer'}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                    <span className="absolute bottom-3 left-4 text-[9px] font-mono font-bold text-white tracking-widest bg-indigo-600/90 px-3 py-1 rounded backdrop-blur-xs">
                      {audienceImages[selectedData.id]?.tag || 'B2B SPEC'}
                    </span>
                  </div>

                  {selectedData.id === 'builders' ? (
                    <div className="space-y-1">
                      <h4 className="font-display font-bold text-xl text-slate-900 leading-snug">
                        {language === 'en' ? 'Sales That Deserve Celebration.' : 'கொண்டாடத் தகுந்த விற்பனைகள்.'}
                      </h4>
                      <p className="text-slate-500 text-sm leading-relaxed font-sans">
                        {selectedData.description}
                      </p>
                    </div>
                  ) : (
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {selectedData.description}
                    </p>
                  )}
                </div>

                <div className="pt-4 border-t border-slate-200">
                  {/* Direct Marketing Solutions */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-indigo-600 uppercase tracking-wide">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{t('solutionsTitle', 'targetAudience')}</span>
                    </div>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                      {selectedData.solutions.map((sol, i) => (
                        <li key={i} className="text-xs text-slate-700 flex items-start gap-2 leading-relaxed font-medium">
                          <span className="text-indigo-600 font-bold shrink-0 mt-0.5">✓</span>
                          <span>{sol}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>

            {selectedData.id !== 'builders' && (
              <div className="mt-8 pt-4 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span className="flex items-center gap-1">
                  <span className="h-1.5 w-1.5 bg-indigo-500 rounded-full"></span>
                  {t('exclusivePipeline', 'targetAudience')}
                </span>
                <span className="font-semibold text-slate-500">
                  {t('notAPublicBoard', 'targetAudience')}
                </span>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
