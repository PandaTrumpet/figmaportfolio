


"use client";

import { motion, useReducedMotion } from "motion/react";
import { PageContainer } from "../Layout/PageContainer";

const points = [
  {
    title: "Мы строим путь клиента",
    text: "Не просто сайт, а продуманную логику: от первого касания до заявки и повторного обращения.",
  },
  {
    title: "Автоматизация — часть системы",
    text: "WhatsApp, формы и CRM интегрированы в процесс, а не подключаются «потом, если нужно».",
  },
  {
    title: "Прозрачность до старта",
    text: "Вы понимаете структуру, этапы и результат ещё до начала работы — без сюрпризов.",
  },
  {
    title: "Фокус на малый бизнес",
    text: "Решения адаптированы под реальные бюджеты и задачи малого бизнеса в Израиле.",
  },
];

export function DifferenceSection() {
  const reduce = useReducedMotion();

  return (
    <section
      className="
        relative isolate
       pt-10 pb-10
        md:pt-14 md:pb-14
        lg:pt-16 lg:pb-16
        overflow-visible
      "
      aria-label="Why it works"
    >
      {/* CLIP WRAPPER — режет фон, НЕ контент */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
        {/* background glow */}
        <div className="absolute inset-0">
          <div className="absolute -top-40 -left-40 h-[520px] w-[520px] bg-[radial-gradient(circle_at_center,_#3A7BFF44,_transparent_70%)] blur-3xl" />
          <div className="absolute bottom-0 -right-40 h-[620px] w-[620px] bg-[radial-gradient(circle_at_center,_#9B5DFF33,_transparent_70%)] blur-3xl" />
        </div>

        {/* subtle noise */}
        <div className="absolute inset-0 opacity-[0.14] mix-blend-soft-light">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,_rgba(255,255,255,0.08),_transparent_35%),radial-gradient(circle_at_80%_30%,_rgba(255,255,255,0.06),_transparent_40%)]" />
        </div>

        {/* fades — под общий фон страницы */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#020410] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#020410] to-transparent" />
      </div>

      <PageContainer className="relative z-10 max-w-[1100px]">
        {/* header */}
        <motion.div
          initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 md:mb-20"
        >
          {/* <div className="mb-6 h-[2px] w-20 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]" /> */}

          <h2
            className="text-3xl 
  md:text-4xl 
  lg:text-5xl 
  xl:text-6xl 
  font-semibold 
  leading-tight 
  md:leading-[1.15]  text-slate-50 mb-3"
          >
            Почему это работает
          </h2>

          <p
            className="  mt-4
  text-white/75
  leading-relaxed md:leading-[1.7]
  max-w-[52ch] md:max-w-[60ch] lg:max-w-[66ch]
  text-[clamp(0.98rem,0.55vw+0.88rem,1.15rem)]"
          >
            Мы не продаём шаблоны. Мы проектируем систему, которая приводит
            клиентов и упрощает управление бизнесом.
          </p>
        </motion.div>

        {/* cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {points.map((p, i) => (
            <motion.div
              key={p.title}
              initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.55,
                delay: reduce ? 0 : i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={reduce ? undefined : { y: -8 }}
              className="
                group relative overflow-hidden
                rounded-3xl
                border border-white/10
                bg-gradient-to-b from-[#060A13] via-[#050816] to-[#02030A]
                p-6 md:p-7
                backdrop-blur-xl
                shadow-[0_26px_80px_rgba(0,0,0,0.85)]
                transition-all duration-300
              "
            >
              {/* aura */}
              <motion.div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(76,194,255,0.35),_transparent_65%)]"
                initial={{ opacity: 0.35 }}
                whileHover={reduce ? undefined : { opacity: 0.75 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              />

              {/* glass shine */}
              <motion.div
                className="pointer-events-none absolute -inset-10 bg-[linear-gradient(115deg,_transparent_0%,_rgba(255,255,255,0.18)_30%,_transparent_60%)] mix-blend-screen"
                initial={{ x: "-140%", opacity: 0 }}
                whileHover={reduce ? undefined : { x: "140%", opacity: 1 }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
              />

              {/* gradient outline */}
              <motion.div
                className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent"
                animate={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.06)" }}
                whileHover={
                  reduce
                    ? undefined
                    : {
                        boxShadow:
                          "0 0 0 1px rgba(76,194,255,0.6), 0 0 46px rgba(76,194,255,0.85)",
                      }
                }
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

              {/* content */}
              <div className="relative z-10 transform-none will-change-auto">
             
                <div
                  className="
    mb-3
    text-[11px] md:text-[12px]
    leading-[1.2]
    uppercase tracking-[0.22em]
    text-[#C7CEDF]
    opacity-60 group-hover:opacity-90
  "
                >
                  0{i + 1}
                </div>

                <h3
                  className="
    text-[20px] md:text-[22px] lg:text-[24px]
    leading-[1.15] md:leading-[1.12]
    font-semibold tracking-[-0.01em]
    text-[#F5EFE7]
    mb-2.5 md:mb-3
  "
                >
                  {p.title}
                </h3>

                <p
                  className="
    text-[15px] md:text-[16px] lg:text-[17px]
    leading-[1.55] md:leading-[1.6]
    text-[#C7CEDF]
    opacity-90
    max-w-[56ch]
  "
                >
                  {p.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
