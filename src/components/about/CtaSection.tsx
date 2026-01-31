
// "use client";

// import { motion, useReducedMotion } from "motion/react";
// import { ArrowUpRight, ArrowRight, Sparkles } from "lucide-react";

// const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

// export function CtaSection() {
//   const reduce = useReducedMotion();

//   return (
//     <section
//       className="
//         relative overflow-hidden
//         bg-[#050816]
//         px-6 md:px-12 lg:px-20
//         py-24 md:py-32 lg:py-40
//       "
//       aria-label="Call to action"
//     >
//       {/* background spots */}
//       <div className="pointer-events-none absolute inset-0 opacity-60">
//         <div className="absolute -top-44 -left-40 h-96 w-96 bg-[radial-gradient(circle_at_center,_#3A7BFF55,_transparent_70%)] blur-3xl" />
//         <div className="absolute -bottom-52 -right-24 h-[520px] w-[520px] bg-[radial-gradient(circle_at_center,_#4CC2FF55,_transparent_70%)] blur-3xl" />
//       </div>

//       {/* grid overlay */}
//       <div className="pointer-events-none absolute inset-0 opacity-[0.10] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:64px_64px]" />

//       <div className="relative z-10 max-w-[1100px] mx-auto text-center">
//         <motion.div
//           initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.75, ease: EASE }}
//           viewport={{ once: true, margin: "-120px" }}
//         >
//           {/* icon badge */}
//           <motion.div
//             className="
//               inline-flex items-center justify-center
//               h-14 w-14 md:h-16 md:w-16
//               rounded-2xl
//               border border-white/15
//               bg-[radial-gradient(circle_at_top,_#3A7BFF3b,_#050816)]
//               shadow-[0_0_55px_rgba(76,194,255,0.35)]
//               mb-6 md:mb-8
//             "
//             animate={reduce ? undefined : { y: [0, -6, 0] }}
//             transition={
//               reduce
//                 ? undefined
//                 : { duration: 3.2, repeat: Infinity, ease: "easeInOut" }
//             }
//             aria-hidden="true"
//           >
//             <Sparkles className="h-7 w-7 md:h-8 md:w-8 text-[#E8F2FF]" />
//           </motion.div>

//           <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold tracking-tight leading-[0.95] text-[#F5EFE7] mb-5 md:mb-7">
//             Давайте запустим сайт,
//             <br className="hidden sm:block" /> который приводит заявки
//           </h2>

//           <p className="text-base md:text-xl lg:text-2xl text-[#C7CEDF] opacity-90 max-w-3xl mx-auto leading-relaxed mb-10 md:mb-12">
//             20 минут — и у вас будет понятный план: что сделать на сайте, как
//             вести в WhatsApp, и где подключить автоматизацию, чтобы не терять
//             клиентов.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 md:gap-5 justify-center items-center">
//             {/* Primary CTA */}
//             <motion.a
//               href="#contact"
//               className="
//                 relative inline-flex items-center justify-center gap-3
//                 overflow-hidden
//                 rounded-full
//                 px-8 py-4 md:px-10 md:py-5
//                 text-sm md:text-base font-medium
//                 text-[#050816]
//                 shadow-[0_0_45px_rgba(76,194,255,0.55)]
//               "
//               whileHover={reduce ? undefined : { scale: 1.03 }}
//               whileTap={{ scale: 0.98 }}
//               transition={{ duration: 0.25, ease: "easeOut" }}
//               aria-label="Обсудить задачу"
//             >
//               <span className="absolute inset-0 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]" />
//               <motion.span
//                 className="absolute inset-0 bg-[linear-gradient(120deg,_transparent_0%,_white_20%,_transparent_40%)] opacity-0"
//                 initial={{ x: "-120%" }}
//                 whileHover={reduce ? undefined : { x: "120%", opacity: 0.55 }}
//                 transition={{ duration: 0.8, ease: "easeInOut" }}
//                 aria-hidden="true"
//               />
//               <span className="relative z-10">Обсудить задачу</span>
//               <ArrowUpRight className="relative z-10 h-4 w-4" />
//             </motion.a>

//             {/* Secondary CTA */}
//             <motion.a
//               href="#cases"
//               className="
//                 inline-flex items-center gap-2
//                 rounded-full
//                 px-6 py-3 md:px-7 md:py-4
//                 border border-white/10
//                 bg-white/5 backdrop-blur-md
//                 text-sm md:text-base
//                 text-white/80 hover:text-white
//                 hover:border-white/15 hover:bg-white/7
//                 transition
//               "
//               whileHover={reduce ? undefined : { y: -2 }}
//               transition={{ duration: 0.22, ease: "easeOut" }}
//               aria-label="Посмотреть кейсы"
//             >
//               <span>Посмотреть кейсы</span>
//               <ArrowRight className="h-4 w-4 opacity-90" />
//             </motion.a>
//           </div>

//           {/* micro trust line */}
//           <p className="mt-6 text-xs sm:text-sm text-white/55">
//             Без «длинных созвонов» — коротко и по делу.
//           </p>
//         </motion.div>
//       </div>

//       {/* decorative quotes (subtle) */}
//       <div
//         className="pointer-events-none absolute top-14 left-6 md:left-10 text-[10rem] md:text-[14rem] opacity-[0.02] leading-none select-none text-white"
//         aria-hidden="true"
//       >
//         &rdquo;
//       </div>
//       <div
//         className="pointer-events-none absolute bottom-10 right-6 md:right-10 text-[10rem] md:text-[14rem] opacity-[0.02] leading-none select-none text-white"
//         aria-hidden="true"
//       >
//         &rdquo;
//       </div>
//     </section>
//   );
// }


"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, ArrowRight, Sparkles } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function CtaSection() {
  const reduce = useReducedMotion();

  return (
    <section
      className="
        relative overflow-visible
        px-6 md:px-12 lg:px-20
        py-24 md:py-32 lg:py-40
      "
      aria-label="Call to action"
    >
      {/* BACKGROUND (clip only background) */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* background spots */}
        <div className="absolute inset-0 opacity-60">
          <div className="absolute -top-44 -left-40 h-96 w-96 bg-[radial-gradient(circle_at_center,_#3A7BFF55,_transparent_70%)] blur-3xl" />
          <div className="absolute -bottom-52 -right-24 h-[520px] w-[520px] bg-[radial-gradient(circle_at_center,_#4CC2FF55,_transparent_70%)] blur-3xl" />
        </div>

        {/* grid overlay (softer) */}
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:64px_64px]" />

        {/* gentle fade so the section never “cuts” */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-b from-transparent to-[#020410]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1100px] text-center">
        <motion.div
          initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: EASE }}
          viewport={{ once: true, margin: "-120px" }}
        >
          {/* icon badge */}
          <motion.div
            className="
              inline-flex items-center justify-center
              h-14 w-14 md:h-16 md:w-16
              rounded-2xl
              border border-white/15
              bg-[radial-gradient(circle_at_top,_#3A7BFF3b,_#050816)]
              shadow-[0_0_55px_rgba(76,194,255,0.35)]
              mb-6 md:mb-8
            "
            animate={reduce ? undefined : { y: [0, -6, 0] }}
            transition={
              reduce
                ? undefined
                : { duration: 3.2, repeat: Infinity, ease: "easeInOut" }
            }
            aria-hidden="true"
          >
            <Sparkles className="h-7 w-7 md:h-8 md:w-8 text-[#E8F2FF]" />
          </motion.div>

          <h2 className="mb-5 text-3xl font-semibold tracking-tight leading-[0.95] text-[#F5EFE7] sm:text-4xl md:mb-7 md:text-6xl lg:text-7xl xl:text-8xl">
            Давайте запустим сайт,
            <br className="hidden sm:block" /> который приводит заявки
          </h2>

          <p className="mx-auto mb-10 max-w-3xl text-base leading-relaxed text-[#C7CEDF] opacity-90 md:mb-12 md:text-xl lg:text-2xl">
            20 минут — и у вас будет понятный план: что сделать на сайте, как
            вести в WhatsApp, и где подключить автоматизацию, чтобы не терять
            клиентов.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row md:gap-5">
            {/* Primary CTA */}
            <motion.a
              href="#contact"
              className="
                relative inline-flex items-center justify-center gap-3
                overflow-hidden rounded-full
                px-8 py-4 md:px-10 md:py-5
                text-sm md:text-base font-medium
                text-[#050816]
                shadow-[0_0_45px_rgba(76,194,255,0.55)]
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4CC2FF]/70 focus-visible:ring-offset-0
              "
              whileHover={reduce ? undefined : { scale: 1.03 }}
              whileTap={reduce ? undefined : { scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              aria-label="Обсудить задачу"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]" />
              <motion.span
                className="absolute inset-0 bg-[linear-gradient(120deg,_transparent_0%,_white_20%,_transparent_40%)] opacity-0"
                initial={{ x: "-120%" }}
                whileHover={reduce ? undefined : { x: "120%", opacity: 0.55 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                aria-hidden="true"
              />
              <span className="relative z-10">Обсудить задачу</span>
              <ArrowUpRight className="relative z-10 h-4 w-4" />
            </motion.a>

            {/* Secondary CTA */}
            <motion.a
              href="#cases"
              className="
                inline-flex items-center gap-2
                rounded-full
                px-6 py-3 md:px-7 md:py-4
                border border-white/10
                bg-white/5 backdrop-blur-md
                text-sm md:text-base
                text-white/80 hover:text-white
                hover:border-white/15 hover:bg-white/7
                transition
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/25
              "
              whileHover={reduce ? undefined : { y: -2 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              aria-label="Посмотреть кейсы"
            >
              <span>Посмотреть кейсы</span>
              <ArrowRight className="h-4 w-4 opacity-90" />
            </motion.a>
          </div>

          <p className="mt-6 text-xs text-white/55 sm:text-sm">
            Без «длинных созвонов» — коротко и по делу.
          </p>
        </motion.div>
      </div>

      {/* decorative quotes (subtle) */}
      <div
        className="pointer-events-none absolute left-6 top-14 select-none text-[10rem] leading-none text-white opacity-[0.02] md:left-10 md:text-[14rem]"
        aria-hidden="true"
      >
        &rdquo;
      </div>
      <div
        className="pointer-events-none absolute bottom-10 right-6 select-none text-[10rem] leading-none text-white opacity-[0.02] md:right-10 md:text-[14rem]"
        aria-hidden="true"
      >
        &rdquo;
      </div>
    </section>
  );
}
