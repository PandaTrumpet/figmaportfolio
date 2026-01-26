"use client";

import { motion } from "motion/react";
import { Check, Send } from "lucide-react";
import { FormField } from "./FormField";
import type { ContactFormState } from "./ContactPage";

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
    >
  ) => void;
}) {
  return (
    <>
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">{form.title}</h2>
        <p className="text-xl md:text-2xl opacity-70">{form.subtitle}</p>
      </div>

      <motion.div
        className="relative overflow-hidden group"
        whileHover={{
          boxShadow: "24px 24px 0px 0px rgba(5,6,8,0.1)",
          x: -6,
          y: -6,
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute inset-0 bg-linear-to-br from-[#050608] via-[#1a1a1a] to-[#050608]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIgb3BhY2l0eT0iMC4wNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />

        <form onSubmit={onSubmit} className="relative z-10 p-8 md:p-12 lg:p-16">
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.2 }}
                className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#F5EFE7] flex items-center justify-center"
              >
                <Check className="w-10 h-10 text-[#050608]" />
              </motion.div>
              <p className="text-2xl md:text-3xl text-[#F5EFE7] mb-4">
                {form.successMessage}
              </p>
              <p className="text-lg text-[#F5EFE7] opacity-60">
                Проверьте вашу почту
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

              <div>
                <label className="block text-sm uppercase tracking-wider text-[#F5EFE7] opacity-70 mb-3">
                  {form.fields.budget.label}
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={onChange}
                  className="w-full px-6 py-4 bg-white/5 border-2 border-white/10 text-[#F5EFE7] placeholder-[#F5EFE7]/30 focus:border-[#F5EFE7]/50 focus:outline-none transition-all backdrop-blur-sm"
                >
                  <option value="" className="bg-[#050608]">
                    {form.fields.budget.placeholder}
                  </option>
                  {form.fields.budget.options.map(
                    (option: string, i: number) => (
                      <option key={i} value={option} className="bg-[#050608]">
                        {option}
                      </option>
                    )
                  )}
                </select>
              </div>

              <div>
                <label className="block text-sm uppercase tracking-wider text-[#F5EFE7] opacity-70 mb-3">
                  {form.fields.message.label}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={onChange}
                  placeholder={form.fields.message.placeholder}
                  rows={6}
                  required
                  className="w-full px-6 py-4 bg-white/5 border-2 border-white/10 text-[#F5EFE7] placeholder-[#F5EFE7]/30 focus:border-[#F5EFE7]/50 focus:outline-none transition-all resize-none backdrop-blur-sm"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-5 bg-[#F5EFE7] text-[#050608] text-lg flex items-center justify-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-5 h-5 border-2 border-[#050608] border-t-transparent rounded-full"
                    />
                    <span>Отправка...</span>
                  </>
                ) : (
                  <>
                    <span>{form.button}</span>
                    <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </motion.button>
            </div>
          )}
        </form>

        <motion.div
          className="absolute -inset-px bg-linear-to-r from-[#F5EFE7]/20 via-transparent to-[#F5EFE7]/20 opacity-0 group-hover:opacity-100 pointer-events-none"
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
    </>
  );
}
