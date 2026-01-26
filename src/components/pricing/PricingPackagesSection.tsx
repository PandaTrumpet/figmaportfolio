// "use client";

// import { motion } from "motion/react";
// import { pricingData } from "@/src/data/pricingData";
// import { PricingCard } from "@/src/components/pricing/PricingCard";
// import { TrustSignals } from "@/src/components/pricing/TrustSignals";

// export function PricingPackagesSection() {
//   return (
//     <section
//       id="pricing"
//       className="px-6 md:px-12 lg:px-20 py-32 md:py-40 bg-white"
//     >
//       <div className="max-w-[1600px] mx-auto">
//         {/* Section Header */}
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
//           <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-8">
//             Выберите ваш пакет
//           </h2>
//           <p className="text-xl md:text-2xl lg:text-3xl opacity-70 max-w-3xl mx-auto">
//             Все пакеты включают полный цикл разработки
//           </p>
//         </motion.div>

//         {/* Pricing Grid */}
//         <div className="grid lg:grid-cols-3 gap-8 lg:gap-6 mb-24">
//           {pricingData.packages.map((pkg, index) => (
//             <PricingCard key={index} package={pkg} index={index} />
//           ))}
//         </div>

//         <TrustSignals />
//       </div>
//     </section>
//   );
// }

"use client";

import { motion } from "motion/react";
import { pricingData } from "@/src/data/pricingData";
import { PricingCard } from "@/src/components/pricing/PricingCard";
import { TrustSignals } from "@/src/components/pricing/TrustSignals";

export function PricingPackagesSection() {
  return (
    <section
      id="pricing"
      className="relative px-6 md:px-12 lg:px-20 py-24 md:py-32 overflow-hidden bg-[#050816]"
    >
      {/* фоновые споты в стиле сайта */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -top-40 -left-32 h-80 w-80 bg-[radial-gradient(circle_at_center,_#3A7BFF55,_transparent_70%)] blur-3xl" />
        <div className="absolute -bottom-40 -right-10 h-96 w-96 bg-[radial-gradient(circle_at_center,_#4CC2FF55,_transparent_70%)] blur-3xl" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-72 w-[520px] bg-[radial-gradient(circle_at_center,_#9B5DFF33,_transparent_70%)] blur-3xl" />
      </div>

      {/* subtle dots */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.10]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.55) 1px, transparent 0)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(circle at 50% 25%, black 0%, transparent 75%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            className="mb-6 h-[2px] w-20 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF] mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            viewport={{ once: true }}
          />

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#F5EFE7] mb-4">
            Выберите ваш пакет
          </h2>

          <p className="text-base md:text-xl text-[#C7CEDF] opacity-90 max-w-3xl mx-auto leading-relaxed">
            Все пакеты включают полный цикл разработки
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-10 mb-14 md:mb-16">
          {pricingData.packages.map((pkg, index) => (
            <PricingCard key={pkg.name} package={pkg} index={index} />
          ))}
        </div>

        {/* <TrustSignals /> */}
      </div>
    </section>
  );
}
