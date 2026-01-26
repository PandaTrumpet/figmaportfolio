"use client";

import { motion } from "motion/react";

export function PortfolioHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center px-6 md:px-12 lg:px-20 py-32 md:py-40">
      <div className="max-w-[1600px] mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="w-20 h-[3px] bg-[#050608] mb-10"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />

          <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.9] mb-10 max-w-5xl">
            Selected Projects
          </h1>

          <p className="text-2xl md:text-3xl opacity-70 max-w-3xl leading-relaxed">
            Работы, которыми мы гордимся. Каждый проект — это история успеха
            клиента.
          </p>
        </motion.div>
      </div>

      <motion.div
        className="absolute top-20 right-20 w-40 h-40 border-2 border-[#050608] opacity-5"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
    </section>
  );
}
