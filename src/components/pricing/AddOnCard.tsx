// "use client";

// import { motion } from "motion/react";
// import { Check, Plus } from "lucide-react";
// import { pricingData } from "@/src/data/pricingData";

// export function AddOnCard({
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

//         <h3 className="text-2xl md:text-3xl mb-4">{addon.name}</h3>

//         <p className="text-base md:text-lg opacity-70 leading-relaxed mb-6">
//           {addon.description}
//         </p>

//         <div className="space-y-2 mt-auto">
//           {addon.features.map((feature, i) => (
//             <div key={i} className="flex items-start gap-2">
//               <Check className="w-4 h-4 shrink-0 mt-1 opacity-50" />
//               <span className="text-sm opacity-70">{feature}</span>
//             </div>
//           ))}
//         </div>

//         <motion.button
//           type="button"
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


"use client";

import { motion } from "motion/react";
import { Check, Plus } from "lucide-react";
import { pricingData } from "@/src/data/pricingData";
import { IconBadge } from "./IconBadge";

export function AddOnCard({
  addon,
  index,
}: {
  addon: (typeof pricingData.addons.items)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <motion.div
        className="border-2 border-[#050608] p-8 md:p-10 bg-[#F5EFE7] h-full hover:bg-white transition-colors flex flex-col"
        whileHover={{
          boxShadow: "16px 16px 0px 0px rgba(5,6,8,1)",
          x: -5,
          y: -5,
        }}
      >
        <div className="flex items-start justify-between mb-6">
          <motion.div
            className="text-5xl"
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
          >
            <IconBadge icon={addon.icon} />
          </motion.div>

          <div className="text-right">
            <p className="text-2xl md:text-3xl">{addon.price}</p>
          </div>
        </div>

        <h3 className="text-2xl md:text-3xl mb-4">{addon.name}</h3>
        <p className="text-base md:text-lg opacity-70 leading-relaxed mb-6">
          {addon.description}
        </p>

        <div className="space-y-2 mt-auto">
          {addon.features.map((feature, i) => (
            <div key={i} className="flex items-start gap-2">
              <Check className="w-4 h-4 shrink-0 mt-1 opacity-50" />
              <span className="text-sm opacity-70">{feature}</span>
            </div>
          ))}
        </div>

        <motion.button
          type="button"
          className="w-full px-6 py-3 border-2 border-[#050608] mt-6 text-center hover:bg-[#050608] hover:text-[#F5EFE7] transition-all flex items-center justify-center gap-2"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Plus className="w-5 h-5" />
          <span>Добавить</span>
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
