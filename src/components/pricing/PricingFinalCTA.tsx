// "use client";

// import { motion } from "motion/react";
// import { ArrowRight, Sparkles, Star } from "lucide-react";
// import { pricingData } from "@/src/data/pricingData";
// import { FloatingShapes } from "./FloatingShapes";


// export function PricingFinalCTA() {
//   return (
//     <section
//       id="contact"
//       className="px-6 md:px-12 lg:px-20 py-40 md:py-48 lg:py-56 bg-[#050608] text-[#F5EFE7] relative overflow-hidden"
//     >
//       <div className="max-w-[1400px] mx-auto text-center relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 60 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           viewport={{ once: true }}
//         >
//           {/* Icons */}
//           <div className="flex items-center justify-center gap-8 mb-12">
//             <motion.div
//               animate={{ y: [0, -20, 0], rotate: [0, 15, 0] }}
//               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//             >
//               <Sparkles className="w-16 h-16 md:w-20 md:h-20" />
//             </motion.div>
//             <motion.div
//               animate={{ y: [0, -15, 0], scale: [1, 1.2, 1] }}
//               transition={{
//                 duration: 3,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//                 delay: 0.5,
//               }}
//             >
//               <Star className="w-16 h-16 md:w-20 md:h-20" />
//             </motion.div>
//           </div>

//           <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl mb-12 leading-[0.95]">
//             {pricingData.cta.title}
//           </h2>

//           <p className="text-xl md:text-2xl lg:text-3xl opacity-70 mb-16 max-w-3xl mx-auto leading-relaxed">
//             {pricingData.cta.subtitle}
//           </p>

//           <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
//             <motion.a
//               href="#contact"
//               className="inline-flex items-center gap-4 px-12 py-6 md:px-16 md:py-8 bg-[#F5EFE7] text-[#050608] text-xl md:text-2xl group relative overflow-hidden"
//               whileHover={{
//                 scale: 1.05,
//                 boxShadow: "0 0 60px rgba(245,239,231,0.4)",
//               }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <motion.div
//                 className="absolute inset-0 bg-linear-to-r from-transparent via-white to-transparent opacity-30"
//                 animate={{ x: ["-200%", "200%"] }}
//                 transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
//               />
//               <span className="relative z-10">{pricingData.cta.button}</span>
//               <ArrowRight className="w-6 h-6 md:w-8 md:h-8 relative z-10 transition-transform group-hover:translate-x-2" />
//             </motion.a>

//             <motion.a
//               href="#comparison"
//               className="inline-flex items-center gap-3 text-xl md:text-2xl opacity-70 hover:opacity-100 transition-opacity"
//               whileHover={{ x: 10 }}
//             >
//               <span>Сравнить пакеты</span>
//               <ArrowRight className="w-6 h-6" />
//             </motion.a>
//           </div>
//         </motion.div>
//       </div>

//       {/* Background Effects */}
//       <div className="absolute inset-0 opacity-5">
//         <motion.div
//           className="w-full h-full"
//           style={{
//             backgroundImage:
//               "repeating-linear-gradient(45deg, #F5EFE7 0px, #F5EFE7 2px, transparent 2px, transparent 40px)",
//           }}
//           animate={{ backgroundPosition: ["0px 0px", "40px 40px"] }}
//           transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
//         />
//       </div>

//       <FloatingShapes />
//     </section>
//   );
// }
"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { pricingData } from "@/src/data/pricingData";
import { FloatingShapes } from "./FloatingShapes";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function PricingFinalCTA() {
  const reduce = useReducedMotion();

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#050816] px-6 md:px-12 lg:px-20 py-24 md:py-32"
    >
      {/* фоновые споты как у нас */}
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] bg-[radial-gradient(circle_at_center,_#3A7BFF55,_transparent_70%)] blur-3xl" />
        <div className="absolute -bottom-52 -right-36 h-[620px] w-[620px] bg-[radial-gradient(circle_at_center,_#4CC2FF55,_transparent_70%)] blur-3xl" />
        <div className="absolute top-24 right-1/3 h-[360px] w-[360px] bg-[radial-gradient(circle_at_center,_#9B5DFF33,_transparent_70%)] blur-3xl" />
      </div>

      {/* легкая текстура */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <motion.div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(245,239,231,0.6) 1px, transparent 0)",
            backgroundSize: "70px 70px",
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

      <div className="relative z-10 max-w-[1100px] mx-auto text-center text-[#F5EFE7]">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          viewport={{ once: true }}
        >
          {/* верхний акцент-линия */}
          <motion.div
            className="mx-auto mb-6 h-[2px] w-20 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.9, ease: EASE }}
            viewport={{ once: true }}
          />

          {/* mini-badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs md:text-sm tracking-wide text-[#E8F2FF] backdrop-blur">
            <Sparkles className="h-4 w-4 text-[#4CC2FF]" />
            <span>Сайт + CRM + автоматизация заявок</span>
          </div>

          <h2 className="mt-6 text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
            {pricingData.cta.title}
          </h2>

          <p className="mt-5 text-base md:text-xl text-[#C7CEDF] max-w-3xl mx-auto leading-relaxed">
            {pricingData.cta.subtitle}
          </p>

          {/* micro-UX: что будет на консультации */}
          <div className="mt-8 grid gap-3 md:gap-4 md:grid-cols-3 text-left max-w-4xl mx-auto">
            {[
              {
                title: "CRM подключение",
                text: "Настраиваю Notion / Airtable / HubSpot и структуру для заявок.",
              },
              {
                title: "Автоматизация заявок",
                text: "Форма/WhatsApp → CRM: новые лиды, статусы, уведомления.",
              },
              {
                title: "План реализации",
                text: "Оценим объём работ, сроки и что входит в выбранный пакет.",
              },
            ].map((it) => (
              <div
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

          {/* CTA buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* primary */}
            <motion.a
              href="#contact-form"
              className="relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full px-8 py-4 md:px-10 md:py-5 text-sm md:text-base font-semibold text-[#050816] shadow-[0_0_40px_rgba(76,194,255,0.55)]"
              whileHover={reduce ? undefined : { scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]" />
              <motion.span
                className="absolute inset-0 bg-[linear-gradient(120deg,_transparent_0%,_rgba(255,255,255,0.75)_20%,_transparent_40%)] opacity-0"
                initial={{ x: "-120%" }}
                whileHover={reduce ? undefined : { x: "120%", opacity: 0.35 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
              <span className="relative z-10">{pricingData.cta.button}</span>
              <ArrowRight className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </motion.a>

            {/* secondary: WhatsApp */}
            <motion.a
              href="#whatsapp"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-4 md:px-10 md:py-5 text-sm md:text-base text-[#E8F2FF] backdrop-blur hover:bg-white/10 transition-colors"
              whileHover={reduce ? undefined : { y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle className="h-5 w-5 text-[#4CC2FF]" />
              <span>Написать в WhatsApp</span>
            </motion.a>
          </div>

          {/* helper link */}
          <motion.a
            href="#comparison"
            className="mt-6 inline-flex items-center gap-2 text-sm md:text-base text-[#C7CEDF] hover:text-[#F2F4FA] transition-colors"
            whileHover={reduce ? undefined : { x: 6 }}
          >
            <span>Сравнить пакеты</span>
            <ArrowRight className="h-4 w-4" />
          </motion.a>

          {/* small note for trust */}
          <p className="mt-6 text-xs md:text-sm text-[#9AA6BF]">
            Лицензии сервисов (CRM / CMS / хостинг / чат-бот платформы)
            оплачиваются заказчиком — я подбираю и настраиваю.
          </p>
        </motion.div>
      </div>

      <FloatingShapes />
    </section>
  );
}
