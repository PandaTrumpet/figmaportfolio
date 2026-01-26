"use client";

import { ProjectCard } from "./ProjectCard";

export function ProjectsGridSection({
  projects,
  onReset,
}: {
  projects: any[];
  onReset: () => void;
}) {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-20 md:py-32">
      <div className="max-w-[1600px] mx-auto">
        <div className="mb-12">
          <p className="text-xl opacity-60">
            Showing {projects.length}{" "}
            {projects.length === 1 ? "project" : "projects"}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {projects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-2xl opacity-40">
              No projects found with these filters
            </p>
            <button
              onClick={onReset}
              className="mt-6 px-8 py-4 border-2 border-[#050608] hover:bg-[#050608] hover:text-[#F5EFE7] transition-all"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
