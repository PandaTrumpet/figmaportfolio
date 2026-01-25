"use client";

import { motion } from "motion/react";
import { Heart } from "lucide-react";
import { ImageWithFallback } from "@/src/components/figma/ImageWithFallback";

type MissionData = { title: string; description: string; image: string };

export function MissionSection({ data }: { data: MissionData }) {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-32 md:py-40 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="w-24 h-[3px] bg-[#050608] mb-12"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            />

            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-10 leading-tight">
              {data.title}
            </h2>

            <p className="text-xl md:text-2xl lg:text-3xl opacity-70 leading-relaxed mb-12">
              {data.description}
            </p>

            <motion.div
              className="flex items-center gap-4"
              whileHover={{ x: 10 }}
            >
              <Heart className="w-8 h-8" />
              <p className="text-lg md:text-xl opacity-60">
                Сделано с любовью в Тель-Авиве
              </p>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              className="aspect-4/5 border-4 border-[#050608] overflow-hidden relative"
              whileHover={{
                boxShadow: "24px 24px 0px 0px rgba(5,6,8,1)",
                x: -10,
                y: -10,
              }}
              transition={{ duration: 0.3 }}
            >
              <ImageWithFallback
                src={data.image}
                alt="Our mission"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#050608]/30 to-transparent" />
            </motion.div>

            <motion.div
              className="absolute -bottom-8 -right-8 w-32 h-32 border-2 border-[#050608] opacity-20 -z-10"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
