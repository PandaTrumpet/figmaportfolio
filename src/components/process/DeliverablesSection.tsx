// "use client";

// import { motion } from "motion/react";
// import { Package } from "lucide-react";
// import { DeliverableCard } from "./DeliverableCard";

// export function DeliverablesSection({ deliverables }: { deliverables: any }) {
//   return (
//     <section className="px-6 md:px-12 lg:px-20 py-32 md:py-40 bg-white">
//       <div className="max-w-[1400px] mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-24"
//         >
//           <motion.div
//             className="w-24 h-[3px] bg-[#050608] mb-12 mx-auto"
//             initial={{ width: 0 }}
//             whileInView={{ width: 96 }}
//             transition={{ duration: 1 }}
//             viewport={{ once: true }}
//           />
//           <div className="flex items-center justify-center gap-4 mb-8">
//             <Package className="w-10 h-10 md:w-12 md:h-12" />
//             <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
//               {deliverables.title}
//             </h2>
//           </div>
//           <p className="text-xl md:text-2xl lg:text-3xl opacity-70 max-w-3xl mx-auto">
//             {deliverables.subtitle}
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-2 gap-8">
//           {deliverables.items.map((category: any, index: number) => (
//             <DeliverableCard key={index} category={category} index={index} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import { motion } from "motion/react";
import { Package } from "lucide-react";
import { DeliverableCard } from "./DeliverableCard";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function DeliverablesSection({ deliverables }: { deliverables: any }) {
  return (
    <section className="relative px-6 md:px-12 lg:px-20 py-24 md:py-32 bg-[#050608] text-[#F5EFE7] overflow-hidden">
      {/* background grid + glow */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(76,194,255,0.18),_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(155,93,255,0.14),_transparent_60%)]" />
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(245,239,231,0.55) 0px, rgba(245,239,231,0.55) 1px, transparent 1px, transparent 64px), repeating-linear-gradient(90deg, rgba(245,239,231,0.55) 0px, rgba(245,239,231,0.55) 1px, transparent 1px, transparent 64px)",
          }}
          animate={{ backgroundPosition: ["0px 0px", "64px 64px"] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          viewport={{ once: true }}
          className="text-center mb-14 md:mb-18"
        >
          <motion.div
            className="mx-auto mb-6 h-[2px] w-16 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
          />

          <div className="flex items-center justify-center gap-3 md:gap-4 mb-4 md:mb-5">
            <span className="inline-flex h-11 w-11 md:h-12 md:w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/6 backdrop-blur-xl">
              <Package className="h-6 w-6 text-[#EAF2FF]" />
            </span>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
              {deliverables.title}
            </h2>
          </div>

          <p className="text-sm md:text-lg text-[#C7CEDF] max-w-3xl mx-auto leading-relaxed">
            {deliverables.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 md:gap-7">
          {deliverables.items.map((category: any, index: number) => (
            <DeliverableCard key={index} category={category} index={index} />
          ))}
        </div>
      </div>

      {/* floating accent */}
      <motion.div
        className="pointer-events-none absolute top-16 right-6 md:right-14 h-16 w-16 rounded-3xl border border-[#3A7BFF33] bg-[radial-gradient(circle_at_top,_rgba(58,123,255,0.25),_transparent_70%)] opacity-60"
        animate={{ rotate: 360, scale: [1, 1.06, 1] }}
        transition={{
          rotate: { duration: 26, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
      />
    </section>
  );
}
