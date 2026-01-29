

// "use client";

// import { motion } from "motion/react";
// import { CaseStudyBlock } from "./CaseStudyBlock";

// interface Project {
//   id: string;
//   title: string;
//   client: string;
//   description: string;
//   image: string;
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
//     <section className="relative px-6 md:px-12 lg:px-20 py-24 md:py-32 bg-[#050816] overflow-hidden">
//       {/* background spots */}
//       <div className="pointer-events-none absolute inset-0 opacity-60">
//         <div className="absolute -top-44 -left-40 h-96 w-96 bg-[radial-gradient(circle_at_center,_#3A7BFF55,_transparent_70%)] blur-3xl" />
//         <div className="absolute -bottom-44 -right-28 h-[28rem] w-[28rem] bg-[radial-gradient(circle_at_center,_#4CC2FF55,_transparent_70%)] blur-3xl" />
//       </div>

//       {/* subtle grid */}
//       <div className="pointer-events-none absolute inset-0 opacity-[0.10] [background-image:linear-gradient(rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.10)_1px,transparent_1px)] [background-size:72px_72px]" />

//       <div className="relative z-10 max-w-[1600px] mx-auto text-[#F5EFE7]">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
//           viewport={{ once: true }}
//           className="mb-16 md:mb-20"
//         >
//           <motion.div
//             className="mb-8 h-[2px] w-20 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]"
//             initial={{ width: 0 }}
//             whileInView={{ width: 80 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8, delay: 0.15 }}
//           />

//           <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 text-[#F2F4FA]">
//             Разбор лучших кейсов
//           </h2>

//           <p className="text-lg md:text-2xl text-[#C7CEDF] opacity-80 max-w-3xl leading-relaxed">
//             Показываем задачу, решение и результат — как это выглядит в реальном
//             продукте и почему это удобно клиентам.
//           </p>
//         </motion.div>

//         <div className="space-y-24 md:space-y-32">
//           {projects.map((project, index) => (
//             <CaseStudyBlock key={project.id} project={project} index={index} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { motion } from "motion/react";
import { CaseStudyBlock } from "./CaseStudyBlock";

interface Project {
  id: string;
  title: string;
  client: string;
  description: string;
  image: string;
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
  if (!projects?.length) return null;

  return (
    <section className="relative px-6 md:px-12 lg:px-20 py-20 md:py-24 bg-[#050816] overflow-hidden">
      {/* background spots (lighter) */}
      <div className="pointer-events-none absolute inset-0 opacity-50">
        <div className="absolute -top-44 -left-40 h-96 w-96 bg-[radial-gradient(circle_at_center,_#3A7BFF55,_transparent_70%)] blur-3xl" />
        <div className="absolute -bottom-44 -right-28 h-[28rem] w-[28rem] bg-[radial-gradient(circle_at_center,_#4CC2FF55,_transparent_70%)] blur-3xl" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto text-[#F5EFE7]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mb-10 md:mb-12"
        >
          <div className="mb-6 h-[2px] w-16 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[#F2F4FA] mb-4">
            Кейсы, которые лучше всего показывают наш подход
          </h2>
          <p className="text-base md:text-xl text-[#C7CEDF] opacity-80 max-w-3xl leading-relaxed">
            Коротко и по делу: что нужно было бизнесу, что мы сделали и какой
            эффект это даёт в реальном использовании.
          </p>
        </motion.div>

        {/* вместо space-y-32 делаем компактнее */}
        <div className="space-y-10 md:space-y-12">
          {projects.map((project, index) => (
            <CaseStudyBlock key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
