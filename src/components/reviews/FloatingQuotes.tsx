"use client";

import { motion } from "motion/react";
import { Quote } from "lucide-react";

export function FloatingQuotes() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.02]">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${10 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{ y: [0, -40, 0], rotate: [0, 15, -15, 0] }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        >
          <Quote className="w-24 h-24" />
        </motion.div>
      ))}
    </div>
  );
}
