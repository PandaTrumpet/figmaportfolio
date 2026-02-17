

"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { Heart } from "lucide-react";
import { ClientStoryCard } from "./ClientStoryCard";
import { PageContainer } from "../Layout/PageContainer";
interface ClientStory {
  name: string;
  role: string;
  company: string;
  avatar: string;
  story: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
  }[];
  quote: string;
  rating: number;
  projectType: string;
  industry: string;
}
const glitchPrimary = {
  initial: { x: 0, y: 0, opacity: 0 },
  hover: {
    x: [0, -1.5, 1, -0.5, 0],
    y: [0, 1, -1, 0.5, 0],
    opacity: [0, 0.9, 0.9, 0.6, 0],
    transition: { duration: 0.35, times: [0, 0.25, 0.5, 0.75, 1] },
  },
};

const glitchSecondary = {
  initial: { x: 0, y: 0, opacity: 0 },
  hover: {
    x: [0, 1.5, -1, 0.5, 0],
    y: [0, -1, 1, -0.5, 0],
    opacity: [0, 0.7, 0.8, 0.5, 0],
    transition: { duration: 0.35, times: [0, 0.25, 0.5, 0.75, 1] },
  },
};

export function ClientStoriesSection({ stories }: { stories: ClientStory[] }) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const reduce = useReducedMotion();

  return (
    <section
      ref={sectionRef}
      className="relative overflow-visible  pt-10 pb-10
        md:pt-14 md:pb-14
        lg:pt-16 lg:pb-16"
    >
      {/* BACKGROUND (clip only background, not the section/content) */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* spots */}
        <div className="absolute inset-0 opacity-60">
          <div className="absolute -top-40 -left-32 h-80 w-80 bg-[radial-gradient(circle_at_center,_#3A7BFF55,_transparent_70%)] blur-3xl" />
          <div className="absolute -bottom-40 -right-10 h-96 w-96 bg-[radial-gradient(circle_at_center,_#4CC2FF55,_transparent_70%)] blur-3xl" />
        </div>

        {/* optional subtle grid (очень мягко, чтобы не шумело) */}
        <div className="absolute inset-0 opacity-[0.06] [mask-image:radial-gradient(circle_at_center,black_55%,transparent_78%)]">
          <div className="h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:72px_72px]" />
        </div>

        {/* fades to kill seams */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-t from-transparent to-[#020410]" />
        <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-b from-transparent to-[#020410]" />
      </div>

      <PageContainer className="relative z-10 text-[#F5EFE7]">
        {/* Header */}
        <motion.div
          className="mb-16 md:mb-20 text-center"
          initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* <motion.div
            className="mb-6 h-[2px] w-20 mx-auto bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          /> */}

          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-[radial-gradient(circle_at_top,_#3A7BFF3b,_#050816)] overflow-hidden shadow-[0_0_40px_rgba(58,123,255,0.7)]">
              <Heart className="relative z-20 h-7 w-7 text-[#E8F2FF]" />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#3A7BFF66] to-[#4CC2FF66] opacity-40" />
            </div>

            <motion.h2
              className="text-3xl 
  md:text-4xl 
  lg:text-5xl 
  xl:text-6xl 
  font-semibold 
  leading-tight 
  md:leading-[1.15]  text-slate-50 mb-3"
            >
              <motion.span
                className="relative inline-block"
                initial="initial"
                whileHover={reduce ? undefined : "hover"}
              >
                <span className="relative z-10">Клиентские истории</span>

                <motion.span
                  className="pointer-events-none absolute left-0 top-0 z-0 text-[#4CC2FF] mix-blend-screen"
                  variants={glitchPrimary}
                  aria-hidden="true"
                >
                  Клиентские истории
                </motion.span>

                <motion.span
                  className="pointer-events-none absolute left-0 top-0 z-0 text-[#9B5DFF] mix-blend-screen"
                  variants={glitchSecondary}
                  aria-hidden="true"
                >
                  Клиентские истории
                </motion.span>
              </motion.span>
            </motion.h2>
          </div>

          <p
            className="  mt-4
  text-white/75
  leading-relaxed md:leading-[1.7]
  max-w-[52ch] md:max-w-[60ch] lg:max-w-[66ch]
  text-[clamp(0.98rem,0.55vw+0.88rem,1.15rem)] mx-auto "
          >
            Не “красивые слова”, а понятные кейсы: что было, что сделали и что
            получилось.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="space-y-14 md:space-y-16">
          {stories.map((story, index) => (
            <ClientStoryCard key={index} story={story} index={index} />
          ))}
        </div>
      </PageContainer>

      {/* Floating decorative element */}
      <motion.div
        className="pointer-events-none absolute top-16 right-4 md:right-10 h-20 w-20 rounded-3xl border border-[#3A7BFF33] bg-[radial-gradient(circle_at_top,_#3A7BFF33,_transparent_70%)] opacity-50"
        animate={reduce ? undefined : { rotate: 360, scale: [1, 1.08, 1] }}
        transition={
          reduce
            ? undefined
            : {
                rotate: { duration: 26, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              }
        }
      />
    </section>
  );
}
