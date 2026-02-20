

"use client";

import { useEffect, useRef, useState } from "react";

import { contactData } from "@/src/data/contactData";

import { ContactHero } from "./ContactHero";
import { ContactMain } from "./ContactMain";
import { ContactCTA } from "./ContactCTA";
import {
  safeReadAddons,
  safeReadPackage,
  safeWriteAddons,
  clearPricingSelection,
} from "@/src/utils/addonsStorage";

export type ContactFormState = {
  name: string;
  email: string;
  phone: string;
  package: string;
  additionalServices: string[];
  message: string;
};

const INITIAL_FORM: ContactFormState = {
  name: "",
  email: "",
  phone: "",
  package: "",
  additionalServices: [],
  message: "",
};

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormState>(INITIAL_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
// useEffect(() => {
//   const addons = safeReadAddons();
//   const selectedPackage = safeReadPackage();

//   setFormData((prev) => ({
//     ...prev,
//     additionalServices: addons.length ? addons : prev.additionalServices,
//     package: selectedPackage || prev.package,
//   }));
// }, []);
//   const containerRef = useRef<HTMLDivElement | null>(null);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (isSubmitting) return;

//     setIsSubmitting(true);

//     try {
   
//       await new Promise((resolve) => setTimeout(resolve, 1500));

//       setIsSubmitted(true);

//       setTimeout(() => {
//         setIsSubmitted(false);
//         setFormData(INITIAL_FORM);
//       }, 5000);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };
useEffect(() => {
  const addons = safeReadAddons();
  const selectedPackage = safeReadPackage();

  setFormData((prev) => {
    // ✅ ничего не меняем — не триггерим лишний render
    const nextAddons = addons.length ? addons : prev.additionalServices;
    const nextPackage = selectedPackage || prev.package;

    const sameAddons =
      nextAddons.length === prev.additionalServices.length &&
      nextAddons.every((v, i) => v === prev.additionalServices[i]);

    if (sameAddons && nextPackage === prev.package) return prev;

    return {
      ...prev,
      additionalServices: nextAddons,
      package: nextPackage,
    };
  });
}, []);

const containerRef = useRef<HTMLDivElement | null>(null);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (isSubmitting) return;

  setIsSubmitting(true);

  try {
    // TODO: replace with real API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // ✅ успешная отправка
    setIsSubmitted(true);

    // ✅ очистка localStorage после успешной отправки
    clearPricingSelection();

    // ✅ сброс формы через 5 секунд
    window.setTimeout(() => {
      setIsSubmitted(false);
      setFormData(INITIAL_FORM);
    }, 5000);
  } catch (err) {
    // при желании: toast/error handling
    console.error(err);
  } finally {
    setIsSubmitting(false);
  }
};
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ for checkbox chips (string[])
const handleMultiChange = (name: "additionalServices", values: string[]) => {
  setFormData((prev) => ({ ...prev, [name]: values }));
  safeWriteAddons(values);
};

  return (
    <main
      ref={containerRef}
      className="relative min-h-screen overflow-x-clip bg-[#020410] text-slate-100"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* base gradient */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#050814_0%,#050818_35%,#020410_100%)]" />

        {/* global neon waves */}
        <div
          className="absolute -top-60 right-[-20%] h-[520px] w-[520px] rounded-full blur-3xl opacity-60
                     bg-[radial-gradient(circle,rgba(76,194,255,0.85),transparent_60%)]"
        />
        <div
          className="absolute top-[34%] left-[-22%] h-[640px] w-[640px] rounded-full blur-3xl opacity-50
                     bg-[radial-gradient(circle,rgba(58,123,255,0.75),transparent_60%)]"
        />

        {/* global grid */}
        <div
          className="absolute inset-0 opacity-[0.10]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(51,65,85,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(51,65,85,0.25) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <ContactHero data={contactData.hero} />

      <ContactMain
        data={contactData}
        formData={formData}
        isSubmitted={isSubmitted}
        isSubmitting={isSubmitting}
        onSubmit={handleSubmit}
        onChange={handleChange}
        onMultiChange={handleMultiChange}
      />

      <ContactCTA data={contactData.cta} />
    </main>
  );
}
