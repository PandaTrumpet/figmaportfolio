"use client";

import { motion } from "motion/react";
import { Play } from "lucide-react";
import { VideoTestimonialCard } from "./VideoTestimonialCard";
import { HolographicGrid } from "./HolographicGrid";

export function VideoTestimonialsSection({ videos }: { videos: any[] }) {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-32 md:py-40 bg-[#050608] text-[#F5EFE7] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <motion.div
            className="w-24 h-[3px] bg-[#F5EFE7] mb-12 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />
          <div className="flex items-center justify-center gap-4 mb-8">
            <Play className="w-10 h-10 md:w-12 md:h-12" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              Видео-отзывы
            </h2>
          </div>
          <p className="text-xl md:text-2xl lg:text-3xl opacity-70 max-w-3xl mx-auto">
            Послушайте от наших клиентов напрямую
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <VideoTestimonialCard key={index} video={video} index={index} />
          ))}
        </div>
      </div>

      <HolographicGrid />
    </section>
  );
}
