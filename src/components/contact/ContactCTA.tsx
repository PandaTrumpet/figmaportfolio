"use client";

import { motion } from "motion/react";
import { Calendar, Download } from "lucide-react";

export function ContactCTA({ data }: { data: any }) {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-32 md:py-40 bg-[#050608] text-[#F5EFE7] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl mb-8 leading-tight">
            {data.title}
          </h2>

          <p className="text-xl md:text-2xl opacity-70 mb-16 max-w-3xl mx-auto leading-relaxed">
            {data.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <motion.a
              href="#"
              className="inline-flex items-center gap-3 px-10 py-5 bg-[#F5EFE7] text-[#050608] text-lg group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5" />
              <span>Скачать Portfolio</span>
            </motion.a>

            <motion.a
              href="#"
              className="inline-flex items-center gap-3 px-10 py-5 border-2 border-[#F5EFE7] text-[#F5EFE7] text-lg group hover:bg-[#F5EFE7] hover:text-[#050608] transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Calendar className="w-5 h-5" />
              <span>Записаться на консультацию</span>
            </motion.a>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {data.stats.map((stat: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl mb-3">{stat.value}</p>
                <p className="text-base opacity-60 uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="w-full h-full"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #F5EFE7 0px, #F5EFE7 2px, transparent 2px, transparent 60px)",
          }}
          animate={{ backgroundPosition: ["0px 0px", "60px 60px"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </section>
  );
}
