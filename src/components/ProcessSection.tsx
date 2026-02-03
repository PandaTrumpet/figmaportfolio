


// "use client";

// import * as React from "react";
// import { motion, useReducedMotion } from "motion/react";
// import {
//   ArrowRight,
//   Workflow,
//   Sparkles,
//   Palette,
//   Cpu,
//   Zap,
// } from "lucide-react";

// const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];







// const steps = [
//   {
//     number: "01",
//     title: "Понимаем задачу",
//     icon: Workflow,
//     description:
//       "Коротко уточняем, что вы продаёте, кому и как сейчас приходят заявки. Сразу фиксируем, что должно измениться после запуска сайта.",
//     bullets: ["Цель сайта и оффер", "Какие заявки нужны", "Что мешает сейчас"],
//   },
//   {
//     number: "02",
//     title: "Проектируем путь клиента",
//     icon: Sparkles,
//     description:
//       "Делаем структуру, которая ведёт к заявке, и заранее продумываем, что происходит дальше: сообщение в WhatsApp, бот, запись, CRM.",
//     bullets: [
//       "Структура и тексты",
//       "Сценарий: сайт → WhatsApp",
//       "CRM/календарь/уведомления",
//     ],
//   },
//   {
//     number: "03",
//     title: "Дизайн",
//     icon: Palette,
//     description:
//       "Создаём современный премиальный дизайн под ваш бренд: аккуратно, понятно, удобно на телефоне и с фокусом на заявку.",
//     bullets: [
//       "Дизайн под ваш бренд",
//       "Премиум эффекты и hover",
//       "Mobile-first",
//     ],
//   },
//   {
//     number: "04",
//     title: "Разработка и запуск",
//     icon: Cpu,
//     description:
//       "Собираем быстрый сайт, подключаем интеграции и аналитику. После запуска всё тестируем, чтобы заявки приходили стабильно.",
//     bullets: [
//       "Быстрая загрузка",
//       "WhatsApp/бот/CRM (если нужно)",
//       "Аналитика заявок",
//     ],
//   },
// ];






// export function ProcessSection() {
//   const reduce = useReducedMotion();

//   const container = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: { staggerChildren: 0.1, delayChildren: 0.05 },
//     },
//   };

//   const item = {
//     hidden: { opacity: 0, y: 18, filter: "blur(10px)" },
//     show: {
//       opacity: 1,
//       y: 0,
//       filter: "blur(0px)",
//       transition: { duration: 0.75, ease: EASE },
//     },
//   };

//   return (
//     <section
//       id="process"
//       className="
//         relative min-h-screen flex items-center 
//         px-6 md:px-12 lg:px-20 py-32 overflow-visible
        
//         text-slate-100
//       "
//       aria-labelledby="process-title"
//     >
//       {/* Neon waves — same language as Hero */}
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

//       <div className="relative z-10 max-w-[1400px] mx-auto">
//         {/* Header */}
//         <motion.div
//           variants={container}
//           initial={reduce ? "show" : "hidden"}
//           whileInView="show"
//           viewport={{ once: true, amount: 0.35 }}
//           className="mb-16 md:mb-24"
//         >
//           <motion.div
//             variants={item}
//             className="w-16 h-0.5 mb-8 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-transparent"
//           />

//           <motion.h2
//             id="process-title"
//             variants={item}
//             className="text-4xl md:text-5xl lg:text-6xl leading-[1.05] max-w-3xl text-slate-100"
//           >
//             Сайт → заявки → автоматизация
//           </motion.h2>

//           <motion.p
//             variants={item}
//             className="text-lg md:text-xl text-slate-300/90 mt-6 max-w-2xl leading-relaxed"
//           >
//             Мы убираем «угадайку»: делаем сайт, который{" "}
//             <span className="text-slate-100">приводит заявки</span>, и сразу
//             подключаем автоматизацию — чтобы обращения{" "}
//             <span className="text-slate-100">не терялись</span>.
//           </motion.p>

//           <motion.div
//             variants={item}
//             className="mt-8 inline-flex flex-wrap gap-3"
//           >
//             <span className="px-4 py-2 rounded-full border border-cyan-400/40 bg-[#0A0F1E]/55 backdrop-blur-xl text-sm text-slate-200">
//               форма → WhatsApp/Telegram
//             </span>
//             <span className="px-4 py-2 rounded-full border border-cyan-400/40 bg-[#0A0F1E]/55 backdrop-blur-xl text-sm text-slate-200">
//               CRM → календарь
//             </span>
//             <span className="px-4 py-2 rounded-full border border-cyan-400/40 bg-[#0A0F1E]/55 backdrop-blur-xl text-sm text-slate-200">
//               аналитика → догоняющие сообщения
//             </span>
//           </motion.div>
//         </motion.div>

//         {/* Steps */}
//         <div className="relative">
//           {/* Desktop connecting line */}
//           <div className="hidden lg:block absolute top-12 left-0 right-0 h-[2px] bg-cyan-300/10" />

//           <motion.div
//             variants={container}
//             initial={reduce ? "show" : "hidden"}
//             whileInView="show"
//             viewport={{ once: true, amount: 0.25 }}
//             className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8"
//           >
//             {steps.map((step, index) => {
//               const Icon = step.icon;

//               return (
//                 <motion.div
//                   key={step.number}
//                   variants={item}
//                   className="relative"
//                 >
//                   {/* dot */}
//                   <div className="hidden lg:block absolute top-12 left-0 w-3 h-3 rounded-full transform -translate-y-1/2">
//                     <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#63E5FF] shadow-[0_0_30px_rgba(76,194,255,0.65)]" />
//                   </div>

//                   {/* CARD with premium hover — SAFE for text */}
//                   <motion.div
//                     whileHover={
//                       reduce
//                         ? undefined
//                         : {
//                             y: -6,
//                             scale: 1.02,
//                           }
//                     }
//                     whileTap={reduce ? undefined : { scale: 0.99 }}
//                     transition={{ duration: 0.35, ease: EASE }}
//                     style={{
//                       willChange: "transform",
//                       transform: "translateZ(0)",
//                     }}
//                     className="
//     group relative rounded-3xl overflow-hidden
//     border border-cyan-400/30 bg-[#0A0F1E]/70 backdrop-blur-xl
//     shadow-[0_0_60px_rgba(59,130,246,0.18)]
//     p-6 md:p-7
//   "
//                   >
//                     {/* premium border highlight */}
//                     <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                       <div className="absolute inset-0 rounded-3xl border border-cyan-300/35" />
//                     </div>

//                     {/* neon glow wash */}
//                     <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                       <div
//                         className="absolute -top-16 -right-16 h-52 w-52 rounded-full blur-3xl opacity-70"
//                         style={{
//                           background:
//                             "radial-gradient(circle, rgba(76,194,255,0.6), transparent 60%)",
//                         }}
//                       />
//                       <div
//                         className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full blur-3xl opacity-55"
//                         style={{
//                           background:
//                             "radial-gradient(circle, rgba(58,123,255,0.5), transparent 60%)",
//                         }}
//                       />
//                     </div>

//                     {/* sheen sweep */}
//                     <div
//                       className="
//       pointer-events-none absolute -inset-16 opacity-0 group-hover:opacity-100
//       transition-opacity duration-500
//       [transform:translateX(-30%)_translateY(-10%)_rotate(18deg)]
//     "
//                     >
//                       <div className="h-24 w-[140%] bg-gradient-to-r from-transparent via-white/12 to-transparent blur-[1px]" />
//                     </div>

//                     {/* subtle depth gradient */}
//                     <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                       <div className="absolute inset-0 bg-gradient-to-b from-cyan-400/10 via-transparent to-indigo-400/10" />
//                     </div>

//                     {/* CONTENT — strictly 2D (no blur) */}
//                     <div className="relative z-10 [backface-visibility:hidden] [transform:translateZ(0)]">
//                       {/* Step number */}
//                       <div className="text-[3.6rem] leading-none font-semibold text-slate-100/10">
//                         {step.number}
//                       </div>

//                       {/* Title + icon */}
//                       <div className="mt-3 flex items-start gap-3">
//                         <div
//                           className="
//           mt-1 inline-flex h-10 w-10 items-center justify-center rounded-2xl
//           border border-cyan-400/35 bg-[#0B1020]/70
//           shadow-[0_0_30px_rgba(76,194,255,0.25)]
//           transition-shadow duration-500
//           group-hover:shadow-[0_0_46px_rgba(76,194,255,0.45)]
//         "
//                         >
//                           <Icon className="h-5 w-5 text-cyan-200/90" />
//                         </div>

//                         <div>
//                           <h3 className="text-xl md:text-2xl font-semibold text-slate-100">
//                             {step.title}
//                           </h3>
//                           <p className="mt-2 text-sm md:text-base leading-relaxed text-slate-300/90">
//                             {step.description}
//                           </p>
//                         </div>
//                       </div>

//                       {/* Bullets */}
//                       <ul className="mt-5 space-y-2 text-sm text-slate-200/80">
//                         {step.bullets.map((b) => (
//                           <li key={b} className="flex gap-2">
//                             <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-cyan-300/60" />
//                             <span>{b}</span>
//                           </li>
//                         ))}
//                       </ul>

//                       {/* Mobile connector */}
//                       {index < steps.length - 1 && (
//                         <div className="lg:hidden w-[2px] h-10 bg-cyan-300/10 mt-6 ml-2" />
//                       )}
//                     </div>
//                   </motion.div>
//                 </motion.div>
//               );
//             })}
//           </motion.div>
//         </div>

//         {/* CTA */}
//         <motion.div
//           initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.25 }}
//           transition={{ duration: 0.8, ease: EASE }}
//           className="
//             mt-20 md:mt-28 relative overflow-hidden rounded-3xl
//             border border-cyan-400/30 bg-[#0A0F1E]/70 backdrop-blur-xl
//             shadow-[0_0_70px_rgba(76,194,255,0.18)]
//           "
//         >
//           <div className="pointer-events-none absolute inset-0 opacity-[0.10]">
//             <div
//               className="h-full w-full"
//               style={{
//                 backgroundImage:
//                   "linear-gradient(rgba(51,65,85,0.28) 1px, transparent 1px), linear-gradient(90deg, rgba(51,65,85,0.28) 1px, transparent 1px)",
//                 backgroundSize: "80px 80px",
//               }}
//             />
//           </div>

//           <div className="relative z-10 p-10 md:p-14">
//             <div className="flex items-center gap-2 text-slate-200/80 text-xs tracking-widest uppercase">
//               <Zap className="h-4 w-4 text-cyan-200/90" />
//               <span>Премиум • Быстро • Измеримо</span>
//             </div>

//             <h3 className="mt-4 text-3xl md:text-4xl leading-tight text-slate-100 max-w-3xl">
//               Хотите демо, где заявка{" "}
//               <span className="text-slate-100">сразу</span> уходит в WhatsApp и
//               CRM?
//             </h3>

//             <p className="mt-4 text-lg text-slate-300/90 max-w-2xl leading-relaxed">
//               Покажем, как это работает на примере вашей ниши (клиника, салон,
//               сервис). Вы увидите не «красивый макет», а понятный поток: форма →
//               сообщение → запись/CRM → аналитика.
//             </p>

//             <div className="mt-8 flex flex-col sm:flex-row gap-4">
//               <motion.a
//                 href="#contact"
//                 className="
//                   relative group inline-flex items-center justify-center gap-3
//                   px-8 py-5 rounded-full font-medium
//                   bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#63E5FF]
//                   text-slate-900
//                   shadow-[0_0_40px_rgba(76,194,255,0.55)]
//                   hover:shadow-[0_0_60px_rgba(76,194,255,0.8)]
//                   transition-all
//                 "
//                 whileHover={{ scale: 1.03 }}
//                 whileTap={{ scale: 0.97 }}
//               >
//                 <span className="relative z-10">Запросить демо</span>
//                 <ArrowRight className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1" />
//                 <div className="pointer-events-none absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
//               </motion.a>

//               <motion.a
//                 href="#cases"
//                 className="
//                   group px-8 py-5 rounded-full inline-flex items-center justify-center gap-3
//                   border border-cyan-400/60 text-slate-100
//                   hover:bg-cyan-500/5 hover:shadow-[0_0_30px_rgba(56,189,248,0.45)]
//                   transition-all
//                 "
//                 whileHover={{ scale: 1.03 }}
//                 whileTap={{ scale: 0.97 }}
//               >
//                 <span>Посмотреть кейсы</span>
//               </motion.a>
//             </div>

//             <p className="mt-6 text-xs text-slate-200/70">
//               Быстрый старт: демо-созвон и понятный план работ. Дальше — дизайн,
//               разработка и интеграции.
//             </p>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }


"use client";

import * as React from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  Workflow,
  Sparkles,
  Palette,
  Cpu,
  Zap,
} from "lucide-react";
import { PageContainer } from "./Layout/PageContainer";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const steps = [
  {
    number: "01",
    title: "Понимаем задачу",
    icon: Workflow,
    description:
      "Коротко уточняем, что вы продаёте, кому и как сейчас приходят заявки. Сразу фиксируем, что должно измениться после запуска сайта.",
    bullets: ["Цель сайта и оффер", "Какие заявки нужны", "Что мешает сейчас"],
  },
  {
    number: "02",
    title: "Проектируем путь клиента",
    icon: Sparkles,
    description:
      "Делаем структуру, которая ведёт к заявке, и заранее продумываем, что происходит дальше: сообщение в WhatsApp, бот, запись, CRM.",
    bullets: [
      "Структура и тексты",
      "Сценарий: сайт → WhatsApp",
      "CRM/календарь/уведомления",
    ],
  },
  {
    number: "03",
    title: "Дизайн",
    icon: Palette,
    description:
      "Создаём современный премиальный дизайн под ваш бренд: аккуратно, понятно, удобно на телефоне и с фокусом на заявку.",
    bullets: [
      "Дизайн под ваш бренд",
      "Премиум эффекты и hover",
      "Mobile-first",
    ],
  },
  {
    number: "04",
    title: "Разработка и запуск",
    icon: Cpu,
    description:
      "Собираем быстрый сайт, подключаем интеграции и аналитику. После запуска всё тестируем, чтобы заявки приходили стабильно.",
    bullets: [
      "Быстрая загрузка",
      "WhatsApp/бот/CRM (если нужно)",
      "Аналитика заявок",
    ],
  },
];

export function ProcessSection() {
  const reduce = useReducedMotion();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.05 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 18, filter: "blur(10px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.75, ease: EASE },
    },
  };

  return (
    <section
      id="process"
      className="relative min-h-screen flex items-center py-32 overflow-visible text-slate-100"
      aria-labelledby="process-title"
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

      <PageContainer>
        <div className="relative z-10">
          {/* Header */}
          <motion.div
            variants={container}
            initial={reduce ? "show" : "hidden"}
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            className="mb-16 md:mb-24"
          >
            <motion.div
              variants={item}
              className="w-16 h-0.5 mb-8 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-transparent"
            />

            <motion.h2
              id="process-title"
              variants={item}
              className="text-4xl md:text-5xl lg:text-6xl leading-[1.05] max-w-3xl text-slate-100"
            >
              Сайт → заявки → автоматизация
            </motion.h2>

            <motion.p
              variants={item}
              className="text-lg md:text-xl text-slate-300/90 mt-6 max-w-2xl leading-relaxed"
            >
              Мы убираем «угадайку»: делаем сайт, который{" "}
              <span className="text-slate-100">приводит заявки</span>, и сразу
              подключаем автоматизацию — чтобы обращения{" "}
              <span className="text-slate-100">не терялись</span>.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-8 inline-flex flex-wrap gap-3"
            >
              <span className="px-4 py-2 rounded-full border border-cyan-400/40 bg-[#0A0F1E]/55 backdrop-blur-xl text-sm text-slate-200">
                форма → WhatsApp/Telegram
              </span>
              <span className="px-4 py-2 rounded-full border border-cyan-400/40 bg-[#0A0F1E]/55 backdrop-blur-xl text-sm text-slate-200">
                CRM → календарь
              </span>
              <span className="px-4 py-2 rounded-full border border-cyan-400/40 bg-[#0A0F1E]/55 backdrop-blur-xl text-sm text-slate-200">
                аналитика → догоняющие сообщения
              </span>
            </motion.div>
          </motion.div>

          {/* Steps */}
          <div className="relative">
            {/* Desktop connecting line */}
            <div className="hidden lg:block absolute top-12 left-0 right-0 h-[2px] bg-cyan-300/10" />

            <motion.div
              variants={container}
              initial={reduce ? "show" : "hidden"}
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8"
            >
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <motion.div
                    key={step.number}
                    variants={item}
                    className="relative"
                  >
                    {/* dot */}
                    <div className="hidden lg:block absolute top-12 left-0 w-3 h-3 rounded-full transform -translate-y-1/2">
                      <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#63E5FF] shadow-[0_0_30px_rgba(76,194,255,0.65)]" />
                    </div>

                    {/* CARD */}
                    <motion.div
                      whileHover={reduce ? undefined : { y: -6, scale: 1.02 }}
                      whileTap={reduce ? undefined : { scale: 0.99 }}
                      transition={{ duration: 0.35, ease: EASE }}
                      style={{
                        willChange: "transform",
                        transform: "translateZ(0)",
                      }}
                      className="
                        group relative rounded-3xl overflow-hidden
                        border border-cyan-400/30 bg-[#0A0F1E]/70 backdrop-blur-xl
                        shadow-[0_0_60px_rgba(59,130,246,0.18)]
                        p-6 md:p-7
                      "
                    >
                      {/* premium border highlight */}
                      <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute inset-0 rounded-3xl border border-cyan-300/35" />
                      </div>

                      {/* neon glow wash */}
                      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div
                          className="absolute -top-16 -right-16 h-52 w-52 rounded-full blur-3xl opacity-70"
                          style={{
                            background:
                              "radial-gradient(circle, rgba(76,194,255,0.6), transparent 60%)",
                          }}
                        />
                        <div
                          className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full blur-3xl opacity-55"
                          style={{
                            background:
                              "radial-gradient(circle, rgba(58,123,255,0.5), transparent 60%)",
                          }}
                        />
                      </div>

                      {/* sheen sweep */}
                      <div
                        className="
                          pointer-events-none absolute -inset-16 opacity-0 group-hover:opacity-100
                          transition-opacity duration-500
                          [transform:translateX(-30%)_translateY(-10%)_rotate(18deg)]
                        "
                      >
                        <div className="h-24 w-[140%] bg-gradient-to-r from-transparent via-white/12 to-transparent blur-[1px]" />
                      </div>

                      {/* subtle depth gradient */}
                      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute inset-0 bg-gradient-to-b from-cyan-400/10 via-transparent to-indigo-400/10" />
                      </div>

                      {/* CONTENT */}
                      <div className="relative z-10 [backface-visibility:hidden] [transform:translateZ(0)]">
                        <div className="text-[3.6rem] leading-none font-semibold text-slate-100/10">
                          {step.number}
                        </div>

                        <div className="mt-3 flex items-start gap-3">
                          <div
                            className="
                              mt-1 inline-flex h-10 w-10 items-center justify-center rounded-2xl
                              border border-cyan-400/35 bg-[#0B1020]/70
                              shadow-[0_0_30px_rgba(76,194,255,0.25)]
                              transition-shadow duration-500
                              group-hover:shadow-[0_0_46px_rgba(76,194,255,0.45)]
                            "
                          >
                            <Icon className="h-5 w-5 text-cyan-200/90" />
                          </div>

                          <div>
                            <h3 className="text-xl md:text-2xl font-semibold text-slate-100">
                              {step.title}
                            </h3>
                            <p className="mt-2 text-sm md:text-base leading-relaxed text-slate-300/90">
                              {step.description}
                            </p>
                          </div>
                        </div>

                        <ul className="mt-5 space-y-2 text-sm text-slate-200/80">
                          {step.bullets.map((b) => (
                            <li key={b} className="flex gap-2">
                              <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-cyan-300/60" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>

                        {index < steps.length - 1 && (
                          <div className="lg:hidden w-[2px] h-10 bg-cyan-300/10 mt-6 ml-2" />
                        )}
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="
              mt-20 md:mt-28 relative overflow-hidden rounded-3xl
              border border-cyan-400/30 bg-[#0A0F1E]/70 backdrop-blur-xl
              shadow-[0_0_70px_rgba(76,194,255,0.18)]
            "
          >
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

            <div className="relative z-10 p-10 md:p-14">
              <div className="flex items-center gap-2 text-slate-200/80 text-xs tracking-widest uppercase">
                <Zap className="h-4 w-4 text-cyan-200/90" />
                <span>Премиум • Быстро • Измеримо</span>
              </div>

              <h3 className="mt-4 text-3xl md:text-4xl leading-tight text-slate-100 max-w-3xl">
                Хотите демо, где заявка{" "}
                <span className="text-slate-100">сразу</span> уходит в WhatsApp
                и CRM?
              </h3>

              <p className="mt-4 text-lg text-slate-300/90 max-w-2xl leading-relaxed">
                Покажем, как это работает на примере вашей ниши (клиника, салон,
                сервис). Вы увидите не «красивый макет», а понятный поток: форма
                → сообщение → запись/CRM → аналитика.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="#contact"
                  className="
                    relative group inline-flex items-center justify-center gap-3
                    px-8 py-5 rounded-full font-medium
                    bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#63E5FF]
                    text-slate-900
                    shadow-[0_0_40px_rgba(76,194,255,0.55)]
                    hover:shadow-[0_0_60px_rgba(76,194,255,0.8)]
                    transition-all
                  "
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className="relative z-10">Запросить демо</span>
                  <ArrowRight className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  <div className="pointer-events-none absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>

                <motion.a
                  href="#cases"
                  className="
                    group px-8 py-5 rounded-full inline-flex items-center justify-center gap-3
                    border border-cyan-400/60 text-slate-100
                    hover:bg-cyan-500/5 hover:shadow-[0_0_30px_rgba(56,189,248,0.45)]
                    transition-all
                  "
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span>Посмотреть кейсы</span>
                </motion.a>
              </div>

              <p className="mt-6 text-xs text-slate-200/70">
                Быстрый старт: демо-созвон и понятный план работ. Дальше —
                дизайн, разработка и интеграции.
              </p>
            </div>
          </motion.div>
        </div>
      </PageContainer>
    </section>
  );
}
