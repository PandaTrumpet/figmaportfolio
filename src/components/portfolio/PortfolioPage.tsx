"use client";

import { useMemo, useState } from "react";

import { projects, industries, types } from "@/src/data/portfolio";
import { PortfolioHero } from "./PortfolioHero";
import { PortfolioFilters } from "./PortfolioFilters";
import { ProjectsGridSection } from "./ProjectsGridSection";
import { FeaturedCaseStudiesSection } from "./FeaturedCaseStudiesSection";
import { PortfolioCTA } from "./PortfolioCTA";

export default function PortfolioPage() {
  const [selectedIndustry, setSelectedIndustry] = useState("All");
  const [selectedType, setSelectedType] = useState("All");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const industryMatch =
        selectedIndustry === "All" ||
        project.industry.includes(selectedIndustry);
      const typeMatch =
        selectedType === "All" || project.type.includes(selectedType);
      return industryMatch && typeMatch;
    });
  }, [selectedIndustry, selectedType]);

  const featuredProjects = useMemo(() => {
    return projects.filter((p) => p.featured && p.caseStudy);
  }, []);

  const resetFilters = () => {
    setSelectedIndustry("All");
    setSelectedType("All");
  };

  return (
    <div className="min-h-screen bg-[#F5EFE7]">
      <PortfolioHero />

      <PortfolioFilters
        industries={industries}
        types={types}
        selectedIndustry={selectedIndustry}
        selectedType={selectedType}
        onIndustryChange={setSelectedIndustry}
        onTypeChange={setSelectedType}
      />

      <ProjectsGridSection projects={filteredProjects} onReset={resetFilters} />

      {featuredProjects.length > 0 && (
        <FeaturedCaseStudiesSection projects={featuredProjects} />
      )}

      <PortfolioCTA />
    </div>
  );
}
