"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";


import { servicesNew, pricingTiers } from "../../src/data/newServices";
import { ArrowRight, Check } from "lucide-react";
import { ImageWithFallback } from "@/src/components/figma/ImageWithFallback";

export default function Services() {
  return (
    <div className="min-h-screen bg-[#F5EFE7]">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center px-6 md:px-12 lg:px-20 py-32 md:py-40">
        <div className="max-w-[1400px] mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="w-20 h-[3px] bg-[#050608] mb-10"
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />

            <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.9] mb-10 max-w-5xl">
              What We Build
            </h1>

            <p className="text-2xl md:text-3xl opacity-70 max-w-3xl leading-relaxed">
              От стратегии до запуска — создаём digital-продукты, которые
              работают и восхищают.
            </p>
          </motion.div>
        </div>

        {/* Decorative floating elements */}
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 border-2 border-[#050608] opacity-5"
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 30, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
        />
      </section>

      {/* Services Section */}
      <section className="px-6 md:px-12 lg:px-20 py-20 md:py-32">
        <div className="max-w-[1600px] mx-auto space-y-40 md:space-y-56">
          {servicesNew.map((service, index) => (
            <ServiceBlock key={service.id} service={service} index={index} />
          ))}
        </div>
      </section>

      {/* Pricing Overview */}
      <section className="px-6 md:px-12 lg:px-20 py-24 md:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="w-16 h-0.5 bg-[#050608] mb-8" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">
              Pricing Overview
            </h2>
            <p className="text-xl md:text-2xl opacity-70 max-w-3xl">
              Прозрачные цены без скрытых платежей. Выберите подходящий уровень
              или закажите индивидуальное решение.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`border-2 border-[#050608] p-8 md:p-10 relative ${
                  tier.highlighted
                    ? "bg-[#050608] text-[#F5EFE7]"
                    : "bg-[#F5EFE7]"
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-4 left-8 bg-[#F5EFE7] text-[#050608] px-4 py-1 text-sm uppercase tracking-wider border-2 border-[#050608]">
                    Popular
                  </div>
                )}

                <h3 className="text-3xl md:text-4xl mb-2">{tier.name}</h3>
                <p
                  className={`text-lg mb-6 ${
                    tier.highlighted ? "opacity-70" : "opacity-60"
                  }`}
                >
                  {tier.description}
                </p>

                <div className="mb-8">
                  <p className="text-3xl md:text-4xl">{tier.price}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 shrink-0 mt-1" />
                      <span
                        className={
                          tier.highlighted ? "opacity-90" : "opacity-70"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`w-full px-6 py-4 border-2 transition-all inline-flex items-center justify-center gap-2 group ${
                    tier.highlighted
                      ? "border-[#F5EFE7] hover:bg-[#F5EFE7] hover:text-[#050608]"
                      : "border-[#050608] hover:bg-[#050608] hover:text-[#F5EFE7]"
                  }`}
                >
                  Начать Проект
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-12 lg:px-20 py-32 md:py-40 bg-[#050608] text-[#F5EFE7] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-10 leading-tight">
              Let&apos;s Build Something Exceptional
            </h2>
            <p className="text-xl md:text-2xl opacity-70 mb-12 max-w-3xl mx-auto leading-relaxed">
              Готовы к проекту, который изменит ваш бизнес? Начнём с честного
              разговора о целях и возможностях.
            </p>
            <motion.a
              href="#contact"
              className="inline-block px-12 py-6 bg-[#F5EFE7] text-[#050608] text-xl transition-all relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-3">
                Начать Проект
                <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
              </span>
            </motion.a>
          </motion.div>
        </div>

        {/* Animated background elements */}
        <motion.div
          className="absolute top-10 left-10 w-40 h-40 border-2 border-[#F5EFE7] opacity-10"
          animate={{
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-60 h-60 border-2 border-[#F5EFE7] opacity-5"
          animate={{
            rotate: [360, 270, 180, 90, 0],
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </section>
    </div>
  );
}

// Service Block Component
function ServiceBlock({
  service,
  index,
}: {
  service: (typeof servicesNew)[0];
  index: number;
}) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <div
      ref={sectionRef}
      className="grid lg:grid-cols-[1fr,1.2fr] gap-12 lg:gap-20 items-start"
    >
      {/* Content Column */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="sticky top-24"
      >
        {/* Number */}
        <div className="text-8xl md:text-9xl opacity-5 mb-6 leading-none">
          0{index + 1}
        </div>

        {/* Title & Tagline */}
        <div className="mb-8">
          <h3 className="text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight">
            {service.title}
          </h3>
          <p className="text-2xl md:text-3xl opacity-60 italic">
            {service.tagline}
          </p>
        </div>

        {/* Description */}
        <p className="text-xl md:text-2xl opacity-70 leading-relaxed mb-10">
          {service.description}
        </p>

        {/* Features */}
        <div className="border-2 border-[#050608] bg-white p-8">
          <h4 className="text-xl mb-6 uppercase tracking-wider">
            Что Включено
          </h4>
          <ul className="space-y-3">
            {service.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#050608] shrink-0 mt-2.5" />
                <span className="text-lg opacity-70">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Price & CTA */}
        <div className="mt-8 bg-[#050608] text-[#F5EFE7] border-2 border-[#050608] p-8">
          <div className="flex items-end justify-between mb-6">
            <div>
              <p className="text-sm uppercase tracking-wider opacity-50 mb-2">
                От
              </p>
              <p className="text-3xl">{service.startingPrice}</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-wider opacity-50 mb-2">
                Срок
              </p>
              <p className="text-3xl">{service.timeline}</p>
            </div>
          </div>
          <a
            href="#contact"
            className="w-full px-6 py-4 bg-[#F5EFE7] text-[#050608] transition-all hover:scale-[1.02] inline-flex items-center justify-center gap-2 group"
          >
            Обсудить Проект
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </motion.div>

      {/* Examples Column */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="space-y-8"
      >
        <h4 className="text-2xl md:text-3xl mb-8">Примеры Работ</h4>

        {service.examples.map((example, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
            className="group relative overflow-hidden border-2 border-[#050608] bg-white hover:shadow-[8px_8px_0px_0px_rgba(5,6,8,1)] transition-all"
          >
            {/* Image */}
            <div className="aspect-16/10 overflow-hidden">
              <ImageWithFallback
                src={example.image}
                alt={example.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Info Overlay */}
            <div className="p-6 bg-white">
              <h5 className="text-xl md:text-2xl mb-2">{example.title}</h5>
              <p className="text-base opacity-60">{example.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
