
"use client";

import Head from "next/head";
import { useLocale, useTranslations } from "next-intl";
import { useRef } from "react";

import { buildAboutData } from "@/src/data/aboutData";
import { AboutHero } from "./AboutHero";
import { MissionSection } from "./MissionSection";
import { ValuesSection } from "./ValuesSection";
import { DifferenceSection } from "./DifferenceSection";
// import { TeamSection } from "./TeamSection";
import { AchievementsSection } from "./AchievementsSection";
import { CtaSection } from "./CtaSection";

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const baseUrl = "https://savondev.com";
  
  const locale = useLocale();
  const localizedAboutUrl = `${baseUrl}/${locale}/about`;
  const isRTL = locale === "he";
  const t = useTranslations("about");

  const data = buildAboutData(t);

  return (
    <>
      <Head>
        <title>{t("meta.title")}</title>
        <meta name="description" content={t("meta.description")} />

        <meta property="og:title" content={t("meta.ogTitle")} />
        <meta property="og:description" content={t("meta.ogDescription")} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={t("meta.ogLocale")} />

        <meta property="og:image" content={`${baseUrl}/opengraph-image`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={`${baseUrl}/twitter-image`} />

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
              "@type": "AboutPage",
              name: t("schema.page.name"),
              description: t("schema.page.description"),
              url: localizedAboutUrl,
              inLanguage: locale,
              mainEntity: {
                "@type": "LocalBusiness",
                name: t("schema.organization.name"),
                url: baseUrl,
                description: t("schema.organization.description"),
                areaServed: {
                  "@type": "Country",
                  name: "Israel",
                },
              },
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: t("schema.founder.name"),
              jobTitle: t("schema.founder.jobTitle"),
              description: t("schema.founder.description"),
              worksFor: {
                "@type": "Organization",
                name: t("schema.organization.name"),
                url: t("schema.organization.url"),
              },
            }),
          }}
        />
      </Head>

      <main
        ref={containerRef}
        dir={isRTL ? "rtl" : "ltr"}
        aria-label={t("aria.page")}
        className="relative min-h-screen overflow-x-hidden bg-[#020410] text-slate-100"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
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
            className="absolute bottom-[-30%] right-[-10%] h-[720px] w-[720px] rounded-full blur-3xl opacity-40
                       bg-[radial-gradient(circle,rgba(155,93,255,0.55),transparent_60%)]"
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
          <h1 id="about-hero-title">{t("aria.heroTitle")}</h1>
          <h2 id="about-mission-title">{t("aria.missionTitle")}</h2>
          <h2 id="about-values-title">{t("aria.valuesTitle")}</h2>
          <h2 id="about-difference-title">{t("aria.differenceTitle")}</h2>
          <h2 id="about-achievements-title">{t("aria.achievementsTitle")}</h2>
          <h2 id="about-cta-title">{t("aria.ctaTitle")}</h2>
        </div>

        <section aria-labelledby="about-hero-title">
          <AboutHero data={data.hero} />
        </section>

        <section aria-labelledby="about-mission-title">
          <MissionSection data={data.mission} />
        </section>

        <section aria-labelledby="about-values-title">
          <ValuesSection values={data.values} />
        </section>

        <section aria-labelledby="about-difference-title">
          <DifferenceSection data={data.difference} />
        </section>

        <section aria-labelledby="about-achievements-title">
          <AchievementsSection
            achievements={data.achievements}
            recognition={data.recognition}
          />
        </section>

        <section aria-labelledby="about-cta-title">
          <CtaSection />
        </section>
      </main>
    </>
  );
}