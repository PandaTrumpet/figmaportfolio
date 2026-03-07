// "use client";

// import Head from "next/head";
// import { useLocale, useTranslations } from "next-intl";
// import { useRef } from "react";

// import CookiePolicyPage from "@/src/components/legal/CookiePolicyPage";

// export default function CookiesPage() {
//   const containerRef = useRef<HTMLDivElement | null>(null);

//   const locale = useLocale();
//   const isRTL = locale === "he";
//   const t = useTranslations("cookies");

//   const baseUrl = "https://savondev.com";
//   const localizedUrl =
//     locale === "en" ? `${baseUrl}/cookies` : `${baseUrl}/${locale}/cookies`;

//   return (
//     <>
//       <Head>
//         <title>{t("meta.title")}</title>
//         <meta name="description" content={t("meta.description")} />

//         <meta property="og:title" content={t("meta.ogTitle")} />
//         <meta property="og:description" content={t("meta.ogDescription")} />
//         <meta property="og:type" content="article" />
//         <meta property="og:locale" content={t("meta.ogLocale")} />
//         <meta property="og:url" content={localizedUrl} />

//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content={t("meta.twitterTitle")} />
//         <meta
//           name="twitter:description"
//           content={t("meta.twitterDescription")}
//         />

//         <link rel="canonical" href={localizedUrl} />

//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify({
//               "@context": "https://schema.org",
//               "@type": "WebPage",
//               name: t("schema.page.name"),
//               description: t("schema.page.description"),
//               url: localizedUrl,
//               inLanguage: locale,
//               isPartOf: {
//                 "@type": "WebSite",
//                 name: "SavonDev",
//                 url: baseUrl,
//               },
//               about: {
//                 "@type": "Thing",
//                 name: t("schema.page.about"),
//               },
//             }),
//           }}
//         />

//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify({
//               "@context": "https://schema.org",
//               "@type": "ProfessionalService",
//               name: t("schema.organization.name"),
//               description: t("schema.organization.description"),
//               url: baseUrl,
//               areaServed: {
//                 "@type": "Country",
//                 name: "Israel",
//               },
//               address: {
//                 "@type": "PostalAddress",
//                 addressCountry: "IL",
//                 addressLocality: "Tel Aviv",
//               },
//               contactPoint: {
//                 "@type": "ContactPoint",
//                 contactType: t("schema.organization.contactType"),
//                 email: t("schema.organization.email"),
//                 telephone: t("schema.organization.telephone"),
//                 areaServed: "IL",
//                 availableLanguage: t.raw(
//                   "schema.organization.availableLanguages",
//                 ),
//               },
//               sameAs: [],
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
//             className="absolute top-[35%] left-[-20%] h-[620px] w-[620px] rounded-full blur-3xl opacity-50
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

//         <section aria-label={t("aria.contentTitle")}>
//           <CookiePolicyPage />
//         </section>
//       </main>
//     </>
//   );
// }

"use client";

import Head from "next/head";
import { useLocale, useTranslations } from "next-intl";
import { useRef } from "react";

import CookiePolicyPage from "@/src/components/legal/CookiePolicyPage";

export default function CookiesPage() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const locale = useLocale();
  const isRTL = locale === "he";
  const t = useTranslations("cookies");

  const baseUrl = "https://savondev.com";

  const localizedUrl =
    locale === "en" ? `${baseUrl}/cookies` : `${baseUrl}/${locale}/cookies`;

  return (
    <>
      <Head>
        <title>{t("meta.title")}</title>
        <meta name="description" content={t("meta.description")} />

        <meta property="og:title" content={t("meta.ogTitle")} />
        <meta property="og:description" content={t("meta.ogDescription")} />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content={t("meta.ogLocale")} />
        <meta property="og:url" content={localizedUrl} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t("meta.twitterTitle")} />
        <meta
          name="twitter:description"
          content={t("meta.twitterDescription")}
        />

        <link rel="canonical" href={localizedUrl} />

        {/* WebPage schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: t("schema.page.name"),
              description: t("schema.page.description"),
              url: localizedUrl,
              inLanguage: locale,
              isPartOf: {
                "@type": "WebSite",
                name: "SavonDev",
                url: baseUrl,
              },
              about: {
                "@type": "Thing",
                name: t("schema.page.about"),
              },
            }),
          }}
        />

        {/* Organization schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: t("schema.organization.name"),
              description: t("schema.organization.description"),
              url: baseUrl,
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
        {/* GLOBAL BACKGROUND */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#050814_0%,#050818_35%,#020410_100%)]" />

          <div className="absolute -top-60 right-[-20%] h-[520px] w-[520px] rounded-full blur-3xl opacity-60 bg-[radial-gradient(circle,rgba(76,194,255,0.85),transparent_60%)]" />

          <div className="absolute top-[35%] left-[-20%] h-[620px] w-[620px] rounded-full blur-3xl opacity-50 bg-[radial-gradient(circle,rgba(58,123,255,0.75),transparent_60%)]" />

          <div
            className="absolute inset-0 opacity-[0.10]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(51,65,85,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(51,65,85,0.25) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        <section aria-label={t("aria.contentTitle")}>
          <CookiePolicyPage />
        </section>
      </main>
    </>
  );
}