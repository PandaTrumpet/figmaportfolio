"use client";

type Props = {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
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
    <div>
      <label className="block text-sm uppercase tracking-wider text-[#F5EFE7] opacity-70 mb-3">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full px-6 py-4 bg-white/5 border-2 border-white/10 text-[#F5EFE7] placeholder-[#F5EFE7]/30 focus:border-[#F5EFE7]/50 focus:outline-none transition-all backdrop-blur-sm"
      />
    </div>
  );
}
