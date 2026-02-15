

// "use client";

// import { motion, useReducedMotion } from "motion/react";
// import { PageContainer } from "../Layout/PageContainer";
// import Image from "next/image";


// type HeroData = { badge: string; title: string; subtitle: string };

// const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

// export function ContactHero({ data }: { data: HeroData }) {
//   const reduce = useReducedMotion();

//   return (
//     <section
//       className="  relative min-h-screen flex items-center
//         overflow-visible
//         text-slate-100

//         /* ✅ HERO PADDING STANDARD (for fixed navbar) */
//         pt-22 pb-12
//         md:pt-28 md:pb-16
//         lg:pt-30 lg:pb-20"
//     >
//       {/* local micro grid (very subtle) */}
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

//       {/* tiny local accents (don’t fight global background) */}

//       <PageContainer className="relative z-10 text-center max-w-[1200px]">
//         <motion.div
//           initial={{ opacity: 0, y: 70 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{
//             duration: reduce ? 0 : 1,
//             delay: reduce ? 0 : 0.15,
//             ease: EASE,
//           }}
//         >
//           {/* title */}
//           <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] mb-10 md:mb-12 font-semibold tracking-tight text-[#F2F4FA]">
//             <span className="relative inline-block">
//               {/* subtle highlight */}
//               <span className="pointer-events-none absolute -inset-x-6 -inset-y-2 -z-10 rounded-3xl bg-[radial-gradient(circle_at_center,_rgba(76,194,255,0.16),_transparent_72%)] blur-2xl" />
//               {data.title}
//             </span>
//           </h1>

//           {/* subtitle */}
//           <p className="text-base md:text-xl lg:text-2xl opacity-85 max-w-3xl mx-auto leading-relaxed text-[#D7DEEA]">
//             {data.subtitle}
//           </p>

//           {/* micro-divider */}
//           <motion.div
//             className="mx-auto mt-10 md:mt-12 h-[2px] w-16 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF] rounded-full"
//             initial={{ width: 0, opacity: 0 }}
//             animate={{ width: 64, opacity: 1 }}
//             transition={{
//               duration: reduce ? 0 : 0.8,
//               delay: reduce ? 0 : 0.35,
//               ease: EASE,
//             }}
//           />
//         </motion.div>
//       </PageContainer>
//     </section>
//   );
// }


"use client";

import { motion, useReducedMotion } from "motion/react";
import { PageContainer } from "../Layout/PageContainer";
import Image from "next/image";

type HeroData = { badge: string; title: string; subtitle: string };

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function ContactHero({ data }: { data: HeroData }) {
  const reduce = useReducedMotion();

  return (
    <section
      className="
        relative min-h-[100svh] flex items-center
        overflow-visible text-slate-100
        pt-22 pb-12
        md:pt-28 md:pb-16
        lg:pt-30 lg:pb-20
      "
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
        {/* background image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1593300806914-e1884ba37524?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
            initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduce ? 0 : 1,
              delay: reduce ? 0 : 0.15,
              ease: EASE,
            }}
            className="w-full flex flex-col items-center text-center"
          >
            {/* title (Home-style clamp + ch) */}
            <h1
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
              <span className="relative inline-block">
                <span className="pointer-events-none absolute -inset-x-6 -inset-y-2 -z-10 rounded-3xl bg-[radial-gradient(circle_at_center,_rgba(76,194,255,0.16),_transparent_72%)] blur-2xl" />
                {data.title}
              </span>
            </h1>

            {/* subtitle (brighter + clamp) */}
            <p
              className="
                text-white/90 leading-relaxed
                mb-10 md:mb-12

                max-w-[52ch]
                lg:max-w-[60ch]
                mx-auto

                text-[clamp(1.05rem,2.2vw,1.25rem)]
                md:text-[clamp(1.1rem,1.7vw,1.45rem)]
              "
            >
              {data.subtitle}
            </p>

            {/* micro-divider */}
        
          </motion.div>
        </div>
      </PageContainer>
    </section>
  );
}
