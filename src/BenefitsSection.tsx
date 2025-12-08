"use client";
import { motion } from "motion/react";
import { BenefitCard } from "./BenefitCard";
import { Zap, Sparkles, Code2, Globe, Wand2, Shield } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Lighthouse 95+ скорость",
    description: "Next.js архитектура быстрее Wix и WordPress.",
  },
  {
    icon: Sparkles,
    title: "Premium Dark дизайн",
    description: "Чистая типографика, микровзаимодействия, кино-эффекты.",
  },
  {
    icon: Code2,
    title: "Fullstack вместо шаблонов",
    description: "Ручная разработка: API, интеграции, оптимизация.",
  },
  {
    icon: Globe,
    title: "SEO под Израиль",
    description: "Структура, скорость и метаданные под Google Israel.",
  },
  {
    icon: Wand2,
    title: "Анимации мирового уровня",
    description: "Framer Motion, GSAP, micro-glow interactions.",
  },
  {
    icon: Shield,
    title: "Безопасность и стабильность",
    description: "Production-стек: Next.js, Vercel, Cloudflare.",
  },
];

export function BenefitsSection() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        background: "#10141C",
        paddingTop: "160px",
        paddingBottom: "160px",
      }}
    >
      {/* Soft right-side glow spot */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 90% 50%, rgba(58, 123, 255, 0.18), transparent 65%)",
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Section Title */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <h2
            style={{
              color: "#FFFFFF",
              opacity: 0.95,
              fontSize: "clamp(42px, 6vw, 64px)",
              letterSpacing: "-0.02em",
              marginBottom: "16px",
            }}
          >
            Почему SavonDev
          </h2>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Ambient subtle glow at bottom */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(58, 123, 255, 0.12), transparent 70%)",
          filter: "blur(60px)",
        }}
      />
    </section>
  );
}
