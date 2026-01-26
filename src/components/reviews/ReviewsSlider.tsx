"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ReviewCard } from "./ReviewCard";

export function ReviewsSlider({ reviews }: { reviews: any[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleReviews = 3;
  const maxIndex = Math.max(0, reviews.length - visibleReviews);

  const next = () => {
    if (currentIndex < maxIndex) setCurrentIndex((v) => v + 1);
  };

  const prev = () => {
    if (currentIndex > 0) setCurrentIndex((v) => v - 1);
  };

  return (
    <div className="relative">
      <div className="overflow-hidden mb-12">
        <motion.div
          className="grid lg:grid-cols-3 gap-8"
          animate={{ x: `-${currentIndex * (100 / visibleReviews)}%` }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {reviews.map((review, index) => (
            <div key={index} className="min-w-full lg:min-w-0">
              <ReviewCard review={review} />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="flex items-center justify-center gap-6">
        <motion.button
          onClick={prev}
          disabled={currentIndex === 0}
          className="w-14 h-14 border-2 border-[#050608] flex items-center justify-center hover:bg-[#050608] hover:text-[#F5EFE7] transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>

        <div className="flex gap-2">
          {[...Array(maxIndex + 1)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-3 h-3 border-2 border-[#050608] transition-all ${
                i === currentIndex ? "bg-[#050608]" : "bg-transparent"
              }`}
            />
          ))}
        </div>

        <motion.button
          onClick={next}
          disabled={currentIndex === maxIndex}
          className="w-14 h-14 border-2 border-[#050608] flex items-center justify-center hover:bg-[#050608] hover:text-[#F5EFE7] transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>
      </div>
    </div>
  );
}
