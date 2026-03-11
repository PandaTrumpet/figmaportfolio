// Первый вариант

// "use client";

// import { motion, useReducedMotion } from "motion/react";
// import Image from "next/image";
// import { PageContainer } from "../Layout/PageContainer";
// import { useTranslations } from "next-intl";
// import { useId } from "react";
// import hero from '../../../public/ServiceHero.avif'
// export default function ServicesHero() {
//   const t = useTranslations("services");
//   const reduce = useReducedMotion();

//   const titleId = useId();
//   const descId = useId();

//   return (
//     <section
//       aria-labelledby={titleId}
//       aria-describedby={descId}
//       className="
//         relative
//         min-h-[100svh]
//         pt-24 pb-12
//         md:pt-28 md:pb-16
//         lg:pt-32 lg:pb-20
//         overflow-visible
//       "
//     >
//       {/* CLIP WRAPPER — cuts only background/effects, not content */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 overflow-hidden z-0"
//       >
//         {/* background image (decorative) */}
//         <div className="absolute inset-0">
//           <Image
//             src={hero}
//             alt="Home page hero background"
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

//       {/* content */}
//       <PageContainer className="relative z-10 max-w-[1200px]">
//         <div className="min-h-[calc(100svh-6rem)] grid place-items-center">
//           <motion.div
//             initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={
//               reduce
//                 ? { duration: 0 }
//                 : { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
//             }
//             className="w-full flex flex-col items-center text-center"
//           >
//             <h1
//               id={titleId}
//               className="
//                 font-semibold tracking-tight text-balance
//                 leading-[0.98]
//                 mb-6 md:mb-8
//                 text-[#F5EFE7]

//                 max-w-[18ch]
//                 sm:max-w-[20ch]
//                 lg:max-w-[22ch]
//                 mx-auto

//                 text-[clamp(2.35rem,5.8vw,4.8rem)]
//                 md:text-[clamp(2.9rem,5.0vw,5.2rem)]
//                 lg:text-[clamp(3.1rem,4.2vw,5.3rem)]
//               "
//             >
//               {t("hero.titleLine1")}
//               <br />
//               <span className="opacity-90">{t("hero.titleLine2")}</span>
//             </h1>

//             <p
//               id={descId}
//               className="
//                 leading-relaxed
//                 mb-10 md:mb-12
//                 text-white
//                 max-w-[48ch] md:max-w-[52ch] lg:max-w-[58ch]
//                 text-[clamp(1rem,1.4vw+0.6rem,1.35rem)]
//               "
//             >
//               {t("hero.subtitle")}
//             </p>
//           </motion.div>
//         </div>
//       </PageContainer>
//     </section>
//   );
// }

// Второй вариант уже после корректироки

// "use client";

// import { motion, useReducedMotion } from "motion/react";
// import Image from "next/image";
// import { PageContainer } from "../Layout/PageContainer";
// import { useTranslations } from "next-intl";
// import { useId } from "react";
// import hero from "../../../public/ServiceHero.avif";

// export default function ServicesHero() {
//   const t = useTranslations("services");
//   const reduce = useReducedMotion();

//   const titleId = useId();
//   const descId = useId();

//   return (
//     <section
//       aria-labelledby={titleId}
//       aria-describedby={descId}
//       className="
//         relative
//         min-h-[100svh]
//         pt-24 pb-12
//         md:pt-28 md:pb-16
//         lg:pt-32 lg:pb-20
//         overflow-visible
//       "
//     >
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 overflow-hidden z-0"
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

//       <PageContainer className="relative z-10 max-w-[1200px]">
//         <div className="min-h-[calc(100svh-6rem)] grid place-items-center">
//           <motion.div
//             initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={
//               reduce
//                 ? { duration: 0 }
//                 : { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
//             }
//             className="w-full flex flex-col items-center text-center"
//           >
//             <h1
//               id={titleId}
//               className="
//                 font-semibold tracking-tight text-balance
//                 leading-[0.98]
//                 mb-6 md:mb-8
//                 text-[#F5EFE7]

//                 max-w-[18ch]
//                 sm:max-w-[20ch]
//                 lg:max-w-[22ch]
//                 mx-auto

//                 text-[clamp(2.35rem,5.8vw,4.8rem)]
//                 md:text-[clamp(2.9rem,5.0vw,5.2rem)]
//                 lg:text-[clamp(3.1rem,4.2vw,5.3rem)]
//               "
//             >
//               {t("hero.titleLine1")}
//               <br />
//               <span className="opacity-90">{t("hero.titleLine2")}</span>
//             </h1>

//             <p
//               id={descId}
//               className="
//                 leading-relaxed
//                 mb-10 md:mb-12
//                 text-white
//                 max-w-[48ch] md:max-w-[52ch] lg:max-w-[58ch]
//                 text-[clamp(1rem,1.4vw+0.6rem,1.35rem)]
//               "
//             >
//               {t("hero.subtitle")}
//             </p>
//           </motion.div>
//         </div>
//       </PageContainer>
//     </section>
//   );
// }

// Третий вариант рабочий

// "use client";

// import { motion, useReducedMotion } from "motion/react";
// import Image from "next/image";
// import { PageContainer } from "../Layout/PageContainer";
// import { useTranslations } from "next-intl";
// import { useId } from "react";
// import hero from "../../../public/ServiceHero.avif";

// const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

// export default function ServicesHero() {
//   const t = useTranslations("services");
//   const reduce = useReducedMotion();

//   const titleId = useId();
//   const descId = useId();

//   return (
//     <section
//       aria-labelledby={titleId}
//       aria-describedby={descId}
//       className="
//         relative overflow-visible
//         min-h-[100svh]
//         grid place-items-center
//         pt-22 pb-12
//         md:pt-28 md:pb-16
//         lg:pt-30 lg:pb-20
//       "
//     >
//       {/* BACKGROUND */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
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

//         {/* <div className="absolute inset-0 bg-gradient-to-b from-[#050814]/30 via-[#020410]/78 to-[#020410]" /> */}

//         <div className="absolute inset-0 opacity-70">
//           <div className="absolute -top-40 -left-36 h-80 w-80 bg-[radial-gradient(circle_at_center,_#3A7BFF55,_transparent_70%)] blur-3xl md:h-96 md:w-96" />
//           <div className="absolute -bottom-44 -right-20 h-[420px] w-[420px] bg-[radial-gradient(circle_at_center,_#4CC2FF44,_transparent_70%)] blur-3xl md:h-[520px] md:w-[520px]" />
//         </div>

//         <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:64px_64px]" />

//         <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#020410]" />
//       </div>

//       {/* CONTENT */}
//       <PageContainer className="relative z-10 w-full max-w-[1200px] text-white">
//         <div className="w-full flex min-h-[calc(100svh-6rem)] items-center justify-center">
//           <motion.div
//             initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 34 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={
//               reduce
//                 ? { duration: 0 }
//                 : { duration: 0.8, delay: 0.08, ease: EASE }
//             }
//             className="w-full flex flex-col items-center text-center"
//           >
//             <h1
//               id={titleId}
//               className="
//                 font-semibold tracking-tight text-balance
//                 leading-[0.98]
//                 mb-6 md:mb-8
//                 text-[#F5EFE7]

//                 max-w-[18ch]
//                 sm:max-w-[20ch]
//                 lg:max-w-[22ch]
//                 mx-auto

//                 text-[clamp(2.35rem,5.8vw,4.8rem)]
//                 md:text-[clamp(2.9rem,5vw,5.2rem)]
//                 lg:text-[clamp(3.1rem,4.2vw,5.3rem)]
//               "
//             >
//               {t("hero.titleLine1")}
//               <br />
//               <span className="opacity-90">{t("hero.titleLine2")}</span>
//             </h1>

//             <p
//               id={descId}
//               className="
//                 mx-auto
//                 leading-relaxed
//                 mb-10 md:mb-12
//                 text-white
//                 max-w-[48ch] md:max-w-[52ch] lg:max-w-[58ch]
//                 text-[clamp(1rem,1.4vw+0.6rem,1.35rem)]
//               "
//             >
//               {t("hero.subtitle")}
//             </p>
//           </motion.div>
//         </div>
//       </PageContainer>
//     </section>
//   );
// }

"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { PageContainer } from "../Layout/PageContainer";
import { useTranslations } from "next-intl";
import { useId, useRef } from "react";
import hero from "../../../public/ServiceHero.avif";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

type ServicesHeroProps = {
  onBackgroundLoaded?: () => void;
};

export default function ServicesHero({
  onBackgroundLoaded,
}: ServicesHeroProps) {
  const t = useTranslations("services");
  const reduce = useReducedMotion();
  const hasReportedLoad = useRef(false);

  const titleId = useId();
  const descId = useId();

  const handleBackgroundLoaded = () => {
    if (hasReportedLoad.current) return;
    hasReportedLoad.current = true;
    onBackgroundLoaded?.();
  };

  return (
    <section
      aria-labelledby={titleId}
      aria-describedby={descId}
      className="
        relative overflow-visible
        min-h-[100svh]
        grid place-items-center
        pt-22 pb-12
        md:pt-28 md:pb-16
        lg:pt-30 lg:pb-20
      "
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
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

        <div className="absolute inset-0 opacity-70">
          <div className="absolute -top-40 -left-36 h-80 w-80 bg-[radial-gradient(circle_at_center,_#3A7BFF55,_transparent_70%)] blur-3xl md:h-96 md:w-96" />
          <div className="absolute -bottom-44 -right-20 h-[420px] w-[420px] bg-[radial-gradient(circle_at_center,_#4CC2FF44,_transparent_70%)] blur-3xl md:h-[520px] md:w-[520px]" />
        </div>

        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:64px_64px]" />

        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#020410]" />
      </div>

      <PageContainer className="relative z-10 w-full max-w-[1200px] text-white">
        <div className="w-full flex min-h-[calc(100svh-6rem)] items-center justify-center">
          <motion.div
            initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={
              reduce
                ? { duration: 0 }
                : { duration: 0.8, delay: 0.08, ease: EASE }
            }
            className="w-full flex flex-col items-center text-center"
          >
            <h1
              id={titleId}
              className="
                font-semibold tracking-tight text-balance
                leading-[0.98]
                mb-6 md:mb-8
                text-[#F5EFE7]

                max-w-[18ch]
                sm:max-w-[20ch]
                lg:max-w-[22ch]
                mx-auto

                text-[clamp(2.35rem,5.8vw,4.8rem)]
                md:text-[clamp(2.9rem,5vw,5.2rem)]
                lg:text-[clamp(3.1rem,4.2vw,5.3rem)]
              "
            >
              {t("hero.titleLine1")}
              <br />
              <span className="opacity-90">{t("hero.titleLine2")}</span>
            </h1>

            <p
              id={descId}
              className="
                mx-auto
                leading-relaxed
                mb-10 md:mb-12
                text-white
                max-w-[48ch] md:max-w-[52ch] lg:max-w-[58ch]
                text-[clamp(1rem,1.4vw+0.6rem,1.35rem)]
              "
            >
              {t("hero.subtitle")}
            </p>
          </motion.div>
        </div>
      </PageContainer>
    </section>
  );
}