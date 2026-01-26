// "use client";

// import { motion } from "motion/react";
// import { Plus } from "lucide-react";
// import { pricingData } from "@/src/data/pricingData";
// import { AddOnCard } from "@/src/components/pricing/AddOnCard";

// export function PricingAddonsSection() {
//   return (
//     <section
//       id="addons"
//       className="px-6 md:px-12 lg:px-20 py-32 md:py-40 bg-white"
//     >
//       <div className="max-w-[1400px] mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-20"
//         >
//           <motion.div
//             className="w-24 h-[3px] bg-[#050608] mb-12 mx-auto"
//             initial={{ width: 0 }}
//             whileInView={{ width: 96 }}
//             transition={{ duration: 1 }}
//             viewport={{ once: true }}
//           />
//           <div className="flex items-center justify-center gap-4 mb-8">
//             <Plus className="w-10 h-10 md:w-12 md:h-12" />
//             <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
//               {pricingData.addons.title}
//             </h2>
//           </div>
//           <p className="text-xl md:text-2xl lg:text-3xl opacity-70 max-w-3xl mx-auto">
//             {pricingData.addons.subtitle}
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {pricingData.addons.items.map((addon, index) => (
//             <AddOnCard key={index} addon={addon} index={index} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import { motion, useReducedMotion } from "motion/react";
import { Plus } from "lucide-react";
import { pricingData } from "@/src/data/pricingData";
import { AddOnCard } from "@/src/components/pricing/AddOnCard";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function PricingAddonsSection() {
  const reduce = useReducedMotion();

  return (
    <section
      id="addons"
      className="relative px-6 md:px-12 lg:px-20 py-24 md:py-32 overflow-hidden bg-[#050816]"
    >
      {/* background spots */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -top-44 -left-40 h-96 w-96 bg-[radial-gradient(circle_at_center,_#3A7BFF55,_transparent_70%)] blur-3xl" />
        <div className="absolute -bottom-52 -right-16 h-[28rem] w-[28rem] bg-[radial-gradient(circle_at_center,_#4CC2FF55,_transparent_70%)] blur-3xl" />
        <div className="absolute top-1/3 left-1/2 h-[22rem] w-[22rem] -translate-x-1/2 bg-[radial-gradient(circle_at_center,_#9B5DFF33,_transparent_70%)] blur-3xl" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto text-[#F5EFE7]">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            className="mx-auto mb-6 h-[2px] w-20 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
            viewport={{ once: true }}
          />

          <div className="flex items-center justify-center gap-3 md:gap-4 mb-4 md:mb-6">
            <motion.div
              className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-2xl border border-white/15 bg-[radial-gradient(circle_at_top,_#3A7BFF3b,_#050816)] shadow-[0_0_38px_rgba(76,194,255,0.55)]"
              animate={
                reduce ? undefined : { y: [0, -6, 0], rotate: [0, 6, 0] }
              }
              transition={
                reduce
                  ? undefined
                  : { duration: 3.6, repeat: Infinity, ease: "easeInOut" }
              }
            >
              <Plus className="h-6 w-6 md:h-7 md:w-7 text-[#E8F2FF]" />
            </motion.div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
              {pricingData.addons.title}
            </h2>
          </div>

          <p className="text-base md:text-xl opacity-80 max-w-3xl mx-auto leading-relaxed">
            {pricingData.addons.subtitle}
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-8">
          {pricingData.addons.items.map((addon, index) => (
            <AddOnCard
              key={`${addon.name}-${index}`}
              addon={addon}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* decorative floating element */}
      <motion.div
        className="pointer-events-none absolute top-16 right-4 md:right-10 h-20 w-20 rounded-3xl border border-[#3A7BFF33] bg-[radial-gradient(circle_at_top,_#3A7BFF33,_transparent_70%)] opacity-50"
        animate={reduce ? undefined : { rotate: 360, scale: [1, 1.08, 1] }}
        transition={
          reduce
            ? undefined
            : {
                rotate: { duration: 26, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              }
        }
      />
    </section>
  );
}
