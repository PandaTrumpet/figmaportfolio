import { useState, useEffect } from 'react';
import { X, ArrowLeft, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { CaseStudy } from '../data/caseStudies';

interface CaseStudyDetailProps {
  caseStudy: CaseStudy;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}

export function CaseStudyDetail({ caseStudy, onClose, onNext, onPrev }: CaseStudyDetailProps) {
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] bg-[#050608] bg-opacity-90 overflow-y-auto"
      onClick={handleBackdropClick}
    >
      <div className="min-h-screen py-20 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto bg-[#F5EFE7] relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-10 w-12 h-12 bg-[#050608] text-[#F5EFE7] flex items-center justify-center transition-transform hover:scale-110"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Arrows */}
          {onPrev && (
            <button
              onClick={onPrev}
              className="absolute top-6 left-6 z-10 w-12 h-12 bg-[#050608] text-[#F5EFE7] flex items-center justify-center transition-transform hover:scale-110"
              aria-label="Previous project"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
          )}
          {onNext && (
            <button
              onClick={onNext}
              className="absolute top-6 left-20 z-10 w-12 h-12 bg-[#050608] text-[#F5EFE7] flex items-center justify-center transition-transform hover:scale-110"
              aria-label="Next project"
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          )}

          {/* Hero Image */}
          <div className="aspect-[16/9] overflow-hidden">
            <ImageWithFallback
              src={caseStudy.image}
              alt={caseStudy.imageAlt}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-8 md:p-16">
            {/* Header */}
            <div className="mb-12">
              <div className="flex flex-wrap gap-4 text-sm uppercase tracking-wider opacity-50 mb-6">
                <span>{caseStudy.category}</span>
                <span>•</span>
                <span>{caseStudy.year}</span>
                <span>•</span>
                <span>{caseStudy.client}</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
                {caseStudy.title}
              </h1>
              <div className="w-24 h-[2px] bg-[#050608]" />
            </div>

            {/* Overview */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl mb-6">Overview</h2>
              <p className="text-lg md:text-xl opacity-70 leading-relaxed">
                {caseStudy.overview}
              </p>
            </div>

            {/* Challenge & Solution */}
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h3 className="text-xl md:text-2xl mb-4">The Challenge</h3>
                <p className="opacity-70 leading-relaxed">
                  {caseStudy.challenge}
                </p>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl mb-4">The Solution</h3>
                <p className="opacity-70 leading-relaxed">
                  {caseStudy.solution}
                </p>
              </div>
            </div>

            {/* Results */}
            <div className="mb-16 p-12 bg-white">
              <h2 className="text-2xl md:text-3xl mb-8">Results</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {caseStudy.results.map((result, index) => (
                  <div key={index}>
                    <div className="text-4xl md:text-5xl mb-2">
                      {result.value}
                    </div>
                    <div className="text-sm uppercase tracking-wider opacity-50 mb-2">
                      {result.metric}
                    </div>
                    <p className="text-sm opacity-70 leading-relaxed">
                      {result.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl mb-8">Gallery</h2>
              
              {/* Main Image */}
              <div className="aspect-[16/10] overflow-hidden mb-4">
                <ImageWithFallback
                  src={caseStudy.gallery[activeGalleryIndex].image}
                  alt={caseStudy.gallery[activeGalleryIndex].alt}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-3 gap-4">
                {caseStudy.gallery.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveGalleryIndex(index)}
                    className={`aspect-[16/10] overflow-hidden transition-all ${
                      activeGalleryIndex === index
                        ? 'ring-4 ring-[#050608]'
                        : 'opacity-50 hover:opacity-100'
                    }`}
                  >
                    <ImageWithFallback
                      src={item.image}
                      alt={item.alt}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            {caseStudy.testimonial && (
              <div className="mb-16 p-12 bg-white">
                <div className="grid md:grid-cols-[200px,1fr] gap-8 items-center">
                  <div className="aspect-square overflow-hidden">
                    <ImageWithFallback
                      src={caseStudy.testimonial.image}
                      alt={caseStudy.testimonial.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <blockquote className="text-xl md:text-2xl mb-6 leading-relaxed">
                      {caseStudy.testimonial.quote}
                    </blockquote>
                    <div>
                      <p className="text-lg">{caseStudy.testimonial.author}</p>
                      <p className="text-sm opacity-50 uppercase tracking-wider">
                        {caseStudy.testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Technologies & Services */}
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h3 className="text-xl mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-white text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl mb-4">Services Provided</h3>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.services.map((service, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-white text-sm"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="border-t-2 border-[#050608] border-opacity-10 pt-12 text-center">
              <h3 className="text-2xl md:text-3xl mb-6">
                Ready to start your project?
              </h3>
              <button className="px-10 py-5 bg-[#050608] text-[#F5EFE7] transition-all hover:scale-[1.02] hover:shadow-xl">
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
