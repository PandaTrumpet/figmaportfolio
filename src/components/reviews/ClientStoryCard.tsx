
// "use client";

// import { useRef, useState } from "react";
// import { motion, useInView } from "motion/react";
// import { ImageWithFallback } from "@/src/components/figma/ImageWithFallback";
// import { Quote, Star, TrendingUp, Users } from "lucide-react";

// const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

// export function ClientStoryCard({
//   story,
//   index,
// }: {
//   story: any;
//   index: number;
// }) {
//   const ref = useRef<HTMLDivElement | null>(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });
//   const [isHovered, setIsHovered] = useState(false);

//   const flip = index % 2 === 1;

//   const innerGradient =
//     index % 3 === 0
//       ? "from-[#3A7BFF33] via-[#4CC2FF22] to-transparent"
//       : index % 3 === 1
//         ? "from-[#4CC2FF33] via-[#9B5DFF22] to-transparent"
//         : "from-[#9B5DFF33] via-[#3A7BFF22] to-transparent";

//   return (
//     <div
//       ref={ref}
//       className={`grid lg:grid-cols-[1fr,1.25fr] gap-10 lg:gap-14 items-start ${
//         flip ? "lg:grid-flow-dense" : ""
//       }`}
//     >
//       {/* LEFT — proof card (sticky) */}
//       <motion.div
//         className={flip ? "lg:col-start-2" : ""}
//         initial={{ opacity: 0, y: 30 }}
//         animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//         transition={{ duration: 0.6, ease: EASE }}
//         onHoverStart={() => setIsHovered(true)}
//         onHoverEnd={() => setIsHovered(false)}
//       >
//         <div className="relative sticky top-24">
//           {/* deep glow under */}
//           <motion.div
//             className="absolute -inset-[12px] rounded-[34px] bg-[radial-gradient(circle_at_top,_rgba(58,123,255,0.55),_transparent_70%)] blur-2xl -z-20"
//             animate={{
//               opacity: isHovered ? 1 : 0.35,
//               scale: isHovered ? 1.08 : 1,
//             }}
//             transition={{ duration: 0.35, ease: "easeOut" }}
//           />

//           {/* hover aura */}
//           <motion.div
//             className="absolute inset-0 rounded-[40px] bg-[radial-gradient(circle_at_center,_rgba(76,194,255,0.5),_transparent_65%)] blur-3xl -z-10 pointer-events-none"
//             animate={{
//               opacity: isHovered ? 0.85 : 0,
//               scale: isHovered ? 1.05 : 0.95,
//             }}
//             transition={{ duration: 0.35, ease: "easeOut" }}
//           />

//           {/* card */}
//           <motion.div
//             className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-[#060A13] via-[#050816] to-[#02030A] p-7 md:p-8 shadow-[0_26px_80px_rgba(0,0,0,0.85)] backdrop-blur-xl overflow-hidden"
//             whileHover={{
//               y: -12,
//               boxShadow: "0 32px 120px rgba(0,0,0,1)",
//             }}
//             transition={{ duration: 0.3, ease: "easeOut" }}
//           >
//             {/* inner glow */}
//             <motion.div
//               className={`pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br ${innerGradient} -z-10`}
//               animate={{ opacity: isHovered ? 0.9 : 0.35 }}
//               transition={{ duration: 0.3 }}
//             />

//             {/* sheen */}
//             <motion.div
//               className="pointer-events-none absolute -inset-10 bg-[linear-gradient(115deg,_transparent_0%,_rgba(255,255,255,0.22)_30%,_transparent_60%)] mix-blend-screen -z-10"
//               initial={{ x: "-140%" }}
//               whileHover={{ x: "140%" }}
//               transition={{ duration: 0.9, ease: "easeInOut" }}
//             />

//             {/* gradient contour */}
//             <motion.div
//               className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent z-10"
//               animate={{
//                 boxShadow: isHovered
//                   ? "0 0 0 1px rgba(76,194,255,0.7), 0 0 42px rgba(76,194,255,1)"
//                   : "0 0 0 1px rgba(255,255,255,0.06)",
//               }}
//               transition={{ duration: 0.25 }}
//               style={{
//                 background:
//                   "linear-gradient(135deg, #3A7BFF, #4CC2FF, #9B5DFF)",
//                 WebkitMask:
//                   "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
//                 WebkitMaskComposite: "xor",
//                 maskComposite: "exclude",
//                 padding: "1px",
//               }}
//             />

//             {/* header */}
//             <div className="relative z-30 flex items-start gap-5 mb-6 transform-none will-change-auto">
//               <div className="relative h-16 w-16 md:h-[72px] md:w-[72px] rounded-2xl border border-white/15 bg-[radial-gradient(circle_at_top,_#3A7BFF3b,_#050816)] overflow-hidden shadow-[0_0_40px_rgba(58,123,255,0.55)] shrink-0">
//                 <ImageWithFallback
//                   src={story.avatar}
//                   alt={story.name}
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#3A7BFF55] to-[#4CC2FF55] opacity-35" />
//               </div>

//               <div className="flex-1">
//                 <h3 className="text-xl md:text-2xl font-semibold text-[#F2F4FA] leading-tight">
//                   {story.name}
//                 </h3>
//                 <p className="text-sm md:text-base text-[#C7CEDF]/80">
//                   {story.role}
//                 </p>
//                 <p className="text-xs md:text-sm text-[#C7CEDF]/55">
//                   {story.company}
//                 </p>
//               </div>
//             </div>

//             {/* stars */}
//             <div className="relative z-30 flex gap-1.5 mb-5">
//               {[...Array(5)].map((_, i) => (
//                 <Star
//                   key={i}
//                   className="h-5 w-5 text-[#E8F2FF] fill-[#E8F2FF]"
//                 />
//               ))}
//             </div>

//             {/* quote */}
//             <div className="relative z-30 mb-7 transform-none will-change-auto">
//               <Quote className="h-10 w-10 opacity-10 absolute -top-2 -left-1 text-white" />
//               <p className="text-sm md:text-base leading-relaxed text-[#E8ECF4] relative z-10 pl-6">
//                 {story.quote}
//               </p>
//             </div>

//             {/* tags */}
//             <div className="relative z-30 flex flex-wrap gap-2.5">
//               <span className="rounded-full px-4 py-2 text-xs md:text-sm border border-white/10 bg-white/5 text-[#EAF0FF]/90">
//                 {story.projectType}
//               </span>
//               <span className="rounded-full px-4 py-2 text-xs md:text-sm border border-white/10 bg-white/5 text-[#EAF0FF]/90">
//                 {story.industry}
//               </span>
//             </div>

//             {/* Decorative corner */}
//             <motion.div
//               className="pointer-events-none absolute bottom-4 right-4 h-8 w-8 opacity-40 z-20"
//               animate={{
//                 scale: isHovered ? 1.2 : 1,
//                 opacity: isHovered ? 0.8 : 0.4,
//               }}
//               transition={{ duration: 0.25 }}
//             >
//               <div className="h-full w-full rounded-br-3xl border-b border-r border-[#4CC2FF77]" />
//             </motion.div>
//           </motion.div>
//         </div>
//       </motion.div>

//       {/* RIGHT — story text blocks (в таком же стиле) */}
//       <motion.div
//         className={`space-y-8 md:space-y-10 ${
//           flip ? "lg:col-start-1 lg:row-start-1" : ""
//         }`}
//         initial={{ opacity: 0, y: 30 }}
//         animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//         transition={{ duration: 0.6, delay: 0.12, ease: EASE }}
//       >
//         <InfoBlock
//           title="История"
//           icon={<Users className="h-5 w-5 text-[#E8F2FF]" />}
//           text={story.story}
//           accent="from-[#3A7BFF33] via-[#4CC2FF22] to-transparent"
//         />

//         <InfoBlock
//           title="Вызов"
//           text={story.challenge}
//           accent="from-[#4CC2FF33] via-[#9B5DFF22] to-transparent"
//         />

//         <InfoBlock
//           title="Решение"
//           text={story.solution}
//           accent="from-[#9B5DFF33] via-[#3A7BFF22] to-transparent"
//         />

//         {/* Results */}
//         <InfoBlock
//           title="Результаты"
//           icon={<TrendingUp className="h-5 w-5 text-[#E8F2FF]" />}
//           accent="from-[#4CC2FF33] via-[#3A7BFF22] to-transparent"
//         >
//           <div className="grid sm:grid-cols-2 gap-4 mt-5">
//             {story.results.map((result: any, i: number) => (
//               <div
//                 key={i}
//                 className="rounded-2xl border border-white/10 bg-white/5 p-5"
//               >
//                 <p className="text-2xl md:text-3xl font-semibold text-[#F2F4FA] mb-1">
//                   {result.value}
//                 </p>
//                 <p className="text-[10px] md:text-xs uppercase tracking-[0.24em] text-[#C7CEDF]/70">
//                   {result.metric}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </InfoBlock>
//       </motion.div>
//     </div>
//   );
// }

// function InfoBlock({
//   title,
//   text,
//   icon,
//   accent,
//   children,
// }: {
//   title: string;
//   text?: string;
//   icon?: React.ReactNode;
//   accent: string;
//   children?: React.ReactNode;
// }) {
//   return (
//     <div className="relative">
//       {/* deep glow */}
//       <div className="absolute -inset-[10px] rounded-[28px] bg-[radial-gradient(circle_at_top,_rgba(58,123,255,0.35),_transparent_70%)] blur-2xl -z-20 opacity-30" />

//       <div className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-[#060A13] via-[#050816] to-[#02030A] p-6 md:p-7 shadow-[0_22px_70px_rgba(0,0,0,0.8)] backdrop-blur-xl overflow-hidden">
//         {/* inner accent */}
//         <div
//           className={`pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br ${accent} -z-10 opacity-45`}
//         />

//         {/* gradient contour */}
//         <div
//           className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent z-10"
//           style={{
//             background: "linear-gradient(135deg, #3A7BFF, #4CC2FF, #9B5DFF)",
//             WebkitMask:
//               "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
//             WebkitMaskComposite: "xor",
//             maskComposite: "exclude",
//             padding: "1px",
//             opacity: 0.18,
//           }}
//         />

//         <div className="relative z-30">
//           <div className="flex items-center gap-3 mb-3">
//             {icon ? (
//               <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/15 bg-[radial-gradient(circle_at_top,_#3A7BFF3b,_#050816)]">
//                 {icon}
//               </span>
//             ) : null}
//             <h4 className="text-lg md:text-xl font-semibold text-[#F2F4FA]">
//               {title}
//             </h4>
//           </div>

//           {text ? (
//             <p className="text-sm md:text-base text-[#C7CEDF] leading-relaxed">
//               {text}
//             </p>
//           ) : null}

//           {children}
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Quote, Star, TrendingUp, Users, Shield } from "lucide-react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function ClientStoryCard({
  story,
  index,
}: {
  story: any;
  index: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isHovered, setIsHovered] = useState(false);

  const flip = index % 2 === 1;

  const innerGradient =
    index % 3 === 0
      ? "from-[#3A7BFF33] via-[#4CC2FF22] to-transparent"
      : index % 3 === 1
        ? "from-[#4CC2FF33] via-[#9B5DFF22] to-transparent"
        : "from-[#9B5DFF33] via-[#3A7BFF22] to-transparent";

  const caseId = String(index + 1).padStart(2, "0");

  return (
    <div
      ref={ref}
      className={`grid lg:grid-cols-[1fr,1.25fr] gap-10 lg:gap-14 items-start ${
        flip ? "lg:grid-flow-dense" : ""
      }`}
    >
      {/* LEFT — proof card (sticky) */}
      <motion.div
        className={flip ? "lg:col-start-2" : ""}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, ease: EASE }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <div className="relative sticky top-24">
          {/* deep glow under */}
          <motion.div
            className="absolute -inset-[12px] rounded-[34px] bg-[radial-gradient(circle_at_top,_rgba(58,123,255,0.55),_transparent_70%)] blur-2xl -z-20"
            animate={{
              opacity: isHovered ? 1 : 0.35,
              scale: isHovered ? 1.08 : 1,
            }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          />

          {/* hover aura */}
          <motion.div
            className="absolute inset-0 rounded-[40px] bg-[radial-gradient(circle_at_center,_rgba(76,194,255,0.5),_transparent_65%)] blur-3xl -z-10 pointer-events-none"
            animate={{
              opacity: isHovered ? 0.85 : 0,
              scale: isHovered ? 1.05 : 0.95,
            }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          />

          {/* card */}
          <motion.div
            className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-[#060A13] via-[#050816] to-[#02030A] p-7 md:p-8 shadow-[0_26px_80px_rgba(0,0,0,0.85)] backdrop-blur-xl overflow-hidden"
            whileHover={{
              y: -12,
              boxShadow: "0 32px 120px rgba(0,0,0,1)",
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* inner glow */}
            <motion.div
              className={`pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br ${innerGradient} -z-10`}
              animate={{ opacity: isHovered ? 0.9 : 0.35 }}
              transition={{ duration: 0.3 }}
            />

            {/* sheen */}
            <motion.div
              className="pointer-events-none absolute -inset-10 bg-[linear-gradient(115deg,_transparent_0%,_rgba(255,255,255,0.22)_30%,_transparent_60%)] mix-blend-screen -z-10"
              initial={{ x: "-140%" }}
              whileHover={{ x: "140%" }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
            />

            {/* gradient contour */}
            <motion.div
              className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent z-10"
              animate={{
                boxShadow: isHovered
                  ? "0 0 0 1px rgba(76,194,255,0.7), 0 0 42px rgba(76,194,255,1)"
                  : "0 0 0 1px rgba(255,255,255,0.06)",
              }}
              transition={{ duration: 0.25 }}
              style={{
                background:
                  "linear-gradient(135deg, #3A7BFF, #4CC2FF, #9B5DFF)",
                WebkitMask:
                  "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
                padding: "1px",
              }}
            />

            {/* header (NO PHOTO) */}
            <div className="relative z-30 transform-none will-change-auto">
              <div className="flex items-start justify-between gap-4 mb-5">
                <div className="flex items-center gap-3">
                  {/* icon capsule like ServiceCard */}
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-[radial-gradient(circle_at_top,_#3A7BFF3b,_#050816)] overflow-hidden shadow-[0_0_40px_rgba(58,123,255,0.65)]">
                    <Shield className="relative z-20 h-6 w-6 text-[#E8F2FF]" />
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#3A7BFF66] to-[#4CC2FF66] opacity-40" />
                  </div>

                  <div>
                    <p className="text-xs md:text-sm uppercase tracking-[0.28em] text-[#C7CEDF]/70">
                      Кейс #{caseId}
                    </p>
                    <h3 className="text-lg md:text-xl font-semibold text-[#F2F4FA] leading-tight">
                      Анонимный отзыв
                    </h3>
                  </div>
                </div>

                {/* stars (можно потом заменить на реальный рейтинг) */}
                <div className="flex gap-1.5 pt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-[#E8F2FF] fill-[#E8F2FF]"
                    />
                  ))}
                </div>
              </div>

              {/* quote */}
              <div className="relative mb-6">
                <Quote className="h-10 w-10 opacity-10 absolute -top-2 -left-1 text-white" />
                <p className="text-sm md:text-base leading-relaxed text-[#E8ECF4] relative z-10 pl-6">
                  {story.quote}
                </p>
              </div>

              {/* tags */}
              <div className="flex flex-wrap gap-2.5">
                {story.projectType ? (
                  <span className="rounded-full px-4 py-2 text-xs md:text-sm border border-white/10 bg-white/5 text-[#EAF0FF]/90">
                    {story.projectType}
                  </span>
                ) : null}
                {story.industry ? (
                  <span className="rounded-full px-4 py-2 text-xs md:text-sm border border-white/10 bg-white/5 text-[#EAF0FF]/90">
                    {story.industry}
                  </span>
                ) : null}
              </div>
            </div>

            {/* Decorative corner */}
            <motion.div
              className="pointer-events-none absolute bottom-4 right-4 h-8 w-8 opacity-40 z-20"
              animate={{
                scale: isHovered ? 1.2 : 1,
                opacity: isHovered ? 0.8 : 0.4,
              }}
              transition={{ duration: 0.25 }}
            >
              <div className="h-full w-full rounded-br-3xl border-b border-r border-[#4CC2FF77]" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* RIGHT — story text blocks */}
      <motion.div
        className={`space-y-8 md:space-y-10 ${
          flip ? "lg:col-start-1 lg:row-start-1" : ""
        }`}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.12, ease: EASE }}
      >
        <InfoBlock
          title="История"
          icon={<Users className="h-5 w-5 text-[#E8F2FF]" />}
          text={story.story}
          accent="from-[#3A7BFF33] via-[#4CC2FF22] to-transparent"
        />

        <InfoBlock
          title="Вызов"
          text={story.challenge}
          accent="from-[#4CC2FF33] via-[#9B5DFF22] to-transparent"
        />

        <InfoBlock
          title="Решение"
          text={story.solution}
          accent="from-[#9B5DFF33] via-[#3A7BFF22] to-transparent"
        />

        <InfoBlock
          title="Результаты"
          icon={<TrendingUp className="h-5 w-5 text-[#E8F2FF]" />}
          accent="from-[#4CC2FF33] via-[#3A7BFF22] to-transparent"
        >
          <div className="grid sm:grid-cols-2 gap-4 mt-5">
            {Array.isArray(story.results) &&
              story.results.map((result: any, i: number) => (
                <div
                  key={i}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  {/* <p className="text-2xl md:text-3xl font-semibold text-[#F2F4FA] mb-1">
                    {result.value}
                  </p> */}
                  <p className="text-lg md:text-xl font-medium normal-case tracking-normal text-[#F2F4FA] mb-1">
                    {result.value.charAt(0).toUpperCase() +
                      result.value.slice(1)}
                  </p>
                  <p className="text-[10px] md:text-xs uppercase tracking-[0.24em] text-[#C7CEDF]/70">
                    {result.metric}
                  </p>
                </div>
              ))}
          </div>
        </InfoBlock>
      </motion.div>
    </div>
  );
}

function InfoBlock({
  title,
  text,
  icon,
  accent,
  children,
}: {
  title: string;
  text?: string;
  icon?: React.ReactNode;
  accent: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="relative">
      {/* deep glow */}
      <div className="absolute -inset-[10px] rounded-[28px] bg-[radial-gradient(circle_at_top,_rgba(58,123,255,0.35),_transparent_70%)] blur-2xl -z-20 opacity-30" />

      <div className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-[#060A13] via-[#050816] to-[#02030A] p-6 md:p-7 shadow-[0_22px_70px_rgba(0,0,0,0.8)] backdrop-blur-xl overflow-hidden">
        {/* inner accent */}
        <div
          className={`pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br ${accent} -z-10 opacity-45`}
        />

        {/* gradient contour */}
        <div
          className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent z-10"
          style={{
            background: "linear-gradient(135deg, #3A7BFF, #4CC2FF, #9B5DFF)",
            WebkitMask:
              "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            padding: "1px",
            opacity: 0.18,
          }}
        />

        <div className="relative z-30">
          <div className="flex items-center gap-3 mb-3">
            {icon ? (
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/15 bg-[radial-gradient(circle_at_top,_#3A7BFF3b,_#050816)]">
                {icon}
              </span>
            ) : null}

            <h4 className="text-lg md:text-xl font-semibold text-[#F2F4FA]">
              {title}
            </h4>
          </div>

          {text ? (
            <p className="text-sm md:text-base text-[#C7CEDF] leading-relaxed">
              {text}
            </p>
          ) : null}

          {children}
        </div>
      </div>
    </div>
  );
}
