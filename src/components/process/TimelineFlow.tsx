


// "use client";

// import { motion, useReducedMotion } from "motion/react";
// import { ArrowRight, Clock } from "lucide-react";

// const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

// interface TimelineFlowProps {
//   name: string;
//   weeks: string;
//   description: string;
// }

// export function TimelineFlow({ phases }: { phases: TimelineFlowProps[] }) {
//   const reduce = useReducedMotion();

//   return (
//     <div className="relative">
//       {/* Desktop line */}
//       <div className="hidden lg:block pointer-events-none absolute left-0 right-0 top-[44px] h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

//       <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-7 lg:gap-8 relative z-10">
//         {phases.map((phase, index) => (
//           <motion.div
//             key={index}
//             initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 26 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{
//               duration: 0.7,
//               delay: reduce ? 0 : index * 0.08,
//               ease: EASE,
//             }}
//             viewport={{ once: true, margin: "-100px" }}
//             className="relative"
//           >
//             {/* connector arrow desktop */}
//             {index < phases.length - 1 && (
//               <motion.div
//                 className="hidden lg:block absolute top-[34px] -right-4 pointer-events-none"
//                 animate={
//                   reduce
//                     ? undefined
//                     : { x: [0, 8, 0], opacity: [0.25, 0.55, 0.25] }
//                 }
//                 transition={
//                   reduce
//                     ? undefined
//                     : {
//                         duration: 2.2,
//                         repeat: Infinity,
//                         ease: "easeInOut",
//                       }
//                 }
//               >
//                 <ArrowRight className="w-5 h-5 text-white/30" />
//               </motion.div>
//             )}

//             {/* base deep glow under card */}
//             <motion.div
//               className="absolute -inset-[12px] rounded-[34px] bg-[radial-gradient(circle_at_top,_rgba(58,123,255,0.55),_transparent_70%)] blur-2xl -z-20"
//               initial={{ opacity: 0.32, scale: 1 }}
//               whileHover={reduce ? undefined : { opacity: 0.95, scale: 1.08 }}
//               transition={{ duration: 0.35, ease: "easeOut" }}
//               aria-hidden="true"
//             />

//             {/* hover aura */}
//             <motion.div
//               className="absolute inset-0 rounded-[40px] bg-[radial-gradient(circle_at_center,_rgba(76,194,255,0.45),_transparent_65%)] blur-3xl -z-10 pointer-events-none"
//               initial={{ opacity: 0, scale: 0.95 }}
//               whileHover={reduce ? undefined : { opacity: 0.8, scale: 1.05 }}
//               transition={{ duration: 0.35, ease: "easeOut" }}
//               aria-hidden="true"
//             />

//             <motion.div
//               className="
//                 relative rounded-3xl border border-white/10
//                 bg-gradient-to-b from-[#060A13] via-[#050816] to-[#02030A]
//                 p-6 md:p-7
//                 shadow-[0_26px_80px_rgba(0,0,0,0.85)]
//                 backdrop-blur-xl overflow-hidden
//                 h-[244px] md:h-[264px] lg:h-[272px]
//               "
//               whileHover={
//                 reduce
//                   ? undefined
//                   : { y: -10, boxShadow: "0 32px 120px rgba(0,0,0,1)" }
//               }
//               transition={{ duration: 0.28, ease: "easeOut" }}
//             >
//               {/* inner glow layer */}
//               <motion.div
//                 className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_top,_rgba(76,194,255,0.16),_transparent_60%)] -z-10"
//                 initial={{ opacity: 0.35 }}
//                 whileHover={reduce ? undefined : { opacity: 0.9 }}
//                 transition={{ duration: 0.3 }}
//                 aria-hidden="true"
//               />

//               {/* glass sheen */}
//               <motion.div
//                 className="pointer-events-none absolute -inset-10 bg-[linear-gradient(115deg,_transparent_0%,_rgba(255,255,255,0.18)_30%,_transparent_60%)] mix-blend-screen -z-10"
//                 initial={{ x: "-140%" }}
//                 whileHover={reduce ? undefined : { x: "140%" }}
//                 transition={{ duration: 0.9, ease: "easeInOut" }}
//                 aria-hidden="true"
//               />

//               {/* gradient outline (mask) */}
//               <motion.div
//                 className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent z-10"
//                 initial={{
//                   boxShadow: "0 0 0 1px rgba(255,255,255,0.06)",
//                 }}
//                 whileHover={
//                   reduce
//                     ? undefined
//                     : {
//                         boxShadow:
//                           "0 0 0 1px rgba(76,194,255,0.7), 0 0 42px rgba(76,194,255,1)",
//                       }
//                 }
//                 transition={{ duration: 0.25 }}
//                 style={{
//                   background:
//                     "linear-gradient(135deg, #3A7BFF, #4CC2FF, #9B5DFF)",
//                   WebkitMask:
//                     "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
//                   WebkitMaskComposite: "xor",
//                   maskComposite: "exclude",
//                   padding: "1px",
//                 }}
//                 aria-hidden="true"
//               />

//               {/* content */}
//               <div className="relative z-30 h-full flex flex-col">
//                 {/* top row */}
//                 <div className="flex items-center justify-between gap-3">
//                   <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
//                     <span
//                       className="
//                         text-[11px] md:text-[12px]
//                         leading-[1.2]
//                         uppercase tracking-[0.22em]
//                         text-[#EAF2FF]
//                       "
//                     >
//                       {String(index + 1).padStart(2, "0")}
//                     </span>
//                   </div>

//                   <div className="inline-flex items-center gap-2">
//                     <Clock className="h-4 w-4 text-[#CFE3FF]" />
//                     <span className="text-[12px] md:text-[13px] leading-[1.2] text-[#C7CEDF]">
//                       {phase.weeks}
//                     </span>
//                   </div>
//                 </div>

//                 {/* title (base h3 contract) */}
//                 <h3
//                   className="
//                     mt-4
//                     text-[20px] md:text-[22px] lg:text-[24px]
//                     leading-[1.15] md:leading-[1.12]
//                     font-semibold tracking-[-0.01em]
//                     text-[#F2F4FA]
//                   "
//                 >
//                   {phase.name}
//                 </h3>

//                 {/* desc */}
//                 <div className="mt-2 flex-1 min-h-0 overflow-y-auto pr-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
//                   <p
//                     className="
//                       text-[15px] md:text-[16px] lg:text-[17px]
//                       leading-[1.55] md:leading-[1.6]
//                       text-[#C7CEDF]
//                       opacity-90
//                     "
//                   >
//                     {phase.description}
//                   </p>
//                 </div>

//                 {/* bottom accent pinned */}
//                 <div className="mt-4 h-[2px] w-14 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF] opacity-70" />
//               </div>

//               {/* decorative corner */}
//               <motion.div
//                 className="pointer-events-none absolute bottom-4 right-4 h-8 w-8 opacity-40 z-20"
//                 whileHover={reduce ? undefined : { scale: 1.15, opacity: 0.75 }}
//                 transition={{ duration: 0.25 }}
//                 aria-hidden="true"
//               >
//                 <div className="h-full w-full rounded-br-3xl border-b border-r border-[#4CC2FF77]" />
//               </motion.div>
//             </motion.div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Mobile helper */}
//       <p className="mt-8 text-center text-[12px] leading-[1.4] md:hidden text-[#C7CEDF]/80">
//         Сроки ориентировочные — уточняем после короткого брифа.
//       </p>
//     </div>
//   );
// }


"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Clock } from "lucide-react";
import { useTranslations } from "next-intl";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

type TimelinePhase = {
  name: string;
  weeks: string;
  description: string;
};

export function TimelineFlow({ phases }: { phases: TimelinePhase[] }) {
  const reduce = useReducedMotion();
  const t = useTranslations("processe");

  return (
    <div className="relative">
      {/* Desktop line */}
      <div
        className="hidden lg:block pointer-events-none absolute left-0 right-0 top-[44px] h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
        aria-hidden="true"
      />

      {/* ✅ Семантический список фаз */}
      <ol className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-7 lg:gap-8 relative z-10">
        {phases.map((phase, index) => (
          <li key={`${phase.name}-${index}`} className="list-none">
            <motion.article
              initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: reduce ? 0 : index * 0.08,
                ease: EASE,
              }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
              aria-label={`${t("timelines.aria.phaseLabel")} ${String(index + 1).padStart(2, "0")}: ${phase.name}. ${t("timelines.aria.durationLabel")} ${phase.weeks}.`}
            >
              {/* connector arrow desktop */}
              {index < phases.length - 1 && (
                <motion.div
                  className="hidden lg:block absolute top-[34px] -right-4 pointer-events-none"
                  animate={
                    reduce
                      ? undefined
                      : { x: [0, 8, 0], opacity: [0.25, 0.55, 0.25] }
                  }
                  transition={
                    reduce
                      ? undefined
                      : { duration: 2.2, repeat: Infinity, ease: "easeInOut" }
                  }
                  aria-hidden="true"
                >
                  <ArrowRight className="w-5 h-5 text-white/30" />
                </motion.div>
              )}

              {/* base deep glow under card */}
              <motion.div
                className="absolute -inset-[12px] rounded-[34px] bg-[radial-gradient(circle_at_top,_rgba(58,123,255,0.55),_transparent_70%)] blur-2xl -z-20"
                initial={{ opacity: 0.32, scale: 1 }}
                whileHover={reduce ? undefined : { opacity: 0.95, scale: 1.08 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                aria-hidden="true"
              />

              {/* hover aura */}
              <motion.div
                className="absolute inset-0 rounded-[40px] bg-[radial-gradient(circle_at_center,_rgba(76,194,255,0.45),_transparent_65%)] blur-3xl -z-10 pointer-events-none"
                initial={{ opacity: 0, scale: 0.95 }}
                whileHover={reduce ? undefined : { opacity: 0.8, scale: 1.05 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                aria-hidden="true"
              />

              <motion.div
                className="
                  relative rounded-3xl border border-white/10
                  bg-gradient-to-b from-[#060A13] via-[#050816] to-[#02030A]
                  p-6 md:p-7
                  shadow-[0_26px_80px_rgba(0,0,0,0.85)]
                  backdrop-blur-xl overflow-hidden
                  h-[244px] md:h-[264px] lg:h-[272px]
                "
                whileHover={
                  reduce ? undefined : { y: -10, boxShadow: "0 32px 120px rgba(0,0,0,1)" }
                }
                transition={{ duration: 0.28, ease: "easeOut" }}
              >
                {/* inner glow layer */}
                <motion.div
                  className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_top,_rgba(76,194,255,0.16),_transparent_60%)] -z-10"
                  initial={{ opacity: 0.35 }}
                  whileHover={reduce ? undefined : { opacity: 0.9 }}
                  transition={{ duration: 0.3 }}
                  aria-hidden="true"
                />

                {/* glass sheen */}
                <motion.div
                  className="pointer-events-none absolute -inset-10 bg-[linear-gradient(115deg,_transparent_0%,_rgba(255,255,255,0.18)_30%,_transparent_60%)] mix-blend-screen -z-10"
                  initial={{ x: "-140%" }}
                  whileHover={reduce ? undefined : { x: "140%" }}
                  transition={{ duration: 0.9, ease: "easeInOut" }}
                  aria-hidden="true"
                />

                {/* gradient outline (mask) */}
                <motion.div
                  className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent z-10"
                  initial={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.06)" }}
                  whileHover={
                    reduce
                      ? undefined
                      : {
                          boxShadow:
                            "0 0 0 1px rgba(76,194,255,0.7), 0 0 42px rgba(76,194,255,1)",
                        }
                  }
                  transition={{ duration: 0.25 }}
                  style={{
                    background: "linear-gradient(135deg, #3A7BFF, #4CC2FF, #9B5DFF)",
                    WebkitMask:
                      "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                    padding: "1px",
                  }}
                  aria-hidden="true"
                />

                {/* content */}
                <div className="relative z-30 h-full flex flex-col">
                  {/* top row */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                      <span
                        className="
                          text-[11px] md:text-[12px]
                          leading-[1.2]
                          uppercase tracking-[0.22em]
                          text-[#EAF2FF]
                        "
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="inline-flex items-center gap-2">
                      <Clock className="h-4 w-4 text-[#CFE3FF]" aria-hidden="true" />
                      <span className="text-[12px] md:text-[13px] leading-[1.2] text-[#C7CEDF]">
                        {phase.weeks}
                      </span>
                    </div>
                  </div>

                  <h3
                    className="
                      mt-4
                      text-[20px] md:text-[22px] lg:text-[24px]
                      leading-[1.15] md:leading-[1.12]
                      font-semibold tracking-[-0.01em]
                      text-[#F2F4FA]
                    "
                  >
                    {phase.name}
                  </h3>

                  <div className="mt-2 flex-1 min-h-0 overflow-y-auto pr-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    <p
                      className="
                        text-[15px] md:text-[16px] lg:text-[17px]
                        leading-[1.55] md:leading-[1.6]
                        text-[#C7CEDF]
                        opacity-90
                      "
                    >
                      {phase.description}
                    </p>
                  </div>

                  <div className="mt-4 h-[2px] w-14 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF] opacity-70" />
                </div>

                {/* decorative corner */}
                <motion.div
                  className="pointer-events-none absolute bottom-4 right-4 h-8 w-8 opacity-40 z-20"
                  whileHover={reduce ? undefined : { scale: 1.15, opacity: 0.75 }}
                  transition={{ duration: 0.25 }}
                  aria-hidden="true"
                >
                  <div className="h-full w-full rounded-br-3xl border-b border-r border-[#4CC2FF77]" />
                </motion.div>
              </motion.div>
            </motion.article>
          </li>
        ))}
      </ol>
    </div>
  );
}