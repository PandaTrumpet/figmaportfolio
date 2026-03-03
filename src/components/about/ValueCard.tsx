// "use client";

// import { useRef, useState } from "react";
// import { motion, useInView, useReducedMotion } from "motion/react";

// type ValueItem = {
//   icon: string;
//   title: string;
//   description: string;
// };

// const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

// export function ValueCard({
//   value,
//   index,
// }: {
//   value: ValueItem;
//   index: number;
// }) {
//   const ref = useRef<HTMLDivElement | null>(null);
//   const reduce = useReducedMotion();
//   const isInView = useInView(ref, { once: true, margin: "-120px" });
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <motion.div
//       ref={ref}
//       className="relative"
//       onHoverStart={() => setIsHovered(true)}
//       onHoverEnd={() => setIsHovered(false)}
//       initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
//       animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
//       transition={{
//         duration: 0.6,
//         delay: index * 0.12,
//         ease: EASE,
//       }}
//     >
//       {/* deep glow under card */}
//       <motion.div
//         className="absolute -inset-[12px] rounded-[34px] bg-[radial-gradient(circle_at_top,_rgba(58,123,255,0.55),_transparent_70%)] blur-2xl -z-20"
//         animate={{
//           opacity: isHovered ? 1 : 0.32,
//           scale: isHovered ? 1.06 : 1,
//         }}
//         transition={{ duration: 0.32, ease: "easeOut" }}
//         aria-hidden="true"
//       />

//       {/* hover aura */}
//       <motion.div
//         className="absolute inset-0 rounded-[40px] bg-[radial-gradient(circle_at_center,_rgba(76,194,255,0.5),_transparent_65%)] blur-3xl -z-10 pointer-events-none"
//         animate={{
//           opacity: isHovered ? 0.75 : 0,
//           scale: isHovered ? 1.05 : 0.96,
//         }}
//         transition={{ duration: 0.32, ease: "easeOut" }}
//         aria-hidden="true"
//       />

//       {/* card */}
//       <motion.div
//         className="
//           relative h-full rounded-3xl
//           border border-white/10
//           bg-gradient-to-b from-[#060A13] via-[#050816] to-[#02030A]
//           p-7 md:p-8
//           shadow-[0_26px_80px_rgba(0,0,0,0.85)]
//           backdrop-blur-xl overflow-hidden
//         "
//         whileHover={reduce ? undefined : { y: -12 }}
//         transition={{ duration: 0.28, ease: "easeOut" }}
//       >
//         {/* inner glow */}
//         <motion.div
//           className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-[#3A7BFF22] via-transparent to-[#4CC2FF22] -z-10"
//           animate={{ opacity: isHovered ? 0.9 : 0.35 }}
//           transition={{ duration: 0.28 }}
//           aria-hidden="true"
//         />

//         {/* sheen */}
//         <motion.div
//           className="pointer-events-none absolute -inset-10 bg-[linear-gradient(115deg,_transparent_0%,_rgba(255,255,255,0.20)_30%,_transparent_60%)] mix-blend-screen -z-10"
//           initial={{ x: "-140%" }}
//           whileHover={reduce ? undefined : { x: "140%" }}
//           transition={{ duration: 0.9, ease: "easeInOut" }}
//           aria-hidden="true"
//         />

//         {/* neon outline frame */}
//         <motion.div
//           className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent z-10"
//           animate={{
//             boxShadow: isHovered
//               ? "0 0 0 1px rgba(76,194,255,0.7), 0 0 42px rgba(76,194,255,1)"
//               : "0 0 0 1px rgba(255,255,255,0.06)",
//           }}
//           transition={{ duration: 0.22 }}
//           style={{
//             background: "linear-gradient(135deg, #3A7BFF, #4CC2FF, #9B5DFF)",
//             WebkitMask:
//               "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
//             WebkitMaskComposite: "xor",
//             maskComposite: "exclude",
//             padding: "1px",
//           }}
//           aria-hidden="true"
//         />

//         {/* Icon */}
//         <motion.div
//           className="relative z-20 mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-[radial-gradient(circle_at_top,_#3A7BFF3b,_#050816)] overflow-hidden shadow-[0_0_40px_rgba(58,123,255,0.65)]"
//           animate={
//             isHovered
//               ? { scale: 1.06, boxShadow: "0 0 55px rgba(58,123,255,1)" }
//               : { scale: 1, boxShadow: "0 0 40px rgba(58,123,255,0.65)" }
//           }
//           transition={{ duration: 0.22, ease: "easeOut" }}
//           aria-hidden="true"
//         >
//           <span className="text-3xl md:text-4xl leading-none select-none">
//             {value.icon}
//           </span>
//           <motion.div
//             className="absolute inset-0 bg-gradient-to-br from-transparent via-[#3A7BFF66] to-[#4CC2FF66] -z-10"
//             animate={{ opacity: isHovered ? 0.8 : 0.4 }}
//             transition={{ duration: 0.22 }}
//             aria-hidden="true"
//           />
//         </motion.div>

//         <div className="relative z-30 transform-none will-change-auto">
//           <h3
//             className="
//       text-[20px] md:text-[24px] lg:text-[28px]
//       leading-[1.12] md:leading-[1.1]
//       font-semibold tracking-[-0.012em]
//       mb-2.5 md:mb-3
//       text-[#F2F4FA]
//     "
//           >
//             {value.title}
//           </h3>

//           <p
//             className="
//       text-[15px] md:text-[16px] lg:text-[17px]
//       leading-[1.55] md:leading-[1.6]
//       text-[#D5DBE6]
//       max-w-[56ch]
//     "
//           >
//             {value.description}
//           </p>
//         </div>

//         <motion.div
//           className="pointer-events-none absolute bottom-4 right-4 h-8 w-8 opacity-40 z-20"
//           animate={{
//             scale: isHovered ? 1.18 : 1,
//             opacity: isHovered ? 0.8 : 0.4,
//           }}
//           transition={{ duration: 0.22 }}
//           aria-hidden="true"
//         >
//           <div className="h-full w-full rounded-br-3xl border-b border-r border-[#4CC2FF77]" />
//         </motion.div>
//       </motion.div>
//     </motion.div>
//   );
// }
"use client";

import { useRef, useState, useId } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

type ValueItem = {
  icon: string;
  title: string;
  description: string;
};

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function ValueCard({
  value,
  index,
}: {
  value: ValueItem;
  index: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const reduce = useReducedMotion();
  const isInView = useInView(ref, { once: true, margin: "-120px" });
  const [isActive, setIsActive] = useState(false);

  // WCAG: связываем "group" с заголовком и текстом
  const titleId = useId();
  const descId = useId();

  return (
    <motion.div
      ref={ref}
      className="relative"
      initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
        ease: EASE,
      }}
    >
      {/* deep glow under card (decorative) */}
      <motion.div
        className="absolute -inset-[12px] rounded-[34px] bg-[radial-gradient(circle_at_top,_rgba(58,123,255,0.55),_transparent_70%)] blur-2xl -z-20"
        animate={{
          opacity: isActive ? 1 : 0.32,
          scale: isActive ? 1.06 : 1,
        }}
        transition={{ duration: 0.32, ease: "easeOut" }}
        aria-hidden="true"
      />

      {/* hover/focus aura (decorative) */}
      <motion.div
        className="absolute inset-0 rounded-[40px] bg-[radial-gradient(circle_at_center,_rgba(76,194,255,0.5),_transparent_65%)] blur-3xl -z-10 pointer-events-none"
        animate={{
          opacity: isActive ? 0.75 : 0,
          scale: isActive ? 1.05 : 0.96,
        }}
        transition={{ duration: 0.32, ease: "easeOut" }}
        aria-hidden="true"
      />

      {/* card */}
      <motion.div
        // WCAG: делаем карточку доступной с клавиатуры
        tabIndex={0}
        role="group"
        aria-labelledby={titleId}
        aria-describedby={descId}
        onMouseEnter={() => setIsActive(true)}
        onMouseLeave={() => setIsActive(false)}
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
        className="
          relative h-full rounded-3xl
          border border-white/10
          bg-gradient-to-b from-[#060A13] via-[#050816] to-[#02030A]
          p-7 md:p-8
          shadow-[0_26px_80px_rgba(0,0,0,0.85)]
          backdrop-blur-xl overflow-hidden
          outline-none
          focus-visible:ring-2 focus-visible:ring-[#4CC2FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#020410]
        "
        whileHover={reduce ? undefined : { y: -12 }}
        transition={{ duration: 0.28, ease: "easeOut" }}
      >
        {/* inner glow */}
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-[#3A7BFF22] via-transparent to-[#4CC2FF22] -z-10"
          animate={{ opacity: isActive ? 0.9 : 0.35 }}
          transition={{ duration: 0.28 }}
          aria-hidden="true"
        />

        {/* sheen (reduced motion safe) */}
        <motion.div
          className="pointer-events-none absolute -inset-10 bg-[linear-gradient(115deg,_transparent_0%,_rgba(255,255,255,0.20)_30%,_transparent_60%)] mix-blend-screen -z-10"
          initial={{ x: "-140%" }}
          whileHover={reduce ? undefined : { x: "140%" }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          aria-hidden="true"
        />

        {/* neon outline frame */}
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent z-10"
          animate={{
            boxShadow: isActive
              ? "0 0 0 1px rgba(76,194,255,0.7), 0 0 42px rgba(76,194,255,1)"
              : "0 0 0 1px rgba(255,255,255,0.06)",
          }}
          transition={{ duration: 0.22 }}
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

        {/* Icon (decorative) */}
        <motion.div
          className="relative z-20 mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-[radial-gradient(circle_at_top,_#3A7BFF3b,_#050816)] overflow-hidden shadow-[0_0_40px_rgba(58,123,255,0.65)]"
          animate={
            isActive
              ? { scale: 1.06, boxShadow: "0 0 55px rgba(58,123,255,1)" }
              : { scale: 1, boxShadow: "0 0 40px rgba(58,123,255,0.65)" }
          }
          transition={{ duration: 0.22, ease: "easeOut" }}
          aria-hidden="true"
        >
          <span
            className="text-3xl md:text-4xl leading-none select-none"
            aria-hidden="true"
          >
            {value.icon}
          </span>
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-transparent via-[#3A7BFF66] to-[#4CC2FF66] -z-10"
            animate={{ opacity: isActive ? 0.8 : 0.4 }}
            transition={{ duration: 0.22 }}
            aria-hidden="true"
          />
        </motion.div>

        <div className="relative z-30 transform-none will-change-auto">
          <h3
            id={titleId}
            className="
              text-[20px] md:text-[24px] lg:text-[28px]
              leading-[1.12] md:leading-[1.1]
              font-semibold tracking-[-0.012em]
              mb-2.5 md:mb-3
              text-[#F2F4FA]
            "
          >
            {value.title}
          </h3>

          <p
            id={descId}
            className="
              text-[15px] md:text-[16px] lg:text-[17px]
              leading-[1.55] md:leading-[1.6]
              text-[#D5DBE6]
              max-w-[56ch]
            "
          >
            {value.description}
          </p>
        </div>

        <motion.div
          className="pointer-events-none absolute bottom-4 right-4 h-8 w-8 opacity-40 z-20"
          animate={{
            scale: isActive ? 1.18 : 1,
            opacity: isActive ? 0.8 : 0.4,
          }}
          transition={{ duration: 0.22 }}
          aria-hidden="true"
        >
          <div className="h-full w-full rounded-br-3xl border-b border-r border-[#4CC2FF77]" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}