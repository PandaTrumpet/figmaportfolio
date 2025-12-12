// Рабочая версия с светлым фоном

// "use client";

// import { useEffect, useRef, useState } from "react";
// import { ImageWithFallback } from "./figma/ImageWithFallback";

// const reasons = [
//   {
//     subtitle: "We Understand Local Context",
//     description:
//       "Built for the Israeli market, we know what resonates with your audience and how to communicate authentically.",
//     image:
//       "https://images.unsplash.com/photo-1753162658596-2ccba5e4246a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHRlYW0lMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc2NTI2OTMwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
//     imageAlt: "Creative team collaboration",
//     reverse: false,
//   },
//   {
//     subtitle: "Strategy Before Design",
//     description:
//       "Every pixel serves a purpose. We start with your business goals and build experiences that deliver results.",
//     image:
//       "https://images.unsplash.com/photo-1650978813673-df28319b04f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kcyUyMHdvcmtpbmclMjBsYXB0b3B8ZW58MXx8fHwxNzY1MjkzNTgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
//     imageAlt: "Hands working on laptop",
//     reverse: true,
//   },
//   {
//     subtitle: "Built to Scale",
//     description:
//       "Our systems grow with you. Clean code, thoughtful architecture, and sustainable design practices.",
//     image:
//       "https://images.unsplash.com/photo-1623679072629-3aaa0192a391?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc2NTI0MjA1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
//     imageAlt: "Modern workspace",
//     reverse: false,
//   },
//   {
//     subtitle: "Premium Without Pretense",
//     description:
//       "Elegant solutions that feel accessible. We create premium experiences that welcome everyone.",
//     image:
//       "https://images.unsplash.com/photo-1633286382418-4181cb81a6d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwb2ZmaWNlJTIwc3BhY2V8ZW58MXx8fHwxNzY1MjkzNTgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
//     imageAlt: "Minimalist office space",
//     reverse: true,
//   },
// ];

// function Block({
//   reason,
//   index,
// }: {
//   reason: (typeof reasons)[0];
//   index: number;
// }) {
//   const [isVisible, setIsVisible] = useState(false);
//   const blockRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.2 }
//     );

//     if (blockRef.current) {
//       observer.observe(blockRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div
//       ref={blockRef}
//       className={`grid md:grid-cols-2 gap-8 md:gap-16 items-center transition-all duration-1000 ${
//         isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
//       }`}
//       style={{ transitionDelay: `${index * 100}ms` }}
//     >
//       {/* Text Block */}
//       <div className={`space-y-6 ${reason.reverse ? "md:order-2" : ""}`}>
//         <div className="w-12 h-[2px] bg-[#050608]" />
//         <h3 className="text-3xl md:text-4xl lg:text-5xl leading-tight">
//           {reason.subtitle}
//         </h3>
//         <p className="text-lg md:text-xl opacity-70 leading-relaxed max-w-md">
//           {reason.description}
//         </p>
//       </div>

//       {/* Image Block */}
//       <div className={`relative ${reason.reverse ? "md:order-1" : ""}`}>
//         <div className="aspect-[4/3] overflow-hidden">
//           <ImageWithFallback
//             src={reason.image}
//             alt={reason.imageAlt}
//             className="w-full h-full object-cover"
//           />
//         </div>
//         {/* Brutalist accent */}
//         <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-[#050608] opacity-20 pointer-events-none" />
//       </div>
//     </div>
//   );
// }

// export function WhyUsSection() {
//   return (
//     <section
//       id="why-us"
//       className="px-6 md:px-12 lg:px-20 py-24 md:py-32 bg-white"
//     >
//       <div className="max-w-[1400px] mx-auto">
//         {/* Section Header */}
//         <div className="mb-20 md:mb-28">
//           <div className="w-16 h-[2px] bg-[#050608] mb-8" />
//           <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight max-w-3xl">
//             Why Israeli Companies Choose Us
//           </h2>
//         </div>

//         {/* Alternating Blocks */}
//         <div className="space-y-24 md:space-y-32">
//           {reasons.map((reason, index) => (
//             <Block key={index} reason={reason} index={index} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



// Рабочий вариант с синим background


"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const reasons = [
  {
    subtitle: "We Understand Local Context",
    description:
      "Built for the Israeli market, we know what resonates with your audience and how to communicate authentically.",
    image:
      "https://images.unsplash.com/photo-1753162658596-2ccba5e4246a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    imageAlt: "Creative team collaboration",
    reverse: false,
  },
  {
    subtitle: "Strategy Before Design",
    description:
      "Every pixel serves a purpose. We start with your business goals and build experiences that deliver results.",
    image:
      "https://images.unsplash.com/photo-1650978813673-df28319b04f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    imageAlt: "Hands working on laptop",
    reverse: true,
  },
  {
    subtitle: "Built to Scale",
    description:
      "Our systems grow with you. Clean code, thoughtful architecture, and sustainable design practices.",
    image:
      "https://images.unsplash.com/photo-1623679072629-3aaa0192a391?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    imageAlt: "Modern workspace",
    reverse: false,
  },
  {
    subtitle: "Premium Without Pretense",
    description:
      "Elegant solutions that feel accessible. We create premium experiences that welcome everyone.",
    image:
      "https://images.unsplash.com/photo-1633286382418-4181cb81a6d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    imageAlt: "Minimalist office space",
    reverse: true,
  },
];

function Block({
  reason,
  index,
}: {
  reason: (typeof reasons)[0];
  index: number;
}) {
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);

  const smoothTiltX = useSpring(tiltX, { stiffness: 120, damping: 18 });
  const smoothTiltY = useSpring(tiltY, { stiffness: 120, damping: 18 });

  const rotateX = useTransform(smoothTiltY, [-1, 1], [6, -6]);
  const rotateY = useTransform(smoothTiltX, [-1, 1], [-6, 6]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    tiltX.set(x * 2 - 1);
    tiltY.set(y * 2 - 1);
  };

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        tiltX.set(0);
        tiltY.set(0);
      }}
      className={`group relative rounded-3xl border border-white/5 bg-gradient-to-br from-white/5 via-white/0 to-white/5 backdrop-blur-xl shadow-[0_0_40px_rgba(15,23,42,0.9)]
      grid md:grid-cols-2 gap-8 md:gap-16 items-center px-6 md:px-10 lg:px-12 py-10 md:py-12`}
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.8,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* Glow behind card */}
      <div className="pointer-events-none absolute -inset-0.5 -z-10 rounded-[32px] bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.4),transparent_60%)] opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700" />

      {/* Text */}
      <div
        className={`space-y-6 ${
          reason.reverse ? "md:order-2 md:pl-4" : "md:pr-4"
        }`}
      >
        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <div className="w-12 h-px bg-gradient-to-r from-cyan-400 via-sky-500 to-fuchsia-500" />
          <span className="text-xs uppercase tracking-[0.2em] text-cyan-200/70">
            Tel-Aviv focused
          </span>
        </motion.div>

        <motion.h3
          className="text-2xl md:text-3xl lg:text-4xl leading-tight bg-gradient-to-r from-[#F5F7FF] via-[#C7D2FE] to-[#A5B4FC] bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.15 + index * 0.1,
          }}
        >
          {reason.subtitle}
        </motion.h3>

        <motion.p
          className="text-sm md:text-base lg:text-lg text-slate-200/80 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.25 + index * 0.1,
          }}
        >
          {reason.description}
        </motion.p>
      </div>

      {/* Image block */}
      <div className={`${reason.reverse ? "md:order-1" : ""} relative`}>
        <div className="pointer-events-none absolute -inset-10 bg-[radial-gradient(circle_at_bottom,_rgba(244,114,182,0.4),transparent_65%)] opacity-60 blur-3xl" />

        <motion.div
          className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-cyan-300/25 bg-gradient-to-tr from-sky-500/15 via-slate-900 to-fuchsia-500/15"
          whileHover={{ y: -4, scale: 1.03 }}
          transition={{ duration: 0.6 }}
        >
          <ImageWithFallback
            src={reason.image}
            alt={reason.imageAlt}
            className="w-full h-full object-cover scale-[1.03] group-hover:scale-[1.07] transition-all duration-700"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export function WhyUsSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // параллакс значений
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 60, damping: 15 });
  const smoothY = useSpring(mouseY, { stiffness: 60, damping: 15 });

  const bgTopX = useTransform(smoothX, [-1, 1], [-25, 25]);
  const bgTopY = useTransform(smoothY, [-1, 1], [-15, 15]);

  const bgBottomX = useTransform(smoothX, [-1, 1], [30, -30]);
  const bgBottomY = useTransform(smoothY, [-1, 1], [18, -18]);

  const ghostX = useTransform(smoothX, [-1, 1], [12, -12]);
  const ghostY = useTransform(smoothY, [-1, 1], [8, -8]);

  // mouse tracking
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      mouseX.set(x * 2 - 1);
      mouseY.set(y * 2 - 1);
    };

    const area = sectionRef.current;
    area?.addEventListener("mousemove", handleMove);
    return () => area?.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section
      id="why-us"
      ref={sectionRef}
      className="relative overflow-hidden px-6 md:px-10 lg:px-20 py-24 md:py-32 bg-[#050814]"
    >
      {/* Background gradients */}
      <div className="pointer-events-none absolute inset-0 -z-20">
        <motion.div
          style={{ x: bgTopX, y: bgTopY }}
          className="absolute -top-40 -right-32 w-[420px] h-[420px] bg-[radial-gradient(circle,_rgba(56,189,248,0.38),transparent_60%)] blur-3xl"
        />
        <motion.div
          style={{ x: bgBottomX, y: bgBottomY }}
          className="absolute -bottom-52 -left-40 w-[520px] h-[520px] bg-[radial-gradient(circle,_rgba(244,114,182,0.35),transparent_65%)] blur-3xl"
        />
      </div>

      {/* Ghost headline */}
      <motion.div
        style={{ x: ghostX, y: ghostY }}
        className="pointer-events-none absolute -top-8 right-[-4rem] hidden xl:block -z-0"
      >
        <span className="text-[140px] leading-none font-semibold tracking-[0.12em] text-white/3">
          WHY&nbsp;US
        </span>
      </motion.div>

      <div className="relative max-w-[1240px] mx-auto">
        {/* Header */}
        <motion.div
          className="mb-20 max-w-3xl"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="flex items-center gap-4 mb-4"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="w-16 h-px bg-gradient-to-r from-cyan-400 via-sky-500 to-fuchsia-500" />
            <span className="text-xs md:text-sm uppercase tracking-[0.28em] text-cyan-100/70">
              Why Israeli companies choose us
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl text-slate-50"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
          >
            Why Israeli Companies Choose Us
          </motion.h2>
        </motion.div>

        {/* Blocks */}
        <div className="space-y-16">
          {reasons.map((reason, index) => (
            <Block key={index} reason={reason} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
