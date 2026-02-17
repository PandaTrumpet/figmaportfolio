


"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { PageContainer } from "../Layout/PageContainer";

const options = [
  {
    title: "Нужны заявки уже сейчас",
    result: "Лендинг + WhatsApp",
    description:
      "Быстрый запуск и ясный оффер. Получаете обращения в WhatsApp и понимаете спрос без сложной системы.",
    meta: "Time-to-leads: 10–14 дней",
  },
  {
    title: "Клиенты теряются и нет порядка",
    result: "Сайт + автоматизация",
    description:
      "Подключаем WhatsApp-бота, формы и CRM, чтобы заявки не терялись, а бизнес работал системно.",
    meta: "Order & CRM: Notion / Airtable",
  },
  {
    title: "Есть продукты или каталог",
    result: "E-commerce / платформа",
    description:
      "Каталог, оплата, статусы заказов и авто-уведомления. Всё, чтобы продавать без ручного хаоса.",
    meta: "Payments + automation",
  },
];

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function DecisionSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-120px" });
  const reduce = useReducedMotion();

  return (
    <section
      ref={sectionRef}
      className="
        relative isolate
        pt-10 pb-10
        md:pt-14 md:pb-14
        lg:pt-16 lg:pb-16
        overflow-visible
      "
    >
      {/* CLIP WRAPPER — режет фон, но не контент */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
        {/* premium background */}
        <div className="absolute inset-0">
          <div className="absolute -top-44 -left-40 h-[520px] w-[520px] bg-[radial-gradient(circle_at_center,_#3A7BFF55,_transparent_70%)] blur-3xl" />
          <div className="absolute top-1/2 -right-44 h-[640px] w-[640px] bg-[radial-gradient(circle_at_center,_#4CC2FF44,_transparent_70%)] blur-3xl" />
          <div className="absolute -bottom-56 left-1/3 h-[720px] w-[720px] bg-[radial-gradient(circle_at_center,_#9B5DFF33,_transparent_70%)] blur-[170px]" />
        </div>

        {/* subtle mesh */}
        <div className="absolute inset-0 opacity-[0.16] mix-blend-soft-light">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,_rgba(255,255,255,0.10),_transparent_35%),radial-gradient(circle_at_80%_30%,_rgba(255,255,255,0.08),_transparent_40%),radial-gradient(circle_at_30%_90%,_rgba(255,255,255,0.06),_transparent_45%)]" />
        </div>

        {/* fades — под общий фон страницы */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#020410] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#020410] to-transparent" />
      </div>

      <PageContainer className="relative z-10 max-w-[1200px]">
        {/* header */}
        <motion.div
          initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-12 md:mb-16"
        >
          {/* <motion.div
            className="mb-6 h-[2px] w-20 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
          /> */}

          <h2
            className="text-3xl 
  md:text-4xl 
  lg:text-5xl 
  xl:text-6xl 
  font-semibold 
  leading-tight 
  md:leading-[1.15]  text-slate-50] mb-3"
          >
            С чего стоит начать именно вам
          </h2>

          <p
            className="  mt-4
  text-white/75
  leading-relaxed md:leading-[1.7]
  max-w-[52ch] md:max-w-[60ch] lg:max-w-[66ch]
  text-[clamp(0.98rem,0.55vw+0.88rem,1.15rem)]"
          >
            Быстрый выбор: найдите сценарий, который ближе к вашей ситуации — и
            получите направление, которое даст результат быстрее всего.
          </p>
        </motion.div>

        {/* cards */}
        <div className="grid gap-6">
          {options.map((o, i) => (
            <motion.article
              key={o.title}
              initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 26 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1, ease: EASE }}
              whileHover={reduce ? undefined : { y: -8 }}
              className="
                group relative overflow-hidden
                rounded-[34px]
                border border-white/10
                bg-gradient-to-b from-[#060A13] via-[#050816] to-[#02030A]
                p-6 md:p-7
                shadow-[0_26px_80px_rgba(0,0,0,0.85)]
                backdrop-blur-xl
              "
            >
              {/* aura */}
              <motion.div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(76,194,255,0.35),_transparent_65%)]"
                initial={{ opacity: 0.35 }}
                whileHover={reduce ? undefined : { opacity: 0.8 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              />

              {/* shine */}
              <motion.div
                className="pointer-events-none absolute -inset-10 bg-[linear-gradient(115deg,_transparent_0%,_rgba(255,255,255,0.18)_30%,_transparent_60%)] mix-blend-screen"
                initial={{ x: "-140%", opacity: 0 }}
                whileHover={reduce ? undefined : { x: "140%", opacity: 1 }}
                transition={{ duration: 0.95, ease: "easeInOut" }}
              />

              {/* gradient outline */}
              <motion.div
                className="pointer-events-none absolute inset-0 rounded-[34px] border border-transparent"
                animate={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.06)" }}
                whileHover={
                  reduce
                    ? undefined
                    : {
                        boxShadow:
                          "0 0 0 1px rgba(76,194,255,0.6), 0 0 48px rgba(76,194,255,0.85)",
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

              <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                {/* left */}
                <div className="min-w-0">
                  <div className="flex items-center gap-4 mb-3">
              

                    <span
                      className="
    text-[11px] md:text-[12px]
    leading-[1.2]
    uppercase tracking-[0.22em]
    text-[#C7CEDF] opacity-65
    group-hover:opacity-90 transition-opacity
  "
                    >
                      Если
                    </span>

                    <span
                      className="
    text-[11px] md:text-[12px]
    leading-[1.2]
    uppercase tracking-[0.22em]
    text-[#C7CEDF] opacity-55
    group-hover:opacity-80 transition-opacity
  "
                    >
                      0{i + 1}
                    </span>
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
                    {o.title}
                  </h3>

               
                  <p
                    className="
    text-[15px] md:text-[16px] lg:text-[17px]
    leading-[1.55] md:leading-[1.6]
    text-[#C7CEDF]
    opacity-90
    max-w-[60ch]
  "
                  >
                    {o.description}
                  </p>

              
                  <div
                    className="
    mt-4 inline-flex items-center gap-2
    rounded-full border border-white/10 bg-white/5
    px-4 py-2
    text-[12px] md:text-[13px] lg:text-[14px]
    leading-[1.2]
    text-[#C7CEDF]
  "
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#4CC2FF]" />
                    {o.meta}
                  </div>
                </div>

                {/* right: result pill */}
                <div className="shrink-0">
             
                  <motion.a
                    href="#contact"
                    className="
    relative group inline-flex items-center justify-center
    overflow-hidden rounded-full
    px-7 py-3.5
    text-sm md:text-base font-medium
    text-[#050816]

    shadow-[0_0_40px_rgba(76,194,255,0.55)]
    hover:shadow-[0_0_65px_rgba(76,194,255,0.85)]
    transition-shadow
  "
                    whileHover={reduce ? undefined : { scale: 1.03 }}
                    whileTap={reduce ? undefined : { scale: 0.97 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
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
                      aria-hidden="true"
                    />

                    {/* Hover soft highlight — unified */}
                    <span
                      className="
      pointer-events-none absolute inset-0 rounded-full
      bg-white/10 opacity-0
      group-hover:opacity-100 transition-opacity
    "
                      aria-hidden="true"
                    />

                    <span className="relative z-10 flex items-center gap-3">
                      {o.result}
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </motion.a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
