// "use client";
// import {  useRef, useState } from "react";
// import { motion, useScroll, useTransform, useInView } from "motion/react";

// import { processData } from "../../src/data/processData";
// import {
//   ArrowRight,
//   Check,
//   Clock,
//   Package,
//   Shield,
//   ChevronDown,
//   Sparkles,
//   Zap,
//   Target,
// } from "lucide-react";
// import { ImageWithFallback } from "@/src/components/figma/ImageWithFallback";
// import dynamic from "next/dynamic";

// const ParticlesBackground = dynamic(
//   () => import("../../src/components/ParticlesBackground").then((m) => m.ParticlesBackground),
//   { ssr: false }
// );

// export  default function Process() {
//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
//   const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

//   return (
//     <div ref={containerRef} className="min-h-screen bg-[#F5EFE7]">
//       {/* Hero */}
//       <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//         {/* Animated Background Grid */}
//         <div className="absolute inset-0 opacity-5">
//           <motion.div
//             className="w-full h-full"
//             style={{
//               backgroundImage:
//                 "linear-gradient(#050608 1px, transparent 1px), linear-gradient(90deg, #050608 1px, transparent 1px)",
//               backgroundSize: "80px 80px",
//             }}
//             animate={{
//               backgroundPosition: ["0px 0px", "80px 80px"],
//             }}
//             transition={{
//               duration: 30,
//               repeat: Infinity,
//               ease: "linear",
//             }}
//           />
//         </div>

//         <motion.div
//           className="relative z-10 max-w-[1400px] mx-auto w-full px-6 md:px-12 lg:px-20 text-center"
//           style={{ opacity }}
//         >
//           <motion.div
//             initial={{ opacity: 0, y: 80 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1.2, delay: 0.3 }}
//           >
//             {/* Floating Badge */}
//             <motion.div
//               className="inline-block mb-10"
//               animate={{ y: [0, -15, 0] }}
//               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//             >
//               <div className="px-8 py-4 border-2 border-[#050608] text-sm uppercase tracking-[0.3em] bg-white">
//                 {processData.hero.badge}
//               </div>
//             </motion.div>

//             {/* Title */}
//             <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.9] mb-12">
//               {processData.hero.title}
//             </h1>

//             {/* Subtitle */}
//             <p className="text-xl md:text-2xl lg:text-3xl opacity-70 max-w-4xl mx-auto leading-relaxed mb-16">
//               {processData.hero.subtitle}
//             </p>

//             {/* Scroll Indicator */}
//             <motion.div
//               className="inline-flex flex-col items-center gap-3"
//               animate={{ y: [0, 10, 0] }}
//               transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//             >
//               <ChevronDown className="w-8 h-8 opacity-50" />
//               <p className="text-sm uppercase tracking-wider opacity-50">
//                 Explore Process
//               </p>
//             </motion.div>
//           </motion.div>
//         </motion.div>

//         {/* Floating Hologram Elements */}
//         <HologramShapes />
//       </section>

//       {/* Process Steps */}
//       <section className="px-6 md:px-12 lg:px-20 py-32 md:py-40 relative">
//         <div className="max-w-[1600px] mx-auto">
//           {/* Section Header */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-center mb-32"
//           >
//             <motion.div
//               className="w-24 h-[3px] bg-[#050608] mb-12 mx-auto"
//               initial={{ width: 0 }}
//               whileInView={{ width: 96 }}
//               transition={{ duration: 1 }}
//               viewport={{ once: true }}
//             />
//             <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-8">
//               6 шагов к успеху
//             </h2>
//             <p className="text-xl md:text-2xl lg:text-3xl opacity-70 max-w-3xl mx-auto">
//               Каждый этап продуман для максимального результата
//             </p>
//           </motion.div>

//           {/* Steps */}
//           <div className="space-y-48">
//             {processData.steps.map((step, index) => (
//               <ProcessStep key={index} step={step} index={index} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 3D Flow Visualization */}
//       <section className="px-6 md:px-12 lg:px-20 py-32 md:py-40 bg-[#050608] text-[#F5EFE7] relative overflow-hidden">
//         <div className="max-w-[1400px] mx-auto relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-center mb-24"
//           >
//             <motion.div
//               className="w-24 h-[3px] bg-[#F5EFE7] mb-12 mx-auto"
//               initial={{ width: 0 }}
//               whileInView={{ width: 96 }}
//               transition={{ duration: 1 }}
//               viewport={{ once: true }}
//             />
//             <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-8">
//               {processData.timeline.title}
//             </h2>
//           </motion.div>

//           {/* Timeline Flow */}
//           <TimelineFlow phases={processData.timeline.phases} />
//         </div>

//         {/* Holographic Grid Background */}
//         <HolographicGrid />
//       </section>

//       {/* Deliverables */}
//       <section className="px-6 md:px-12 lg:px-20 py-32 md:py-40 bg-white">
//         <div className="max-w-[1400px] mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-center mb-24"
//           >
//             <motion.div
//               className="w-24 h-[3px] bg-[#050608] mb-12 mx-auto"
//               initial={{ width: 0 }}
//               whileInView={{ width: 96 }}
//               transition={{ duration: 1 }}
//               viewport={{ once: true }}
//             />
//             <div className="flex items-center justify-center gap-4 mb-8">
//               <Package className="w-10 h-10 md:w-12 md:h-12" />
//               <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
//                 {processData.deliverables.title}
//               </h2>
//             </div>
//             <p className="text-xl md:text-2xl lg:text-3xl opacity-70 max-w-3xl mx-auto">
//               {processData.deliverables.subtitle}
//             </p>
//           </motion.div>

//           {/* Deliverables Grid */}
//           <div className="grid md:grid-cols-2 gap-8">
//             {processData.deliverables.items.map((category, index) => (
//               <DeliverableCard key={index} category={category} index={index} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Guarantee Section */}
//       <section className="px-6 md:px-12 lg:px-20 py-32 md:py-40 bg-[#F5EFE7]">
//         <div className="max-w-[1200px] mx-auto">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1 }}
//             viewport={{ once: true }}
//             className="border-4 border-[#050608] p-12 md:p-16 lg:p-20 bg-white relative overflow-hidden"
//           >
//             {/* Background Pattern */}
//             <div className="absolute inset-0 opacity-[0.02]">
//               <div
//                 className="w-full h-full"
//                 style={{
//                   backgroundImage:
//                     "repeating-linear-gradient(45deg, #050608 0px, #050608 2px, transparent 2px, transparent 20px)",
//                 }}
//               />
//             </div>

//             <div className="relative z-10">
//               {/* Icon */}
//               <motion.div
//                 className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 border-2 border-[#050608] mb-10"
//                 animate={{ rotate: [0, 360] }}
//                 transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//               >
//                 <Shield className="w-10 h-10 md:w-12 md:h-12" />
//               </motion.div>

//               <h2 className="text-4xl md:text-5xl lg:text-6xl mb-12">
//                 {processData.guarantee.title}
//               </h2>

//               <div className="grid md:grid-cols-2 gap-6">
//                 {processData.guarantee.points.map((point, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, x: -20 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.6, delay: index * 0.1 }}
//                     viewport={{ once: true }}
//                     className="flex items-start gap-4"
//                   >
//                     <Check className="w-6 h-6 shrink-0 mt-1" />
//                     <p className="text-lg md:text-xl">{point}</p>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="px-6 md:px-12 lg:px-20 py-40 md:py-48 lg:py-56 bg-[#050608] text-[#F5EFE7] relative overflow-hidden">
//         <div className="max-w-[1400px] mx-auto text-center relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 60 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//             viewport={{ once: true }}
//           >
//             {/* Animated Icons */}
//             <div className="flex items-center justify-center gap-8 mb-12">
//               <motion.div
//                 animate={{
//                   y: [0, -20, 0],
//                   rotate: [0, 10, 0],
//                 }}
//                 transition={{
//                   duration: 4,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//               >
//                 <Target className="w-16 h-16 md:w-20 md:h-20" />
//               </motion.div>
//               <motion.div
//                 animate={{
//                   y: [0, -15, 0],
//                   rotate: [0, -10, 0],
//                 }}
//                 transition={{
//                   duration: 3,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                   delay: 0.5,
//                 }}
//               >
//                 <Zap className="w-16 h-16 md:w-20 md:h-20" />
//               </motion.div>
//               <motion.div
//                 animate={{
//                   y: [0, -25, 0],
//                   rotate: [0, 15, 0],
//                 }}
//                 transition={{
//                   duration: 5,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                   delay: 1,
//                 }}
//               >
//                 <Sparkles className="w-16 h-16 md:w-20 md:h-20" />
//               </motion.div>
//             </div>

//             <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl mb-12 leading-[0.95]">
//               Готовы начать
//               <br />
//               работу?
//             </h2>

//             <p className="text-xl md:text-2xl lg:text-3xl opacity-70 mb-16 max-w-3xl mx-auto leading-relaxed">
//               Запишитесь на бесплатную консультацию. Обсудим ваш проект и
//               составим индивидуальный план.
//             </p>

//             <motion.a
//               href="#contact"
//               className="inline-flex items-center gap-4 px-12 py-6 md:px-16 md:py-8 bg-[#F5EFE7] text-[#050608] text-xl md:text-2xl group relative overflow-hidden"
//               whileHover={{
//                 scale: 1.05,
//                 boxShadow: "0 0 60px rgba(245,239,231,0.4)",
//               }}
//               whileTap={{ scale: 0.95 }}
//             >
//               {/* Shimmer Effect */}
//               <motion.div
//                 className="absolute inset-0 bg-linear-to-r from-transparent via-white to-transparent opacity-30"
//                 animate={{ x: ["-200%", "200%"] }}
//                 transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
//               />
//               <span className="relative z-10">Начать проект</span>
//               <ArrowRight className="w-6 h-6 md:w-8 md:h-8 relative z-10 transition-transform group-hover:translate-x-2" />
//             </motion.a>
//           </motion.div>
//         </div>

//         {/* Particles Background */}
//         <ParticlesBackground />

//         {/* Rotating Shapes */}
//         <motion.div
//           className="absolute top-20 left-20 w-60 h-60 border-2 border-[#F5EFE7] opacity-5"
//           animate={{ rotate: 360 }}
//           transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
//         />
//         <motion.div
//           className="absolute bottom-20 right-20 w-80 h-80 border-2 border-[#F5EFE7] opacity-5"
//           animate={{ rotate: -360 }}
//           transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
//         />
//       </section>
//     </div>
//   );
// }

// // ============= COMPONENTS =============

// function ProcessStep({
//   step,
//   index,
// }: {
//   step: (typeof processData.steps)[0];
//   index: number;
// }) {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <div
//       ref={ref}
//       className={`grid lg:grid-cols-[1fr,1.2fr] gap-12 lg:gap-16 items-center ${
//         index % 2 === 1 ? "lg:grid-flow-dense" : ""
//       }`}
//     >
//       {/* Image with Hologram Effect */}
//       <motion.div
//         initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
//         animate={isInView ? { opacity: 1, x: 0 } : {}}
//         transition={{ duration: 1 }}
//         className={`relative ${index % 2 === 1 ? "lg:col-start-2" : ""}`}
//       >
//         <motion.div
//           className="relative aspect-4/5 border-4 border-[#050608] overflow-hidden group"
//           whileHover={{
//             boxShadow: "24px 24px 0px 0px rgba(5,6,8,1)",
//             x: -10,
//             y: -10,
//           }}
//           transition={{ duration: 0.3 }}
//         >
//           {/* Hologram Overlay */}
//           <motion.div
//             className="absolute inset-0 bg-linear-to-b from-transparent via-[#F5EFE7]/20 to-transparent opacity-0 group-hover:opacity-100 z-10"
//             animate={{
//               backgroundPosition: ["0% 0%", "0% 100%"],
//             }}
//             transition={{
//               duration: 2,
//               repeat: Infinity,
//               ease: "linear",
//             }}
//           />

//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             transition={{ duration: 0.7 }}
//           >
//             <ImageWithFallback
//               src={step.image}
//               alt={step.title}
//               className="w-full h-full object-cover"
//             />
//           </motion.div>

//           {/* Step Number Badge */}
//           <div className="absolute top-8 left-8 w-20 h-20 border-2 border-[#050608] bg-[#F5EFE7] flex items-center justify-center text-2xl z-20">
//             {step.number}
//           </div>
//         </motion.div>

//         {/* Decorative Element */}
//         <motion.div
//           className="absolute -bottom-8 -right-8 w-32 h-32 border-2 border-[#050608] opacity-20 -z-10"
//           animate={{ rotate: 360 }}
//           transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
//         />
//       </motion.div>

//       {/* Content */}
//       <motion.div
//         initial={{ opacity: 0, x: index % 2 === 0 ? 80 : -80 }}
//         animate={isInView ? { opacity: 1, x: 0 } : {}}
//         transition={{ duration: 1, delay: 0.2 }}
//         className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}
//       >
//         {/* Icon & Duration */}
//         <div className="flex items-center gap-6 mb-8">
//           <motion.div
//             className="text-6xl md:text-7xl"
//             animate={{ rotate: [0, 10, -10, 0] }}
//             transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
//           >
//             {step.icon}
//           </motion.div>
//           <div className="flex items-center gap-2 px-4 py-2 border-2 border-[#050608] bg-white">
//             <Clock className="w-5 h-5" />
//             <span className="text-sm uppercase tracking-wider">
//               {step.duration}
//             </span>
//           </div>
//         </div>

//         {/* Title & Subtitle */}
//         <h3 className="text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight">
//           {step.title}
//         </h3>
//         <p className="text-xl md:text-2xl opacity-60 mb-8">{step.subtitle}</p>

//         {/* Description */}
//         <p className="text-lg md:text-xl lg:text-2xl opacity-70 leading-relaxed mb-8">
//           {step.description}
//         </p>

//         {/* Deliverables */}
//         <div className="mb-8">
//           <h4 className="text-xl md:text-2xl mb-4 flex items-center gap-2">
//             <Package className="w-6 h-6" />
//             Deliverables:
//           </h4>
//           <div className="space-y-2">
//             {step.deliverables
//               .slice(0, isExpanded ? undefined : 3)
//               .map((item, i) => (
//                 <motion.div
//                   key={i}
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={isInView ? { opacity: 1, x: 0 } : {}}
//                   transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
//                   className="flex items-start gap-3"
//                 >
//                   <Check className="w-5 h-5 shrink-0 mt-1 opacity-50" />
//                   <span className="text-lg opacity-70">{item}</span>
//                 </motion.div>
//               ))}
//           </div>

//           {/* Expand Button */}
//           {step.deliverables.length > 3 && (
//             <motion.button
//               onClick={() => setIsExpanded(!isExpanded)}
//               className="mt-4 flex items-center gap-2 text-base opacity-60 hover:opacity-100 transition-opacity"
//               whileHover={{ x: 5 }}
//             >
//               <span>
//                 {isExpanded
//                   ? "Show less"
//                   : `+${step.deliverables.length - 3} more`}
//               </span>
//               <motion.div
//                 animate={{ rotate: isExpanded ? 180 : 0 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <ChevronDown className="w-5 h-5" />
//               </motion.div>
//             </motion.button>
//           )}
//         </div>

//         {/* Details */}
//         <div className="grid md:grid-cols-3 gap-4">
//           {step.details.map((detail, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 20 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
//               className="border-2 border-[#050608] p-4 bg-white hover:bg-[#F5EFE7] transition-colors"
//             >
//               <h5 className="text-base mb-2">{detail.title}</h5>
//               <p className="text-sm opacity-60 leading-relaxed">
//                 {detail.description}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </div>
//   );
// }

// function TimelineFlow({
//   phases,
// }: {
//   phases: typeof processData.timeline.phases;
// }) {
//   return (
//     <div className="relative">
//       {/* Connection Line */}
//       <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-[#F5EFE7] opacity-20" />

//       <div className="grid md:grid-cols-5 gap-8 relative z-10">
//         {phases.map((phase, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 60 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: index * 0.15 }}
//             viewport={{ once: true }}
//             className="relative"
//           >
//             {/* Node */}
//             <motion.div
//               className="w-full aspect-square border-2 border-[#F5EFE7] bg-[#050608] p-6 md:p-8 flex flex-col items-center justify-center text-center mb-6 relative overflow-hidden group"
//               whileHover={{
//                 scale: 1.05,
//                 borderColor: "#F5EFE7",
//                 boxShadow: "0 0 40px rgba(245,239,231,0.3)",
//               }}
//             >
//               {/* Hologram Effect */}
//               <motion.div
//                 className="absolute inset-0 bg-linear-to-br from-[#F5EFE7]/10 to-transparent opacity-0 group-hover:opacity-100"
//                 animate={{
//                   backgroundPosition: ["0% 0%", "100% 100%"],
//                 }}
//                 transition={{
//                   duration: 3,
//                   repeat: Infinity,
//                   ease: "linear",
//                 }}
//               />

//               <div className="relative z-10">
//                 <p className="text-5xl md:text-6xl mb-2 opacity-30">
//                   0{index + 1}
//                 </p>
//                 <p className="text-lg md:text-xl uppercase tracking-wider">
//                   {phase.name}
//                 </p>
//               </div>
//             </motion.div>

//             {/* Info */}
//             <div className="text-center">
//               <p className="text-lg md:text-xl mb-2">{phase.weeks}</p>
//               <p className="text-base opacity-70">{phase.description}</p>
//             </div>

//             {/* Arrow (except last) */}
//             {index < phases.length - 1 && (
//               <motion.div
//                 className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2"
//                 animate={{ x: [0, 10, 0] }}
//                 transition={{
//                   duration: 2,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//               >
//                 <ArrowRight className="w-6 h-6 opacity-30" />
//               </motion.div>
//             )}
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }

// function DeliverableCard({
//   category,
//   index,
// }: {
//   category: (typeof processData.deliverables.items)[0];
//   index: number;
// }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 60 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8, delay: index * 0.1 }}
//       viewport={{ once: true }}
//       className="group"
//     >
//       <motion.div
//         className="border-2 border-[#050608] p-10 md:p-12 bg-[#F5EFE7] h-full hover:bg-white transition-colors"
//         whileHover={{
//           boxShadow: "16px 16px 0px 0px rgba(5,6,8,1)",
//           x: -5,
//           y: -5,
//         }}
//       >
//         {/* Icon & Title */}
//         <div className="flex items-center gap-4 mb-8">
//           <motion.div
//             className="text-5xl"
//             animate={{ rotate: [0, 15, -15, 0] }}
//             transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
//           >
//             {category.icon}
//           </motion.div>
//           <h3 className="text-2xl md:text-3xl lg:text-4xl">
//             {category.category}
//           </h3>
//         </div>

//         {/* Items */}
//         <div className="space-y-3">
//           {category.items.map((item, i) => (
//             <div key={i} className="flex items-start gap-3">
//               <Check className="w-5 h-5 shrink-0 mt-1" />
//               <p className="text-lg opacity-70">{item}</p>
//             </div>
//           ))}
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// }

// function HologramShapes() {
//   return (
//     <div className="absolute inset-0 pointer-events-none overflow-hidden">
//       {[...Array(6)].map((_, i) => (
//         <motion.div
//           key={i}
//           className="absolute border-2 border-[#050608] opacity-[0.03]"
//           style={{
//             width: `${100 + i * 40}px`,
//             height: `${100 + i * 40}px`,
//             left: `${10 + i * 15}%`,
//             top: `${20 + i * 10}%`,
//           }}
//           animate={{
//             rotate: 360,
//             scale: [1, 1.2, 1],
//           }}
//           transition={{
//             duration: 20 + i * 5,
//             repeat: Infinity,
//             ease: "linear",
//           }}
//         />
//       ))}
//     </div>
//   );
// }

// function HolographicGrid() {
//   return (
//     <div className="absolute inset-0 opacity-5 pointer-events-none">
//       <motion.div
//         className="w-full h-full"
//         style={{
//           backgroundImage:
//             "repeating-linear-gradient(0deg, #F5EFE7 0px, #F5EFE7 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, #F5EFE7 0px, #F5EFE7 1px, transparent 1px, transparent 40px)",
//         }}
//         animate={{
//           backgroundPosition: ["0px 0px", "40px 40px"],
//         }}
//         transition={{
//           duration: 20,
//           repeat: Infinity,
//           ease: "linear",
//         }}
//       />
//     </div>
//   );
// }

import ProcessPage from "@/src/components/process/ProcessPage";

export default function Page() {
  return <ProcessPage />;
}
