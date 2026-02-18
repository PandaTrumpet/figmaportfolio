import { getRequestConfig } from "next-intl/server";

const locales = ["en", "ru", "he"] as const;
type Locale = (typeof locales)[number];
const defaultLocale: Locale = "en";

function isLocale(v: string): v is Locale {
  return (locales as readonly string[]).includes(v);
}

export default getRequestConfig(async ({ requestLocale }) => {
  const localeFromReq = await requestLocale;
  const safeLocale =
    localeFromReq && isLocale(localeFromReq) ? localeFromReq : defaultLocale;

  return {
    locale: safeLocale,
    messages: (await import(`../messages/${safeLocale}.json`)).default,
  };
});
