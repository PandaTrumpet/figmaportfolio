// "use client";

// import Head from "next/head";
// import { useRef } from "react";
// import { useScroll, useTransform } from "motion/react";
// import { useLocale, useTranslations } from "next-intl";

// import { buildProcessData } from "@/src/data/processData";

// import { ProcessHero } from "./ProcessHero";
// import { ProcessSteps } from "./ProcessSteps";
// import { ProcessTimeline } from "./ProcessTimeline";
// import { DeliverablesSection } from "./DeliverablesSection";
// import { ProcessCTA } from "./ProcessCTA";
// import { GuaranteeSection } from "./GuaranteeSection";

// export default function ProcessPage() {
//   const locale = useLocale();
//   const isRTL = locale === "he";
//   const t = useTranslations("processe");
//   const data = buildProcessData(t);

//   // ⬇️ Возвращаем scroll-анимацию
//   const containerRef = useRef<HTMLDivElement | null>(null);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

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
//         className="relative min-h-screen overflow-x-clip bg-[#020410] text-slate-100"
//       >
//         {/* GLOBAL BACKGROUND */}
//         <div
//           aria-hidden="true"
//           className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
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
//             className="absolute bottom-[-30%] right-[-10%] h-[720px] w-[720px] rounded-full blur-3xl opacity-40
//                        bg-[radial-gradient(circle,rgba(155,93,255,0.55),transparent_60%)]"
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

//         {/* Семантические якоря */}
//         <div className="sr-only">
//           <h1 id="process-hero-title">{t("aria.heroTitle")}</h1>
//           <h2 id="process-steps-title">{t("aria.stepsTitle")}</h2>
//           <h2 id="process-timeline-title">{t("aria.timelineTitle")}</h2>
//           <h2 id="process-deliverables-title">{t("aria.deliverablesTitle")}</h2>
//           <h2 id="process-guarantee-title">{t("aria.guaranteeTitle")}</h2>
//           <h2 id="process-cta-title">{t("aria.ctaTitle")}</h2>
//         </div>

//         {/* SECTIONS */}

//         <section aria-labelledby="process-hero-title">
//           <ProcessHero data={data.hero} opacity={heroOpacity} />
//         </section>

//         <section aria-labelledby="process-steps-title">
//           <ProcessSteps steps={data.steps} />
//         </section>

//         <section aria-labelledby="process-timeline-title">
//           <ProcessTimeline timeline={data.timeline} />
//         </section>

//         <section aria-labelledby="process-deliverables-title">
//           <DeliverablesSection deliverables={data.deliverables} />
//         </section>

//         <section aria-labelledby="process-guarantee-title">
//           <GuaranteeSection guarantee={data.guarantee} />
//         </section>

//         <section aria-labelledby="process-cta-title">
//           <ProcessCTA />
//         </section>
//       </main>
//     </>
//   );
// }

"use client";

import Head from "next/head";
import { useRef } from "react";
import { useScroll, useTransform } from "motion/react";
import { useLocale, useTranslations } from "next-intl";

import { buildProcessData } from "@/src/data/processData";

import { ProcessHero } from "./ProcessHero";
import { ProcessSteps } from "./ProcessSteps";
import { ProcessTimeline } from "./ProcessTimeline";
import { DeliverablesSection } from "./DeliverablesSection";
import { ProcessCTA } from "./ProcessCTA";
import { GuaranteeSection } from "./GuaranteeSection";

export default function ProcessPage() {
  const locale = useLocale();
  const isRTL = locale === "he";
  const t = useTranslations("processe");
  const data = buildProcessData(t);

  const baseUrl = "https://savondev.com";
  const localizedProcessUrl =
    locale === "en" ? `${baseUrl}/process` : `${baseUrl}/${locale}/process`;

  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <>
      <Head>
        <title>{t("meta.title")}</title>
        <meta name="description" content={t("meta.description")} />

        <meta property="og:title" content={t("meta.ogTitle")} />
        <meta property="og:description" content={t("meta.ogDescription")} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={t("meta.ogLocale")} />
        <meta property="og:url" content={localizedProcessUrl} />

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
              "@type": "WebPage",
              name: t("schema.page.name"),
              description: t("schema.page.description"),
              url: localizedProcessUrl,
              inLanguage: locale,
              mainEntity: {
                "@type": "Service",
                name: t("schema.service.name"),
                description: t("schema.service.description"),
                provider: {
                  "@type": "Organization",
                  name: t("schema.organization.name"),
                  url: baseUrl,
                },
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
                  name: t("schema.breadcrumb.process"),
                  item: localizedProcessUrl,
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
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
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
          <h1 id="process-hero-title">{t("aria.heroTitle")}</h1>
          <h2 id="process-steps-title">{t("aria.stepsTitle")}</h2>
          <h2 id="process-timeline-title">{t("aria.timelineTitle")}</h2>
          <h2 id="process-deliverables-title">{t("aria.deliverablesTitle")}</h2>
          <h2 id="process-guarantee-title">{t("aria.guaranteeTitle")}</h2>
          <h2 id="process-cta-title">{t("aria.ctaTitle")}</h2>
        </div>

        <section aria-labelledby="process-hero-title">
          <ProcessHero data={data.hero} opacity={heroOpacity} />
        </section>

        <section aria-labelledby="process-steps-title">
          <ProcessSteps steps={data.steps} />
        </section>

        <section aria-labelledby="process-timeline-title">
          <ProcessTimeline timeline={data.timeline} />
        </section>

        <section aria-labelledby="process-deliverables-title">
          <DeliverablesSection deliverables={data.deliverables} />
        </section>

        <section aria-labelledby="process-guarantee-title">
          <GuaranteeSection guarantee={data.guarantee} />
        </section>

        <section aria-labelledby="process-cta-title">
          <ProcessCTA />
        </section>
      </main>
    </>
  );
}