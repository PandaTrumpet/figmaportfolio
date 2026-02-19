
"use client";

import { ArrowRight, Mail } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { PageContainer } from "./Layout/PageContainer";

import Link from "next/link";
import { useLocale } from "next-intl";
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function FinalCTA() {
  const reduce = useReducedMotion();
  const locale = useLocale();
  return (
    <section
      id="contact"
      className="relative flex items-center  pt-10 pb-10
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
            className="text-3xl 
  md:text-4xl 
  lg:text-5xl 
  xl:text-6xl 
  font-semibold 
  leading-tight 
  md:leading-[1.15]  text-slate-50 mb-3"
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
            className="  mt-4
  text-white/75
  leading-relaxed md:leading-[1.7]
  max-w-[52ch] md:max-w-[60ch] lg:max-w-[66ch]
  text-[clamp(0.98rem,0.55vw+0.88rem,1.15rem)] mb-10  mx-auto "
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
            {/* <motion.a
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
         
              <span className="absolute inset-0 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]" />

              <span
                className="
      pointer-events-none absolute inset-0
      [background:linear-gradient(to_bottom,rgba(255,255,255,0.28),rgba(255,255,255,0.06)_45%,rgba(0,0,0,0.12))]
      mix-blend-overlay
    "
                aria-hidden
              />

         
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
            </motion.a> */}
            <Link href={`/${locale}/contact#contact-form`} scroll>
              <motion.span
                className="
          relative group inline-flex items-center justify-center gap-3
          overflow-hidden rounded-full
          px-9 py-5
          text-base md:text-lg font-medium
          text-[#050816]
          shadow-[0_0_40px_rgba(76,194,255,0.55)]
          hover:shadow-[0_0_65px_rgba(76,194,255,0.85)]
          transition-shadow
          cursor-pointer
        "
                whileHover={reduce ? undefined : { scale: 1.03 }}
                whileTap={reduce ? undefined : { scale: 0.97 }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]" />

                <span
                  className="
            pointer-events-none absolute inset-0
            [background:linear-gradient(to_bottom,rgba(255,255,255,0.28),rgba(255,255,255,0.06)_45%,rgba(0,0,0,0.12))]
            mix-blend-overlay
          "
                  aria-hidden
                />

                <span
                  className="
            pointer-events-none absolute inset-0 rounded-full
            bg-white/10 opacity-0
            group-hover:opacity-100 transition-opacity
          "
                  aria-hidden
                />

                <Mail className="relative z-10 h-5 w-5" />
                <span className="relative z-10">Обсудить задачу</span>
                <ArrowRight className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </motion.span>
            </Link>

<Link href={`/${locale}/pricing#pricing-packages`} scroll>
            <motion.span
             
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
              </motion.span>
              </Link>
          </motion.div>

          {/* Optional line */}
          <motion.p
            initial={reduce ? undefined : { opacity: 0 }}
            whileInView={reduce ? undefined : { opacity: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, delay: 0.18, ease: EASE }}
            className="text-xs md:text-sm text-slate-200/60 uppercase tracking-widest"
          >
            Базируемся в Израиле, работаем с бизнесом по всему миру.
          </motion.p>
        </div>
      </PageContainer>
    </section>
  );
}
