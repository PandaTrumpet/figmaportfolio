// "use client";

// import { PageContainer } from "@/src/components/Layout/PageContainer";
// import { useTranslations, useLocale } from "next-intl";

// export default function Privacy() {
//   const t = useTranslations("privacy");
//   const locale = useLocale();
//   const isRTL = locale === "he";

//   return (
//     <main dir={isRTL ? "rtl" : "ltr"} className="text-[#F5EFE7]">
//       <section className="py-16 md:py-20 lg:py-24">
//         <PageContainer>
//           <article className="max-w-4xl mx-auto space-y-10">
//             <header className="space-y-4">
//               <h1 className="text-3xl md:text-4xl font-semibold">
//                 {t("title")}
//               </h1>
//               <p className="text-sm opacity-70">{t("updated")}</p>
//             </header>

//             {/* INTRO */}
//             <section className="space-y-4">
//               <p>{t("intro.p1")}</p>
//               <p>{t("intro.p2")}</p>
//             </section>

//             {/* DATA COLLECTED */}
//             <section className="space-y-4">
//               <h2 className="text-xl font-semibold">{t("data.title")}</h2>

//               <ul className="list-disc pl-6 space-y-2">
//                 <li>{t("data.name")}</li>
//                 <li>{t("data.email")}</li>
//                 <li>{t("data.phone")}</li>
//                 <li>{t("data.message")}</li>
//                 <li>{t("data.analytics")}</li>
//               </ul>
//             </section>

//             {/* PURPOSE */}
//             <section className="space-y-4">
//               <h2 className="text-xl font-semibold">{t("purpose.title")}</h2>

//               <ul className="list-disc pl-6 space-y-2">
//                 <li>{t("purpose.respond")}</li>
//                 <li>{t("purpose.communication")}</li>
//                 <li>{t("purpose.improve")}</li>
//                 <li>{t("purpose.security")}</li>
//               </ul>
//             </section>

//             {/* STORAGE */}
//             <section className="space-y-4">
//               <h2 className="text-xl font-semibold">{t("storage.title")}</h2>

//               <p>{t("storage.text")}</p>
//             </section>

//             {/* THIRD PARTIES */}
//             <section className="space-y-4">
//               <h2 className="text-xl font-semibold">{t("third.title")}</h2>

//               <p>{t("third.text")}</p>
//             </section>

//             {/* COOKIES */}
//             <section className="space-y-4">
//               <h2 className="text-xl font-semibold">{t("cookies.title")}</h2>

//               <p>{t("cookies.text")}</p>
//             </section>

//             {/* USER RIGHTS */}
//             <section className="space-y-4">
//               <h2 className="text-xl font-semibold">{t("rights.title")}</h2>

//               <p>{t("rights.text")}</p>
//             </section>

//             {/* CONTACT */}
//             <section className="space-y-4">
//               <h2 className="text-xl font-semibold">{t("contact.title")}</h2>

//               <p>{t("contact.text")}</p>
//             </section>
//           </article>
//         </PageContainer>
//       </section>
//     </main>
//   );
// }

"use client";

import Head from "next/head";
import { useLocale, useTranslations } from "next-intl";
import { useRef } from "react";

import PrivacyPolicyPage from "@/src/components/legal/PrivacyPolicyPage";

export default function PrivacyPage() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const locale = useLocale();
  const isRTL = locale === "he";
  const t = useTranslations("privacy");

  const baseUrl = "https://savondev.com";
  const localizedUrl =
    locale === "en" ? `${baseUrl}/privacy` : `${baseUrl}/${locale}/privacy`;

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
              sameAs: [],
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

        <section aria-label={t("aria.contentTitle")}>
          <PrivacyPolicyPage />
        </section>
      </main>
    </>
  );
}