// "use client";

// import { motion } from "motion/react";
// import { ArrowRight, Check } from "lucide-react";
// import { pricingTiers } from "@/src/data/newServices";

// export default function PricingOverviewSection() {
//   return (
//     <section className="px-6 md:px-12 lg:px-20 py-24 md:py-32 bg-white">
//       <div className="max-w-[1400px] mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="mb-20"
//         >
//           <div className="w-16 h-0.5 bg-[#050608] mb-8" />
//           <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">
//             Pricing Overview
//           </h2>
//           <p className="text-xl md:text-2xl opacity-70 max-w-3xl">
//             Прозрачные цены без скрытых платежей. Выберите подходящий уровень
//             или закажите индивидуальное решение.
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-3 gap-8">
//           {pricingTiers.map((tier, index) => (
//             <motion.div
//               key={tier.name}
//               initial={{ opacity: 0, y: 60 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               className={`border-2 border-[#050608] p-8 md:p-10 relative ${
//                 tier.highlighted
//                   ? "bg-[#050608] text-[#F5EFE7]"
//                   : "bg-[#F5EFE7]"
//               }`}
//             >
//               {tier.highlighted && (
//                 <div className="absolute -top-4 left-8 bg-[#F5EFE7] text-[#050608] px-4 py-1 text-sm uppercase tracking-wider border-2 border-[#050608]">
//                   Popular
//                 </div>
//               )}

//               <h3 className="text-3xl md:text-4xl mb-2">{tier.name}</h3>
//               <p
//                 className={`text-lg mb-6 ${
//                   tier.highlighted ? "opacity-70" : "opacity-60"
//                 }`}
//               >
//                 {tier.description}
//               </p>

//               <div className="mb-8">
//                 <p className="text-3xl md:text-4xl">{tier.price}</p>
//               </div>

//               <ul className="space-y-3 mb-8">
//                 {tier.features.map((feature, i) => (
//                   <li key={i} className="flex items-start gap-3">
//                     <Check className="w-5 h-5 shrink-0 mt-1" />
//                     <span
//                       className={tier.highlighted ? "opacity-90" : "opacity-70"}
//                     >
//                       {feature}
//                     </span>
//                   </li>
//                 ))}
//               </ul>

//               <a
//                 href="#contact"
//                 className={`w-full px-6 py-4 border-2 transition-all inline-flex items-center justify-center gap-2 group ${
//                   tier.highlighted
//                     ? "border-[#F5EFE7] hover:bg-[#F5EFE7] hover:text-[#050608]"
//                     : "border-[#050608] hover:bg-[#050608] hover:text-[#F5EFE7]"
//                 }`}
//               >
//                 Начать Проект
//                 <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
//               </a>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
