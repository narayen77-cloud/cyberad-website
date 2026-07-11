import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'ta';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, section?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Core Translations dictionary matching the B2B Real Estate Lead Generation premise
export const translations: Record<Language, Record<string, any>> = {
  en: {
    common: {
      callToAction: "Get in Touch",
      launchCampaign: "Launch Your Campaign Engine",
      calculateRoi: "Calculate Acquisition ROI",
      b2bNotice: "B2B ARCHITECTURE",
      notAPortal: "NOT A PORTAL",
      b2bScale: "B2B SCALE CONTRACTS",
      activeModule: "ACTIVE MODULE",
      est2026: "EST. 2026",
      minimumCampaign: "Minimum campaign scope: 1 project launch",
      directSalesCrm: "Direct sales CRM alignment",
      customLandingPages: "Custom brand landing pages only",
    },
    header: {
      title: "CyberAd",
      subtitle: "Real Estate Marketing",
      whoWeWorkWith: "Who We Work With",
      theEngine: "The Engine",
      roiEstimator: "ROI Estimator",
      ourProcess: "Our Process",
    },
    hero: {
      badge: "EXCLUSIVE DIGITAL MARKETING FOR REAL ESTATE",
      headlineStart: "We Don't Sell ",
      headlineProperties: "Properties",
      headlineMiddle: ". We Help ",
      headlineBuilders: "Builders",
      headlineEnd: " Sell More of Them.",
      description: "We help builders, land developers, corporate agencies, multi-unit owners, industry specialists, and single property sellers generate quality, exclusive leads through Meta Ads, Google Ads, high-converting landing pages, and marketing automation.",
      b2bScopeTitle: "B2B Scope Clarification:",
      b2bScopeText: "We are strictly a professional lead generation agency. We build direct marketing pipelines and custom advertising systems for real estate sellers to generate high-intent buyers.",
      epiphanyTitle: "The Cognitive Shift",
      epiphanySubtitle: "How leading builders view our partnership",
      pitfallLabel: "The Portal Pitfall:",
      pitfallText: '"As a property seller or builder, showing my property alongside hundreds of other active listings often results in price-driven comparisons rather than direct connections with serious buyers."',
      breakthroughLabel: "The Agency Breakthrough:",
      breakthroughText: '"Exclusive marketing doesn\'t sell properties directly. They build a private digital ecosystem for my brand so buyers only see my development and contact my sales office directly."',
      singleMandateTitle: "Our Single Mandate:",
      singleMandateText: "We don't manage portfolios, show apartments, or coordinate broker listings. We do one thing perfectly: Help property owners and developers generate high-converting lead pipelines and support their sales processes.",
      activePipeline: "100% EXCLUSIVE PIPELINE",
      clientSpecific: "CLIENT-SPECIFIC UTILITIES"
    },
    targetAudience: {
      badge: "OUR TARGET CLIENTELE",
      headline: "We Work Exclusively With Real Estate Professionals",
      description: "We represent the digital machinery of builders, land developers, corporate agencies, multi-unit owners, industry specialists, and single property sellers.",
      selectCategory: "Select Your Category:",
      specSheet: "B2B SPECIFICATION SHEET",
      helpPrefix: "How We Help",
      painPointsTitle: "Traditional Flaws:",
      solutionsTitle: "Our Direct Marketing Approach:",
      exclusivePipeline: "Partner Exclusive Pipeline",
      notAPublicBoard: "Not a public property board",
      audienceTypes: {
        builders: {
          title: "Builders",
          subtitle: "Direct construction houses & developers",
          badge: "REAL ESTATE BUILDERS",
          description: "Helping premium builders accelerate inventory movement through exclusive buyer acquisition campaigns.",
          painPoints: [],
          solutions: [
            "Dedicated campaigns targeting genuine property buyers",
            "High-converting project landing pages",
            "Qualified leads delivered directly to your CRM",
            "Private marketing ecosystem—not a public property portal"
          ]
        },
        developers: {
          title: "Land Developers",
          subtitle: "Plot layouts & land syndicates",
          badge: "INFRASTRUCTURE DEVELOPERS",
          description: "For land developers launching plotted developments, villa layouts, or farmland projects. We build high-velocity direct buyer registration systems prior to public launch.",
          painPoints: [],
          solutions: [
            "High-intent search campaigns capturing buyers looking to construct custom homes.",
            "Interactive plot layout selection grids built directly into the funnel.",
            "Automated drone video and masterplan interactive walkthrough deliveries."
          ]
        },
        agencies: {
          title: "Corporate Agencies",
          subtitle: "Large brokerages & channel partners",
          badge: "EXCLUSIVE CHANNEL PARTNERS",
          description: "For top-tier real estate brokerages and mandated agency houses managing exclusive developer inventory who need custom high-converting marketing engines.",
          painPoints: [],
          solutions: [
            "Highly automated WhatsApp and email warming campaigns.",
            "Enterprise-grade conversion tracking APIs verifying direct attribution.",
            "Multi-channel ad funnels capturing pre-qualified HNIs."
          ]
        },
        owners: {
          title: "Multi-Unit Owners",
          subtitle: "Asset management & luxury syndicates",
          badge: "ASSET SYNDICATES",
          description: "For syndicates, institutional owners, or investment groups holding a bulk portfolio of luxury units, seeking discrete, institutional sales channels.",
          painPoints: [],
          solutions: [
            "Highly target-private, non-public invitation campaigns for HNI clusters.",
            "Executive-grade presentation funnels strictly behind verified logins.",
            "Weekly cryptographic reporting on lead pipeline value."
          ]
        },
        partners: {
          title: "Industry Specialists",
          subtitle: "Bespoke consortia & experts",
          badge: "INDUSTRY SPECIALISTS",
          description: "For development consultants, joint-venture facilitators, or specialized real estate advisors requiring high-intent private marketing channels.",
          painPoints: [],
          solutions: [
            "Consolidated master marketing dashboard with read-only access for all partners.",
            "Centralized real-time attribution ledger showing exact origin of every prospect.",
            "Unified brand guidelines applied to all modern landing modules."
          ]
        },
        singleSellers: {
          title: "Individual Owners & Resale",
          subtitle: "Individual premium property marketing",
          badge: "INDIVIDUAL OWNERS & RESALE",
          description: "For private owners wanting to sell high-value individual apartments, premium villas, or prime plots through direct advertising campaigns.",
          painPoints: [],
          solutions: [
            "A dedicated single-property landing micro-funnel showcasing high-res media.",
            "Precision targeted local social media campaigns reaching high-income neighborhoods.",
            "Direct phone and WhatsApp connection with buyers."
          ]
        }
      }
    },
    capabilities: {
      badge: "CAMPAIGN ARCHITECTURE",
      headline: "Our Multi-Channel Performance Engine",
      description: "Unlike listing portals which display thousands of properties, we build a private, closed-loop ad stack dedicated solely to your company.",
      criticalNoticeTitle: "💡 CRITICAL TO UNDERSTAND:",
      criticalNoticeDesc: "We do not sell. We do not take broker commissions. We operate as an elite B2B engineering partner to supercharge your direct internal sales.",
      notAPortalTitle: "Interested in listing a single apartment?",
      notAPortalDesc: "Please visit standard consumer portals. We design and launch direct advertising budgets for builders, developers, corporate agencies, and single sellers.",
      list: [
        {
          title: "Hyper-Targeted Meta Ads",
          description: "Reach premium buyers based on localized geographic pockets, purchase intent, and luxury lifestyle behaviors.",
          longDescription: "We craft custom audience parameters utilizing high-income cohorts, business owners, and property investors, completely bypassing general public tire-kickers.",
          metrics: "₹300 - ₹500 CPL Average"
        },
        {
          title: "Intent-Driven Google Search",
          description: "Capture active high-intent search queries looking for pre-launch, under-construction, or ready-to-move projects.",
          longDescription: "Our high-precision search ad models target commercial, luxury, and segment-specific queries, ensuring top position in high-converting buyer searches.",
          metrics: "12% Click-to-Lead Rate"
        },
        {
          title: "High-Converting Custom Landing Pages",
          description: "Elegant, incredibly fast loading micro-portals for specific residential projects, completely devoid of distractions.",
          longDescription: "We engineer proprietary landers built with modern UX paradigms, integrated virtual tours, and smart verification, designed to turn visits into scheduled site visits.",
          metrics: "18% Avg. Conversion Rate"
        },
        {
          title: "Automated Lead Qualification",
          description: "Automated qualification systems verifying the buyer's budget, location preference, and purchase timeline.",
          longDescription: "Every prospect undergoes automated filtering via SMS/WhatsApp bots, weeding out brokers and fake numbers before hitting your CRM pipeline.",
          metrics: "100% Filtered Pipelines"
        },
        {
          title: "Real-Time CRM Integrations",
          description: "Direct instant routing of qualified, screened hot prospects into your internal sales team CRM system.",
          longDescription: "We build dedicated connectors linking lead sources directly to Salesforce, LeadSquared, Zoho, or Custom ERPs, triggering instant agent dialer callbacks.",
          metrics: "< 60 Sec Instant Routing"
        }
      ]
    },
    roiCalculator: {
      badge: "THE PERFORMANCE MATRIX",
      headline: "Acquisition ROI & Pipeline Calculator",
      description: "Calculate your estimated monthly leads, sales opportunities, and projected return on ad spend (ROAS) based on real property data.",
      configureVariables: "Configure Campaign Variables",
      projectClassification: "1. Project Classification",
      avgPropertyPrice: "2. Avg Property Ticket Size",
      monthlyBudget: "3. Monthly Ad Budget",
      min: "Min",
      max: "Max",
      benchmarkCalibration: "BENCHMARK CALIBRATION:",
      benchmarkCalibrationText: "Estimates utilize historical campaign performance from local Meta and Google Real Estate ad metrics. Cost-per-lead (CPL) is highly optimized by directing clicks to high-converting individual landing pages, rather than general brokerage portfolio lists.",
      estimatedMonthlyPerformance: "Estimated Monthly Performance",
      exclusivePrivateFunnel: "EXCLUSIVE PRIVATE FUNNEL",
      estLeads: "ESTIMATED LEADS",
      verifiedBuyers: "VERIFIED BUYERS",
      expectedClosures: "EXPECTED CLOSURES",
      probabilistic: "probabilistic",
      projectedSalesValue: "PROJECTED SALES PIPELINE VALUE",
      basedOnSelling: "Based on selling",
      propertiesPricedAt: "properties priced at",
      estDirectRoas: "EST. DIRECT ROAS",
      crmNotice: "100% Client-Owned Direct Leads",
      weDoNotSell: "We do not sell properties. We sell results."
    },
    propertyCampaigns: {
      badge: "STRATEGIC CAMPAIGNS",
      headline: "Successful Campaigns & Property Showcase",
      description: "See how we help sell different types of property assets strategically, delivering highly qualified buyer leads instead of general public enquiries.",
      challengeLabel: "Sourcing Challenge:",
      strategyLabel: "Direct Sourcing Strategy:",
      metricLabel: "Campaign Outcome:",
      villasTitle: "Luxury Villas & Estates",
      villasDesc: "High-value premium properties requiring discrete, high-income targeting and virtual walkthroughs.",
      villasChallenge: "",
      villasStrategy: "Hyper-targeted Meta Ads focusing on luxury lifestyle, business owners, and local HNIs combined with private video tours.",
      villasMetrics: "₹450 Avg CPL | 85% Qualified Buyers",
      plotsTitle: "Plotted Developments & Land",
      plotsDesc: "High-velocity land releases and plotted layouts requiring fast pre-launch registration pipelines.",
      plotsChallenge: "",
      plotsStrategy: "Google Search Ads combined with interactive plot-selection maps and automated layout sheets delivered via WhatsApp.",
      plotsMetrics: "12% Registration Rate | CPL under ₹300",
      apartmentsTitle: "Premium Apartments & Condos",
      apartmentsDesc: "Multi-unit construction projects demanding direct inventory clearance.",
      apartmentsChallenge: "Mass marketing gets high volume but very low-quality leads, wasting sales team time.",
      apartmentsStrategy: "Custom project landing pages highlighting layout masterplans, property features, and direct contact forms.",
      apartmentsMetrics: "18% Lead Conversion",
      commercialTitle: "Commercial & Office Spaces",
      commercialDesc: "B2B offices and retail layouts targeting business owners and institutional investors.",
      commercialChallenge: "",
      commercialStrategy: "LinkedIn campaigns + targeted Google search queries capturing specific yield-seeking commercial investors.",
      commercialMetrics: "6.8% High-Intent Call Rates"
    },
    leadFunnel: {
      badge: "THE PIPELINE INFRASTRUCTURE",
      headline: "Our Lead Generation Process",
      description: "We help property owners and developers generate quality leads and manage the information pipeline efficiently.",
      guaranteeTitle: "B2B INFRASTRUCTURE INTEGRITY",
      guaranteeText: "Our marketing pipeline delivers direct enquiries that belong solely to your company, ensuring exclusive and dedicated leads.",
      integrateCrm: "Integrate funnel into your CRM",
      steps: [
        {
          id: 1,
          phase: "PHASE 01",
          title: "Targeted Campaigns",
          badge: "META, GOOGLE & WHATSAPP",
          description: "We set up and launch premium, localized social media, search, and message campaigns to attract active property buyers."
        },
        {
          id: 2,
          phase: "PHASE 02",
          title: "High-Converting Landing Pages",
          badge: "MOBILE-OPTIMIZED UX",
          description: "Prospective buyers land on ultra-fast, distraction-free landing pages presenting layout masterplans and key details."
        },
        {
          id: 3,
          phase: "PHASE 03",
          title: "Smart Lead Capture",
          badge: "VERIFIED FORM SUBMISSIONS",
          description: "We filter spam and fake numbers by capturing verified buyer criteria including budget, timeline, and phone numbers."
        },
        {
          id: 4,
          phase: "PHASE 04",
          title: "CRM Routing & Closing",
          badge: "AUTOMATED DIRECT ROUTING",
          description: "Enquiries are routed instantly into your sales CRM, empowering your team to focus exclusively on closing property sales."
        }
      ]
    },
    contactForm: {
      badge: "",
      headline: "Start Your Campaign",
      description: "Ready to establish your own high-converting direct ad engine? Contact our lead-architects to map out your seller pipeline. Our B2B services are exclusively for real estate sellers.",
      corpDesigned: "Designed for Real Estate Sellers",
      corpDesignedDesc: "We work exclusively with builders, land developers, corporate agencies, multi-unit owners, industry specialists, and single property sellers to establish direct-to-buyer marketing pipelines.",
      consultationIncl: "Strategic Consultation Inclusions",
      consultationInclDesc: "Every discussion includes a personalized location demand audit, estimated Meta and Google cost-per-click values, and wireframe prototypes for your developments.",
      antiListings: "Lead Quality Notice",
      antiListingsDesc: "We do not host open houses, represent individual single-unit tenants, or act as traditional brokers. We are a specialized real estate lead generation agency.",
      callDuration: "ESTIMATED FIRST CALL DURATION: 20 MINUTES",
      fullName: "Full Name",
      placeholderName: "John Doe",
      corpEmail: "Corporate or Personal Email",
      placeholderEmail: "johndoe@builder.com",
      phone: "Phone Number",
      placeholderPhone: "+91 XXXXX XXXXX",
      companyName: "Company / Property Name",
      placeholderCompany: "Apex Developers Ltd. (or Property Location/Address)",
      profClass: "Professional Classification / Role",
      avgValue: "Avg Property Value Segment",
      targetBudget: "Target Monthly Marketing Budget",
      goalsDetails: "Campaign Goals or Property Details",
      placeholderDetails: "Tell us about your housing project, land plots, or individual property, unit count, and past marketing challenges...",
      submitBtn: "Discuss Further",
      secureNotice: "Secure Channel — We never sell or share your details.",
      successTitle: "Submission Received Successfully",
      successRef: "REFERENCE ID",
      successFiledAt: "FILED AT",
      successGreeting: "Thank you",
      successAnalyzedFor: "Our Lead Architects are analyzing the profile for",
      targetPipeline: "PRELIMINARY PIPELINE TARGET",
      partnerType: "PARTNER TYPE",
      monthlyBudgetLabel: "MONTHLY BUDGET",
      whatHappensNext: "What Happens Next:",
      whatHappensNextDesc: "Our system is analyzing your profile. We will contact you within 2 business hours to discuss matching opportunities.",
      submitAnother: "Submit Another Request Form",
      classificationOptionBuilder: "Builder",
      classificationOptionDeveloper: "Land Developer",
      classificationOptionAgency: "Real Estate Agency",
      classificationOptionOwner: "Property Owner",
      classificationOptionPartner: "Industry Specialist",
      classificationOptionSingleSeller: "Single Property Seller",
      segmentOptionAffordable: "Affordable Housing (under ₹40 Lakhs)",
      segmentOptionMid: "Mid-Segment (₹40 Lakhs - ₹1.5 Crores)",
      segmentOptionLuxury: "Luxury / Premium (above ₹1.5 Crores)",
      budgetOption1: "Below ₹20,000 / mo",
      budgetOption2: "₹20,000 to ₹1,00,000 / mo",
      budgetOption3: "₹1,00,000 to ₹5,00,000 / mo",
      budgetOption4: "₹5,00,000+ / mo",
      roles: {
        builder: "Builder",
        developer: "Developer",
        agency: "Real Estate Agency",
        owner: "Multi-Unit Portfolio Owner",
        broker: "Industry Specialist",
        singleSeller: "Single Property Seller"
      }
    },
    footer: {
      desc: "We design, build, and optimize private performance marketing engines for property owners, builders, and developers to generate quality sales leads directly.",
      disclaimer: "Disclaimer: While we use industry best practices to improve lead quality, final buyer qualification and sales conversion remain the responsibility of the client's sales team.",
      quickLinks: "Quick Links",
      quickLinksAudience: "Target Markets & Audiences",
      quickLinksEngine: "Ad Channels & Engine Capabilities",
      quickLinksRoi: "ROI & Lead Calculator",
      quickLinksFunnel: "Lead Verification Funnel",
      performanceChannel: "Performance Channel",
      activeClientSupport: "ACTIVE CLIENT SUPPORT",
      termsOfService: "B2B Terms of Service",
      privacyCharter: "Privacy Charter",
      copyright: "EXCLUSIVE REAL ESTATE DIGITAL MARKETING agency. ALL RIGHTS RESERVED."
    }
  },
  ta: {
    common: {
      callToAction: "தொடர்பு கொள்ளவும்",
      launchCampaign: "உங்கள் பிரச்சார இயந்திரத்தைத் துவக்குங்கள்",
      calculateRoi: "முதலீட்டின் மீதான வருவாயைக் கணக்கிடுக (ROI)",
      b2bNotice: "B2B கட்டமைப்பு",
      notAPortal: "இது போர்ட்டல் அல்ல",
      b2bScale: "B2B அளவிலான ஒப்பந்தங்கள்",
      activeModule: "செயலில் உள்ள தொகுதி",
      est2026: "நிறுவப்பட்டது 2026",
      minimumCampaign: "குறைந்தபட்ச பிரச்சார நோக்கம்: 1 திட்ட அறிமுகம்",
      directSalesCrm: "நேரடி விற்பனை CRM ஒருங்கிணைப்பு",
      customLandingPages: "தனிப்பயன் பிராண்ட் இறங்கும் பக்கங்கள் மட்டுமே",
    },
    header: {
      title: "CyberAd",
      subtitle: "ரியல் எஸ்டேட் சந்தைப்படுத்தல்",
      whoWeWorkWith: "நாம் யாருடன் வேலை செய்கிறோம்",
      theEngine: "எங்கள் தொழில்நுட்ப இயந்திரம்",
      roiEstimator: "வருவாய் மதிப்பீட்டாளர்",
      ourProcess: "எங்கள் செயல்முறை",
    },
    hero: {
      badge: "ரியல் எஸ்டேட்டிற்கான பிரத்தியேக டிஜிட்டல் சந்தைப்படுத்தல்",
      headlineStart: "நாங்கள் சொத்துக்களை ",
      headlineProperties: "விற்பதில்லை",
      headlineMiddle: ". பில்டர்கள் ",
      headlineBuilders: "அவற்றை அதிகம் விற்க",
      headlineEnd: " நாங்கள் உதவுகிறோம்.",
      description: "நாங்கள் பில்டர்கள், நில மேம்பாட்டாளர்கள், கார்ப்பரேட் முகமைகள், பல-யூனிட் உரிமையாளர்கள், தொழில்முறை நிபுணர்கள் மற்றும் தனி சொத்து விற்பனையாளர்கள் மெட்டா விளம்பரங்கள், கூகுள் விளம்பரங்கள், அதிக மாற்று விகிதம் கொண்ட லேண்டிங் பக்கங்கள் மற்றும் சந்தைப்படுத்தல் ஆட்டோமேஷன் மூலம் தரமான, பிரத்தியேக லீட்களை உருவாக்க உதவுகிறோம்.",
      b2bScopeTitle: "B2B நோக்க விளக்கம்:",
      b2bScopeText: "நாங்கள் ஒரு தொழில்முறை லீட் ஜெனரேஷன் ஏஜென்சி மட்டுமே. சொத்து விற்பனையாளர்களுக்காக பிரத்தியேக மார்க்கெட்டிங் பைப்லைன்களை உருவாக்கி, தகுதியான வாங்குபவர்களின் லீட்களை நேரடியாக வழங்குகிறோம்.",
      epiphanyTitle: "சிந்தனை மாற்றம்",
      epiphanySubtitle: "முன்னணி பில்டர்கள் எங்களை எவ்வாறு பார்க்கிறார்கள்",
      pitfallLabel: "போர்ட்டல் குறைபாடுகள்:",
      pitfallText: '"ஒரு சொத்து விற்பனையாளர் அல்லது பில்டராக, நூற்றுக்கணக்கான இதர திட்டங்களுக்கு மத்தியில் விளம்பரம் செய்யும்போது, அது நேரடி வாங்குபவர்களை ஈர்ப்பதற்கு பதிலாக, தேவையற்ற விலைப்போர்களையும் தகுதியற்ற விசாரணைகளையே உருவாக்குகிறது."',
      breakthroughLabel: "முகமை திருப்புமுனை:",
      breakthroughText: '"பிரத்தியேக மார்க்கெட்டிங் நேரடியாக சொத்துக்களை விற்பதில்லை. அவர்கள் எனது பிராண்டிற்கு ஒரு தனித்துவமான டிஜிட்டல் சுற்றுச்சூழல் அமைப்பை உருவாக்குகிறார்கள், எனவே வாங்குபவர்கள் எனது திட்டத்தை மட்டுமே பார்த்து எங்கள் விற்பனை அலுவலகத்தை நேரடியாக தொடர்பு கொள்கிறார்கள்."',
      singleMandateTitle: "எங்கள் ஒரே நோக்கம்:",
      singleMandateText: "நாங்கள் சொத்து போர்ட்ஃபோலியோக்களை நிர்வகிப்பதோ, அடுக்குமாடி குடியிருப்புகளைக் காட்டுவதோ இல்லை. நாங்கள் ஒன்றை மட்டும் மிகச் சரியாகச் செய்கிறோம்: சொத்து உரிமையாளர்கள் மற்றும் டெவலப்பர்களுக்குத் தேவையான லீட்களை உருவாக்கி அவர்களின் விற்பனைக்கு உதவுதல்.",
      activePipeline: "100% பிரத்தியேக பைப்லைன்",
      clientSpecific: "வாடிக்கையாளர்-குறிப்பிட்ட பயன்பாடுகள்"
    },
    targetAudience: {
      badge: "எங்கள் இலக்கு வாடிக்கையாளர்கள்",
      headline: "நாங்கள் ரியல் எஸ்டேட் வல்லுநர்களுடன் மட்டுமே பிரத்தியேகமாக வேலை செய்கிறோம்",
      description: "பில்டர்கள், நில டெவலப்பர்கள், கார்ப்பரேட் முகமைகள், பல-யூனிட் உரிமையாளர்கள், தொழில்முறை நிபுணர்கள் மற்றும் தனி சொத்து விற்பனையாளர்களின் டிஜிட்டல் விளம்பர உள்கட்டமைப்பை மட்டுமே நாங்கள் உருவாக்குகிறோம்.",
      selectCategory: "உங்கள் வகையைத் தேர்ந்தெடுக்கவும்:",
      specSheet: "B2B விவரக்குறிப்பு தாள்",
      helpPrefix: "நாம் எவ்வாறு உதவுகிறோம் - ",
      painPointsTitle: "பாரம்பரிய குறைபாடுகள்:",
      solutionsTitle: "எங்கள் நேரடி மார்க்கெட்டிங் அணுகுமுறை:",
      exclusivePipeline: "கூட்டாளர் பிரத்தியேக பைப்லைன்",
      notAPublicBoard: "இது பொதுச் சொத்துப் பலகை அல்ல",
      audienceTypes: {
        builders: {
          title: "பில்டர்கள்",
          subtitle: "நேரடி கட்டுமான நிறுவனங்கள் & பில்டர்கள்",
          badge: "ரியல் எஸ்டேட் பில்டர்கள்",
          description: "பிரத்தியேக விளம்பர பிரச்சாரங்கள் மூலம் சொத்துக்களை விரைவாக விற்க பில்டர்களுக்கு உதவுகிறோம்.",
          painPoints: [],
          solutions: [
            "உண்மையான சொத்து வாங்குபவர்களைக் குறிவைக்கும் பிரத்தியேக விளம்பரங்கள்",
            "அதிக வாடிக்கையாளர்களை ஈர்க்கும் திட்ட இறங்கும் பக்கங்கள்",
            "உங்கள் CRM-க்கு நேரடியாக அனுப்பப்படும் தகுதியான லீட்கள்",
            "தனிப்பயனாக்கப்பட்ட சந்தைப்படுத்தல் சுற்றுச்சூழல்—இது பொதுச் சொத்து போர்டல் அல்ல"
          ]
        },
        developers: {
          title: "நில டெவலப்பர்கள்",
          subtitle: "மனைகள் மற்றும் நிலக் குழுமங்கள்",
          badge: "கட்டமைப்பு டெவலப்பர்கள்",
          description: "மனைப் பிரிவுகள் அல்லது விவசாய நிலத் திட்டங்களைத் தொடங்கும் நில மேம்பாட்டாளர்களுக்கு, பொது அறிமுகத்திற்கு முன்பே வாங்குபவர்களின் நேரடிப் பதிவுகளைத் துரிதப்படுத்துகிறோம்.",
          painPoints: [],
          solutions: [
            "சொந்த வீடு கட்ட விரும்பும் வாங்குபவர்களைக் குறிவைக்கும் தேடல் விளம்பரங்கள்.",
            "வலைத்தளத்திலேயே நேரடியாக இணையும் ஊடாடும் மனை வரைபடங்கள்.",
            "தானியங்கி ட்ரோன் வீடியோக்கள் மற்றும் ஊடாடும் மாஸ்டர் பிளான் வழங்கல்."
          ]
        },
        agencies: {
          title: "கார்ப்பரேட் முகமைகள்",
          subtitle: "பெரிய புரோக்கரேஜ்கள் & சேனல் கூட்டாளர்கள்",
          badge: "பிரத்தியேக சேனல் கூட்டாளர்கள்",
          description: "பிரத்தியேக டெவலப்பர் சொத்துக்களை நிர்வகிக்கும் உயர்தர ரியல் எஸ்டேட் முகவர் நிறுவனங்களுக்கு, அதிக மாற்று விகிதம் கொண்ட மார்க்கெட்டிங் என்ஜின்கள்.",
          painPoints: [],
          solutions: [
            "வாட்ஸ்அப் மற்றும் மின்னஞ்சல் மூலம் லீட்களைத் தானாகவே வெதுவெதுப்பாக்கும் பிரச்சாரங்கள்.",
            "நேரடி பங்களிப்பைச் சரிபார்க்கும் கார்ப்பரேட் அளவிலான மாற்று கண்காணிப்பு API-கள்.",
            "தகுதியான உயர் வருவாய் தனிநபர்களைக் (HNI) கவரும் மல்டி-சேனல் விளம்பரங்கள்."
          ]
        },
        owners: {
          title: "பல-யூனிட் உரிமையாளர்கள்",
          subtitle: "சொத்து மேலாண்மை & சொகுசு குழுமங்கள்",
          badge: "சொத்து சிண்டிகேட்டுகள்",
          description: "சொகுசு அலகுகளின் போர்ட்ஃபோலியோவைக் கொண்ட முதலீட்டுக் குழுக்கள் அல்லது நிறுவனங்களுக்கு, விவேகமான நேரடி விற்பனை சேனல்கள்.",
          painPoints: [],
          solutions: [
            "HNI குழுக்களுக்கான மிகவும் பாதுகாப்பான, பொதுவில் வெளியிடப்படாத விளம்பரங்கள்.",
            "சரிபார்க்கப்பட்ட உள்நுழைவுகளுக்கு பின்னால் மட்டுமே இருக்கும் விளக்கக்காட்சிகள்.",
            "பைப்லைன் மதிப்புகள் குறித்த வாராந்திர கிரிப்டோகிராஃபிக் அறிக்கைகள்."
          ]
        },
        partners: {
          title: "தொழில்முறை நிபுணர்கள்",
          subtitle: "கூட்டு முயற்சிகள் மற்றும் ஆலோசனை நிபுணர்கள்",
          badge: "தொழில்முறை நிபுணர்கள்",
          description: "கூட்டு நில மேம்பாடு, மேம்பாட்டு ஆலோசகர்கள் அல்லது பிரத்தியேக விவேகமான மார்க்கெட்டிங் சேனல்கள் தேவைப்படும் ரியல் எஸ்டேட் நிபுணர்களுக்கான தனித்துவமான சேவை.",
          painPoints: [],
          solutions: [
            "ஒவ்வொரு வாடிக்கையாளரின் துல்லியமான மூலத்தைக் காட்டும் நிகழ்நேர லெட்ஜர்.",
            "அனைத்து கூட்டாளர்களுக்கும் வாசிப்பு-மட்டும் அணுகலுடன் கூடிய ஒருங்கிணைந்த மார்க்கெட்டிங் டாஷ்போர்டு.",
            "அனைத்து இறங்கும் தொகுதிகளிலும் பயன்படுத்தப்படும் ஒருங்கிணைந்த பிராண்ட் வழிகாட்டுதல்கள்."
          ]
        },
        singleSellers: {
          title: "தனி நபர் உரிமையாளர்கள் & மறுவிற்பனை",
          subtitle: "தனிப்பட்ட பிரீமியம் சொத்து விற்பனை",
          badge: "தனி நபர் உரிமையாளர்கள் & மறுவிற்பனை",
          description: "தங்களின் மதிப்புமிக்க தனிப்பட்ட அடுக்குமாடி குடியிருப்புகள், பிரீமியம் வில்லாக்கள் அல்லது மனைகளை நேரடி விளம்பர பிரச்சாரங்கள் மூலம் விற்க விரும்பும் தனி நபர் உரிமையாளர்களுக்கான பிரத்யேக சேவை.",
          painPoints: [],
          solutions: [
            "அதிவேக காட்சிகள் கொண்ட பிரத்தியேக தனி-சொத்து லேண்டிங் தளம்.",
            "உயர் வருவாய் உள்ள பகுதிகளைக் குறிவைத்து நடத்தப்படும் சமூக ஊடக விளம்பரங்கள்.",
            "வாங்குபவர்களுடன் நேரடியாக வாட்ஸ்அப் அல்லது தொலைபேசி வழி தொடர்பு."
          ]
        }
      }
    },
    capabilities: {
      badge: "பிரச்சாரக் கட்டமைப்பு",
      headline: "எங்கள் மல்டி-சேனல் செயல்திறன் இயந்திரம்",
      description: "ஆயிரக்கணக்கான சொத்துக்களைக் காட்டும் பொதுப் பட்டியல் தளங்களைப் போலல்லாமல், உங்கள் நிறுவனத்திற்கு மட்டுமே அர்ப்பணிக்கப்பட்ட ஒரு தனி விளம்பர அமைப்பை நாங்கள் உருவாக்குகிறோம்.",
      criticalNoticeTitle: "💡 புரிந்து கொள்ள வேண்டியது முக்கியம்:",
      criticalNoticeDesc: "நாங்கள் விற்பனை செய்வதில்லை. நாங்கள் தரகு கமிஷன் வாங்குவதில்லை. உங்கள் உள் விற்பனையை அதிகரிக்க ஒரு சிறந்த B2B பொறியியல் கூட்டாளராக நாங்கள் செயல்படுகிறோம்.",
      notAPortalTitle: "ஒற்றை அடுக்குமாடி குடியிருப்பை விற்க விரும்புகிறீர்களா?",
      notAPortalDesc: "தயவுசெய்து சாதாரண நுகர்வோர் இணையதளங்களைப் பார்வையிடவும். பில்டர்கள் மற்றும் டெவலப்பர்களுக்காக நாங்கள் பல கோடி ரூபாய் நேரடி விளம்பர பிரச்சாரங்களை வடிவமைக்கிறோம்.",
      list: [
        {
          title: "துல்லியமான மெட்டா விளம்பரங்கள்",
          description: "குறிப்பிட்ட புவியியல் பகுதிகள், வாங்கும் ஆர்வம் மற்றும் சொகுசு வாழ்க்கை முறை நடத்தைகளின் அடிப்படையில் பிரீமியம் வாங்குபவர்களை சென்றடையுங்கள்.",
          longDescription: "உயர் வருவாய் கொண்ட நபர்கள், வணிக உரிமையாளர்கள் மற்றும் சொத்து முதலீட்டாளர்களைக் குறிவைத்து தனிப்பயன் விளம்பரங்களை உருவாக்குகிறோம்.",
          metrics: "சராசரியாக ₹300 - ₹500 CPL"
        },
        {
          title: "கூகுள் தேடல் விளம்பரங்கள்",
          description: "புதிய திட்டங்கள், கட்டுமானத்தில் உள்ளவை அல்லது உடனடியாக குடியேறக்கூடிய திட்டங்களைத் தேடும் வாடிக்கையாளர்களைக் கவரவும்.",
          longDescription: "வணிக, சொகுசு மற்றும் பிரிவு சார்ந்த தேடல்களைக் குறிவைத்து எங்களின் துல்லியமான கூகுள் விளம்பர மாடல்கள் செயல்படுகின்றன.",
          metrics: "12% கிளிக்-டு-லீட் விகிதம்"
        },
        {
          title: "உயர்-மாற்று தனிப்பயன் லேண்டிங் பக்கங்கள்",
          description: "குறிப்பிட்ட குடியிருப்பு திட்டங்களுக்கான நேர்த்தியான, மிக வேகமாக ஏற்றப்படும் மைக்ரோ-போர்ட்டல்கள்.",
          longDescription: "விளம்பரங்களில் இருந்து வரும் வாடிக்கையாளர்களைத் திட்டத்தை நேரில் பார்க்கத் தூண்டும் வகையில் வடிவமைக்கப்பட்ட நவீன பக்கங்கள்.",
          metrics: "18% சராசரி மாற்று விகிதம்"
        },
        {
          title: "தானியங்கி லீட் தகுதி சரிபார்ப்பு",
          description: "வாங்குபவரின் பட்ஜெட், இருப்பிட விருப்பம் மற்றும் வாங்கும் காலக்கெடுவைச் சரிபார்க்கும் தானியங்கி அமைப்புகள்.",
          longDescription: "ஒவ்வொரு வாடிக்கையாளரும் எஸ்எம்எஸ்/வாட்ஸ்அப் போட்கள் மூலம் தானியங்கி வடிகட்டலுக்கு உட்படுத்தப்பட்டு, போலி எண்கள் மற்றும் தரகர்கள் நீக்கப்படுகிறார்கள்.",
          metrics: "100% வடிகட்டப்பட்ட பைப்லைன்கள்"
        },
        {
          title: "நிகழ்நேர CRM ஒருங்கிணைப்புகள்",
          description: "தகுதியான வாடிக்கையாளர்களை உங்கள் உள் விற்பனைக் குழுவின் CRM அமைப்பிற்கு உடனடியாக அனுப்புதல்.",
          longDescription: "Salesforce, LeadSquared, Zoho போன்ற CRMகளுடன் நேரடி இணைப்பை உருவாக்கி, வாடிக்கையாளர் பதிவு செய்த சில நொடிகளில் விற்பனை அதிகாரிகளுக்குத் தகவல் அனுப்புகிறோம்.",
          metrics: "< 60 நொடி உடனடி ரூட்டிங்"
        }
      ]
    },
    roiCalculator: {
      badge: "செயல்திறன் மெட்ரிக்ஸ்",
      headline: "முதலீட்டு வருவாய் & பைப்லைன் கால்குலேட்டர்",
      description: "உண்மையான சொத்துத் தரவுகளின் அடிப்படையில் உங்கள் மதிப்பிடப்பட்ட மாதாந்திர லீட்கள், விற்பனை வாய்ப்புகள் மற்றும் விளம்பர வருவாயைக் கணக்கிடுங்கள்.",
      configureVariables: "பிரச்சார மாறிகளை உள்ளமைக்கவும்",
      projectClassification: "1. திட்ட வகைப்பாடு",
      avgPropertyPrice: "2. சராசரி சொத்து மதிப்பு",
      monthlyBudget: "3. மாதாந்திர விளம்பர பட்ஜெட்",
      min: "குறைந்தபட்சம்",
      max: "அதிகபட்சம்",
      benchmarkCalibration: "அளவீட்டு அளவுத்திருத்தம்:",
      benchmarkCalibrationText: "மதிப்பீடுகள் உள்ளூர் மெட்டா மற்றும் கூகுள் ரியல் எஸ்டேட் விளம்பர அளவீடுகளின் அடிப்படையில் கணக்கிடப்படுகின்றன. பொது தளங்களுக்குப் பதில் தனித்துவமான இறங்கும் பக்கங்களுக்குக் கிளிக்குகளை இயக்குவதன் மூலம் லீட் செலவு (CPL) மிகவும் உகந்ததாக உள்ளது.",
      estimatedMonthlyPerformance: "மதிப்பிடப்பட்ட மாதாந்திர செயல்திறன்",
      exclusivePrivateFunnel: "பிரத்தியேக தனிப்பட்ட புனல்",
      estLeads: "மதிப்பிடப்பட்ட லீட்கள்",
      verifiedBuyers: "சரிபார்க்கப்பட்ட வாங்குபவர்கள்",
      expectedClosures: "எதிர்பார்க்கப்படும் விற்பனைகள்",
      probabilistic: "சாத்தியக்கூறு அடிப்படையிலானது",
      projectedSalesValue: "மதிப்பிடப்பட்ட விற்பனை பைப்லைன் மதிப்பு",
      basedOnSelling: "விற்பனையின் அடிப்படையில்",
      propertiesPricedAt: "மதிப்புள்ள சொத்துக்கள்",
      estDirectRoas: "மதிப்பிடப்பட்ட நேரடி ROAS",
      crmNotice: "105% கிளையண்ட்-சொந்தமான நேரடி லீட்கள்",
      weDoNotSell: "நாங்கள் சொத்துக்களை விற்பதில்லை. முடிவுகளை விற்கிறோம்."
    },
    propertyCampaigns: {
      badge: "மூலோபாய பிரச்சாரங்கள்",
      headline: "வெற்றிகரமான பிரச்சாரங்கள் & சொத்துக்கள் காட்சி",
      description: "பொதுவான விசாரணைகளுக்குப் பதிலாக மிகவும் தகுதியான வாங்குபவர்களைக் கண்டறிந்து, பல்வேறு வகையான சொத்துக்களை விற்க நாங்கள் எவ்வாறு உதவுகிறோம் என்பதைப் பாருங்கள்.",
      challengeLabel: "சவால்:",
      strategyLabel: "நேரடி விளம்பர உத்தி:",
      metricLabel: "பிரச்சாரத்தின் முடிவு:",
      villasTitle: "சொகுசு வில்லாக்கள் & எஸ்டேட்டுகள்",
      villasDesc: "உயர்தர பிரீமியம் சொத்துக்களுக்கு தகுந்த வருமானம் உள்ள நபர்களைக் குறிவைக்கும் விளம்பரங்கள் மற்றும் மெய்நிகர் சுற்றுப்பயணங்கள் தேவை.",
      villasChallenge: "",
      villasStrategy: "உள்ளூர் உயர் வருவாய் ஈட்டுபவர்கள் மற்றும் வணிக உரிமையாளர்களைக் குறிவைத்து மெட்டா விளம்பரங்கள் மற்றும் பிரத்தியேக வீடியோ சுற்றுப்பயணங்கள்.",
      villasMetrics: "₹450 சராசரி CPL | 85% தகுதியான வாங்குபவர்கள்",
      plotsTitle: "நில மேம்பாடுகள் & மனைப்பிரிவுகள்",
      plotsDesc: "அறிமுகத்திற்கு முந்தைய பதிவுகளை விரைவாகப் பெறுவதற்கு வேகமான விளம்பரப் பாதைகள் தேவை.",
      plotsChallenge: "",
      plotsStrategy: "கூகுள் விளம்பரங்கள் மற்றும் வாட்ஸ்அப் மூலம் மனை விவரங்களை வழங்கும் தானியங்கி அமைப்புகள்.",
      plotsMetrics: "12% பதிவு விகிதம் | CPL ₹300-க்குள்",
      apartmentsTitle: "பிரீமியம் அடுக்குமாடி குடியிருப்புகள்",
      apartmentsDesc: "நேரடி விற்பனையை விரும்பும் அடுக்குமாடி குடியிருப்புகள்.",
      apartmentsChallenge: "பொதுவான விளம்பரம் அதிக எண்ணிக்கையிலான தகுதியற்ற விவரங்களை மட்டுமே தருகிறது, இதனால் நேரம் வீணாகிறது.",
      apartmentsStrategy: "தள அமைப்புகள், சொத்தின் சிறப்பம்சங்கள் மற்றும் நேரடி தொடர்பு படிவங்களை வழங்கும் பிரத்தியேக பக்கங்கள்.",
      apartmentsMetrics: "18% லீட் மாற்று விகிதம்",
      commercialTitle: "வணிக மற்றும் அலுவலக இடங்கள்",
      commercialDesc: "வணிக உரிமையாளர்கள் மற்றும் நிறுவன முதலீட்டாளர்களைக் குறிவைக்கும் இடங்கள்.",
      commercialChallenge: "",
      commercialStrategy: "வணிக முதலீட்டாளர்களை ஈர்ப்பதற்கான லிங்க்டின் விளம்பரங்கள் மற்றும் இலக்கு வைக்கப்பட்ட கூகுள் தேடல் விளம்பரங்கள்.",
      commercialMetrics: "6.8% உயர் ஆர்வமுள்ள அழைப்பு விகிதங்கள்"
    },
    leadFunnel: {
      badge: "பைப்லைன் உள்கட்டமைப்பு",
      headline: "எங்கள் லீட் ஜெனரேஷன் செயல்முறை",
      description: "சொத்து உரிமையாளர்கள் மற்றும் டெவலப்பர்களுக்குத் தரமான லீட்களை உருவாக்கவும், தகவல் பைப்லைனை திறமையாக நிர்வகிக்கவும் நாங்கள் உதவுகிறோம்.",
      guaranteeTitle: "B2B உள்கட்டமைப்பு நம்பகத்தன்மை",
      guaranteeText: "எங்களின் மார்க்கெட்டிங் பைப்லைன் உங்கள் நிறுவனத்திற்கு மட்டுமே சொந்தமான நேரடி விசாரணைகளை வழங்குகிறது, இது பிரத்தியேகமான மற்றும் அர்ப்பணிக்கப்பட்ட லீட்களை உறுதி செய்கிறது.",
      integrateCrm: "உங்கள் CRM-ல் இந்த புனலை ஒருங்கிணைக்கவும்",
      steps: [
        {
          id: 1,
          phase: "படி 01",
          title: "இலக்கு வைக்கப்பட்ட டிஜிட்டல் விளம்பரங்கள்",
          badge: "மெட்டா & கூகுள் விளம்பரங்கள்",
          description: "ரியல் எஸ்டேட் வாங்குவதில் அல்லது முதலீடு செய்வதில் ஆர்வமுள்ளவர்களை ஈர்க்க நாங்கள் இலக்கு வைக்கப்பட்ட மெட்டா, கூகுள் மற்றும் டிஜிட்டல் விளம்பரங்களை இயக்குகிறோம்."
        },
        {
          id: 2,
          phase: "படி 02",
          title: "அதிக மாற்று விகிதம் கொண்ட லேண்டிங் பக்கங்கள்",
          badge: "அதிவேக UX",
          description: "வாங்குபவர்கள் உங்கள் திட்டத்திற்கான உண்மையான விசாரணைகளைப் பதிவு செய்ய வடிவமைக்கப்பட்ட பிரத்யேக பக்கங்களுக்கு வழிநடத்தப்படுகிறார்கள்."
        },
        {
          id: 3,
          phase: "படி 03",
          title: "லீட் தகவல் சேகரிப்பு",
          badge: "விருப்பத் தேர்வு",
          description: "லீட்களின் பொருத்தத்தை மேம்படுத்த, ஆர்வமுள்ள வாங்குபவர்கள் தங்களின் தொடர்பு விவரங்கள், பட்ஜெட் மற்றும் இருப்பிடத் தேவைகளைச் சமர்ப்பிக்கிறார்கள்."
        },
        {
          id: 4,
          phase: "படி 04",
          title: "லீட் வழங்கல்",
          badge: "CRM அனுப்புதல்",
          description: "தொடர்புடைய விசாரணைகள் உங்கள் விற்பனைக் குழுவிடம் உடனுக்குடன் வழங்கப்படுகின்றன, இதனால் அவர்கள் வாங்குபவர்களைத் தொடர்பு கொண்டு விற்பனைச் செயல்முறையைத் தொடரலாம்."
        }
      ]
    },
    contactForm: {
      badge: "",
      headline: "உங்கள் பிரச்சாரத்தைத் தொடங்குங்கள்",
      description: "உங்களின் சொந்த உயர்-மாற்று நேரடி விளம்பரப் பாதையை நிறுவத் தயாரா? எங்கள் லீட் நிபுணர்களை தொடர்பு கொள்ளவும்.",
      corpDesigned: "நிறுவனங்கள் & வாங்குபவர்களுக்காக வடிவமைக்கப்பட்டது",
      corpDesignedDesc: "நாங்கள் பதிவுசெய்யப்பட்ட பில்டர்கள், டெவலப்பர்களுடன் பணியாற்றுகிறோம். வாங்குபவர்களும் தங்களின் தேவைகளைப் பதிவு செய்து அறிவிப்புகளைப் பெறலாம்.",
      consultationIncl: "மார்க்கெட்டிங் ஆலோசனையின் உள்ளடக்கங்கள்",
      consultationInclDesc: "ஒவ்வொரு ஆலோசனையிலும் தனிப்பயனாக்கப்பட்ட இருப்பிடத் தேவை தணிக்கை, மதிப்பிடப்பட்ட மெட்டா மற்றும் கூகுள் விளம்பரக் கிளிக்கிற்கான கட்டணம் மற்றும் உங்கள் திட்டங்களுக்கான மாதிரி வரைபடங்கள் ஆகியவை அடங்கும்.",
      antiListings: "விசாரணைத் தரம் பற்றிய அறிவிப்பு",
      antiListingsDesc: "நாங்கள் சொத்துக்களை நேரடியாக நிர்வகிப்பதோ அல்லது தனிப்பட்ட தரகராகவோ செயல்படுவதில்லை. நாங்கள் ஒரு பிரத்யேக லீட் ஜெனரேஷன் ஏஜென்சி.",
      callDuration: "மதிப்பிடப்பட்ட முதல் அழைப்பு நேரம்: 20 நிமிடங்கள்",
      fullName: "முழு பெயர்",
      placeholderName: "ஜான் டோ",
      corpEmail: "கார்ப்பரேட் அல்லது தனிப்பட்ட மின்னஞ்சல்",
      placeholderEmail: "johndoe@builder.com",
      phone: "தொலைபேசி எண்",
      placeholderPhone: "+91 XXXXX XXXXX",
      companyName: "நிறுவனம் / விரும்பும் பகுதி",
      placeholderCompany: "அபெக்ஸ் டெவலப்பர்ஸ் லிமிடெட் (அல்லது விரும்பும் நகரம்/பகுதி)",
      profClass: "தொழில்முறை வகைப்பாடு / பங்கு",
      avgValue: "சராசரி சொத்து மதிப்பு பிரிவு",
      targetBudget: "இலக்கு மாதாந்திர மார்க்கெட்டிங் பட்ஜெட்",
      goalsDetails: "பிரச்சார இலக்குகள் அல்லது வாங்குபவர் தேவைகள்",
      placeholderDetails: "உங்கள் வீட்டுத் திட்டம் அல்லது நீங்கள் ஒரு வாங்குபவர் எனில் உங்கள் குறிப்பிட்ட தேவைகளைப் பற்றி விரிவாக எழுதவும்...",
      submitBtn: "மேலும் விவாதிக்கவும்",
      secureNotice: "பாதுகாப்பான சேனல் — உங்கள் விவரங்களை நாங்கள் ஒருபோதும் விற்கவோ அல்லது பகிரவோ மாட்டோம்.",
      successTitle: "சமர்ப்பிப்பு வெற்றிகரமாகப் பெறப்பட்டது",
      successRef: "குறிப்பு எண்",
      successFiledAt: "சமர்ப்பிக்கப்பட்ட நேரம்",
      successGreeting: "நன்றி",
      successAnalyzedFor: "எங்கள் முதன்மை வடிவமைப்பாளர்கள் உங்கள் விவரங்களை பகுப்பாய்வு செய்கிறார்கள் — ",
      targetPipeline: "பூர்வாங்க பைப்லைன் இலக்கு",
      partnerType: "கூட்டாளர் வகை",
      monthlyBudgetLabel: "மாதாந்திர பட்ஜெட்",
      whatHappensNext: "அடுத்து என்ன நடக்கும்:",
      whatHappensNextDesc: "எங்கள் சிஸ்டம் உங்கள் சுயவிவரத்தை பகுப்பாய்வு செய்கிறது. பொருத்தமான வாய்ப்புகளைப் பற்றி பேச 2 வணிக மணி நேரத்திற்குள் உங்களைத் தொடர்புகொள்வோம்.",
      submitAnother: "மற்றொரு கோரிக்கையைச் சமர்ப்பிக்கவும்",
      classificationOptionBuilder: "பில்டர் (Builder)",
      classificationOptionDeveloper: "நில மேம்பாட்டாளர் (Developer)",
      classificationOptionAgency: "ரியல் எஸ்டேட் நிறுவனம்",
      classificationOptionOwner: "சொத்து உரிமையாளர்",
      classificationOptionPartner: "சேனல் கூட்டாளர் / தரகர்",
      classificationOptionBuyer: "வாங்குபவர் (நான் சொத்து வாங்க விரும்புகிறேன்)",
      segmentOptionAffordable: "எளிய பட்ஜெட் வீடு (₹40 லட்சத்திற்குள்)",
      segmentOptionMid: "நடுத்தர பட்ஜெட் (₹40 லட்சம் - ₹1.5 கோடி)",
      segmentOptionLuxury: "சொகுசு / பிரீமியம் (₹1.5 கோடிக்கு மேல்)",
      budgetOption1: "மாதம் ₹1,00,000 முதல் ₹2,50,000 வரை",
      budgetOption2: "மாதம் ₹2,50,000 முதல் ₹5,00,000 வரை",
      budgetOption3: "மாதம் ₹5,00,000 முதல் ₹10,00,000 வரை",
      budgetOption4: "மாதம் ₹10,00,000+ வரை",
      roles: {
        builder: "பில்டர் (Builder)",
        developer: "டெவலப்பர் (Developer)",
        agency: "ரியல் எஸ்டேட் நிறுவனம்",
        owner: "மல்டி-யூனிட் போர்ட்ஃபோலியோ உரிமையாளர்",
        broker: "அங்கீகரிக்கப்பட்ட சேனல் கூட்டாளர்",
        buyer: "சாத்தியமான வாங்குபவர்"
      }
    },
    footer: {
      desc: "சொத்து உரிமையாளர்கள், பில்டர்கள் மற்றும் டெவலப்பர்களுக்குத் தரமான லீட்களை நேரடியாக உருவாக்க பிரத்தியேக மார்க்கெட்டிங் என்ஜின்களை நாங்கள் வடிவமைத்து, உருவாக்கி, மேம்படுத்துகிறோம்.",
      disclaimer: "பொறுப்புத் துறப்பு: லீட்களின் தரத்தை மேம்படுத்த நாங்கள் சிறந்த நடைமுறைகளைப் பயன்படுத்தினாலும், இறுதி வாங்குபவரின் தகுதி மற்றும் விற்பனை மாற்றம் ஆகியவை வாடிக்கையாளரின் விற்பனைக் குழுவின் பொறுப்பாகும்.",
      quickLinks: "விரைவு இணைப்புகள்",
      quickLinksAudience: "இலக்கு சந்தைகள் & வாடிக்கையாளர்கள்",
      quickLinksEngine: "விளம்பர சேனல்கள் & திறன்",
      quickLinksRoi: "முதலீட்டு வருவாய் கால்குலேட்டர்",
      quickLinksFunnel: "லீட் சரிபார்ப்பு புனல்",
      performanceChannel: "செயல்திறன் சேனல்",
      activeClientSupport: "செயலில் உள்ள வாடிக்கையாளர் ஆதரவு",
      termsOfService: "B2B சேவை விதிமுறைகள்",
      privacyCharter: "தனியுரிமை பட்டயம்",
      copyright: "EXCLUSIVE REAL ESTATE DIGITAL MARKETING agency. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை."
    }
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string, section?: string): string => {
    try {
      if (section) {
        return translations[language][section]?.[key] || translations['en'][section]?.[key] || key;
      }
      return translations[language]['common']?.[key] || translations['en']['common']?.[key] || key;
    } catch (e) {
      return key;
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
