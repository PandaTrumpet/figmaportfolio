"use client";

import { motion } from "motion/react";
import { CaseStudyBlock } from "./CaseStudyBlock";

export function FeaturedCaseStudiesSection({ projects }: { projects: any[] }) {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-24 md:py-32 bg-white">
      <div className="max-w-[1600px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="w-16 h-0.5 bg-[#050608] mb-8" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">
            Featured Case Studies
          </h2>
          <p className="text-xl md:text-2xl opacity-70 max-w-3xl">
            Глубокий разбор наших лучших проектов с метриками и результатами.
          </p>
        </motion.div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <CaseStudyBlock key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
