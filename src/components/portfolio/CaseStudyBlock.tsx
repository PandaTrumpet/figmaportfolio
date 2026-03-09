
"use client";

import { useRef } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { ArrowRight  } from "lucide-react";
import { ImageWithFallback } from "@/src/components/figma/ImageWithFallback";

import Link from "next/link";
import { useLocale } from "next-intl";
import { StaticImageData } from "next/image";
interface Project {
  id: string;
  title: string;
  client: string;
  description: string;
  imageLittle: string | StaticImageData;
  imageBig?: string | StaticImageData;
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
export function CaseStudyBlock({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-120px" });
  const locale = useLocale();
  if (!project?.caseStudy) return null;

  const number = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className="relative"
    >
      {/* compact card */}
      <div className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-[#060A13] via-[#050816] to-[#02030A] shadow-[0_22px_70px_rgba(0,0,0,0.75)] overflow-hidden">
        {/* soft inner glow */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#3A7BFF22] via-transparent to-transparent opacity-70" />

        <div className="p-6 md:p-8">
          {/* header row */}
          <div className="flex items-start justify-between gap-6">
            <div className="flex items-start gap-4 min-w-0">
              <span
                className="
    text-[40px] md:text-[52px]
    leading-[0.95]
    font-semibold tracking-[-0.02em]
    text-white/10
    select-none
  "
              >
                {number}
              </span>

              <div className="min-w-0">
                <h3
                  className="
    text-[22px] md:text-[26px] lg:text-[30px]
    leading-[1.12] md:leading-[1.1]
    font-semibold tracking-[-0.012em]
    text-[#F2F4FA]
  "
                >
                  {project.title}
                </h3>
                <p
                  className="
    mt-1
    text-[12px] md:text-[13px] lg:text-[14px]
    leading-[1.2]
    text-[#C7CEDF] opacity-80
  "
                >
                  {project.client}
                </p>

                {/* tags (compact) */}
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.industry?.slice(0, 1).map((ind: string) => (
                    <span
                      key={ind}
                      className="
  text-[12px] md:text-[13px]
  leading-[1.2]
  px-3 py-1.5
  rounded-full
  border border-white/10
  bg-white/5
  text-[#D5DBE6]
"
                    >
                      {ind}
                    </span>
                  ))}
                  {project.type?.slice(0, 2).map((t: string) => (
                    <span
                      key={t}
                      className="
  text-[12px] md:text-[13px]
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
            </div>
          </div>

          {/* media + results */}
          <div className="mt-6 grid lg:grid-cols-12 gap-6 items-start">
            {/* image */}
            <div className="lg:col-span-7">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/20">
                <div className="aspect-[16/9]">
                  <ImageWithFallback
                    src={project.imageBig || project.imageLittle}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* subtle outline */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl border border-transparent"
                  style={{
                    background:
                      "linear-gradient(135deg, #3A7BFF, #4CC2FF, #9B5DFF)",
                    WebkitMask:
                      "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                    padding: "1px",
                    opacity: 0.35,
                  }}
                />
              </div>

              {/* optional extra images: показываем только если open */}
              <AnimatePresence initial={false}>
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="mt-4 grid sm:grid-cols-2 gap-4 overflow-hidden"
                >
                  {project.caseStudy.images
                    .slice(0, 2)
                    .map((img: string, i: number) => (
                      <div
                        key={i}
                        className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/20"
                      >
                        <div className="aspect-[16/10]">
                          <ImageWithFallback
                            src={img}
                            alt={`${project.title} деталь ${i + 1}`}
                            className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-500"
                          />
                        </div>
                      </div>
                    ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* results */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6 backdrop-blur-xl">
                <h4
                  className="
    text-[11px] md:text-[12px]
    leading-[1.2]
    uppercase tracking-[0.22em]
    text-[#C7CEDF]
    mb-4
  "
                >
                  Результат
                </h4>

                <div className="space-y-3">
                  {project.caseStudy.results
                    .slice(0, 4)
                    .map((r: string, i: number) => (
                      <div
                        key={i}
                        className="rounded-xl border border-white/10 bg-gradient-to-br from-[#9B5DFF18] via-transparent to-transparent p-4"
                      >
                        <p
                          className="
    text-[15px] md:text-[16px] lg:text-[17px]
    leading-[1.55] md:leading-[1.6]
    text-[#E8ECF4]
    opacity-85
  "
                        >
                          {r}
                        </p>
                      </div>
                    ))}
                </div>

                {/* CTA compact */}
                <div className="mt-5">
                  {/* <a
                    href="#contact"
                    className="
  inline-flex items-center gap-3 rounded-full
  border border-white/10 bg-white/5
  px-6 py-3.5
  text-[14px] md:text-[15px] lg:text-[16px]
  leading-[1.2]
  font-medium
  text-[#F2F4FA]
  hover:bg-white/10 transition
"
                  >
                    <span>Обсудить похожий проект</span>
                    <ArrowRight className="w-5 h-5 opacity-90" />
                  </a> */}
                  <Link
                    href={`/${locale}/contact#contact-form`}
                    scroll
                    className="
        inline-flex items-center gap-3 rounded-full
        border border-white/10 bg-white/5
        px-6 py-3.5
        text-[14px] md:text-[15px] lg:text-[16px]
        leading-[1.2]
        font-medium
        text-[#F2F4FA]
        hover:bg-white/10 transition
      "
                    aria-label="Обсудить похожий проект"
                  >
                    <span>Обсудить похожий проект</span>
                    <ArrowRight className="w-5 h-5 opacity-90" />
                  </Link>{" "}
                </div>
              </div>
            </div>
          </div>

          {/* details (challenge/solution) */}
          <AnimatePresence initial={false}>
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="mt-6 overflow-hidden"
            >
              <div className="grid lg:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6 backdrop-blur-xl">
                  <h5 className="text-[11px] md:text-[12px] leading-[1.2] uppercase tracking-[0.22em] text-[#C7CEDF] mb-3">
                    Задача
                  </h5>
                  <p className="text-[15px] md:text-[16px] lg:text-[17px] leading-[1.55] md:leading-[1.6] text-[#E8ECF4] opacity-85">
                    {project.caseStudy.challenge}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-[#060A13] via-[#050816] to-[#02030A] p-5 md:p-6">
                  <h5 className="text-[11px] md:text-[12px] leading-[1.2] uppercase tracking-[0.22em] text-[#C7CEDF] mb-3">
                    Решение
                  </h5>
                  <p className="text-[15px] md:text-[16px] lg:text-[17px] leading-[1.55] md:leading-[1.6] text-[#E8ECF4] opacity-85">
                    {project.caseStudy.solution}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
