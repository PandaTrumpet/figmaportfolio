
// "use client";

// import { motion, useReducedMotion } from "motion/react";
// import { Heart, ArrowUpRight } from "lucide-react";
// import { ImageWithFallback } from "@/src/components/figma/ImageWithFallback";

// type MissionData = { title: string; description: string; image: string };

// const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

// export function MissionSection({ data }: { data: MissionData }) {
//   const reduce = useReducedMotion();

//   return (
//     <section className="relative overflow-visible px-6 py-24 md:px-12 md:py-32 lg:px-20">
//       {/* BACKGROUND (clip only background, not the whole section) */}
//       <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
//         {/* background spots */}
//         <div className="absolute inset-0 opacity-60">
//           <div className="absolute -top-44 -left-40 h-96 w-96 bg-[radial-gradient(circle_at_center,_#3A7BFF55,_transparent_70%)] blur-3xl" />
//           <div className="absolute -bottom-52 -right-24 h-[520px] w-[520px] bg-[radial-gradient(circle_at_center,_#4CC2FF55,_transparent_70%)] blur-3xl" />
//         </div>

//         {/* grid overlay (local, softer) */}
//         <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:64px_64px]" />

//         {/* gentle fade to avoid any “hard edge” */}
//         <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#020410]" />
//       </div>

//       <div className="relative z-10 mx-auto max-w-[1400px]">
//         <div className="grid items-center gap-12 md:gap-16 lg:grid-cols-2 lg:gap-20">
//           {/* Text */}
//           <motion.div
//             initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, x: -40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.75, ease: EASE }}
//             viewport={{ once: true, margin: "-120px" }}
//             className="text-[#F5EFE7]"
//           >
//             {/* accent line */}
//             <motion.div
//               className="mb-7 h-[2px] w-20 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]"
//               initial={{ width: 0 }}
//               whileInView={{ width: 80 }}
//               transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
//               viewport={{ once: true }}
//             />

//             <h2 className="mb-6 text-3xl font-semibold tracking-tight leading-tight md:mb-8 md:text-5xl lg:text-6xl xl:text-7xl">
//               Мы убираем потери заявок
//             </h2>

//             <p className="mb-10 max-w-xl text-base leading-relaxed text-[#C7CEDF] md:text-xl lg:text-2xl">
//               Большинство сайтов выглядят нормально, но не работают. Люди
//               заходят — и уходят.
//               <br />
//               <br />
//               Мы делаем сайты как инструмент продаж: понятный оффер, простой UX
//               и WhatsApp вместо «оставьте заявку».
//             </p>

//             {/* honest-proof + primary CTA */}
//             <div className="mt-2 flex flex-col items-start gap-4">
//               <motion.div
//                 className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-[#E8ECF4] shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-md md:text-base"
//                 whileHover={reduce ? undefined : { x: 8 }}
//                 transition={{ duration: 0.25, ease: "easeOut" }}
//               >
//                 <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-white/15 bg-[radial-gradient(circle_at_top,_#3A7BFF3b,_#050816)] shadow-[0_0_40px_rgba(58,123,255,0.55)]">
//                   <Heart className="h-5 w-5 text-[#E8F2FF]" />
//                 </span>
//                 <span className="opacity-85">Прямо. Быстро. По делу.</span>
//               </motion.div>

//               <div className="flex flex-col items-start gap-2">
//                 {/* Primary CTA */}
//                 <motion.a
//                   href="#contact"
//                   className="
//                     relative inline-flex items-center justify-center gap-2
//                     overflow-hidden rounded-full
//                     px-8 py-3.5 md:px-10 md:py-4
//                     text-sm font-medium md:text-base
//                     text-[#050816]
//                     shadow-[0_0_40px_rgba(76,194,255,0.65)]
//                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4CC2FF]/70 focus-visible:ring-offset-0
//                   "
//                   whileHover={reduce ? undefined : { scale: 1.03 }}
//                   whileTap={reduce ? undefined : { scale: 0.97 }}
//                   transition={{ duration: 0.22, ease: "easeOut" }}
//                   aria-label="Обсудить задачу — перейти к контактам"
//                 >
//                   {/* gradient base */}
//                   <span className="absolute inset-0 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]" />

//                   {/* sheen */}
//                   <motion.span
//                     className="absolute inset-0 bg-[linear-gradient(120deg,_transparent_0%,_white_22%,_transparent_45%)] opacity-0"
//                     initial={{ x: "-110%" }}
//                     whileHover={
//                       reduce ? undefined : { x: "110%", opacity: 0.55 }
//                     }
//                     transition={{ duration: 0.7, ease: "easeInOut" }}
//                     aria-hidden="true"
//                   />

//                   {/* inner glow */}
//                   <span
//                     className="absolute -inset-6 opacity-50 blur-2xl
//                     bg-[radial-gradient(circle_at_center,_rgba(76,194,255,0.55),_transparent_60%)]"
//                     aria-hidden="true"
//                   />

//                   <span className="relative z-10">Обсудить задачу</span>
//                   <ArrowUpRight className="relative z-10 h-4 w-4" />
//                 </motion.a>

//                 <p className="text-xs text-white/55 md:text-sm">
//                   Обычно отвечаем в WhatsApp в течение дня.
//                 </p>
//               </div>
//             </div>
//           </motion.div>

//           {/* Image */}
//           <motion.div
//             initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, x: 40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.75, delay: 0.08, ease: EASE }}
//             viewport={{ once: true, margin: "-120px" }}
//             className="relative"
//           >
//             {/* glow under image card */}
//             <motion.div
//               className="absolute -inset-[14px] -z-20 rounded-[34px] bg-[radial-gradient(circle_at_top,_rgba(58,123,255,0.55),_transparent_70%)] blur-2xl"
//               animate={{ opacity: 0.45, scale: 1 }}
//               transition={{ duration: 0.35, ease: "easeOut" }}
//               aria-hidden="true"
//             />

//             <motion.div
//               className="
//                 relative aspect-[4/5] rounded-3xl
//                 border border-white/10
//                 bg-gradient-to-b from-[#060A13] via-[#050816] to-[#02030A]
//                 shadow-[0_26px_80px_rgba(0,0,0,0.85)]
//                 backdrop-blur-xl overflow-hidden
//               "
//               whileHover={
//                 reduce
//                   ? undefined
//                   : { y: -12, boxShadow: "0 32px 120px rgba(0,0,0,1)" }
//               }
//               transition={{ duration: 0.3, ease: "easeOut" }}
//             >
//               {/* inner glow */}
//               <motion.div
//                 className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-[#3A7BFF22] via-transparent to-[#4CC2FF22]"
//                 initial={{ opacity: 0.35 }}
//                 whileHover={{ opacity: 0.85 }}
//                 transition={{ duration: 0.3 }}
//                 aria-hidden="true"
//               />

//               {/* sheen */}
//               <motion.div
//                 className="pointer-events-none absolute -inset-10 -z-10 bg-[linear-gradient(115deg,_transparent_0%,_rgba(255,255,255,0.22)_30%,_transparent_60%)] mix-blend-screen"
//                 initial={{ x: "-140%" }}
//                 whileHover={reduce ? undefined : { x: "140%" }}
//                 transition={{ duration: 0.9, ease: "easeInOut" }}
//                 aria-hidden="true"
//               />

//               {/* neon outline frame */}
//               <motion.div
//                 className="pointer-events-none absolute inset-0 z-10 rounded-3xl border border-transparent"
//                 initial={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.06)" }}
//                 whileHover={{
//                   boxShadow:
//                     "0 0 0 1px rgba(76,194,255,0.7), 0 0 42px rgba(76,194,255,1)",
//                 }}
//                 transition={{ duration: 0.25 }}
//                 style={{
//                   background:
//                     "linear-gradient(135deg, #3A7BFF, #4CC2FF, #9B5DFF)",
//                   WebkitMask:
//                     "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
//                   WebkitMaskComposite: "xor",
//                   maskComposite: "exclude",
//                   padding: "1px",
//                 }}
//                 aria-hidden="true"
//               />

//               <ImageWithFallback
//                 src={data.image}
//                 alt="Our mission"
//                 className="absolute inset-0 h-full w-full object-cover"
//               />

//               <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/70 via-transparent to-transparent" />
//             </motion.div>

//             {/* floating element */}
//             <motion.div
//               className="pointer-events-none absolute -bottom-8 -right-8 -z-10 hidden h-28 w-28 rounded-3xl border border-[#3A7BFF33] bg-[radial-gradient(circle_at_top,_#3A7BFF33,_transparent_70%)] opacity-60 md:block"
//               animate={
//                 reduce ? undefined : { rotate: 360, scale: [1, 1.08, 1] }
//               }
//               transition={
//                 reduce
//                   ? undefined
//                   : {
//                       rotate: {
//                         duration: 30,
//                         repeat: Infinity,
//                         ease: "linear",
//                       },
//                       scale: {
//                         duration: 4,
//                         repeat: Infinity,
//                         ease: "easeInOut",
//                       },
//                     }
//               }
//               aria-hidden="true"
//             />
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import { motion, useReducedMotion } from "motion/react";
import { Heart, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "@/src/components/figma/ImageWithFallback";
import { PageContainer } from "../Layout/PageContainer";

type MissionData = { title: string; description: string; image: string };

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function MissionSection({ data }: { data: MissionData }) {
  const reduce = useReducedMotion();

  return (
    <section
      className="relative overflow-visible  pt-10 pb-10
        md:pt-14 md:pb-14
        lg:pt-16 lg:pb-16"
    >
      {/* BACKGROUND (full-bleed, clip only background) */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* background spots */}
        <div className="absolute inset-0 opacity-60">
          <div className="absolute -top-44 -left-40 h-96 w-96 bg-[radial-gradient(circle_at_center,_#3A7BFF55,_transparent_70%)] blur-3xl" />
          <div className="absolute -bottom-52 -right-24 h-[520px] w-[520px] bg-[radial-gradient(circle_at_center,_#4CC2FF55,_transparent_70%)] blur-3xl" />
        </div>

        {/* grid overlay (local, softer) */}
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:64px_64px]" />

        {/* gentle fade to avoid any “hard edge” */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#020410]" />
      </div>

      <PageContainer className="relative z-10">
        <div className="grid items-center gap-12 md:gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Text */}
          <motion.div
            initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: EASE }}
            viewport={{ once: true, margin: "-120px" }}
            className="text-[#F5EFE7]"
          >
            {/* accent line */}
            <motion.div
              className="mb-7 h-[2px] w-20 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
              viewport={{ once: true }}
            />

            <h2 className="mb-6 text-3xl font-semibold tracking-tight leading-tight md:mb-8 md:text-5xl lg:text-6xl xl:text-7xl">
              Мы убираем потери заявок
            </h2>

            <p className="mb-10 max-w-xl text-base leading-relaxed text-[#C7CEDF] md:text-xl lg:text-2xl">
              Большинство сайтов выглядят нормально, но не работают. Люди
              заходят — и уходят.
              <br />
              <br />
              Мы делаем сайты как инструмент продаж: понятный оффер, простой UX
              и WhatsApp вместо «оставьте заявку».
            </p>

            {/* honest-proof + primary CTA */}
            <div className="mt-2 flex flex-col items-start gap-4">
              <motion.div
                className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-[#E8ECF4] shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-md md:text-base"
                whileHover={reduce ? undefined : { x: 8 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-white/15 bg-[radial-gradient(circle_at_top,_#3A7BFF3b,_#050816)] shadow-[0_0_40px_rgba(58,123,255,0.55)]">
                  <Heart className="h-5 w-5 text-[#E8F2FF]" />
                </span>
                <span className="opacity-85">Прямо. Быстро. По делу.</span>
              </motion.div>

              <div className="flex flex-col items-start gap-2">
                {/* Primary CTA */}
                {/* <motion.a
                  href="#contact"
                  className="
                    relative inline-flex items-center justify-center gap-2
                    overflow-hidden rounded-full
                    px-8 py-3.5 md:px-10 md:py-4
                    text-sm font-medium md:text-base
                    text-[#050816]
                    shadow-[0_0_40px_rgba(76,194,255,0.65)]
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4CC2FF]/70 focus-visible:ring-offset-0
                  "
                  whileHover={reduce ? undefined : { scale: 1.03 }}
                  whileTap={reduce ? undefined : { scale: 0.97 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  aria-label="Обсудить задачу — перейти к контактам"
                >
                
                  <span className="absolute inset-0 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]" />

                  <motion.span
                    className="absolute inset-0 bg-[linear-gradient(120deg,_transparent_0%,_white_22%,_transparent_45%)] opacity-0"
                    initial={{ x: "-110%" }}
                    whileHover={
                      reduce ? undefined : { x: "110%", opacity: 0.55 }
                    }
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                    aria-hidden="true"
                  />

                  <span
                    className="absolute -inset-6 opacity-50 blur-2xl
                    bg-[radial-gradient(circle_at_center,_rgba(76,194,255,0.55),_transparent_60%)]"
                    aria-hidden="true"
                  />

                  <span className="relative z-10">Обсудить задачу</span>
                  <ArrowUpRight className="relative z-10 h-4 w-4" />
                </motion.a> */}
                <motion.a
                  href="#contact"
                  className="
    relative group inline-flex items-center justify-center gap-2
    overflow-hidden rounded-full
    px-8 py-3.5 md:px-10 md:py-4
    text-sm md:text-base font-medium
    text-[#050816]

    shadow-[0_0_40px_rgba(76,194,255,0.55)]
    hover:shadow-[0_0_65px_rgba(76,194,255,0.85)]
    transition-shadow

    focus-visible:outline-none
    focus-visible:ring-2 focus-visible:ring-[#4CC2FF]/70
    focus-visible:ring-offset-0
  "
                  whileHover={reduce ? undefined : { scale: 1.03 }}
                  whileTap={reduce ? undefined : { scale: 0.97 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  aria-label="Обсудить задачу — перейти к контактам"
                >
                  {/* Main gradient — fixed palette */}
                  <span className="absolute inset-0 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]" />

                  {/* Depth / glass layer */}
                  <span
                    className="
      pointer-events-none absolute inset-0
      [background:linear-gradient(to_bottom,rgba(255,255,255,0.28),rgba(255,255,255,0.06)_45%,rgba(0,0,0,0.12))]
      mix-blend-overlay
    "
                    aria-hidden="true"
                  />

                  {/* Hover soft highlight — unified */}
                  <span
                    className="
      pointer-events-none absolute inset-0 rounded-full
      bg-white/10 opacity-0
      group-hover:opacity-100 transition-opacity
    "
                    aria-hidden="true"
                  />

                  <span className="relative z-10">Обсудить задачу</span>
                  <ArrowRight className="relative z-10 h-4 w-4 opacity-90 transition-transform group-hover:translate-x-1" />
                </motion.a>

                <p className="text-xs text-white/55 md:text-sm">
                  Обычно отвечаем в WhatsApp в течение дня.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.08, ease: EASE }}
            viewport={{ once: true, margin: "-120px" }}
            className="relative"
          >
            {/* glow under image card */}
            <motion.div
              className="absolute -inset-[14px] -z-20 rounded-[34px] bg-[radial-gradient(circle_at_top,_rgba(58,123,255,0.55),_transparent_70%)] blur-2xl"
              animate={{ opacity: 0.45, scale: 1 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              aria-hidden="true"
            />

            <motion.div
              className="
                relative aspect-[4/5] rounded-3xl
                border border-white/10
                bg-gradient-to-b from-[#060A13] via-[#050816] to-[#02030A]
                shadow-[0_26px_80px_rgba(0,0,0,0.85)]
                backdrop-blur-xl overflow-hidden
              "
              whileHover={
                reduce
                  ? undefined
                  : { y: -12, boxShadow: "0 32px 120px rgba(0,0,0,1)" }
              }
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {/* inner glow */}
              <motion.div
                className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-[#3A7BFF22] via-transparent to-[#4CC2FF22]"
                initial={{ opacity: 0.35 }}
                whileHover={{ opacity: 0.85 }}
                transition={{ duration: 0.3 }}
                aria-hidden="true"
              />

              {/* sheen */}
              <motion.div
                className="pointer-events-none absolute -inset-10 -z-10 bg-[linear-gradient(115deg,_transparent_0%,_rgba(255,255,255,0.22)_30%,_transparent_60%)] mix-blend-screen"
                initial={{ x: "-140%" }}
                whileHover={reduce ? undefined : { x: "140%" }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
                aria-hidden="true"
              />

              {/* neon outline frame */}
              <motion.div
                className="pointer-events-none absolute inset-0 z-10 rounded-3xl border border-transparent"
                initial={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.06)" }}
                whileHover={{
                  boxShadow:
                    "0 0 0 1px rgba(76,194,255,0.7), 0 0 42px rgba(76,194,255,1)",
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
                aria-hidden="true"
              />

              <ImageWithFallback
                src={data.image}
                alt="Our mission"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/70 via-transparent to-transparent" />
            </motion.div>

            {/* floating element */}
            <motion.div
              className="pointer-events-none absolute -bottom-8 -right-8 -z-10 hidden h-28 w-28 rounded-3xl border border-[#3A7BFF33] bg-[radial-gradient(circle_at_top,_#3A7BFF33,_transparent_70%)] opacity-60 md:block"
              animate={
                reduce ? undefined : { rotate: 360, scale: [1, 1.08, 1] }
              }
              transition={
                reduce
                  ? undefined
                  : {
                      rotate: {
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                      },
                      scale: {
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }
              }
              aria-hidden="true"
            />
          </motion.div>
        </div>
      </PageContainer>
    </section>
  );
}
