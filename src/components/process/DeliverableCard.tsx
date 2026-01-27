// "use client";

// import { motion } from "motion/react";
// import { Check } from "lucide-react";

// export function DeliverableCard({
//   category,
//   index,
// }: {
//   category: any;
//   index: number;
// }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 60 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8, delay: index * 0.1 }}
//       viewport={{ once: true }}
//       className="group"
//     >
//       <motion.div
//         className="border-2 border-[#050608] p-10 md:p-12 bg-[#F5EFE7] h-full hover:bg-white transition-colors"
//         whileHover={{
//           boxShadow: "16px 16px 0px 0px rgba(5,6,8,1)",
//           x: -5,
//           y: -5,
//         }}
//       >
//         <div className="flex items-center gap-4 mb-8">
//           <motion.div
//             className="text-5xl"
//             animate={{ rotate: [0, 15, -15, 0] }}
//             transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
//           >
//             {category.icon}
//           </motion.div>
//           <h3 className="text-2xl md:text-3xl lg:text-4xl">
//             {category.category}
//           </h3>
//         </div>

//         <div className="space-y-3">
//           {category.items.map((item: string, i: number) => (
//             <div key={i} className="flex items-start gap-3">
//               <Check className="w-5 h-5 shrink-0 mt-1" />
//               <p className="text-lg opacity-70">{item}</p>
//             </div>
//           ))}
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// }


"use client";

import { motion } from "motion/react";
import { Check } from "lucide-react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function DeliverableCard({
  category,
  index,
}: {
  category: any;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: EASE }}
      viewport={{ once: true }}
      className="group"
    >
      <motion.div
        className="relative h-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden"
        whileHover={{ y: -8 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        {/* glow layer */}
        <div className="pointer-events-none absolute -inset-24 bg-[radial-gradient(circle_at_top,_rgba(76,194,255,0.18),_transparent_55%)] opacity-70" />

        {/* subtle border highlight */}
        <div
          className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            boxShadow:
              "0 0 0 1px rgba(76,194,255,0.35), 0 0 42px rgba(76,194,255,0.22)",
          }}
        />

        <div className="relative p-6 md:p-7">
          {/* header */}
          <div className="flex items-start gap-4 mb-5">
            <motion.div
              className="shrink-0 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/6 backdrop-blur-xl text-2xl"
              animate={{ rotate: [0, 6, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
              aria-hidden="true"
            >
              {category.icon}
            </motion.div>

            <div className="min-w-0">
              <h3 className="text-lg md:text-xl font-semibold tracking-tight text-[#F5EFE7]">
                {category.category}
              </h3>
              <p className="mt-1 text-sm text-[#C7CEDF]">
                Всё, что нужно для запуска и работы без “потерь”.
              </p>
            </div>
          </div>

          {/* list */}
          <div className="space-y-3">
            {category.items.map((item: string, i: number) => (
              <div key={i} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/10 bg-white/6">
                  <Check className="h-3.5 w-3.5 text-[#CFE3FF]" />
                </span>
                <p className="text-sm md:text-[15px] leading-relaxed text-[#D5DBE6]/85">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* bottom accent */}
        <div className="h-[2px] w-full bg-gradient-to-r from-[#3A7BFF55] via-[#4CC2FF55] to-[#9B5DFF55]" />
      </motion.div>
    </motion.div>
  );
}
