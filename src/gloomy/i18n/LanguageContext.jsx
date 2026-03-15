import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { translations } from "./translations";

const STORAGE_KEY = "gloomy-language";
const FALLBACK_LANGUAGE = "en";

const LanguageContext = createContext(null);

const getNestedValue = (source, path) =>
  path.split(".").reduce((accumulator, key) => accumulator?.[key], source);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem(STORAGE_KEY);
    return translations[savedLanguage] ? savedLanguage : FALLBACK_LANGUAGE;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(() => {
    const t = (path) =>
      getNestedValue(translations[language], path) ??
      getNestedValue(translations[FALLBACK_LANGUAGE], path) ??
      path;

    return {
      language,
      setLanguage,
      t,
    };
  }, [language]);

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
};
