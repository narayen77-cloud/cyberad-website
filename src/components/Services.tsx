import React from 'react';
import { motion } from 'motion/react';
import { 
  Facebook, 
  Instagram, 
  MessageSquare, 
  Search, 
  Youtube, 
  Layers, 
  Laptop, 
  FileText, 
  Database, 
  TrendingUp, 
  Smartphone, 
  Tablet, 
  Monitor, 
  Globe, 
  Users, 
  MapPin, 
  Eye,
  CheckCircle2
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import googleSearchImg from '@/assets/media__1783581021130.jpg';
import leadCaptureImg from '@/assets/media__1783591914568.jpg';
import instagramImg from '@/assets/media__1783581311337.jpg';
import landingPagesImg from '@/assets/media__1783581311354.jpg';
import youtubeImg from '@/assets/media__1783581311357.jpg';
import facebookImg from '@/assets/media__1783581460257.jpg';
import whatsappImg from '@/assets/media__1783581460275.jpg';
import crmImg from '@/assets/media__1783581732501.jpg';
import analyticsImg from '@/assets/media__1783581732585.jpg';
import googleDisplayImg from '@/assets/media__1783581956779.jpg';
import multiDeviceImg from '@/assets/media__1783582117428.jpg';

export default function Services() {
  const { language, t } = useLanguage();

  // The 10 services requested by the user
  const servicesList = [
    {
      id: 'facebook',
      icon: <Facebook className="w-6 h-6 text-indigo-600" />,
      title: language === 'en' ? 'Facebook Advertising' : 'ஃபேஸ்புக் விளம்பரங்கள்',
      desc: language === 'en' 
        ? 'Target high-income demographic clusters and active property buyers locally and globally.' 
        : 'உள்ளூர் மற்றும் உலகளாவிய அளவில் சொத்து வாங்குபவர்களைக் குறிவைக்கும் விளம்பரங்கள்.',
      image: facebookImg
    },
    {
      id: 'instagram',
      icon: <Instagram className="w-6 h-6 text-indigo-600" />,
      title: language === 'en' ? 'Instagram Advertising' : 'இன்ஸ்டாகிராம் விளம்பரங்கள்',
      desc: language === 'en' 
        ? 'Showcase premium property visual walkthroughs and renders to lifestyle-oriented buyers.' 
        : 'சொகுசு சொத்துகளின் வீடியோக்கள் மற்றும் புகைப்படங்களை வாங்குபவர்களுக்குக் காட்டுதல்.',
      image: instagramImg
    },
    {
      id: 'whatsapp',
      icon: <MessageSquare className="w-6 h-6 text-indigo-600" />,
      title: language === 'en' ? 'WhatsApp Lead Campaigns' : 'வாட்ஸ்அப் லீட் பிரச்சாரங்கள்',
      desc: language === 'en' 
        ? 'Deliver instant details, brochures, and layout sheets directly to buyers via automated WhatsApp.' 
        : 'விவரங்கள் மற்றும் வரைபடங்களை வாடிக்கையாளர்களுக்கு வாட்ஸ்அப்பில் தானாகவே அனுப்புதல்.',
      image: whatsappImg
    },
    {
      id: 'google-search',
      icon: <Search className="w-6 h-6 text-indigo-600" />,
      title: language === 'en' ? 'Google Search Ads' : 'கூகுள் தேடல் விளம்பரங்கள்',
      desc: language === 'en' 
        ? 'Capture high-intent buyers searching for specific residential or commercial developments online.' 
        : 'கூகுளில் சொத்துக்களைத் தேடும் தகுதியான வாங்குபவர்களைக் கவர்தல்.',
      image: googleSearchImg
    },
    {
      id: 'youtube',
      icon: <Youtube className="w-6 h-6 text-indigo-600" />,
      title: language === 'en' ? 'YouTube Advertising' : 'யூடியூப் வீடியோ விளம்பரங்கள்',
      desc: language === 'en' 
        ? 'Engage potential investors with premium high-definition drone tours and project walkthroughs.' 
        : 'ட்ரோன் வீடியோக்கள் மற்றும் திட்ட உலாக்கள் மூலம் முதலீட்டாளர்களை ஈர்த்தல்.',
      image: youtubeImg
    },
    {
      id: 'display',
      icon: <Layers className="w-6 h-6 text-indigo-600" />,
      title: language === 'en' ? 'Google Display Network' : 'கூகுள் டிஸ்ப்ளே நெட்வொர்க்',
      desc: language === 'en' 
        ? 'Build top-of-mind brand recall by displaying property banners across major portals and news websites.' 
        : 'முன்னணி இணையதளங்களில் உங்கள் சொத்து விளம்பர பேனர்களைக் காண்பித்தல்.',
      image: googleDisplayImg
    },
    {
      id: 'landing-pages',
      icon: <Laptop className="w-6 h-6 text-indigo-600" />,
      title: language === 'en' ? 'Landing Pages' : 'பிரத்தியேக பக்கங்கள் (Landing Pages)',
      desc: language === 'en' 
        ? 'Design extremely fast loading, distraction-free landing pages optimized for property conversions.' 
        : 'திட்டத்தை முன்னிலைப்படுத்தும் அதிவேக மற்றும் தனித்துவமான வலைப்பக்க வடிவமைப்பு.',
      image: landingPagesImg
    },
    {
      id: 'lead-capture',
      icon: <FileText className="w-6 h-6 text-indigo-600" />,
      title: language === 'en' ? 'Lead Capture Forms' : 'தகவல் படிவங்கள் (Lead Capture)',
      desc: language === 'en' 
        ? 'Integrate smart, verified forms to filter out spam and collect highly qualified buyer criteria.' 
        : 'தவறான எண்களைத் தவிர்த்து, தகுதியான வாங்குபவர்களின் விவரங்களைச் சேகரித்தல்.',
      image: leadCaptureImg
    },
    {
      id: 'crm',
      icon: <Database className="w-6 h-6 text-indigo-600" />,
      title: language === 'en' ? 'CRM & Lead Management' : 'CRM & லீட் மேலாண்மை',
      desc: language === 'en' 
        ? 'Automate instant lead routing directly to your internal sales CRM for immediate callbacks.' 
        : 'லீட்களை உடனடியாக உங்கள் உள் விற்பனை CRM-ல் இணைத்து தானியங்கி அழைப்பைத் தொடங்குதல்.',
      image: crmImg
    },
    {
      id: 'analytics',
      icon: <TrendingUp className="w-6 h-6 text-indigo-600" />,
      title: language === 'en' ? 'Analytics & Conversion Tracking' : 'அனலிட்டிக்ஸ் & மாற்று கண்காணிப்பு',
      desc: language === 'en' 
        ? 'Track exact cost-per-lead, conversion rates, and ROI across all marketing channels in real-time.' 
        : 'விளம்பரச் செலவு மற்றும் முதலீட்டின் மீதான வருவாயை நிகழ்நேரத்தில் கண்காணித்தல்.',
      image: analyticsImg
    }
  ];

  // Reach parameters requested by the user
  const reachItems = [
    {
      icon: <MapPin className="w-5 h-5 text-indigo-500 mt-0.5 shrink-0" />,
      title: language === 'en' ? 'Local Buyers' : 'உள்ளூர் வாங்குபவர்கள்',
      desc: language === 'en' 
        ? 'Target active buyers within specific geographic pockets, micro-markets, and neighboring developments.' 
        : 'குறிப்பிட்ட பகுதிகள் மற்றும் சுற்றியுள்ள இடங்களில் வசிக்கும் சொத்து வாங்குபவர்களைக் குறிவைத்தல்.'
    },
    {
      icon: <Users className="w-5 h-5 text-indigo-500 mt-0.5 shrink-0" />,
      title: language === 'en' ? 'Investors' : 'ரியல் எஸ்டேட் முதலீட்டாளர்கள்',
      desc: language === 'en' 
        ? 'Reach capital-ready investors looking for rental yield, asset appreciation, and commercial spaces.' 
        : 'வாடகை வருமானம் மற்றும் சொத்து மதிப்பு உயர்வுக்காகத் தேடும் முதலீட்டாளர்களைக் கவர்தல்.'
    },
    {
      icon: <Globe className="w-5 h-5 text-indigo-500 mt-0.5 shrink-0" />,
      title: language === 'en' ? 'NRIs Worldwide' : 'உலகளாவிய NRI வாடிக்கையாளர்கள்',
      desc: language === 'en' 
        ? 'Deploy campaigns internationally to target Non-Resident Indians looking to purchase properties back home.' 
        : 'சொந்த ஊரில் வீடு/மனை வாங்க விரும்பும் வெளிநாடு வாழ் இந்தியர்களைக் குறிவைத்தல்.'
    },
    {
      icon: <Eye className="w-5 h-5 text-indigo-500 mt-0.5 shrink-0" />,
      title: language === 'en' ? 'High-Intent Buyers' : 'உயர் ஆர்வமுள்ள வாங்குபவர்கள்',
      desc: language === 'en' 
        ? 'Engage active online searchers typing high-intent keywords looking for immediate residential projects.' 
        : 'உடனடியாக வீடு வாங்கத் தேடும் தகுதியான ஆன்லைன் தேடுபவர்களை ஈர்த்தல்.'
    }
  ];

  return (
    <section id="services-section" className="py-20 px-6 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* What We Do Section */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold tracking-widest text-indigo-600 uppercase bg-indigo-50 px-3.5 py-1.5 rounded-full">
              {language === 'en' ? 'WHAT WE DO' : 'எங்கள் சேவைகள்'}
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 mt-4 tracking-tight">
              {language === 'en' ? 'Strategic Digital Services for Real Estate' : 'ரியல் எஸ்டேட்டிற்கான மூலோபாய விளம்பரச் சேவைகள்'}
            </h2>
            <p className="text-slate-500 mt-3 text-sm sm:text-base font-sans">
              {language === 'en' 
                ? 'We launch and optimize highly targeted performance marketing modules to scale your direct sales pipeline.'
                : 'உங்கள் நேரடி விற்பனையை அதிகரிக்க மிகவும் இலக்கு வைக்கப்பட்ட விளம்பர பிரச்சாரங்களை நாங்கள் இயக்குகிறோம்.'}
            </p>
          </div>

          {/* Grid layout of 10 services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {servicesList.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-slate-50 border border-slate-200 hover:border-indigo-600 rounded-[2rem] p-6 flex flex-col justify-between hover:shadow-xl hover:shadow-indigo-50/40 transition-all duration-300 group"
              >
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <div className="p-3 bg-white rounded-xl shadow-xs inline-block mb-5 group-hover:bg-indigo-50 group-hover:scale-105 transition-all duration-300">
                      {service.icon}
                    </div>
                    <h3 className="font-display font-bold text-base text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-sans leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                  {service.image && (
                    <div className="mt-5 rounded-2xl overflow-hidden border border-slate-200/60 shadow-xs aspect-[4/3] relative">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Reach and Device Optimization Column */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-8 border-t border-slate-100">
          
          {/* Target Audience Reach */}
          <div className="space-y-6">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-indigo-600 uppercase bg-indigo-50 px-3 py-1 rounded-full">
                {language === 'en' ? 'CAMPAIGN REACH' : 'விளம்பர இலக்கு'}
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 mt-3 tracking-tight">
                {language === 'en' ? 'Your Target Audience' : 'நாங்கள் யாரை சென்றடைய உதவுகிறோம்'}
              </h3>
              <p className="text-slate-500 mt-2 text-sm font-sans">
                {language === 'en' 
                  ? 'Connect with prospective buyers who have high intent and match your exact property profile.'
                  : 'உங்கள் சொத்து விவரங்களுக்குப் பொருந்தும் தகுதியான வாங்குபவர்களை இணைக்கிறோம்.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reachItems.map((item, i) => (
                <div key={i} className="flex gap-3 bg-slate-50 border border-slate-200/60 p-5 rounded-2xl">
                  {item.icon}
                  <div className="space-y-1">
                    <h4 className="font-display font-bold text-sm text-slate-950">{item.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-sans">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Multi-Device Optimization */}
          <div className="space-y-6 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold tracking-widest text-indigo-600 uppercase bg-indigo-50 px-3 py-1 rounded-full">
                {language === 'en' ? 'MULTI-DEVICE OPTIMIZATION' : 'அனைத்து சாதன வடிவமைப்பு'}
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 mt-3 tracking-tight">
                {language === 'en' ? 'Seamless Experience On Every Device' : 'ஒவ்வொரு சாதனத்திலும் தடையற்ற பயனர் அனுபவம்'}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-sans">
                {language === 'en'
                  ? 'All marketing channels, landing pages, and lead capture utilities are responsive and optimized for mobile, tablet, and desktop layouts. This ensures the best experience for prospective buyers, resulting in lower bounce rates and maximum conversion speeds.'
                  : 'எங்கள் விளம்பரங்கள் மற்றும் லேண்டிங் பக்கங்கள் மொபைல், டேப்லெட் மற்றும் டெஸ்க்டாப் போன்ற அனைத்து சாதனங்களிலும் மிகச் சரியாக வேலை செய்யும் வகையில் வடிவமைக்கப்படுகின்றன. இது வாங்குபவர்களுக்குத் தடையற்ற அனுபவத்தை வழங்கி லீட்களை அதிகப்படுத்துகிறது.'}
              </p>
            </div>

            {/* Premium Multi-Device Image */}
            <div className="w-full h-[260px] sm:h-[320px] rounded-[2rem] overflow-hidden border border-slate-200/80 shadow-md relative group bg-slate-50">
              <img 
                src={multiDeviceImg} 
                alt={language === 'en' ? 'Multi-Device Optimization' : 'அனைத்து சாதன வடிவமைப்பு'} 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>

        </div>

        {/* Confidence Banner */}
        <div className="bg-slate-900 text-white rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden border border-slate-950 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="space-y-3 relative z-10 max-w-2xl">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
                {language === 'en' ? 'COMPLETE CAMPAIGN DELEGATION' : 'முழுமையான விளம்பர மேலாண்மை'}
              </span>
            </div>
            <h3 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight leading-snug">
              {language === 'en'
                ? 'We Manage the Complete Digital Marketing Process So You Can Focus on Closing Sales'
                : 'முழு விளம்பரச் செயல்பாட்டையும் நாங்கள் நிர்வகிக்கிறோம், அதனால் நீங்கள் விற்பனையை முடிப்பதில் கவனம் செலுத்தலாம்'}
            </h3>
            <p className="text-xs text-slate-450 leading-relaxed font-sans">
              {language === 'en'
                ? 'From launch setup, ad design, and channel budget allocation, to direct qualification checks and automated CRM routing. We handle the entire engineering pipeline for your developments.'
                : 'விளம்பர வடிவமைப்பு, பட்ஜெட் மேலாண்மை, லீட் தகுதி சரிபார்ப்பு முதல் CRM ஒத்திசைவு வரை முழுமையான விளம்பரக் கட்டமைப்பை நாங்கள் கவனித்துக் கொள்கிறோம்.'}
            </p>
          </div>

          <button
            onClick={() => {
              const element = document.getElementById('partner-form');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="font-display font-semibold text-xs bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-4 rounded-full shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/35 transition-all duration-300 hover:translate-y-[-1px] cursor-pointer shrink-0 relative z-10"
          >
            {language === 'en' ? 'Launch Your Campaign' : 'பிரச்சாரத்தைத் தொடங்குங்கள்'}
          </button>
        </div>

      </div>
    </section>
  );
}
