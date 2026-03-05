// "use client";

// import { motion, useReducedMotion } from "motion/react";
// import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
// import { pricingData } from "@/src/data/pricingData";
// import { FloatingShapes } from "./FloatingShapes";
// import { PageContainer } from "../Layout/PageContainer";
// import Link from "next/link";
// import { useLocale } from "next-intl";
// const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

// export function PricingFinalCTA() {
//   const reduce = useReducedMotion();
// const locale = useLocale();
//   return (
//     <section
//       id="contact"
//       className="relative  pt-10 pb-10
//         md:pt-14 md:pb-14
//         lg:pt-16 lg:pb-16 overflow-visible"
//     >
//       {/* LOCAL FX (clip only background, not content) */}
//       <div
//         className="
//           pointer-events-none absolute inset-0 -z-10 overflow-hidden
//           [mask-image:linear-gradient(to_bottom,transparent_0%,black_12%,black_90%,transparent_100%)]
//           [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_12%,black_90%,transparent_100%)]
//         "
//         aria-hidden="true"
//       >
//         {/* spots */}
//         <div className="absolute inset-0 opacity-70">
//           <div className="absolute -top-40 -left-40 h-[520px] w-[520px] bg-[radial-gradient(circle_at_center,_#3A7BFF55,_transparent_70%)] blur-3xl" />
//           <div className="absolute -bottom-52 -right-36 h-[620px] w-[620px] bg-[radial-gradient(circle_at_center,_#4CC2FF55,_transparent_70%)] blur-3xl" />
//           <div className="absolute top-24 right-1/3 h-[360px] w-[360px] bg-[radial-gradient(circle_at_center,_#9B5DFF33,_transparent_70%)] blur-3xl" />
//         </div>

//         {/* dotted texture */}
//         <div className="absolute inset-0 opacity-[0.06]">
//           <motion.div
//             className="h-full w-full"
//             style={{
//               backgroundImage:
//                 "radial-gradient(circle at 2px 2px, rgba(245,239,231,0.6) 1px, transparent 0)",
//               backgroundSize: "70px 70px",
//               maskImage:
//                 "radial-gradient(circle at 50% 35%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.75) 45%, rgba(0,0,0,0) 78%)",
//               WebkitMaskImage:
//                 "radial-gradient(circle at 50% 35%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.75) 45%, rgba(0,0,0,0) 78%)",
//             }}
//             animate={
//               reduce
//                 ? undefined
//                 : { backgroundPosition: ["0px 0px", "70px 70px"] }
//             }
//             transition={
//               reduce
//                 ? undefined
//                 : { duration: 40, repeat: Infinity, ease: "linear" }
//             }
//           />
//         </div>

//         {/* safety fade */}
//         <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#020410]" />
//       </div>

//       <PageContainer className="relative z-10 max-w-[1200px] text-center text-[#F5EFE7]">
//         <motion.div
//           initial={{ opacity: 0, y: 36 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: EASE }}
//           viewport={{ once: true }}
//         >

//           {/* badge */}
//           <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs md:text-sm tracking-wide text-[#E8F2FF] backdrop-blur">
//             <Sparkles className="h-4 w-4 text-[#4CC2FF]" />
//             <span>Сайт + CRM + автоматизация заявок</span>
//           </div>

//           <h2
//             className="text-3xl
//   md:text-4xl
//   lg:text-5xl
//   xl:text-6xl
//   font-semibold
//   leading-tight
//   md:leading-[1.15]  text-slate-50 mb-3"
//           >
//             {pricingData.cta.title}
//           </h2>

//           <p
//             className="  mt-4
//   text-white/75
//   leading-relaxed md:leading-[1.7]
//   max-w-[52ch] md:max-w-[60ch] lg:max-w-[66ch]
//   text-[clamp(0.98rem,0.55vw+0.88rem,1.15rem)] mx-auto "
//           >
//             {pricingData.cta.subtitle}
//           </p>

//           {/* micro UX cards */}
//           <div className="mt-8 grid gap-3 md:gap-4 md:grid-cols-3 text-left max-w-4xl mx-auto">
//             {[
//               {
//                 title: "CRM подключение",
//                 text: "Настраиваю Notion / Airtable / HubSpot и структуру для заявок.",
//               },
//               {
//                 title: "Автоматизация заявок",
//                 text: "Форма / WhatsApp → CRM: новые лиды, статусы, уведомления.",
//               },
//               {
//                 title: "План реализации",
//                 text: "Оценим объём работ, сроки и состав выбранного пакета.",
//               },
//             ].map((it) => (
//               <div
//                 key={it.title}
//                 className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/8 via-white/5 to-transparent p-4 md:p-5 backdrop-blur"
//               >
//                 <div className="text-sm md:text-base font-semibold text-[#F2F4FA]">
//                   {it.title}
//                 </div>
//                 <div className="mt-1.5 text-xs md:text-sm text-[#C7CEDF] leading-relaxed">
//                   {it.text}
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* CTAs */}
//           <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">

//             <Link href={`/${locale}/contact#contact-form`} scroll>
//               <motion.span
//                 className="
//       relative group inline-flex items-center justify-center gap-3
//       overflow-hidden rounded-full
//       px-8 py-4 md:px-10 md:py-5
//       text-sm md:text-base font-semibold
//       text-[#050816]
//       shadow-[0_0_40px_rgba(76,194,255,0.55)]
//       hover:shadow-[0_0_65px_rgba(76,194,255,0.85)]
//       transition-shadow
//       cursor-pointer
//     "
//                 whileHover={reduce ? undefined : { scale: 1.03 }}
//                 whileTap={reduce ? undefined : { scale: 0.98 }}
//               >
//                 {/* Unified gradient palette */}
//                 <span className="absolute inset-0 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]" />

//                 {/* Unified hover highlight */}
//                 <span
//                   className="
//         pointer-events-none absolute inset-0 rounded-full
//         bg-white/10 opacity-0
//         group-hover:opacity-100 transition-opacity
//       "
//                   aria-hidden="true"
//                 />

//                 <span className="relative z-10">{pricingData.cta.button}</span>
//                 <ArrowRight className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1" />
//               </motion.span>
//             </Link>
//             {/* <motion.a
//               href="#whatsapp"
//               className="
//     relative group inline-flex items-center gap-2
//     rounded-full
//     px-8 py-4 md:px-10 md:py-5
//     text-sm md:text-base font-medium
//     text-[#F5EFE7]
//     backdrop-blur-sm
//     transition-all
//   "
//               whileHover={{ scale: 1.03 }}
//               whileTap={{ scale: 0.97 }}
//             >

//               <span
//                 className="
//       pointer-events-none absolute inset-0 rounded-full p-[1px]
//       bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]
//     "
//               >
//                 <span className="block h-full w-full rounded-full bg-[#050608]" />
//               </span>

//               <span
//                 className="
//       pointer-events-none absolute inset-0 rounded-full
//       bg-[radial-gradient(circle_at_center,rgba(76,194,255,0.25),transparent_60%)]
//       opacity-0 group-hover:opacity-100
//       transition-opacity
//     "
//               />

//               <span
//                 className="
//       pointer-events-none absolute inset-0 rounded-full
//       opacity-0 group-hover:opacity-100
//       transition-opacity
//       shadow-[0_0_34px_rgba(76,194,255,0.45)]
//     "
//               />

//               <MessageCircle className="relative z-10 h-5 w-5 text-[#4CC2FF]" />
//               <span className="relative z-10">Написать в WhatsApp</span>
//             </motion.a> */}

//             <motion.a
//               href="https://wa.me/+380634398038?text=Здравствуйте,%20хочу%20обсудить%20проект"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="
//     relative group inline-flex items-center gap-2
//     rounded-full
//     px-8 py-4 md:px-10 md:py-5
//     text-sm md:text-base font-medium
//     text-[#F5EFE7]
//     backdrop-blur-sm
//     transition-all
//   "
//               whileHover={{ scale: 1.03 }}
//               whileTap={{ scale: 0.97 }}
//             >
//               {/* Gradient border */}
//               <span
//                 className="
//       pointer-events-none absolute inset-0 rounded-full p-[1px]
//       bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]
//     "
//               >
//                 <span className="block h-full w-full rounded-full bg-[#050608]" />
//               </span>

//               {/* Soft inner glow */}
//               <span
//                 className="
//       pointer-events-none absolute inset-0 rounded-full
//       bg-[radial-gradient(circle_at_center,rgba(76,194,255,0.25),transparent_60%)]
//       opacity-0 group-hover:opacity-100
//       transition-opacity
//     "
//               />

//               {/* Outer neon glow */}
//               <span
//                 className="
//       pointer-events-none absolute inset-0 rounded-full
//       opacity-0 group-hover:opacity-100
//       transition-opacity
//       shadow-[0_0_34px_rgba(76,194,255,0.45)]
//     "
//               />

//               <MessageCircle className="relative z-10 h-5 w-5 text-[#4CC2FF]" />
//               <span className="relative z-10">Написать в WhatsApp</span>
//             </motion.a>
//           </div>

//           <p className="mt-6 text-xs md:text-sm text-[#9AA6BF]">
//             Лицензии сервисов (CRM / CMS / хостинг / чат-бот платформы)
//             оплачиваются заказчиком — я подбираю и настраиваю.
//           </p>
//         </motion.div>
//       </PageContainer>

//       <FloatingShapes />
//     </section>
//   );
// }

"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { FloatingShapes } from "./FloatingShapes";
import { PageContainer } from "../Layout/PageContainer";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { buildPricingData } from "@/src/data/pricingData";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function PricingFinalCTA() {
  const reduce = useReducedMotion();
  const locale = useLocale();

  const t = useTranslations("pricingData");
  const data = buildPricingData(t);

  const titleId = "pricing-final-cta-title";
  const descId = "pricing-final-cta-desc";

  return (
    <section
      id="contact"
      aria-labelledby={titleId}
      aria-describedby={descId}
      className="relative pt-10 pb-10 md:pt-14 md:pb-14 lg:pt-16 lg:pb-16 overflow-visible"
    >
      {/* LOCAL FX (decorative) */}
      <div
        className="
          pointer-events-none absolute inset-0 -z-10 overflow-hidden
          [mask-image:linear-gradient(to_bottom,transparent_0%,black_12%,black_90%,transparent_100%)]
          [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_12%,black_90%,transparent_100%)]
        "
        aria-hidden="true"
      >
        <div className="absolute inset-0 opacity-70">
          <div className="absolute -top-40 -left-40 h-[520px] w-[520px] bg-[radial-gradient(circle_at_center,_#3A7BFF55,_transparent_70%)] blur-3xl" />
          <div className="absolute -bottom-52 -right-36 h-[620px] w-[620px] bg-[radial-gradient(circle_at_center,_#4CC2FF55,_transparent_70%)] blur-3xl" />
          <div className="absolute top-24 right-1/3 h-[360px] w-[360px] bg-[radial-gradient(circle_at_center,_#9B5DFF33,_transparent_70%)] blur-3xl" />
        </div>

        <div className="absolute inset-0 opacity-[0.06]">
          <motion.div
            className="h-full w-full"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, rgba(245,239,231,0.6) 1px, transparent 0)",
              backgroundSize: "70px 70px",
              maskImage:
                "radial-gradient(circle at 50% 35%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.75) 45%, rgba(0,0,0,0) 78%)",
              WebkitMaskImage:
                "radial-gradient(circle at 50% 35%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.75) 45%, rgba(0,0,0,0) 78%)",
            }}
            animate={
              reduce
                ? undefined
                : { backgroundPosition: ["0px 0px", "70px 70px"] }
            }
            transition={
              reduce
                ? undefined
                : { duration: 40, repeat: Infinity, ease: "linear" }
            }
          />
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#020410]" />
      </div>

      <PageContainer className="relative z-10 max-w-[1200px] text-center text-[#F5EFE7]">
        {/* Semantic anchors */}
        <div className="sr-only">
          <h2 id={titleId}>{data.cta.title}</h2>
          <p id={descId}>{data.cta.subtitle}</p>
        </div>

        <motion.div
          initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          viewport={{ once: true }}
        >
          {/* badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs md:text-sm tracking-wide text-[#E8F2FF] backdrop-blur">
            <Sparkles className="h-4 w-4 text-[#4CC2FF]" aria-hidden="true" />
            <span>{t("finalCta.badge")}</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight md:leading-[1.15] text-slate-50 mb-3 mt-5">
            {data.cta.title}
          </h2>

          <p
            className="mt-4 text-white/75 leading-relaxed md:leading-[1.7]
              max-w-[52ch] md:max-w-[60ch] lg:max-w-[66ch]
              text-[clamp(0.98rem,0.55vw+0.88rem,1.15rem)] mx-auto"
          >
            {data.cta.subtitle}
          </p>

          {/* micro UX cards */}
          <div
            role="list"
            aria-label={t("finalCta.cardsAria")}
            className="mt-8 grid gap-3 md:gap-4 md:grid-cols-3 text-left max-w-4xl mx-auto"
          >
            {[
              {
                title: t("finalCta.cards.0.title"),
                text: t("finalCta.cards.0.text"),
              },
              {
                title: t("finalCta.cards.1.title"),
                text: t("finalCta.cards.1.text"),
              },
              {
                title: t("finalCta.cards.2.title"),
                text: t("finalCta.cards.2.text"),
              },
            ].map((it) => (
              <div
                role="listitem"
                key={it.title}
                className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/8 via-white/5 to-transparent p-4 md:p-5 backdrop-blur"
              >
                <div className="text-sm md:text-base font-semibold text-[#F2F4FA]">
                  {it.title}
                </div>
                <div className="mt-1.5 text-xs md:text-sm text-[#C7CEDF] leading-relaxed">
                  {it.text}
                </div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href={`/${locale}/contact#contact-form`} scroll>
              <motion.span
                className="
                  relative group inline-flex items-center justify-center gap-3
                  overflow-hidden rounded-full
                  px-8 py-4 md:px-10 md:py-5
                  text-sm md:text-base font-semibold
                  text-[#050816]
                  shadow-[0_0_40px_rgba(76,194,255,0.55)]
                  hover:shadow-[0_0_65px_rgba(76,194,255,0.85)]
                  transition-shadow
                  cursor-pointer
                  focus:outline-none
                  focus-visible:ring-2 focus-visible:ring-[#4CC2FF]/90
                "
                whileHover={reduce ? undefined : { scale: 1.03 }}
                whileTap={reduce ? undefined : { scale: 0.98 }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]" />
                <span
                  className="pointer-events-none absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-hidden="true"
                />
                <span className="relative z-10">{data.cta.button}</span>
                <ArrowRight
                  className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </motion.span>
            </Link>

            <motion.a
              href={t("finalCta.whatsapp.href")}
              target="_blank"
              rel="noopener noreferrer"
              className="
                relative group inline-flex items-center gap-2
                rounded-full
                px-8 py-4 md:px-10 md:py-5
                text-sm md:text-base font-medium
                text-[#F5EFE7]
                backdrop-blur-sm
                transition-all
                focus:outline-none
                focus-visible:ring-2 focus-visible:ring-[#4CC2FF]/90
              "
              whileHover={reduce ? undefined : { scale: 1.03 }}
              whileTap={reduce ? undefined : { scale: 0.97 }}
              aria-label={t("finalCta.whatsapp.aria")}
            >
              <span
                className="
                  pointer-events-none absolute inset-0 rounded-full p-[1px]
                  bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]
                "
                aria-hidden="true"
              >
                <span className="block h-full w-full rounded-full bg-[#050608]" />
              </span>

              <span
                className="
                  pointer-events-none absolute inset-0 rounded-full
                  bg-[radial-gradient(circle_at_center,rgba(76,194,255,0.25),transparent_60%)]
                  opacity-0 group-hover:opacity-100 transition-opacity
                "
                aria-hidden="true"
              />

              <span
                className="
                  pointer-events-none absolute inset-0 rounded-full
                  opacity-0 group-hover:opacity-100 transition-opacity
                  shadow-[0_0_34px_rgba(76,194,255,0.45)]
                "
                aria-hidden="true"
              />

              <MessageCircle
                className="relative z-10 h-5 w-5 text-[#4CC2FF]"
                aria-hidden="true"
              />
              <span className="relative z-10">
                {t("finalCta.whatsapp.label")}
              </span>
            </motion.a>
          </div>

          <p className="mt-6 text-xs md:text-sm text-[#9AA6BF]">
            {t("finalCta.note")}
          </p>
        </motion.div>
      </PageContainer>

      <FloatingShapes />
    </section>
  );
}