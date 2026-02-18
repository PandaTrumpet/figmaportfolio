// import { CasePreview } from "@/src/components/CasePreview";
import { FinalCTA } from "@/src/components/FinalCTA";
import { FocusSection } from "@/src/components/FocusSection";

import { Hero } from "@/src/components/Hero";

import { ProcessSection } from "@/src/components/ProcessSection";
import { TestimonialsSection } from "@/src/components/TestimonialsSection";
import { WhyUsSection } from "@/src/components/WhyUsSection";



export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-[#020410] text-slate-100">
      {/* GLOBAL BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* базовый градиент страницы */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#050814_0%,#050818_35%,#020410_100%)]" />

        {/* большие “волны”, общие для всей страницы */}
        <div
          className="absolute -top-60 right-[-20%] h-[520px] w-[520px] rounded-full blur-3xl opacity-60
                        bg-[radial-gradient(circle,rgba(76,194,255,0.85),transparent_60%)]"
        />
        <div
          className="absolute top-[35%] left-[-20%] h-[620px] w-[620px] rounded-full blur-3xl opacity-50
                        bg-[radial-gradient(circle,rgba(58,123,255,0.75),transparent_60%)]"
        />
     
        {/* единая сетка на всю страницу */}
        <div
          className="absolute inset-0 opacity-[0.10]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(51,65,85,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(51,65,85,0.25) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>
      <Hero />
      <FocusSection />
      <WhyUsSection />
      {/* <CasePreview /> */}
      <ProcessSection />
      <TestimonialsSection />
      <FinalCTA />
    </main>
  );
}
