// "use client";

// import { useReducedMotion } from "motion/react";
// import { motion } from "motion/react";
// import { Check } from "lucide-react";

// const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

// interface Category {
//   category: string;
//   items: string[];
//   icon: string;
// }

// export function DeliverableCard({
//   category,
//   index,
// }: {
//   category: Category;
//   index: number;
// }) {
//   const reduce = useReducedMotion();

//   return (
//     <motion.div
//       initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{
//         duration: 0.7,
//         delay: reduce ? 0 : index * 0.08,
//         ease: EASE,
//       }}
//       viewport={{ once: true, margin: "-100px" }}
//       className="relative"
//     >
//       {/* deep glow under card */}
//       <motion.div
//         className="absolute -inset-[12px] rounded-[34px] bg-[radial-gradient(circle_at_top,_rgba(58,123,255,0.55),_transparent_70%)] blur-2xl -z-20"
//         initial={{ opacity: 0.3, scale: 1 }}
//         whileHover={reduce ? undefined : { opacity: 0.95, scale: 1.08 }}
//         transition={{ duration: 0.35, ease: "easeOut" }}
//         aria-hidden="true"
//       />

//       {/* hover aura */}
//       <motion.div
//         className="absolute inset-0 rounded-[40px] bg-[radial-gradient(circle_at_center,_rgba(76,194,255,0.45),_transparent_65%)] blur-3xl -z-10 pointer-events-none"
//         initial={{ opacity: 0, scale: 0.95 }}
//         whileHover={reduce ? undefined : { opacity: 0.8, scale: 1.05 }}
//         transition={{ duration: 0.35, ease: "easeOut" }}
//         aria-hidden="true"
//       />

//       <motion.div
//         className="
//           relative h-full rounded-3xl border border-white/10
//           bg-gradient-to-b from-[#060A13] via-[#050816] to-[#02030A]
//           shadow-[0_26px_80px_rgba(0,0,0,0.85)]
//           backdrop-blur-xl overflow-hidden
//         "
//         whileHover={
//           reduce
//             ? undefined
//             : { y: -10, boxShadow: "0 32px 120px rgba(0,0,0,1)" }
//         }
//         transition={{ duration: 0.28, ease: "easeOut" }}
//       >
//         {/* inner glow */}
//         <motion.div
//           className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_top,_rgba(76,194,255,0.16),_transparent_60%)] -z-10"
//           initial={{ opacity: 0.35 }}
//           whileHover={reduce ? undefined : { opacity: 0.9 }}
//           transition={{ duration: 0.3 }}
//           aria-hidden="true"
//         />

//         {/* sheen */}
//         <motion.div
//           className="pointer-events-none absolute -inset-10 bg-[linear-gradient(115deg,_transparent_0%,_rgba(255,255,255,0.18)_30%,_transparent_60%)] mix-blend-screen -z-10"
//           initial={{ x: "-140%" }}
//           whileHover={reduce ? undefined : { x: "140%" }}
//           transition={{ duration: 0.9, ease: "easeInOut" }}
//           aria-hidden="true"
//         />

//         {/* gradient outline */}
//         <motion.div
//           className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent z-10"
//           initial={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.06)" }}
//           whileHover={
//             reduce
//               ? undefined
//               : {
//                   boxShadow:
//                     "0 0 0 1px rgba(76,194,255,0.7), 0 0 42px rgba(76,194,255,1)",
//                 }
//           }
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

//         <div className="relative z-30 p-6 md:p-7">
//           {/* header */}
//           <div className="flex items-start gap-4 mb-5">
//             {/* icon capsule */}
//             <motion.div
//               className="
//                 shrink-0 relative inline-flex h-12 w-12 items-center justify-center
//                 rounded-2xl border border-white/15
//                 bg-[radial-gradient(circle_at_top,_#3A7BFF3b,_#050816)]
//                 overflow-hidden
//                 shadow-[0_0_40px_rgba(58,123,255,0.55)]
//               "
//               animate={reduce ? undefined : { rotate: [0, 6, -6, 0] }}
//               transition={
//                 reduce
//                   ? undefined
//                   : { duration: 3, repeat: Infinity, repeatDelay: 5 }
//               }
//               aria-hidden="true"
//             >
//               <span className="relative z-10 text-2xl leading-none">
//                 {category.icon}
//               </span>
//               <motion.span
//                 className="absolute inset-0 bg-gradient-to-br from-transparent via-[#3A7BFF66] to-[#4CC2FF66]"
//                 initial={{ opacity: 0.35 }}
//                 whileHover={reduce ? undefined : { opacity: 0.75 }}
//                 transition={{ duration: 0.25 }}
//                 aria-hidden="true"
//               />
//             </motion.div>

//             <div className="min-w-0">
//               <h3
//                 className="
//                   text-[20px] md:text-[22px] lg:text-[24px]
//                   leading-[1.15] md:leading-[1.12]
//                   font-semibold tracking-[-0.01em]
//                   text-[#F2F4FA]
//                 "
//               >
//                 {category.category}
//               </h3>

//               <p
//                 className="
//                   mt-1
//                   text-[15px] md:text-[16px] lg:text-[17px]
//                   leading-[1.5]
//                   text-[#C7CEDF]
//                   opacity-80
//                   max-w-[52ch]
//                 "
//               >
//                 Всё, что нужно для запуска и работы без “потерь”.
//               </p>
//             </div>
//           </div>

//           {/* list */}
//           <div className="space-y-3">
//             {category.items.map((item: string, i: number) => (
//               <div key={i} className="flex items-start gap-3">
//                 <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/10 bg-white/5">
//                   <Check className="h-3.5 w-3.5 text-[#CFE3FF]" />
//                 </span>

//                 <p
//                   className="
//                     text-[14px] md:text-[15px] lg:text-[16px]
//                     leading-[1.5]
//                     text-[#D5DBE6]
//                     opacity-85
//                   "
//                 >
//                   {item}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* bottom accent */}
//         <div className="h-[2px] w-full bg-gradient-to-r from-[#3A7BFF55] via-[#4CC2FF55] to-[#9B5DFF55]" />
//       </motion.div>
//     </motion.div>
//   );
// }

"use client";

import { useReducedMotion } from "motion/react";
import { motion } from "motion/react";
import { Check } from "lucide-react";
import { useTranslations } from "next-intl";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

type Category = {
  category: string;
  items: string[];
  icon: string;
};

export function DeliverableCard({
  category,
  index,
}: {
  category: Category;
  index: number;
}) {
  const reduce = useReducedMotion();
  const t = useTranslations("processe");

  return (
    <motion.article
      initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        delay: reduce ? 0 : index * 0.08,
        ease: EASE,
      }}
      viewport={{ once: true, margin: "-100px" }}
      className="relative"
      aria-label={`${t("deliverable.aria.cardLabel")}: ${category.category}`}
    >
      {/* deep glow under card */}
      <motion.div
        className="absolute -inset-[12px] rounded-[34px] bg-[radial-gradient(circle_at_top,_rgba(58,123,255,0.55),_transparent_70%)] blur-2xl -z-20"
        initial={{ opacity: 0.3, scale: 1 }}
        whileHover={reduce ? undefined : { opacity: 0.95, scale: 1.08 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        aria-hidden="true"
      />

      {/* hover aura */}
      <motion.div
        className="absolute inset-0 rounded-[40px] bg-[radial-gradient(circle_at_center,_rgba(76,194,255,0.45),_transparent_65%)] blur-3xl -z-10 pointer-events-none"
        initial={{ opacity: 0, scale: 0.95 }}
        whileHover={reduce ? undefined : { opacity: 0.8, scale: 1.05 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        aria-hidden="true"
      />

      <motion.div
        className="
          relative h-full rounded-3xl border border-white/10
          bg-gradient-to-b from-[#060A13] via-[#050816] to-[#02030A]
          shadow-[0_26px_80px_rgba(0,0,0,0.85)]
          backdrop-blur-xl overflow-hidden
        "
        whileHover={
          reduce
            ? undefined
            : { y: -10, boxShadow: "0 32px 120px rgba(0,0,0,1)" }
        }
        transition={{ duration: 0.28, ease: "easeOut" }}
      >
        {/* inner glow */}
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_top,_rgba(76,194,255,0.16),_transparent_60%)] -z-10"
          initial={{ opacity: 0.35 }}
          whileHover={reduce ? undefined : { opacity: 0.9 }}
          transition={{ duration: 0.3 }}
          aria-hidden="true"
        />

        {/* sheen */}
        <motion.div
          className="pointer-events-none absolute -inset-10 bg-[linear-gradient(115deg,_transparent_0%,_rgba(255,255,255,0.18)_30%,_transparent_60%)] mix-blend-screen -z-10"
          initial={{ x: "-140%" }}
          whileHover={reduce ? undefined : { x: "140%" }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          aria-hidden="true"
        />

        {/* gradient outline */}
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent z-10"
          initial={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.06)" }}
          whileHover={
            reduce
              ? undefined
              : {
                  boxShadow:
                    "0 0 0 1px rgba(76,194,255,0.7), 0 0 42px rgba(76,194,255,1)",
                }
          }
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

        <div className="relative z-30 p-6 md:p-7">
          {/* header */}
          <div className="flex items-start gap-4 mb-5">
            {/* icon capsule */}
            <motion.div
              className="
                shrink-0 relative inline-flex h-12 w-12 items-center justify-center
                rounded-2xl border border-white/15
                bg-[radial-gradient(circle_at_top,_#3A7BFF3b,_#050816)]
                overflow-hidden
                shadow-[0_0_40px_rgba(58,123,255,0.55)]
              "
              animate={reduce ? undefined : { rotate: [0, 6, -6, 0] }}
              transition={
                reduce
                  ? undefined
                  : { duration: 3, repeat: Infinity, repeatDelay: 5 }
              }
              aria-hidden="true"
            >
              <span className="relative z-10 text-2xl leading-none">
                {category.icon}
              </span>
              <motion.span
                className="absolute inset-0 bg-gradient-to-br from-transparent via-[#3A7BFF66] to-[#4CC2FF66]"
                initial={{ opacity: 0.35 }}
                whileHover={reduce ? undefined : { opacity: 0.75 }}
                transition={{ duration: 0.25 }}
                aria-hidden="true"
              />
            </motion.div>

            <div className="min-w-0">
              <h3
                className="
                  text-[20px] md:text-[22px] lg:text-[24px]
                  leading-[1.15] md:leading-[1.12]
                  font-semibold tracking-[-0.01em]
                  text-[#F2F4FA]
                "
              >
                {category.category}
              </h3>

              <p
                className="
                  mt-1
                  text-[15px] md:text-[16px] lg:text-[17px]
                  leading-[1.5]
                  text-[#C7CEDF]
                  opacity-80
                  max-w-[52ch]
                "
              >
                {t("deliverable.cardSubtitle")}
              </p>
            </div>
          </div>

          {/* ✅ list */}
          <ul className="space-y-3">
            {category.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/10 bg-white/5"
                  aria-hidden="true"
                >
                  <Check
                    className="h-3.5 w-3.5 text-[#CFE3FF]"
                    aria-hidden="true"
                  />
                </span>

                <p
                  className="
                    text-[14px] md:text-[15px] lg:text-[16px]
                    leading-[1.5]
                    text-[#D5DBE6]
                    opacity-85
                  "
                >
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* bottom accent */}
        <div
          className="h-[2px] w-full bg-gradient-to-r from-[#3A7BFF55] via-[#4CC2FF55] to-[#9B5DFF55]"
          aria-hidden="true"
        />
      </motion.div>
    </motion.article>
  );
}