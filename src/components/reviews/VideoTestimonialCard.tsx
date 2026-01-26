"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Play } from "lucide-react";
import { ImageWithFallback } from "@/src/components/figma/ImageWithFallback";

export function VideoTestimonialCard({
  video,
  index,
}: {
  video: any;
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group cursor-pointer"
    >
      <motion.div
        className="relative aspect-video border-2 border-[#F5EFE7] overflow-hidden mb-6"
        whileHover={{
          boxShadow: "16px 16px 0px 0px rgba(245,239,231,0.3)",
          x: -6,
          y: -6,
        }}
      >
        <ImageWithFallback
          src={video.thumbnail}
          alt={video.name}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-t from-[#050608] via-[#050608]/50 to-transparent" />

        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#F5EFE7] text-[#050608] flex items-center justify-center border-2 border-[#F5EFE7]">
            <Play className="w-8 h-8 md:w-10 md:h-10 ml-1" />
          </div>
        </motion.div>

        <div className="absolute bottom-4 right-4 px-3 py-1 bg-[#F5EFE7] text-[#050608] text-sm">
          {video.duration}
        </div>
      </motion.div>

      <div className="flex items-start gap-4">
        <div className="w-12 h-12 border-2 border-[#F5EFE7] overflow-hidden shrink-0">
          <ImageWithFallback
            src={video.avatar}
            alt={video.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-xl mb-1">{video.name}</h3>
          <p className="text-sm opacity-60 mb-2">
            {video.role} at {video.company}
          </p>
          <p className="text-base opacity-70 italic">"{video.quote}"</p>
        </div>
      </div>
    </motion.div>
  );
}
