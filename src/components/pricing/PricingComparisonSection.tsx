// "use client";

// import { motion } from "motion/react";
// import { pricingData } from "@/src/data/pricingData";
// import { ComparisonTable } from "@/src/components/pricing/ComparisonTable";

// export function PricingComparisonSection() {
//   return (
//     <section
//       id="comparison"
//       className="px-6 md:px-12 lg:px-20 py-32 md:py-40 bg-[#F5EFE7]"
//     >
//       <div className="max-w-[1400px] mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-20"
//         >Й
//           <motion.div
//             className="w-24 h-[3px] bg-[#050608] mb-12 mx-auto"
//             initial={{ width: 0 }}
//             whileInView={{ width: 96 }}
//             transition={{ duration: 1 }}
//             viewport={{ once: true }}
//           />
//           <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-8">
//             {pricingData.comparison.title}
//           </h2>
//           <p className="text-xl md:text-2xl lg:text-3xl opacity-70 max-w-3xl mx-auto">
//             Детальное сравнение возможностей
//           </p>
//         </motion.div>

//         <ComparisonTable />
//       </div>
//     </section>
//   );
// }

"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { pricingData } from "@/src/data/pricingData";
import { ComparisonTable } from "@/src/components/pricing/ComparisonTable";

const glitchPrimary = {
  initial: { x: 0, y: 0, opacity: 0 },
  hover: {
    x: [0, -1.5, 1, -0.5, 0],
    y: [0, 1, -1, 0.5, 0],
    opacity: [0, 0.9, 0.9, 0.6, 0],
    transition: { duration: 0.35 },
  },
};

const glitchSecondary = {
  initial: { x: 0, y: 0, opacity: 0 },
  hover: {
    x: [0, 1.5, -1, 0.5, 0],
    y: [0, -1, 1, -0.5, 0],
    opacity: [0, 0.7, 0.8, 0.5, 0],
    transition: { duration: 0.35 },
  },
};

export function PricingComparisonSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-120px" });

  return (
    <section
      ref={sectionRef}
      id="comparison"
      className="relative px-6 md:px-12 lg:px-20 py-28 md:py-36 bg-[#050816] overflow-hidden"
    >
      {/* фоновые glow-споты */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -top-40 -left-32 h-80 w-80 bg-[radial-gradient(circle_at_center,_#3A7BFF55,_transparent_70%)] blur-3xl" />
        <div className="absolute -bottom-40 -right-20 h-96 w-96 bg-[radial-gradient(circle_at_center,_#9B5DFF55,_transparent_70%)] blur-3xl" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto text-[#F5EFE7]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          {/* градиентная линия */}
          <motion.div
            className="mb-6 h-[2px] w-20 mx-auto bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          />

          {/* Заголовок с glitch */}
          <motion.h2
            className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-5"
            initial="initial"
            whileHover="hover"
          >
            <motion.span className="relative inline-block">
              <span className="relative z-10">
                {pricingData.comparison.title}
              </span>

              <motion.span
                aria-hidden
                className="pointer-events-none absolute left-0 top-0 z-0 text-[#4CC2FF] mix-blend-screen"
                variants={glitchPrimary}
              >
                {pricingData.comparison.title}
              </motion.span>

              <motion.span
                aria-hidden
                className="pointer-events-none absolute left-0 top-0 z-0 text-[#9B5DFF] mix-blend-screen"
                variants={glitchSecondary}
              >
                {pricingData.comparison.title}
              </motion.span>
            </motion.span>
          </motion.h2>

          <p className="text-base md:text-xl opacity-80 max-w-3xl mx-auto leading-relaxed">
            Чёткое сравнение пакетов — без маркетингового шума и скрытых
            условий.
          </p>
        </motion.div>

        {/* Table */}
        <ComparisonTable />
      </div>
    </section>
  );
}
