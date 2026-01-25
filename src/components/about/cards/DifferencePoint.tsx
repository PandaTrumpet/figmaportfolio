// "use client";

// import { useRef } from "react";
// import { motion, useInView } from "motion/react";
// import { ImageWithFallback } from "@/src/components/figma/ImageWithFallback";

// type DifferencePointItem = {
//   title: string;
//   description: string;
//   image: string;
// };

// export function DifferencePoint({
//   point,
//   index,
// }: {
//   point: DifferencePointItem;
//   index: number;
// }) {
//   const ref = useRef<HTMLDivElement | null>(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <div
//       ref={ref}
//       className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
//         index % 2 === 1 ? "lg:grid-flow-dense" : ""
//       }`}
//     >
//       {/* Image */}
//       <motion.div
//         initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
//         animate={isInView ? { opacity: 1, x: 0 } : {}}
//         transition={{ duration: 0.8 }}
//         className={index % 2 === 1 ? "lg:col-start-2" : ""}
//       >
//         <motion.div
//           className="aspect-16/10 border-4 border-[#050608] overflow-hidden"
//           whileHover={{
//             boxShadow: "20px 20px 0px 0px rgba(5,6,8,1)",
//             x: -8,
//             y: -8,
//           }}
//           transition={{ duration: 0.3 }}
//         >
//           <motion.div
//             whileHover={{ scale: 1.1 }}
//             transition={{ duration: 0.7 }}
//           >
//             <ImageWithFallback
//               src={point.image}
//               alt={point.title}
//               className="w-full h-full object-cover"
//             />
//           </motion.div>
//         </motion.div>
//       </motion.div>

//       {/* Content */}
//       <motion.div
//         initial={{ opacity: 0, x: index % 2 === 0 ? 60 : -60 }}
//         animate={isInView ? { opacity: 1, x: 0 } : {}}
//         transition={{ duration: 0.8, delay: 0.2 }}
//         className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}
//       >
//         <div className="mb-8">
//           <motion.div
//             className="inline-block px-4 py-2 border-2 border-[#050608] text-sm uppercase tracking-wider mb-6"
//             whileHover={{ x: 5 }}
//           >
//             0{index + 1}
//           </motion.div>
//         </div>

//         <h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-8 leading-tight">
//           {point.title}
//         </h3>

//         <p className="text-xl md:text-2xl lg:text-3xl opacity-70 leading-relaxed">
//           {point.description}
//         </p>
//       </motion.div>
//     </div>
//   );
// }


// DifferencePoint.tsx
"use client";

import { useRef, useState } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
} from "motion/react";
import { ImageWithFallback } from "@/src/components/figma/ImageWithFallback";

type DifferencePointItem = {
  title: string;
  description: string;
  image: string;
};

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function DifferencePoint({
  point,
  index,
}: {
  point: DifferencePointItem;
  index: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const reduce = useReducedMotion();
  const isInView = useInView(ref, { once: true, margin: "-120px" });
  const [isHovered, setIsHovered] = useState(false);

  const flip = index % 2 === 1;

  return (
    <div
      ref={ref}
      className={`grid lg:grid-cols-2 gap-10 lg:gap-14 items-center ${
        flip ? "lg:grid-flow-dense" : ""
      }`}
    >
      {/* Image */}
      <motion.div
        className={flip ? "lg:col-start-2" : ""}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, x: flip ? 40 : -40 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: flip ? 40 : -40 }}
        transition={{ duration: 0.7, ease: EASE }}
      >
        {/* glow under image */}
        <motion.div
          className="relative"
          whileHover={reduce ? undefined : { y: -10 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
        >
          <motion.div
            className="absolute -inset-[12px] rounded-[34px] bg-[radial-gradient(circle_at_top,_rgba(58,123,255,0.55),_transparent_70%)] blur-2xl -z-20"
            animate={{
              opacity: isHovered ? 1 : 0.32,
              scale: isHovered ? 1.06 : 1,
            }}
            transition={{ duration: 0.32, ease: "easeOut" }}
            aria-hidden="true"
          />

          <motion.div
            className="
              relative aspect-[16/10] rounded-3xl
              border border-white/10
              bg-gradient-to-b from-[#060A13] via-[#050816] to-[#02030A]
              shadow-[0_26px_80px_rgba(0,0,0,0.85)]
              backdrop-blur-xl overflow-hidden
            "
          >
            {/* inner glow */}
            <motion.div
              className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-[#3A7BFF22] via-transparent to-[#4CC2FF22] -z-10"
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
              className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent z-10"
              animate={{
                boxShadow: isHovered
                  ? "0 0 0 1px rgba(76,194,255,0.7), 0 0 42px rgba(76,194,255,1)"
                  : "0 0 0 1px rgba(255,255,255,0.06)",
              }}
              transition={{ duration: 0.22 }}
              style={{
                background: "linear-gradient(135deg, #3A7BFF, #4CC2FF, #9B5DFF)",
                WebkitMask:
                  "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
                padding: "1px",
              }}
              aria-hidden="true"
            />

            <motion.div
              className="absolute inset-0"
              whileHover={reduce ? undefined : { scale: 1.06 }}
              transition={{ duration: 0.7, ease: EASE }}
            >
              <ImageWithFallback
                src={point.image}
                alt={point.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </motion.div>

            <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/70 via-transparent to-transparent" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Content */}
      <motion.div
        className={flip ? "lg:col-start-1 lg:row-start-1" : ""}
        initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, x: flip ? -40 : 40 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: flip ? -40 : 40 }}
        transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
      >
        {/* number pill */}
        <motion.div
          className="
            inline-flex items-center gap-2
            rounded-full border border-white/10
            bg-white/5 backdrop-blur-md
            px-4 py-2 mb-6
            text-xs sm:text-sm text-white/80
            shadow-[0_18px_60px_rgba(0,0,0,0.35)]
          "
          whileHover={reduce ? undefined : { x: 6 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
        >
          <span className="inline-block h-2 w-2 rounded-full bg-[#63E5FF] shadow-[0_0_18px_rgba(99,229,255,0.55)]" />
          <span className="uppercase tracking-wider">0{index + 1}</span>
        </motion.div>

        <h3 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-tight text-[#F2F4FA] mb-5 leading-tight">
          {point.title}
        </h3>

        <p className="text-base md:text-xl lg:text-2xl text-[#C7CEDF] leading-relaxed max-w-xl">
          {point.description}
        </p>
      </motion.div>
    </div>
  );
}
