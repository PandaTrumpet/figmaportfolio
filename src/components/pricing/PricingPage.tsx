// "use client";

// import Head from "next/head";
// import { useLocale, useTranslations } from "next-intl";
// import { useRef } from "react";

// import { PricingHero } from "./PricingHero";
// import { PricingPackagesSection } from "./PricingPackagesSection";
// import { PricingComparisonSection } from "./PricingComparisonSection";
// import { PricingAddonsSection } from "./PricingAddonsSection";
// import { PricingFAQSection } from "./PricingFAQSection";
// import { PricingFinalCTA } from "./PricingFinalCTA";

// export default function PricingPage() {
//   const containerRef = useRef<HTMLDivElement | null>(null);

//   const locale = useLocale();
//   const isRTL = locale === "he";

//   const t = useTranslations("pricing");

//   return (
//     <>
//       <Head>
//         <title>{t("meta.title")}</title>
//         <meta name="description" content={t("meta.description")} />

//         <meta property="og:title" content={t("meta.ogTitle")} />
//         <meta property="og:description" content={t("meta.ogDescription")} />
//         <meta property="og:type" content="website" />
//         <meta property="og:locale" content={t("meta.ogLocale")} />

//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content={t("meta.twitterTitle")} />
//         <meta
//           name="twitter:description"
//           content={t("meta.twitterDescription")}
//         />
//         <script
//           type="application/ld+json"
//           // важно: без переводов внутри объекта script — через JSON.stringify
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify({
//               "@context": "https://schema.org",
//               "@type": "Service",
//               name: t("schema.serviceName"),
//               description: t("schema.serviceDescription"),
//               areaServed: {
//                 "@type": "Country",
//                 name: "Israel",
//               },
//               provider: {
//                 "@type": "Organization",
//                 name: "SavonDev Studio",
//                 url: t("schema.siteUrl"),
//               },
//               hasOfferCatalog: {
//                 "@type": "OfferCatalog",
//                 name: t("schema.catalogName"),
//                 itemListElement: [
//                   {
//                     "@type": "Offer",
//                     name: t("schema.offers.starter.name"),
//                     description: t("schema.offers.starter.description"),
//                     priceCurrency: "ILS",
//                     // если цены точные — укажи число, если нет — лучше убрать price

//                     availability: "https://schema.org/InStock",
//                     url: t("schema.pricingUrl"),
//                   },
//                   {
//                     "@type": "Offer",
//                     name: t("schema.offers.growth.name"),
//                     description: t("schema.offers.growth.description"),
//                     priceCurrency: "ILS",

//                     availability: "https://schema.org/InStock",
//                     url: t("schema.pricingUrl"),
//                   },
//                   {
//                     "@type": "Offer",
//                     name: t("schema.offers.premium.name"),
//                     description: t("schema.offers.premium.description"),
//                     priceCurrency: "ILS",

//                     availability: "https://schema.org/InStock",
//                     url: t("schema.pricingUrl"),
//                   },
//                 ],
//               },
//             }),
//           }}
//         />

//         {/* JSON-LD: FAQPage */}
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify({
//               "@context": "https://schema.org",
//               "@type": "FAQPage",
//               mainEntity: [
//                 {
//                   "@type": "Question",
//                   name: t("schema.faq.q1.q"),
//                   acceptedAnswer: {
//                     "@type": "Answer",
//                     text: t("schema.faq.q1.a"),
//                   },
//                 },
//                 {
//                   "@type": "Question",
//                   name: t("schema.faq.q2.q"),
//                   acceptedAnswer: {
//                     "@type": "Answer",
//                     text: t("schema.faq.q2.a"),
//                   },
//                 },
//                 {
//                   "@type": "Question",
//                   name: t("schema.faq.q3.q"),
//                   acceptedAnswer: {
//                     "@type": "Answer",
//                     text: t("schema.faq.q3.a"),
//                   },
//                 },
//                 {
//                   "@type": "Question",
//                   name: t("schema.faq.q4.q"),
//                   acceptedAnswer: {
//                     "@type": "Answer",
//                     text: t("schema.faq.q4.a"),
//                   },
//                 },
//               ],
//             }),
//           }}
//         />
//       </Head>

//       <main
//         ref={containerRef}
//         dir={isRTL ? "rtl" : "ltr"}
//         aria-label={t("aria.page")}
//         className="relative min-h-screen overflow-x-clip bg-[#020410] text-slate-100"
//       >
//         {/* GLOBAL BACKGROUND */}
//         <div
//           aria-hidden="true"
//           className="pointer-events-none absolute inset-0 -z-10"
//         >
//           <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#050814_0%,#050818_35%,#020410_100%)]" />

//           <div
//             className="absolute -top-60 right-[-20%] h-[520px] w-[520px] rounded-full blur-3xl opacity-60
//                      bg-[radial-gradient(circle,rgba(76,194,255,0.85),transparent_60%)]"
//           />

//           <div
//             className="absolute top-[34%] left-[-22%] h-[640px] w-[640px] rounded-full blur-3xl opacity-50
//                      bg-[radial-gradient(circle,rgba(58,123,255,0.75),transparent_60%)]"
//           />

//           <div
//             className="absolute inset-0 opacity-[0.10]"
//             style={{
//               backgroundImage:
//                 "linear-gradient(rgba(51,65,85,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(51,65,85,0.25) 1px, transparent 1px)",
//               backgroundSize: "80px 80px",
//             }}
//           />
//         </div>

//         {/* SEMANTIC ANCHORS */}
//         <div className="sr-only">
//           <h1 id="pricing-hero-title">{t("aria.heroTitle")}</h1>
//           <h2 id="pricing-packages-title">{t("aria.packagesTitle")}</h2>
//           <h2 id="pricing-comparison-title">{t("aria.comparisonTitle")}</h2>
//           <h2 id="pricing-addons-title">{t("aria.addonsTitle")}</h2>
//           <h2 id="pricing-faq-title">{t("aria.faqTitle")}</h2>
//           <h2 id="pricing-cta-title">{t("aria.ctaTitle")}</h2>
//         </div>

//         <section aria-labelledby="pricing-hero-title">
//           <PricingHero />
//         </section>

//         <section aria-labelledby="pricing-packages-title">
//           <PricingPackagesSection />
//         </section>

//         <section aria-labelledby="pricing-comparison-title">
//           <PricingComparisonSection />
//         </section>

//         <section aria-labelledby="pricing-addons-title">
//           <PricingAddonsSection />
//         </section>

//         <section aria-labelledby="pricing-faq-title">
//           <PricingFAQSection />
//         </section>

//         <section aria-labelledby="pricing-cta-title">
//           <PricingFinalCTA />
//         </section>
//       </main>
//     </>
//   );
// }

"use client";

import Head from "next/head";
import { useLocale, useTranslations } from "next-intl";
import { useRef } from "react";

import { PricingHero } from "./PricingHero";
import { PricingPackagesSection } from "./PricingPackagesSection";
import { PricingComparisonSection } from "./PricingComparisonSection";
import { PricingAddonsSection } from "./PricingAddonsSection";
import { PricingFAQSection } from "./PricingFAQSection";
import { PricingFinalCTA } from "./PricingFinalCTA";

export default function PricingPage() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const locale = useLocale();
  const isRTL = locale === "he";
  const t = useTranslations("pricing");

  const baseUrl = "https://savondev.com";
  const localizedPricingUrl =
    locale === "en" ? `${baseUrl}/pricing` : `${baseUrl}/${locale}/pricing`;

  return (
    <>
      <Head>
        <title>{t("meta.title")}</title>
        <meta name="description" content={t("meta.description")} />

        <meta property="og:title" content={t("meta.ogTitle")} />
        <meta property="og:description" content={t("meta.ogDescription")} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={t("meta.ogLocale")} />
        <meta property="og:url" content={localizedPricingUrl} />

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
              "@type": "Service",
              name: t("schema.serviceName"),
              description: t("schema.serviceDescription"),
              url: localizedPricingUrl,
              areaServed: {
                "@type": "Country",
                name: "Israel",
              },
              provider: {
                "@type": "Organization",
                name: "SavonDev Studio",
                url: baseUrl,
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: t("schema.catalogName"),
                itemListElement: [
                  {
                    "@type": "Offer",
                    name: t("schema.offers.starter.name"),
                    description: t("schema.offers.starter.description"),
                    priceCurrency: "ILS",
                    availability: "https://schema.org/InStock",
                    url: localizedPricingUrl,
                  },
                  {
                    "@type": "Offer",
                    name: t("schema.offers.growth.name"),
                    description: t("schema.offers.growth.description"),
                    priceCurrency: "ILS",
                    availability: "https://schema.org/InStock",
                    url: localizedPricingUrl,
                  },
                  {
                    "@type": "Offer",
                    name: t("schema.offers.premium.name"),
                    description: t("schema.offers.premium.description"),
                    priceCurrency: "ILS",
                    availability: "https://schema.org/InStock",
                    url: localizedPricingUrl,
                  },
                ],
              },
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: t("schema.faq.q1.q"),
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: t("schema.faq.q1.a"),
                  },
                },
                {
                  "@type": "Question",
                  name: t("schema.faq.q2.q"),
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: t("schema.faq.q2.a"),
                  },
                },
                {
                  "@type": "Question",
                  name: t("schema.faq.q3.q"),
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: t("schema.faq.q3.a"),
                  },
                },
                {
                  "@type": "Question",
                  name: t("schema.faq.q4.q"),
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: t("schema.faq.q4.a"),
                  },
                },
              ],
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: t("schema.breadcrumb.home"),
                  item: locale === "en" ? baseUrl : `${baseUrl}/${locale}`,
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: t("schema.breadcrumb.pricing"),
                  item: localizedPricingUrl,
                },
              ],
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
            className="absolute top-[34%] left-[-22%] h-[640px] w-[640px] rounded-full blur-3xl opacity-50
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
          <h1 id="pricing-hero-title">{t("aria.heroTitle")}</h1>
          <h2 id="pricing-packages-title">{t("aria.packagesTitle")}</h2>
          <h2 id="pricing-comparison-title">{t("aria.comparisonTitle")}</h2>
          <h2 id="pricing-addons-title">{t("aria.addonsTitle")}</h2>
          <h2 id="pricing-faq-title">{t("aria.faqTitle")}</h2>
          <h2 id="pricing-cta-title">{t("aria.ctaTitle")}</h2>
        </div>

        <section aria-labelledby="pricing-hero-title">
          <PricingHero />
        </section>

        <section aria-labelledby="pricing-packages-title">
          <PricingPackagesSection />
        </section>

        <section aria-labelledby="pricing-comparison-title">
          <PricingComparisonSection />
        </section>

        <section aria-labelledby="pricing-addons-title">
          <PricingAddonsSection />
        </section>

        <section aria-labelledby="pricing-faq-title">
          <PricingFAQSection />
        </section>

        <section aria-labelledby="pricing-cta-title">
          <PricingFinalCTA />
        </section>
      </main>
    </>
  );
}