"use client";

import { motion } from "motion/react";
import { TimelineFlow } from "./TimelineFlow";
import { HolographicGrid } from "./HolographicGrid";

export function ProcessTimeline({ timeline }: { timeline: any }) {
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-8">
            {timeline.title}
          </h2>
        </motion.div>

        <TimelineFlow phases={timeline.phases} />
      </div>

      <HolographicGrid />
    </section>
  );
}
