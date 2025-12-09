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
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (testimonialRef.current) {
      observer.observe(testimonialRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={testimonialRef}
      className={`transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="grid md:grid-cols-[200px,1fr] gap-6 md:gap-8 items-start">
        {/* Portrait */}
        <div className="relative">
          <div className="aspect-square overflow-hidden border-2 border-[#050608]">
            <ImageWithFallback
              src={testimonial.image}
              alt={testimonial.imageAlt}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Tag */}
          <div className="mt-4">
            <p className="text-sm uppercase tracking-wider opacity-50 mb-1">
              {testimonial.role}
            </p>
            <p className="text-base">{testimonial.name}</p>
          </div>
        </div>

        {/* Story */}
        <div className="flex items-center">
          <blockquote className="text-xl md:text-2xl leading-relaxed">
            {testimonial.story}
          </blockquote>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="px-6 md:px-12 lg:px-20 py-20 md:py-24 bg-[#F5EFE7]"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <div className="w-16 h-[2px] bg-[#050608] mb-6" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight max-w-3xl">
            Отзывы Клиентов
          </h2>
          <p className="text-base md:text-lg opacity-70 mt-4 max-w-2xl">
            Реальные истории от реальных людей, которые развивают свой бизнес.
          </p>
        </div>

        {/* Testimonials */}
        <div className="space-y-12 md:space-y-16">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} testimonial={testimonial} index={index} />
          ))}
        </div>

        {/* Decorative element */}
        <div className="mt-12 flex items-center justify-center gap-4">
          <div className="w-16 h-[1px] bg-[#050608] opacity-30" />
          <div className="w-2 h-2 bg-[#050608] opacity-30 rounded-full" />
          <div className="w-16 h-[1px] bg-[#050608] opacity-30" />
        </div>
      </div>
    </section>
  );
}
