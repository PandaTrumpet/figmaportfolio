
// "use client";

// import { motion, useReducedMotion } from "motion/react";

// const points = [
//   {
//     title: "Мы строим путь клиента",
//     text: "Не просто сайт, а продуманную логику: от первого касания до заявки и повторного обращения.",
//   },
//   {
//     title: "Автоматизация — часть системы",
//     text: "WhatsApp, формы и CRM интегрированы в процесс, а не подключаются «потом, если нужно».",
//   },
//   {
//     title: "Прозрачность до старта",
//     text: "Вы понимаете структуру, этапы и результат ещё до начала работы — без сюрпризов.",
//   },
//   {
//     title: "Фокус на малый бизнес",
//     text: "Решения адаптированы под реальные бюджеты и задачи малого бизнеса в Израиле.",
//   },
// ];

// export function DifferenceSection() {
//   const reduce = useReducedMotion();

//   return (
//     <section className="relative overflow-hidden bg-[#050816] px-6 md:px-12 lg:px-20 py-24 md:py-32">
//       {/* background glow */}
//       <div className="pointer-events-none absolute inset-0">
//         <div className="absolute -top-40 -left-40 h-[520px] w-[520px] bg-[radial-gradient(circle_at_center,_#3A7BFF44,_transparent_70%)] blur-3xl" />
//         <div className="absolute bottom-0 -right-40 h-[620px] w-[620px] bg-[radial-gradient(circle_at_center,_#9B5DFF33,_transparent_70%)] blur-3xl" />
//       </div>

//       {/* subtle noise */}
//       <div className="pointer-events-none absolute inset-0 opacity-[0.14] mix-blend-soft-light">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,_rgba(255,255,255,0.08),_transparent_35%),radial-gradient(circle_at_80%_30%,_rgba(255,255,255,0.06),_transparent_40%)]" />
//       </div>

//       <div className="relative z-10 max-w-[1100px] mx-auto">
//         {/* header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
//           className="mb-14 md:mb-20"
//         >
//           <div className="mb-6 h-[2px] w-20 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]" />
//           <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[#F5EFE7] mb-4">
//             Почему это работает
//           </h2>
//           <p className="text-[#C7CEDF] text-base md:text-xl max-w-3xl leading-relaxed">
//             Мы не продаём шаблоны. Мы проектируем систему, которая приводит
//             клиентов и упрощает управление бизнесом.
//           </p>
//         </motion.div>

//         {/* cards */}
//         <div className="grid gap-6 md:grid-cols-2">
//           {points.map((p, i) => (
//             <motion.div
//               key={p.title}
//               initial={{ opacity: 0, y: 26 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-100px" }}
//               transition={{
//                 duration: 0.55,
//                 delay: i * 0.08,
//                 ease: [0.16, 1, 0.3, 1],
//               }}
//               whileHover={{
//                 y: -8,
//               }}
//               className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#060A13] via-[#050816] to-[#02030A] p-6 md:p-7 backdrop-blur-xl shadow-[0_26px_80px_rgba(0,0,0,0.85)] transition-all duration-300"
//             >
//               {/* усиленная aura */}
//               <motion.div
//                 className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(76,194,255,0.35),_transparent_65%)]"
//                 initial={{ opacity: 0.35 }}
//                 whileHover={{ opacity: 0.75 }}
//                 transition={{ duration: 0.35, ease: "easeOut" }}
//               />

//               {/* glass shine */}
//               <motion.div
//                 className="pointer-events-none absolute -inset-10 bg-[linear-gradient(115deg,_transparent_0%,_rgba(255,255,255,0.18)_30%,_transparent_60%)] mix-blend-screen"
//                 initial={{ x: "-140%", opacity: 0 }}
//                 whileHover={{ x: "140%", opacity: 1 }}
//                 transition={{ duration: 0.9, ease: "easeInOut" }}
//               />

//               {/* gradient outline */}
//               <motion.div
//                 className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent"
//                 animate={{
//                   boxShadow: "0 0 0 1px rgba(255,255,255,0.06)",
//                 }}
//                 whileHover={{
//                   boxShadow:
//                     "0 0 0 1px rgba(76,194,255,0.6), 0 0 46px rgba(76,194,255,0.85)",
//                 }}
//                 transition={{ duration: 0.25 }}
//                 style={{
//                   background:
//                     "linear-gradient(135deg, #3A7BFF, #4CC2FF, #9B5DFF)",
//                   WebkitMask:
//                     "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
//                   WebkitMaskComposite: "xor",
//                   maskComposite: "exclude",
//                   padding: "1px",
//                 }}
//               />

//               {/* content */}
//               <div className="relative z-10">
//                 <div className="mb-3 text-[11px] uppercase tracking-wider text-[#C7CEDF] opacity-60 transition-opacity group-hover:opacity-90">
//                   0{i + 1}
//                 </div>

//                 <h3 className="text-lg md:text-2xl font-semibold text-[#F5EFE7] mb-3 transition-colors group-hover:text-white">
//                   {p.title}
//                 </h3>

//                 <p className="text-[#C7CEDF] text-sm md:text-base leading-relaxed opacity-90 transition-opacity group-hover:opacity-100">
//                   {p.text}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* bottom fade */}
//       <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#050816] to-transparent" />
//     </section>
//   );
// }
"use client";

import { motion, useReducedMotion } from "motion/react";

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
        px-6 md:px-12 lg:px-20
        py-24 md:py-32
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

      <div className="relative z-10 max-w-[1100px] mx-auto">
        {/* header */}
        <motion.div
          initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 md:mb-20"
        >
          <div className="mb-6 h-[2px] w-20 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]" />

          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[#F5EFE7] mb-4">
            Почему это работает
          </h2>

          <p className="text-[#C7CEDF] text-base md:text-xl max-w-3xl leading-relaxed">
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
                animate={{
                  boxShadow: "0 0 0 1px rgba(255,255,255,0.06)",
                }}
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
                <div className="mb-3 text-[11px] uppercase tracking-wider text-[#C7CEDF] opacity-60 transition-opacity group-hover:opacity-90">
                  0{i + 1}
                </div>

                <h3 className="text-lg md:text-2xl font-semibold text-[#F5EFE7] mb-3 transition-colors group-hover:text-white">
                  {p.title}
                </h3>

                <p className="text-[#C7CEDF] text-sm md:text-base leading-relaxed opacity-90 transition-opacity group-hover:opacity-100">
                  {p.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
