

"use client";

import { motion } from "motion/react";
import { Check, Shield } from "lucide-react";
import { PageContainer } from "../Layout/PageContainer";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
interface GuaranteeSectionProps {
 
    title: string;
    points: string[];

}
export function GuaranteeSection({ guarantee }: { guarantee: GuaranteeSectionProps }) {
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
      ></div>

      <PageContainer className="max-w-[1200px]">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* deep glow under "certificate" */}
            <motion.div
              className="absolute -inset-[14px] rounded-[38px] bg-[radial-gradient(circle_at_top,_rgba(58,123,255,0.55),_transparent_70%)] blur-2xl -z-20"
              initial={{ opacity: 0.28, scale: 1 }}
              whileHover={{ opacity: 0.95, scale: 1.06 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            />

            {/* hover aura */}
            <motion.div
              className="absolute inset-0 rounded-[44px] bg-[radial-gradient(circle_at_center,_rgba(76,194,255,0.45),_transparent_65%)] blur-3xl -z-10 pointer-events-none"
              initial={{ opacity: 0, scale: 0.95 }}
              whileHover={{ opacity: 0.8, scale: 1.04 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            />

            {/* certificate card */}
            <motion.div
              className="relative rounded-[32px] border border-white/10
                         bg-gradient-to-b from-[#060A13] via-[#050816] to-[#02030A]
                         shadow-[0_26px_90px_rgba(0,0,0,0.9)] backdrop-blur-xl overflow-hidden
                         p-8 md:p-12 lg:p-14"
              whileHover={{ y: -10, boxShadow: "0 36px 140px rgba(0,0,0,1)" }}
              transition={{ duration: 0.28, ease: "easeOut" }}
            >
              {/* inner glow */}
              <motion.div
                className="pointer-events-none absolute inset-0 rounded-[32px] bg-[radial-gradient(circle_at_top,_rgba(76,194,255,0.14),_transparent_62%)] -z-10"
                initial={{ opacity: 0.35 }}
                whileHover={{ opacity: 0.9 }}
                transition={{ duration: 0.3 }}
              />

              {/* sheen */}
              <motion.div
                className="pointer-events-none absolute -inset-10 bg-[linear-gradient(115deg,_transparent_0%,_rgba(255,255,255,0.18)_30%,_transparent_60%)] mix-blend-screen -z-10"
                initial={{ x: "-140%" }}
                whileHover={{ x: "140%" }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
              />

              {/* gradient outline (mask) */}
              <motion.div
                className="pointer-events-none absolute inset-0 rounded-[32px] border border-transparent z-10"
                initial={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.06)" }}
                whileHover={{
                  boxShadow:
                    "0 0 0 1px rgba(76,194,255,0.7), 0 0 52px rgba(76,194,255,1)",
                }}
                transition={{ duration: 0.25 }}
                style={{
                  background:
                    "linear-gradient(135deg, #3A7BFF, #4CC2FF, #9B5DFF)",
                  WebkitMask:
                    "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                  padding: "1px",
                }}
              />

              <div className="relative z-20">
                {/* icon */}
                <div className="flex items-center justify-center mb-8 md:mb-10">
                  <motion.div
                    className="relative inline-flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-2xl border border-white/15
                               bg-[radial-gradient(circle_at_top,_#3A7BFF3b,_#050816)] overflow-hidden
                               shadow-[0_0_44px_rgba(58,123,255,0.65)]"
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      duration: 26,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    aria-hidden="true"
                  >
                    <Shield className="relative z-10 h-8 w-8 md:h-10 md:w-10 text-[#EAF2FF]" />
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#3A7BFF66] to-[#4CC2FF66] opacity-50" />
                  </motion.div>
                </div>

                <h2
                  className="text-3xl 
  md:text-4xl 
  lg:text-5xl 
  xl:text-6xl 
  font-semibold 
  leading-tight 
  md:leading-[1.15]  text-slate-50  text-center mb-10 md:mb-12"
                >
                  {guarantee.title}
                </h2>

                <div className="grid md:grid-cols-2 gap-5 md:gap-7">
                  {guarantee.points.map((point: string, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -18 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.08,
                        ease: EASE,
                      }}
                      viewport={{ once: true }}
                      className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5 backdrop-blur-xl"
                    >
                      <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5">
                        <Check className="h-4 w-4 text-[#CFE3FF]" />
                      </span>

                      <p className="text-sm md:text-base lg:text-lg leading-relaxed text-[#D5DBE6] opacity-90">
                        {point}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-10 md:mt-12 h-[2px] w-24 mx-auto bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF] opacity-70" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </PageContainer>
    </section>
  );
}
