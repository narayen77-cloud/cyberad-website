import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { trackEvent } from "../lib/tracking";

interface RouterContextType {
  path: string;
  navigate: (to: string) => void;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

// Dynamic meta tag helper
export function updateMetaTags(title: string, description: string, path: string) {
  document.title = title;

  // 1. Meta Description
  let metaDesc = document.querySelector("meta[name='description']");
  if (!metaDesc) {
    metaDesc = document.createElement("meta");
    metaDesc.setAttribute("name", "description");
    document.head.appendChild(metaDesc);
  }
  metaDesc.setAttribute("content", description);

  // 2. Open Graph Title
  let ogTitle = document.querySelector("meta[property='og:title']");
  if (ogTitle) ogTitle.setAttribute("content", title);

  // 3. Open Graph Description
  let ogDesc = document.querySelector("meta[property='og:description']");
  if (ogDesc) ogDesc.setAttribute("content", description);

  // 4. Open Graph URL
  let ogUrl = document.querySelector("meta[property='og:url']");
  if (ogUrl) ogUrl.setAttribute("content", `https://cyberad.in${path}`);

  // 5. Twitter Title
  let twTitle = document.querySelector("meta[property='twitter:title']");
  if (twTitle) twTitle.setAttribute("content", title);

  // 6. Twitter Description
  let twDesc = document.querySelector("meta[property='twitter:description']");
  if (twDesc) twDesc.setAttribute("content", description);

  // 7. Canonical Link
  let canonical = document.querySelector("link[rel='canonical']");
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }
  canonical.setAttribute("href", `https://cyberad.in${path}`);
}

export function scrollToAnchor(anchor: string) {
  const id = anchor.replace(/^#/, "").replace(/^\/#/, "");
  if (!id) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

export function RouterProvider({ children }: { children: ReactNode }) {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setPath(window.location.pathname);
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Handle initial hash load (e.g. refresh on /#about)
  useEffect(() => {
    if (window.location.hash) {
      setTimeout(() => {
        scrollToAnchor(window.location.hash);
      }, 600);
    }
  }, []);

  const navigate = (to: string) => {
    if (to.startsWith("#") || to.startsWith("/#")) {
      const anchor = to.startsWith("/#") ? to.substring(1) : to;
      if (window.location.pathname === "/") {
        scrollToAnchor(anchor);
      } else {
        window.history.pushState(null, "", "/" + anchor);
        setPath("/");
        setTimeout(() => {
          scrollToAnchor(anchor);
        }, 200);
      }
      return;
    }

    if (window.location.pathname === to) {
      if (to === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }
    window.history.pushState(null, "", to);
    setPath(to);
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  };

  // Dynamic Metadata and Tracking Pageviews
  useEffect(() => {
    let title = "Cyber Enterprises | Premium Digital Marketing & AI Growth Systems";
    let description = "Cyber Enterprises: Premium digital marketing and AI growth systems for traditional businesses. Generate leads, automate sales, and scale revenue.";

    switch (path) {
      case "/":
        title = "Cyber Enterprises | Premium Digital Marketing & AI Growth Systems";
        description = "Cyber Enterprises: Premium digital marketing and AI growth systems for traditional businesses. Generate leads, automate sales, and scale revenue.";
        break;
      case "/privacy-policy":
        title = "Privacy Policy | Cyber Enterprises";
        description = "Privacy policy and client data protection guidelines for Cyber Enterprises.";
        break;
      case "/terms":
        title = "Terms & Conditions | Cyber Enterprises";
        description = "Terms of service and contract conditions for Cyber Enterprises digital services.";
        break;
      case "/cookie-policy":
        title = "Cookie Policy | Cyber Enterprises";
        description = "Cookie usage policy and browser tracking configuration for Cyber Enterprises.";
        break;
      case "/thank-you":
        title = "Thank You | Cyber Enterprises";
        description = "Thank you for contacting Cyber Enterprises. Our team will review your requirements and reach out shortly.";
        break;
      default:
        title = "404 Page Not Found | Cyber Enterprises";
        description = "The requested page was not found. Return to Cyber Enterprises home page.";
        break;
    }

    // Update tags
    updateMetaTags(title, description, path);

    // Track GTM page view
    trackEvent("page_view", "Engagement", {
      page_title: title,
      page_path: path,
      referrer: document.referrer,
    });
  }, [path]);

  return (
    <RouterContext.Provider value={{ path, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error("useRouter must be used within a RouterProvider");
  }
  return context;
}

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
}

export function Link({ to, className, children, onClick, ...props }: LinkProps) {
  const { navigate } = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(e);
    
    // Check if middle click, command click, etc. (open in new tab)
    if (!e.defaultPrevented && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey && e.button === 0) {
      e.preventDefault();
      navigate(to);
    }
  };

  return (
    <a href={to} className={className} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
