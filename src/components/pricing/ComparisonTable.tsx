// "use client";

// import { useMemo, useState } from "react";
// import { motion, useReducedMotion } from "motion/react";
// import { pricingData } from "@/src/data/pricingData";
// import { Check, X, ChevronDown } from "lucide-react";

// type ColKey = "starter" | "growth" | "premium";

// function FeatureValue({ value }: { value: boolean | string }) {
//   if (typeof value === "boolean") {
//     return value ? (
//       <div className="inline-flex items-center justify-center">
//         <Check className="h-5 w-5 text-[#4CC2FF]" />
//       </div>
//     ) : (
//       <div className="inline-flex items-center justify-center">
//         <X className="h-5 w-5 text-white/25" />
//       </div>
//     );
//   }

//   return (
//     <span className="text-sm md:text-base text-[#D5DBE6] opacity-90">
//       {value}
//     </span>
//   );
// }

// function Chip({ label }: { label: string }) {
//   return (
//     <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.22em] text-[#EAF2FF]">
//       {label}
//     </span>
//   );
// }

// export function ComparisonTable() {
//   const reduce = useReducedMotion();

//   const [openIndex, setOpenIndex] = useState<number | null>(0);

//   const cols = useMemo(
//     () =>
//       [
//         { key: "starter" as const, label: "Starter" },
//         { key: "growth" as const, label: "Growth" },
//         { key: "premium" as const, label: "Premium" },
//       ] as const,
//     []
//   );

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 28 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//       viewport={{ once: true }}
//       className="relative"
//     >
//       {/* outer glow */}
//       <div className="pointer-events-none absolute -inset-[14px] rounded-[34px] bg-[radial-gradient(circle_at_top,_rgba(58,123,255,0.40),_transparent_70%)] blur-2xl opacity-60" />

//       {/* glass shell */}
//       <div className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-[#060A13] via-[#050816] to-[#02030A] shadow-[0_26px_90px_rgba(0,0,0,0.9)] backdrop-blur-xl overflow-hidden">
//         {/* inner glow */}
//         <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#3A7BFF22] via-[#4CC2FF14] to-[#9B5DFF1a]" />

//         {/* gradient outline */}
//         <div
//           className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent"
//           style={{
//             background: "linear-gradient(135deg, #3A7BFF, #4CC2FF, #9B5DFF)",
//             WebkitMask:
//               "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
//             WebkitMaskComposite: "xor",
//             maskComposite: "exclude",
//             padding: "1px",
//           }}
//         />

//         {/* ===== DESKTOP TABLE ===== */}
//         <div className="hidden md:block overflow-x-auto">
//           <table className="w-full min-w-[820px] text-left">
//             <thead>
//               <tr className="border-b border-white/10">
//                 <th className="p-6 text-sm uppercase tracking-[0.22em] text-[#C7CEDF]">
//                   Возможности
//                 </th>
//                 <th className="p-6 text-center">
//                   <Chip label="Starter" />
//                 </th>
//                 <th className="p-6 text-center">
//                   <Chip label="Growth" />
//                 </th>
//                 <th className="p-6 text-center">
//                   <Chip label="Premium" />
//                 </th>
//               </tr>
//             </thead>

//             <tbody>
//               {pricingData.comparison.features.map((feature, index) => (
//                 <motion.tr
//                   key={`${feature.name}-${index}`}
//                   initial={{ opacity: 0, x: -14 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{
//                     duration: 0.45,
//                     delay: index * 0.04,
//                     ease: [0.22, 1, 0.36, 1],
//                   }}
//                   viewport={{ once: true }}
//                   className="border-b border-white/10"
//                 >
//                   <td className="p-6 text-base md:text-lg text-[#F2F4FA]">
//                     {feature.name}
//                   </td>

//                   <td className="p-6 text-center">
//                     <FeatureValue value={feature.starter} />
//                   </td>
//                   <td className="p-6 text-center">
//                     <FeatureValue value={feature.growth} />
//                   </td>
//                   <td className="p-6 text-center">
//                     <FeatureValue value={feature.premium} />
//                   </td>
//                 </motion.tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* ===== MOBILE ACCORDION ===== */}
//         <div className="md:hidden">
//           {/* <div className="px-6 pt-6 pb-4 flex items-center justify-between gap-3">
//             <p className="text-sm uppercase tracking-[0.22em] text-[#C7CEDF]">
//               Сравнение
//             </p>
//             <div className="flex gap-2">
//               <Chip label="Starter" />
//               <Chip label="Growth" />
//               <Chip label="Premium" />
//             </div>
//           </div> */}
//           <div className="px-6 pt-6 pb-4">
//             {/* Заголовок — отдельной строкой */}
//             <p className="text-sm uppercase tracking-[0.22em] text-[#C7CEDF] text-center">
//               Сравнение
//             </p>

//             {/* Чипы — отдельной строкой, всегда видны (wrap) */}
//             <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
//               <Chip label="Starter" />
//               <Chip label="Growth" />
//               <Chip label="Premium" />
//             </div>
//           </div>

//           <div className="px-4 pb-6">
//             <div className="space-y-3">
//               {pricingData.comparison.features.map((feature, index) => {
//                 const isOpen = openIndex === index;

//                 return (
//                   <div
//                     key={`${feature.name}-${index}`}
//                     className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden"
//                   >
//                     <button
//                       type="button"
//                       onClick={() => setOpenIndex(isOpen ? null : index)}
//                       className="w-full px-4 py-4 text-left flex items-center justify-between gap-3"
//                     >
//                       <span className="text-base font-semibold text-[#F2F4FA]">
//                         {feature.name}
//                       </span>
//                       <motion.span
//                         animate={{ rotate: isOpen ? 180 : 0 }}
//                         transition={{ duration: 0.25 }}
//                         className="shrink-0 text-[#C7CEDF]"
//                       >
//                         <ChevronDown className="h-5 w-5" />
//                       </motion.span>
//                     </button>

//                     <motion.div
//                       initial={false}
//                       animate={{
//                         height: isOpen ? "auto" : 0,
//                         opacity: isOpen ? 1 : 0,
//                       }}
//                       transition={{
//                         duration: 0.25,
//                         ease: "easeOut",
//                       }}
//                       className="overflow-hidden"
//                     >
//                       <div className="px-4 pb-4 pt-0 space-y-3">
//                         {cols.map((col) => (
//                           <div
//                             key={col.key}
//                             className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-black/20 px-3 py-3"
//                           >
//                             <span className="text-xs uppercase tracking-[0.22em] text-[#C7CEDF]">
//                               {col.label}
//                             </span>

//                             <div className="text-right">
//                               <FeatureValue
//                                 value={feature[col.key as ColKey]}
//                               />
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     </motion.div>
//                   </div>
//                 );
//               })}
//             </div>

//             <p className="mt-5 text-xs text-[#C7CEDF] opacity-75 leading-relaxed">
//               На мобильном сравнение сделано карточками — так удобнее читать,
//               чем горизонтальная таблица.
//             </p>
//           </div>
//         </div>

//         {/* subtle bottom highlight */}
//         <motion.div
//           className="pointer-events-none absolute -bottom-16 left-1/2 h-40 w-[520px] -translate-x-1/2 bg-[radial-gradient(circle_at_center,_rgba(76,194,255,0.25),_transparent_65%)] blur-3xl"
//           animate={reduce ? undefined : { opacity: [0.35, 0.6, 0.35] }}
//           transition={
//             reduce
//               ? undefined
//               : { duration: 4, repeat: Infinity, ease: "easeInOut" }
//           }
//         />
//       </div>
//     </motion.div>
//   );
// }

"use client";

import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { buildPricingData } from "@/src/data/pricingData";
import { Check, X, ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";

type ColKey = "starter" | "growth" | "premium";

function FeatureValue({
  value,
  yesAria,
  noAria,
}: {
  value: boolean | string;
  yesAria: string;
  noAria: string;
}) {
  if (typeof value === "boolean") {
    return value ? (
      <div
        className="inline-flex items-center justify-center"
        aria-label={yesAria}
      >
        <Check className="h-5 w-5 text-[#4CC2FF]" aria-hidden="true" />
      </div>
    ) : (
      <div
        className="inline-flex items-center justify-center"
        aria-label={noAria}
      >
        <X className="h-5 w-5 text-white/25" aria-hidden="true" />
      </div>
    );
  }

  return (
    <span className="text-sm md:text-base text-[#D5DBE6] opacity-90">
      {value}
    </span>
  );
}

function Chip({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.22em] text-[#EAF2FF]">
      {label}
    </span>
  );
}

export function ComparisonTable() {
  const t = useTranslations("pricingData");
  const data = buildPricingData(t);
  const reduce = useReducedMotion();

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const cols = useMemo(
    () =>
      [
        { key: "starter" as const, label: "Starter" },
        { key: "growth" as const, label: "Growth" },
        { key: "premium" as const, label: "Premium" },
      ] as const,
    [],
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      className="relative"
    >
      <div
        className="pointer-events-none absolute -inset-[14px] rounded-[34px]
        bg-[radial-gradient(circle_at_top,_rgba(58,123,255,0.40),_transparent_70%)]
        blur-2xl opacity-60"
        aria-hidden="true"
      />

      <div className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-[#060A13] via-[#050816] to-[#02030A] shadow-[0_26px_90px_rgba(0,0,0,0.9)] backdrop-blur-xl overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#3A7BFF22] via-[#4CC2FF14] to-[#9B5DFF1a]"
          aria-hidden="true"
        />

        <div
          className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent"
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

        {/* ===== DESKTOP TABLE ===== */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full min-w-[820px] text-left">
            <caption className="sr-only">
              {t("comparisonTable.caption")}
            </caption>

            <thead>
              <tr className="border-b border-white/10">
                <th
                  scope="col"
                  className="p-6 text-sm uppercase tracking-[0.22em] text-[#C7CEDF]"
                >
                  {t("comparisonTable.featuresCol")}
                </th>
                <th scope="col" className="p-6 text-center">
                  <Chip label={t("comparisonTable.columns.starter")} />
                </th>
                <th scope="col" className="p-6 text-center">
                  <Chip label={t("comparisonTable.columns.growth")} />
                </th>
                <th scope="col" className="p-6 text-center">
                  <Chip label={t("comparisonTable.columns.premium")} />
                </th>
              </tr>
            </thead>

            <tbody>
              {data.comparison.features.map((feature, index) => (
                <motion.tr
                  key={`${feature.name}-${index}`}
                  initial={{ opacity: 0, x: -14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.04,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  viewport={{ once: true }}
                  className="border-b border-white/10"
                >
                  <th
                    scope="row"
                    className="p-6 text-base md:text-lg text-[#F2F4FA] font-medium"
                  >
                    {feature.name}
                  </th>

                  <td className="p-6 text-center">
                    <FeatureValue
                      value={feature.starter}
                      yesAria={t("comparisonTable.yes")}
                      noAria={t("comparisonTable.no")}
                    />
                  </td>
                  <td className="p-6 text-center">
                    <FeatureValue
                      value={feature.growth}
                      yesAria={t("comparisonTable.yes")}
                      noAria={t("comparisonTable.no")}
                    />
                  </td>
                  <td className="p-6 text-center">
                    <FeatureValue
                      value={feature.premium}
                      yesAria={t("comparisonTable.yes")}
                      noAria={t("comparisonTable.no")}
                    />
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ===== MOBILE ACCORDION ===== */}
        <div className="md:hidden">
          <div className="px-6 pt-6 pb-4">
            <p className="text-sm uppercase tracking-[0.22em] text-[#C7CEDF] text-center">
              {t("comparisonTable.mobileTitle")}
            </p>

            <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
              <Chip label={t("comparisonTable.columns.starter")} />
              <Chip label={t("comparisonTable.columns.growth")} />
              <Chip label={t("comparisonTable.columns.premium")} />
            </div>
          </div>

          <div className="px-4 pb-6">
            <div className="space-y-3">
              {data.comparison.features.map((feature, index) => {
                const isOpen = openIndex === index;
                const panelId = `cmp-panel-${index}`;
                const btnId = `cmp-btn-${index}`;

                return (
                  <div
                    key={`${feature.name}-${index}`}
                    className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden"
                  >
                    <button
                      id={btnId}
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="
                        w-full px-4 py-4 text-left flex items-center justify-between gap-3
                        focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4CC2FF]/80
                      "
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                    >
                      <span className="text-base font-semibold text-[#F2F4FA]">
                        {feature.name}
                      </span>

                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                        className="shrink-0 text-[#C7CEDF]"
                        aria-hidden="true"
                      >
                        <ChevronDown className="h-5 w-5" aria-hidden="true" />
                      </motion.span>
                    </button>

                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={btnId}
                      initial={false}
                      animate={{
                        height: isOpen ? "auto" : 0,
                        opacity: isOpen ? 1 : 0,
                      }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 pt-0 space-y-3">
                        {cols.map((col) => (
                          <div
                            key={col.key}
                            className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-black/20 px-3 py-3"
                          >
                            <span className="text-xs uppercase tracking-[0.22em] text-[#C7CEDF]">
                              {t(`comparisonTable.columns.${col.key}`)}
                            </span>

                            <div className="text-right">
                              <FeatureValue
                                value={feature[col.key as ColKey]}
                                yesAria={t("comparisonTable.yes")}
                                noAria={t("comparisonTable.no")}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </div>

            <p className="mt-5 text-xs text-[#C7CEDF] opacity-75 leading-relaxed">
              {t("comparisonTable.mobileNote")}
            </p>
          </div>
        </div>

        {/* subtle bottom highlight (decorative) */}
        <motion.div
          className="pointer-events-none absolute -bottom-16 left-1/2 h-40 w-[520px] -translate-x-1/2 bg-[radial-gradient(circle_at_center,_rgba(76,194,255,0.25),_transparent_65%)] blur-3xl"
          animate={reduce ? undefined : { opacity: [0.35, 0.6, 0.35] }}
          transition={
            reduce
              ? undefined
              : { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }
          aria-hidden="true"
        />
      </div>
    </motion.div>
  );
}