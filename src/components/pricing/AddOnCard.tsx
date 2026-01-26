

// "use client";

// import { motion } from "motion/react";
// import { Check, Plus } from "lucide-react";
// import { pricingData } from "@/src/data/pricingData";
// import { IconBadge } from "./IconBadge";

// export function AddOnCard({
//   addon,
//   index,
// }: {
//   addon: (typeof pricingData.addons.items)[0];
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
//         className="border-2 border-[#050608] p-8 md:p-10 bg-[#F5EFE7] h-full hover:bg-white transition-colors flex flex-col"
//         whileHover={{
//           boxShadow: "16px 16px 0px 0px rgba(5,6,8,1)",
//           x: -5,
//           y: -5,
//         }}
//       >
//         <div className="flex items-start justify-between mb-6">
//           <motion.div
//             className="text-5xl"
//             animate={{ rotate: [0, 15, -15, 0] }}
//             transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
//           >
//             <IconBadge icon={addon.icon} />
//           </motion.div>

//           <div className="text-right">
//             <p className="text-2xl md:text-3xl">{addon.price}</p>
//           </div>
//         </div>

//         <h3 className="text-2xl md:text-3xl mb-4">{addon.name}</h3>
//         <p className="text-base md:text-lg opacity-70 leading-relaxed mb-6">
//           {addon.description}
//         </p>

//         <div className="space-y-2 mt-auto">
//           {addon.features.map((feature, i) => (
//             <div key={i} className="flex items-start gap-2">
//               <Check className="w-4 h-4 shrink-0 mt-1 opacity-50" />
//               <span className="text-sm opacity-70">{feature}</span>
//             </div>
//           ))}
//         </div>

//         <motion.button
//           type="button"
//           className="w-full px-6 py-3 border-2 border-[#050608] mt-6 text-center hover:bg-[#050608] hover:text-[#F5EFE7] transition-all flex items-center justify-center gap-2"
//           whileHover={{ scale: 1.02 }}
//           whileTap={{ scale: 0.98 }}
//         >
//           <Plus className="w-5 h-5" />
//           <span>Добавить</span>
//         </motion.button>
//       </motion.div>
//     </motion.div>
//   );
// }
"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Check, Plus } from "lucide-react";
import { pricingData } from "@/src/data/pricingData";
import { IconBadge } from "./IconBadge";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function AddOnCard({
  addon,
  index,
}: {
  addon: (typeof pricingData.addons.items)[0];
  index: number;
}) {
  const reduce = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: EASE }}
      viewport={{ once: true, margin: "-80px" }}
    >
      {/* base deep glow */}
      <motion.div
        className="absolute -inset-[12px] rounded-[34px] bg-[radial-gradient(circle_at_top,_rgba(58,123,255,0.55),_transparent_70%)] blur-2xl -z-20"
        animate={{
          opacity: isHovered ? 1 : 0.35,
          scale: isHovered ? 1.08 : 1,
        }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      />

      {/* extra aura */}
      <motion.div
        className="absolute inset-0 rounded-[40px] bg-[radial-gradient(circle_at_center,_rgba(76,194,255,0.5),_transparent_65%)] blur-3xl -z-10 pointer-events-none"
        animate={{
          opacity: isHovered ? 0.85 : 0,
          scale: isHovered ? 1.05 : 0.95,
        }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      />

      {/* card */}
      <motion.div
        className="relative h-full rounded-3xl border border-white/10 bg-gradient-to-b from-[#060A13] via-[#050816] to-[#02030A] p-7 md:p-8 shadow-[0_26px_80px_rgba(0,0,0,0.85)] backdrop-blur-xl overflow-hidden flex flex-col"
        whileHover={
          reduce
            ? undefined
            : { y: -14, boxShadow: "0 32px 120px rgba(0,0,0,1)" }
        }
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* inner gradient */}
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-[#3A7BFF33] via-[#4CC2FF22] to-transparent -z-10"
          animate={{ opacity: isHovered ? 0.9 : 0.35 }}
          transition={{ duration: 0.3 }}
        />

        {/* shine */}
        <motion.div
          className="pointer-events-none absolute -inset-10 bg-[linear-gradient(115deg,_transparent_0%,_rgba(255,255,255,0.22)_30%,_transparent_60%)] mix-blend-screen -z-10"
          initial={{ x: "-140%" }}
          whileHover={reduce ? undefined : { x: "140%" }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
        />

        {/* outline glow */}
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent z-10"
          animate={{
            boxShadow: isHovered
              ? "0 0 0 1px rgba(76,194,255,0.7), 0 0 42px rgba(76,194,255,1)"
              : "0 0 0 1px rgba(255,255,255,0.06)",
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

        {/* top row: icon + price */}
        <div className="flex items-start justify-between gap-4 mb-5">
          <motion.div
            className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-[radial-gradient(circle_at_top,_#3A7BFF3b,_#050816)] overflow-hidden shadow-[0_0_40px_rgba(58,123,255,0.6)]"
            animate={
              isHovered
                ? { scale: 1.06, boxShadow: "0 0 55px rgba(58,123,255,0.95)" }
                : { scale: 1, boxShadow: "0 0 40px rgba(58,123,255,0.6)" }
            }
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <span className="text-3xl">
              <IconBadge icon={addon.icon} />
            </span>
          </motion.div>

          <div className="text-right">
            <p className="text-xl md:text-2xl font-semibold text-[#F2F4FA]">
              {addon.price}
            </p>
            <p className="text-xs md:text-sm text-[#C7CEDF] opacity-80">
              дополнительно
            </p>
          </div>
        </div>

        {/* content */}
        <div className="relative z-20 transform-none">
          <h3 className="text-xl md:text-2xl font-semibold text-[#F2F4FA] mb-2">
            {addon.name}
          </h3>
          <p className="text-sm md:text-base leading-relaxed text-[#E8ECF4] opacity-90 mb-5">
            {addon.description}
          </p>

          <ul className="space-y-2.5">
            {addon.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <Check className="w-4 h-4 shrink-0 mt-0.5 text-[#4CC2FF] opacity-90" />
                <span className="text-sm text-[#D5DBE6]">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* button */}
        <motion.a
          href="#contact"
          className="mt-6 relative inline-flex w-full items-center justify-center overflow-hidden rounded-full px-7 py-3 text-sm md:text-base font-medium text-[#050816] shadow-[0_0_40px_rgba(76,194,255,0.55)]"
          whileHover={reduce ? undefined : { scale: 1.02 }}
          whileTap={reduce ? undefined : { scale: 0.98 }}
        >
          <span className="absolute inset-0 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]" />
          <motion.span
            className="absolute inset-0 bg-[linear-gradient(120deg,_transparent_0%,_white_20%,_transparent_40%)] opacity-0"
            initial={{ x: "-100%" }}
            whileHover={reduce ? undefined : { x: "100%", opacity: 0.5 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          />
          <span className="relative z-10 flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Добавить к пакету
          </span>
        </motion.a>

        {/* corner deco */}
        <motion.div
          className="pointer-events-none absolute bottom-4 right-4 h-8 w-8 opacity-40 z-20"
          animate={{
            scale: isHovered ? 1.2 : 1,
            opacity: isHovered ? 0.8 : 0.4,
          }}
          transition={{ duration: 0.25 }}
        >
          <div className="h-full w-full rounded-br-3xl border-b border-r border-[#4CC2FF77]" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
