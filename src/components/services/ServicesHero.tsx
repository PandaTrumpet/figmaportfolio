

// "use client";

// import { motion } from "motion/react";
// import Image from "next/image";
// export default function ServicesHero() {
//   return (
//     <section className="relative bg-[#050816] px-6 md:px-12 lg:px-20 py-28 md:py-36 overflow-hidden">
//       {/* background image */}
//       <div className="pointer-events-none absolute inset-0">
//         <Image
//           src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdlYnNpdGV8ZW58MHx8fHwxNzMzODUyNDAwfDA&ixlib=rb-4.1.0&q=80&w=1920"
//           alt=""
//           fill
//           priority
//           sizes="100vw"
//           className="object-cover opacity-55 saturate-[0.85]"
//         />
//       </div>

//       {/* мягкий градиент только для читаемости */}
//       <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#050816]/55 via-transparent to-[#050816]/65" />

//       {/* glow — глубинный */}
//       <div className="pointer-events-none absolute inset-0">
//         <div className="absolute -top-40 -left-40 h-[520px] w-[520px] bg-[radial-gradient(circle_at_center,_#3A7BFF44,_transparent_72%)] blur-3xl" />
//         <div className="absolute top-1/2 -right-40 h-[620px] w-[620px] bg-[radial-gradient(circle_at_center,_#4CC2FF33,_transparent_72%)] blur-3xl" />
//       </div>

//       {/* very subtle noise */}
//       <div className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-soft-light">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(255,255,255,0.08),_transparent_40%),radial-gradient(circle_at_70%_60%,_rgba(255,255,255,0.06),_transparent_45%)]" />
//       </div>

//       {/* content */}
//       <div className="relative z-10 max-w-[1200px] mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 36 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
//         >
//           <div className="mb-6 h-[2px] w-20 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]" />

//           <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#F5EFE7] mb-6 leading-tight">
//             Вы не выбираете сайт.
//             <br />
//             <span className="opacity-90">Вы выбираете систему роста.</span>
//           </h1>

//           <p className="text-base md:text-xl text-[#C7CEDF] max-w-3xl leading-relaxed">
//             Мы помогаем выбрать правильный формат: от быстрого лендинга до
//             полноценной digital-системы с WhatsApp, CRM и автоматизацией.
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function ServicesHero() {
  return (
    <section
      className="
        relative
        px-6 md:px-12 lg:px-20
        py-28 md:py-36
        overflow-visible
      "
    >
      {/* CLIP WRAPPER — режет только фон/эффекты, не контент */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
        {/* background image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdlYnNpdGV8ZW58MHx8fHwxNzMzODUyNDAwfDA&ixlib=rb-4.1.0&q=80&w=1920"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-55 saturate-[0.85]"
          />
        </div>

        {/* мягкий градиент только для читаемости (без "дна" секции) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050814]/45 via-transparent to-transparent" />

        {/* локальные glow-споты (не задают фон секции, только эффект) */}
        <div className="absolute inset-0 opacity-70">
          <div className="absolute -top-44 -left-44 h-[520px] w-[520px] bg-[radial-gradient(circle_at_center,_#3A7BFF44,_transparent_72%)] blur-3xl" />
          <div className="absolute top-[40%] -right-52 h-[680px] w-[680px] bg-[radial-gradient(circle_at_center,_#4CC2FF33,_transparent_72%)] blur-3xl" />
        </div>

        {/* very subtle noise */}
        <div className="absolute inset-0 opacity-[0.08] mix-blend-soft-light">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(255,255,255,0.08),_transparent_40%),radial-gradient(circle_at_70%_60%,_rgba(255,255,255,0.06),_transparent_45%)]" />
        </div>

        {/* плавный fade вниз, чтобы не было "шва" со следующей секцией */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#020410]" />
      </div>

      {/* content */}
      <div className="relative z-10 max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-6 h-[2px] w-20 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]" />

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#F5EFE7] mb-6 leading-tight">
            Вы не выбираете сайт.
            <br />
            <span className="opacity-90">Вы выбираете систему роста.</span>
          </h1>

          <p className="text-base md:text-xl text-[#C7CEDF] max-w-3xl leading-relaxed">
            Мы помогаем выбрать правильный формат: от быстрого лендинга до
            полноценной digital-системы с WhatsApp, CRM и автоматизацией.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
