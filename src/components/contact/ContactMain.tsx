"use client";

import { motion } from "motion/react";
import { ContactForm } from "./ContactForm";
import { ContactInfoPanel } from "./ContactInfoPanel";
import type { ContactFormState } from "./ContactPage";

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
    >
  ) => void;
}) {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-20 md:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-[1.5fr,1fr] gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <ContactForm
              form={data.form}
              formData={formData}
              isSubmitted={isSubmitted}
              isSubmitting={isSubmitting}
              onSubmit={onSubmit}
              onChange={onChange}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <ContactInfoPanel contacts={data.contacts} office={data.office} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
