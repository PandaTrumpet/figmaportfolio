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
      (m) => m.ParticlesBackground
    ),
  { ssr: false }
);

export default function ReviewsPage() {
  const containerRef = useRef<HTMLDivElement | null>(null);




  return (
    <div ref={containerRef} className="min-h-screen bg-[#F5EFE7]">
      <ReviewsHero data={reviewsData.hero}  />

      <ClientStoriesSection stories={reviewsData.clientStories} />

      {/* <VideoTestimonialsSection videos={reviewsData.videoTestimonials} /> */}

      {/* <ReviewsSliderSection reviews={reviewsData.reviews} /> */}

      {/* <PlatformRatingsSection platforms={reviewsData.platforms} /> */}
      <ProofMetricsSection/>

      <ReviewsFinalCTA cta={reviewsData.cta} Particles={ParticlesBackground} />
    </div>
  );
}
