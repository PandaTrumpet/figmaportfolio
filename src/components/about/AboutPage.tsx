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

   <main className="relative min-h-screen overflow-x-hidden bg-[#020410] text-slate-100">
     {/* GLOBAL BACKGROUND */}
     <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
       <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#050814_0%,#050818_35%,#020410_100%)]" />

       <div className="absolute -top-60 right-[-20%] h-[520px] w-[520px] rounded-full blur-3xl opacity-60
                       bg-[radial-gradient(circle,rgba(76,194,255,0.85),transparent_60%)]" />
       <div className="absolute top-[35%] left-[-20%] h-[620px] w-[620px] rounded-full blur-3xl opacity-50
                       bg-[radial-gradient(circle,rgba(58,123,255,0.75),transparent_60%)]" />
       <div className="absolute bottom-[-30%] right-[-10%] h-[720px] w-[720px] rounded-full blur-3xl opacity-40
                       bg-[radial-gradient(circle,rgba(155,93,255,0.55),transparent_60%)]" />

       <div
         className="absolute inset-0 opacity-[0.10]"
         style={{
           backgroundImage:
             "linear-gradient(rgba(51,65,85,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(51,65,85,0.25) 1px, transparent 1px)",
           backgroundSize: "80px 80px",
         }}
       />
     </div>

      <AboutHero data={aboutData.hero} />
      <MissionSection data={aboutData.mission} />
      <ValuesSection values={aboutData.values} />
      <DifferenceSection data={aboutData.difference} />
      {/* <TeamSection team={aboutData.team} /> */}
      <AchievementsSection
        achievements={aboutData.achievements}
        recognition={aboutData.recognition}
      />
      <CtaSection />

 </main>
  );
}
