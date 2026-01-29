
"use client";

import { motion } from "motion/react";
import { HologramShapes } from "../process/HologramShapes";

export function PortfolioHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center px-6 md:px-12 lg:px-20 py-32 md:py-40 bg-[#050816] overflow-hidden">
      <div className="max-w-[1600px] mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Accent line */}
          <motion.div
            className="w-20 h-[2px] bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF] mb-10"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />

          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] mb-10 max-w-6xl font-semibold tracking-tight text-[#F2F4FA]">
            Избранные проекты
          </h1>

          <p className="text-xl md:text-2xl text-[#C7CEDF] max-w-3xl leading-relaxed">
            Примеры решений, которые мы создавали для реального бизнеса. Каждый
            проект — результат диалога, задач и практичного подхода.
          </p>
        </motion.div>
      </div>

      {/* Decorative element */}
      <motion.div
        className="pointer-events-none absolute top-20 right-16 w-40 h-40 rounded-3xl border border-[#3A7BFF33] bg-[radial-gradient(circle_at_top,_#3A7BFF22,_transparent_70%)] opacity-40"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      {/* Background glow */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 bg-[radial-gradient(circle_at_center,_#4CC2FF33,_transparent_70%)] blur-3xl opacity-60" />
       <HologramShapes />
    </section>
  );
}
