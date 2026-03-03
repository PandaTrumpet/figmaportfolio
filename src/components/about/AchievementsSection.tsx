// "use client";

// import * as React from "react";
// import { motion, useReducedMotion } from "motion/react";
// import { BadgeCheck, TrendingUp } from "lucide-react";
// import { AwardCard } from "./cards/AwardCard";
// import { PageContainer } from "../Layout/PageContainer";

// type AchievementItem = {
//   icon: string;
//   year: string;
//   award: string;
//   category: string;
// };

// type AchievementsData = {
//   title: string;
//   items: AchievementItem[];
// };

// type RecognitionStat = {
//   number: string;
//   label: string;
//   description: string;
// };

// const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

// export function AchievementsSection({
//   achievements,
//   recognition,
// }: {
//   achievements: AchievementsData;
//   recognition: RecognitionStat[];
// }) {
//   const reduce = useReducedMotion();

//   return (
//     <section
//       className="relative overflow-visible  pt-10 pb-10
//         md:pt-14 md:pb-14
//         lg:pt-16 lg:pb-16"
//     >
//       {/* BACKGROUND (full-bleed, clip only background) */}
//       <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
//         {/* background spots */}
//         <div className="absolute inset-0 opacity-60">
//           <div className="absolute -top-44 -left-40 h-96 w-96 bg-[radial-gradient(circle_at_center,_#3A7BFF55,_transparent_70%)] blur-3xl" />
//           <div className="absolute -bottom-52 -right-24 h-[520px] w-[520px] bg-[radial-gradient(circle_at_center,_#4CC2FF55,_transparent_70%)] blur-3xl" />
//         </div>

//         {/* grid overlay (softer) */}
//         <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:64px_64px]" />

//         {/* gentle fade to avoid a hard edge */}
//         <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-b from-transparent to-[#020410]" />
//       </div>

//       <PageContainer className="relative z-10">
//         {/* Header */}
//         <motion.div
//           initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, ease: EASE }}
//           viewport={{ once: true, margin: "-120px" }}
//           className="mb-12 text-center md:mb-16"
//         >

//           <div className="mb-4 flex items-center justify-center gap-3 md:mb-6 md:gap-4">
//             <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-[radial-gradient(circle_at_top,_#3A7BFF3b,_#050816)] shadow-[0_0_40px_rgba(58,123,255,0.55)] md:h-12 md:w-12">
//               <BadgeCheck className="h-6 w-6 text-[#E8F2FF]" />
//             </span>

//             <h2
//               className="text-3xl
//   md:text-4xl
//   lg:text-5xl
//   xl:text-6xl
//   font-semibold
//   leading-tight
//   md:leading-[1.15]  text-slate-50 mb-3"
//             >
//               {achievements.title}
//             </h2>
//           </div>

//           <p
//             className="mx-auto   mt-4
//   text-white/75
//   leading-relaxed md:leading-[1.7]
//   max-w-[52ch] md:max-w-[60ch] lg:max-w-[66ch]
//   text-[clamp(0.98rem,0.55vw+0.88rem,1.15rem)]"
//           >
//             Не «награды на лендинге». А конкретные стандарты, которые
//             закладываем в каждый проект — чтобы сайт приносил заявки и работал
//             стабильно.
//           </p>
//         </motion.div>

//         {/* Standards grid */}
//         <div className="mb-14 grid gap-6 md:gap-7 md:grid-cols-2 lg:grid-cols-3 md:mb-18">
//           {achievements.items.map((achievement, index) => (
//             <AwardCard
//               key={`${achievement.award}-${index}`}
//               achievement={achievement}
//               index={index}
//             />
//           ))}
//         </div>

//         {/* Bottom stats */}
//         <div className="grid gap-6 md:grid-cols-3 md:gap-8">
//           {recognition.map((stat, index) => (
//             <motion.div
//               key={`${stat.label}-${index}`}
//               initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.08, ease: EASE }}
//               viewport={{ once: true, margin: "-120px" }}
//               className="relative"
//             >
//               {/* deep glow under tile */}
//               <motion.div
//                 className="absolute -inset-[12px] -z-20 rounded-[34px] bg-[radial-gradient(circle_at_top,_rgba(58,123,255,0.55),_transparent_70%)] blur-2xl"
//                 animate={{ opacity: 0.32, scale: 1 }}
//                 transition={{ duration: 0.35, ease: "easeOut" }}
//                 aria-hidden="true"
//               />

//               <motion.div
//                 className="
//                   relative h-full rounded-3xl
//                   border border-white/10
//                   bg-gradient-to-b from-[#060A13] via-[#050816] to-[#02030A]
//                   p-7 md:p-8
//                   shadow-[0_26px_80px_rgba(0,0,0,0.85)]
//                   backdrop-blur-xl overflow-hidden
//                   transition
//                   hover:border-white/15
//                 "
//                 whileHover={reduce ? undefined : { y: -10 }}
//                 transition={{ duration: 0.28, ease: "easeOut" }}
//               >
//                 {/* inner glow */}
//                 <motion.div
//                   className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-[#3A7BFF22] via-transparent to-[#4CC2FF22]"
//                   initial={{ opacity: 0.35 }}
//                   whileHover={{ opacity: 0.85 }}
//                   transition={{ duration: 0.28 }}
//                   aria-hidden="true"
//                 />

//                 {/* sheen */}
//                 <motion.div
//                   className="pointer-events-none absolute -inset-10 -z-10 bg-[linear-gradient(115deg,_transparent_0%,_rgba(255,255,255,0.20)_30%,_transparent_60%)] mix-blend-screen"
//                   initial={{ x: "-140%" }}
//                   whileHover={reduce ? undefined : { x: "140%", opacity: 0.55 }}
//                   transition={{ duration: 0.9, ease: "easeInOut" }}
//                   aria-hidden="true"
//                 />

//                 {/* icon */}
//                 <div className="mb-5 flex justify-center">
//                   <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-[radial-gradient(circle_at_top,_#3A7BFF3b,_#050816)] shadow-[0_0_40px_rgba(58,123,255,0.45)]">
//                     <TrendingUp className="h-7 w-7 text-[#E8F2FF] opacity-90" />
//                   </span>
//                 </div>

//                 <p
//                   className="
//     mb-2.5 md:mb-3
//     text-center
//     text-[34px] md:text-[42px] lg:text-[48px]
//     leading-[1.02]
//     font-semibold tracking-[-0.02em]
//     text-[#F2F4FA]
//   "
//                 >
//                   {stat.number}
//                 </p>

//                 <p
//                   className="
//     mb-2
//     text-center
//     text-[15px] md:text-[16px] lg:text-[17px]
//     leading-[1.25]
//     font-medium tracking-[-0.005em]
//     text-[#E8ECF4]
//   "
//                 >
//                   {stat.label}
//                 </p>

//                 <p
//                   className="
//     text-center
//     text-[14px] md:text-[15px] lg:text-[16px]
//     leading-[1.55] md:leading-[1.6]
//     text-[#C7CEDF]
//     opacity-85
//     max-w-[42ch]
//     mx-auto
//   "
//                 >
//                   {stat.description}
//                 </p>
//                 {/* corner detail */}
//                 <div
//                   className="pointer-events-none absolute bottom-4 right-4 h-8 w-8 opacity-40"
//                   aria-hidden="true"
//                 >
//                   <div className="h-full w-full rounded-br-3xl border-b border-r border-[#4CC2FF77]" />
//                 </div>
//               </motion.div>
//             </motion.div>
//           ))}
//         </div>
//       </PageContainer>

//       {/* floating decorative elements (full-bleed) */}
//       <motion.div
//         className="pointer-events-none absolute top-16 left-6 md:left-16 h-20 w-20 rounded-3xl border border-[#3A7BFF33] bg-[radial-gradient(circle_at_top,_#3A7BFF33,_transparent_70%)] opacity-50"
//         animate={reduce ? undefined : { rotate: 360, scale: [1, 1.08, 1] }}
//         transition={
//           reduce
//             ? undefined
//             : {
//                 rotate: { duration: 26, repeat: Infinity, ease: "linear" },
//                 scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
//               }
//         }
//         aria-hidden="true"
//       />
//       <motion.div
//         className="pointer-events-none absolute bottom-16 right-6 md:right-16 h-24 w-24 rounded-3xl border border-[#4CC2FF33] bg-[radial-gradient(circle_at_top,_#4CC2FF33,_transparent_70%)] opacity-45"
//         animate={reduce ? undefined : { rotate: -360, scale: [1, 0.92, 1] }}
//         transition={
//           reduce
//             ? undefined
//             : {
//                 rotate: { duration: 34, repeat: Infinity, ease: "linear" },
//                 scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
//               }
//         }
//         aria-hidden="true"
//       />
//     </section>
//   );
// }

"use client";

import * as React from "react";
import { motion, useReducedMotion } from "motion/react";
import { useTranslations } from "next-intl";
import { useId, useState } from "react";
import { BadgeCheck, TrendingUp } from "lucide-react";

import { AwardCard } from "./cards/AwardCard";
import { PageContainer } from "../Layout/PageContainer";

type AchievementItem = {
  icon: string;
  year: string;
  award: string;
  category: string;
};

type AchievementsData = {
  title: string;
  items: AchievementItem[];
};

type RecognitionStat = {
  number: string;
  label: string;
  description: string;
};

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

function RecognitionTile({
  stat,
  index,
  reduce,
}: {
  stat: RecognitionStat;
  index: number;
  reduce: boolean| null;
}) {
  const [active, setActive] = useState(false);

  return (
    <motion.li
      initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: EASE }}
      viewport={{ once: true, margin: "-120px" }}
      className="relative"
    >
      {/* deep glow under tile */}
      <motion.div
        className="absolute -inset-[12px] -z-20 rounded-[34px] bg-[radial-gradient(circle_at_top,_rgba(58,123,255,0.55),_transparent_70%)] blur-2xl"
        animate={{ opacity: 0.32, scale: 1 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        aria-hidden="true"
      />

      <motion.div
        tabIndex={0}
        role="group"
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
        className="
          relative h-full rounded-3xl
          border border-white/10
          bg-gradient-to-b from-[#060A13] via-[#050816] to-[#02030A]
          p-7 md:p-8
          shadow-[0_26px_80px_rgba(0,0,0,0.85)]
          backdrop-blur-xl overflow-hidden
          transition
          hover:border-white/15
          outline-none
          focus-visible:ring-2 focus-visible:ring-[#4CC2FF]
          focus-visible:ring-offset-2 focus-visible:ring-offset-[#020410]
        "
        whileHover={reduce ? undefined : { y: -10 }}
        transition={{ duration: 0.28, ease: "easeOut" }}
      >
        {/* inner glow */}
        <motion.div
          className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-[#3A7BFF22] via-transparent to-[#4CC2FF22]"
          animate={{ opacity: active ? 0.85 : 0.35 }}
          transition={{ duration: 0.28 }}
          aria-hidden="true"
        />

        {/* sheen */}
        <motion.div
          className="pointer-events-none absolute -inset-10 -z-10 bg-[linear-gradient(115deg,_transparent_0%,_rgba(255,255,255,0.20)_30%,_transparent_60%)] mix-blend-screen"
          initial={{ x: "-140%" }}
          whileHover={reduce ? undefined : { x: "140%", opacity: 0.55 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          aria-hidden="true"
        />

        {/* icon (decorative) */}
        <div className="mb-5 flex justify-center" aria-hidden="true">
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-[radial-gradient(circle_at_top,_#3A7BFF3b,_#050816)] shadow-[0_0_40px_rgba(58,123,255,0.45)]">
            <TrendingUp
              className="h-7 w-7 text-[#E8F2FF] opacity-90"
              aria-hidden="true"
            />
          </span>
        </div>

        <p
          className="
            mb-2.5 md:mb-3 text-center
            text-[34px] md:text-[42px] lg:text-[48px]
            leading-[1.02]
            font-semibold tracking-[-0.02em]
            text-[#F2F4FA]
          "
        >
          {stat.number}
        </p>

        <p
          className="
            mb-2 text-center
            text-[15px] md:text-[16px] lg:text-[17px]
            leading-[1.25]
            font-medium tracking-[-0.005em]
            text-[#E8ECF4]
          "
        >
          {stat.label}
        </p>

        <p
          className="
            text-center
            text-[14px] md:text-[15px] lg:text-[16px]
            leading-[1.55] md:leading-[1.6]
            text-[#C7CEDF]
            opacity-85
            max-w-[42ch]
            mx-auto
          "
        >
          {stat.description}
        </p>

        {/* corner detail */}
        <div
          className="pointer-events-none absolute bottom-4 right-4 h-8 w-8 opacity-40"
          aria-hidden="true"
        >
          <div className="h-full w-full rounded-br-3xl border-b border-r border-[#4CC2FF77]" />
        </div>
      </motion.div>
    </motion.li>
  );
}

export function AchievementsSection({
  achievements,
  recognition,
}: {
  achievements: AchievementsData;
  recognition: RecognitionStat[];
}) {
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
        lg:pt-16 lg:pb-16"
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

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-b from-transparent to-[#020410]" />
      </div>

      <PageContainer className="relative z-10">
        {/* Header */}
        <motion.header
          initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          viewport={{ once: true, margin: "-120px" }}
          className="mb-12 text-center md:mb-16"
        >
          <div className="mb-4 flex items-center justify-center gap-3 md:mb-6 md:gap-4">
            <span
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-[radial-gradient(circle_at_top,_#3A7BFF3b,_#050816)] shadow-[0_0_40px_rgba(58,123,255,0.55)] md:h-12 md:w-12"
              aria-hidden="true"
            >
              <BadgeCheck
                className="h-6 w-6 text-[#E8F2FF]"
                aria-hidden="true"
              />
            </span>

            <h2
              id={headingId}
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl
                font-semibold leading-tight md:leading-[1.15]
                text-slate-50 mb-3"
            >
              {achievements.title}
            </h2>
          </div>

          <p
            id={descId}
            className="mx-auto mt-4
              text-white/75
              leading-relaxed md:leading-[1.7]
              max-w-[52ch] md:max-w-[60ch] lg:max-w-[66ch]
              text-[clamp(0.98rem,0.55vw+0.88rem,1.15rem)]"
          >
            {t("achievementsSection.subtitle")}
          </p>
        </motion.header>

        {/* Standards grid (WCAG: list semantics) */}
        <ul
          className="mb-14 grid gap-6 md:gap-7 md:grid-cols-2 lg:grid-cols-3 md:mb-18"
          role="list"
        >
          {achievements.items.map((achievement, index) => (
            <li key={`${achievement.award}-${index}`}>
              <AwardCard achievement={achievement} index={index} />
            </li>
          ))}
        </ul>

        {/* Bottom stats (WCAG: list semantics + focus visible) */}
        <ul className="grid gap-6 md:grid-cols-3 md:gap-8" role="list">
          {recognition.map((stat, index) => (
            <RecognitionTile
              key={`${stat.label}-${index}`}
              stat={stat}
              index={index}
              reduce={reduce}
            />
          ))}
        </ul>
      </PageContainer>

      {/* floating decorative elements */}
      <motion.div
        className="pointer-events-none absolute top-16 left-6 md:left-16 h-20 w-20 rounded-3xl border border-[#3A7BFF33] bg-[radial-gradient(circle_at_top,_#3A7BFF33,_transparent_70%)] opacity-50"
        animate={reduce ? undefined : { rotate: 360, scale: [1, 1.08, 1] }}
        transition={
          reduce
            ? undefined
            : {
                rotate: { duration: 26, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              }
        }
        aria-hidden="true"
      />
      <motion.div
        className="pointer-events-none absolute bottom-16 right-6 md:right-16 h-24 w-24 rounded-3xl border border-[#4CC2FF33] bg-[radial-gradient(circle_at_top,_#4CC2FF33,_transparent_70%)] opacity-45"
        animate={reduce ? undefined : { rotate: -360, scale: [1, 0.92, 1] }}
        transition={
          reduce
            ? undefined
            : {
                rotate: { duration: 34, repeat: Infinity, ease: "linear" },
                scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
              }
        }
        aria-hidden="true"
      />
    </section>
  );
}