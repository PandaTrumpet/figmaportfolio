
// "use client";

// import { motion, useReducedMotion } from "motion/react";
// import { Plus } from "lucide-react";
// import { pricingData } from "@/src/data/pricingData";
// import { AddOnCard } from "@/src/components/pricing/AddOnCard";

// const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

// export function PricingAddonsSection() {
//   const reduce = useReducedMotion();

//   return (
//     <section
//       id="addons"
//       className="relative px-6 md:px-12 lg:px-20 py-24 md:py-32 overflow-visible"
//     >
//       {/* LOCAL FX (clip only background, not content) */}
//       <div
//         className="
//           pointer-events-none absolute inset-0 -z-10 overflow-hidden
//           [mask-image:linear-gradient(to_bottom,transparent_0%,black_14%,black_88%,transparent_100%)]
//           [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_14%,black_88%,transparent_100%)]
//         "
//         aria-hidden="true"
//       >
//         {/* background spots */}
//         <div className="absolute inset-0 opacity-60">
//           <div className="absolute -top-44 -left-40 h-96 w-96 bg-[radial-gradient(circle_at_center,_#3A7BFF55,_transparent_70%)] blur-3xl" />
//           <div className="absolute -bottom-52 -right-16 h-[28rem] w-[28rem] bg-[radial-gradient(circle_at_center,_#4CC2FF55,_transparent_70%)] blur-3xl" />
//           <div className="absolute top-1/3 left-1/2 h-[22rem] w-[22rem] -translate-x-1/2 bg-[radial-gradient(circle_at_center,_#9B5DFF33,_transparent_70%)] blur-3xl" />
//         </div>

//         {/* safety fade */}
//         <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-b from-transparent to-[#020410]" />
//       </div>

//       <div className="relative z-10 max-w-[1400px] mx-auto text-[#F5EFE7]">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, ease: EASE }}
//           viewport={{ once: true }}
//           className="text-center mb-12 md:mb-16"
//         >
//           <motion.div
//             className="mx-auto mb-6 h-[2px] w-20 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]"
//             initial={{ width: 0 }}
//             whileInView={{ width: 80 }}
//             transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
//             viewport={{ once: true }}
//           />

//           <div className="flex items-center justify-center gap-3 md:gap-4 mb-4 md:mb-6">
//             <motion.div
//               className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-2xl border border-white/15 bg-[radial-gradient(circle_at_top,_#3A7BFF3b,_#050816)] shadow-[0_0_38px_rgba(76,194,255,0.55)]"
//               animate={
//                 reduce ? undefined : { y: [0, -6, 0], rotate: [0, 6, 0] }
//               }
//               transition={
//                 reduce
//                   ? undefined
//                   : { duration: 3.6, repeat: Infinity, ease: "easeInOut" }
//               }
//               aria-hidden="true"
//             >
//               <Plus className="h-6 w-6 md:h-7 md:w-7 text-[#E8F2FF]" />
//             </motion.div>

//             <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
//               {pricingData.addons.title}
//             </h2>
//           </div>

//           <p className="text-base md:text-xl opacity-80 max-w-3xl mx-auto leading-relaxed">
//             {pricingData.addons.subtitle}
//           </p>
//         </motion.div>

//         {/* Cards Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-8">
//           {pricingData.addons.items.map((addon, index) => (
//             <AddOnCard
//               key={`${addon.name}-${index}`}
//               addon={addon}
//               index={index}
//             />
//           ))}
//         </div>
//       </div>

//       {/* decorative floating element (keep, but don't clip) */}
//       <motion.div
//         className="pointer-events-none absolute top-16 right-4 md:right-10 z-0 h-20 w-20 rounded-3xl border border-[#3A7BFF33] bg-[radial-gradient(circle_at_top,_#3A7BFF33,_transparent_70%)] opacity-50"
//         animate={reduce ? undefined : { rotate: 360, scale: [1, 1.08, 1] }}
//         transition={
//           reduce
//             ? undefined
//             : {
//                 rotate: { duration: 26, repeat: Infinity, ease: "linear" },
//                 scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
//               }
//         }
//         aria-hidden="true"
//       />
//     </section>
//   );
// }



"use client";

import { motion, useReducedMotion } from "motion/react";
import { Plus } from "lucide-react";
import { pricingData } from "@/src/data/pricingData";
import { AddOnCard } from "@/src/components/pricing/AddOnCard";
import { PageContainer } from "../Layout/PageContainer";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function PricingAddonsSection() {
  const reduce = useReducedMotion();

  return (
    <section
      id="addons"
      className="relative  pt-10 pb-10
        md:pt-14 md:pb-14
        lg:pt-16 lg:pb-16 overflow-visible"
    >
      {/* LOCAL FX (clip only background, not content) */}
      <div
        className="
          pointer-events-none absolute inset-0 -z-10 overflow-hidden
          [mask-image:linear-gradient(to_bottom,transparent_0%,black_14%,black_88%,transparent_100%)]
          [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_14%,black_88%,transparent_100%)]
        "
        aria-hidden="true"
      >
        {/* background spots */}
        <div className="absolute inset-0 opacity-60">
          <div className="absolute -top-44 -left-40 h-96 w-96 bg-[radial-gradient(circle_at_center,_#3A7BFF55,_transparent_70%)] blur-3xl" />
          <div className="absolute -bottom-52 -right-16 h-[28rem] w-[28rem] bg-[radial-gradient(circle_at_center,_#4CC2FF55,_transparent_70%)] blur-3xl" />
          <div className="absolute top-1/3 left-1/2 h-[22rem] w-[22rem] -translate-x-1/2 bg-[radial-gradient(circle_at_center,_#9B5DFF33,_transparent_70%)] blur-3xl" />
        </div>

        {/* safety fade */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-b from-transparent to-[#020410]" />
      </div>

      <PageContainer className="relative z-10 max-w-[1200px] text-[#F5EFE7]">
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
              aria-hidden="true"
            >
              <Plus className="h-6 w-6 md:h-7 md:w-7 text-[#E8F2FF]" />
            </motion.div>

            <h2
              className="text-3xl 
  md:text-4xl 
  lg:text-5xl 
  xl:text-6xl 
  font-semibold 
  leading-tight 
  md:leading-[1.15]  text-slate-50 mb-3"
            >
              {pricingData.addons.title}
            </h2>
          </div>

          <p className="  mt-4
  text-white/75
  leading-relaxed md:leading-[1.7]
  max-w-[52ch] md:max-w-[60ch] lg:max-w-[66ch]
  text-[clamp(0.98rem,0.55vw+0.88rem,1.15rem)] mx-auto">
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
      </PageContainer>

      {/* decorative floating element (keep, but don't clip) */}
      <motion.div
        className="pointer-events-none absolute top-16 right-4 md:right-10 z-0 h-20 w-20 rounded-3xl border border-[#3A7BFF33] bg-[radial-gradient(circle_at_top,_#3A7BFF33,_transparent_70%)] opacity-50"
        animate={reduce ? undefined : { rotate: 360, scale: [1, 1.08, 1] }}
        transition={
          reduce
            ? undefined
            : {
                rotate: { duration: 26, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              }
        }
        aria-hidden="true"
      />
    </section>
  );
}
