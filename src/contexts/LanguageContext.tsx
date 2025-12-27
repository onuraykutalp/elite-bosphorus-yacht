"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "tr";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [translations, setTranslations] = useState<Record<string, any>>({});

  // Load translations
  useEffect(() => {
    import(`../../locales/${language}.json`)
      .then((module) => {
        setTranslations(module.default);
      })
      .catch((err) => {
        console.error("Failed to load translations:", err);
      });
  }, [language]);

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "tr")) {
      setLanguageState(savedLanguage);
      if (typeof document !== "undefined") {
        document.documentElement.lang = savedLanguage;
      }
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
    // Update HTML lang attribute
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  };

  const t = (key: string): any => {
    const keys = key.split(".");
    let value: any = translations;
    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) return key;
    }
    return value;
  };

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

