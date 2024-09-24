import esLang from './es';
import enLang from './en';

export const LANG = {
  en: 'English',
  es: 'Español',
};

export const getI18N = ({
  currentLocale = 'en',
}: {
  currentLocale?: string;
}) => {
  if (currentLocale === 'en') return enLang;
  return esLang;
};
