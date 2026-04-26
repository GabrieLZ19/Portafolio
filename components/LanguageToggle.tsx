"use client";

import { useLanguage } from "./LanguageProvider";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === "es" ? "en" : "es")}
      className="p-2 text-xs font-mono font-bold text-foreground-secondary hover:text-foreground transition-colors rounded-full hover:bg-border/50 uppercase tracking-widest flex items-center justify-center w-10 h-10"
      aria-label="Toggle Language"
    >
      {language === "es" ? "EN" : "ES"}
    </button>
  );
}
