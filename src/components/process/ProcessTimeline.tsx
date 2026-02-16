

"use client";

import { motion } from "motion/react";
import { TimelineFlow } from "./TimelineFlow";
import { PageContainer } from "../Layout/PageContainer";



export function ProcessTimeline({ timeline }: { timeline: any }) {
  return (
    <section
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
        {/* soft background spots */}
        <div className="absolute inset-0 opacity-60">
          <div className="absolute -top-44 -left-40 h-[520px] w-[520px] bg-[radial-gradient(circle_at_center,_rgba(58,123,255,0.28),_transparent_65%)] blur-3xl" />
          <div className="absolute -bottom-52 -right-36 h-[620px] w-[620px] bg-[radial-gradient(circle_at_center,_rgba(76,194,255,0.22),_transparent_70%)] blur-3xl" />
        </div>

        {/* optional subtle grid so this section blends into global */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.10) 1px, transparent 1px)",
            backgroundSize: "88px 88px",
          }}
        />
      </div>

      {/* decorative grid (full-bleed, optional) */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden="true"
      />

      <PageContainer className="max-w-[1200px]">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-20"
          >
            <motion.div
              className="mx-auto mb-6 h-[2px] w-20 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              viewport={{ once: true }}
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
              {timeline.title}
            </h2>

            {timeline.subtitle ? (
              <p className="mt-4 text-base md:text-xl text-[#C7CEDF] max-w-3xl mx-auto leading-relaxed opacity-80">
                {timeline.subtitle}
              </p>
            ) : null}
          </motion.div>

          <TimelineFlow phases={timeline.phases} />
        </div>
      </PageContainer>
    </section>
  );
}
