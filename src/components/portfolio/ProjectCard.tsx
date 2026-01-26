"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ExternalLink } from "lucide-react";
import { ImageWithFallback } from "@/src/components/figma/ImageWithFallback";

export function ProjectCard({
  project,
  index,
}: {
  project: any;
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <div className="border-2 border-[#050608] bg-white overflow-hidden hover:shadow-[12px_12px_0px_0px_rgba(5,6,8,1)] transition-all duration-300">
        <div className="aspect-4/3 overflow-hidden relative">
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-[#050608] opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
            <div className="text-[#F5EFE7] flex items-center gap-2">
              <span className="text-xl">View Project</span>
              <ExternalLink className="w-5 h-5" />
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-2xl md:text-3xl">{project.title}</h3>
            {project.featured && (
              <span className="text-xs uppercase tracking-wider px-2 py-1 border border-[#050608] opacity-50">
                Featured
              </span>
            )}
          </div>

          <p className="text-base opacity-60 mb-4">{project.client}</p>
          <p className="text-lg opacity-70 leading-relaxed mb-6">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.industry.slice(0, 2).map((ind: string) => (
              <span
                key={ind}
                className="text-sm px-3 py-1 bg-[#F5EFE7] border border-[#050608] opacity-70"
              >
                {ind}
              </span>
            ))}
            {project.type.slice(0, 1).map((t: string) => (
              <span
                key={t}
                className="text-sm px-3 py-1 bg-[#050608] text-[#F5EFE7] border border-[#050608]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
