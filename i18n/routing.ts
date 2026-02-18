export const locales = ["en", "ru", "he"] as const;
export type AppLocale = (typeof locales)[number];

export const defaultLocale: AppLocale = "en";
