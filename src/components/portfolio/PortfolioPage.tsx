// "use client";

// import Head from "next/head";
// import { useLocale, useTranslations } from "next-intl";
// import { useMemo, useRef } from "react";

// import { buildPortfolioData } from "@/src/data/portfolio";
// import { PortfolioHero } from "./PortfolioHero";
// import { ProjectsGridSection } from "./ProjectsGridSection";
// import { FeaturedCaseStudiesSection } from "./FeaturedCaseStudiesSection";
// import { PortfolioCTA } from "./PortfolioCTA";

// export default function PortfolioPage() {
//   const containerRef = useRef<HTMLDivElement | null>(null);

//   const locale = useLocale();
//   const isRTL = locale === "he";
//   const t = useTranslations();

//   const data = buildPortfolioData(t);

//   const featuredProjects = useMemo(
//     () => data.projects.filter((p) => p.featured && p.caseStudy),
//     [data.projects],
//   );

//   const baseUrl = "https://savondev.com";

//   const localizedPortfolioUrl = `${baseUrl}/${locale}/portfolio`;
//   return (
//     <>
//       <Head>
//         <title>{t("portfolioPage.meta.title")}</title>
//         <meta
//           name="description"
//           content={t("portfolioPage.meta.description")}
//         />

//         <meta property="og:title" content={t("portfolioPage.meta.ogTitle")} />
//         <meta
//           property="og:description"
//           content={t("portfolioPage.meta.ogDescription")}
//         />
//         <meta property="og:type" content="website" />
//         <meta property="og:locale" content={t("portfolioPage.meta.ogLocale")} />
//         <meta property="og:url" content={localizedPortfolioUrl} />

//         <meta property="og:image" content={`${baseUrl}/opengraph-image`} />
//         <meta property="og:image:width" content="1200" />
//         <meta property="og:image:height" content="630" />

//         <meta name="twitter:image" content={`${baseUrl}/twitter-image`} />
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta
//           name="twitter:title"
//           content={t("portfolioPage.meta.twitterTitle")}
//         />
//         <meta
//           name="twitter:description"
//           content={t("portfolioPage.meta.twitterDescription")}
//         />

//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify({
//               "@context": "https://schema.org",
//               "@type": "CollectionPage",
//               name: t("portfolioPage.schema.collection.name"),
//               description: t("portfolioPage.schema.collection.description"),
//               url: localizedPortfolioUrl,
//               isPartOf: {
//                 "@type": "WebSite",
//                 name: t("portfolioPage.schema.website.name"),
//                 url: baseUrl,
//               },
//               about: {
//                 "@type": "Organization",
//                 name: t("portfolioPage.schema.organization.name"),
//                 url: baseUrl,
//               },
//               mainEntity: featuredProjects.map((project) => ({
//                 "@type": "CreativeWork",
//                 name: project.title,
//                 description: project.description,
//                 dateCreated: project.year,
//                 url: project.link || localizedPortfolioUrl,
//               })),
//             }),
//           }}
//         />

//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify({
//               "@context": "https://schema.org",
//               "@type": "BreadcrumbList",
//               itemListElement: [
//                 {
//                   "@type": "ListItem",
//                   position: 1,
//                   name: t("portfolioPage.schema.breadcrumb.home"),
//                   item: locale === "en" ? baseUrl : `${baseUrl}/${locale}`,
//                 },
//                 {
//                   "@type": "ListItem",
//                   position: 2,
//                   name: t("portfolioPage.schema.breadcrumb.portfolio"),
//                   item: localizedPortfolioUrl,
//                 },
//               ],
//             }),
//           }}
//         />
//       </Head>

//       <main
//         ref={containerRef}
//         dir={isRTL ? "rtl" : "ltr"}
//         aria-label={t("portfolioPage.aria.page")}
//         className="relative min-h-screen overflow-x-clip bg-[#020410] text-slate-100"
//       >
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
//             className="absolute top-[32%] left-[-22%] h-[640px] w-[640px] rounded-full blur-3xl opacity-50
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

//         <div className="sr-only">
//           <h1 id="portfolio-hero-title">{t("portfolioPage.aria.heroTitle")}</h1>
//           <h2 id="portfolio-projects-title">
//             {t("portfolioPage.aria.projectsTitle")}
//           </h2>
//           <h2 id="portfolio-case-studies-title">
//             {t("portfolioPage.aria.caseStudiesTitle")}
//           </h2>
//           <h2 id="portfolio-cta-title">{t("portfolioPage.aria.ctaTitle")}</h2>
//         </div>

//         <section aria-labelledby="portfolio-hero-title">
//           <PortfolioHero />
//         </section>

//         <section aria-labelledby="portfolio-projects-title">
//           <ProjectsGridSection projects={data.projects} />
//         </section>

//         <section aria-labelledby="portfolio-case-studies-title">
//           <FeaturedCaseStudiesSection projects={featuredProjects} />
//         </section>

//         <section aria-labelledby="portfolio-cta-title">
//           <PortfolioCTA />
//         </section>
//       </main>
//     </>
//   );
// }

// Рабочий вариант

// "use client";

// import Head from "next/head";
// import { useLocale, useTranslations } from "next-intl";
// import { useMemo, useRef } from "react";

// import { buildPortfolioData } from "@/src/data/portfolio";
// import { PortfolioHero } from "./PortfolioHero";
// import { ProjectsGridSection } from "./ProjectsGridSection";
// import { FeaturedCaseStudiesSection } from "./FeaturedCaseStudiesSection";
// import { PortfolioCTA } from "./PortfolioCTA";

// export default function PortfolioPage() {
//   const containerRef = useRef<HTMLDivElement | null>(null);

//   const locale = useLocale();
//   const isRTL = locale === "he";
//   const t = useTranslations();

//   const data = buildPortfolioData(t);

//   const featuredProjects = useMemo(
//     () => data.projects.filter((p) => p.featured && p.caseStudy),
//     [data.projects],
//   );

//   const baseUrl = "https://savondev.com";
//   const localizedPortfolioUrl = `${baseUrl}/${locale}/portfolio`;

//   return (
//     <>
//       <Head>
//         <title>{t("portfolioPage.meta.title")}</title>
//         <meta
//           name="description"
//           content={t("portfolioPage.meta.description")}
//         />

//         <meta property="og:title" content={t("portfolioPage.meta.ogTitle")} />
//         <meta
//           property="og:description"
//           content={t("portfolioPage.meta.ogDescription")}
//         />
//         <meta property="og:type" content="website" />
//         <meta property="og:locale" content={t("portfolioPage.meta.ogLocale")} />
//         <meta property="og:url" content={localizedPortfolioUrl} />

//         <meta property="og:image" content={`${baseUrl}/opengraph-image`} />
//         <meta property="og:image:width" content="1200" />
//         <meta property="og:image:height" content="630" />

//         <meta name="twitter:image" content={`${baseUrl}/twitter-image`} />
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta
//           name="twitter:title"
//           content={t("portfolioPage.meta.twitterTitle")}
//         />
//         <meta
//           name="twitter:description"
//           content={t("portfolioPage.meta.twitterDescription")}
//         />

//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify({
//               "@context": "https://schema.org",
//               "@type": "CollectionPage",
//               name: t("portfolioPage.schema.collection.name"),
//               description: t("portfolioPage.schema.collection.description"),
//               url: localizedPortfolioUrl,
//               isPartOf: {
//                 "@type": "WebSite",
//                 name: t("portfolioPage.schema.website.name"),
//                 url: baseUrl,
//               },
//               about: {
//                 "@type": "Organization",
//                 name: t("portfolioPage.schema.organization.name"),
//                 url: baseUrl,
//               },
//               mainEntity: featuredProjects.map((project) => ({
//                 "@type": "CreativeWork",
//                 name: project.title,
//                 description: project.description,
//                 dateCreated: project.year,
//                 url: project.link || localizedPortfolioUrl,
//               })),
//             }),
//           }}
//         />

//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify({
//               "@context": "https://schema.org",
//               "@type": "BreadcrumbList",
//               itemListElement: [
//                 {
//                   "@type": "ListItem",
//                   position: 1,
//                   name: t("portfolioPage.schema.breadcrumb.home"),
//                   item: locale === "en" ? baseUrl : `${baseUrl}/${locale}`,
//                 },
//                 {
//                   "@type": "ListItem",
//                   position: 2,
//                   name: t("portfolioPage.schema.breadcrumb.portfolio"),
//                   item: localizedPortfolioUrl,
//                 },
//               ],
//             }),
//           }}
//         />
//       </Head>

//       <main
//         ref={containerRef}
//         dir={isRTL ? "rtl" : "ltr"}
//         aria-label={t("portfolioPage.aria.page")}
//         className="relative min-h-screen overflow-x-clip bg-[#020410] text-slate-100"
//       >
//         <div
//           aria-hidden="true"
//           className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
//         >
//           <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#050814_0%,#050818_35%,#020410_100%)]" />

//           <div
//             className="absolute -top-20 right-[-10%] h-[220px] w-[220px] rounded-full blur-2xl opacity-45
//                        bg-[radial-gradient(circle,rgba(76,194,255,0.82),transparent_60%)]
//                        md:-top-60 md:right-[-20%] md:h-[520px] md:w-[520px] md:blur-3xl md:opacity-60"
//           />

//           <div
//             className="hidden md:block absolute top-[32%] left-[-22%] h-[640px] w-[640px] rounded-full blur-3xl opacity-50
//                        bg-[radial-gradient(circle,rgba(58,123,255,0.75),transparent_60%)]"
//           />

//           <div
//             className="hidden md:block absolute inset-0 opacity-[0.10]"
//             style={{
//               backgroundImage:
//                 "linear-gradient(rgba(51,65,85,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(51,65,85,0.25) 1px, transparent 1px)",
//               backgroundSize: "80px 80px",
//             }}
//           />
//         </div>

//         <div className="sr-only">
//           <h1 id="portfolio-hero-title">{t("portfolioPage.aria.heroTitle")}</h1>
//           <h2 id="portfolio-projects-title">
//             {t("portfolioPage.aria.projectsTitle")}
//           </h2>
//           <h2 id="portfolio-case-studies-title">
//             {t("portfolioPage.aria.caseStudiesTitle")}
//           </h2>
//           <h2 id="portfolio-cta-title">{t("portfolioPage.aria.ctaTitle")}</h2>
//         </div>

//         <section aria-labelledby="portfolio-hero-title">
//           <PortfolioHero />
//         </section>

//         <section aria-labelledby="portfolio-projects-title">
//           <ProjectsGridSection projects={data.projects} />
//         </section>

//         <section aria-labelledby="portfolio-case-studies-title">
//           <FeaturedCaseStudiesSection projects={featuredProjects} />
//         </section>

//         <section aria-labelledby="portfolio-cta-title">
//           <PortfolioCTA />
//         </section>
//       </main>
//     </>
//   );
// }

"use client";

import Head from "next/head";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useMemo, useRef, useState } from "react";

import { buildPortfolioData } from "@/src/data/portfolio";
import { GlobalLoader } from "@/src/components/GlobalLoader";
import { PortfolioHero } from "./PortfolioHero";
import { ProjectsGridSection } from "./ProjectsGridSection";
import { FeaturedCaseStudiesSection } from "./FeaturedCaseStudiesSection";
import { PortfolioCTA } from "./PortfolioCTA";

export default function PortfolioPage() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [isHeroBgLoaded, setIsHeroBgLoaded] = useState(false);
  const [isPageReady, setIsPageReady] = useState(false);

  const locale = useLocale();
  const isRTL = locale === "he";
  const t = useTranslations();

  const data = buildPortfolioData(t);

  const featuredProjects = useMemo(
    () => data.projects.filter((p) => p.featured && p.caseStudy),
    [data.projects],
  );

  const baseUrl = "https://savondev.com";
  const localizedPortfolioUrl = `${baseUrl}/${locale}/portfolio`;

  useEffect(() => {
    if (!isHeroBgLoaded) return;

    const timer = window.setTimeout(() => {
      setIsPageReady(true);
    }, 180);

    return () => window.clearTimeout(timer);
  }, [isHeroBgLoaded]);

  return (
    <>
      <Head>
        <title>{t("portfolioPage.meta.title")}</title>
        <meta
          name="description"
          content={t("portfolioPage.meta.description")}
        />

        <meta property="og:title" content={t("portfolioPage.meta.ogTitle")} />
        <meta
          property="og:description"
          content={t("portfolioPage.meta.ogDescription")}
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={t("portfolioPage.meta.ogLocale")} />
        <meta property="og:url" content={localizedPortfolioUrl} />

        <meta property="og:image" content={`${baseUrl}/opengraph-image`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:image" content={`${baseUrl}/twitter-image`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={t("portfolioPage.meta.twitterTitle")}
        />
        <meta
          name="twitter:description"
          content={t("portfolioPage.meta.twitterDescription")}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              name: t("portfolioPage.schema.collection.name"),
              description: t("portfolioPage.schema.collection.description"),
              url: localizedPortfolioUrl,
              isPartOf: {
                "@type": "WebSite",
                name: t("portfolioPage.schema.website.name"),
                url: baseUrl,
              },
              about: {
                "@type": "Organization",
                name: t("portfolioPage.schema.organization.name"),
                url: baseUrl,
              },
              mainEntity: featuredProjects.map((project) => ({
                "@type": "CreativeWork",
                name: project.title,
                description: project.description,
                dateCreated: project.year,
                url: project.link || localizedPortfolioUrl,
              })),
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
                  name: t("portfolioPage.schema.breadcrumb.home"),
                  item: locale === "en" ? baseUrl : `${baseUrl}/${locale}`,
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: t("portfolioPage.schema.breadcrumb.portfolio"),
                  item: localizedPortfolioUrl,
                },
              ],
            }),
          }}
        />
      </Head>

      <GlobalLoader open={!isPageReady} />

      <main
        id="main"
        ref={containerRef}
        dir={isRTL ? "rtl" : "ltr"}
        aria-label={t("portfolioPage.aria.page")}
        aria-busy={!isPageReady}
        className="relative min-h-screen overflow-x-clip bg-[#020410] text-slate-100"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#050814_0%,#050818_35%,#020410_100%)]" />

          <div
            className="absolute -top-20 right-[-10%] h-[220px] w-[220px] rounded-full blur-2xl opacity-45
                       bg-[radial-gradient(circle,rgba(76,194,255,0.82),transparent_60%)]
                       md:-top-60 md:right-[-20%] md:h-[520px] md:w-[520px] md:blur-3xl md:opacity-60"
          />

          <div
            className="hidden md:block absolute top-[32%] left-[-22%] h-[640px] w-[640px] rounded-full blur-3xl opacity-50
                       bg-[radial-gradient(circle,rgba(58,123,255,0.75),transparent_60%)]"
          />

          <div
            className="hidden md:block absolute inset-0 opacity-[0.10]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(51,65,85,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(51,65,85,0.25) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        <div className="sr-only">
          <h1 id="portfolio-hero-title">{t("portfolioPage.aria.heroTitle")}</h1>
          <h2 id="portfolio-projects-title">
            {t("portfolioPage.aria.projectsTitle")}
          </h2>
          <h2 id="portfolio-case-studies-title">
            {t("portfolioPage.aria.caseStudiesTitle")}
          </h2>
          <h2 id="portfolio-cta-title">{t("portfolioPage.aria.ctaTitle")}</h2>
        </div>

        <section aria-labelledby="portfolio-hero-title">
          <PortfolioHero onBackgroundLoaded={() => setIsHeroBgLoaded(true)} />
        </section>

        {isPageReady && (
          <>
            <section aria-labelledby="portfolio-projects-title">
              <ProjectsGridSection projects={data.projects} />
            </section>

            <section aria-labelledby="portfolio-case-studies-title">
              <FeaturedCaseStudiesSection projects={featuredProjects} />
            </section>

            <section aria-labelledby="portfolio-cta-title">
              <PortfolioCTA />
            </section>
          </>
        )}
      </main>
    </>
  );
}