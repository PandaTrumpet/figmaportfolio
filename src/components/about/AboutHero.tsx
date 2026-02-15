

// "use client";

// import { useRef, useState } from "react";
// import {
//   motion,
//   useScroll,
//   useTransform,
//   useReducedMotion,
// } from "motion/react";
// import { ImageWithFallback } from "@/src/components/figma/ImageWithFallback";

// type HeroStat = { value: string; label: string };
// type HeroData = {
//   image: string;
//   title: string;
//   subtitle: string;
//   stats: HeroStat[];
// };

// const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

// export function AboutHero({ data }: { data: HeroData }) {
//   const sectionRef = useRef<HTMLElement | null>(null);
//   const reduce = useReducedMotion();

//   const [hoveredStat, setHoveredStat] = useState<number | null>(null);

//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start start", "end start"],
//   });

//   // const y1 = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -140]);
//   const y1 = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -70]);
//   const contentOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0.92]);

//   return (
//     <section
//       ref={sectionRef}
//       className="
//    relative overflow-visible
//     min-h-[100svh]
//     grid place-items-center
//     px-4 sm:px-6 md:px-12 lg:px-20
//     py-20 sm:py-24 md:py-28
//   "
//       aria-label="About hero"
//     >
//       {/* Parallax Background */}
//       {/* Parallax Background (FIXED) */}
//       <div
//         className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
//         aria-hidden="true"
//       >
//         {/* двигаем ТОЛЬКО изображение, а не весь контейнер */}
//         <motion.div className="absolute inset-0" style={{ y: y1 }}>
//           <ImageWithFallback
//             src={data.image}
//             alt="SavonDev studio workspace"
//             className="absolute inset-0 w-full h-full object-cover scale-125"
//           />
//         </motion.div>

//         {/* overlays НЕ двигаются => нет растущего зазора */}
//         <div className="absolute inset-0 bg-gradient-to-b from-[#050814]/30 via-[#020410]/80 to-[#020410]" />

//         <div className="pointer-events-none absolute inset-0 opacity-70">
//           <div className="absolute -top-44 -left-40 h-96 w-96 bg-[radial-gradient(circle_at_center,_#3A7BFF55,_transparent_70%)] blur-3xl" />
//           <div className="absolute -bottom-52 -right-24 h-[520px] w-[520px] bg-[radial-gradient(circle_at_center,_#4CC2FF55,_transparent_70%)] blur-3xl" />
//         </div>

//         <div className="absolute inset-0 opacity-[0.10] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:64px_64px]" />

//         {/* fade снизу (теперь он на месте и всегда перекрывает стык) */}
//         <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-[#020410]" />
//       </div>

//       {/* Content */}
//       <motion.div
//         // className="relative z-10 max-w-[1200px] mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-20 text-white"
//         className="relative z-10 max-w-[1200px] mx-auto w-full text-white"
//         style={{ opacity: contentOpacity }}
//       >
//         <div className="text-center mb-12 sm:mb-16 md:mb-18">
//           <motion.div
//             initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
//           >
//             {/* Mini badge */}
//             <motion.div
//               className="
//                 inline-flex items-center gap-2
//                 px-4 py-2 mb-7 sm:mb-8
//                 rounded-full border border-white/10
//                 bg-white/5 backdrop-blur-md
//                 text-xs sm:text-sm text-white/80
//                 shadow-[0_18px_60px_rgba(0,0,0,0.35)]
//               "
//               animate={reduce ? undefined : { y: [0, -6, 0] }}
//               transition={
//                 reduce
//                   ? undefined
//                   : { duration: 3.2, repeat: Infinity, ease: "easeInOut" }
//               }
//             >
//               <span className="inline-block w-2 h-2 rounded-full bg-[#63E5FF] shadow-[0_0_18px_rgba(99,229,255,0.55)]" />
//               Израиль • сайты + автоматизация • фокус на заявки
//             </motion.div>

//             {/* Text layer: flat (no transforms) */}
//             <div className="relative transform-none will-change-auto">
//               <h1
//                 className="
//                  text-5xl md:text-6xl lg:text-7xl xl:text-8xl
//                   leading-[0.95] mb-6 sm:mb-8
//                   max-w-5xl mx-auto break-words
//                   tracking-tight
//                 "
//               >
//                 Мы делаем сайты, которые не теряют заявки
//               </h1>

//               <p
//                 className="
//                   text-base sm:text-lg md:text-xl lg:text-2xl
//                   text-white/80 max-w-3xl mx-auto leading-relaxed break-words
//                 "
//               >
//                 Дизайн — это только начало. Подключаем WhatsApp-сценарии, формы,
//                 CRM и AI-помощников, чтобы заявки доходили до вас быстрее — даже
//                 когда вы заняты.
//               </p>
//             </div>
//           </motion.div>
//         </div>

//         {/* Stats Grid (styled like ServiceCard mini-tiles) */}
//         <motion.div
//           initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9, delay: 0.25, ease: EASE }}
//           className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
//         >
//           {data.stats.map((stat, index) => {
//             const isHovered = hoveredStat === index;

//             return (
//               <motion.div
//                 key={index}
//                 className="relative"
//                 onHoverStart={() => setHoveredStat(index)}
//                 onHoverEnd={() => setHoveredStat(null)}
//                 initial={
//                   reduce
//                     ? { opacity: 1, scale: 1 }
//                     : { opacity: 0, scale: 0.96 }
//                 }
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{
//                   duration: 0.6,
//                   delay: 0.35 + index * 0.08,
//                   ease: EASE,
//                 }}
//               >
//                 {/* deep glow under tile */}
//                 <motion.div
//                   className="absolute -inset-[10px] rounded-[26px] bg-[radial-gradient(circle_at_top,_rgba(58,123,255,0.55),_transparent_70%)] blur-2xl -z-20"
//                   animate={{
//                     opacity: isHovered ? 1 : 0.3,
//                     scale: isHovered ? 1.06 : 1,
//                   }}
//                   transition={{ duration: 0.32, ease: "easeOut" }}
//                 />

//                 {/* hover aura */}
//                 <motion.div
//                   className="absolute inset-0 rounded-[26px] bg-[radial-gradient(circle_at_center,_rgba(76,194,255,0.5),_transparent_65%)] blur-3xl -z-10 pointer-events-none"
//                   animate={{
//                     opacity: isHovered ? 0.75 : 0,
//                     scale: isHovered ? 1.05 : 0.96,
//                   }}
//                   transition={{ duration: 0.32, ease: "easeOut" }}
//                 />

//                 {/* tile */}
//                 <motion.div
//                   className="
//                     relative h-full rounded-2xl
//                     border border-white/10
//                     bg-gradient-to-b from-[#060A13] via-[#050816] to-[#02030A]
//                     px-4 py-5 sm:px-6 sm:py-7
//                     shadow-[0_22px_70px_rgba(0,0,0,0.85)]
//                     backdrop-blur-xl overflow-hidden
//                   "
//                   whileHover={
//                     reduce
//                       ? undefined
//                       : { y: -10, boxShadow: "0 32px 110px rgba(0,0,0,1)" }
//                   }
//                   transition={{ duration: 0.28, ease: "easeOut" }}
//                 >
//                   {/* inner glow */}
//                   <motion.div
//                     className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-[#3A7BFF22] via-transparent to-[#4CC2FF22] -z-10"
//                     animate={{ opacity: isHovered ? 0.9 : 0.35 }}
//                     transition={{ duration: 0.28 }}
//                     aria-hidden="true"
//                   />

//                   {/* sheen */}
//                   <motion.div
//                     className="pointer-events-none absolute -inset-10 bg-[linear-gradient(115deg,_transparent_0%,_rgba(255,255,255,0.20)_30%,_transparent_60%)] mix-blend-screen -z-10"
//                     initial={{ x: "-140%" }}
//                     whileHover={reduce ? undefined : { x: "140%" }}
//                     transition={{ duration: 0.9, ease: "easeInOut" }}
//                     aria-hidden="true"
//                   />

//                   {/* neon outline frame */}
//                   <motion.div
//                     className="pointer-events-none absolute inset-0 rounded-2xl border border-transparent z-10"
//                     animate={{
//                       boxShadow: isHovered
//                         ? "0 0 0 1px rgba(76,194,255,0.7), 0 0 38px rgba(76,194,255,1)"
//                         : "0 0 0 1px rgba(255,255,255,0.06)",
//                     }}
//                     transition={{ duration: 0.22 }}
//                     style={{
//                       background:
//                         "linear-gradient(135deg, #3A7BFF, #4CC2FF, #9B5DFF)",
//                       WebkitMask:
//                         "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
//                       WebkitMaskComposite: "xor",
//                       maskComposite: "exclude",
//                       padding: "1px",
//                     }}
//                     aria-hidden="true"
//                   />

//                   {/* text: flat layer */}
//                   <div className="relative z-20 text-center transform-none will-change-auto">
//                     <p className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-2 text-[#F2F4FA]">
//                       {stat.value}
//                     </p>
//                     <p className="text-[11px] sm:text-xs md:text-sm uppercase tracking-wider text-white/65">
//                       {stat.label}
//                     </p>
//                   </div>

//                   {/* corner detail */}
//                   <motion.div
//                     className="pointer-events-none absolute bottom-3 right-3 h-7 w-7 opacity-40 z-20"
//                     animate={{
//                       scale: isHovered ? 1.18 : 1,
//                       opacity: isHovered ? 0.8 : 0.4,
//                     }}
//                     transition={{ duration: 0.22 }}
//                     aria-hidden="true"
//                   >
//                     <div className="h-full w-full rounded-br-2xl border-b border-r border-[#4CC2FF77]" />
//                   </motion.div>
//                 </motion.div>
//               </motion.div>
//             );
//           })}
//         </motion.div>
//       </motion.div>

//       {/* Floating decorative element (same family as FocusSection) */}
//       <motion.div
//         className="
//           pointer-events-none absolute top-16 right-4 md:right-10
//           h-20 w-20 rounded-3xl
//           border border-[#3A7BFF33]
//           bg-[radial-gradient(circle_at_top,_#3A7BFF33,_transparent_70%)]
//           opacity-50
//         "
//         animate={reduce ? undefined : { rotate: 360, scale: [1, 1.08, 1] }}
//         transition={
//           reduce
//             ? undefined
//             : {
//                 rotate: { duration: 26, repeat: Infinity, ease: "linear" },
//                 scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
//               }
//         }
//         aria-hidden="true"
//       />
//     </section>
//   );
// }



"use client";

import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";
import { ImageWithFallback } from "@/src/components/figma/ImageWithFallback";
import { PageContainer } from "../Layout/PageContainer";


type HeroStat = { value: string; label: string };
type HeroData = {
  image: string;
  title: string;
  subtitle: string;
  stats: HeroStat[];
};

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function AboutHero({ data }: { data: HeroData }) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const reduce = useReducedMotion();

  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -70]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0.92]);

  return (
    <section
      ref={sectionRef}
      className="
        relative overflow-visible
       min-h-screen
        grid place-items-center
        pt-22 pb-12
        md:pt-28 md:pb-16
        lg:pt-30 lg:pb-20
      "
      aria-label="About hero"
    >
      {/* Parallax Background (FULL-BLEED) */}
      <div
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        {/* двигаем ТОЛЬКО изображение, а не весь контейнер */}
        <motion.div className="absolute inset-0" style={{ y: y1 }}>
          <ImageWithFallback
            src={data.image}
            alt="SavonDev studio workspace"
            className="absolute inset-0 w-full h-full object-cover scale-125"
          />
        </motion.div>

        {/* overlays НЕ двигаются => нет растущего зазора */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050814]/30 via-[#020410]/80 to-[#020410]" />

        <div className="pointer-events-none absolute inset-0 opacity-70">
          <div className="absolute -top-44 -left-40 h-96 w-96 bg-[radial-gradient(circle_at_center,_#3A7BFF55,_transparent_70%)] blur-3xl" />
          <div className="absolute -bottom-52 -right-24 h-[520px] w-[520px] bg-[radial-gradient(circle_at_center,_#4CC2FF55,_transparent_70%)] blur-3xl" />
        </div>

        <div className="absolute inset-0 opacity-[0.10] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:64px_64px]" />

        {/* fade снизу */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-[#020410]" />
      </div>

      {/* Content (CONTAINER) */}
      <PageContainer className="relative z-10 w-full max-w-[1200px] text-white">
        <motion.div style={{ opacity: contentOpacity }}>
          <div className="text-center mb-12 sm:mb-16 md:mb-18">
            <motion.div
              initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
            >
              {/* Mini badge */}
              {/* <motion.div
                className="
                  inline-flex items-center gap-2
                  px-4 py-2 mb-7 sm:mb-8
                  rounded-full border border-white/10
                  bg-white/5 backdrop-blur-md
                  text-xs sm:text-sm text-white/80
                  shadow-[0_18px_60px_rgba(0,0,0,0.35)]
                "
                animate={reduce ? undefined : { y: [0, -6, 0] }}
                transition={
                  reduce
                    ? undefined
                    : { duration: 3.2, repeat: Infinity, ease: "easeInOut" }
                }
              >
                <span className="inline-block w-2 h-2 rounded-full bg-[#63E5FF] shadow-[0_0_18px_rgba(99,229,255,0.55)]" />
                Израиль • сайты + автоматизация • фокус на заявки
              </motion.div> */}

              {/* Text layer: flat (no transforms) */}
              <div className="relative transform-none will-change-auto">
                <h1
                  className="
                    text-5xl md:text-6xl lg:text-7xl xl:text-8xl
                    leading-[0.95] mb-6 sm:mb-8
                    max-w-5xl mx-auto break-words
                    tracking-tight
                  "
                >
                  Мы делаем сайты, которые не теряют заявки
                </h1>

                <p
                  className="
                    text-base sm:text-lg md:text-xl lg:text-2xl
                    text-white/80 max-w-3xl mx-auto leading-relaxed break-words
                  "
                >
                  Дизайн — это только начало. Подключаем WhatsApp-сценарии,
                  формы, CRM и AI-помощников, чтобы заявки доходили до вас
                  быстрее — даже когда вы заняты.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Stats Grid */}
          <motion.div
            initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: EASE }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
          >
            {data.stats.map((stat, index) => {
              const isHovered = hoveredStat === index;

              return (
                <motion.div
                  key={index}
                  className="relative"
                  onHoverStart={() => setHoveredStat(index)}
                  onHoverEnd={() => setHoveredStat(null)}
                  initial={
                    reduce
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.96 }
                  }
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.35 + index * 0.08,
                    ease: EASE,
                  }}
                >
                  {/* deep glow under tile */}
                  <motion.div
                    className="absolute -inset-[10px] rounded-[26px] bg-[radial-gradient(circle_at_top,_rgba(58,123,255,0.55),_transparent_70%)] blur-2xl -z-20"
                    animate={{
                      opacity: isHovered ? 1 : 0.3,
                      scale: isHovered ? 1.06 : 1,
                    }}
                    transition={{ duration: 0.32, ease: "easeOut" }}
                  />

                  {/* hover aura */}
                  <motion.div
                    className="absolute inset-0 rounded-[26px] bg-[radial-gradient(circle_at_center,_rgba(76,194,255,0.5),_transparent_65%)] blur-3xl -z-10 pointer-events-none"
                    animate={{
                      opacity: isHovered ? 0.75 : 0,
                      scale: isHovered ? 1.05 : 0.96,
                    }}
                    transition={{ duration: 0.32, ease: "easeOut" }}
                  />

                  {/* tile */}
                  <motion.div
                    className="
                      relative h-full rounded-2xl
                      border border-white/10
                      bg-gradient-to-b from-[#060A13] via-[#050816] to-[#02030A]
                      px-4 py-5 sm:px-6 sm:py-7
                      shadow-[0_22px_70px_rgba(0,0,0,0.85)]
                      backdrop-blur-xl overflow-hidden
                    "
                    whileHover={
                      reduce
                        ? undefined
                        : { y: -10, boxShadow: "0 32px 110px rgba(0,0,0,1)" }
                    }
                    transition={{ duration: 0.28, ease: "easeOut" }}
                  >
                    {/* inner glow */}
                    <motion.div
                      className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-[#3A7BFF22] via-transparent to-[#4CC2FF22] -z-10"
                      animate={{ opacity: isHovered ? 0.9 : 0.35 }}
                      transition={{ duration: 0.28 }}
                      aria-hidden="true"
                    />

                    {/* sheen */}
                    <motion.div
                      className="pointer-events-none absolute -inset-10 bg-[linear-gradient(115deg,_transparent_0%,_rgba(255,255,255,0.20)_30%,_transparent_60%)] mix-blend-screen -z-10"
                      initial={{ x: "-140%" }}
                      whileHover={reduce ? undefined : { x: "140%" }}
                      transition={{ duration: 0.9, ease: "easeInOut" }}
                      aria-hidden="true"
                    />

                    {/* neon outline frame */}
                    <motion.div
                      className="pointer-events-none absolute inset-0 rounded-2xl border border-transparent z-10"
                      animate={{
                        boxShadow: isHovered
                          ? "0 0 0 1px rgba(76,194,255,0.7), 0 0 38px rgba(76,194,255,1)"
                          : "0 0 0 1px rgba(255,255,255,0.06)",
                      }}
                      transition={{ duration: 0.22 }}
                      style={{
                        background:
                          "linear-gradient(135deg, #3A7BFF, #4CC2FF, #9B5DFF)",
                        WebkitMask:
                          "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                        WebkitMaskComposite: "xor",
                        maskComposite: "exclude",
                        padding: "1px",
                      }}
                      aria-hidden="true"
                    />

                    <div className="relative z-20 text-center transform-none will-change-auto">
                      <p className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-2 text-[#F2F4FA]">
                        {stat.value}
                      </p>
                      <p className="text-[11px] sm:text-xs md:text-sm uppercase tracking-wider text-white/65">
                        {stat.label}
                      </p>
                    </div>

                    {/* corner detail */}
                    <motion.div
                      className="pointer-events-none absolute bottom-3 right-3 h-7 w-7 opacity-40 z-20"
                      animate={{
                        scale: isHovered ? 1.18 : 1,
                        opacity: isHovered ? 0.8 : 0.4,
                      }}
                      transition={{ duration: 0.22 }}
                      aria-hidden="true"
                    >
                      <div className="h-full w-full rounded-br-2xl border-b border-r border-[#4CC2FF77]" />
                    </motion.div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </PageContainer>

      {/* Floating decorative element (FULL-BLEED) */}
      <motion.div
        className="
          pointer-events-none absolute top-16 right-4 md:right-10
          h-20 w-20 rounded-3xl
          border border-[#3A7BFF33]
          bg-[radial-gradient(circle_at_top,_#3A7BFF33,_transparent_70%)]
          opacity-50
        "
        animate={reduce ? undefined : { rotate: 360, scale: [1, 1.08, 1] }}
        transition={
          reduce
            ? undefined
            : {
                rotate: { duration: 26, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              }
        }
        aria-hidden="true"
      />
    </section>
  );
}
