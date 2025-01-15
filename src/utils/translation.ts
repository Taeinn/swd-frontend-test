import en from '../locales/en/en.json';
import th from '../locales/th/th.json';
type Locale = Record<string, string>;
const translations: Record<string, Locale> = { en, th };

export const translate = (key: string, locale: string = 'en') => {
  return translations[locale][key] || key;
};