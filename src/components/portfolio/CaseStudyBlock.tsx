"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "@/src/components/figma/ImageWithFallback";

export function CaseStudyBlock({
  project,
  index,
}: {
  project: any;
  index: number;
}) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-150px" });

  if (!project.caseStudy) return null;

  return (
    <div ref={sectionRef}>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="mb-12">
          <div className="flex items-center gap-6 mb-6">
            <span className="text-7xl opacity-10">0{index + 1}</span>
            <div>
              <h3 className="text-4xl md:text-5xl lg:text-6xl mb-2">
                {project.title}
              </h3>
              <p className="text-xl md:text-2xl opacity-60">{project.client}</p>
            </div>
          </div>
        </div>

        <div className="aspect-21/9 mb-12 border-2 border-[#050608] overflow-hidden">
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="border-2 border-[#050608] p-8 bg-[#F5EFE7]"
          >
            <h4 className="text-2xl mb-4 uppercase tracking-wider">
              Challenge
            </h4>
            <p className="text-lg opacity-70 leading-relaxed">
              {project.caseStudy.challenge}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="border-2 border-[#050608] p-8 bg-[#050608] text-[#F5EFE7]"
          >
            <h4 className="text-2xl mb-4 uppercase tracking-wider">Solution</h4>
            <p className="text-lg opacity-90 leading-relaxed">
              {project.caseStudy.solution}
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <h4 className="text-3xl md:text-4xl mb-8">Results</h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.caseStudy.results.map((result: string, i: number) => (
              <div
                key={i}
                className="border-2 border-[#050608] p-6 bg-white hover:bg-[#050608] hover:text-[#F5EFE7] transition-all group"
              >
                <p className="text-xl md:text-2xl leading-tight">{result}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {project.caseStudy.images?.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {project.caseStudy.images.map((img: string, i: number) => (
              <div
                key={i}
                className="aspect-[16/10] border-2 border-[#050608] overflow-hidden"
              >
                <ImageWithFallback
                  src={img}
                  alt={`${project.title} detail ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 border-2 border-[#050608] hover:bg-[#050608] hover:text-[#F5EFE7] transition-all group"
          >
            <span className="text-lg">Обсудить Подобный Проект</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}
