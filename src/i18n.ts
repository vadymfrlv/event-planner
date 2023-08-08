import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import LocalStorageBackend from 'i18next-localstorage-backend';

// Import translations for different languages
import translationsUa from './locales/ua.json';
import translationsEn from './locales/en.json';

const storedLanguage = localStorage.getItem('i18nextLng');

i18n
  .use(LocalStorageBackend)
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    lng: storedLanguage || 'ua', // The default language
    fallbackLng: 'ua', // Fallback language if translation for the current language is not available
    debug: false, // Enable debug mode for development (optional)
    resources: {
      en: {
        translation: translationsEn, // Load English translations
      },
      ua: {
        translation: translationsUa, // Load Ukrainian translations
      },
    },
    interpolation: {
      escapeValue: false, // React already safely escapes values
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;
