

// "use client";

// import { motion, useReducedMotion } from "motion/react";

// export function HologramShapes() {
//   const reduce = useReducedMotion();

//   return (
//     <div className="pointer-events-none absolute inset-0 overflow-hidden">
//       {[...Array(5)].map((_, i) => (
//         <motion.div
//           key={i}
//           className="absolute rounded-3xl"
//           style={{
//             width: `${220 + i * 120}px`,
//             height: `${220 + i * 120}px`,
//             left: `${8 + i * 14}%`,
//             top: `${12 + i * 12}%`,
//             background:
//               i % 3 === 0
//                 ? "radial-gradient(circle at center, rgba(58,123,255,0.35), transparent 70%)"
//                 : i % 3 === 1
//                 ? "radial-gradient(circle at center, rgba(76,194,255,0.35), transparent 70%)"
//                 : "radial-gradient(circle at center, rgba(155,93,255,0.3), transparent 70%)",
//             filter: "blur(1px)",
//             opacity: 0.55,
//           }}
//           animate={
//             reduce
//               ? undefined
//               : {
//                   rotate: 360,
//                   scale: [1, 1.08, 1],
//                 }
//           }
//           transition={
//             reduce
//               ? undefined
//               : {
//                   rotate: {
//                     duration: 40 + i * 12,
//                     repeat: Infinity,
//                     ease: "linear",
//                   },
//                   scale: {
//                     duration: 6 + i * 2,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                   },
//                 }
//           }
//         />
//       ))}

//       {/* subtle floating line */}
//       <motion.div
//         className="absolute left-1/2 top-[15%] h-[1px] w-[60%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#4CC2FF55] to-transparent"
//         animate={reduce ? undefined : { opacity: [0.2, 0.6, 0.2] }}
//         transition={
//           reduce
//             ? undefined
//             : { duration: 5, repeat: Infinity, ease: "easeInOut" }
//         }
//       />
//     </div>
//   );
// }


"use client";

import { motion, useReducedMotion } from "motion/react";

export function HologramShapes() {
  const reduce = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      {/* clip only shapes */}
      <div
        className="
          absolute inset-0 overflow-hidden
          [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]
          [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]
        "
        aria-hidden="true"
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-3xl"
            style={{
              width: `${220 + i * 120}px`,
              height: `${220 + i * 120}px`,
              left: `${8 + i * 14}%`,
              top: `${10 + i * 12}%`,
              background:
                i % 3 === 0
                  ? "radial-gradient(circle at center, rgba(58,123,255,0.45), transparent 70%)"
                  : i % 3 === 1
                    ? "radial-gradient(circle at center, rgba(76,194,255,0.45), transparent 70%)"
                    : "radial-gradient(circle at center, rgba(155,93,255,0.38), transparent 70%)",
              filter: "blur(2px)",
              opacity: 0.75,
              mixBlendMode: "screen",
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
          className="absolute left-1/2 top-[15%] h-[1px] w-[60%] -translate-x-1/2
                     bg-gradient-to-r from-transparent via-[#4CC2FF80] to-transparent"
          animate={reduce ? undefined : { opacity: [0.25, 0.7, 0.25] }}
          transition={
            reduce
              ? undefined
              : { duration: 5, repeat: Infinity, ease: "easeInOut" }
          }
          style={{ mixBlendMode: "screen" }}
        />
      </div>
    </div>
  );
}
