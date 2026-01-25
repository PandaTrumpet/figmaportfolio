"use client";

import { aboutData } from "@/src/data/aboutData";
import { AboutHero } from "./AboutHero";
import { MissionSection } from "./MissionSection";
import { ValuesSection } from "./ValuesSection";
import { DifferenceSection } from "./DifferenceSection";
import { TeamSection } from "./TeamSection";
import { AchievementsSection } from "./AchievementsSection";
import { CtaSection } from "./CtaSection";



export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F5EFE7]">
      <AboutHero data={aboutData.hero} />
      {/* <MissionSection data={aboutData.mission} /> */}
      {/* <ValuesSection values={aboutData.values} /> */}
      {/* <DifferenceSection data={aboutData.difference} /> */}
      {/* <TeamSection team={aboutData.team} /> */}
      {/* <AchievementsSection */}
        {/* achievements={aboutData.achievements} */}
        {/* recognition={aboutData.recognition} */}
      {/* /> */}
      {/* <CtaSection /> */}
    </div>
  );
}
