"use client";

import { useId, useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import {
  Bot,
  BrainCircuit,
  ShieldAlert,
  Scale,
  Database,
  Workflow,
  Eye,
  Mail,
} from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { PageContainer } from "@/src/components/Layout/PageContainer";

const sections = [
  {
    id: "useOfAI",
    icon: Bot,
    gradient: "from-[#3A7BFF33] via-[#4CC2FF22] to-transparent",
  },
  {
    id: "limitations",
    icon: BrainCircuit,
    gradient: "from-[#4CC2FF33] via-[#9B5DFF22] to-transparent",
  },
  {
    id: "noProfessionalAdvice",
    icon: ShieldAlert,
    gradient: "from-[#9B5DFF33] via-[#3A7BFF22] to-transparent",
  },
  {
    id: "humanReview",
    icon: Eye,
    gradient: "from-[#3A7BFF33] via-[#9B5DFF22] to-transparent",
  },
  {
    id: "thirdPartyProviders",
    icon: Workflow,
    gradient: "from-[#4CC2FF33] via-[#3A7BFF22] to-transparent",
  },
  {
    id: "dataHandling",
    icon: Database,
    gradient: "from-[#9B5DFF33] via-[#4CC2FF22] to-transparent",
  },
  {
    id: "law",
    icon: Scale,
    gradient: "from-[#3A7BFF33] via-[#4CC2FF22] to-transparent",
  },
  {
    id: "contact",
    icon: Mail,
    gradient: "from-[#4CC2FF33] via-[#9B5DFF22] to-transparent",
  },
] as const;

function AICard({
  section,
  index,
  isInView,
}: {
  section: (typeof sections)[number];
  index: number;
  isInView: boolean;
}) {
  const t = useTranslations("aiPolicy");
  const reduce = useReducedMotion();
  const Icon = section.icon;

  const titleId = useId();
  const descId = useId();

  const items = t.raw(`${section.id}.items`) as string[] | undefined;

  return (
    <motion.article
      className="relative h-full"
      initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : undefined}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      aria-labelledby={titleId}
      aria-describedby={descId}
    >
      <div className="absolute -inset-[12px] rounded-[34px] bg-[radial-gradient(circle_at_top,_rgba(58,123,255,0.42),_transparent_70%)] blur-2xl -z-20 opacity-70" />

      <div className="relative h-full rounded-3xl border border-white/10 bg-gradient-to-b from-[#060A13] via-[#050816] to-[#02030A] p-6 md:p-7 shadow-[0_26px_80px_rgba(0,0,0,0.85)] backdrop-blur-xl overflow-hidden">
        <div
          className={`pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br ${section.gradient} opacity-40`}
          aria-hidden="true"
        />

        <div
          className="pointer-events-none absolute inset-0 rounded-3xl z-10"
          style={{
            background: "linear-gradient(135deg, #3A7BFF, #4CC2FF, #9B5DFF)",
            WebkitMask:
              "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            padding: "1px",
          }}
          aria-hidden="true"
        />

        <div className="relative z-20">
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-[radial-gradient(circle_at_top,_#3A7BFF3b,_#050816)] shadow-[0_0_40px_rgba(58,123,255,0.55)]">
            <Icon className="h-7 w-7 text-[#E8F2FF]" aria-hidden="true" />
          </div>

          <h2
            id={titleId}
            className="text-[20px] md:text-[22px] lg:text-[24px] leading-[1.15] font-semibold tracking-[-0.01em] text-[#F2F4FA] mb-3"
          >
            {t(`${section.id}.title`)}
          </h2>

          <p
            id={descId}
            className="text-[15px] md:text-[16px] leading-[1.65] text-[#D7DEEA] mb-5"
          >
            {t(`${section.id}.text`)}
          </p>

          {Array.isArray(items) && items.length > 0 ? (
            <ul className="space-y-3" aria-label={t("aria.sectionList")}>
              {items.map((item, i) => (
                <motion.li
                  key={`${section.id}-${i}`}
                  className="flex items-start gap-3 text-[14px] md:text-[15px] leading-[1.5] text-[#D5DBE6]"
                  initial={
                    reduce ? { opacity: 1, x: 0 } : { opacity: 0, x: -14 }
                  }
                  animate={isInView ? { opacity: 1, x: 0 } : undefined}
                  transition={{ delay: index * 0.07 + i * 0.05 + 0.16 }}
                >
                  <span
                    className="mt-[0.58em] inline-block h-1.5 w-3 rounded-full bg-gradient-to-r from-[#3A7BFF] to-[#4CC2FF]"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}

export default function AIAutomationDisclaimerPage() {
  const t = useTranslations("aiPolicy");
  const locale = useLocale();
  const isRTL = locale === "he";
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const titleId = useId();
  const descId = useId();

  return (
    <section
      ref={sectionRef}
      dir={isRTL ? "rtl" : "ltr"}
      className="relative pt-12 pb-12 md:pt-16 md:pb-16 lg:pt-20 lg:pb-20 overflow-visible"
      aria-labelledby={titleId}
      aria-describedby={descId}
    >
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden opacity-70 -z-10"
        aria-hidden="true"
      >
        <div className="absolute -top-40 -left-32 h-80 w-80 bg-[radial-gradient(circle_at_center,_#3A7BFF55,_transparent_70%)] blur-3xl" />
        <div className="absolute top-1/3 -right-10 h-96 w-96 bg-[radial-gradient(circle_at_center,_#4CC2FF40,_transparent_70%)] blur-3xl" />
        <div className="absolute -bottom-32 left-1/3 h-80 w-80 bg-[radial-gradient(circle_at_center,_#9B5DFF33,_transparent_70%)] blur-3xl" />
      </div>

      <PageContainer>
        <div className="relative z-10">
          <motion.header
            className="mb-12 md:mb-16 lg:mb-20 max-w-4xl"
            initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center rounded-full border border-[#4CC2FF33] bg-white/5 px-4 py-1.5 text-xs md:text-sm text-[#CFE6FF] backdrop-blur-md shadow-[0_0_30px_rgba(76,194,255,0.15)]">
              {t("eyebrow")}
            </span>

            <h1
              id={titleId}
              className="mt-5 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight md:leading-[1.12] tracking-tight text-slate-50"
            >
              {t("title")}
            </h1>

            <p
              id={descId}
              className="mt-5 max-w-[70ch] text-[15px] md:text-[17px] leading-[1.75] text-white/75"
            >
              {t("intro")}
            </p>

            <p className="mt-4 text-sm md:text-base text-[#AEB8CC]">
              {t("updated")}
            </p>
          </motion.header>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
            role="list"
            aria-label={t("aria.sections")}
          >
            {sections.map((section, index) => (
              <div key={section.id} role="listitem">
                <AICard section={section} index={index} isInView={isInView} />
              </div>
            ))}
          </div>

          <motion.div
            className="mt-12 md:mt-16 lg:mt-20"
            initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#07101F] via-[#050816] to-[#03050C] p-6 md:p-8 shadow-[0_24px_90px_rgba(0,0,0,0.85)]">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(76,194,255,0.18),_transparent_35%),radial-gradient(circle_at_bottom_left,_rgba(155,93,255,0.12),_transparent_35%)]" />
              <div className="relative z-10">
                <h2 className="text-[22px] md:text-[26px] font-semibold text-[#F2F4FA] mb-3">
                  {t("legal.title")}
                </h2>
                <p className="text-[15px] md:text-[16px] leading-[1.75] text-[#D7DEEA] max-w-[78ch]">
                  {t("legal.text")}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </PageContainer>
    </section>
  );
}
