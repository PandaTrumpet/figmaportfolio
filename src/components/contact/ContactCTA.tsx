

"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { PageContainer } from "../Layout/PageContainer";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function ContactCTA({ data }: { data: any }) {
  const reduce = useReducedMotion();

  return (
    <section
      className="relative  pt-10 pb-10
        md:pt-14 md:pb-14
        lg:pt-16 lg:pb-16bg-transparent text-[#F5EFE7] overflow-visible"
    >
      {/* ultra-subtle local texture (masked) — no seams */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 92px), repeating-linear-gradient(90deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 92px)",
            maskImage:
              "radial-gradient(circle at 50% 45%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 42%, rgba(0,0,0,0) 80%)",
            WebkitMaskImage:
              "radial-gradient(circle at 50% 45%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 42%, rgba(0,0,0,0) 80%)",
          }}
        />
      </div>

      {/* tiny local accents (soft) */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute -top-24 left-[8%] h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,_rgba(58,123,255,0.14),_transparent_70%)] blur-3xl" />
        <div className="absolute -bottom-28 right-[10%] h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,_rgba(76,194,255,0.12),_transparent_70%)] blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,_rgba(155,93,255,0.10),_transparent_70%)] blur-3xl" />
      </div>

      <PageContainer className="relative z-10 max-w-[1200px]">
        {/* main card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: reduce ? 0 : 1, ease: EASE }}
          viewport={{ once: true, margin: "-120px" }}
          className="relative overflow-hidden rounded-3xl border border-white/10
                     bg-gradient-to-b from-[#060A13] via-[#050816] to-[#02030A]
                     p-8 md:p-12 lg:p-14 shadow-[0_26px_90px_rgba(0,0,0,0.92)] backdrop-blur-xl"
        >
          {/* inner glow */}
          <motion.div
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#3A7BFF22] via-[#4CC2FF16] to-[#9B5DFF16] -z-10"
            initial={{ opacity: 0.55 }}
            whileHover={{ opacity: 0.95 }}
            transition={{ duration: 0.28 }}
          />

          {/* sheen */}
          <motion.div
            className="pointer-events-none absolute -inset-10 bg-[linear-gradient(115deg,_transparent_0%,_rgba(255,255,255,0.18)_30%,_transparent_60%)] mix-blend-screen -z-10"
            initial={{ x: "-140%" }}
            whileHover={{ x: "140%" }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
          />

          {/* contour */}
          <div
            className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent"
            style={{
              background:
                "linear-gradient(135deg, rgba(58,123,255,0.85), rgba(76,194,255,0.75), rgba(155,93,255,0.65))",
              WebkitMask:
                "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
              padding: "1px",
              opacity: 0.55,
            }}
          />

          <div className="text-center">
            {/* top accent line */}
            <motion.div
              className="mx-auto mb-7 h-[2px] w-20 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]"
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: 80, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: reduce ? 0 : 0.8, ease: EASE }}
            />

            <h2
              className="text-3xl 
  md:text-4xl 
  lg:text-5xl 
  xl:text-6xl 
  font-semibold 
  leading-tight 
  md:leading-[1.15]  text-slate-50 mb-3"
            >
              {data.title}
            </h2>

            <p
              className="  mt-4
  text-white/75
  leading-relaxed md:leading-[1.7]
  max-w-[52ch] md:max-w-[60ch] lg:max-w-[66ch]
  text-[clamp(0.98rem,0.55vw+0.88rem,1.15rem)] mb-10  mx-auto "
            >
              {data.subtitle}
            </p>

            <motion.a
              href={data.cta?.href || "#contact"}
              className="
    group relative inline-flex items-center justify-center gap-3
    overflow-hidden rounded-full
    px-10 py-4 md:px-12 md:py-4.5
    text-sm md:text-base font-medium
    text-[#050816]

    shadow-[0_0_40px_rgba(76,194,255,0.55)]
    hover:shadow-[0_0_65px_rgba(76,194,255,0.85)]
    transition-shadow
  "
              whileHover={reduce ? undefined : { scale: 1.03 }}
              whileTap={reduce ? undefined : { scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              aria-label={data.cta?.label || "Связаться"}
            >
              {/* Unified gradient palette */}
              <span className="absolute inset-0 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]" />

              {/* Unified hover highlight */}
              <span
                className="
      pointer-events-none absolute inset-0 rounded-full
      bg-white/10 opacity-0
      group-hover:opacity-100 transition-opacity
    "
                aria-hidden="true"
              />

              <span className="relative z-10 inline-flex items-center gap-3">
                <MessageCircle className="h-5 w-5" />
                <span>{data.cta?.label || "Написать в WhatsApp"}</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
            </motion.a>

            {/* stats */}
            {Array.isArray(data.stats) && data.stats.length > 0 && (
              <div className="mt-12 grid md:grid-cols-3 gap-6 md:gap-8">
                {data.stats.map((stat: any, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: reduce ? 0 : 0.6,
                      delay: reduce ? 0 : index * 0.08,
                      ease: EASE,
                    }}
                    viewport={{ once: true, margin: "-120px" }}
                    className="relative rounded-3xl border border-white/10 bg-white/5 p-6 md:p-7 backdrop-blur-xl overflow-hidden"
                  >
                    <div className="pointer-events-none absolute -inset-10 bg-[radial-gradient(circle_at_center,_rgba(76,194,255,0.22),_transparent_70%)] blur-2xl opacity-40" />
                    <p className="relative z-10 text-3xl md:text-4xl font-semibold text-[#F2F4FA] mb-2">
                      {stat.value}
                    </p>
                    <p className="relative z-10 text-[11px] md:text-xs tracking-[0.22em] text-[#AEB8CC]">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </PageContainer>
    </section>
  );
}
