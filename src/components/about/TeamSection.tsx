"use client";

import { motion } from "motion/react";
import { Users } from "lucide-react";
import { TeamMember } from "./cards/TeamMember";


type TeamItem = {
  name: string;
  role: string;
  bio: string;
  avatar: string;
  linkedin?: string;
};

export function TeamSection({ team }: { team: TeamItem[] }) {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-32 md:py-40 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <motion.div
            className="w-24 h-[3px] bg-[#050608] mb-12 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />
          <div className="flex items-center justify-center gap-4 mb-8">
            <Users className="w-10 h-10 md:w-12 md:h-12" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              Наша команда
            </h2>
          </div>
          <p className="text-xl md:text-2xl lg:text-3xl opacity-70 max-w-3xl mx-auto">
            Люди, которые создают магию.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <TeamMember key={index} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
