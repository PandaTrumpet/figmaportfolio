// "use client";

// import { useRef } from "react";
// import dynamic from "next/dynamic";

// import { reviewsData } from "@/src/data/reviewsData";

// import { ReviewsHero } from "./ReviewsHero";
// import { ClientStoriesSection } from "./ClientStoriesSection";

// import { ReviewsFinalCTA } from "./ReviewsFinalCTA";
// import { ProofMetricsSection } from "./ProofMetricsSection";

// const ParticlesBackground = dynamic(
//   () =>
//     import("../../components/ParticlesBackground").then(
//       (m) => m.ParticlesBackground,
//     ),
//   { ssr: false },
// );

// export default function ReviewsPage() {
//   const containerRef = useRef<HTMLDivElement | null>(null);

//   return (
//     <main
//       ref={containerRef}
//       className="relative min-h-screen overflow-hidden bg-[#020410] text-slate-100"
//     >
//       {/* GLOBAL BACKGROUND */}
//       <div className="pointer-events-none absolute inset-0 -z-10">
//         {/* base gradient */}
//         <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#050814_0%,#050818_35%,#020410_100%)]" />

//         {/* global neon waves */}
//         <div
//           className="absolute -top-60 right-[-20%] h-[520px] w-[520px] rounded-full blur-3xl opacity-60
//                      bg-[radial-gradient(circle,rgba(76,194,255,0.85),transparent_60%)]"
//         />
//         <div
//           className="absolute top-[34%] left-[-22%] h-[640px] w-[640px] rounded-full blur-3xl opacity-50
//                      bg-[radial-gradient(circle,rgba(58,123,255,0.75),transparent_60%)]"
//         />

//         <div
//           className="absolute inset-0 opacity-[0.10]"
//           style={{
//             backgroundImage:
//               "linear-gradient(rgba(51,65,85,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(51,65,85,0.25) 1px, transparent 1px)",
//             backgroundSize: "80px 80px",
//           }}
//         />
//       </div>

//       {/* Sections */}
//       <ReviewsHero data={reviewsData.hero} />

//       <ClientStoriesSection stories={reviewsData.clientStories} />

//       <ProofMetricsSection />

//       <ReviewsFinalCTA cta={reviewsData.cta} Particles={ParticlesBackground} />
//     </main>
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

  return (
    <>
      <Head>
        <title>{t("meta.title")}</title>
        <meta name="description" content={t("meta.description")} />

        <meta property="og:title" content={t("meta.ogTitle")} />
        <meta property="og:description" content={t("meta.ogDescription")} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={t("meta.ogLocale")} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t("meta.twitterTitle")} />
        <meta
          name="twitter:description"
          content={t("meta.twitterDescription")}
        />
      </Head>

      <main
        ref={containerRef}
        dir={isRTL ? "rtl" : "ltr"}
        aria-label={t("aria.page")}
        className="relative min-h-screen overflow-hidden bg-[#020410] text-slate-100"
      >
        {/* GLOBAL BACKGROUND (decorative) */}
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

        {/* Semantics / anchors */}
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