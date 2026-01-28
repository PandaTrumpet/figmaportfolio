

// "use client";

// import { motion } from "motion/react";
// import { Heart } from "lucide-react";
// import { ClientStoryCard } from "./ClientStoryCard";

// const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

// export function ClientStoriesSection({ stories }: { stories: any[] }) {
//   return (
//     <section className="relative px-6 md:px-12 lg:px-20 py-24 md:py-32 bg-[#050816] overflow-hidden">
//       {/* background spots */}
//       <div className="pointer-events-none absolute inset-0">
//         <div className="absolute -top-48 -left-40 h-[520px] w-[520px] bg-[radial-gradient(circle_at_center,rgba(58,123,255,0.35),transparent_70%)] blur-3xl opacity-60" />
//         <div className="absolute -bottom-56 -right-24 h-[560px] w-[560px] bg-[radial-gradient(circle_at_center,rgba(76,194,255,0.28),transparent_70%)] blur-3xl opacity-55" />
//         <div className="absolute top-1/3 -right-24 h-[420px] w-[420px] bg-[radial-gradient(circle_at_center,rgba(155,93,255,0.22),transparent_70%)] blur-3xl opacity-45" />

//         {/* subtle grid */}
//         <div className="absolute inset-0 opacity-[0.10] [mask-image:radial-gradient(circle_at_center,black_55%,transparent_80%)]">
//           <div className="h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:56px_56px]" />
//         </div>

//         {/* vignette */}
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.55)_100%)]" />
//       </div>

//       <div className="relative z-10 max-w-[1400px] mx-auto text-[#F5EFE7]">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 34 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.75, ease: EASE }}
//           viewport={{ once: true, margin: "-120px" }}
//           className="text-center mb-14 md:mb-20"
//         >
//           <motion.div
//             className="mx-auto mb-8 h-[2px] w-20 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]"
//             initial={{ width: 0 }}
//             whileInView={{ width: 80 }}
//             transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
//             viewport={{ once: true }}
//           />

//           <div className="flex items-center justify-center gap-3 md:gap-4 mb-4 md:mb-6">
//             <div className="relative flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-2xl border border-white/12 bg-[radial-gradient(circle_at_top,rgba(76,194,255,0.25),rgba(5,8,22,0.65))] backdrop-blur-xl shadow-[0_0_40px_rgba(76,194,255,0.25)]">
//               <Heart className="h-6 w-6 md:h-7 md:w-7 text-[#EAF0FF]" />
//               <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[linear-gradient(135deg,rgba(58,123,255,0.35),rgba(76,194,255,0.22),rgba(155,93,255,0.18))] opacity-40" />
//             </div>

//             <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
//               Клиентские истории
//             </h2>
//           </div>

//           <p className="text-sm md:text-lg lg:text-xl text-[#C7CEDF] max-w-3xl mx-auto leading-relaxed">
//             Коротко и по делу: контекст, решение и результаты — без “воды”.
//           </p>
//         </motion.div>

//         {/* List */}
//         <div className="space-y-16 md:space-y-20">
//           {stories.map((story, index) => (
//             <ClientStoryCard key={index} story={story} index={index} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Heart } from "lucide-react";
import { ClientStoryCard } from "./ClientStoryCard";

const glitchPrimary = {
  initial: { x: 0, y: 0, opacity: 0 },
  hover: {
    x: [0, -1.5, 1, -0.5, 0],
    y: [0, 1, -1, 0.5, 0],
    opacity: [0, 0.9, 0.9, 0.6, 0],
    transition: { duration: 0.35, times: [0, 0.25, 0.5, 0.75, 1] },
  },
};

const glitchSecondary = {
  initial: { x: 0, y: 0, opacity: 0 },
  hover: {
    x: [0, 1.5, -1, 0.5, 0],
    y: [0, -1, 1, -0.5, 0],
    opacity: [0, 0.7, 0.8, 0.5, 0],
    transition: { duration: 0.35, times: [0, 0.25, 0.5, 0.75, 1] },
  },
};

export function ClientStoriesSection({ stories }: { stories: any[] }) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative px-6 md:px-12 lg:px-20 py-24 md:py-32 overflow-hidden bg-[#050816]"
    >
      {/* фоновые споты как в FocusSection */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -top-40 -left-32 h-80 w-80 bg-[radial-gradient(circle_at_center,_#3A7BFF55,_transparent_70%)] blur-3xl" />
        <div className="absolute -bottom-40 -right-10 h-96 w-96 bg-[radial-gradient(circle_at_center,_#4CC2FF55,_transparent_70%)] blur-3xl" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto text-[#F5EFE7]">
        {/* Header */}
        <motion.div
          className="mb-16 md:mb-20 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="mb-6 h-[2px] w-20 mx-auto bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          />

          <div className="flex items-center justify-center gap-4 mb-5">
            {/* капсула-иконка как в ServiceCard */}
            <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-[radial-gradient(circle_at_top,_#3A7BFF3b,_#050816)] overflow-hidden shadow-[0_0_40px_rgba(58,123,255,0.7)]">
              <Heart className="relative z-20 h-7 w-7 text-[#E8F2FF]" />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#3A7BFF66] to-[#4CC2FF66] opacity-40" />
            </div>

            <motion.h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
              <motion.span
                className="relative inline-block"
                initial="initial"
                whileHover="hover"
              >
                <span className="relative z-10">Клиентские истории</span>

                <motion.span
                  className="pointer-events-none absolute left-0 top-0 z-0 text-[#4CC2FF] mix-blend-screen"
                  variants={glitchPrimary}
                  aria-hidden="true"
                >
                  Клиентские истории
                </motion.span>

                <motion.span
                  className="pointer-events-none absolute left-0 top-0 z-0 text-[#9B5DFF] mix-blend-screen"
                  variants={glitchSecondary}
                  aria-hidden="true"
                >
                  Клиентские истории
                </motion.span>
              </motion.span>
            </motion.h2>
          </div>

          <p className="text-base md:text-xl opacity-80 max-w-3xl mx-auto leading-relaxed text-[#C7CEDF]">
            Не “красивые слова”, а понятные кейсы: что было, что сделали и что
            получилось.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="space-y-14 md:space-y-16">
          {stories.map((story, index) => (
            <ClientStoryCard key={index} story={story} index={index} />
          ))}
        </div>
      </div>

      {/* Floating decorative element (как в FocusSection) */}
      <motion.div
        className="pointer-events-none absolute top-16 right-4 md:right-10 h-20 w-20 rounded-3xl border border-[#3A7BFF33] bg-[radial-gradient(circle_at_top,_#3A7BFF33,_transparent_70%)] opacity-50"
        animate={{
          rotate: 360,
          scale: [1, 1.08, 1],
        }}
        transition={{
          rotate: { duration: 26, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
      />
    </section>
  );
}
