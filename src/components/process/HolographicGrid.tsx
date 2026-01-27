
// import { motion } from "motion/react";

// export function HolographicGrid() {
//   return (
//     <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
//       <motion.div
//         className="w-full h-full"
//         style={{
//           backgroundImage:
//             "repeating-linear-gradient(0deg, rgba(245,239,231,0.55) 0px, rgba(245,239,231,0.55) 1px, transparent 1px, transparent 44px), repeating-linear-gradient(90deg, rgba(245,239,231,0.55) 0px, rgba(245,239,231,0.55) 1px, transparent 1px, transparent 44px)",
//         }}
//         animate={{ backgroundPosition: ["0px 0px", "44px 44px"] }}
//         transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
//       />
//     </div>
//   );
// }

"use client";

import { motion } from "motion/react";

export function HolographicGrid() {
  return (
    <div className="pointer-events-none absolute inset-0 opacity-[0.055]">
      <motion.div
        className="h-full w-full"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(200,220,255,0.55) 0px, rgba(200,220,255,0.55) 1px, transparent 1px, transparent 44px), repeating-linear-gradient(90deg, rgba(200,220,255,0.55) 0px, rgba(200,220,255,0.55) 1px, transparent 1px, transparent 44px)",
        }}
        animate={{ backgroundPosition: ["0px 0px", "44px 44px"] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}
