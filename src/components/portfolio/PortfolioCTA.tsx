
// "use client";

// import { motion, useReducedMotion } from "motion/react";
// import { ArrowRight, Sparkles } from "lucide-react";

// export function PortfolioCTA() {
//   const reduce = useReducedMotion();

//   return (
//     <section className="relative px-6 md:px-12 lg:px-20 py-20 md:py-24 bg-[#050816] text-[#F5EFE7] overflow-hidden">
//       {/* background spots */}
//       <div className="pointer-events-none absolute inset-0 opacity-60">
//         <div className="absolute -top-44 -left-40 h-96 w-96 bg-[radial-gradient(circle_at_center,_#3A7BFF55,_transparent_70%)] blur-3xl" />
//         <div className="absolute -bottom-44 -right-32 h-[30rem] w-[30rem] bg-[radial-gradient(circle_at_center,_#4CC2FF55,_transparent_70%)] blur-3xl" />
//       </div>

//       {/* subtle grid */}
//       <div className="pointer-events-none absolute inset-0 opacity-[0.10] [background-image:linear-gradient(rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.10)_1px,transparent_1px)] [background-size:72px_72px]" />

//       <div className="relative z-10 max-w-[1400px] mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 28 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{
//             duration: 0.7,
//             ease: [0.16, 1, 0.3, 1],
//           }}
//           viewport={{ once: true }}
//           className="text-center"
//         >
//           {/* compact badge */}
//           <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl mb-8">
//             <Sparkles className="h-4 w-4 text-[#4CC2FF]" />
//             <span className="text-xs md:text-sm text-[#C7CEDF]">
//               Быстрый старт • Чёткий план • Без лишней бюрократии
//             </span>
//           </div>

//           <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 text-[#F2F4FA]">
//             Давайте соберём проект, который приносит заявки
//           </h2>

//           <p className="text-base md:text-xl text-[#C7CEDF] opacity-80 mb-10 max-w-3xl mx-auto leading-relaxed">
//             Коротко обсудим задачу, предложим структуру и покажем, как это будет
//             работать: сайт, WhatsApp и автоматизация — как единая система.
//           </p>

//           <motion.a
//             href="#contact"
//             className="relative inline-flex items-center justify-center overflow-hidden rounded-full px-10 py-3.5 md:px-12 md:py-4 text-sm md:text-base font-medium text-[#050816] shadow-[0_0_40px_rgba(76,194,255,0.65)]"
//             whileHover={{ scale: 1.03 }}
//             whileTap={{ scale: 0.97 }}
//           >
//             <span className="absolute inset-0 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]" />
//             <motion.span
//               className="absolute inset-0 bg-[linear-gradient(120deg,_transparent_0%,_white_20%,_transparent_40%)] opacity-0"
//               initial={{ x: "-100%" }}
//               whileHover={{ x: "100%", opacity: 0.5 }}
//               transition={{ duration: 0.7, ease: "easeInOut" }}
//             />
//             <span className="relative z-10 inline-flex items-center gap-3">
//               <span>Запросить консультацию</span>
//               <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
//             </span>
//           </motion.a>
//         </motion.div>
//       </div>

//       {/* floating shapes (lighter, less noisy) */}
//       <motion.div
//         className="pointer-events-none absolute top-10 left-6 md:left-10 h-20 w-20 rounded-3xl border border-[#3A7BFF33] bg-[radial-gradient(circle_at_top,_#3A7BFF22,_transparent_70%)] opacity-45"
//         animate={reduce ? undefined : { rotate: 360, scale: [1, 1.08, 1] }}
//         transition={
//           reduce
//             ? undefined
//             : {
//                 rotate: { duration: 28, repeat: Infinity, ease: "linear" },
//                 scale: { duration: 4.2, repeat: Infinity, ease: "easeInOut" },
//               }
//         }
//       />
//       <motion.div
//         className="pointer-events-none absolute bottom-8 right-6 md:right-10 h-28 w-28 rounded-[36px] border border-[#4CC2FF33] bg-[radial-gradient(circle_at_top,_#4CC2FF22,_transparent_70%)] opacity-35"
//         animate={reduce ? undefined : { rotate: -360, scale: [1, 1.06, 1] }}
//         transition={
//           reduce
//             ? undefined
//             : {
//                 rotate: { duration: 36, repeat: Infinity, ease: "linear" },
//                 scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
//               }
//         }
//       />
//     </section>
//   );
// }
"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";

export function PortfolioCTA() {
  const reduce = useReducedMotion();

  return (
    <section className="relative px-6 md:px-12 lg:px-20 py-20 md:py-24 overflow-visible text-[#F5EFE7]">
      {/* LOCAL FX (clip only background, not content) */}
      <div
        className="
          pointer-events-none absolute inset-0 -z-10 overflow-hidden
          [mask-image:linear-gradient(to_bottom,transparent_0%,black_12%,black_88%,transparent_100%)]
          [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_12%,black_88%,transparent_100%)]
        "
        aria-hidden="true"
      >
        {/* background spots */}
        <div className="absolute inset-0 opacity-60">
          <div className="absolute -top-44 -left-40 h-96 w-96 bg-[radial-gradient(circle_at_center,_#3A7BFF55,_transparent_70%)] blur-3xl" />
          <div className="absolute -bottom-44 -right-32 h-[30rem] w-[30rem] bg-[radial-gradient(circle_at_center,_#4CC2FF55,_transparent_70%)] blur-3xl" />
        </div>

        {/* subtle grid (softer) */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.10) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* compact badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl mb-8">
            <Sparkles className="h-4 w-4 text-[#4CC2FF]" />
            <span className="text-xs md:text-sm text-[#C7CEDF]">
              Быстрый старт • Чёткий план • Без лишней бюрократии
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 text-[#F2F4FA]">
            Давайте соберём проект, который приносит заявки
          </h2>

          <p className="text-base md:text-xl text-[#C7CEDF] opacity-80 mb-10 max-w-3xl mx-auto leading-relaxed">
            Коротко обсудим задачу, предложим структуру и покажем, как это будет
            работать: сайт, WhatsApp и автоматизация — как единая система.
          </p>

          <motion.a
            href="#contact"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full px-10 py-3.5 md:px-12 md:py-4 text-sm md:text-base font-medium text-[#050816] shadow-[0_0_40px_rgba(76,194,255,0.65)]"
            whileHover={reduce ? undefined : { scale: 1.03 }}
            whileTap={reduce ? undefined : { scale: 0.97 }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]" />
            <motion.span
              className="absolute inset-0 bg-[linear-gradient(120deg,_transparent_0%,_white_20%,_transparent_40%)] opacity-0"
              initial={{ x: "-100%" }}
              whileHover={reduce ? undefined : { x: "100%", opacity: 0.5 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            />
            <span className="relative z-10 inline-flex items-center gap-3">
              <span>Запросить консультацию</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
            </span>
          </motion.a>
        </motion.div>
      </div>

      {/* floating shapes */}
      <motion.div
        className="pointer-events-none absolute top-10 left-6 md:left-10 z-0 h-20 w-20 rounded-3xl border border-[#3A7BFF33] bg-[radial-gradient(circle_at_top,_#3A7BFF22,_transparent_70%)] opacity-45"
        animate={reduce ? undefined : { rotate: 360, scale: [1, 1.08, 1] }}
        transition={
          reduce
            ? undefined
            : {
                rotate: { duration: 28, repeat: Infinity, ease: "linear" },
                scale: { duration: 4.2, repeat: Infinity, ease: "easeInOut" },
              }
        }
        aria-hidden="true"
      />
      <motion.div
        className="pointer-events-none absolute bottom-8 right-6 md:right-10 z-0 h-28 w-28 rounded-[36px] border border-[#4CC2FF33] bg-[radial-gradient(circle_at_top,_#4CC2FF22,_transparent_70%)] opacity-35"
        animate={reduce ? undefined : { rotate: -360, scale: [1, 1.06, 1] }}
        transition={
          reduce
            ? undefined
            : {
                rotate: { duration: 36, repeat: Infinity, ease: "linear" },
                scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
              }
        }
        aria-hidden="true"
      />
    </section>
  );
}
