// "use client";

// import { motion } from "motion/react";

// export function FloatingShapes() {
//   return (
//     <>
//       <motion.div
//         className="absolute top-20 left-20 w-60 h-60 border-2 border-[#F5EFE7] opacity-5"
//         animate={{ rotate: 360 }}
//         transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
//       />
//       <motion.div
//         className="absolute bottom-20 right-20 w-80 h-80 border-2 border-[#F5EFE7] opacity-5"
//         animate={{ rotate: -360 }}
//         transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
//       />
//     </>
//   );
// }

"use client";

import { motion, useReducedMotion } from "motion/react";

export function FloatingShapes() {
  const reduce = useReducedMotion();

  if (reduce) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none absolute top-16 left-6 md:left-16 h-24 w-24 md:h-40 md:w-40 rounded-3xl border border-[#3A7BFF33] bg-[radial-gradient(circle_at_top,_rgba(58,123,255,0.18),_transparent_70%)] opacity-60"
        animate={{ rotate: 360, y: [0, -10, 0] }}
        transition={{
          rotate: { duration: 34, repeat: Infinity, ease: "linear" },
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      <motion.div
        className="pointer-events-none absolute bottom-16 right-6 md:right-16 h-28 w-28 md:h-44 md:w-44 rounded-[32px] border border-[#4CC2FF33] bg-[radial-gradient(circle_at_top,_rgba(76,194,255,0.16),_transparent_70%)] opacity-55"
        animate={{ rotate: -360, y: [0, 12, 0] }}
        transition={{
          rotate: { duration: 42, repeat: Infinity, ease: "linear" },
          y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      <motion.div
        className="pointer-events-none absolute top-1/2 -left-10 h-56 w-56 rounded-full border border-[#9B5DFF22] opacity-30"
        animate={{ scale: [1, 1.06, 1], rotate: 360 }}
        transition={{
          scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 60, repeat: Infinity, ease: "linear" },
        }}
      />
    </>
  );
}
