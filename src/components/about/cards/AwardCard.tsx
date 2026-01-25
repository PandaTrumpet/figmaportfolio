// "use client";

// import { motion } from "motion/react";

// type AchievementItem = {
//   icon: React.ReactNode;
//   year: string;
//   award: string;
//   category: string;
// };

// export function AwardCard({
//   achievement,
//   index,
// }: {
//   achievement: AchievementItem;
//   index: number;
// }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, delay: index * 0.05 }}
//       viewport={{ once: true }}
//       className="group"
//     >
//       <motion.div
//         className="border-2 border-[#F5EFE7] p-8 md:p-10 hover:bg-[#F5EFE7] hover:text-[#050608] transition-all h-full flex flex-col"
//         whileHover={{ boxShadow: "12px 12px 0px 0px rgba(245,239,231,0.3)" }}
//       >
//         <div className="flex items-start justify-between mb-6">
//           <motion.div
//             className="text-5xl"
//             animate={{ rotate: [0, 15, -15, 0] }}
//             transition={{
//               duration: 2,
//               repeat: Infinity,
//               repeatDelay: 4,
//               delay: index * 0.2,
//             }}
//           >
//             {achievement.icon}
//           </motion.div>
//           <span className="text-sm opacity-50 group-hover:opacity-70">
//             {achievement.year}
//           </span>
//         </div>

//         <h3 className="text-xl md:text-2xl mb-3">{achievement.award}</h3>
//         <p className="text-base opacity-70 group-hover:opacity-90 mt-auto">
//           {achievement.category}
//         </p>
//       </motion.div>
//     </motion.div>
//   );
// }


"use client";

import { motion } from "motion/react";

type AchievementItem = {
  icon: string; // эмодзи / строка
  year: string;
  award: string;
  category: string;
};

export function AwardCard({
  achievement,
  index,
}: {
  achievement: AchievementItem;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="group"
    >
      <motion.div
        className="border-2 border-[#F5EFE7] p-8 md:p-10 hover:bg-[#F5EFE7] hover:text-[#050608] transition-all h-full flex flex-col"
        whileHover={{ boxShadow: "12px 12px 0px 0px rgba(245,239,231,0.3)" }}
      >
        <div className="flex items-start justify-between mb-6">
          <motion.div
            className="text-5xl leading-none select-none"
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 4,
              delay: index * 0.2,
            }}
          >
            <span aria-hidden="true">{achievement.icon}</span>
          </motion.div>

          <span className="text-sm opacity-50 group-hover:opacity-70">
            {achievement.year}
          </span>
        </div>

        <h3 className="text-xl md:text-2xl mb-3">{achievement.award}</h3>

        <p className="text-base opacity-70 group-hover:opacity-90 mt-auto">
          {achievement.category}
        </p>
      </motion.div>
    </motion.div>
  );
}
