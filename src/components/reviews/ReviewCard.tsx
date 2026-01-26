"use client";

import { motion } from "motion/react";
import { Star } from "lucide-react";
import { ImageWithFallback } from "@/src/components/figma/ImageWithFallback";

export function ReviewCard({ review }: { review: any }) {
  return (
    <motion.div
      className="border-2 border-[#050608] p-8 md:p-10 bg-white h-full flex flex-col"
      whileHover={{
        boxShadow: "12px 12px 0px 0px rgba(5,6,8,1)",
        x: -4,
        y: -4,
      }}
    >
      <div className="flex items-start gap-4 mb-6">
        <div className="w-14 h-14 border-2 border-[#050608] overflow-hidden shrink-0">
          <ImageWithFallback
            src={review.avatar}
            alt={review.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-xl mb-1">{review.name}</h3>
          <p className="text-sm opacity-60">{review.role}</p>
          <p className="text-sm opacity-50">{review.company}</p>
        </div>
      </div>

      <div className="flex gap-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-[#050608]" />
        ))}
      </div>

      <p className="text-base md:text-lg opacity-70 leading-relaxed mb-6 flex-1">
        {review.text}
      </p>

      <div className="flex items-center justify-between pt-6 border-t-2 border-[#050608] border-opacity-10">
        <span className="text-sm px-3 py-1 border-2 border-[#050608]">
          {review.projectType}
        </span>
        <span className="text-sm opacity-50">{review.date}</span>
      </div>
    </motion.div>
  );
}
