// "use client";

// import { motion } from "motion/react";
// import { pricingData } from "@/src/data/pricingData";
// import { FAQItem } from "@/src/components/pricing/FAQItem";

// export function PricingFAQSection() {
//   return (
//     <section
//       id="faq"
//       className="px-6 md:px-12 lg:px-20 py-32 md:py-40 bg-[#F5EFE7]"
//     >
//       <div className="max-w-[900px] mx-auto">
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
//             {pricingData.faq.title}
//           </h2>
//           <p className="text-xl md:text-2xl opacity-70">
//             {pricingData.faq.subtitle}
//           </p>
//         </motion.div>

//         <div className="space-y-4">
//           {pricingData.faq.items.map((item, index) => (
//             <FAQItem key={index} item={item} index={index} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import { motion } from "motion/react";
import { pricingData } from "@/src/data/pricingData";
import { FAQItem } from "@/src/components/pricing/FAQItem";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function PricingFAQSection() {
  return (
    <section
      id="faq"
      className="relative px-6 md:px-12 lg:px-20 py-24 md:py-32 overflow-hidden bg-[#050816]"
    >
      {/* background spots */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -top-40 -left-32 h-80 w-80 bg-[radial-gradient(circle_at_center,_#3A7BFF55,_transparent_70%)] blur-3xl" />
        <div className="absolute -bottom-44 -right-12 h-96 w-96 bg-[radial-gradient(circle_at_center,_#4CC2FF55,_transparent_70%)] blur-3xl" />
        <div className="absolute top-1/2 left-1/2 h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_at_center,_#9B5DFF33,_transparent_70%)] blur-3xl" />
      </div>

      <div className="relative z-10 max-w-[980px] mx-auto text-[#F5EFE7]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-14"
        >
          <motion.div
            className="mx-auto mb-6 h-[2px] w-20 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
            viewport={{ once: true }}
          />

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-4 md:mb-5">
            {pricingData.faq.title}
          </h2>

          <p className="text-base md:text-xl opacity-80 max-w-2xl mx-auto leading-relaxed">
            {pricingData.faq.subtitle}
          </p>
        </motion.div>

        <div className="space-y-4 md:space-y-5">
          {pricingData.faq.items.map((item, index) => (
            <FAQItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>

      {/* decorative */}
      <motion.div
        className="pointer-events-none absolute top-14 right-4 md:right-10 h-20 w-20 rounded-3xl border border-[#3A7BFF33] bg-[radial-gradient(circle_at_top,_#3A7BFF33,_transparent_70%)] opacity-50"
        animate={{ rotate: 360, scale: [1, 1.08, 1] }}
        transition={{
          rotate: { duration: 26, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
      />
    </section>
  );
}
