"use client";

import { useRef } from "react";
import { useScroll, useTransform } from "motion/react";
import dynamic from "next/dynamic";

import { reviewsData } from "@/src/data/reviewsData";

import { ReviewsHero } from "./ReviewsHero";
import { ClientStoriesSection } from "./ClientStoriesSection";
import { VideoTestimonialsSection } from "./VideoTestimonialsSection";
import { ReviewsSliderSection } from "./ReviewsSliderSection";
import { PlatformRatingsSection } from "./PlatformRatingsSection";
import { ReviewsFinalCTA } from "./ReviewsFinalCTA";

const ParticlesBackground = dynamic(
  () =>
    import("../../components/ParticlesBackground").then(
      (m) => m.ParticlesBackground
    ),
  { ssr: false }
);

export default function ReviewsPage() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#F5EFE7]">
      <ReviewsHero data={reviewsData.hero} opacity={opacity} />

      <ClientStoriesSection stories={reviewsData.clientStories} />

      <VideoTestimonialsSection videos={reviewsData.videoTestimonials} />

      <ReviewsSliderSection reviews={reviewsData.reviews} />

      <PlatformRatingsSection platforms={reviewsData.platforms} />

      <ReviewsFinalCTA cta={reviewsData.cta} Particles={ParticlesBackground} />
    </div>
  );
}
