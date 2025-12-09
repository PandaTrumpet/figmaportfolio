import { useState } from "react";
import { motion } from "motion/react";
type Particle = {
  left: number;
  top: number;
  duration: number;
  delay: number;
};

export function ParticlesBackground() {
  // Инициализация через useState (без эффектов, без доп. рендеров)
  const [particles] = useState<Particle[]>(() =>
    Array.from({ length: 30 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 3 + Math.random() * 3,
      delay: Math.random() * 3,
    }))
  );

  return (
    <div className="absolute inset-0 opacity-10 pointer-events-none">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#F5EFE7] rounded-full"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
}
