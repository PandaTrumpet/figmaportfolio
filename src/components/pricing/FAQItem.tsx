// "use client";

// import { useId, useState } from "react";
// import { motion } from "motion/react";
// import { ChevronDown } from "lucide-react";
// import { pricingData } from "@/src/data/pricingData";

// export function FAQItem({
//   item,
//   index,
// }: {
//   item: (typeof pricingData.faq.items)[0];
//   index: number;
// }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const contentId = useId();

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, delay: index * 0.05 }}
//       viewport={{ once: true }}
//       className="border-2 border-[#050608] bg-white overflow-hidden"
//     >
//       <button
//         type="button"
//         onClick={() => setIsOpen((v) => !v)}
//         aria-expanded={isOpen}
//         aria-controls={contentId}
//         className="w-full p-6 md:p-8 flex items-center justify-between gap-4 text-left hover:bg-[#F5EFE7] transition-colors"
//       >
//         <span className="text-lg md:text-xl lg:text-2xl pr-4">
//           {item.question}
//         </span>
//         <motion.div
//           animate={{ rotate: isOpen ? 180 : 0 }}
//           transition={{ duration: 0.3 }}
//           className="shrink-0"
//         >
//           <ChevronDown className="w-6 h-6" />
//         </motion.div>
//       </button>

//       <motion.div
//         id={contentId}
//         initial={false}
//         animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
//         transition={{ duration: 0.3 }}
//         className="overflow-hidden"
//       >
//         <div className="p-6 md:p-8 pt-0 border-t-2 border-[#050608] border-opacity-10">
//           <p className="text-base md:text-lg opacity-70 leading-relaxed">
//             {item.answer}
//           </p>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// }


"use client";

import { useId, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { pricingData } from "@/src/data/pricingData";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function FAQItem({
  item,
  index,
}: {
  item: (typeof pricingData.faq.items)[0];
  index: number;
}) {
  const reduce = useReducedMotion();
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const contentId = useId();

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: index * 0.05, ease: EASE }}
      viewport={{ once: true, margin: "-80px" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative"
    >
      {/* glow under card */}
      <motion.div
        className="absolute -inset-[10px] rounded-[28px] bg-[radial-gradient(circle_at_top,_rgba(58,123,255,0.55),_transparent_70%)] blur-2xl -z-20"
        animate={{
          opacity: isHovered || isOpen ? 0.9 : 0.25,
          scale: isHovered || isOpen ? 1.06 : 1,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />

      <motion.div
        className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-[#060A13] via-[#050816] to-[#02030A] shadow-[0_18px_70px_rgba(0,0,0,0.8)] backdrop-blur-xl overflow-hidden"
        whileHover={reduce ? undefined : { y: -6 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        {/* inner gradient */}
        <motion.div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#3A7BFF33] via-[#4CC2FF22] to-transparent"
          animate={{ opacity: isHovered || isOpen ? 0.85 : 0.35 }}
          transition={{ duration: 0.25 }}
        />

        {/* outline glow */}
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent z-10"
          animate={{
            boxShadow:
              isHovered || isOpen
                ? "0 0 0 1px rgba(76,194,255,0.65), 0 0 38px rgba(76,194,255,0.85)"
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

        <button
          type="button"
          onClick={() => setIsOpen((v) => !v)}
          aria-expanded={isOpen}
          aria-controls={contentId}
          className="relative z-20 w-full px-6 md:px-7 py-5 md:py-6 flex items-center justify-between gap-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4CC2FF] focus-visible:ring-offset-0"
        >
          <span className="text-base md:text-lg lg:text-xl font-semibold text-[#F2F4FA] pr-4 leading-snug">
            {item.question}
          </span>

          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.25 }}
            className="shrink-0"
          >
            <ChevronDown className="w-6 h-6 text-[#E8F2FF]" />
          </motion.div>
        </button>

        <motion.div
          id={contentId}
          initial={false}
          animate={{
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.28, ease: EASE }}
          className="relative z-20 overflow-hidden"
        >
          <div className="px-6 md:px-7 pb-6 md:pb-7">
            <div className="h-px w-full bg-white/10 mb-4" />
            <p className="text-sm md:text-base text-[#D5DBE6] opacity-90 leading-relaxed">
              {item.answer}
            </p>
          </div>
        </motion.div>

        {/* shine */}
        <motion.div
          className="pointer-events-none absolute -inset-10 bg-[linear-gradient(115deg,_transparent_0%,_rgba(255,255,255,0.22)_30%,_transparent_60%)] mix-blend-screen"
          initial={{ x: "-140%" }}
          whileHover={reduce ? undefined : { x: "140%" }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
        />
      </motion.div>
    </motion.div>
  );
}
