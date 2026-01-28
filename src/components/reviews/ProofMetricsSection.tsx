"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ShieldCheck, Timer, Workflow, Sparkles } from "lucide-react";

type ProofItem = {
  icon: any;
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
  gradient: string; // tailwind gradient tokens like in ServiceCard
};

// const proofItems: ProofItem[] = [
//   {
//     icon: Workflow,
//     title: "Прозрачный процесс",
//     description:
//       "Пошаговая разработка: структура → дизайн → сборка → запуск. Вы всегда видите прогресс и понимаете, что происходит.",
//     metric: "4",
//     metricLabel: "этапа до запуска",
//     gradient: "from-[#3A7BFF33] via-[#4CC2FF22] to-transparent",
//   },
//   {
//     icon: Timer,
//     title: "Быстрый запуск",
//     description:
//       "Фокус на скорости без потери качества: сначала ядро (оффер + заявки), затем улучшения и расширения.",
//     metric: "10–14",
//     metricLabel: "дней до первой версии",
//     gradient: "from-[#4CC2FF33] via-[#9B5DFF22] to-transparent",
//   },
//   {
//     icon: ShieldCheck,
//     title: "Стабильная воронка заявок",
//     description:
//       "Заявки не теряются: понятные CTA, короткий путь до WhatsApp и контроль точек входа.",
//     metric: "1",
//     metricLabel: "главная цель — заявка",
//     gradient: "from-[#9B5DFF33] via-[#3A7BFF22] to-transparent",
//   },
//   {
//     icon: Sparkles,
//     title: "Премиальная подача",
//     description:
//       "Сильная визуальная подача + UX: дизайн и анимации усиливают доверие, но не мешают действию.",
//     metric: "90+",
//     metricLabel: "Lighthouse цель",
//     gradient: "from-[#3A7BFF33] via-[#9B5DFF22] to-transparent",
//   },
// ];

// лёгкий glitch для заголовка (как в твоём FocusSection)

const proofItems = [
  {
    icon: Workflow,
    title: "Понятный и управляемый процесс",
    description:
      "Без хаоса и сюрпризов. Сначала структура и оффер, затем дизайн, сборка и запуск. Вы понимаете, что делаем, зачем и на каком этапе проект.",
    metric: "4",
    metricLabel: "этапа до запуска",
    gradient: "from-[#3A7BFF33] via-[#4CC2FF22] to-transparent",
  },
  {
    icon: Timer,
    title: "Быстрый старт без потери фокуса",
    description:
      "Не тянем месяцами. Сначала запускаем рабочую версию, которая принимает заявки. Улучшения и расширения — уже после.",
    metric: "10–14",
    metricLabel: "дней до запуска",
    gradient: "from-[#4CC2FF33] via-[#9B5DFF22] to-transparent",
  },
  {
    icon: ShieldCheck,
    title: "Заявки не теряются",
    description:
      "Короткий путь до действия: понятные CTA, WhatsApp как основной канал и контроль всех точек входа.",
    metric: "1",
    metricLabel: "цель — заявка",
    gradient: "from-[#9B5DFF33] via-[#3A7BFF22] to-transparent",
  },
  {
    icon: Sparkles,
    title: "Дизайн, который работает на бизнес",
    description:
      "Визуал и анимации усиливают доверие и не мешают пользователю. Красиво — да. Но в первую очередь эффективно.",
    metric: "90+",
    metricLabel: "ориентир Lighthouse",
    gradient: "from-[#3A7BFF33] via-[#9B5DFF22] to-transparent",
  },
];
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
}: {
  item: ProofItem;
  index: number;
  isInView: boolean;
}) {
  const Icon = item.icon;

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 34 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 34 }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
        ease: EASE,
      }}
    >
      {/* базовый глубокий glow под карточкой */}
      <motion.div
        className="absolute -inset-[12px] rounded-[34px] bg-[radial-gradient(circle_at_top,_rgba(58,123,255,0.55),_transparent_70%)] blur-2xl -z-20"
        animate={{ opacity: 0.35, scale: 1 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      />

      <motion.div className="relative h-full rounded-3xl border border-white/10 bg-gradient-to-b from-[#060A13] via-[#050816] to-[#02030A] p-7 md:p-8 shadow-[0_26px_80px_rgba(0,0,0,0.85)] backdrop-blur-xl overflow-hidden">
        {/* inner glow */}
        <motion.div
          className={`pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br ${item.gradient} -z-10 opacity-45`}
        />

        {/* shine */}
        <motion.div
          className="pointer-events-none absolute -inset-10 bg-[linear-gradient(115deg,_transparent_0%,_rgba(255,255,255,0.22)_30%,_transparent_60%)] mix-blend-screen -z-10 opacity-0"
          whileHover={{ opacity: 1, x: "140%" }}
          initial={{ x: "-140%" }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
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
        />

        <div className="relative z-30">
          {/* Icon */}
          <div className="mb-6 flex items-center justify-between gap-4">
            <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-[radial-gradient(circle_at_top,_#3A7BFF3b,_#050816)] overflow-hidden shadow-[0_0_40px_rgba(58,123,255,0.7)]">
              <Icon className="relative z-20 h-7 w-7 text-[#E8F2FF]" />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#3A7BFF66] to-[#4CC2FF66] opacity-40" />
            </div>

            {/* Metric pill */}
            <div className="text-right">
              <p className="text-2xl md:text-3xl font-semibold text-[#F2F4FA] leading-none">
                {item.metric}
              </p>
              <p className="text-[10px] md:text-xs uppercase tracking-[0.24em] text-[#C7CEDF]/70 mt-1">
                {item.metricLabel}
              </p>
            </div>
          </div>

          <h3 className="text-xl md:text-2xl font-semibold mb-3 text-[#F2F4FA]">
            {item.title}
          </h3>

          <p className="text-sm md:text-base leading-relaxed text-[#C7CEDF]">
            {item.description}
          </p>
        </div>

        {/* Decorative corner */}
        <div className="pointer-events-none absolute bottom-4 right-4 h-8 w-8 opacity-40 z-20">
          <div className="h-full w-full rounded-br-3xl border-b border-r border-[#4CC2FF77]" />
        </div>
      </motion.div>
    </motion.div>
  );
}

export function ProofMetricsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative px-6 md:px-12 lg:px-20 py-24 md:py-32 overflow-hidden bg-[#050816]"
    >
      {/* фоновые споты */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -top-40 -left-32 h-80 w-80 bg-[radial-gradient(circle_at_center,_#3A7BFF55,_transparent_70%)] blur-3xl" />
        <div className="absolute -bottom-40 -right-10 h-96 w-96 bg-[radial-gradient(circle_at_center,_#4CC2FF55,_transparent_70%)] blur-3xl" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto text-[#F5EFE7]">
        {/* Header */}
        <motion.div
          className="mb-16 md:mb-20 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="mb-6 h-[2px] w-20 mx-auto bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          />

          <motion.h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-4 md:mb-6">
            <motion.span
              className="relative inline-block"
              initial="initial"
              whileHover="hover"
            >
              <span className="relative z-10">Proof by process + metrics</span>

              <motion.span
                className="pointer-events-none absolute left-0 top-0 z-0 text-[#4CC2FF] mix-blend-screen"
                variants={glitchPrimary}
                aria-hidden="true"
              >
                Proof by process + metrics
              </motion.span>

              <motion.span
                className="pointer-events-none absolute left-0 top-0 z-0 text-[#9B5DFF] mix-blend-screen"
                variants={glitchSecondary}
                aria-hidden="true"
              >
                Proof by process + metrics
              </motion.span>
            </motion.span>
          </motion.h2>

          <p className="text-base md:text-xl opacity-80 max-w-3xl mx-auto leading-relaxed text-[#C7CEDF]">
            Мы делаем акцент не на наградах, а на результате. Понятный процесс,
            быстрый запуск и метрики, которые напрямую влияют на заявки и
            продажи.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {proofItems.map((item, index) => (
            <ProofCard
              key={item.title}
              item={item}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>

      {/* floating decor */}
      <motion.div
        className="pointer-events-none absolute top-16 right-4 md:right-10 h-20 w-20 rounded-3xl border border-[#3A7BFF33] bg-[radial-gradient(circle_at_top,_#3A7BFF33,_transparent_70%)] opacity-50"
        animate={{
          rotate: 360,
          scale: [1, 1.08, 1],
        }}
        transition={{
          rotate: { duration: 26, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
      />
    </section>
  );
}
