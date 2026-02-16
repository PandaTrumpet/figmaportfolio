

"use client";

import { useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { ChevronDown, Clock, Check, Package } from "lucide-react";
import { ImageWithFallback } from "@/src/components/figma/ImageWithFallback";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
 interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  deliverables: string[];
  image: string;
  icon: string;
  details: {
    title: string;
    description: string;
  }[];
}

export function ProcessStep({ step }: { step: ProcessStep }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();

  const hiddenCount = Math.max(0, step.deliverables.length);

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: EASE }}
      className="relative"
    >
      <div className="grid grid-cols-[28px,1fr] gap-5 md:gap-7">
        {/* Timeline rail */}
        <div className="relative flex justify-center">
          <div className="absolute top-0 bottom-0 w-[2px] bg-white/10" />

          <motion.div
            className="relative z-10 mt-1 h-7 w-7 rounded-full border border-white/12 bg-white/6 backdrop-blur-xl"
            animate={
              reduce
                ? undefined
                : {
                    boxShadow: [
                      "0 0 0 rgba(76,194,255,0)",
                      "0 0 28px rgba(76,194,255,0.45)",
                      "0 0 0 rgba(76,194,255,0)",
                    ],
                  }
            }
            transition={
              reduce
                ? undefined
                : { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }
          >
            <div className="absolute inset-[6px] rounded-full bg-gradient-to-br from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]" />
          </motion.div>
        </div>

        {/* CARD */}
        <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">
          <div className="pointer-events-none absolute -inset-24 bg-[radial-gradient(circle_at_top,_rgba(58,123,255,0.18),_transparent_55%)] opacity-70" />

          {/* INNER GRID */}
          <div className="relative p-5 md:p-7">
            <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-10">
              {/* LEFT — TEXT */}
              <div className="min-w-0 flex-1">
                {/* Meta */}
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="inline-flex items-center rounded-full border border-white/12 bg-white/5 px-3 py-1 text-[11px] tracking-[0.22em] text-[#EAF2FF]">
                    {step.number}
                  </span>

                  <span className="text-xl md:text-2xl">{step.icon}</span>

                  <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-3 py-1.5">
                    <Clock className="h-4 w-4 text-[#CFE3FF]" />
                    <span className="text-xs md:text-sm text-[#D7DDEA]">
                      {step.duration}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#F5EFE7]">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm md:text-base text-[#C7CEDF]">
                  {step.subtitle}
                </p>

                <p className="mt-4 text-sm md:text-base text-[#D5DBE6]/85 leading-relaxed max-w-[70ch]">
                  {step.description}
                </p>

                {/* Result */}
                <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#4CC2FF33] bg-[#4CC2FF1a] px-4 py-2 text-sm text-[#EAF2FF]">
                  Результат этапа:
                  <span className="opacity-80">{step.deliverables?.[0]}</span>
                </div>

                {/* Accordion */}
                <div className="mt-6">
                  <button
                    type="button"
                    onClick={() => setOpen((v) => !v)}
                    className="inline-flex items-center gap-2 text-sm text-[#C7CEDF] hover:text-[#EAF2FF] transition-colors"
                    aria-expanded={open}
                  >
                    <Package className="h-4 w-4" />
                    <span>
                      {open
                        ? "Скрыть детали"
                        : `Что вы получаете${
                            hiddenCount ? ` (+ещё ${hiddenCount})` : ""
                          }`}
                    </span>
                    <motion.span
                      animate={{ rotate: open ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </motion.span>
                  </button>

                  <motion.div
                    initial={false}
                    animate={
                      open
                        ? { height: "auto", opacity: 1 }
                        : { height: 0, opacity: 0 }
                    }
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 space-y-2.5">
                      {step.deliverables.map((item: string, i: number) => (
                        <div key={i} className="flex items-start gap-3">
                          <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/10 bg-white/6">
                            <Check className="h-3.5 w-3.5 text-[#CFE3FF]" />
                          </span>
                          <span className="text-sm md:text-base text-[#D5DBE6]/85">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* RIGHT — IMAGE (small, top-aligned, desktop only) */}
              <div className="hidden lg:block shrink-0">
                <div className="relative w-[200px]">
                  <div className="pointer-events-none absolute -inset-6 rounded-3xl bg-[radial-gradient(circle_at_top,_rgba(76,194,255,0.18),_transparent_70%)] blur-2xl opacity-70" />

                  <motion.div
                    className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_18px_50px_rgba(0,0,0,0.45)]"
                    whileHover={reduce ? undefined : { y: -4 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  >
                    <div className="aspect-[4/5]">
                      <ImageWithFallback
                        src={step.image}
                        alt={step.title}
                        className="h-full w-full object-cover opacity-90"
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
