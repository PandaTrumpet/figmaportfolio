"use client";

import { useRef } from "react";
import { useScroll } from "motion/react";

import { PricingHero } from "./PricingHero";
import { PricingPackagesSection } from "./PricingPackagesSection";
import { PricingComparisonSection } from "./PricingComparisonSection";
import { PricingAddonsSection } from "./PricingAddonsSection";
import { PricingFAQSection } from "./PricingFAQSection";
import { PricingFinalCTA } from "./PricingFinalCTA";

export default function PricingPage() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // NOTE: scrollYProgress используется внутри секций через props/локально,
  // но если позже понадобится общий прогресс — он уже доступен тут.
  useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef} className="min-h-screen bg-[#F5EFE7]">
      <PricingHero />
      <PricingPackagesSection />
      <PricingComparisonSection />
      <PricingAddonsSection />
      <PricingFAQSection />
      <PricingFinalCTA />
    </div>
  );
}
