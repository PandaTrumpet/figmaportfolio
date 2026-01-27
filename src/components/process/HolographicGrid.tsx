// "use client";

// import { motion } from "motion/react";

// export function HolographicGrid() {
//   return (
//     <div className="absolute inset-0 opacity-5 pointer-events-none">
//       <motion.div
//         className="w-full h-full"
//         style={{
//           backgroundImage:
//             "repeating-linear-gradient(0deg, #F5EFE7 0px, #F5EFE7 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, #F5EFE7 0px, #F5EFE7 1px, transparent 1px, transparent 40px)",
//         }}
//         animate={{ backgroundPosition: ["0px 0px", "40px 40px"] }}
//         transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//       />
//     </div>
//   );
// }



import { motion } from "motion/react";

export function HolographicGrid() {
  return (
    <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
      <motion.div
        className="w-full h-full"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(245,239,231,0.55) 0px, rgba(245,239,231,0.55) 1px, transparent 1px, transparent 44px), repeating-linear-gradient(90deg, rgba(245,239,231,0.55) 0px, rgba(245,239,231,0.55) 1px, transparent 1px, transparent 44px)",
        }}
        animate={{ backgroundPosition: ["0px 0px", "44px 44px"] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}