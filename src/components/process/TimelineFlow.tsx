// "use client";

// import { motion } from "motion/react";
// import { ArrowRight } from "lucide-react";

// export function TimelineFlow({ phases }: { phases: any[] }) {
//   return (
//     <div className="relative">
//       <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-[#F5EFE7] opacity-20" />

//       <div className="grid md:grid-cols-5 gap-8 relative z-10">
//         {phases.map((phase, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 60 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: index * 0.15 }}
//             viewport={{ once: true }}
//             className="relative"
//           >
//             <motion.div
//               className="w-full aspect-square border-2 border-[#F5EFE7] bg-[#050608] p-6 md:p-8 flex flex-col items-center justify-center text-center mb-6 relative overflow-hidden group"
//               whileHover={{
//                 scale: 1.05,
//                 borderColor: "#F5EFE7",
//                 boxShadow: "0 0 40px rgba(245,239,231,0.3)",
//               }}
//             >
//               <motion.div
//                 className="absolute inset-0 bg-linear-to-br from-[#F5EFE7]/10 to-transparent opacity-0 group-hover:opacity-100"
//                 animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
//                 transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
//               />

//               <div className="relative z-10">
//                 <p className="text-5xl md:text-6xl mb-2 opacity-30">
//                   0{index + 1}
//                 </p>
//                 <p className="text-lg md:text-xl uppercase tracking-wider">
//                   {phase.name}
//                 </p>
//               </div>
//             </motion.div>

//             <div className="text-center">
//               <p className="text-lg md:text-xl mb-2">{phase.weeks}</p>
//               <p className="text-base opacity-70">{phase.description}</p>
//             </div>

//             {index < phases.length - 1 && (
//               <motion.div
//                 className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2"
//                 animate={{ x: [0, 10, 0] }}
//                 transition={{
//                   duration: 2,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//               >
//                 <ArrowRight className="w-6 h-6 opacity-30" />
//               </motion.div>
//             )}
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }

"use client";

import { motion } from "motion/react";
import { ArrowRight, Clock } from "lucide-react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function TimelineFlow({ phases }: { phases: any[] }) {
  return (
    <div className="relative">
      {/* Desktop line */}
      <div className="hidden lg:block pointer-events-none absolute left-0 right-0 top-[44px] h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-7 relative z-10">
        {phases.map((phase, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.08, ease: EASE }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* connector arrow desktop */}
            {index < phases.length - 1 && (
              <motion.div
                className="hidden lg:block absolute top-[34px] -right-4 pointer-events-none"
                animate={{ x: [0, 8, 0], opacity: [0.3, 0.6, 0.3] }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ArrowRight className="w-5 h-5 text-white/30" />
              </motion.div>
            )}

            <motion.div
              className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden
                         h-[240px] md:h-[260px] lg:h-[270px]"
              whileHover={{ y: -6, boxShadow: "0 22px 70px rgba(0,0,0,0.55)" }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              {/* inner glow */}
              <div className="pointer-events-none absolute -inset-16 bg-[radial-gradient(circle_at_top,_rgba(76,194,255,0.16),_transparent_60%)] opacity-70" />

              {/* layout */}
              <div className="relative h-full px-5 py-5 md:px-6 md:py-6 flex flex-col">
                {/* top row */}
                <div className="flex items-center justify-between gap-3">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                    <span className="text-[11px] tracking-[0.22em] text-[#EAF2FF]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="inline-flex items-center gap-2 text-xs text-[#C7CEDF]">
                    <Clock className="h-4 w-4 text-[#CFE3FF]" />
                    <span>{phase.weeks}</span>
                  </div>
                </div>

                {/* title */}
                <h3 className="mt-4 text-base md:text-lg font-semibold tracking-tight text-[#F5EFE7]">
                  {phase.name}
                </h3>

                {/* desc — scrollable, no truncation */}
                {/* <div className="mt-2 flex-1 min-h-0 overflow-y-auto pr-2"> */}
                <div className="mt-2 flex-1 min-h-0 overflow-y-auto pr-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                  <p className="text-sm leading-relaxed text-[#C7CEDF]">
                    {phase.description}
                  </p>
                </div>

                {/* bottom accent pinned */}
                <div className="mt-4 h-[2px] w-14 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF] opacity-70" />
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Mobile helper */}
      <p className="mt-8 text-center text-xs md:hidden text-[#C7CEDF]/80">
        Сроки ориентировочные — уточняем после короткого брифа.
      </p>
    </div>
  );
}
