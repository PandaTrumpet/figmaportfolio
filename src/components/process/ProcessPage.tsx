"use client";

import { useRef } from "react";
import { useScroll, useTransform } from "motion/react";

import { processData } from "@/src/data/processData";

import { ProcessHero } from "./ProcessHero";
import { ProcessSteps } from "./ProcessSteps";
import { ProcessTimeline } from "./ProcessTimeline";
import { DeliverablesSection } from "./DeliverablesSection";

import { ProcessCTA } from "./ProcessCTA";
import { GuaranteeSection } from "./GuaranteeSection";

export default function ProcessPage() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Если где-то понадобится дальше — оставил
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#F5EFE7]">
      <ProcessHero data={processData.hero} opacity={heroOpacity} />
      <ProcessSteps steps={processData.steps} />
      <ProcessTimeline timeline={processData.timeline} />
      <DeliverablesSection deliverables={processData.deliverables} />
      <GuaranteeSection guarantee={processData.guarantee} />
      <ProcessCTA />
    </div>
  );
}
