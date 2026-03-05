// "use client";

// import { motion, useReducedMotion } from "motion/react";
// import type { LucideIcon } from "lucide-react";
// import { PageContainer } from "../Layout/PageContainer";
// import Image from "next/image";

// type HeroData = {
//   badge: string;
//   title: string;
//   subtitle: string;
//   stats: {
//     value: string;
//     label: string;
//     icon: LucideIcon;
//   }[];
// };

// const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

// export function ReviewsHero({ data }: { data: HeroData }) {
//   const reduce = useReducedMotion();

//   return (
//     <section
//       className="
//         relative min-h-[100svh] flex items-center
//         overflow-visible text-slate-100
//         pt-22 pb-12
//         md:pt-28 md:pb-16
//         lg:pt-30 lg:pb-20
//       "
//     >
//       <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
//         {/* background image */}
//         <div className="absolute inset-0">
//           <Image
//             src="https://images.unsplash.com/photo-1672380135241-c024f7fbfa13?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             alt=""
//             fill
//             priority
//             sizes="100vw"
//             className="object-cover opacity-55 saturate-[0.85]"
//           />
//         </div>

//         <div className="absolute inset-0 bg-gradient-to-b from-[#050814]/45 via-transparent to-transparent" />

//         <div className="absolute inset-0 opacity-70">
//           <div className="absolute -top-44 -left-44 h-[520px] w-[520px] bg-[radial-gradient(circle_at_center,_#3A7BFF44,_transparent_72%)] blur-3xl" />
//           <div className="absolute top-[40%] -right-52 h-[680px] w-[680px] bg-[radial-gradient(circle_at_center,_#4CC2FF33,_transparent_72%)] blur-3xl" />
//         </div>

//         <div className="absolute inset-0 opacity-[0.08] mix-blend-soft-light">
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(255,255,255,0.08),_transparent_40%),radial-gradient(circle_at_70%_60%,_rgba(255,255,255,0.06),_transparent_45%)]" />
//         </div>

//         <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#020410]" />
//       </div>

//       <PageContainer className="relative z-10 w-full text-[#F5EFE7]">
//         <div className="min-h-[calc(100svh-6rem)] grid place-items-center">
//           <motion.div
//             initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
//             className="w-full flex flex-col items-center text-center"
//           >
//             {/* Title (Home-style) */}
//             <h1
//               className="
//                 font-semibold tracking-tight text-balance
//                 leading-[0.98]
//                 mb-6 md:mb-8

//                 max-w-[18ch]
//                 sm:max-w-[20ch]
//                 lg:max-w-[22ch]
//                 mx-auto

//                 text-[clamp(2.35rem,5.8vw,4.8rem)]
//                 md:text-[clamp(2.9rem,5.0vw,5.2rem)]
//                 lg:text-[clamp(3.1rem,4.2vw,5.3rem)]
//               "
//             >
//               {data.title}
//             </h1>

//             {/* Subtitle (brighter + clamp) */}
//             <p
//               className="
//            leading-relaxed
// mb-10 md:mb-12

// text-white

// max-w-[48ch] md:max-w-[52ch] lg:max-w-[58ch]

// text-[clamp(1rem,1.4vw+0.6rem,1.35rem)]
//               "
//             >
//               {data.subtitle}
//             </p>

//             {/* Stats */}
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full max-w-[1400px] mx-auto">
//               {data.stats.map((stat, index) => {
//                 const Icon = stat.icon;

//                 return (
//                   <motion.div
//                     key={`${stat.label}-${index}`}
//                     initial={
//                       reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 26 }
//                     }
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{
//                       duration: 0.6,
//                       delay: 0.45 + index * 0.08,
//                       ease: EASE,
//                     }}
//                     className="group relative rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] backdrop-blur-xl p-5 md:p-6 shadow-[0_22px_80px_rgba(0,0,0,0.75)] overflow-hidden"
//                   >
//                     <div className="pointer-events-none absolute -inset-10 opacity-30 blur-2xl bg-[radial-gradient(circle_at_top,rgba(58,123,255,0.55),transparent_60%)]" />

//                     <motion.div
//                       className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                       style={{
//                         background:
//                           "radial-gradient(circle_at_center, rgba(76,194,255,0.25), transparent 60%)",
//                       }}
//                     />

//                     <motion.div
//                       className="pointer-events-none absolute -inset-10 opacity-0 group-hover:opacity-100"
//                       style={{
//                         background:
//                           "linear-gradient(115deg, transparent 0%, rgba(255,255,255,0.20) 30%, transparent 60%)",
//                         mixBlendMode: "screen",
//                       }}
//                       initial={reduce ? false : { x: "-140%" }}
//                       whileHover={reduce ? undefined : { x: "140%" }}
//                       transition={{ duration: 0.9, ease: "easeInOut" }}
//                     />

//                     <div className="relative z-10 transform-none will-change-auto">
//                       <div className="flex items-center gap-3 mb-3">
//                         <div className="relative flex h-10 w-10 items-center justify-center rounded-2xl border border-white/15 bg-[radial-gradient(circle_at_top,_#3A7BFF3b,_#050816)] overflow-hidden shadow-[0_0_36px_rgba(58,123,255,0.55)]">
//                           <Icon className="relative z-10 h-5 w-5 text-[#E8F2FF]" />
//                           <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#3A7BFF66] to-[#4CC2FF66] opacity-40" />
//                         </div>

//                         <p className="text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.22em] text-white/70">
//                           {stat.label}
//                         </p>
//                       </div>

//                       <p className="text-base sm:text-lg md:text-xl font-semibold text-[#F2F4FA] leading-snug">
//                         {stat.value}
//                       </p>
//                     </div>

//                     <div
//                       className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent"
//                       style={{
//                         background:
//                           "linear-gradient(135deg, rgba(58,123,255,0.85), rgba(76,194,255,0.85), rgba(155,93,255,0.7))",
//                         WebkitMask:
//                           "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
//                         WebkitMaskComposite: "xor",
//                         maskComposite: "exclude",
//                         padding: "1px",
//                         opacity: 0.28,
//                       }}
//                     />
//                   </motion.div>
//                 );
//               })}
//             </div>
//           </motion.div>
//         </div>
//       </PageContainer>
//     </section>
//   );
// }
"use client";

import { motion, useReducedMotion } from "motion/react";
import type { LucideIcon } from "lucide-react";
import { PageContainer } from "../Layout/PageContainer";
import Image from "next/image";

type HeroData = {
  badge: string;
  title: string;
  subtitle: string;
  stats: {
    value: string;
    label: string;
    icon: LucideIcon;
  }[];
};

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function ReviewsHero({ data }: { data: HeroData }) {
  const reduce = useReducedMotion();

  const titleId = "reviews-hero-title";
  const subtitleId = "reviews-hero-subtitle";
  const statsId = "reviews-hero-stats";

  return (
    <section
      id="reviews-hero"
      aria-labelledby={titleId}
      aria-describedby={subtitleId}
      className="
        relative min-h-[100svh] flex items-center
        overflow-visible text-slate-100
        pt-22 pb-12
        md:pt-28 md:pb-16
        lg:pt-30 lg:pb-20
      "
    >
      {/* Семантические якоря (для SEO/доступности) */}
      <div className="sr-only">
        <h1 id={titleId}>{data.title}</h1>
        <p id={subtitleId}>{data.subtitle}</p>
        <h2 id={statsId}>Key points</h2>
      </div>

      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden z-0"
      >
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1672380135241-c024f7fbfa13?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-55 saturate-[0.85]"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-[#050814]/45 via-transparent to-transparent" />

        <div className="absolute inset-0 opacity-70">
          <div className="absolute -top-44 -left-44 h-[520px] w-[520px] bg-[radial-gradient(circle_at_center,_#3A7BFF44,_transparent_72%)] blur-3xl" />
          <div className="absolute top-[40%] -right-52 h-[680px] w-[680px] bg-[radial-gradient(circle_at_center,_#4CC2FF33,_transparent_72%)] blur-3xl" />
        </div>

        <div className="absolute inset-0 opacity-[0.08] mix-blend-soft-light">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(255,255,255,0.08),_transparent_40%),radial-gradient(circle_at_70%_60%,_rgba(255,255,255,0.06),_transparent_45%)]" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#020410]" />
      </div>

      <PageContainer className="relative z-10 w-full text-[#F5EFE7]">
        <div className="min-h-[calc(100svh-6rem)] grid place-items-center">
          <motion.div
            initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
            className="w-full flex flex-col items-center text-center"
          >
            {/* Visible Title/SubTitle (дублируем смысл, sr-only уже есть) */}
            <h1
              aria-hidden="true"
              className="
                font-semibold tracking-tight text-balance
                leading-[0.98]
                mb-6 md:mb-8
                max-w-[18ch]
                sm:max-w-[20ch]
                lg:max-w-[22ch]
                mx-auto
                text-[clamp(2.35rem,5.8vw,4.8rem)]
                md:text-[clamp(2.9rem,5.0vw,5.2rem)]
                lg:text-[clamp(3.1rem,4.2vw,5.3rem)]
              "
            >
              {data.title}
            </h1>

            <p
              aria-hidden="true"
              className="
                leading-relaxed
                mb-10 md:mb-12
                text-white
                max-w-[48ch] md:max-w-[52ch] lg:max-w-[58ch]
                text-[clamp(1rem,1.4vw+0.6rem,1.35rem)]
              "
            >
              {data.subtitle}
            </p>

            {/* Stats as DL (лучше для скринридеров) */}
            <dl
              aria-labelledby={statsId}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full max-w-[1400px] mx-auto"
            >
              {data.stats.map((stat, index) => {
                const Icon = stat.icon;
                const statLabelId = `reviews-stat-label-${index}`;
                const statValueId = `reviews-stat-value-${index}`;

                return (
                  <motion.div
                    key={`${stat.label}-${index}`}
                    initial={
                      reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 26 }
                    }
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.45 + index * 0.08,
                      ease: EASE,
                    }}
                    className="group relative rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] backdrop-blur-xl p-5 md:p-6 shadow-[0_22px_80px_rgba(0,0,0,0.75)] overflow-hidden"
                    role="group"
                    aria-labelledby={statLabelId}
                    aria-describedby={statValueId}
                  >
                    <div
                      className="pointer-events-none absolute -inset-10 opacity-30 blur-2xl bg-[radial-gradient(circle_at_top,rgba(58,123,255,0.55),transparent_60%)]"
                      aria-hidden="true"
                    />

                    <motion.div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background:
                          "radial-gradient(circle_at_center, rgba(76,194,255,0.25), transparent 60%)",
                      }}
                    />

                    <motion.div
                      aria-hidden="true"
                      className="pointer-events-none absolute -inset-10 opacity-0 group-hover:opacity-100"
                      style={{
                        background:
                          "linear-gradient(115deg, transparent 0%, rgba(255,255,255,0.20) 30%, transparent 60%)",
                        mixBlendMode: "screen",
                      }}
                      initial={reduce ? false : { x: "-140%" }}
                      whileHover={reduce ? undefined : { x: "140%" }}
                      transition={{ duration: 0.9, ease: "easeInOut" }}
                    />

                    <div className="relative z-10 transform-none will-change-auto">
                      <div className="flex items-center gap-3 mb-3">
                        <div
                          className="relative flex h-10 w-10 items-center justify-center rounded-2xl border border-white/15 bg-[radial-gradient(circle_at_top,_#3A7BFF3b,_#050816)] overflow-hidden shadow-[0_0_36px_rgba(58,123,255,0.55)]"
                          aria-hidden="true"
                        >
                          <Icon className="relative z-10 h-5 w-5 text-[#E8F2FF]" />
                          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#3A7BFF66] to-[#4CC2FF66] opacity-40" />
                        </div>

                        <dt
                          id={statLabelId}
                          className="text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.22em] text-white/70"
                        >
                          {stat.label}
                        </dt>
                      </div>

                      <dd
                        id={statValueId}
                        className="text-base sm:text-lg md:text-xl font-semibold text-[#F2F4FA] leading-snug"
                      >
                        {stat.value}
                      </dd>
                    </div>

                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(58,123,255,0.85), rgba(76,194,255,0.85), rgba(155,93,255,0.7))",
                        WebkitMask:
                          "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                        WebkitMaskComposite: "xor",
                        maskComposite: "exclude",
                        padding: "1px",
                        opacity: 0.28,
                      }}
                    />
                  </motion.div>
                );
              })}
            </dl>
          </motion.div>
        </div>
      </PageContainer>
    </section>
  );
}