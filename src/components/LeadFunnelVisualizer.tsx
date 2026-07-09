import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, ClipboardCheck, Zap, Award, ArrowRight } from 'lucide-react';
import { useLanguage, translations } from '../context/LanguageContext';

export default function LeadFunnelVisualizer() {
  const { language, t } = useLanguage();

  const steps = translations[language].leadFunnel.steps || translations['en'].leadFunnel.steps;

  const getIcon = (id: number) => {
    switch (id) {
      case 1: return <Target className="w-5 h-5 text-indigo-600" />;
      case 2: return <Eye className="w-5 h-5 text-indigo-600" />;
      case 3: return <ClipboardCheck className="w-5 h-5 text-indigo-600" />;
      case 4: return <Zap className="w-5 h-5 text-indigo-600" />;
      case 5: return <Award className="w-5 h-5 text-indigo-600" />;
      default: return <Target className="w-5 h-5 text-indigo-600" />;
    }
  };

  return (
    <section id="qualification-process" className="py-20 px-6 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-indigo-600 uppercase bg-indigo-50 px-3.5 py-1.5 rounded-full">
            {t('badge', 'leadFunnel')}
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 mt-4 tracking-tight">
            {t('headline', 'leadFunnel')}
          </h2>
          <p className="text-slate-500 mt-3 text-sm sm:text-base font-sans">
            {t('description', 'leadFunnel')}
          </p>
        </div>

        {/* Funnel Flow Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-stretch">
          {steps.map((step: any, i: number) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white border border-slate-200 hover:border-indigo-600 rounded-[2rem] p-5 flex flex-col justify-between transition-all duration-300 relative group shadow-sm hover:shadow-lg hover:shadow-indigo-50/30"
            >
              {/* Connection Arrow for Desktop */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3.5 -translate-y-1/2 z-20 bg-white border border-slate-200 p-1 rounded-full group-hover:border-indigo-600 transition-colors">
                  <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-indigo-600" />
                </div>
              )}

              <div className="space-y-4">
                {/* Step Header */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-slate-400">
                    {step.phase}
                  </span>
                  <div className="p-2.5 bg-slate-50 rounded-xl group-hover:bg-indigo-50 transition-colors">
                    {getIcon(step.id)}
                  </div>
                </div>

                {/* Step Title */}
                <div>
                  <h3 className="font-display font-bold text-base text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {step.title}
                  </h3>
                  <span className="inline-block bg-indigo-50 text-indigo-800 text-[9px] font-mono font-bold px-2.5 py-1 rounded-full mt-1 uppercase tracking-wider">
                    {step.badge}
                  </span>
                </div>

                {/* Step Description */}
                <p className="text-xs text-slate-500 leading-relaxed font-sans pt-2 border-t border-slate-100">
                  {step.description}
                </p>
              </div>

              {/* Step number watermark */}
              <div className="text-right mt-6">
                <span className="text-3xl font-display font-extrabold text-slate-100 group-hover:text-indigo-50/50 select-none transition-colors">
                  0{step.id}
                </span>
              </div>
            </motion.div>
          ))}
        </div>



        {/* Lead Quality Disclaimer Note */}
        <p className="text-[11px] text-slate-400 text-center font-sans max-w-2xl mx-auto mt-6 leading-relaxed">
          💡 <strong className="text-slate-600 font-semibold">{language === 'en' ? 'Note:' : 'குறிப்பு:'}</strong> {t('disclaimer', 'footer')}
        </p>

      </div>
    </section>
  );
}
