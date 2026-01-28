// "use client";

// import dynamic from "next/dynamic";
// import { motion } from "motion/react";
// import { ArrowRight, Sparkles, Target, Zap } from "lucide-react";

// const ParticlesBackground = dynamic(
//   () =>
//     import("@/src/components/ParticlesBackground").then(
//       (m) => m.ParticlesBackground
//     ),
//   { ssr: false }
// );

// export function ProcessCTA() {
//   return (
//     <section className="px-6 md:px-12 lg:px-20 py-40 md:py-48 lg:py-56 bg-[#050608] text-[#F5EFE7] relative overflow-hidden">
//       <div className="max-w-[1400px] mx-auto text-center relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 60 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           viewport={{ once: true }}
//         >
//           <div className="flex items-center justify-center gap-8 mb-12">
//             <motion.div
//               animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
//               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//             >
//               <Target className="w-16 h-16 md:w-20 md:h-20" />
//             </motion.div>
//             <motion.div
//               animate={{ y: [0, -15, 0], rotate: [0, -10, 0] }}
//               transition={{
//                 duration: 3,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//                 delay: 0.5,
//               }}
//             >
//               <Zap className="w-16 h-16 md:w-20 md:h-20" />
//             </motion.div>
//             <motion.div
//               animate={{ y: [0, -25, 0], rotate: [0, 15, 0] }}
//               transition={{
//                 duration: 5,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//                 delay: 1,
//               }}
//             >
//               <Sparkles className="w-16 h-16 md:w-20 md:h-20" />
//             </motion.div>
//           </div>

//           <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl mb-12 leading-[0.95]">
//             Готовы начать
//             <br />
//             работу?
//           </h2>

//           <p className="text-xl md:text-2xl lg:text-3xl opacity-70 mb-16 max-w-3xl mx-auto leading-relaxed">
//             Запишитесь на бесплатную консультацию. Обсудим ваш проект и составим
//             индивидуальный план.
//           </p>

//           <motion.a
//             href="#contact"
//             className="inline-flex items-center gap-4 px-12 py-6 md:px-16 md:py-8 bg-[#F5EFE7] text-[#050608] text-xl md:text-2xl group relative overflow-hidden"
//             whileHover={{
//               scale: 1.05,
//               boxShadow: "0 0 60px rgba(245,239,231,0.4)",
//             }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <motion.div
//               className="absolute inset-0 bg-linear-to-r from-transparent via-white to-transparent opacity-30"
//               animate={{ x: ["-200%", "200%"] }}
//               transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
//             />
//             <span className="relative z-10">Начать проект</span>
//             <ArrowRight className="w-6 h-6 md:w-8 md:h-8 relative z-10 transition-transform group-hover:translate-x-2" />
//           </motion.a>
//         </motion.div>
//       </div>

//       <ParticlesBackground />

//       <motion.div
//         className="absolute top-20 left-20 w-60 h-60 border-2 border-[#F5EFE7] opacity-5"
//         animate={{ rotate: 360 }}
//         transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
//       />
//       <motion.div
//         className="absolute bottom-20 right-20 w-80 h-80 border-2 border-[#F5EFE7] opacity-5"
//         animate={{ rotate: -360 }}
//         transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
//       />
//     </section>
//   );
// }
"use client";

import dynamic from "next/dynamic";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, Target, Zap } from "lucide-react";

const ParticlesBackground = dynamic(
  () =>
    import("@/src/components/ParticlesBackground").then(
      (m) => m.ParticlesBackground,
    ),
  { ssr: false },
);

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function ProcessCTA() {
  return (
    <section
      id="contact"
      className="relative px-6 md:px-12 lg:px-20 py-24 md:py-32 lg:py-40 bg-[#050816] text-[#F5EFE7] overflow-hidden"
    >
      {/* background spots */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -top-44 -left-40 h-[520px] w-[520px] bg-[radial-gradient(circle_at_center,_rgba(58,123,255,0.26),_transparent_65%)] blur-3xl" />
        <div className="absolute -bottom-56 -right-40 h-[620px] w-[620px] bg-[radial-gradient(circle_at_center,_rgba(76,194,255,0.22),_transparent_70%)] blur-3xl" />
      </div>

      {/* subtle grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(200,220,255,0.55) 0px, rgba(200,220,255,0.55) 1px, transparent 1px, transparent 64px), repeating-linear-gradient(90deg, rgba(200,220,255,0.55) 0px, rgba(200,220,255,0.55) 1px, transparent 1px, transparent 64px)",
          }}
          animate={{ backgroundPosition: ["0px 0px", "64px 64px"] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* icon row (premium capsules) */}
          <div className="flex items-center justify-center gap-4 md:gap-6 mb-10 md:mb-12">
            <FloatingIcon
              icon={<Target className="h-6 w-6 md:h-7 md:w-7 text-[#EAF2FF]" />}
              delay={0}
            />
            <FloatingIcon
              icon={<Zap className="h-6 w-6 md:h-7 md:w-7 text-[#EAF2FF]" />}
              delay={0.4}
            />
            <FloatingIcon
              icon={
                <Sparkles className="h-6 w-6 md:h-7 md:w-7 text-[#EAF2FF]" />
              }
              delay={0.9}
            />
          </div>

          {/* title */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05]">
            Готовы начать
            <br />
            работу?
          </h2>

          {/* subtitle */}
          <p className="mt-5 md:mt-7 text-base md:text-xl text-[#C7CEDF] opacity-80 max-w-3xl mx-auto leading-relaxed">
            Запишитесь на бесплатную консультацию. Обсудим ваш проект и соберём
            понятный план: сайт + WhatsApp + автоматизация.
          </p>

          {/* CTA */}
          <div className="mt-10 md:mt-12 flex items-center justify-center">
            <motion.a
              href="#contact"
              className="relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full
                         px-9 py-3.5 md:px-12 md:py-4 text-sm md:text-base font-medium
                         text-[#050816] shadow-[0_0_46px_rgba(76,194,255,0.55)]"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              {/* gradient bg */}
              <span className="absolute inset-0 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]" />

              {/* sheen */}
              <motion.span
                className="absolute inset-0 bg-[linear-gradient(120deg,_transparent_0%,_white_20%,_transparent_40%)] opacity-0"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%", opacity: 0.55 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
              />

              <span className="relative z-10">Начать проект</span>
              <ArrowRight className="relative z-10 h-5 w-5 md:h-6 md:w-6 transition-transform group-hover:translate-x-1" />
            </motion.a>
          </div>

          {/* tiny trust note */}
          <p className="mt-6 text-xs md:text-sm text-[#C7CEDF]/75">
            Ответим в течение 24 часов. Без навязчивых продаж.
          </p>
        </motion.div>
      </div>

      <ParticlesBackground />

      {/* floating geometric accents (softer, neon) */}
      <motion.div
        className="pointer-events-none absolute top-16 left-6 md:left-14 h-20 w-20 rounded-3xl border border-[#3A7BFF33]
                   bg-[radial-gradient(circle_at_top,_rgba(58,123,255,0.22),_transparent_70%)] opacity-50"
        animate={{ rotate: 360, scale: [1, 1.08, 1] }}
        transition={{
          rotate: { duration: 34, repeat: Infinity, ease: "linear" },
          scale: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
        }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-16 right-6 md:right-14 h-24 w-24 rounded-[32px] border border-[#4CC2FF33]
                   bg-[radial-gradient(circle_at_top,_rgba(76,194,255,0.20),_transparent_70%)] opacity-45"
        animate={{ rotate: -360, scale: [1, 1.06, 1] }}
        transition={{
          rotate: { duration: 44, repeat: Infinity, ease: "linear" },
          scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
        }}
      />
    </section>
  );
}

function FloatingIcon({
  icon,
  delay,
}: {
  icon: React.ReactNode;
  delay: number;
}) {
  return (
    <motion.div
      className="relative inline-flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-2xl border border-white/15
                 bg-[radial-gradient(circle_at_top,_#3A7BFF3b,_#050816)] overflow-hidden
                 shadow-[0_0_44px_rgba(58,123,255,0.55)]"
      animate={{ y: [0, -10, 0], rotate: [0, 8, 0] }}
      transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay }}
      aria-hidden="true"
    >
      <span className="relative z-10">{icon}</span>
      <motion.span
        className="absolute inset-0 bg-gradient-to-br from-transparent via-[#3A7BFF66] to-[#4CC2FF66]"
        initial={{ opacity: 0.35 }}
        whileHover={{ opacity: 0.75 }}
        transition={{ duration: 0.25 }}
      />
    </motion.div>
  );
}
