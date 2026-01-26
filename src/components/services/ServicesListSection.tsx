// "use client";

// import ServiceBlock from "@/src/components/services/ServiceBlock";
// import { servicesNew } from "@/src/data/newServices";

// export default function ServicesListSection() {
//   return (
//     <section className="px-6 md:px-12 lg:px-20 py-20 md:py-32">
//       <div className="max-w-[1600px] mx-auto space-y-40 md:space-y-56">
//         {servicesNew.map((service, index) => (
//           <ServiceBlock key={service.id} service={service} index={index} />
//         ))}
//       </div>
//     </section>
//   );
// }




"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import ServiceBlock from "@/src/components/services/ServiceBlock";
import { servicesNew } from "@/src/data/newServices";

export default function ServicesListSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Параллакс: разные скорости для глубины
  const ySlow = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -80]);
  const yMid = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -140]);
  const yFast = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -220]);

  // Лёгкое "дыхание" яркости по скроллу
  const spotsOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.55, 0.75, 0.6]
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#050816] px-6 md:px-12 lg:px-20 py-24 md:py-32"
    >
      {/* Background: parallax spots */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{ opacity: spotsOpacity }}
      >
        <motion.div
          style={{ y: ySlow }}
          className="absolute -top-40 -left-32 h-96 w-96 bg-[radial-gradient(circle_at_center,_#3A7BFF55,_transparent_70%)] blur-3xl"
        />
        <motion.div
          style={{ y: yMid }}
          className="absolute top-1/2 -right-44 h-[520px] w-[520px] bg-[radial-gradient(circle_at_center,_#4CC2FF44,_transparent_70%)] blur-3xl"
        />
        <motion.div
          style={{ y: yFast }}
          className="absolute -bottom-52 left-1/3 h-[620px] w-[620px] bg-[radial-gradient(circle_at_center,_#9B5DFF33,_transparent_70%)] blur-[150px]"
        />
      </motion.div>

      {/* Subtle mesh/noise layer (делает скролл "дороже") */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.18] mix-blend-soft-light">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,_rgba(255,255,255,0.10),_transparent_35%),radial-gradient(circle_at_80%_30%,_rgba(255,255,255,0.08),_transparent_40%),radial-gradient(circle_at_30%_90%,_rgba(255,255,255,0.06),_transparent_45%)]" />
      </div>

      {/* Top/Bottom fades чтобы "втягивало" в секцию при скролле */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#050816] to-transparent" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#050816] to-transparent" />

      <div className="relative z-10 max-w-[1600px] mx-auto space-y-28 md:space-y-40">
        {servicesNew.map((service, index) => (
          <ServiceBlock key={service.id} service={service} index={index} />
        ))}
      </div>

      {/* subtle divider line */}
      <div className="pointer-events-none absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
