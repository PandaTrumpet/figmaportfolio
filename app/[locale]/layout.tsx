// import React from "react";
// import { NextIntlClientProvider } from "next-intl";
// import { notFound } from "next/navigation";
// import { Geist, Geist_Mono } from "next/font/google";

// import { Footer } from "@/src/components/Footer";
// import { Navigation } from "@/src/components/Navigation";
// import { HyperPrecisionCursor } from "@/src/components/HyperPrecisionCursor";

// const locales = ["en", "he","ru"] as const;
// type Locale = (typeof locales)[number];

// function isLocale(v: string): v is Locale {
//   return (locales as readonly string[]).includes(v);
// }

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export default async function LocaleLayout({
//   children,
//   params,
// }: {
//   children: React.ReactNode;
//   params: Promise<{ locale: string }>;
// }) {
//   const { locale } = await params;

//   if (!isLocale(locale)) notFound();

//   let messages: Record<string, unknown>;
//   try {
//     messages = (await import(`../../messages/${locale}.json`)).default;
//   } catch {
//     notFound();
//   }

//   const dir = locale === "he" ? "rtl" : "ltr";

//   return (
//     <html lang={locale} dir={dir}>
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         <NextIntlClientProvider locale={locale} messages={messages}>
//           <HyperPrecisionCursor />
//           <Navigation />
//           {children}
//           <Footer />
//         </NextIntlClientProvider>
//       </body>
//     </html>
//   );
// }








// Рабочий варинт


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
//   const { locale } = await params; // ✅ важно для твоего Next 16

//   if (!isLocale(locale)) notFound();

//   // ✅ важно для next-intl + кеша
//   setRequestLocale(locale);

//   // ✅ после setRequestLocale locale передавать не нужно
//   const messages = await getMessages();

//   return (
//     <NextIntlClientProvider locale={locale} messages={messages}>
//       <HyperPrecisionCursor />
//       <Navigation />
//       {children}
//       <Footer />
//     </NextIntlClientProvider>
//   );
// }

// Самый првильній варинт!

import React from "react";
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
      {/* 🔥 Управление направлением и языком здесь */}
      <div lang={locale} dir={dir} className="min-h-dvh">
        <HyperPrecisionCursor />
        <Navigation />
        {children}
        <Footer />
      </div>
    </NextIntlClientProvider>
  );
}
