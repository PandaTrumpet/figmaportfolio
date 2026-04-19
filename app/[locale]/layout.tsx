
import React from "react";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { Footer } from "@/src/components/Footer";
import { Navigation } from "@/src/components/Navigation";
import { HyperPrecisionCursor } from "@/src/components/HyperPrecisionCursor";
import { CookieBanner } from "@/src/components/CookieBanner";

const locales = ["en", "he", "ru"] as const;
type Locale = (typeof locales)[number];

function isLocale(v: string): v is Locale {
  return (locales as readonly string[]).includes(v);
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) notFound();

  const languages = {
    en: "/en",
    ru: "/ru",
    he: "/he",
  };

  return {
    alternates: {
      canonical: `/${locale}`,
      languages,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) notFound();

  setRequestLocale(locale);
  const messages = await getMessages();

  const dir = locale === "he" ? "rtl" : "ltr";

  const baseUrl = "https://savondev.com";
  // const currentUrl = `${baseUrl}/${locale}`;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${baseUrl}/#organization`,
    name: "SavonDev Studio",
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    image: `${baseUrl}/opengraph-image`,
    description:
      "Premium web design and automation studio for small businesses in Israel.",

    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        availableLanguage: ["English", "Russian", "Hebrew"],
        url: `${baseUrl}/${locale}/contact`,
      },
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://savondev.com/#business",
    url: baseUrl,
    name: "SavonDev Studio",
      "areaServed": {
    "@type": "Country",
    "name": "Israel"
  },
    inLanguage: locale,
    publisher: {
      "@id": `${baseUrl}/#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${baseUrl}/${locale}/portfolio?query={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div lang={locale} dir={dir} className="min-h-dvh">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />

        <div
          id="loader-root"
          className="fixed inset-0 z-[9999] pointer-events-none"
          aria-hidden="true"
        />

        <HyperPrecisionCursor />
        <Navigation />
        {children}
        <CookieBanner />
        <Footer />
      </div>
    </NextIntlClientProvider>
  );
}