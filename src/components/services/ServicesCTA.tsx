

// "use client";

// import { motion } from "motion/react";

// export function ServicesCTA() {
//   return (
//     <section className="bg-[#050608] px-6 md:px-12 lg:px-20 py-28 text-center">
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         className="max-w-[800px] mx-auto"
//       >
//         <h2 className="text-3xl md:text-5xl font-semibold text-[#F5EFE7] mb-6">
//           Не уверены, что выбрать?
//         </h2>
//         <p className="text-[#C7CEDF] text-base md:text-xl mb-10">
//           Мы подскажем оптимальный формат под ваш бизнес за 15 минут — без
//           обязательств и “продажных” разговоров.
//         </p>

//         <a
//           href="#contact"
//           className="inline-flex items-center justify-center rounded-full px-10 py-4 text-[#050816] font-medium bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF] shadow-[0_0_40px_rgba(76,194,255,0.6)]"
//         >
//           Запросить консультацию
//         </a>
//       </motion.div>
//     </section>
//   );
// }
"use client";

import { motion } from "motion/react";

export function ServicesCTA() {
  return (
    <section className="relative overflow-hidden px-6 md:px-12 lg:px-20 py-28 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-[800px] mx-auto"
      >
        <h2 className="text-3xl md:text-5xl font-semibold text-[#F5EFE7] mb-6">
          Не уверены, что выбрать?
        </h2>
        <p className="text-[#C7CEDF] text-base md:text-xl mb-10">
          Мы подскажем оптимальный формат под ваш бизнес за 15 минут — без
          обязательств и “продажных” разговоров.
        </p>

        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-full px-10 py-4 text-[#050816] font-medium bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF] shadow-[0_0_40px_rgba(76,194,255,0.6)]"
        >
          Запросить консультацию
        </a>
      </motion.div>

      {/* anti-seam fades (под общий фон страницы) */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#020410] to-transparent" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#020410] to-transparent" />
    </section>
  );
}
