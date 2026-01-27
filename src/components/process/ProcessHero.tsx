
"use client";

import { motion, MotionValue, useReducedMotion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { HologramShapes } from "./HologramShapes";

type HeroData = {
  badge: string;
  title: string;
  subtitle: string;
};

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function ProcessHero({
  data,
  opacity,
}: {
  data: HeroData;
  opacity: MotionValue<number>;
}) {
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-[#050816] text-[#F5EFE7]">
      {/* Ambient hologram spots */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-44 -left-48 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,_rgba(58,123,255,0.55),_transparent_70%)] blur-3xl opacity-60" />
        <div className="absolute -bottom-44 -right-24 h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle_at_center,_rgba(76,194,255,0.55),_transparent_70%)] blur-3xl opacity-55" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,_rgba(155,93,255,0.38),_transparent_72%)] blur-3xl opacity-45" />
      </div>

      {/* Animated Background Grid (subtle) */}
      <div className="absolute inset-0 opacity-[0.06]">
        <motion.div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
            backgroundSize: "84px 84px",
            maskImage:
              "radial-gradient(circle at 50% 40%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 35%, rgba(0,0,0,0.0) 72%)",
            WebkitMaskImage:
              "radial-gradient(circle at 50% 40%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 35%, rgba(0,0,0,0.0) 72%)",
          }}
          animate={
            reduce
              ? undefined
              : { backgroundPosition: ["0px 0px", "84px 84px"] }
          }
          transition={
            reduce
              ? undefined
              : { duration: 34, repeat: Infinity, ease: "linear" }
          }
        />
      </div>

      {/* Subtle noise overlay (no asset) */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-soft-light">
        <div className="absolute inset-0 [background-image:radial-gradient(rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:3px_3px]" />
      </div>

      <motion.div
        className="relative z-10 max-w-[1400px] mx-auto w-full px-6 md:px-12 lg:px-20 text-center"
        style={{ opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: EASE }}
        >
          {/* Badge (glass + gradient border) */}
          <motion.div
            className="inline-block mb-10"
            animate={reduce ? undefined : { y: [0, -10, 0] }}
            transition={
              reduce
                ? undefined
                : { duration: 4.2, repeat: Infinity, ease: "easeInOut" }
            }
          >
            <div className="relative inline-flex items-center justify-center rounded-full px-6 py-3 text-[11px] md:text-xs uppercase tracking-[0.28em]">
              {/* glow */}
              <div className="pointer-events-none absolute -inset-3 rounded-full bg-[radial-gradient(circle_at_center,_rgba(76,194,255,0.45),_transparent_70%)] blur-2xl opacity-70" />
              {/* glass body */}
              <div className="relative rounded-full border border-white/10 bg-white/5 backdrop-blur-xl px-6 py-3">
                {/* gradient hairline */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(58,123,255,0.55), rgba(76,194,255,0.55), rgba(155,93,255,0.55))",
                    WebkitMask:
                      "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                    padding: "1px",
                  }}
                />
                <span className="relative text-[#EAF2FF]">{data.badge}</span>
              </div>
            </div>
          </motion.div>

          {/* Title */}
          <h1 className="mx-auto max-w-5xl text-[44px] leading-[0.92] sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tight">
            <span className="relative inline-block">
              <span className="relative z-10">{data.title}</span>

              {/* soft highlight underline */}
              <span className="pointer-events-none absolute -bottom-3 left-1/2 h-[10px] w-[72%] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,_rgba(76,194,255,0.55),_transparent_70%)] blur-xl opacity-70" />
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-10 mb-16 text-base sm:text-lg md:text-xl lg:text-2xl text-[#C7CEDF] max-w-4xl mx-auto leading-relaxed">
            {data.subtitle}
          </p>

          {/* Scroll hint */}
          <motion.div
            className="inline-flex flex-col items-center gap-3"
            animate={reduce ? undefined : { y: [0, 10, 0] }}
            transition={
              reduce
                ? undefined
                : { duration: 2.6, repeat: Infinity, ease: "easeInOut" }
            }
          >
            <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
              <div className="pointer-events-none absolute -inset-3 rounded-2xl bg-[radial-gradient(circle_at_center,_rgba(58,123,255,0.35),_transparent_70%)] blur-2xl opacity-70" />
              <ChevronDown className="relative h-6 w-6 text-[#E8F2FF] opacity-70" />
            </div>

            <p className="text-[11px] md:text-xs uppercase tracking-widest text-[#C7CEDF]/70">
              Посмотреть процесс
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Decorative shapes (keep) */}
      <HologramShapes />
    </section>
  );
}
