// import React from "react";
// import { NextIntlClientProvider } from "next-intl";
// import { getMessages, setRequestLocale } from "next-intl/server";
// import { notFound } from "next/navigation";

// import { Footer } from "@/src/components/Footer";
// import { Navigation } from "@/src/components/Navigation";
// import { HyperPrecisionCursor } from "@/src/components/HyperPrecisionCursor";

// const locales = ["en", "he", "ru"] as const;
// type Locale = (typeof locales)[number];

// function isLocale(v: string): v is Locale {
//   return (locales as readonly string[]).includes(v);
// }

// export function generateStaticParams() {
//   return locales.map((locale) => ({ locale }));
// }

// export default async function LocaleLayout({
//   children,
//   params,
// }: {
//   children: React.ReactNode;
//   params: Promise<{ locale: string }>;
// }) {
//   const { locale } = await params;

//   if (!isLocale(locale)) notFound();

//   setRequestLocale(locale);
//   const messages = await getMessages();

//   const dir = locale === "he" ? "rtl" : "ltr";

//   return (
//     <NextIntlClientProvider locale={locale} messages={messages}>
//       <div lang={locale} dir={dir} className="min-h-dvh">
//         <div
//           id="loader-root"
//           className="fixed inset-0 z-[9999] pointer-events-none"
//         />

//         <HyperPrecisionCursor />
//         <Navigation />
//         {children}
//         <Footer />
//       </div>
//     </NextIntlClientProvider>
//   );
// }

import React from "react";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { Footer } from "@/src/components/Footer";
import { Navigation } from "@/src/components/Navigation";
import { HyperPrecisionCursor } from "@/src/components/HyperPrecisionCursor";

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

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div lang={locale} dir={dir} className="min-h-dvh">
        <div
          id="loader-root"
          className="fixed inset-0 z-[9999] pointer-events-none"
          aria-hidden="true"
        />

        <HyperPrecisionCursor />
        <Navigation />
        {children}
        <Footer />
      </div>
    </NextIntlClientProvider>
  );
}