// "use client";

// import { useEffect, useState } from "react";
// import { motion, useReducedMotion } from "motion/react";
// import { Check, Plus } from "lucide-react";
// import { pricingData } from "@/src/data/pricingData";
// import { IconBadge } from "./IconBadge";
// import { safeReadAddons, toggleAddon } from "@/src/utils/addonsStorage";

// const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

// export function AddOnCard({
//   addon,
//   index,
// }: {
//   addon: (typeof pricingData.addons.items)[0];
//   index: number;
// }) {
//   const reduce = useReducedMotion();
//   const [isHovered, setIsHovered] = useState(false);

//   // ✅ selected state from localStorage
// const [isAdded, setIsAdded] = useState(() => {
//   const current = safeReadAddons();
//   return current.includes(addon.name);
// });
// const handleToggle = () => {
//   const next = toggleAddon(addon.name);
//   setIsAdded(next.includes(addon.name));
// };

//   return (
//     <motion.div
//       className="relative"
//       onHoverStart={() => setIsHovered(true)}
//       onHoverEnd={() => setIsHovered(false)}
//       initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, delay: index * 0.14, ease: EASE }}
//       viewport={{ once: true, margin: "-80px" }}
//     >
//       {/* базовый глубокий glow под карточкой */}
//       <motion.div
//         className="absolute -inset-[12px] rounded-[34px] bg-[radial-gradient(circle_at_top,_rgba(58,123,255,0.55),_transparent_70%)] blur-2xl -z-20"
//         animate={{
//           opacity: isHovered ? 1 : 0.35,
//           scale: isHovered ? 1.08 : 1,
//         }}
//         transition={{ duration: 0.35, ease: "easeOut" }}
//       />

//       {/* дополнительная аура при hover */}
//       <motion.div
//         className="absolute inset-0 rounded-[40px] bg-[radial-gradient(circle_at_center,_rgba(76,194,255,0.5),_transparent_65%)] blur-3xl -z-10 pointer-events-none"
//         animate={{
//           opacity: isHovered ? 0.85 : 0,
//           scale: isHovered ? 1.05 : 0.95,
//         }}
//         transition={{ duration: 0.35, ease: "easeOut" }}
//       />

//       {/* сама карточка */}
//       <motion.div
//         className="
//           relative h-full rounded-3xl border border-white/10
//           bg-gradient-to-b from-[#060A13] via-[#050816] to-[#02030A]
//           p-7 md:p-8
//           shadow-[0_26px_80px_rgba(0,0,0,0.85)]
//           backdrop-blur-xl overflow-hidden
//           flex flex-col
//         "
//         whileHover={
//           reduce
//             ? undefined
//             : { y: -16, boxShadow: "0 32px 120px rgba(0,0,0,1)" }
//         }
//         transition={{ duration: 0.3, ease: "easeOut" }}
//       >
//         {/* inner glow (под контентом) */}
//         <motion.div
//           className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-[#3A7BFF33] via-[#4CC2FF22] to-transparent -z-10"
//           animate={{ opacity: isHovered ? 0.9 : 0.35 }}
//           transition={{ duration: 0.3 }}
//         />

//         {/* shine по стеклу */}
//         <motion.div
//           className="pointer-events-none absolute -inset-10 bg-[linear-gradient(115deg,_transparent_0%,_rgba(255,255,255,0.22)_30%,_transparent_60%)] mix-blend-screen -z-10"
//           initial={{ x: "-140%" }}
//           whileHover={reduce ? undefined : { x: "140%" }}
//           transition={{ duration: 0.9, ease: "easeInOut" }}
//         />

//         {/* рамка-контур */}
//         <motion.div
//           className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent z-10"
//           animate={{
//             boxShadow: isHovered
//               ? "0 0 0 1px rgba(76,194,255,0.7), 0 0 42px rgba(76,194,255,1)"
//               : "0 0 0 1px rgba(255,255,255,0.06)",
//           }}
//           transition={{ duration: 0.25 }}
//           style={{
//             background: "linear-gradient(135deg, #3A7BFF, #4CC2FF, #9B5DFF)",
//             WebkitMask:
//               "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
//             WebkitMaskComposite: "xor",
//             maskComposite: "exclude",
//             padding: "1px",
//           }}
//         />

//         {/* top row */}
//         <div className="relative z-20 mb-6 flex items-start justify-between gap-4">
//           <motion.div
//             className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-[radial-gradient(circle_at_top,_#3A7BFF3b,_#050816)] overflow-hidden shadow-[0_0_40px_rgba(58,123,255,0.7)]"
//             animate={
//               isHovered
//                 ? { scale: 1.06, boxShadow: "0 0 55px rgba(58,123,255,1)" }
//                 : { scale: 1, boxShadow: "0 0 40px rgba(58,123,255,0.7)" }
//             }
//             transition={{ duration: 0.25, ease: "easeOut" }}
//             aria-hidden="true"
//           >
//             <span className="relative z-20 text-3xl leading-none">
//               <IconBadge icon={addon.icon} />
//             </span>
//             <motion.div
//               className="absolute inset-0 bg-gradient-to-br from-transparent via-[#3A7BFF66] to-[#4CC2FF66] -z-10"
//               animate={{ opacity: isHovered ? 0.8 : 0.4 }}
//               transition={{ duration: 0.25 }}
//             />
//           </motion.div>

//           <div className="text-right">
//             <p className="text-2xl md:text-3xl font-semibold text-[#F2F4FA] leading-none">
//               {addon.price}
//             </p>
//             <p className="text-[10px] md:text-xs uppercase tracking-[0.24em] text-[#C7CEDF]/70 mt-1">
//               дополнительно
//             </p>
//           </div>
//         </div>

//         {/* content */}
//         <div className="relative z-30 transform-none will-change-auto flex-1">
//           <h3 className="text-[20px] md:text-[22px] lg:text-[24px] leading-[1.15] md:leading-[1.12] font-semibold tracking-[-0.01em] text-[#F2F4FA] mb-2.5 md:mb-3">
//             {addon.name}
//           </h3>

//           <p className="text-[15px] md:text-[16px] lg:text-[17px] leading-[1.55] md:leading-[1.6] text-[#E8ECF4] mb-5 md:mb-6 max-w-[56ch]">
//             {addon.description}
//           </p>

//           <ul className="space-y-2.5 md:space-y-3">
//             {addon.features.map((feature) => (
//               <li
//                 key={feature}
//                 className="flex items-start gap-3 text-[14px] md:text-[15px] leading-[1.45] text-[#D5DBE6]"
//               >
//                 <motion.span
//                   className="mt-[0.55em] inline-block h-1.5 w-3 rounded-full bg-gradient-to-r from-[#3A7BFF] to-[#4CC2FF]"
//                   animate={
//                     isHovered
//                       ? { scale: [1, 1.5, 1], x: [0, 2, 0] }
//                       : { scale: 1, x: 0 }
//                   }
//                   transition={{ duration: 0.4, ease: "easeInOut" }}
//                   aria-hidden="true"
//                 />
//                 <span>{feature}</span>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* ✅ CTA — now toggles add-on and changes label */}
//         <motion.button
//           type="button"
//           onClick={handleToggle}
//           className="
//             group mt-6 relative z-20 inline-flex w-full items-center justify-center
//             overflow-hidden rounded-full
//             px-7 py-3
//             text-sm md:text-base font-medium
//             text-[#050816]
//             shadow-[0_0_40px_rgba(76,194,255,0.55)]
//             hover:shadow-[0_0_65px_rgba(76,194,255,0.85)]
//             transition-shadow
//           "
//           whileHover={reduce ? undefined : { scale: 1.03 }}
//           whileTap={reduce ? undefined : { scale: 0.97 }}
//           transition={{ duration: 0.22, ease: "easeOut" }}
//           aria-pressed={isAdded}
//         >
//           <span className="absolute inset-0 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]" />
//           <span
//             className="
//               pointer-events-none absolute inset-0
//               [background:linear-gradient(to_bottom,rgba(255,255,255,0.28),rgba(255,255,255,0.06)_45%,rgba(0,0,0,0.12))]
//               mix-blend-overlay
//             "
//             aria-hidden="true"
//           />
//           <span
//             className="
//               pointer-events-none absolute inset-0 rounded-full
//               bg-white/10 opacity-0
//               group-hover:opacity-100 transition-opacity
//             "
//             aria-hidden="true"
//           />

//           <span className="relative z-10 flex items-center gap-2">
//             {isAdded ? (
//               <Check className="h-4 w-4" />
//             ) : (
//               <Plus className="h-4 w-4" />
//             )}
//             {isAdded ? "Добавлено к пакету" : "Добавить к пакету"}
//           </span>
//         </motion.button>

//         {/* Decorative corner */}
//         <motion.div
//           className="pointer-events-none absolute bottom-4 right-4 h-8 w-8 opacity-40 z-20"
//           animate={{
//             scale: isHovered ? 1.2 : 1,
//             opacity: isHovered ? 0.8 : 0.4,
//           }}
//           transition={{ duration: 0.25 }}
//           aria-hidden="true"
//         >
//           <div className="h-full w-full rounded-br-3xl border-b border-r border-[#4CC2FF77]" />
//         </motion.div>
//       </motion.div>
//     </motion.div>
//   );
// }

// "use client";

// import { useMemo, useState } from "react";
// import { motion, useReducedMotion } from "motion/react";
// import { Check, Plus } from "lucide-react";
// import { IconBadge } from "./IconBadge";
// import { safeReadAddons, toggleAddon } from "@/src/utils/addonsStorage";
// import type { AddOn } from "@/src/data/pricingData";
// import { useTranslations } from "next-intl";

// const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

// export function AddOnCard({ addon, index }: { addon: AddOn; index: number }) {
//   const t = useTranslations("pricingData");
//   const reduce = useReducedMotion();
//   const [active, setActive] = useState(false);

//   const [isAdded, setIsAdded] = useState(() => {
//     const current = safeReadAddons();
//     return current.includes(addon.name);
//   });

//   const handleToggle = () => {
//     const next = toggleAddon(addon.name);
//     setIsAdded(next.includes(addon.name));
//   };

//   const titleId = useMemo(() => `addon-title-${index}`, [index]);
//   const descId = useMemo(() => `addon-desc-${index}`, [index]);

//   return (
//     <motion.article
//       className="relative"
//       onHoverStart={() => setActive(true)}
//       onHoverEnd={() => setActive(false)}
//       onFocusCapture={() => setActive(true)}
//       onBlurCapture={() => setActive(false)}
//       aria-labelledby={titleId}
//       aria-describedby={descId}
//       initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, delay: index * 0.14, ease: EASE }}
//       viewport={{ once: true, margin: "-80px" }}
//     >
//       {/* glows (decorative) */}
//       <motion.div
//         className="absolute -inset-[12px] rounded-[34px] bg-[radial-gradient(circle_at_top,_rgba(58,123,255,0.55),_transparent_70%)] blur-2xl -z-20"
//         animate={{ opacity: active ? 1 : 0.35, scale: active ? 1.08 : 1 }}
//         transition={{ duration: 0.35, ease: "easeOut" }}
//         aria-hidden="true"
//       />
//       <motion.div
//         className="absolute inset-0 rounded-[40px] bg-[radial-gradient(circle_at_center,_rgba(76,194,255,0.5),_transparent_65%)] blur-3xl -z-10 pointer-events-none"
//         animate={{ opacity: active ? 0.85 : 0, scale: active ? 1.05 : 0.95 }}
//         transition={{ duration: 0.35, ease: "easeOut" }}
//         aria-hidden="true"
//       />

//       {/* card */}
//       <motion.div
//         className="
//           relative h-full rounded-3xl border border-white/10
//           bg-gradient-to-b from-[#060A13] via-[#050816] to-[#02030A]
//           p-7 md:p-8
//           shadow-[0_26px_80px_rgba(0,0,0,0.85)]
//           backdrop-blur-xl overflow-hidden
//           flex flex-col
//           focus-within:outline-none
//           focus-within:ring-2 focus-within:ring-[#4CC2FF]/70
//         "
//         whileHover={
//           reduce
//             ? undefined
//             : { y: -16, boxShadow: "0 32px 120px rgba(0,0,0,1)" }
//         }
//         transition={{ duration: 0.3, ease: "easeOut" }}
//       >
//         <motion.div
//           className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-[#3A7BFF33] via-[#4CC2FF22] to-transparent -z-10"
//           animate={{ opacity: active ? 0.9 : 0.35 }}
//           transition={{ duration: 0.3 }}
//           aria-hidden="true"
//         />

//         <motion.div
//           className="pointer-events-none absolute -inset-10 bg-[linear-gradient(115deg,_transparent_0%,_rgba(255,255,255,0.22)_30%,_transparent_60%)] mix-blend-screen -z-10"
//           initial={{ x: "-140%" }}
//           whileHover={reduce ? undefined : { x: "140%" }}
//           transition={{ duration: 0.9, ease: "easeInOut" }}
//           aria-hidden="true"
//         />

//         <motion.div
//           className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent z-10"
//           animate={{
//             boxShadow: active
//               ? "0 0 0 1px rgba(76,194,255,0.7), 0 0 42px rgba(76,194,255,1)"
//               : "0 0 0 1px rgba(255,255,255,0.06)",
//           }}
//           transition={{ duration: 0.25 }}
//           style={{
//             background: "linear-gradient(135deg, #3A7BFF, #4CC2FF, #9B5DFF)",
//             WebkitMask:
//               "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
//             WebkitMaskComposite: "xor",
//             maskComposite: "exclude",
//             padding: "1px",
//           }}
//           aria-hidden="true"
//         />

//         {/* top row */}
//         <div className="relative z-20 mb-6 flex items-start justify-between gap-4">
//           <motion.div
//             className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-[radial-gradient(circle_at_top,_#3A7BFF3b,_#050816)] overflow-hidden shadow-[0_0_40px_rgba(58,123,255,0.7)]"
//             animate={
//               active
//                 ? { scale: 1.06, boxShadow: "0 0 55px rgba(58,123,255,1)" }
//                 : { scale: 1, boxShadow: "0 0 40px rgba(58,123,255,0.7)" }
//             }
//             transition={{ duration: 0.25, ease: "easeOut" }}
//             aria-hidden="true"
//           >
//             <span className="relative z-20 text-3xl leading-none">
//               <IconBadge icon={addon.icon} />
//             </span>
//             <motion.div
//               className="absolute inset-0 bg-gradient-to-br from-transparent via-[#3A7BFF66] to-[#4CC2FF66] -z-10"
//               animate={{ opacity: active ? 0.8 : 0.4 }}
//               transition={{ duration: 0.25 }}
//               aria-hidden="true"
//             />
//           </motion.div>

//           <div className="text-right">
//             <p className="text-2xl md:text-3xl font-semibold text-[#F2F4FA] leading-none">
//               {addon.price}
//             </p>
//             <p className="text-[10px] md:text-xs uppercase tracking-[0.24em] text-[#C7CEDF]/70 mt-1">
//               {t("addonCard.priceNote")}
//             </p>
//           </div>
//         </div>

//         {/* content */}
//         <div className="relative z-30 flex-1">
//           <h3
//             id={titleId}
//             className="text-[20px] md:text-[22px] lg:text-[24px] leading-[1.15] md:leading-[1.12] font-semibold tracking-[-0.01em] text-[#F2F4FA] mb-2.5 md:mb-3"
//           >
//             {addon.name}
//           </h3>

//           <p
//             id={descId}
//             className="text-[15px] md:text-[16px] lg:text-[17px] leading-[1.55] md:leading-[1.6] text-[#E8ECF4] mb-5 md:mb-6 max-w-[56ch]"
//           >
//             {addon.description}
//           </p>

//           <ul
//             role="list"
//             className="space-y-2.5 md:space-y-3"
//             aria-label={t("addonCard.featuresAria", { name: addon.name })}
//           >
//             {addon.features.map((feature) => (
//               <li
//                 key={feature}
//                 role="listitem"
//                 className="flex items-start gap-3 text-[14px] md:text-[15px] leading-[1.45] text-[#D5DBE6]"
//               >
//                 <motion.span
//                   className="mt-[0.55em] inline-block h-1.5 w-3 rounded-full bg-gradient-to-r from-[#3A7BFF] to-[#4CC2FF]"
//                   animate={
//                     active
//                       ? { scale: [1, 1.5, 1], x: [0, 2, 0] }
//                       : { scale: 1, x: 0 }
//                   }
//                   transition={{ duration: 0.4, ease: "easeInOut" }}
//                   aria-hidden="true"
//                 />
//                 <span>{feature}</span>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* CTA toggle button */}
//         <motion.button
//           type="button"
//           onClick={handleToggle}
//           className="
//             group mt-6 relative z-20 inline-flex w-full items-center justify-center
//             overflow-hidden rounded-full
//             px-7 py-3
//             text-sm md:text-base font-medium
//             text-[#050816]
//             shadow-[0_0_40px_rgba(76,194,255,0.55)]
//             hover:shadow-[0_0_65px_rgba(76,194,255,0.85)]
//             transition-shadow
//             focus:outline-none
//             focus-visible:ring-2 focus-visible:ring-[#4CC2FF]/80
//           "
//           whileHover={reduce ? undefined : { scale: 1.03 }}
//           whileTap={reduce ? undefined : { scale: 0.97 }}
//           transition={{ duration: 0.22, ease: "easeOut" }}
//           aria-pressed={isAdded}
//           aria-label={
//             isAdded
//               ? t("addonCard.removeAria", { name: addon.name })
//               : t("addonCard.addAria", { name: addon.name })
//           }
//         >
//           <span className="absolute inset-0 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]" />
//           <span
//             className="
//               pointer-events-none absolute inset-0
//               [background:linear-gradient(to_bottom,rgba(255,255,255,0.28),rgba(255,255,255,0.06)_45%,rgba(0,0,0,0.12))]
//               mix-blend-overlay
//             "
//             aria-hidden="true"
//           />
//           <span
//             className="pointer-events-none absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"
//             aria-hidden="true"
//           />

//           <span className="relative z-10 flex items-center gap-2">
//             {isAdded ? (
//               <Check className="h-4 w-4" aria-hidden="true" />
//             ) : (
//               <Plus className="h-4 w-4" aria-hidden="true" />
//             )}
//             {isAdded ? t("addonCard.added") : t("addonCard.add")}
//           </span>
//         </motion.button>

//         {/* decorative corner */}
//         <motion.div
//           className="pointer-events-none absolute bottom-4 right-4 h-8 w-8 opacity-40 z-20"
//           animate={{ scale: active ? 1.2 : 1, opacity: active ? 0.8 : 0.4 }}
//           transition={{ duration: 0.25 }}
//           aria-hidden="true"
//         >
//           <div className="h-full w-full rounded-br-3xl border-b border-r border-[#4CC2FF77]" />
//         </motion.div>
//       </motion.div>
//     </motion.article>
//   );
// }

"use client";

import { useMemo, useState, useSyncExternalStore } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Check, Plus } from "lucide-react";
import { IconBadge } from "./IconBadge";
import {
  toggleAddon,
  subscribeAddons,
  getAddonsSnapshot,
  getAddonsServerSnapshot,
} from "@/src/utils/addonsStorage";
import type { AddOn } from "@/src/data/pricingData";
import { useTranslations } from "next-intl";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function AddOnCard({ addon, index }: { addon: AddOn; index: number }) {
  const t = useTranslations("pricingData");
  const reduce = useReducedMotion();
  const [active, setActive] = useState(false);

  const selectedAddons = useSyncExternalStore(
    subscribeAddons,
    getAddonsSnapshot,
    getAddonsServerSnapshot,
  );

  const isAdded = selectedAddons.includes(addon.name);

  const handleToggle = () => {
    toggleAddon(addon.name);
  };

  const titleId = useMemo(() => `addon-title-${index}`, [index]);
  const descId = useMemo(() => `addon-desc-${index}`, [index]);

  return (
    <motion.article
      className="relative"
      onHoverStart={() => setActive(true)}
      onHoverEnd={() => setActive(false)}
      onFocusCapture={() => setActive(true)}
      onBlurCapture={() => setActive(false)}
      aria-labelledby={titleId}
      aria-describedby={descId}
      initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.14, ease: EASE }}
      viewport={{ once: true, margin: "-80px" }}
    >
      <motion.div
        className="absolute -inset-[12px] rounded-[34px] bg-[radial-gradient(circle_at_top,_rgba(58,123,255,0.55),_transparent_70%)] blur-2xl -z-20"
        animate={{ opacity: active ? 1 : 0.35, scale: active ? 1.08 : 1 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute inset-0 rounded-[40px] bg-[radial-gradient(circle_at_center,_rgba(76,194,255,0.5),_transparent_65%)] blur-3xl -z-10 pointer-events-none"
        animate={{ opacity: active ? 0.85 : 0, scale: active ? 1.05 : 0.95 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        aria-hidden="true"
      />

      <motion.div
        className="
          relative h-full rounded-3xl border border-white/10
          bg-gradient-to-b from-[#060A13] via-[#050816] to-[#02030A]
          p-7 md:p-8
          shadow-[0_26px_80px_rgba(0,0,0,0.85)]
          backdrop-blur-xl overflow-hidden
          flex flex-col
          focus-within:outline-none
          focus-within:ring-2 focus-within:ring-[#4CC2FF]/70
        "
        whileHover={
          reduce
            ? undefined
            : { y: -16, boxShadow: "0 32px 120px rgba(0,0,0,1)" }
        }
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-[#3A7BFF33] via-[#4CC2FF22] to-transparent -z-10"
          animate={{ opacity: active ? 0.9 : 0.35 }}
          transition={{ duration: 0.3 }}
          aria-hidden="true"
        />

        <motion.div
          className="pointer-events-none absolute -inset-10 bg-[linear-gradient(115deg,_transparent_0%,_rgba(255,255,255,0.22)_30%,_transparent_60%)] mix-blend-screen -z-10"
          initial={{ x: "-140%" }}
          whileHover={reduce ? undefined : { x: "140%" }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          aria-hidden="true"
        />

        <motion.div
          className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent z-10"
          animate={{
            boxShadow: active
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
          aria-hidden="true"
        />

        <div className="relative z-20 mb-6 flex items-start justify-between gap-4">
          <motion.div
            className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-[radial-gradient(circle_at_top,_#3A7BFF3b,_#050816)] overflow-hidden shadow-[0_0_40px_rgba(58,123,255,0.7)]"
            animate={
              active
                ? { scale: 1.06, boxShadow: "0 0 55px rgba(58,123,255,1)" }
                : { scale: 1, boxShadow: "0 0 40px rgba(58,123,255,0.7)" }
            }
            transition={{ duration: 0.25, ease: "easeOut" }}
            aria-hidden="true"
          >
            <span className="relative z-20 text-3xl leading-none">
              <IconBadge icon={addon.icon} />
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-transparent via-[#3A7BFF66] to-[#4CC2FF66] -z-10"
              animate={{ opacity: active ? 0.8 : 0.4 }}
              transition={{ duration: 0.25 }}
              aria-hidden="true"
            />
          </motion.div>

          <div className="text-right">
            <p className="text-2xl md:text-3xl font-semibold text-[#F2F4FA] leading-none">
              {addon.price}
            </p>
            <p className="text-[10px] md:text-xs uppercase tracking-[0.24em] text-[#C7CEDF]/70 mt-1">
              {t("addonCard.priceNote")}
            </p>
          </div>
        </div>

        <div className="relative z-30 flex-1">
          <h3
            id={titleId}
            className="text-[20px] md:text-[22px] lg:text-[24px] leading-[1.15] md:leading-[1.12] font-semibold tracking-[-0.01em] text-[#F2F4FA] mb-2.5 md:mb-3"
          >
            {addon.name}
          </h3>

          <p
            id={descId}
            className="text-[15px] md:text-[16px] lg:text-[17px] leading-[1.55] md:leading-[1.6] text-[#E8ECF4] mb-5 md:mb-6 max-w-[56ch]"
          >
            {addon.description}
          </p>

          <ul
            role="list"
            className="space-y-2.5 md:space-y-3"
            aria-label={t("addonCard.featuresAria", { name: addon.name })}
          >
            {addon.features.map((feature) => (
              <li
                key={feature}
                role="listitem"
                className="flex items-start gap-3 text-[14px] md:text-[15px] leading-[1.45] text-[#D5DBE6]"
              >
                <motion.span
                  className="mt-[0.55em] inline-block h-1.5 w-3 rounded-full bg-gradient-to-r from-[#3A7BFF] to-[#4CC2FF]"
                  animate={
                    active
                      ? { scale: [1, 1.5, 1], x: [0, 2, 0] }
                      : { scale: 1, x: 0 }
                  }
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  aria-hidden="true"
                />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <motion.button
          type="button"
          onClick={handleToggle}
          className="
            group mt-6 relative z-20 inline-flex w-full items-center justify-center
            overflow-hidden rounded-full
            px-7 py-3
            text-sm md:text-base font-medium
            text-[#050816]
            shadow-[0_0_40px_rgba(76,194,255,0.55)]
            hover:shadow-[0_0_65px_rgba(76,194,255,0.85)]
            transition-shadow
            focus:outline-none
            focus-visible:ring-2 focus-visible:ring-[#4CC2FF]/80
          "
          whileHover={reduce ? undefined : { scale: 1.03 }}
          whileTap={reduce ? undefined : { scale: 0.97 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          aria-pressed={isAdded}
          aria-label={
            isAdded
              ? t("addonCard.removeAria", { name: addon.name })
              : t("addonCard.addAria", { name: addon.name })
          }
        >
          <span className="absolute inset-0 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]" />
          <span
            className="
              pointer-events-none absolute inset-0
              [background:linear-gradient(to_bottom,rgba(255,255,255,0.28),rgba(255,255,255,0.06)_45%,rgba(0,0,0,0.12))]
              mix-blend-overlay
            "
            aria-hidden="true"
          />
          <span
            className="pointer-events-none absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"
            aria-hidden="true"
          />

          <span className="relative z-10 flex items-center gap-2">
            {isAdded ? (
              <Check className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Plus className="h-4 w-4" aria-hidden="true" />
            )}
            {isAdded ? t("addonCard.added") : t("addonCard.add")}
          </span>
        </motion.button>

        <motion.div
          className="pointer-events-none absolute bottom-4 right-4 h-8 w-8 opacity-40 z-20"
          animate={{ scale: active ? 1.2 : 1, opacity: active ? 0.8 : 0.4 }}
          transition={{ duration: 0.25 }}
          aria-hidden="true"
        >
          <div className="h-full w-full rounded-br-3xl border-b border-r border-[#4CC2FF77]" />
        </motion.div>
      </motion.div>
    </motion.article>
  );
} 