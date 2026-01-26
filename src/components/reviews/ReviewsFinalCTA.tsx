"use client";

import { motion } from "motion/react";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import { FloatingShapes } from "./FloatingShapes";

export function ReviewsFinalCTA({
  cta,
  Particles,
}: {
  cta: { title: string; subtitle: string; button: string };
  Particles: React.ComponentType;
}) {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-40 md:py-48 lg:py-56 bg-[#050608] text-[#F5EFE7] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-8 mb-12">
            <motion.div
              animate={{ y: [0, -20, 0], rotate: [0, 15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkles className="w-16 h-16 md:w-20 md:h-20" />
            </motion.div>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              <Star className="w-16 h-16 md:w-20 md:h-20 fill-[#F5EFE7]" />
            </motion.div>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl mb-12 leading-[0.95]">
            {cta.title}
          </h2>

          <p className="text-xl md:text-2xl lg:text-3xl opacity-70 mb-16 max-w-3xl mx-auto leading-relaxed">
            {cta.subtitle}
          </p>

          <motion.a
            href="#contact"
            className="inline-flex items-center gap-4 px-12 py-6 md:px-16 md:py-8 bg-[#F5EFE7] text-[#050608] text-xl md:text-2xl group relative overflow-hidden"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 60px rgba(245,239,231,0.4)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-linear-to-r from-transparent via-white to-transparent opacity-30"
              animate={{ x: ["-200%", "200%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            <span className="relative z-10">{cta.button}</span>
            <ArrowRight className="w-6 h-6 md:w-8 md:h-8 relative z-10 transition-transform group-hover:translate-x-2" />
          </motion.a>
        </motion.div>
      </div>

      <Particles />
      <FloatingShapes />
    </section>
  );
}
