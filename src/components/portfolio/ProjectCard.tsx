

"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { ExternalLink, Star } from "lucide-react";
import { ImageWithFallback } from "@/src/components/figma/ImageWithFallback";
interface Project {
  id: string;
  title: string;
  client: string;
  description: string;
  image: string;
  industry: string[];
  type: string[];
  link?: string;
  year: string;
  featured?: boolean;
  caseStudy?: {
    challenge: string;
    solution: string;
    results: string[];
    images: string[];
  };
}
export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="relative"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* deep glow under card */}
      <motion.div
        className="absolute -inset-[14px] rounded-[34px] bg-[radial-gradient(circle_at_top,_rgba(58,123,255,0.55),_transparent_70%)] blur-2xl -z-20"
        animate={{ opacity: isHovered ? 1 : 0.35, scale: isHovered ? 1.08 : 1 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      />

      {/* hover aura */}
      <motion.div
        className="absolute inset-0 rounded-[36px] bg-[radial-gradient(circle_at_center,_rgba(76,194,255,0.5),_transparent_65%)] blur-3xl -z-10 pointer-events-none"
        animate={{
          opacity: isHovered ? 0.85 : 0,
          scale: isHovered ? 1.05 : 0.95,
        }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      />

      {/* card */}
      <motion.div
        className="group relative h-full rounded-3xl border border-white/10 bg-gradient-to-b from-[#060A13] via-[#050816] to-[#02030A] shadow-[0_26px_80px_rgba(0,0,0,0.85)] backdrop-blur-xl overflow-hidden"
        whileHover={{ y: -14, boxShadow: "0 32px 120px rgba(0,0,0,1)" }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* inner gradient glow */}
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-[#3A7BFF33] via-[#4CC2FF22] to-transparent -z-10"
          animate={{ opacity: isHovered ? 0.9 : 0.35 }}
          transition={{ duration: 0.3 }}
        />

        {/* sheen */}
        <motion.div
          className="pointer-events-none absolute -inset-10 bg-[linear-gradient(115deg,_transparent_0%,_rgba(255,255,255,0.22)_30%,_transparent_60%)] mix-blend-screen -z-10"
          initial={{ x: "-140%" }}
          whileHover={{ x: "140%" }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
        />

        {/* gradient outline (mask) */}
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent z-10"
          animate={{
            boxShadow: isHovered
              ? "0 0 0 1px rgba(76,194,255,0.7), 0 0 42px rgba(76,194,255,1)"
              : "0 0 0 1px rgba(255,255,255,0.06)",
          }}
          transition={{ duration: 0.25 }}
          style={{
            background: "linear-gradient(135deg, #3A7BFF, #4CC2FF, #9B5DFF)",
            WebkitMask:
              "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            padding: "1px",
          }}
        />

        {/* media */}
        <div className="aspect-[4/3] overflow-hidden relative">
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.08]"
          />

          {/* overlay hover */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="absolute inset-0 bg-[#050608]/70 backdrop-blur-sm" />
            <div className="relative z-10 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-[#F2F4FA] shadow-[0_0_40px_rgba(76,194,255,0.35)]">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
    text-[14px] md:text-[15px] lg:text-[16px]
    leading-[1.2]
    font-medium
  "
                >
                  Смотреть проект
                </a>
              )}
              <ExternalLink className="w-4 h-4 opacity-90" />
            </div>
          </motion.div>

          {/* featured badge */}
          {project.featured && (
            <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 backdrop-blur-xl">
              <Star className="h-4 w-4 text-[#4CC2FF]" />
              {/* <span className="text-xs text-[#E8F2FF] opacity-90">
                Избранный
              </span> */}
              <span
                className="
    text-[11px] md:text-[12px]
    leading-[1.2]
    uppercase tracking-[0.18em]
    text-[#E8F2FF] opacity-90
  "
              >
                Избранный
              </span>
            </div>
          )}
        </div>

        {/* content */}
        <div className="p-6 md:p-7">
          <div className="mb-2">
            {/* <h3 className="text-2xl md:text-3xl font-semibold text-[#F2F4FA] leading-tight">
              {project.title}
            </h3> */}
            <h3
              className="
    text-[20px] md:text-[22px] lg:text-[24px]
    leading-[1.15] md:leading-[1.12]
    font-semibold tracking-[-0.01em]
    text-[#F2F4FA]
    mb-2
  "
            >
              {project.title}
            </h3>
          </div>

          <p
            className="
    text-[12px] md:text-[13px] lg:text-[14px]
    leading-[1.2]
    text-[#C7CEDF]
    opacity-70
    mb-4
  "
          >
            {project.client}
          </p>

          <p
            className="
    text-[15px] md:text-[16px] lg:text-[17px]
    leading-[1.55] md:leading-[1.6]
    text-[#E8ECF4]
    opacity-80
    mb-5 md:mb-6
    max-w-[56ch]
  "
          >
            {project.description}
          </p>

          {/* tags */}
          <div className="flex flex-wrap gap-2">
            {project.industry?.slice(0, 2).map((ind: string) => (
              <span
                key={ind}
                className="
  text-[12px] md:text-[13px] lg:text-[14px]
  leading-[1.2]
  px-3 py-1.5
  rounded-full
  border border-white/10
  bg-white/5
  text-[#D5DBE6]
  backdrop-blur
"
              >
                {ind}
              </span>
            ))}

            {project.type?.slice(0, 1).map((t: string) => (
              <span
                key={t}
                className="
  text-[12px] md:text-[13px] lg:text-[14px]
  leading-[1.2]
  px-3 py-1.5
  rounded-full
  border border-white/10
  bg-gradient-to-r from-[#3A7BFF33] via-[#4CC2FF22] to-transparent
  text-[#E8F2FF]
"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* corner accent */}
        <motion.div
          className="pointer-events-none absolute bottom-4 right-4 h-8 w-8 opacity-40 z-20"
          animate={{
            scale: isHovered ? 1.2 : 1,
            opacity: isHovered ? 0.8 : 0.35,
          }}
          transition={{ duration: 0.25 }}
        >
          <div className="h-full w-full rounded-br-3xl border-b border-r border-[#4CC2FF77]" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
