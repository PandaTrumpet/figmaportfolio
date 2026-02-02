// "use client";

// import { useRef } from "react";

// import dynamic from "next/dynamic";

// import { reviewsData } from "@/src/data/reviewsData";

// import { ReviewsHero } from "./ReviewsHero";
// import { ClientStoriesSection } from "./ClientStoriesSection";
// import { VideoTestimonialsSection } from "./VideoTestimonialsSection";
// import { ReviewsSliderSection } from "./ReviewsSliderSection";

// import { ReviewsFinalCTA } from "./ReviewsFinalCTA";
// import { ProofMetricsSection } from "./ProofMetricsSection";

// const ParticlesBackground = dynamic(
//   () =>
//     import("../../components/ParticlesBackground").then(
//       (m) => m.ParticlesBackground
//     ),
//   { ssr: false }
// );

// export default function ReviewsPage() {
//   const containerRef = useRef<HTMLDivElement | null>(null);




//   return (
//     <div ref={containerRef} className="min-h-screen bg-[#F5EFE7]">
//       <ReviewsHero data={reviewsData.hero}  />

//       <ClientStoriesSection stories={reviewsData.clientStories} />

//       {/* <VideoTestimonialsSection videos={reviewsData.videoTestimonials} /> */}

//       {/* <ReviewsSliderSection reviews={reviewsData.reviews} /> */}

//       {/* <PlatformRatingsSection platforms={reviewsData.platforms} /> */}
//       <ProofMetricsSection/>

//       <ReviewsFinalCTA cta={reviewsData.cta} Particles={ParticlesBackground} />
//     </div>
//   );
// }
"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";

import { reviewsData } from "@/src/data/reviewsData";

import { ReviewsHero } from "./ReviewsHero";
import { ClientStoriesSection } from "./ClientStoriesSection";
import { VideoTestimonialsSection } from "./VideoTestimonialsSection";
import { ReviewsSliderSection } from "./ReviewsSliderSection";
import { ReviewsFinalCTA } from "./ReviewsFinalCTA";
import { ProofMetricsSection } from "./ProofMetricsSection";

const ParticlesBackground = dynamic(
  () =>
    import("../../components/ParticlesBackground").then(
      (m) => m.ParticlesBackground,
    ),
  { ssr: false },
);

export default function ReviewsPage() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <main
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-[#020410] text-slate-100"
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
        {/* <div
          className="absolute bottom-[-30%] right-[-10%] h-[760px] w-[760px] rounded-full blur-3xl opacity-40
                     bg-[radial-gradient(circle,rgba(155,93,255,0.55),transparent_60%)]"
        /> */}

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
      <ReviewsHero data={reviewsData.hero} />

      <ClientStoriesSection stories={reviewsData.clientStories} />

      {/* <VideoTestimonialsSection videos={reviewsData.videoTestimonials} /> */}
      {/* <ReviewsSliderSection reviews={reviewsData.reviews} /> */}
      {/* <PlatformRatingsSection platforms={reviewsData.platforms} /> */}

      <ProofMetricsSection />

      <ReviewsFinalCTA cta={reviewsData.cta} Particles={ParticlesBackground} />
    </main>
  );
}
