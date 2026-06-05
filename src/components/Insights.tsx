import { useState, useEffect } from "react";
import { useLanguage } from "./LanguageContext";
import { motion, AnimatePresence } from "motion/react";
import { Calendar, Clock, ArrowLeft, ArrowRight, User, Share2, BookOpen, ExternalLink } from "lucide-react";

// Robust TypeScript interfaces
export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  featuredImage: string;
  category: string;
  readingTime: string;
  author: string;
  url?: string;
}

const ENGLISH_FALLBACK_POSTS: BlogPost[] = [
  {
    id: 101,
    title: "How Duolingo Quietly Became One of the Smartest Digital Marketing Brands",
    excerpt: "By turning a green owl into a chaotic TikTok superstar and gamification master, Duolingo rewrote the playbook on user retention and brand psychology.",
    category: "Branding",
    readingTime: "5 min read",
    date: "May 22, 2026",
    author: "Narayen",
    featuredImage: "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=1200&q=80",
    content: `
      <p class="lead">In a world of hyper-saturated feeds and endless algorithmic noise, Duolingo managed to build an organic marketing flywheel that most tech giants can only dream of. They did not do this with traditional corporate messaging—they did it by transforming their mascot, Duo, into a chaotic, funny, and deeply relatable personality.</p>
      
      <h2>Moving From Intrusion to Connection</h2>
      <p>Traditional brands spend millions trying to look flawless. Duolingo did the exact opposite: they embraced self-deprecation, meme marketing, and native content creation on platforms like TikTok and Instagram Reels. This strategy positioned them not as a distant educational platform, but as a dynamic friend on the user's feed.</p>
      
      <blockquote>
        "Forge your wealth — no blade cuts deeper than prosperity against the arrogance of enemies." — Thirukkural 759
      </blockquote>

      <h2>The Three Pillars of Duolingo's Engagement Loop</h2>
      <ul>
        <li><strong>Chaotic Entertainment:</strong> Moving from standard feature lists to narrative storytelling. Their mascot interacts with pop culture and other brands seamlessly.</li>
        <li><strong>Aggressive (Yet Cheeky) Retention:</strong> Their famous push notifications are legendary. Instead of sounding dry, they utilize passive-aggressive reminders that spark emotional responses and prompt immediate app opens.</li>
        <li><strong>Frictionless Gamification:</strong> Leaderboards, streaks, and achievement badges that turn learning a language into a dopamine-yielding habit.</li>
      </ul>

      <h2>The Takeaway for Visionary Brands</h2>
      <p>Whether you represent a retail conglomerate, high-end real estate, or local services, the objective is the same: cease standard self-promotion. Instead, humanize your message, construct natural interaction loops, and give your market a reason to care before expecting them to transact.</p>
    `
  },
  {
    id: 102,
    title: "Google Ads Has Changed — Most Businesses Still Haven’t Realized It",
    excerpt: "With Performance Max and AI-driven bidding dominating search results, legacy manual bidding is failing. Here is how modern businesses must adapt.",
    category: "Digital Marketing",
    readingTime: "6 min read",
    date: "May 18, 2026",
    author: "Narayen",
    featuredImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    content: `
      <p class="lead">The playground of search engine marketing has undergone a massive paradigm shift. Over the last few years, Google has quietly dismantled manual keyword control in favor of system-driven machine learning models. Legacy campaigns are burning capital rapidly without even realizing it.</p>

      <h2>The Death of the Exact Match Keyword</h2>
      <p>Historically, digital marketers spent hours isolating exact match phrases. Today, Google's semantic models interpret the *intent* of a search, meaning broad-themed queries regularly outperform overly structured lists. If your digital vendor is still relying on massive spreadsheets of single keywords, their strategy is outdated.</p>

      <h2>The Performance Max Era</h2>
      <p>Performance Max (PMax) campaigns dynamically distribute ad spend across Search, YouTube, Gmail, Maps, and the Display Network simultaneously. To make this work, the focus must shift from manual setup to **Creative and Asset-Based Mastery**:</p>
      <ul>
        <li><strong>High-Intent Creative Asset Packs:</strong> Supply the system's AI engine with pristine videos, display images, and copy variations rather than relying on automated text.</li>
        <li><strong>Deep First-Party Data Signals:</strong> Feed the search algorithm with precise historical buyer lists so it knows exactly what your best buyers look like.</li>
        <li><strong>Value-Based Optimization:</strong> Directing ad tools to optimize for high-margin buyers rather than superficial conversion numbers.</li>
      </ul>

      <h2>The Strategy</h2>
      <p>Stop trying to micro-manage search bidding algorithms. Instead, provide high-quality data inputs, optimize your client landing page conversion rates, and build a system that retains leads faster than anyone in your niche.</p>
    `
  }
];

const TAMIL_FALLBACK_POSTS: BlogPost[] = [
  {
    id: 201,
    title: "டூஓலிங்கோ எவ்வாறு உலகின் மிகச்சிறந்த டிஜிட்டல் மார்க்கெட்டிங் பிராண்டுகளில் ஒன்றாக மாறியது",
    excerpt: "தனது பச்சைக் கிளி சின்னத்தை டிக்டாக் சூப்பர் ஸ்டாராகவும், கேமிஃபிகேஷன் நிபுணராகவும் மாற்றுவதன் மூலம், பயனர்களைத் தக்கவைப்பதில் ஒரு புதிய உத்தியை டூஓலிங்கோ வெற்றிகரமாக செயல்படுத்தியது.",
    category: "Branding",
    readingTime: "5 நிமிடம்",
    date: "May 22, 2026",
    author: "நரேன்",
    featuredImage: "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=1200&q=80",
    content: `
      <p class="lead">கவன ஈர்ப்புச் சிதறல்கள் நிறைந்த இந்த நவீன உலகில், டூஓலிங்கோ ஒரு விளம்பரம் போன்றல்லாமல், ஒரு நல்ல நண்பனைப் போல் தனது பயனர்களுடன் உரையாடுகிறது. விளையாட்டு போன்ற உத்திகளையும், வேடிக்கையான வீடியோக்களையும் கொண்டு உலகளவில் இது ஒரு மிகச்சிறந்த மார்க்கெட்டிங் வெற்றியைப் பெற்றுள்ளது.</p>
      
      <h2>தொடர்பு மற்றும் உரையாடல்</h2>
      <p>வழக்கமான கார்ப்பரேட் விளம்பரங்கள் உங்கள் பணத்தை வீணடிக்கும். அதற்குப் பதிலாக உங்களது வாடிக்கையாளர்களின் அன்றாட வாழ்வோடு ஒன்றிணைந்து உரையாடுங்கள்.</p>

      <h2>முக்கிய தூண்கள்:</h2>
      <ul>
        <li><strong>கேமிஃபிகேஷன்:</strong> தொடர் கற்றல் மற்றும் வெற்றிக் குறியீடுகள் மூலம் தினசரிப் பழக்கமாக மாற்றுவது.</li>
        <li><strong>ஆட்டோமேஷன் மற்றும் உத்திகள்:</strong> சரியான நேரத்தில் அனுப்பப்படும் சுவாரஸ்யமான நினைவூட்டல் செய்திகள்.</li>
      </ul>
    `
  },
  {
    id: 202,
    title: "வாட்ஸ்அப் ஆட்டோமேஷன் நவீன வணிகங்களுக்கு ஏன் அவசியமாகிறது?",
    excerpt: "தாமதமான பதில்களால் பெரும்பாலான நிறுவனங்கள் 60%-க்கும் அதிகமான முக்கிய வாடிக்கையாளர்களை இழக்கின்றன. வாட்ஸ்அப் வழியாக உடனடி ஆட்டோமேஷன் செய்து இதனை எவ்வாறு சரிசெய்யலாம்?",
    category: "AI",
    readingTime: "5 நிமிடம்",
    date: "May 05, 2026",
    author: "நரேன்",
    featuredImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    content: `
      <p class="lead">இன்றைய வேகமான உலகில், வாடிக்கையாளர்கள் தங்களது கேள்விகளுக்கு உடனடியாக பதில்களை எதிர்பார்க்கிறார்கள். உங்களது பதில்கள் தாமதமாகும் போது அவர்கள் அடுத்த நிறுவனத்தைத் தேடிச் சென்றுவிடுகிறார்கள்.</p>
      
      <h2>ஆட்டோமேஷன் உத்திகள்:</h2>
      <ul>
        <li><strong>உடனடி வரவேற்பு:</strong> வாடிக்கையாளர்கள் செய்தி அனுப்பிய உடனேயே மரியாதையான மொழியில் பதிலளித்தல்.</li>
        <li><strong>முக்கியத் தேவைகளைக் கண்டறிதல்:</strong> பட்டன்கள் மூலம் அவர்களின் பட்ஜெட் மற்றும் விருப்பங்களை உடனடியாக தேர்வு செய்ய உதவுதல்.</li>
      </ul>
    `
  }
];

const SPANISH_FALLBACK_POSTS: BlogPost[] = [
  {
    id: 301,
    title: "Cómo Duolingo se convirtió en una de las marcas de marketing digital más inteligentes",
    excerpt: "Al convertir un búho verde en una superestrella caótica de TikTok y un maestro de la gamificación, Duolingo reescribió el libro de jugadas de retención del usuario.",
    category: "Branding",
    readingTime: "5 min",
    date: "May 22, 2026",
    author: "Narayen",
    featuredImage: "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=1200&q=80",
    content: `
      <p class="lead">En un mundo de feeds hipersaturados y ruido algorítmico sin fin, Duolingo logró construir un volante de marketing orgánico con el que la mayoría de los gigantes tecnológicos solo pueden soñar.</p>
      
      <h2>Conectando con la Audiencia</h2>
      <p>Las marcas tradicionales gastan millones tratando de parecer perfectas. Duolingo hizo exactamente lo contrario: adoptaron la autodespreciación, el marketing de memes y la creación de contenido nativo.</p>
    `
  },
  {
    id: 302,
    title: "La automatización de WhatsApp es esencial para los negocios modernos",
    excerpt: "La mayoría de las empresas pierden hasta el 60% de sus clientes potenciales debido a la demora en las respuestas. Descubra cómo resolver las fugas de retención.",
    category: "AI",
    readingTime: "5 min",
    date: "May 05, 2026",
    author: "Narayen",
    featuredImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    content: `
      <p class="lead">En la competitiva economía actual, la latencia de respuesta es la mayor fuga de ingresos. Si un cliente potencial tiene que esperar horas, se irá con la competencia.</p>
      
      <h2>Estrategias Clave:</h2>
      <ul>
        <li><strong>Respuesta Instantánea:</strong> Saludo cordial inmediato en su propio idioma.</li>
        <li><strong>Calificación de Leads:</strong> Selección interactiva de presupuesto y necesidades mediante botones de un toque.</li>
      </ul>
    `
  }
];

const FALLBACK_POSTS: BlogPost[] = ENGLISH_FALLBACK_POSTS;

const FILTER_LABELS: Record<string, { en: string; ta: string; es: string }> = {
  "All": { en: "All Reflections", ta: "அனைத்தும்", es: "Todas" },
  "Digital Marketing": { en: "Digital Marketing", ta: "டிஜிட்டல் மார்க்கெட்டிங்", es: "Marketing Digital" },
  "Psychology": { en: "Psychology", ta: "உளவியல்", es: "Psicología" },
  "AI": { en: "AI & Automation", ta: "செயற்கை நுண்ணறிவு / AI", es: "IA y Automatización" },
  "Branding": { en: "Branding & Authority", ta: "பிராண்டிங்", es: "Branding" },
  "Philosophy": { en: "Philosophy", ta: "தத்துவம்", es: "Filosofía" },
  "Personal Reflections": { en: "Personal Reflections", ta: "தனிப்பட்ட பகிர்வுகள்", es: "Reflexiones Personales" }
};

const getNormalizedCategory = (cat: string) => {
  const norm = cat ? cat.trim() : "";
  if (!norm) return "Digital Marketing";
  
  const lower = norm.toLowerCase();
  
  // Normalize AI-related categories
  if (lower.includes("ai") || lower.includes("automation") || lower.includes("ஆட்டோமேஷன்") || lower.includes("automati")) {
    return "AI";
  }
  
  // Normalize branding-related categories
  if (lower.includes("brand") || lower.includes("பிராண்ட்") || lower.includes("authority")) {
    return "Branding";
  }
  
  // Normalize psychology-related categories
  if (lower.includes("psychology") || lower.includes("உளவியல்") || lower.includes("mental")) {
    return "Psychology";
  }
  
  // Normalize digital marketing
  if (lower.includes("marketing") || lower.includes("மார்க்கெட்டிங்") || lower.includes("ads") || lower.includes("விளம்பரம்")) {
    return "Digital Marketing";
  }
  
  // Normalize philosophy
  if (lower.includes("philosophy") || lower.includes("தத்துவம்") || lower.includes("thirukkural") || lower.includes("அறம்")) {
    return "Philosophy";
  }

  // Normalize personal
  if (lower.includes("personal") || lower.includes("reflection") || lower.includes("பகிர்வு") || lower.includes("diary")) {
    return "Personal Reflections";
  }
  
  return norm; // return custom as-is
};

export function Insights() {
  const { language: rawLanguage, t } = useLanguage();
  const language = rawLanguage as string;
  const [posts, setPosts] = useState<BlogPost[]>(FALLBACK_POSTS);
  const [loading, setLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [errorWordpress, setErrorWordpress] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const coreCategoriesList = [
    "All",
    "Digital Marketing",
    "Psychology",
    "AI",
    "Branding",
    "Philosophy",
    "Personal Reflections"
  ];

  // Dynamic strict localized 1-2 article filtration track
  const getDisplayPosts = () => {
    let activePosts: BlogPost[] = [];
    
    const isOnlyFallback = posts.every(post => post.id >= 101 && post.id <= 302) || posts.length === 0;

    if (isOnlyFallback) {
      if (language === 'ta') {
        activePosts = TAMIL_FALLBACK_POSTS;
      } else if (language === 'es') {
        activePosts = SPANISH_FALLBACK_POSTS;
      } else {
        activePosts = ENGLISH_FALLBACK_POSTS;
      }
    } else {
      if (language === 'ta') {
        activePosts = posts.filter(post => /[\u0b80-\u0bff]/.test(post.title || ''));
        if (activePosts.length === 0) {
          activePosts = TAMIL_FALLBACK_POSTS;
        }
      } else if (language === 'es') {
        activePosts = SPANISH_FALLBACK_POSTS;
      } else {
        activePosts = posts.filter(post => !/[\u0b80-\u0bff]/.test(post.title || ''));
        if (activePosts.length === 0) {
          activePosts = ENGLISH_FALLBACK_POSTS;
        }
      }
    }

    let filtered = activePosts;
    if (selectedCategory !== "All") {
      filtered = activePosts.filter(post => {
        const norm = getNormalizedCategory(post.category);
        return norm.toLowerCase() === selectedCategory.toLowerCase();
      });
    }

    return filtered.slice(0, 2);
  };

  useEffect(() => {
    const fetchWordpressPosts = async () => {
      try {
        setLoading(true);
        // Query the free public WordPress REST API for narayen77.wordpress.com (fetch up to 30 posts to ensure robust live flow of categories and tags)
        const res = await fetch(
          "https://public-api.wordpress.com/rest/v1.1/sites/narayen77.wordpress.com/posts?number=30"
        );
        
        if (!res.ok) {
          throw new Error("Failed to reach WordPress public API");
        }
        
        const data = await res.json();
        
        if (data.posts && data.posts.length > 0) {
          const wpPosts: BlogPost[] = data.posts
            .map((post: any) => {
              // Unescape title/excerpt HTML
              const tempDiv = document.createElement("div");
              tempDiv.innerHTML = post.title || "";
              const cleanTitle = tempDiv.textContent || tempDiv.innerText || post.title;

              tempDiv.innerHTML = post.excerpt || "";
              const cleanExcerpt = tempDiv.textContent || tempDiv.innerText || post.excerpt;
              const shortExcerpt = cleanExcerpt.replace(/\[\.\.\.\]/g, "").slice(0, 160) + "...";

              // Extract reading time approx
              const wordCount = post.content ? post.content.split(/\s+/).length : 200;
              const readTime = Math.max(2, Math.ceil(wordCount / 200)) + " min read";

              let categoryName = "Digital Marketing";
              if (post.categories) {
                const keys = Object.keys(post.categories);
                if (keys.length > 0) {
                  const firstKey = keys[0];
                  categoryName = post.categories[firstKey]?.name || firstKey;
                }
              }

              return {
                id: post.ID,
                title: cleanTitle,
                excerpt: shortExcerpt,
                content: post.content, // keep rich HTML for detail view
                date: new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }),
                featuredImage: post.featured_image || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
                category: categoryName,
                readingTime: readTime,
                author: post.author?.name || "Narayen",
                url: post.URL
              };
            })
            .filter((post: BlogPost) => {
              const titleLower = post.title.toLowerCase();
              const excerptLower = post.excerpt.toLowerCase();
              const catLower = post.category.toLowerCase();
              
              const isSample = titleLower.includes("hello world") || titleLower.includes("sample") || titleLower.includes("test");
              const isUncategorized = catLower.includes("uncategorized");
              const isGardening = catLower.includes("garden") || titleLower.includes("garden") || excerptLower.includes("garden");
              
              return !isSample && !isUncategorized && !isGardening;
            });

          if (wpPosts.length > 0) {
            setPosts(wpPosts);
            setErrorWordpress(false);
          } else {
            setPosts(FALLBACK_POSTS);
          }
        } else {
          // Empty or draft state, fall back to premium default structured posts
          setPosts(FALLBACK_POSTS);
        }
      } catch (err) {
        console.warn("Could not load WordPress posts directly, using system fallback:", err);
        setErrorWordpress(true);
        setPosts(FALLBACK_POSTS);
      } finally {
        setLoading(false);
      }
    };

    fetchWordpressPosts();
  }, []);

  const handleShare = (post: BlogPost, e: React.MouseEvent) => {
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(`${post.title} - ${window.location.origin}`);
      alert("Article link copied to clipboard!");
    }
  };

  const scrollToSection = (id: string) => {
    setSelectedPost(null);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  if (language === "es") {
    return null;
  }

  return (
    <section id="insights" className="py-32 px-6 bg-brand-charcoal/[0.01] border-t border-brand-charcoal/5">
      <div className="max-w-7xl mx-auto">
        
        <AnimatePresence mode="wait">
          {!selectedPost ? (
            // GRID VIEW
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-16"
            >
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-brand-charcoal/5">
                <div>
                  <div className="flex items-center gap-2 text-brand-gold text-xs font-bold uppercase tracking-[0.25em] mb-3">
                    <BookOpen className="w-4 h-4" />
                    <span>{language === 'ta' ? "உள்நோக்குகள்" : (language === 'es' ? "PERSPECTIVAS DE CYBERAD" : "CYBERAD INSIGHTS")}</span>
                  </div>
                  <h2 className="text-4xl md:text-6xl serif italic tracking-tight text-brand-charcoal">
                    {language === 'ta' ? "நுண்ணறிவு & கட்டுரைகள்" : (language === 'es' ? "Conocimientos y Perspectivas" : "Knowledge & Industry Insights")}
                  </h2>
                </div>
                <p className="text-base text-brand-charcoal/60 max-w-md font-light">
                  {language === 'ta' 
                    ? "டிஜிட்டல் மார்க்கெட்டிங், ஆட்டோமேஷன் மற்றும் மார்க்கெட்டிங் உளவியல் குறித்த பிரீமியம் சிந்தனைப் பகிர்வு." 
                    : (language === 'es' 
                      ? "Liderazgo intelectual sobre crecimiento digital, automatización inteligente de WhatsApp e ingeniería de conversión." 
                      : "Thought leadership on digital growth, intelligent WhatsApp automation, brand positioning, and regional marketing psychology.")}
                </p>
              </div>

              {/* Dynamic Category Filter Slider Row */}
              <div className="flex flex-col gap-4">
                <p className="text-xs font-bold uppercase tracking-widest text-brand-charcoal/40 font-mono">
                  {language === 'ta' ? "பிரிவுகள் வாரியாக வடிகட்டவும்:" : (language === 'es' ? "Filtrar reflexiones por categoría:" : "Filter reflections by category:")}
                </p>
                <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-none -mx-6 px-6 md:mx-0 md:px-0">
                  {coreCategoriesList.map((cat) => {
                    const isActive = selectedCategory === cat;
                    const label = FILTER_LABELS[cat] 
                      ? (FILTER_LABELS[cat][language] || FILTER_LABELS[cat].en)
                      : cat;
                      
                    return (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-5 py-2.5 whitespace-nowrap rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 border cursor-pointer ${
                          isActive
                            ? "bg-brand-charcoal text-white border-brand-charcoal shadow-md scale-102"
                            : "bg-white text-brand-charcoal/60 border-brand-charcoal/10 hover:border-brand-gold/30 hover:text-brand-charcoal"
                        }`}
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {loading ? (
                // SKELETON LOADERS
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[1, 2, 3].map((n) => (
                    <div key={n} className="flex flex-col space-y-4 animate-pulse">
                      <div className="bg-brand-charcoal/5 aspect-video w-full rounded-2xl" />
                      <div className="h-6 bg-brand-charcoal/5 rounded w-1/4" />
                      <div className="h-4 bg-brand-charcoal/5 rounded w-3/4" />
                      <div className="h-12 bg-brand-charcoal/5 rounded w-full" />
                    </div>
                  ))}
                </div>
              ) : getDisplayPosts().length === 0 ? (
                // ELEGANT EMPTY STATE FOR PLANNED AND COMING SOON CATEGORIES
                <div className="py-20 px-8 rounded-3xl bg-brand-gold/[0.03] border border-dashed border-brand-gold/20 text-center max-w-xl mx-auto space-y-6">
                  <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center mx-auto text-brand-gold">
                    <BookOpen className="w-6 h-6 animate-pulse" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-medium text-brand-charcoal">
                      {language === 'ta' ? "உள்ளடக்கங்கள் விரைவில் இணையும்" : (language === 'es' ? "Sincronización automatizada activa" : "Automated Sync Active")}
                    </h4>
                    <p className="text-sm font-light text-brand-charcoal/60 leading-relaxed max-w-md mx-auto">
                      {language === 'ta'
                        ? "இந்த பிரிவில் வேர்ட்பிரஸ் தளம் மூலம் பதிவுகள் வெளியிடப்பட்டவுடன் அவை இங்கு நிகழ்நேரத்தில் தானாகவே உடனுக்குடன் தோன்றும்."
                        : (language === 'es'
                          ? "No se encontraron artículos. Una vez que se publique un nuevo contenido en WordPress, se sincronizará automáticamente aquí."
                          : "No posts found. Once a new blog post is published under this category in WordPress, it will automatically sync and appear here instantly.")}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedCategory("All")}
                    className="px-6 py-2.5 bg-brand-charcoal text-white hover:bg-brand-gold hover:text-brand-charcoal rounded-full text-[11px] font-bold uppercase tracking-widest transition-all duration-300"
                  >
                    {language === 'ta' ? "அனைத்து கட்டுரைகளையும் காட்டு" : (language === 'es' ? "Ver todas las discusiones" : "View All Discussions")}
                  </button>
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {getDisplayPosts().map((post, index) => (
                    <motion.article
                      key={post.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white rounded-3xl border border-brand-charcoal/5 overflow-hidden hover:border-brand-gold/20 hover:shadow-xl hover:shadow-brand-gold/[0.02] flex flex-col h-full group transition-all"
                    >
                      {/* Image container */}
                      <div className="relative overflow-hidden aspect-[16/10] bg-neutral-100">
                        <img
                          src={post.featuredImage}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-brand-charcoal border border-brand-charcoal/5 shadow-sm">
                          {FILTER_LABELS[post.category] 
                            ? (FILTER_LABELS[post.category][language] || FILTER_LABELS[post.category].en)
                            : (FILTER_LABELS[getNormalizedCategory(post.category)]
                              ? (FILTER_LABELS[getNormalizedCategory(post.category)][language] || FILTER_LABELS[getNormalizedCategory(post.category)].en)
                              : post.category)}
                        </div>
                      </div>

                      {/* Info & Content */}
                      <div className="p-8 flex flex-col flex-grow justify-between space-y-6">
                        <div className="space-y-4">
                          <div className="flex items-center gap-4 text-xs text-brand-charcoal/40 font-mono">
                            <span className="flex items-center gap-1.5">
                              <Calendar className="w-3.5 h-3.5" />
                              {post.date}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <Clock className="w-3.5 h-3.5" />
                              {post.readingTime}
                            </span>
                          </div>

                          <h3 className="text-xl font-medium text-brand-charcoal group-hover:text-brand-gold transition-colors leading-snug">
                            {post.title}
                          </h3>
                          
                          <p className="text-sm font-light text-brand-charcoal/60 leading-relaxed line-clamp-3">
                            {post.excerpt}
                          </p>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-brand-charcoal/5">
                          <button
                            onClick={() => setSelectedPost(post)}
                            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-charcoal hover:text-brand-gold transition-colors"
                          >
                            {language === 'ta' ? "மேலும் படிக்க" : (language === 'es' ? "Leer más" : "Read More")}
                            <ArrowRight className="w-4 h-4" />
                          </button>

                          <button 
                            onClick={(e) => handleShare(post, e)} 
                            className="p-2 text-brand-charcoal/40 hover:text-brand-gold rounded-full hover:bg-brand-charcoal/5 transition-colors"
                          >
                            <Share2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>
              )}
            </motion.div>
          ) : (
            // ARTICLE DETAIL VIEW
            <motion.div
              key="detail"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="max-w-4xl mx-auto space-y-12"
            >
              {/* Back to main button */}
              <button
                onClick={() => setSelectedPost(null)}
                className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-charcoal/60 hover:text-brand-gold transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                {language === 'ta' ? "கட்டுரைகள் பட்டியல்" : (language === 'es' ? "Volver a perspectivas" : "Back to Insights")}
              </button>

              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="bg-brand-gold/10 text-brand-gold px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                    {FILTER_LABELS[selectedPost.category] 
                      ? (language === 'ta' ? FILTER_LABELS[selectedPost.category].ta : FILTER_LABELS[selectedPost.category].en)
                      : (FILTER_LABELS[getNormalizedCategory(selectedPost.category)]
                        ? (language === 'ta' ? FILTER_LABELS[getNormalizedCategory(selectedPost.category)].ta : FILTER_LABELS[getNormalizedCategory(selectedPost.category)].en)
                        : selectedPost.category)}
                  </span>
                  <span className="text-brand-charcoal/30 font-mono text-sm">•</span>
                  <span className="text-brand-charcoal/50 font-mono text-xs uppercase tracking-wider">{selectedPost.readingTime}</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl text-brand-charcoal leading-tight tracking-tight font-sans font-medium">
                  {selectedPost.title}
                </h1>

                <div className="flex flex-wrap items-center gap-6 py-4 border-y border-brand-charcoal/5 text-xs text-brand-charcoal/60 font-mono">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-brand-gold" />
                    <span>By {selectedPost.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Published: {selectedPost.date}</span>
                  </div>
                  {selectedPost.url && (
                    <a 
                      href={selectedPost.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="ml-auto flex items-center gap-1.5 hover:text-brand-gold transition-colors font-bold uppercase tracking-widest text-[10px]"
                    >
                      Read on WordPress <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Big Featured Image */}
              <div className="aspect-[21/9] rounded-[2.5rem] overflow-hidden bg-neutral-100 border border-brand-charcoal/5">
                <img
                  src={selectedPost.featuredImage}
                  alt={selectedPost.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Rich Body Content */}
              <article 
                className="prose prose-lg max-w-none text-brand-charcoal/80 space-y-6 leading-relaxed font-light"
                dangerouslySetInnerHTML={{ __html: selectedPost.content }}
              />

              {/* Author Bio Card */}
              <div className="p-6 md:p-8 rounded-[2rem] bg-brand-gold/[0.03] border border-brand-gold/15 flex flex-col sm:flex-row items-center gap-6 max-w-2xl mx-auto mt-12 shadow-sm">
                <div className="w-16 h-16 rounded-full bg-brand-gold/15 flex items-center justify-center text-brand-gold shrink-0 border border-brand-gold/20 shadow-inner">
                  <User className="w-8 h-8" />
                </div>
                <div className="text-center sm:text-left space-y-1">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-brand-charcoal">
                    {selectedPost.author}
                  </h4>
                  <p className="text-xs text-brand-gold font-mono font-bold">
                    {language === 'ta' ? "சைபர் என்டர்பிரைசஸ் ஆலோசகர்" : (language === 'es' ? "Consultor de Cyber Enterprises" : "Cyber Enterprises Consultant")}
                  </p>
                  <p className="text-sm text-brand-charcoal/75 leading-relaxed font-light italic">
                    {language === 'ta'
                      ? "“சைபர் என்டர்பிரைசஸ் ஒரு முதன்மையான, குடும்பத்திற்குச் சொந்தமான டிஜிட்டல் மார்க்கெட்டிங் மற்றும் தொழில்நுட்ப ஆலோசனை நிறுவனமாக செயல்படுகிறது. நாங்கள் உலகெங்கிலும் உள்ள பிராண்டுகளுக்கு நம்பிக்கையையும், பாரம்பரிய மதிப்புகளையும் மற்றும் அதிநவீன டிஜிட்டல் வளர்ச்சி தீர்வுகளையும் இணைக்கிறோம்.”"
                      : (language === 'es'
                        ? "“Cyber Enterprises opera como una consultoría familiar de marketing digital y tecnología de primer nivel. Conectamos confianza, valores tradicionales y soluciones de crecimiento avanzadas para marcas en todo el mundo.”"
                        : "“Cyber Enterprises operates as a premier, family-owned digital marketing and technology consultancy. We bridge trust, traditional values, and cutting-edge digital growth solutions for brands across the world.”")}
                  </p>
                </div>
              </div>

              {/* Backlinks Panel (Main website, Services, Contact) */}
              <div className="mt-20 p-8 sm:p-12 rounded-[2.5rem] bg-brand-charcoal text-brand-offwhite text-center space-y-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
                <div className="relative space-y-3">
                  <p className="text-brand-gold uppercase tracking-[0.25em] text-xs font-bold">CYBERAD INTEGRATED SYSTEM</p>
                  <h3 className="text-3xl font-serif italic text-brand-offwhite">
                    {language === 'ta' ? "உங்களது வணிகத்தை அடுத்த நிலைக்கு கொண்டு செல்லத் தயாரா?" : (language === 'es' ? "¿Listo para expandir su presencia digital?" : "Ready to Bridge Your Growth Gap?")}
                  </h3>
                  <p className="text-base text-brand-offwhite/60 max-w-xl mx-auto font-light">
                    {language === 'ta'
                      ? "நாங்கள் மார்க்கெட்டிங் பிரச்சாரங்களை மட்டும் இயக்குவதில்லை; உங்களது வணிக மதிப்பைத் தக்கவைக்கும் அமைப்புகளை உருவாக்குகிறோம்."
                      : (language === 'es'
                        ? "No solo ejecutamos campañas; construimos sistemas duraderos que impulsan la equidad de marca y cuota de mercado comercial."
                        : "Move seamlessly from exploring insights to taking active market share. Browse our services or connect with us directly.")}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-4 relative">
                  <button
                    onClick={() => scrollToSection("services")}
                    className="px-8 py-4 bg-brand-gold text-brand-charcoal rounded-full text-xs font-bold uppercase tracking-widest hover:bg-brand-offwhite transition-all cursor-pointer"
                  >
                    {language === 'ta' ? "தொகுப்புகளைப் பாருங்கள்" : (language === 'es' ? "Explorar Servicios y Paquetes" : "Explore Services & Packages")}
                  </button>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="px-8 py-4 bg-white/10 text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white/20 transition-all cursor-pointer border border-white/10"
                  >
                    {language === 'ta' ? "தொடர்பு கொள்ளுக" : (language === 'es' ? "Iniciar Conversación / Contacto" : "Initiate Conversation / Contact")}
                  </button>
                </div>
              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
