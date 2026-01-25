// "use client";

// import { useRef } from "react";
// import { motion, useInView } from "motion/react";

// type ValueItem = {
//   icon: string;
//   title: string;
//   description: string;
// };

// export function ValueCard({
//   value,
//   index,
// }: {
//   value: ValueItem;
//   index: number;
// }) {
//   const ref = useRef<HTMLDivElement | null>(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 60 }}
//       animate={isInView ? { opacity: 1, y: 0 } : {}}
//       transition={{ duration: 0.8, delay: index * 0.1 }}
//       className="group"
//     >
//       <motion.div
//         className="border-2 border-[#050608] p-10 md:p-12 bg-[#F5EFE7] hover:bg-white transition-all h-full"
//         whileHover={{
//           boxShadow: "16px 16px 0px 0px rgba(5,6,8,1)",
//           x: -5,
//           y: -5,
//         }}
//       >
//         <motion.div
//           className="text-6xl md:text-7xl mb-6"
//           animate={{ rotate: [0, 10, -10, 0] }}
//           transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
//         >
//           {value.icon}
//         </motion.div>

//         <h3 className="text-2xl md:text-3xl lg:text-4xl mb-6">{value.title}</h3>
//         <p className="text-lg md:text-xl opacity-70 leading-relaxed">
//           {value.description}
//         </p>
//       </motion.div>
//     </motion.div>
//   );
// }

"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

type ValueItem = {
  icon: string; // эмодзи или любой текстовый символ
  title: string;
  description: string;
};

export function ValueCard({
  value,
  index,
}: {
  value: ValueItem;
  index: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group"
    >
      <motion.div
        className="border-2 border-[#050608] p-10 md:p-12 bg-[#F5EFE7] hover:bg-white transition-all h-full"
        whileHover={{
          boxShadow: "16px 16px 0px 0px rgba(5,6,8,1)",
          x: -5,
          y: -5,
        }}
      >
        {/* Icon (string) */}
        <motion.div
          className="text-6xl md:text-7xl mb-6 leading-none select-none"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
        >
          <span aria-hidden="true">{value.icon}</span>
        </motion.div>

        <h3 className="text-2xl md:text-3xl lg:text-4xl mb-6">{value.title}</h3>

        <p className="text-lg md:text-xl opacity-70 leading-relaxed">
          {value.description}
        </p>
      </motion.div>
    </motion.div>
  );
}
