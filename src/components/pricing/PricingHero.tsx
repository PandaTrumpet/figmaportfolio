

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

// import { PageContainer } from "../Layout/PageContainer";
// import Image from "next/image";


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
//       className="relative min-h-screen  pt-22 pb-12
//         md:pt-28 md:pb-16
//         lg:pt-30 lg:pb-20  overflow-visible"
//     >
//       <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
//         {/* background image */}
//         <div className="absolute inset-0">
//           <Image
//             src="https://images.unsplash.com/photo-1762831063004-bbd3ea38ba3a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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

//       {/* content (единственный источник padding по ширине) */}
//       <motion.div
//         className="relative z-10 flex min-h-screen items-center justify-center text-center text-[#F5EFE7]"
//         style={{ y: reduce ? 0 : y }}
//       >
//         <PageContainer className="w-full">
//           <motion.div
//             initial={{ opacity: 0, y: 26 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
//             className="w-full"
//           >
//             {/* badge */}

//             {/* title */}
//             <h1 className="mx-auto max-w-5xl text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] tracking-tight">
//               <span className="bg-gradient-to-r from-[#EAF2FF] via-[#CFE7FF] to-[#EFD9FF] bg-clip-text text-transparent drop-shadow-[0_0_22px_rgba(76,194,255,0.20)]">
//                 {pricingData.hero.title}
//               </span>
//             </h1>

//             {/* gradient line */}
//             <div className="mx-auto mt-7 h-[2px] w-24 md:w-28 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF] opacity-90" />

//             {/* subtitle */}
//             <p className="mx-auto mt-7 max-w-4xl text-base md:text-xl lg:text-2xl leading-relaxed text-[#E8ECF4] opacity-85">
//               {pricingData.hero.subtitle}
//             </p>

//             {/* guarantee */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.92 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.65, delay: 0.55, ease: EASE }}
//               className="mx-auto mt-10 inline-flex items-center gap-3 rounded-2xl border border-white/12 bg-white/5 px-5 py-3 backdrop-blur-xl shadow-[0_0_40px_rgba(58,123,255,0.22)]"
//             >
//               <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(58,123,255,0.35),_rgba(5,8,22,0.9))] shadow-[0_0_30px_rgba(58,123,255,0.45)]">
//                 <Shield className="h-5 w-5 text-[#E8F2FF]" />
//               </span>
//               <span className="text-xs md:text-sm uppercase tracking-[0.18em] text-[#DDE6F5]">
//                 {pricingData.hero.guarantee}
//               </span>
//             </motion.div>

//             {/* CTA */}
//             <motion.div
//               initial={{ opacity: 0, y: 18 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7, delay: 0.75, ease: EASE }}
//               className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
//             >
         
//               <motion.a
//                 href="#contact"
//                 className="
//     group relative inline-flex items-center justify-center
//     overflow-hidden rounded-full
//     px-9 py-3.5 md:px-11 md:py-4
//     text-sm md:text-base font-medium
//     text-[#050816]

//     shadow-[0_0_40px_rgba(76,194,255,0.55)]
//     hover:shadow-[0_0_65px_rgba(76,194,255,0.85)]
//     transition-shadow
//   "
//                 whileHover={{ scale: 1.03 }}
//                 whileTap={{ scale: 0.97 }}
//               >
//                 {/* Main gradient — fixed palette */}
//                 <span className="absolute inset-0 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]" />

//                 {/* Depth / glass layer */}
//                 <span
//                   className="
//       pointer-events-none absolute inset-0
//       [background:linear-gradient(to_bottom,rgba(255,255,255,0.28),rgba(255,255,255,0.06)_45%,rgba(0,0,0,0.12))]
//       mix-blend-overlay
//     "
//                   aria-hidden="true"
//                 />

//                 {/* Hover soft highlight — unified */}
//                 <span
//                   className="
//       pointer-events-none absolute inset-0 rounded-full
//       bg-white/10 opacity-0
//       group-hover:opacity-100 transition-opacity
//     "
//                   aria-hidden="true"
//                 />

//                 <span className="relative z-10">Запросить демо</span>
//                 <ArrowRight className="relative z-10 ml-2 h-4 w-4 md:h-5 md:w-5 transition-transform group-hover:translate-x-1" />
//               </motion.a>

            
//               <motion.a
//                 href="#comparison"
//                 className="
//     relative group inline-flex items-center gap-2
//     rounded-full
//     px-9 py-3.5 md:px-11 md:py-4
//     text-sm md:text-base font-medium
//     text-[#F5EFE7]
//     backdrop-blur-sm
//     transition-all
//   "
//                 whileHover={{ y: -2 }}
//               >
//                 {/* Gradient border */}
//                 <span
//                   className="
//       pointer-events-none absolute inset-0 rounded-full p-[1px]
//       bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]
//     "
//                 >
//                   <span className="block h-full w-full rounded-full bg-[#050608]" />
//                 </span>

//                 {/* Soft inner glow */}
//                 <span
//                   className="
//       pointer-events-none absolute inset-0 rounded-full
//       bg-[radial-gradient(circle_at_center,rgba(76,194,255,0.25),transparent_60%)]
//       opacity-0 group-hover:opacity-100
//       transition-opacity
//     "
//                 />

//                 {/* Outer neon glow */}
//                 <span
//                   className="
//       pointer-events-none absolute inset-0 rounded-full
//       opacity-0 group-hover:opacity-100
//       transition-opacity
//       shadow-[0_0_34px_rgba(76,194,255,0.45)]
//     "
//                 />

//                 <span className="relative z-10">Сравнить пакеты</span>
//               </motion.a>
//             </motion.div>
//           </motion.div>
//         </PageContainer>
//       </motion.div>

//       {/* decorative (keep, but don't clip) */}
//       <div
//         className="pointer-events-none absolute inset-0 z-0"
//         aria-hidden="true"
//       ></div>

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
import { PageContainer } from "../Layout/PageContainer";
import Image from "next/image";

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
      className="
    relative min-h-[100svh]
    pt-22 pb-12
    md:pt-28 md:pb-16
    lg:pt-30 lg:pb-20
    overflow-visible
  "
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1762831063004-bbd3ea38ba3a?q=80&w=1170&auto=format&fit=crop"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-55 saturate-[0.85]"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-[#050814]/45 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#020410]" />
      </div>

      <motion.div
        className="relative z-10 flex items-center justify-center min-h-[calc(100svh-6rem)] text-center text-[#F5EFE7]"
        style={{ y: reduce ? 0 : y }}
      >
        <PageContainer>
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
            className="flex flex-col items-center text-center"
          >
            {/* TITLE */}
            <h1
              className="
            font-semibold tracking-tight text-balance
            leading-[0.98]

            max-w-[18ch]
            sm:max-w-[20ch]
            lg:max-w-[22ch]

            text-[clamp(2.35rem,5.8vw,4.8rem)]
            md:text-[clamp(2.9rem,5.0vw,5.2rem)]
            lg:text-[clamp(3.1rem,4.2vw,5.3rem)]
          "
            >
           
                {pricingData.hero.title}
           
            </h1>

            {/* SUBTITLE */}
            <p
              className="
            mt-7
            text-white/90
            leading-relaxed

            max-w-[52ch]
            lg:max-w-[60ch]

            text-[clamp(1.05rem,2.2vw,1.25rem)]
            md:text-[clamp(1.1rem,1.7vw,1.45rem)]
          "
            >
              {pricingData.hero.subtitle}
            </p>

            {/* GUARANTEE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.65, delay: 0.55, ease: EASE }}
              className="mt-10 inline-flex items-center gap-3 rounded-2xl border border-white/12 bg-white/5 px-5 py-3 backdrop-blur-xl shadow-[0_0_40px_rgba(58,123,255,0.22)]"
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
              {/* Primary */}
              <motion.a
                href="#contact"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full px-9 py-4 text-base font-medium text-[#050816] shadow-[0_0_40px_rgba(76,194,255,0.55)] hover:shadow-[0_0_65px_rgba(76,194,255,0.85)] transition-shadow"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]" />
                <span className="relative z-10">Запросить демо</span>
                <ArrowRight className="relative z-10 ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </motion.a>

              {/* Secondary */}
              <motion.a
                href="#comparison"
                className="relative group inline-flex items-center gap-2 rounded-full px-9 py-4 text-base font-medium text-[#F5EFE7] backdrop-blur-sm transition-all"
                whileHover={{ scale: 1.03 }}
              >
                <span className="pointer-events-none absolute inset-0 rounded-full p-[1px] bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]">
                  <span className="block h-full w-full rounded-full bg-[#050608]" />
                </span>
                <span className="relative z-10">Сравнить пакеты</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </PageContainer>
      </motion.div>
    </section>
  );
}
