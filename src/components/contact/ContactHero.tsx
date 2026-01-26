"use client";

import { motion, MotionValue } from "motion/react";
import { FloatingDots } from "./FloatingDots";

type HeroData = { badge: string; title: string; subtitle: string };

export function ContactHero({
  data,
  opacity,
}: {
  data: HeroData;
  opacity: MotionValue<number>;
}) {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, #050608 0px, #050608 1px, transparent 1px, transparent 80px), repeating-linear-gradient(90deg, #050608 0px, #050608 1px, transparent 1px, transparent 80px)",
          }}
        />
      </div>

      <motion.div
        className="relative z-10 max-w-[1200px] mx-auto w-full px-6 md:px-12 lg:px-20 text-center"
        style={{ opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          <motion.div
            className="inline-block mb-10"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="px-8 py-4 border-2 border-[#050608] text-sm uppercase tracking-[0.3em] bg-white">
              {data.badge}
            </div>
          </motion.div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.9] mb-12">
            {data.title}
          </h1>

          <p className="text-xl md:text-2xl lg:text-3xl opacity-70 max-w-3xl mx-auto leading-relaxed">
            {data.subtitle}
          </p>
        </motion.div>
      </motion.div>

      <FloatingDots />
    </section>
  );
}
