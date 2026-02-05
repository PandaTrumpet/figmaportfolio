

// "use client";

// import { motion, useReducedMotion } from "motion/react";
// import { ArrowRight, Sparkles, Star } from "lucide-react";
// import { FloatingShapes } from "./FloatingShapes";

// const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

// export function ReviewsFinalCTA({
//   cta,
//   Particles,
// }: {
//   cta: { title: string; subtitle: string; button: string };
//   Particles: React.ComponentType;
// }) {
//   const reduce = useReducedMotion();

//   return (
//     <section className="relative overflow-visible px-6 md:px-12 lg:px-20 py-28 md:py-36 lg:py-44 text-[#F5EFE7]">
//       {/* BACKGROUND: clip wrapper — режем фон, НЕ контент (убирает швы) */}
//       <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
//         {/* night waves spots */}
//         <div className="absolute inset-0 opacity-70">
//           <div className="absolute -top-40 -left-40 h-[520px] w-[520px] bg-[radial-gradient(circle_at_center,_rgba(58,123,255,0.55),_transparent_70%)] blur-3xl" />
//           <div className="absolute -bottom-56 -right-24 h-[620px] w-[620px] bg-[radial-gradient(circle_at_center,_rgba(76,194,255,0.50),_transparent_70%)] blur-3xl" />
//           <div className="absolute top-1/3 -right-40 h-[520px] w-[520px] bg-[radial-gradient(circle_at_center,_rgba(155,93,255,0.34),_transparent_70%)] blur-3xl" />
//         </div>

//         {/* subtle grid */}
//         <div className="absolute inset-0 opacity-[0.10] [mask-image:radial-gradient(circle_at_center,black_50%,transparent_78%)]">
//           <div className="h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:56px_56px]" />
//         </div>

//         {/* seam-killers */}
//         <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-t from-transparent to-[#020410]" />
//         <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#020410]" />
//       </div>

//       {/* content */}
//       <div className="relative z-10 max-w-[1400px] mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9, ease: EASE }}
//           viewport={{ once: true }}
//           className="relative overflow-hidden rounded-[36px] border border-white/10
//                      bg-gradient-to-b from-[#060A13] via-[#050816] to-[#02030A]
//                      px-6 py-14 md:px-12 md:py-16 lg:px-16 lg:py-20 text-center
//                      shadow-[0_28px_110px_rgba(0,0,0,0.9)] backdrop-blur-xl"
//         >
//           {/* inner glows */}
//           <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(58,123,255,0.20),_transparent_55%)]" />
//           <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(76,194,255,0.16),_transparent_60%)]" />

//           {/* contour mask */}
//           <div
//             className="pointer-events-none absolute inset-0 rounded-[36px] border border-transparent"
//             style={{
//               background: "linear-gradient(135deg, #3A7BFF, #4CC2FF, #9B5DFF)",
//               WebkitMask:
//                 "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
//               WebkitMaskComposite: "xor",
//               maskComposite: "exclude",
//               padding: "1px",
//               opacity: 0.22,
//             }}
//           />

//           {/* floating icons */}
//           <div className="flex items-center justify-center gap-5 md:gap-7 mb-10">
//             <motion.div
//               className="relative flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-2xl border border-white/15
//                          bg-[radial-gradient(circle_at_top,_#3A7BFF3b,_#050816)] overflow-hidden
//                          shadow-[0_0_55px_rgba(58,123,255,0.55)]"
//               animate={
//                 reduce ? undefined : { y: [0, -10, 0], rotate: [0, 8, 0] }
//               }
//               transition={
//                 reduce
//                   ? undefined
//                   : { duration: 4, repeat: Infinity, ease: "easeInOut" }
//               }
//               aria-hidden="true"
//             >
//               <Sparkles className="relative z-20 h-7 w-7 text-[#E8F2FF]" />
//               <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#3A7BFF66] to-[#4CC2FF66] opacity-45" />
//             </motion.div>

//             <motion.div
//               className="relative flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-2xl border border-white/15
//                          bg-[radial-gradient(circle_at_top,_#4CC2FF3b,_#050816)] overflow-hidden
//                          shadow-[0_0_60px_rgba(76,194,255,0.55)]"
//               animate={reduce ? undefined : { scale: [1, 1.12, 1] }}
//               transition={
//                 reduce
//                   ? undefined
//                   : { duration: 3.2, repeat: Infinity, ease: "easeInOut" }
//               }
//               aria-hidden="true"
//             >
//               <Star className="relative z-20 h-7 w-7 text-[#E8F2FF] fill-[#E8F2FF]" />
//               <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#4CC2FF66] to-[#9B5DFF66] opacity-40" />
//             </motion.div>
//           </div>

//           <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight leading-[1.02] mb-6">
//             {cta.title}
//           </h2>

//           <p className="text-sm md:text-lg lg:text-xl text-[#C7CEDF] max-w-3xl mx-auto leading-relaxed mb-10">
//             {cta.subtitle}
//           </p>

//           {/* CTA button */}
//           <motion.a
//             href="#contact" // лучше: "#contact-form" чтобы не прыгать на эту же секцию
//             className="group relative inline-flex items-center justify-center gap-4 overflow-hidden rounded-full
//                        px-10 py-3.5 md:px-12 md:py-4 text-sm md:text-base font-medium
//                        text-[#050816] shadow-[0_0_45px_rgba(76,194,255,0.55)]"
//             whileHover={reduce ? undefined : { scale: 1.03 }}
//             whileTap={{ scale: 0.97 }}
//             transition={{ duration: 0.2, ease: "easeOut" }}
//           >
//             <span className="absolute inset-0 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]" />
//             <motion.span
//               className="absolute inset-0 bg-[linear-gradient(120deg,_transparent_0%,_white_20%,_transparent_40%)] opacity-0"
//               initial={{ x: "-100%" }}
//               whileHover={reduce ? undefined : { x: "100%", opacity: 0.5 }}
//               transition={{ duration: 0.7, ease: "easeInOut" }}
//             />
//             <span className="relative z-10">{cta.button}</span>
//             <ArrowRight className="relative z-10 h-5 w-5 md:h-6 md:w-6 transition-transform group-hover:translate-x-2" />
//           </motion.a>

//           {/* sheen across panel */}
//           <motion.div
//             className="pointer-events-none absolute -inset-16 bg-[linear-gradient(115deg,_transparent_0%,_rgba(255,255,255,0.14)_30%,_transparent_60%)] mix-blend-screen"
//             initial={{ x: "-140%" }}
//             whileInView={{ x: "140%" }}
//             transition={{ duration: 1.6, ease: "easeInOut", delay: 0.4 }}
//             viewport={{ once: true }}
//           />
//         </motion.div>
//       </div>

//       {/* particles + shapes — above background, below content */}
//       <div className="pointer-events-none absolute inset-0 z-[1]">
//         <Particles />
//       </div>

//       <div className="pointer-events-none absolute inset-0 z-[2]">
//         <FloatingShapes />
//       </div>
//     </section>
//   );
// }



"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import { FloatingShapes } from "./FloatingShapes";
import { PageContainer } from "../Layout/PageContainer";
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function ReviewsFinalCTA({
  cta,
  Particles,
}: {
  cta: { title: string; subtitle: string; button: string };
  Particles: React.ComponentType;
}) {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-visible py-28 md:py-36 lg:py-44 text-[#F5EFE7]">
      {/* BACKGROUND: clip wrapper — режем фон, НЕ контент */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* night waves spots */}
        <div className="absolute inset-0 opacity-70">
          <div className="absolute -top-40 -left-40 h-[520px] w-[520px] bg-[radial-gradient(circle_at_center,_rgba(58,123,255,0.55),_transparent_70%)] blur-3xl" />
          <div className="absolute -bottom-56 -right-24 h-[620px] w-[620px] bg-[radial-gradient(circle_at_center,_rgba(76,194,255,0.50),_transparent_70%)] blur-3xl" />
          <div className="absolute top-1/3 -right-40 h-[520px] w-[520px] bg-[radial-gradient(circle_at_center,_rgba(155,93,255,0.34),_transparent_70%)] blur-3xl" />
        </div>

        {/* subtle grid */}
        <div className="absolute inset-0 opacity-[0.10] [mask-image:radial-gradient(circle_at_center,black_50%,transparent_78%)]">
          <div className="h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:56px_56px]" />
        </div>

        {/* seam-killers */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-t from-transparent to-[#020410]" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#020410]" />
      </div>

      {/* particles + shapes — строго под контентом */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <Particles />
      </div>
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <FloatingShapes />
      </div>

      {/* content */}
      <PageContainer className="relative z-10">
        <motion.div
          initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE }}
          viewport={{ once: true, margin: "-120px" }}
          className="
            relative overflow-hidden
            rounded-[36px] border border-white/10
            bg-gradient-to-b from-[#060A13] via-[#050816] to-[#02030A]
            px-6 py-14 md:px-12 md:py-16 lg:px-16 lg:py-20
            text-center
            shadow-[0_28px_110px_rgba(0,0,0,0.9)]
            backdrop-blur-xl
          "
        >
          {/* inner glows */}
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(58,123,255,0.20),_transparent_55%)]"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(76,194,255,0.16),_transparent_60%)]"
            aria-hidden="true"
          />

          {/* contour mask */}
          <div
            className="pointer-events-none absolute inset-0 rounded-[36px] border border-transparent"
            style={{
              background: "linear-gradient(135deg, #3A7BFF, #4CC2FF, #9B5DFF)",
              WebkitMask:
                "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
              padding: "1px",
              opacity: 0.22,
            }}
            aria-hidden="true"
          />

          {/* floating icons */}
          <div className="flex items-center justify-center gap-5 md:gap-7 mb-10">
            <motion.div
              className="
                relative flex h-14 w-14 md:h-16 md:w-16 items-center justify-center
                rounded-2xl border border-white/15
                bg-[radial-gradient(circle_at_top,_#3A7BFF3b,_#050816)]
                overflow-hidden
                shadow-[0_0_55px_rgba(58,123,255,0.55)]
              "
              animate={
                reduce ? undefined : { y: [0, -10, 0], rotate: [0, 8, 0] }
              }
              transition={
                reduce
                  ? undefined
                  : { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }
              aria-hidden="true"
            >
              <Sparkles className="relative z-20 h-7 w-7 text-[#E8F2FF]" />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#3A7BFF66] to-[#4CC2FF66] opacity-45" />
            </motion.div>

            <motion.div
              className="
                relative flex h-14 w-14 md:h-16 md:w-16 items-center justify-center
                rounded-2xl border border-white/15
                bg-[radial-gradient(circle_at_top,_#4CC2FF3b,_#050816)]
                overflow-hidden
                shadow-[0_0_60px_rgba(76,194,255,0.55)]
              "
              animate={reduce ? undefined : { scale: [1, 1.12, 1] }}
              transition={
                reduce
                  ? undefined
                  : { duration: 3.2, repeat: Infinity, ease: "easeInOut" }
              }
              aria-hidden="true"
            >
              <Star className="relative z-20 h-7 w-7 text-[#E8F2FF] fill-[#E8F2FF]" />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#4CC2FF66] to-[#9B5DFF66] opacity-40" />
            </motion.div>
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight leading-[1.02] mb-6">
            {cta.title}
          </h2>

          <p className="text-sm md:text-lg lg:text-xl text-[#C7CEDF] max-w-3xl mx-auto leading-relaxed mb-10">
            {cta.subtitle}
          </p>

          {/* CTA button */}
          {/* <motion.a
            href="#contact"
            className="
              group relative inline-flex items-center justify-center gap-4
              overflow-hidden rounded-full
              px-10 py-3.5 md:px-12 md:py-4
              text-sm md:text-base font-medium
              text-[#050816]
              shadow-[0_0_45px_rgba(76,194,255,0.55)]
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4CC2FF]/70
            "
            whileHover={reduce ? undefined : { scale: 1.03 }}
            whileTap={reduce ? undefined : { scale: 0.97 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]" />
            <motion.span
              className="absolute inset-0 bg-[linear-gradient(120deg,_transparent_0%,_white_20%,_transparent_40%)] opacity-0"
              initial={{ x: "-100%" }}
              whileHover={reduce ? undefined : { x: "100%", opacity: 0.5 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              aria-hidden="true"
            />
            <span className="relative z-10">{cta.button}</span>
            <ArrowRight className="relative z-10 h-5 w-5 md:h-6 md:w-6 transition-transform group-hover:translate-x-2" />
          </motion.a> */}
          <motion.a
            href="#contact"
            className="
    group relative inline-flex items-center justify-center gap-4
    overflow-hidden rounded-full
    px-10 py-3.5 md:px-12 md:py-4
    text-sm md:text-base font-medium
    text-[#050816]

    shadow-[0_0_40px_rgba(76,194,255,0.55)]
    hover:shadow-[0_0_65px_rgba(76,194,255,0.85)]
    transition-shadow

    focus-visible:outline-none
    focus-visible:ring-2 focus-visible:ring-[#4CC2FF]/70
  "
            whileHover={reduce ? undefined : { scale: 1.03 }}
            whileTap={reduce ? undefined : { scale: 0.97 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            {/* Unified gradient palette */}
            <span className="absolute inset-0 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]" />

            {/* Unified hover highlight */}
            <span
              className="
      pointer-events-none absolute inset-0 rounded-full
      bg-white/10 opacity-0
      group-hover:opacity-100 transition-opacity
    "
              aria-hidden="true"
            />

            <span className="relative z-10">{cta.button}</span>
            <ArrowRight className="relative z-10 h-5 w-5 md:h-6 md:w-6 transition-transform group-hover:translate-x-2" />
          </motion.a>

          {/* sheen across panel */}
          <motion.div
            className="pointer-events-none absolute -inset-16 bg-[linear-gradient(115deg,_transparent_0%,_rgba(255,255,255,0.14)_30%,_transparent_60%)] mix-blend-screen"
            initial={{ x: "-140%" }}
            whileInView={reduce ? undefined : { x: "140%" }}
            transition={{ duration: 1.6, ease: "easeInOut", delay: 0.4 }}
            viewport={{ once: true }}
            aria-hidden="true"
          />
        </motion.div>
      </PageContainer>
    </section>
  );
}
