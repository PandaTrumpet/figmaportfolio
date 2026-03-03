// "use client";

// import { motion, useReducedMotion } from "motion/react";
// import { PageContainer } from "../Layout/PageContainer";
// import Link from "next/link";
// import { useLocale } from "next-intl";
// export function ServicesCTA() {
//   const reduce = useReducedMotion();
//   const locale = useLocale();
//   return (
//     <section
//       className="relative overflow-visible  pt-10 pb-10
//         md:pt-14 md:pb-14
//         lg:pt-16 lg:pb-16 text-center"
//     >
//       {/* BACKGROUND (full-bleed, без “шва”) */}
//       <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
//         {/* subtle glows */}
//         <div className="absolute inset-0 opacity-70">
//           <div className="absolute -top-40 -left-40 h-[560px] w-[560px] bg-[radial-gradient(circle_at_center,_#3A7BFF44,_transparent_70%)] blur-3xl" />
//           <div className="absolute -bottom-52 -right-44 h-[680px] w-[680px] bg-[radial-gradient(circle_at_center,_#4CC2FF33,_transparent_70%)] blur-3xl" />
//         </div>

//         {/* soft grid (очень нежно) */}
//         <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:80px_80px]" />

//         {/* anti-seam fades (под общий фон страницы) */}
//         <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#020410] to-transparent" />
//         <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#020410] to-transparent" />
//       </div>

//       <PageContainer className="relative z-10">
//         <motion.div
//           initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-120px" }}
//           transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
//           className="max-w-[800px] mx-auto"
//         >
//           <h2
//             className="text-3xl
//   md:text-4xl
//   lg:text-5xl
//   xl:text-6xl
//   font-semibold
//   leading-tight
//   md:leading-[1.15]  text-slate-50 mb-3"
//           >
//             Не уверены, что выбрать?
//           </h2>

//           <p
//             className=" text-base  mb-10     mt-4
//   text-white/75
//   leading-relaxed md:leading-[1.7]

//   text-[clamp(0.98rem,0.55vw+0.88rem,1.15rem)]"
//           >
//             Мы подскажем оптимальный формат под ваш бизнес за 15 минут — без
//             обязательств и “продажных” разговоров.
//           </p>

//           <Link href={`/${locale}/contact#contact-form`} scroll>
//             <motion.span
//               className="
//           relative group inline-flex items-center justify-center
//           overflow-hidden rounded-full
//           px-10 py-4
//           font-medium text-[#050816]
//           shadow-[0_0_40px_rgba(76,194,255,0.55)]
//           hover:shadow-[0_0_65px_rgba(76,194,255,0.85)]
//           transition-shadow
//           focus-visible:outline-none
//           focus-visible:ring-2 focus-visible:ring-[#4CC2FF]/70
//           focus-visible:ring-offset-0
//           cursor-pointer
//         "
//               whileHover={reduce ? undefined : { scale: 1.03 }}
//               whileTap={reduce ? undefined : { scale: 0.97 }}
//               transition={{ duration: 0.22, ease: "easeOut" }}
//               aria-label="Обсудить задачу — перейти к форме контактов"
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

//               <span className="relative z-10">Обсудить задачу</span>
//             </motion.span>
//           </Link>
//         </motion.div>
//       </PageContainer>
//     </section>
//   );
// }

"use client";

import { motion, useReducedMotion } from "motion/react";
import { PageContainer } from "../Layout/PageContainer";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { useId } from "react";

const MotionLink = motion(Link);
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function ServicesCTA() {
  const reduce = useReducedMotion();
  const locale = useLocale();
  const t = useTranslations("services");

  const titleId = useId();
  const descId = useId();

  return (
    <section
      aria-labelledby={titleId}
      aria-describedby={descId}
      className="
        relative overflow-visible
        pt-10 pb-10
        md:pt-14 md:pb-14
        lg:pt-16 lg:pb-16
        text-center
      "
    >
      {/* BACKGROUND (decorative) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-70">
          <div className="absolute -top-40 -left-40 h-[560px] w-[560px] bg-[radial-gradient(circle_at_center,_#3A7BFF44,_transparent_70%)] blur-3xl" />
          <div className="absolute -bottom-52 -right-44 h-[680px] w-[680px] bg-[radial-gradient(circle_at_center,_#4CC2FF33,_transparent_70%)] blur-3xl" />
        </div>

        <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:80px_80px]" />

        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#020410] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#020410] to-transparent" />
      </div>

      <PageContainer className="relative z-10">
        <motion.div
          initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.65, ease: EASE }}
          className="max-w-[800px] mx-auto"
        >
          <h2
            id={titleId}
            className="
              text-3xl md:text-4xl lg:text-5xl xl:text-6xl
              font-semibold leading-tight md:leading-[1.15]
              text-slate-50 mb-3
            "
          >
            {t("cta.title")}
          </h2>

          <p
            id={descId}
            className="
              mb-10 mt-4
              text-white/75
              leading-relaxed md:leading-[1.7]
              text-[clamp(0.98rem,0.55vw+0.88rem,1.15rem)]
            "
          >
            {t("cta.subtitle")}
          </p>

          <MotionLink
            href={`/${locale}/contact#contact-form`}
            scroll
            aria-label={t("cta.primaryAria")}
            className="
              relative group inline-flex items-center justify-center
              overflow-hidden rounded-full
              px-10 py-4
              font-medium text-[#050816]
              shadow-[0_0_40px_rgba(76,194,255,0.55)]
              hover:shadow-[0_0_65px_rgba(76,194,255,0.85)]
              transition-shadow
              focus-visible:outline-none
              focus-visible:ring-2 focus-visible:ring-[#4CC2FF]/70
              focus-visible:ring-offset-2 focus-visible:ring-offset-[#020410]
            "
            whileHover={reduce ? undefined : { scale: 1.03 }}
            whileTap={reduce ? undefined : { scale: 0.97 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            {/* gradient */}
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]"
            />

            {/* glass */}
            <span
              aria-hidden="true"
              className="
                pointer-events-none absolute inset-0
                [background:linear-gradient(to_bottom,rgba(255,255,255,0.28),rgba(255,255,255,0.06)_45%,rgba(0,0,0,0.12))]
                mix-blend-overlay
              "
            />

            {/* hover highlight */}
            <span
              aria-hidden="true"
              className="
                pointer-events-none absolute inset-0 rounded-full
                bg-white/10 opacity-0
                group-hover:opacity-100 transition-opacity
              "
            />

            <span className="relative z-10">{t("cta.primary")}</span>
          </MotionLink>
        </motion.div>
      </PageContainer>
    </section>
  );
}