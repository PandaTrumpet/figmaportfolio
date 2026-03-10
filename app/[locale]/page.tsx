
"use client";

import Head from "next/head";
import { useLocale, useTranslations } from "next-intl";
import { useRef } from "react";

// import { CasePreview } from "@/src/components/CasePreview";
import { FinalCTA } from "@/src/components/FinalCTA";
import { FocusSection } from "@/src/components/FocusSection";
import { Hero } from "@/src/components/Hero";
import { ProcessSection } from "@/src/components/ProcessSection";
import { TestimonialsSection } from "@/src/components/TestimonialsSection";
import { WhyUsSection } from "@/src/components/WhyUsSection";

export default function Home() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const locale = useLocale();
  const isRTL = locale === "he";
  const t = useTranslations("home");

const baseUrl = "https://savondev.com";

const localizedHomeUrl = `${baseUrl}/${locale}`;

  return (
    <>
      <Head>
        <title>{t("meta.title")}</title>
        <meta name="description" content={t("meta.description")} />

        <meta property="og:title" content={t("meta.ogTitle")} />
        <meta property="og:description" content={t("meta.ogDescription")} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={t("meta.ogLocale")} />
        <meta property="og:url" content={localizedHomeUrl} />


      
        <meta property="og:image" content={`${baseUrl}/opengraph-image`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={`${baseUrl}/twitter-image`} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t("meta.twitterTitle")} />
        <meta
          name="twitter:description"
          content={t("meta.twitterDescription")}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: t("schema.organization.name"),
              description: t("schema.organization.description"),
              url: localizedHomeUrl,
              areaServed: {
                "@type": "Country",
                name: "Israel",
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "IL",
                addressLocality: "Tel Aviv",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: t("schema.organization.contactType"),
                email: t("schema.organization.email"),
                telephone: t("schema.organization.telephone"),
                areaServed: "IL",
                availableLanguage: t.raw(
                  "schema.organization.availableLanguages",
                ),
              },
              sameAs: [],
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: t("schema.website.name"),
              url: localizedHomeUrl,
              inLanguage: locale,
              potentialAction: {
                "@type": "SearchAction",
                target: `${localizedHomeUrl}/search?q={search_term_string}`,
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </Head>

      <main
        ref={containerRef}
        dir={isRTL ? "rtl" : "ltr"}
        aria-label={t("aria.page")}
        className="relative min-h-screen overflow-x-clip bg-[#020410] text-slate-100"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#050814_0%,#050818_35%,#020410_100%)]" />

          <div
            className="absolute -top-60 right-[-20%] h-[520px] w-[520px] rounded-full blur-3xl opacity-60
                       bg-[radial-gradient(circle,rgba(76,194,255,0.85),transparent_60%)]"
          />

          <div
            className="absolute top-[35%] left-[-20%] h-[620px] w-[620px] rounded-full blur-3xl opacity-50
                       bg-[radial-gradient(circle,rgba(58,123,255,0.75),transparent_60%)]"
          />

          <div
            className="absolute inset-0 opacity-[0.10]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(51,65,85,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(51,65,85,0.25) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        <div className="sr-only">
          <h1 id="home-hero-title">{t("aria.heroTitle")}</h1>
          <h2 id="home-focus-title">{t("aria.focusTitle")}</h2>
          <h2 id="home-whyus-title">{t("aria.whyUsTitle")}</h2>
          <h2 id="home-process-title">{t("aria.processTitle")}</h2>
          <h2 id="home-testimonials-title">{t("aria.testimonialsTitle")}</h2>
          <h2 id="home-finalcta-title">{t("aria.finalCtaTitle")}</h2>
        </div>

        <section aria-labelledby="home-hero-title">
          <Hero />
        </section>

        <section aria-labelledby="home-focus-title">
          <FocusSection />
        </section>

        <section aria-labelledby="home-whyus-title">
          <WhyUsSection />
        </section>

        {/* <section aria-labelledby="home-case-title">
          <CasePreview />
        </section> */}

        <section aria-labelledby="home-process-title">
          <ProcessSection />
        </section>

        <section aria-labelledby="home-testimonials-title">
          <TestimonialsSection />
        </section>

        <section aria-labelledby="home-finalcta-title">
          <FinalCTA />
        </section>
      </main>
    </>
  );
}