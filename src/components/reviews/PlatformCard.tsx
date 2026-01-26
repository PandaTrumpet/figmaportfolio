"use client";

import { motion } from "motion/react";
import { Star } from "lucide-react";

export function PlatformCard({
  platform,
  index,
}: {
  platform: any;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="text-center border-2 border-[#050608] p-8 md:p-10 bg-[#F5EFE7] hover:bg-white transition-all group"
    >
      <motion.div
        className="text-6xl mb-4"
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
      >
        {platform.logo}
      </motion.div>
      <h3 className="text-lg md:text-xl mb-2">{platform.name}</h3>
      <div className="flex items-center justify-center gap-2 mb-2">
        <Star className="w-5 h-5 fill-[#050608]" />
        <p className="text-3xl md:text-4xl">{platform.rating}</p>
      </div>
      <p className="text-sm opacity-60">{platform.reviewCount} reviews</p>
    </motion.div>
  );
}
