import React, { createContext, useContext, ReactNode } from "react";
import { translations } from "@/src/lib/translations";

interface LanguageContextType {
  language: "en";
  setLanguage: (lang: "en") => void;
  t: typeof translations.en;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const language = "en";
  const setLanguage = () => {};
  const t = translations.en;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
