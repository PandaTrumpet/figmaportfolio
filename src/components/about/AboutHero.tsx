

// "use client";

// import { useRef } from "react";
// import { motion, useScroll, useTransform } from "motion/react";
// import { ImageWithFallback } from "@/src/components/figma/ImageWithFallback";

// type HeroStat = { value: string; label: string };
// type HeroData = {
//   image: string;
//   title: string;
//   subtitle: string;
//   stats: HeroStat[];
// };

// export function AboutHero({ data }: { data: HeroData }) {
//   const sectionRef = useRef<HTMLElement | null>(null);

//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start start", "end start"], // стабильнее для hero
//   });

//   const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);

//   // ВАЖНО: больше не уходим в 0, иначе текст может пропасть на desktop
//   const contentOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0.85]);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative min-h-screen flex items-center justify-center overflow-hidden"
//     >
//       {/* Parallax Background */}
//       <motion.div
//         className="absolute inset-0 z-0 pointer-events-none"
//         style={{ y: y1 }}
//       >
//         <ImageWithFallback
//           src={data.image}
//           alt="Studio workspace"
//           className="w-full h-full object-cover scale-110"
//         />
//         <div className="absolute inset-0 bg-linear-to-b from-[#F5EFE7]/20 via-[#050608]/60 to-[#050608]" />
//       </motion.div>

//       {/* Content */}
//       <motion.div
//         className="relative z-10 max-w-[1400px] mx-auto w-full px-6 md:px-12 lg:px-20 text-[#F5EFE7]"
//         style={{ opacity: contentOpacity }}
//       >
//         <div className="text-center mb-20">
//           <motion.div
//             initial={{ opacity: 0, y: 80 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1.2, delay: 0.3 }}
//           >
//             <motion.div
//               className="inline-block mb-10"
//               animate={{ y: [0, -10, 0] }}
//               transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//             >
           
//             </motion.div>

//             <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] mb-10 max-w-5xl mx-auto">
//               {data.title}
//             </h1>

//             <p className="text-xl md:text-2xl lg:text-3xl opacity-90 max-w-3xl mx-auto leading-relaxed">
//               {data.subtitle}
//             </p>
//           </motion.div>
//         </div>

//         {/* Stats Grid */}
//         <motion.div
//           initial={{ opacity: 0, y: 60 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.8 }}
//           className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
//         >
//           {data.stats.map((stat, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
//               className="text-center border-2 border-[#F5EFE7] p-6 md:p-8 backdrop-blur-sm bg-[#F5EFE7]/5 hover:bg-[#F5EFE7]/10 transition-all"
//             >
//               <p className="text-3xl md:text-4xl lg:text-5xl mb-2">
//                 {stat.value}
//               </p>
//               <p className="text-sm md:text-base uppercase tracking-wider opacity-70">
//                 {stat.label}
//               </p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </motion.div>

//       {/* Floating Shapes */}
//       <motion.div
//         className="absolute bottom-20 left-20 w-40 h-40 border-2 border-[#F5EFE7] opacity-10 z-0 pointer-events-none"
//         animate={{ rotate: 360, scale: [1, 1.2, 1] }}
//         transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
//       />
//     </section>
//   );
// }


"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ImageWithFallback } from "@/src/components/figma/ImageWithFallback";

type HeroStat = { value: string; label: string };
type HeroData = {
  image: string;
  title: string;
  subtitle: string;
  stats: HeroStat[];
};

export function AboutHero({ data }: { data: HeroData }) {
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0.85]);

  return (
    <section
      ref={sectionRef}
      className="
        relative min-h-screen overflow-hidden
        flex justify-center
        items-start md:items-center
        pt-24 sm:pt-28 md:pt-0
        pb-16 sm:pb-20 md:pb-0
      "
    >
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ y: y1 }}
      >
        <ImageWithFallback
          src={data.image}
          alt="Studio workspace"
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#F5EFE7]/20 via-[#050608]/60 to-[#050608]" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-[1400px] mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-20 text-[#F5EFE7]"
        style={{ opacity: contentOpacity }}
      >
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            {/* Если бейдж нужен — верни контент внутрь */}
            <motion.div
              className="inline-block mb-8 sm:mb-10"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] mb-8 sm:mb-10 max-w-5xl mx-auto break-words">
              {data.title}
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl opacity-90 max-w-3xl mx-auto leading-relaxed break-words">
              {data.subtitle}
            </p>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
        >
          {data.stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              className="text-center border-2 border-[#F5EFE7] p-4 sm:p-6 md:p-8 backdrop-blur-sm bg-[#F5EFE7]/5 hover:bg-[#F5EFE7]/10 transition-all"
            >
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-2">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm md:text-base uppercase tracking-wider opacity-70">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Floating Shapes */}
      <motion.div
        className="absolute bottom-20 left-20 w-40 h-40 border-2 border-[#F5EFE7] opacity-10 z-0 pointer-events-none hidden md:block"
        animate={{ rotate: 360, scale: [1, 1.2, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
    </section>
  );
}
