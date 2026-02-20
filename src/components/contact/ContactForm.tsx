
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
  onMultiChange,
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
  onMultiChange: (name: "additionalServices", values: string[]) => void;
}) {
  const reduce = useReducedMotion();

  return (
    <div className="relative">
      {/* Header (Tel-Aviv Night Waves) */}
      <div className="mb-10 md:mb-12">
        <h2
          className="text-3xl 
  md:text-4xl 
  lg:text-5xl 
  xl:text-6xl 
  font-semibold 
  leading-tight 
  md:leading-[1.15]  text-slate-50 mb-3"
        >
          {form.title}
        </h2>
        <p
          className="  mt-4
  text-white/75
  leading-relaxed md:leading-[1.7]
  max-w-[52ch] md:max-w-[60ch] lg:max-w-[66ch]
  text-[clamp(0.98rem,0.55vw+0.88rem,1.15rem)]"
        >
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

                {/* NEW: Package select (replaces budget & removed company) */}
                <FormSelect
                  label={form.fields.package.label}
                  name="package"
                  value={formData.package}
                  onChange={onChange}
                  placeholder={form.fields.package.placeholder}
                  options={form.fields.package.options}
                />
              </div>

              {/* NEW: Additional Services (multi-select) */}
              <FormCheckboxChips
                label={form.fields.additionalServices.label}
                name="additionalServices"
                values={formData.additionalServices}
                options={form.fields.additionalServices.options}
                hint={form.fields.additionalServices.hint}
                onToggle={(service) => {
                  const next = formData.additionalServices.includes(service)
                    ? formData.additionalServices.filter((s) => s !== service)
                    : [...formData.additionalServices, service];

                  onMultiChange("additionalServices", next);
                }}
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
  reduce: boolean | null;
}) {
  return (
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
      <span className="absolute inset-0 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]" />
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

        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#C7CEDF] opacity-70">
          ▾
        </span>
      </div>
    </div>
  );
}

// function FormMultiSelect({
//   label,
//   name,
//   values,
//   onValuesChange,
//   options,
//   hint,
// }: {
//   label: string;
//   name: string;
//   values: string[];
//   onValuesChange: (values: string[]) => void;
//   options: string[];
//   hint?: string;
// }) {
//   return (
//     <div>
//       <label className="mb-3 block text-xs md:text-sm tracking-[0.18em] text-[#AEB8CC]">
//         {label}
//       </label>

//       <div className="relative">
//         <select
//           name={name}
//           multiple
//           value={values}
//           onChange={(e) => {
//             const selected = Array.from(e.target.selectedOptions).map(
//               (o) => o.value,
//             );
//             onValuesChange(selected);
//           }}
//           className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-3.5 text-[#F2F4FA] outline-none transition-colors backdrop-blur-sm focus:border-[#4CC2FF66]"
//           size={Math.min(6, options.length)} // nice UX: shows a few rows
//         >
//           {options.map((opt, i) => (
//             <option key={i} value={opt} className="bg-[#050816]">
//               {opt}
//             </option>
//           ))}
//         </select>

//         {hint ? (
//           <p className="mt-2 text-xs text-white/45 leading-relaxed">{hint}</p>
//         ) : null}
//       </div>
//     </div>
//   );
// }

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

function FormCheckboxChips({
  label,
  name,
  values,
  options,
  hint,
  onToggle,
}: {
  label: string;
  name: string;
  values: string[];
  options: string[];
  hint?: string;
  onToggle: (value: string) => void;
}) {
  return (
    <fieldset className="relative">
      <legend className="mb-3 block text-xs md:text-sm tracking-[0.18em] text-[#AEB8CC]">
        {label}
      </legend>

      <div className="flex flex-wrap gap-2.5">
        {options.map((opt) => {
          const checked = values.includes(opt);

          return (
            <label
              key={opt}
              className={`
                group relative cursor-pointer select-none
                inline-flex items-center gap-2 rounded-full
                px-4 py-2.5 md:px-4.5 md:py-2.5
                border backdrop-blur-sm transition-all
                ${
                  checked
                    ? "border-[#4CC2FF55] bg-[#4CC2FF18] text-[#F2F4FA] shadow-[0_0_24px_rgba(76,194,255,0.22)]"
                    : "border-white/10 bg-white/5 text-white/80 hover:bg-white/8 hover:border-white/15"
                }
              `}
            >
              {/* real checkbox for accessibility */}
              <input
                type="checkbox"
                name={name}
                value={opt}
                checked={checked}
                onChange={() => onToggle(opt)}
                className="sr-only"
              />

              {/* custom check */}
              <span
                aria-hidden="true"
                className={`
                  grid place-items-center
                  h-4 w-4 rounded-md border transition-colors
                  ${
                    checked
                      ? "border-[#4CC2FFAA] bg-[#4CC2FF] text-[#050816]"
                      : "border-white/20 bg-white/0 text-transparent group-hover:border-white/35"
                  }
                `}
              />
                
             

              <span className="text-sm md:text-[0.95rem] leading-none">
                {opt}
              </span>

              {/* subtle glow when active */}
              <span
                aria-hidden="true"
                className={`
                  pointer-events-none absolute inset-0 rounded-full
                  ${checked ? "opacity-100" : "opacity-0"}
                  transition-opacity
                `}
                style={{
                  boxShadow: checked
                    ? "0 0 0 1px rgba(76,194,255,0.25), 0 0 34px rgba(76,194,255,0.18)"
                    : undefined,
                }}
              />
            </label>
          );
        })}
      </div>

      {hint ? (
        <p className="mt-3 text-xs text-white/45 leading-relaxed">{hint}</p>
      ) : null}
    </fieldset>
  );
}