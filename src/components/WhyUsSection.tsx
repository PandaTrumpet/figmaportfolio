

// "use client";

// import { useEffect, useRef } from "react";
// import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
// import { ImageWithFallback } from "./figma/ImageWithFallback";



// const reasons = [
//   {
//     subtitle: "Понимаем рынок Израиля и поведение клиентов",
//     description:
//       "Мы делаем сайты и автоматизацию под реальный израильский SMB: быстрые решения, ясный оффер, WhatsApp как главный канал и доверие с первого экрана.",
//     image:
//       "https://images.unsplash.com/photo-1753162658596-2ccba5e4246a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
//     imageAlt: "Команда обсуждает проект",
//     reverse: false,
//   },
//   {
//     subtitle: "Сначала результат, потом дизайн",
//     description:
//       "Каждый блок на сайте работает на заявки: структура, сообщения, формы и WhatsApp-бот. Дизайн — это упаковка, но цель всегда одна: больше клиентов и меньше рутины.",
//     image:
//       "https://images.unsplash.com/photo-1650978813673-df28319b04f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
//     imageAlt: "Работа за ноутбуком",
//     reverse: true,
//   },
//   {
//     subtitle: "Автоматизация и чат-боты, которые экономят время",
//     description:
//       "Подключаем WhatsApp-бота, CRM (Notion/Airtable/HubSpot) и автоматические сценарии: ответы на частые вопросы, сбор заявок, уведомления и фиксация клиента в системе.",
//     image:
//       "https://images.unsplash.com/photo-1623679072629-3aaa0192a391?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
//     imageAlt: "Современное рабочее пространство",
//     reverse: false,
//   },
//   {
//     subtitle: "Премиум без лишнего пафоса",
//     description:
//       "Делаем современный, дорогой визуальный уровень — но без сложностей для клиента. Всё должно быть понятно, быстро и удобно: вам и вашим пользователям.",
//     image:
//       "https://images.unsplash.com/photo-1633286382418-4181cb81a6d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
//     imageAlt: "Минималистичный офис",
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
//   const tiltX = useMotionValue(0);
//   const tiltY = useMotionValue(0);

//   const smoothTiltX = useSpring(tiltX, { stiffness: 120, damping: 18 });
//   const smoothTiltY = useSpring(tiltY, { stiffness: 120, damping: 18 });

//   const rotateX = useTransform(smoothTiltY, [-1, 1], [6, -6]);
//   const rotateY = useTransform(smoothTiltX, [-1, 1], [-6, 6]);

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     const x = (e.clientX - rect.left) / rect.width;
//     const y = (e.clientY - rect.top) / rect.height;

//     tiltX.set(x * 2 - 1);
//     tiltY.set(y * 2 - 1);
//   };

//   return (
//     <motion.div
//       style={{
//         rotateX,
//         rotateY,
//         transformStyle: "preserve-3d",
//       }}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={() => {
//         tiltX.set(0);
//         tiltY.set(0);
//       }}
//       className={`group relative rounded-3xl border border-white/5 bg-gradient-to-br from-white/5 via-white/0 to-white/5 backdrop-blur-xl shadow-[0_0_40px_rgba(15,23,42,0.9)]
//       grid md:grid-cols-2 gap-8 md:gap-16 items-center px-6 md:px-10 lg:px-12 py-10 md:py-12`}
//       initial={{ opacity: 0, y: 40, scale: 0.96 }}
//       whileInView={{ opacity: 1, y: 0, scale: 1 }}
//       viewport={{ once: true, amount: 0.3 }}
//       transition={{
//         duration: 0.8,
//         delay: index * 0.12,
//         ease: [0.22, 1, 0.36, 1],
//       }}
//     >
//       {/* Glow behind card */}
//       <div className="pointer-events-none absolute -inset-0.5 -z-10 rounded-[32px] bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.4),transparent_60%)] opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700" />

//       {/* Text */}
//       <div
//         className={`space-y-6 ${
//           reason.reverse ? "md:order-2 md:pl-4" : "md:pr-4"
//         }`}
//       >
//         <motion.div
//           className="flex items-center gap-3"
//           initial={{ opacity: 0, x: -20 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: index * 0.1 }}
//         >
//           <div className="w-12 h-px bg-gradient-to-r from-cyan-400 via-sky-500 to-fuchsia-500" />
//           <span className="text-xs uppercase tracking-[0.2em] text-cyan-200/70">
//             Фокус на рынке Израиля
//           </span>
//         </motion.div>

//         <motion.h3
//           className="text-2xl md:text-3xl lg:text-4xl leading-tight bg-gradient-to-r from-[#F5F7FF] via-[#C7D2FE] to-[#A5B4FC] bg-clip-text text-transparent"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{
//             duration: 0.7,
//             delay: 0.15 + index * 0.1,
//           }}
//         >
//           {reason.subtitle}
//         </motion.h3>

//         <motion.p
//           className="text-sm md:text-base lg:text-lg text-slate-200/80 leading-relaxed"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{
//             duration: 0.7,
//             delay: 0.25 + index * 0.1,
//           }}
//         >
//           {reason.description}
//         </motion.p>
//       </div>

//       {/* Image block */}
//       <div className={`${reason.reverse ? "md:order-1" : ""} relative`}>
//         <div className="pointer-events-none absolute -inset-10 bg-[radial-gradient(circle_at_bottom,_rgba(244,114,182,0.4),transparent_65%)] opacity-60 blur-3xl" />

//         <motion.div
//           className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-cyan-300/25 bg-gradient-to-tr from-sky-500/15 via-slate-900 to-fuchsia-500/15"
//           whileHover={{ y: -4, scale: 1.03 }}
//           transition={{ duration: 0.6 }}
//         >
//           <ImageWithFallback
//             src={reason.image}
//             alt={reason.imageAlt}
//             className="w-full h-full object-cover scale-[1.03] group-hover:scale-[1.07] transition-all duration-700"
//           />
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// }

// export function WhyUsSection() {
//   const sectionRef = useRef<HTMLDivElement | null>(null);

//   // параллакс значений
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);

//   const smoothX = useSpring(mouseX, { stiffness: 60, damping: 15 });
//   const smoothY = useSpring(mouseY, { stiffness: 60, damping: 15 });

//   const bgTopX = useTransform(smoothX, [-1, 1], [-25, 25]);
//   const bgTopY = useTransform(smoothY, [-1, 1], [-15, 15]);

//   const bgBottomX = useTransform(smoothX, [-1, 1], [30, -30]);
//   const bgBottomY = useTransform(smoothY, [-1, 1], [18, -18]);

//   const ghostX = useTransform(smoothX, [-1, 1], [12, -12]);
//   const ghostY = useTransform(smoothY, [-1, 1], [8, -8]);

//   // mouse tracking
//   useEffect(() => {
//     const handleMove = (e: MouseEvent) => {
//       if (!sectionRef.current) return;
//       const rect = sectionRef.current.getBoundingClientRect();
//       const x = (e.clientX - rect.left) / rect.width;
//       const y = (e.clientY - rect.top) / rect.height;

//       mouseX.set(x * 2 - 1);
//       mouseY.set(y * 2 - 1);
//     };

//     const area = sectionRef.current;
//     area?.addEventListener("mousemove", handleMove);
//     return () => area?.removeEventListener("mousemove", handleMove);
//   }, []);

//   return (
//     <section
//       id="why-us"
//       ref={sectionRef}
//       className="
//         relative min-h-screen flex items-center 
//         px-6 md:px-12 lg:px-20 py-32 overflow-visible
        
//         text-slate-100
//       "
//     >
//       {/* Background gradients */}
//       <div className="pointer-events-none absolute inset-0 -z-20">
//         <motion.div
//           style={{ x: bgTopX, y: bgTopY }}
//           className="absolute -top-40 -right-32 w-[420px] h-[420px] bg-[radial-gradient(circle,_rgba(56,189,248,0.38),transparent_60%)] blur-3xl"
//         />
//         <motion.div
//           style={{ x: bgBottomX, y: bgBottomY }}
//           className="absolute -bottom-52 -left-40 w-[520px] h-[520px] bg-[radial-gradient(circle,_rgba(244,114,182,0.35),transparent_65%)] blur-3xl"
//         />
//       </div>

//       {/* Ghost headline */}
//       <motion.div
//         style={{ x: ghostX, y: ghostY }}
//         className="pointer-events-none absolute -top-8 right-[-4rem] hidden xl:block -z-0"
//       >
//         <span className="text-[140px] leading-none font-semibold tracking-[0.12em] text-white/3">
//           WHY&nbsp;US
//         </span>
//       </motion.div>

//       <div className="relative max-w-[1240px] mx-auto">
//         {/* Header */}
//         <motion.div
//           className="mb-20 max-w-3xl"
//           initial={{ opacity: 0, y: 32 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           <motion.div
//             className="flex items-center gap-4 mb-4"
//             initial={{ opacity: 0, x: -24 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//           >
//             <div className="w-16 h-px bg-gradient-to-r from-cyan-400 via-sky-500 to-fuchsia-500" />
//             <span className="text-xs md:text-sm uppercase tracking-[0.28em] text-cyan-100/70">
//               Почему израильский бизнес выбирает нас
//             </span>
//           </motion.div>

//           <motion.h2
//             className="text-3xl md:text-4xl lg:text-5xl text-slate-50"
//             initial={{ opacity: 0, y: 24 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.75 }}
//           >
//             Почему израильский бизнес выбирает нас
//           </motion.h2>
//         </motion.div>

//         {/* Blocks */}
//         <div className="space-y-16">
//           {reasons.map((reason, index) => (
//             <Block key={index} reason={reason} index={index} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { PageContainer } from "./Layout/PageContainer";

const reasons = [
  {
    subtitle: "Понимаем рынок Израиля и поведение клиентов",
    description:
      "Мы делаем сайты и автоматизацию под реальный израильский SMB: быстрые решения, ясный оффер, WhatsApp как главный канал и доверие с первого экрана.",
    image:
      "https://images.unsplash.com/photo-1753162658596-2ccba5e4246a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    imageAlt: "Команда обсуждает проект",
    reverse: false,
  },
  {
    subtitle: "Сначала результат, потом дизайн",
    description:
      "Каждый блок на сайте работает на заявки: структура, сообщения, формы и WhatsApp-бот. Дизайн — это упаковка, но цель всегда одна: больше клиентов и меньше рутины.",
    image:
      "https://images.unsplash.com/photo-1650978813673-df28319b04f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    imageAlt: "Работа за ноутбуком",
    reverse: true,
  },
  {
    subtitle: "Автоматизация и чат-боты, которые экономят время",
    description:
      "Подключаем WhatsApp-бота, CRM (Notion/Airtable/HubSpot) и автоматические сценарии: ответы на частые вопросы, сбор заявок, уведомления и фиксация клиента в системе.",
    image:
      "https://images.unsplash.com/photo-1623679072629-3aaa0192a391?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    imageAlt: "Современное рабочее пространство",
    reverse: false,
  },
  {
    subtitle: "Премиум без лишнего пафоса",
    description:
      "Делаем современный, дорогой визуальный уровень — но без сложностей для клиента. Всё должно быть понятно, быстро и удобно: вам и вашим пользователям.",
    image:
      "https://images.unsplash.com/photo-1633286382418-4181cb81a6d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    imageAlt: "Минималистичный офис",
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
            Фокус на рынке Израиля
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
  const sectionRef = useRef<HTMLElement | null>(null);

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
  }, [mouseX, mouseY]);

  return (
    <section
      id="why-us"
      ref={sectionRef}
      className="relative min-h-screen flex items-center 
         pt-10 pb-10
        md:pt-14 md:pb-14
        lg:pt-16 lg:pb-16
      overflow-visible text-slate-100"
    >
      {/* Background gradients — full-bleed */}
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

      {/* Ghost headline — full-bleed */}
      <motion.div
        style={{ x: ghostX, y: ghostY }}
        className="pointer-events-none absolute -top-8 right-[-4rem] hidden xl:block -z-0"
      >
        <span className="text-[140px] leading-none font-semibold tracking-[0.12em] text-white/3">
          WHY&nbsp;US
        </span>
      </motion.div>

      {/* Контент — через единый контейнер (и сохраняем твою узкую ширину) */}
      <PageContainer className="max-w-[1240px]">
        <div className="relative">
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
                Почему израильский бизнес выбирает нас
              </span>
            </motion.div>

            <motion.h2
              className="  text-3xl 
  md:text-4xl 
  lg:text-5xl 
  xl:text-6xl 
  font-semibold 
  leading-tight 
  md:leading-[1.15] text-slate-50 mb-3"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75 }}
            >
              Почему израильский бизнес выбирает нас
            </motion.h2>
          </motion.div>

          {/* Blocks */}
          <div className="space-y-16">
            {reasons.map((reason, index) => (
              <Block key={index} reason={reason} index={index} />
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
