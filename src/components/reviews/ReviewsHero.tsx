

// "use client";

// import { motion, MotionValue, useReducedMotion } from "motion/react";
// import { Star } from "lucide-react";
// import type { LucideIcon } from "lucide-react";

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

// export function ReviewsHero({
//   data,
//   opacity,
// }: {
//   data: HeroData;
//   opacity: MotionValue<number>;
// }) {
//   const reduce = useReducedMotion();

//   return (
//     <section className="relative min-h-[92vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-[#050816]">
//       {/* Night Waves background */}
//       <div className="pointer-events-none absolute inset-0">
//         {/* Deep base gradient */}
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(58,123,255,0.18),_transparent_55%),radial-gradient(circle_at_bottom_right,_rgba(76,194,255,0.16),_transparent_60%),radial-gradient(circle_at_bottom_left,_rgba(155,93,255,0.12),_transparent_55%)]" />

//         {/* Soft grid overlay */}
//         <div className="absolute inset-0 opacity-[0.14] [mask-image:radial-gradient(circle_at_center,black_55%,transparent_78%)]">
//           <div className="h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:54px_54px]" />
//         </div>


//         {/* vignette */}
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.55)_100%)]" />
//       </div>

//       {/* Content */}
//       <motion.div
//         className="relative z-10 max-w-[1400px] mx-auto w-full px-6 md:px-12 lg:px-20 text-center text-[#F5EFE7]"
//         style={{ opacity }}
//       >
//         <motion.div
//           initial={{ opacity: 0, y: 60 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
//         >
//           {/* Badge */}
//           <motion.div
//             className="inline-flex justify-center mb-10"
//             animate={reduce ? undefined : { y: [0, -10, 0] }}
//             transition={
//               reduce
//                 ? undefined
//                 : { duration: 4.2, repeat: Infinity, ease: "easeInOut" }
//             }
//           >
//             <div className="relative inline-flex items-center gap-3 rounded-full px-6 py-3 border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] backdrop-blur-xl shadow-[0_18px_70px_rgba(0,0,0,0.65)]">
//               <span className="absolute -inset-6 rounded-full bg-[radial-gradient(circle_at_center,rgba(76,194,255,0.28),transparent_70%)] blur-2xl -z-10" />
//               <Star className="h-5 w-5 text-[#E8F2FF] fill-[#E8F2FF]" />
//               <span className="text-xs md:text-sm uppercase tracking-[0.28em] text-[#EAF0FF]/90">
//                 {data.badge}
//               </span>
//             </div>
//           </motion.div>

//           {/* Title */}
//           <h1 className="font-semibold tracking-tight leading-[0.92] mb-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
//             <span className="bg-clip-text text-transparent bg-[linear-gradient(90deg,#F5EFE7_0%,#E8F2FF_25%,#4CC2FF_55%,#9B5DFF_100%)]">
//               {data.title}
//             </span>
//           </h1>

//           {/* Subtitle */}
//           <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#C7CEDF] max-w-4xl mx-auto leading-relaxed mb-12">
//             {data.subtitle}
//           </p>

//           {/* Stats */}
//           {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
//             {data.stats.map((stat, index) => (
//               <motion.div
//                 key={`${stat.label}-${index}`}
//                 initial={{ opacity: 0, y: 26 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{
//                   duration: 0.6,
//                   delay: 0.45 + index * 0.08,
//                   ease: EASE,
//                 }}
//                 className="group relative rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] backdrop-blur-xl p-5 md:p-6 shadow-[0_22px_80px_rgba(0,0,0,0.75)] overflow-hidden"
//               >
             
//                 <div className="pointer-events-none absolute -inset-10 opacity-30 blur-2xl bg-[radial-gradient(circle_at_top,rgba(58,123,255,0.55),transparent_60%)]" />

             
//                 <motion.div
//                   className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                   style={{
//                     background:
//                       "radial-gradient(circle_at_center, rgba(76,194,255,0.25), transparent 60%)",
//                   }}
//                 />

             
//                 <motion.div
//                   className="pointer-events-none absolute -inset-10 opacity-0 group-hover:opacity-100"
//                   style={{
//                     background:
//                       "linear-gradient(115deg, transparent 0%, rgba(255,255,255,0.20) 30%, transparent 60%)",
//                     mixBlendMode: "screen",
//                   }}
//                   initial={{ x: "-140%" }}
//                   whileHover={{ x: "140%" }}
//                   transition={{ duration: 0.9, ease: "easeInOut" }}
//                 />

             
//                 <div className="relative z-10 transform-none will-change-auto">
//                   <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#F2F4FA] mb-1">
//                     {stat.value}
//                   </p>
//                   <p className="text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.22em] text-[#C7CEDF]/75">
//                     {stat.label}
//                   </p>
//                 </div>

          
//                 <div
//                   className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent"
//                   style={{
//                     background:
//                       "linear-gradient(135deg, rgba(58,123,255,0.85), rgba(76,194,255,0.85), rgba(155,93,255,0.7))",
//                     WebkitMask:
//                       "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
//                     WebkitMaskComposite: "xor",
//                     maskComposite: "exclude",
//                     padding: "1px",
//                     opacity: 0.28,
//                   }}
//                 />
//               </motion.div>
//             ))}
//           </div> */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
//             {data.stats.map((stat, index) => {
//               const Icon = stat.icon;
//               return (
//                 <motion.div
//                   key={`${stat.label}-${index}`}
//                   initial={{ opacity: 0, y: 26 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{
//                     duration: 0.6,
//                     delay: 0.45 + index * 0.08,
//                     ease: EASE,
//                   }}
//                   className="group relative rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] backdrop-blur-xl p-5 md:p-6 shadow-[0_22px_80px_rgba(0,0,0,0.75)] overflow-hidden"
//                 >
//                   {/* deep glow under card */}
//                   <div className="pointer-events-none absolute -inset-10 opacity-30 blur-2xl bg-[radial-gradient(circle_at_top,rgba(58,123,255,0.55),transparent_60%)]" />

//                   {/* hover aura */}
//                   <motion.div
//                     className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                     style={{
//                       background:
//                         "radial-gradient(circle_at_center, rgba(76,194,255,0.25), transparent 60%)",
//                     }}
//                   />

//                   {/* sheen */}
//                   <motion.div
//                     className="pointer-events-none absolute -inset-10 opacity-0 group-hover:opacity-100"
//                     style={{
//                       background:
//                         "linear-gradient(115deg, transparent 0%, rgba(255,255,255,0.20) 30%, transparent 60%)",
//                       mixBlendMode: "screen",
//                     }}
//                     initial={{ x: "-140%" }}
//                     whileHover={{ x: "140%" }}
//                     transition={{ duration: 0.9, ease: "easeInOut" }}
//                   />

//                   {/* content */}
//                   <div className="relative z-10 transform-none will-change-auto">
//                     <div className="flex items-center gap-3 mb-3">
//                       <div className="relative flex h-10 w-10 items-center justify-center rounded-2xl border border-white/15 bg-[radial-gradient(circle_at_top,_#3A7BFF3b,_#050816)] overflow-hidden shadow-[0_0_36px_rgba(58,123,255,0.55)]">
//                         {Icon ? (
//                           <Icon className="relative z-10 h-5 w-5 text-[#E8F2FF]" />
//                         ) : null}
//                         <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#3A7BFF66] to-[#4CC2FF66] opacity-40" />
//                       </div>

//                       <p className="text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.22em] text-[#C7CEDF]/75">
//                         {stat.label}
//                       </p>
//                     </div>

//                     <p className="text-base sm:text-lg md:text-xl font-semibold text-[#F2F4FA] leading-snug">
//                       {stat.value}
//                     </p>
//                   </div>

//                   {/* border accent (subtle) */}
//                   <div
//                     className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent"
//                     style={{
//                       background:
//                         "linear-gradient(135deg, rgba(58,123,255,0.85), rgba(76,194,255,0.85), rgba(155,93,255,0.7))",
//                       WebkitMask:
//                         "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
//                       WebkitMaskComposite: "xor",
//                       maskComposite: "exclude",
//                       padding: "1px",
//                       opacity: 0.28,
//                     }}
//                   />
//                 </motion.div>
//               );
//             })}
//           </div>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }

"use client";

import { motion, useReducedMotion } from "motion/react";
import { Star } from "lucide-react";
import type { LucideIcon } from "lucide-react";

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

  return (
    <section className="relative min-h-[92vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-[#050816]">
      {/* Night Waves background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(58,123,255,0.18),_transparent_55%),radial-gradient(circle_at_bottom_right,_rgba(76,194,255,0.16),_transparent_60%),radial-gradient(circle_at_bottom_left,_rgba(155,93,255,0.12),_transparent_55%)]" />

        <div className="absolute inset-0 opacity-[0.14] [mask-image:radial-gradient(circle_at_center,black_55%,transparent_78%)]">
          <div className="h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:54px_54px]" />
        </div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.55)_100%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 md:px-12 lg:px-20 text-center text-[#F5EFE7]">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex justify-center mb-10"
            animate={reduce ? undefined : { y: [0, -10, 0] }}
            transition={
              reduce
                ? undefined
                : { duration: 4.2, repeat: Infinity, ease: "easeInOut" }
            }
          >
            <div className="relative inline-flex items-center gap-3 rounded-full px-6 py-3 border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] backdrop-blur-xl shadow-[0_18px_70px_rgba(0,0,0,0.65)]">
              <span className="absolute -inset-6 rounded-full bg-[radial-gradient(circle_at_center,rgba(76,194,255,0.28),transparent_70%)] blur-2xl -z-10" />
              <Star className="h-5 w-5 text-[#E8F2FF] fill-[#E8F2FF]" />
              <span className="text-xs md:text-sm uppercase tracking-[0.28em] text-[#EAF0FF]/90">
                {data.badge}
              </span>
            </div>
          </motion.div>

          {/* Title */}
          <h1 className="font-semibold tracking-tight leading-[0.92] mb-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            <span className="bg-clip-text text-transparent bg-[linear-gradient(90deg,#F5EFE7_0%,#E8F2FF_25%,#4CC2FF_55%,#9B5DFF_100%)]">
              {data.title}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#C7CEDF] max-w-4xl mx-auto leading-relaxed mb-12">
            {data.subtitle}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {data.stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={`${stat.label}-${index}`}
                  initial={{ opacity: 0, y: 26 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.45 + index * 0.08,
                    ease: EASE,
                  }}
                  className="group relative rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] backdrop-blur-xl p-5 md:p-6 shadow-[0_22px_80px_rgba(0,0,0,0.75)] overflow-hidden"
                >
                  <div className="pointer-events-none absolute -inset-10 opacity-30 blur-2xl bg-[radial-gradient(circle_at_top,rgba(58,123,255,0.55),transparent_60%)]" />

                  <motion.div
                    className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background:
                        "radial-gradient(circle_at_center, rgba(76,194,255,0.25), transparent 60%)",
                    }}
                  />

                  <motion.div
                    className="pointer-events-none absolute -inset-10 opacity-0 group-hover:opacity-100"
                    style={{
                      background:
                        "linear-gradient(115deg, transparent 0%, rgba(255,255,255,0.20) 30%, transparent 60%)",
                      mixBlendMode: "screen",
                    }}
                    initial={{ x: "-140%" }}
                    whileHover={{ x: "140%" }}
                    transition={{ duration: 0.9, ease: "easeInOut" }}
                  />

                  <div className="relative z-10 transform-none will-change-auto">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="relative flex h-10 w-10 items-center justify-center rounded-2xl border border-white/15 bg-[radial-gradient(circle_at_top,_#3A7BFF3b,_#050816)] overflow-hidden shadow-[0_0_36px_rgba(58,123,255,0.55)]">
                        <Icon className="relative z-10 h-5 w-5 text-[#E8F2FF]" />
                        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#3A7BFF66] to-[#4CC2FF66] opacity-40" />
                      </div>

                      <p className="text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.22em] text-[#C7CEDF]/75">
                        {stat.label}
                      </p>
                    </div>

                    <p className="text-base sm:text-lg md:text-xl font-semibold text-[#F2F4FA] leading-snug">
                      {stat.value}
                    </p>
                  </div>

                  <div
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}
