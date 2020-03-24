import NextI18Next from 'next-i18next';

const NextI18NextInstance = new NextI18Next({
  localeSubpaths: { en: 'en', ko: 'ko' },
  defaultLanguage: 'en',
  otherLanguages: ['ko']
});

export default NextI18NextInstance;

/* Optionally, export class methods as named exports */
export const {
  appWithTranslation,
  withTranslation,
  useTranslation,
  i18n,
  Link
} = NextI18NextInstance;
