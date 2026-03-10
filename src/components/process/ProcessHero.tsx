
"use client";

import { useId } from "react";
import { motion, MotionValue, useReducedMotion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { PageContainer } from "../Layout/PageContainer";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import hero from '../../../public/ProcessHero.avif'
type HeroData = {
  badge: string;
  title: string;
  subtitle: string;
  scrollHint: string;
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
  const locale = useLocale();
  const isRTL = locale === "he";
  const t = useTranslations("processe");

  const titleId = useId();
  const descId = useId();

  const scrollToSteps = () => {
    const el = document.getElementById("process-steps");
    if (!el) return;
    const offset = 84;
    const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <section
      dir={isRTL ? "rtl" : "ltr"}
      aria-labelledby={titleId}
      aria-describedby={descId}
      className="
        relative min-h-[100svh]
        pt-22 pb-12
        md:pt-28 md:pb-16
        lg:pt-30 lg:pb-20
        flex items-center justify-center
        overflow-visible text-[#F5EFE7]
      "
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden z-0"
      >
        <div className="absolute inset-0">
          <Image
            src={hero}
            alt="Process page hero background"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1400px) 100vw, 1400px"
            className="object-cover opacity-55 saturate-[0.85]"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-[#050814]/45 via-transparent to-transparent" />

        <div className="absolute inset-0 opacity-70">
          <div className="absolute -top-44 -left-44 h-[520px] w-[520px] bg-[radial-gradient(circle_at_center,_#3A7BFF44,_transparent_72%)] blur-3xl" />
          <div className="absolute top-[40%] -right-52 h-[680px] w-[680px] bg-[radial-gradient(circle_at_center,_#4CC2FF33,_transparent_72%)] blur-3xl" />
        </div>

        <div className="absolute inset-0 opacity-[0.08] mix-blend-soft-light">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(255,255,255,0.08),_transparent_40%),radial-gradient(circle_at_70%_60%,_rgba(255,255,255,0.06),_transparent_45%)]" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#020410]" />
      </div>

      <PageContainer>
        <motion.div className="relative z-10 w-full" style={{ opacity }}>
          <div className="min-h-[calc(100svh-6rem)] grid place-items-center">
            <motion.div
              initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 70 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.15, ease: EASE }}
              className="w-full flex flex-col items-center text-center"
            >
              <p className="mb-4 text-xs md:text-sm uppercase tracking-[0.22em] text-white/70">
                {data.badge}
              </p>

              <h1
                id={titleId}
                className="
                  font-semibold tracking-tight text-balance
                  leading-[0.98]
                  mb-6 md:mb-8
                  text-[#F2F4FA]
                  max-w-[18ch] sm:max-w-[20ch] lg:max-w-[22ch] mx-auto
                  text-[clamp(2.35rem,5.8vw,4.8rem)]
                  md:text-[clamp(2.9rem,5.0vw,5.2rem)]
                  lg:text-[clamp(3.1rem,4.2vw,5.3rem)]
                "
              >
                {data.title}
              </h1>

              <p
                id={descId}
                className="
                  leading-relaxed
                  mb-10 md:mb-12
                  text-white
                  max-w-[48ch] md:max-w-[52ch] lg:max-w-[58ch]
                  text-[clamp(1rem,1.4vw+0.6rem,1.35rem)]
                "
              >
                {data.subtitle}
              </p>

              {/* Scroll hint (доступная кнопка) */}
              <motion.button
                type="button"
                onClick={scrollToSteps}
                aria-label={t("hero.scrollAria")}
                className="
                  inline-flex flex-col items-center gap-3
                  focus-visible:outline-none
                  focus-visible:ring-2 focus-visible:ring-[#4CC2FF]/70
                  focus-visible:ring-offset-2 focus-visible:ring-offset-[#020410]
                  rounded-2xl
                "
                animate={reduce ? undefined : { y: [0, 10, 0] }}
                transition={
                  reduce
                    ? undefined
                    : { duration: 2.6, repeat: Infinity, ease: "easeInOut" }
                }
              >
                <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -inset-3 rounded-2xl
                    bg-[radial-gradient(circle_at_center,_rgba(58,123,255,0.35),_transparent_70%)]
                    blur-2xl opacity-70"
                  />
                  <ChevronDown
                    aria-hidden="true"
                    className="relative h-6 w-6 text-[#E8F2FF] opacity-70"
                  />
                </div>

                <span className="text-[11px] md:text-xs uppercase tracking-widest text-white/70">
                  {data.scrollHint}
                </span>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </PageContainer>
    </section>
  );
}