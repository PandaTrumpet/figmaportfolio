


// "use client";

// import { motion, MotionValue, useReducedMotion } from "motion/react";
// import { ChevronDown } from "lucide-react";

// import { PageContainer } from "../Layout/PageContainer";
// import Image from "next/image";


// type HeroData = {
//   badge: string;
//   title: string;
//   subtitle: string;
// };

// const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

// export function ProcessHero({
//   data,
//   opacity,
// }: {
//   data: HeroData;
//   opacity: MotionValue<number>;
// }) {
//   const reduce = useReducedMotion();

//   return (
//     <section
//       className="relative min-h-screen
//      pt-22 pb-12
//         md:pt-28 md:pb-16
//         lg:pt-30 lg:pb-20
//     flex items-center justify-center overflow-visible text-[#F5EFE7]"
//     >
//       <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
//         {/* background image */}
//         <div className="absolute inset-0">
//           <Image
//             src="https://images.unsplash.com/photo-1758691736804-4e88c52ad58b?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             alt=""
//             fill
//             priority
//             sizes="100vw"
//             className="object-cover opacity-55 saturate-[0.85]"
//           />
//         </div>

//         {/* мягкий градиент только для читаемости (без "дна" секции) */}
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
//       {/* LOCAL FX — clip ONLY background */}
//       <div
//         className="
//           pointer-events-none absolute inset-0 -z-10 overflow-hidden
//           [mask-image:linear-gradient(to_bottom,black_0%,black_80%,transparent_100%)]
//           [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_80%,transparent_100%)]
//         "
//         aria-hidden="true"
//       ></div>

//       {/* CONTENT */}
//       <PageContainer>
//         <motion.div
//           className="relative z-10 w-full text-center"
//           style={{ opacity }}
//         >
//           <motion.div
//             initial={{ opacity: 0, y: 70 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 0.15, ease: EASE }}
//           >
//             {/* Title */}
//             <h1 className="mx-auto max-w-5xl text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] tracking-tight">
//               {data.title}
//             </h1>

//             {/* Subtitle */}
//             <p className="mt-10 mb-16 text-base sm:text-lg md:text-xl lg:text-2xl text-[#C7CEDF] max-w-4xl mx-auto leading-relaxed">
//               {data.subtitle}
//             </p>

//             {/* Scroll hint */}
//             <motion.div
//               className="inline-flex flex-col items-center gap-3"
//               animate={reduce ? undefined : { y: [0, 10, 0] }}
//               transition={
//                 reduce
//                   ? undefined
//                   : { duration: 2.6, repeat: Infinity, ease: "easeInOut" }
//               }
//             >
//               <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
//                 <div
//                   className="pointer-events-none absolute -inset-3 rounded-2xl
//                   bg-[radial-gradient(circle_at_center,_rgba(58,123,255,0.35),_transparent_70%)]
//                   blur-2xl opacity-70"
//                 />
//                 <ChevronDown className="relative h-6 w-6 text-[#E8F2FF] opacity-70" />
//               </div>

//               <p className="text-[11px] md:text-xs uppercase tracking-widest text-[#C7CEDF]/70">
//                 Посмотреть процесс
//               </p>
//             </motion.div>
//           </motion.div>
//         </motion.div>
//       </PageContainer>

   
//     </section>
//   );
// }


"use client";

import { motion, MotionValue, useReducedMotion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { PageContainer } from "../Layout/PageContainer";
import Image from "next/image";

type HeroData = {
  badge: string;
  title: string;
  subtitle: string;
};

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function ProcessHero({
  data,
  opacity,
}: {
  data: HeroData;
  opacity: MotionValue<number>;
}) {
  const reduce = useReducedMotion();

  return (
    <section
      className="
        relative min-h-[100svh]
        pt-22 pb-12
        md:pt-28 md:pb-16
        lg:pt-30 lg:pb-20
        flex items-center justify-center
        overflow-visible text-[#F5EFE7]
      "
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
        {/* background image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1758691736804-4e88c52ad58b?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-55 saturate-[0.85]"
          />
        </div>

        {/* мягкий градиент только для читаемости */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050814]/45 via-transparent to-transparent" />

        {/* локальные glow-споты */}
        <div className="absolute inset-0 opacity-70">
          <div className="absolute -top-44 -left-44 h-[520px] w-[520px] bg-[radial-gradient(circle_at_center,_#3A7BFF44,_transparent_72%)] blur-3xl" />
          <div className="absolute top-[40%] -right-52 h-[680px] w-[680px] bg-[radial-gradient(circle_at_center,_#4CC2FF33,_transparent_72%)] blur-3xl" />
        </div>

        {/* very subtle noise */}
        <div className="absolute inset-0 opacity-[0.08] mix-blend-soft-light">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(255,255,255,0.08),_transparent_40%),radial-gradient(circle_at_70%_60%,_rgba(255,255,255,0.06),_transparent_45%)]" />
        </div>

        {/* плавный fade вниз */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#020410]" />
      </div>

      {/* LOCAL FX — clip ONLY background */}
      <div
        className="
          pointer-events-none absolute inset-0 -z-10 overflow-hidden
          [mask-image:linear-gradient(to_bottom,black_0%,black_80%,transparent_100%)]
          [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_80%,transparent_100%)]
        "
        aria-hidden="true"
      />

      {/* CONTENT */}
      <PageContainer>
        <motion.div className="relative z-10 w-full" style={{ opacity }}>
          <div className="min-h-[calc(100svh-6rem)] grid place-items-center">
            <motion.div
              initial={{ opacity: 0, y: 70 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.15, ease: EASE }}
              className="w-full flex flex-col items-center text-center"
            >
              {/* Title (✅ clamp + controlled width) */}
              <h1
                className="
                  font-semibold tracking-tight text-balance
                  leading-[0.98]
                  text-[#F5EFE7]

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

              {/* Subtitle (✅ brighter + clamp) */}
              <p
                className="
                  mt-7 md:mt-9
                  mb-10 md:mb-14
                  leading-relaxed
                  text-white/90

                  max-w-[52ch]
                  lg:max-w-[60ch]
                  mx-auto

                  text-[clamp(1.05rem,2.2vw,1.25rem)]
                  md:text-[clamp(1.1rem,1.7vw,1.45rem)]
                "
              >
                {data.subtitle}
              </p>

              {/* Scroll hint */}
              <motion.div
                className="inline-flex flex-col items-center gap-3"
                animate={reduce ? undefined : { y: [0, 10, 0] }}
                transition={
                  reduce
                    ? undefined
                    : { duration: 2.6, repeat: Infinity, ease: "easeInOut" }
                }
              >
                <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
                  <div
                    className="pointer-events-none absolute -inset-3 rounded-2xl
                    bg-[radial-gradient(circle_at_center,_rgba(58,123,255,0.35),_transparent_70%)]
                    blur-2xl opacity-70"
                  />
                  <ChevronDown className="relative h-6 w-6 text-[#E8F2FF] opacity-70" />
                </div>

                <p className="text-[11px] md:text-xs uppercase tracking-widest text-white/70">
                  Посмотреть процесс
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </PageContainer>
    </section>
  );
}
