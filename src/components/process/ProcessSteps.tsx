

// "use client";

// import { motion } from "motion/react";
// import { ProcessStep } from "./ProcessStep";

// export function ProcessSteps({ steps }: { steps: any[] }) {
//   return (
//     <section className="relative px-6 md:px-12 lg:px-20 py-24 md:py-32 overflow-visible">
//       {/* LOCAL FX (clip only background, not content) */}
//       <div
//         className="
//           pointer-events-none absolute inset-0 -z-10 overflow-hidden
//           [mask-image:linear-gradient(to_bottom,transparent_0%,black_12%,black_88%,transparent_100%)]
//           [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_12%,black_88%,transparent_100%)]
//         "
//         aria-hidden="true"
//       >
//         {/* ambient spots */}
//         <div className="absolute inset-0 opacity-60">
//           <div className="absolute -top-44 -left-40 h-96 w-96 bg-[radial-gradient(circle_at_center,_rgba(58,123,255,0.55),_transparent_70%)] blur-3xl" />
//           <div className="absolute -bottom-40 -right-16 h-[520px] w-[520px] bg-[radial-gradient(circle_at_center,_rgba(76,194,255,0.5),_transparent_70%)] blur-3xl" />
//         </div>

//         {/* optional subtle grid (very soft, keeps continuity) */}
//         <div
//           className="absolute inset-0 opacity-[0.05]"
//           style={{
//             backgroundImage:
//               "linear-gradient(rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.10) 1px, transparent 1px)",
//             backgroundSize: "84px 84px",
//           }}
//         />
//       </div>

//       <div className="relative z-10 max-w-[1600px] mx-auto text-[#F5EFE7]">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
//           viewport={{ once: true }}
//           className="text-center mb-16 md:mb-24"
//         >
//           <motion.div
//             className="mx-auto mb-8 h-[2px] w-20 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]"
//             initial={{ width: 0 }}
//             whileInView={{ width: 80 }}
//             transition={{ duration: 0.9, ease: "easeOut" }}
//             viewport={{ once: true }}
//           />

//           <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight mb-4 md:mb-6">
//             5 шагов — от идеи до заявок в WhatsApp
//           </h2>

//           <p className="text-base md:text-xl text-[#C7CEDF] max-w-3xl mx-auto leading-relaxed">
//             Прозрачно по срокам и результатам: вы всегда понимаете, что
//             происходит на проекте и что получаете на каждом этапе.
//           </p>
//         </motion.div>

//         <div className="space-y-24 md:space-y-32 lg:space-y-40">
//           {steps.map((step, index) => (
//             <ProcessStep key={index} step={step} index={index} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { motion } from "motion/react";
import { ProcessStep } from "./ProcessStep";
import { PageContainer } from "../Layout/PageContainer";

export function ProcessSteps({ steps }: { steps: any[] }) {
  return (
    <section className="relative py-24 md:py-32 overflow-visible">
      {/* LOCAL FX (clip only background, not content) */}
      <div
        className="
          pointer-events-none absolute inset-0 -z-10 overflow-hidden
          [mask-image:linear-gradient(to_bottom,transparent_0%,black_12%,black_88%,transparent_100%)]
          [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_12%,black_88%,transparent_100%)]
        "
        aria-hidden="true"
      >
        {/* ambient spots */}
        <div className="absolute inset-0 opacity-60">
          <div className="absolute -top-44 -left-40 h-96 w-96 bg-[radial-gradient(circle_at_center,_rgba(58,123,255,0.55),_transparent_70%)] blur-3xl" />
          <div className="absolute -bottom-40 -right-16 h-[520px] w-[520px] bg-[radial-gradient(circle_at_center,_rgba(76,194,255,0.5),_transparent_70%)] blur-3xl" />
        </div>

        {/* optional subtle grid (very soft, keeps continuity) */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.10) 1px, transparent 1px)",
            backgroundSize: "84px 84px",
          }}
        />
      </div>

      <PageContainer className="max-w-[1600px]">
        <div className="relative z-10 text-[#F5EFE7]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-24"
          >
            <motion.div
              className="mx-auto mb-8 h-[2px] w-20 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: true }}
            />

            <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight mb-4 md:mb-6">
              5 шагов — от идеи до заявок в WhatsApp
            </h2>

            <p className="text-base md:text-xl text-[#C7CEDF] max-w-3xl mx-auto leading-relaxed">
              Прозрачно по срокам и результатам: вы всегда понимаете, что
              происходит на проекте и что получаете на каждом этапе.
            </p>
          </motion.div>

          <div className="space-y-24 md:space-y-32 lg:space-y-40">
            {steps.map((step, index) => (
              <ProcessStep key={index} step={step} index={index} />
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
