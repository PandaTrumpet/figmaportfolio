

"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "@/src/components/figma/ImageWithFallback";
import { servicesNew } from "@/src/data/newServices";

type Props = {
  service: (typeof servicesNew)[0];
  index: number;
};

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function ServiceBlock({ service, index }: Props) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-120px" });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      ref={sectionRef}
      className="grid lg:grid-cols-[1fr,1.15fr] gap-10 lg:gap-16 items-start"
    >
      {/* Content Column */}
      <motion.div
        initial={{ opacity: 0, x: -48 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: EASE }}
        className="relative lg:sticky lg:top-24"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* aura behind left block */}
        <motion.div
          className="pointer-events-none absolute -inset-6 rounded-[40px] bg-[radial-gradient(circle_at_top,_rgba(58,123,255,0.45),_transparent_70%)] blur-3xl -z-20"
          animate={{
            opacity: isHovered ? 0.95 : 0.4,
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        />

        {/* top meta */}
        <div className="mb-6 flex items-center gap-5">
          <div className="text-6xl md:text-7xl font-semibold opacity-[0.08] leading-none select-none">
            0{index + 1}
          </div>

          <div className="h-px flex-1 bg-gradient-to-r from-white/15 via-white/5 to-transparent" />
        </div>

        {/* Title + tagline */}
        <div className="mb-7">
          <h3 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.02] text-[#F5EFE7] mb-3">
            {service.title}
          </h3>
          <p className="text-base md:text-xl text-[#C7CEDF] opacity-90 italic">
            {service.tagline}
          </p>
        </div>

        {/* Description */}
        <p className="text-sm md:text-lg leading-relaxed text-[#E8ECF4] opacity-85 mb-8 max-w-xl">
          {service.description}
        </p>

        {/* Features — glass card */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#060A13] via-[#050816] to-[#02030A] p-7 md:p-8 shadow-[0_26px_80px_rgba(0,0,0,0.85)] backdrop-blur-xl">
          {/* inner gradient */}
          <motion.div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(76,194,255,0.25),_transparent_60%)] -z-10"
            animate={{ opacity: isHovered ? 0.85 : 0.4 }}
            transition={{ duration: 0.3 }}
          />

          {/* border glow (mask) */}
          <motion.div
            className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent"
            animate={{
              boxShadow: isHovered
                ? "0 0 0 1px rgba(76,194,255,0.6), 0 0 46px rgba(76,194,255,0.85)"
                : "0 0 0 1px rgba(255,255,255,0.06)",
            }}
            transition={{ duration: 0.25 }}
            style={{
              background: "linear-gradient(135deg, #3A7BFF, #4CC2FF, #9B5DFF)",
              WebkitMask:
                "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
              padding: "1px",
            }}
          />

          <div className="flex items-center justify-between gap-4 mb-5">
            <h4 className="text-xs md:text-sm uppercase tracking-wider text-[#F5EFE7] opacity-80">
              Что включено
            </h4>
            <div className="h-[2px] w-14 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF] opacity-70" />
          </div>

          <ul className="space-y-3">
            {service.features.map((feature, i) => (
              <motion.li
                key={feature}
                initial={{ opacity: 0, x: -16 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.45,
                  delay: 0.18 + i * 0.07,
                  ease: EASE,
                }}
                className="flex items-start gap-3 text-sm md:text-base text-[#D5DBE6]"
              >
                <span className="mt-2 inline-block h-1.5 w-3 rounded-full bg-gradient-to-r from-[#3A7BFF] to-[#4CC2FF]" />
                <span className="opacity-90">{feature}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Price + timeline + CTA */}
        <div className="mt-7 rounded-3xl border border-white/10 bg-[#050608]/60 p-7 md:p-8 backdrop-blur-xl shadow-[0_26px_80px_rgba(0,0,0,0.75)]">
          <div className="flex items-end justify-between gap-6 mb-6">
            <div>
              <p className="text-[11px] md:text-xs uppercase tracking-wider text-[#C7CEDF] opacity-70 mb-2">
                От
              </p>
              <p className="text-2xl md:text-3xl font-semibold text-[#F5EFE7]">
                {service.startingPrice}
              </p>
            </div>
            <div className="text-right">
              <p className="text-[11px] md:text-xs uppercase tracking-wider text-[#C7CEDF] opacity-70 mb-2">
                Срок
              </p>
              <p className="text-2xl md:text-3xl font-semibold text-[#F5EFE7]">
                {service.timeline}
              </p>
            </div>
          </div>

          <motion.a
            href="#contact"
            className="relative inline-flex w-full items-center justify-center overflow-hidden rounded-full px-8 py-3.5 md:px-10 md:py-4 text-sm md:text-base font-medium text-[#050816] shadow-[0_0_40px_rgba(76,194,255,0.55)]"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]" />
            <motion.span
              className="absolute inset-0 bg-[linear-gradient(120deg,_transparent_0%,_white_20%,_transparent_40%)] opacity-0"
              initial={{ x: "-110%" }}
              whileHover={{ x: "110%", opacity: 0.55 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            />
            <span className="relative z-10 flex items-center gap-2">
              Обсудить проект
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </span>
          </motion.a>
        </div>
      </motion.div>

      {/* Examples Column */}
      <motion.div
        initial={{ opacity: 0, x: 48 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
        className="space-y-6 md:space-y-8"
      >
        <div className="flex items-center justify-between gap-6">
          <h4 className="text-xl md:text-2xl font-semibold text-[#F5EFE7]">
            {/* Примеры работ */}
          </h4>
          <div className="hidden md:block h-px flex-1 bg-gradient-to-r from-white/10 via-white/5 to-transparent" />
        </div>

        <div className="grid gap-6">
          {service.examples.map((example, i) => (
            <motion.article
              key={example.title ?? i}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.55,
                delay: 0.25 + i * 0.12,
                ease: EASE,
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#060A13] via-[#050816] to-[#02030A] shadow-[0_26px_80px_rgba(0,0,0,0.85)]"
            >
              {/* card aura */}
              <motion.div
                className="pointer-events-none absolute -inset-10 bg-[radial-gradient(circle_at_top,_rgba(76,194,255,0.35),_transparent_65%)] blur-3xl -z-10"
                animate={{ opacity: 0.35 }}
              />

              {/* shine */}
              <motion.div
                className="pointer-events-none absolute -inset-10 bg-[linear-gradient(115deg,_transparent_0%,_rgba(255,255,255,0.18)_30%,_transparent_60%)] mix-blend-screen"
                initial={{ x: "-140%" }}
                whileHover={{ x: "140%" }}
                transition={{ duration: 0.95, ease: "easeInOut" }}
              />

              <div className="aspect-[16/10] overflow-hidden">
                <ImageWithFallback
                  src={example.image}
                  alt={example.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                />
              </div>

              <div className="p-6 md:p-7">
                <h5 className="text-lg md:text-2xl font-semibold text-[#F5EFE7] mb-2">
                  {example.title}
                </h5>
                <p className="text-sm md:text-base text-[#C7CEDF] opacity-85 leading-relaxed">
                  {example.description}
                </p>
              </div>

              {/* gradient outline on hover */}
              <motion.div
                className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent"
                animate={{
                  boxShadow: "0 0 0 1px rgba(255,255,255,0.06)",
                }}
                whileHover={{
                  boxShadow:
                    "0 0 0 1px rgba(76,194,255,0.6), 0 0 46px rgba(76,194,255,0.75)",
                }}
                transition={{ duration: 0.25 }}
                style={{
                  background:
                    "linear-gradient(135deg, #3A7BFF, #4CC2FF, #9B5DFF)",
                  WebkitMask:
                    "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                  padding: "1px",
                }}
              />
            </motion.article>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
