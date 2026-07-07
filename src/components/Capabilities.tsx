import React from 'react';
import { motion } from 'motion/react';
import { Smartphone, Search, Database, FileText, Bot, Compass, ArrowUpRight } from 'lucide-react';
import { ServiceCapability } from '../types';
import { useLanguage, translations } from '../context/LanguageContext';

export default function Capabilities() {
  const { language, t } = useLanguage();

  const listData = translations[language].capabilities.list || translations['en'].capabilities.list;
  const capabilityIcons = ['Smartphone', 'Search', 'FileText', 'Compass', 'Bot'];

  const capabilities: ServiceCapability[] = listData.map((cap: any, index: number) => ({
    id: `cap-${index}`,
    title: cap.title,
    description: cap.description,
    longDescription: cap.longDescription,
    icon: capabilityIcons[index] || 'Smartphone',
    metrics: cap.metrics
  }));

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Smartphone': return <Smartphone className="w-6 h-6 text-indigo-600" />;
      case 'Search': return <Search className="w-6 h-6 text-indigo-600" />;
      case 'FileText': return <FileText className="w-6 h-6 text-indigo-600" />;
      case 'Compass': return <Compass className="w-6 h-6 text-indigo-600" />;
      case 'Bot': return <Bot className="w-6 h-6 text-indigo-600" />;
      default: return <Smartphone className="w-6 h-6 text-indigo-600" />;
    }
  };

  return (
    <section id="marketing-engine" className="py-20 px-6 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Header and disclaimer */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <span className="text-xs font-mono font-bold tracking-widest text-indigo-600 uppercase bg-indigo-50 px-3.5 py-1.5 rounded-full">
              {t('badge', 'capabilities')}
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 mt-4 tracking-tight">
              {t('headline', 'capabilities')}
            </h2>
            <p className="text-slate-500 mt-3 text-sm sm:text-base font-sans">
              {t('description', 'capabilities')}
            </p>
          </div>
          <div className="bg-white px-4 py-3.5 rounded-2xl border border-slate-200 max-w-sm font-mono text-xs text-slate-500 shadow-sm">
            <span className="font-semibold text-slate-800 block mb-1">{t('criticalNoticeTitle', 'capabilities')}</span>
            {t('criticalNoticeDesc', 'capabilities')}
          </div>
        </div>

        {/* Grid of Channels */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white border border-slate-200 hover:border-indigo-600 rounded-[2rem] p-6 flex flex-col justify-between hover:shadow-xl hover:shadow-indigo-50/50 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-indigo-50 group-hover:scale-105 transition-all duration-300">
                    {getIcon(cap.icon)}
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 font-semibold bg-slate-50 border border-slate-100 px-2.5 py-1 rounded-full uppercase tracking-wider group-hover:border-indigo-100 group-hover:text-indigo-700">
                    {t('activeModule', 'common')}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-slate-900 tracking-tight mb-2 group-hover:text-indigo-600 transition-colors">
                  {cap.title}
                </h3>
                
                <p className="text-xs text-slate-500 font-sans leading-relaxed mb-4">
                  {cap.description}
                </p>
                
                <p className="text-xs text-slate-400 font-sans leading-relaxed pt-3 border-t border-slate-100 group-hover:text-slate-600 transition-colors">
                  {cap.longDescription}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold text-indigo-600 tracking-wide uppercase">
                  {cap.metrics}
                </span>
                <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-indigo-600 transition-colors" />
              </div>
            </motion.div>
          ))}

          {/* Special Empty-State Style Sixth Card explaining B2B Focus */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-slate-950 border border-slate-900 rounded-[2rem] p-6 flex flex-col justify-between text-white relative overflow-hidden"
          >
            {/* Ambient glows */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none"></div>

            <div className="relative z-10">
              <span className="text-[9px] font-mono font-bold text-indigo-400 tracking-widest uppercase block mb-3">
                {t('notAPortal', 'common')}
              </span>
              <h3 className="font-display font-bold text-lg text-white mb-2 leading-tight">
                {t('notAPortalTitle', 'capabilities')}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed font-sans mb-4">
                {t('notAPortalDesc', 'capabilities')}
              </p>
              <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-[11px] text-slate-300 leading-relaxed font-mono">
                ✔ {t('minimumCampaign', 'common')}<br />
                ✔ {t('directSalesCrm', 'common')}<br />
                ✔ {t('customLandingPages', 'common')}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-[10px] font-mono text-slate-500">
              <span>{t('b2bScale', 'common')}</span>
              <span className="text-indigo-400 font-bold">{t('est2026', 'common')}</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
