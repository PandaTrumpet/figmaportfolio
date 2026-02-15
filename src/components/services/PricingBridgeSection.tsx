
// "use client";

// import { motion } from "motion/react";
// import { ArrowRight } from "lucide-react";

// export default function PricingBridgeSection() {
//   return (
//     <section
//       className="
//         relative isolate
//         px-6 md:px-12 lg:px-20
//         py-16 md:py-20
//         overflow-visible
//       "
//       aria-label="Pricing bridge"
//     >
//       {/* CLIP WRAPPER — режет фон, НЕ контент */}
//       <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
//         {/* glow */}
//         <div className="absolute inset-0 opacity-70">
//           <div className="absolute -top-36 left-10 h-72 w-72 bg-[radial-gradient(circle_at_center,_#3A7BFF55,_transparent_70%)] blur-3xl" />
//           <div className="absolute -bottom-44 right-6 h-96 w-96 bg-[radial-gradient(circle_at_center,_#4CC2FF55,_transparent_70%)] blur-3xl" />
//         </div>

//         {/* fades — в цвет общего фона страницы */}
//         <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-[#020410] to-transparent" />
//         <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#020410] to-transparent" />

//         {/* тонкая линия снизу (можно оставить, но без “границы секций”) */}
//         {/* <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" /> */}
//       </div>

//       <div className="relative z-10 max-w-[1400px] mx-auto">
//         <div
//           className="
//             relative overflow-hidden
//             rounded-[36px]
//             border border-white/10
//             bg-gradient-to-b from-[#060A13] via-[#050816] to-[#02030A]
//             p-8 md:p-12
//             shadow-[0_26px_80px_rgba(0,0,0,0.85)]
//             backdrop-blur-xl
//           "
//         >
//           {/* inner glow */}
//           <div
//             className="pointer-events-none absolute inset-0 opacity-40"
//             aria-hidden="true"
//           >
//             <div className="absolute -top-24 -left-24 h-72 w-72 bg-[radial-gradient(circle_at_center,_rgba(58,123,255,0.35),_transparent_70%)] blur-3xl" />
//             <div className="absolute -bottom-28 -right-24 h-80 w-80 bg-[radial-gradient(circle_at_center,_rgba(76,194,255,0.30),_transparent_70%)] blur-3xl" />
//           </div>

//           {/* sheen */}
//           <motion.div
//             className="pointer-events-none absolute -inset-10 bg-[linear-gradient(115deg,_transparent_0%,_rgba(255,255,255,0.14)_30%,_transparent_60%)] mix-blend-screen"
//             initial={{ x: "-140%", opacity: 0 }}
//             whileHover={{ x: "140%", opacity: 1 }}
//             transition={{ duration: 0.95, ease: "easeInOut" }}
//             aria-hidden="true"
//           />

//           <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
//             <div className="max-w-2xl">
//               <div className="mb-4 h-[2px] w-20 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]" />
//               <h3 className="text-2xl md:text-4xl font-semibold tracking-tight text-[#F5EFE7] mb-3">
//                 Посмотреть пакеты и цены
//               </h3>
//               <p className="text-sm md:text-lg text-[#C7CEDF] opacity-90 leading-relaxed">
//                 На странице Pricing — уровни, сроки, что входит и варианты
//                 кастомизации под ваш бизнес.
//               </p>
//             </div>

//             <motion.a
//               href="/pricing"
//               className="
//                 relative inline-flex items-center justify-center
//                 overflow-hidden rounded-full
//                 px-10 py-3.5 md:px-12 md:py-4
//                 text-sm md:text-base font-medium
//                 text-[#050816]
//                 shadow-[0_0_40px_rgba(76,194,255,0.55)]
//                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4CC2FF]/70
//               "
//               whileHover={{ scale: 1.03 }}
//               whileTap={{ scale: 0.97 }}
//             >
//               <span className="absolute inset-0 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]" />
//               <motion.span
//                 className="absolute inset-0 bg-[linear-gradient(120deg,_transparent_0%,_white_20%,_transparent_40%)] opacity-0"
//                 initial={{ x: "-110%" }}
//                 whileHover={{ x: "110%", opacity: 0.55 }}
//                 transition={{ duration: 0.7, ease: "easeInOut" }}
//                 aria-hidden="true"
//               />
//               <span className="relative z-10 flex items-center gap-2">
//                 Перейти к Pricing
//                 <ArrowRight className="h-5 w-5" />
//               </span>
//             </motion.a>
//           </div>
//         </div>
//       </div>

//       {/* анти-горизонтальный скролл от blur (если вдруг вылезет) */}
//       <div
//         className="pointer-events-none absolute inset-y-0 left-0 w-1"
//         aria-hidden="true"
//       />
//       <div
//         className="pointer-events-none absolute inset-y-0 right-0 w-1"
//         aria-hidden="true"
//       />
//     </section>
//   );
// }


"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { PageContainer } from "../Layout/PageContainer";

export default function PricingBridgeSection() {
  const reduce = useReducedMotion();

  return (
    <section
      className="
        relative isolate
       pt-10 pb-10
        md:pt-14 md:pb-14
        lg:pt-16 lg:pb-16
        overflow-visible
      "
      aria-label="Pricing bridge"
    >
      {/* CLIP WRAPPER — режет фон, НЕ контент */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
        {/* glow */}
        <div className="absolute inset-0 opacity-70">
          <div className="absolute -top-36 left-10 h-72 w-72 bg-[radial-gradient(circle_at_center,_#3A7BFF55,_transparent_70%)] blur-3xl" />
          <div className="absolute -bottom-44 right-6 h-96 w-96 bg-[radial-gradient(circle_at_center,_#4CC2FF55,_transparent_70%)] blur-3xl" />
        </div>

        {/* fades — в цвет общего фона страницы */}
        <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-[#020410] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#020410] to-transparent" />
      </div>

      <PageContainer className="relative z-10 max-w-[1400px]">
        <div
          className="
            relative overflow-hidden
            rounded-[36px]
            border border-white/10
            bg-gradient-to-b from-[#060A13] via-[#050816] to-[#02030A]
            p-8 md:p-12
            shadow-[0_26px_80px_rgba(0,0,0,0.85)]
            backdrop-blur-xl
          "
        >
          {/* inner glow */}
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            aria-hidden="true"
          >
            <div className="absolute -top-24 -left-24 h-72 w-72 bg-[radial-gradient(circle_at_center,_rgba(58,123,255,0.35),_transparent_70%)] blur-3xl" />
            <div className="absolute -bottom-28 -right-24 h-80 w-80 bg-[radial-gradient(circle_at_center,_rgba(76,194,255,0.30),_transparent_70%)] blur-3xl" />
          </div>

          {/* sheen */}
          <motion.div
            className="pointer-events-none absolute -inset-10 bg-[linear-gradient(115deg,_transparent_0%,_rgba(255,255,255,0.14)_30%,_transparent_60%)] mix-blend-screen"
            initial={reduce ? false : { x: "-140%", opacity: 0 }}
            whileHover={reduce ? undefined : { x: "140%", opacity: 1 }}
            transition={{ duration: 0.95, ease: "easeInOut" }}
            aria-hidden="true"
          />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-2xl">
              <div className="mb-4 h-[2px] w-20 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]" />
              <h3 className="text-2xl md:text-4xl font-semibold tracking-tight text-[#F5EFE7] mb-3">
                Посмотреть пакеты и цены
              </h3>
              <p className="text-sm md:text-lg text-[#C7CEDF] opacity-90 leading-relaxed">
                На странице Pricing — уровни, сроки, что входит и варианты
                кастомизации под ваш бизнес.
              </p>
            </div>

            {/* <motion.a
              href="/pricing"
              className="
                relative inline-flex items-center justify-center
                overflow-hidden rounded-full
                px-10 py-3.5 md:px-12 md:py-4
                text-sm md:text-base font-medium
                text-[#050816]
                shadow-[0_0_40px_rgba(76,194,255,0.55)]
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4CC2FF]/70
              "
              whileHover={reduce ? undefined : { scale: 1.03 }}
              whileTap={reduce ? undefined : { scale: 0.97 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]" />
              <motion.span
                className="absolute inset-0 bg-[linear-gradient(120deg,_transparent_0%,_white_20%,_transparent_40%)] opacity-0"
                initial={reduce ? false : { x: "-110%" }}
                whileHover={reduce ? undefined : { x: "110%", opacity: 0.55 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                aria-hidden="true"
              />
              <span className="relative z-10 flex items-center gap-2">
                Перейти к Pricing
                <ArrowRight className="h-5 w-5" />
              </span>
            </motion.a> */}
            <motion.a
              href="/pricing"
              className="
    relative group inline-flex items-center justify-center
    overflow-hidden rounded-full
    px-10 py-3.5 md:px-12 md:py-4
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
              transition={{ duration: 0.2, ease: "easeOut" }}
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

              <span className="relative z-10 flex items-center gap-2">
                Перейти к Pricing
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
            </motion.a>
          </div>
        </div>
      </PageContainer>

      {/* анти-горизонтальный скролл от blur (если вдруг вылезет) */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-1"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-1"
        aria-hidden="true"
      />
    </section>
  );
}
