

"use client";

import { useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { Zap, Smartphone, ShoppingCart } from "lucide-react";
import { PageContainer } from "./Layout/PageContainer";
import Link from "next/link";
import { useLocale } from "next-intl";
const services = [
  {
    icon: Zap,
    title: "Лендинги",
    description:
      "Лендинг, который приводит заявки в WhatsApp и не теряет клиентов. Быстрый запуск, чёткий оффер, аналитика и конверсионная структура.",
    features: [
      "Готово за 10–14 дней",
      "WhatsApp lead capture + tracking",
      "А/В-готовность и аналитика",
    ],
    gradient: "from-[#3A7BFF33] via-[#4CC2FF22] to-transparent",
  },
  {
    icon: Smartphone,
    title: "Сайт + автоматизация",
    description:
      "Сайт, который работает как “менеджер 24/7”: объясняет ценность, принимает заявки через WhatsApp-бота и направляет их в CRM, чтобы вы не теряли клиентов.",
    features: [
      "WhatsApp-бот для заявок и первичных вопросов",
      "CRM (Notion / Airtable / HubSpot) по необходимости",
      "Формы, бот и заявки → в одну систему",
    ],
    gradient: "from-[#4CC2FF33] via-[#9B5DFF22] to-transparent",
  },
  {
    icon: ShoppingCart,
    title: "Интернет-магазины",
    description:
      "Магазин, который продаёт: удобный каталог, оплата, автоматические статусы заказов и сообщения клиенту в WhatsApp.",
    features: [
      "Оплата и доставка (по вашему стеку)",
      "Авто-уведомления в WhatsApp/SMS",
      "Панель управления заказами",
    ],
    gradient: "from-[#9B5DFF33] via-[#3A7BFF22] to-transparent",
  },
];

// лёгкий glitch для заголовка
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



function ServiceCard({
  service,
  index,
  isInView,
}: {
  service: (typeof services)[number];
  index: number;
  isInView: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = service.icon;

  return (
    <motion.div
      className="relative"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration: 0.6,
        delay: index * 0.14,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {/* базовый глубокий glow под карточкой */}
      <motion.div
        className="absolute -inset-[12px] rounded-[34px] bg-[radial-gradient(circle_at_top,_rgba(58,123,255,0.55),_transparent_70%)] blur-2xl -z-20"
        animate={{
          opacity: isHovered ? 1 : 0.35,
          scale: isHovered ? 1.08 : 1,
        }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      />

      {/* дополнительная аура при hover */}
      <motion.div
        className="absolute inset-0 rounded-[40px] bg-[radial-gradient(circle_at_center,_rgba(76,194,255,0.5),_transparent_65%)] blur-3xl -z-10 pointer-events-none"
        animate={{
          opacity: isHovered ? 0.85 : 0,
          scale: isHovered ? 1.05 : 0.95,
        }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      />

      {/* сама карточка */}
      <motion.div
        className="relative h-full rounded-3xl border border-white/10 bg-gradient-to-b from-[#060A13] via-[#050816] to-[#02030A] p-7 md:p-8 shadow-[0_26px_80px_rgba(0,0,0,0.85)] backdrop-blur-xl overflow-hidden"
        whileHover={{
          y: -16,
          boxShadow: "0 32px 120px rgba(0,0,0,1)",
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* inner glow (под контентом) */}
        <motion.div
          className={`pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br ${service.gradient} -z-10`}
          animate={{ opacity: isHovered ? 0.9 : 0.35 }}
          transition={{ duration: 0.3 }}
        />

        {/* shine по стеклу */}
        <motion.div
          className="pointer-events-none absolute -inset-10 bg-[linear-gradient(115deg,_transparent_0%,_rgba(255,255,255,0.22)_30%,_transparent_60%)] mix-blend-screen -z-10"
          initial={{ x: "-140%" }}
          whileHover={{ x: "140%" }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
        />

        {/* рамка-контур */}
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent z-10"
          animate={{
            boxShadow: isHovered
              ? "0 0 0 1px rgba(76,194,255,0.7), 0 0 42px rgba(76,194,255,1)"
              : "0 0 0 1px rgba(255,255,255,0.06)",
          }}
          transition={{ duration: 0.25 }}
          style={{
            background: "linear-gradient(135deg, #3A7BFF, #4CC2FF, #9B5DFF)",
            WebkitMask:
              "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            padding: "1px",
          }}
        />

        {/* Icon */}
        <motion.div
          className="relative z-20 mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-[radial-gradient(circle_at_top,_#3A7BFF3b,_#050816)] overflow-hidden shadow-[0_0_40px_rgba(58,123,255,0.7)]"
          animate={
            isHovered
              ? { scale: 1.06, boxShadow: "0 0 55px rgba(58,123,255,1)" }
              : { scale: 1, boxShadow: "0 0 40px rgba(58,123,255,0.7)" }
          }
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          <Icon className="relative z-20 h-8 w-8 text-[#E8F2FF]" />
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-transparent via-[#3A7BFF66] to-[#4CC2FF66] -z-10"
            animate={{ opacity: isHovered ? 0.8 : 0.4 }}
            transition={{ duration: 0.25 }}
          />
        </motion.div>

        {/* Текст — единый контракт типографики */}
        <div className="relative z-30 transform-none will-change-auto">
          <h3
            className="
              text-[20px] md:text-[22px] lg:text-[24px]
              leading-[1.15] md:leading-[1.12]
              font-semibold tracking-[-0.01em]
              text-[#F2F4FA]
              mb-2.5 md:mb-3
            "
          >
            {service.title}
          </h3>

          <p
            className="
              text-[15px] md:text-[16px] lg:text-[17px]
              leading-[1.55] md:leading-[1.6]
              text-[#E8ECF4]
              mb-5 md:mb-6
              max-w-[56ch]
            "
          >
            {service.description}
          </p>

          <ul className="space-y-2.5 md:space-y-3">
            {service.features.map((feature, i) => (
              <motion.li
                key={feature}
                className="
                  flex items-start gap-3
                  text-[14px] md:text-[15px]
                  leading-[1.45]
                  text-[#D5DBE6]
                "
                initial={{ opacity: 0, x: -20 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                }
                transition={{
                  delay: index * 0.12 + i * 0.08 + 0.35,
                }}
              >
                <motion.span
                  className="mt-[0.55em] inline-block h-1.5 w-3 rounded-full bg-gradient-to-r from-[#3A7BFF] to-[#4CC2FF]"
                  animate={
                    isHovered
                      ? { scale: [1, 1.5, 1], x: [0, 2, 0] }
                      : { scale: 1, x: 0 }
                  }
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                />
                <span>{feature}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Decorative corner */}
        <motion.div
          className="pointer-events-none absolute bottom-4 right-4 h-8 w-8 opacity-40 z-20"
          animate={{
            scale: isHovered ? 1.2 : 1,
            opacity: isHovered ? 0.8 : 0.4,
          }}
          transition={{ duration: 0.25 }}
        >
          <div className="h-full w-full rounded-br-3xl border-b border-r border-[#4CC2FF77]" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export function FocusSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const reduce = useReducedMotion();
   const locale = useLocale();
  return (
    <section
      ref={sectionRef}
      className="relative
       pt-10 pb-10
        md:pt-14 md:pb-14
        lg:pt-16 lg:pb-16
      overflow-visible"
    >
      {/* фоновые споты — full-bleed */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-60 -z-10">
        <div className="absolute -top-40 -left-32 h-80 w-80 bg-[radial-gradient(circle_at_center,_#3A7BFF55,_transparent_70%)] blur-3xl" />
        <div className="absolute -bottom-40 -right-10 h-96 w-96 bg-[radial-gradient(circle_at_center,_#4CC2FF55,_transparent_70%)] blur-3xl" />
      </div>

      <PageContainer>
        <div className="relative z-10 text-[#F5EFE7]">
          {/* Section Header */}
          <motion.div
            className="mb-16 md:mb-20"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* <motion.div
              className="mb-6 h-[2px] w-20 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]"
              initial={{ width: 0 }}
              animate={isInView ? { width: 80 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            /> */}

            <motion.h2
              className="  text-3xl
  md:text-4xl
  lg:text-5xl
  xl:text-6xl
  font-semibold
  leading-tight
  md:leading-[1.15]  text-slate-50 tracking-tight mb-3"
            >
              <motion.span
                className="relative inline-block"
                initial="initial"
                whileHover="hover"
              >
                <span className="relative z-10">Решения для роста бизнеса</span>

                <motion.span
                  className="pointer-events-none absolute left-0 top-0 z-0 text-[#4CC2FF] mix-blend-screen"
                  variants={glitchPrimary}
                  aria-hidden="true"
                >
                  Решения для роста бизнеса
                </motion.span>

                <motion.span
                  className="pointer-events-none absolute left-0 top-0 z-0 text-[#9B5DFF] mix-blend-screen"
                  variants={glitchSecondary}
                  aria-hidden="true"
                >
                  Решения для роста бизнеса
                </motion.span>
              </motion.span>
            </motion.h2>

            <p
              className="  mt-4
  text-white/75
  leading-relaxed md:leading-[1.7]
  max-w-[52ch] md:max-w-[60ch] lg:max-w-[66ch]
  text-[clamp(0.98rem,0.55vw+0.88rem,1.15rem)]"
            >
              От быстрого лендинга до полноценного e-commerce — строим систему,
              которая приводит заявки, подключает WhatsApp, автоматизирует
              ответы и фиксирует клиентов в CRM.
            </p>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                service={service}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            className="mt-16 md:mt-20 text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="mb-5 text-sm md:text-lg text-[#C7CEDF]">
              Покажем примеры сайтов с WhatsApp и автоматизацией — без сложных
              обсуждений.
            </p>
            {/* <motion.a
              href="#contact"
              className="
    relative group inline-flex items-center justify-center
    overflow-hidden rounded-full
    px-10 py-3.5 md:px-12 md:py-4
    text-sm md:text-base font-medium
    text-[#050816]
    shadow-[0_0_40px_rgba(76,194,255,0.55)]
    hover:shadow-[0_0_65px_rgba(76,194,255,0.85)]
    transition-shadow
  "
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
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

              <span className="relative z-10">Запросить демо</span>
            </motion.a> */}
            <Link href={`/${locale}/contact#contact-form`} scroll>
              <motion.span
                className="
          relative group inline-flex items-center justify-center
          overflow-hidden rounded-full
          px-10 py-3.5 md:px-12 md:py-4
          text-sm md:text-base font-medium
          text-[#050816]
          shadow-[0_0_40px_rgba(76,194,255,0.55)]
          hover:shadow-[0_0_65px_rgba(76,194,255,0.85)]
          transition-shadow
          cursor-pointer
        "
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {/* Main gradient */}
                <span className="absolute inset-0 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]" />

                {/* Depth layer */}
                <span
                  className="
            pointer-events-none absolute inset-0
            [background:linear-gradient(to_bottom,rgba(255,255,255,0.28),rgba(255,255,255,0.06)_45%,rgba(0,0,0,0.12))]
            mix-blend-overlay
          "
                  aria-hidden
                />

                {/* Hover highlight */}
                <span
                  className="
            pointer-events-none absolute inset-0 rounded-full
            bg-white/10 opacity-0
            group-hover:opacity-100 transition-opacity
          "
                  aria-hidden
                />

                <span className="relative z-10">Обсудить задачу</span>
              </motion.span>
            </Link>{" "}
          </motion.div>
        </div>
      </PageContainer>

      {/* Floating decorative element — full-bleed */}
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




