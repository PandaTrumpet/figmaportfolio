


// "use client";

// import { motion, useReducedMotion } from "motion/react";
// import { DifferencePoint } from "./cards/DifferencePoint";

// type DifferencePointItem = {
//   title: string;
//   description: string;
//   image: string;
// };

// type DifferenceData = {
//   title: string;
//   subtitle: string;
//   points: DifferencePointItem[];
// };

// const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

// export function DifferenceSection({ data }: { data: DifferenceData }) {
//   const reduce = useReducedMotion();

//   return (
//     <section className="relative overflow-visible px-6 py-24 md:px-12 md:py-32 lg:px-20 text-slate-100">
//       {/* BACKGROUND (clip only background) */}
//       <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
//         <div className="absolute inset-0 opacity-60">
//           <div className="absolute -top-44 -left-40 h-96 w-96 bg-[radial-gradient(circle_at_center,_#3A7BFF55,_transparent_70%)] blur-3xl" />
//           <div className="absolute -bottom-52 -right-24 h-[520px] w-[520px] bg-[radial-gradient(circle_at_center,_#4CC2FF55,_transparent_70%)] blur-3xl" />
//         </div>

//         <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:64px_64px]" />

//         {/* gentle fade so the section never “cuts” */}
//         <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-b from-transparent to-[#020410]" />
//       </div>

//       {/* CONTENT */}
//       <div className="relative z-10 mx-auto max-w-[1400px]">
//         <motion.div
//           initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, ease: EASE }}
//           viewport={{ once: true, margin: "-120px" }}
//           className="mb-12 md:mb-16"
//         >
//           <motion.div
//             className="mb-6 h-[2px] w-20 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]"
//             initial={{ width: 0 }}
//             whileInView={{ width: 80 }}
//             transition={{ duration: 0.9, delay: 0.12, ease: EASE }}
//             viewport={{ once: true }}
//           />

//           <h2 className="mb-4 text-3xl font-semibold tracking-tight text-[#F5EFE7] sm:text-4xl md:mb-6 md:text-5xl lg:text-6xl xl:text-7xl">
//             Почему с нами проще
//           </h2>

//           <p className="max-w-3xl text-base leading-relaxed text-[#C7CEDF] sm:text-lg md:text-xl lg:text-2xl">
//             Не “красивая студия”, а команда, которая отвечает за результат:
//             понятный UX, скорость, автоматизация и контроль метрик.
//           </p>
//         </motion.div>

//         <div className="space-y-14 sm:space-y-16 md:space-y-24">
//           {data.points.map((point, index) => (
//             <DifferencePoint
//               key={`${point.title}-${index}`}
//               point={point}
//               index={index}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { motion, useReducedMotion } from "motion/react";
import { DifferencePoint } from "./cards/DifferencePoint";
import { PageContainer } from "../Layout/PageContainer";

type DifferencePointItem = {
  title: string;
  description: string;
  image: string;
};

type DifferenceData = {
  title: string;
  subtitle: string;
  points: DifferencePointItem[];
};

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function DifferenceSection({ data }: { data: DifferenceData }) {
  const reduce = useReducedMotion();

  return (
    <section
      className="relative overflow-visible  pt-10 pb-10
        md:pt-14 md:pb-14
        lg:pt-16 lg:pb-16 text-slate-100"
    >
      {/* BACKGROUND (full-bleed, clip only background) */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 opacity-60">
          <div className="absolute -top-44 -left-40 h-96 w-96 bg-[radial-gradient(circle_at_center,_#3A7BFF55,_transparent_70%)] blur-3xl" />
          <div className="absolute -bottom-52 -right-24 h-[520px] w-[520px] bg-[radial-gradient(circle_at_center,_#4CC2FF55,_transparent_70%)] blur-3xl" />
        </div>

        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:64px_64px]" />

        {/* gentle fade so the section never “cuts” */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-b from-transparent to-[#020410]" />
      </div>

      {/* CONTENT */}
      <PageContainer className="relative z-10">
        <motion.div
          initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          viewport={{ once: true, margin: "-120px" }}
          className="mb-12 md:mb-16"
        >
          <motion.div
            className="mb-6 h-[2px] w-20 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.9, delay: 0.12, ease: EASE }}
            viewport={{ once: true }}
          />

          <h2 className="mb-4 text-3xl font-semibold tracking-tight text-[#F5EFE7] sm:text-4xl md:mb-6 md:text-5xl lg:text-6xl xl:text-7xl">
            Почему с нами проще
          </h2>

          <p className="max-w-3xl text-base leading-relaxed text-[#C7CEDF] sm:text-lg md:text-xl lg:text-2xl">
            Не “красивая студия”, а команда, которая отвечает за результат:
            понятный UX, скорость, автоматизация и контроль метрик.
          </p>
        </motion.div>

        <div className="space-y-14 sm:space-y-16 md:space-y-24">
          {data.points.map((point, index) => (
            <DifferencePoint
              key={`${point.title}-${index}`}
              point={point}
              index={index}
            />
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
