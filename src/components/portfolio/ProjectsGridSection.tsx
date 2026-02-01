
// "use client";

// import { ProjectCard } from "./ProjectCard";
//  interface Project {
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
// export function ProjectsGridSection({ projects }: { projects: Project[] }) {
//   return (
//     <section className="relative px-6 md:px-12 lg:px-20 py-20 md:py-32 bg-[#050816] overflow-hidden">
//       {/* background spots */}
//       <div className="pointer-events-none absolute inset-0 opacity-60">
//         <div className="absolute -top-44 -left-40 h-96 w-96 bg-[radial-gradient(circle_at_center,_#3A7BFF55,_transparent_70%)] blur-3xl" />
//         <div className="absolute -bottom-44 -right-32 h-[30rem] w-[30rem] bg-[radial-gradient(circle_at_center,_#4CC2FF55,_transparent_70%)] blur-3xl" />
//       </div>

//       {/* subtle grid */}
//       <div className="pointer-events-none absolute inset-0 opacity-[0.10] [background-image:linear-gradient(rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.10)_1px,transparent_1px)] [background-size:72px_72px]" />

//       <div className="relative z-10 max-w-[1600px] mx-auto">
//         {/* Counter */}
//         <div className="mb-10 md:mb-14">
//           <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 backdrop-blur-xl">
//             <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#3A7BFF] to-[#4CC2FF]" />
//             <p className="text-sm md:text-base text-[#C7CEDF]">
//               Показано проектов:{" "}
//               <span className="text-[#F2F4FA] font-medium">
//                 {projects.length}
//               </span>
//             </p>
//           </div>
//         </div>

//         {/* Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
//           {projects.map((project, index) => (
//             <ProjectCard key={project.id} project={project} index={index} />
//           ))}
//         </div>

//         {/* Empty state */}
//         {projects.length === 0 && (
//           <div className="text-center py-20">
//             <p className="text-2xl text-[#C7CEDF] opacity-50">
//               Проекты не найдены
//             </p>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }


"use client";

import { ProjectCard } from "./ProjectCard";

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

export function ProjectsGridSection({ projects }: { projects: Project[] }) {
  return (
    <section className="relative px-6 md:px-12 lg:px-20 py-20 md:py-32 overflow-visible">
      {/* LOCAL FX (clip only background, not content) */}
      <div
        className="
      pointer-events-none absolute inset-0 -z-10 overflow-hidden
      [mask-image:linear-gradient(to_bottom,transparent_0%,black_14%,black_86%,transparent_100%)]
      [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_14%,black_86%,transparent_100%)]
    "
      >
        {/* background spots */}
        <div className="absolute inset-0 opacity-60">
          <div className="absolute -top-44 -left-40 h-96 w-96 bg-[radial-gradient(circle_at_center,_#3A7BFF55,_transparent_70%)] blur-3xl" />
          <div className="absolute -bottom-44 -right-32 h-[30rem] w-[30rem] bg-[radial-gradient(circle_at_center,_#4CC2FF55,_transparent_70%)] blur-3xl" />
        </div>

        {/* subtle grid (softer) */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.10) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto">
        {/* Counter */}
        <div className="mb-10 md:mb-14">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#3A7BFF] to-[#4CC2FF]" />
            <p className="text-sm md:text-base text-[#C7CEDF]">
              Показано проектов:{" "}
              <span className="text-[#F2F4FA] font-medium">
                {projects.length}
              </span>
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Empty state */}
        {projects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-2xl text-[#C7CEDF] opacity-50">
              Проекты не найдены
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
