"use client";

import { motion, MotionValue } from "motion/react";
import { Star } from "lucide-react";
import { FloatingQuotes } from "./FloatingQuotes";

type HeroData = {
  badge: string;
  title: string;
  subtitle: string;
  stats: { value: string; label: string }[];
};

export function ReviewsHero({
  data,
  opacity,
}: {
  data: HeroData;
  opacity: MotionValue<number>;
}) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <motion.div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l2 20 20-2-20 2-2 20-2-20-20 2 20-2z' fill='%23050608' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
          animate={{ backgroundPosition: ["0px 0px", "60px 60px"] }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
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
          <motion.div
            className="inline-block mb-10"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="px-8 py-4 border-2 border-[#050608] text-sm uppercase tracking-[0.3em] bg-white flex items-center gap-3">
              <Star className="w-5 h-5 fill-[#050608]" />
              <span>{data.badge}</span>
            </div>
          </motion.div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.9] mb-12">
            {data.title}
          </h1>

          <p className="text-xl md:text-2xl lg:text-3xl opacity-70 max-w-4xl mx-auto leading-relaxed mb-16">
            {data.subtitle}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {data.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 + index * 0.1 }}
                className="border-2 border-[#050608] p-6 md:p-8 bg-white hover:bg-[#F5EFE7] transition-all"
              >
                <p className="text-3xl md:text-4xl lg:text-5xl mb-2">
                  {stat.value}
                </p>
                <p className="text-sm md:text-base uppercase tracking-wider opacity-60">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <FloatingQuotes />
    </section>
  );
}
