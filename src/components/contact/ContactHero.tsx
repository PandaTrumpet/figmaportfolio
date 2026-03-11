// "use client";

// import {  motion, useReducedMotion } from "motion/react";
// import { PageContainer } from "../Layout/PageContainer";
// import Image from "next/image";
// // import { useState } from "react";
// // import { GlobalLoaderInline } from "@/src/components/loader/GlobalLoaderInline";
// import hero from '../../../public/ContactHero.avif'
// type HeroData = {
//   badge: string;
//   title: string;
//   subtitle: string;
// };

// const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

// export function ContactHero({ data }: { data: HeroData }) {
//   const reduce = useReducedMotion();
//   // const [bgReady, setBgReady] = useState(false);

//   return (
//     <div
//       aria-labelledby="contact-hero-heading"
//       className="
//         relative flex min-h-[100svh] items-center overflow-visible
//         pt-22 pb-12
//         md:pt-28 md:pb-16
//         lg:pt-30 lg:pb-20
//         text-slate-100
//       "
//     >
//       {/* <AnimatePresence>
//         {!bgReady && (
//           <motion.div
//             aria-hidden="true"
//             className="absolute inset-0 z-[50]"
//             initial={{ opacity: 1 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
//           >
//             <GlobalLoaderInline open />
//           </motion.div>
//         )}
//       </AnimatePresence> */}

//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
//       >
//         <div className="absolute inset-0">
//           <Image
//             src={hero}
//             alt="Home page hero background"
//             fill
//             priority
//             sizes="(max-width: 768px) 100vw, (max-width: 1400px) 100vw, 1400px"
//             className="object-cover opacity-55 saturate-[0.85]"
//             // onLoadingComplete={() => setBgReady(true)}
//             // onError={() => setBgReady(true)}
//           />
//         </div>

//         <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(5,8,20,0.68)_0%,rgba(5,8,20,0.38)_35%,rgba(2,4,16,0.88)_100%)]" />

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
//         <div className="grid min-h-[calc(100svh-6rem)] place-items-center">
//           <motion.div
//             initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 70 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{
//               duration: reduce ? 0 : 1,
//               delay: reduce ? 0 : 0.15,
//               ease: EASE,
//             }}
//             className="flex w-full flex-col items-center text-center"
//           >
//             <div
//               className="
//                 mb-5 inline-flex items-center rounded-full border border-white/12
//                 bg-white/6 px-4 py-2 text-[0.72rem] font-medium uppercase
//                 tracking-[0.22em] text-[#C9D7FF] backdrop-blur-md
//                 md:mb-6
//               "
//             >
//               {data.badge}
//             </div>

//             <h1
//               id="contact-hero-heading"
//               className="
//                 mx-auto mb-6 max-w-[18ch] font-semibold tracking-tight text-balance
//                 leading-[0.98] text-[#F2F4FA]
//                 text-[clamp(2.35rem,5.8vw,4.8rem)]
//                 sm:max-w-[20ch]
//                 md:mb-8 md:text-[clamp(2.9rem,5.0vw,5.2rem)]
//                 lg:max-w-[22ch] lg:text-[clamp(3.1rem,4.2vw,5.3rem)]
//               "
//             >
//               <span className="relative inline-block">
//                 <span className="pointer-events-none absolute -inset-x-6 -inset-y-2 -z-10 rounded-3xl bg-[radial-gradient(circle_at_center,_rgba(76,194,255,0.16),_transparent_72%)] blur-2xl" />
//                 {data.title}
//               </span>
//             </h1>

//             <p
//               className="
//                 mb-10 max-w-[48ch] text-pretty leading-relaxed text-white/92
//                 text-[clamp(1rem,1.4vw+0.6rem,1.35rem)]
//                 md:mb-12 md:max-w-[52ch]
//                 lg:max-w-[58ch]
//               "
//             >
//               {data.subtitle}
//             </p>
//           </motion.div>
//         </div>
//       </PageContainer>
//     </div>
//   );
// }

// Рабочий вариант
// "use client";

// import { motion, useReducedMotion } from "motion/react";
// import { PageContainer } from "../Layout/PageContainer";
// import Image from "next/image";
// import hero from "../../../public/ContactHero.avif";

// type HeroData = {
//   badge: string;
//   title: string;
//   subtitle: string;
// };

// const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

// export function ContactHero({ data }: { data: HeroData }) {
//   const reduce = useReducedMotion();

//   return (
//     <div
//       aria-labelledby="contact-hero-heading"
//       className="
//         relative flex min-h-[100svh] items-center overflow-visible
//         pt-22 pb-12
//         md:pt-28 md:pb-16
//         lg:pt-30 lg:pb-20
//         text-slate-100
//       "
//     >
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

//         {/* <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(5,8,20,0.68)_0%,rgba(5,8,20,0.38)_35%,rgba(2,4,16,0.88)_100%)]" /> */}

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
//         <div className="grid min-h-[calc(100svh-6rem)] place-items-center">
//           <motion.div
//             initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 70 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{
//               duration: reduce ? 0 : 1,
//               delay: reduce ? 0 : 0.15,
//               ease: EASE,
//             }}
//             className="flex w-full flex-col items-center text-center"
//           >
//             <div
//               className="
//                 mb-5 inline-flex items-center rounded-full border border-white/12
//                 bg-white/6 px-4 py-2 text-[0.72rem] font-medium uppercase
//                 tracking-[0.22em] text-[#C9D7FF]
//                 md:backdrop-blur-md
//                 md:mb-6
//               "
//             >
//               {data.badge}
//             </div>

//             <h1
//               id="contact-hero-heading"
//               className="
//                 mx-auto mb-6 max-w-[18ch] font-semibold tracking-tight text-balance
//                 leading-[0.98] text-[#F2F4FA]
//                 text-[clamp(2.35rem,5.8vw,4.8rem)]
//                 sm:max-w-[20ch]
//                 md:mb-8 md:text-[clamp(2.9rem,5.0vw,5.2rem)]
//                 lg:max-w-[22ch] lg:text-[clamp(3.1rem,4.2vw,5.3rem)]
//               "
//             >
//               <span className="relative inline-block">
//                 <span className="hidden md:block pointer-events-none absolute -inset-x-6 -inset-y-2 -z-10 rounded-3xl bg-[radial-gradient(circle_at_center,_rgba(76,194,255,0.16),_transparent_72%)] blur-2xl" />
//                 {data.title}
//               </span>
//             </h1>

//             <p
//               className="
//                 mb-10 max-w-[48ch] text-pretty leading-relaxed text-white/92
//                 text-[clamp(1rem,1.4vw+0.6rem,1.35rem)]
//                 md:mb-12 md:max-w-[52ch]
//                 lg:max-w-[58ch]
//               "
//             >
//               {data.subtitle}
//             </p>
//           </motion.div>
//         </div>
//       </PageContainer>
//     </div>
//   );
// }

"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "motion/react";
import { PageContainer } from "../Layout/PageContainer";
import Image from "next/image";
import hero from "../../../public/ContactHero.avif";

type HeroData = {
  badge: string;
  title: string;
  subtitle: string;
};

type ContactHeroProps = {
  data: HeroData;
  onBackgroundLoaded?: () => void;
};

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function ContactHero({ data, onBackgroundLoaded }: ContactHeroProps) {
  const reduce = useReducedMotion();
  const hasReportedLoad = useRef(false);

  const handleBackgroundLoaded = () => {
    if (hasReportedLoad.current) return;
    hasReportedLoad.current = true;
    onBackgroundLoaded?.();
  };

  return (
    <div
      aria-labelledby="contact-hero-heading"
      className="
        relative flex min-h-[100svh] items-center overflow-visible
        pt-22 pb-12
        md:pt-28 md:pb-16
        lg:pt-30 lg:pb-20
        text-slate-100
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
          <div className="absolute -top-16 -left-12 h-48 w-48 bg-[radial-gradient(circle_at_center,_#3A7BFF44,_transparent_72%)] blur-2xl md:-top-44 md:-left-44 md:h-[520px] md:w-[520px] md:blur-3xl" />
          <div className="hidden md:block absolute top-[40%] -right-52 h-[680px] w-[680px] bg-[radial-gradient(circle_at_center,_#4CC2FF33,_transparent_72%)] blur-3xl" />
        </div>

        <div className="hidden md:block absolute inset-0 opacity-[0.08] mix-blend-soft-light">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(255,255,255,0.08),_transparent_40%),radial-gradient(circle_at_70%_60%,_rgba(255,255,255,0.06),_transparent_45%)]" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#020410]" />
      </div>

      <PageContainer className="relative z-10 w-full max-w-[1200px]">
        <div className="grid min-h-[calc(100svh-6rem)] place-items-center">
          <motion.div
            initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduce ? 0 : 1,
              delay: reduce ? 0 : 0.15,
              ease: EASE,
            }}
            className="flex w-full flex-col items-center text-center"
          >
            <div
              className="
                mb-5 inline-flex items-center rounded-full border border-white/12
                bg-white/6 px-4 py-2 text-[0.72rem] font-medium uppercase
                tracking-[0.22em] text-[#C9D7FF]
                md:backdrop-blur-md
                md:mb-6
              "
            >
              {data.badge}
            </div>

            <h1
              id="contact-hero-heading"
              className="
                mx-auto mb-6 max-w-[18ch] font-semibold tracking-tight text-balance
                leading-[0.98] text-[#F2F4FA]
                text-[clamp(2.35rem,5.8vw,4.8rem)]
                sm:max-w-[20ch]
                md:mb-8 md:text-[clamp(2.9rem,5.0vw,5.2rem)]
                lg:max-w-[22ch] lg:text-[clamp(3.1rem,4.2vw,5.3rem)]
              "
            >
              <span className="relative inline-block">
                <span className="hidden md:block pointer-events-none absolute -inset-x-6 -inset-y-2 -z-10 rounded-3xl bg-[radial-gradient(circle_at_center,_rgba(76,194,255,0.16),_transparent_72%)] blur-2xl" />
                {data.title}
              </span>
            </h1>

            <p
              className="
                mb-10 max-w-[48ch] text-pretty leading-relaxed text-white/92
                text-[clamp(1rem,1.4vw+0.6rem,1.35rem)]
                md:mb-12 md:max-w-[52ch]
                lg:max-w-[58ch]
              "
            >
              {data.subtitle}
            </p>
          </motion.div>
        </div>
      </PageContainer>
    </div>
  );
}