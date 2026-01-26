"use client";

import { motion } from "motion/react";

export function FloatingShapes() {
  return (
    <>
      <motion.div
        className="absolute top-20 left-20 w-60 h-60 border-2 border-[#F5EFE7] opacity-5"
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-80 h-80 border-2 border-[#F5EFE7] opacity-5"
        animate={{ rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />
    </>
  );
}
