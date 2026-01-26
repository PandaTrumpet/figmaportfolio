"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function TimelineFlow({ phases }: { phases: any[] }) {
  return (
    <div className="relative">
      <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-[#F5EFE7] opacity-20" />

      <div className="grid md:grid-cols-5 gap-8 relative z-10">
        {phases.map((phase, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              className="w-full aspect-square border-2 border-[#F5EFE7] bg-[#050608] p-6 md:p-8 flex flex-col items-center justify-center text-center mb-6 relative overflow-hidden group"
              whileHover={{
                scale: 1.05,
                borderColor: "#F5EFE7",
                boxShadow: "0 0 40px rgba(245,239,231,0.3)",
              }}
            >
              <motion.div
                className="absolute inset-0 bg-linear-to-br from-[#F5EFE7]/10 to-transparent opacity-0 group-hover:opacity-100"
                animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />

              <div className="relative z-10">
                <p className="text-5xl md:text-6xl mb-2 opacity-30">
                  0{index + 1}
                </p>
                <p className="text-lg md:text-xl uppercase tracking-wider">
                  {phase.name}
                </p>
              </div>
            </motion.div>

            <div className="text-center">
              <p className="text-lg md:text-xl mb-2">{phase.weeks}</p>
              <p className="text-base opacity-70">{phase.description}</p>
            </div>

            {index < phases.length - 1 && (
              <motion.div
                className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2"
                animate={{ x: [0, 10, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ArrowRight className="w-6 h-6 opacity-30" />
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
