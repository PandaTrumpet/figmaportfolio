

// "use client";

// import { motion } from "motion/react";
// import { Package } from "lucide-react";
// import { DeliverableCard } from "./DeliverableCard";

// const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

// export function DeliverablesSection({ deliverables }: { deliverables: any }) {
//   return (
//     <section className="relative px-6 md:px-12 lg:px-20 py-24 md:py-32 overflow-visible text-[#F5EFE7]">
//       {/* LOCAL FX (clip only background, not content) */}
//       <div
//         className="
//           pointer-events-none absolute inset-0 -z-10 overflow-hidden
//           [mask-image:linear-gradient(to_bottom,transparent_0%,black_12%,black_88%,transparent_100%)]
//           [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_12%,black_88%,transparent_100%)]
//         "
//         aria-hidden="true"
//       >
//         {/* soft spots */}
//         <div className="absolute -top-44 -left-40 h-[520px] w-[520px] bg-[radial-gradient(circle_at_center,_rgba(58,123,255,0.26),_transparent_65%)] blur-3xl opacity-60" />
//         <div className="absolute -bottom-56 -right-40 h-[620px] w-[620px] bg-[radial-gradient(circle_at_center,_rgba(76,194,255,0.22),_transparent_70%)] blur-3xl opacity-55" />

//         {/* subtle animated grid */}
//         <div className="absolute inset-0 opacity-[0.045]">
//           <motion.div
//             className="absolute inset-0"
//             style={{
//               backgroundImage:
//                 "repeating-linear-gradient(0deg, rgba(200,220,255,0.55) 0px, rgba(200,220,255,0.55) 1px, transparent 1px, transparent 64px), repeating-linear-gradient(90deg, rgba(200,220,255,0.55) 0px, rgba(200,220,255,0.55) 1px, transparent 1px, transparent 64px)",
//             }}
//             animate={{ backgroundPosition: ["0px 0px", "64px 64px"] }}
//             transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
//           />
//         </div>
//       </div>

//       <div className="relative z-10 max-w-[1400px] mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 26 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: EASE }}
//           viewport={{ once: true }}
//           className="text-center mb-16 md:mb-20"
//         >
//           <motion.div
//             className="mx-auto mb-6 h-[2px] w-20 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]"
//             initial={{ width: 0 }}
//             whileInView={{ width: 80 }}
//             transition={{ duration: 0.9, ease: "easeOut" }}
//             viewport={{ once: true }}
//           />

//           <div className="flex items-center justify-center gap-3 md:gap-4 mb-4 md:mb-6">
//             {/* Icon capsule */}
//             <motion.span
//               className="relative inline-flex h-11 w-11 md:h-12 md:w-12 items-center justify-center rounded-2xl border border-white/15
//                          bg-[radial-gradient(circle_at_top,_#3A7BFF3b,_#050816)] overflow-hidden
//                          shadow-[0_0_40px_rgba(58,123,255,0.55)]"
//               whileHover={{ scale: 1.05 }}
//               transition={{ duration: 0.25, ease: "easeOut" }}
//             >
//               <Package className="relative z-10 h-6 w-6 text-[#EAF2FF]" />
//               <motion.span
//                 className="absolute inset-0 bg-gradient-to-br from-transparent via-[#3A7BFF66] to-[#4CC2FF66]"
//                 initial={{ opacity: 0.35 }}
//                 whileHover={{ opacity: 0.75 }}
//                 transition={{ duration: 0.25 }}
//               />
//             </motion.span>

//             <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
//               {deliverables.title}
//             </h2>
//           </div>

//           <p className="text-sm md:text-xl text-[#C7CEDF] max-w-3xl mx-auto leading-relaxed opacity-80">
//             {deliverables.subtitle}
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-2 gap-6 md:gap-8">
//           {deliverables.items.map((category: any, index: number) => (
//             <DeliverableCard key={index} category={category} index={index} />
//           ))}
//         </div>
//       </div>

//       {/* floating accent */}
//       <motion.div
//         className="pointer-events-none absolute top-16 right-6 md:right-14 h-16 w-16 rounded-3xl border border-[#3A7BFF33]
//                    bg-[radial-gradient(circle_at_top,_rgba(58,123,255,0.22),_transparent_70%)] opacity-55"
//         animate={{ rotate: 360, scale: [1, 1.06, 1] }}
//         transition={{
//           rotate: { duration: 26, repeat: Infinity, ease: "linear" },
//           scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
//         }}
//         aria-hidden="true"
//       />
//     </section>
//   );
// }


"use client";

import { motion } from "motion/react";
import { Package } from "lucide-react";
import { DeliverableCard } from "./DeliverableCard";
import { PageContainer } from "../Layout/PageContainer";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function DeliverablesSection({ deliverables }: { deliverables: any }) {
  return (
    <section className="relative py-24 md:py-32 overflow-visible text-[#F5EFE7]">
      {/* LOCAL FX (clip only background, not content) */}
      <div
        className="
          pointer-events-none absolute inset-0 -z-10 overflow-hidden
          [mask-image:linear-gradient(to_bottom,transparent_0%,black_12%,black_88%,transparent_100%)]
          [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_12%,black_88%,transparent_100%)]
        "
        aria-hidden="true"
      >
        {/* soft spots */}
        {/* <div className="absolute -top-44 -left-40 h-[520px] w-[520px] bg-[radial-gradient(circle_at_center,_rgba(58,123,255,0.26),_transparent_65%)] blur-3xl opacity-60" /> */}
        <div className="absolute -bottom-56 -right-40 h-[620px] w-[620px] bg-[radial-gradient(circle_at_center,_rgba(76,194,255,0.22),_transparent_70%)] blur-3xl opacity-55" />

        {/* subtle animated grid */}
        <div className="absolute inset-0 opacity-[0.045]">
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, rgba(200,220,255,0.55) 0px, rgba(200,220,255,0.55) 1px, transparent 1px, transparent 64px), repeating-linear-gradient(90deg, rgba(200,220,255,0.55) 0px, rgba(200,220,255,0.55) 1px, transparent 1px, transparent 64px)",
            }}
            animate={{ backgroundPosition: ["0px 0px", "64px 64px"] }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </div>

      <PageContainer>
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-20"
          >
            <motion.div
              className="mx-auto mb-6 h-[2px] w-20 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: true }}
            />

            <div className="flex items-center justify-center gap-3 md:gap-4 mb-4 md:mb-6">
              {/* Icon capsule */}
              <motion.span
                className="relative inline-flex h-11 w-11 md:h-12 md:w-12 items-center justify-center rounded-2xl border border-white/15
                           bg-[radial-gradient(circle_at_top,_#3A7BFF3b,_#050816)] overflow-hidden
                           shadow-[0_0_40px_rgba(58,123,255,0.55)]"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <Package className="relative z-10 h-6 w-6 text-[#EAF2FF]" />
                <motion.span
                  className="absolute inset-0 bg-gradient-to-br from-transparent via-[#3A7BFF66] to-[#4CC2FF66]"
                  initial={{ opacity: 0.35 }}
                  whileHover={{ opacity: 0.75 }}
                  transition={{ duration: 0.25 }}
                />
              </motion.span>

              <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
                {deliverables.title}
              </h2>
            </div>

            <p className="text-sm md:text-xl text-[#C7CEDF] max-w-3xl mx-auto leading-relaxed opacity-80">
              {deliverables.subtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {deliverables.items.map((category: any, index: number) => (
              <DeliverableCard key={index} category={category} index={index} />
            ))}
          </div>
        </div>
      </PageContainer>

      {/* floating accent (full-bleed, aligned to global padding) */}
      <motion.div
        className="pointer-events-none absolute top-16 right-6 md:right-12 lg:right-20 h-16 w-16 rounded-3xl border border-[#3A7BFF33]
                   bg-[radial-gradient(circle_at_top,_rgba(58,123,255,0.22),_transparent_70%)] opacity-55"
        animate={{ rotate: 360, scale: [1, 1.06, 1] }}
        transition={{
          rotate: { duration: 26, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
        aria-hidden="true"
      />
    </section>
  );
}
