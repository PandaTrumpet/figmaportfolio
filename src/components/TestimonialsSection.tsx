// "use client";

// import { useMemo } from "react";
// import { motion, useReducedMotion } from "motion/react";
// import { ImageWithFallback } from "./figma/ImageWithFallback";
// import { PageContainer } from "./Layout/PageContainer";

// const testimonials = [
//   {
//     story:
//       "«Сайт получился не просто красивым — он реально приводит заявки. После запуска стало больше обращений, и главное — клиенты сразу пишут в WhatsApp, ничего не теряется.»",
//     name: "Рахель Коэн",
//     role: "Владелица студии йоги",
//     image:
//       "https://images.unsplash.com/photo-1747830280502-f33d7305a714?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
//     imageAlt: "Портрет клиента",
//   },
//   {
//     story:
//       "«Сделали всё быстро и аккуратно: структура понятная, сайт загружается быстро, заявки приходят стабильно. Плюс подключили уведомления — стало проще обрабатывать клиентов.»",
//     name: "Давид Леви",
//     role: "Владелец сервисного бизнеса",
//     image:
//       "https://images.unsplash.com/photo-1533723522262-1c3e074d3dac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
//     imageAlt: "Портрет клиента бизнес",
//   },
//   {
//     story:
//       "«Наконец-то онлайн-присутствие выглядит достойно и работает на бренд. Сайт стал понятнее для клиентов, а через WhatsApp стало легче отвечать и записывать людей.»",
//     name: "Майя Шапира",
//     role: "Основательница кафе",
//     image:
//       "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
//     imageAlt: "Портрет клиента тёплый",
//   },
// ];

// const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

// function Testimonial({
//   testimonial,
//   index,
// }: {
//   testimonial: (typeof testimonials)[0];
//   index: number;
// }) {
//   const reduce = useReducedMotion();

//   const cardVariants = useMemo(
//     () => ({
//       hidden: { opacity: 0, y: reduce ? 0 : 14 },
//       show: {
//         opacity: 1,
//         y: 0,
//         transition: { duration: 0.8, ease: EASE },
//       },
//     }),
//     [reduce],
//   );

//   const textWrapVariants = useMemo(
//     () => ({
//       hidden: {},
//       show: {
//         transition: {
//           staggerChildren: 0.085,
//           delayChildren: 0.12,
//         },
//       },
//     }),
//     [],
//   );

//   const textItemVariants = useMemo(
//     () => ({
//       hidden: {
//         opacity: 0,
//         y: reduce ? 0 : 10,
//         filter: reduce ? "none" : "blur(6px)",
//       },
//       show: {
//         opacity: 1,
//         y: 0,
//         filter: "blur(0px)",
//         transition: { duration: 0.7, ease: EASE },
//       },
//     }),
//     [reduce],
//   );

//   return (
//     <motion.div
//       variants={cardVariants}
//       initial="hidden"
//       whileInView="show"
//       viewport={{ once: true, amount: 0.25 }}
//       style={{ transitionDelay: `${index * 90}ms` }}
//     >
//       <div
//         className="
//           group relative
//           rounded-3xl overflow-hidden
//           border border-cyan-400/25
//           bg-[#0A0F1E]/70 backdrop-blur-xl
//           shadow-[0_0_70px_rgba(76,194,255,0.12)]
//           p-6 md:p-8
//           transition-transform duration-300
//           hover:-translate-y-1 hover:shadow-[0_0_90px_rgba(76,194,255,0.18)]
//         "
//       >
//         {/* premium glow + sheen */}
//         <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//           <div
//             className="absolute -top-20 -right-16 h-64 w-64 rounded-full blur-3xl opacity-70"
//             style={{
//               background:
//                 "radial-gradient(circle, rgba(76,194,255,0.55), transparent 60%)",
//             }}
//           />
//           <div
//             className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full blur-3xl opacity-60"
//             style={{
//               background:
//                 "radial-gradient(circle, rgba(58,123,255,0.45), transparent 60%)",
//             }}
//           />
//           <div
//             className="
//               absolute -inset-16
//               [transform:translateX(-30%)_translateY(-10%)_rotate(18deg)]
//             "
//           >
//             <div className="h-24 w-[140%] bg-gradient-to-r from-transparent via-white/12 to-transparent blur-[1px]" />
//           </div>
//         </div>

//         <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-10 items-start">
//           {/* Left */}
//           <div className="flex items-center gap-4 shrink-0 min-w-[220px]">
//             <div
//               className="
//                 relative
//                 h-14 w-14 md:h-16 md:w-16
//                 rounded-xl overflow-hidden
//                 border border-cyan-400/30 bg-[#0B1020]/70
//                 shadow-[0_0_26px_rgba(76,194,255,0.18)]
//               "
//             >
//               <ImageWithFallback
//                 src={testimonial.image}
//                 alt={testimonial.imageAlt}
//                 className="w-full h-full object-cover opacity-90 mix-blend-screen"
//               />
//               <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
//             </div>

//             {/* Texts (name + role) */}
//             <motion.div
//               className="min-w-0"
//               variants={textWrapVariants}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, amount: 0.35 }}
//             >
//               <motion.p
//                 className="text-[15px] font-medium text-slate-100 leading-tight truncate"
//                 variants={textItemVariants}
//               >
//                 {testimonial.name}
//               </motion.p>
//               <motion.p
//                 className="text-xs uppercase tracking-[0.22em] text-slate-300/60 mt-1"
//                 variants={textItemVariants}
//               >
//                 {testimonial.role}
//               </motion.p>
//             </motion.div>
//           </div>

//           {/* Story */}
//           <motion.div
//             className="flex-1"
//             variants={textWrapVariants}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.3 }}
//           >
//             <motion.blockquote
//               className="text-lg md:text-xl leading-relaxed text-slate-100/90"
//               variants={textItemVariants}
//             >
//               {testimonial.story}
//             </motion.blockquote>

//             <motion.div
//               className="mt-5 flex flex-wrap gap-3"
//               variants={textWrapVariants}
//             >
//               <motion.span
//                 variants={textItemVariants}
//                 className="
//                   inline-flex items-center gap-2
//                   px-3 py-1.5 rounded-full
//                   border border-cyan-400/30 bg-[#0A0F1E]/70
//                   text-xs text-slate-200
//                   shadow-[0_0_20px_rgba(76,194,255,0.15)]
//                 "
//               >
//                 <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(76,194,255,0.6)]" />
//                 Заявок стало больше
//               </motion.span>

//               <motion.span
//                 variants={textItemVariants}
//                 className="
//                   inline-flex items-center gap-2
//                   px-3 py-1.5 rounded-full
//                   border border-cyan-400/30 bg-[#0A0F1E]/70
//                   text-xs text-slate-200
//                 "
//               >
//                 WhatsApp-автоматизация
//               </motion.span>

//               <motion.span
//                 variants={textItemVariants}
//                 className="
//                   inline-flex items-center gap-2
//                   px-3 py-1.5 rounded-full
//                   border border-cyan-400/30 bg-[#0A0F1E]/70
//                   text-xs text-slate-200
//                 "
//               >
//                 Учёт заявок (CRM/таблица)
//               </motion.span>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// export function TestimonialsSection() {
//   const reduce = useReducedMotion();

//   const headerWrap = useMemo(
//     () => ({
//       hidden: {},
//       show: {
//         transition: {
//           staggerChildren: 0.1,
//           delayChildren: 0.05,
//         },
//       },
//     }),
//     [],
//   );

//   const headerItem = useMemo(
//     () => ({
//       hidden: {
//         opacity: 0,
//         y: reduce ? 0 : 12,
//         filter: reduce ? "none" : "blur(8px)",
//       },
//       show: {
//         opacity: 1,
//         y: 0,
//         filter: "blur(0px)",
//         transition: { duration: 0.85, ease: EASE },
//       },
//     }),
//     [reduce],
//   );

//   return (
//     <section
//       id="testimonials"
//       className="relative min-h-screen flex items-center pt-10 pb-10
//         md:pt-14 md:pb-14
//         lg:pt-16 lg:pb-16 overflow-visible text-slate-100"
//       aria-labelledby="testimonials-title"
//     >
//       {/* Neon waves — full-bleed */}
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

//       {/* subtle grid overlay — full-bleed */}
//       <div className="pointer-events-none absolute inset-0 opacity-[0.10]">
//         <div
//           className="h-full w-full"
//           style={{
//             backgroundImage:
//               "linear-gradient(rgba(51,65,85,0.28) 1px, transparent 1px), linear-gradient(90deg, rgba(51,65,85,0.28) 1px, transparent 1px)",
//             backgroundSize: "80px 80px",
//           }}
//         />
//       </div>

//       <PageContainer className="max-w-[1200px]">
//         <div className="relative z-10">
//           {/* Header — animated texts */}
//           <motion.div
//             className="mb-12 md:mb-16"
//             variants={headerWrap}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.55 }}
//           >
//             {/* <motion.div
//               className="w-16 h-0.5 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-transparent mb-6"
//               variants={headerItem}
//             /> */}
//             <motion.h2
//               id="testimonials-title"
//               className=" mb-3
//                 text-3xl md:text-4xl lg:text-5xl xl:text-6xl
//                 font-semibold leading-tight md:leading-[1.15]
//                 text-slate-50
//               "
//               variants={headerItem}
//             >
//               Отзывы и результаты
//             </motion.h2>
//             <motion.p
//               className="  mt-4
//   text-white/75
//   leading-relaxed md:leading-[1.7]
//   max-w-[52ch] md:max-w-[60ch] lg:max-w-[66ch]
//   text-[clamp(0.98rem,0.55vw+0.88rem,1.15rem)]"
//               variants={headerItem}
//             >
//               Коротко о том, что меняется после запуска: заявки не теряются,
//               клиенты быстрее получают ответ, а обработка становится проще.
//             </motion.p>
//           </motion.div>

//           {/* Testimonials */}
//           <div className="space-y-10 md:space-y-12">
//             {testimonials.map((testimonial, index) => (
//               <Testimonial
//                 key={index}
//                 testimonial={testimonial}
//                 index={index}
//               />
//             ))}
//           </div>

//           {/* Decorative element */}
//           <div className="mt-12 flex items-center justify-center gap-4">
//             <div className="w-16 h-px bg-cyan-200/20" />
//             <div className="w-2 h-2 bg-cyan-200/30 rounded-full shadow-[0_0_20px_rgba(76,194,255,0.35)]" />
//             <div className="w-16 h-px bg-cyan-200/20" />
//           </div>
//         </div>
//       </PageContainer>
//     </section>
//   );
// }

"use client";

import { useMemo, useId } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { PageContainer } from "./Layout/PageContainer";
import { useLocale, useTranslations } from "next-intl";

const testimonials = [
  {
    story:
      "“The website is not just beautiful — it actually brings leads. After launch we got more inquiries, and the best part is clients message us on WhatsApp right away, nothing gets lost.”",
    name: "Rachel Cohen",
    role: "Yoga studio owner",
    image:
      "https://images.unsplash.com/photo-1747830280502-f33d7305a714?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    imageAlt: "Client portrait",
  },
  {
    story:
      "“Everything was done fast and clean: clear structure, quick loading, and leads come consistently. Plus, notifications were added — it became easier to handle clients.”",
    name: "David Levi",
    role: "Service business owner",
    image:
      "https://images.unsplash.com/photo-1533723522262-1c3e074d3dac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    imageAlt: "Client portrait for business",
  },
  {
    story:
      "“Finally our online presence looks premium and supports the brand. The site became clearer for customers, and WhatsApp made it easier to reply and book people.”",
    name: "Maya Shapira",
    role: "Cafe founder",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    imageAlt: "Warm client portrait",
  },
];

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

function Testimonial({
  testimonial,
  index,
}: {
  testimonial: (typeof testimonials)[0];
  index: number;
}) {
  const reduce = useReducedMotion();
  const t = useTranslations("testimonials");

  const nameId = useId();
  const storyId = useId();

  const cardVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: reduce ? 0 : 14 },
      show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: EASE },
      },
    }),
    [reduce],
  );

  const textWrapVariants = useMemo(
    () => ({
      hidden: {},
      show: {
        transition: {
          staggerChildren: 0.085,
          delayChildren: 0.12,
        },
      },
    }),
    [],
  );

  const textItemVariants = useMemo(
    () => ({
      hidden: {
        opacity: 0,
        y: reduce ? 0 : 10,
        filter: reduce ? "none" : "blur(6px)",
      },
      show: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.7, ease: EASE },
      },
    }),
    [reduce],
  );

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      style={{ transitionDelay: `${index * 90}ms` }}
      role="article"
      aria-labelledby={nameId}
      aria-describedby={storyId}
    >
      <div
        className="
          group relative
          rounded-3xl overflow-hidden
          border border-cyan-400/25
          bg-[#0A0F1E]/70 backdrop-blur-xl
          shadow-[0_0_70px_rgba(76,194,255,0.12)]
          p-6 md:p-8
          transition-transform duration-300
          hover:-translate-y-1 hover:shadow-[0_0_90px_rgba(76,194,255,0.18)]
        "
      >
        {/* premium glow + sheen */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          aria-hidden="true"
        >
          <div
            className="absolute -top-20 -right-16 h-64 w-64 rounded-full blur-3xl opacity-70"
            style={{
              background:
                "radial-gradient(circle, rgba(76,194,255,0.55), transparent 60%)",
            }}
          />
          <div
            className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full blur-3xl opacity-60"
            style={{
              background:
                "radial-gradient(circle, rgba(58,123,255,0.45), transparent 60%)",
            }}
          />
          <div
            className="
              absolute -inset-16
              [transform:translateX(-30%)_translateY(-10%)_rotate(18deg)]
            "
          >
            <div className="h-24 w-[140%] bg-gradient-to-r from-transparent via-white/12 to-transparent blur-[1px]" />
          </div>
        </div>

        <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-10 items-start">
          {/* Left */}
          <div className="flex items-center gap-4 shrink-0 min-w-[220px]">
            <div
              className="
                relative
                h-14 w-14 md:h-16 md:w-16
                rounded-xl overflow-hidden
                border border-cyan-400/30 bg-[#0B1020]/70
                shadow-[0_0_26px_rgba(76,194,255,0.18)]
              "
            >
              <ImageWithFallback
                src={testimonial.image}
                alt={testimonial.imageAlt}
                className="w-full h-full object-cover opacity-90 mix-blend-screen"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent"
                aria-hidden="true"
              />
            </div>

            {/* Texts (name + role) */}
            <motion.div
              className="min-w-0"
              variants={textWrapVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
            >
              <motion.p
                id={nameId}
                className="text-[15px] font-medium text-slate-100 leading-tight truncate"
                variants={textItemVariants}
              >
                {testimonial.name}
              </motion.p>
              <motion.p
                className="text-xs uppercase tracking-[0.22em] text-slate-300/60 mt-1"
                variants={textItemVariants}
              >
                {testimonial.role}
              </motion.p>
            </motion.div>
          </div>

          {/* Story */}
          <motion.div
            className="flex-1"
            variants={textWrapVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.blockquote
              id={storyId}
              className="text-lg md:text-xl leading-relaxed text-slate-100/90"
              variants={textItemVariants}
            >
              {testimonial.story}
            </motion.blockquote>

            <motion.div
              className="mt-5 flex flex-wrap gap-3"
              variants={textWrapVariants}
              aria-label={t("aria.tags")}
            >
              <motion.span
                variants={textItemVariants}
                className="
                  inline-flex items-center gap-2
                  px-3 py-1.5 rounded-full
                  border border-cyan-400/30 bg-[#0A0F1E]/70
                  text-xs text-slate-200
                  shadow-[0_0_20px_rgba(76,194,255,0.15)]
                "
              >
                <span
                  className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(76,194,255,0.6)]"
                  aria-hidden="true"
                />
                {t("tags.moreLeads")}
              </motion.span>

              <motion.span
                variants={textItemVariants}
                className="
                  inline-flex items-center gap-2
                  px-3 py-1.5 rounded-full
                  border border-cyan-400/30 bg-[#0A0F1E]/70
                  text-xs text-slate-200
                "
              >
                {t("tags.whatsappAutomation")}
              </motion.span>

              <motion.span
                variants={textItemVariants}
                className="
                  inline-flex items-center gap-2
                  px-3 py-1.5 rounded-full
                  border border-cyan-400/30 bg-[#0A0F1E]/70
                  text-xs text-slate-200
                "
              >
                {t("tags.crmTracking")}
              </motion.span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export function TestimonialsSection() {
  const reduce = useReducedMotion();
  const locale = useLocale();
  const isRTL = locale === "he";
  const t = useTranslations("testimonials");

  const headerWrap = useMemo(
    () => ({
      hidden: {},
      show: {
        transition: {
          staggerChildren: 0.1,
          delayChildren: 0.05,
        },
      },
    }),
    [],
  );

  const headerItem = useMemo(
    () => ({
      hidden: {
        opacity: 0,
        y: reduce ? 0 : 12,
        filter: reduce ? "none" : "blur(8px)",
      },
      show: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.85, ease: EASE },
      },
    }),
    [reduce],
  );

  return (
    <section
      id="testimonials"
      className="relative min-h-screen flex items-center pt-10 pb-10
        md:pt-14 md:pb-14
        lg:pt-16 lg:pb-16 overflow-visible text-slate-100"
      aria-labelledby="testimonials-title"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Neon waves — full-bleed */}
      <div
        className="pointer-events-none absolute -top-40 right-[-10%] h-96 w-96 rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(76,194,255,0.9), transparent 60%)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-[-20%] left-[-10%] h-[26rem] w-[26rem] rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(58,123,255,0.85), transparent 55%)",
        }}
        aria-hidden="true"
      />

      {/* subtle grid overlay — full-bleed */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.10]"
        aria-hidden="true"
      >
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
        <div className="relative z-10">
          {/* Header — animated texts */}
          <motion.div
            className="mb-12 md:mb-16"
            variants={headerWrap}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.55 }}
          >
            <motion.h2
              id="testimonials-title"
              className=" mb-3
                text-3xl md:text-4xl lg:text-5xl xl:text-6xl
                font-semibold leading-tight md:leading-[1.15]
                text-slate-50
              "
              variants={headerItem}
            >
              {t("title")}
            </motion.h2>
            <motion.p
              className="  mt-4
  text-white/75
  leading-relaxed md:leading-[1.7]
  max-w-[52ch] md:max-w-[60ch] lg:max-w-[66ch]
  text-[clamp(0.98rem,0.55vw+0.88rem,1.15rem)]"
              variants={headerItem}
            >
              {t("subtitle")}
            </motion.p>
          </motion.div>

          {/* Testimonials */}
          <div
            className="space-y-10 md:space-y-12"
            role="list"
            aria-label={t("aria.list")}
          >
            {testimonials.map((testimonial, index) => (
              <Testimonial
                key={index}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </div>

          {/* Decorative element */}
          <div
            className="mt-12 flex items-center justify-center gap-4"
            aria-hidden="true"
          >
            <div className="w-16 h-px bg-cyan-200/20" />
            <div className="w-2 h-2 bg-cyan-200/30 rounded-full shadow-[0_0_20px_rgba(76,194,255,0.35)]" />
            <div className="w-16 h-px bg-cyan-200/20" />
          </div>
        </div>
      </PageContainer>
    </section>
  );
}