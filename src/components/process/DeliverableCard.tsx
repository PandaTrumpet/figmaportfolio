

// "use client";

// import { motion } from "motion/react";
// import { Check } from "lucide-react";

// const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

// export function DeliverableCard({
//   category,
//   index,
// }: {
//   category: any;
//   index: number;
// }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 22 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.7, delay: index * 0.08, ease: EASE }}
//       viewport={{ once: true }}
//       className="group"
//     >
//       <motion.div
//         className="relative h-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden"
//         whileHover={{ y: -8 }}
//         transition={{ duration: 0.25, ease: "easeOut" }}
//       >
//         {/* glow layer */}
//         <div className="pointer-events-none absolute -inset-24 bg-[radial-gradient(circle_at_top,_rgba(76,194,255,0.18),_transparent_55%)] opacity-70" />

//         {/* subtle border highlight */}
//         <div
//           className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//           style={{
//             boxShadow:
//               "0 0 0 1px rgba(76,194,255,0.35), 0 0 42px rgba(76,194,255,0.22)",
//           }}
//         />

//         <div className="relative p-6 md:p-7">
//           {/* header */}
//           <div className="flex items-start gap-4 mb-5">
//             <motion.div
//               className="shrink-0 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/6 backdrop-blur-xl text-2xl"
//               animate={{ rotate: [0, 6, -6, 0] }}
//               transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
//               aria-hidden="true"
//             >
//               {category.icon}
//             </motion.div>

//             <div className="min-w-0">
//               <h3 className="text-lg md:text-xl font-semibold tracking-tight text-[#F5EFE7]">
//                 {category.category}
//               </h3>
//               <p className="mt-1 text-sm text-[#C7CEDF]">
//                 Всё, что нужно для запуска и работы без “потерь”.
//               </p>
//             </div>
//           </div>

//           {/* list */}
//           <div className="space-y-3">
//             {category.items.map((item: string, i: number) => (
//               <div key={i} className="flex items-start gap-3">
//                 <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/10 bg-white/6">
//                   <Check className="h-3.5 w-3.5 text-[#CFE3FF]" />
//                 </span>
//                 <p className="text-sm md:text-[15px] leading-relaxed text-[#D5DBE6]/85">
//                   {item}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* bottom accent */}
//         <div className="h-[2px] w-full bg-gradient-to-r from-[#3A7BFF55] via-[#4CC2FF55] to-[#9B5DFF55]" />
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
      className="relative"
    >
      {/* deep glow under card */}
      <motion.div
        className="absolute -inset-[12px] rounded-[34px] bg-[radial-gradient(circle_at_top,_rgba(58,123,255,0.55),_transparent_70%)] blur-2xl -z-20"
        initial={{ opacity: 0.3, scale: 1 }}
        whileHover={{ opacity: 0.95, scale: 1.08 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      />

      {/* hover aura */}
      <motion.div
        className="absolute inset-0 rounded-[40px] bg-[radial-gradient(circle_at_center,_rgba(76,194,255,0.45),_transparent_65%)] blur-3xl -z-10 pointer-events-none"
        initial={{ opacity: 0, scale: 0.95 }}
        whileHover={{ opacity: 0.8, scale: 1.05 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      />

      <motion.div
        className="relative h-full rounded-3xl border border-white/10
                   bg-gradient-to-b from-[#060A13] via-[#050816] to-[#02030A]
                   shadow-[0_26px_80px_rgba(0,0,0,0.85)] backdrop-blur-xl overflow-hidden"
        whileHover={{ y: -10, boxShadow: "0 32px 120px rgba(0,0,0,1)" }}
        transition={{ duration: 0.28, ease: "easeOut" }}
      >
        {/* inner glow */}
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_top,_rgba(76,194,255,0.16),_transparent_60%)] -z-10"
          initial={{ opacity: 0.35 }}
          whileHover={{ opacity: 0.9 }}
          transition={{ duration: 0.3 }}
        />

        {/* sheen */}
        <motion.div
          className="pointer-events-none absolute -inset-10 bg-[linear-gradient(115deg,_transparent_0%,_rgba(255,255,255,0.18)_30%,_transparent_60%)] mix-blend-screen -z-10"
          initial={{ x: "-140%" }}
          whileHover={{ x: "140%" }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
        />

        {/* gradient outline */}
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent z-10"
          initial={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.06)" }}
          whileHover={{
            boxShadow:
              "0 0 0 1px rgba(76,194,255,0.7), 0 0 42px rgba(76,194,255,1)",
          }}
          transition={{ duration: 0.25 }}
          style={{
            background: "linear-gradient(135deg, #3A7BFF, #4CC2FF, #9B5DFF)",
            WebkitMask:
              "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            padding: "1px",
          }}
        />

        <div className="relative z-30 p-6 md:p-7">
          {/* header */}
          <div className="flex items-start gap-4 mb-5">
            {/* icon capsule */}
            <motion.div
              className="shrink-0 relative inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15
                         bg-[radial-gradient(circle_at_top,_#3A7BFF3b,_#050816)] overflow-hidden
                         shadow-[0_0_40px_rgba(58,123,255,0.55)]"
              animate={{ rotate: [0, 6, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
              aria-hidden="true"
            >
              <span className="relative z-10 text-2xl">{category.icon}</span>
              <motion.span
                className="absolute inset-0 bg-gradient-to-br from-transparent via-[#3A7BFF66] to-[#4CC2FF66]"
                initial={{ opacity: 0.35 }}
                whileHover={{ opacity: 0.75 }}
                transition={{ duration: 0.25 }}
              />
            </motion.div>

            <div className="min-w-0">
              <h3 className="text-lg md:text-xl font-semibold tracking-tight text-[#F2F4FA]">
                {category.category}
              </h3>
              <p className="mt-1 text-sm text-[#C7CEDF] opacity-80">
                Всё, что нужно для запуска и работы без “потерь”.
              </p>
            </div>
          </div>

          {/* list */}
          <div className="space-y-3">
            {category.items.map((item: string, i: number) => (
              <div key={i} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/10 bg-white/5">
                  <Check className="h-3.5 w-3.5 text-[#CFE3FF]" />
                </span>
                <p className="text-sm md:text-[15px] leading-relaxed text-[#D5DBE6] opacity-85">
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
