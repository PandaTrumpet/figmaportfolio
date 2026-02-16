

"use client";

import { motion, useReducedMotion } from "motion/react";
import {  ArrowRight, Sparkles } from "lucide-react";
import { PageContainer } from "../Layout/PageContainer";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function CtaSection() {
  const reduce = useReducedMotion();

  return (
    <section
      className="
        relative overflow-visible
        pt-10 pb-10
        md:pt-14 md:pb-14
        lg:pt-16 lg:pb-16
      "
      aria-label="Call to action"
    >
      {/* BACKGROUND (full-bleed, clip only background) */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* background spots */}
        <div className="absolute inset-0 opacity-60">
          <div className="absolute -top-44 -left-40 h-96 w-96 bg-[radial-gradient(circle_at_center,_#3A7BFF55,_transparent_70%)] blur-3xl" />
          <div className="absolute -bottom-52 -right-24 h-[520px] w-[520px] bg-[radial-gradient(circle_at_center,_#4CC2FF55,_transparent_70%)] blur-3xl" />
        </div>

        {/* grid overlay (softer) */}
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:64px_64px]" />

        {/* gentle fade so the section never “cuts” */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-b from-transparent to-[#020410]" />
      </div>

      <PageContainer className="relative z-10 max-w-[1100px] text-center">
        <motion.div
          initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: EASE }}
          viewport={{ once: true, margin: "-120px" }}
        >
          {/* icon badge */}
          <motion.div
            className="
              inline-flex items-center justify-center
              h-14 w-14 md:h-16 md:w-16
              rounded-2xl
              border border-white/15
              bg-[radial-gradient(circle_at_top,_#3A7BFF3b,_#050816)]
              shadow-[0_0_55px_rgba(76,194,255,0.35)]
              mb-6 md:mb-8
            "
            animate={reduce ? undefined : { y: [0, -6, 0] }}
            transition={
              reduce
                ? undefined
                : { duration: 3.2, repeat: Infinity, ease: "easeInOut" }
            }
            aria-hidden="true"
          >
            <Sparkles className="h-7 w-7 md:h-8 md:w-8 text-[#E8F2FF]" />
          </motion.div>

          <h2
            className="mb-3 text-3xl 
  md:text-4xl 
  lg:text-5xl 
  xl:text-6xl 
  font-semibold 
  leading-tight 
  md:leading-[1.15]  text-slate-50   "
          >
            Давайте запустим сайт,
            <br className="hidden sm:block" /> который приводит заявки
          </h2>

          <p className="mx-auto mb-10 max-w-3xl text-base leading-relaxed text-[#C7CEDF] opacity-90 md:mb-12 md:text-xl lg:text-2xl">
            20 минут — и у вас будет понятный план: что сделать на сайте, как
            вести в WhatsApp, и где подключить автоматизацию, чтобы не терять
            клиентов.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row md:gap-5">
            {/* Primary CTA */}
            {/* <motion.a
              href="#contact"
              className="
                relative inline-flex items-center justify-center gap-3
                overflow-hidden rounded-full
                px-8 py-4 md:px-10 md:py-5
                text-sm md:text-base font-medium
                text-[#050816]
                shadow-[0_0_45px_rgba(76,194,255,0.55)]
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4CC2FF]/70 focus-visible:ring-offset-0
              "
              whileHover={reduce ? undefined : { scale: 1.03 }}
              whileTap={reduce ? undefined : { scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              aria-label="Обсудить задачу"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]" />
              <motion.span
                className="absolute inset-0 bg-[linear-gradient(120deg,_transparent_0%,_white_20%,_transparent_40%)] opacity-0"
                initial={{ x: "-120%" }}
                whileHover={reduce ? undefined : { x: "120%", opacity: 0.55 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                aria-hidden="true"
              />
              <span className="relative z-10">Обсудить задачу</span>
              <ArrowUpRight className="relative z-10 h-4 w-4" />
            </motion.a> */}

            <motion.a
              href="#contact"
              className="
    relative group inline-flex items-center justify-center gap-3
    overflow-hidden rounded-full
    px-8 py-4 md:px-10 md:py-5
    text-sm md:text-base font-medium
    text-[#050816]

    shadow-[0_0_40px_rgba(76,194,255,0.55)]
    hover:shadow-[0_0_65px_rgba(76,194,255,0.85)]
    transition-shadow

    focus-visible:outline-none
    focus-visible:ring-2 focus-visible:ring-[#4CC2FF]/70
    focus-visible:ring-offset-0
  "
              whileHover={reduce ? undefined : { scale: 1.03 }}
              whileTap={reduce ? undefined : { scale: 0.97 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              aria-label="Обсудить задачу"
            >
              {/* Main gradient — fixed palette */}
              <span className="absolute inset-0 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]" />

              {/* Depth / glass layer */}
              <span
                className="
      pointer-events-none absolute inset-0
      [background:linear-gradient(to_bottom,rgba(255,255,255,0.28),rgba(255,255,255,0.06)_45%,rgba(0,0,0,0.12))]
      mix-blend-overlay
    "
                aria-hidden="true"
              />

              {/* Hover soft highlight — unified */}
              <span
                className="
      pointer-events-none absolute inset-0 rounded-full
      bg-white/10 opacity-0
      group-hover:opacity-100 transition-opacity
    "
                aria-hidden="true"
              />

              <span className="relative z-10">Обсудить задачу</span>
              <ArrowRight className="relative z-10 h-4 w-4 opacity-90 transition-transform group-hover:translate-x-1" />
            </motion.a>

            {/* Secondary CTA */}
            {/* <motion.a
              href="#cases"
              className="
                inline-flex items-center gap-2
                rounded-full
                px-6 py-3 md:px-7 md:py-4
                border border-white/10
                bg-white/5 backdrop-blur-md
                text-sm md:text-base
                text-white/80 hover:text-white
                hover:border-white/15 hover:bg-white/7
                transition
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/25
              "
              whileHover={reduce ? undefined : { y: -2 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              aria-label="Посмотреть кейсы"
            >
              <span>Посмотреть кейсы</span>
              <ArrowRight className="h-4 w-4 opacity-90" />
            </motion.a> */}

            <motion.a
              href="#cases"
              className="
    relative group inline-flex items-center gap-2
    rounded-full
    px-6 py-3 md:px-7 md:py-4
    text-sm md:text-base font-medium
    text-[#F5EFE7]
    backdrop-blur-sm
    transition-all
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/25
  "
              whileHover={reduce ? undefined : { y: -2 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              aria-label="Посмотреть кейсы"
            >
              {/* Gradient border */}
              <span
                className="
      pointer-events-none absolute inset-0 rounded-full p-[1px]
      bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]
    "
              >
                <span className="block h-full w-full rounded-full bg-[#050608]" />
              </span>

              {/* Soft inner glow */}
              <span
                className="
      pointer-events-none absolute inset-0 rounded-full
      bg-[radial-gradient(circle_at_center,rgba(76,194,255,0.25),transparent_60%)]
      opacity-0 group-hover:opacity-100
      transition-opacity
    "
              />

              {/* Outer neon glow */}
              <span
                className="
      pointer-events-none absolute inset-0 rounded-full
      opacity-0 group-hover:opacity-100
      transition-opacity
      shadow-[0_0_34px_rgba(76,194,255,0.45)]
    "
              />

              <span className="relative z-10">Посмотреть кейсы</span>
              {/* <ArrowRight className="relative z-10 h-4 w-4 opacity-90 transition-transform group-hover:translate-x-1" /> */}
            </motion.a>
          </div>

          <p className="mt-6 text-xs text-white/55 sm:text-sm">
            Без «длинных созвонов» — коротко и по делу.
          </p>
        </motion.div>
      </PageContainer>

      {/* decorative quotes (full-bleed) */}
      <div
        className="pointer-events-none absolute left-6 top-14 select-none text-[10rem] leading-none text-white opacity-[0.02] md:left-10 md:text-[14rem]"
        aria-hidden="true"
      >
        &rdquo;
      </div>
      <div
        className="pointer-events-none absolute bottom-10 right-6 select-none text-[10rem] leading-none text-white opacity-[0.02] md:right-10 md:text-[14rem]"
        aria-hidden="true"
      >
        &rdquo;
      </div>
    </section>
  );
}
