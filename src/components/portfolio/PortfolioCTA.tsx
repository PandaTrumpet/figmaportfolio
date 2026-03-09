// "use client";

// import { motion, useReducedMotion } from "motion/react";
// import { ArrowRight, Sparkles } from "lucide-react";
// import { PageContainer } from "../Layout/PageContainer";

// import Link from "next/link";
// import { useLocale } from "next-intl";
// export function PortfolioCTA() {
//   const reduce = useReducedMotion();
//   const locale = useLocale();
//   return (
//     <section
//       className="relative  pt-10 pb-10
//         md:pt-14 md:pb-14
//         lg:pt-16 lg:pb-16 overflow-visible text-[#F5EFE7]"
//     >
//       {/* LOCAL FX (clip only background, not content) */}
//       <div
//         className="
//           pointer-events-none absolute inset-0 -z-10 overflow-hidden
//           [mask-image:linear-gradient(to_bottom,transparent_0%,black_12%,black_88%,transparent_100%)]
//           [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_12%,black_88%,transparent_100%)]
//         "
//         aria-hidden="true"
//       >
//         {/* background spots */}
//         <div className="absolute inset-0 opacity-60">
//           <div className="absolute -top-44 -left-40 h-96 w-96 bg-[radial-gradient(circle_at_center,_#3A7BFF55,_transparent_70%)] blur-3xl" />
//           <div className="absolute -bottom-44 -right-32 h-[30rem] w-[30rem] bg-[radial-gradient(circle_at_center,_#4CC2FF55,_transparent_70%)] blur-3xl" />
//         </div>

//         {/* subtle grid (softer) */}
//         <div
//           className="absolute inset-0 opacity-[0.07]"
//           style={{
//             backgroundImage:
//               "linear-gradient(rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.10) 1px, transparent 1px)",
//             backgroundSize: "72px 72px",
//           }}
//         />
//       </div>

//       <PageContainer className="relative z-10 max-w-[1200px]">
//         <motion.div
//           initial={{ opacity: 0, y: 28 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
//           viewport={{ once: true }}
//           className="text-center"
//         >
//           {/* compact badge */}
//           <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl mb-8">
//             <Sparkles className="h-4 w-4 text-[#4CC2FF]" />
//             <span className="text-xs md:text-sm text-[#C7CEDF]">
//               Быстрый старт • Чёткий план • Без лишней бюрократии
//             </span>
//           </div>

//           <h2
//             className="text-3xl
//   md:text-4xl
//   lg:text-5xl
//   xl:text-6xl
//   font-semibold
//   leading-tight
//   md:leading-[1.15]  text-slate-50 mb-3 "
//           >
//             Давайте соберём проект, который приносит заявки
//           </h2>

//           <p
//             className="  mt-4
//   text-white/75
//   leading-relaxed md:leading-[1.7]
//   max-w-[52ch] md:max-w-[60ch] lg:max-w-[66ch]
//   text-[clamp(0.98rem,0.55vw+0.88rem,1.15rem)] mx-auto mb-10 "
//           >
//             Коротко обсудим задачу, предложим структуру и покажем, как это будет
//             работать: сайт, WhatsApp и автоматизация — как единая система.
//           </p>

//           <Link href={`/${locale}/contact#contact-form`} scroll>
//             <motion.span
//               className="
//           group relative inline-flex items-center justify-center
//           overflow-hidden rounded-full
//           px-10 py-3.5 md:px-12 md:py-4
//           text-sm md:text-base font-medium
//           text-[#050816]
//           shadow-[0_0_40px_rgba(76,194,255,0.55)]
//           hover:shadow-[0_0_65px_rgba(76,194,255,0.85)]
//           transition-shadow
//           cursor-pointer
//         "
//               whileHover={reduce ? undefined : { scale: 1.03 }}
//               whileTap={reduce ? undefined : { scale: 0.97 }}
//             >
//               {/* Main gradient */}
//               <span className="absolute inset-0 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]" />

//               {/* Depth / glass layer */}
//               <span
//                 className="
//             pointer-events-none absolute inset-0
//             [background:linear-gradient(to_bottom,rgba(255,255,255,0.28),rgba(255,255,255,0.06)_45%,rgba(0,0,0,0.12))]
//             mix-blend-overlay
//           "
//                 aria-hidden="true"
//               />

//               {/* Hover highlight */}
//               <span
//                 className="
//             pointer-events-none absolute inset-0 rounded-full
//             bg-white/10 opacity-0
//             group-hover:opacity-100 transition-opacity
//           "
//                 aria-hidden="true"
//               />

//               <span className="relative z-10 inline-flex items-center gap-3">
//                 <span>Обсудить задачу</span>
//                 <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
//               </span>
//             </motion.span>
//           </Link>
//         </motion.div>
//       </PageContainer>

//       {/* floating shapes */}
//       <motion.div
//         className="pointer-events-none absolute top-10 left-6 md:left-10 z-0 h-20 w-20 rounded-3xl border border-[#3A7BFF33] bg-[radial-gradient(circle_at_top,_#3A7BFF22,_transparent_70%)] opacity-45"
//         animate={reduce ? undefined : { rotate: 360, scale: [1, 1.08, 1] }}
//         transition={
//           reduce
//             ? undefined
//             : {
//                 rotate: { duration: 28, repeat: Infinity, ease: "linear" },
//                 scale: { duration: 4.2, repeat: Infinity, ease: "easeInOut" },
//               }
//         }
//         aria-hidden="true"
//       />
//       <motion.div
//         className="pointer-events-none absolute bottom-8 right-6 md:right-10 z-0 h-28 w-28 rounded-[36px] border border-[#4CC2FF33] bg-[radial-gradient(circle_at_top,_#4CC2FF22,_transparent_70%)] opacity-35"
//         animate={reduce ? undefined : { rotate: -360, scale: [1, 1.06, 1] }}
//         transition={
//           reduce
//             ? undefined
//             : {
//                 rotate: { duration: 36, repeat: Infinity, ease: "linear" },
//                 scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
//               }
//         }
//         aria-hidden="true"
//       />
//     </section>
//   );
// }

"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { PageContainer } from "../Layout/PageContainer";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function PortfolioCTA() {
  const reduce = useReducedMotion();
  const locale = useLocale();
  const t = useTranslations("portfolioCTA");

  return (
    <section
      className="relative pt-10 pb-10 md:pt-14 md:pb-14 lg:pt-16 lg:pb-16 overflow-visible text-[#F5EFE7]"
      aria-labelledby="portfolio-cta-heading"
      aria-describedby="portfolio-cta-description"
    >
      <div
        className="
          pointer-events-none absolute inset-0 -z-10 overflow-hidden
          [mask-image:linear-gradient(to_bottom,transparent_0%,black_12%,black_88%,transparent_100%)]
          [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_12%,black_88%,transparent_100%)]
        "
        aria-hidden="true"
      >
        <div className="absolute inset-0 opacity-60">
          <div className="absolute -top-44 -left-40 h-96 w-96 bg-[radial-gradient(circle_at_center,_#3A7BFF55,_transparent_70%)] blur-3xl" />
          <div className="absolute -bottom-44 -right-32 h-[30rem] w-[30rem] bg-[radial-gradient(circle_at_center,_#4CC2FF55,_transparent_70%)] blur-3xl" />
        </div>

        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.10) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      <PageContainer className="relative z-10 max-w-[1200px]">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 28 }}
          whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: reduce ? 0 : 0.7, ease: EASE }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl mb-8">
            <Sparkles className="h-4 w-4 text-[#4CC2FF]" aria-hidden="true" />
            <span className="text-xs md:text-sm text-[#C7CEDF]">
              {t("badge")}
            </span>
          </div>

          <h2
            id="portfolio-cta-heading"
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight md:leading-[1.15] text-slate-50 mb-3"
          >
            {t("title")}
          </h2>

          <p
            id="portfolio-cta-description"
            className="mt-4 text-white/75 leading-relaxed md:leading-[1.7] max-w-[52ch] md:max-w-[60ch] lg:max-w-[66ch] text-[clamp(0.98rem,0.55vw+0.88rem,1.15rem)] mx-auto mb-10"
          >
            {t("description")}
          </p>

          <Link
            href={`/${locale}/contact#contact-form`}
            scroll
            aria-label={t("ctaAria")}
            className="inline-flex"
          >
            <motion.span
              className="
                group relative inline-flex items-center justify-center
                overflow-hidden rounded-full
                px-10 py-3.5 md:px-12 md:py-4
                text-sm md:text-base font-medium
                text-[#050816]
                shadow-[0_0_40px_rgba(76,194,255,0.55)]
                hover:shadow-[0_0_65px_rgba(76,194,255,0.85)]
                transition-shadow
                cursor-pointer
                focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8FDBFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050816]
              "
              whileHover={reduce ? undefined : { scale: 1.03 }}
              whileTap={reduce ? undefined : { scale: 0.97 }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]" />

              <span
                className="
                  pointer-events-none absolute inset-0
                  [background:linear-gradient(to_bottom,rgba(255,255,255,0.28),rgba(255,255,255,0.06)_45%,rgba(0,0,0,0.12))]
                  mix-blend-overlay
                "
                aria-hidden="true"
              />

              <span
                className="
                  pointer-events-none absolute inset-0 rounded-full
                  bg-white/10 opacity-0
                  group-hover:opacity-100 transition-opacity
                "
                aria-hidden="true"
              />

              <span className="relative z-10 inline-flex items-center gap-3">
                <span>{t("cta")}</span>
                <ArrowRight
                  className="h-5 w-5 transition-transform group-hover:translate-x-2"
                  aria-hidden="true"
                />
              </span>
            </motion.span>
          </Link>
        </motion.div>
      </PageContainer>

      <motion.div
        className="pointer-events-none absolute top-10 left-6 md:left-10 z-0 h-20 w-20 rounded-3xl border border-[#3A7BFF33] bg-[radial-gradient(circle_at_top,_#3A7BFF22,_transparent_70%)] opacity-45"
        animate={reduce ? undefined : { rotate: 360, scale: [1, 1.08, 1] }}
        transition={
          reduce
            ? undefined
            : {
                rotate: { duration: 28, repeat: Infinity, ease: "linear" },
                scale: { duration: 4.2, repeat: Infinity, ease: "easeInOut" },
              }
        }
        aria-hidden="true"
      />

      <motion.div
        className="pointer-events-none absolute bottom-8 right-6 md:right-10 z-0 h-28 w-28 rounded-[36px] border border-[#4CC2FF33] bg-[radial-gradient(circle_at_top,_#4CC2FF22,_transparent_70%)] opacity-35"
        animate={reduce ? undefined : { rotate: -360, scale: [1, 1.06, 1] }}
        transition={
          reduce
            ? undefined
            : {
                rotate: { duration: 36, repeat: Infinity, ease: "linear" },
                scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
              }
        }
        aria-hidden="true"
      />
    </section>
  );
}