import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';

// Import language files
import en from './locales/en/en.json';
import th from './locales/th/th.json';

// i18n.use(initReactI18next).init({
  i18n.init({
  resources: {
    en: { translation: en },
    th: { translation: th },
  },
  lng: 'en', // Default language
  fallbackLng: 'en', // Fallback language
  interpolation: {
    escapeValue: false, // React already escapes
  },
});

export default i18n;