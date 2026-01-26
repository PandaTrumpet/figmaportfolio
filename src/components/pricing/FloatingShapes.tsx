// "use client";

// import { motion, useReducedMotion } from "motion/react";

// export function FloatingShapes() {
//   const reduce = useReducedMotion();

//   return (
//     <>
//       <motion.div
//         className="absolute top-20 left-20 w-60 h-60 border-2 border-[#F5EFE7] opacity-5"
//         animate={reduce ? undefined : { rotate: 360 }}
//         transition={
//           reduce
//             ? undefined
//             : { duration: 50, repeat: Infinity, ease: "linear" }
//         }
//       />
//       <motion.div
//         className="absolute bottom-20 right-20 w-80 h-80 border-2 border-[#F5EFE7] opacity-5"
//         animate={reduce ? undefined : { rotate: -360 }}
//         transition={
//           reduce
//             ? undefined
//             : { duration: 60, repeat: Infinity, ease: "linear" }
//         }
//       />
//     </>
//   );
// }
"use client";

import { motion, useReducedMotion } from "motion/react";

export function FloatingShapes() {
  const reduce = useReducedMotion();

  return (
    <>
      {/* правый верхний “куб” */}
      <motion.div
        className="pointer-events-none absolute top-14 right-6 md:right-14 h-20 w-20 md:h-28 md:w-28 rounded-3xl border border-[#3A7BFF33] bg-[radial-gradient(circle_at_top,_#3A7BFF33,_transparent_70%)] opacity-60"
        animate={reduce ? undefined : { rotate: 360, scale: [1, 1.07, 1] }}
        transition={{
          rotate: reduce
            ? undefined
            : { duration: 26, repeat: Infinity, ease: "linear" },
          scale: reduce
            ? undefined
            : { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      {/* нижняя рамка */}
      <motion.div
        className="pointer-events-none absolute -bottom-16 left-8 md:left-16 h-64 w-64 md:h-80 md:w-80 rounded-[44px] border border-white/10 bg-[radial-gradient(circle_at_center,_rgba(76,194,255,0.14),_transparent_60%)] blur-[0.2px] opacity-70"
        animate={reduce ? undefined : { rotate: -360 }}
        transition={
          reduce
            ? undefined
            : { duration: 50, repeat: Infinity, ease: "linear" }
        }
      />

      {/* диагональный контур */}
      <motion.div
        className="pointer-events-none absolute top-1/2 left-1/2 h-72 w-72 md:h-[420px] md:w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-[56px] border border-white/5 opacity-40"
        animate={reduce ? undefined : { rotate: 360 }}
        transition={
          reduce
            ? undefined
            : { duration: 80, repeat: Infinity, ease: "linear" }
        }
      />
    </>
  );
}
