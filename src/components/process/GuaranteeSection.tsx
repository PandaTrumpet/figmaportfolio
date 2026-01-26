"use client";

import { motion } from "motion/react";
import { Check, Shield } from "lucide-react";

export function GuaranteeSection({ guarantee }: { guarantee: any }) {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-32 md:py-40 bg-[#F5EFE7]">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="border-4 border-[#050608] p-12 md:p-16 lg:p-20 bg-white relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-[0.02]">
            <div
              className="w-full h-full"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, #050608 0px, #050608 2px, transparent 2px, transparent 20px)",
              }}
            />
          </div>

          <div className="relative z-10">
            <motion.div
              className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 border-2 border-[#050608] mb-10"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Shield className="w-10 h-10 md:w-12 md:h-12" />
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-12">
              {guarantee.title}
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {guarantee.points.map((point: string, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <Check className="w-6 h-6 shrink-0 mt-1" />
                  <p className="text-lg md:text-xl">{point}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
