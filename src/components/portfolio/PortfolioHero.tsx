// "use client";

// import { motion } from "motion/react";
// import { PageContainer } from "../Layout/PageContainer";
// import Image from "next/image";
// // import { useGlobalLoader } from "@/src/components/loader/LoaderProvider";
// export function PortfolioHero() {

//   return (
//     <section
//       className="
//         relative min-h-[100svh] flex items-center
//         pt-22 pb-12
//         md:pt-28 md:pb-16
//         lg:pt-30 lg:pb-20
//         overflow-visible
//       "
//     >
//       <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
//         {/* background image */}
//         <div className="absolute inset-0">
//           <Image
//             src="https://images.unsplash.com/photo-1546809059-7b1cdd47eae6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             alt=""
//             fill
//             priority
//             sizes="100vw"
//             className="object-cover opacity-55 saturate-[0.85]"
//             // onLoad={() => hide()} // ✅ когда реально загрузилось
//             // onError={() => hide()}
//           />
//         </div>

//         {/* мягкий градиент только для читаемости */}
//         <div className="absolute inset-0 bg-gradient-to-b from-[#050814]/45 via-transparent to-transparent" />

//         {/* локальные glow-споты */}
//         <div className="absolute inset-0 opacity-70">
//           <div className="absolute -top-44 -left-44 h-[520px] w-[520px] bg-[radial-gradient(circle_at_center,_#3A7BFF44,_transparent_72%)] blur-3xl" />
//           <div className="absolute top-[40%] -right-52 h-[680px] w-[680px] bg-[radial-gradient(circle_at_center,_#4CC2FF33,_transparent_72%)] blur-3xl" />
//         </div>

//         {/* very subtle noise */}
//         <div className="absolute inset-0 opacity-[0.08] mix-blend-soft-light">
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(255,255,255,0.08),_transparent_40%),radial-gradient(circle_at_70%_60%,_rgba(255,255,255,0.06),_transparent_45%)]" />
//         </div>

//         {/* плавный fade вниз */}
//         <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#020410]" />
//       </div>

//       <PageContainer className="relative z-10 w-full max-w-[1200px]">
//         <div className="min-h-[calc(100svh-6rem)] grid place-items-center">
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
//             className="w-full flex flex-col items-center text-center"
//           >
//             {/* Accent line (centered) */}

//             <h1
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
//               Избранные проекты
//             </h1>

//             <p
//               className="
//                      leading-relaxed
// mb-10 md:mb-12

// text-white

// max-w-[48ch] md:max-w-[52ch] lg:max-w-[58ch]

// text-[clamp(1rem,1.4vw+0.6rem,1.35rem)]
//               "
//             >
//               Примеры решений, которые мы создавали для реального бизнеса.
//               Каждый проект — результат диалога, задач и практичного подхода.
//             </p>
//           </motion.div>
//         </div>
//       </PageContainer>

//       {/* Decorative element */}
//       <motion.div
//         className="pointer-events-none absolute top-20 right-16 w-40 h-40 rounded-3xl border border-[#3A7BFF33] bg-[radial-gradient(circle_at_top,_#3A7BFF22,_transparent_70%)] opacity-40"
//         animate={{ rotate: 360 }}
//         transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
//         aria-hidden="true"
//       />

//       {/* Background glow */}
//       <div
//         className="pointer-events-none absolute -top-40 -left-40 h-96 w-96
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

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function PortfolioHero() {
  const t = useTranslations("portfolioHero");
  const reduce = useReducedMotion();

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
            src="https://images.unsplash.com/photo-1546809059-7b1cdd47eae6?q=80&w=1074&auto=format&fit=crop"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-55 saturate-[0.85]"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-[#050814]/45 via-transparent to-transparent" />

        <div className="absolute inset-0 opacity-70">
          <div className="absolute -top-44 -left-44 h-[520px] w-[520px] bg-[radial-gradient(circle_at_center,_#3A7BFF44,_transparent_72%)] blur-3xl" />
          <div className="absolute top-[40%] -right-52 h-[680px] w-[680px] bg-[radial-gradient(circle_at_center,_#4CC2FF33,_transparent_72%)] blur-3xl" />
        </div>

        <div className="absolute inset-0 opacity-[0.08] mix-blend-soft-light">
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
        className="pointer-events-none absolute top-20 right-16 w-40 h-40 rounded-3xl border border-[#3A7BFF33] bg-[radial-gradient(circle_at_top,_#3A7BFF22,_transparent_70%)] opacity-40"
        animate={reduce ? undefined : { rotate: 360 }}
        transition={
          reduce
            ? undefined
            : { duration: 30, repeat: Infinity, ease: "linear" }
        }
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -top-40 -left-40 h-96 w-96
        bg-[radial-gradient(circle_at_center,_#4CC2FF33,_transparent_70%)] blur-3xl opacity-60"
        aria-hidden="true"
      />
    </section>
  );
}