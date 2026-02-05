

// "use client";

// import { useEffect, useState } from "react";
// import { ArrowRight } from "lucide-react";
// import { motion } from "motion/react";
// import Image from "next/image";

// export function Hero() {
//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => setScrollY(window.scrollY);
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <section
//       id="hero"
//       className="
//         relative min-h-screen flex items-center
//         px-6 md:px-12 lg:px-20 py-32 overflow-visible
        
//         text-slate-100
//       "
//     >
//       {/* Неоновые волны */}
//       <div
//         className="pointer-events-none absolute -top-40 right-[-10%] h-96 w-96 rounded-full opacity-60 blur-3xl"
//         style={{
//           background:
//             "radial-gradient(circle, rgba(76,194,255,0.9), transparent 60%)",
//         }}
//       />
//       <div
//         className="pointer-events-none absolute bottom-[-20%] left-[-10%] h-[26rem] w-[26rem] rounded-full opacity-60 blur-3xl"
//         style={{
//           background:
//             "radial-gradient(circle, rgba(58,123,255,0.85), transparent 55%)",
//         }}
//       />

//       <div className="relative z-10 max-w-[1400px] mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
//         {/* Left Column */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//           style={{ transform: `translateY(${scrollY * 0.15}px)` }}
//         >
//           {/* Линия */}
//           <motion.div
//             className="w-16 h-0.5 mb-8 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-transparent"
//             initial={{ width: 0 }}
//             animate={{ width: 64 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           />

//           {/* Title */}
//           <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] mb-8 text-slate-100">
//             Сайты и автоматизация, которые приводят клиентов
//           </h1>

//           {/* Subtitle */}
//           <p className="text-xl md:text-2xl text-slate-300/90 mb-12 leading-relaxed max-w-xl">
//             Мы создаём сайты с интеграцией WhatsApp, CRM и AI-инструментов,
//             чтобы ваш бизнес получал заявки, отвечал быстрее и тратил меньше
//             времени на рутину.
//           </p>

//           {/* Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4">
//             {/* Primary */}
//             <motion.a
//               href="#contact"
//               className="
//                 relative group inline-flex items-center gap-3 px-8 py-5 rounded-full font-medium
//                 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#63E5FF]
//                 text-slate-900 shadow-[0_0_40px_rgba(76,194,255,0.55)]
//                 hover:shadow-[0_0_60px_rgba(76,194,255,0.8)]
//                 transition-all
//               "
//               whileHover={{ scale: 1.03 }}
//               whileTap={{ scale: 0.97 }}
//             >
//               <span className="relative z-10">Get a Free Demo</span>
//               <ArrowRight className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1" />

//               {/* shine layer */}
//               <div className="pointer-events-none absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
//             </motion.a>

//             {/* Secondary */}
//             <motion.a
//               href="#cases"
//               className="
//                 group px-8 py-5 rounded-full inline-flex items-center gap-3
//                 border border-cyan-400/60 text-slate-100
//                 hover:bg-cyan-500/5 hover:shadow-[0_0_30px_rgba(56,189,248,0.45)]
//                 transition-all
//               "
//               whileHover={{ scale: 1.03 }}
//               whileTap={{ scale: 0.97 }}
//             >
//               <span>See Real Results</span>
//             </motion.a>
//           </div>
//         </motion.div>

//         {/* Right Column Images */}
//         <motion.div
//           className="relative h-[500px] md:h-[600px]"
//           initial={{ opacity: 0, x: 40 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
//         >
//           {/* Top Card */}
//           <motion.div
//             className="
//               absolute top-0 right-0 w-[70%] h-[60%]
//               rounded-3xl overflow-hidden backdrop-blur-xl
//               border border-cyan-400/40 bg-[#0A0F1E]/80
//               shadow-[0_0_60px_rgba(59,130,246,0.35)]
//             "
//             style={{ transform: `translateY(${scrollY * 0.1}px)` }}
//             whileHover={{ scale: 1.05, rotate: 2 }}
//           >
//             <Image
//               src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?...&w=1080"
//               alt="Web design workspace"
//               className="w-full h-full object-cover mix-blend-screen opacity-80"
//               width={1080}
//               height={720}
//             />
//           </motion.div>

//           {/* Bottom Card */}
//           <motion.div
//             className="
//               absolute bottom-0 left-0 w-[70%] h-[60%]
//               rounded-3xl overflow-hidden backdrop-blur-xl
//               border border-indigo-400/50 bg-[#0B1020]/85
//               shadow-[0_0_70px_rgba(129,140,248,0.45)]
//             "
//             style={{ transform: `translateY(${scrollY * -0.08}px)` }}
//             whileHover={{ scale: 1.05, rotate: -2 }}
//           >
//             <Image
//               src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?...&w=1080"
//               alt="Modern office workspace"
//               className="w-full h-full object-cover mix-blend-screen opacity-85"
//               width={1080}
//               height={720}
//             />
//           </motion.div>

//           {/* Floating Neon Square */}
//           <motion.div
//             className="
//               absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
//               w-24 h-24 rounded-2xl border border-cyan-400/60
//               bg-[radial-gradient(circle_at_0%_0%,#4CC2FF,#3A7BFF,#8B5CF6,transparent)]
//               shadow-[0_0_60px_rgba(76,194,255,0.9)]
//               flex items-center justify-center
//             "
//             animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
//             transition={{
//               rotate: { duration: 20, repeat: Infinity, ease: "linear" },
//               scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
//             }}
//           >
//             <span className="text-[10px] tracking-widest uppercase text-slate-50/80">
//               SavonDev
//             </span>
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Grid Overlay */}
//       {/* <div className="pointer-events-none absolute inset-0 opacity-[0.12]">
//         <div
//           className="h-full w-full"
//           style={{
//             backgroundImage:
//               "linear-gradient(rgba(51,65,85,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(51,65,85,0.3) 1px, transparent 1px)",
//             backgroundSize: "80px 80px",
//           }}
//         />
//       </div> */}
//     </section>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { PageContainer } from "./Layout/PageContainer";



export function Hero() {
  const [scrollY, setScrollY] = useState(0);
 const reduce = useReducedMotion();
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="
        relative min-h-screen flex items-center
        py-32 overflow-visible
        text-slate-100
      "
    >
      {/* Неоновые волны (full-bleed, не зависят от контейнера) */}
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

      <PageContainer>
        <div className="relative z-10 w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{
              transform: `translateY(${scrollY * 0.15}px)`,
              willChange: "transform",
            }}
          >
            {/* Линия */}
            <motion.div
              className="w-16 h-0.5 mb-8 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-transparent"
              initial={{ width: 0 }}
              animate={{ width: 64 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />

            {/* Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] mb-8 text-slate-100">
              Сайты и автоматизация, которые приводят клиентов
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-slate-300/90 mb-12 leading-relaxed max-w-xl">
              Мы создаём сайты с интеграцией WhatsApp, CRM и AI-инструментов,
              чтобы ваш бизнес получал заявки, отвечал быстрее и тратил меньше
              времени на рутину.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Primary */}
              {/* <motion.a
                href="#contact"
                className="
                  relative group inline-flex items-center gap-3 px-8 py-5 rounded-full font-medium
                  bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#63E5FF]
                  text-slate-900 shadow-[0_0_40px_rgba(76,194,255,0.55)]
                  hover:shadow-[0_0_60px_rgba(76,194,255,0.8)]
                  transition-all
                "
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="relative z-10">Get a Free Demo</span>
                <ArrowRight className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1" />
                <div className="pointer-events-none absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a> */}
              <motion.a
                href="#contact-form"
                className="
    relative group inline-flex items-center justify-center gap-3
    overflow-hidden rounded-full
    px-9 py-5
    text-base md:text-lg font-medium
    text-[#050816]

    shadow-[0_0_40px_rgba(76,194,255,0.55)]
    hover:shadow-[0_0_65px_rgba(76,194,255,0.85)]
    transition-shadow
  "
                whileHover={reduce ? undefined : { scale: 1.03 }}
                whileTap={reduce ? undefined : { scale: 0.97 }}
              >
                {/* Main gradient (fixed palette) */}
                <span className="absolute inset-0 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]" />

                {/* Depth / glass layer (subtle, premium) */}
                <span
                  className="
      pointer-events-none absolute inset-0
      [background:linear-gradient(to_bottom,rgba(255,255,255,0.28),rgba(255,255,255,0.06)_45%,rgba(0,0,0,0.12))]
      mix-blend-overlay
    "
                  aria-hidden
                />

                {/* Hover soft highlight — like your variant */}
                <span
                  className="
      pointer-events-none absolute inset-0 rounded-full
      bg-white/10 opacity-0
      group-hover:opacity-100 transition-opacity
    "
                  aria-hidden
                />

            
                <span className="relative z-10">Запросить демо</span>
                <ArrowRight className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </motion.a>

              {/* Secondary */}
              <motion.a
                href="#cases"
                className="
                  group px-8 py-5 rounded-full inline-flex items-center gap-3
                  border border-cyan-400/60 text-slate-100
                  hover:bg-cyan-500/5 hover:shadow-[0_0_30px_rgba(56,189,248,0.45)]
                  transition-all
                "
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span>See Real Results</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column Images */}
          <motion.div
            className="relative h-[500px] md:h-[600px]"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Top Card */}
            <motion.div
              className="
                absolute top-0 right-0 w-[70%] h-[60%]
                rounded-3xl overflow-hidden backdrop-blur-xl
                border border-cyan-400/40 bg-[#0A0F1E]/80
                shadow-[0_0_60px_rgba(59,130,246,0.35)]
              "
              style={{
                transform: `translateY(${scrollY * 0.1}px)`,
                willChange: "transform",
              }}
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?...&w=1080"
                alt="Web design workspace"
                className="w-full h-full object-cover mix-blend-screen opacity-80"
                width={1080}
                height={720}
              />
            </motion.div>

            {/* Bottom Card */}
            <motion.div
              className="
                absolute bottom-0 left-0 w-[70%] h-[60%]
                rounded-3xl overflow-hidden backdrop-blur-xl
                border border-indigo-400/50 bg-[#0B1020]/85
                shadow-[0_0_70px_rgba(129,140,248,0.45)]
              "
              style={{
                transform: `translateY(${scrollY * -0.08}px)`,
                willChange: "transform",
              }}
              whileHover={{ scale: 1.05, rotate: -2 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?...&w=1080"
                alt="Modern office workspace"
                className="w-full h-full object-cover mix-blend-screen opacity-85"
                width={1080}
                height={720}
              />
            </motion.div>

            {/* Floating Neon Square */}
            <motion.div
              className="
                absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                w-24 h-24 rounded-2xl border border-cyan-400/60
                bg-[radial-gradient(circle_at_0%_0%,#4CC2FF,#3A7BFF,#8B5CF6,transparent)]
                shadow-[0_0_60px_rgba(76,194,255,0.9)]
                flex items-center justify-center
              "
              animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              }}
            >
              <span className="text-[10px] tracking-widest uppercase text-slate-50/80">
                SavonDev
              </span>
            </motion.div>
          </motion.div>
        </div>
      </PageContainer>
    </section>
  );
}
