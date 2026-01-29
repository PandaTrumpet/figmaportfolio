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
    <div ref={containerRef} className="min-h-screen bg-[#F5EFE7]">
      <ContactHero data={contactData.hero}  />
      <ContactMain
        data={contactData}
        formData={formData}
        isSubmitted={isSubmitted}
        isSubmitting={isSubmitting}
        onSubmit={handleSubmit}
        onChange={handleChange}
      />
      <ContactCTA data={contactData.cta} />
    </div>
  );
}
