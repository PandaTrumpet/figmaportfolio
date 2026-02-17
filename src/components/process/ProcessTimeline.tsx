

// "use client";

// import { motion } from "motion/react";
// import { TimelineFlow } from "./TimelineFlow";
// import { PageContainer } from "../Layout/PageContainer";



// export function ProcessTimeline({ timeline }: { timeline: any }) {
//   return (
//     <section
//       className="relative  pt-10 pb-10
//         md:pt-14 md:pb-14
//         lg:pt-16 lg:pb-16 overflow-visible text-[#F5EFE7]"
//     >
//       {/* LOCAL FX (clip only background, not content) */}
//       <div
//         className="
//           pointer-events-none absolute inset-0 -z-10 overflow-hidden
//           [mask-image:linear-gradient(to_bottom,transparent_0%,black_12%,black_88%,transparent_100%)]
//           [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_12%,black_88%,transparent_100%)]
//         "
//         aria-hidden="true"
//       >
//         {/* soft background spots */}
//         <div className="absolute inset-0 opacity-60">
//           <div className="absolute -top-44 -left-40 h-[520px] w-[520px] bg-[radial-gradient(circle_at_center,_rgba(58,123,255,0.28),_transparent_65%)] blur-3xl" />
//           <div className="absolute -bottom-52 -right-36 h-[620px] w-[620px] bg-[radial-gradient(circle_at_center,_rgba(76,194,255,0.22),_transparent_70%)] blur-3xl" />
//         </div>

//         {/* optional subtle grid so this section blends into global */}
//         <div
//           className="absolute inset-0 opacity-[0.05]"
//           style={{
//             backgroundImage:
//               "linear-gradient(rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.10) 1px, transparent 1px)",
//             backgroundSize: "88px 88px",
//           }}
//         />
//       </div>

//       {/* decorative grid (full-bleed, optional) */}
//       <div
//         className="pointer-events-none absolute inset-0 z-0"
//         aria-hidden="true"
//       />

//       <PageContainer className="max-w-[1200px]">
//         <div className="relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 26 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-center mb-16 md:mb-20"
//           >
         

//             <h2
//               className="text-3xl
//   md:text-4xl
//   lg:text-5xl
//   xl:text-6xl
//   font-semibold
//   leading-tight
//   md:leading-[1.15]  text-slate-50 mb-3"
//             >
//               {timeline.title}
//             </h2>

//             {timeline.subtitle ? (
//               <p className="mt-4 text-base md:text-xl text-[#C7CEDF] max-w-3xl mx-auto leading-relaxed opacity-80">
//                 {timeline.subtitle}
//               </p>
//             ) : null}
//           </motion.div>

//           <TimelineFlow phases={timeline.phases} />
//         </div>
//       </PageContainer>
//     </section>
//   );
// }



"use client";

import { motion } from "motion/react";
import { TimelineFlow } from "./TimelineFlow";
import { PageContainer } from "../Layout/PageContainer";

export function ProcessTimeline({ timeline }: { timeline: any }) {
  return (
    <section
      className="
        relative pt-10 pb-10
        md:pt-14 md:pb-14
        lg:pt-16 lg:pb-16
        overflow-visible text-[#F5EFE7]
      "
    >
      {/* LOCAL FX (optimized: no mask-image, cheaper blur, isolated paint) */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        style={{
          // isolates paints so heavy background affects less of the page
          contain: "paint",
        }}
        aria-hidden="true"
      >
        {/* soft background spots (cheaper) */}
        <div
          className="absolute inset-0 opacity-55 transform-gpu will-change-transform"
          style={{
            // help compositor keep this as a separate layer
            transform: "translateZ(0)",
          }}
        >
          <div
            className="
              absolute -top-40 -left-36
              h-[420px] w-[420px]
              blur-2xl
            "
            style={{
              background:
                "radial-gradient(circle at center, rgba(58,123,255,0.26), transparent 64%)",
            }}
          />
          <div
            className="
              absolute -bottom-44 -right-32
              h-[520px] w-[520px]
              blur-2xl
            "
            style={{
              background:
                "radial-gradient(circle at center, rgba(76,194,255,0.20), transparent 70%)",
            }}
          />
        </div>

        {/* subtle grid (lighter) */}
        <div
          className="absolute inset-0 opacity-[0.035] transform-gpu"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.10) 1px, transparent 1px)",
            backgroundSize: "96px 96px",
            transform: "translateZ(0)",
          }}
        />

        {/* fade top/bottom like the old mask-image, but cheaper */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(5,6,8,0.00) 0%, rgba(5,6,8,0.10) 12%, rgba(5,6,8,0.10) 88%, rgba(5,6,8,0.00) 100%)",
          }}
        />
      </div>

      {/* decorative grid placeholder (kept) */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden="true"
      />

      <PageContainer className="max-w-[1200px]">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-20"
          >
            <h2
              className="
                text-3xl md:text-4xl lg:text-5xl xl:text-6xl
                font-semibold leading-tight md:leading-[1.15]
                text-slate-50 mb-3
              "
            >
              {timeline.title}
            </h2>

            {timeline.subtitle ? (
              <p className="mt-4 text-base md:text-xl text-[#C7CEDF] max-w-3xl mx-auto leading-relaxed opacity-80">
                {timeline.subtitle}
              </p>
            ) : null}
          </motion.div>

          <TimelineFlow phases={timeline.phases} />
        </div>
      </PageContainer>
    </section>
  );
}
