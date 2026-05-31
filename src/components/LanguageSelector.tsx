import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { motion } from 'motion/react';

const LanguageSelector = ({ className = "" }: { className?: string }) => {
  const { i18n, t } = useTranslation();
  const location = useLocation();
  const isHome = location.pathname === '/';

  const languages = [
    { code: 'pt', label: 'PT' },
    { code: 'en', label: 'EN' },
    { code: 'es', label: 'ES' },
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    document.documentElement.lang = lng === 'pt' ? 'pt-BR' : lng;
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {languages.map((lng, idx) => (
        <React.Fragment key={lng.code}>
          <button
            onClick={() => changeLanguage(lng.code)}
            className={`language-selector-button inline-flex items-center border-b border-transparent pb-0.5 transition-all duration-300 cursor-pointer ${
              i18n.language.startsWith(lng.code) 
                ? 'text-[#005F73] opacity-100 border-[#005F73]' 
                : (isHome ? 'text-white/60 hover:text-white' : 'text-zinc-500 hover:text-[#005F73]')
            }`}
            aria-label={t(`languageSelector.aria.${lng.code}`)}
          >
            {lng.label}
          </button>
          {idx < languages.length - 1 && (
            <span className={`language-selector-separator inline-flex items-center ${isHome ? "text-white/20" : "text-zinc-300"}`} aria-hidden="true">|</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default LanguageSelector;
