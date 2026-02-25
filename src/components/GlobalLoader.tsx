// import { AnimatePresence, motion, useReducedMotion } from "motion/react";
// import { useEffect, useState } from "react";
// import { createPortal } from "react-dom";

// type Props = { open?: boolean };

// export function GlobalLoader({ open = true }: Props) {
//   const reduce = useReducedMotion();
//   const [glitch, setGlitch] = useState(false);
//   const [root, setRoot] = useState<HTMLElement | null>(null);

//   useEffect(() => {
//     setRoot(document.getElementById("loader-root"));
//   }, []);

//   // micro-glitch только в начале
//   useEffect(() => {
//     if (!open || reduce) return;
//     setGlitch(true);
//     const t = window.setTimeout(() => setGlitch(false), 420);
//     return () => window.clearTimeout(t);
//   }, [open, reduce]);

//   // синхронизируем видимость самого root
//   useEffect(() => {
//     if (!root) return;

//     root.dataset.open = open ? "1" : "0";
//     root.style.pointerEvents = open ? "auto" : "none";
//     root.style.opacity = open ? "1" : "0";

//     // когда закрыли — можно очистить содержимое (не обязательно)
//     // но оставим, чтобы было “один слой” всегда
//   }, [open, root]);

//   if (!root) return null;

//   // 🔥 ВАЖНО: мы рендерим внутрь loader-root
//   return createPortal(
//     <AnimatePresence>
//       {open && (
//         <motion.div
//           className="relative" // НЕ fixed!
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
//         >
//           {/* Cyber background (тихо) */}
//           <div className="pointer-events-none absolute inset-0 overflow-hidden">
//             <div
//               className="absolute -top-56 left-1/2 h-[640px] w-[640px] -translate-x-1/2 rounded-full blur-3xl opacity-70"
//               style={{
//                 background:
//                   "radial-gradient(circle, rgba(76,194,255,0.32), transparent 64%)",
//               }}
//             />
//             <div
//               className="absolute -bottom-72 left-1/3 h-[700px] w-[700px] -translate-x-1/2 rounded-full blur-3xl opacity-55"
//               style={{
//                 background:
//                   "radial-gradient(circle, rgba(139,92,246,0.22), transparent 66%)",
//               }}
//             />
//             <div className="absolute inset-0 opacity-[0.10] [background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:56px_56px]" />

//             {/* scanning lines */}
//             <motion.div
//               className="absolute inset-0 opacity-[0.10]"
//               style={{
//                 background:
//                   "linear-gradient(to bottom, rgba(255,255,255,0.08), transparent 18%, rgba(255,255,255,0.06) 40%, transparent 60%, rgba(255,255,255,0.05) 82%, transparent)",
//                 mixBlendMode: "overlay",
//               }}
//               animate={reduce ? undefined : { y: [0, 14, 0] }}
//               transition={{
//                 duration: 1.8,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//             />
//           </div>

//           {/* Core */}
//           <div className="relative">
//             {/* bloom */}
//             <motion.div
//               className="absolute -inset-14 rounded-full blur-2xl opacity-70"
//               style={{
//                 background:
//                   "radial-gradient(circle, rgba(76,194,255,0.22), rgba(139,92,246,0.16), transparent 72%)",
//               }}
//               animate={reduce ? undefined : { opacity: [0.55, 0.85, 0.55] }}
//               transition={{
//                 duration: 1.6,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//             />

//             <motion.div
//               className="relative"
//               style={{ perspective: "900px" }}
//               initial={{ scale: 0.96, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.98, opacity: 0 }}
//               transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
//             >
//               <motion.div
//                 className="relative h-32 w-32 md:h-36 md:w-36"
//                 animate={
//                   reduce
//                     ? undefined
//                     : {
//                         rotateX: [10, 18, 10],
//                         rotateY: [-14, 14, -14],
//                       }
//                 }
//                 transition={{
//                   duration: 2.6,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//                 style={{ transformStyle: "preserve-3d" }}
//               >
//                 {/* Back plate */}
//                 <div
//                   className="
//                     absolute inset-0 rounded-3xl
//                     border border-white/10
//                     bg-white/[0.03]
//                     backdrop-blur-xl
//                   "
//                   style={{
//                     transform: "translateZ(-18px)",
//                     boxShadow:
//                       "0 0 40px rgba(76,194,255,0.12), inset 0 0 0 1px rgba(255,255,255,0.04)",
//                   }}
//                 />

//                 {/* Side highlight */}
//                 <div
//                   className="absolute inset-0 rounded-3xl"
//                   style={{
//                     transform: "translateZ(-6px) rotateY(90deg)",
//                     background:
//                       "linear-gradient(to bottom, rgba(76,194,255,0.12), rgba(139,92,246,0.08), transparent)",
//                     opacity: 0.7,
//                   }}
//                 />

//                 {/* FRONT GLASS */}
//                 <div
//                   className="
//                     absolute inset-0 rounded-3xl
//                     border border-white/14
//                     bg-white/[0.05]
//                     backdrop-blur-2xl
//                   "
//                   style={{
//                     transform: "translateZ(14px)",
//                     boxShadow:
//                       "0 0 55px rgba(76,194,255,0.20), inset 0 0 0 1px rgba(255,255,255,0.06)",
//                   }}
//                 >
//                   {/* Prism wash */}
//                   <div
//                     className="absolute inset-0 rounded-3xl"
//                     style={{
//                       background:
//                         "linear-gradient(135deg, rgba(58,123,255,0.35), rgba(76,194,255,0.20), rgba(139,92,246,0.18))",
//                       opacity: 0.34,
//                       mixBlendMode: "screen",
//                     }}
//                   />

//                   {/* Chromatic aberration edges (RGB split) */}
//                   <div
//                     className="absolute inset-0 rounded-3xl pointer-events-none"
//                     style={{
//                       boxShadow:
//                         "inset 0 0 0 1px rgba(255,255,255,0.08), 0 0 0 0 rgba(0,0,0,0)",
//                     }}
//                   />
//                   <div
//                     className="absolute inset-0 rounded-3xl pointer-events-none"
//                     style={{
//                       // cyan edge
//                       boxShadow:
//                         "inset 0 0 0 1px rgba(76,194,255,0.25), inset 0 0 20px rgba(76,194,255,0.10)",
//                       transform: "translateX(0.8px) translateY(-0.6px)",
//                       mixBlendMode: "screen",
//                       opacity: 0.9,
//                     }}
//                   />
//                   <div
//                     className="absolute inset-0 rounded-3xl pointer-events-none"
//                     style={{
//                       // purple edge
//                       boxShadow:
//                         "inset 0 0 0 1px rgba(139,92,246,0.22), inset 0 0 22px rgba(139,92,246,0.10)",
//                       transform: "translateX(-0.8px) translateY(0.6px)",
//                       mixBlendMode: "screen",
//                       opacity: 0.85,
//                     }}
//                   />

//                   {/* Inner neon stroke (pulsing) */}
//                   <motion.div
//                     className="absolute inset-3 rounded-2xl pointer-events-none"
//                     animate={
//                       reduce
//                         ? undefined
//                         : {
//                             boxShadow: [
//                               "inset 0 0 0 1px rgba(76,194,255,0.22), inset 0 0 18px rgba(76,194,255,0.18), inset 0 0 30px rgba(139,92,246,0.14)",
//                               "inset 0 0 0 1px rgba(76,194,255,0.55), inset 0 0 28px rgba(76,194,255,0.45), inset 0 0 58px rgba(139,92,246,0.34)",
//                               "inset 0 0 0 1px rgba(76,194,255,0.22), inset 0 0 18px rgba(76,194,255,0.18), inset 0 0 30px rgba(139,92,246,0.14)",
//                             ],
//                           }
//                     }
//                     transition={{
//                       duration: 2.1,
//                       repeat: Infinity,
//                       ease: "easeInOut",
//                     }}
//                   />

//                   {/* Rotating inner prism border */}
//                   <motion.div
//                     className="
//                       absolute inset-2 rounded-2xl pointer-events-none
//                       [mask-image:radial-gradient(circle,transparent_56%,black_58%,black_73%,transparent_75%)]
//                     "
//                     style={{
//                       background:
//                         "conic-gradient(from 0deg, rgba(58,123,255,0.0), rgba(76,194,255,0.75), rgba(139,92,246,0.68), rgba(58,123,255,0.0))",
//                       filter: "drop-shadow(0 0 16px rgba(76,194,255,0.22))",
//                       mixBlendMode: "screen",
//                       opacity: 0.85,
//                     }}
//                     animate={reduce ? undefined : { rotate: 360 }}
//                     transition={{
//                       duration: 1.55,
//                       repeat: Infinity,
//                       ease: "linear",
//                     }}
//                   />

//                   {/* Moving caustics */}
//                   <motion.div
//                     className="absolute inset-0 rounded-3xl opacity-55"
//                     style={{
//                       background:
//                         "radial-gradient(circle at 20% 10%, rgba(255,255,255,0.22), transparent 46%), radial-gradient(circle at 82% 72%, rgba(255,255,255,0.12), transparent 55%)",
//                       mixBlendMode: "overlay",
//                     }}
//                     animate={
//                       reduce
//                         ? undefined
//                         : {
//                             opacity: [0.35, 0.65, 0.35],
//                             transform: [
//                               "translateX(0px)",
//                               "translateX(2px)",
//                               "translateX(0px)",
//                             ],
//                           }
//                     }
//                     transition={{
//                       duration: 2.2,
//                       repeat: Infinity,
//                       ease: "easeInOut",
//                     }}
//                   />

//                   {/* SD Core */}
//                   <div className="absolute inset-0 grid place-items-center">
//                     <motion.div
//                       className="
//                         relative w-20 h-20 md:w-24 md:h-24 rounded-2xl
//                         bg-linear-to-tr from-[#3A7BFF] via-[#4CC2FF] to-[#8B5CF6]
//                         shadow-[0_0_45px_rgba(76,194,255,0.65)]
//                       "
//                       animate={
//                         reduce
//                           ? undefined
//                           : {
//                               y: [0, -1.5, 0],
//                             }
//                       }
//                       transition={{
//                         duration: 1.4,
//                         repeat: Infinity,
//                         ease: "easeInOut",
//                       }}
//                     >
//                       <div className="absolute inset-1.5 rounded-[1rem] bg-slate-950/78 backdrop-blur-md" />

//                       {/* glitch layer (only at intro) */}
//                       {glitch && !reduce && (
//                         <>
//                           <div
//                             className="absolute inset-0 rounded-2xl"
//                             style={{
//                               background:
//                                 "linear-gradient(90deg, rgba(76,194,255,0.18), transparent 28%, rgba(139,92,246,0.16) 62%, transparent)",
//                               mixBlendMode: "screen",
//                               opacity: 0.8,
//                               transform: "translateX(1.6px)",
//                             }}
//                           />
//                           <div
//                             className="absolute inset-0 rounded-2xl"
//                             style={{
//                               background:
//                                 "linear-gradient(90deg, rgba(139,92,246,0.16), transparent 30%, rgba(76,194,255,0.16) 66%, transparent)",
//                               mixBlendMode: "screen",
//                               opacity: 0.75,
//                               transform: "translateX(-1.2px)",
//                             }}
//                           />
//                         </>
//                       )}

//                       <div
//                         className="
//                           relative z-10 flex h-full w-full items-center justify-center
//                           text-[18px] md:text-[22px]
//                           font-semibold tracking-[0.12em] uppercase
//                           text-slate-100
//                           drop-shadow-[0_0_18px_rgba(76,194,255,0.65)]
//                         "
//                       >
//                         SD
//                       </div>
//                     </motion.div>
//                   </div>

//                   {/* top sheen */}
//                   <div
//                     className="absolute left-3 right-3 top-3 h-10 rounded-2xl opacity-70"
//                     style={{
//                       background:
//                         "linear-gradient(to bottom, rgba(255,255,255,0.22), rgba(255,255,255,0.0))",
//                       transform: "translateZ(2px)",
//                     }}
//                   />
//                 </div>

//                 {/* Outer ring around cube */}
//                 <motion.div
//                   className="
//                     absolute -inset-6 rounded-[2rem]
//                     [mask-image:radial-gradient(circle,transparent_60%,black_62%,black_76%,transparent_78%)]
//                   "
//                   style={{
//                     background:
//                       "conic-gradient(from 0deg, rgba(58,123,255,0), rgba(76,194,255,0.95), rgba(139,92,246,0.85), rgba(58,123,255,0))",
//                     filter: "drop-shadow(0 0 22px rgba(76,194,255,0.30))",
//                     transform: "translateZ(26px)",
//                   }}
//                   animate={reduce ? undefined : { rotate: 360 }}
//                   transition={{
//                     duration: 1.35,
//                     ease: "linear",
//                     repeat: Infinity,
//                   }}
//                 />

//                 {/* Tiny dots (minimal) */}
//                 <div className="mt-10 flex justify-center gap-2">
//                   {[0, 1, 2].map((i) => (
//                     <motion.span
//                       key={i}
//                       className="h-1.5 w-1.5 rounded-full bg-white/55"
//                       style={{
//                         filter: "drop-shadow(0 0 10px rgba(76,194,255,0.35))",
//                       }}
//                       animate={
//                         reduce ? undefined : { opacity: [0.2, 0.85, 0.2] }
//                       }
//                       transition={{
//                         duration: 0.9,
//                         delay: i * 0.12,
//                         repeat: Infinity,
//                         ease: "easeInOut",
//                       }}
//                     />
//                   ))}
//                 </div>
//               </motion.div>
//             </motion.div>
//           </div>
//         </motion.div>
//       )}
//     </AnimatePresence>,
//   );
// }
"use client";

import { useEffect } from "react";

type Props = { open?: boolean };

export function GlobalLoader({ open = true }: Props) {
  useEffect(() => {
    const el = document.getElementById("global-loader");
    if (!el) return;

    el.style.opacity = open ? "1" : "0";
    el.style.pointerEvents = open ? "auto" : "none";
    el.dataset.open = open ? "1" : "0";
  }, [open]);

  return null;
}