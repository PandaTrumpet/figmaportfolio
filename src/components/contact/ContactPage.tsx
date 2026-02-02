"use client";

import { useRef, useState } from "react";
import { useScroll, useTransform } from "motion/react";

import { contactData } from "@/src/data/contactData";

import { ContactHero } from "./ContactHero";
import { ContactMain } from "./ContactMain";
import { ContactCTA } from "./ContactCTA";

export type ContactFormState = {
  name: string;
  email: string;
  phone: string;
  company: string;
  budget: string;
  message: string;
};

const INITIAL_FORM: ContactFormState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  budget: "",
  message: "",
};

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormState>(INITIAL_FORM);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
 



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitted(true);
    setIsSubmitting(false);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData(INITIAL_FORM);
    }, 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
      />
      <ContactCTA data={contactData.cta} />
    </main>
  );
}
