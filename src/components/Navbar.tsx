import { useLanguage } from "./LanguageContext";
import { Link, useRouter } from "./RouterContext";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export function Navbar() {
  const { path } = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "#digital-marketing", label: "Lead Generation" },
    { to: "#ai-automation", label: "AI Automation" },
    { to: "#about", label: "Digital Solutions" },
    { to: "#contact", label: "Contact" }
  ];

  useEffect(() => {
    if (path !== "/") {
      setActiveSection("");
      return;
    }

    const handleScroll = () => {
      const sections = ["digital-marketing", "ai-automation", "about", "contact"];
      let currentSection = "";
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.4 && rect.bottom >= window.innerHeight * 0.2) {
            currentSection = "#" + section;
          }
        }
      }
      
      if (window.scrollY < 200) {
        currentSection = "/";
      }
      
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [path]);

  return (
    <nav className="fixed top-0 w-full z-[200] bg-brand-offwhite/95 backdrop-blur-md border-b border-brand-charcoal/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center"
        >
          <Link to="/" className="flex items-center cursor-pointer">
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 flex items-center shrink-0">
              <img 
                src="/logo.png" 
                alt="CYBERAD.IN Logo" 
                className="w-full h-full object-contain rounded-full bg-white transition-transform hover:scale-105 duration-300"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden text-sm sm:text-base font-bold uppercase tracking-wider text-brand-charcoal flex items-center h-full ml-2.5 font-serif">
                Cyber <span className="text-brand-gold ml-1">Enterprises</span>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = path === "/" ? activeSection === link.to : path === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`text-xs font-mono font-bold uppercase tracking-wider transition-colors py-2 px-1 border-b-2 ${
                  isActive 
                    ? "border-brand-gold text-brand-gold" 
                    : "border-transparent text-brand-charcoal/70 hover:text-brand-gold"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="#contact"
            className="hidden sm:inline-block rounded-full px-5 py-2.5 bg-brand-charcoal hover:bg-brand-gold text-brand-offwhite hover:text-brand-charcoal text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer"
          >
            Start Now
          </Link>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-brand-charcoal/5 rounded-full text-brand-charcoal focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-brand-charcoal/5 bg-brand-offwhite px-4 py-6 space-y-4 animate-fadeIn">
          <div className="flex flex-col gap-3.5">
            {navLinks.map((link) => {
              const isActive = path === "/" ? activeSection === link.to : path === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-xs font-mono font-bold uppercase tracking-wider py-2 border-l-4 pl-3 ${
                    isActive 
                      ? "border-brand-gold text-brand-gold bg-brand-gold/5" 
                      : "border-transparent text-brand-charcoal/70 hover:text-brand-gold"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              to="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 bg-brand-charcoal hover:bg-brand-gold text-white hover:text-brand-charcoal rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-colors inline-block"
            >
              Start Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
