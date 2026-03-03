// "use client";

// import { motion } from "motion/react";
// import { Package } from "lucide-react";
// import { DeliverableCard } from "./DeliverableCard";
// import { PageContainer } from "../Layout/PageContainer";

// interface Categoty {
//   category: string;
//   items: string[];
//   icon: string;
// }
// interface Deliverables {
//   title: string;
//   subtitle: string;
//   items: {
//     category: string;
//     items: string[];
//     icon: string;
//   }[];
// }

// const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

// export function DeliverablesSection({
//   deliverables,
// }: {
//   deliverables: Deliverables;
// }) {
//   return (
//     <section
//       className="
//         relative pt-10 pb-10
//         md:pt-14 md:pb-14
//         lg:pt-16 lg:pb-16
//         overflow-visible text-[#F5EFE7]
//       "
//     >
//       {/* LOCAL FX (optimized: no mask-image, no backgroundPosition animation) */}
//       <div
//         className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
//         style={{ contain: "paint" }}
//         aria-hidden="true"
//       >
//         {/* soft spot (cheaper) */}
//         <div
//           className="absolute inset-0 opacity-55 transform-gpu will-change-transform"
//           style={{ transform: "translateZ(0)" }}
//         >
//           <div
//             className="
//               absolute -bottom-48 -right-32
//               h-[520px] w-[520px]
//               blur-2xl
//             "
//             style={{
//               background:
//                 "radial-gradient(circle at center, rgba(76,194,255,0.20), transparent 70%)",
//             }}
//           />
//         </div>

//         {/* subtle grid (animated by transform, NOT by backgroundPosition) */}
//         <div className="absolute inset-0 opacity-[0.04] overflow-hidden transform-gpu">
//           <motion.div
//             className="absolute -inset-[40%] will-change-transform"
//             style={{
//               backgroundImage:
//                 "repeating-linear-gradient(0deg, rgba(200,220,255,0.55) 0px, rgba(200,220,255,0.55) 1px, transparent 1px, transparent 64px), repeating-linear-gradient(90deg, rgba(200,220,255,0.55) 0px, rgba(200,220,255,0.55) 1px, transparent 1px, transparent 64px)",
//               transform: "translateZ(0)",
//             }}
//             animate={{ x: [0, 64], y: [0, 64] }}
//             transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
//           />
//         </div>

//         {/* fade top/bottom like old mask-image, but cheaper */}
//         <div
//           className="absolute inset-0"
//           style={{
//             background:
//               "linear-gradient(to bottom, rgba(5,6,8,0.00) 0%, rgba(5,6,8,0.10) 12%, rgba(5,6,8,0.10) 88%, rgba(5,6,8,0.00) 100%)",
//           }}
//         />
//       </div>

//       <PageContainer className="max-w-[1200px]">
//         <div className="relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 26 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, ease: EASE }}
//             viewport={{ once: true }}
//             className="text-center mb-16 md:mb-20"
//           >
//             <div className="flex items-center justify-center gap-3 md:gap-4 mb-4 md:mb-6">
//               <motion.span
//                 className="
//                   relative inline-flex h-11 w-11 md:h-12 md:w-12
//                   items-center justify-center rounded-2xl
//                   border border-white/15
//                   bg-[radial-gradient(circle_at_top,_#3A7BFF3b,_#050816)]
//                   overflow-hidden
//                   shadow-[0_0_40px_rgba(58,123,255,0.55)]
//                   transform-gpu
//                 "
//                 whileHover={{ scale: 1.05 }}
//                 transition={{ duration: 0.25, ease: "easeOut" }}
//               >
//                 <Package className="relative z-10 h-6 w-6 text-[#EAF2FF]" />
//                 <motion.span
//                   className="absolute inset-0 bg-gradient-to-br from-transparent via-[#3A7BFF66] to-[#4CC2FF66]"
//                   initial={{ opacity: 0.35 }}
//                   whileHover={{ opacity: 0.75 }}
//                   transition={{ duration: 0.25 }}
//                 />
//               </motion.span>

//               <h2
//                 className="
//                   text-3xl md:text-4xl lg:text-5xl xl:text-6xl
//                   font-semibold leading-tight md:leading-[1.15]
//                   text-slate-50 mb-3
//                 "
//               >
//                 {deliverables.title}
//               </h2>
//             </div>

//             <p
//               className="
//                 mt-4 text-white/75
//                 leading-relaxed md:leading-[1.7]
//                 max-w-[52ch] md:max-w-[60ch] lg:max-w-[66ch]
//                 text-[clamp(0.98rem,0.55vw+0.88rem,1.15rem)]
//                 mx-auto
//               "
//             >
//               {deliverables.subtitle}
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 gap-6 md:gap-8">
//             {deliverables.items.map((category: Categoty, index: number) => (
//               <DeliverableCard key={index} category={category} index={index} />
//             ))}
//           </div>
//         </div>
//       </PageContainer>

//       {/* floating accent (kept, but GPU-friendly) */}
//       <motion.div
//         className="
//           pointer-events-none absolute top-16 right-6 md:right-12 lg:right-20
//           h-16 w-16 rounded-3xl border border-[#3A7BFF33]
//           bg-[radial-gradient(circle_at_top,_rgba(58,123,255,0.22),_transparent_70%)]
//           opacity-55 transform-gpu will-change-transform
//         "
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

type DeliverableCategory = {
  category: string;
  items: string[];
  icon: string;
};

type Deliverables = {
  title: string;
  subtitle: string;
  items: DeliverableCategory[];
};

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function DeliverablesSection({
  deliverables,
}: {
  deliverables: Deliverables;
}) {
  return (
    <section
      aria-labelledby="process-deliverables-heading"
      aria-describedby="process-deliverables-subtitle"
      className="
        relative pt-10 pb-10
        md:pt-14 md:pb-14
        lg:pt-16 lg:pb-16
        overflow-visible text-[#F5EFE7]
      "
    >
      {/* LOCAL FX (optimized: no mask-image, no backgroundPosition animation) */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        style={{ contain: "paint" }}
        aria-hidden="true"
      >
        {/* soft spot (cheaper) */}
        <div
          className="absolute inset-0 opacity-55 transform-gpu will-change-transform"
          style={{ transform: "translateZ(0)" }}
        >
          <div
            className="
              absolute -bottom-48 -right-32
              h-[520px] w-[520px]
              blur-2xl
            "
            style={{
              background:
                "radial-gradient(circle at center, rgba(76,194,255,0.20), transparent 70%)",
            }}
          />
        </div>

        {/* subtle grid (animated by transform, NOT by backgroundPosition) */}
        <div className="absolute inset-0 opacity-[0.04] overflow-hidden transform-gpu">
          <motion.div
            className="absolute -inset-[40%] will-change-transform"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, rgba(200,220,255,0.55) 0px, rgba(200,220,255,0.55) 1px, transparent 1px, transparent 64px), repeating-linear-gradient(90deg, rgba(200,220,255,0.55) 0px, rgba(200,220,255,0.55) 1px, transparent 1px, transparent 64px)",
              transform: "translateZ(0)",
            }}
            animate={{ x: [0, 64], y: [0, 64] }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            aria-hidden="true"
          />
        </div>

        {/* fade top/bottom like old mask-image, but cheaper */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(5,6,8,0.00) 0%, rgba(5,6,8,0.10) 12%, rgba(5,6,8,0.10) 88%, rgba(5,6,8,0.00) 100%)",
          }}
        />
      </div>

      <PageContainer className="max-w-[1200px]">
        <div className="relative z-10">
          <motion.header
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-20"
          >
            <div className="flex items-center justify-center gap-3 md:gap-4 mb-4 md:mb-6">
              <motion.span
                className="
                  relative inline-flex h-11 w-11 md:h-12 md:w-12
                  items-center justify-center rounded-2xl
                  border border-white/15
                  bg-[radial-gradient(circle_at_top,_#3A7BFF3b,_#050816)]
                  overflow-hidden
                  shadow-[0_0_40px_rgba(58,123,255,0.55)]
                  transform-gpu
                "
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                aria-hidden="true"
              >
                <Package
                  className="relative z-10 h-6 w-6 text-[#EAF2FF]"
                  aria-hidden="true"
                />
                <motion.span
                  className="absolute inset-0 bg-gradient-to-br from-transparent via-[#3A7BFF66] to-[#4CC2FF66]"
                  initial={{ opacity: 0.35 }}
                  whileHover={{ opacity: 0.75 }}
                  transition={{ duration: 0.25 }}
                  aria-hidden="true"
                />
              </motion.span>

              <h2
                id="process-deliverables-heading"
                className="
                  text-3xl md:text-4xl lg:text-5xl xl:text-6xl
                  font-semibold leading-tight md:leading-[1.15]
                  text-slate-50 mb-3
                "
              >
                {deliverables.title}
              </h2>
            </div>

            <p
              id="process-deliverables-subtitle"
              className="
                mt-4 text-white/75
                leading-relaxed md:leading-[1.7]
                max-w-[52ch] md:max-w-[60ch] lg:max-w-[66ch]
                text-[clamp(0.98rem,0.55vw+0.88rem,1.15rem)]
                mx-auto
              "
            >
              {deliverables.subtitle}
            </p>
          </motion.header>

          {/* ✅ Семантический список карточек */}
          <ul
            className="grid md:grid-cols-2 gap-6 md:gap-8"
            aria-label={deliverables.title}
          >
            {deliverables.items.map((category, index) => (
              <li key={`${category.category}-${index}`} className="list-none">
                <DeliverableCard category={category} index={index} />
              </li>
            ))}
          </ul>
        </div>
      </PageContainer>

      {/* floating accent (kept, but GPU-friendly) */}
      <motion.div
        className="
          pointer-events-none absolute top-16 right-6 md:right-12 lg:right-20
          h-16 w-16 rounded-3xl border border-[#3A7BFF33]
          bg-[radial-gradient(circle_at_top,_rgba(58,123,255,0.22),_transparent_70%)]
          opacity-55 transform-gpu will-change-transform
        "
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