"use client";

import { motion, MotionValue } from "motion/react";
import { ChevronDown } from "lucide-react";
import { HologramShapes } from "./HologramShapes";

type HeroData = {
  badge: string;
  title: string;
  subtitle: string;
};

export function ProcessHero({
  data,
  opacity,
}: {
  data: HeroData;
  opacity: MotionValue<number>;
}) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(#050608 1px, transparent 1px), linear-gradient(90deg, #050608 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
          animate={{ backgroundPosition: ["0px 0px", "80px 80px"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <motion.div
        className="relative z-10 max-w-[1400px] mx-auto w-full px-6 md:px-12 lg:px-20 text-center"
        style={{ opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          {/* Floating Badge */}
          <motion.div
            className="inline-block mb-10"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="px-8 py-4 border-2 border-[#050608] text-sm uppercase tracking-[0.3em] bg-white">
              {data.badge}
            </div>
          </motion.div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.9] mb-12">
            {data.title}
          </h1>

          <p className="text-xl md:text-2xl lg:text-3xl opacity-70 max-w-4xl mx-auto leading-relaxed mb-16">
            {data.subtitle}
          </p>

          <motion.div
            className="inline-flex flex-col items-center gap-3"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-8 h-8 opacity-50" />
            <p className="text-sm uppercase tracking-wider opacity-50">
              Explore Process
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      <HologramShapes />
    </section>
  );
}
