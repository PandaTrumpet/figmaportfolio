// "use client";

// import { useEffect, useRef, useState } from "react";
// import { ImageWithFallback } from "./figma/ImageWithFallback";

// const testimonials = [
//   {
//     story:
//       "«Команда не просто создала сайт — они создали работающий инструмент продаж. Количество заявок выросло вдвое за первый месяц после запуска.»",
//     name: "Рахель Коэн",
//     role: "Владелица студии йоги",
//     image:
//       "https://images.unsplash.com/photo-1747830280502-f33d7305a714?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHdhcm18ZW58MXx8fHwxNzY1MjkzNTgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
//     imageAlt: "Professional portrait",
//   },
//   {
//     story:
//       "«Меня впечатлил стратегический подход. Задавали правильные вопросы, вникали в бизнес и создали платформу, которая масштабируется вместе с нами.»",
//     name: "Давид Леви",
//     role: "Бизнес-консультант",
//     image:
//       "https://images.unsplash.com/photo-1533723522262-1c3e074d3dac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBvcnRyYWl0JTIwbmF0dXJhbHxlbnwxfHx8fDE3NjUyOTM1ODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
//     imageAlt: "Business portrait",
//   },
//   {
//     story:
//       "«Наконец-то digital-присутствие, которое соответствует качеству наших услуг. Понимали наш рынок, клиентов и создали сайт, который поднял бренд на новый уровень.»",
//     name: "Майя Шапира",
//     role: "Основательница кафе",
//     image:
//       "https://images.unsplash.com/photo-1747830280502-f33d7305a714?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHdhcm18ZW58MXx8fHwxNzY1MjkzNTgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
//     imageAlt: "Professional portrait warm",
//   },
// ];

// function Testimonial({
//   testimonial,
//   index,
// }: {
//   testimonial: (typeof testimonials)[0];
//   index: number;
// }) {
//   const [isVisible, setIsVisible] = useState(false);
//   const testimonialRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.2 }
//     );

//     if (testimonialRef.current) {
//       observer.observe(testimonialRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div
//       ref={testimonialRef}
//       className={`transition-all duration-1000 ${
//         isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
//       }`}
//       style={{ transitionDelay: `${index * 150}ms` }}
//     >
//       <div className="grid md:grid-cols-[200px,1fr] gap-6 md:gap-8 items-start">
//         {/* Portrait */}
//         <div className="relative">
//           <div className="aspect-square overflow-hidden border-2 border-[#050608]">
//             <ImageWithFallback
//               src={testimonial.image}
//               alt={testimonial.imageAlt}
//               className="w-full h-full object-cover"
//             />
//           </div>
//           {/* Tag */}
//           <div className="mt-4">
//             <p className="text-sm uppercase tracking-wider opacity-50 mb-1">
//               {testimonial.role}
//             </p>
//             <p className="text-base">{testimonial.name}</p>
//           </div>
//         </div>

//         {/* Story */}
//         <div className="flex items-center">
//           <blockquote className="text-xl md:text-2xl leading-relaxed">
//             {testimonial.story}
//           </blockquote>
//         </div>
//       </div>
//     </div>
//   );
// }

// export function TestimonialsSection() {
//   return (
//     <section
//       id="testimonials"
//       className="px-6 md:px-12 lg:px-20 py-20 md:py-24 bg-[#F5EFE7]"
//     >
//       <div className="max-w-[1200px] mx-auto">
//         {/* Section Header */}
//         <div className="mb-12 md:mb-16">
//           <div className="w-16 h-[2px] bg-[#050608] mb-6" />
//           <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight max-w-3xl">
//             Отзывы Клиентов
//           </h2>
//           <p className="text-base md:text-lg opacity-70 mt-4 max-w-2xl">
//             Реальные истории от реальных людей, которые развивают свой бизнес.
//           </p>
//         </div>

//         {/* Testimonials */}
//         <div className="space-y-12 md:space-y-16">
//           {testimonials.map((testimonial, index) => (
//             <Testimonial key={index} testimonial={testimonial} index={index} />
//           ))}
//         </div>

//         {/* Decorative element */}
//         <div className="mt-12 flex items-center justify-center gap-4">
//           <div className="w-16 h-[1px] bg-[#050608] opacity-30" />
//           <div className="w-2 h-2 bg-[#050608] opacity-30 rounded-full" />
//           <div className="w-16 h-[1px] bg-[#050608] opacity-30" />
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { useEffect, useRef, useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const testimonials = [
  {
    story:
      "«Команда не просто создала сайт — они создали работающий инструмент продаж. Количество заявок выросло вдвое за первый месяц после запуска.»",
    name: "Рахель Коэн",
    role: "Владелица студии йоги",
    image:
      "https://images.unsplash.com/photo-1747830280502-f33d7305a714?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHdhcm18ZW58MXx8fHwxNzY1MjkzNTgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    imageAlt: "Professional portrait",
  },
  {
    story:
      "«Меня впечатлил стратегический подход. Задавали правильные вопросы, вникали в бизнес и создали платформу, которая масштабируется вместе с нами.»",
    name: "Давид Леви",
    role: "Бизнес-консультант",
    image:
      "https://images.unsplash.com/photo-1533723522262-1c3e074d3dac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBvcnRyYWl0JTIwbmF0dXJhbHxlbnwxfHx8fDE3NjUyOTM1ODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    imageAlt: "Business portrait",
  },
  {
    story:
      "«Наконец-то digital-присутствие, которое соответствует качеству наших услуг. Понимали наш рынок, клиентов и создали сайт, который поднял бренд на новый уровень.»",
    name: "Майя Шапира",
    role: "Основательница кафе",
    image:
      "https://images.unsplash.com/photo-1747830280502-f33d7305a714?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHdhcm18ZW58MXx8fHwxNzY1MjkzNTgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    imageAlt: "Professional portrait warm",
  },
];

function Testimonial({
  testimonial,
  index,
}: {
  testimonial: (typeof testimonials)[0];
  index: number;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const testimonialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (testimonialRef.current) observer.observe(testimonialRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={testimonialRef}
      className={`transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 140}ms` }}
    >
      <div
        className="
          group relative
          rounded-3xl overflow-hidden
          border border-cyan-400/25
          bg-[#0A0F1E]/70 backdrop-blur-xl
          shadow-[0_0_70px_rgba(76,194,255,0.12)]
          p-6 md:p-8
          transition-transform duration-300
          hover:-translate-y-1 hover:shadow-[0_0_90px_rgba(76,194,255,0.18)]
        "
      >
        {/* premium glow + sheen */}
        <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div
            className="absolute -top-20 -right-16 h-64 w-64 rounded-full blur-3xl opacity-70"
            style={{
              background:
                "radial-gradient(circle, rgba(76,194,255,0.55), transparent 60%)",
            }}
          />
          <div
            className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full blur-3xl opacity-60"
            style={{
              background:
                "radial-gradient(circle, rgba(58,123,255,0.45), transparent 60%)",
            }}
          />
          <div
            className="
              absolute -inset-16
              [transform:translateX(-30%)_translateY(-10%)_rotate(18deg)]
            "
          >
            <div className="h-24 w-[140%] bg-gradient-to-r from-transparent via-white/12 to-transparent blur-[1px]" />
          </div>
        </div>
{/* Сакв */}
        {/* <div className="grid md:grid-cols-[220px,1fr] gap-6 md:gap-10 items-start relative z-10">
          
          <div className="relative">
            <div
              className="
                aspect-square overflow-hidden rounded-2xl
                border border-cyan-400/30 bg-[#0B1020]/70
                shadow-[0_0_40px_rgba(59,130,246,0.18)]
              "
            >
              <ImageWithFallback
                src={testimonial.image}
                alt={testimonial.imageAlt}
                className="w-full h-full object-cover opacity-90 mix-blend-screen"
              />
            </div>

          
            <div className="mt-4">
              <p className="text-xs uppercase tracking-[0.22em] text-slate-200/55 mb-2">
                {testimonial.role}
              </p>
              <p className="text-base text-slate-100">{testimonial.name}</p>

              
              <div className="mt-3 h-0.5 w-14 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-transparent opacity-90" />
            </div>
          </div>

        
          <div className="flex items-center">
            <blockquote className="text-lg md:text-2xl leading-relaxed text-slate-100/90">
              <span className="text-slate-100">{testimonial.story}</span>
            </blockquote>
          </div>
        </div> */}
<div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-10 items-start">
  {/* Left: Avatar + identity */}
  <div className="flex items-center gap-4 shrink-0 min-w-[220px]">
    {/* Avatar */}
    <div
      className="
        relative
        h-14 w-14 md:h-16 md:w-16
        rounded-xl overflow-hidden
        border border-cyan-400/30 bg-[#0B1020]/70
        shadow-[0_0_26px_rgba(76,194,255,0.18)]
      "
    >
      <ImageWithFallback
        src={testimonial.image}
        alt={testimonial.imageAlt}
        className="w-full h-full object-cover opacity-90 mix-blend-screen"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
    </div>

    {/* Name / role */}
    <div className="min-w-0">
      <p className="text-[15px] font-medium text-slate-100 leading-tight truncate">
        {testimonial.name}
      </p>
      <p className="text-xs uppercase tracking-[0.22em] text-slate-300/60 mt-1">
        {testimonial.role}
      </p>
    </div>
  </div>

  {/* Center: Story */}
  <div className="flex-1">
    <blockquote className="text-lg md:text-xl leading-relaxed text-slate-100/90">
      {testimonial.story}
    </blockquote>

    {/* Metrics */}
    <div className="mt-5 flex flex-wrap gap-3">
      <span
        className="
          inline-flex items-center gap-2
          px-3 py-1.5 rounded-full
          border border-cyan-400/30 bg-[#0A0F1E]/70
          text-xs text-slate-200
          shadow-[0_0_20px_rgba(76,194,255,0.15)]
        "
      >
        <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(76,194,255,0.6)]" />
        +2× leads
      </span>

      <span
        className="
          inline-flex items-center gap-2
          px-3 py-1.5 rounded-full
          border border-cyan-400/30 bg-[#0A0F1E]/70
          text-xs text-slate-200
        "
      >
        WhatsApp automation
      </span>

      <span
        className="
          inline-flex items-center gap-2
          px-3 py-1.5 rounded-full
          border border-cyan-400/30 bg-[#0A0F1E]/70
          text-xs text-slate-200
        "
      >
        CRM connected
      </span>
    </div>
  </div>
</div>



      </div>
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="
        relative overflow-hidden
        px-6 md:px-12 lg:px-20 py-20 md:py-24
        bg-linear-to-b from-[#050814] via-[#050818] to-[#020410]
        text-slate-100
      "
      aria-labelledby="testimonials-title"
    >
      {/* Neon waves (same as Hero/Process) */}
      <div
        className="pointer-events-none absolute -top-40 right-[-10%] h-96 w-96 rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(76,194,255,0.9), transparent 60%)",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-[-20%] left-[-10%] h-[26rem] w-[26rem] rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(58,123,255,0.85), transparent 55%)",
        }}
      />

      {/* subtle grid overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.10]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(51,65,85,0.28) 1px, transparent 1px), linear-gradient(90deg, rgba(51,65,85,0.28) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <div className="w-16 h-0.5 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-transparent mb-6" />
          <h2
            id="testimonials-title"
            className="text-3xl md:text-4xl lg:text-5xl leading-tight max-w-3xl text-slate-100"
          >
            Отзывы клиентов
          </h2>
          <p className="text-base md:text-lg text-slate-300/90 mt-4 max-w-2xl leading-relaxed">
            Реальные истории от реальных людей, которые развивают свой бизнес —
            и получают результат после запуска.
          </p>
        </div>

        {/* Testimonials */}
        <div className="space-y-10 md:space-y-12">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} testimonial={testimonial} index={index} />
          ))}
        </div>

        {/* Decorative element */}
        <div className="mt-12 flex items-center justify-center gap-4">
          <div className="w-16 h-px bg-cyan-200/20" />
          <div className="w-2 h-2 bg-cyan-200/30 rounded-full shadow-[0_0_20px_rgba(76,194,255,0.35)]" />
          <div className="w-16 h-px bg-cyan-200/20" />
        </div>
      </div>
    </section>
  );
}
