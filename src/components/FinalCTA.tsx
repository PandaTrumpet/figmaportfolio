

// "use client";

// import { ArrowRight, Mail } from "lucide-react";
// import { motion, useReducedMotion } from "motion/react";

// const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

// export function FinalCTA() {
//   const reduce = useReducedMotion();

//   return (
//     <section
//       id="contact"
//       className="
//         relative min-h-screen flex items-center 
//         px-6 md:px-12 lg:px-20 py-32 overflow-visible
        
//         text-slate-100
//       "
//       aria-labelledby="final-cta-title"
//     >
//       {/* Neon waves */}
//       <div
//         className="pointer-events-none absolute -top-40 right-[-10%] h-96 w-96 rounded-full opacity-60 blur-3xl"
//         style={{
//           background:
//             "radial-gradient(circle, rgba(76,194,255,0.9), transparent 60%)",
//         }}
//       />
//       <div
//         className="pointer-events-none absolute bottom-[-20%] left-[-10%] h-[26rem] w-[26rem] rounded-full opacity-60 blur-3xl"
//         style={{
//           background:
//             "radial-gradient(circle, rgba(58,123,255,0.85), transparent 55%)",
//         }}
//       />

//       {/* Subtle grid overlay (same language as Hero) */}
//       <div className="pointer-events-none absolute inset-0 opacity-[0.10]">
//         <div
//           className="h-full w-full"
//           style={{
//             backgroundImage:
//               "linear-gradient(rgba(51,65,85,0.28) 1px, transparent 1px), linear-gradient(90deg, rgba(51,65,85,0.28) 1px, transparent 1px)",
//             backgroundSize: "80px 80px",
//           }}
//         />
//       </div>

//       <div className="relative z-10 max-w-[1200px] mx-auto text-center">
//         {/* Decorative top line */}
//         <motion.div
//           initial={reduce ? undefined : { width: 0, opacity: 0 }}
//           whileInView={reduce ? undefined : { width: 96, opacity: 1 }}
//           viewport={{ once: true, amount: 0.4 }}
//           transition={{ duration: 0.8, ease: EASE }}
//           className="mx-auto mb-10 h-0.5 w-24 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-transparent"
//         />

//         {/* Headline */}
//         <motion.h2
//           id="final-cta-title"
//           initial={
//             reduce ? undefined : { opacity: 0, y: 18, filter: "blur(10px)" }
//           }
//           whileInView={
//             reduce ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }
//           }
//           viewport={{ once: true, amount: 0.35 }}
//           transition={{ duration: 0.85, ease: EASE }}
//           className="text-[clamp(2.2rem,5.8vw,5.2rem)] leading-[1.05] mb-6 max-w-4xl mx-auto text-slate-100"
//         >
//           Сделаем сайт и автоматизацию, которые работают на ваш бизнес
//         </motion.h2>

//         {/* Subheading */}
//         <motion.p
//           initial={
//             reduce ? undefined : { opacity: 0, y: 14, filter: "blur(10px)" }
//           }
//           whileInView={
//             reduce ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }
//           }
//           viewport={{ once: true, amount: 0.35 }}
//           transition={{ duration: 0.85, delay: 0.08, ease: EASE }}
//           className="text-lg md:text-2xl text-slate-300/90 mb-10 max-w-2xl mx-auto leading-relaxed"
//         >
//           Покажем, как сайт может приводить клиентов в WhatsApp, фиксировать
//           заявки и снижать ручную рутину — без сложных слов и лишних этапов.
//         </motion.p>

//         {/* Buttons */}
//         <motion.div
//           initial={reduce ? undefined : { opacity: 0, y: 10 }}
//           whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.35 }}
//           transition={{ duration: 0.75, delay: 0.12, ease: EASE }}
//           className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center mb-8"
//         >
//           {/* Primary */}
//           <motion.a
//             href="#contact-form"
//             className="
//               relative group inline-flex items-center justify-center gap-3
//               px-9 py-5 rounded-full font-medium text-base md:text-lg
//               bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#63E5FF]
//               text-slate-900
//               shadow-[0_0_40px_rgba(76,194,255,0.55)]
//               hover:shadow-[0_0_65px_rgba(76,194,255,0.85)]
//               transition-all
//             "
//             whileHover={reduce ? undefined : { scale: 1.03 }}
//             whileTap={reduce ? undefined : { scale: 0.97 }}
//           >
//             <Mail className="w-5 h-5" />
//             <span className="relative z-10">Запросить демо</span>
//             <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
//             {/* shine */}
//             <span className="pointer-events-none absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
//           </motion.a>

//           {/* Secondary */}
//           <motion.a
//             href="#pricing"
//             className="
//               group inline-flex items-center justify-center
//               px-9 py-5 rounded-full text-base md:text-lg font-medium
//               border border-cyan-400/60 text-slate-100
//               hover:bg-cyan-500/5 hover:shadow-[0_0_30px_rgba(56,189,248,0.45)]
//               transition-all
//             "
//             whileHover={reduce ? undefined : { scale: 1.03 }}
//             whileTap={reduce ? undefined : { scale: 0.97 }}
//           >
//             Посмотреть цены
//           </motion.a>
//         </motion.div>

//         {/* Optional line */}
//         <motion.p
//           initial={reduce ? undefined : { opacity: 0 }}
//           whileInView={reduce ? undefined : { opacity: 1 }}
//           viewport={{ once: true, amount: 0.35 }}
//           transition={{ duration: 0.7, delay: 0.18, ease: EASE }}
//           className="text-xs md:text-sm text-slate-200/60 uppercase tracking-widest"
//         >
//           Ответим в течение 24 часов • Можно начать с демо
//         </motion.p>

//         {/* Decorative bottom element */}
//         <div className="mt-16 flex items-center justify-center gap-4">
//           <div className="w-24 md:w-32 h-px bg-cyan-200/15" />
//           <div className="w-2.5 h-2.5 bg-cyan-200/20 rotate-45 shadow-[0_0_18px_rgba(76,194,255,0.25)]" />
//           <div className="w-24 md:w-32 h-px bg-cyan-200/15" />
//         </div>

//         {/* Footer note */}
//         <div className="mt-14 pt-10 border-t border-cyan-200/10">
//           <p className="text-slate-200/55 text-sm">
//             Базируемся в Израиле, работаем с бизнесом по всему миру.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { ArrowRight, Mail } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { PageContainer } from "./Layout/PageContainer";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function FinalCTA() {
  const reduce = useReducedMotion();

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center  pt-10 pb-10
        md:pt-14 md:pb-14
        lg:pt-16 lg:pb-16 overflow-visible text-slate-100"
      aria-labelledby="final-cta-title"
    >
      {/* Neon waves — full-bleed */}
      <div
        className="pointer-events-none absolute -top-40 right-[-10%] h-96 w-96 rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(76,194,255,0.9), transparent 60%)",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-[-20%] left-[-10%] h-[26rem] w-[26rem] rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(58,123,255,0.85), transparent 55%)",
        }}
      />

      {/* Subtle grid overlay — full-bleed */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.10]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(51,65,85,0.28) 1px, transparent 1px), linear-gradient(90deg, rgba(51,65,85,0.28) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <PageContainer className="max-w-[1200px]">
        <div className="relative z-10 text-center">
          {/* Decorative top line */}
          <motion.div
            initial={reduce ? undefined : { width: 0, opacity: 0 }}
            whileInView={reduce ? undefined : { width: 96, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="mx-auto mb-10 h-0.5 w-24 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-transparent"
          />

          {/* Headline */}
          <motion.h2
            id="final-cta-title"
            initial={
              reduce ? undefined : { opacity: 0, y: 18, filter: "blur(10px)" }
            }
            whileInView={
              reduce ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }
            }
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.85, ease: EASE }}
            className="text-[clamp(2.2rem,5.8vw,5.2rem)] leading-[1.05] mb-6 max-w-4xl mx-auto text-slate-100"
          >
            Сделаем сайт и автоматизацию, которые работают на ваш бизнес
          </motion.h2>

          {/* Subheading */}
          <motion.p
            initial={
              reduce ? undefined : { opacity: 0, y: 14, filter: "blur(10px)" }
            }
            whileInView={
              reduce ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }
            }
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.85, delay: 0.08, ease: EASE }}
            className="text-lg md:text-2xl text-slate-300/90 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Покажем, как сайт может приводить клиентов в WhatsApp, фиксировать
            заявки и снижать ручную рутину — без сложных слов и лишних этапов.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={reduce ? undefined : { opacity: 0, y: 10 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.75, delay: 0.12, ease: EASE }}
            className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center mb-8"
          >
            {/* Primary */}
            {/* <motion.a
              href="#contact-form"
              className="
                relative group inline-flex items-center justify-center gap-3
                px-9 py-5 rounded-full font-medium text-base md:text-lg
                bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#63E5FF]
                text-slate-900
                shadow-[0_0_40px_rgba(76,194,255,0.55)]
                hover:shadow-[0_0_65px_rgba(76,194,255,0.85)]
                transition-all
              "
              whileHover={reduce ? undefined : { scale: 1.03 }}
              whileTap={reduce ? undefined : { scale: 0.97 }}
            >
              <Mail className="w-5 h-5" />
              <span className="relative z-10">Запросить демо</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              <span className="pointer-events-none absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a> */}

            <motion.a
              href="#contact-form"
              className="
    relative group inline-flex items-center justify-center gap-3
    overflow-hidden rounded-full
    px-9 py-5
    text-base md:text-lg font-medium
    text-[#050816]

    shadow-[0_0_40px_rgba(76,194,255,0.55)]
    hover:shadow-[0_0_65px_rgba(76,194,255,0.85)]
    transition-shadow
  "
              whileHover={reduce ? undefined : { scale: 1.03 }}
              whileTap={reduce ? undefined : { scale: 0.97 }}
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
                aria-hidden
              />

              {/* Hover soft highlight — unified */}
              <span
                className="
      pointer-events-none absolute inset-0 rounded-full
      bg-white/10 opacity-0
      group-hover:opacity-100 transition-opacity
    "
                aria-hidden
              />

              <Mail className="relative z-10 h-5 w-5" />
              <span className="relative z-10">Запросить демо</span>
              <ArrowRight className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </motion.a>

            {/* Secondary */}
            {/* <motion.a
              href="#pricing"
              className="
                group inline-flex items-center justify-center
                px-9 py-5 rounded-full text-base md:text-lg font-medium
                border border-cyan-400/60 text-slate-100
                hover:bg-cyan-500/5 hover:shadow-[0_0_30px_rgba(56,189,248,0.45)]
                transition-all
              "
              whileHover={reduce ? undefined : { scale: 1.03 }}
              whileTap={reduce ? undefined : { scale: 0.97 }}
            >
              Посмотреть цены
            </motion.a> */}
            <motion.a
              href="#pricing"
              className="
    relative group inline-flex items-center justify-center
    px-9 py-5 rounded-full text-base md:text-lg font-medium
    text-[#F5EFE7]
    backdrop-blur-sm
    transition-all
  "
              whileHover={reduce ? undefined : { scale: 1.03 }}
              whileTap={reduce ? undefined : { scale: 0.97 }}
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

              <span className="relative z-10">Посмотреть цены</span>
            </motion.a>
          </motion.div>

          {/* Optional line */}
          <motion.p
            initial={reduce ? undefined : { opacity: 0 }}
            whileInView={reduce ? undefined : { opacity: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, delay: 0.18, ease: EASE }}
            className="text-xs md:text-sm text-slate-200/60 uppercase tracking-widest"
          >
            Ответим в течение 24 часов • Можно начать с демо
          </motion.p>

          {/* Decorative bottom element */}
          <div className="mt-16 flex items-center justify-center gap-4">
            <div className="w-24 md:w-32 h-px bg-cyan-200/15" />
            <div className="w-2.5 h-2.5 bg-cyan-200/20 rotate-45 shadow-[0_0_18px_rgba(76,194,255,0.25)]" />
            <div className="w-24 md:w-32 h-px bg-cyan-200/15" />
          </div>

          {/* Footer note */}
          <div className="mt-14 pt-10 border-t border-cyan-200/10">
            <p className="text-slate-200/55 text-sm">
              Базируемся в Израиле, работаем с бизнесом по всему миру.
            </p>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
