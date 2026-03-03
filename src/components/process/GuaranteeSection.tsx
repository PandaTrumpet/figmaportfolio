// "use client";

// import { useReducedMotion } from "motion/react";
// import { motion } from "motion/react";
// import { Check, Shield } from "lucide-react";
// import { PageContainer } from "../Layout/PageContainer";

// const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

// interface GuaranteeSectionProps {
//   title: string;
//   points: string[];
// }

// export function GuaranteeSection({
//   guarantee,
// }: {
//   guarantee: GuaranteeSectionProps;
// }) {
//   const reduce = useReducedMotion();

//   return (
//     <section
//       className="
//         relative
//         pt-10 pb-10
//         md:pt-14 md:pb-14
//         lg:pt-16 lg:pb-16
//         overflow-visible
//         text-[#F5EFE7]
//       "
//     >
//       {/* LOCAL FX (clip only background, not content) */}
//       <div
//         className="
//           pointer-events-none absolute inset-0 -z-10 overflow-hidden
//           [mask-image:linear-gradient(to_bottom,transparent_0%,black_12%,black_88%,transparent_100%)]
//           [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_12%,black_88%,transparent_100%)]
//         "
//         aria-hidden="true"
//       />

//       <PageContainer className="max-w-[1200px]">
//         <div className="relative z-10">
//           <motion.div
//             initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 26 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.9, ease: EASE }}
//             viewport={{ once: true, margin: "-120px" }}
//             className="relative"
//           >
//             {/* deep glow under "certificate" */}
//             <motion.div
//               className="absolute -inset-[14px] rounded-[38px] bg-[radial-gradient(circle_at_top,_rgba(58,123,255,0.55),_transparent_70%)] blur-2xl -z-20"
//               initial={{ opacity: 0.28, scale: 1 }}
//               whileHover={reduce ? undefined : { opacity: 0.95, scale: 1.06 }}
//               transition={{ duration: 0.35, ease: "easeOut" }}
//               aria-hidden="true"
//             />

//             {/* hover aura */}
//             <motion.div
//               className="absolute inset-0 rounded-[44px] bg-[radial-gradient(circle_at_center,_rgba(76,194,255,0.45),_transparent_65%)] blur-3xl -z-10 pointer-events-none"
//               initial={{ opacity: 0, scale: 0.95 }}
//               whileHover={reduce ? undefined : { opacity: 0.8, scale: 1.04 }}
//               transition={{ duration: 0.35, ease: "easeOut" }}
//               aria-hidden="true"
//             />

//             {/* certificate card */}
//             <motion.div
//               className="
//                 relative rounded-[32px] border border-white/10
//                 bg-gradient-to-b from-[#060A13] via-[#050816] to-[#02030A]
//                 shadow-[0_26px_90px_rgba(0,0,0,0.9)]
//                 backdrop-blur-xl overflow-hidden
//                 p-8 md:p-12 lg:p-14
//               "
//               whileHover={
//                 reduce
//                   ? undefined
//                   : { y: -10, boxShadow: "0 36px 140px rgba(0,0,0,1)" }
//               }
//               transition={{ duration: 0.28, ease: "easeOut" }}
//             >
//               {/* inner glow */}
//               <motion.div
//                 className="pointer-events-none absolute inset-0 rounded-[32px] bg-[radial-gradient(circle_at_top,_rgba(76,194,255,0.14),_transparent_62%)] -z-10"
//                 initial={{ opacity: 0.35 }}
//                 whileHover={reduce ? undefined : { opacity: 0.9 }}
//                 transition={{ duration: 0.3 }}
//                 aria-hidden="true"
//               />

//               {/* sheen */}
//               <motion.div
//                 className="pointer-events-none absolute -inset-10 bg-[linear-gradient(115deg,_transparent_0%,_rgba(255,255,255,0.18)_30%,_transparent_60%)] mix-blend-screen -z-10"
//                 initial={{ x: "-140%" }}
//                 whileHover={reduce ? undefined : { x: "140%" }}
//                 transition={{ duration: 0.9, ease: "easeInOut" }}
//                 aria-hidden="true"
//               />

//               {/* gradient outline (mask) */}
//               <motion.div
//                 className="pointer-events-none absolute inset-0 rounded-[32px] border border-transparent z-10"
//                 initial={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.06)" }}
//                 whileHover={
//                   reduce
//                     ? undefined
//                     : {
//                         boxShadow:
//                           "0 0 0 1px rgba(76,194,255,0.7), 0 0 52px rgba(76,194,255,1)",
//                       }
//                 }
//                 transition={{ duration: 0.25 }}
//                 style={{
//                   background:
//                     "linear-gradient(135deg, #3A7BFF, #4CC2FF, #9B5DFF)",
//                   WebkitMask:
//                     "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
//                   WebkitMaskComposite: "xor",
//                   maskComposite: "exclude",
//                   padding: "1px",
//                 }}
//                 aria-hidden="true"
//               />

//               <div className="relative z-20">
//                 {/* icon */}
//                 <div className="flex items-center justify-center mb-8 md:mb-10">
//                   <motion.div
//                     className="
//                       relative inline-flex h-16 w-16 md:h-20 md:w-20
//                       items-center justify-center
//                       rounded-2xl border border-white/15
//                       bg-[radial-gradient(circle_at_top,_#3A7BFF3b,_#050816)]
//                       overflow-hidden
//                       shadow-[0_0_44px_rgba(58,123,255,0.65)]
//                     "
//                     animate={reduce ? undefined : { rotate: [0, 360] }}
//                     transition={
//                       reduce
//                         ? undefined
//                         : { duration: 26, repeat: Infinity, ease: "linear" }
//                     }
//                     aria-hidden="true"
//                   >
//                     <Shield className="relative z-10 h-8 w-8 md:h-10 md:w-10 text-[#EAF2FF]" />
//                     <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#3A7BFF66] to-[#4CC2FF66] opacity-50" />
//                   </motion.div>
//                 </div>

//                 {/* MAIN TITLE — "главнее" */}
//                 <h2
//                   className="
//                     text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px] xl:text-[56px]
//                     leading-[1.12] md:leading-[1.12]
//                     font-semibold tracking-[-0.012em]
//                     text-slate-50
//                     text-center
//                     mb-10 md:mb-12
//                   "
//                 >
//                   {guarantee.title}
//                 </h2>

//                 <div className="grid md:grid-cols-2 gap-5 md:gap-7">
//                   {guarantee.points.map((point: string, index: number) => (
//                     <motion.div
//                       key={index}
//                       initial={
//                         reduce ? { opacity: 1, x: 0 } : { opacity: 0, x: -18 }
//                       }
//                       whileInView={{ opacity: 1, x: 0 }}
//                       transition={{
//                         duration: 0.6,
//                         delay: reduce ? 0 : index * 0.08,
//                         ease: EASE,
//                       }}
//                       viewport={{ once: true, margin: "-120px" }}
//                       className="
//                         flex items-start gap-4
//                         rounded-2xl border border-white/10
//                         bg-white/5
//                         p-4 md:p-5
//                         backdrop-blur-xl
//                       "
//                     >
//                       <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5">
//                         <Check className="h-4 w-4 text-[#CFE3FF]" />
//                       </span>

//                       {/* POINT TEXT — единый голос */}
//                       <p
//                         className="
//                           text-[15px] md:text-[16px] lg:text-[17px]
//                           leading-[1.55] md:leading-[1.6]
//                           text-[#D5DBE6]
//                           opacity-90
//                         "
//                       >
//                         {point}
//                       </p>
//                     </motion.div>
//                   ))}
//                 </div>

//               </div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </PageContainer>
//     </section>
//   );
// }

"use client";

import { useReducedMotion, motion } from "motion/react";
import { Check, Shield } from "lucide-react";
import { PageContainer } from "../Layout/PageContainer";
import { useTranslations } from "next-intl";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

interface GuarantesProps {
  title: string;
  points: string[];
}

export function GuaranteeSection({ guarantee }: { guarantee: GuarantesProps }) {
  const reduce = useReducedMotion();
  const t = useTranslations("processe");

  return (
    <section
      aria-labelledby="process-guarantes-heading"
      className="
        relative
        pt-10 pb-10
        md:pt-14 md:pb-14
        lg:pt-16 lg:pb-16
        overflow-visible
        text-[#F5EFE7]
      "
    >
      {/* LOCAL FX */}
      <div
        className="
          pointer-events-none absolute inset-0 -z-10 overflow-hidden
          [mask-image:linear-gradient(to_bottom,transparent_0%,black_12%,black_88%,transparent_100%)]
          [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_12%,black_88%,transparent_100%)]
        "
        aria-hidden="true"
      />

      <PageContainer className="max-w-[1200px]">
        <div className="relative z-10">
          <motion.div
            initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE }}
            viewport={{ once: true, margin: "-120px" }}
            className="relative"
          >
            {/* certificate card */}
            <motion.div
              className="
                relative rounded-[32px] border border-white/10
                bg-gradient-to-b from-[#060A13] via-[#050816] to-[#02030A]
                shadow-[0_26px_90px_rgba(0,0,0,0.9)]
                backdrop-blur-xl overflow-hidden
                p-8 md:p-12 lg:p-14
              "
              whileHover={
                reduce
                  ? undefined
                  : { y: -10, boxShadow: "0 36px 140px rgba(0,0,0,1)" }
              }
              transition={{ duration: 0.28, ease: "easeOut" }}
            >
              <div className="relative z-20">
                <motion.header className="text-center">
                  <div className="flex items-center justify-center mb-8 md:mb-10">
                    <motion.div
                      className="
                        relative inline-flex h-16 w-16 md:h-20 md:w-20
                        items-center justify-center
                        rounded-2xl border border-white/15
                        bg-[radial-gradient(circle_at_top,_#3A7BFF3b,_#050816)]
                        overflow-hidden
                        shadow-[0_0_44px_rgba(58,123,255,0.65)]
                      "
                      animate={reduce ? undefined : { rotate: [0, 360] }}
                      transition={
                        reduce
                          ? undefined
                          : { duration: 26, repeat: Infinity, ease: "linear" }
                      }
                      aria-hidden="true"
                    >
                      <Shield
                        className="relative z-10 h-8 w-8 md:h-10 md:w-10 text-[#EAF2FF]"
                        aria-hidden="true"
                      />
                    </motion.div>
                  </div>

                  <h2
                    id="process-guarantes-heading"
                    className="
                      text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px] xl:text-[56px]
                      leading-[1.12]
                      font-semibold tracking-[-0.012em]
                      text-slate-50
                      text-center
                      mb-10 md:mb-12
                    "
                  >
                    {guarantee.title}
                  </h2>
                </motion.header>

                {/* list */}
                <ul
                  className="grid md:grid-cols-2 gap-5 md:gap-7"
                  aria-label={t("guarantes.aria.listLabel")}
                >
                  {guarantee.points.map((point: string, index: number) => (
                    <motion.li
                      key={index}
                      initial={
                        reduce ? { opacity: 1, x: 0 } : { opacity: 0, x: -18 }
                      }
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: reduce ? 0 : index * 0.08,
                        ease: EASE,
                      }}
                      viewport={{ once: true, margin: "-120px" }}
                      className="
                        flex items-start gap-4
                        rounded-2xl border border-white/10
                        bg-white/5
                        p-4 md:p-5
                        backdrop-blur-xl
                      "
                    >
                      <span
                        className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5"
                        aria-hidden="true"
                      >
                        <Check
                          className="h-4 w-4 text-[#CFE3FF]"
                          aria-hidden="true"
                        />
                      </span>

                      <p
                        className="
                          text-[15px] md:text-[16px] lg:text-[17px]
                          leading-[1.55]
                          text-[#D5DBE6]
                          opacity-90
                        "
                      >
                        {point}
                      </p>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </PageContainer>
    </section>
  );
}