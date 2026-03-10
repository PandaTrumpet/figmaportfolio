// "use client";

// import Head from "next/head";
// import { useRef } from "react";
// import dynamic from "next/dynamic";
// import { useLocale, useTranslations } from "next-intl";

// import { buildReviewsData } from "@/src/data/reviewsData";

// import { ReviewsHero } from "./ReviewsHero";
// import { ClientStoriesSection } from "./ClientStoriesSection";
// import { ProofMetricsSection } from "./ProofMetricsSection";
// import { ReviewsFinalCTA } from "./ReviewsFinalCTA";

// const ParticlesBackground = dynamic(
//   () =>
//     import("../../components/ParticlesBackground").then(
//       (m) => m.ParticlesBackground,
//     ),
//   { ssr: false },
// );

// export default function ReviewsPage() {
//   const containerRef = useRef<HTMLDivElement | null>(null);

//   const locale = useLocale();
//   const isRTL = locale === "he";

//   const t = useTranslations("reviewsData");
//   const data = buildReviewsData(t);

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
//       </Head>

//       <main
//         ref={containerRef}
//         dir={isRTL ? "rtl" : "ltr"}
//         aria-label={t("aria.page")}
//         className="relative min-h-screen overflow-hidden bg-[#020410] text-slate-100"
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

//         {/* Semantics / anchors */}
//         <div className="sr-only">
//           <h1 id="reviews-hero-title">{t("aria.heroTitle")}</h1>
//           <h2 id="reviews-stories-title">{t("aria.storiesTitle")}</h2>
//           <h2 id="reviews-proof-title">{t("aria.proofTitle")}</h2>
//           <h2 id="reviews-cta-title">{t("aria.ctaTitle")}</h2>
//         </div>

//         <section aria-labelledby="reviews-hero-title">
//           <ReviewsHero data={data.hero} />
//         </section>

//         <section aria-labelledby="reviews-stories-title">
//           <ClientStoriesSection stories={data.clientStories} />
//         </section>

//         <section aria-labelledby="reviews-proof-title">
//           <ProofMetricsSection />
//         </section>

//         <section aria-labelledby="reviews-cta-title">
//           <ReviewsFinalCTA cta={data.cta} Particles={ParticlesBackground} />
//         </section>
//       </main>
//     </>
//   );
// }

"use client";

import Head from "next/head";
import { useRef } from "react";
import dynamic from "next/dynamic";
import { useLocale, useTranslations } from "next-intl";

import { buildReviewsData } from "@/src/data/reviewsData";

import { ReviewsHero } from "./ReviewsHero";
import { ClientStoriesSection } from "./ClientStoriesSection";
import { ProofMetricsSection } from "./ProofMetricsSection";
import { ReviewsFinalCTA } from "./ReviewsFinalCTA";

const ParticlesBackground = dynamic(
  () =>
    import("../../components/ParticlesBackground").then(
      (m) => m.ParticlesBackground,
    ),
  { ssr: false },
);

export default function ReviewsPage() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const locale = useLocale();
  const isRTL = locale === "he";

  const t = useTranslations("reviewsData");
  const data = buildReviewsData(t);

  const baseUrl = "https://savondev.com";
 
 const localizedReviewsUrl = `${baseUrl}/${locale}/reviews`;
  return (
    <>
      <Head>
        <title>{t("meta.title")}</title>
        <meta name="description" content={t("meta.description")} />

        <meta property="og:title" content={t("meta.ogTitle")} />
        <meta property="og:description" content={t("meta.ogDescription")} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={t("meta.ogLocale")} />
        <meta property="og:url" content={localizedReviewsUrl} />

        
        <meta property="og:image" content={`${baseUrl}/opengraph-image`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

    
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
              "@type": "CollectionPage",
              name: t("schema.page.name"),
              description: t("schema.page.description"),
              url: localizedReviewsUrl,
              inLanguage: locale,
              mainEntity: {
                "@type": "Organization",
                name: t("schema.organization.name"),
                url: baseUrl,
              },
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Review",
              itemReviewed: {
                "@type": "ProfessionalService",
                name: t("schema.organization.name"),
                url: baseUrl,
              },
              reviewBody: t("schema.featuredReview.body"),
              author: {
                "@type": "Person",
                name: t("schema.featuredReview.author"),
              },
              reviewRating: {
                "@type": "Rating",
                ratingValue: t("schema.featuredReview.ratingValue"),
                bestRating: "5",
              },
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
                  name: t("schema.breadcrumb.reviews"),
                  item: localizedReviewsUrl,
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
        className="relative min-h-screen overflow-hidden bg-[#020410] text-slate-100"
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
          <h1 id="reviews-hero-title">{t("aria.heroTitle")}</h1>
          <h2 id="reviews-stories-title">{t("aria.storiesTitle")}</h2>
          <h2 id="reviews-proof-title">{t("aria.proofTitle")}</h2>
          <h2 id="reviews-cta-title">{t("aria.ctaTitle")}</h2>
        </div>

        <section aria-labelledby="reviews-hero-title">
          <ReviewsHero data={data.hero} />
        </section>

        <section aria-labelledby="reviews-stories-title">
          <ClientStoriesSection stories={data.clientStories} />
        </section>

        <section aria-labelledby="reviews-proof-title">
          <ProofMetricsSection />
        </section>

        <section aria-labelledby="reviews-cta-title">
          <ReviewsFinalCTA cta={data.cta} Particles={ParticlesBackground} />
        </section>
      </main>
    </>
  );
}