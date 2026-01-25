import { CasePreview } from "@/src/components/CasePreview";
import { FinalCTA } from "@/src/components/FinalCTA";
import { FocusSection } from "@/src/components/FocusSection";

import { Hero } from "@/src/components/Hero";

import { ProcessSection } from "@/src/components/ProcessSection";
import { TestimonialsSection } from "@/src/components/TestimonialsSection";
import { WhyUsSection } from "@/src/components/WhyUsSection";



export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5EFE7]">
     
      <Hero />
      <FocusSection />
      <WhyUsSection />
      {/* <CasePreview /> */}
      <ProcessSection />
      <TestimonialsSection />
      <FinalCTA />
      
    </div>
  );
}
