

// "use client";

// import { motion } from "motion/react";
// import { HologramShapes } from "../process/HologramShapes";

// export function PortfolioHero() {
//   return (
//     <section className="relative min-h-[80vh] flex items-center px-6 md:px-12 lg:px-20 py-32 md:py-40 overflow-visible">
//       {/* LOCAL FX (clip only background, not section content) */}
//       <div
//         className="
//       pointer-events-none absolute inset-0 -z-10 overflow-hidden
//       [mask-image:linear-gradient(to_bottom,transparent_0%,black_14%,black_86%,transparent_100%)]
//       [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_14%,black_86%,transparent_100%)]
//     "
//       >
//         {/* background spots */}
//         <div className="absolute inset-0 opacity-60">
//           <div className="absolute -top-44 -left-40 h-96 w-96 bg-[radial-gradient(circle_at_center,_#3A7BFF55,_transparent_70%)] blur-3xl" />
//           <div className="absolute -bottom-44 -right-32 h-[30rem] w-[30rem] bg-[radial-gradient(circle_at_center,_#4CC2FF55,_transparent_70%)] blur-3xl" />
//         </div>

//         {/* subtle grid (softer) */}
//         <div
//           className="absolute inset-0 opacity-[0.07]"
//           style={{
//             backgroundImage:
//               "linear-gradient(rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.10) 1px, transparent 1px)",
//             backgroundSize: "72px 72px",
//           }}
//         />
//       </div>
//       <div className="max-w-[1600px] mx-auto w-full relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
//         >
//           {/* Accent line */}
//           <motion.div
//             className="w-20 h-[2px] bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF] mb-10"
//             initial={{ width: 0 }}
//             animate={{ width: 80 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           />

//           <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] mb-10 max-w-6xl font-semibold tracking-tight text-[#F2F4FA]">
//             Избранные проекты
//           </h1>

//           <p className="text-xl md:text-2xl text-[#C7CEDF] max-w-3xl leading-relaxed">
//             Примеры решений, которые мы создавали для реального бизнеса. Каждый
//             проект — результат диалога, задач и практичного подхода.
//           </p>
//         </motion.div>
//       </div>

//       {/* Decorative element */}
//       <motion.div
//         className="pointer-events-none absolute top-20 right-16 w-40 h-40 rounded-3xl border border-[#3A7BFF33] bg-[radial-gradient(circle_at_top,_#3A7BFF22,_transparent_70%)] opacity-40"
//         animate={{ rotate: 360 }}
//         transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
//         aria-hidden="true"
//       />

//       {/* Background glow */}
//       <div
//         className="pointer-events-none absolute -top-40 -left-40 h-96 w-96
//         bg-[radial-gradient(circle_at_center,_#4CC2FF33,_transparent_70%)] blur-3xl opacity-60"
//         aria-hidden="true"
//       />

//       {/* Hologram shapes (kept, but safe with overflow-visible) */}
//       <HologramShapes />
//     </section>
//   );
// }


"use client";

import { motion } from "motion/react";
import { HologramShapes } from "../process/HologramShapes";
import { PageContainer } from "../Layout/PageContainer";


export function PortfolioHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center py-32 md:py-40 overflow-visible">
      {/* LOCAL FX (clip only background, not section content) */}
      <div
        className="
          pointer-events-none absolute inset-0 -z-10 overflow-hidden
          [mask-image:linear-gradient(to_bottom,transparent_0%,black_14%,black_86%,transparent_100%)]
          [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_14%,black_86%,transparent_100%)]
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

      <PageContainer className="relative z-10 w-full max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Accent line */}
          <motion.div
            className="w-20 h-[2px] bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF] mb-10"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />

          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] mb-10 font-semibold tracking-tight text-[#F2F4FA]">
            Избранные проекты
          </h1>

          <p className="text-xl md:text-2xl text-[#C7CEDF] max-w-3xl leading-relaxed">
            Примеры решений, которые мы создавали для реального бизнеса. Каждый
            проект — результат диалога, задач и практичного подхода.
          </p>
        </motion.div>
      </PageContainer>

      {/* Decorative element */}
      <motion.div
        className="pointer-events-none absolute top-20 right-16 w-40 h-40 rounded-3xl border border-[#3A7BFF33] bg-[radial-gradient(circle_at_top,_#3A7BFF22,_transparent_70%)] opacity-40"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        aria-hidden="true"
      />

      {/* Background glow */}
      <div
        className="pointer-events-none absolute -top-40 -left-40 h-96 w-96
        bg-[radial-gradient(circle_at_center,_#4CC2FF33,_transparent_70%)] blur-3xl opacity-60"
        aria-hidden="true"
      />

      {/* Hologram shapes (kept, but safe with overflow-visible) */}
      <HologramShapes />
    </section>
  );
}
