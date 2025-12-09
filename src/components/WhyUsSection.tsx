"use client";

import { useEffect, useRef, useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const reasons = [
  {
    subtitle: "We Understand Local Context",
    description:
      "Built for the Israeli market, we know what resonates with your audience and how to communicate authentically.",
    image:
      "https://images.unsplash.com/photo-1753162658596-2ccba5e4246a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHRlYW0lMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc2NTI2OTMwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    imageAlt: "Creative team collaboration",
    reverse: false,
  },
  {
    subtitle: "Strategy Before Design",
    description:
      "Every pixel serves a purpose. We start with your business goals and build experiences that deliver results.",
    image:
      "https://images.unsplash.com/photo-1650978813673-df28319b04f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kcyUyMHdvcmtpbmclMjBsYXB0b3B8ZW58MXx8fHwxNzY1MjkzNTgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    imageAlt: "Hands working on laptop",
    reverse: true,
  },
  {
    subtitle: "Built to Scale",
    description:
      "Our systems grow with you. Clean code, thoughtful architecture, and sustainable design practices.",
    image:
      "https://images.unsplash.com/photo-1623679072629-3aaa0192a391?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc2NTI0MjA1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    imageAlt: "Modern workspace",
    reverse: false,
  },
  {
    subtitle: "Premium Without Pretense",
    description:
      "Elegant solutions that feel accessible. We create premium experiences that welcome everyone.",
    image:
      "https://images.unsplash.com/photo-1633286382418-4181cb81a6d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwb2ZmaWNlJTIwc3BhY2V8ZW58MXx8fHwxNzY1MjkzNTgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    imageAlt: "Minimalist office space",
    reverse: true,
  },
];

function Block({
  reason,
  index,
}: {
  reason: (typeof reasons)[0];
  index: number;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const blockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (blockRef.current) {
      observer.observe(blockRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={blockRef}
      className={`grid md:grid-cols-2 gap-8 md:gap-16 items-center transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Text Block */}
      <div className={`space-y-6 ${reason.reverse ? "md:order-2" : ""}`}>
        <div className="w-12 h-[2px] bg-[#050608]" />
        <h3 className="text-3xl md:text-4xl lg:text-5xl leading-tight">
          {reason.subtitle}
        </h3>
        <p className="text-lg md:text-xl opacity-70 leading-relaxed max-w-md">
          {reason.description}
        </p>
      </div>

      {/* Image Block */}
      <div className={`relative ${reason.reverse ? "md:order-1" : ""}`}>
        <div className="aspect-[4/3] overflow-hidden">
          <ImageWithFallback
            src={reason.image}
            alt={reason.imageAlt}
            className="w-full h-full object-cover"
          />
        </div>
        {/* Brutalist accent */}
        <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-[#050608] opacity-20 pointer-events-none" />
      </div>
    </div>
  );
}

export function WhyUsSection() {
  return (
    <section
      id="why-us"
      className="px-6 md:px-12 lg:px-20 py-24 md:py-32 bg-white"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="mb-20 md:mb-28">
          <div className="w-16 h-[2px] bg-[#050608] mb-8" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight max-w-3xl">
            Why Israeli Companies Choose Us
          </h2>
        </div>

        {/* Alternating Blocks */}
        <div className="space-y-24 md:space-y-32">
          {reasons.map((reason, index) => (
            <Block key={index} reason={reason} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
