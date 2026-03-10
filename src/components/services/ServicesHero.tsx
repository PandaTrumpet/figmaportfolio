// "use client";

// import { motion } from "motion/react";
// import Image from "next/image";
// import { PageContainer } from "../Layout/PageContainer";

// export default function ServicesHero() {
//   return (
//     <section
//       className="
//         relative
//         min-h-[100svh]
//         pt-22 pb-12
//         md:pt-28 md:pb-16
//         lg:pt-30 lg:pb-20
//         overflow-visible
//       "
//     >
//       {/* CLIP WRAPPER — режет только фон/эффекты, не контент */}
//       <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
//         {/* background image */}
//         <div className="absolute inset-0">
//           <Image
//             src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdlYnNpdGV8ZW58MHx8fHwxNzMzODUyNDAwfDA&ixlib=rb-4.1.0&q=80&w=1920"
//             alt=""
//             fill
//             priority
//             sizes="100vw"
//             className="object-cover opacity-55 saturate-[0.85]"
//           />
//         </div>

//         {/* мягкий градиент только для читаемости (без "дна" секции) */}
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

//       {/* content */}
//       <PageContainer className="relative z-10 max-w-[1200px]">
//         <div className="min-h-[calc(100svh-6rem)] grid place-items-center">
//           <motion.div
//             initial={{ opacity: 0, y: 36 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
//             className="w-full flex flex-col items-center text-center"
//           >
//             <h1
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
//               Вы не выбираете сайт.
//               <br />
//               <span className="opacity-90">Вы выбираете систему роста.</span>
//             </h1>

//             <p
//               className="

//                   leading-relaxed
// mb-10 md:mb-12

// text-white

// max-w-[48ch] md:max-w-[52ch] lg:max-w-[58ch]

// text-[clamp(1rem,1.4vw+0.6rem,1.35rem)]

//               "
//             >
//               Мы помогаем выбрать правильный формат: от быстрого лендинга до
//               полноценной digital-системы с WhatsApp, CRM и автоматизацией.
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
import { useId } from "react";
import hero from '../../../public/ServiceHero.avif'
export default function ServicesHero() {
  const t = useTranslations("services");
  const reduce = useReducedMotion();

  const titleId = useId();
  const descId = useId();

  return (
    <section
      aria-labelledby={titleId}
      aria-describedby={descId}
      className="
        relative
        min-h-[100svh]
        pt-24 pb-12
        md:pt-28 md:pb-16
        lg:pt-32 lg:pb-20
        overflow-visible
      "
    >
      {/* CLIP WRAPPER — cuts only background/effects, not content */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden z-0"
      >
        {/* background image (decorative) */}
        <div className="absolute inset-0">
          <Image
            src={hero}
            alt="Home page hero background"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1400px) 100vw, 1400px"
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

      {/* content */}
      <PageContainer className="relative z-10 max-w-[1200px]">
        <div className="min-h-[calc(100svh-6rem)] grid place-items-center">
          <motion.div
            initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={
              reduce
                ? { duration: 0 }
                : { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
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
                md:text-[clamp(2.9rem,5.0vw,5.2rem)]
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