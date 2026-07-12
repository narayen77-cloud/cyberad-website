import { Link } from "../RouterContext";
import { AlertTriangle, Home, Mail } from "lucide-react";

export default function NotFound() {
  return (
    <div className="w-full min-h-[80vh] flex items-center justify-center px-4 py-32 bg-brand-offwhite">
      <div className="max-w-md w-full text-center space-y-8 bg-white border border-brand-charcoal/5 rounded-[2.5rem] p-8 md:p-12 shadow-sm">
        <div className="w-16 h-16 bg-brand-gold/10 text-brand-gold rounded-full flex items-center justify-center mx-auto animate-bounce">
          <AlertTriangle className="w-8 h-8" />
        </div>

        <div className="space-y-3">
          <h1 className="text-4xl md:text-5xl font-serif italic text-brand-charcoal">404 - Not Found</h1>
          <p className="text-sm font-light text-brand-charcoal/60 leading-relaxed max-w-xs mx-auto">
            The page you are looking for does not exist, has been moved, or is temporarily unavailable.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-4">
          <Link
            to="/"
            className="w-full sm:w-auto px-6 py-3 bg-brand-charcoal hover:bg-brand-gold text-white hover:text-brand-charcoal rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 inline-flex items-center justify-center gap-2 cursor-pointer"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <Link
            to="/contact"
            className="w-full sm:w-auto px-6 py-3 border border-brand-charcoal/10 hover:border-brand-gold text-brand-charcoal hover:text-brand-gold rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 inline-flex items-center justify-center gap-2 cursor-pointer"
          >
            <Mail className="w-4 h-4" />
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
