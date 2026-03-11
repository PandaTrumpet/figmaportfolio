// Первый вариант

// "use client";

// import { motion, useReducedMotion } from "motion/react";
// import { PageContainer } from "../Layout/PageContainer";
// import Image from "next/image";
// import { useTranslations } from "next-intl";
// import hero from '../../../public/PortfolioHero.avif'
// const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

// export function PortfolioHero() {
//   const t = useTranslations("portfolioHero");
//   const reduce = useReducedMotion();

//   return (
//     <section
//       className="
//         relative min-h-[100svh] flex items-center
//         pt-22 pb-12
//         md:pt-28 md:pb-16
//         lg:pt-30 lg:pb-20
//         overflow-visible
//       "
//       aria-labelledby="portfolio-hero-heading"
//       aria-describedby="portfolio-hero-description"
//     >
//       <div
//         className="pointer-events-none absolute inset-0 overflow-hidden z-0"
//         aria-hidden="true"
//       >
//         <div className="absolute inset-0">
//           <Image
//             src={hero}
//             alt="Portfolio page hero background"
//             fill
//             priority
//             sizes="(max-width: 768px) 100vw, (max-width: 1400px) 100vw, 1400px"
//             className="object-cover opacity-55 saturate-[0.85]"
//           />
//         </div>

//         <div className="absolute inset-0 bg-gradient-to-b from-[#050814]/45 via-transparent to-transparent" />

//         <div className="absolute inset-0 opacity-70">
//           <div className="absolute -top-44 -left-44 h-[520px] w-[520px] bg-[radial-gradient(circle_at_center,_#3A7BFF44,_transparent_72%)] blur-3xl" />
//           <div className="absolute top-[40%] -right-52 h-[680px] w-[680px] bg-[radial-gradient(circle_at_center,_#4CC2FF33,_transparent_72%)] blur-3xl" />
//         </div>

//         <div className="absolute inset-0 opacity-[0.08] mix-blend-soft-light">
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(255,255,255,0.08),_transparent_40%),radial-gradient(circle_at_70%_60%,_rgba(255,255,255,0.06),_transparent_45%)]" />
//         </div>

//         <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#020410]" />
//       </div>

//       <PageContainer className="relative z-10 w-full max-w-[1200px]">
//         <div className="min-h-[calc(100svh-6rem)] grid place-items-center">
//           <motion.div
//             initial={reduce ? false : { opacity: 0, y: 40 }}
//             animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
//             transition={{ duration: reduce ? 0 : 0.8, ease: EASE }}
//             className="w-full flex flex-col items-center text-center"
//           >
//             <p
//               className="
//                 mb-4 md:mb-5
//                 text-[0.78rem] sm:text-[0.82rem] md:text-[0.9rem]
//                 font-medium uppercase tracking-[0.24em]
//                 text-[#8FDBFF]
//               "
//             >
//               {t("eyebrow")}
//             </p>

//             <h1
//               id="portfolio-hero-heading"
//               className="
//                 font-semibold tracking-tight text-balance
//                 leading-[0.98]
//                 mb-6 md:mb-8
//                 text-[#F2F4FA]

//                 max-w-[18ch]
//                 sm:max-w-[20ch]
//                 lg:max-w-[22ch]
//                 mx-auto

//                 text-[clamp(2.35rem,5.8vw,4.8rem)]
//                 md:text-[clamp(2.9rem,5.0vw,5.2rem)]
//                 lg:text-[clamp(3.1rem,4.2vw,5.3rem)]
//               "
//             >
//               {t("title")}
//             </h1>

//             <p
//               id="portfolio-hero-description"
//               className="
//                 leading-relaxed
//                 mb-10 md:mb-12
//                 text-white
//                 max-w-[48ch] md:max-w-[52ch] lg:max-w-[58ch]
//                 text-[clamp(1rem,1.4vw+0.6rem,1.35rem)]
//               "
//             >
//               {t("description")}
//             </p>
//           </motion.div>
//         </div>
//       </PageContainer>

//       <motion.div
//         className="pointer-events-none absolute top-20 right-16 w-40 h-40 rounded-3xl border border-[#3A7BFF33] bg-[radial-gradient(circle_at_top,_#3A7BFF22,_transparent_70%)] opacity-40"
//         animate={reduce ? undefined : { rotate: 360 }}
//         transition={
//           reduce
//             ? undefined
//             : { duration: 30, repeat: Infinity, ease: "linear" }
//         }
//         aria-hidden="true"
//       />

//       <div
//         className="pointer-events-none absolute -top-40 -left-40 h-96 w-96
//         bg-[radial-gradient(circle_at_center,_#4CC2FF33,_transparent_70%)] blur-3xl opacity-60"
//         aria-hidden="true"
//       />
//     </section>
//   );
// }

// Второй вариант (после рефакторинга и оптимизации). Рабочий
// "use client";

// import { motion, useReducedMotion } from "motion/react";
// import { PageContainer } from "../Layout/PageContainer";
// import Image from "next/image";
// import { useTranslations } from "next-intl";
// import hero from "../../../public/PortfolioHero.avif";

// const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

// export function PortfolioHero() {
//   const t = useTranslations("portfolioHero");
//   const reduce = useReducedMotion();

//   return (
//     <section
//       className="
//         relative min-h-[100svh] flex items-center
//         pt-22 pb-12
//         md:pt-28 md:pb-16
//         lg:pt-30 lg:pb-20
//         overflow-visible
//       "
//       aria-labelledby="portfolio-hero-heading"
//       aria-describedby="portfolio-hero-description"
//     >
//       <div
//         className="pointer-events-none absolute inset-0 overflow-hidden z-0"
//         aria-hidden="true"
//       >
//         <div className="absolute inset-0">
//           <Image
//             src={hero}
//             alt=""
//             fill
//             priority
//             sizes="(max-width: 768px) 100vw, (max-width: 1400px) 100vw, 1400px"
//             className="object-cover opacity-55 saturate-[0.85]"
//           />
//         </div>

//         <div className="absolute inset-0 bg-gradient-to-b from-[#050814]/45 via-transparent to-transparent" />

//         <div className="absolute inset-0 opacity-70">
//           <div className="absolute -top-16 -left-12 h-48 w-48 bg-[radial-gradient(circle_at_center,_#3A7BFF44,_transparent_72%)] blur-2xl md:-top-44 md:-left-44 md:h-[520px] md:w-[520px] md:blur-3xl" />
//           <div className="hidden md:block absolute top-[40%] -right-52 h-[680px] w-[680px] bg-[radial-gradient(circle_at_center,_#4CC2FF33,_transparent_72%)] blur-3xl" />
//         </div>

//         <div className="hidden md:block absolute inset-0 opacity-[0.08] mix-blend-soft-light">
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(255,255,255,0.08),_transparent_40%),radial-gradient(circle_at_70%_60%,_rgba(255,255,255,0.06),_transparent_45%)]" />
//         </div>

//         <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#020410]" />
//       </div>

//       <PageContainer className="relative z-10 w-full max-w-[1200px]">
//         <div className="min-h-[calc(100svh-6rem)] grid place-items-center">
//           <motion.div
//             initial={reduce ? false : { opacity: 0, y: 40 }}
//             animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
//             transition={{ duration: reduce ? 0 : 0.8, ease: EASE }}
//             className="w-full flex flex-col items-center text-center"
//           >
//             <p
//               className="
//                 mb-4 md:mb-5
//                 text-[0.78rem] sm:text-[0.82rem] md:text-[0.9rem]
//                 font-medium uppercase tracking-[0.24em]
//                 text-[#8FDBFF]
//               "
//             >
//               {t("eyebrow")}
//             </p>

//             <h1
//               id="portfolio-hero-heading"
//               className="
//                 font-semibold tracking-tight text-balance
//                 leading-[0.98]
//                 mb-6 md:mb-8
//                 text-[#F2F4FA]

//                 max-w-[18ch]
//                 sm:max-w-[20ch]
//                 lg:max-w-[22ch]
//                 mx-auto

//                 text-[clamp(2.35rem,5.8vw,4.8rem)]
//                 md:text-[clamp(2.9rem,5.0vw,5.2rem)]
//                 lg:text-[clamp(3.1rem,4.2vw,5.3rem)]
//               "
//             >
//               {t("title")}
//             </h1>

//             <p
//               id="portfolio-hero-description"
//               className="
//                 leading-relaxed
//                 mb-10 md:mb-12
//                 text-white
//                 max-w-[48ch] md:max-w-[52ch] lg:max-w-[58ch]
//                 text-[clamp(1rem,1.4vw+0.6rem,1.35rem)]
//               "
//             >
//               {t("description")}
//             </p>
//           </motion.div>
//         </div>
//       </PageContainer>

//       <motion.div
//         className="hidden md:block pointer-events-none absolute top-20 right-16 w-40 h-40 rounded-3xl border border-[#3A7BFF33] bg-[radial-gradient(circle_at_top,_#3A7BFF22,_transparent_70%)] opacity-40"
//         animate={reduce ? undefined : { rotate: 360 }}
//         transition={
//           reduce
//             ? undefined
//             : { duration: 30, repeat: Infinity, ease: "linear" }
//         }
//         aria-hidden="true"
//       />

//       <div
//         className="hidden md:block pointer-events-none absolute -top-40 -left-40 h-96 w-96
//         bg-[radial-gradient(circle_at_center,_#4CC2FF33,_transparent_70%)] blur-3xl opacity-60"
//         aria-hidden="true"
//       />
//     </section>
//   );
// }

"use client";

import { motion, useReducedMotion } from "motion/react";
import { PageContainer } from "../Layout/PageContainer";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import hero from "../../../public/PortfolioHero.avif";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

type PortfolioHeroProps = {
  onBackgroundLoaded?: () => void;
};

export function PortfolioHero({ onBackgroundLoaded }: PortfolioHeroProps) {
  const t = useTranslations("portfolioHero");
  const reduce = useReducedMotion();
  const hasReportedLoad = useRef(false);

  const handleBackgroundLoaded = () => {
    if (hasReportedLoad.current) return;
    hasReportedLoad.current = true;
    onBackgroundLoaded?.();
  };

  return (
    <section
      className="
        relative min-h-[100svh] flex items-center
        pt-22 pb-12
        md:pt-28 md:pb-16
        lg:pt-30 lg:pb-20
        overflow-visible
      "
      aria-labelledby="portfolio-hero-heading"
      aria-describedby="portfolio-hero-description"
    >
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden z-0"
        aria-hidden="true"
      >
        <div className="absolute inset-0">
          <Image
            src={hero}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-55 saturate-[0.85]"
            onLoad={handleBackgroundLoaded}
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-[#050814]/45 via-transparent to-transparent" />

        <div className="absolute inset-0 opacity-70">
          <div className="absolute -top-16 -left-12 h-48 w-48 bg-[radial-gradient(circle_at_center,_#3A7BFF44,_transparent_72%)] blur-2xl md:-top-44 md:-left-44 md:h-[520px] md:w-[520px] md:blur-3xl" />
          <div className="hidden md:block absolute top-[40%] -right-52 h-[680px] w-[680px] bg-[radial-gradient(circle_at_center,_#4CC2FF33,_transparent_72%)] blur-3xl" />
        </div>

        <div className="hidden md:block absolute inset-0 opacity-[0.08] mix-blend-soft-light">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(255,255,255,0.08),_transparent_40%),radial-gradient(circle_at_70%_60%,_rgba(255,255,255,0.06),_transparent_45%)]" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#020410]" />
      </div>

      <PageContainer className="relative z-10 w-full max-w-[1200px]">
        <div className="min-h-[calc(100svh-6rem)] grid place-items-center">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 40 }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ duration: reduce ? 0 : 0.8, ease: EASE }}
            className="w-full flex flex-col items-center text-center"
          >
            <p
              className="
                mb-4 md:mb-5
                text-[0.78rem] sm:text-[0.82rem] md:text-[0.9rem]
                font-medium uppercase tracking-[0.24em]
                text-[#8FDBFF]
              "
            >
              {t("eyebrow")}
            </p>

            <h1
              id="portfolio-hero-heading"
              className="
                font-semibold tracking-tight text-balance
                leading-[0.98]
                mb-6 md:mb-8
                text-[#F2F4FA]

                max-w-[18ch]
                sm:max-w-[20ch]
                lg:max-w-[22ch]
                mx-auto

                text-[clamp(2.35rem,5.8vw,4.8rem)]
                md:text-[clamp(2.9rem,5.0vw,5.2rem)]
                lg:text-[clamp(3.1rem,4.2vw,5.3rem)]
              "
            >
              {t("title")}
            </h1>

            <p
              id="portfolio-hero-description"
              className="
                leading-relaxed
                mb-10 md:mb-12
                text-white
                max-w-[48ch] md:max-w-[52ch] lg:max-w-[58ch]
                text-[clamp(1rem,1.4vw+0.6rem,1.35rem)]
              "
            >
              {t("description")}
            </p>
          </motion.div>
        </div>
      </PageContainer>

      <motion.div
        className="hidden md:block pointer-events-none absolute top-20 right-16 w-40 h-40 rounded-3xl border border-[#3A7BFF33] bg-[radial-gradient(circle_at_top,_#3A7BFF22,_transparent_70%)] opacity-40"
        animate={reduce ? undefined : { rotate: 360 }}
        transition={
          reduce
            ? undefined
            : { duration: 30, repeat: Infinity, ease: "linear" }
        }
        aria-hidden="true"
      />

      <div
        className="hidden md:block pointer-events-none absolute -top-40 -left-40 h-96 w-96
        bg-[radial-gradient(circle_at_center,_#4CC2FF33,_transparent_70%)] blur-3xl opacity-60"
        aria-hidden="true"
      />
    </section>
  );
}