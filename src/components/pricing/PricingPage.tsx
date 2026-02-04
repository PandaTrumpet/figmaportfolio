
// "use client";

// import { useRef } from "react";
// import { useScroll } from "motion/react";

// import { PricingHero } from "./PricingHero";
// import { PricingPackagesSection } from "./PricingPackagesSection";
// import { PricingComparisonSection } from "./PricingComparisonSection";
// import { PricingAddonsSection } from "./PricingAddonsSection";
// import { PricingFAQSection } from "./PricingFAQSection";
// import { PricingFinalCTA } from "./PricingFinalCTA";

// export default function PricingPage() {
//   const containerRef = useRef<HTMLDivElement | null>(null);

//   useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   return (
//     <main
//       ref={containerRef}
//       className="relative min-h-screen overflow-x-clip bg-[#020410] text-slate-100"
//     >
//       {/* GLOBAL BACKGROUND */}
//       <div className="pointer-events-none absolute inset-0 -z-10">
//         {/* base gradient */}
//         <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#050814_0%,#050818_35%,#020410_100%)]" />

//         {/* global neon waves */}
//         <div
//           className="absolute -top-60 right-[-20%] h-[520px] w-[520px] rounded-full blur-3xl opacity-60
//                      bg-[radial-gradient(circle,rgba(76,194,255,0.85),transparent_60%)]"
//         />
//         <div
//           className="absolute top-[34%] left-[-22%] h-[640px] w-[640px] rounded-full blur-3xl opacity-50
//                      bg-[radial-gradient(circle,rgba(58,123,255,0.75),transparent_60%)]"
//         />
     
//         {/* global grid */}
//         <div
//           className="absolute inset-0 opacity-[0.10]"
//           style={{
//             backgroundImage:
//               "linear-gradient(rgba(51,65,85,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(51,65,85,0.25) 1px, transparent 1px)",
//             backgroundSize: "80px 80px",
//           }}
//         />
//       </div>

//       {/* Sections */}
//       <PricingHero />
//       <PricingPackagesSection />
//       <PricingComparisonSection />
//       <PricingAddonsSection />
//       <PricingFAQSection />
//       <PricingFinalCTA />
//     </main>
//   );
// }


"use client";

import { useRef } from "react";

import { PricingHero } from "./PricingHero";
import { PricingPackagesSection } from "./PricingPackagesSection";
import { PricingComparisonSection } from "./PricingComparisonSection";
import { PricingAddonsSection } from "./PricingAddonsSection";
import { PricingFAQSection } from "./PricingFAQSection";
import { PricingFinalCTA } from "./PricingFinalCTA";

export default function PricingPage() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <main
      ref={containerRef}
      className="relative min-h-screen overflow-x-clip bg-[#020410] text-slate-100"
    >
      {/* GLOBAL BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* base gradient */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#050814_0%,#050818_35%,#020410_100%)]" />

        {/* global neon waves */}
        <div
          className="absolute -top-60 right-[-20%] h-[520px] w-[520px] rounded-full blur-3xl opacity-60
                     bg-[radial-gradient(circle,rgba(76,194,255,0.85),transparent_60%)]"
        />
        <div
          className="absolute top-[34%] left-[-22%] h-[640px] w-[640px] rounded-full blur-3xl opacity-50
                     bg-[radial-gradient(circle,rgba(58,123,255,0.75),transparent_60%)]"
        />

        {/* global grid */}
        <div
          className="absolute inset-0 opacity-[0.10]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(51,65,85,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(51,65,85,0.25) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Sections */}
      <PricingHero />
      <PricingPackagesSection />
      <PricingComparisonSection />
      <PricingAddonsSection />
      <PricingFAQSection />
      <PricingFinalCTA />
    </main>
  );
}
