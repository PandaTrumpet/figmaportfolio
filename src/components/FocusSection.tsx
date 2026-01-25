// // Вариант с светлым фоном и тёмными акцентами



// "use client";

// import { useEffect, useRef, useState } from "react";
// import { motion, useInView } from "motion/react";
// import { Zap, Smartphone, ShoppingCart } from "lucide-react";

// export function FocusSection() {
//   const sectionRef = useRef(null);
//   const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
//   const [hoveredCard, setHoveredCard] = useState<number | null>(null);

//   const services = [
//     {
//       icon: Zap,
//       title: "Лендинги",
//       description:
//         "Продающие одностраничники, которые превращают посетителей в клиентов. Быстрая загрузка, яркий дизайн, чёткие призывы к действию.",
//       features: [
//         "Готово за 2-3 недели",
//         "Адаптивный дизайн",
//         "Высокая конверсия",
//       ],
//       gradient: "from-[#050608] to-[#1a1a1a]",
//     },
//     {
//       icon: Smartphone,
//       title: "Сайты для Бизнеса",
//       description:
//         "Корпоративные сайты, которые представляют ваш бизнес в лучшем свете и генерируют заявки круглосуточно.",
//       features: ["Удобная CMS", "SEO-оптимизация", "Интеграции"],
//       gradient: "from-[#2a2a2a] to-[#050608]",
//     },
//     {
//       icon: ShoppingCart,
//       title: "Интернет-Магазины",
//       description:
//         "Полнофункциональные магазины для онлайн-торговли. Каталог, корзина, оплата — всё что нужно для продаж.",
//       features: ["Каталог товаров", "Онлайн-оплата", "Управление заказами"],
//       gradient: "from-[#1a1a1a] to-[#2a2a2a]",
//     },
//   ];

//   return (
//     <section
//       ref={sectionRef}
//       className="relative px-6 md:px-12 lg:px-20 py-24 md:py-32 bg-white overflow-hidden"
//     >
//       <div className="max-w-[1400px] mx-auto">
//         {/* Section Header */}
//         <motion.div
//           className="mb-20"
//           initial={{ opacity: 0, y: 40 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//         >
//           <motion.div
//             className="w-16 h-[2px] bg-[#050608] mb-8"
//             initial={{ width: 0 }}
//             animate={isInView ? { width: 64 } : {}}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           />
//           <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">Наши Услуги</h2>
//           <p className="text-xl md:text-2xl opacity-70 max-w-3xl">
//             От простых лендингов до комплексных интернет-магазинов — создаём
//             сайты, которые приносят реальные результаты вашему бизнесу.
//           </p>
//         </motion.div>

//         {/* Cards Grid */}
//         <div className="grid md:grid-cols-3 gap-8 md:gap-12">
//           {services.map((service, index) => {
//             const Icon = service.icon;
//             return (
//               <motion.div
//                 key={index}
//                 className="group relative"
//                 initial={{ opacity: 0, y: 60 }}
//                 animate={isInView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ duration: 0.6, delay: index * 0.15 }}
//                 onMouseEnter={() => setHoveredCard(index)}
//                 onMouseLeave={() => setHoveredCard(null)}
//               >
//                 {/* Card Container */}
//                 <motion.div
//                   className="relative h-full bg-[#F5EFE7] border-2 border-[#050608] p-8 md:p-10"
//                   whileHover={{ y: -8 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   {/* Animated shadow */}
//                   <motion.div
//                     className="absolute inset-0 bg-[#050608] -z-10"
//                     initial={{ x: 4, y: 4 }}
//                     animate={{
//                       x: hoveredCard === index ? 12 : 4,
//                       y: hoveredCard === index ? 12 : 4,
//                     }}
//                     transition={{ duration: 0.3 }}
//                   />

//                   {/* Icon with background */}
//                   <motion.div
//                     className="w-16 h-16 mb-6 flex items-center justify-center border-2 border-[#050608] bg-white relative overflow-hidden"
//                     animate={{
//                       rotate: hoveredCard === index ? [0, 5, -5, 0] : 0,
//                     }}
//                     transition={{ duration: 0.5 }}
//                   >
//                     <Icon className="w-8 h-8 relative z-10" />
//                     <motion.div
//                       className={`absolute inset-0 bg-gradient-to-br ${service.gradient}`}
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: hoveredCard === index ? 0.1 : 0 }}
//                       transition={{ duration: 0.3 }}
//                     />
//                   </motion.div>

//                   {/* Title */}
//                   <h3 className="text-2xl md:text-3xl mb-4">{service.title}</h3>

//                   {/* Description */}
//                   <p className="opacity-70 leading-relaxed mb-6 text-lg">
//                     {service.description}
//                   </p>

//                   {/* Features List */}
//                   <ul className="space-y-2">
//                     {service.features.map((feature, i) => (
//                       <motion.li
//                         key={i}
//                         className="flex items-center gap-3"
//                         initial={{ opacity: 0, x: -20 }}
//                         animate={
//                           isInView
//                             ? { opacity: 1, x: 0 }
//                             : { opacity: 0, x: -20 }
//                         }
//                         transition={{ delay: index * 0.15 + i * 0.1 + 0.3 }}
//                       >
//                         <motion.div
//                           className="w-1.5 h-1.5 bg-[#050608]"
//                           animate={{
//                             scale: hoveredCard === index ? [1, 1.5, 1] : 1,
//                           }}
//                           transition={{
//                             duration: 0.5,
//                             delay: i * 0.05,
//                           }}
//                         />
//                         <span className="text-sm opacity-70">{feature}</span>
//                       </motion.li>
//                     ))}
//                   </ul>

//                   {/* Decorative corner */}
//                   <motion.div
//                     className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#050608] opacity-20"
//                     animate={{
//                       scale: hoveredCard === index ? 1.2 : 1,
//                       opacity: hoveredCard === index ? 0.4 : 0.2,
//                     }}
//                     transition={{ duration: 0.3 }}
//                   />
//                 </motion.div>
//               </motion.div>
//             );
//           })}
//         </div>

//         {/* Bottom CTA */}
//         <motion.div
//           className="mt-16 text-center"
//           initial={{ opacity: 0, y: 40 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6, delay: 0.6 }}
//         >
//           <p className="text-lg opacity-70 mb-6">Готовы создать свой сайт?</p>
//           <motion.a
//             href="#contact"
//             className="inline-block px-10 py-4 bg-[#050608] text-[#F5EFE7] transition-all relative overflow-hidden group"
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.98 }}
//           >
//             <span className="relative z-10">Получить Консультацию</span>
//             <motion.div
//               className="absolute inset-0 bg-[#1a1a1a]"
//               initial={{ x: "-100%" }}
//               whileHover={{ x: 0 }}
//               transition={{ duration: 0.3 }}
//             />
//           </motion.a>
//         </motion.div>
//       </div>

//       {/* Floating decorative elements */}
//       <motion.div
//         className="absolute top-20 right-10 w-20 h-20 border-2 border-[#050608] opacity-10"
//         animate={{
//           rotate: 360,
//           scale: [1, 1.1, 1],
//         }}
//         transition={{
//           rotate: { duration: 20, repeat: Infinity, ease: "linear" },
//           scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
//         }}
//       />
//     </section>
//   );
// }


"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Zap, Smartphone, ShoppingCart } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Лендинги",
    description:
      "Лендинг, который приводит заявки в WhatsApp и не теряет клиентов. Быстрый запуск, чёткий оффер, аналитика и конверсионная структура.",
    features: [
      "Готово за 10–14 дней",
      "WhatsApp lead capture + tracking",
      "А/В-готовность и аналитика",
    ],
    gradient: "from-[#3A7BFF33] via-[#4CC2FF22] to-transparent",
  },
  {
    icon: Smartphone,
    title: "Сайт + автоматизация",
    description:
      "Сайт, который работает как “менеджер 24/7”: объясняет ценность, принимает заявки через WhatsApp-бота и направляет их в CRM, чтобы вы не теряли клиентов.",
    features: [
      "WhatsApp-бот для заявок и первичных вопросов",
      "CRM (Notion / Airtable / HubSpot) по необходимости",
      "Формы, бот и заявки → в одну систему",
    ],
    gradient: "from-[#4CC2FF33] via-[#9B5DFF22] to-transparent",
  },
  {
    icon: ShoppingCart,
    title: "Интернет-магазины",
    description:
      "Магазин, который продаёт: удобный каталог, оплата, автоматические статусы заказов и сообщения клиенту в WhatsApp.",
    features: [
      "Оплата и доставка (по вашему стеку)",
      "Авто-уведомления в WhatsApp/SMS",
      "Панель управления заказами",
    ],
    gradient: "from-[#9B5DFF33] via-[#3A7BFF22] to-transparent",
  },
];

// лёгкий glitch для заголовка
const glitchPrimary = {
  initial: { x: 0, y: 0, opacity: 0 },
  hover: {
    x: [0, -1.5, 1, -0.5, 0],
    y: [0, 1, -1, 0.5, 0],
    opacity: [0, 0.9, 0.9, 0.6, 0],
    transition: { duration: 0.35, times: [0, 0.25, 0.5, 0.75, 1] },
  },
};

const glitchSecondary = {
  initial: { x: 0, y: 0, opacity: 0 },
  hover: {
    x: [0, 1.5, -1, 0.5, 0],
    y: [0, -1, 1, -0.5, 0],
    opacity: [0, 0.7, 0.8, 0.5, 0],
    transition: { duration: 0.35, times: [0, 0.25, 0.5, 0.75, 1] },
  },
};

// function ServiceCard({
//   service,
//   index,
//   isInView,
// }: {
//   service: (typeof services)[number];
//   index: number;
//   isInView: boolean;
// }) {
//   const [isHovered, setIsHovered] = useState(false);
//   const Icon = service.icon;

//   return (
//     <motion.div
//       className="relative group"
//       onHoverStart={() => setIsHovered(true)}
//       onHoverEnd={() => setIsHovered(false)}
//       initial={{ opacity: 0, y: 40 }}
//       animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
//       transition={{
//         duration: 0.6,
//         delay: index * 0.14,
//         ease: [0.16, 1, 0.3, 1],
//       }}
//     >
//       {/* глубокий glow под карточкой */}
//       <motion.div
//         className="absolute -inset-[10px] rounded-[32px] bg-[radial-gradient(circle_at_top,_rgba(58,123,255,0.7),_transparent_65%)] blur-2xl -z-20"
//         animate={{ opacity: isHovered ? 0.9 : 0.5 }}
//         transition={{ duration: 0.3 }}
//       />

//       {/* сама карточка (без 3D-трансформаций) */}
//       <motion.div
//         className="relative h-full rounded-3xl border border-white/10 bg-gradient-to-b from-[#060A13] via-[#050816] to-[#02030A] p-7 md:p-8 shadow-[0_26px_80px_rgba(0,0,0,0.85)] backdrop-blur-xl overflow-hidden"
//         whileHover={{
//           y: -10,
//           boxShadow: "0 26px 90px rgba(0,0,0,0.95)",
//         }}
//         transition={{ duration: 0.35, ease: "easeOut" }}
//       >
//         {/* inner glow (под контентом) */}
//         <motion.div
//           className={`pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br ${service.gradient} -z-10`}
//           animate={{ opacity: isHovered ? 0.75 : 0.4 }}
//           transition={{ duration: 0.3 }}
//         />

//         {/* мягкий shine по стеклу */}
//         <motion.div
//           className="pointer-events-none absolute -inset-10 bg-[linear-gradient(115deg,_transparent_0%,_rgba(255,255,255,0.22)_30%,_transparent_60%)] mix-blend-screen -z-10"
//           initial={{ x: "-130%" }}
//           whileHover={{ x: "130%" }}
//           transition={{
//             duration: 0.9,
//             ease: "easeInOut",
//           }}
//         />

//         {/* рамка-контур */}
//         <motion.div
//           className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent z-10"
//           animate={{
//             boxShadow: isHovered
//               ? "0 0 0 1px rgba(76,194,255,0.5), 0 0 32px rgba(76,194,255,0.9)"
//               : "0 0 0 1px rgba(255,255,255,0.06)",
//           }}
//           transition={{ duration: 0.3 }}
//           style={{
//             background: "linear-gradient(135deg, #3A7BFF, #4CC2FF, #9B5DFF)",
//             WebkitMask:
//               "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
//             WebkitMaskComposite: "xor",
//             maskComposite: "exclude",
//             padding: "1px",
//           }}
//         />

//         {/* Icon */}
//         <motion.div
//           className="relative z-20 mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-[radial-gradient(circle_at_top,_#3A7BFF3b,_#050816)] overflow-hidden shadow-[0_0_40px_rgba(58,123,255,0.7)]"
//           animate={isHovered ? { rotate: [0, 3, -3, 0] } : { rotate: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <Icon className="relative z-20 h-8 w-8 text-[#E8F2FF]" />
//           <motion.div
//             className="absolute inset-0 bg-gradient-to-br from-transparent via-[#3A7BFF55] to-[#4CC2FF55] -z-10"
//             animate={{ opacity: isHovered ? 0.6 : 0.3 }}
//             transition={{ duration: 0.3 }}
//           />
//         </motion.div>

//         {/* Текстовый блок — без transform, максимально чёткий */}
//         <div className="relative z-30 transform-none will-change-auto">
//           <h3 className="text-2xl md:text-3xl font-semibold mb-3 md:mb-4 text-[#F2F4FA]">
//             {service.title}
//           </h3>

//           <p className="mb-6 text-sm md:text-base leading-relaxed text-[#E8ECF4]">
//             {service.description}
//           </p>

//           <ul className="space-y-2.5 md:space-y-3">
//             {service.features.map((feature, i) => (
//               <motion.li
//                 key={feature}
//                 className="flex items-center gap-3 text-sm text-[#D5DBE6]"
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={
//                   isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
//                 }
//                 transition={{
//                   delay: index * 0.12 + i * 0.08 + 0.35,
//                 }}
//               >
//                 <motion.span
//                   className="inline-block h-1.5 w-3 rounded-full bg-gradient-to-r from-[#3A7BFF] to-[#4CC2FF]"
//                   animate={isHovered ? { scale: [1, 1.4, 1] } : { scale: 1 }}
//                   transition={{ duration: 0.4, ease: "easeInOut" }}
//                 />
//                 <span>{feature}</span>
//               </motion.li>
//             ))}
//           </ul>
//         </div>

//         {/* Decorative corner */}
//         <motion.div
//           className="pointer-events-none absolute bottom-4 right-4 h-8 w-8 opacity-40 z-20"
//           animate={{
//             scale: isHovered ? 1.15 : 1,
//           }}
//           transition={{ duration: 0.3 }}
//         >
//           <div className="h-full w-full rounded-br-3xl border-b border-r border-[#4CC2FF77]" />
//         </motion.div>
//       </motion.div>
//     </motion.div>
//   );
// }



function ServiceCard({
  service,
  index,
  isInView,
}: {
  service: (typeof services)[number];
  index: number;
  isInView: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = service.icon;

  return (
    <motion.div
      className="relative"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration: 0.6,
        delay: index * 0.14,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {/* базовый глубокий glow под карточкой */}
      <motion.div
        className="absolute -inset-[12px] rounded-[34px] bg-[radial-gradient(circle_at_top,_rgba(58,123,255,0.55),_transparent_70%)] blur-2xl -z-20"
        animate={{
          opacity: isHovered ? 1 : 0.35,
          scale: isHovered ? 1.08 : 1,
        }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      />

      {/* дополнительная аура при hover */}
      <motion.div
        className="absolute inset-0 rounded-[40px] bg-[radial-gradient(circle_at_center,_rgba(76,194,255,0.5),_transparent_65%)] blur-3xl -z-10 pointer-events-none"
        animate={{
          opacity: isHovered ? 0.85 : 0,
          scale: isHovered ? 1.05 : 0.95,
        }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      />

      {/* сама карточка */}
      <motion.div
        className="relative h-full rounded-3xl border border-white/10 bg-gradient-to-b from-[#060A13] via-[#050816] to-[#02030A] p-7 md:p-8 shadow-[0_26px_80px_rgba(0,0,0,0.85)] backdrop-blur-xl overflow-hidden"
        whileHover={{
          y: -16,
          boxShadow: "0 32px 120px rgba(0,0,0,1)",
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* inner glow (под контентом) */}
        <motion.div
          className={`pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br ${service.gradient} -z-10`}
          animate={{ opacity: isHovered ? 0.9 : 0.35 }}
          transition={{ duration: 0.3 }}
        />

        {/* shine по стеклу */}
        <motion.div
          className="pointer-events-none absolute -inset-10 bg-[linear-gradient(115deg,_transparent_0%,_rgba(255,255,255,0.22)_30%,_transparent_60%)] mix-blend-screen -z-10"
          initial={{ x: "-140%" }}
          whileHover={{ x: "140%" }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
        />

        {/* рамка-контур */}
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent z-10"
          animate={{
            boxShadow: isHovered
              ? "0 0 0 1px rgba(76,194,255,0.7), 0 0 42px rgba(76,194,255,1)"
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

        {/* Icon */}
        <motion.div
          className="relative z-20 mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-[radial-gradient(circle_at_top,_#3A7BFF3b,_#050816)] overflow-hidden shadow-[0_0_40px_rgba(58,123,255,0.7)]"
          animate={
            isHovered
              ? { scale: 1.06, boxShadow: "0 0 55px rgba(58,123,255,1)" }
              : { scale: 1, boxShadow: "0 0 40px rgba(58,123,255,0.7)" }
          }
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          <Icon className="relative z-20 h-8 w-8 text-[#E8F2FF]" />
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-transparent via-[#3A7BFF66] to-[#4CC2FF66] -z-10"
            animate={{ opacity: isHovered ? 0.8 : 0.4 }}
            transition={{ duration: 0.25 }}
          />
        </motion.div>

        {/* Текст — отдельный "плоский" слой без transform */}
        <div className="relative z-30 transform-none will-change-auto">
          <h3 className="text-2xl md:text-3xl font-semibold mb-3 md:mb-4 text-[#F2F4FA]">
            {service.title}
          </h3>

          <p className="mb-6 text-sm md:text-base leading-relaxed text-[#E8ECF4]">
            {service.description}
          </p>

          <ul className="space-y-2.5 md:space-y-3">
            {service.features.map((feature, i) => (
              <motion.li
                key={feature}
                className="flex items-center gap-3 text-sm text-[#D5DBE6]"
                initial={{ opacity: 0, x: -20 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                }
                transition={{
                  delay: index * 0.12 + i * 0.08 + 0.35,
                }}
              >
                <motion.span
                  className="inline-block h-1.5 w-3 rounded-full bg-gradient-to-r from-[#3A7BFF] to-[#4CC2FF]"
                  animate={
                    isHovered
                      ? { scale: [1, 1.5, 1], x: [0, 2, 0] }
                      : { scale: 1, x: 0 }
                  }
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                />
                <span>{feature}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Decorative corner */}
        <motion.div
          className="pointer-events-none absolute bottom-4 right-4 h-8 w-8 opacity-40 z-20"
          animate={{
            scale: isHovered ? 1.2 : 1,
            opacity: isHovered ? 0.8 : 0.4,
          }}
          transition={{ duration: 0.25 }}
        >
          <div className="h-full w-full rounded-br-3xl border-b border-r border-[#4CC2FF77]" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
export function FocusSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative px-6 md:px-12 lg:px-20 py-24 md:py-32 overflow-hidden bg-[#050816]"
    >
      {/* фоновые споты */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -top-40 -left-32 h-80 w-80 bg-[radial-gradient(circle_at_center,_#3A7BFF55,_transparent_70%)] blur-3xl" />
        <div className="absolute -bottom-40 -right-10 h-96 w-96 bg-[radial-gradient(circle_at_center,_#4CC2FF55,_transparent_70%)] blur-3xl" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto text-[#F5EFE7]">
        {/* Section Header */}
        <motion.div
          className="mb-16 md:mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="mb-6 h-[2px] w-20 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          />

          <motion.h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-4 md:mb-6">
            <motion.span
              className="relative inline-block"
              initial="initial"
              whileHover="hover"
            >
              <span className="relative z-10">Решения для роста бизнеса</span>

              <motion.span
                className="pointer-events-none absolute left-0 top-0 z-0 text-[#4CC2FF] mix-blend-screen"
                variants={glitchPrimary}
                aria-hidden="true"
              >
                Решения для роста бизнеса
              </motion.span>

              <motion.span
                className="pointer-events-none absolute left-0 top-0 z-0 text-[#9B5DFF] mix-blend-screen"
                variants={glitchSecondary}
                aria-hidden="true"
              >
                Решения для роста бизнеса
              </motion.span>
            </motion.span>
          </motion.h2>

          <p className="text-base md:text-xl opacity-80 max-w-3xl leading-relaxed">
            От быстрого лендинга до полноценного e-commerce — строим систему,
            которая приводит заявки, подключает WhatsApp, автоматизирует ответы
            и фиксирует клиентов в CRM.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 md:mt-20 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="mb-5 text-sm md:text-lg text-[#C7CEDF]">
            Покажем примеры сайтов с WhatsApp и автоматизацией — без сложных
            обсуждений.
          </p>
          <motion.a
            href="#contact"
            className="relative inline-flex items-center justify-center overflow-hidden rounded-full px-10 py-3.5 md:px-12 md:py-4 text-sm md:text-base font-medium text-[#050816] shadow-[0_0_40px_rgba(76,194,255,0.65)]"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]" />
            <motion.span
              className="absolute inset-0 bg-[linear-gradient(120deg,_transparent_0%,_white_20%,_transparent_40%)] opacity-0"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%", opacity: 0.5 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            />
            <span className="relative z-10">Запросить демо</span>
          </motion.a>
        </motion.div>
      </div>

      {/* Floating decorative element */}
      <motion.div
        className="pointer-events-none absolute top-16 right-4 md:right-10 h-20 w-20 rounded-3xl border border-[#3A7BFF33] bg-[radial-gradient(circle_at_top,_#3A7BFF33,_transparent_70%)] opacity-50"
        animate={{
          rotate: 360,
          scale: [1, 1.08, 1],
        }}
        transition={{
          rotate: { duration: 26, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
      />
    </section>
  );
}
