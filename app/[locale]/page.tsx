// // import { CasePreview } from "@/src/components/CasePreview";
// import { FinalCTA } from "@/src/components/FinalCTA";
// import { FocusSection } from "@/src/components/FocusSection";

// import { Hero } from "@/src/components/Hero";

// import { ProcessSection } from "@/src/components/ProcessSection";
// import { TestimonialsSection } from "@/src/components/TestimonialsSection";
// import { WhyUsSection } from "@/src/components/WhyUsSection";

// export default function Home() {
//   return (
//     <main className="relative min-h-screen overflow-x-clip bg-[#020410] text-slate-100">
//       {/* GLOBAL BACKGROUND */}
//       <div className="pointer-events-none absolute inset-0 -z-10">
//         {/* базовый градиент страницы */}
//         <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#050814_0%,#050818_35%,#020410_100%)]" />

//         {/* большие “волны”, общие для всей страницы */}
//         <div
//           className="absolute -top-60 right-[-20%] h-[520px] w-[520px] rounded-full blur-3xl opacity-60
//                         bg-[radial-gradient(circle,rgba(76,194,255,0.85),transparent_60%)]"
//         />
//         <div
//           className="absolute top-[35%] left-[-20%] h-[620px] w-[620px] rounded-full blur-3xl opacity-50
//                         bg-[radial-gradient(circle,rgba(58,123,255,0.75),transparent_60%)]"
//         />

//         {/* единая сетка на всю страницу */}
//         <div
//           className="absolute inset-0 opacity-[0.10]"
//           style={{
//             backgroundImage:
//               "linear-gradient(rgba(51,65,85,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(51,65,85,0.25) 1px, transparent 1px)",
//             backgroundSize: "80px 80px",
//           }}
//         />
//       </div>
//       <Hero />
//       <FocusSection />
//       <WhyUsSection />
//       {/* <CasePreview /> */}
//       <ProcessSection />
//       <TestimonialsSection />
//       <FinalCTA />
//     </main>
//   );
// }

"use client";

import Head from "next/head";
import { useLocale, useTranslations } from "next-intl";

// import { CasePreview } from "@/src/components/CasePreview";
import { FinalCTA } from "@/src/components/FinalCTA";
import { FocusSection } from "@/src/components/FocusSection";
import { Hero } from "@/src/components/Hero";
import { ProcessSection } from "@/src/components/ProcessSection";
import { TestimonialsSection } from "@/src/components/TestimonialsSection";
import { WhyUsSection } from "@/src/components/WhyUsSection";

export default function Home() {
  const locale = useLocale();
  const isRTL = locale === "he";
  const t = useTranslations("home");

  return (
    <>
      {/* SEO (client-safe) */}
      <Head>
        <title>{t("meta.title")}</title>
        <meta name="description" content={t("meta.description")} />

        {/* OpenGraph */}
        <meta property="og:title" content={t("meta.ogTitle")} />
        <meta property="og:description" content={t("meta.ogDescription")} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={t("meta.ogLocale")} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t("meta.twitterTitle")} />
        <meta
          name="twitter:description"
          content={t("meta.twitterDescription")}
        />
      </Head>

      <main
        dir={isRTL ? "rtl" : "ltr"}
        aria-label={t("aria.page")}
        className="relative min-h-screen overflow-x-clip bg-[#020410] text-slate-100"
      >
        {/* GLOBAL BACKGROUND (decorative) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
        >
          {/* базовый градиент страницы */}
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#050814_0%,#050818_35%,#020410_100%)]" />

          {/* большие “волны”, общие для всей страницы */}
          <div
            className="absolute -top-60 right-[-20%] h-[520px] w-[520px] rounded-full blur-3xl opacity-60
                       bg-[radial-gradient(circle,rgba(76,194,255,0.85),transparent_60%)]"
          />
          <div
            className="absolute top-[35%] left-[-20%] h-[620px] w-[620px] rounded-full blur-3xl opacity-50
                       bg-[radial-gradient(circle,rgba(58,123,255,0.75),transparent_60%)]"
          />

          {/* единая сетка на всю страницу */}
          <div
            className="absolute inset-0 opacity-[0.10]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(51,65,85,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(51,65,85,0.25) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        {/* Section anchors (for a11y + SEO structure, no UI impact) */}
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