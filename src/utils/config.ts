import en from '@/i18n/en.json';
import es from '@/i18n/es.json';

const translations = {
  en,
  es,
};

type LocaleKey = keyof typeof translations;

export const getI18n = (currentLocale: string | undefined) => {
  const locale = (currentLocale || 'en') as LocaleKey;
  return translations[locale];
};
