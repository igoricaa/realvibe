export type Locale = (typeof locales)[number];

export const locales = ['en', 'sr', 'fr'] as const;
export const defaultLocale: Locale = 'en';
