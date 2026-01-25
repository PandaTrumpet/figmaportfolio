"use client";

import { motion } from "motion/react";
import { ValueCard } from "./ValueCard";


type ValueItem = {
  icon: string;
  title: string;
  description: string;
};

export function ValuesSection({ values }: { values: ValueItem[] }) {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-32 md:py-40 bg-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <motion.div
            className="w-24 h-[3px] bg-[#050608] mb-12 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-8">
            Наши ценности
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl opacity-70 max-w-3xl mx-auto">
            Принципы, которые определяют, как мы работаем.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <ValueCard key={index} value={value} index={index} />
          ))}
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, #050608 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>
    </section>
  );
}
