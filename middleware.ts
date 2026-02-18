import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "he", "ru"],
  defaultLocale: "en",
  localePrefix: "always",
});

export const config = {
  matcher: ["/", "/(en|he|ru)/:path*"],
};
