


  import React from "react";
  import { NextIntlClientProvider } from "next-intl";
  import { getMessages, setRequestLocale } from "next-intl/server";
  import { notFound } from "next/navigation";

  import { Footer } from "@/src/components/Footer";
  import { Navigation } from "@/src/components/Navigation";
  import { HyperPrecisionCursor } from "@/src/components/HyperPrecisionCursor";
import { LoaderProvider } from "@/src/components/loader/LoaderProvider";

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
          <LoaderProvider>
            <HyperPrecisionCursor />
            <Navigation />
            {children}
            <Footer />
          </LoaderProvider>
        </div>
      </NextIntlClientProvider>
    );
  }
