"use client";

import { motion } from "motion/react";
import { Check } from "lucide-react";

export function DeliverableCard({
  category,
  index,
}: {
  category: any;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <motion.div
        className="border-2 border-[#050608] p-10 md:p-12 bg-[#F5EFE7] h-full hover:bg-white transition-colors"
        whileHover={{
          boxShadow: "16px 16px 0px 0px rgba(5,6,8,1)",
          x: -5,
          y: -5,
        }}
      >
        <div className="flex items-center gap-4 mb-8">
          <motion.div
            className="text-5xl"
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
          >
            {category.icon}
          </motion.div>
          <h3 className="text-2xl md:text-3xl lg:text-4xl">
            {category.category}
          </h3>
        </div>

        <div className="space-y-3">
          {category.items.map((item: string, i: number) => (
            <div key={i} className="flex items-start gap-3">
              <Check className="w-5 h-5 shrink-0 mt-1" />
              <p className="text-lg opacity-70">{item}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
