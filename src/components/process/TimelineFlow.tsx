
// "use client";

// import { motion } from "motion/react";
// import { ArrowRight, Clock } from "lucide-react";

// const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

// export function TimelineFlow({ phases }: { phases: any[] }) {
//   return (
//     <div className="relative">
//       {/* Desktop line */}
//       <div className="hidden lg:block pointer-events-none absolute left-0 right-0 top-[44px] h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

//       <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-7 relative z-10">
//         {phases.map((phase, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 26 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, delay: index * 0.08, ease: EASE }}
//             viewport={{ once: true }}
//             className="relative"
//           >
//             {/* connector arrow desktop */}
//             {index < phases.length - 1 && (
//               <motion.div
//                 className="hidden lg:block absolute top-[34px] -right-4 pointer-events-none"
//                 animate={{ x: [0, 8, 0], opacity: [0.3, 0.6, 0.3] }}
//                 transition={{
//                   duration: 2.2,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//               >
//                 <ArrowRight className="w-5 h-5 text-white/30" />
//               </motion.div>
//             )}

//             <motion.div
//               className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden
//                          h-[240px] md:h-[260px] lg:h-[270px]"
//               whileHover={{ y: -6, boxShadow: "0 22px 70px rgba(0,0,0,0.55)" }}
//               transition={{ duration: 0.25, ease: "easeOut" }}
//             >
//               {/* inner glow */}
//               <div className="pointer-events-none absolute -inset-16 bg-[radial-gradient(circle_at_top,_rgba(76,194,255,0.16),_transparent_60%)] opacity-70" />

//               {/* layout */}
//               <div className="relative h-full px-5 py-5 md:px-6 md:py-6 flex flex-col">
//                 {/* top row */}
//                 <div className="flex items-center justify-between gap-3">
//                   <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
//                     <span className="text-[11px] tracking-[0.22em] text-[#EAF2FF]">
//                       {String(index + 1).padStart(2, "0")}
//                     </span>
//                   </div>

//                   <div className="inline-flex items-center gap-2 text-xs text-[#C7CEDF]">
//                     <Clock className="h-4 w-4 text-[#CFE3FF]" />
//                     <span>{phase.weeks}</span>
//                   </div>
//                 </div>

//                 {/* title */}
//                 <h3 className="mt-4 text-base md:text-lg font-semibold tracking-tight text-[#F5EFE7]">
//                   {phase.name}
//                 </h3>

//                 {/* desc — scrollable, no truncation */}
//                 {/* <div className="mt-2 flex-1 min-h-0 overflow-y-auto pr-2"> */}
//                 <div className="mt-2 flex-1 min-h-0 overflow-y-auto pr-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
//                   <p className="text-sm leading-relaxed text-[#C7CEDF]">
//                     {phase.description}
//                   </p>
//                 </div>

//                 {/* bottom accent pinned */}
//                 <div className="mt-4 h-[2px] w-14 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF] opacity-70" />
//               </div>
//             </motion.div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Mobile helper */}
//       <p className="mt-8 text-center text-xs md:hidden text-[#C7CEDF]/80">
//         Сроки ориентировочные — уточняем после короткого брифа.
//       </p>
//     </div>
//   );
// }


"use client";

import { motion } from "motion/react";
import { ArrowRight, Clock } from "lucide-react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
interface TimelineFlowProps {
      name: string;
    weeks: string;
    description: string;
  
}

export function TimelineFlow({ phases }: { phases: TimelineFlowProps[] }) {
  return (
    <div className="relative">
      {/* Desktop line */}
      <div className="hidden lg:block pointer-events-none absolute left-0 right-0 top-[44px] h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-7 lg:gap-8 relative z-10">
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
                animate={{ x: [0, 8, 0], opacity: [0.25, 0.55, 0.25] }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ArrowRight className="w-5 h-5 text-white/30" />
              </motion.div>
            )}

            {/* base deep glow under card */}
            <motion.div
              className="absolute -inset-[12px] rounded-[34px] bg-[radial-gradient(circle_at_top,_rgba(58,123,255,0.55),_transparent_70%)] blur-2xl -z-20"
              initial={{ opacity: 0.32, scale: 1 }}
              whileHover={{ opacity: 0.95, scale: 1.08 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            />

            {/* hover aura */}
            <motion.div
              className="absolute inset-0 rounded-[40px] bg-[radial-gradient(circle_at_center,_rgba(76,194,255,0.45),_transparent_65%)] blur-3xl -z-10 pointer-events-none"
              initial={{ opacity: 0, scale: 0.95 }}
              whileHover={{ opacity: 0.8, scale: 1.05 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            />

            <motion.div
              className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-[#060A13] via-[#050816] to-[#02030A]
                         p-5 md:p-6 shadow-[0_26px_80px_rgba(0,0,0,0.85)] backdrop-blur-xl overflow-hidden
                         h-[240px] md:h-[260px] lg:h-[270px]"
              whileHover={{ y: -10, boxShadow: "0 32px 120px rgba(0,0,0,1)" }}
              transition={{ duration: 0.28, ease: "easeOut" }}
            >
              {/* inner glow layer */}
              <motion.div
                className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_top,_rgba(76,194,255,0.16),_transparent_60%)] -z-10"
                initial={{ opacity: 0.35 }}
                whileHover={{ opacity: 0.9 }}
                transition={{ duration: 0.3 }}
              />

              {/* glass sheen */}
              <motion.div
                className="pointer-events-none absolute -inset-10 bg-[linear-gradient(115deg,_transparent_0%,_rgba(255,255,255,0.18)_30%,_transparent_60%)] mix-blend-screen -z-10"
                initial={{ x: "-140%" }}
                whileHover={{ x: "140%" }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
              />

              {/* gradient outline (mask) */}
              <motion.div
                className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent z-10"
                initial={{
                  boxShadow: "0 0 0 1px rgba(255,255,255,0.06)",
                }}
                whileHover={{
                  boxShadow:
                    "0 0 0 1px rgba(76,194,255,0.7), 0 0 42px rgba(76,194,255,1)",
                }}
                transition={{ duration: 0.25 }}
                style={{
                  background:
                    "linear-gradient(135deg, #3A7BFF, #4CC2FF, #9B5DFF)",
                  WebkitMask:
                    "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                  padding: "1px",
                }}
              />

              {/* content */}
              <div className="relative z-30 h-full flex flex-col">
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
                <h3 className="mt-4 text-base md:text-lg font-semibold tracking-tight text-[#F2F4FA]">
                  {phase.name}
                </h3>

                {/* desc */}
                <div className="mt-2 flex-1 min-h-0 overflow-y-auto pr-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                  <p className="text-sm leading-relaxed text-[#C7CEDF]">
                    {phase.description}
                  </p>
                </div>

                {/* bottom accent pinned */}
                <div className="mt-4 h-[2px] w-14 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF] opacity-70" />
              </div>

              {/* decorative corner */}
              <motion.div
                className="pointer-events-none absolute bottom-4 right-4 h-8 w-8 opacity-40 z-20"
                whileHover={{ scale: 1.15, opacity: 0.75 }}
                transition={{ duration: 0.25 }}
              >
                <div className="h-full w-full rounded-br-3xl border-b border-r border-[#4CC2FF77]" />
              </motion.div>
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
