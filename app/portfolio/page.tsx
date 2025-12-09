"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "motion/react";


import { projects, industries, types } from "../../src/data/portfolio";
import { ArrowRight, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "@/src/components/figma/ImageWithFallback";

export default function Portfolio() {
  const [selectedIndustry, setSelectedIndustry] = useState("All");
  const [selectedType, setSelectedType] = useState("All");

  const filteredProjects = projects.filter((project) => {
    const industryMatch =
      selectedIndustry === "All" || project.industry.includes(selectedIndustry);
    const typeMatch =
      selectedType === "All" || project.type.includes(selectedType);
    return industryMatch && typeMatch;
  });

  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <div className="min-h-screen bg-[#F5EFE7]">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center px-6 md:px-12 lg:px-20 py-32 md:py-40">
        <div className="max-w-[1600px] mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="w-20 h-[3px] bg-[#050608] mb-10"
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />

            <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.9] mb-10 max-w-5xl">
              Selected Projects
            </h1>

            <p className="text-2xl md:text-3xl opacity-70 max-w-3xl leading-relaxed">
              Работы, которыми мы гордимся. Каждый проект — это история успеха
              клиента.
            </p>
          </motion.div>
        </div>

        {/* Decorative floating square */}
        <motion.div
          className="absolute top-20 right-20 w-40 h-40 border-2 border-[#050608] opacity-5"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </section>

      {/* Filters */}
      <section className="px-6 md:px-12 lg:px-20 py-12 border-t-2 border-b-2 border-[#050608] bg-white sticky top-0 z-40">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
          
            <div>
              <p className="text-sm uppercase tracking-wider opacity-50 mb-4">
                Industry
              </p>
              <div className="flex flex-wrap gap-3">
                {industries.map((industry) => (
                  <button
                    key={industry}
                    onClick={() => setSelectedIndustry(industry)}
                    className={`px-4 py-2 border-2 border-[#050608] transition-all ${
                      selectedIndustry === industry
                        ? "bg-[#050608] text-[#F5EFE7]"
                        : "bg-[#F5EFE7] hover:bg-[#050608] hover:text-[#F5EFE7]"
                    }`}
                  >
                    {industry}
                  </button>
                ))}
              </div>
            </div>

        
            <div>
              <p className="text-sm uppercase tracking-wider opacity-50 mb-4">
                Type
              </p>
              <div className="flex flex-wrap gap-3">
                {types.map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`px-4 py-2 border-2 border-[#050608] transition-all ${
                      selectedType === type
                        ? "bg-[#050608] text-[#F5EFE7]"
                        : "bg-[#F5EFE7] hover:bg-[#050608] hover:text-[#F5EFE7]"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 md:px-12 lg:px-20 py-20 md:py-32">
        <div className="max-w-[1600px] mx-auto">
          <div className="mb-12">
            <p className="text-xl opacity-60">
              Showing {filteredProjects.length}{" "}
              {filteredProjects.length === 1 ? "project" : "projects"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-2xl opacity-40">
                No projects found with these filters
              </p>
              <button
                onClick={() => {
                  setSelectedIndustry("All");
                  setSelectedType("All");
                }}
                className="mt-6 px-8 py-4 border-2 border-[#050608] hover:bg-[#050608] hover:text-[#F5EFE7] transition-all"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Featured Case Studies */}
      {featuredProjects.length > 0 && (
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
                Глубокий разбор наших лучших проектов с метриками и
                результатами.
              </p>
            </motion.div>

            <div className="space-y-32">
              {featuredProjects.map((project, index) => (
                <CaseStudyBlock
                  key={project.id}
                  project={project}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="px-6 md:px-12 lg:px-20 py-32 md:py-40 bg-[#050608] text-[#F5EFE7] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-10 leading-tight">
              Your Project Could Be Next
            </h2>
            <p className="text-xl md:text-2xl opacity-70 mb-12 max-w-3xl mx-auto leading-relaxed">
              Каждый успешный проект начинается с разговора. Давайте обсудим,
              как мы можем помочь вашему бизнесу.
            </p>
            <motion.a
              href="#contact"
              className="inline-block px-12 py-6 bg-[#F5EFE7] text-[#050608] text-xl transition-all relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-3">
                Начать Проект
                <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
              </span>
            </motion.a>
          </motion.div>
        </div>

        {/* Animated background elements */}
        <motion.div
          className="absolute top-10 left-10 w-40 h-40 border-2 border-[#F5EFE7] opacity-10"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-60 h-60 border-2 border-[#F5EFE7] opacity-5"
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        />
      </section>
    </div>
  );
}

// Project Card Component
function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const cardRef = useRef(null);
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
        {/* Image */}
        <div className="aspect-4/3 overflow-hidden relative">
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-[#050608] opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
            <div className="text-[#F5EFE7] flex items-center gap-2">
              <span className="text-xl">View Project</span>
              <ExternalLink className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Content */}
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

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.industry.slice(0, 2).map((ind) => (
              <span
                key={ind}
                className="text-sm px-3 py-1 bg-[#F5EFE7] border border-[#050608] opacity-70"
              >
                {ind}
              </span>
            ))}
            {project.type.slice(0, 1).map((t) => (
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

// Case Study Block Component
function CaseStudyBlock({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-150px" });

  if (!project.caseStudy) return null;

  return (
    <div ref={sectionRef}>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        {/* Header */}
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

        {/* Main Image */}
        <div className="aspect-21/9 mb-12 border-2 border-[#050608] overflow-hidden">
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-12">
          {/* Challenge */}
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

          {/* Solution */}
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

        {/* Results */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <h4 className="text-3xl md:text-4xl mb-8">Results</h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.caseStudy.results.map((result, i) => (
              <div
                key={i}
                className="border-2 border-[#050608] p-6 bg-white hover:bg-[#050608] hover:text-[#F5EFE7] transition-all group"
              >
                <p className="text-xl md:text-2xl leading-tight">{result}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Additional Images */}
        {project.caseStudy.images && project.caseStudy.images.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {project.caseStudy.images.map((img, i) => (
              <div
                key={i}
                className="aspect[16/10 border-2 border-[#050608] overflow-hidden"
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

        {/* View Full Case Study CTA */}
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
