import en from '../locales/en/en.json';
import th from '../locales/th/th.json';

const translations: Record<string, any> = { en, th };

export const translate = (key: string, locale: string = 'en') => {
  return translations[locale][key] || key;
};