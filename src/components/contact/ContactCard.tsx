"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function ContactCard({
  contact,
  index,
}: {
  contact: any;
  index: number;
}) {
  return (
    <motion.a
      href={contact.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="flex items-center gap-6 p-6 md:p-8 border-2 border-[#050608] bg-white hover:bg-[#F5EFE7] transition-all group"
      whileHover={{
        boxShadow: "12px 12px 0px 0px rgba(5,6,8,1)",
        x: -4,
        y: -4,
      }}
    >
      <motion.div
        className="text-4xl shrink-0"
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
      >
        {contact.icon}
      </motion.div>

      <div className="flex-1">
        <p className="text-sm uppercase tracking-wider opacity-50 mb-2">
          {contact.label}
        </p>
        <p className="text-xl md:text-2xl group-hover:translate-x-2 transition-transform">
          {contact.value}
        </p>
      </div>

      <ArrowRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.a>
  );
}
