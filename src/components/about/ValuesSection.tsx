// "use client";

// import { motion } from "motion/react";
// import { ValueCard } from "./ValueCard";


// type ValueItem = {
//   icon: string;
//   title: string;
//   description: string;
// };

// export function ValuesSection({ values }: { values: ValueItem[] }) {
//   return (
//     <section className="px-6 md:px-12 lg:px-20 py-32 md:py-40 bg-white relative overflow-hidden">
//       <div className="max-w-[1400px] mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-24"
//         >
//           <motion.div
//             className="w-24 h-[3px] bg-[#050608] mb-12 mx-auto"
//             initial={{ width: 0 }}
//             whileInView={{ width: 96 }}
//             transition={{ duration: 1 }}
//             viewport={{ once: true }}
//           />
//           <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-8">
//             Наши ценности
//           </h2>
//           <p className="text-xl md:text-2xl lg:text-3xl opacity-70 max-w-3xl mx-auto">
//             Принципы, которые определяют, как мы работаем.
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-2 gap-8">
//           {values.map((value, index) => (
//             <ValueCard key={index} value={value} index={index} />
//           ))}
//         </div>
//       </div>

//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
//         <div
//           className="absolute inset-0"
//           style={{
//             backgroundImage:
//               "radial-gradient(circle at 2px 2px, #050608 1px, transparent 0)",
//             backgroundSize: "40px 40px",
//           }}
//         />
//       </div>
//     </section>
//   );
// }


// ValuesSection.tsx
"use client";

import { motion, useReducedMotion } from "motion/react";
import { ValueCard } from "./ValueCard";

type ValueItem = {
  icon: string;
  title: string;
  description: string;
};

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function ValuesSection({ values }: { values: ValueItem[] }) {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#050816] px-6 md:px-12 lg:px-20 py-24 md:py-32">
      {/* background spots */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -top-44 -left-40 h-96 w-96 bg-[radial-gradient(circle_at_center,_#3A7BFF55,_transparent_70%)] blur-3xl" />
        <div className="absolute -bottom-52 -right-24 h-[520px] w-[520px] bg-[radial-gradient(circle_at_center,_#4CC2FF55,_transparent_70%)] blur-3xl" />
      </div>

      {/* grid overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.10] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:64px_64px]" />

      <div className="relative z-10 max-w-[1400px] mx-auto">
        {/* Header */}
        <motion.div
          initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          viewport={{ once: true, margin: "-120px" }}
          className="text-center mb-14 md:mb-16"
        >
          <motion.div
            className="mx-auto mb-6 h-[2px] w-20 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.9, delay: 0.12, ease: EASE }}
            viewport={{ once: true }}
          />

          {/* UX: заголовок короче, увереннее */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight text-[#F5EFE7] mb-4 md:mb-6">
            Как мы работаем
          </h2>

          {/* UX: под Израиль — прямолинейно, без пафоса */}
          <p className="text-base md:text-xl lg:text-2xl text-[#C7CEDF] max-w-3xl mx-auto leading-relaxed">
            Чёткие сроки, прозрачный процесс и фокус на заявках. Без «магии» —
            только понятные шаги и измеримый результат.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-7 md:gap-8">
          {values.map((value, index) => (
            <ValueCard key={`${value.title}-${index}`} value={value} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
