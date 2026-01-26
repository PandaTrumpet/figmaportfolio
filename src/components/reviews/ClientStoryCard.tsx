"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ImageWithFallback } from "@/src/components/figma/ImageWithFallback";
import { Quote, Star, TrendingUp, Users } from "lucide-react";

export function ClientStoryCard({
  story,
  index,
}: {
  story: any;
  index: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={ref}
      className={`grid lg:grid-cols-[1fr,1.3fr] gap-12 lg:gap-16 items-start ${
        index % 2 === 1 ? "lg:grid-flow-dense" : ""
      }`}
    >
      <motion.div
        initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1 }}
        className={index % 2 === 1 ? "lg:col-start-2" : ""}
      >
        <motion.div
          className="border-4 border-[#050608] p-10 md:p-12 bg-[#F5EFE7] sticky top-24"
          whileHover={{
            boxShadow: "20px 20px 0px 0px rgba(5,6,8,1)",
            x: -8,
            y: -8,
          }}
        >
          <div className="flex items-start gap-6 mb-8">
            <div className="w-20 h-20 md:w-24 md:h-24 border-2 border-[#050608] overflow-hidden shrink-0">
              <ImageWithFallback
                src={story.avatar}
                alt={story.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl mb-2">{story.name}</h3>
              <p className="text-lg opacity-60 mb-1">{story.role}</p>
              <p className="text-base opacity-50">{story.company}</p>
            </div>
          </div>

          <div className="flex gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-[#050608]" />
            ))}
          </div>

          <div className="relative mb-8">
            <Quote className="w-12 h-12 opacity-10 absolute -top-2 -left-2" />
            <p className="text-xl md:text-2xl leading-relaxed relative z-10 pl-8">
              {story.quote}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <div className="px-4 py-2 border-2 border-[#050608] text-sm">
              {story.projectType}
            </div>
            <div className="px-4 py-2 border-2 border-[#050608] text-sm">
              {story.industry}
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: index % 2 === 0 ? 80 : -80 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, delay: 0.2 }}
        className={`space-y-10 ${
          index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
        }`}
      >
        <div>
          <h4 className="text-xl md:text-2xl mb-4 flex items-center gap-3">
            <Users className="w-6 h-6" />
            История
          </h4>
          <p className="text-lg md:text-xl opacity-70 leading-relaxed">
            {story.story}
          </p>
        </div>

        <div className="border-l-4 border-[#050608] pl-6 md:pl-8">
          <h4 className="text-xl md:text-2xl mb-4">Вызов</h4>
          <p className="text-lg md:text-xl opacity-70 leading-relaxed">
            {story.challenge}
          </p>
        </div>

        <div className="border-l-4 border-[#050608] pl-6 md:pl-8">
          <h4 className="text-xl md:text-2xl mb-4">Решение</h4>
          <p className="text-lg md:text-xl opacity-70 leading-relaxed">
            {story.solution}
          </p>
        </div>

        <div className="bg-[#F5EFE7] border-2 border-[#050608] p-8 md:p-10">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="w-6 h-6" />
            <h4 className="text-xl md:text-2xl">Результаты</h4>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {story.results.map((result: any, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                className="text-center p-6 bg-white border-2 border-[#050608]"
              >
                <p className="text-4xl md:text-5xl mb-2">{result.value}</p>
                <p className="text-sm uppercase tracking-wider opacity-60">
                  {result.metric}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
