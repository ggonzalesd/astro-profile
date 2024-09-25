import esLang from './es';
import enLang from './en';

import SvgSpain from '@/components/icons/SvgSpain.astro';
import SvgEEUU from '@/components/icons/SvgEEUU.astro';

export const LANG = {
  en: { display: 'English', flag: SvgEEUU },
  es: { display: 'Español', flag: SvgSpain },
};

export type LANG_KEY = keyof typeof enLang;

export const getI18N = ({
  currentLocale = 'en',
}: {
  currentLocale?: string;
}) => {
  if (currentLocale === 'en') return enLang;
  return esLang;
};
