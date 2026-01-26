// "use client";
// import { useRef, useState } from "react";
// import { motion, useScroll, useTransform, useInView } from "motion/react";



// import { pricingData } from "../../src/data/pricingData";
// import {
//   Check,
//   X,
//   ArrowRight,
//   Shield,
//   Sparkles,
//   Plus,
//   Minus,
//   Zap,
//   Star,
//   TrendingUp,
//   ChevronDown,
// } from "lucide-react";

// export default function Pricing() {

//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
//   const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

//   return (
//     <div ref={containerRef} className="min-h-screen bg-[#F5EFE7]">
//       {/* Hero */}
//       <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//         {/* Animated Money Pattern */}
//         <div className="absolute inset-0 opacity-[0.02]">
//           <motion.div
//             className="w-full h-full"
//             style={{
//               backgroundImage:
//                 "radial-gradient(circle at 2px 2px, #050608 2px, transparent 0)",
//               backgroundSize: "60px 60px",
//             }}
//             animate={{
//               backgroundPosition: ["0px 0px", "60px 60px"],
//             }}
//             transition={{
//               duration: 40,
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
//             {/* Badge */}
//             <motion.div
//               className="inline-block mb-10"
//               animate={{ y: [0, -15, 0] }}
//               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//             >
//               <div className="px-8 py-4 border-2 border-[#050608] text-sm uppercase tracking-[0.3em] bg-white">
//                 {pricingData.hero.badge}
//               </div>
//             </motion.div>

//             {/* Title */}
//             <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.9] mb-12">
//               {pricingData.hero.title}
//             </h1>

//             {/* Subtitle */}
//             <p className="text-xl md:text-2xl lg:text-3xl opacity-70 max-w-4xl mx-auto leading-relaxed mb-12">
//               {pricingData.hero.subtitle}
//             </p>

//             {/* Guarantee Badge */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.8, delay: 1 }}
//               className="inline-flex items-center gap-3 px-6 py-3 border-2 border-[#050608] bg-white"
//             >
//               <Shield className="w-5 h-5" />
//               <span className="text-sm uppercase tracking-wider">
//                 {pricingData.hero.guarantee}
//               </span>
//             </motion.div>
//           </motion.div>
//         </motion.div>

//         {/* Floating Price Tags */}
//         <FloatingPriceTags />
//       </section>

//       {/* Pricing Cards */}
//       <section className="px-6 md:px-12 lg:px-20 py-32 md:py-40 bg-white">
//         <div className="max-w-[1600px] mx-auto">
//           {/* Section Header */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-center mb-20"
//           >
//             <motion.div
//               className="w-24 h-[3px] bg-[#050608] mb-12 mx-auto"
//               initial={{ width: 0 }}
//               whileInView={{ width: 96 }}
//               transition={{ duration: 1 }}
//               viewport={{ once: true }}
//             />
//             <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-8">
//               Выберите ваш пакет
//             </h2>
//             <p className="text-xl md:text-2xl lg:text-3xl opacity-70 max-w-3xl mx-auto">
//               Все пакеты включают полный цикл разработки
//             </p>
//           </motion.div>

//           {/* Pricing Grid */}
//           <div className="grid lg:grid-cols-3 gap-8 lg:gap-6 mb-24">
//             {pricingData.packages.map((pkg, index) => (
//               <PricingCard key={index} package={pkg} index={index} />
//             ))}
//           </div>

//           {/* Trust Signals */}
//           <TrustSignals />
//         </div>
//       </section>

//       {/* Comparison Table */}
//       <section className="px-6 md:px-12 lg:px-20 py-32 md:py-40 bg-[#F5EFE7]">
//         <div className="max-w-[1400px] mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-center mb-20"
//           >
//             <motion.div
//               className="w-24 h-[3px] bg-[#050608] mb-12 mx-auto"
//               initial={{ width: 0 }}
//               whileInView={{ width: 96 }}
//               transition={{ duration: 1 }}
//               viewport={{ once: true }}
//             />
//             <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-8">
//               {pricingData.comparison.title}
//             </h2>
//             <p className="text-xl md:text-2xl lg:text-3xl opacity-70 max-w-3xl mx-auto">
//               Детальное сравнение возможностей
//             </p>
//           </motion.div>

//           <ComparisonTable />
//         </div>
//       </section>

//       {/* Add-ons */}
//       <section className="px-6 md:px-12 lg:px-20 py-32 md:py-40 bg-white">
//         <div className="max-w-[1400px] mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-center mb-20"
//           >
//             <motion.div
//               className="w-24 h-[3px] bg-[#050608] mb-12 mx-auto"
//               initial={{ width: 0 }}
//               whileInView={{ width: 96 }}
//               transition={{ duration: 1 }}
//               viewport={{ once: true }}
//             />
//             <div className="flex items-center justify-center gap-4 mb-8">
//               <Plus className="w-10 h-10 md:w-12 md:h-12" />
//               <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
//                 {pricingData.addons.title}
//               </h2>
//             </div>
//             <p className="text-xl md:text-2xl lg:text-3xl opacity-70 max-w-3xl mx-auto">
//               {pricingData.addons.subtitle}
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {pricingData.addons.items.map((addon, index) => (
//               <AddOnCard key={index} addon={addon} index={index} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* FAQ */}
//       <section className="px-6 md:px-12 lg:px-20 py-32 md:py-40 bg-[#F5EFE7]">
//         <div className="max-w-[900px] mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-center mb-20"
//           >
//             <motion.div
//               className="w-24 h-[3px] bg-[#050608] mb-12 mx-auto"
//               initial={{ width: 0 }}
//               whileInView={{ width: 96 }}
//               transition={{ duration: 1 }}
//               viewport={{ once: true }}
//             />
//             <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-8">
//               {pricingData.faq.title}
//             </h2>
//             <p className="text-xl md:text-2xl opacity-70">
//               {pricingData.faq.subtitle}
//             </p>
//           </motion.div>

//           <div className="space-y-4">
//             {pricingData.faq.items.map((item, index) => (
//               <FAQItem key={index} item={item} index={index} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Final CTA */}
//       <section className="px-6 md:px-12 lg:px-20 py-40 md:py-48 lg:py-56 bg-[#050608] text-[#F5EFE7] relative overflow-hidden">
//         <div className="max-w-[1400px] mx-auto text-center relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 60 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//             viewport={{ once: true }}
//           >
//             {/* Icons */}
//             <div className="flex items-center justify-center gap-8 mb-12">
//               <motion.div
//                 animate={{
//                   y: [0, -20, 0],
//                   rotate: [0, 15, 0],
//                 }}
//                 transition={{
//                   duration: 4,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//               >
//                 <Sparkles className="w-16 h-16 md:w-20 md:h-20" />
//               </motion.div>
//               <motion.div
//                 animate={{
//                   y: [0, -15, 0],
//                   scale: [1, 1.2, 1],
//                 }}
//                 transition={{
//                   duration: 3,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                   delay: 0.5,
//                 }}
//               >
//                 <Star className="w-16 h-16 md:w-20 md:h-20" />
//               </motion.div>
//             </div>

//             <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl mb-12 leading-[0.95]">
//               {pricingData.cta.title}
//             </h2>

//             <p className="text-xl md:text-2xl lg:text-3xl opacity-70 mb-16 max-w-3xl mx-auto leading-relaxed">
//               {pricingData.cta.subtitle}
//             </p>

//             <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
//               <motion.a
//                 href="#contact"
//                 className="inline-flex items-center gap-4 px-12 py-6 md:px-16 md:py-8 bg-[#F5EFE7] text-[#050608] text-xl md:text-2xl group relative overflow-hidden"
//                 whileHover={{
//                   scale: 1.05,
//                   boxShadow: "0 0 60px rgba(245,239,231,0.4)",
//                 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <motion.div
//                   className="absolute inset-0 bg-linear-to-r from-transparent via-white to-transparent opacity-30"
//                   animate={{ x: ["-200%", "200%"] }}
//                   transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
//                 />
//                 <span className="relative z-10">{pricingData.cta.button}</span>
//                 <ArrowRight className="w-6 h-6 md:w-8 md:h-8 relative z-10 transition-transform group-hover:translate-x-2" />
//               </motion.a>

//               <motion.a
//                 href="#pricing"
//                 className="inline-flex items-center gap-3 text-xl md:text-2xl opacity-70 hover:opacity-100 transition-opacity"
//                 whileHover={{ x: 10 }}
//               >
//                 <span>Сравнить пакеты</span>
//                 <ArrowRight className="w-6 h-6" />
//               </motion.a>
//             </div>
//           </motion.div>
//         </div>

//         {/* Background Effects */}
//         <div className="absolute inset-0 opacity-5">
//           <motion.div
//             className="w-full h-full"
//             style={{
//               backgroundImage:
//                 "repeating-linear-gradient(45deg, #F5EFE7 0px, #F5EFE7 2px, transparent 2px, transparent 40px)",
//             }}
//             animate={{
//               backgroundPosition: ["0px 0px", "40px 40px"],
//             }}
//             transition={{
//               duration: 30,
//               repeat: Infinity,
//               ease: "linear",
//             }}
//           />
//         </div>

//         <FloatingShapes />
//       </section>
//     </div>
//   );
// }

// // ============= COMPONENTS =============

// function PricingCard({
//   package: pkg,
//   index,
// }: {
//   package: (typeof pricingData.packages)[0];
//   index: number;
// }) {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 80 }}
//       animate={isInView ? { opacity: 1, y: 0 } : {}}
//       transition={{ duration: 0.8, delay: index * 0.15 }}
//       className={`relative ${pkg.highlighted ? "lg:-mt-8" : ""}`}
//     >
//       {/* Popular Badge */}
//       {pkg.highlighted && (
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6, delay: 0.8 }}
//           className="absolute -top-6 left-1/2 -translate-x-1/2 z-20"
//         >
//           <div className="px-6 py-2 bg-[#050608] text-[#F5EFE7] text-sm uppercase tracking-wider flex items-center gap-2">
//             <Star className="w-4 h-4" />
//             <span>{pkg.tagline}</span>
//           </div>
//         </motion.div>
//       )}

//       <motion.div
//         className={`border-4 border-[#050608] p-10 md:p-12 h-full flex flex-col relative overflow-hidden ${
//           pkg.highlighted ? "bg-[#050608] text-[#F5EFE7]" : "bg-[#F5EFE7]"
//         }`}
//         whileHover={{
//           boxShadow: pkg.highlighted
//             ? "20px 20px 0px 0px rgba(5,6,8,0.8)"
//             : "20px 20px 0px 0px rgba(5,6,8,1)",
//           x: -8,
//           y: -8,
//         }}
//         transition={{ duration: 0.3 }}
//       >
//         {/* Icon */}
//         <motion.div
//           className="text-6xl md:text-7xl mb-6"
//           animate={{ rotate: [0, 10, -10, 0] }}
//           transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
//         >
//           {pkg.icon}
//         </motion.div>

//         {/* Header */}
//         <div className="mb-8">
//           <h3 className="text-3xl md:text-4xl lg:text-5xl mb-2">{pkg.name}</h3>
//           {!pkg.highlighted && (
//             <p className="text-base opacity-60 uppercase tracking-wider">
//               {pkg.tagline}
//             </p>
//           )}
//         </div>

//         {/* Price */}
//         <div className="mb-8">
//           <div className="flex items-baseline gap-2 mb-2">
//             <span className="text-5xl md:text-6xl">{pkg.price}</span>
//           </div>
//           <p className="text-sm opacity-60 uppercase tracking-wider">
//             {pkg.period}
//           </p>
//         </div>

//         {/* Description */}
//         <p
//           className={`text-lg leading-relaxed mb-10 ${
//             pkg.highlighted ? "opacity-80" : "opacity-70"
//           }`}
//         >
//           {pkg.description}
//         </p>

//         {/* CTA Button */}
//         <motion.a
//           href="#contact"
//           className={`w-full px-8 py-4 text-center text-lg mb-10 flex items-center justify-center gap-2 group ${
//             pkg.highlighted
//               ? "bg-[#F5EFE7] text-[#050608]"
//               : "bg-[#050608] text-[#F5EFE7]"
//           }`}
//           whileHover={{ scale: 1.02 }}
//           whileTap={{ scale: 0.98 }}
//         >
//           <span>{pkg.cta}</span>
//           <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
//         </motion.a>

//         {/* Features */}
//         <div className="space-y-3 mb-8">
//           {pkg.features.map((feature, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, x: -20 }}
//               animate={isInView ? { opacity: 1, x: 0 } : {}}
//               transition={{ duration: 0.5, delay: 0.3 + i * 0.05 }}
//               className="flex items-start gap-3"
//             >
//               <Check
//                 className={`w-5 h-5 shrink-0 mt-0.5 ${
//                   pkg.highlighted ? "opacity-80" : "opacity-50"
//                 }`}
//               />
//               <span
//                 className={`text-base ${
//                   pkg.highlighted ? "opacity-90" : "opacity-70"
//                 }`}
//               >
//                 {feature}
//               </span>
//             </motion.div>
//           ))}
//         </div>

//         {/* Ideal For */}
//         <div
//           className={`mt-auto pt-8 border-t-2 ${
//             pkg.highlighted ? "border-[#F5EFE7]" : "border-[#050608]"
//           } border-opacity-20`}
//         >
//           <p className="text-sm uppercase tracking-wider opacity-50 mb-2">
//             Идеально для:
//           </p>
//           <p
//             className={`text-base ${
//               pkg.highlighted ? "opacity-90" : "opacity-70"
//             }`}
//           >
//             {pkg.ideal}
//           </p>
//         </div>

//         {/* Background Pattern */}
//         {pkg.highlighted && (
//           <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
//             <div
//               className="w-full h-full"
//               style={{
//                 backgroundImage:
//                   "repeating-linear-gradient(45deg, #F5EFE7 0px, #F5EFE7 1px, transparent 1px, transparent 30px)",
//               }}
//             />
//           </div>
//         )}
//       </motion.div>
//     </motion.div>
//   );
// }

// function ComparisonTable() {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//       viewport={{ once: true }}
//       className="overflow-x-auto"
//     >
//       <table className="w-full border-2 border-[#050608] bg-white">
//         <thead>
//           <tr className="bg-[#050608] text-[#F5EFE7]">
//             <th className="p-6 text-left text-lg md:text-xl">Возможности</th>
//             <th className="p-6 text-center text-lg md:text-xl">Starter</th>
//             <th className="p-6 text-center text-lg md:text-xl">Growth</th>
//             <th className="p-6 text-center text-lg md:text-xl">Premium</th>
//           </tr>
//         </thead>
//         <tbody>
//           {pricingData.comparison.features.map((feature, index) => (
//             <motion.tr
//               key={index}
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.05 }}
//               viewport={{ once: true }}
//               className="border-t-2 border-[#050608] hover:bg-[#F5EFE7] transition-colors"
//             >
//               <td className="p-6 text-base md:text-lg">{feature.name}</td>
//               <td className="p-6 text-center">
//                 {renderFeatureValue(feature.starter)}
//               </td>
//               <td className="p-6 text-center">
//                 {renderFeatureValue(feature.growth)}
//               </td>
//               <td className="p-6 text-center">
//                 {renderFeatureValue(feature.premium)}
//               </td>
//             </motion.tr>
//           ))}
//         </tbody>
//       </table>
//     </motion.div>
//   );
// }

// function renderFeatureValue(value: boolean | string) {
//   if (typeof value === "boolean") {
//     return value ? (
//       <Check className="w-6 h-6 mx-auto" />
//     ) : (
//       <X className="w-6 h-6 mx-auto opacity-30" />
//     );
//   }
//   return <span className="text-sm md:text-base opacity-70">{value}</span>;
// }

// function AddOnCard({
//   addon,
//   index,
// }: {
//   addon: (typeof pricingData.addons.items)[0];
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
//         className="border-2 border-[#050608] p-8 md:p-10 bg-[#F5EFE7] h-full hover:bg-white transition-colors flex flex-col"
//         whileHover={{
//           boxShadow: "16px 16px 0px 0px rgba(5,6,8,1)",
//           x: -5,
//           y: -5,
//         }}
//       >
//         {/* Icon & Price */}
//         <div className="flex items-start justify-between mb-6">
//           <motion.div
//             className="text-5xl"
//             animate={{ rotate: [0, 15, -15, 0] }}
//             transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
//           >
//             {addon.icon}
//           </motion.div>
//           <div className="text-right">
//             <p className="text-2xl md:text-3xl">{addon.price}</p>
//           </div>
//         </div>

//         {/* Name */}
//         <h3 className="text-2xl md:text-3xl mb-4">{addon.name}</h3>

//         {/* Description */}
//         <p className="text-base md:text-lg opacity-70 leading-relaxed mb-6">
//           {addon.description}
//         </p>

//         {/* Features */}
//         <div className="space-y-2 mt-auto">
//           {addon.features.map((feature, i) => (
//             <div key={i} className="flex items-start gap-2">
//               <Check className="w-4 h-4 shrink-0 mt-1 opacity-50" />
//               <span className="text-sm opacity-70">{feature}</span>
//             </div>
//           ))}
//         </div>

//         {/* Add Button */}
//         <motion.button
//           className="w-full px-6 py-3 border-2 border-[#050608] mt-6 text-center hover:bg-[#050608] hover:text-[#F5EFE7] transition-all flex items-center justify-center gap-2"
//           whileHover={{ scale: 1.02 }}
//           whileTap={{ scale: 0.98 }}
//         >
//           <Plus className="w-5 h-5" />
//           <span>Добавить</span>
//         </motion.button>
//       </motion.div>
//     </motion.div>
//   );
// }

// function FAQItem({
//   item,
//   index,
// }: {
//   item: (typeof pricingData.faq.items)[0];
//   index: number;
// }) {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, delay: index * 0.05 }}
//       viewport={{ once: true }}
//       className="border-2 border-[#050608] bg-white overflow-hidden"
//     >
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="w-full p-6 md:p-8 flex items-center justify-between gap-4 text-left hover:bg-[#F5EFE7] transition-colors"
//       >
//         <span className="text-lg md:text-xl lg:text-2xl pr-4">
//           {item.question}
//         </span>
//         <motion.div
//           animate={{ rotate: isOpen ? 180 : 0 }}
//           transition={{ duration: 0.3 }}
//           className="shrink-0"
//         >
//           <ChevronDown className="w-6 h-6" />
//         </motion.div>
//       </button>

//       <motion.div
//         initial={false}
//         animate={{
//           height: isOpen ? "auto" : 0,
//           opacity: isOpen ? 1 : 0,
//         }}
//         transition={{ duration: 0.3 }}
//         className="overflow-hidden"
//       >
//         <div className="p-6 md:p-8 pt-0 border-t-2 border-[#050608] border-opacity-10">
//           <p className="text-base md:text-lg opacity-70 leading-relaxed">
//             {item.answer}
//           </p>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// }

// function TrustSignals() {
//   const signals = [
//     {
//       icon: <Shield className="w-8 h-8" />,
//       text: "30-Day Money Back Guarantee",
//     },
//     { icon: <Zap className="w-8 h-8" />, text: "Lightning-Fast Delivery" },
//     { icon: <Star className="w-8 h-8" />, text: "4.9/5 Client Satisfaction" },
//     { icon: <TrendingUp className="w-8 h-8" />, text: "Proven ROI Results" },
//   ];

//   return (
//     <div className="grid md:grid-cols-4 gap-6">
//       {signals.map((signal, index) => (
//         <motion.div
//           key={index}
//           initial={{ opacity: 0, scale: 0.8 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6, delay: index * 0.1 }}
//           viewport={{ once: true }}
//           className="flex flex-col items-center text-center p-6"
//         >
//           <motion.div
//             className="mb-4"
//             animate={{ y: [0, -5, 0] }}
//             transition={{
//               duration: 2,
//               repeat: Infinity,
//               ease: "easeInOut",
//               delay: index * 0.2,
//             }}
//           >
//             {signal.icon}
//           </motion.div>
//           <p className="text-sm opacity-70">{signal.text}</p>
//         </motion.div>
//       ))}
//     </div>
//   );
// }

// function FloatingPriceTags() {
//   return (
//     <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-5">
//       {[...Array(8)].map((_, i) => (
//         <motion.div
//           key={i}
//           className="absolute text-8xl"
//           style={{
//             left: `${10 + i * 12}%`,
//             top: `${20 + (i % 3) * 25}%`,
//           }}
//           animate={{
//             y: [0, -30, 0],
//             rotate: [0, 10, -10, 0],
//           }}
//           transition={{
//             duration: 8 + i * 2,
//             repeat: Infinity,
//             ease: "easeInOut",
//             delay: i * 0.5,
//           }}
//         >
//           ₪
//         </motion.div>
//       ))}
//     </div>
//   );
// }

// function FloatingShapes() {
//   return (
//     <>
//       <motion.div
//         className="absolute top-20 left-20 w-60 h-60 border-2 border-[#F5EFE7] opacity-5"
//         animate={{ rotate: 360 }}
//         transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
//       />
//       <motion.div
//         className="absolute bottom-20 right-20 w-80 h-80 border-2 border-[#F5EFE7] opacity-5"
//         animate={{ rotate: -360 }}
//         transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
//       />
//     </>
//   );
// }


import PricingPage from "@/src/components/pricing/PricingPage";

export default function Pricing() {
  return <PricingPage />;
}
