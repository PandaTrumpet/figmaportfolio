// "use client";

// import { motion } from "motion/react";
// import { ContactForm } from "./ContactForm";
// import { ContactInfoPanel } from "./ContactInfoPanel";
// import type { ContactFormState } from "./ContactPage";

// export function ContactMain({
//   data,
//   formData,
//   isSubmitted,
//   isSubmitting,
//   onSubmit,
//   onChange,
// }: {
//   data: any;
//   formData: ContactFormState;
//   isSubmitted: boolean;
//   isSubmitting: boolean;
//   onSubmit: (e: React.FormEvent) => void;
//   onChange: (
//     e: React.ChangeEvent<
//       HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
//     >
//   ) => void;
// }) {
//   return (
//     <section className="px-6 md:px-12 lg:px-20 py-20 md:py-32 bg-white">
//       <div className="max-w-[1400px] mx-auto">
//         <div className="grid lg:grid-cols-[1.5fr,1fr] gap-12 lg:gap-20">
//           <motion.div
//             initial={{ opacity: 0, y: 60 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <ContactForm
//               form={data.form}
//               formData={formData}
//               isSubmitted={isSubmitted}
//               isSubmitting={isSubmitting}
//               onSubmit={onSubmit}
//               onChange={onChange}
//             />
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 60 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             viewport={{ once: true }}
//             className="space-y-8"
//           >
//             <ContactInfoPanel contacts={data.contacts} office={data.office} />
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import * as React from "react";
import { motion, useReducedMotion } from "motion/react";
import { ContactForm } from "./ContactForm";
import { ContactInfoPanel } from "./ContactInfoPanel";
import type { ContactFormState } from "./ContactPage";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function ContactMain({
  data,
  formData,
  isSubmitted,
  isSubmitting,
  onSubmit,
  onChange,
}: {
  data: any;
  formData: ContactFormState;
  isSubmitted: boolean;
  isSubmitting: boolean;
  onSubmit: (e: React.FormEvent) => void;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => void;
}) {
  const reduce = useReducedMotion();

  return (
    <section className="relative px-6 md:px-12 lg:px-20 py-20 md:py-32 bg-[#050816] overflow-hidden">
      {/* background spots */}
      <div className="pointer-events-none absolute inset-0 opacity-65">
        <div className="absolute -top-40 -left-32 h-80 w-80 bg-[radial-gradient(circle_at_center,_rgba(58,123,255,0.55),_transparent_70%)] blur-3xl" />
        <div className="absolute -bottom-44 -right-12 h-96 w-96 bg-[radial-gradient(circle_at_center,_rgba(76,194,255,0.55),_transparent_70%)] blur-3xl" />
      </div>

      {/* subtle grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 84px), repeating-linear-gradient(90deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 84px)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-[1.5fr,1fr] gap-12 lg:gap-20 items-start">
          {/* LEFT: FORM WRAPPER */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduce ? 0 : 0.8,
              ease: EASE,
            }}
            viewport={{ once: true, margin: "-120px" }}
            className="relative"
          >
            {/* deep glow under form */}
            <div className="pointer-events-none absolute -inset-[14px] rounded-[34px] bg-[radial-gradient(circle_at_top,_rgba(58,123,255,0.55),_transparent_70%)] blur-2xl opacity-40" />

            {/* glass shell */}
            <div className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/8 via-white/5 to-transparent p-6 md:p-8 shadow-[0_26px_80px_rgba(0,0,0,0.85)] backdrop-blur-xl overflow-hidden">
              {/* inner gradient */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-[#3A7BFF22] via-[#4CC2FF14] to-[#9B5DFF14] opacity-70" />

              {/* sheen */}
              <motion.div
                className="pointer-events-none absolute -inset-10 bg-[linear-gradient(115deg,_transparent_0%,_rgba(255,255,255,0.18)_30%,_transparent_60%)] mix-blend-screen"
                initial={{ x: "-140%" }}
                whileHover={{ x: "140%" }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
              />

              {/* content */}
              <div className="relative z-10">
                <ContactForm
                  form={data.form}
                  formData={formData}
                  isSubmitted={isSubmitted}
                  isSubmitting={isSubmitting}
                  onSubmit={onSubmit}
                  onChange={onChange}
                />
              </div>

              {/* contour */}
              <div
                className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(58,123,255,0.7), rgba(76,194,255,0.7), rgba(155,93,255,0.6))",
                  WebkitMask:
                    "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                  padding: "1px",
                }}
              />
            </div>
          </motion.div>

          {/* RIGHT: INFO PANEL */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduce ? 0 : 0.8,
              delay: reduce ? 0 : 0.12,
              ease: EASE,
            }}
            viewport={{ once: true, margin: "-120px" }}
            className="space-y-8"
          >
            <ContactInfoPanel contacts={data.contacts} office={data.office} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
