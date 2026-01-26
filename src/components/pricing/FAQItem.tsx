"use client";

import { useId, useState } from "react";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { pricingData } from "@/src/data/pricingData";

export function FAQItem({
  item,
  index,
}: {
  item: (typeof pricingData.faq.items)[0];
  index: number;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const contentId = useId();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="border-2 border-[#050608] bg-white overflow-hidden"
    >
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        aria-expanded={isOpen}
        aria-controls={contentId}
        className="w-full p-6 md:p-8 flex items-center justify-between gap-4 text-left hover:bg-[#F5EFE7] transition-colors"
      >
        <span className="text-lg md:text-xl lg:text-2xl pr-4">
          {item.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </button>

      <motion.div
        id={contentId}
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="p-6 md:p-8 pt-0 border-t-2 border-[#050608] border-opacity-10">
          <p className="text-base md:text-lg opacity-70 leading-relaxed">
            {item.answer}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
