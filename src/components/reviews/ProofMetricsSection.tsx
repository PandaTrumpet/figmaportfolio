// "use client";

// import { useRef } from "react";
// import { motion, useInView, useReducedMotion } from "motion/react";
// import { ShieldCheck, Timer, Workflow, Sparkles } from "lucide-react";
// import { PageContainer } from "../Layout/PageContainer";
// import type { LucideIcon } from "lucide-react";
// type ProofItem = {
//   icon: LucideIcon;
//   title: string;
//   description: string;
//   metric: string;
//   metricLabel: string;
//   gradient: string;
// };

// const proofItems: ProofItem[] = [
//   {
//     icon: Workflow,
//     title: "Понятный и управляемый процесс",
//     description:
//       "Без хаоса и сюрпризов. Сначала структура и оффер, затем дизайн, сборка и запуск. Вы понимаете, что делаем, зачем и на каком этапе проект.",
//     metric: "4",
//     metricLabel: "этапа до запуска",
//     gradient: "from-[#3A7BFF33] via-[#4CC2FF22] to-transparent",
//   },
//   {
//     icon: Timer,
//     title: "Быстрый старт без потери фокуса",
//     description:
//       "Не тянем месяцами. Сначала запускаем рабочую версию, которая принимает заявки. Улучшения и расширения — уже после.",
//     metric: "10–14",
//     metricLabel: "дней до запуска",
//     gradient: "from-[#4CC2FF33] via-[#9B5DFF22] to-transparent",
//   },
//   {
//     icon: ShieldCheck,
//     title: "Заявки не теряются",
//     description:
//       "Короткий путь до действия: понятные CTA, WhatsApp как основной канал и контроль всех точек входа.",
//     metric: "1",
//     metricLabel: "цель — заявка",
//     gradient: "from-[#9B5DFF33] via-[#3A7BFF22] to-transparent",
//   },
//   {
//     icon: Sparkles,
//     title: "Дизайн, который работает на бизнес",
//     description:
//       "Визуал и анимации усиливают доверие и не мешают пользователю. Красиво — да. Но в первую очередь эффективно.",
//     metric: "90+",
//     metricLabel: "ориентир Lighthouse",
//     gradient: "from-[#3A7BFF33] via-[#9B5DFF22] to-transparent",
//   },
// ];

// const glitchPrimary = {
//   initial: { x: 0, y: 0, opacity: 0 },
//   hover: {
//     x: [0, -1.5, 1, -0.5, 0],
//     y: [0, 1, -1, 0.5, 0],
//     opacity: [0, 0.9, 0.9, 0.6, 0],
//     transition: { duration: 0.35, times: [0, 0.25, 0.5, 0.75, 1] },
//   },
// };

// const glitchSecondary = {
//   initial: { x: 0, y: 0, opacity: 0 },
//   hover: {
//     x: [0, 1.5, -1, 0.5, 0],
//     y: [0, -1, 1, -0.5, 0],
//     opacity: [0, 0.7, 0.8, 0.5, 0],
//     transition: { duration: 0.35, times: [0, 0.25, 0.5, 0.75, 1] },
//   },
// };

// const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

// // function ProofCard({

// function ProofCard({
//   item,
//   index,
//   isInView,
//   reduce,
// }: {
//   item: ProofItem;
//   index: number;
//   isInView: boolean;
//   reduce: boolean;
// }) {
//   const Icon = item.icon;

//   return (
//     <motion.div
//       className="relative"
//       initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 34 }}
//       animate={isInView ? { opacity: 1, y: 0 } : {}}
//       transition={{
//         duration: 0.6,
//         delay: reduce ? 0 : index * 0.12,
//         ease: EASE,
//       }}
//     >
//       {/* base glow */}
//       <motion.div
//         className="absolute -inset-[12px] rounded-[34px] bg-[radial-gradient(circle_at_top,_rgba(58,123,255,0.55),_transparent_70%)] blur-2xl -z-20"
//         animate={reduce ? undefined : { opacity: [0.22, 0.36, 0.22] }}
//         transition={
//           reduce
//             ? undefined
//             : { duration: 5.5, repeat: Infinity, ease: "easeInOut" }
//         }
//         aria-hidden="true"
//       />

//       <motion.div
//         className="
//           group relative h-full rounded-3xl border border-white/10
//           bg-gradient-to-b from-[#060A13] via-[#050816] to-[#02030A]
//           p-7 md:p-8
//           shadow-[0_26px_80px_rgba(0,0,0,0.85)]
//           backdrop-blur-xl overflow-hidden
//         "
//         whileHover={reduce ? undefined : { y: -6 }}
//         transition={{ duration: 0.25, ease: "easeOut" }}
//       >
//         {/* inner gradient wash */}
//         <div
//           className={`pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br ${item.gradient} -z-10 opacity-45`}
//           aria-hidden="true"
//         />

//         {/* hover aura (adds depth) */}
//         <motion.div
//           className="pointer-events-none absolute inset-0 rounded-3xl -z-10 opacity-0 group-hover:opacity-100"
//           style={{
//             background:
//               "radial-gradient(circle_at_center, rgba(76,194,255,0.18), transparent 60%)",
//           }}
//           transition={{ duration: 0.25 }}
//           aria-hidden="true"
//         />

//         {/* sheen */}
//         <motion.div
//           className="pointer-events-none absolute -inset-10 bg-[linear-gradient(115deg,_transparent_0%,_rgba(255,255,255,0.22)_30%,_transparent_60%)] mix-blend-screen -z-10 opacity-0"
//           whileHover={reduce ? undefined : { opacity: 1, x: "140%" }}
//           initial={{ x: "-140%" }}
//           transition={{ duration: 0.9, ease: "easeInOut" }}
//           aria-hidden="true"
//         />

//         {/* contour */}
//         <div
//           className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent z-10"
//           style={{
//             background: "linear-gradient(135deg, #3A7BFF, #4CC2FF, #9B5DFF)",
//             WebkitMask:
//               "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
//             WebkitMaskComposite: "xor",
//             maskComposite: "exclude",
//             padding: "1px",
//             opacity: 0.18,
//           }}
//           aria-hidden="true"
//         />

//         <div className="relative z-30">
//           {/* top row */}
//           <div className="mb-6 flex items-center justify-between gap-4">
//             <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-[radial-gradient(circle_at_top,_#3A7BFF3b,_#050816)] overflow-hidden shadow-[0_0_40px_rgba(58,123,255,0.7)]">
//               <Icon className="relative z-20 h-7 w-7 text-[#E8F2FF]" />
//               <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#3A7BFF66] to-[#4CC2FF66] opacity-40" />
//             </div>

//             <div className="text-right">
//               <p
//                 className="
//                   text-[28px] md:text-[32px] lg:text-[36px]
//                   leading-none
//                   font-semibold tracking-[-0.01em]
//                   text-[#F2F4FA]
//                 "
//               >
//                 {item.metric}
//               </p>
//               <p className="mt-1 text-[10px] md:text-xs uppercase tracking-[0.24em] text-[#C7CEDF]/70">
//                 {item.metricLabel}
//               </p>
//             </div>
//           </div>

//           {/* title */}
//           <h3
//             className="
//               mb-3
//               text-[18px] md:text-[20px] lg:text-[22px]
//               leading-[1.15]
//               font-semibold tracking-[-0.01em]
//               text-[#F2F4FA]
//             "
//           >
//             {item.title}
//           </h3>

//           {/* body */}
//           <p
//             className="
//               text-[15px] md:text-[16px] lg:text-[17px]
//               leading-[1.55] md:leading-[1.6]
//               text-[#C7CEDF]
//             "
//           >
//             {item.description}
//           </p>
//         </div>

//         <div
//           className="pointer-events-none absolute bottom-4 right-4 h-8 w-8 opacity-40 z-20"
//           aria-hidden="true"
//         >
//           <div className="h-full w-full rounded-br-3xl border-b border-r border-[#4CC2FF77]" />
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// }

// export function ProofMetricsSection() {
//   const sectionRef = useRef<HTMLElement | null>(null);
//   const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
//  const reduce = useReducedMotion() ?? false;

//   return (
//     <section
//       ref={sectionRef}
//       className="relative overflow-visible  pt-10 pb-10
//         md:pt-14 md:pb-14
//         lg:pt-16 lg:pb-16"
//     >
//       {/* BACKGROUND: clip wrapper (no seam) */}
//       <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
//         {/* spots */}
//         <div className="absolute inset-0 opacity-60">
//           <div className="absolute -top-40 -left-32 h-80 w-80 bg-[radial-gradient(circle_at_center,_#3A7BFF55,_transparent_70%)] blur-3xl" />
//           <div className="absolute -bottom-40 -right-10 h-96 w-96 bg-[radial-gradient(circle_at_center,_#4CC2FF55,_transparent_70%)] blur-3xl" />
//         </div>

//         {/* super subtle grid */}
//         <div className="absolute inset-0 opacity-[0.06] [mask-image:radial-gradient(circle_at_center,black_55%,transparent_78%)]">
//           <div className="h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:84px_84px]" />
//         </div>

//         {/* fades to kill seams */}
//         <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-t from-transparent to-[#020410]" />
//         <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-b from-transparent to-[#020410]" />
//       </div>

//       <PageContainer className="relative z-10 text-[#F5EFE7]">
//         {/* Header */}
//         <motion.div
//           className="mb-16 md:mb-20 text-center"
//           initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6, ease: EASE }}
//         >

//           <motion.h2
//             className="text-3xl
//   md:text-4xl
//   lg:text-5xl
//   xl:text-6xl
//   font-semibold
//   leading-tight
//   md:leading-[1.15]  text-slate-50 mb-3"
//           >
//             <motion.span
//               className="relative inline-block"
//               initial="initial"
//               whileHover={reduce ? undefined : "hover"}
//             >
//               <span className="relative z-10">
//                 Доказательства в процессе и цифрах
//               </span>

//               <motion.span
//                 className="pointer-events-none absolute left-0 top-0 z-0 text-[#4CC2FF] mix-blend-screen"
//                 variants={glitchPrimary}
//                 aria-hidden="true"
//               >
//                 Доказательства в процессе и цифрах
//               </motion.span>

//               <motion.span
//                 className="pointer-events-none absolute left-0 top-0 z-0 text-[#9B5DFF] mix-blend-screen"
//                 variants={glitchSecondary}
//                 aria-hidden="true"
//               >
//                 Доказательства в процессе и цифрах
//               </motion.span>
//             </motion.span>
//           </motion.h2>

//           <p
//             className="  mt-4
//   text-white/75
//   leading-relaxed md:leading-[1.7]
//   max-w-[52ch] md:max-w-[60ch] lg:max-w-[66ch]
//   text-[clamp(0.98rem,0.55vw+0.88rem,1.15rem)]  mx-auto "
//           >
//             Мы делаем акцент не на “наградах”, а на результате: понятный
//             процесс, быстрый запуск и метрики, которые напрямую влияют на заявки
//             и продажи.
//           </p>
//         </motion.div>

//         {/* Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
//           {proofItems.map((item, index) => (
//             <ProofCard
//               key={item.title}
//               item={item}
//               index={index}
//               isInView={isInView}
//               reduce={reduce}
//             />
//           ))}
//         </div>
//       </PageContainer>

//       {/* floating decor */}
//       <motion.div
//         className="pointer-events-none absolute top-16 right-4 md:right-10 h-20 w-20 rounded-3xl border border-[#3A7BFF33] bg-[radial-gradient(circle_at_top,_#3A7BFF33,_transparent_70%)] opacity-50"
//         animate={reduce ? undefined : { rotate: 360, scale: [1, 1.08, 1] }}
//         transition={
//           reduce
//             ? undefined
//             : {
//                 rotate: { duration: 26, repeat: Infinity, ease: "linear" },
//                 scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
//               }
//         }
//       />
//     </section>
//   );
// }

"use client";

import { useMemo, useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { ShieldCheck, Timer, Workflow, Sparkles } from "lucide-react";
import { PageContainer } from "../Layout/PageContainer";
import type { LucideIcon } from "lucide-react";
import { useTranslations } from "next-intl";

type ProofItem = {
  icon: LucideIcon;
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
  gradient: string;
};

const glitchPrimary = {
  initial: { x: 0, y: 0, opacity: 0 },
  hover: {
    x: [0, -1.5, 1, -0.5, 0],
    y: [0, 1, -1, 0.5, 0],
    opacity: [0, 0.9, 0.9, 0.6, 0],
    transition: { duration: 0.35, times: [0, 0.25, 0.5, 0.75, 1] },
  },
};

const glitchSecondary = {
  initial: { x: 0, y: 0, opacity: 0 },
  hover: {
    x: [0, 1.5, -1, 0.5, 0],
    y: [0, -1, 1, -0.5, 0],
    opacity: [0, 0.7, 0.8, 0.5, 0],
    transition: { duration: 0.35, times: [0, 0.25, 0.5, 0.75, 1] },
  },
};

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

function ProofCard({
  item,
  index,
  isInView,
  reduce,
}: {
  item: ProofItem;
  index: number;
  isInView: boolean;
  reduce: boolean;
}) {
  const Icon = item.icon;

  const titleId = `proof-card-title-${index}`;
  const descId = `proof-card-desc-${index}`;

  return (
    <motion.article
      aria-labelledby={titleId}
      aria-describedby={descId}
      className="relative"
      initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 34 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: reduce ? 0 : index * 0.12,
        ease: EASE,
      }}
    >
      {/* base glow */}
      <motion.div
        className="absolute -inset-[12px] rounded-[34px] bg-[radial-gradient(circle_at_top,_rgba(58,123,255,0.55),_transparent_70%)] blur-2xl -z-20"
        animate={reduce ? undefined : { opacity: [0.22, 0.36, 0.22] }}
        transition={
          reduce
            ? undefined
            : { duration: 5.5, repeat: Infinity, ease: "easeInOut" }
        }
        aria-hidden="true"
      />

      <motion.div
        className="
          group relative h-full rounded-3xl border border-white/10
          bg-gradient-to-b from-[#060A13] via-[#050816] to-[#02030A]
          p-7 md:p-8
          shadow-[0_26px_80px_rgba(0,0,0,0.85)]
          backdrop-blur-xl overflow-hidden
          focus-within:outline-none
        "
        whileHover={reduce ? undefined : { y: -6 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        {/* inner gradient wash */}
        <div
          className={`pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br ${item.gradient} -z-10 opacity-45`}
          aria-hidden="true"
        />

        {/* hover aura */}
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-3xl -z-10 opacity-0 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(circle_at_center, rgba(76,194,255,0.18), transparent 60%)",
          }}
          transition={{ duration: 0.25 }}
          aria-hidden="true"
        />

        {/* sheen */}
        <motion.div
          className="pointer-events-none absolute -inset-10 bg-[linear-gradient(115deg,_transparent_0%,_rgba(255,255,255,0.22)_30%,_transparent_60%)] mix-blend-screen -z-10 opacity-0"
          whileHover={reduce ? undefined : { opacity: 1, x: "140%" }}
          initial={{ x: "-140%" }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          aria-hidden="true"
        />

        {/* contour */}
        <div
          className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent z-10"
          style={{
            background: "linear-gradient(135deg, #3A7BFF, #4CC2FF, #9B5DFF)",
            WebkitMask:
              "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            padding: "1px",
            opacity: 0.18,
          }}
          aria-hidden="true"
        />

        <div className="relative z-30">
          {/* top row */}
          <div className="mb-6 flex items-center justify-between gap-4">
            <div
              className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-[radial-gradient(circle_at_top,_#3A7BFF3b,_#050816)] overflow-hidden shadow-[0_0_40px_rgba(58,123,255,0.7)]"
              aria-hidden="true"
            >
              <Icon className="relative z-20 h-7 w-7 text-[#E8F2FF]" />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#3A7BFF66] to-[#4CC2FF66] opacity-40" />
            </div>

            {/* Metric: readable + SR-friendly */}
            <div className="text-right">
              <p
                className="
                  text-[28px] md:text-[32px] lg:text-[36px]
                  leading-none
                  font-semibold tracking-[-0.01em]
                  text-[#F2F4FA]
                "
              >
                <span className="sr-only">{item.metricLabel}: </span>
                {item.metric}
              </p>
              <p className="mt-1 text-[10px] md:text-xs uppercase tracking-[0.24em] text-[#C7CEDF]/70">
                {item.metricLabel}
              </p>
            </div>
          </div>

          {/* title */}
          <h3
            id={titleId}
            className="
              mb-3
              text-[18px] md:text-[20px] lg:text-[22px]
              leading-[1.15]
              font-semibold tracking-[-0.01em]
              text-[#F2F4FA]
            "
          >
            {item.title}
          </h3>

          {/* body */}
          <p
            id={descId}
            className="
              text-[15px] md:text-[16px] lg:text-[17px]
              leading-[1.55] md:leading-[1.6]
              text-[#C7CEDF]
            "
          >
            {item.description}
          </p>
        </div>

        <div
          className="pointer-events-none absolute bottom-4 right-4 h-8 w-8 opacity-40 z-20"
          aria-hidden="true"
        >
          <div className="h-full w-full rounded-br-3xl border-b border-r border-[#4CC2FF77]" />
        </div>
      </motion.div>
    </motion.article>
  );
}

export function ProofMetricsSection() {
  const t = useTranslations("reviews.proofMetrics");
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const reduce = Boolean(useReducedMotion());

  const titleId = "reviews-proofmetrics-title";
  const descId = "reviews-proofmetrics-desc";

  const proofItems: ProofItem[] = useMemo(
    () => [
      {
        icon: Workflow,
        title: t("items.0.title"),
        description: t("items.0.description"),
        metric: t("items.0.metric"),
        metricLabel: t("items.0.metricLabel"),
        gradient: "from-[#3A7BFF33] via-[#4CC2FF22] to-transparent",
      },
      {
        icon: Timer,
        title: t("items.1.title"),
        description: t("items.1.description"),
        metric: t("items.1.metric"),
        metricLabel: t("items.1.metricLabel"),
        gradient: "from-[#4CC2FF33] via-[#9B5DFF22] to-transparent",
      },
      {
        icon: ShieldCheck,
        title: t("items.2.title"),
        description: t("items.2.description"),
        metric: t("items.2.metric"),
        metricLabel: t("items.2.metricLabel"),
        gradient: "from-[#9B5DFF33] via-[#3A7BFF22] to-transparent",
      },
      {
        icon: Sparkles,
        title: t("items.3.title"),
        description: t("items.3.description"),
        metric: t("items.3.metric"),
        metricLabel: t("items.3.metricLabel"),
        gradient: "from-[#3A7BFF33] via-[#9B5DFF22] to-transparent",
      },
    ],
    [t],
  );

  return (
    <section
      ref={sectionRef}
      aria-labelledby={titleId}
      aria-describedby={descId}
      className="relative overflow-visible pt-10 pb-10 md:pt-14 md:pb-14 lg:pt-16 lg:pb-16"
    >
      {/* BACKGROUND: clip wrapper (no seam) */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        aria-hidden="true"
      >
        {/* spots */}
        <div className="absolute inset-0 opacity-60">
          <div className="absolute -top-40 -left-32 h-80 w-80 bg-[radial-gradient(circle_at_center,_#3A7BFF55,_transparent_70%)] blur-3xl" />
          <div className="absolute -bottom-40 -right-10 h-96 w-96 bg-[radial-gradient(circle_at_center,_#4CC2FF55,_transparent_70%)] blur-3xl" />
        </div>

        {/* super subtle grid */}
        <div className="absolute inset-0 opacity-[0.06] [mask-image:radial-gradient(circle_at_center,black_55%,transparent_78%)]">
          <div className="h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:84px_84px]" />
        </div>

        {/* fades to kill seams */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-t from-transparent to-[#020410]" />
        <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-b from-transparent to-[#020410]" />
      </div>

      <PageContainer className="relative z-10 text-[#F5EFE7]">
        {/* Header */}
        <motion.div
          className="mb-16 md:mb-20 text-center"
          initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <motion.h2
            id={titleId}
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight md:leading-[1.15] text-slate-50 mb-3"
          >
            <motion.span
              className="relative inline-block"
              initial="initial"
              whileHover={reduce ? undefined : "hover"}
            >
              <span className="relative z-10">{t("title")}</span>

              <motion.span
                className="pointer-events-none absolute left-0 top-0 z-0 text-[#4CC2FF] mix-blend-screen"
                variants={glitchPrimary}
                aria-hidden="true"
              >
                {t("title")}
              </motion.span>

              <motion.span
                className="pointer-events-none absolute left-0 top-0 z-0 text-[#9B5DFF] mix-blend-screen"
                variants={glitchSecondary}
                aria-hidden="true"
              >
                {t("title")}
              </motion.span>
            </motion.span>
          </motion.h2>

          <p
            id={descId}
            className="mt-4 text-white/75 leading-relaxed md:leading-[1.7]
                   max-w-[52ch] md:max-w-[60ch] lg:max-w-[66ch]
                   text-[clamp(0.98rem,0.55vw+0.88rem,1.15rem)] mx-auto"
          >
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {proofItems.map((item, index) => (
            <ProofCard
              key={`${item.title}-${index}`}
              item={item}
              index={index}
              isInView={isInView}
              reduce={reduce}
            />
          ))}
        </div>
      </PageContainer>

      {/* floating decor */}
      <motion.div
        className="pointer-events-none absolute top-16 right-4 md:right-10 h-20 w-20 rounded-3xl border border-[#3A7BFF33] bg-[radial-gradient(circle_at_top,_#3A7BFF33,_transparent_70%)] opacity-50"
        animate={reduce ? undefined : { rotate: 360, scale: [1, 1.08, 1] }}
        transition={
          reduce
            ? undefined
            : {
                rotate: { duration: 26, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              }
        }
        aria-hidden="true"
      />
    </section>
  );
}