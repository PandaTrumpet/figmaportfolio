// "use client";

// import { useRef } from "react";
// import {
//   motion,
//   useReducedMotion,
//   useScroll,
//   useTransform,
// } from "motion/react";
// import { ArrowRight, Shield } from "lucide-react";
// import { useTranslations } from "next-intl";

// import { buildPricingData } from "@/src/data/pricingData";
// import { PageContainer } from "../Layout/PageContainer";
// import Image from "next/image";
// import hero from '../../../public/PricingHero.avif'
// const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

// export function PricingHero() {
//   const reduce = useReducedMotion();
//   const sectionRef = useRef<HTMLElement | null>(null);

//   const t = useTranslations("pricingData");
//   const pricingData = buildPricingData(t);

//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start start", "end start"],
//   });

//   const y = useTransform(scrollYProgress, [0, 1], [0, -120]);

//   return (
//     <section
//       ref={sectionRef}
//       className="
//         relative min-h-[100svh]
//         pt-22 pb-12
//         md:pt-28 md:pb-16
//         lg:pt-30 lg:pb-20
//         overflow-visible
//       "
//     >
//       <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
//         <div className="absolute inset-0">
//           <Image
//             // src="https://images.unsplash.com/photo-1762831063004-bbd3ea38ba3a?q=80&w=1170&auto=format&fit=crop"
//             src={hero}
//             alt="Pricing page hero background"
//             fill
//             priority
//             sizes="(max-width: 768px) 100vw, (max-width: 1400px) 100vw, 1400px"
//             className="object-cover opacity-55 saturate-[0.85]"
//           />
//         </div>

//         <div className="absolute inset-0 bg-gradient-to-b from-[#050814]/45 via-transparent to-transparent" />
//         <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#020410]" />
//       </div>

//       <motion.div
//         className="relative z-10 flex items-center justify-center min-h-[calc(100svh-6rem)] text-center text-[#F5EFE7]"
//         style={{ y: reduce ? 0 : y }}
//       >
//         <PageContainer>
//           <motion.div
//             initial={{ opacity: 0, y: 26 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
//             className="flex flex-col items-center text-center"
//           >
//             {/* TITLE */}
//             <h1
//               className="
//                 font-semibold tracking-tight text-balance
//                 leading-[0.98]
//                 mb-6 md:mb-8
//                 max-w-[18ch]
//                 sm:max-w-[20ch]
//                 lg:max-w-[22ch]
//                 text-[clamp(2.35rem,5.8vw,4.8rem)]
//                 md:text-[clamp(2.9rem,5.0vw,5.2rem)]
//                 lg:text-[clamp(3.1rem,4.2vw,5.3rem)]
//               "
//             >
//               {pricingData.hero.title}
//             </h1>

//             {/* SUBTITLE */}
//             <p
//               className="
//                 leading-relaxed
//                 mb-10 md:mb-12
//                 text-white
//                 max-w-[48ch] md:max-w-[52ch] lg:max-w-[58ch]
//                 text-[clamp(1rem,1.4vw+0.6rem,1.35rem)]
//               "
//             >
//               {pricingData.hero.subtitle}
//             </p>

//             {/* GUARANTEE */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.92 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.65, delay: 0.55, ease: EASE }}
//               className="mt-10 inline-flex items-center gap-3 rounded-2xl border border-white/12 bg-white/5 px-5 py-3 backdrop-blur-xl shadow-[0_0_40px_rgba(58,123,255,0.22)]"
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
//               {/* Primary */}
//               <motion.a
//                 href={pricingData.hero.primaryCtaHref}
//                 className="group relative inline-flex items-center justify-center overflow-hidden rounded-full px-9 py-4 text-base font-medium text-[#050816] shadow-[0_0_40px_rgba(76,194,255,0.55)] hover:shadow-[0_0_65px_rgba(76,194,255,0.85)] transition-shadow"
//                 whileHover={{ scale: 1.03 }}
//                 whileTap={{ scale: 0.97 }}
//                 aria-label={pricingData.hero.primaryCtaAria}
//               >
//                 <span className="absolute inset-0 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]" />
//                 <span className="relative z-10">
//                   {pricingData.hero.primaryCtaLabel}
//                 </span>
//                 <ArrowRight className="relative z-10 ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
//               </motion.a>

//               {/* Secondary */}
//               <motion.a
//                 href={pricingData.hero.secondaryCtaHref}
//                 className="relative group inline-flex items-center gap-2 rounded-full px-9 py-4 text-base font-medium text-[#F5EFE7] backdrop-blur-sm transition-all"
//                 whileHover={{ scale: 1.03 }}
//                 aria-label={pricingData.hero.secondaryCtaAria}
//               >
//                 <span className="pointer-events-none absolute inset-0 rounded-full p-[1px] bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]">
//                   <span className="block h-full w-full rounded-full bg-[#050608]" />
//                 </span>
//                 <span className="relative z-10">
//                   {pricingData.hero.secondaryCtaLabel}
//                 </span>
//               </motion.a>
//             </motion.div>
//           </motion.div>
//         </PageContainer>
//       </motion.div>
//     </section>
//   );
// }

"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Shield } from "lucide-react";
import { useTranslations } from "next-intl";

import { buildPricingData } from "@/src/data/pricingData";
import { PageContainer } from "../Layout/PageContainer";
import Image from "next/image";
import hero from "../../../public/PricingHero.avif";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function PricingHero() {
  const reduce = useReducedMotion();
  const t = useTranslations("pricingData");
  const pricingData = buildPricingData(t);

  return (
    <section
      className="
        relative min-h-[100svh]
        pt-22 pb-12
        md:pt-28 md:pb-16
        lg:pt-30 lg:pb-20
        overflow-visible
      "
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
            sizes="(max-width: 768px) 100vw, (max-width: 1400px) 100vw, 1400px"
            className="object-cover opacity-55 saturate-[0.85]"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-[#050814]/45 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#020410]" />

        <div className="absolute inset-0 opacity-70">
          <div className="absolute -top-16 -left-12 h-48 w-48 bg-[radial-gradient(circle_at_center,_#3A7BFF33,_transparent_72%)] blur-2xl md:-top-40 md:-left-36 md:h-80 md:w-80 md:blur-3xl" />
          <div className="hidden md:block absolute top-[42%] -right-36 h-[420px] w-[420px] bg-[radial-gradient(circle_at_center,_#4CC2FF22,_transparent_72%)] blur-3xl" />
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-[calc(100svh-6rem)] text-center text-[#F5EFE7]">
        <PageContainer>
          <motion.div
            initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={
              reduce
                ? { duration: 0 }
                : { duration: 0.8, delay: 0.15, ease: EASE }
            }
            className="flex flex-col items-center text-center"
          >
            <h1
              className="
                font-semibold tracking-tight text-balance
                leading-[0.98]
                mb-6 md:mb-8
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

            <p
              className="
                leading-relaxed
                mb-10 md:mb-12
                text-white
                max-w-[48ch] md:max-w-[52ch] lg:max-w-[58ch]
                text-[clamp(1rem,1.4vw+0.6rem,1.35rem)]
              "
            >
              {pricingData.hero.subtitle}
            </p>

            <motion.div
              initial={
                reduce ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }
              }
              animate={{ opacity: 1, scale: 1 }}
              transition={
                reduce
                  ? { duration: 0 }
                  : { duration: 0.65, delay: 0.55, ease: EASE }
              }
              className="mt-10 inline-flex items-center gap-3 rounded-2xl border border-white/12 bg-white/5 px-5 py-3 shadow-[0_0_30px_rgba(58,123,255,0.18)] md:backdrop-blur-xl"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(58,123,255,0.35),_rgba(5,8,22,0.9))] shadow-[0_0_20px_rgba(58,123,255,0.35)]">
                <Shield className="h-5 w-5 text-[#E8F2FF]" />
              </span>
              <span className="text-xs md:text-sm uppercase tracking-[0.18em] text-[#DDE6F5]">
                {pricingData.hero.guarantee}
              </span>
            </motion.div>

            <motion.div
              initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={
                reduce
                  ? { duration: 0 }
                  : { duration: 0.7, delay: 0.75, ease: EASE }
              }
              className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <motion.a
                href={pricingData.hero.primaryCtaHref}
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full px-9 py-4 text-base font-medium text-[#050816] shadow-[0_0_40px_rgba(76,194,255,0.55)] hover:shadow-[0_0_65px_rgba(76,194,255,0.85)] transition-shadow"
                whileHover={reduce ? undefined : { scale: 1.03 }}
                whileTap={reduce ? undefined : { scale: 0.97 }}
                aria-label={pricingData.hero.primaryCtaAria}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]" />
                <span className="relative z-10">
                  {pricingData.hero.primaryCtaLabel}
                </span>
                <ArrowRight className="relative z-10 ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </motion.a>

              <motion.a
                href={pricingData.hero.secondaryCtaHref}
                className="relative group inline-flex items-center gap-2 rounded-full px-9 py-4 text-base font-medium text-[#F5EFE7] transition-all md:backdrop-blur-sm"
                whileHover={reduce ? undefined : { scale: 1.03 }}
                aria-label={pricingData.hero.secondaryCtaAria}
              >
                <span className="pointer-events-none absolute inset-0 rounded-full p-[1px] bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]">
                  <span className="block h-full w-full rounded-full bg-[#050608]" />
                </span>
                <span className="relative z-10">
                  {pricingData.hero.secondaryCtaLabel}
                </span>
              </motion.a>
            </motion.div>
          </motion.div>
        </PageContainer>
      </div>
    </section>
  );
}