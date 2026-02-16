


// "use client";

// import { useEffect, useState } from "react";
// import { ArrowRight } from "lucide-react";
// import { motion, useReducedMotion } from "motion/react";
// import Image from "next/image";
// import { PageContainer } from "./Layout/PageContainer";

// export function Hero() {
//   const [scrollY, setScrollY] = useState(0);
//   const reduce = useReducedMotion();

//   useEffect(() => {
//     const handleScroll = () => setScrollY(window.scrollY);
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <section
//       id="hero"
//       className="
//         relative min-h-[100svh] flex items-center
//         overflow-visible
//         text-slate-100

//         /* ✅ HERO PADDING STANDARD (for fixed navbar) */
//         pt-22 pb-10
//         md:pt-28 md:pb-14
//         lg:pt-30 lg:pb-16
//       "
//     >
//       <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
//         {/* background image */}
//         <div className="absolute inset-0">
//           <Image
//             src="https://images.unsplash.com/photo-1643576780112-d390f5de9241?q=80&w=1178&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             alt=""
//             fill
//             priority
//             sizes="100vw"
//             className="object-cover opacity-55 saturate-[0.85]"
//           />
//         </div>

//         {/* мягкий градиент только для читаемости */}
//         <div className="absolute inset-0 bg-gradient-to-b from-[#050814]/45 via-transparent to-transparent" />

//         {/* локальные glow-споты */}
//         <div className="absolute inset-0 opacity-70">
//           <div className="absolute -top-44 -left-44 h-[520px] w-[520px] bg-[radial-gradient(circle_at_center,_#3A7BFF44,_transparent_72%)] blur-3xl" />
//           <div className="absolute top-[40%] -right-52 h-[680px] w-[680px] bg-[radial-gradient(circle_at_center,_#4CC2FF33,_transparent_72%)] blur-3xl" />
//         </div>

//         {/* very subtle noise */}
//         <div className="absolute inset-0 opacity-[0.08] mix-blend-soft-light">
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(255,255,255,0.08),_transparent_40%),radial-gradient(circle_at_70%_60%,_rgba(255,255,255,0.06),_transparent_45%)]" />
//         </div>

//         {/* плавный fade вниз */}
//         <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#020410]" />
//       </div>

//       <PageContainer>
//         <div className="relative z-10 w-full grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
//           {/* Left Column */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//             style={{
//               transform: `translateY(${scrollY * 0.15}px)`,
//               willChange: "transform",
//             }}
//           >
//             {/* Линия */}
//             <motion.div
//               className="w-16 h-0.5 mb-6 md:mb-8 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-transparent"
//               initial={{ width: 0 }}
//               animate={{ width: 64 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//             />

//             {/* Title (✅ clamp + max width to prevent overflow on different desktops) */}
//             <h1
//               className="
//                 text-balance
//                 font-semibold
//                 leading-[0.98]
//                 text-slate-100
//                 mb-6 md:mb-7 lg:mb-8

//                 /* стабильные переносы + контроль высоты */
//                 max-w-[18ch]
//                 sm:max-w-[20ch]
//                 lg:max-w-[21ch]
//                 xl:max-w-[22ch]

//                 /* адаптивный размер: mobile → tablet → desktop */
//                 text-[clamp(2.35rem,5.8vw,4.8rem)]
//                 md:text-[clamp(2.9rem,5.0vw,5.2rem)]
//                 lg:text-[clamp(3.1rem,4.2vw,5.3rem)]
//               "
//             >
//               Сайты и автоматизация, которые приводят клиентов
//             </h1>

//             {/* Subtitle (✅ clamp + width) */}
//             <p
//               className="
//                 text-slate-300/90 leading-relaxed
//                 mb-10 md:mb-12

//                 max-w-[52ch]
//                 lg:max-w-[58ch]

//                 text-[clamp(1.02rem,2.2vw,1.25rem)]
//                 md:text-[clamp(1.05rem,1.7vw,1.4rem)]
//               "
//             >
//               Мы создаём сайты с интеграцией WhatsApp, CRM и AI-инструментов,
//               чтобы ваш бизнес получал заявки, отвечал быстрее и тратил меньше
//               времени на рутину.
//             </p>

//             {/* Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4">
//               {/* Primary */}
//               <motion.a
//                 href="#contact-form"
//                 className="
//                   relative group inline-flex items-center justify-center gap-3
//                   overflow-hidden rounded-full
//                   px-9 py-5
//                   text-base md:text-lg font-medium
//                   text-[#050816]
//                   shadow-[0_0_40px_rgba(76,194,255,0.55)]
//                   hover:shadow-[0_0_65px_rgba(76,194,255,0.85)]
//                   transition-shadow
//                 "
//                 whileHover={reduce ? undefined : { scale: 1.03 }}
//                 whileTap={reduce ? undefined : { scale: 0.97 }}
//               >
//                 <span className="absolute inset-0 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]" />
//                 <span
//                   className="
//                     pointer-events-none absolute inset-0
//                     [background:linear-gradient(to_bottom,rgba(255,255,255,0.28),rgba(255,255,255,0.06)_45%,rgba(0,0,0,0.12))]
//                     mix-blend-overlay
//                   "
//                   aria-hidden
//                 />
//                 <span
//                   className="
//                     pointer-events-none absolute inset-0 rounded-full
//                     bg-white/10 opacity-0
//                     group-hover:opacity-100 transition-opacity
//                   "
//                   aria-hidden
//                 />
//                 <span className="relative z-10">Запросить демо</span>
//                 <ArrowRight className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1" />
//               </motion.a>

//               {/* Secondary */}
//               <motion.a
//                 href="#process"
//                 className="
//                   relative group inline-flex items-center justify-center gap-3
//                   px-8 py-5 rounded-full font-medium
//                   text-[#F5EFE7]
//                   backdrop-blur-sm
//                   transition-all
//                 "
//                 whileHover={reduce ? undefined : { scale: 1.03 }}
//                 whileTap={reduce ? undefined : { scale: 0.97 }}
//               >
//                 <span
//                   className="
//                     pointer-events-none absolute inset-0 rounded-full p-[1px]
//                     bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]
//                   "
//                 >
//                   <span className="block h-full w-full rounded-full bg-[#050608]" />
//                 </span>

//                 <span
//                   className="
//                     pointer-events-none absolute inset-0 rounded-full
//                     bg-[radial-gradient(circle_at_center,rgba(76,194,255,0.25),transparent_60%)]
//                     opacity-0 group-hover:opacity-100
//                     transition-opacity
//                   "
//                 />
//                 <span
//                   className="
//                     pointer-events-none absolute inset-0 rounded-full
//                     opacity-0 group-hover:opacity-100
//                     transition-opacity
//                     shadow-[0_0_34px_rgba(76,194,255,0.45)]
//                   "
//                 />

//                 <span className="relative z-10">How it works</span>
//               </motion.a>
//             </div>
//           </motion.div>
//         </div>
//       </PageContainer>
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
        relative min-h-[100svh] flex items-center
        overflow-visible text-slate-100

        pt-22 pb-10
        md:pt-28 md:pb-14
        lg:pt-30 lg:pb-16
      "
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1643576780112-d390f5de9241?q=80&w=1178&auto=format&fit=crop"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-55 saturate-[0.85]"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-[#050814]/45 via-transparent to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#020410]" />
      </div>

      <PageContainer>
        <div className="relative z-10 w-full flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{
              transform: `translateY(${scrollY * 0.15}px)`,
              willChange: "transform",
            }}
            className="flex flex-col items-center"
          >
            {/* Accent Line */}

            {/* Title */}
            <h1
              className="
                font-semibold leading-[0.98]
                mb-6 md:mb-8
                text-balance

                max-w-[18ch] sm:max-w-[20ch] lg:max-w-[22ch]

                text-[clamp(2.35rem,5.8vw,4.8rem)]
                md:text-[clamp(2.9rem,5.0vw,5.2rem)]
                lg:text-[clamp(3.1rem,4.2vw,5.3rem)]
              "
            >
              Сайты и автоматизация, которые приводят клиентов
            </h1>

            {/* Subtitle (ярче) */}
            <p
              className="
              leading-relaxed
mb-10 md:mb-12

text-white

max-w-[48ch] md:max-w-[52ch] lg:max-w-[58ch]

text-[clamp(1rem,1.4vw+0.6rem,1.35rem)]
              "
            >
              Мы создаём сайты с интеграцией WhatsApp, CRM и AI-инструментов,
              чтобы ваш бизнес получал заявки, отвечал быстрее и тратил меньше
              времени на рутину.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              {/* Primary */}
              <motion.a
                href="#contact-form"
                className="
                 relative group inline-flex items-center justify-center
    overflow-hidden rounded-full
    px-10 py-3.5 md:px-12 md:py-4
    text-sm md:text-base font-medium
    text-[#050816]
    shadow-[0_0_40px_rgba(76,194,255,0.55)]
    hover:shadow-[0_0_65px_rgba(76,194,255,0.85)]
    transition-shadow
                "
                whileHover={reduce ? undefined : { scale: 1.03 }}
                whileTap={reduce ? undefined : { scale: 0.97 }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]" />
                <span className="relative z-10">Запросить демо</span>
                <ArrowRight className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </motion.a>

              {/* Secondary */}
              <motion.a
                href="#process"
                className="
                  relative group inline-flex items-center justify-center gap-3
                  px-8 py-5 rounded-full font-medium
                  text-[#F5EFE7]
                  backdrop-blur-sm
                  transition-all
                "
                whileHover={reduce ? undefined : { scale: 1.03 }}
                whileTap={reduce ? undefined : { scale: 0.97 }}
              >
                <span
                  className="
                    pointer-events-none absolute inset-0 rounded-full p-[1px]
                    bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]
                  "
                >
                  <span className="block h-full w-full rounded-full bg-[#050608]" />
                </span>

                <span className="relative z-10">How it works</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </PageContainer>
    </section>
  );
}
