

// "use client";

// import { motion, useReducedMotion } from "motion/react";

// type HeroData = { badge: string; title: string; subtitle: string };

// const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

// export function ContactHero({ data }: { data: HeroData }) {
//   const reduce = useReducedMotion();

//   return (
//     <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-[#050816]">
//       {/* background grid overlay */}
//       <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
//         <div
//           className="h-full w-full"
//           style={{
//             backgroundImage:
//               "repeating-linear-gradient(0deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 80px), repeating-linear-gradient(90deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 80px)",
//           }}
//         />
//       </div>

//       {/* ambient glows */}
//       <div className="pointer-events-none absolute inset-0">
//         <div className="absolute -top-44 -left-40 h-[520px] w-[520px] bg-[radial-gradient(circle_at_center,_rgba(58,123,255,0.55),_transparent_70%)] blur-3xl opacity-60" />
//         <div className="absolute -bottom-56 -right-32 h-[620px] w-[620px] bg-[radial-gradient(circle_at_center,_rgba(76,194,255,0.55),_transparent_70%)] blur-3xl opacity-55" />
//         <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[520px] w-[520px] bg-[radial-gradient(circle_at_center,_rgba(155,93,255,0.35),_transparent_70%)] blur-3xl opacity-35" />
//       </div>

//       <motion.div className="relative z-10 max-w-[1200px] mx-auto w-full px-6 md:px-12 lg:px-20 text-center">
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
//           <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.92] mb-10 md:mb-12 font-semibold tracking-tight text-[#F2F4FA]">
//             <span className="relative inline-block">
//               {/* subtle highlight */}
//               <span className="pointer-events-none absolute -inset-x-6 -inset-y-2 -z-10 rounded-3xl bg-[radial-gradient(circle_at_center,_rgba(76,194,255,0.18),_transparent_70%)] blur-2xl" />
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
//       </motion.div>

   
//     </section>
//   );
// }


"use client";

import { motion, useReducedMotion } from "motion/react";

type HeroData = { badge: string; title: string; subtitle: string };

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function ContactHero({ data }: { data: HeroData }) {
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-visible bg-transparent">
      {/* local micro grid (very subtle) */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 84px), repeating-linear-gradient(90deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 84px)",
            maskImage:
              "radial-gradient(circle at 50% 45%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 35%, rgba(0,0,0,0) 75%)",
            WebkitMaskImage:
              "radial-gradient(circle at 50% 45%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 35%, rgba(0,0,0,0) 75%)",
          }}
        />
      </div>

      {/* tiny local accents (don’t fight global background) */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -top-24 left-1/4 h-56 w-56 rounded-full bg-[radial-gradient(circle_at_center,_rgba(76,194,255,0.18),_transparent_70%)] blur-3xl" />
        <div className="absolute -bottom-28 right-1/4 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,_rgba(155,93,255,0.14),_transparent_70%)] blur-3xl" />
      </div>

      <motion.div className="relative z-10 max-w-[1200px] mx-auto w-full px-6 md:px-12 lg:px-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: reduce ? 0 : 1,
            delay: reduce ? 0 : 0.15,
            ease: EASE,
          }}
        >
          {/* title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] mb-10 md:mb-12 font-semibold tracking-tight text-[#F2F4FA]">
            <span className="relative inline-block">
              {/* subtle highlight */}
              <span className="pointer-events-none absolute -inset-x-6 -inset-y-2 -z-10 rounded-3xl bg-[radial-gradient(circle_at_center,_rgba(76,194,255,0.16),_transparent_72%)] blur-2xl" />
              {data.title}
            </span>
          </h1>

          {/* subtitle */}
          <p className="text-base md:text-xl lg:text-2xl opacity-85 max-w-3xl mx-auto leading-relaxed text-[#D7DEEA]">
            {data.subtitle}
          </p>

          {/* micro-divider */}
          <motion.div
            className="mx-auto mt-10 md:mt-12 h-[2px] w-16 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF] rounded-full"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 64, opacity: 1 }}
            transition={{
              duration: reduce ? 0 : 0.8,
              delay: reduce ? 0 : 0.35,
              ease: EASE,
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
