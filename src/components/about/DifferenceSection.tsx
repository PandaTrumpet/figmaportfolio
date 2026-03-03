// "use client";

// import { motion, useReducedMotion } from "motion/react";
// import { DifferencePoint } from "./cards/DifferencePoint";
// import { PageContainer } from "../Layout/PageContainer";

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
//     <section
//       className="relative overflow-visible  pt-10 pb-10
//         md:pt-14 md:pb-14
//         lg:pt-16 lg:pb-16 text-slate-100"
//     >
//       {/* BACKGROUND (full-bleed, clip only background) */}
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
//       <PageContainer className="relative z-10">
//         <motion.div
//           initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, ease: EASE }}
//           viewport={{ once: true, margin: "-120px" }}
//           className="mb-12 md:mb-16"
//         >

//           <h2
//             className="mb-3 text-3xl
//   md:text-4xl
//   lg:text-5xl
//   xl:text-6xl
//   font-semibold
//   leading-tight
//   md:leading-[1.15]  text-slate-50"
//           >
//             Почему с нами проще
//           </h2>

//           <p
//             className="  mt-4
//   text-white/75
//   leading-relaxed md:leading-[1.7]
//   max-w-[52ch] md:max-w-[60ch] lg:max-w-[66ch]
//   text-[clamp(0.98rem,0.55vw+0.88rem,1.15rem)]"
//           >
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
//       </PageContainer>
//     </section>
//   );
// }

"use client";

import { motion, useReducedMotion } from "motion/react";
import { useId } from "react";
import { useTranslations } from "next-intl";

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
  const t = useTranslations("about");
  const headingId = useId();
  const descId = useId();

  return (
    <section
      aria-labelledby={headingId}
      aria-describedby={descId}
      className="relative overflow-visible pt-10 pb-10
        md:pt-14 md:pb-14
        lg:pt-16 lg:pb-16 text-slate-100"
    >
      {/* BACKGROUND (decorative) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
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
        <motion.header
          initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          viewport={{ once: true, margin: "-120px" }}
          className="mb-12 md:mb-16"
        >
          <h2
            id={headingId}
            className="mb-3 text-3xl
              md:text-4xl
              lg:text-5xl
              xl:text-6xl
              font-semibold
              leading-tight
              md:leading-[1.15] text-slate-50"
          >
            {t("differenceSection.title")}
          </h2>

          <p
            id={descId}
            className="mt-4 text-white/75
              leading-relaxed md:leading-[1.7]
              max-w-[52ch] md:max-w-[60ch] lg:max-w-[66ch]
              text-[clamp(0.98rem,0.55vw+0.88rem,1.15rem)]"
          >
            {t("differenceSection.subtitle")}
          </p>
        </motion.header>

        {/* WCAG: list semantics for repeated items */}
        <ul className="space-y-14 sm:space-y-16 md:space-y-24" role="list">
          {data.points.map((point, index) => (
            <li key={`${point.title}-${index}`}>
              <DifferencePoint point={point} index={index} />
            </li>
          ))}
        </ul>
      </PageContainer>
    </section>
  );
}