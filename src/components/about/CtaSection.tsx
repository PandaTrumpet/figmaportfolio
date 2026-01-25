// "use client";

// import { motion } from "motion/react";
// import { ArrowRight, Sparkles } from "lucide-react";

// export function CtaSection() {
//   return (
//     <section className="px-6 md:px-12 lg:px-20 py-40 md:py-48 lg:py-56 bg-white relative overflow-hidden">
//       <div className="max-w-[1400px] mx-auto text-center relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 60 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           viewport={{ once: true }}
//         >
//           <motion.div
//             className="inline-block mb-12"
//             animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
//             transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
//           >
//             <Sparkles className="w-20 h-20 md:w-24 md:h-24" />
//           </motion.div>

//           <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl mb-12 leading-[0.95]">
//             Готовы начать
//             <br />
//             ваш проект?
//           </h2>

//           <p className="text-xl md:text-2xl lg:text-3xl opacity-70 mb-16 max-w-3xl mx-auto leading-relaxed">
//             Запишитесь на бесплатную консультацию. Обсудим ваши цели, покажем
//             наш подход и составим план роста.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
//             <motion.a
//               href="#contact"
//               className="inline-flex items-center gap-4 px-12 py-6 md:px-16 md:py-8 bg-[#050608] text-[#F5EFE7] text-xl md:text-2xl group"
//               whileHover={{
//                 scale: 1.05,
//                 boxShadow: "16px 16px 0px 0px rgba(5,6,8,0.2)",
//               }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <span>Записаться на консультацию</span>
//               <ArrowRight className="w-6 h-6 md:w-8 md:h-8 transition-transform group-hover:translate-x-2" />
//             </motion.a>

//             <motion.a
//               href="#portfolio"
//               className="inline-flex items-center gap-3 text-xl md:text-2xl opacity-70 hover:opacity-100 transition-opacity"
//               whileHover={{ x: 10 }}
//             >
//               <span>Посмотреть работы</span>
//               <ArrowRight className="w-6 h-6" />
//             </motion.a>
//           </div>
//         </motion.div>
//       </div>

//       <div className="absolute inset-0 opacity-[0.015] pointer-events-none">
//         <div
//           className="w-full h-full"
//           style={{
//             backgroundImage:
//               "repeating-linear-gradient(0deg, #050608 0px, #050608 1px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, #050608 0px, #050608 1px, transparent 1px, transparent 60px)",
//           }}
//         />
//       </div>

//       <div className="absolute top-20 left-10 text-[15rem] opacity-[0.02] leading-none select-none">
//         "
//       </div>
//       <div className="absolute bottom-20 right-10 text-[15rem] opacity-[0.02] leading-none select-none">
//         "
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
        relative overflow-hidden
        bg-[#050816]
        px-6 md:px-12 lg:px-20
        py-24 md:py-32 lg:py-40
      "
      aria-label="Call to action"
    >
      {/* background spots */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -top-44 -left-40 h-96 w-96 bg-[radial-gradient(circle_at_center,_#3A7BFF55,_transparent_70%)] blur-3xl" />
        <div className="absolute -bottom-52 -right-24 h-[520px] w-[520px] bg-[radial-gradient(circle_at_center,_#4CC2FF55,_transparent_70%)] blur-3xl" />
      </div>

      {/* grid overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.10] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:64px_64px]" />

      <div className="relative z-10 max-w-[1100px] mx-auto text-center">
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

          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold tracking-tight leading-[0.95] text-[#F5EFE7] mb-5 md:mb-7">
            Давайте запустим сайт,
            <br className="hidden sm:block" /> который приводит заявки
          </h2>

          <p className="text-base md:text-xl lg:text-2xl text-[#C7CEDF] opacity-90 max-w-3xl mx-auto leading-relaxed mb-10 md:mb-12">
            20 минут — и у вас будет понятный план: что сделать на сайте, как
            вести в WhatsApp, и где подключить автоматизацию, чтобы не терять
            клиентов.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-5 justify-center items-center">
            {/* Primary CTA */}
            <motion.a
              href="#contact"
              className="
                relative inline-flex items-center justify-center gap-3
                overflow-hidden
                rounded-full
                px-8 py-4 md:px-10 md:py-5
                text-sm md:text-base font-medium
                text-[#050816]
                shadow-[0_0_45px_rgba(76,194,255,0.55)]
              "
              whileHover={reduce ? undefined : { scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
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
              "
              whileHover={reduce ? undefined : { y: -2 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              aria-label="Посмотреть кейсы"
            >
              <span>Посмотреть кейсы</span>
              <ArrowRight className="h-4 w-4 opacity-90" />
            </motion.a>
          </div>

          {/* micro trust line */}
          <p className="mt-6 text-xs sm:text-sm text-white/55">
            Без «длинных созвонов» — коротко и по делу.
          </p>
        </motion.div>
      </div>

      {/* decorative quotes (subtle) */}
      <div
        className="pointer-events-none absolute top-14 left-6 md:left-10 text-[10rem] md:text-[14rem] opacity-[0.02] leading-none select-none text-white"
        aria-hidden="true"
      >
        &rdquo;
      </div>
      <div
        className="pointer-events-none absolute bottom-10 right-6 md:right-10 text-[10rem] md:text-[14rem] opacity-[0.02] leading-none select-none text-white"
        aria-hidden="true"
      >
        &rdquo;
      </div>
    </section>
  );
}
