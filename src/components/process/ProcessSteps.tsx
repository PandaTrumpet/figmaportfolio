

"use client";

import { motion } from "motion/react";
import { ProcessStep } from "./ProcessStep";
import { PageContainer } from "../Layout/PageContainer";
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
export function ProcessSteps({ steps }: { steps: ProcessStep[] }) {
  return (
    <section
      className="relative  pt-10 pb-10
        md:pt-14 md:pb-14
        lg:pt-16 lg:pb-16 overflow-visible"
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
        {/* ambient spots */}
        <div className="absolute inset-0 opacity-60">
          <div className="absolute -top-44 -left-40 h-96 w-96 bg-[radial-gradient(circle_at_center,_rgba(58,123,255,0.55),_transparent_70%)] blur-3xl" />
          <div className="absolute -bottom-40 -right-16 h-[520px] w-[520px] bg-[radial-gradient(circle_at_center,_rgba(76,194,255,0.5),_transparent_70%)] blur-3xl" />
        </div>

        {/* optional subtle grid (very soft, keeps continuity) */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.10) 1px, transparent 1px)",
            backgroundSize: "84px 84px",
          }}
        />
      </div>

      <PageContainer className="max-w-[1200px]">
        <div className="relative z-10 text-[#F5EFE7]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-24"
          >
            <motion.div
              className="mx-auto mb-8 h-[2px] w-20 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
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
              5 шагов — от идеи до заявок в WhatsApp
            </h2>

            <p
              className="  mt-4
  text-white/75
  leading-relaxed md:leading-[1.7]
  md:max-w-[60ch] lg:max-w-[66ch]
  text-[clamp(0.98rem,0.55vw+0.88rem,1.15rem)] max-w-3xl mx-auto "
            >
              Прозрачно по срокам и результатам: вы всегда понимаете, что
              происходит на проекте и что получаете на каждом этапе.
            </p>
          </motion.div>

          {/* <div className="space-y-24 md:space-y-32 lg:space-y-40">
            {steps.map((step, index) => (
              <ProcessStep key={index} step={step} />
            ))}
          </div> */}
       
          <div className="space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10 xl:space-y-12">
            {steps.map((step, index) => (
              <ProcessStep key={index} step={step} />
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
