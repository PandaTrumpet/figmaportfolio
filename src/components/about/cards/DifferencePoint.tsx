"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ImageWithFallback } from "@/src/components/figma/ImageWithFallback";

type DifferencePointItem = {
  title: string;
  description: string;
  image: string;
};

export function DifferencePoint({
  point,
  index,
}: {
  point: DifferencePointItem;
  index: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={ref}
      className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
        index % 2 === 1 ? "lg:grid-flow-dense" : ""
      }`}
    >
      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
        className={index % 2 === 1 ? "lg:col-start-2" : ""}
      >
        <motion.div
          className="aspect-16/10 border-4 border-[#050608] overflow-hidden"
          whileHover={{
            boxShadow: "20px 20px 0px 0px rgba(5,6,8,1)",
            x: -8,
            y: -8,
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.7 }}
          >
            <ImageWithFallback
              src={point.image}
              alt={point.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: index % 2 === 0 ? 60 : -60 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}
      >
        <div className="mb-8">
          <motion.div
            className="inline-block px-4 py-2 border-2 border-[#050608] text-sm uppercase tracking-wider mb-6"
            whileHover={{ x: 5 }}
          >
            0{index + 1}
          </motion.div>
        </div>

        <h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-8 leading-tight">
          {point.title}
        </h3>

        <p className="text-xl md:text-2xl lg:text-3xl opacity-70 leading-relaxed">
          {point.description}
        </p>
      </motion.div>
    </div>
  );
}
