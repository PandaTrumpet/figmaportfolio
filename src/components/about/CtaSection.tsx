"use client";

import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";

export function CtaSection() {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-40 md:py-48 lg:py-56 bg-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block mb-12"
            animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Sparkles className="w-20 h-20 md:w-24 md:h-24" />
          </motion.div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl mb-12 leading-[0.95]">
            Готовы начать
            <br />
            ваш проект?
          </h2>

          <p className="text-xl md:text-2xl lg:text-3xl opacity-70 mb-16 max-w-3xl mx-auto leading-relaxed">
            Запишитесь на бесплатную консультацию. Обсудим ваши цели, покажем
            наш подход и составим план роста.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-4 px-12 py-6 md:px-16 md:py-8 bg-[#050608] text-[#F5EFE7] text-xl md:text-2xl group"
              whileHover={{
                scale: 1.05,
                boxShadow: "16px 16px 0px 0px rgba(5,6,8,0.2)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Записаться на консультацию</span>
              <ArrowRight className="w-6 h-6 md:w-8 md:h-8 transition-transform group-hover:translate-x-2" />
            </motion.a>

            <motion.a
              href="#portfolio"
              className="inline-flex items-center gap-3 text-xl md:text-2xl opacity-70 hover:opacity-100 transition-opacity"
              whileHover={{ x: 10 }}
            >
              <span>Посмотреть работы</span>
              <ArrowRight className="w-6 h-6" />
            </motion.a>
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-0 opacity-[0.015] pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, #050608 0px, #050608 1px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, #050608 0px, #050608 1px, transparent 1px, transparent 60px)",
          }}
        />
      </div>

      <div className="absolute top-20 left-10 text-[15rem] opacity-[0.02] leading-none select-none">
        "
      </div>
      <div className="absolute bottom-20 right-10 text-[15rem] opacity-[0.02] leading-none select-none">
        "
      </div>
    </section>
  );
}
