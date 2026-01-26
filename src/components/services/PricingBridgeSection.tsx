"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function PricingBridgeSection() {
  return (
    <section className="relative overflow-hidden bg-[#050816] px-6 md:px-12 lg:px-20 py-16 md:py-20">
      {/* glow */}
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute -top-36 left-10 h-72 w-72 bg-[radial-gradient(circle_at_center,_#3A7BFF55,_transparent_70%)] blur-3xl" />
        <div className="absolute -bottom-44 right-6 h-96 w-96 bg-[radial-gradient(circle_at_center,_#4CC2FF55,_transparent_70%)] blur-3xl" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto rounded-[36px] border border-white/10 bg-gradient-to-b from-[#060A13] via-[#050816] to-[#02030A] p-8 md:p-12 shadow-[0_26px_80px_rgba(0,0,0,0.85)] backdrop-blur-xl">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-2xl">
            <div className="mb-4 h-[2px] w-20 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]" />
            <h3 className="text-2xl md:text-4xl font-semibold tracking-tight text-[#F5EFE7] mb-3">
              Посмотреть пакеты и цены
            </h3>
            <p className="text-sm md:text-lg text-[#C7CEDF] opacity-90 leading-relaxed">
              На странице Pricing — уровни, сроки, что входит и варианты
              кастомизации под ваш бизнес.
            </p>
          </div>

          <motion.a
            href="/pricing"
            className="relative inline-flex items-center justify-center overflow-hidden rounded-full px-10 py-3.5 md:px-12 md:py-4 text-sm md:text-base font-medium text-[#050816] shadow-[0_0_40px_rgba(76,194,255,0.55)]"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]" />
            <motion.span
              className="absolute inset-0 bg-[linear-gradient(120deg,_transparent_0%,_white_20%,_transparent_40%)] opacity-0"
              initial={{ x: "-110%" }}
              whileHover={{ x: "110%", opacity: 0.55 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            />
            <span className="relative z-10 flex items-center gap-2">
              Перейти к Pricing
              <ArrowRight className="h-5 w-5" />
            </span>
          </motion.a>
        </div>
      </div>

      <div className="pointer-events-none absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
