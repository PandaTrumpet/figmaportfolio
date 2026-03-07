// "use client";

// import { AnimatePresence, motion, useReducedMotion } from "motion/react";
// import { PageContainer } from "../Layout/PageContainer";
// import Image from "next/image";
// import { useState } from "react";
// import { GlobalLoaderInline } from "@/src/components/loader/GlobalLoaderInline";
// type HeroData = { badge: string; title: string; subtitle: string };

// const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

// export function ContactHero({ data }: { data: HeroData }) {
//   const reduce = useReducedMotion();
//    const [bgReady, setBgReady] = useState(false);
//   return (
//     <section
//       className="
//         relative min-h-[100svh] flex items-center
//         overflow-visible text-slate-100
//         pt-22 pb-12
//         md:pt-28 md:pb-16
//         lg:pt-30 lg:pb-20
//       "
//     >
//       <AnimatePresence>
//         {!bgReady && (
//           <motion.div
//             className="absolute inset-0 z-[50]"
//             initial={{ opacity: 1 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
//           >
//             <GlobalLoaderInline open />
//           </motion.div>
//         )}
//       </AnimatePresence>
//       <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
//         {/* background image */}
//         <div className="absolute inset-0">
//           <Image
//             src="https://images.unsplash.com/photo-1593300806914-e1884ba37524?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             alt=""
//             fill
//             priority
//             sizes="100vw"
//             className="object-cover opacity-55 saturate-[0.85]"
//             onLoadingComplete={() => setBgReady(true)}
//             onError={() => setBgReady(true)}
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
//             initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 70 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{
//               duration: reduce ? 0 : 1,
//               delay: reduce ? 0 : 0.15,
//               ease: EASE,
//             }}
//             className="w-full flex flex-col items-center text-center"
//           >
//             {/* title (Home-style clamp + ch) */}
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
//               <span className="relative inline-block">
//                 <span className="pointer-events-none absolute -inset-x-6 -inset-y-2 -z-10 rounded-3xl bg-[radial-gradient(circle_at_center,_rgba(76,194,255,0.16),_transparent_72%)] blur-2xl" />
//                 {data.title}
//               </span>
//             </h1>

//             {/* subtitle (brighter + clamp) */}
//             <p
//               className="
//   leading-relaxed
// mb-10 md:mb-12

// text-white

// max-w-[48ch] md:max-w-[52ch] lg:max-w-[58ch]

// text-[clamp(1rem,1.4vw+0.6rem,1.35rem)]
//               "
//             >
//               {data.subtitle}
//             </p>

//             {/* micro-divider */}
//           </motion.div>
//         </div>
//       </PageContainer>
//     </section>
//   );
// }

"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { PageContainer } from "../Layout/PageContainer";
import Image from "next/image";
import { useState } from "react";
import { GlobalLoaderInline } from "@/src/components/loader/GlobalLoaderInline";

type HeroData = {
  badge: string;
  title: string;
  subtitle: string;
};

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function ContactHero({ data }: { data: HeroData }) {
  const reduce = useReducedMotion();
  const [bgReady, setBgReady] = useState(false);

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
      <AnimatePresence>
        {!bgReady && (
          <motion.div
            aria-hidden="true"
            className="absolute inset-0 z-[50]"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <GlobalLoaderInline open />
          </motion.div>
        )}
      </AnimatePresence>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1593300806914-e1884ba37524?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-55 saturate-[0.85]"
            onLoadingComplete={() => setBgReady(true)}
            onError={() => setBgReady(true)}
          />
        </div>

        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(5,8,20,0.68)_0%,rgba(5,8,20,0.38)_35%,rgba(2,4,16,0.88)_100%)]" />

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
                tracking-[0.22em] text-[#C9D7FF] backdrop-blur-md
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
                <span className="pointer-events-none absolute -inset-x-6 -inset-y-2 -z-10 rounded-3xl bg-[radial-gradient(circle_at_center,_rgba(76,194,255,0.16),_transparent_72%)] blur-2xl" />
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