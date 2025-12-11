


// "use client";

// import { useEffect, useState } from "react";
// import { ArrowRight } from "lucide-react";
// import { motion } from "motion/react";
// import Image from "next/image";

// export function Hero() {
//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <section
//       id="hero"
//       className="relative min-h-screen flex items-center px-6 md:px-12 lg:px-20 py-32 overflow-hidden"
//     >
//       <div className="max-w-[1400px] mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
//         {/* Left Column - Text */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//           style={{
//             transform: `translateY(${scrollY * 0.15}px)`,
//           }}
//         >
//           <motion.div
//             className="w-16 h-0.5 bg-[#050608] mb-8"
//             initial={{ width: 0 }}
//             animate={{ width: 64 }} // 64px, совпадает с w-16
//             transition={{ duration: 0.8, delay: 0.2 }}
//           />

//           <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] mb-8">
//             Сайты, Которые Работают на Ваш Бизнес
//           </h1>

//           <p className="text-xl md:text-2xl opacity-70 mb-12 leading-relaxed max-w-xl">
//             Создаём лендинги, корпоративные сайты и интернет-магазины, которые
//             привлекают клиентов и увеличивают продажи.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4">
//             <motion.a
//               href="#contact"
//               className="group px-8 py-5 bg-[#050608] text-[#F5EFE7] inline-flex items-center gap-3 transition-all hover:shadow-2xl relative overflow-hidden"
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//             >
//               <span className="relative z-10">Start Your Project</span>
//               <ArrowRight className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" />
//               <motion.div
//                 className="absolute inset-0 bg-[#1a1a1a]"
//                 initial={{ x: "-100%" }}
//                 whileHover={{ x: 0 }}
//                 transition={{ duration: 0.3 }}
//               />
//             </motion.a>

//             <motion.a
//               href="#cases"
//               className="group px-8 py-5 border-2 border-[#050608] inline-flex items-center gap-3 transition-all hover:bg-[#050608] hover:text-[#F5EFE7]"
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//             >
//               <span>View Our Work</span>
//             </motion.a>
//           </div>
//         </motion.div>

//         {/* Right Column - Stacked Images with Parallax */}
//         <motion.div
//           className="relative h-[500px] md:h-[600px]"
//           initial={{ opacity: 0, x: 40 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
//         >
//           {/* Background Image */}
//           <motion.div
//             className="absolute top-0 right-0 w-[70%] h-[60%] border-2 border-[#050608] overflow-hidden bg-white shadow-[8px_8px_0px_0px_rgba(5,6,8,1)]"
//             style={{
//               transform: `translateY(${scrollY * 0.1}px)`,
//             }}
//             whileHover={{ scale: 1.05, rotate: 2 }}
//             transition={{ duration: 0.4 }}
//           >
//             <Image
//               src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBsYXB0b3B8ZW58MXx8fHwxNzMzODU2NDAwfDA&ixlib=rb-4.0.3&q=80&w=1080"
//               alt="Web design workspace"
//               className="w-full h-full object-cover"
//               fill={false}
//               width={1080}
//               height={720}
//             />
//           </motion.div>

//           {/* Foreground Image */}
//           <motion.div
//             className="absolute bottom-0 left-0 w-[70%] h-[60%] border-2 border-[#050608] overflow-hidden bg-white shadow-[8px_8px_0px_0px_rgba(5,6,8,1)]"
//             style={{
//               transform: `translateY(${scrollY * -0.08}px)`,
//             }}
//             whileHover={{ scale: 1.05, rotate: -2 }}
//             transition={{ duration: 0.4 }}
//           >
//             <Image
//               src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3JrfGVufDF8fHx8MTczMzg1NjQwMHww&ixlib=rb-4.0.3&q=80&w=1080"
//               alt="Modern office workspace"
//               className="w-full h-full object-cover"
//               width={1080}
//               height={720}
//             />
//           </motion.div>

//           {/* Floating accent square */}
//           <motion.div
//             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-[#F5EFE7] border-2 border-[#050608] z-10"
//             animate={{
//               rotate: [0, 360],
//               scale: [1, 1.1, 1],
//             }}
//             transition={{
//               rotate: { duration: 20, repeat: Infinity, ease: "linear" },
//               scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
//             }}
//           />
//         </motion.div>
//       </div>

//       {/* Decorative grid overlay */}
//       <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
//         <div
//           className="w-full h-full"
//           style={{
//             backgroundImage:
//               "linear-gradient(#050608 1px, transparent 1px), linear-gradient(90deg, #050608 1px, transparent 1px)",
//             backgroundSize: "64px 64px",
//           }}
//         />
//       </div>

//       {/* Scroll indicator */}
//       <motion.div
//         className="absolute bottom-12 left-1/2 -translate-x-1/2"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 1 }}
//       >
//         <motion.div
//           className="w-6 h-10 border-2 border-[#050608] rounded-full flex items-start justify-center p-1"
//           animate={{ y: [0, 10, 0] }}
//           transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//         >
//           <motion.div
//             className="w-1.5 h-1.5 bg-[#050608] rounded-full"
//             animate={{ y: [0, 16, 0] }}
//             transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//           />
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }

// Сверху светлый вариант 


"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

export function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="
        relative min-h-screen flex items-center 
        px-6 md:px-12 lg:px-20 py-32 overflow-hidden
        bg-linear-to-b from-[#050814] via-[#050818] to-[#020410]
        text-slate-100
      "
    >
      {/* Неоновые волны */}
      <div
        className="pointer-events-none absolute -top-40 right-[-10%] h-96 w-96 rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(76,194,255,0.9), transparent 60%)",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-[-20%] left-[-10%] h-[26rem] w-[26rem] rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(58,123,255,0.85), transparent 55%)",
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        >
          {/* Линия */}
          <motion.div
            className="w-16 h-0.5 mb-8 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-transparent"
            initial={{ width: 0 }}
            animate={{ width: 64 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />

          {/* Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] mb-8 text-slate-100">
            Сайты, Которые Работают На Ваш Бизнес
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-300/90 mb-12 leading-relaxed max-w-xl">
            Создаём лендинги, корпоративные сайты и интернет-магазины, которые
            привлекают клиентов и увеличивают продажи.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Primary */}
            <motion.a
              href="#contact"
              className="
                relative group inline-flex items-center gap-3 px-8 py-5 rounded-full font-medium
                bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#63E5FF]
                text-slate-900 shadow-[0_0_40px_rgba(76,194,255,0.55)]
                hover:shadow-[0_0_60px_rgba(76,194,255,0.8)]
                transition-all
              "
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="relative z-10">Start Your Project</span>
              <ArrowRight className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1" />

              {/* shine layer */}
              <div className="pointer-events-none absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>

            {/* Secondary */}
            <motion.a
              href="#cases"
              className="
                group px-8 py-5 rounded-full inline-flex items-center gap-3
                border border-cyan-400/60 text-slate-100
                hover:bg-cyan-500/5 hover:shadow-[0_0_30px_rgba(56,189,248,0.45)]
                transition-all
              "
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>View Our Work</span>
            </motion.a>
          </div>
        </motion.div>

        {/* Right Column Images */}
        <motion.div
          className="relative h-[500px] md:h-[600px]"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Top Card */}
          <motion.div
            className="
              absolute top-0 right-0 w-[70%] h-[60%]
              rounded-3xl overflow-hidden backdrop-blur-xl
              border border-cyan-400/40 bg-[#0A0F1E]/80
              shadow-[0_0_60px_rgba(59,130,246,0.35)]
            "
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
            whileHover={{ scale: 1.05, rotate: 2 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?...&w=1080"
              alt="Web design workspace"
              className="w-full h-full object-cover mix-blend-screen opacity-80"
              width={1080}
              height={720}
            />
          </motion.div>

          {/* Bottom Card */}
          <motion.div
            className="
              absolute bottom-0 left-0 w-[70%] h-[60%]
              rounded-3xl overflow-hidden backdrop-blur-xl
              border border-indigo-400/50 bg-[#0B1020]/85
              shadow-[0_0_70px_rgba(129,140,248,0.45)]
            "
            style={{ transform: `translateY(${scrollY * -0.08}px)` }}
            whileHover={{ scale: 1.05, rotate: -2 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?...&w=1080"
              alt="Modern office workspace"
              className="w-full h-full object-cover mix-blend-screen opacity-85"
              width={1080}
              height={720}
            />
          </motion.div>

          {/* Floating Neon Square */}
          <motion.div
            className="
              absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
              w-24 h-24 rounded-2xl border border-cyan-400/60
              bg-[radial-gradient(circle_at_0%_0%,#4CC2FF,#3A7BFF,#8B5CF6,transparent)]
              shadow-[0_0_60px_rgba(76,194,255,0.9)]
              flex items-center justify-center
            "
            animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
            transition={{
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <span className="text-[10px] tracking-widest uppercase text-slate-50/80">
              SavonDev
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Grid Overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.12]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(51,65,85,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(51,65,85,0.3) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>
    </section>
  );
}
