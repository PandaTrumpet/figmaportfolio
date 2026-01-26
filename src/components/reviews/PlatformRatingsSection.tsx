"use client";

import { motion } from "motion/react";
import { Award } from "lucide-react";
import { PlatformCard } from "./PlatformCard";

export function PlatformRatingsSection({ platforms }: { platforms: any[] }) {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-32 md:py-40 bg-white">
      <div className="max-w-[1200px] mx-auto">
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
          <div className="flex items-center justify-center gap-4 mb-8">
            <Award className="w-10 h-10 md:w-12 md:h-12" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl">Наши рейтинги</h2>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6">
          {platforms.map((platform, index) => (
            <PlatformCard key={index} platform={platform} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
