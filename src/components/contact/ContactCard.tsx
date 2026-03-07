// "use client";

// import { motion, useReducedMotion } from "motion/react";
// import { ArrowRight } from "lucide-react";

// const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

// export function ContactCard({
//   contact,
//   index,
// }: {
//   contact: any;
//   index: number;
// }) {
//   const reduce = useReducedMotion();

//   return (
//     <motion.a
//       href={contact.link}
//       target="_blank"
//       rel="noopener noreferrer"
//       initial={{ opacity: 0, x: -30 }}
//       whileInView={{ opacity: 1, x: 0 }}
//       transition={{
//         duration: reduce ? 0 : 0.7,
//         delay: reduce ? 0 : index * 0.08,
//         ease: EASE,
//       }}
//       viewport={{ once: true, margin: "-120px" }}
//       className="group relative flex items-center gap-5 p-6 md:p-7 rounded-3xl border border-white/10 bg-gradient-to-b from-white/8 via-white/5 to-transparent shadow-[0_22px_70px_rgba(0,0,0,0.82)] backdrop-blur-xl overflow-hidden"
//       whileHover={reduce ? undefined : { y: -10 }}
//     >
//       {/* deep glow */}
//       <motion.div
//         className="pointer-events-none absolute -inset-[14px] rounded-[34px] bg-[radial-gradient(circle_at_top,_rgba(76,194,255,0.55),_transparent_70%)] blur-2xl -z-10"
//         animate={{ opacity: 0.35 }}
//         whileHover={{ opacity: 0.85, scale: 1.06 }}
//         transition={{ duration: 0.35, ease: "easeOut" }}
//       />

//       {/* inner gradient */}
//       <motion.div
//         className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-[#3A7BFF22] via-[#4CC2FF18] to-[#9B5DFF16] -z-10"
//         initial={{ opacity: 0.45 }}
//         whileHover={{ opacity: 0.9 }}
//         transition={{ duration: 0.28 }}
//       />

//       {/* sheen */}
//       <motion.div
//         className="pointer-events-none absolute -inset-10 bg-[linear-gradient(115deg,_transparent_0%,_rgba(255,255,255,0.18)_30%,_transparent_60%)] mix-blend-screen -z-10"
//         initial={{ x: "-140%" }}
//         whileHover={{ x: "140%" }}
//         transition={{ duration: 0.9, ease: "easeInOut" }}
//       />

//       {/* icon capsule */}
//       <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/14 bg-[radial-gradient(circle_at_top,_rgba(58,123,255,0.28),_rgba(5,8,22,0.95))] shadow-[0_0_40px_rgba(58,123,255,0.6)]">
//         <span className="text-2xl">{contact.icon}</span>
//       </div>

//       {/* text */}
//       <div className="relative z-10 flex-1">
//         <p className="text-[11px] md:text-xs tracking-[0.22em] text-[#AEB8CC] mb-2">
//           {contact.label}
//         </p>
//         <p className="text-lg md:text-xl text-[#F2F4FA] group-hover:translate-x-1 transition-transform">
//           {contact.value}
//         </p>
//       </div>

//       <ArrowRight className="relative z-10 w-5 h-5 text-[#D7DEEA] opacity-0 group-hover:opacity-100 transition-opacity" />

//       {/* contour */}
//       <div
//         className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent"
//         style={{
//           background:
//             "linear-gradient(135deg, rgba(58,123,255,0.7), rgba(76,194,255,0.7), rgba(155,93,255,0.6))",
//           WebkitMask:
//             "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
//           WebkitMaskComposite: "xor",
//           maskComposite: "exclude",
//           padding: "1px",
//           opacity: 0.55,
//         }}
//       />
//     </motion.a>
//   );
// }

"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import type { ContactInfo } from "@/src/data/contactData";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function ContactCard({
  contact,
  index,
}: {
  contact: ContactInfo;
  index: number;
}) {
  const reduce = useReducedMotion();

  const isExternal =
    contact.link.startsWith("http://") || contact.link.startsWith("https://");

  return (
    <motion.a
      href={contact.link}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      aria-label={`${contact.label}: ${contact.value}`}
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: reduce ? 0 : 0.7,
        delay: reduce ? 0 : index * 0.08,
        ease: EASE,
      }}
      viewport={{ once: true, margin: "-120px" }}
      className="group relative flex items-center gap-5 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/8 via-white/5 to-transparent p-6 shadow-[0_22px_70px_rgba(0,0,0,0.82)] backdrop-blur-xl md:p-7"
      whileHover={reduce ? undefined : { y: -10 }}
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-[14px] -z-10 rounded-[34px] bg-[radial-gradient(circle_at_top,_rgba(76,194,255,0.55),_transparent_70%)] blur-2xl"
        animate={{ opacity: 0.35 }}
        whileHover={{ opacity: 0.85, scale: 1.06 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-[#3A7BFF22] via-[#4CC2FF18] to-[#9B5DFF16]"
        initial={{ opacity: 0.45 }}
        whileHover={{ opacity: 0.9 }}
        transition={{ duration: 0.28 }}
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-10 -z-10 bg-[linear-gradient(115deg,_transparent_0%,_rgba(255,255,255,0.18)_30%,_transparent_60%)] mix-blend-screen"
        initial={{ x: "-140%" }}
        whileHover={reduce ? undefined : { x: "140%" }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
      />

      <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/14 bg-[radial-gradient(circle_at_top,_rgba(58,123,255,0.28),_rgba(5,8,22,0.95))] shadow-[0_0_40px_rgba(58,123,255,0.6)]">
        <span aria-hidden="true" className="text-2xl">
          {contact.icon}
        </span>
      </div>

      <div className="relative z-10 flex-1">
        <p className="mb-2 text-[11px] tracking-[0.22em] text-[#AEB8CC] md:text-xs">
          {contact.label}
        </p>
        <p className="text-lg text-[#F2F4FA] transition-transform group-hover:translate-x-1 md:text-xl">
          {contact.value}
        </p>
      </div>

      <ArrowRight
        aria-hidden="true"
        className="relative z-10 h-5 w-5 text-[#D7DEEA] opacity-0 transition-opacity group-hover:opacity-100"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent"
        style={{
          background:
            "linear-gradient(135deg, rgba(58,123,255,0.7), rgba(76,194,255,0.7), rgba(155,93,255,0.6))",
          WebkitMask:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: "1px",
          opacity: 0.55,
        }}
      />
    </motion.a>
  );
}