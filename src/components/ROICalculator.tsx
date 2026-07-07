import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { HelpCircle, Calculator, TrendingUp, DollarSign, Target, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function ROICalculator() {
  const { language, t } = useLanguage();
  const [segment, setSegment] = useState<'affordable' | 'mid' | 'luxury'>('mid');
  const [propertyPrice, setPropertyPrice] = useState<number>(12000000); // Default ₹1.2 Crore
  const [monthlyBudget, setMonthlyBudget] = useState<number>(150000); // Default ₹1.5 Lakhs

  // Segment labels dynamically adjusted for active language
  const segmentLabels = {
    affordable: language === 'en' ? 'Affordable / High-Volume Housing' : 'மலிவு விலை / அதிக அளவிலான வீடுகள்',
    mid: language === 'en' ? 'Mid-Segment & Premium Apartments' : 'நடுத்தர மற்றும் பிரீமியம் அடுக்குமாடி குடியிருப்புகள்',
    luxury: language === 'en' ? 'Luxury Villas, Estates & Penthouses' : 'சொகுசு வில்லாக்கள், எஸ்டேட்டுகள் & பென்ட்ஹவுஸ்கள்'
  };

  // Benchmarks based on real estate performance marketing averages (calibrated in INR)
  const benchmarks = {
    affordable: {
      cpl: 180, // Cost per lead in INR
      qualificationRate: 0.20, // 20% are highly qualified
      leadToSaleRate: 0.015, // 1.5% of leads turn into sales
    },
    mid: {
      cpl: 450, // Cost per lead in INR
      qualificationRate: 0.15, // 15% are highly qualified
      leadToSaleRate: 0.012, // 1.2% of leads turn into sales
    },
    luxury: {
      cpl: 1200, // Cost per lead in INR
      qualificationRate: 0.10, // 10% are highly qualified
      leadToSaleRate: 0.008, // 0.8% of leads turn into sales
    }
  };

  const calculations = useMemo(() => {
    const selected = benchmarks[segment];
    const estimatedLeads = Math.max(1, Math.round(monthlyBudget / selected.cpl));
    const qualifiedLeads = Math.max(1, Math.round(estimatedLeads * selected.qualificationRate));
    
    // Projected closures (sales) - fractional representing probability
    const projectedSales = estimatedLeads * selected.leadToSaleRate;
    const roundedSales = Math.max(1, Math.round(projectedSales));
    
    // Revenue Pipeline generated
    const pipelineValue = roundedSales * propertyPrice;
    
    // Return on Ad Spend
    const roas = pipelineValue / monthlyBudget;

    return {
      cpl: selected.cpl,
      estimatedLeads,
      qualifiedLeads,
      projectedSales: projectedSales.toFixed(1),
      roundedSales,
      pipelineValue,
      roas: roas.toFixed(1)
    };
  }, [segment, propertyPrice, monthlyBudget]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <section id="roi-calculator" className="py-20 px-6 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-indigo-600 uppercase bg-indigo-50 px-3.5 py-1.5 rounded-full">
            {t('badge', 'roiCalculator')}
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 mt-4 tracking-tight">
            {t('headline', 'roiCalculator')}
          </h2>
          <p className="text-slate-500 mt-3 text-sm sm:text-base font-sans">
            {t('description', 'roiCalculator')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Inputs Column (5 cols) */}
          <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-[2rem] p-6 md:p-8 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <Calculator className="w-5 h-5 text-indigo-600" />
                <h3 className="font-display font-bold text-lg text-slate-900">
                  {t('configureVariables', 'roiCalculator')}
                </h3>
              </div>

              {/* Input 1: Property Segment */}
              <div className="space-y-2">
                <label className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wide block">
                  {t('projectClassification', 'roiCalculator')}
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['affordable', 'mid', 'luxury'] as const).map((type) => (
                    <button
                      key={type}
                      onClick={() => {
                        setSegment(type);
                        // Reset defaults based on selection for realism (INR scale)
                        if (type === 'affordable') setPropertyPrice(3500000);
                        if (type === 'mid') setPropertyPrice(12000000);
                        if (type === 'luxury') setPropertyPrice(60000000);
                      }}
                      className={`text-xs py-2.5 px-2 rounded-xl font-display font-semibold border transition-all text-center cursor-pointer ${
                        segment === type
                          ? 'bg-slate-900 border-slate-950 text-white shadow-sm'
                          : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-100 hover:border-slate-300'
                      }`}
                    >
                      {type === 'affordable' 
                        ? (language === 'en' ? 'AFFORDABLE' : 'மலிவு விலை') 
                        : type === 'mid' 
                          ? (language === 'en' ? 'PREMIUM' : 'நடுத்தர')
                          : (language === 'en' ? 'LUXURY' : 'சொகுசு')}
                    </button>
                  ))}
                </div>
                <p className="text-[10px] text-slate-400 font-sans italic">
                  {language === 'en' ? 'Currently selected:' : 'தற்போது தேர்வு செய்யப்பட்டுள்ளது:'} <span className="font-semibold text-slate-600">{segmentLabels[segment]}</span>
                </p>
              </div>

              {/* Input 2: Average Property Price */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wide">
                    {t('avgPropertyPrice', 'roiCalculator')}
                  </label>
                  <span className="text-sm font-mono font-bold text-slate-900">
                    {formatCurrency(propertyPrice)}
                  </span>
                </div>
                <input
                  type="range"
                  min={segment === 'affordable' ? 1500000 : segment === 'mid' ? 6000000 : 25000000}
                  max={segment === 'affordable' ? 6000000 : segment === 'mid' ? 25000000 : 150000000}
                  step={segment === 'affordable' ? 50000 : segment === 'mid' ? 100000 : 1000000}
                  value={propertyPrice}
                  onChange={(e) => setPropertyPrice(Number(e.target.value))}
                  className="w-full accent-indigo-600 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                  <span>{t('min', 'roiCalculator')}</span>
                  <span>{t('max', 'roiCalculator')}</span>
                </div>
              </div>

              {/* Input 3: Monthly Ad Budget */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wide">
                    {t('monthlyBudget', 'roiCalculator')}
                  </label>
                  <span className="text-sm font-mono font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-xl border border-indigo-100">
                    {formatCurrency(monthlyBudget)}
                  </span>
                </div>
                <input
                  type="range"
                  min={50000}
                  max={1500000}
                  step={10000}
                  value={monthlyBudget}
                  onChange={(e) => setMonthlyBudget(Number(e.target.value))}
                  className="w-full accent-indigo-600 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                  <span>₹50,000/{language === 'en' ? 'mo' : 'மாதம்'}</span>
                  <span>₹15,00,000/{language === 'en' ? 'mo' : 'மாதம்'}</span>
                </div>
              </div>
            </div>

            {/* Note reinforcing the B2B premise */}
            <div className="mt-8 pt-4 border-t border-slate-200 bg-white/60 p-3.5 rounded-2xl border border-slate-100">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block font-bold">
                {t('benchmarkCalibration', 'roiCalculator')}
              </span>
              <p className="text-[11px] text-slate-500 leading-relaxed font-sans mt-1">
                {t('benchmarkCalibrationText', 'roiCalculator')}
              </p>
            </div>
          </div>

          {/* Outputs Column (7 cols) */}
          <div className="lg:col-span-7 bg-slate-900 text-white rounded-[2rem] p-6 md:p-8 flex flex-col justify-between relative overflow-hidden shadow-xl border border-slate-950">
            {/* Design accents */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-indigo-400" />
                  <span className="font-display font-bold text-base text-slate-100">
                    {t('estimatedMonthlyPerformance', 'roiCalculator')}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-400 tracking-wider bg-slate-800 border border-slate-700 px-2 py-0.5 rounded">
                  {t('exclusivePrivateFunnel', 'roiCalculator')}
                </span>
              </div>

              {/* High-Impact Stat Rows */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                
                {/* Stat 1: Estimated Leads */}
                <div className="bg-slate-800/40 border border-slate-800 rounded-2xl p-4">
                  <span className="text-slate-400 text-[10px] font-mono block uppercase tracking-wider">
                    {t('estLeads', 'roiCalculator')}
                  </span>
                  <span className="text-2xl sm:text-3xl font-display font-bold text-white block mt-1">
                    {calculations.estimatedLeads}
                  </span>
                  <span className="text-[9px] text-indigo-400 font-mono mt-0.5 block">
                    ~ {formatCurrency(calculations.cpl)} CPL
                  </span>
                </div>

                {/* Stat 2: Verified Buyers */}
                <div className="bg-slate-800/40 border border-slate-800 rounded-2xl p-4">
                  <span className="text-slate-400 text-[10px] font-mono block uppercase tracking-wider">
                    {t('verifiedBuyers', 'roiCalculator')}
                  </span>
                  <span className="text-2xl sm:text-3xl font-display font-bold text-indigo-400 block mt-1">
                    {calculations.qualifiedLeads}
                  </span>
                  <span className="text-[9px] text-slate-400 font-mono mt-0.5 block">
                    {language === 'en' ? 'Interactive Screened' : 'வடிகட்டப்பட்டவை'}
                  </span>
                </div>

                {/* Stat 3: Est. Sales Closures */}
                <div className="bg-slate-800/40 border border-slate-800 rounded-2xl p-4 col-span-2 md:col-span-1">
                  <span className="text-slate-400 text-[10px] font-mono block uppercase tracking-wider">
                    {t('expectedClosures', 'roiCalculator')}
                  </span>
                  <span className="text-2xl sm:text-3xl font-display font-bold text-white block mt-1">
                    {calculations.roundedSales}
                  </span>
                  <span className="text-[9px] text-slate-400 font-mono mt-0.5 block">
                    ({calculations.projectedSales} {t('probabilistic', 'roiCalculator')})
                  </span>
                </div>

              </div>

              {/* Total Pipeline Generated Value Banner */}
              <div className="bg-indigo-950/40 border border-indigo-800/40 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-mono font-bold text-indigo-400 uppercase tracking-widest block">
                    {t('projectedSalesValue', 'roiCalculator')}
                  </span>
                  <span className="text-3xl font-display font-extrabold text-white block mt-1">
                    {formatCurrency(calculations.pipelineValue)}
                  </span>
                  <p className="text-[10px] text-indigo-300/70 font-sans mt-1">
                    {t('basedOnSelling', 'roiCalculator')} {calculations.roundedSales} {t('propertiesPricedAt', 'roiCalculator')} {formatCurrency(propertyPrice)}
                  </p>
                </div>
                <div className="text-center sm:text-right bg-indigo-900/60 border border-indigo-700/60 px-4 py-2.5 rounded-xl shrink-0">
                  <span className="text-[9px] font-mono font-bold text-indigo-300 block uppercase tracking-wider">
                    {t('estDirectRoas', 'roiCalculator')}
                  </span>
                  <span className="text-2xl font-display font-black text-white block">
                    {calculations.roas}x
                  </span>
                </div>
              </div>

            </div>

            {/* Crucial confirmation that we help THEM sell */}
            <div className="mt-8 pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-indigo-400" />
                <span>{language === 'en' ? '100% Client-Owned Direct Leads' : '100% கிளையண்ட்-சொந்தமான நேரடி லீட்கள்'}</span>
              </div>
              <span className="font-semibold text-indigo-400">
                {t('weDoNotSell', 'roiCalculator')}
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
