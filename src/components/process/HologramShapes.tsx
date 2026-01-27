// "use client";

// import { motion } from "motion/react";

// export function HologramShapes() {
//   return (
//     <div className="absolute inset-0 pointer-events-none overflow-hidden">
//       {[...Array(6)].map((_, i) => (
//         <motion.div
//           key={i}
//           className="absolute border-2 border-[#050608] opacity-[0.03]"
//           style={{
//             width: `${100 + i * 40}px`,
//             height: `${100 + i * 40}px`,
//             left: `${10 + i * 15}%`,
//             top: `${20 + i * 10}%`,
//           }}
//           animate={{ rotate: 360, scale: [1, 1.2, 1] }}
//           transition={{
//             duration: 20 + i * 5,
//             repeat: Infinity,
//             ease: "linear",
//           }}
//         />
//       ))}
//     </div>
//   );
// }


"use client";

import { motion, useReducedMotion } from "motion/react";

export function HologramShapes() {
  const reduce = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-3xl"
          style={{
            width: `${220 + i * 120}px`,
            height: `${220 + i * 120}px`,
            left: `${8 + i * 14}%`,
            top: `${12 + i * 12}%`,
            background:
              i % 3 === 0
                ? "radial-gradient(circle at center, rgba(58,123,255,0.35), transparent 70%)"
                : i % 3 === 1
                ? "radial-gradient(circle at center, rgba(76,194,255,0.35), transparent 70%)"
                : "radial-gradient(circle at center, rgba(155,93,255,0.3), transparent 70%)",
            filter: "blur(1px)",
            opacity: 0.55,
          }}
          animate={
            reduce
              ? undefined
              : {
                  rotate: 360,
                  scale: [1, 1.08, 1],
                }
          }
          transition={
            reduce
              ? undefined
              : {
                  rotate: {
                    duration: 40 + i * 12,
                    repeat: Infinity,
                    ease: "linear",
                  },
                  scale: {
                    duration: 6 + i * 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }
          }
        />
      ))}

      {/* subtle floating line */}
      <motion.div
        className="absolute left-1/2 top-[15%] h-[1px] w-[60%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#4CC2FF55] to-transparent"
        animate={reduce ? undefined : { opacity: [0.2, 0.6, 0.2] }}
        transition={
          reduce
            ? undefined
            : { duration: 5, repeat: Infinity, ease: "easeInOut" }
        }
      />
    </div>
  );
}
