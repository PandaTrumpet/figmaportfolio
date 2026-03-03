// "use client";

// import { motion, useReducedMotion } from "motion/react";
// import { ArrowRight, Sparkles } from "lucide-react";
// import { PageContainer } from "../Layout/PageContainer";
// import Link from "next/link";
// import { useLocale } from "next-intl";
// const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

// export function CtaSection() {
//   const reduce = useReducedMotion();
//   const locale = useLocale();
//   return (
//     <section
//       className="
//         relative overflow-visible
//         pt-10 pb-10
//         md:pt-14 md:pb-14
//         lg:pt-16 lg:pb-16
//       "
//       aria-label="Call to action"
//     >
//       {/* BACKGROUND (full-bleed, clip only background) */}
//       <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
//         {/* background spots */}
//         <div className="absolute inset-0 opacity-60">
//           <div className="absolute -top-44 -left-40 h-96 w-96 bg-[radial-gradient(circle_at_center,_#3A7BFF55,_transparent_70%)] blur-3xl" />
//           <div className="absolute -bottom-52 -right-24 h-[520px] w-[520px] bg-[radial-gradient(circle_at_center,_#4CC2FF55,_transparent_70%)] blur-3xl" />
//         </div>

//         {/* grid overlay (softer) */}
//         <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:64px_64px]" />

//         {/* gentle fade so the section never “cuts” */}
//         <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-b from-transparent to-[#020410]" />
//       </div>

//       <PageContainer className="relative z-10 max-w-[1100px] text-center">
//         <motion.div
//           initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.75, ease: EASE }}
//           viewport={{ once: true, margin: "-120px" }}
//         >
//           {/* icon badge */}
//           <motion.div
//             className="
//               inline-flex items-center justify-center
//               h-14 w-14 md:h-16 md:w-16
//               rounded-2xl
//               border border-white/15
//               bg-[radial-gradient(circle_at_top,_#3A7BFF3b,_#050816)]
//               shadow-[0_0_55px_rgba(76,194,255,0.35)]
//               mb-6 md:mb-8
//             "
//             animate={reduce ? undefined : { y: [0, -6, 0] }}
//             transition={
//               reduce
//                 ? undefined
//                 : { duration: 3.2, repeat: Infinity, ease: "easeInOut" }
//             }
//             aria-hidden="true"
//           >
//             <Sparkles className="h-7 w-7 md:h-8 md:w-8 text-[#E8F2FF]" />
//           </motion.div>

//           <h2
//             className="mb-3 text-3xl
//   md:text-4xl
//   lg:text-5xl
//   xl:text-6xl
//   font-semibold
//   leading-tight
//   md:leading-[1.15]  text-slate-50   "
//           >
//             Давайте запустим сайт,
//             <br className="hidden sm:block" /> который приводит заявки
//           </h2>

//           <p
//             className="mx-auto mb-10  t  mt-4
//   text-white/75
//   leading-relaxed md:leading-[1.7]
//   max-w-[52ch] md:max-w-[60ch] lg:max-w-[66ch]
//   text-[clamp(0.98rem,0.55vw+0.88rem,1.15rem)]"
//           >
//             20 минут — и у вас будет понятный план: что сделать на сайте, как
//             вести в WhatsApp, и где подключить автоматизацию, чтобы не терять
//             клиентов.
//           </p>

//           <div className="flex flex-col items-center justify-center gap-4 sm:flex-row md:gap-5">
//             {/* Primary CTA */}

//             <Link href={`/${locale}/contact#contact-form`} scroll>
//               <motion.span
//                 className="
//           relative group inline-flex items-center justify-center gap-3
//           overflow-hidden rounded-full
//           px-8 py-4 md:px-10 md:py-5
//           text-sm md:text-base font-medium
//           text-[#050816]
//           shadow-[0_0_40px_rgba(76,194,255,0.55)]
//           hover:shadow-[0_0_65px_rgba(76,194,255,0.85)]
//           transition-shadow
//           focus-visible:outline-none
//           focus-visible:ring-2 focus-visible:ring-[#4CC2FF]/70
//           focus-visible:ring-offset-0
//           cursor-pointer
//         "
//                 whileHover={reduce ? undefined : { scale: 1.03 }}
//                 whileTap={reduce ? undefined : { scale: 0.97 }}
//                 transition={{ duration: 0.25, ease: "easeOut" }}
//                 aria-label="Обсудить задачу — перейти к форме контактов"
//               >
//                 {/* Main gradient */}
//                 <span className="absolute inset-0 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]" />

//                 {/* Depth / glass layer */}
//                 <span
//                   className="
//             pointer-events-none absolute inset-0
//             [background:linear-gradient(to_bottom,rgba(255,255,255,0.28),rgba(255,255,255,0.06)_45%,rgba(0,0,0,0.12))]
//             mix-blend-overlay
//           "
//                   aria-hidden="true"
//                 />

//                 {/* Hover highlight */}
//                 <span
//                   className="
//             pointer-events-none absolute inset-0 rounded-full
//             bg-white/10 opacity-0
//             group-hover:opacity-100 transition-opacity
//           "
//                   aria-hidden="true"
//                 />

//                 <span className="relative z-10">Обсудить задачу</span>
//                 <ArrowRight className="relative z-10 h-4 w-4 opacity-90 transition-transform group-hover:translate-x-1" />
//               </motion.span>
//             </Link>
//             {/* Secondary CTA */}

//             <Link href={`/${locale}/pricing#pricing-packages`} scroll>
//               <motion.span
//                 className="
//     relative group inline-flex items-center gap-2
//     rounded-full
//     px-6 py-3 md:px-7 md:py-4
//     text-sm md:text-base font-medium
//     text-[#F5EFE7]
//     backdrop-blur-sm
//     transition-all
//     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/25
//   "
//                 whileHover={reduce ? undefined : { y: -2 }}
//                 transition={{ duration: 0.22, ease: "easeOut" }}
//                 aria-label="Посмотреть кейсы"
//               >
//                 {/* Gradient border */}
//                 <span
//                   className="
//       pointer-events-none absolute inset-0 rounded-full p-[1px]
//       bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]
//     "
//                 >
//                   <span className="block h-full w-full rounded-full bg-[#050608]" />
//                 </span>

//                 {/* Soft inner glow */}
//                 <span
//                   className="
//       pointer-events-none absolute inset-0 rounded-full
//       bg-[radial-gradient(circle_at_center,rgba(76,194,255,0.25),transparent_60%)]
//       opacity-0 group-hover:opacity-100
//       transition-opacity
//     "
//                 />

//                 {/* Outer neon glow */}
//                 <span
//                   className="
//       pointer-events-none absolute inset-0 rounded-full
//       opacity-0 group-hover:opacity-100
//       transition-opacity
//       shadow-[0_0_34px_rgba(76,194,255,0.45)]
//     "
//                 />

//                 <span className="relative z-10">Посмотреть кейсы</span>
//                 {/* <ArrowRight className="relative z-10 h-4 w-4 opacity-90 transition-transform group-hover:translate-x-1" /> */}
//               </motion.span>
//             </Link>
//           </div>
//         </motion.div>
//       </PageContainer>

//       {/* decorative quotes (full-bleed) */}
//       <div
//         className="pointer-events-none absolute left-6 top-14 select-none text-[10rem] leading-none text-white opacity-[0.02] md:left-10 md:text-[14rem]"
//         aria-hidden="true"
//       >
//         &rdquo;
//       </div>
//       <div
//         className="pointer-events-none absolute bottom-10 right-6 select-none text-[10rem] leading-none text-white opacity-[0.02] md:right-10 md:text-[14rem]"
//         aria-hidden="true"
//       >
//         &rdquo;
//       </div>
//     </section>
//   );
// }
"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { PageContainer } from "../Layout/PageContainer";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { useId } from "react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

// motion wrapper for Next Link (anchor gets focus)
const MotionLink = motion(Link);

export function CtaSection() {
  const reduce = useReducedMotion();
  const locale = useLocale();
  const t = useTranslations("about");

  const headingId = useId();
  const descId = useId();

  return (
    <section
      aria-labelledby={headingId}
      aria-describedby={descId}
      className="
        relative overflow-visible
        pt-10 pb-10
        md:pt-14 md:pb-14
        lg:pt-16 lg:pb-16
      "
    >
      {/* BACKGROUND (decorative) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-60">
          <div className="absolute -top-44 -left-40 h-96 w-96 bg-[radial-gradient(circle_at_center,_#3A7BFF55,_transparent_70%)] blur-3xl" />
          <div className="absolute -bottom-52 -right-24 h-[520px] w-[520px] bg-[radial-gradient(circle_at_center,_#4CC2FF55,_transparent_70%)] blur-3xl" />
        </div>

        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:64px_64px]" />

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-b from-transparent to-[#020410]" />
      </div>

      <PageContainer className="relative z-10 max-w-[1100px] text-center">
        <motion.div
          initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: EASE }}
          viewport={{ once: true, margin: "-120px" }}
        >
          {/* icon badge (decorative) */}
          <motion.div
            className="
              inline-flex items-center justify-center
              h-14 w-14 md:h-16 md:w-16
              rounded-2xl
              border border-white/15
              bg-[radial-gradient(circle_at_top,_#3A7BFF3b,_#050816)]
              shadow-[0_0_55px_rgba(76,194,255,0.35)]
              mb-6 md:mb-8
            "
            animate={reduce ? undefined : { y: [0, -6, 0] }}
            transition={
              reduce
                ? undefined
                : { duration: 3.2, repeat: Infinity, ease: "easeInOut" }
            }
            aria-hidden="true"
          >
            <Sparkles
              className="h-7 w-7 md:h-8 md:w-8 text-[#E8F2FF]"
              aria-hidden="true"
            />
          </motion.div>

          <h2
            id={headingId}
            className="mb-3 text-3xl
              md:text-4xl
              lg:text-5xl
              xl:text-6xl
              font-semibold
              leading-tight
              md:leading-[1.15] text-slate-50"
          >
            {t("ctaSection.titleLine1")}
            <br className="hidden sm:block" />
            {t("ctaSection.titleLine2")}
          </h2>

          <p
            id={descId}
            className="mx-auto mb-10 mt-4
              text-white/75
              leading-relaxed md:leading-[1.7]
              max-w-[52ch] md:max-w-[60ch] lg:max-w-[66ch]
              text-[clamp(0.98rem,0.55vw+0.88rem,1.15rem)]"
          >
            {t("ctaSection.subtitle")}
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row md:gap-5">
            {/* Primary CTA */}
            <MotionLink
              href={`/${locale}/contact#contact-form`}
              scroll
              aria-label={t("ctaSection.primaryAria")}
              className="
                relative group inline-flex items-center justify-center gap-3
                overflow-hidden rounded-full
                px-8 py-4 md:px-10 md:py-5
                text-sm md:text-base font-medium
                text-[#050816]
                shadow-[0_0_40px_rgba(76,194,255,0.55)]
                hover:shadow-[0_0_65px_rgba(76,194,255,0.85)]
                transition-shadow
                focus-visible:outline-none
                focus-visible:ring-2 focus-visible:ring-[#4CC2FF]/70
                focus-visible:ring-offset-2 focus-visible:ring-offset-[#020410]
              "
              whileHover={reduce ? undefined : { scale: 1.03 }}
              whileTap={reduce ? undefined : { scale: 0.97 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]"
              />
              <span
                aria-hidden="true"
                className="
                  pointer-events-none absolute inset-0
                  [background:linear-gradient(to_bottom,rgba(255,255,255,0.28),rgba(255,255,255,0.06)_45%,rgba(0,0,0,0.12))]
                  mix-blend-overlay
                "
              />
              <span
                aria-hidden="true"
                className="
                  pointer-events-none absolute inset-0 rounded-full
                  bg-white/10 opacity-0
                  group-hover:opacity-100 transition-opacity
                "
              />

              <span className="relative z-10">
                {t("ctaSection.primaryLabel")}
              </span>
              <ArrowRight
                aria-hidden="true"
                className="relative z-10 h-4 w-4 opacity-90 transition-transform group-hover:translate-x-1"
              />
            </MotionLink>

            {/* Secondary CTA */}
            <MotionLink
              href={`/${locale}/pricing#pricing-packages`}
              scroll
              aria-label={t("ctaSection.secondaryAria")}
              className="
                relative group inline-flex items-center gap-2
                rounded-full
                px-6 py-3 md:px-7 md:py-4
                text-sm md:text-base font-medium
                text-[#F5EFE7]
                backdrop-blur-sm
                transition-all
                focus-visible:outline-none
                focus-visible:ring-2 focus-visible:ring-cyan-300/25
                focus-visible:ring-offset-2 focus-visible:ring-offset-[#020410]
              "
              whileHover={reduce ? undefined : { y: -2 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
              <span
                aria-hidden="true"
                className="
                  pointer-events-none absolute inset-0 rounded-full p-[1px]
                  bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]
                "
              >
                <span className="block h-full w-full rounded-full bg-[#050608]" />
              </span>

              <span
                aria-hidden="true"
                className="
                  pointer-events-none absolute inset-0 rounded-full
                  bg-[radial-gradient(circle_at_center,rgba(76,194,255,0.25),transparent_60%)]
                  opacity-0 group-hover:opacity-100
                  transition-opacity
                "
              />

              <span
                aria-hidden="true"
                className="
                  pointer-events-none absolute inset-0 rounded-full
                  opacity-0 group-hover:opacity-100
                  transition-opacity
                  shadow-[0_0_34px_rgba(76,194,255,0.45)]
                "
              />

              <span className="relative z-10">
                {t("ctaSection.secondaryLabel")}
              </span>
            </MotionLink>
          </div>
        </motion.div>
      </PageContainer>

      {/* decorative quotes */}
      <div
        className="pointer-events-none absolute left-6 top-14 select-none text-[10rem] leading-none text-white opacity-[0.02] md:left-10 md:text-[14rem]"
        aria-hidden="true"
      >
        &rdquo;
      </div>
      <div
        className="pointer-events-none absolute bottom-10 right-6 select-none text-[10rem] leading-none text-white opacity-[0.02] md:right-10 md:text-[14rem]"
        aria-hidden="true"
      >
        &rdquo;
      </div>
    </section>
  );
}