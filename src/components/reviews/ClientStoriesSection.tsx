"use client";

import { motion } from "motion/react";
import { Heart } from "lucide-react";
import { ClientStoryCard } from "./ClientStoryCard";

export function ClientStoriesSection({ stories }: { stories: any[] }) {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-32 md:py-40 bg-white">
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
          <div className="flex items-center justify-center gap-4 mb-8">
            <Heart className="w-10 h-10 md:w-12 md:h-12" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              Клиентские истории
            </h2>
          </div>
          <p className="text-xl md:text-2xl lg:text-3xl opacity-70 max-w-3xl mx-auto">
            Реальные результаты, реальный рост
          </p>
        </motion.div>

        <div className="space-y-32">
          {stories.map((story, index) => (
            <ClientStoryCard key={index} story={story} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
