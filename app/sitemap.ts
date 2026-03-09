import type { MetadataRoute } from "next";

const BASE_URL = "https://savondev.com";

const locales = ["en", "ru", "he"] as const;

const routes = [
  "",
  "/about",
  "/services",
  "/portfolio",
  "/process",
  "/pricing",
  "/reviews",
  "/contact",
  "/privacy",
  "/terms",
  "/refund",
  "/cookies",
  "/disclaimer",
  "/ai-policy",
  "/accessibility",
] as const;

function buildLocalizedUrl(locale: (typeof locales)[number], route: string) {
  return `${BASE_URL}/${locale}${route}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: buildLocalizedUrl("en", route),
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/contact" ? 0.9 : 0.8,
    alternates: {
      languages: {
        en: buildLocalizedUrl("en", route),
        ru: buildLocalizedUrl("ru", route),
        he: buildLocalizedUrl("he", route),
      },
    },
  }));
}
