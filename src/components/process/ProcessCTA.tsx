

"use client";

import dynamic from "next/dynamic";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, Target, Zap } from "lucide-react";
import { PageContainer } from "../Layout/PageContainer";

const ParticlesBackground = dynamic(
  () =>
    import("@/src/components/ParticlesBackground").then(
      (m) => m.ParticlesBackground,
    ),
  { ssr: false },
);

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function ProcessCTA() {
  return (
    <section
      id="contact"
      className="relative  pt-10 pb-10
        md:pt-14 md:pb-14
        lg:pt-16 lg:pb-16 overflow-visible text-[#F5EFE7]"
    >
      {/* LOCAL FX (clip only background, not content) */}
      <div
        className="
          pointer-events-none absolute inset-0 -z-10 overflow-hidden
          [mask-image:linear-gradient(to_bottom,transparent_0%,black_12%,black_88%,transparent_100%)]
          [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_12%,black_88%,transparent_100%)]
        "
        aria-hidden="true"
      >
        {/* background spots */}
        <div className="absolute inset-0 opacity-60">
          <div className="absolute -top-44 -left-40 h-[520px] w-[520px] bg-[radial-gradient(circle_at_center,_rgba(58,123,255,0.26),_transparent_65%)] blur-3xl" />
          <div className="absolute -bottom-56 -right-40 h-[620px] w-[620px] bg-[radial-gradient(circle_at_center,_rgba(76,194,255,0.22),_transparent_70%)] blur-3xl" />
        </div>

        {/* subtle grid */}
        <div className="absolute inset-0 opacity-[0.045]">
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, rgba(200,220,255,0.55) 0px, rgba(200,220,255,0.55) 1px, transparent 1px, transparent 64px), repeating-linear-gradient(90deg, rgba(200,220,255,0.55) 0px, rgba(200,220,255,0.55) 1px, transparent 1px, transparent 64px)",
            }}
            animate={{ backgroundPosition: ["0px 0px", "64px 64px"] }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </div>

      <PageContainer className="max-w-[1200px]">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE }}
            viewport={{ once: true }}
            className="text-center"
          >
            {/* icon row */}
            <div className="flex items-center justify-center gap-4 md:gap-6 mb-10 md:mb-12">
              <FloatingIcon
                icon={
                  <Target className="h-6 w-6 md:h-7 md:w-7 text-[#EAF2FF]" />
                }
                delay={0}
              />
              <FloatingIcon
                icon={<Zap className="h-6 w-6 md:h-7 md:w-7 text-[#EAF2FF]" />}
                delay={0.4}
              />
              <FloatingIcon
                icon={
                  <Sparkles className="h-6 w-6 md:h-7 md:w-7 text-[#EAF2FF]" />
                }
                delay={0.9}
              />
            </div>

            <h2
              className="text-3xl 
  md:text-4xl 
  lg:text-5xl 
  xl:text-6xl 
  font-semibold 
  leading-tight 
  md:leading-[1.15]  text-slate-50 mb-3"
            >
              Готовы начать
              <br />
              работу?
            </h2>

            <p
              className="  mt-4
  text-white/75
  leading-relaxed md:leading-[1.7]
  max-w-[52ch] md:max-w-[60ch] lg:max-w-[66ch]
  text-[clamp(0.98rem,0.55vw+0.88rem,1.15rem)] mx-auto "
            >
              Запишитесь на бесплатную консультацию. Обсудим ваш проект и
              соберём понятный план: сайт + WhatsApp + автоматизация.
            </p>

            <div className="mt-10 md:mt-12 flex items-center justify-center">
              {/* <motion.a
                href="#contact"
                className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full
                           px-9 py-3.5 md:px-12 md:py-4 text-sm md:text-base font-medium
                           text-[#050816] shadow-[0_0_46px_rgba(76,194,255,0.55)]"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]" />

                <motion.span
                  className="absolute inset-0 bg-[linear-gradient(120deg,_transparent_0%,_white_20%,_transparent_40%)] opacity-0"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%", opacity: 0.55 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                />

                <span className="relative z-10">Начать проект</span>
                <ArrowRight className="relative z-10 h-5 w-5 md:h-6 md:w-6 transition-transform group-hover:translate-x-1" />
              </motion.a> */}
              <motion.a
                href="#contact"
                className="
    group relative inline-flex items-center justify-center gap-3
    overflow-hidden rounded-full
    px-9 py-3.5 md:px-12 md:py-4
    text-sm md:text-base font-medium
    text-[#050816]

    shadow-[0_0_40px_rgba(76,194,255,0.55)]
    hover:shadow-[0_0_65px_rgba(76,194,255,0.85)]
    transition-shadow
  "
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
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

                <span className="relative z-10">Начать проект</span>
                <ArrowRight className="relative z-10 h-5 w-5 md:h-6 md:w-6 transition-transform group-hover:translate-x-1" />
              </motion.a>
            </div>

            <p className="mt-6 text-xs md:text-sm text-[#C7CEDF]/75">
              Ответим в течение 24 часов. Без навязчивых продаж.
            </p>
          </motion.div>
        </div>
      </PageContainer>

      {/* Particles layer — visible but behind content */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden="true"
      >
        <ParticlesBackground />
      </div>

      {/* floating accents (aligned to global padding) */}
      <motion.div
        className="pointer-events-none absolute top-16 left-6 md:left-12 lg:left-20 z-0 h-20 w-20 rounded-3xl border border-[#3A7BFF33]
                   bg-[radial-gradient(circle_at_top,_rgba(58,123,255,0.22),_transparent_70%)] opacity-50"
        animate={{ rotate: 360, scale: [1, 1.08, 1] }}
        transition={{
          rotate: { duration: 34, repeat: Infinity, ease: "linear" },
          scale: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
        }}
        aria-hidden="true"
      />
      <motion.div
        className="pointer-events-none absolute bottom-16 right-6 md:right-12 lg:right-20 z-0 h-24 w-24 rounded-[32px] border border-[#4CC2FF33]
                   bg-[radial-gradient(circle_at_top,_rgba(76,194,255,0.20),_transparent_70%)] opacity-45"
        animate={{ rotate: -360, scale: [1, 1.06, 1] }}
        transition={{
          rotate: { duration: 44, repeat: Infinity, ease: "linear" },
          scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
        }}
        aria-hidden="true"
      />
    </section>
  );
}

function FloatingIcon({
  icon,
  delay,
}: {
  icon: React.ReactNode;
  delay: number;
}) {
  return (
    <motion.div
      className="relative inline-flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-2xl border border-white/15
                 bg-[radial-gradient(circle_at_top,_#3A7BFF3b,_#050816)] overflow-hidden
                 shadow-[0_0_44px_rgba(58,123,255,0.55)]"
      animate={{ y: [0, -10, 0], rotate: [0, 8, 0] }}
      transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay }}
      aria-hidden="true"
    >
      <span className="relative z-10">{icon}</span>
      <motion.span
        className="absolute inset-0 bg-gradient-to-br from-transparent via-[#3A7BFF66] to-[#4CC2FF66]"
        initial={{ opacity: 0.35 }}
        whileHover={{ opacity: 0.75 }}
        transition={{ duration: 0.25 }}
      />
    </motion.div>
  );
}
