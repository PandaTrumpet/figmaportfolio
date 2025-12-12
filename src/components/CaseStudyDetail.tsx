
// // Рабочий вариант с светлым фоном 
// "use client";

// import { useState, useEffect, type MouseEvent } from "react";
// import { X, ArrowLeft, ArrowRight } from "lucide-react";
// import { ImageWithFallback } from "./figma/ImageWithFallback";
// import type { CaseStudy } from "../data/caseStudies";

// interface CaseStudyDetailProps {
//   caseStudy: CaseStudy;
//   onClose: () => void;
//   onNext?: () => void;
//   onPrev?: () => void;
// }

// export function CaseStudyDetail({
//   caseStudy,
//   onClose,
//   onNext,
//   onPrev,
// }: CaseStudyDetailProps) {
//   const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);

//   // Блокируем скролл под модалкой
//   useEffect(() => {
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.body.style.overflow = "unset";
//     };
//   }, []);


// useEffect(() => {
//   document.body.classList.add("overflow-hidden");

//   return () => {
//     document.body.classList.remove("overflow-hidden");
//   };
// }, []);
  
//   const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
//     if (e.target === e.currentTarget) {
//       onClose();
//     }
//   };

//   // Получаем «сервисы» из поля role (разделены запятыми)
//   const services =
//     caseStudy.role
//       ?.split(",")
//       .map((item) => item.trim())
//       .filter(Boolean) ?? [];

//   return (
//     <div
//       className="fixed inset-0 z-[100] bg-[#050608] bg-opacity-90 overflow-y-auto"
//       onClick={handleBackdropClick}
//     >
//       <div className="min-h-screen py-20 px-6 md:px-12">
//         <div className="max-w-[1200px] mx-auto bg-[#F5EFE7] relative">
//           {/* Close Button */}
//           <button
//             onClick={onClose}
//             className="absolute top-6 right-6 z-10 w-12 h-12 bg-[#050608] text-[#F5EFE7] flex items-center justify-center transition-transform hover:scale-110"
//             aria-label="Close"
//           >
//             <X className="w-6 h-6" />
//           </button>

//           {/* Navigation Arrows */}
//           {onPrev && (
//             <button
//               onClick={onPrev}
//               className="absolute top-6 left-6 z-10 w-12 h-12 bg-[#050608] text-[#F5EFE7] flex items-center justify-center transition-transform hover:scale-110"
//               aria-label="Previous project"
//             >
//               <ArrowLeft className="w-6 h-6" />
//             </button>
//           )}
//           {onNext && (
//             <button
//               onClick={onNext}
//               className="absolute top-6 left-20 z-10 w-12 h-12 bg-[#050608] text-[#F5EFE7] flex items-center justify-center transition-transform hover:scale-110"
//               aria-label="Next project"
//             >
//               <ArrowRight className="w-6 h-6" />
//             </button>
//           )}

//           {/* Hero Image */}
//           <div className="aspect-[16/9] overflow-hidden">
//             <ImageWithFallback
//               src={caseStudy.heroImage}
//               alt={caseStudy.title}
//               className="w-full h-full object-cover"
//             />
//           </div>

//           {/* Content */}
//           <div className="p-8 md:p-16">
//             {/* Header */}
//             <div className="mb-12">
//               <div className="flex flex-wrap gap-4 text-sm uppercase tracking-wider opacity-50 mb-6">
//                 <span>{caseStudy.industry}</span>
//                 <span>•</span>
//                 <span>{caseStudy.year}</span>
//                 <span>•</span>
//                 <span>{caseStudy.client}</span>
//               </div>
//               <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
//                 {caseStudy.title}
//               </h1>
//               <div className="w-24 h-[2px] bg-[#050608]" />
//             </div>

//             {/* Overview */}
//             <div className="mb-16">
//               <h2 className="text-2xl md:text-3xl mb-6">Overview</h2>
//               <p className="text-lg md:text-xl opacity-70 leading-relaxed">
//                 {caseStudy.overview}
//               </p>
//             </div>

//             {/* Challenge & Solution */}
//             <div className="grid md:grid-cols-2 gap-12 mb-16">
//               <div>
//                 <h3 className="text-xl md:text-2xl mb-4">The Challenge</h3>
//                 <p className="opacity-70 leading-relaxed">
//                   {caseStudy.challenge}
//                 </p>
//               </div>
//               <div>
//                 <h3 className="text-xl md:text-2xl mb-4">The Solution</h3>
//                 <p className="opacity-70 leading-relaxed">
//                   {caseStudy.solution}
//                 </p>
//               </div>
//             </div>

//             {/* Results */}
//             <div className="mb-16 p-12 bg-white">
//               <h2 className="text-2xl md:text-3xl mb-8">Results</h2>
//               <div className="grid md:grid-cols-3 gap-8">
//                 {caseStudy.results.map((result, index) => (
//                   <div key={index}>
//                     <div className="text-4xl md:text-5xl mb-2">
//                       {result.value}
//                     </div>
//                     <div className="text-sm uppercase tracking-wider opacity-50 mb-2">
//                       {result.metric}
//                     </div>
//                     <p className="text-sm opacity-70 leading-relaxed">
//                       {result.description}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Gallery */}
//             {caseStudy.gallery.length > 0 && (
//               <div className="mb-16">
//                 <h2 className="text-2xl md:text-3xl mb-8">Gallery</h2>

//                 {/* Main Image */}
//                 <div className="aspect-[16/10] overflow-hidden mb-4">
//                   <ImageWithFallback
//                     src={caseStudy.gallery[activeGalleryIndex]}
//                     alt={`${caseStudy.title} gallery image ${
//                       activeGalleryIndex + 1
//                     }`}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>

//                 {/* Thumbnails */}
//                 <div className="grid grid-cols-3 gap-4">
//                   {caseStudy.gallery.map((item, index) => (
//                     <button
//                       key={index}
//                       onClick={() => setActiveGalleryIndex(index)}
//                       className={`aspect-[16/10] overflow-hidden transition-all ${
//                         activeGalleryIndex === index
//                           ? "ring-4 ring-[#050608]"
//                           : "opacity-50 hover:opacity-100"
//                       }`}
//                     >
//                       <ImageWithFallback
//                         src={item}
//                         alt={`${caseStudy.title} thumbnail ${index + 1}`}
//                         className="w-full h-full object-cover"
//                       />
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Testimonial */}
//             {caseStudy.testimonial && (
//               <div className="mb-16 p-12 bg-white">
//                 <div className="grid md:grid-cols-[200px,1fr] gap-8 items-center">
//                   <div className="aspect-square overflow-hidden">
//                     <ImageWithFallback
//                       src={caseStudy.testimonial.avatar}
//                       alt={caseStudy.testimonial.author}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                   <div>
//                     <blockquote className="text-xl md:text-2xl mb-6 leading-relaxed">
//                       {caseStudy.testimonial.quote}
//                     </blockquote>
//                     <div>
//                       <p className="text-lg">{caseStudy.testimonial.author}</p>
//                       <p className="text-sm opacity-50 uppercase tracking-wider">
//                         {caseStudy.testimonial.position}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* Technologies & Services */}
//             <div className="grid md:grid-cols-2 gap-12 mb-16">
//               <div>
//                 <h3 className="text-xl mb-4">Technologies Used</h3>
//                 <div className="flex flex-wrap gap-2">
//                   {caseStudy.techStack.map((tech, index) => (
//                     <span key={index} className="px-4 py-2 bg-white text-sm">
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               {services.length > 0 && (
//                 <div>
//                   <h3 className="text-xl mb-4">Services Provided</h3>
//                   <div className="flex flex-wrap gap-2">
//                     {services.map((service, index) => (
//                       <span key={index} className="px-4 py-2 bg-white text-sm">
//                         {service}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* CTA */}
//             <div className="border-t-2 border-[#050608] border-opacity-10 pt-12 text-center">
//               <h3 className="text-2xl md:text-3xl mb-6">
//                 Ready to start your project?
//               </h3>
//               <button className="px-10 py-5 bg-[#050608] text-[#F5EFE7] transition-all hover:scale-[1.02] hover:shadow-xl">
//                 Get in Touch
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



// Хороший рабочий вариант с темным фоном


// "use client";

// import { useState, useEffect, type MouseEvent, useRef } from "react";
// import { X, ArrowLeft, ArrowRight } from "lucide-react";
// import { ImageWithFallback } from "./figma/ImageWithFallback";
// import type { CaseStudy } from "../data/caseStudies";

// interface CaseStudyDetailProps {
//   caseStudy: CaseStudy;
//   onClose: () => void;
//   onNext?: () => void;
//   onPrev?: () => void;
// }

// export function CaseStudyDetail({
//   caseStudy,
//   onClose,
//   onNext,
//   onPrev,
// }: CaseStudyDetailProps) {
//   const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);

//   // ====== SCROLL LOCK ======
//   useEffect(() => {
//     document.body.classList.add("overflow-hidden");
//     return () => document.body.classList.remove("overflow-hidden");
//   }, []);
// useEffect(() => {
//   const handleKeyDown = (e: KeyboardEvent) => {
//     if (e.key === "Escape") {
//       onClose();
//     }
//   };

//   window.addEventListener("keydown", handleKeyDown);
//   return () => window.removeEventListener("keydown", handleKeyDown);
// }, [onClose]);
//   // ====== SCROLL REVEAL (cinematic) ======
//   const revealRefs = useRef<HTMLDivElement[]>([]);
//   const observer = useRef<IntersectionObserver | null>(null);

//   useEffect(() => {
//     observer.current = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("reveal-visible");
//           }
//         });
//       },
//       { threshold: 0.15 }
//     );

//     revealRefs.current.forEach((ref) => {
//       if (ref) observer.current?.observe(ref);
//     });

//     return () => observer.current?.disconnect();
//   }, []);

//   const addRevealRef = (el: HTMLDivElement | null) => {
//     if (el && !revealRefs.current.includes(el)) {
//       revealRefs.current.push(el);
//     }
//   };

//   // ====== SWIPE GESTURES ======
//   const touchStartX = useRef(0);
//   const mouseStartX = useRef<number | null>(null);

//   const handleTouchStart = (e: React.TouchEvent) => {
//     touchStartX.current = e.changedTouches[0].clientX;
//   };

//   const handleTouchEnd = (e: React.TouchEvent) => {
//     const delta = e.changedTouches[0].clientX - touchStartX.current;

//     if (delta > 60 && onPrev) onPrev();
//     if (delta < -60 && onNext) onNext();
//   };

//   const handleMouseDown = (e: React.MouseEvent) => {
//     mouseStartX.current = e.clientX;
//   };

//   const handleMouseUp = (e: React.MouseEvent) => {
//     if (!mouseStartX.current) return;

//     const delta = e.clientX - mouseStartX.current;
//     if (delta > 60 && onPrev) onPrev();
//     if (delta < -60 && onNext) onNext();

//     mouseStartX.current = null;
//   };

//   // ====== CLOSE ON BACKDROP ======
//   const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
//     if (e.target === e.currentTarget) onClose();
//   };

//   const services =
//     caseStudy.role
//       ?.split(",")
//       .map((s) => s.trim())
//       .filter(Boolean) ?? [];

//   return (
//     <div
//       className="
//         fixed inset-0 z-[200]
//         bg-[#050608]/80 backdrop-blur-xl
//         flex justify-center items-start
//         overflow-y-auto
//         opacity-0 animate-[fadeIn_0.6s_ease-out_forwards]
//       "
//       onClick={handleBackdropClick}
//     >
//       {/* Neon Orbs */}
//       <div className="pointer-events-none absolute inset-0">
//         <div className="absolute top-[-180px] left-[25%] w-[650px] h-[650px] bg-[#2EE6FF] blur-[220px] opacity-25 rounded-full" />
//         <div className="absolute bottom-[-200px] right-[22%] w-[580px] h-[580px] bg-[#4CC2FF] blur-[220px] opacity-20 rounded-full" />
//         <div className="absolute top-1/3 -left-40 w-[480px] h-[480px] bg-[#1B9CFF] blur-[200px] opacity-15 rounded-full" />
//       </div>

//       <div
//         className="
//           relative z-10 w-full max-w-[1200px]
//           mt-24 mb-20 px-6 md:px-12
//         "
//         onTouchStart={handleTouchStart}
//         onTouchEnd={handleTouchEnd}
//         onMouseDown={handleMouseDown}
//         onMouseUp={handleMouseUp}
//       >
//         <div
//           className="
//             relative rounded-2xl overflow-hidden
//             bg-white/10 backdrop-blur-2xl
//             border border-white/10
//             shadow-[0_25px_80px_rgba(0,0,0,0.55)]
//             animate-[scaleFade_0.7s_ease-out]
//           "
//         >
//           {/* Close Button */}
//           <button
//             onClick={onClose}
//             className="
//               absolute top-6 right-6 z-20
//               w-12 h-12 rounded-xl
//               bg-black/60 backdrop-blur-md text-white
//               flex items-center justify-center
//               transition-all hover:scale-110 hover:bg-[#2EE6FF]/40
//             "
//           >
//             <X className="w-6 h-6" />
//           </button>

//           {/* Prev */}
//           {onPrev && (
//             <button
//               onClick={onPrev}
//               className="
//                 absolute top-6 left-6 z-20
//                 w-12 h-12 rounded-xl
//                 bg-black/60 backdrop-blur-md text-white
//                 flex items-center justify-center
//                 transition-all hover:scale-110 hover:bg-[#2EE6FF]/40
//               "
//             >
//               <ArrowLeft className="w-6 h-6" />
//             </button>
//           )}

//           {/* Next */}
//           {onNext && (
//             <button
//               onClick={onNext}
//               className="
//                 absolute top-6 left-24 z-20
//                 w-12 h-12 rounded-xl
//                 bg-black/60 backdrop-blur-md text-white
//                 flex items-center justify-center
//                 transition-all hover:scale-110 hover:bg-[#2EE6FF]/40
//               "
//             >
//               <ArrowRight className="w-6 h-6" />
//             </button>
//           )}

//           {/* Hero Image */}
//           <div className="aspect-[16/9] overflow-hidden">
//             <ImageWithFallback
//               src={caseStudy.heroImage}
//               alt={caseStudy.title}
//               className="w-full h-full object-cover"
//             />
//           </div>

//           {/* CONTENT =============================== */}
//           <div className="p-8 md:p-16 text-white">
//             {/* HEADER */}
//             <div ref={addRevealRef} className="reveal mb-12">
//               <div className="flex flex-wrap gap-4 uppercase tracking-wider text-white/60 mb-6 text-sm">
//                 <span>{caseStudy.industry}</span>
//                 <span>•</span>
//                 <span>{caseStudy.year}</span>
//                 <span>•</span>
//                 <span>{caseStudy.client}</span>
//               </div>

//               <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 font-light leading-tight">
//                 {caseStudy.title}
//               </h1>

//               <div className="w-28 h-[2px] bg-[#2EE6FF] shadow-[0_0_14px_rgba(46,230,255,1)]" />
//             </div>

//             {/* OVERVIEW */}
//             <div ref={addRevealRef} className="reveal mb-16">
//               <h2 className="text-2xl md:text-3xl mb-6">Overview</h2>
//               <p className="text-lg md:text-xl text-white/80 leading-relaxed">
//                 {caseStudy.overview}
//               </p>
//             </div>

//             {/* Challenge & Solution */}
//             <div
//               ref={addRevealRef}
//               className="reveal grid md:grid-cols-2 gap-12 mb-16"
//             >
//               <div>
//                 <h3 className="text-xl md:text-2xl mb-4">The Challenge</h3>
//                 <p className="text-white/75 leading-relaxed">
//                   {caseStudy.challenge}
//                 </p>
//               </div>
//               <div>
//                 <h3 className="text-xl md:text-2xl mb-4">The Solution</h3>
//                 <p className="text-white/75 leading-relaxed">
//                   {caseStudy.solution}
//                 </p>
//               </div>
//             </div>

//             {/* RESULTS */}
//             <div
//               ref={addRevealRef}
//               className="
//                 reveal mb-16 p-12 rounded-xl
//                 bg-white/5 backdrop-blur-md
//                 border border-white/10
//               "
//             >
//               <h2 className="text-2xl md:text-3xl mb-8">Results</h2>

//               <div className="grid md:grid-cols-3 gap-10">
//                 {caseStudy.results.map((result, i) => (
//                   <div key={i}>
//                     <div className="text-4xl md:text-5xl text-[#2EE6FF] mb-2">
//                       {result.value}
//                     </div>
//                     <div className="text-xs uppercase tracking-widest text-white/50 mb-2">
//                       {result.metric}
//                     </div>
//                     <p className="text-white/70 text-sm">
//                       {result.description}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* GALLERY */}
//             {caseStudy.gallery.length > 0 && (
//               <div ref={addRevealRef} className="reveal mb-16">
//                 <h2 className="text-2xl md:text-3xl mb-8">Gallery</h2>

//                 <div className="aspect-[16/10] overflow-hidden rounded-xl mb-4">
//                   <ImageWithFallback
//                     src={caseStudy.gallery[activeGalleryIndex]}
//                     alt="Gallery image"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>

//                 <div className="grid grid-cols-3 gap-4">
//                   {caseStudy.gallery.map((item, idx) => (
//                     <button
//                       key={idx}
//                       onClick={() => setActiveGalleryIndex(idx)}
//                       className={`
//                         aspect-[16/10] overflow-hidden rounded-lg transition-all
//                         ${
//                           activeGalleryIndex === idx
//                             ? "ring-4 ring-[#2EE6FF]"
//                             : "opacity-50 hover:opacity-100"
//                         }
//                       `}
//                     >
//                       <ImageWithFallback
//                         src={item}
//                         alt="Thumb"
//                         className="w-full h-full object-cover"
//                       />
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* TESTIMONIAL */}
//             {caseStudy.testimonial && (
//               <div
//                 ref={addRevealRef}
//                 className="
//                   reveal mb-16 p-12 rounded-xl
//                   bg-white/5 backdrop-blur-md border border-white/10
//                 "
//               >
//                 <div className="grid md:grid-cols-[200px,1fr] gap-8 items-center">
//                   <div className="aspect-square overflow-hidden rounded-xl">
//                     <ImageWithFallback
//                       src={caseStudy.testimonial.avatar}
//                       alt={caseStudy.testimonial.author}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>

//                   <div>
//                     <blockquote className="text-xl md:text-2xl mb-6 text-white/90 leading-relaxed">
//                       {caseStudy.testimonial.quote}
//                     </blockquote>

//                     <p className="text-lg">{caseStudy.testimonial.author}</p>
//                     <p className="text-xs uppercase tracking-widest text-white/50">
//                       {caseStudy.testimonial.position}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* TECH + SERVICES */}
//             <div
//               ref={addRevealRef}
//               className="reveal grid md:grid-cols-2 gap-12 mb-16"
//             >
//               {/* Tech */}
//               <div>
//                 <h3 className="text-xl mb-4">Technologies Used</h3>
//                 <div className="flex flex-wrap gap-3">
//                   {caseStudy.techStack.map((tech, i) => (
//                     <span
//                       key={i}
//                       className="
//                         px-4 py-2 rounded-full text-sm
//                         bg-white/10 border border-white/20 text-white
//                         backdrop-blur-xl
//                       "
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               {/* Services */}
//               {services.length > 0 && (
//                 <div>
//                   <h3 className="text-xl mb-4">Services Provided</h3>
//                   <div className="flex flex-wrap gap-3">
//                     {services.map((service, i) => (
//                       <span
//                         key={i}
//                         className="
//                           px-4 py-2 rounded-full text-sm
//                           bg-white/10 border border-white/20 text-white
//                           backdrop-blur-xl
//                         "
//                       >
//                         {service}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* CTA */}
//             <div
//               ref={addRevealRef}
//               className="reveal pt-12 text-center border-t border-white/10"
//             >
//               <h3 className="text-3xl mb-6">Ready to start your project?</h3>

//               <button
//                 className="
//                   px-10 py-5 rounded-xl
//                   bg-[#2EE6FF] text-black font-medium
//                   hover:scale-[1.05]
//                   hover:shadow-[0_0_30px_rgba(46,230,255,0.95)]
//                   transition-all
//                 "
//               >
//                 Get in Touch
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import { useState, useEffect, type MouseEvent, useRef } from "react";
import { X, ArrowLeft, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import type { CaseStudy } from "../data/caseStudies";

interface CaseStudyDetailProps {
  caseStudy: CaseStudy;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}

export function CaseStudyDetail({
  caseStudy,
  onClose,
  onNext,
  onPrev,
}: CaseStudyDetailProps) {
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);

  // LOCK SCROLL
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => document.body.classList.remove("overflow-hidden");
  }, []);

  // ESC CLOSE
  useEffect(() => {
    const handler = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  // CINEMATIC SCROLL REVEAL
  const revealRefs = useRef<HTMLDivElement[]>([]);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting)
            entry.target.classList.add("reveal-visible");
        }),
      { threshold: 0.15 }
    );

    revealRefs.current.forEach((ref) => ref && observer.current?.observe(ref));
    return () => observer.current?.disconnect();
  }, []);

  const addRevealRef = (el: HTMLDivElement | null) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
  };

  // SWIPE GESTURES
  const touchStartX = useRef(0);
  const mouseStartX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) =>
    (touchStartX.current = e.changedTouches[0].clientX);

  const handleTouchEnd = (e: React.TouchEvent) => {
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta > 60 && onPrev) onPrev();
    if (delta < -60 && onNext) onNext();
  };

  const handleMouseDown = (e: React.MouseEvent) =>
    (mouseStartX.current = e.clientX);

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!mouseStartX.current) return;
    const delta = e.clientX - mouseStartX.current;
    if (delta > 60 && onPrev) onPrev();
    if (delta < -60 && onNext) onNext();
    mouseStartX.current = null;
  };

  const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  const services =
    caseStudy.role
      ?.split(",")
      .map((s) => s.trim())
      .filter(Boolean) ?? [];

  return (
    <div
      className="
        fixed inset-0 z-[200]
        bg-[#050814]/85 backdrop-blur-xl
        flex justify-center items-start overflow-y-auto
        opacity-0 animate-[fadeIn_0.6s_ease-out_forwards]
      "
      onClick={handleBackdropClick}
    >
      {/* TEL-AVIV NEON ORBS */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-220px] left-[20%] w-[750px] h-[750px] bg-[#3BBEFF] blur-[240px] opacity-25 rounded-full" />
        <div className="absolute bottom-[-260px] right-[18%] w-[680px] h-[680px] bg-[#4CC2FF] blur-[240px] opacity-20 rounded-full" />
        <div className="absolute top-1/3 -left-52 w-[540px] h-[540px] bg-[#A5B4FC] blur-[260px] opacity-15 rounded-full" />
      </div>

      <div
        className="
          relative z-10 w-full max-w-[1200px]
          mt-24 mb-20 px-6 md:px-12
        "
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        <div
          className="
            relative rounded-2xl overflow-hidden
            bg-white/10 backdrop-blur-[22px]
            border border-white/10
            shadow-[0_35px_90px_rgba(0,0,0,0.6)]
            animate-[scaleFade_0.7s_ease-out]
          "
        >
          {/* CLOSE */}
          <button
            onClick={onClose}
            className="
              absolute top-6 right-6 z-20
              w-12 h-12 rounded-xl
              bg-black/60 backdrop-blur-md text-white
              flex items-center justify-center
              transition-all hover:scale-110 hover:bg-[#3BBEFF]/40
            "
          >
            <X className="w-6 h-6" />
          </button>

          {/* PREV */}
          {onPrev && (
            <button
              onClick={onPrev}
              className="
                absolute top-6 left-6 z-20
                w-12 h-12 rounded-xl
                bg-black/60 text-white backdrop-blur-md
                flex items-center justify-center
                transition-all hover:scale-110 hover:bg-[#3BBEFF]/40
              "
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
          )}

          {/* NEXT */}
          {onNext && (
            <button
              onClick={onNext}
              className="
                absolute top-6 left-24 z-20
                w-12 h-12 rounded-xl
                bg-black/60 text-white backdrop-blur-md
                flex items-center justify-center
                transition-all hover:scale-110 hover:bg-[#3BBEFF]/40
              "
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          )}

          {/* HERO IMAGE */}
          <div className="aspect-[16/9] overflow-hidden">
            <ImageWithFallback
              src={caseStudy.heroImage}
              alt={caseStudy.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* CONTENT */}
          <div className="p-8 md:p-16 text-white">
            {/* HEADER */}
            <div ref={addRevealRef} className="reveal mb-12">
              <div className="flex flex-wrap gap-4 uppercase tracking-wider text-white/60 mb-6 text-sm">
                <span>{caseStudy.industry}</span>
                <span>•</span>
                <span>{caseStudy.year}</span>
                <span>•</span>
                <span>{caseStudy.client}</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 font-light leading-tight bg-gradient-to-r from-[#F5F7FF] via-[#C7D2FE] to-[#A5B4FC] bg-clip-text text-transparent">
                {caseStudy.title}
              </h1>

              <div className="w-32 h-[2px] bg-[#3BBEFF] shadow-[0_0_12px_#3BBEFF]" />
            </div>

            {/* OVERVIEW */}
            <div ref={addRevealRef} className="reveal mb-16">
              <h2 className="text-2xl md:text-3xl mb-6">Overview</h2>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                {caseStudy.overview}
              </p>
            </div>

            {/* CHALLENGE + SOLUTION */}
            <div
              ref={addRevealRef}
              className="reveal grid md:grid-cols-2 gap-12 mb-16"
            >
              <div>
                <h3 className="text-xl md:text-2xl mb-4">The Challenge</h3>
                <p className="text-white/75 leading-relaxed">
                  {caseStudy.challenge}
                </p>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl mb-4">The Solution</h3>
                <p className="text-white/75 leading-relaxed">
                  {caseStudy.solution}
                </p>
              </div>
            </div>

            {/* RESULTS */}
            <div
              ref={addRevealRef}
              className="
                reveal mb-16 p-12 rounded-xl
                bg-white/5 backdrop-blur-md border border-white/10
                shadow-[0_25px_60px_rgba(0,0,0,0.45)]
              "
            >
              <h2 className="text-2xl md:text-3xl mb-8">Results</h2>

              <div className="grid md:grid-cols-3 gap-12">
                {caseStudy.results.map((result, i) => (
                  <div key={i}>
                    <div className="text-4xl md:text-5xl text-[#3BBEFF] drop-shadow-[0_0_12px_#3BBEFF] mb-3">
                      {result.value}
                    </div>
                    <div className="text-xs uppercase tracking-widest text-white/50 mb-2">
                      {result.metric}
                    </div>
                    <p className="text-white/70 text-sm">
                      {result.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* GALLERY */}
            {caseStudy.gallery.length > 0 && (
              <div ref={addRevealRef} className="reveal mb-16">
                <h2 className="text-2xl md:text-3xl mb-8">Gallery</h2>

                <div className="aspect-[16/10] overflow-hidden rounded-xl mb-4">
                  <ImageWithFallback
                    src={caseStudy.gallery[activeGalleryIndex]}
                    alt="Gallery image"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {caseStudy.gallery.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveGalleryIndex(idx)}
                      className={`
                        aspect-[16/10] overflow-hidden rounded-lg transition-all
                        ${
                          activeGalleryIndex === idx
                            ? "ring-4 ring-[#3BBEFF]"
                            : "opacity-50 hover:opacity-100"
                        }
                      `}
                    >
                      <ImageWithFallback
                        src={item}
                        alt="Thumb"
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* TESTIMONIAL */}
            {caseStudy.testimonial && (
              <div
                ref={addRevealRef}
                className="
                  reveal mb-16 p-12 rounded-xl
                  bg-white/5 backdrop-blur-md border border-white/10
                "
              >
                <div className="grid md:grid-cols-[200px,1fr] gap-8 items-center">
                  <div className="aspect-square overflow-hidden rounded-xl">
                    <ImageWithFallback
                      src={caseStudy.testimonial.avatar}
                      alt={caseStudy.testimonial.author}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div>
                    <blockquote className="text-xl md:text-2xl mb-6 text-white/90 leading-relaxed">
                      {caseStudy.testimonial.quote}
                    </blockquote>

                    <p className="text-lg">{caseStudy.testimonial.author}</p>
                    <p className="text-xs uppercase tracking-widest text-white/50">
                      {caseStudy.testimonial.position}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* TECH + SERVICES */}
            <div
              ref={addRevealRef}
              className="reveal grid md:grid-cols-2 gap-12 mb-16"
            >
              <div>
                <h3 className="text-xl mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-3">
                  {caseStudy.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="
                        px-4 py-2 rounded-full text-sm
                        bg-white/10 border border-white/20 text-white
                        backdrop-blur-xl
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {services.length > 0 && (
                <div>
                  <h3 className="text-xl mb-4">Services Provided</h3>
                  <div className="flex flex-wrap gap-3">
                    {services.map((service, i) => (
                      <span
                        key={i}
                        className="
                          px-4 py-2 rounded-full text-sm
                          bg-white/10 border border-white/20 text-white
                          backdrop-blur-xl
                        "
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* CTA */}
            <div
              ref={addRevealRef}
              className="reveal pt-12 text-center border-t border-white/10"
            >
              <h3 className="text-3xl mb-6">Ready to start your project?</h3>

              <button
                className="
                  px-10 py-5 rounded-xl
                  bg-[#3BBEFF] text-black font-medium
                  hover:scale-[1.05]
                  hover:shadow-[0_0_35px_rgba(59,190,255,0.95)]
                  transition-all
                "
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}