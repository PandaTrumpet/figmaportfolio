"use client";

import { motion } from "motion/react";
import { Linkedin } from "lucide-react";
import { ImageWithFallback } from "@/src/components/figma/ImageWithFallback";

type TeamItem = {
  name: string;
  role: string;
  bio: string;
  avatar: string;
  linkedin?: string;
};

export function TeamMember({
  member,
  index,
}: {
  member: TeamItem;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <motion.div
        className="relative"
        whileHover={{ y: -10 }}
        transition={{ duration: 0.3 }}
      >
        <div className="aspect-3/4 border-2 border-[#050608] overflow-hidden mb-6 relative">
          <ImageWithFallback
            src={member.avatar}
            alt={member.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          <motion.div
            className="absolute inset-0 bg-[#050608] flex items-center justify-center"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            {member.linkedin && (
              <a
                href={member.linkedin}
                className="w-12 h-12 rounded-full border-2 border-[#F5EFE7] flex items-center justify-center hover:bg-[#F5EFE7] hover:text-[#050608] transition-all"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            )}
          </motion.div>
        </div>

        <div>
          <h3 className="text-xl md:text-2xl mb-2">{member.name}</h3>
          <p className="text-base md:text-lg opacity-60 mb-4">{member.role}</p>
          <p className="text-sm md:text-base opacity-50 leading-relaxed">
            {member.bio}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
