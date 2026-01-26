

// "use client";

// import { useRef } from "react";
// import {
//   motion,
//   useReducedMotion,
//   useScroll,
//   useTransform,
// } from "motion/react";
// import { ArrowRight } from "lucide-react";

// const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

// export default function ServicesCTA() {
//   const sectionRef = useRef<HTMLElement | null>(null);
//   const reduce = useReducedMotion();

//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start end", "end start"],
//   });

//   const ySlow = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -70]);
//   const yMid = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -130]);
//   const yFast = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -220]);

//   return (
//     <section
//       ref={sectionRef}
//       id="contact"
//       className="relative overflow-hidden bg-[#050816] px-6 md:px-12 lg:px-20 py-24 md:py-32"
//     >
//       {/* background parallax spots */}
//       <div className="pointer-events-none absolute inset-0">
//         <motion.div
//           style={{ y: ySlow }}
//           className="absolute -top-44 -left-32 h-[520px] w-[520px] bg-[radial-gradient(circle_at_center,_#3A7BFF55,_transparent_70%)] blur-3xl opacity-70"
//         />
//         <motion.div
//           style={{ y: yMid }}
//           className="absolute top-1/3 -right-44 h-[640px] w-[640px] bg-[radial-gradient(circle_at_center,_#4CC2FF55,_transparent_70%)] blur-3xl opacity-70"
//         />
//         <motion.div
//           style={{ y: yFast }}
//           className="absolute -bottom-56 left-1/3 h-[720px] w-[720px] bg-[radial-gradient(circle_at_center,_#9B5DFF44,_transparent_70%)] blur-[160px] opacity-65"
//         />
//       </div>

//       {/* subtle mesh/noise */}
//       <div className="pointer-events-none absolute inset-0 opacity-[0.16] mix-blend-soft-light">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,_rgba(255,255,255,0.10),_transparent_35%),radial-gradient(circle_at_80%_30%,_rgba(255,255,255,0.08),_transparent_40%),radial-gradient(circle_at_30%_90%,_rgba(255,255,255,0.06),_transparent_45%)]" />
//       </div>

//       <div className="relative z-10 max-w-[1400px] mx-auto">
//         {/* glass card container */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: EASE }}
//           viewport={{ once: true, margin: "-120px" }}
//           className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-b from-[#060A13] via-[#050816] to-[#02030A] p-10 md:p-14 shadow-[0_30px_120px_rgba(0,0,0,0.9)] backdrop-blur-xl text-center"
//         >
//           {/* inner glow */}
//           <motion.div
//             className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(76,194,255,0.30),_transparent_65%)]"
//             animate={{ opacity: 0.75 }}
//           />

//           {/* gradient outline (mask) */}
//           <div
//             className="pointer-events-none absolute inset-0 rounded-[40px] border border-transparent"
//             style={{
//               background: "linear-gradient(135deg, #3A7BFF, #4CC2FF, #9B5DFF)",
//               WebkitMask:
//                 "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
//               WebkitMaskComposite: "xor",
//               maskComposite: "exclude",
//               padding: "1px",
//             }}
//           />

//           {/* top accent line */}
//           <motion.div
//             className="mx-auto mb-8 h-[2px] w-24 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]"
//             initial={{ width: 0 }}
//             whileInView={{ width: 96 }}
//             transition={{ duration: 0.9, ease: EASE }}
//             viewport={{ once: true }}
//           />

//           <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight leading-[1.05] text-[#F5EFE7] mb-6">
//             <span className="relative inline-block">
//               <span className="relative z-10">
//                 Let&apos;s Build Something Exceptional
//               </span>
//               {/* glow clone */}
//               <span
//                 aria-hidden
//                 className="absolute inset-0 text-[#4CC2FF] opacity-35 blur-[18px] mix-blend-screen"
//               >
//                 Let&apos;s Build Something Exceptional
//               </span>
//             </span>
//           </h2>

//           <p className="text-sm md:text-xl text-[#C7CEDF] opacity-90 mb-10 max-w-3xl mx-auto leading-relaxed">
//             Готовы к проекту, который изменит ваш бизнес? Начнём с честного
//             разговора о целях и возможностях.
//           </p>

//           {/* CTA button (premium gradient) */}
//           <motion.a
//             href="#contact"
//             className="relative inline-flex items-center justify-center overflow-hidden rounded-full px-10 py-3.5 md:px-12 md:py-4 text-sm md:text-base font-medium text-[#050816] shadow-[0_0_46px_rgba(76,194,255,0.60)]"
//             whileHover={{ scale: 1.03 }}
//             whileTap={{ scale: 0.97 }}
//             transition={{ duration: 0.2, ease: "easeOut" }}
//           >
//             <span className="absolute inset-0 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]" />
//             <motion.span
//               className="absolute inset-0 bg-[linear-gradient(120deg,_transparent_0%,_white_20%,_transparent_40%)] opacity-0"
//               initial={{ x: "-110%" }}
//               whileHover={{ x: "110%", opacity: 0.55 }}
//               transition={{ duration: 0.7, ease: "easeInOut" }}
//             />
//             <span className="relative z-10 flex items-center gap-2">
//               Начать проект
//               <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
//             </span>
//           </motion.a>

//           {/* mini note */}
//           <p className="mt-6 text-xs md:text-sm text-[#C7CEDF] opacity-70">
//             Ответим в течение дня и предложим 2–3 сценария решения под вашу
//             нишу.
//           </p>
//         </motion.div>
//       </div>

//       {/* floating holo shapes (замена квадратам) */}
//       <motion.div
//         className="pointer-events-none absolute top-16 right-6 md:right-12 h-20 w-20 md:h-24 md:w-24 rounded-3xl border border-[#3A7BFF33] bg-[radial-gradient(circle_at_top,_#3A7BFF33,_transparent_70%)] opacity-55"
//         animate={{ rotate: 360, scale: [1, 1.08, 1] }}
//         transition={{
//           rotate: { duration: 28, repeat: Infinity, ease: "linear" },
//           scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
//         }}
//       />
//       <motion.div
//         className="pointer-events-none absolute bottom-10 left-6 md:left-12 h-28 w-28 md:h-36 md:w-36 rounded-[38px] border border-[#4CC2FF22] bg-[radial-gradient(circle_at_top,_#4CC2FF2a,_transparent_70%)] opacity-45"
//         animate={{ rotate: [0, 90, 180, 270, 360] }}
//         transition={{ duration: 46, repeat: Infinity, ease: "linear" }}
//       />

//       {/* bottom divider */}
//       <div className="pointer-events-none absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
//     </section>
//   );
// }


"use client";

import { motion } from "motion/react";

export function ServicesCTA() {
  return (
    <section className="bg-[#050608] px-6 md:px-12 lg:px-20 py-28 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-[800px] mx-auto"
      >
        <h2 className="text-3xl md:text-5xl font-semibold text-[#F5EFE7] mb-6">
          Не уверены, что выбрать?
        </h2>
        <p className="text-[#C7CEDF] text-base md:text-xl mb-10">
          Мы подскажем оптимальный формат под ваш бизнес за 15 минут — без
          обязательств и “продажных” разговоров.
        </p>

        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-full px-10 py-4 text-[#050816] font-medium bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF] shadow-[0_0_40px_rgba(76,194,255,0.6)]"
        >
          Запросить консультацию
        </a>
      </motion.div>
    </section>
  );
}
