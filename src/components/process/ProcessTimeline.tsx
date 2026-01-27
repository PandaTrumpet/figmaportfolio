// "use client";

// import { motion } from "motion/react";
// import { TimelineFlow } from "./TimelineFlow";
// import { HolographicGrid } from "./HolographicGrid";

// export function ProcessTimeline({ timeline }: { timeline: any }) {
//   return (
//     <section className="px-6 md:px-12 lg:px-20 py-32 md:py-40 bg-[#050608] text-[#F5EFE7] relative overflow-hidden">
//       <div className="max-w-[1400px] mx-auto relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-24"
//         >
//           <motion.div
//             className="w-24 h-[3px] bg-[#F5EFE7] mb-12 mx-auto"
//             initial={{ width: 0 }}
//             whileInView={{ width: 96 }}
//             transition={{ duration: 1 }}
//             viewport={{ once: true }}
//           />
//           <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-8">
//             {timeline.title}
//           </h2>
//         </motion.div>

//         <TimelineFlow phases={timeline.phases} />
//       </div>

//       <HolographicGrid />
//     </section>
//   );
// }


"use client";

import { motion } from "motion/react";
import { TimelineFlow } from "./TimelineFlow";
import { HolographicGrid } from "./HolographicGrid";

export function ProcessTimeline({ timeline }: { timeline: any }) {
  return (
    <section className="relative px-6 md:px-12 lg:px-20 py-24 md:py-32 bg-[#050608] text-[#F5EFE7] overflow-hidden">
      {/* soft background spots */}
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute -top-44 -left-40 h-[520px] w-[520px] bg-[radial-gradient(circle_at_center,_rgba(58,123,255,0.22),_transparent_65%)] blur-3xl" />
        <div className="absolute -bottom-52 -right-36 h-[620px] w-[620px] bg-[radial-gradient(circle_at_center,_rgba(76,194,255,0.18),_transparent_70%)] blur-3xl" />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-14 md:mb-18"
        >
          <motion.div
            className="mx-auto mb-6 h-[2px] w-20 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            viewport={{ once: true }}
          />

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
            {timeline.title}
          </h2>

          {timeline.subtitle ? (
            <p className="mt-4 text-base md:text-lg text-[#C7CEDF] max-w-3xl mx-auto leading-relaxed">
              {timeline.subtitle}
            </p>
          ) : null}
        </motion.div>

        <TimelineFlow phases={timeline.phases} />
      </div>

      <HolographicGrid />
    </section>
  );
}
