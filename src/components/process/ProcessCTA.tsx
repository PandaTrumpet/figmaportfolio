"use client";

import dynamic from "next/dynamic";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, Target, Zap } from "lucide-react";

const ParticlesBackground = dynamic(
  () =>
    import("@/src/components/ParticlesBackground").then(
      (m) => m.ParticlesBackground
    ),
  { ssr: false }
);

export function ProcessCTA() {
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
              animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Target className="w-16 h-16 md:w-20 md:h-20" />
            </motion.div>
            <motion.div
              animate={{ y: [0, -15, 0], rotate: [0, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              <Zap className="w-16 h-16 md:w-20 md:h-20" />
            </motion.div>
            <motion.div
              animate={{ y: [0, -25, 0], rotate: [0, 15, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              <Sparkles className="w-16 h-16 md:w-20 md:h-20" />
            </motion.div>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl mb-12 leading-[0.95]">
            Готовы начать
            <br />
            работу?
          </h2>

          <p className="text-xl md:text-2xl lg:text-3xl opacity-70 mb-16 max-w-3xl mx-auto leading-relaxed">
            Запишитесь на бесплатную консультацию. Обсудим ваш проект и составим
            индивидуальный план.
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
            <span className="relative z-10">Начать проект</span>
            <ArrowRight className="w-6 h-6 md:w-8 md:h-8 relative z-10 transition-transform group-hover:translate-x-2" />
          </motion.a>
        </motion.div>
      </div>

      <ParticlesBackground />

      <motion.div
        className="absolute top-20 left-20 w-60 h-60 border-2 border-[#F5EFE7] opacity-5"
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-80 h-80 border-2 border-[#F5EFE7] opacity-5"
        animate={{ rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />
    </section>
  );
}
