// "use client";

// import { motion } from "motion/react";
// import { buildPricingData } from "@/src/data/pricingData";
// import { PricingCard } from "@/src/components/pricing/PricingCard";
// import { PageContainer } from "../Layout/PageContainer";
// import { useTranslations } from "next-intl";
// // import { TrustSignals } from "@/src/components/pricing/TrustSignals";

// export function PricingPackagesSection() {

//    const t = useTranslations("pricingData");
//     const pricingData = buildPricingData(t);
//   return (
//     <section
//       id="pricing-packages"
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
//         {/* spots */}
//         <div className="absolute inset-0 opacity-60">
//           <div className="absolute -top-40 -left-32 h-80 w-80 bg-[radial-gradient(circle_at_center,_#3A7BFF55,_transparent_70%)] blur-3xl" />
//           <div className="absolute -bottom-40 -right-10 h-96 w-96 bg-[radial-gradient(circle_at_center,_#4CC2FF55,_transparent_70%)] blur-3xl" />
//           <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-72 w-[520px] bg-[radial-gradient(circle_at_center,_#9B5DFF33,_transparent_70%)] blur-3xl" />
//         </div>

//         {/* subtle dots */}
//         <div className="absolute inset-0 opacity-[0.10]">
//           <div
//             className="h-full w-full"
//             style={{
//               backgroundImage:
//                 "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.55) 1px, transparent 0)",
//               backgroundSize: "56px 56px",
//               maskImage:
//                 "radial-gradient(circle at 50% 25%, black 0%, transparent 75%)",
//               WebkitMaskImage:
//                 "radial-gradient(circle at 50% 25%, black 0%, transparent 75%)",
//             }}
//           />
//         </div>

//         {/* safety fade */}
//         <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-b from-transparent to-[#020410]" />
//       </div>

//       <PageContainer className="relative z-10 max-w-[1200px]">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
//           viewport={{ once: true, margin: "-80px" }}
//           className="text-center mb-12 md:mb-16"
//         >

//           <h2
//             className="text-3xl
//   md:text-4xl
//   lg:text-5xl
//   xl:text-6xl
//   font-semibold
//   leading-tight
//   md:leading-[1.15]  text-slate-50 mb-3"
//           >
//             Выберите ваш пакет
//           </h2>

//           <p
//             className="  mt-4
//   text-white/75
//   leading-relaxed md:leading-[1.7]
//   max-w-[52ch] md:max-w-[60ch] lg:max-w-[66ch]
//   text-[clamp(0.98rem,0.55vw+0.88rem,1.15rem)] mx-auto "
//           >
//             Все пакеты включают полный цикл разработки
//           </p>
//         </motion.div>

//         {/* Pricing Grid */}
//         <div className="grid lg:grid-cols-3 gap-8 lg:gap-10 mb-14 md:mb-16">
//           {pricingData.packages.map((pkg, index) => (
//             <PricingCard key={pkg.name} package={pkg} index={index} />
//           ))}
//         </div>

//         {/* <TrustSignals /> */}
//       </PageContainer>
//     </section>
//   );
// }

"use client";

import { motion } from "motion/react";
import { buildPricingData } from "@/src/data/pricingData";
import { PricingCard } from "@/src/components/pricing/PricingCard";
import { PageContainer } from "../Layout/PageContainer";
import { useTranslations } from "next-intl";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function PricingPackagesSection() {
  const t = useTranslations("pricingData");
  const pricingData = buildPricingData(t);

  return (
    <section
      id="pricing-packages"
      aria-labelledby="pricing-packages-title"
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
        {/* spots */}
        <div className="absolute inset-0 opacity-60">
          <div className="absolute -top-40 -left-32 h-80 w-80 bg-[radial-gradient(circle_at_center,_#3A7BFF55,_transparent_70%)] blur-3xl" />
          <div className="absolute -bottom-40 -right-10 h-96 w-96 bg-[radial-gradient(circle_at_center,_#4CC2FF55,_transparent_70%)] blur-3xl" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-72 w-[520px] bg-[radial-gradient(circle_at_center,_#9B5DFF33,_transparent_70%)] blur-3xl" />
        </div>

        {/* subtle dots */}
        <div className="absolute inset-0 opacity-[0.10]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.55) 1px, transparent 0)",
              backgroundSize: "56px 56px",
              maskImage:
                "radial-gradient(circle at 50% 25%, black 0%, transparent 75%)",
              WebkitMaskImage:
                "radial-gradient(circle at 50% 25%, black 0%, transparent 75%)",
            }}
          />
        </div>

        {/* safety fade */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-b from-transparent to-[#020410]" />
      </div>

      <PageContainer className="relative z-10 max-w-[1200px]">
        {/* Semantic anchors for SR */}
        <div className="sr-only">
          <h2 id="pricing-packages-title">{t("packagesSection.title")}</h2>
          <p id="pricing-packages-subtitle">{t("packagesSection.subtitle")}</p>
        </div>

        {/* Visual header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight md:leading-[1.15] text-slate-50 mb-3">
            {t("packagesSection.title")}
          </h2>

          <p
            className="mt-4 text-white/75 leading-relaxed md:leading-[1.7] max-w-[52ch] md:max-w-[60ch] lg:max-w-[66ch] text-[clamp(0.98rem,0.55vw+0.88rem,1.15rem)] mx-auto"
            id="pricing-packages-subtitle-visible"
          >
            {t("packagesSection.subtitle")}
          </p>
        </motion.div>

        {/* Pricing Grid (semantic list) */}
        <div
          role="list"
          aria-label={t("packagesSection.listAria")}
          className="grid lg:grid-cols-3 gap-8 lg:gap-10 mb-14 md:mb-16"
        >
          {pricingData.packages.map((pkg, index) => (
            <div key={pkg.name} role="listitem">
              <PricingCard package={pkg} index={index} />
            </div>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}