

"use client";

import * as React from "react";

type Props = {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => void;
  required?: boolean;
};

export function FormField({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  required,
}: Props) {
  return (
    <div className="group">
      <label className="mb-3 block text-xs md:text-sm tracking-[0.18em] text-[#AEB8CC]">
        {label}
      </label>

      <div className="relative">
        {/* input */}
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className="w-full min-w-0 rounded-[18px] border border-white/10 bg-white/5 px-4 py-3 text-[16px] text-[#F2F4FA] placeholder:text-white/25 outline-none transition-all backdrop-blur-sm focus:border-[#4CC2FF66] focus:shadow-[0_0_0_1px_rgba(76,194,255,0.35),_0_0_28px_rgba(76,194,255,0.18)] md:rounded-2xl md:px-5 md:py-3.5"
        />

        {/* subtle glow (on focus via group-within) */}
        <div className="pointer-events-none absolute -inset-3 rounded-[22px] bg-[radial-gradient(circle_at_center,_rgba(76,194,255,0.20),_transparent_70%)] opacity-0 blur-2xl transition-opacity group-focus-within:opacity-100" />
      </div>
    </div>
  );
}