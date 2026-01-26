"use client";

import { motion } from "motion/react";
import { pricingData } from "@/src/data/pricingData";
import { FAQItem } from "@/src/components/pricing/FAQItem";

export function PricingFAQSection() {
  return (
    <section
      id="faq"
      className="px-6 md:px-12 lg:px-20 py-32 md:py-40 bg-[#F5EFE7]"
    >
      <div className="max-w-[900px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            className="w-24 h-[3px] bg-[#050608] mb-12 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-8">
            {pricingData.faq.title}
          </h2>
          <p className="text-xl md:text-2xl opacity-70">
            {pricingData.faq.subtitle}
          </p>
        </motion.div>

        <div className="space-y-4">
          {pricingData.faq.items.map((item, index) => (
            <FAQItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
