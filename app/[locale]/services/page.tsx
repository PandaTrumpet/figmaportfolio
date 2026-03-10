// "use client";

// import Head from "next/head";
// import { useLocale, useTranslations } from "next-intl";

// import ServicesHero from "@/src/components/services/ServicesHero";
// import PricingBridgeSection from "@/src/components/services/PricingBridgeSection";
// import { DecisionSection } from "@/src/components/services/DecisionSection";
// import { DifferenceSection } from "@/src/components/services/DifferenceSection";
// import { ServicesCTA } from "@/src/components/services/ServicesCTA";

// export default function Services() {
//   const locale = useLocale();
//   const isRTL = locale === "he";
//   const t = useTranslations("services");

//   return (
//     <>
//       <Head>
//         <title>{t("meta.title")}</title>
//         <meta name="description" content={t("meta.description")} />

//         {/* OpenGraph */}
//         <meta property="og:title" content={t("meta.ogTitle")} />
//         <meta property="og:description" content={t("meta.ogDescription")} />
//         <meta property="og:type" content="website" />
//         <meta property="og:locale" content={t("meta.ogLocale")} />

//         {/* Twitter */}
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content={t("meta.twitterTitle")} />
//         <meta
//           name="twitter:description"
//           content={t("meta.twitterDescription")}
//         />
//       </Head>

//       <main
//         dir={isRTL ? "rtl" : "ltr"}
//         aria-label={t("aria.page")}
//         className="relative min-h-screen overflow-x-clip bg-[#020410] text-slate-100"
//       >
//         {/* GLOBAL BACKGROUND (decorative) */}
//         <div
//           aria-hidden="true"
//           className="pointer-events-none absolute inset-0 -z-10"
//         >
//           <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#050814_0%,#050818_35%,#020410_100%)]" />

//           <div
//             className="absolute -top-60 right-[-20%] h-[520px] w-[520px] rounded-full blur-3xl opacity-60
//                        bg-[radial-gradient(circle,rgba(76,194,255,0.85),transparent_60%)]"
//           />
//           <div
//             className="absolute top-[34%] left-[-22%] h-[640px] w-[640px] rounded-full blur-3xl opacity-50
//                        bg-[radial-gradient(circle,rgba(58,123,255,0.75),transparent_60%)]"
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

//         {/* Semantic anchors for assistive tech (doesn’t affect layout) */}
//         <div className="sr-only">
//           <h1 id="services-hero-title">{t("aria.heroTitle")}</h1>
//           <h2 id="services-decision-title">{t("aria.decisionTitle")}</h2>
//           <h2 id="services-difference-title">{t("aria.differenceTitle")}</h2>
//           <h2 id="services-pricing-title">{t("aria.pricingTitle")}</h2>
//           <h2 id="services-cta-title">{t("aria.ctaTitle")}</h2>
//         </div>

//         <section aria-labelledby="services-hero-title">
//           <ServicesHero />
//         </section>

//         <section aria-labelledby="services-decision-title">
//           <DecisionSection />
//         </section>

//         <section aria-labelledby="services-difference-title">
//           <DifferenceSection />
//         </section>

//         <section aria-labelledby="services-pricing-title">
//           <PricingBridgeSection />
//         </section>

//         <section aria-labelledby="services-cta-title">
//           <ServicesCTA />
//         </section>
//       </main>
//     </>
//   );
// }

"use client";

import Head from "next/head";
import { useLocale, useTranslations } from "next-intl";
import { useRef } from "react";

import ServicesHero from "@/src/components/services/ServicesHero";
import PricingBridgeSection from "@/src/components/services/PricingBridgeSection";
import { DecisionSection } from "@/src/components/services/DecisionSection";
import { DifferenceSection } from "@/src/components/services/DifferenceSection";
import { ServicesCTA } from "@/src/components/services/ServicesCTA";

export default function Services() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const locale = useLocale();
  const isRTL = locale === "he";
  const t = useTranslations("services");

  const baseUrl = "https://savondev.com";
  
 
 const localizedServicesUrl = `${baseUrl}/${locale}/services`;
  return (
    <>
      <Head>
        <title>{t("meta.title")}</title>
        <meta name="description" content={t("meta.description")} />

        <meta property="og:title" content={t("meta.ogTitle")} />
        <meta property="og:description" content={t("meta.ogDescription")} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={t("meta.ogLocale")} />
        <meta property="og:url" content={localizedServicesUrl} />
     
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
              "@type": "Service",
              name: t("schema.service.name"),
              description: t("schema.service.description"),
              url: localizedServicesUrl,
              provider: {
                "@type": "Organization",
                name: t("schema.organization.name"),
                url: baseUrl,
              },
              areaServed: {
                "@type": "Country",
                name: "Israel",
              },
              serviceType: t.raw("schema.service.types"),
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
                  name: t("schema.breadcrumb.services"),
                  item: localizedServicesUrl,
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
          <h1 id="services-hero-title">{t("aria.heroTitle")}</h1>
          <h2 id="services-decision-title">{t("aria.decisionTitle")}</h2>
          <h2 id="services-difference-title">{t("aria.differenceTitle")}</h2>
          <h2 id="services-pricing-title">{t("aria.pricingTitle")}</h2>
          <h2 id="services-cta-title">{t("aria.ctaTitle")}</h2>
        </div>

        <section aria-labelledby="services-hero-title">
          <ServicesHero />
        </section>

        <section aria-labelledby="services-decision-title">
          <DecisionSection />
        </section>

        <section aria-labelledby="services-difference-title">
          <DifferenceSection />
        </section>

        <section aria-labelledby="services-pricing-title">
          <PricingBridgeSection />
        </section>

        <section aria-labelledby="services-cta-title">
          <ServicesCTA />
        </section>
      </main>
    </>
  );
}