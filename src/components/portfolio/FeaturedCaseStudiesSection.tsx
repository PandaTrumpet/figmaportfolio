// "use client";

// import { motion } from "motion/react";
// import { CaseStudyBlock } from "./CaseStudyBlock";
// import { PageContainer } from "../Layout/PageContainer";
// import { StaticImageData } from "next/image";

// interface Project {
//   id: string;
//   title: string;
//   client: string;
//   description: string;
//   imageLittle: string | StaticImageData;
//   imageBig?: string | StaticImageData;
//   industry: string[];
//   type: string[];
//   link?: string;
//   year: string;
//   featured?: boolean;
//   caseStudy?: {
//     challenge: string;
//     solution: string;
//     results: string[];
//     images: string[];
//   };
// }

// export function FeaturedCaseStudiesSection({
//   projects,
// }: {
//   projects: Project[];
// }) {
//   if (!projects?.length) return null;

//   return (
//     <section
//       className="relative  pt-10 pb-10
//         md:pt-14 md:pb-14
//         lg:pt-16 lg:pb-16 overflow-visible"
//     >
//       {/* LOCAL FX (clip only background, not content) */}
//       <div
//         className="
//           pointer-events-none absolute inset-0 -z-10 overflow-hidden
//           [mask-image:linear-gradient(to_bottom,transparent_0%,black_12%,black_88%,transparent_100%)]
//           [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_12%,black_88%,transparent_100%)]
//         "
//         aria-hidden="true"
//       >
//         {/* background spots (lighter) */}
//         <div className="absolute inset-0 opacity-50">
//           <div className="absolute -top-44 -left-40 h-96 w-96 bg-[radial-gradient(circle_at_center,_#3A7BFF55,_transparent_70%)] blur-3xl" />
//           <div className="absolute -bottom-44 -right-28 h-[28rem] w-[28rem] bg-[radial-gradient(circle_at_center,_#4CC2FF55,_transparent_70%)] blur-3xl" />
//         </div>

//         {/* optional soft grid (very subtle) */}
//         <div
//           className="absolute inset-0 opacity-[0.05]"
//           style={{
//             backgroundImage:
//               "linear-gradient(rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.10) 1px, transparent 1px)",
//             backgroundSize: "84px 84px",
//           }}
//         />
//       </div>

//       <PageContainer className="relative z-10 max-w-[1200px] text-[#F5EFE7]">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
//           viewport={{ once: true }}
//           className="mb-10 md:mb-12"
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
//             Кейсы, которые лучше всего показывают наш подход
//           </h2>

//           <p
//             className="  mt-4
//   text-white/75
//   leading-relaxed md:leading-[1.7]
//   max-w-[52ch] md:max-w-[60ch] lg:max-w-[66ch]
//   text-[clamp(0.98rem,0.55vw+0.88rem,1.15rem)]"
//           >
//             Коротко и по делу: что нужно было бизнесу, что мы сделали и какой
//             эффект это даёт в реальном использовании.
//           </p>
//         </motion.div>

//         {/* Case studies */}
//         <div className="space-y-10 md:space-y-12">
//           {projects.map((project, index) => (
//             <CaseStudyBlock key={project.id} project={project} index={index} />
//           ))}
//         </div>
//       </PageContainer>
//     </section>
//   );
// }

"use client";

import { motion, useReducedMotion } from "motion/react";
import { CaseStudyBlock } from "./CaseStudyBlock";
import { PageContainer } from "../Layout/PageContainer";
import { StaticImageData } from "next/image";
import { useTranslations } from "next-intl";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

interface Project {
  id: string;
  title: string;
  client: string;
  description: string;
  imageLittle: string | StaticImageData;
  imageBig?: string | StaticImageData;
  industry: string[];
  type: string[];
  link?: string;
  year: string;
  featured?: boolean;
  caseStudy?: {
    challenge: string;
    solution: string;
    results: string[];
    images: string[];
  };
}

export function FeaturedCaseStudiesSection({
  projects,
}: {
  projects: Project[];
}) {
  const t = useTranslations("featuredCaseStudiesSection");
  const reduce = useReducedMotion();

  if (!projects?.length) return null;

  return (
    <section
      className="relative pt-10 pb-10 md:pt-14 md:pb-14 lg:pt-16 lg:pb-16 overflow-visible"
      aria-labelledby="featured-case-studies-heading"
      aria-describedby="featured-case-studies-description"
    >
      <div
        className="
          pointer-events-none absolute inset-0 -z-10 overflow-hidden
          [mask-image:linear-gradient(to_bottom,transparent_0%,black_12%,black_88%,transparent_100%)]
          [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_12%,black_88%,transparent_100%)]
        "
        aria-hidden="true"
      >
        <div className="absolute inset-0 opacity-50">
          <div className="absolute -top-44 -left-40 h-96 w-96 bg-[radial-gradient(circle_at_center,_#3A7BFF55,_transparent_70%)] blur-3xl" />
          <div className="absolute -bottom-44 -right-28 h-[28rem] w-[28rem] bg-[radial-gradient(circle_at_center,_#4CC2FF55,_transparent_70%)] blur-3xl" />
        </div>

        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.10) 1px, transparent 1px)",
            backgroundSize: "84px 84px",
          }}
        />
      </div>

      <PageContainer className="relative z-10 max-w-[1200px] text-[#F5EFE7]">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: reduce ? 0 : 0.6, ease: EASE }}
          viewport={{ once: true }}
          className="mb-10 md:mb-12"
        >
          <h2
            id="featured-case-studies-heading"
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight md:leading-[1.15] text-slate-50 mb-3"
          >
            {t("title")}
          </h2>

          <p
            id="featured-case-studies-description"
            className="mt-4 text-white/75 leading-relaxed md:leading-[1.7] max-w-[52ch] md:max-w-[60ch] lg:max-w-[66ch] text-[clamp(0.98rem,0.55vw+0.88rem,1.15rem)]"
          >
            {t("description")}
          </p>
        </motion.div>

        <div
          className="space-y-10 md:space-y-12"
          role="list"
          aria-label={t("listAria")}
        >
          {projects.map((project, index) => (
            <div key={project.id} role="listitem">
              <CaseStudyBlock project={project} index={index} />
            </div>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}