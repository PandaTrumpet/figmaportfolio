"use client";

import { motion } from "motion/react";
import { ProcessStep } from "./ProcessStep";

export function ProcessSteps({ steps }: { steps: any[] }) {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-32 md:py-40 relative">
      <div className="max-w-[1600px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-32"
        >
          <motion.div
            className="w-24 h-[3px] bg-[#050608] mb-12 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-8">
            6 шагов к успеху
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl opacity-70 max-w-3xl mx-auto">
            Каждый этап продуман для максимального результата
          </p>
        </motion.div>

        <div className="space-y-48">
          {steps.map((step, index) => (
            <ProcessStep key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
