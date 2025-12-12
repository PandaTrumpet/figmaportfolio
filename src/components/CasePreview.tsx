// // Старый исправленный   варинт с светлым background
// "use client";

// import { useState } from "react";
// import { ImageWithFallback } from "./figma/ImageWithFallback";
// import { CaseStudyDetail } from "./CaseStudyDetail";
// import { caseStudies } from "../data/caseStudies";

// export function CasePreview() {
//   const [hoveredCase, setHoveredCase] = useState<number | null>(null);
//   const [selectedCaseIndex, setSelectedCaseIndex] = useState<number | null>(
//     null
//   );

//   const handleNext = () => {
//     if (selectedCaseIndex !== null) {
//       setSelectedCaseIndex((selectedCaseIndex + 1) % caseStudies.length);
//     }
//   };

//   const handlePrev = () => {
//     if (selectedCaseIndex !== null) {
//       setSelectedCaseIndex(
//         selectedCaseIndex === 0 ? caseStudies.length - 1 : selectedCaseIndex - 1
//       );
//     }
//   };

//   return (
//     <section
//       id="cases"
//       className="px-6 md:px-12 lg:px-20 py-24 md:py-32 bg-[#F5EFE7]"
//     >
//       <div className="max-w-[1600px] mx-auto">
//         {/* Section Header */}
//         <div className="mb-16 md:mb-20">
//           <div className="w-16 h-[2px] bg-[#050608] mb-8" />
//           <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight max-w-3xl">
//             Recent Work
//           </h2>
//           <p className="text-lg md:text-xl opacity-70 mt-6 max-w-2xl">
//             Real results for real businesses. Here&apos;s what happens when
//             strategy meets craft.
//           </p>
//         </div>

//         {/* Case Cards */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {caseStudies.map((caseItem, index) => (
//             <div
//               key={caseItem.id}
//               className={`group cursor-pointer transition-all duration-300 ${
//                 hoveredCase === index ? "-translate-y-2" : ""
//               }`}
//               onMouseEnter={() => setHoveredCase(index)}
//               onMouseLeave={() => setHoveredCase(null)}
//               onClick={() => setSelectedCaseIndex(index)}
//             >
//               {/* Screenshot */}
//               <div
//                 className={`aspect-[3/4] overflow-hidden mb-6 transition-all duration-300 ${
//                   hoveredCase === index
//                     ? "shadow-[0_20px_60px_rgba(5,6,8,0.2)] border-2 border-[#050608]"
//                     : "border-2 border-transparent"
//                 }`}
//               >
//                 <ImageWithFallback
//                   src={caseItem.heroImage}
//                   alt={caseItem.title}
//                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//                 />
//               </div>

//               {/* Label */}
//               <div className="space-y-2">
//                 <p className="text-sm uppercase tracking-wider opacity-50">
//                   {caseItem.industry} • {caseItem.year}
//                 </p>
//                 <p className="text-xl">{caseItem.tagline}</p>
//                 <div className="w-8 h-[1px] bg-[#050608] opacity-30" />
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* View All Link */}
//         <div className="mt-16 text-center">
//           <p className="text-sm uppercase tracking-wider opacity-50 mb-4">
//             Click any project to see the full story
//           </p>
//         </div>
//       </div>

//       {/* Case Study Detail Modal */}
//       {selectedCaseIndex !== null && (
//         <CaseStudyDetail
//           caseStudy={caseStudies[selectedCaseIndex]}
//           key={caseStudies[selectedCaseIndex].id}
//           onClose={() => setSelectedCaseIndex(null)}
//           onNext={handleNext}
//           onPrev={handlePrev}
//         />
//       )}
//     </section>
//   );
// }




"use client";

import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { CaseStudyDetail } from "./CaseStudyDetail";
import { caseStudies } from "../data/caseStudies";

export function CasePreview() {
  const [hoveredCase, setHoveredCase] = useState<number | null>(null);
  const [selectedCaseIndex, setSelectedCaseIndex] = useState<number | null>(
    null
  );

  const handleNext = () => {
    if (selectedCaseIndex !== null) {
      setSelectedCaseIndex((selectedCaseIndex + 1) % caseStudies.length);
    }
  };

  const handlePrev = () => {
    if (selectedCaseIndex !== null) {
      setSelectedCaseIndex(
        selectedCaseIndex === 0 ? caseStudies.length - 1 : selectedCaseIndex - 1
      );
    }
  };

  return (
    <section
      id="cases"
      className="
        relative
        px-6 md:px-12 lg:px-20
        py-32 md:py-40
        bg-[#050608]
        bg-gradient-to-b from-[#050608] via-[#050814] to-[#050608]
        overflow-hidden
      "
    >
      {/* Tel-Aviv Night Waves glows */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -top-40 left-1/3 w-[520px] h-[520px] rounded-full bg-[#2EE6FF] blur-[180px] opacity-25" />
        <div className="absolute bottom-[-200px] right-1/4 w-[600px] h-[600px] rounded-full bg-[#4CC2FF] blur-[200px] opacity-20" />
        <div className="absolute top-1/3 -left-40 w-[440px] h-[440px] rounded-full bg-[#A5B4FC] blur-[200px] opacity-15" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto">
        {/* Section Header */}
        <div className="mb-20 md:mb-24">
          <div className="w-24 h-[2px] bg-[#2EE6FF] mb-8 opacity-90 shadow-[0_0_18px_rgba(46,230,255,1)]" />

          <h2
            className="
              text-4xl md:text-5xl lg:text-6xl xl:text-7xl
              leading-tight tracking-tight text-white
            "
          >
            Recent Work
          </h2>

          <p className="text-base md:text-lg lg:text-xl text-white/70 mt-6 max-w-2xl">
            Real results for real businesses — brought to life through premium
            UI, strategy, and cinematic Tel-Aviv night aesthetics.
          </p>
        </div>

        {/* Case Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {caseStudies.map((caseItem, index) => (
            <button
              type="button"
              key={caseItem.id}
              className={`
                group relative text-left rounded-2xl overflow-hidden
                cursor-pointer transition-all duration-700
                backdrop-blur-xl bg-white/5 border border-white/10
                shadow-[0_20px_60px_rgba(0,0,0,0.55)]
                focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2EE6FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050608]
                ${hoveredCase === index ? "-translate-y-3 scale-[1.02]" : ""}
              `}
              onMouseEnter={() => setHoveredCase(index)}
              onMouseLeave={() => setHoveredCase(null)}
              onClick={() => setSelectedCaseIndex(index)}
            >
              {/* Neon border on hover */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 border border-[#2EE6FF]/80 rounded-2xl mix-blend-screen shadow-[0_0_25px_#2EE6FF]" />
              </div>

              {/* Screenshot */}
              {/* <div className="relative aspect-[3/4] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050608]/75" />

                <ImageWithFallback
                  src={caseItem.heroImage}
                  alt={caseItem.title}
                  className="
                    w-full h-full object-cover
                    transition-all duration-[900ms]
                    group-hover:scale-[1.12]
                    group-hover:brightness-[1.15]
                    group-hover:saturate-150
                  "
                />
              </div> */}
              {/* Screenshot */}
              <div className="relative aspect-[3/4] overflow-hidden">
                {/* Holographic reflection */}
                <div
                  className="
      pointer-events-none
      absolute inset-0 z-20
      opacity-0 group-hover:opacity-100
      transition-opacity duration-700
    "
                >
                  <div
                    className="
        absolute inset-0
        bg-[linear-gradient(120deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.35)_35%,rgba(255,255,255,0)_70%)]
        mix-blend-screen
        blur-[18px]
        translate-x-[-120%]
        group-hover:translate-x-[120%]
        transition-transform duration-[1300ms] ease-out
      "
                  />
                  {/* Subtle holographic iridescent tint */}
                  <div
                    className="
        absolute inset-0
        bg-[radial-gradient(circle_at_30%_20%,rgba(46,230,255,0.35),transparent_70%)]
        opacity-50
        mix-blend-overlay
      "
                  />
                </div>

                {/* Dark gradient at the bottom */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050608]/75 pointer-events-none" />

                {/* Image */}
                <ImageWithFallback
                  src={caseItem.heroImage}
                  alt={caseItem.title}
                  className="
      w-full h-full object-cover
      transition-all duration-[900ms]
      group-hover:scale-[1.12]
      group-hover:brightness-[1.15]
      group-hover:saturate-150
    "
                />
              </div>

              {/* Text */}
              <div className="p-6 space-y-3 text-white">
                <p className="text-[11px] md:text-xs uppercase tracking-[0.22em] text-white/55">
                  {caseItem.industry} • {caseItem.year}
                </p>

                <p className="text-lg md:text-xl leading-snug">
                  {caseItem.tagline}
                </p>

                <div className="w-10 h-[1px] bg-white/15" />
              </div>
            </button>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-20 text-center">
          <p className="text-xs md:text-sm uppercase tracking-[0.35em] text-white/40 mb-3">
            tap any project
          </p>
          <p className="text-sm md:text-base text-white/70">
            to open the full case study with metrics, process, visuals & UX
            decisions.
          </p>
        </div>
      </div>

      {/* Modal */}
      {selectedCaseIndex !== null && (
        <CaseStudyDetail
          key={caseStudies[selectedCaseIndex].id}
          caseStudy={caseStudies[selectedCaseIndex]}
          onClose={() => setSelectedCaseIndex(null)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </section>
  );
}
