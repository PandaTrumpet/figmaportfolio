// "use client";

// import { useId, useState } from "react";
// import { motion, useReducedMotion } from "motion/react";
// import { ChevronDown } from "lucide-react";
// import { pricingData } from "@/src/data/pricingData";

// const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

// export function FAQItem({
//   item,
//   index,
// }: {
//   item: (typeof pricingData.faq.items)[0];
//   index: number;
// }) {
//   const reduce = useReducedMotion();
//   const [isOpen, setIsOpen] = useState(false);
//   const [isHovered, setIsHovered] = useState(false);
//   const contentId = useId();

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 18 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.55, delay: index * 0.05, ease: EASE }}
//       viewport={{ once: true, margin: "-80px" }}
//       onHoverStart={() => setIsHovered(true)}
//       onHoverEnd={() => setIsHovered(false)}
//       className="relative"
//     >
//       {/* glow under card */}
//       <motion.div
//         className="absolute -inset-[10px] rounded-[28px] bg-[radial-gradient(circle_at_top,_rgba(58,123,255,0.55),_transparent_70%)] blur-2xl -z-20"
//         animate={{
//           opacity: isHovered || isOpen ? 0.9 : 0.25,
//           scale: isHovered || isOpen ? 1.06 : 1,
//         }}
//         transition={{ duration: 0.3, ease: "easeOut" }}
//       />

//       <motion.div
//         className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-[#060A13] via-[#050816] to-[#02030A] shadow-[0_18px_70px_rgba(0,0,0,0.8)] backdrop-blur-xl overflow-hidden"
//         whileHover={reduce ? undefined : { y: -6 }}
//         transition={{ duration: 0.25, ease: "easeOut" }}
//       >
//         {/* inner gradient */}
//         <motion.div
//           className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#3A7BFF33] via-[#4CC2FF22] to-transparent"
//           animate={{ opacity: isHovered || isOpen ? 0.85 : 0.35 }}
//           transition={{ duration: 0.25 }}
//         />

//         {/* outline glow */}
//         <motion.div
//           className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent z-10"
//           animate={{
//             boxShadow:
//               isHovered || isOpen
//                 ? "0 0 0 1px rgba(76,194,255,0.65), 0 0 38px rgba(76,194,255,0.85)"
//                 : "0 0 0 1px rgba(255,255,255,0.06)",
//           }}
//           transition={{ duration: 0.25 }}
//           style={{
//             background: "linear-gradient(135deg, #3A7BFF, #4CC2FF, #9B5DFF)",
//             WebkitMask:
//               "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
//             WebkitMaskComposite: "xor",
//             maskComposite: "exclude",
//             padding: "1px",
//           }}
//         />

//         <button
//           type="button"
//           onClick={() => setIsOpen((v) => !v)}
//           aria-expanded={isOpen}
//           aria-controls={contentId}
//           className="relative z-20 w-full px-6 md:px-7 py-5 md:py-6 flex items-center justify-between gap-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4CC2FF] focus-visible:ring-offset-0"
//         >
//           <span className="text-base md:text-lg lg:text-xl font-semibold text-[#F2F4FA] pr-4 leading-snug">
//             {item.question}
//           </span>

//           <motion.div
//             animate={{ rotate: isOpen ? 180 : 0 }}
//             transition={{ duration: 0.25 }}
//             className="shrink-0"
//           >
//             <ChevronDown className="w-6 h-6 text-[#E8F2FF]" />
//           </motion.div>
//         </button>

//         <motion.div
//           id={contentId}
//           initial={false}
//           animate={{
//             height: isOpen ? "auto" : 0,
//             opacity: isOpen ? 1 : 0,
//           }}
//           transition={{ duration: 0.28, ease: EASE }}
//           className="relative z-20 overflow-hidden"
//         >
//           <div className="px-6 md:px-7 pb-6 md:pb-7">
//             <div className="h-px w-full bg-white/10 mb-4" />
//             <p className="text-sm md:text-base text-[#D5DBE6] opacity-90 leading-relaxed">
//               {item.answer}
//             </p>
//           </div>
//         </motion.div>

//         {/* shine */}
//         <motion.div
//           className="pointer-events-none absolute -inset-10 bg-[linear-gradient(115deg,_transparent_0%,_rgba(255,255,255,0.22)_30%,_transparent_60%)] mix-blend-screen"
//           initial={{ x: "-140%" }}
//           whileHover={reduce ? undefined : { x: "140%" }}
//           transition={{ duration: 0.9, ease: "easeInOut" }}
//         />
//       </motion.div>
//     </motion.div>
//   );
// }

"use client";

import { useId, useMemo, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ChevronDown } from "lucide-react";
import type { FAQItem as FAQItemType } from "@/src/data/pricingData";
import { useTranslations } from "next-intl";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function FAQItem({ item, index }: { item: FAQItemType; index: number }) {
  const t = useTranslations("pricingData");
  const reduce = useReducedMotion();

  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(false);

  const uid = useId();
  const buttonId = useMemo(() => `faq-btn-${uid}`, [uid]);
  const panelId = useMemo(() => `faq-panel-${uid}`, [uid]);

  return (
    <motion.div
      initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: index * 0.05, ease: EASE }}
      viewport={{ once: true, margin: "-80px" }}
      onHoverStart={() => setActive(true)}
      onHoverEnd={() => setActive(false)}
      onFocusCapture={() => setActive(true)}
      onBlurCapture={() => setActive(false)}
      className="relative"
    >
      {/* glow under card (decorative) */}
      <motion.div
        className="absolute -inset-[10px] rounded-[28px] bg-[radial-gradient(circle_at_top,_rgba(58,123,255,0.55),_transparent_70%)] blur-2xl -z-20"
        animate={{
          opacity: active || isOpen ? 0.9 : 0.25,
          scale: active || isOpen ? 1.06 : 1,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        aria-hidden="true"
      />

      <motion.div
        className="
        
          relative rounded-3xl border border-white/10
          bg-gradient-to-b from-[#060A13] via-[#050816] to-[#02030A]
          shadow-[0_18px_70px_rgba(0,0,0,0.8)]
          backdrop-blur-xl overflow-hidden
          focus-within:outline-none
          focus-within:ring-2 focus-within:ring-[#4CC2FF]/70
        "
        whileHover={reduce ? undefined : { y: -6 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        {/* inner gradient (decorative) */}
        <motion.div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#3A7BFF33] via-[#4CC2FF22] to-transparent"
          animate={{ opacity: active || isOpen ? 0.85 : 0.35 }}
          transition={{ duration: 0.25 }}
          aria-hidden="true"
        />

        {/* outline glow (decorative) */}
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent z-10"
          animate={{
            boxShadow:
              active || isOpen
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
          aria-hidden="true"
        />

        {/* BUTTON (accordion trigger) */}
        <button
          id={buttonId}
          type="button"
          onClick={() => setIsOpen((v) => !v)}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className="
          cursor-pointer 
            relative z-20 w-full
            px-6 md:px-7 py-5 md:py-6
            flex items-center justify-between gap-4 text-left
            focus:outline-none
            focus-visible:ring-2 focus-visible:ring-[#4CC2FF]/90
            focus-visible:ring-offset-0
          "
        >
          <span className="text-base md:text-lg lg:text-xl font-semibold text-[#F2F4FA] pr-4 leading-snug">
            {item.question}
          </span>

          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.25 }}
            className="shrink-0"
            aria-hidden="true"
          >
            <ChevronDown
              className="w-6 h-6 text-[#E8F2FF]"
              aria-hidden="true"
            />
          </motion.span>
        </button>

        {/* PANEL (accordion content) */}
        <motion.div
          id={panelId}
          role="region"
          aria-labelledby={buttonId}
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

            {/* SR helper (optional, but nice) */}
            <span className="sr-only">
              {isOpen ? t("faqItem.state.open") : t("faqItem.state.closed")}
            </span>
          </div>
        </motion.div>

        {/* shine (decorative) */}
        <motion.div
          className="pointer-events-none absolute -inset-10 bg-[linear-gradient(115deg,_transparent_0%,_rgba(255,255,255,0.22)_30%,_transparent_60%)] mix-blend-screen"
          initial={{ x: "-140%" }}
          whileHover={reduce ? undefined : { x: "140%" }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          aria-hidden="true"
        />
      </motion.div>
    </motion.div>
  );
}