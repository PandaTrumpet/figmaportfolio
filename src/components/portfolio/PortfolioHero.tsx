
"use client";

import { motion } from "motion/react";
import { HologramShapes } from "../process/HologramShapes";
import { PageContainer } from "../Layout/PageContainer";
import Image from "next/image";


export function PortfolioHero() {
  return (
    <section
      className="relative min-h-screen flex items-center 
       pt-22 pb-12
        md:pt-28 md:pb-16
        lg:pt-30 lg:pb-20
         overflow-visible"
    >
      {/* <div
        className="
          pointer-events-none absolute inset-0 -z-10 overflow-hidden
          [mask-image:linear-gradient(to_bottom,transparent_0%,black_14%,black_86%,transparent_100%)]
          [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_14%,black_86%,transparent_100%)]
        "
        aria-hidden="true"
      >
      
        <div className="absolute inset-0 opacity-60">
          <div className="absolute -top-44 -left-40 h-96 w-96 bg-[radial-gradient(circle_at_center,_#3A7BFF55,_transparent_70%)] blur-3xl" />
          <div className="absolute -bottom-44 -right-32 h-[30rem] w-[30rem] bg-[radial-gradient(circle_at_center,_#4CC2FF55,_transparent_70%)] blur-3xl" />
        </div>

      
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.10) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
      </div> */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
        {/* background image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1546809059-7b1cdd47eae6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-55 saturate-[0.85]"
          />
        </div>

        {/* мягкий градиент только для читаемости (без "дна" секции) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050814]/45 via-transparent to-transparent" />

        {/* локальные glow-споты */}
        <div className="absolute inset-0 opacity-70">
          <div className="absolute -top-44 -left-44 h-[520px] w-[520px] bg-[radial-gradient(circle_at_center,_#3A7BFF44,_transparent_72%)] blur-3xl" />
          <div className="absolute top-[40%] -right-52 h-[680px] w-[680px] bg-[radial-gradient(circle_at_center,_#4CC2FF33,_transparent_72%)] blur-3xl" />
        </div>

        {/* very subtle noise */}
        <div className="absolute inset-0 opacity-[0.08] mix-blend-soft-light">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(255,255,255,0.08),_transparent_40%),radial-gradient(circle_at_70%_60%,_rgba(255,255,255,0.06),_transparent_45%)]" />
        </div>

        {/* плавный fade вниз */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#020410]" />
      </div>

      <PageContainer className="relative z-10 w-full max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Accent line */}
          <motion.div
            className="w-20 h-[2px] bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF] mb-10"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />

          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] mb-10 font-semibold tracking-tight text-[#F2F4FA]">
            Избранные проекты
          </h1>

          <p className="text-xl md:text-2xl text-[#C7CEDF] max-w-3xl leading-relaxed">
            Примеры решений, которые мы создавали для реального бизнеса. Каждый
            проект — результат диалога, задач и практичного подхода.
          </p>
        </motion.div>
      </PageContainer>

      {/* Decorative element */}
      <motion.div
        className="pointer-events-none absolute top-20 right-16 w-40 h-40 rounded-3xl border border-[#3A7BFF33] bg-[radial-gradient(circle_at_top,_#3A7BFF22,_transparent_70%)] opacity-40"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        aria-hidden="true"
      />

      {/* Background glow */}
      <div
        className="pointer-events-none absolute -top-40 -left-40 h-96 w-96
        bg-[radial-gradient(circle_at_center,_#4CC2FF33,_transparent_70%)] blur-3xl opacity-60"
        aria-hidden="true"
      />

   
    </section>
  );
}
