import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import pt from './locales/pt.json';
import en from './locales/en.json';
import es from './locales/es.json';
import { supplementalTranslations } from './locales/supplemental';

type TranslationTree = Record<string, unknown>;

const isObject = (value: unknown): value is TranslationTree =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

const deepMerge = (target: TranslationTree, source: TranslationTree): TranslationTree => {
  Object.entries(source).forEach(([key, sourceValue]) => {
    if (isObject(sourceValue)) {
      const currentValue = target[key];
      target[key] = deepMerge(isObject(currentValue) ? currentValue : {}, sourceValue);
      return;
    }

    target[key] = sourceValue;
  });

  return target;
};

const buildTranslation = (base: TranslationTree, lang: keyof typeof supplementalTranslations) => {
  const merged = deepMerge(structuredClone(base), supplementalTranslations[lang] as TranslationTree);
  const home = merged.home;

  if (!merged.testimonialsPage && isObject(home) && isObject(home.testimonialsPage)) {
    merged.testimonialsPage = home.testimonialsPage;
  }

  return merged;
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      pt: { translation: buildTranslation(pt, 'pt') },
      en: { translation: buildTranslation(en, 'en') },
      es: { translation: buildTranslation(es, 'es') }
    },
    fallbackLng: 'pt',
    parseMissingKeyHandler: (_key, defaultValue) => defaultValue || '',
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage'],
      caches: ['localStorage']
    }
  });

export default i18n;
