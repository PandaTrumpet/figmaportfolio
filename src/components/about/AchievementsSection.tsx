// "use client";

// import { motion } from "motion/react";
// import { Award, TrendingUp } from "lucide-react";
// import { AwardCard } from "./cards/AwardCard";


// type AchievementItem = {
//   icon: React.ReactNode;
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

// export function AchievementsSection({
//   achievements,
//   recognition,
// }: {
//   achievements: AchievementsData;
//   recognition: RecognitionStat[];
// }) {
//   return (
//     <section className="px-6 md:px-12 lg:px-20 py-32 md:py-40 bg-[#050608] text-[#F5EFE7] relative overflow-hidden">
//       <div className="max-w-[1400px] mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-24"
//         >
//           <motion.div
//             className="w-24 h-[3px] bg-[#F5EFE7] mb-12 mx-auto"
//             initial={{ width: 0 }}
//             whileInView={{ width: 96 }}
//             transition={{ duration: 1 }}
//             viewport={{ once: true }}
//           />
//           <div className="flex items-center justify-center gap-4 mb-8">
//             <Award className="w-10 h-10 md:w-12 md:h-12" />
//             <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
//               {achievements.title}
//             </h2>
//           </div>
//         </motion.div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
//           {achievements.items.map((achievement, index) => (
//             <AwardCard key={index} achievement={achievement} index={index} />
//           ))}
//         </div>

//         <div className="grid md:grid-cols-3 gap-8">
//           {recognition.map((stat, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               className="text-center border-2 border-[#F5EFE7] p-10 md:p-12 hover:bg-[#F5EFE7] hover:text-[#050608] transition-all group"
//             >
//               <TrendingUp className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-6 opacity-50 group-hover:opacity-100" />
//               <p className="text-5xl md:text-6xl lg:text-7xl mb-4">
//                 {stat.number}
//               </p>
//               <p className="text-xl md:text-2xl mb-2">{stat.label}</p>
//               <p className="text-base opacity-70 group-hover:opacity-90">
//                 {stat.description}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       <motion.div
//         className="absolute top-20 left-20 w-48 h-48 border-2 border-[#F5EFE7] opacity-5"
//         animate={{ rotate: 360, scale: [1, 1.3, 1] }}
//         transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
//       />
//       <motion.div
//         className="absolute bottom-20 right-20 w-64 h-64 border-2 border-[#F5EFE7] opacity-5"
//         animate={{ rotate: -360, scale: [1, 0.8, 1] }}
//         transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
//       />
//     </section>
//   );
// }


"use client";

import * as React from "react";
import { motion, useReducedMotion } from "motion/react";
import { BadgeCheck, TrendingUp } from "lucide-react";
import { AwardCard } from "./cards/AwardCard";

type AchievementItem = {
  icon: string; // эмодзи / строка
  year: string; // "Core" | "Setup" | "Optional" | "Support" и т.п.
  award: string; // заголовок пункта
  category: string; // подпись/расшифровка
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

export function AchievementsSection({
  achievements,
  recognition,
}: {
  achievements: AchievementsData;
  recognition: RecognitionStat[];
}) {
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
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            className="mx-auto mb-6 h-[2px] w-20 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.9, delay: 0.12, ease: EASE }}
            viewport={{ once: true }}
          />

          <div className="flex items-center justify-center gap-3 md:gap-4 mb-4 md:mb-6">
            <span className="inline-flex h-11 w-11 md:h-12 md:w-12 items-center justify-center rounded-2xl border border-white/15 bg-[radial-gradient(circle_at_top,_#3A7BFF3b,_#050816)] shadow-[0_0_40px_rgba(58,123,255,0.55)]">
              <BadgeCheck className="h-6 w-6 text-[#E8F2FF]" />
            </span>

            <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight text-[#F5EFE7]">
              {achievements.title}
            </h2>
          </div>

          <p className="text-base md:text-xl lg:text-2xl text-[#C7CEDF] max-w-3xl mx-auto leading-relaxed">
            Не «награды на лендинге». А конкретные стандарты, которые
            закладываем в каждый проект — чтобы сайт приносил заявки и работал
            стабильно.
          </p>
        </motion.div>

        {/* Standards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 mb-14 md:mb-18">
          {achievements.items.map((achievement, index) => (
            <AwardCard
              key={`${achievement.award}-${index}`}
              achievement={achievement}
              index={index}
            />
          ))}
        </div>

        {/* Bottom stats (honest) */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {recognition.map((stat, index) => (
            <motion.div
              key={`${stat.label}-${index}`}
              initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: EASE }}
              viewport={{ once: true, margin: "-120px" }}
              className="relative"
            >
              {/* deep glow under tile */}
              <motion.div
                className="absolute -inset-[12px] rounded-[34px] bg-[radial-gradient(circle_at_top,_rgba(58,123,255,0.55),_transparent_70%)] blur-2xl -z-20"
                animate={{ opacity: 0.32, scale: 1 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                aria-hidden="true"
              />

              <motion.div
                className="
                  relative h-full rounded-3xl
                  border border-white/10
                  bg-gradient-to-b from-[#060A13] via-[#050816] to-[#02030A]
                  p-7 md:p-8
                  shadow-[0_26px_80px_rgba(0,0,0,0.85)]
                  backdrop-blur-xl overflow-hidden
                  transition
                  hover:border-white/15
                "
                whileHover={reduce ? undefined : { y: -10 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
              >
                {/* inner glow */}
                <motion.div
                  className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-[#3A7BFF22] via-transparent to-[#4CC2FF22] -z-10"
                  initial={{ opacity: 0.35 }}
                  whileHover={{ opacity: 0.85 }}
                  transition={{ duration: 0.28 }}
                  aria-hidden="true"
                />

                {/* sheen */}
                <motion.div
                  className="pointer-events-none absolute -inset-10 bg-[linear-gradient(115deg,_transparent_0%,_rgba(255,255,255,0.20)_30%,_transparent_60%)] mix-blend-screen -z-10"
                  initial={{ x: "-140%" }}
                  whileHover={reduce ? undefined : { x: "140%", opacity: 0.55 }}
                  transition={{ duration: 0.9, ease: "easeInOut" }}
                  aria-hidden="true"
                />

                {/* icon */}
                <div className="mb-5 flex justify-center">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-[radial-gradient(circle_at_top,_#3A7BFF3b,_#050816)] shadow-[0_0_40px_rgba(58,123,255,0.45)]">
                    <TrendingUp className="h-7 w-7 text-[#E8F2FF] opacity-90" />
                  </span>
                </div>

                <p className="text-4xl md:text-5xl font-semibold tracking-tight text-[#F2F4FA] text-center mb-2">
                  {stat.number}
                </p>
                <p className="text-base md:text-lg text-center text-[#E8ECF4] mb-2">
                  {stat.label}
                </p>
                <p className="text-sm md:text-base text-center text-[#C7CEDF] opacity-85 leading-relaxed">
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
            </motion.div>
          ))}
        </div>
      </div>

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
