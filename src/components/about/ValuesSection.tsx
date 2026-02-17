

"use client";

import { motion, useReducedMotion } from "motion/react";
import { ValueCard } from "./ValueCard";
import { PageContainer } from "../Layout/PageContainer";

type ValueItem = {
  icon: string;
  title: string;
  description: string;
};

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function ValuesSection({ values }: { values: ValueItem[] }) {
  const reduce = useReducedMotion();

  return (
    <section
      className="relative overflow-visible  pt-10 pb-10
        md:pt-14 md:pb-14
        lg:pt-16 lg:pb-16 text-slate-100"
    >
      {/* BACKGROUND (full-bleed, clip only background) */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* background spots */}
        <div className="absolute inset-0 opacity-60">
          <div className="absolute -top-44 -left-40 h-96 w-96 bg-[radial-gradient(circle_at_center,_#3A7BFF55,_transparent_70%)] blur-3xl" />
          <div className="absolute -bottom-52 -right-24 h-[520px] w-[520px] bg-[radial-gradient(circle_at_center,_#4CC2FF55,_transparent_70%)] blur-3xl" />
        </div>

        {/* grid overlay (local, softer) */}
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:64px_64px]" />

        {/* gentle fade so the section never ends with a hard edge */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#020410]" />
      </div>

      <PageContainer className="relative z-10">
        {/* Header */}
        <motion.div
          initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          viewport={{ once: true, margin: "-120px" }}
          className="mb-14 text-center md:mb-16"
        >
          {/* <motion.div
            className="mx-auto mb-6 h-[2px] w-20 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.9, delay: 0.12, ease: EASE }}
            viewport={{ once: true }}
          /> */}

          <h2
            className="mb-3 text-3xl 
  md:text-4xl 
  lg:text-5xl 
  xl:text-6xl 
  font-semibold 
  leading-tight 
  md:leading-[1.15]  text-slate-50   "
          >
            Как мы работаем
          </h2>

          <p
            className="mx-auto  mt-4
  text-white/75
  leading-relaxed md:leading-[1.7]
  max-w-[52ch] md:max-w-[60ch] lg:max-w-[66ch]
  text-[clamp(0.98rem,0.55vw+0.88rem,1.15rem)]"
          >
            Чёткие сроки, прозрачный процесс и фокус на заявках. Без «магии» —
            только понятные шаги и измеримый результат.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-7 md:grid-cols-2 md:gap-8">
          {values.map((value, index) => (
            <ValueCard
              key={`${value.title}-${index}`}
              value={value}
              index={index}
            />
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
