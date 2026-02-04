
// "use client";

// import { useRef } from "react";
// import {
//   motion,
//   useReducedMotion,
//   useScroll,
//   useTransform,
// } from "motion/react";
// import { ArrowRight, Shield } from "lucide-react";

// import { pricingData } from "@/src/data/pricingData";
// import { FloatingPriceTags } from "./FloatingPriceTags";

// const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

// export function PricingHero() {
//   const reduce = useReducedMotion();
//   const sectionRef = useRef<HTMLElement | null>(null);

//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start start", "end start"],
//   });

//   const y = useTransform(scrollYProgress, [0, 1], [0, -120]);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative min-h-screen overflow-visible"
//     >
//       {/* LOCAL FX (clip only background, not content) */}
//       <div
//         className="
//           pointer-events-none absolute inset-0 -z-10 overflow-hidden
//           [mask-image:linear-gradient(to_bottom,black_0%,black_82%,transparent_100%)]
//           [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_82%,transparent_100%)]
//         "
//         aria-hidden="true"
//       >
//         {/* soft spots */}
//         <div className="absolute inset-0 opacity-70">
//           <div className="absolute -top-44 -left-40 h-[520px] w-[520px] bg-[radial-gradient(circle_at_center,_#3A7BFF55,_transparent_70%)] blur-3xl" />
//           <div className="absolute -bottom-48 -right-24 h-[620px] w-[620px] bg-[radial-gradient(circle_at_center,_#4CC2FF55,_transparent_70%)] blur-3xl" />
//           <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[520px] w-[820px] bg-[radial-gradient(circle_at_center,_#9B5DFF33,_transparent_70%)] blur-3xl" />
//         </div>

//         {/* subtle grid / dots */}
//         <div className="absolute inset-0 opacity-[0.10]">
//           <motion.div
//             className="h-full w-full"
//             style={{
//               backgroundImage:
//                 "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.55) 1px, transparent 0)",
//               backgroundSize: "56px 56px",
//               maskImage:
//                 "radial-gradient(circle at 50% 35%, black 0%, transparent 75%)",
//               WebkitMaskImage:
//                 "radial-gradient(circle at 50% 35%, black 0%, transparent 75%)",
//             }}
//             animate={
//               reduce
//                 ? undefined
//                 : { backgroundPosition: ["0px 0px", "56px 56px"] }
//             }
//             transition={
//               reduce
//                 ? undefined
//                 : { duration: 44, repeat: Infinity, ease: "linear" }
//             }
//           />
//         </div>

//         {/* bottom fade (extra safety to kill any seam) */}
//         <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#020410]" />
//       </div>

//       {/* content */}
//       <motion.div
//         className="relative z-10 mx-auto flex min-h-screen max-w-[1400px] items-center justify-center px-6 md:px-12 lg:px-20 text-center text-[#F5EFE7]"
//         style={{ y: reduce ? 0 : y }}
//       >
//         <motion.div
//           initial={{ opacity: 0, y: 26 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
//           className="w-full"
//         >
//           {/* badge */}
//           <motion.div
//             className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/5 px-5 py-2.5 backdrop-blur-xl shadow-[0_0_30px_rgba(76,194,255,0.25)]"
//             animate={reduce ? undefined : { y: [0, -6, 0] }}
//             transition={
//               reduce
//                 ? undefined
//                 : { duration: 4, repeat: Infinity, ease: "easeInOut" }
//             }
//           >
//             <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]" />
//             <span className="text-xs md:text-sm uppercase tracking-[0.22em] text-[#E8F2FF]">
//               {pricingData.hero.badge}
//             </span>
//           </motion.div>

//           {/* title */}
//           <h1 className="mx-auto max-w-5xl text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] tracking-tight ">
//             <span className="bg-gradient-to-r from-[#EAF2FF] via-[#CFE7FF] to-[#EFD9FF] bg-clip-text text-transparent drop-shadow-[0_0_22px_rgba(76,194,255,0.20)]">
//               {pricingData.hero.title}
//             </span>
//           </h1>

//           {/* gradient line */}
//           <div className="mx-auto mt-7 h-[2px] w-24 md:w-28 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF] opacity-90" />

//           {/* subtitle */}
//           <p className="mx-auto mt-7 max-w-4xl text-base md:text-xl lg:text-2xl leading-relaxed text-[#E8ECF4] opacity-85">
//             {pricingData.hero.subtitle}
//           </p>

//           {/* guarantee */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.92 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.65, delay: 0.55, ease: EASE }}
//             className="mx-auto mt-10 inline-flex items-center gap-3 rounded-2xl border border-white/12 bg-white/5 px-5 py-3 backdrop-blur-xl shadow-[0_0_40px_rgba(58,123,255,0.22)]"
//           >
//             <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(58,123,255,0.35),_rgba(5,8,22,0.9))] shadow-[0_0_30px_rgba(58,123,255,0.45)]">
//               <Shield className="h-5 w-5 text-[#E8F2FF]" />
//             </span>
//             <span className="text-xs md:text-sm uppercase tracking-[0.18em] text-[#DDE6F5]">
//               {pricingData.hero.guarantee}
//             </span>
//           </motion.div>

//           {/* CTA */}
//           <motion.div
//             initial={{ opacity: 0, y: 18 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, delay: 0.75, ease: EASE }}
//             className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
//           >
//             <motion.a
//               href="#contact"
//               className="group relative inline-flex items-center justify-center overflow-hidden rounded-full px-9 py-3.5 md:px-11 md:py-4 text-sm md:text-base font-medium text-[#050816] shadow-[0_0_45px_rgba(76,194,255,0.55)]"
//               whileHover={{ scale: 1.03 }}
//               whileTap={{ scale: 0.98 }}
//             >
//               <span className="absolute inset-0 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]" />
//               <motion.span
//                 className="absolute inset-0 bg-[linear-gradient(120deg,_transparent_0%,_white_20%,_transparent_40%)] opacity-0"
//                 initial={{ x: "-120%" }}
//                 whileHover={{ x: "120%", opacity: 0.5 }}
//                 transition={{ duration: 0.75, ease: "easeInOut" }}
//               />
//               <span className="relative z-10">Запросить демо</span>
//               <ArrowRight className="relative z-10 ml-2 h-4 w-4 md:h-5 md:w-5 transition-transform group-hover:translate-x-1" />
//             </motion.a>

//             <motion.a
//               href="#comparison"
//               className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-9 py-3.5 md:px-11 md:py-4 text-sm md:text-base text-[#E8ECF4] backdrop-blur-xl hover:bg-white/8 transition-colors"
//               whileHover={{ y: -2 }}
//             >
//               <span>Сравнить пакеты</span>
//               <ArrowRight className="h-4 w-4 md:h-5 md:w-5 opacity-80" />
//             </motion.a>
//           </motion.div>
//         </motion.div>
//       </motion.div>

//       {/* decorative (keep, but don't clip) */}
//       <div
//         className="pointer-events-none absolute inset-0 z-0"
//         aria-hidden="true"
//       >
//         <FloatingPriceTags />
//       </div>

//       {/* floating corner cube */}
//       <motion.div
//         className="pointer-events-none absolute top-16 right-4 md:right-10 z-0 h-20 w-20 rounded-3xl border border-[#3A7BFF33] bg-[radial-gradient(circle_at_top,_#3A7BFF33,_transparent_70%)] opacity-50"
//         animate={reduce ? undefined : { rotate: 360, scale: [1, 1.08, 1] }}
//         transition={
//           reduce
//             ? undefined
//             : {
//                 rotate: { duration: 26, repeat: Infinity, ease: "linear" },
//                 scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
//               }
//         }
//         aria-hidden="true"
//       />
//     </section>
//   );
// }


"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { ArrowRight, Shield } from "lucide-react";

import { pricingData } from "@/src/data/pricingData";
import { FloatingPriceTags } from "./FloatingPriceTags";
import { PageContainer } from "../Layout/PageContainer";


const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function PricingHero() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-visible"
    >
      {/* LOCAL FX (clip only background, not content) */}
      <div
        className="
          pointer-events-none absolute inset-0 -z-10 overflow-hidden
          [mask-image:linear-gradient(to_bottom,black_0%,black_82%,transparent_100%)]
          [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_82%,transparent_100%)]
        "
        aria-hidden="true"
      >
        {/* soft spots */}
        <div className="absolute inset-0 opacity-70">
          <div className="absolute -top-44 -left-40 h-[520px] w-[520px] bg-[radial-gradient(circle_at_center,_#3A7BFF55,_transparent_70%)] blur-3xl" />
          <div className="absolute -bottom-48 -right-24 h-[620px] w-[620px] bg-[radial-gradient(circle_at_center,_#4CC2FF55,_transparent_70%)] blur-3xl" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[520px] w-[820px] bg-[radial-gradient(circle_at_center,_#9B5DFF33,_transparent_70%)] blur-3xl" />
        </div>

        {/* subtle grid / dots */}
        <div className="absolute inset-0 opacity-[0.10]">
          <motion.div
            className="h-full w-full"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.55) 1px, transparent 0)",
              backgroundSize: "56px 56px",
              maskImage:
                "radial-gradient(circle at 50% 35%, black 0%, transparent 75%)",
              WebkitMaskImage:
                "radial-gradient(circle at 50% 35%, black 0%, transparent 75%)",
            }}
            animate={
              reduce
                ? undefined
                : { backgroundPosition: ["0px 0px", "56px 56px"] }
            }
            transition={
              reduce
                ? undefined
                : { duration: 44, repeat: Infinity, ease: "linear" }
            }
          />
        </div>

        {/* bottom fade (extra safety to kill any seam) */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#020410]" />
      </div>

      {/* content (единственный источник padding по ширине) */}
      <motion.div
        className="relative z-10 flex min-h-screen items-center justify-center text-center text-[#F5EFE7]"
        style={{ y: reduce ? 0 : y }}
      >
        <PageContainer className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
            className="w-full"
          >
            {/* badge */}
            <motion.div
              className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/5 px-5 py-2.5 backdrop-blur-xl shadow-[0_0_30px_rgba(76,194,255,0.25)]"
              animate={reduce ? undefined : { y: [0, -6, 0] }}
              transition={
                reduce
                  ? undefined
                  : { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }
            >
              <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]" />
              <span className="text-xs md:text-sm uppercase tracking-[0.22em] text-[#E8F2FF]">
                {pricingData.hero.badge}
              </span>
            </motion.div>

            {/* title */}
            <h1 className="mx-auto max-w-5xl text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] tracking-tight">
              <span className="bg-gradient-to-r from-[#EAF2FF] via-[#CFE7FF] to-[#EFD9FF] bg-clip-text text-transparent drop-shadow-[0_0_22px_rgba(76,194,255,0.20)]">
                {pricingData.hero.title}
              </span>
            </h1>

            {/* gradient line */}
            <div className="mx-auto mt-7 h-[2px] w-24 md:w-28 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF] opacity-90" />

            {/* subtitle */}
            <p className="mx-auto mt-7 max-w-4xl text-base md:text-xl lg:text-2xl leading-relaxed text-[#E8ECF4] opacity-85">
              {pricingData.hero.subtitle}
            </p>

            {/* guarantee */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.65, delay: 0.55, ease: EASE }}
              className="mx-auto mt-10 inline-flex items-center gap-3 rounded-2xl border border-white/12 bg-white/5 px-5 py-3 backdrop-blur-xl shadow-[0_0_40px_rgba(58,123,255,0.22)]"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(58,123,255,0.35),_rgba(5,8,22,0.9))] shadow-[0_0_30px_rgba(58,123,255,0.45)]">
                <Shield className="h-5 w-5 text-[#E8F2FF]" />
              </span>
              <span className="text-xs md:text-sm uppercase tracking-[0.18em] text-[#DDE6F5]">
                {pricingData.hero.guarantee}
              </span>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.75, ease: EASE }}
              className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <motion.a
                href="#contact"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full px-9 py-3.5 md:px-11 md:py-4 text-sm md:text-base font-medium text-[#050816] shadow-[0_0_45px_rgba(76,194,255,0.55)]"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]" />
                <motion.span
                  className="absolute inset-0 bg-[linear-gradient(120deg,_transparent_0%,_white_20%,_transparent_40%)] opacity-0"
                  initial={{ x: "-120%" }}
                  whileHover={{ x: "120%", opacity: 0.5 }}
                  transition={{ duration: 0.75, ease: "easeInOut" }}
                />
                <span className="relative z-10">Запросить демо</span>
                <ArrowRight className="relative z-10 ml-2 h-4 w-4 md:h-5 md:w-5 transition-transform group-hover:translate-x-1" />
              </motion.a>

              <motion.a
                href="#comparison"
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-9 py-3.5 md:px-11 md:py-4 text-sm md:text-base text-[#E8ECF4] backdrop-blur-xl hover:bg-white/8 transition-colors"
                whileHover={{ y: -2 }}
              >
                <span>Сравнить пакеты</span>
                <ArrowRight className="h-4 w-4 md:h-5 md:w-5 opacity-80" />
              </motion.a>
            </motion.div>
          </motion.div>
        </PageContainer>
      </motion.div>

      {/* decorative (keep, but don't clip) */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden="true"
      >
        <FloatingPriceTags />
      </div>

      {/* floating corner cube */}
      <motion.div
        className="pointer-events-none absolute top-16 right-4 md:right-10 z-0 h-20 w-20 rounded-3xl border border-[#3A7BFF33] bg-[radial-gradient(circle_at_top,_#3A7BFF33,_transparent_70%)] opacity-50"
        animate={reduce ? undefined : { rotate: 360, scale: [1, 1.08, 1] }}
        transition={
          reduce
            ? undefined
            : {
                rotate: { duration: 26, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              }
        }
        aria-hidden="true"
      />
    </section>
  );
}
