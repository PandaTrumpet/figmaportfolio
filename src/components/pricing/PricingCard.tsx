

// "use client";

// import { useRef } from "react";
// import { motion, useInView, useReducedMotion } from "motion/react";
// import { ArrowRight, Check, Star } from "lucide-react";
// import { pricingData } from "@/src/data/pricingData";
// import { IconBadge } from "./IconBadge";

// const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

// export function PricingCard({
//   package: pkg,
//   index,
// }: {
//   package: (typeof pricingData.packages)[0];
//   index: number;
// }) {
//   const reduce = useReducedMotion();
//   const ref = useRef<HTMLDivElement | null>(null);
//   const isInView = useInView(ref, { once: true, margin: "-120px" });

//   const isPopular = Boolean(pkg.highlighted);

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 50 }}
//       animate={isInView ? { opacity: 1, y: 0 } : {}}
//       transition={{ duration: 0.75, delay: index * 0.12, ease: EASE }}
//       className={`relative ${isPopular ? "lg:-mt-6" : ""}`}
//     >
//       {/* Popular badge */}
//       {isPopular && (
//         <motion.div
//           initial={{ opacity: 0, y: -14, scale: 0.98 }}
//           animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
//           transition={{ duration: 0.55, delay: 0.55, ease: EASE }}
//           className="absolute -top-5 left-1/2 -translate-x-1/2 z-30"
//         >
//           <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.18em] text-[#E8F2FF] backdrop-blur-xl shadow-[0_0_28px_rgba(76,194,255,0.35)]">
//             <Star className="h-4 w-4 text-[#E8F2FF]" />
//             <span>{pkg.tagline}</span>
//           </div>
//         </motion.div>
//       )}

//       {/* outer glow */}
//       <motion.div
//         className="pointer-events-none absolute -inset-[14px] rounded-[34px] -z-20 blur-2xl"
//         style={{
//           background:
//             "radial-gradient(circle_at_top, rgba(58,123,255,0.55), transparent 70%)",
//         }}
//         animate={
//           reduce
//             ? undefined
//             : {
//                 opacity: isPopular ? 0.85 : 0.35,
//                 scale: isPopular ? 1.06 : 1,
//               }
//         }
//         transition={{ duration: 0.35, ease: "easeOut" }}
//       />

//       {/* card */}
//       <motion.div
//         className={[
//           "relative h-full rounded-3xl border border-white/10",
//           "bg-gradient-to-b from-[#060A13] via-[#050816] to-[#02030A]",
//           "p-7 md:p-8 lg:p-9",
//           "shadow-[0_26px_80px_rgba(0,0,0,0.85)] backdrop-blur-xl overflow-hidden",
//           isPopular ? "ring-1 ring-[#4CC2FF55]" : "",
//         ].join(" ")}
//         whileHover={
//           reduce
//             ? undefined
//             : {
//                 y: -14,
//                 boxShadow: "0 32px 120px rgba(0,0,0,1)",
//               }
//         }
//         transition={{ duration: 0.3, ease: "easeOut" }}
//       >
//         {/* gradient aura */}
//         <motion.div
//           className="pointer-events-none absolute inset-0 rounded-3xl -z-10 opacity-40"
//           style={{
//             background:
//               "linear-gradient(135deg, rgba(58,123,255,0.22), rgba(76,194,255,0.14), rgba(155,93,255,0.18))",
//           }}
//           animate={reduce ? undefined : { opacity: isPopular ? 0.75 : 0.4 }}
//           transition={{ duration: 0.3 }}
//         />

//         {/* shine */}
//         <motion.div
//           className="pointer-events-none absolute -inset-10 bg-[linear-gradient(115deg,_transparent_0%,_rgba(255,255,255,0.22)_30%,_transparent_60%)] mix-blend-screen -z-10"
//           initial={{ x: "-140%" }}
//           whileHover={reduce ? undefined : { x: "140%" }}
//           transition={{ duration: 0.9, ease: "easeInOut" }}
//         />

//         {/* gradient outline */}
//         <motion.div
//           className="pointer-events-none absolute inset-0 rounded-3xl z-10"
//           style={{
//             background: "linear-gradient(135deg, #3A7BFF, #4CC2FF, #9B5DFF)",
//             WebkitMask:
//               "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
//             WebkitMaskComposite: "xor",
//             maskComposite: "exclude",
//             padding: "1px",
//             opacity: isPopular ? 0.9 : 0.35,
//           }}
//         />

//         {/* Accent glow from pkg.color */}
//         <div
//           className="pointer-events-none absolute -top-28 -right-28 h-64 w-64 rounded-full blur-3xl opacity-25"
//           style={{ background: pkg.color }}
//         />

//         {/* Header */}
//         <div className="relative z-20">
//           {/* Icon */}
//           <motion.div
//             className="mb-6 inline-flex items-center justify-center"
//             animate={reduce ? undefined : { rotate: [0, 6, -6, 0] }}
//             transition={
//               reduce
//                 ? undefined
//                 : { duration: 3.2, repeat: Infinity, repeatDelay: 5 }
//             }
//           >
//             <IconBadge icon={pkg.icon} />
//           </motion.div>

//           <div className="mb-6">
//             <h3 className="text-2xl md:text-3xl font-semibold text-[#F2F4FA]">
//               {pkg.name}
//             </h3>

//             {!isPopular ? (
//               <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[#C7CEDF] opacity-80">
//                 {pkg.tagline}
//               </p>
//             ) : (
//               <p className="mt-2 text-sm text-[#CFE7FF] opacity-85">
//                 Best value for most businesses
//               </p>
//             )}
//           </div>

//           {/* Price */}
//           <div className="mb-5">
//             <div className="flex items-baseline justify-between gap-3">
//               <span className="text-4xl md:text-5xl font-semibold text-[#F5EFE7]">
//                 {pkg.price}
//               </span>

//               <span className="rounded-full border border-white/12 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.16em] text-[#DDE6F5] backdrop-blur">
//                 {pkg.period}
//               </span>
//             </div>
//           </div>

//           {/* Description */}
//           <p className="text-sm md:text-base leading-relaxed text-[#E8ECF4] opacity-85 mb-6">
//             {pkg.description}
//           </p>

//           {/* CTA */}
//           <motion.a
//             href="#contact"
//             className={[
//               "relative inline-flex w-full items-center justify-center gap-2 overflow-hidden",
//               "rounded-full px-7 py-3.5 md:px-8 md:py-4",
//               "text-sm md:text-base font-medium",
//               isPopular
//                 ? "text-[#050816] shadow-[0_0_45px_rgba(76,194,255,0.55)]"
//                 : "text-[#E8F2FF] border border-white/12 bg-white/5 hover:bg-white/8",
//             ].join(" ")}
//             whileHover={reduce ? undefined : { scale: 1.02 }}
//             whileTap={reduce ? undefined : { scale: 0.98 }}
//           >
//             {isPopular && (
//               <>
//                 <span className="absolute inset-0 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]" />
//                 <motion.span
//                   className="absolute inset-0 bg-[linear-gradient(120deg,_transparent_0%,_white_20%,_transparent_40%)] opacity-0"
//                   initial={{ x: "-120%" }}
//                   whileHover={reduce ? undefined : { x: "120%", opacity: 0.45 }}
//                   transition={{ duration: 0.75, ease: "easeInOut" }}
//                 />
//               </>
//             )}

//             <span className="relative z-10">{pkg.cta}</span>
//             <ArrowRight className="relative z-10 h-4 w-4 md:h-5 md:w-5 opacity-90" />
//           </motion.a>

//           {/* Features */}
//           <div className="mt-7 space-y-2.5">
//             {pkg.features.map((feature, i) => (
//               <motion.div
//                 key={`${pkg.name}-${i}`}
//                 initial={{ opacity: 0, x: -14 }}
//                 animate={isInView ? { opacity: 1, x: 0 } : {}}
//                 transition={{
//                   duration: 0.45,
//                   delay: 0.2 + index * 0.08 + i * 0.035,
//                   ease: EASE,
//                 }}
//                 className="flex items-start gap-3"
//               >
//                 <span className="mt-[6px] inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/10 bg-white/5">
//                   <Check className="h-3.5 w-3.5 text-[#CFE7FF]" />
//                 </span>
//                 <span className="text-sm text-[#D5DBE6] leading-relaxed">
//                   {feature}
//                 </span>
//               </motion.div>
//             ))}
//           </div>

//           {/* Ideal */}
//           <div className="mt-7 pt-6 border-t border-white/10">
//             <p className="text-xs uppercase tracking-[0.18em] text-[#C7CEDF] opacity-70 mb-2">
//               Идеально для
//             </p>
//             <p className="text-sm text-[#E8ECF4] opacity-85">{pkg.ideal}</p>
//           </div>
//         </div>

//         {/* bottom corner */}
//         <motion.div
//           className="pointer-events-none absolute bottom-4 right-4 h-8 w-8 opacity-40 z-20"
//           animate={
//             reduce
//               ? undefined
//               : { scale: isPopular ? 1.15 : 1, opacity: isPopular ? 0.75 : 0.4 }
//           }
//           transition={{ duration: 0.25 }}
//         >
//           <div className="h-full w-full rounded-br-3xl border-b border-r border-[#4CC2FF77]" />
//         </motion.div>
//       </motion.div>
//     </motion.div>
//   );
// }


"use client";

import { useMemo, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { ArrowRight, Check, Star, MessageCircle } from "lucide-react";
import { pricingData } from "@/src/data/pricingData";
import { IconBadge } from "./IconBadge";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function PricingCard({
  package: pkg,
  index,
}: {
  package: (typeof pricingData.packages)[0];
  index: number;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });
  const [hovered, setHovered] = useState(false);

  // Важно: icon у тебя string (emoji). Приводим к строке безопасно.
  const icon = useMemo(
    () => (typeof pkg.icon === "string" ? pkg.icon : "✨"),
    [pkg.icon]
  );

  return (
    <motion.div
      ref={ref}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      initial={{ opacity: 0, y: 46 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 46 }}
      transition={{ duration: 0.65, delay: index * 0.12, ease: EASE }}
      className={`relative ${pkg.highlighted ? "lg:-mt-6" : ""}`}
    >
      {/* Глубокий glow под карточкой */}
      <motion.div
        className="absolute -inset-[14px] rounded-[34px] bg-[radial-gradient(circle_at_top,_rgba(58,123,255,0.55),_transparent_70%)] blur-2xl -z-20"
        animate={{
          opacity: hovered ? 1 : 0.38,
          scale: hovered ? 1.08 : 1,
        }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      />

      {/* Дополнительная аура (фиолетовый слой) */}
      <motion.div
        className="absolute inset-0 rounded-[40px] bg-[radial-gradient(circle_at_center,_rgba(155,93,255,0.45),_transparent_65%)] blur-3xl -z-10 pointer-events-none"
        animate={{
          opacity: hovered ? 0.75 : 0,
          scale: hovered ? 1.05 : 0.96,
        }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      />

      {/* Popular badge */}
      {pkg.highlighted && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.35, ease: EASE }}
          className="absolute -top-5 left-1/2 -translate-x-1/2 z-30"
        >
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs uppercase tracking-[0.22em] text-[#EAF2FF] backdrop-blur-xl">
            <Star className="h-4 w-4 text-[#4CC2FF]" />
            <span>{pkg.tagline}</span>
          </div>
        </motion.div>
      )}

      {/* Card */}
      <motion.div
        className={`relative h-full rounded-3xl border border-white/10 bg-gradient-to-b from-[#060A13] via-[#050816] to-[#02030A] p-7 md:p-8 shadow-[0_26px_80px_rgba(0,0,0,0.85)] backdrop-blur-xl overflow-hidden`}
        whileHover={
          reduce
            ? undefined
            : {
                y: -16,
                boxShadow: "0 34px 120px rgba(0,0,0,1)",
              }
        }
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Inner glow (под контентом) */}
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-[#3A7BFF33] via-[#4CC2FF22] to-[#9B5DFF22] -z-10"
          animate={{ opacity: hovered ? 0.9 : 0.35 }}
          transition={{ duration: 0.28 }}
        />

        {/* Shine по стеклу */}
        <motion.div
          className="pointer-events-none absolute -inset-10 bg-[linear-gradient(115deg,_transparent_0%,_rgba(255,255,255,0.22)_30%,_transparent_60%)] mix-blend-screen -z-10"
          initial={{ x: "-140%" }}
          whileHover={reduce ? undefined : { x: "140%" }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
        />

        {/* Gradient outline (как у твоих карточек на HomePage) */}
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent z-10"
          animate={{
            boxShadow: hovered
              ? "0 0 0 1px rgba(76,194,255,0.7), 0 0 42px rgba(76,194,255,0.95)"
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

        {/* Header */}
        <div className="relative z-20 flex items-start justify-between gap-4 mb-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-[#F2F4FA]">
              {pkg.name}
            </h3>
            {!pkg.highlighted && (
              <p className="mt-1 text-xs uppercase tracking-[0.22em] text-[#C7CEDF] opacity-80">
                {pkg.tagline}
              </p>
            )}
          </div>

          {/* Icon badge */}
          <motion.div
            className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-[radial-gradient(circle_at_top,_#3A7BFF3b,_#050816)] overflow-hidden shadow-[0_0_40px_rgba(58,123,255,0.7)]"
            animate={
              hovered
                ? { scale: 1.06, boxShadow: "0 0 55px rgba(58,123,255,1)" }
                : { scale: 1, boxShadow: "0 0 40px rgba(58,123,255,0.7)" }
            }
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <IconBadge icon={icon} />
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-transparent via-[#3A7BFF66] to-[#4CC2FF66] -z-10"
              animate={{ opacity: hovered ? 0.85 : 0.45 }}
              transition={{ duration: 0.25 }}
            />
          </motion.div>
        </div>

        {/* Price */}
        <div className="relative z-20 mb-5">
          <div className="flex items-end gap-3">
            <div className="text-4xl md:text-5xl font-semibold text-[#EAF2FF] tracking-tight">
              {pkg.price}
            </div>
            <div className="pb-1 text-xs uppercase tracking-[0.22em] text-[#C7CEDF] opacity-80">
              {pkg.period}
            </div>
          </div>

          {/* micro-copy (UX) */}
          <p className="mt-2 text-sm text-[#D5DBE6] opacity-80">
            Без подписок. Прозрачная стоимость.
          </p>
        </div>

        {/* Description */}
        <p className="relative z-20 mb-6 text-sm md:text-base leading-relaxed text-[#E8ECF4]">
          {pkg.description}
        </p>

        {/* Features */}
        <div className="relative z-20 space-y-2.5 md:space-y-3 mb-6">
          {pkg.features.map((feature, i) => (
            <motion.div
              key={`${pkg.name}-${i}`}
              className="flex items-start gap-3 text-sm text-[#D5DBE6]"
              initial={{ opacity: 0, x: -18 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -18 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08 + i * 0.05 + 0.2,
                ease: EASE,
              }}
            >
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#4CC2FF] opacity-90" />
              <span className="opacity-90">{feature}</span>
            </motion.div>
          ))}
        </div>

        {/* Add-ons (в нашем стиле) */}
        <div className="relative z-20 mb-7 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(76,194,255,0.35),_transparent_70%)]">
              <MessageCircle className="h-5 w-5 text-[#EAF2FF]" />
            </div>

            <div className="min-w-0">
              <p className="text-sm font-semibold text-[#F2F4FA]">
                Опция: WhatsApp-бот / AI-ассистент
              </p>
              <p className="mt-1 text-xs md:text-sm text-[#C7CEDF] leading-relaxed">
                Первичные вопросы, квалификация лидов и передача в CRM без
                потери заявок.
              </p>
            </div>
          </div>

          {/* тонкая линия-градиент снизу */}
          <div className="mt-4 h-px w-full bg-gradient-to-r from-[#3A7BFF66] via-[#4CC2FF55] to-[#9B5DFF44]" />
        </div>

        {/* Ideal */}
        <div className="relative z-20 mt-auto pt-6 border-t border-white/10">
          <p className="text-xs uppercase tracking-[0.22em] text-[#C7CEDF] opacity-75">
            Идеально для
          </p>
          <p className="mt-2 text-sm text-[#EAF2FF] opacity-90">{pkg.ideal}</p>
        </div>

        {/* CTA */}
        <motion.a
          href="#contact"
          className="relative z-20 mt-7 inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full px-10 py-3.5 text-sm md:text-base font-medium text-[#050816] shadow-[0_0_40px_rgba(76,194,255,0.65)]"
          whileHover={reduce ? undefined : { scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          <span className="absolute inset-0 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]" />
          <motion.span
            className="absolute inset-0 bg-[linear-gradient(120deg,_transparent_0%,_white_20%,_transparent_40%)] opacity-0"
            initial={{ x: "-100%" }}
            whileHover={reduce ? undefined : { x: "100%", opacity: 0.5 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          />
          <span className="relative z-10">{pkg.cta}</span>
          <ArrowRight className="relative z-10 h-5 w-5" />
        </motion.a>

        {/* Decorative corner */}
        <motion.div
          className="pointer-events-none absolute bottom-4 right-4 h-8 w-8 opacity-40 z-20"
          animate={{
            scale: hovered ? 1.2 : 1,
            opacity: hovered ? 0.8 : 0.4,
          }}
          transition={{ duration: 0.25 }}
        >
          <div className="h-full w-full rounded-br-3xl border-b border-r border-[#4CC2FF77]" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
