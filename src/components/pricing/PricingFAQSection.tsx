// "use client";

// import { motion } from "motion/react";
// import { pricingData } from "@/src/data/pricingData";
// import { FAQItem } from "@/src/components/pricing/FAQItem";
// import { PageContainer } from "../Layout/PageContainer";

// const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

// export function PricingFAQSection() {
//   return (
//     <section
//       id="faq"
//       className="relative  pt-10 pb-10
//         md:pt-14 md:pb-14
//         lg:pt-16 lg:pb-16 overflow-visible"
//     >
//       {/* LOCAL FX (clip only background, not content) */}
//       <div
//         className="
//           pointer-events-none absolute inset-0 -z-10 overflow-hidden
//           [mask-image:linear-gradient(to_bottom,transparent_0%,black_14%,black_88%,transparent_100%)]
//           [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_14%,black_88%,transparent_100%)]
//         "
//         aria-hidden="true"
//       >
//         {/* background spots */}
//         <div className="absolute inset-0 opacity-60">
//           <div className="absolute -top-40 -left-32 h-80 w-80 bg-[radial-gradient(circle_at_center,_#3A7BFF55,_transparent_70%)] blur-3xl" />
//           <div className="absolute -bottom-44 -right-12 h-96 w-96 bg-[radial-gradient(circle_at_center,_#4CC2FF55,_transparent_70%)] blur-3xl" />
//           <div className="absolute top-1/2 left-1/2 h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_at_center,_#9B5DFF33,_transparent_70%)] blur-3xl" />
//         </div>

//         {/* safety fade */}
//         <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-b from-transparent to-[#020410]" />
//       </div>

//       <PageContainer className="relative z-10 max-w-[980px] text-[#F5EFE7]">
//         <motion.div
//           initial={{ opacity: 0, y: 28 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, ease: EASE }}
//           viewport={{ once: true }}
//           className="text-center mb-10 md:mb-14"
//         >
//           {/* <motion.div
//             className="mx-auto mb-6 h-[2px] w-20 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]"
//             initial={{ width: 0 }}
//             whileInView={{ width: 80 }}
//             transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
//             viewport={{ once: true }}
//           /> */}

//           <h2
//             className="text-3xl
//   md:text-4xl
//   lg:text-5xl
//   xl:text-6xl
//   font-semibold
//   leading-tight
//   md:leading-[1.15]  text-slate-50 mb-3"
//           >
//             {pricingData.faq.title}
//           </h2>

//           <p
//             className="  mt-4
//   text-white/75
//   leading-relaxed md:leading-[1.7]
//   max-w-[52ch] md:max-w-[60ch] lg:max-w-[66ch]
//   text-[clamp(0.98rem,0.55vw+0.88rem,1.15rem)] mx-auto "
//           >
//             {pricingData.faq.subtitle}
//           </p>
//         </motion.div>

//         <div className="space-y-4 md:space-y-5">
//           {pricingData.faq.items.map((item, index) => (
//             <FAQItem key={index} item={item} index={index} />
//           ))}
//         </div>
//       </PageContainer>

//       {/* decorative (keep, but don't clip) */}
//       <motion.div
//         className="pointer-events-none absolute top-14 right-4 md:right-10 z-0 h-20 w-20 rounded-3xl border border-[#3A7BFF33] bg-[radial-gradient(circle_at_top,_#3A7BFF33,_transparent_70%)] opacity-50"
//         animate={{ rotate: 360, scale: [1, 1.08, 1] }}
//         transition={{
//           rotate: { duration: 26, repeat: Infinity, ease: "linear" },
//           scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
//         }}
//         aria-hidden="true"
//       />
//     </section>
//   );
// }

"use client";

import { motion, useReducedMotion } from "motion/react";
import { buildPricingData } from "@/src/data/pricingData";
import { FAQItem } from "@/src/components/pricing/FAQItem";
import { PageContainer } from "../Layout/PageContainer";
import { useTranslations } from "next-intl";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function PricingFAQSection() {
  const t = useTranslations("pricingData");
  const data = buildPricingData(t);
  const reduce = useReducedMotion();

  const titleId = "pricing-faq-title";
  const descId = "pricing-faq-desc";

  return (
    <section
      id="faq"
      aria-labelledby={titleId}
      aria-describedby={descId}
      className="relative pt-10 pb-10 md:pt-14 md:pb-14 lg:pt-16 lg:pb-16 overflow-visible"
    >
      {/* LOCAL FX (decorative) */}
      <div
        className="
          pointer-events-none absolute inset-0 -z-10 overflow-hidden
          [mask-image:linear-gradient(to_bottom,transparent_0%,black_14%,black_88%,transparent_100%)]
          [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_14%,black_88%,transparent_100%)]
        "
        aria-hidden="true"
      >
        <div className="absolute inset-0 opacity-60">
          <div className="absolute -top-40 -left-32 h-80 w-80 bg-[radial-gradient(circle_at_center,_#3A7BFF55,_transparent_70%)] blur-3xl" />
          <div className="absolute -bottom-44 -right-12 h-96 w-96 bg-[radial-gradient(circle_at_center,_#4CC2FF55,_transparent_70%)] blur-3xl" />
          <div className="absolute top-1/2 left-1/2 h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_at_center,_#9B5DFF33,_transparent_70%)] blur-3xl" />
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-b from-transparent to-[#020410]" />
      </div>

      <PageContainer className="relative z-10 max-w-[980px] text-[#F5EFE7]">
        {/* Semantic anchors */}
        <div className="sr-only">
          <h2 id={titleId}>{data.faq.title}</h2>
          <p id={descId}>{data.faq.subtitle}</p>
        </div>

        <motion.div
          initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight md:leading-[1.15] text-slate-50 mb-3">
            {data.faq.title}
          </h2>

          <p
            className="mt-4 text-white/75 leading-relaxed md:leading-[1.7]
              max-w-[52ch] md:max-w-[60ch] lg:max-w-[66ch]
              text-[clamp(0.98rem,0.55vw+0.88rem,1.15rem)] mx-auto"
          >
            {data.faq.subtitle}
          </p>
        </motion.div>

        {/* FAQ list */}
        <div
          role="list"
          aria-label={t("faqSection.listAria")}
          className="space-y-4 md:space-y-5"
        >
          {data.faq.items.map((item, index) => (
            <div role="listitem" key={`${item.question}-${index}`}>
              <FAQItem item={item} index={index} />
            </div>
          ))}
        </div>
      </PageContainer>

      {/* decorative (respect reduced motion) */}
      <motion.div
        className="pointer-events-none absolute top-14 right-4 md:right-10 z-0 h-20 w-20 rounded-3xl border border-[#3A7BFF33] bg-[radial-gradient(circle_at_top,_#3A7BFF33,_transparent_70%)] opacity-50"
        animate={reduce ? undefined : { rotate: 360, scale: [1, 1.08, 1] }}
        transition={
          reduce
            ? undefined
            : {
                rotate: { duration: 26, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              }
        }
        aria-hidden="true"
      />
    </section>
  );
}