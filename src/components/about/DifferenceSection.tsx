

"use client";

import { motion } from "motion/react";
import { DifferencePoint } from "./cards/DifferencePoint";

type DifferencePointItem = {
  title: string;
  description: string;
  image: string;
};

type DifferenceData = {
  title: string;
  subtitle: string;
  points: DifferencePointItem[];
};

export function DifferenceSection({ data }: { data: DifferenceData }) {
  return (
    <section className="bg-[#F5EFE7] overflow-x-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-16 sm:py-20 md:py-32 md:py-40">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 md:mb-24"
        >
          <motion.div
            className="w-16 sm:w-20 md:w-24 h-[3px] bg-[#050608] mb-8 sm:mb-10 md:mb-12"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6 md:mb-8 break-words">
            {data.title}
          </h2>

          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl opacity-70 max-w-3xl break-words">
            {data.subtitle}
          </p>
        </motion.div>

        <div className="space-y-16 sm:space-y-20 md:space-y-32">
          {data.points.map((point, index) => (
            <DifferencePoint key={index} point={point} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
