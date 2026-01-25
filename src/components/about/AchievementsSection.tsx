"use client";

import { motion } from "motion/react";
import { Award, TrendingUp } from "lucide-react";
import { AwardCard } from "./cards/AwardCard";


type AchievementItem = {
  icon: React.ReactNode;
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

export function AchievementsSection({
  achievements,
  recognition,
}: {
  achievements: AchievementsData;
  recognition: RecognitionStat[];
}) {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-32 md:py-40 bg-[#050608] text-[#F5EFE7] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <motion.div
            className="w-24 h-[3px] bg-[#F5EFE7] mb-12 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />
          <div className="flex items-center justify-center gap-4 mb-8">
            <Award className="w-10 h-10 md:w-12 md:h-12" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              {achievements.title}
            </h2>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {achievements.items.map((achievement, index) => (
            <AwardCard key={index} achievement={achievement} index={index} />
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {recognition.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center border-2 border-[#F5EFE7] p-10 md:p-12 hover:bg-[#F5EFE7] hover:text-[#050608] transition-all group"
            >
              <TrendingUp className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-6 opacity-50 group-hover:opacity-100" />
              <p className="text-5xl md:text-6xl lg:text-7xl mb-4">
                {stat.number}
              </p>
              <p className="text-xl md:text-2xl mb-2">{stat.label}</p>
              <p className="text-base opacity-70 group-hover:opacity-90">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        className="absolute top-20 left-20 w-48 h-48 border-2 border-[#F5EFE7] opacity-5"
        animate={{ rotate: 360, scale: [1, 1.3, 1] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-64 h-64 border-2 border-[#F5EFE7] opacity-5"
        animate={{ rotate: -360, scale: [1, 0.8, 1] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />
    </section>
  );
}
