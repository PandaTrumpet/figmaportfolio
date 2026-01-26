"use client";

import { motion, useReducedMotion } from "motion/react";

export function FloatingPriceTags() {
  const reduce = useReducedMotion();

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-5">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-8xl"
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={
            reduce ? undefined : { y: [0, -30, 0], rotate: [0, 10, -10, 0] }
          }
          transition={
            reduce
              ? undefined
              : {
                  duration: 8 + i * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.5,
                }
          }
        >
          ₪
        </motion.div>
      ))}
    </div>
  );
}
