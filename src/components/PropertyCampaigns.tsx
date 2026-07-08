import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, HelpCircle, ArrowUpRight, Award, Compass, Trees, Home, Building2, Briefcase } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// Import images
import waterfrontEstateImage from '@/assets/waterfront-estate.png';
import gpsImage from '@/assets/gps-navigation.jpg';
import luxuryVillaHero from '@/assets/luxury-villa-hero.png';
import brokerageCenterImage from '@/assets/brokerage-center.png';

export default function PropertyCampaigns() {
  const { language, t } = useLanguage();

  const campaigns = [
    {
      id: 'villas',
      image: waterfrontEstateImage,
      icon: <Home className="w-5 h-5 text-amber-600" />,
      titleKey: 'villasTitle',
      descKey: 'villasDesc',
      challengeKey: 'villasChallenge',
      strategyKey: 'villasStrategy',
      metricsKey: 'villasMetrics',
      tag: language === 'en' ? 'HIGH-NET-WORTH TARGETING' : 'உயர் வருவாயினர் இலக்கு',
      badgeBg: 'bg-amber-50 border-amber-200 text-amber-800'
    },
    {
      id: 'plots',
      image: gpsImage,
      icon: <Trees className="w-5 h-5 text-emerald-600" />,
      titleKey: 'plotsTitle',
      descKey: 'plotsDesc',
      challengeKey: 'plotsChallenge',
      strategyKey: 'plotsStrategy',
      metricsKey: 'plotsMetrics',
      tag: language === 'en' ? 'FAST CLEARANCE LAYOUTS' : 'விரைவான விற்பனை மனைப்பிரிவுகள்',
      badgeBg: 'bg-emerald-50 border-emerald-200 text-emerald-800'
    },
    {
      id: 'apartments',
      image: luxuryVillaHero,
      icon: <Building2 className="w-5 h-5 text-indigo-600" />,
      titleKey: 'apartmentsTitle',
      descKey: 'apartmentsDesc',
      challengeKey: 'apartmentsChallenge',
      strategyKey: 'apartmentsStrategy',
      metricsKey: 'apartmentsMetrics',
      tag: language === 'en' ? 'ZERO COMMISSION DIRECT SALES' : 'தரகு இல்லா நேரடி விற்பனை',
      badgeBg: 'bg-indigo-50 border-indigo-200 text-indigo-800'
    },
    {
      id: 'commercial',
      image: brokerageCenterImage,
      icon: <Briefcase className="w-5 h-5 text-rose-600" />,
      titleKey: 'commercialTitle',
      descKey: 'commercialDesc',
      challengeKey: 'commercialChallenge',
      strategyKey: 'commercialStrategy',
      metricsKey: 'commercialMetrics',
      tag: language === 'en' ? 'B2B YIELD INVESTORS' : 'B2B வணிக முதலீட்டாளர்கள்',
      badgeBg: 'bg-rose-50 border-rose-200 text-rose-800'
    }
  ];

  return (
    <section id="campaigns-showcase" className="py-20 px-6 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-indigo-600 uppercase bg-indigo-50 px-3.5 py-1.5 rounded-full">
            {t('badge', 'propertyCampaigns')}
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 mt-4 tracking-tight">
            {t('headline', 'propertyCampaigns')}
          </h2>
          <p className="text-slate-500 mt-3 text-sm sm:text-base font-sans">
            {t('description', 'propertyCampaigns')}
          </p>
        </div>

        {/* Campaigns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {campaigns.map((camp, i) => (
            <motion.div
              key={camp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-slate-50 border border-slate-200 hover:border-indigo-600 rounded-[2.5rem] overflow-hidden flex flex-col justify-between hover:shadow-xl hover:shadow-indigo-50/40 transition-all duration-300 group"
            >
              <div>
                {/* Visual Image Block */}
                <div className="relative aspect-[21/10] overflow-hidden bg-slate-100">
                  <img
                    src={camp.image}
                    alt={t(camp.titleKey, 'propertyCampaigns')}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className={`text-[9px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full border backdrop-blur-xs ${camp.badgeBg}`}>
                      {camp.tag}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 bg-white/90 rounded-lg backdrop-blur-xs shadow-sm">
                        {camp.icon}
                      </div>
                      <h3 className="font-display font-bold text-lg text-white">
                        {t(camp.titleKey, 'propertyCampaigns')}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Strategy Content Block */}
                <div className="p-6 md:p-8 space-y-5">
                  <p className="text-xs text-slate-500 font-sans leading-relaxed">
                    {t(camp.descKey, 'propertyCampaigns')}
                  </p>

                  <div className="space-y-3.5 pt-4 border-t border-slate-200/60">
                    {/* The Problem / Challenge */}
                    <div className="flex gap-2.5 items-start">
                      <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider mt-0.5 shrink-0 w-24">
                        {t('challengeLabel', 'propertyCampaigns')}
                      </span>
                      <p className="text-xs text-slate-600 font-sans italic leading-relaxed">
                        "{t(camp.challengeKey, 'propertyCampaigns')}"
                      </p>
                    </div>

                    {/* The Strategic Solution */}
                    <div className="flex gap-2.5 items-start">
                      <span className="text-[10px] font-mono font-bold text-indigo-600 uppercase tracking-wider mt-0.5 shrink-0 w-24">
                        {t('strategyLabel', 'propertyCampaigns')}
                      </span>
                      <p className="text-xs text-slate-800 font-medium font-sans leading-relaxed">
                        {t(camp.strategyKey, 'propertyCampaigns')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Campaign Outcome Banner */}
              <div className="mx-6 mb-6 md:mx-8 md:mb-8 p-4 bg-indigo-50/50 rounded-2xl border border-indigo-100/50 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span className="text-[10px] font-mono font-bold text-indigo-950 uppercase tracking-wider">
                    {t('metricLabel', 'propertyCampaigns')}
                  </span>
                </div>
                <span className="text-xs font-mono font-bold text-indigo-700 bg-white px-3 py-1 rounded-lg border border-indigo-100 shadow-xs">
                  {t(camp.metricsKey, 'propertyCampaigns')}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
