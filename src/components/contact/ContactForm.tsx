// "use client";

// import * as React from "react";
// import { motion, useReducedMotion } from "motion/react";
// import { Check, Send } from "lucide-react";
// import { FormField } from "./FormField";
// import type { ContactFormState } from "./ContactPage";

// const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

// export function ContactForm({
//   form,
//   formData,
//   isSubmitted,
//   isSubmitting,
//   onSubmit,
//   onChange,
// }: {
//   form: any;
//   formData: ContactFormState;
//   isSubmitted: boolean;
//   isSubmitting: boolean;
//   onSubmit: (e: React.FormEvent) => void;
//   onChange: (
//     e: React.ChangeEvent<
//       HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
//     >,
//   ) => void;
// }) {
//   const reduce = useReducedMotion();

//   return (
//     <>
//       {/* Header */}
//       <div className="mb-10 md:mb-12">
//         <div className="mb-5 h-[2px] w-16 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]" />
//         <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[#F2F4FA] mb-4">
//           {form.title}
//         </h2>
//         <p className="text-base md:text-lg lg:text-xl text-[#C7CEDF] leading-relaxed max-w-2xl">
//           {form.subtitle}
//         </p>
//       </div>

//       {/* Form Shell (premium glass) */}
//       <motion.div
//         className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/8 via-white/5 to-transparent shadow-[0_26px_80px_rgba(0,0,0,0.85)] backdrop-blur-xl"
//         whileHover={reduce ? undefined : { y: -10 }}
//         transition={{ duration: 0.28, ease: "easeOut" }}
//       >
//         {/* deep glow */}
//         <motion.div
//           className="pointer-events-none absolute -inset-[14px] rounded-[34px] bg-[radial-gradient(circle_at_top,_rgba(58,123,255,0.55),_transparent_70%)] blur-2xl"
//           initial={{ opacity: 0.35 }}
//           whileHover={{ opacity: 0.9, scale: 1.06 }}
//           transition={{ duration: 0.35, ease: "easeOut" }}
//         />

//         {/* inner gradient */}
//         <motion.div
//           className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#3A7BFF22] via-[#4CC2FF14] to-[#9B5DFF14]"
//           initial={{ opacity: 0.55 }}
//           whileHover={{ opacity: 0.95 }}
//           transition={{ duration: 0.28 }}
//         />

//         {/* subtle grid */}
//         <div className="pointer-events-none absolute inset-0 opacity-[0.10]">
//           <div
//             className="h-full w-full"
//             style={{
//               backgroundImage:
//                 "repeating-linear-gradient(0deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 84px), repeating-linear-gradient(90deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 84px)",
//             }}
//           />
//         </div>

//         {/* sheen */}
//         <motion.div
//           className="pointer-events-none absolute -inset-10 bg-[linear-gradient(115deg,_transparent_0%,_rgba(255,255,255,0.18)_30%,_transparent_60%)] mix-blend-screen"
//           initial={{ x: "-140%" }}
//           whileHover={{ x: "140%" }}
//           transition={{ duration: 0.9, ease: "easeInOut" }}
//         />

//         <form onSubmit={onSubmit} className="relative z-10 p-6 md:p-10 lg:p-12">
//           {isSubmitted ? (
//             <motion.div
//               initial={{ opacity: 0, y: 10, scale: 0.98 }}
//               animate={{ opacity: 1, y: 0, scale: 1 }}
//               transition={{ duration: reduce ? 0 : 0.5, ease: EASE }}
//               className="text-center py-14 md:py-16"
//               aria-live="polite"
//             >
//               <motion.div
//                 initial={{ scale: 0.8, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 transition={{
//                   duration: reduce ? 0 : 0.5,
//                   delay: reduce ? 0 : 0.1,
//                   ease: EASE,
//                 }}
//                 className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/12 bg-gradient-to-b from-white/12 to-white/6 shadow-[0_0_60px_rgba(76,194,255,0.55)] backdrop-blur-xl"
//               >
//                 <Check className="h-8 w-8 text-[#EAF2FF]" />
//               </motion.div>

//               <p className="text-xl md:text-2xl font-medium text-[#F2F4FA] mb-3">
//                 {form.successMessage}
//               </p>
//               <p className="text-sm md:text-base text-[#C7CEDF]">
//                 Проверьте вашу почту — я отвечу на ваше сообщение.
//               </p>
//             </motion.div>
//           ) : (
//             <div className="space-y-6">
//               <div className="grid md:grid-cols-2 gap-6">
//                 <FormField
//                   label={form.fields.name.label}
//                   name="name"
//                   type={form.fields.name.type}
//                   placeholder={form.fields.name.placeholder}
//                   value={formData.name}
//                   onChange={onChange}
//                   required
//                 />
//                 <FormField
//                   label={form.fields.email.label}
//                   name="email"
//                   type={form.fields.email.type}
//                   placeholder={form.fields.email.placeholder}
//                   value={formData.email}
//                   onChange={onChange}
//                   required
//                 />
//               </div>

//               <div className="grid md:grid-cols-2 gap-6">
//                 <FormField
//                   label={form.fields.phone.label}
//                   name="phone"
//                   type={form.fields.phone.type}
//                   placeholder={form.fields.phone.placeholder}
//                   value={formData.phone}
//                   onChange={onChange}
//                 />
//                 <FormField
//                   label={form.fields.company.label}
//                   name="company"
//                   type={form.fields.company.type}
//                   placeholder={form.fields.company.placeholder}
//                   value={formData.company}
//                   onChange={onChange}
//                 />
//               </div>

//               <FormSelect
//                 label={form.fields.budget.label}
//                 name="budget"
//                 value={formData.budget}
//                 onChange={onChange}
//                 placeholder={form.fields.budget.placeholder}
//                 options={form.fields.budget.options}
//               />

//               <FormTextarea
//                 label={form.fields.message.label}
//                 name="message"
//                 value={formData.message}
//                 onChange={onChange}
//                 placeholder={form.fields.message.placeholder}
//                 rows={6}
//                 required
//               />

//               <motion.button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="relative w-full overflow-hidden rounded-2xl px-7 py-4 md:py-4.5 font-medium text-[#050816] shadow-[0_0_44px_rgba(76,194,255,0.55)] disabled:opacity-60 disabled:cursor-not-allowed"
//                 whileHover={
//                   reduce ? undefined : { scale: isSubmitting ? 1 : 1.02 }
//                 }
//                 whileTap={
//                   reduce ? undefined : { scale: isSubmitting ? 1 : 0.98 }
//                 }
//                 transition={{ duration: 0.2, ease: "easeOut" }}
//               >
//                 <span className="absolute inset-0 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]" />
//                 <span className="absolute inset-0 bg-[linear-gradient(120deg,_transparent_0%,_white_20%,_transparent_40%)] opacity-0 group-hover:opacity-50" />

//                 <span className="relative z-10 inline-flex items-center justify-center gap-3 text-base md:text-lg">
//                   {isSubmitting ? (
//                     <>
//                       <motion.span
//                         aria-hidden="true"
//                         animate={reduce ? undefined : { rotate: 360 }}
//                         transition={{
//                           duration: 1,
//                           repeat: Infinity,
//                           ease: "linear",
//                         }}
//                         className="h-5 w-5 rounded-full border-2 border-[#050816] border-t-transparent"
//                       />
//                       <span>Отправка…</span>
//                     </>
//                   ) : (
//                     <>
//                       <span>{form.button}</span>
//                       <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
//                     </>
//                   )}
//                 </span>
//               </motion.button>

//               <p className="text-xs md:text-sm text-[#AEB8CC] leading-relaxed">
//                 Обычно отвечаю быстро. Если удобнее — напишите сразу в WhatsApp
//                 (кнопка справа).
//               </p>
//             </div>
//           )}
//         </form>

//         {/* contour */}
//         <div
//           className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent"
//           style={{
//             background:
//               "linear-gradient(135deg, rgba(58,123,255,0.7), rgba(76,194,255,0.7), rgba(155,93,255,0.6))",
//             WebkitMask:
//               "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
//             WebkitMaskComposite: "xor",
//             maskComposite: "exclude",
//             padding: "1px",
//             opacity: 0.55,
//           }}
//         />
//       </motion.div>
//     </>
//   );
// }

// function FormSelect({
//   label,
//   name,
//   value,
//   onChange,
//   placeholder,
//   options,
// }: {
//   label: string;
//   name: string;
//   value: string;
//   onChange: (
//     e: React.ChangeEvent<
//       HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
//     >,
//   ) => void;
//   placeholder: string;
//   options: string[];
// }) {
//   return (
//     <div>
//       <label className="mb-3 block text-xs md:text-sm tracking-[0.18em] text-[#AEB8CC]">
//         {label}
//       </label>
//       <select
//         name={name}
//         value={value}
//         onChange={onChange}
//         className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-3.5 text-[#F2F4FA] outline-none transition-colors backdrop-blur-sm focus:border-[#4CC2FF66]"
//       >
//         <option value="" className="bg-[#050816]">
//           {placeholder}
//         </option>
//         {options.map((opt, i) => (
//           <option key={i} value={opt} className="bg-[#050816]">
//             {opt}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// }

// function FormTextarea({
//   label,
//   name,
//   value,
//   onChange,
//   placeholder,
//   rows,
//   required,
// }: {
//   label: string;
//   name: string;
//   value: string;
//   onChange: (
//     e: React.ChangeEvent<
//       HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
//     >,
//   ) => void;
//   placeholder: string;
//   rows: number;
//   required?: boolean;
// }) {
//   return (
//     <div>
//       <label className="mb-3 block text-xs md:text-sm tracking-[0.18em] text-[#AEB8CC]">
//         {label}
//       </label>
//       <textarea
//         name={name}
//         value={value}
//         onChange={onChange}
//         placeholder={placeholder}
//         rows={rows}
//         required={required}
//         className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-5 py-3.5 text-[#F2F4FA] placeholder-white/25 outline-none transition-colors backdrop-blur-sm focus:border-[#4CC2FF66]"
//       />
//     </div>
//   );
// }

"use client";

import * as React from "react";
import { motion, useReducedMotion } from "motion/react";
import { Check, Send } from "lucide-react";
import { FormField } from "./FormField";
import type { ContactFormState } from "./ContactPage";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function ContactForm({
  form,
  formData,
  isSubmitted,
  isSubmitting,
  onSubmit,
  onChange,
}: {
  form: any;
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
    <div className="relative">
      {/* Header (Tel-Aviv Night Waves) */}
      <div className="mb-10 md:mb-12">
        <motion.div
          className="mb-6 h-[2px] w-20 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]"
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: 80, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: reduce ? 0 : 0.8, ease: EASE }}
        />
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[#F2F4FA] mb-4">
          {form.title}
        </h2>
        <p className="text-base md:text-lg lg:text-xl text-[#C7CEDF] leading-relaxed max-w-2xl">
          {form.subtitle}
        </p>
      </div>

      {/* Shell */}
      <motion.div
        className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-[#060A13] via-[#050816] to-[#02030A] shadow-[0_26px_90px_rgba(0,0,0,0.9)] backdrop-blur-xl overflow-hidden"
        initial={false}
        whileHover={reduce ? undefined : { y: -10 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* deep glow under */}
        <motion.div
          className="pointer-events-none absolute -inset-[14px] rounded-[36px] bg-[radial-gradient(circle_at_top,_rgba(58,123,255,0.55),_transparent_70%)] blur-2xl -z-20"
          animate={{ opacity: 0.35 }}
          whileHover={{ opacity: 0.9, scale: 1.06 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        />

        {/* inner glow */}
        <motion.div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#3A7BFF22] via-[#4CC2FF16] to-[#9B5DFF16] -z-10"
          initial={{ opacity: 0.35 }}
          whileHover={{ opacity: 0.85 }}
          transition={{ duration: 0.28 }}
        />

        {/* subtle grid */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 84px), repeating-linear-gradient(90deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 84px)",
            }}
          />
        </div>

        {/* sheen */}
        <motion.div
          className="pointer-events-none absolute -inset-10 bg-[linear-gradient(115deg,_transparent_0%,_rgba(255,255,255,0.18)_30%,_transparent_60%)] mix-blend-screen -z-10"
          initial={{ x: "-140%" }}
          whileHover={{ x: "140%" }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
        />

        {/* border contour */}
        <div
          className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent z-10"
          style={{
            background:
              "linear-gradient(135deg, rgba(58,123,255,0.85), rgba(76,194,255,0.75), rgba(155,93,255,0.65))",
            WebkitMask:
              "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            padding: "1px",
            opacity: 0.55,
          }}
        />

        <form onSubmit={onSubmit} className="relative z-20 p-6 md:p-10 lg:p-12">
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: reduce ? 0 : 0.5, ease: EASE }}
              className="text-center py-14 md:py-16"
              aria-live="polite"
            >
              <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: reduce ? 0 : 0.55,
                  delay: reduce ? 0 : 0.1,
                  ease: EASE,
                }}
                className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/12 bg-[radial-gradient(circle_at_top,_rgba(76,194,255,0.35),_rgba(5,8,22,0.95))] shadow-[0_0_60px_rgba(76,194,255,0.55)]"
              >
                <Check className="h-8 w-8 text-[#EAF2FF]" />
              </motion.div>

              <p className="text-xl md:text-2xl font-medium text-[#F2F4FA] mb-3">
                {form.successMessage}
              </p>
              <p className="text-sm md:text-base text-[#C7CEDF]">
                Проверьте вашу почту — я отвечу на сообщение.
              </p>
            </motion.div>
          ) : (
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  label={form.fields.name.label}
                  name="name"
                  type={form.fields.name.type}
                  placeholder={form.fields.name.placeholder}
                  value={formData.name}
                  onChange={onChange}
                  required
                />
                <FormField
                  label={form.fields.email.label}
                  name="email"
                  type={form.fields.email.type}
                  placeholder={form.fields.email.placeholder}
                  value={formData.email}
                  onChange={onChange}
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  label={form.fields.phone.label}
                  name="phone"
                  type={form.fields.phone.type}
                  placeholder={form.fields.phone.placeholder}
                  value={formData.phone}
                  onChange={onChange}
                />
                <FormField
                  label={form.fields.company.label}
                  name="company"
                  type={form.fields.company.type}
                  placeholder={form.fields.company.placeholder}
                  value={formData.company}
                  onChange={onChange}
                />
              </div>

              <FormSelect
                label={form.fields.budget.label}
                name="budget"
                value={formData.budget}
                onChange={onChange}
                placeholder={form.fields.budget.placeholder}
                options={form.fields.budget.options}
              />

              <FormTextarea
                label={form.fields.message.label}
                name="message"
                value={formData.message}
                onChange={onChange}
                placeholder={form.fields.message.placeholder}
                rows={6}
                required
              />

              <TelAvivSubmitButton
                isSubmitting={isSubmitting}
                label={form.button}
                reduce={reduce}
              />
            </div>
          )}
        </form>
      </motion.div>

      {/* micro trust line */}
      {!isSubmitted && (
        <p className="mt-5 text-xs md:text-sm text-[#AEB8CC] leading-relaxed">
          Без навязчивых продаж. Сначала уточню задачу и предложу лучший формат
          (лендинг / сайт + CRM / automation).
        </p>
      )}
    </div>
  );
}

function TelAvivSubmitButton({
  isSubmitting,
  label,
  reduce,
}: {
  isSubmitting: boolean;
  label: string;
  reduce: boolean;
}) {
  return (
    // <motion.button
    //   type="submit"
    //   disabled={isSubmitting}
    //   className="group relative w-full overflow-hidden rounded-2xl px-7 py-4 md:py-4.5 font-medium text-[#050816] shadow-[0_0_44px_rgba(76,194,255,0.55)] disabled:opacity-60 disabled:cursor-not-allowed"
    //   whileHover={reduce ? undefined : { scale: isSubmitting ? 1 : 1.02 }}
    //   whileTap={reduce ? undefined : { scale: isSubmitting ? 1 : 0.98 }}
    //   transition={{ duration: 0.2, ease: "easeOut" }}
    // >
    //   <span className="absolute inset-0 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]" />
    //   <motion.span
    //     className="absolute inset-0 bg-[linear-gradient(120deg,_transparent_0%,_white_20%,_transparent_40%)] opacity-0"
    //     initial={{ x: "-100%" }}
    //     whileHover={reduce ? undefined : { x: "100%", opacity: 0.5 }}
    //     transition={{ duration: 0.7, ease: "easeInOut" }}
    //   />
    //   <span className="relative z-10 inline-flex items-center justify-center gap-3 text-base md:text-lg">
    //     {isSubmitting ? (
    //       <>
    //         <motion.span
    //           aria-hidden="true"
    //           animate={reduce ? undefined : { rotate: 360 }}
    //           transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    //           className="h-5 w-5 rounded-full border-2 border-[#050816] border-t-transparent"
    //         />
    //         <span>Отправка…</span>
    //       </>
    //     ) : (
    //       <>
    //         <span>{label}</span>
    //         <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
    //       </>
    //     )}
    //   </span>
    // </motion.button>

    <motion.button
      type="submit"
      disabled={isSubmitting}
      className=" cursor-pointer
    group relative w-full overflow-hidden rounded-2xl
    px-7 py-4 md:py-4.5
    font-medium text-[#050816]

    shadow-[0_0_40px_rgba(76,194,255,0.55)]
    hover:shadow-[0_0_65px_rgba(76,194,255,0.85)]
    transition-shadow

    disabled:opacity-60 disabled:cursor-not-allowed
  "
      whileHover={reduce ? undefined : { scale: isSubmitting ? 1 : 1.03 }}
      whileTap={reduce ? undefined : { scale: isSubmitting ? 1 : 0.97 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {/* Unified gradient palette */}
      <span className="absolute inset-0 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]" />

      {/* Unified hover highlight */}
      <span
        className="
      pointer-events-none absolute inset-0 rounded-2xl
      bg-white/10 opacity-0
      group-hover:opacity-100 transition-opacity
    "
        aria-hidden="true"
      />

      <span className="relative z-10 inline-flex items-center justify-center gap-3 text-base md:text-lg">
        {isSubmitting ? (
          <>
            <motion.span
              aria-hidden="true"
              animate={reduce ? undefined : { rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="h-5 w-5 rounded-full border-2 border-[#050816] border-t-transparent"
            />
            <span>Отправка…</span>
          </>
        ) : (
          <>
            <span>{label}</span>
            <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </>
        )}
      </span>
    </motion.button>
  );
}

function FormSelect({
  label,
  name,
  value,
  onChange,
  placeholder,
  options,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => void;
  placeholder: string;
  options: string[];
}) {
  return (
    <div>
      <label className="mb-3 block text-xs md:text-sm tracking-[0.18em] text-[#AEB8CC]">
        {label}
      </label>
      <div className="relative">
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="w-full appearance-none rounded-2xl border border-white/10 bg-white/5 px-5 py-3.5 pr-12 text-[#F2F4FA] outline-none transition-colors backdrop-blur-sm focus:border-[#4CC2FF66]"
        >
          <option value="" className="bg-[#050816]">
            {placeholder}
          </option>
          {options.map((opt, i) => (
            <option key={i} value={opt} className="bg-[#050816]">
              {opt}
            </option>
          ))}
        </select>

        {/* custom chevron */}
        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#C7CEDF] opacity-70">
          ▾
        </span>
      </div>
    </div>
  );
}

function FormTextarea({
  label,
  name,
  value,
  onChange,
  placeholder,
  rows,
  required,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => void;
  placeholder: string;
  rows: number;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-3 block text-xs md:text-sm tracking-[0.18em] text-[#AEB8CC]">
        {label}
      </label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        required={required}
        className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-5 py-3.5 text-[#F2F4FA] placeholder-white/25 outline-none transition-colors backdrop-blur-sm focus:border-[#4CC2FF66]"
      />
    </div>
  );
}