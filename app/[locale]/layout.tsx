


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
          <div
            id="global-loader"
            data-open="1"
            className="
            fixed inset-0 z-[9999]
            grid place-items-center
            bg-[#050608] text-[#F5EFE7]
            opacity-100 pointer-events-auto
            transition-opacity duration-300 ease-out
          "
            aria-label="Loading"
            role="status"
            aria-live="polite"
          >
            {/* background */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="glow-cyan absolute -top-56 left-1/2 h-[640px] w-[640px] -translate-x-1/2 rounded-full blur-3xl opacity-70" />
              <div className="glow-purple absolute -bottom-72 left-1/3 h-[700px] w-[700px] -translate-x-1/2 rounded-full blur-3xl opacity-55" />
              <div className="grid-overlay absolute inset-0 opacity-[0.10]" />
              <div className="scan-lines absolute inset-0 opacity-[0.10]" />
            </div>

            {/* core */}
            <div className="relative">
              <div className="bloom absolute -inset-14 rounded-full blur-2xl opacity-70" />

              <div className="relative">
                {/* outer ring */}
                <div className="outer-ring absolute -inset-6 rounded-[2rem]" />

                {/* glass cube */}
                <div
                  className="
                  relative h-32 w-32 md:h-36 md:w-36 rounded-3xl
                  border border-white/14 bg-white/[0.05] backdrop-blur-2xl
                  shadow-[0_0_55px_rgba(76,194,255,0.20)]
                "
                >
                  {/* chromatic edges */}
                  <div className="edge-cyan absolute inset-0 rounded-3xl pointer-events-none" />
                  <div className="edge-purple absolute inset-0 rounded-3xl pointer-events-none" />

                  {/* inner neon stroke */}
                  <div className="inner-stroke absolute inset-3 rounded-2xl pointer-events-none" />

                  {/* inner prism ring */}
                  <div className="inner-prism absolute inset-2 rounded-2xl pointer-events-none" />

                  {/* SD core */}
                  <div className="absolute inset-0 grid place-items-center">
                    <div
                      className="
                      relative w-20 h-20 md:w-24 md:h-24 rounded-2xl
                      bg-linear-to-tr from-[#3A7BFF] via-[#4CC2FF] to-[#8B5CF6]
                      shadow-[0_0_45px_rgba(76,194,255,0.65)]
                    "
                    >
                      <div className="absolute inset-1.5 rounded-[1rem] bg-slate-950/78 backdrop-blur-md" />
                      <div
                        className="
                        relative z-10 flex h-full w-full items-center justify-center
                        text-[18px] md:text-[22px]
                        font-semibold tracking-[0.12em] uppercase
                        text-slate-100
                        drop-shadow-[0_0_18px_rgba(76,194,255,0.65)]
                      "
                      >
                        SD
                      </div>
                    </div>
                  </div>
                </div>

                {/* dots */}
                <div className="mt-10 flex justify-center gap-2">
                  <span className="dot dot-1 h-1.5 w-1.5 rounded-full bg-white/55" />
                  <span className="dot dot-2 h-1.5 w-1.5 rounded-full bg-white/55" />
                  <span className="dot dot-3 h-1.5 w-1.5 rounded-full bg-white/55" />
                </div>
              </div>
            </div>
          </div>

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
