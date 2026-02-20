

// "use client";

// import * as React from "react";
// import { useEffect, useState } from "react";
// import { motion, useReducedMotion } from "motion/react";
// import { contactData } from "@/src/data/contactData";
// import { ContactForm } from "./ContactForm";
// import { ContactInfoPanel } from "./ContactInfoPanel";
// import type { ContactFormState } from "./ContactPage";
// import { PageContainer } from "../Layout/PageContainer";
// type ContactPageData = typeof contactData;
// const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

// export function ContactMain({
//   data,
//   formData,
//   isSubmitted,
//   isSubmitting,
//   onSubmit,
//   onChange,
//   onMultiChange,
// }: {
//   data: ContactPageData;
//   formData: ContactFormState;
//   isSubmitted: boolean;
//   isSubmitting: boolean;
//   onSubmit: (e: React.FormEvent) => void;
//   onChange: (
//     e: React.ChangeEvent<
//       HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
//     >,
//   ) => void;
//   onMultiChange: (name: "additionalServices", values: string[]) => void; // ✅ NEW
// }) {
//   const reduce = useReducedMotion();
//   const [forceReveal, setForceReveal] = useState(false);

//   useEffect(() => {
//     if (window.location.hash === "#contact-form") {
//       queueMicrotask(() => {
//         setForceReveal(true);
//         requestAnimationFrame(() => {
//           document
//             .getElementById("contact-form")
//             ?.scrollIntoView({ behavior: "smooth", block: "start" });
//         });
//       });
//     }
//   }, []);

//   return (
//     <section
//       className="relative  pt-10 pb-10
//         md:pt-14 md:pb-14
//         lg:pt-16 lg:pb-16 bg-transparent overflow-visible"
//       id="contact-form"
//     >
//       {/* ultra-subtle local texture (masked) */}
//       <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
//         <div
//           className="h-full w-full"
//           style={{
//             backgroundImage:
//               "repeating-linear-gradient(0deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 92px), repeating-linear-gradient(90deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 92px)",
//             maskImage:
//               "radial-gradient(circle at 50% 40%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 40%, rgba(0,0,0,0) 78%)",
//             WebkitMaskImage:
//               "radial-gradient(circle at 50% 40%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 40%, rgba(0,0,0,0) 78%)",
//           }}
//         />
//       </div>

//       {/* tiny local accents */}
//       <div className="pointer-events-none absolute inset-0 opacity-35">
//         <div className="absolute -top-24 left-[10%] h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,_rgba(58,123,255,0.14),_transparent_70%)] blur-3xl" />
//         <div className="absolute -bottom-24 right-[8%] h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,_rgba(76,194,255,0.12),_transparent_70%)] blur-3xl" />
//       </div>

//       <PageContainer className="relative z-10">
//         <div className="grid lg:grid-cols-[1.5fr,1fr] gap-12 lg:gap-20 items-start">
//           {/* LEFT: FORM */}
//           <motion.div
//             initial={{ opacity: 0, y: 60 }}
//             animate={forceReveal ? { opacity: 1, y: 0 } : undefined}
//             whileInView={forceReveal ? undefined : { opacity: 1, y: 0 }}
//             transition={{
//               duration: reduce ? 0 : 0.8,
//               ease: EASE,
//             }}
//             viewport={{ once: true, margin: "-120px" }}
//             className="relative"
//           >
//             {/* glow */}
//             <div className="pointer-events-none absolute -inset-[14px] rounded-[34px] bg-[radial-gradient(circle_at_top,_rgba(58,123,255,0.55),_transparent_70%)] blur-2xl opacity-35" />

//             {/* glass shell */}
//             <div className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/8 via-white/5 to-transparent p-6 md:p-8 shadow-[0_26px_80px_rgba(0,0,0,0.85)] backdrop-blur-xl overflow-hidden">
//               {/* inner gradient */}
//               <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-[#3A7BFF22] via-[#4CC2FF14] to-[#9B5DFF14] opacity-70" />

//               {/* sheen */}
//               <motion.div
//                 className="pointer-events-none absolute -inset-10 bg-[linear-gradient(115deg,_transparent_0%,_rgba(255,255,255,0.18)_30%,_transparent_60%)] mix-blend-screen"
//                 initial={{ x: "-140%" }}
//                 whileHover={{ x: "140%" }}
//                 transition={{ duration: 0.9, ease: "easeInOut" }}
//               />

//               <div className="relative z-10">
//                 <ContactForm
//                   form={data.form}
//                   formData={formData}
//                   isSubmitted={isSubmitted}
//                   isSubmitting={isSubmitting}
//                   onSubmit={onSubmit}
//                   onChange={onChange}
//                   onMultiChange={onMultiChange}
//                 />
//               </div>

//               {/* contour */}
//               <div
//                 className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent"
//                 style={{
//                   background:
//                     "linear-gradient(135deg, rgba(58,123,255,0.7), rgba(76,194,255,0.7), rgba(155,93,255,0.6))",
//                   WebkitMask:
//                     "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
//                   WebkitMaskComposite: "xor",
//                   maskComposite: "exclude",
//                   padding: "1px",
//                   opacity: 0.95,
//                 }}
//               />
//             </div>
//           </motion.div>

//           {/* RIGHT: INFO */}
//           <motion.div
//             initial={{ opacity: 0, y: 60 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{
//               duration: reduce ? 0 : 0.8,
//               delay: reduce ? 0 : 0.12,
//               ease: EASE,
//             }}
//             viewport={{ once: true, margin: "-120px" }}
//             className="space-y-8"
//           >
//             <ContactInfoPanel contacts={data.contacts} office={data.office} />
//           </motion.div>
//         </div>
//       </PageContainer>
//     </section>
//   );
// }


"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { contactData } from "@/src/data/contactData";
import { ContactForm } from "./ContactForm";
import { ContactInfoPanel } from "./ContactInfoPanel";
import type { ContactFormState } from "./ContactPage";
import { PageContainer } from "../Layout/PageContainer";

type ContactPageData = typeof contactData;
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function ContactMain({
  data,
  formData,
  isSubmitted,
  isSubmitting,
  onSubmit,
  onChange,
  onMultiChange,
}: {
  data: ContactPageData;
  formData: ContactFormState;
  isSubmitted: boolean;
  isSubmitting: boolean;
  onSubmit: (e: React.FormEvent) => void;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => void;
  onMultiChange: (name: "additionalServices", values: string[]) => void;
}) {
  const reduce = useReducedMotion();
  const [forceReveal, setForceReveal] = useState(false);

    useEffect(() => {
      if (window.location.hash === "#contact-form") {
        queueMicrotask(() => {
          setForceReveal(true);
          requestAnimationFrame(() => {
            document
              .getElementById("contact-form")
              ?.scrollIntoView({ behavior: "smooth", block: "start" });
          });
        });
      }
    }, []);

  return (
    <section
      className="relative pt-10 pb-10 md:pt-14 md:pb-14 lg:pt-16 lg:pb-16 bg-transparent overflow-visible"
      id="contact-form"
    >
      {/* ✅ LIGHT MODE: texture/masks can be expensive.
          - hide on mobile/tablet, show on lg+ only
          - reduce opacity
      */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035] hidden lg:block">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 110px), repeating-linear-gradient(90deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 110px)",
            maskImage:
              "radial-gradient(circle at 50% 40%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 38%, rgba(0,0,0,0) 72%)",
            WebkitMaskImage:
              "radial-gradient(circle at 50% 40%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 38%, rgba(0,0,0,0) 72%)",
          }}
        />
      </div>

      {/* ✅ LIGHTER local accents:
          - smaller blobs on mobile/tablet
          - lower blur on smaller screens
      */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute -top-20 left-[10%] h-52 w-52 md:h-60 md:w-60 rounded-full blur-2xl lg:blur-3xl bg-[radial-gradient(circle_at_center,_rgba(58,123,255,0.12),_transparent_70%)]" />
        <div className="absolute -bottom-20 right-[8%] h-56 w-56 md:h-64 md:w-64 rounded-full blur-2xl lg:blur-3xl bg-[radial-gradient(circle_at_center,_rgba(76,194,255,0.10),_transparent_70%)]" />
      </div>

      <PageContainer className="relative z-10">
        <div className="grid lg:grid-cols-[1.5fr,1fr] gap-12 lg:gap-20 items-start">
          {/* LEFT: FORM */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={forceReveal ? { opacity: 1, y: 0 } : undefined}
            whileInView={forceReveal ? undefined : { opacity: 1, y: 0 }}
            transition={{
              duration: reduce ? 0 : 0.8,
              ease: EASE,
            }}
            viewport={{ once: true, margin: "-120px" }}
            className="relative"
          >
            {/* ✅ smaller glow (lighter) */}
            <div className="pointer-events-none absolute -inset-[10px] rounded-[30px] bg-[radial-gradient(circle_at_top,_rgba(58,123,255,0.45),_transparent_72%)] blur-xl lg:blur-2xl opacity-30" />

            {/* glass shell */}
            <div
              className="
                relative rounded-3xl border border-white/10
                bg-gradient-to-b from-white/8 via-white/5 to-transparent
                p-6 md:p-8
                shadow-[0_24px_70px_rgba(0,0,0,0.82)]
                overflow-hidden
                backdrop-blur-md lg:backdrop-blur-xl
              "
            >
              {/* inner gradient */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-[#3A7BFF1f] via-[#4CC2FF12] to-[#9B5DFF12] opacity-65" />

              {/* ✅ sheen: smaller area + will-change for smoother transform */}
              <motion.div
                className="pointer-events-none absolute -inset-6 will-change-transform bg-[linear-gradient(115deg,_transparent_0%,_rgba(255,255,255,0.16)_30%,_transparent_60%)] mix-blend-screen"
                initial={{ x: "-140%" }}
                whileHover={reduce ? undefined : { x: "140%" }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
              />

              <div className="relative z-10">
                <ContactForm
                  form={data.form}
                  formData={formData}
                  isSubmitted={isSubmitted}
                  isSubmitting={isSubmitting}
                  onSubmit={onSubmit}
                  onChange={onChange}
                  onMultiChange={onMultiChange}
                />
              </div>

              {/* contour (kept, but a bit softer on small screens) */}
              <div
                className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(58,123,255,0.65), rgba(76,194,255,0.65), rgba(155,93,255,0.55))",
                  WebkitMask:
                    "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                  padding: "1px",
                  opacity: 0.9,
                }}
              />
            </div>
          </motion.div>

          {/* RIGHT: INFO */}
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
      </PageContainer>
    </section>
  );
}
