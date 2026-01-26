"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function PortfolioCTA() {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-32 md:py-40 bg-[#050608] text-[#F5EFE7] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-10 leading-tight">
            Your Project Could Be Next
          </h2>
          <p className="text-xl md:text-2xl opacity-70 mb-12 max-w-3xl mx-auto leading-relaxed">
            Каждый успешный проект начинается с разговора. Давайте обсудим, как
            мы можем помочь вашему бизнесу.
          </p>

          <motion.a
            href="#contact"
            className="inline-block px-12 py-6 bg-[#F5EFE7] text-[#050608] text-xl transition-all relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-3">
              Начать Проект
              <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
            </span>
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        className="absolute top-10 left-10 w-40 h-40 border-2 border-[#F5EFE7] opacity-10"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-60 h-60 border-2 border-[#F5EFE7] opacity-5"
        animate={{ rotate: [360, 0] }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      />
    </section>
  );
}
