// "use client";

// import { useId, useRef } from "react";
// import { motion, useInView, useReducedMotion } from "motion/react";
// import { Cookie, Settings, BarChart, Shield, Globe, Mail } from "lucide-react";

// import { useLocale, useTranslations } from "next-intl";
// import { PageContainer } from "@/src/components/Layout/PageContainer";

// const sections = [
//   { id: "whatAreCookies", icon: Cookie },
//   { id: "whyWeUse", icon: Settings },
//   { id: "analytics", icon: BarChart },
//   { id: "thirdParty", icon: Globe },
//   { id: "control", icon: Shield },
//   { id: "contact", icon: Mail },
// ] as const;

// function CookieCard({
//   section,
//   index,
//   isInView,
// }: {
//   section: (typeof sections)[number];
//   index: number;
//   isInView: boolean;
// }) {
//   const t = useTranslations("cookies");
//   const reduce = useReducedMotion();
//   const Icon = section.icon;

//   const titleId = useId();
//   const descId = useId();

//   const items = t.raw(`${section.id}.items`) as string[] | undefined;

//   return (
//     <motion.article
//       className="rounded-3xl border border-white/10 bg-[#050816] p-6 md:p-7 shadow-[0_26px_80px_rgba(0,0,0,0.85)]"
//       initial={reduce ? { opacity: 1 } : { opacity: 0, y: 40 }}
//       animate={isInView ? { opacity: 1, y: 0 } : undefined}
//       transition={{ duration: 0.6, delay: index * 0.08 }}
//       aria-labelledby={titleId}
//       aria-describedby={descId}
//     >
//       <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-white/15">
//         <Icon className="h-6 w-6 text-[#4CC2FF]" />
//       </div>

//       <h2 id={titleId} className="text-xl font-semibold text-white mb-3">
//         {t(`${section.id}.title`)}
//       </h2>

//       <p id={descId} className="text-white/70 mb-4">
//         {t(`${section.id}.text`)}
//       </p>

//       {items && (
//         <ul className="space-y-2">
//           {items.map((item, i) => (
//             <li key={i} className="text-sm text-white/70">
//               • {item}
//             </li>
//           ))}
//         </ul>
//       )}
//     </motion.article>
//   );
// }

// export default function CookiePolicyPage() {
//   const t = useTranslations("cookies");
//   const locale = useLocale();
//   const isRTL = locale === "he";

//   const reduce = useReducedMotion();
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });

//   const titleId = useId();
//   const descId = useId();

//   return (
//     <section
//       ref={ref}
//       dir={isRTL ? "rtl" : "ltr"}
//       aria-labelledby={titleId}
//       aria-describedby={descId}
//       className="relative pt-16 pb-16"
//     >
//       <PageContainer>
//         <motion.header
//           className="mb-16 max-w-3xl"
//           initial={reduce ? { opacity: 1 } : { opacity: 0, y: 40 }}
//           animate={isInView ? { opacity: 1, y: 0 } : undefined}
//         >
//           <span className="text-[#4CC2FF] text-sm">{t("eyebrow")}</span>

//           <h1 id={titleId} className="mt-3 text-4xl font-semibold text-white">
//             {t("title")}
//           </h1>

//           <p id={descId} className="mt-4 text-white/70 leading-relaxed">
//             {t("intro")}
//           </p>
//         </motion.header>

//         <div className="grid md:grid-cols-2 gap-8">
//           {sections.map((section, index) => (
//             <CookieCard
//               key={section.id}
//               section={section}
//               index={index}
//               isInView={isInView}
//             />
//           ))}
//         </div>
//       </PageContainer>
//     </section>
//   );
// }

"use client";

import { useId, useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

import { Cookie, Settings, BarChart, Globe, Shield, Mail } from "lucide-react";

import { useLocale, useTranslations } from "next-intl";
import { PageContainer } from "@/src/components/Layout/PageContainer";

const sections = [
  { id: "whatAreCookies", icon: Cookie },
  { id: "whyWeUse", icon: Settings },
  { id: "analytics", icon: BarChart },
  { id: "thirdParty", icon: Globe },
  { id: "control", icon: Shield },
  { id: "contact", icon: Mail },
] as const;

export default function CookiePolicyPage() {
  const t = useTranslations("cookies");
  const locale = useLocale();
  const isRTL = locale === "he";

  const reduce = useReducedMotion();

  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-120px",
  });

  const titleId = useId();
  const descId = useId();

  return (
    <section
      ref={ref}
      dir={isRTL ? "rtl" : "ltr"}
      aria-labelledby={titleId}
      aria-describedby={descId}
      className="relative pt-16 pb-16 md:pt-20 md:pb-20"
    >
      <PageContainer>
        <motion.header
          className="max-w-3xl mb-16"
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm text-[#4CC2FF]">{t("eyebrow")}</span>

          <h1
            id={titleId}
            className="mt-3 text-4xl md:text-5xl font-semibold text-white"
          >
            {t("title")}
          </h1>

          <p id={descId} className="mt-4 text-white/70 leading-relaxed">
            {t("intro")}
          </p>

          <p className="mt-3 text-sm text-white/50">{t("updated")}</p>
        </motion.header>

        <div
          className="grid md:grid-cols-2 gap-8"
          role="list"
          aria-label={t("aria.sections")}
        >
          {sections.map((section, index) => {
            const Icon = section.icon;

            return (
              <motion.article
                key={section.id}
                role="listitem"
                className="rounded-3xl border border-white/10 bg-[#050816] p-6 md:p-7 shadow-[0_26px_80px_rgba(0,0,0,0.85)]"
                initial={reduce ? { opacity: 1 } : { opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : undefined}
                transition={{
                  duration: 0.6,
                  delay: index * 0.07,
                }}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-white/15">
                  <Icon className="h-6 w-6 text-[#4CC2FF]" />
                </div>

                <h2 className="text-xl font-semibold text-white mb-3">
                  {t(`${section.id}.title`)}
                </h2>

                <p className="text-white/70 mb-4">{t(`${section.id}.text`)}</p>

                {t.raw(`${section.id}.items`) && (
                  <ul className="space-y-2">
                    {t
                      .raw(`${section.id}.items`)
                      .map((item: string, i: number) => (
                        <li key={i} className="text-sm text-white/70">
                          • {item}
                        </li>
                      ))}
                  </ul>
                )}
              </motion.article>
            );
          })}
        </div>
      </PageContainer>
    </section>
  );
}