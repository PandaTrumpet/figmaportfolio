


// "use client";

// import { useRef, useState } from "react";
// import { motion, useInView, useReducedMotion } from "motion/react";
// import { Check, Clock, Package, ChevronDown } from "lucide-react";
// import { ImageWithFallback } from "@/src/components/figma/ImageWithFallback";

// const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

// export function ProcessStep({ step, index }: { step: any; index: number }) {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const ref = useRef<HTMLDivElement | null>(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });
//   const reduce = useReducedMotion();

//   return (
//     <div
//       ref={ref}
//       className={`grid lg:grid-cols-[1fr,1.1fr] gap-10 lg:gap-16 items-center ${
//         index % 2 === 1 ? "lg:grid-flow-dense" : ""
//       }`}
//     >
//       {/* Image */}
//       <motion.div
//         initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
//         animate={isInView ? { opacity: 1, x: 0 } : {}}
//         transition={{ duration: 1, ease: EASE }}
//         className={`relative ${index % 2 === 1 ? "lg:col-start-2" : ""}`}
//       >
//         {/* glow behind */}
//         <div className="pointer-events-none absolute -inset-6 rounded-[34px] bg-[radial-gradient(circle_at_top,_rgba(58,123,255,0.45),_transparent_70%)] blur-3xl opacity-60" />

//         <motion.div
//           className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b from-white/5 via-white/0 to-white/0 shadow-[0_26px_80px_rgba(0,0,0,0.75)]"
//           whileHover={reduce ? undefined : { y: -10 }}
//           transition={{ duration: 0.25, ease: "easeOut" }}
//         >
//           {/* gradient hairline border */}
//           <div
//             className="pointer-events-none absolute inset-0 rounded-3xl"
//             style={{
//               background:
//                 "linear-gradient(135deg, rgba(58,123,255,0.55), rgba(76,194,255,0.55), rgba(155,93,255,0.45))",
//               WebkitMask:
//                 "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
//               WebkitMaskComposite: "xor",
//               maskComposite: "exclude",
//               padding: "1px",
//             }}
//           />

//           {/* shimmer */}
//           <motion.div
//             className="pointer-events-none absolute -inset-10 bg-[linear-gradient(115deg,_transparent_0%,_rgba(255,255,255,0.18)_30%,_transparent_60%)] mix-blend-screen opacity-0"
//             whileHover={reduce ? undefined : { opacity: 1, x: "140%" }}
//             initial={{ x: "-140%" }}
//             transition={{ duration: 0.9, ease: "easeInOut" }}
//           />

//           <motion.div
//             whileHover={reduce ? undefined : { scale: 1.04 }}
//             transition={{ duration: 0.7 }}
//           >
//             <ImageWithFallback
//               src={step.image}
//               alt={step.title}
//               className="h-full w-full object-cover"
//             />
//           </motion.div>

//           {/* number chip */}
//           <div className="absolute top-5 left-5 z-20">
//             <div className="relative inline-flex items-center justify-center rounded-2xl px-4 py-3 border border-white/12 bg-white/6 backdrop-blur-xl">
//               <div className="pointer-events-none absolute -inset-4 rounded-2xl bg-[radial-gradient(circle_at_center,_rgba(76,194,255,0.35),_transparent_70%)] blur-2xl opacity-70" />
//               <span className="relative text-sm tracking-[0.22em] text-[#EAF2FF]">
//                 {step.number}
//               </span>
//             </div>
//           </div>
//         </motion.div>
//       </motion.div>

//       {/* Content */}
//       <motion.div
//         initial={{ opacity: 0, x: index % 2 === 0 ? 80 : -80 }}
//         animate={isInView ? { opacity: 1, x: 0 } : {}}
//         transition={{ duration: 1, delay: 0.15, ease: EASE }}
//         className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}
//       >
//         {/* top meta */}
//         <div className="flex flex-wrap items-center gap-4 mb-6">
//           <motion.div
//             className="text-5xl md:text-6xl"
//             animate={reduce ? undefined : { rotate: [0, 8, -8, 0] }}
//             transition={
//               reduce
//                 ? undefined
//                 : { duration: 3, repeat: Infinity, repeatDelay: 6 }
//             }
//           >
//             {step.icon}
//           </motion.div>

//           <div className="relative inline-flex items-center gap-2 rounded-full px-4 py-2 border border-white/12 bg-white/6 backdrop-blur-xl">
//             <Clock className="h-4 w-4 text-[#CFE3FF]" />
//             <span className="text-xs md:text-sm uppercase tracking-wider text-[#D7DDEA]">
//               {step.duration}
//             </span>
//           </div>

//           {/* optional: Israel-trust hint (universal, not niche) */}
//           <div className="text-xs md:text-sm text-[#C7CEDF]/80">
//             Без “магии” — только понятные шаги и контроль результата.
//           </div>
//         </div>

//         {/* titles */}
//         <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-3 leading-tight">
//           {step.title}
//         </h3>

//         <p className="text-base md:text-xl text-[#C7CEDF] mb-6">
//           {step.subtitle}
//         </p>

//         <p className="text-base md:text-lg lg:text-xl text-[#D5DBE6]/85 leading-relaxed mb-8">
//           {step.description}
//         </p>

//         {/* deliverables */}
//         <div className="mb-10">
//           <h4 className="text-base md:text-lg mb-4 flex items-center gap-2 text-[#EAF2FF]">
//             <Package className="h-5 w-5" />
//             Что вы получаете
//           </h4>

//           <div className="space-y-2.5">
//             {step.deliverables
//               .slice(0, isExpanded ? undefined : 3)
//               .map((item: string, i: number) => (
//                 <motion.div
//                   key={i}
//                   initial={{ opacity: 0, x: -16 }}
//                   animate={isInView ? { opacity: 1, x: 0 } : {}}
//                   transition={{
//                     duration: 0.5,
//                     delay: 0.15 + i * 0.08,
//                     ease: "easeOut",
//                   }}
//                   className="flex items-start gap-3"
//                 >
//                   <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/10 bg-white/6">
//                     <Check className="h-3.5 w-3.5 text-[#CFE3FF]" />
//                   </span>
//                   <span className="text-sm md:text-base text-[#D5DBE6]/85">
//                     {item}
//                   </span>
//                 </motion.div>
//               ))}
//           </div>

//           {step.deliverables.length > 3 && (
//             <motion.button
//               onClick={() => setIsExpanded(!isExpanded)}
//               className="mt-4 inline-flex items-center gap-2 text-sm text-[#C7CEDF] hover:text-[#EAF2FF] transition-colors"
//               whileHover={reduce ? undefined : { x: 6 }}
//               type="button"
//             >
//               <span>
//                 {isExpanded
//                   ? "Показать меньше"
//                   : `+ ещё ${step.deliverables.length - 3} пункт(а/ов)`}
//               </span>
//               <motion.span
//                 animate={{ rotate: isExpanded ? 180 : 0 }}
//                 transition={{ duration: 0.25 }}
//               >
//                 <ChevronDown className="h-4 w-4" />
//               </motion.span>
//             </motion.button>
//           )}
//         </div>

//         {/* details cards */}
//         <div className="grid md:grid-cols-3 gap-4">
//           {step.details.map((detail: any, i: number) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 18 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{
//                 duration: 0.6,
//                 delay: 0.25 + i * 0.1,
//                 ease: "easeOut",
//               }}
//               className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 overflow-hidden"
//             >
//               <div className="pointer-events-none absolute -inset-10 bg-[radial-gradient(circle_at_top,_rgba(58,123,255,0.22),_transparent_60%)] opacity-70" />
//               <h5 className="relative text-sm md:text-base text-[#EAF2FF] mb-2">
//                 {detail.title}
//               </h5>
//               <p className="relative text-xs md:text-sm text-[#C7CEDF]/85 leading-relaxed">
//                 {detail.description}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </div>
//   );
// }


"use client";

import { useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { ChevronDown, Clock, Check, Package } from "lucide-react";
import { ImageWithFallback } from "@/src/components/figma/ImageWithFallback";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function ProcessStep({ step }: { step: any }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();

  const hiddenCount = Math.max(0, step.deliverables.length - 3);

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: EASE }}
      className="relative"
    >
      <div className="grid grid-cols-[28px,1fr] gap-5 md:gap-7">
        {/* Timeline rail */}
        <div className="relative flex justify-center">
          <div className="absolute top-0 bottom-0 w-[2px] bg-white/10" />

          <motion.div
            className="relative z-10 mt-1 h-7 w-7 rounded-full border border-white/12 bg-white/6 backdrop-blur-xl"
            animate={
              reduce
                ? undefined
                : {
                    boxShadow: [
                      "0 0 0 rgba(76,194,255,0)",
                      "0 0 28px rgba(76,194,255,0.45)",
                      "0 0 0 rgba(76,194,255,0)",
                    ],
                  }
            }
            transition={
              reduce
                ? undefined
                : { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }
          >
            <div className="absolute inset-[6px] rounded-full bg-gradient-to-br from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]" />
          </motion.div>
        </div>

        {/* CARD */}
        <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">
          <div className="pointer-events-none absolute -inset-24 bg-[radial-gradient(circle_at_top,_rgba(58,123,255,0.18),_transparent_55%)] opacity-70" />

          {/* INNER GRID */}
          <div className="relative p-5 md:p-7">
            <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-10">
              {/* LEFT — TEXT */}
              <div className="min-w-0 flex-1">
                {/* Meta */}
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="inline-flex items-center rounded-full border border-white/12 bg-white/5 px-3 py-1 text-[11px] tracking-[0.22em] text-[#EAF2FF]">
                    {step.number}
                  </span>

                  <span className="text-xl md:text-2xl">{step.icon}</span>

                  <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-3 py-1.5">
                    <Clock className="h-4 w-4 text-[#CFE3FF]" />
                    <span className="text-xs md:text-sm text-[#D7DDEA]">
                      {step.duration}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#F5EFE7]">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm md:text-base text-[#C7CEDF]">
                  {step.subtitle}
                </p>

                <p className="mt-4 text-sm md:text-base text-[#D5DBE6]/85 leading-relaxed max-w-[70ch]">
                  {step.description}
                </p>

                {/* Result */}
                <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#4CC2FF33] bg-[#4CC2FF1a] px-4 py-2 text-sm text-[#EAF2FF]">
                  Результат этапа:
                  <span className="opacity-80">{step.deliverables?.[0]}</span>
                </div>

                {/* Accordion */}
                <div className="mt-6">
                  <button
                    type="button"
                    onClick={() => setOpen((v) => !v)}
                    className="inline-flex items-center gap-2 text-sm text-[#C7CEDF] hover:text-[#EAF2FF] transition-colors"
                    aria-expanded={open}
                  >
                    <Package className="h-4 w-4" />
                    <span>
                      {open
                        ? "Скрыть детали"
                        : `Что вы получаете${
                            hiddenCount ? ` (+ещё ${hiddenCount})` : ""
                          }`}
                    </span>
                    <motion.span
                      animate={{ rotate: open ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </motion.span>
                  </button>

                  <motion.div
                    initial={false}
                    animate={
                      open
                        ? { height: "auto", opacity: 1 }
                        : { height: 0, opacity: 0 }
                    }
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 space-y-2.5">
                      {step.deliverables.map((item: string, i: number) => (
                        <div key={i} className="flex items-start gap-3">
                          <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/10 bg-white/6">
                            <Check className="h-3.5 w-3.5 text-[#CFE3FF]" />
                          </span>
                          <span className="text-sm md:text-base text-[#D5DBE6]/85">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* RIGHT — IMAGE (small, top-aligned, desktop only) */}
              <div className="hidden lg:block shrink-0">
                <div className="relative w-[200px]">
                  <div className="pointer-events-none absolute -inset-6 rounded-3xl bg-[radial-gradient(circle_at_top,_rgba(76,194,255,0.18),_transparent_70%)] blur-2xl opacity-70" />

                  <motion.div
                    className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_18px_50px_rgba(0,0,0,0.45)]"
                    whileHover={reduce ? undefined : { y: -4 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  >
                    <div className="aspect-[4/5]">
                      <ImageWithFallback
                        src={step.image}
                        alt={step.title}
                        className="h-full w-full object-cover opacity-90"
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
