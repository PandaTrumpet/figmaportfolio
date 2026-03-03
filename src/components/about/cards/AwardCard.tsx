// "use client";

// import { useRef, useState } from "react";
// import { motion, useInView, useReducedMotion } from "motion/react";

// type AchievementItem = {
//   icon: string; // эмодзи / строка
//   year: string;
//   award: string;
//   category: string;
// };

// const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

// export function AwardCard({
//   achievement,
//   index,
// }: {
//   achievement: AchievementItem;
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
//       initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
//       animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
//       transition={{ duration: 0.6, delay: index * 0.06, ease: EASE }}
//     >
//       {/* deep glow */}
//       <motion.div
//         className="absolute -inset-[12px] rounded-[34px] bg-[radial-gradient(circle_at_top,_rgba(58,123,255,0.55),_transparent_70%)] blur-2xl -z-20"
//         animate={{
//           opacity: isHovered ? 0.9 : 0.28,
//           scale: isHovered ? 1.06 : 1,
//         }}
//         transition={{ duration: 0.32, ease: "easeOut" }}
//         aria-hidden="true"
//       />

//       {/* aura */}
//       <motion.div
//         className="absolute inset-0 rounded-[40px] bg-[radial-gradient(circle_at_center,_rgba(76,194,255,0.5),_transparent_65%)] blur-3xl -z-10 pointer-events-none"
//         animate={{
//           opacity: isHovered ? 0.7 : 0,
//           scale: isHovered ? 1.05 : 0.96,
//         }}
//         transition={{ duration: 0.32, ease: "easeOut" }}
//         aria-hidden="true"
//       />

//       <motion.div
//         className="
//           relative h-full rounded-3xl
//           border border-white/10
//           bg-gradient-to-b from-[#060A13] via-[#050816] to-[#02030A]
//           p-7 md:p-8
//           shadow-[0_26px_80px_rgba(0,0,0,0.85)]
//           backdrop-blur-xl overflow-hidden
//         "
//         whileHover={reduce ? undefined : { y: -10 }}
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

//         {/* top row */}
//         <div className="flex items-start justify-between gap-6 mb-5 md:mb-6">
//           <motion.div
//             className="text-4xl md:text-5xl leading-none select-none"
//             animate={reduce ? undefined : { rotate: [0, 10, -10, 0] }}
//             transition={
//               reduce
//                 ? undefined
//                 : {
//                     duration: 2,
//                     repeat: Infinity,
//                     repeatDelay: 4,
//                     delay: index * 0.18,
//                   }
//             }
//             aria-hidden="true"
//           >
//             <span>{achievement.icon}</span>
//           </motion.div>

//           <span
//             className="
//               text-[11px] md:text-[12px]
//               leading-[1.2]
//               uppercase tracking-[0.18em]
//               text-white/55
//             "
//           >
//             {achievement.year}
//           </span>
//         </div>

//         <h3
//           className="
//             text-[20px] md:text-[22px] lg:text-[24px]
//             leading-[1.15] md:leading-[1.12]
//             font-semibold tracking-[-0.01em]
//             text-[#F2F4FA]
//             mb-2.5 md:mb-3
//           "
//         >
//           {achievement.award}
//         </h3>

//         <p
//           className="
//             text-[15px] md:text-[16px] lg:text-[17px]
//             leading-[1.55] md:leading-[1.6]
//             text-[#C7CEDF]
//             opacity-85
//             max-w-[56ch]
//           "
//         >
//           {achievement.category}
//         </p>

//         {/* corner detail */}
//         <div
//           className="pointer-events-none absolute bottom-4 right-4 h-8 w-8 opacity-40"
//           aria-hidden="true"
//         >
//           <div className="h-full w-full rounded-br-3xl border-b border-r border-[#4CC2FF77]" />
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// }

"use client";

import { useRef, useState, useId } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

type AchievementItem = {
  icon: string; // эмодзи / строка
  year: string;
  award: string;
  category: string;
};

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function AwardCard({
  achievement,
  index,
}: {
  achievement: AchievementItem;
  index: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const reduce = useReducedMotion();
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  // WCAG: hover должен иметь эквивалент для клавиатуры (focus)
  const [isActive, setIsActive] = useState(false);

  // WCAG: связки для screen reader
  const titleId = useId();
  const descId = useId();

  return (
    <motion.div
      ref={ref}
      className="relative"
      initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 0.6, delay: index * 0.06, ease: EASE }}
    >
      {/* deep glow (decorative) */}
      <motion.div
        className="absolute -inset-[12px] rounded-[34px] bg-[radial-gradient(circle_at_top,_rgba(58,123,255,0.55),_transparent_70%)] blur-2xl -z-20"
        animate={{
          opacity: isActive ? 0.9 : 0.28,
          scale: isActive ? 1.06 : 1,
        }}
        transition={{ duration: 0.32, ease: "easeOut" }}
        aria-hidden="true"
      />

      {/* aura (decorative) */}
      <motion.div
        className="absolute inset-0 rounded-[40px] bg-[radial-gradient(circle_at_center,_rgba(76,194,255,0.5),_transparent_65%)] blur-3xl -z-10 pointer-events-none"
        animate={{
          opacity: isActive ? 0.7 : 0,
          scale: isActive ? 1.05 : 0.96,
        }}
        transition={{ duration: 0.32, ease: "easeOut" }}
        aria-hidden="true"
      />

      <motion.div
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
          focus-visible:ring-2 focus-visible:ring-[#4CC2FF]
          focus-visible:ring-offset-2 focus-visible:ring-offset-[#020410]
        "
        whileHover={reduce ? undefined : { y: -10 }}
        transition={{ duration: 0.28, ease: "easeOut" }}
      >
        {/* inner glow */}
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-[#3A7BFF22] via-transparent to-[#4CC2FF22] -z-10"
          animate={{ opacity: isActive ? 0.9 : 0.35 }}
          transition={{ duration: 0.28 }}
          aria-hidden="true"
        />

        {/* sheen */}
        <motion.div
          className="pointer-events-none absolute -inset-10 bg-[linear-gradient(115deg,_transparent_0%,_rgba(255,255,255,0.20)_30%,_transparent_60%)] mix-blend-screen -z-10"
          initial={{ x: "-140%" }}
          whileHover={reduce ? undefined : { x: "140%" }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          aria-hidden="true"
        />

        {/* top row */}
        <div className="flex items-start justify-between gap-6 mb-5 md:mb-6">
          {/* emoji is decorative (title already describes the card) */}
          <motion.div
            className="text-4xl md:text-5xl leading-none select-none"
            animate={reduce ? undefined : { rotate: [0, 10, -10, 0] }}
            transition={
              reduce
                ? undefined
                : {
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 4,
                    delay: index * 0.18,
                  }
            }
            aria-hidden="true"
          >
            <span aria-hidden="true">{achievement.icon}</span>
          </motion.div>

          <span
            className="
              text-[11px] md:text-[12px]
              leading-[1.2]
              uppercase tracking-[0.18em]
              text-white/55
            "
          >
            {achievement.year}
          </span>
        </div>

        <h3
          id={titleId}
          className="
            text-[20px] md:text-[22px] lg:text-[24px]
            leading-[1.15] md:leading-[1.12]
            font-semibold tracking-[-0.01em]
            text-[#F2F4FA]
            mb-2.5 md:mb-3
          "
        >
          {achievement.award}
        </h3>

        <p
          id={descId}
          className="
            text-[15px] md:text-[16px] lg:text-[17px]
            leading-[1.55] md:leading-[1.6]
            text-[#C7CEDF]
            opacity-85
            max-w-[56ch]
          "
        >
          {achievement.category}
        </p>

        {/* corner detail */}
        <div
          className="pointer-events-none absolute bottom-4 right-4 h-8 w-8 opacity-40"
          aria-hidden="true"
        >
          <div className="h-full w-full rounded-br-3xl border-b border-r border-[#4CC2FF77]" />
        </div>
      </motion.div>
    </motion.div>
  );
}