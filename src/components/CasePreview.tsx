"use client";

import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { CaseStudyDetail } from './CaseStudyDetail';
import { caseStudies } from '../data/caseStudies';

export function CasePreview() {
  const [hoveredCase, setHoveredCase] = useState<number | null>(null);
  const [selectedCaseIndex, setSelectedCaseIndex] = useState<number | null>(null);

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
    <section id="cases" className="px-6 md:px-12 lg:px-20 py-24 md:py-32 bg-[#F5EFE7]">
      <div className="max-w-[1600px] mx-auto">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <div className="w-16 h-[2px] bg-[#050608] mb-8" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight max-w-3xl">
            Recent Work
          </h2>
          <p className="text-lg md:text-xl opacity-70 mt-6 max-w-2xl">
            Real results for real businesses. Here&apos;s what happens when strategy meets craft.
          </p>
        </div>

        {/* Case Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((caseItem, index) => (
            <div
              key={caseItem.id}
              className={`group cursor-pointer transition-all duration-300 ${
                hoveredCase === index
                  ? 'translate-y-[-8px]'
                  : ''
              }`}
              onMouseEnter={() => setHoveredCase(index)}
              onMouseLeave={() => setHoveredCase(null)}
              onClick={() => setSelectedCaseIndex(index)}
            >
              {/* Screenshot */}
              <div className={`aspect-[3/4] overflow-hidden mb-6 transition-all duration-300 ${
                hoveredCase === index
                  ? 'shadow-[0_20px_60px_rgba(5,6,8,0.2)] border-2 border-[#050608]'
                  : 'border-2 border-transparent'
              }`}>
                <ImageWithFallback
                  src={caseItem.image}
                  alt={caseItem.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Label */}
              <div className="space-y-2">
                <p className="text-sm uppercase tracking-wider opacity-50">
                  {caseItem.label}
                </p>
                <p className="text-xl">
                  {caseItem.result}
                </p>
                <div className="w-8 h-[1px] bg-[#050608] opacity-30" />
              </div>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="mt-16 text-center">
          <p className="text-sm uppercase tracking-wider opacity-50 mb-4">
            Click any project to see the full story
          </p>
        </div>
      </div>

      {/* Case Study Detail Modal */}
      {selectedCaseIndex !== null && (
        <CaseStudyDetail
          caseStudy={caseStudies[selectedCaseIndex]}
          onClose={() => setSelectedCaseIndex(null)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </section>
  );
}