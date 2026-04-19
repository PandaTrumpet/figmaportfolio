
"use client";

import * as React from "react";
import { motion, useReducedMotion } from "motion/react";
import { Check, Send } from "lucide-react";

import { FormField } from "./FormField";
import type { ContactFormState } from "./ContactPage";
import type { ContactFormConfig } from "@/src/data/contactData";

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
  form: ContactFormConfig;
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
      <div className="mb-10 md:mb-12">
        <h2
          id="contact-form-heading"
          className="mb-3 text-3xl font-semibold leading-tight text-slate-50 md:text-4xl md:leading-[1.15] lg:text-5xl xl:text-6xl"
        >
          {form.title}
        </h2>
        <p className="mt-4 max-w-[52ch] text-[clamp(0.98rem,0.55vw+0.88rem,1.15rem)] leading-relaxed text-white/75 md:max-w-[60ch] md:leading-[1.7] lg:max-w-[66ch]">
          {form.subtitle}
        </p>
      </div>

      <motion.div
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#060A13] via-[#050816] to-[#02030A] shadow-[0_26px_90px_rgba(0,0,0,0.9)] backdrop-blur-xl"
        initial={false}
        whileHover={reduce ? undefined : { y: -10 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-[14px] -z-20 rounded-[36px] bg-[radial-gradient(circle_at_top,_rgba(58,123,255,0.55),_transparent_70%)] blur-2xl"
          animate={{ opacity: 0.35 }}
          whileHover={{ opacity: 0.9, scale: 1.06 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        />

        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-[#3A7BFF22] via-[#4CC2FF16] to-[#9B5DFF16]"
          initial={{ opacity: 0.35 }}
          whileHover={{ opacity: 0.85 }}
          transition={{ duration: 0.28 }}
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
        >
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 84px), repeating-linear-gradient(90deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 84px)",
            }}
          />
        </div>

        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-10 -z-10 bg-[linear-gradient(115deg,_transparent_0%,_rgba(255,255,255,0.18)_30%,_transparent_60%)] mix-blend-screen"
          initial={{ x: "-140%" }}
          whileHover={reduce ? undefined : { x: "140%" }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 rounded-3xl border border-transparent"
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
              role="status"
              aria-live="polite"
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: reduce ? 0 : 0.5, ease: EASE }}
              className="py-14 text-center md:py-16"
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

              <p className="mb-3 text-xl font-medium text-[#F2F4FA] md:text-2xl">
                {form.successMessage}
              </p>

              {form.successSecondary ? (
                <p className="text-sm text-[#C7CEDF] md:text-base">
                  {form.successSecondary}
                </p>
              ) : null}
            </motion.div>
          ) : (
            <div className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
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

              <div className="grid gap-6 md:grid-cols-2">
                <FormField
                  label={form.fields.phone.label}
                  name="phone"
                  type={form.fields.phone.type}
                  placeholder={form.fields.phone.placeholder}
                  value={formData.phone}
                  onChange={onChange}
                />

                <FormSelect
                  label={form.fields.package.label}
                  name="package"
                  value={formData.package}
                  onChange={onChange}
                  placeholder={form.fields.package.placeholder}
                  options={form.fields.package.options}
                />
              </div>

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
                loadingLabel={form.submitLoading}
                reduce={reduce}
              />
            </div>
          )}
        </form>
      </motion.div>

      {!isSubmitted && form.trustLine ? (
        <p className="mt-5 text-xs leading-relaxed text-[#AEB8CC] md:text-sm">
          {form.trustLine}
        </p>
      ) : null}
    </div>
  );
}

function TelAvivSubmitButton({
  isSubmitting,
  label,
  loadingLabel,
  reduce,
}: {
  isSubmitting: boolean;
  label: string;
  loadingLabel?: string;
  reduce: boolean | null;
}) {
  return (
    <motion.button
      type="submit"
      disabled={isSubmitting}
      aria-busy={isSubmitting}
      className="
        group relative w-full cursor-pointer overflow-hidden rounded-2xl
        px-7 py-4 font-medium text-[#050816]
        shadow-[0_0_40px_rgba(76,194,255,0.55)]
        transition-shadow hover:shadow-[0_0_65px_rgba(76,194,255,0.85)]
        disabled:cursor-not-allowed disabled:opacity-60
        md:py-4.5
      "
      whileHover={reduce ? undefined : { scale: isSubmitting ? 1 : 1.03 }}
      whileTap={reduce ? undefined : { scale: isSubmitting ? 1 : 0.97 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-2xl bg-white/10 opacity-0 transition-opacity group-hover:opacity-100"
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
            <span>{loadingLabel || label}</span>
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
  const selectId = `${name}-select`;

  return (
    <div>
      <label
        htmlFor={selectId}
        className="mb-3 block text-xs tracking-[0.18em] text-[#AEB8CC] md:text-sm"
      >
        {label}
      </label>

      <div className="relative">
        <select
          id={selectId}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full appearance-none rounded-2xl border border-white/10 bg-white/5 px-5 py-3.5 pr-12 text-[#F2F4FA] outline-none transition-colors backdrop-blur-sm focus:border-[#4CC2FF66]"
        >
          <option value="" className="bg-[#050816]">
            {placeholder}
          </option>
          {options.map((opt) => (
            <option key={opt} value={opt} className="bg-[#050816]">
              {opt}
            </option>
          ))}
        </select>

        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#C7CEDF] opacity-70"
        >
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
  const textareaId = `${name}-textarea`;

  return (
    <div>
      <label
        htmlFor={textareaId}
        className="mb-3 block text-xs tracking-[0.18em] text-[#AEB8CC] md:text-sm"
      >
        {label}
      </label>
      <textarea
        id={textareaId}
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
  values: string[]; // теперь это массив id
  options: { id: string; label: string }[];
  hint?: string;
  onToggle: (id: string) => void;
}) {
  const hintId = hint ? `${name}-hint` : undefined;

  return (
    <fieldset className="relative" aria-describedby={hintId}>
      <legend className="mb-3 block text-xs tracking-[0.18em] text-[#AEB8CC] md:text-sm">
        {label}
      </legend>

      <div className="grid grid-cols-1 gap-3 md:gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
        {options.map((opt) => {
          const checked = values.includes(opt.id);
          const id = `${name}-${opt.id}`;

          return (
            <label
              key={opt.id}
              htmlFor={id}
              className={`
                group relative cursor-pointer select-none rounded-2xl border
                px-4 py-3 backdrop-blur-sm transition-all md:px-4.5 md:py-3.5
                ${
                  checked
                    ? "border-[#4CC2FF55] bg-[#4CC2FF14] shadow-[0_0_26px_rgba(76,194,255,0.18)]"
                    : "border-white/10 bg-white/5 hover:border-white/15 hover:bg-white/8"
                }
              `}
            >
              <input
                id={id}
                type="checkbox"
                name={name}
                value={opt.id}
                checked={checked}
                onChange={() => onToggle(opt.id)}
                className="sr-only"
              />

              <div className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className={`
                    mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md border transition-colors
                    ${
                      checked
                        ? "border-[#4CC2FFAA] bg-[#4CC2FF] text-[#050816]"
                        : "border-white/20 bg-transparent text-transparent group-hover:border-white/35"
                    }
                  `}
                >
                  ✓
                </span>

                <div className="min-w-0">
                  <span className="block text-sm leading-snug text-[#F2F4FA] md:text-[0.95rem]">
                    {opt.label}
                  </span>
                </div>
              </div>

              <span
                aria-hidden="true"
                className={`pointer-events-none absolute inset-0 rounded-2xl transition-opacity ${
                  checked ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  boxShadow: checked
                    ? "0 0 0 1px rgba(76,194,255,0.22), 0 0 34px rgba(76,194,255,0.14)"
                    : undefined,
                }}
              />

              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-2xl ring-0 ring-[#4CC2FF66] ring-offset-0 group-has-[:focus-visible]:ring-2"
              />
            </label>
          );
        })}
      </div>

      {hint ? (
        <p id={hintId} className="mt-3 text-xs leading-relaxed text-white/45">
          {hint}
        </p>
      ) : null}
    </fieldset>
  );
}