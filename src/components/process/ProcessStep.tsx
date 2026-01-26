"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Check, Clock, Package, ChevronDown } from "lucide-react";
import { ImageWithFallback } from "@/src/components/figma/ImageWithFallback";

export function ProcessStep({ step, index }: { step: any; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={ref}
      className={`grid lg:grid-cols-[1fr,1.2fr] gap-12 lg:gap-16 items-center ${
        index % 2 === 1 ? "lg:grid-flow-dense" : ""
      }`}
    >
      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1 }}
        className={`relative ${index % 2 === 1 ? "lg:col-start-2" : ""}`}
      >
        <motion.div
          className="relative aspect-4/5 border-4 border-[#050608] overflow-hidden group"
          whileHover={{
            boxShadow: "24px 24px 0px 0px rgba(5,6,8,1)",
            x: -10,
            y: -10,
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="absolute inset-0 bg-linear-to-b from-transparent via-[#F5EFE7]/20 to-transparent opacity-0 group-hover:opacity-100 z-10"
            animate={{ backgroundPosition: ["0% 0%", "0% 100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.7 }}
          >
            <ImageWithFallback
              src={step.image}
              alt={step.title}
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div className="absolute top-8 left-8 w-20 h-20 border-2 border-[#050608] bg-[#F5EFE7] flex items-center justify-center text-2xl z-20">
            {step.number}
          </div>
        </motion.div>

        <motion.div
          className="absolute -bottom-8 -right-8 w-32 h-32 border-2 border-[#050608] opacity-20 -z-10"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: index % 2 === 0 ? 80 : -80 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, delay: 0.2 }}
        className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}
      >
        <div className="flex items-center gap-6 mb-8">
          <motion.div
            className="text-6xl md:text-7xl"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
          >
            {step.icon}
          </motion.div>

          <div className="flex items-center gap-2 px-4 py-2 border-2 border-[#050608] bg-white">
            <Clock className="w-5 h-5" />
            <span className="text-sm uppercase tracking-wider">
              {step.duration}
            </span>
          </div>
        </div>

        <h3 className="text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight">
          {step.title}
        </h3>
        <p className="text-xl md:text-2xl opacity-60 mb-8">{step.subtitle}</p>

        <p className="text-lg md:text-xl lg:text-2xl opacity-70 leading-relaxed mb-8">
          {step.description}
        </p>

        <div className="mb-8">
          <h4 className="text-xl md:text-2xl mb-4 flex items-center gap-2">
            <Package className="w-6 h-6" />
            Deliverables:
          </h4>

          <div className="space-y-2">
            {step.deliverables
              .slice(0, isExpanded ? undefined : 3)
              .map((item: string, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <Check className="w-5 h-5 shrink-0 mt-1 opacity-50" />
                  <span className="text-lg opacity-70">{item}</span>
                </motion.div>
              ))}
          </div>

          {step.deliverables.length > 3 && (
            <motion.button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-4 flex items-center gap-2 text-base opacity-60 hover:opacity-100 transition-opacity"
              whileHover={{ x: 5 }}
              type="button"
            >
              <span>
                {isExpanded
                  ? "Show less"
                  : `+${step.deliverables.length - 3} more`}
              </span>
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </motion.button>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {step.details.map((detail: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
              className="border-2 border-[#050608] p-4 bg-white hover:bg-[#F5EFE7] transition-colors"
            >
              <h5 className="text-base mb-2">{detail.title}</h5>
              <p className="text-sm opacity-60 leading-relaxed">
                {detail.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
