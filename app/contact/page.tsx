import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";

import { contactData } from "../../src/data/contactData";
import {
  Send,
  MapPin,
  Clock,
  Download,
  Calendar,
  Check,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    budget: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitted(true);
    setIsSubmitting(false);

    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        budget: "",
        message: "",
      });
    }, 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-[#F5EFE7]">
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Minimal Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, #050608 0px, #050608 1px, transparent 1px, transparent 80px), repeating-linear-gradient(90deg, #050608 0px, #050608 1px, transparent 1px, transparent 80px)",
            }}
          />
        </div>

        <motion.div
          className="relative z-10 max-w-[1200px] mx-auto w-full px-6 md:px-12 lg:px-20 text-center"
          style={{ opacity }}
        >
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-block mb-10"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="px-8 py-4 border-2 border-[#050608] text-sm uppercase tracking-[0.3em] bg-white">
                {contactData.hero.badge}
              </div>
            </motion.div>

            {/* Title */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.9] mb-12">
              {contactData.hero.title}
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl lg:text-3xl opacity-70 max-w-3xl mx-auto leading-relaxed">
              {contactData.hero.subtitle}
            </p>
          </motion.div>
        </motion.div>

        {/* Floating Elements */}
        <FloatingDots />
      </section>

      {/* Main Content - Form + Contacts */}
      <section className="px-6 md:px-12 lg:px-20 py-20 md:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-[1.5fr,1fr] gap-12 lg:gap-20">
            {/* Contact Form - Dark Glass Style */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mb-12">
                <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">
                  {contactData.form.title}
                </h2>
                <p className="text-xl md:text-2xl opacity-70">
                  {contactData.form.subtitle}
                </p>
              </div>

              {/* Dark Glass Form */}
              <motion.div
                className="relative overflow-hidden"
                whileHover={{
                  boxShadow: "24px 24px 0px 0px rgba(5,6,8,0.1)",
                  x: -6,
                  y: -6,
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Glass Effect Background */}
                <div className="absolute inset-0 bg-linear-to-br from-[#050608] via-[#1a1a1a] to-[#050608]" />
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIgb3BhY2l0eT0iMC4wNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />

                <form
                  onSubmit={handleSubmit}
                  className="relative z-10 p-8 md:p-12 lg:p-16"
                >
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
                        {contactData.form.successMessage}
                      </p>
                      <p className="text-lg text-[#F5EFE7] opacity-60">
                        Проверьте вашу почту
                      </p>
                    </motion.div>
                  ) : (
                    <div className="space-y-6">
                      {/* Name & Email */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <FormField
                          label={contactData.form.fields.name.label}
                          name="name"
                          type={contactData.form.fields.name.type}
                          placeholder={contactData.form.fields.name.placeholder}
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                        <FormField
                          label={contactData.form.fields.email.label}
                          name="email"
                          type={contactData.form.fields.email.type}
                          placeholder={
                            contactData.form.fields.email.placeholder
                          }
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      {/* Phone & Company */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <FormField
                          label={contactData.form.fields.phone.label}
                          name="phone"
                          type={contactData.form.fields.phone.type}
                          placeholder={
                            contactData.form.fields.phone.placeholder
                          }
                          value={formData.phone}
                          onChange={handleChange}
                        />
                        <FormField
                          label={contactData.form.fields.company.label}
                          name="company"
                          type={contactData.form.fields.company.type}
                          placeholder={
                            contactData.form.fields.company.placeholder
                          }
                          value={formData.company}
                          onChange={handleChange}
                        />
                      </div>

                      {/* Budget */}
                      <div>
                        <label className="block text-sm uppercase tracking-wider text-[#F5EFE7] opacity-70 mb-3">
                          {contactData.form.fields.budget.label}
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-6 py-4 bg-white/5 border-2 border-white/10 text-[#F5EFE7] placeholder-[#F5EFE7]/30 focus:border-[#F5EFE7]/50 focus:outline-none transition-all backdrop-blur-sm"
                        >
                          <option value="" className="bg-[#050608]">
                            {contactData.form.fields.budget.placeholder}
                          </option>
                          {contactData.form.fields.budget.options.map(
                            (option, i) => (
                              <option
                                key={i}
                                value={option}
                                className="bg-[#050608]"
                              >
                                {option}
                              </option>
                            )
                          )}
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-sm uppercase tracking-wider text-[#F5EFE7] opacity-70 mb-3">
                          {contactData.form.fields.message.label}
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder={
                            contactData.form.fields.message.placeholder
                          }
                          rows={6}
                          required
                          className="w-full px-6 py-4 bg-white/5 border-2 border-white/10 text-[#F5EFE7] placeholder-[#F5EFE7]/30 focus:border-[#F5EFE7]/50 focus:outline-none transition-all resize-none backdrop-blur-sm"
                        />
                      </div>

                      {/* Submit Button */}
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
                            <span>{contactData.form.button}</span>
                            <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                          </>
                        )}
                      </motion.button>
                    </div>
                  )}
                </form>

                {/* Glow Effect */}
                <motion.div
                  className="absolute -inset-px bg-linear-to-r from-[#F5EFE7]/20 via-transparent to-[#F5EFE7]/20 opacity-0 group-hover:opacity-100 pointer-events-none"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </motion.div>
            </motion.div>

            {/* Contact Info + Map */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Quick Contacts */}
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl mb-8">Быстрый контакт</h3>
                {contactData.contacts.map((contact, index) => (
                  <ContactCard key={index} contact={contact} index={index} />
                ))}
              </div>

              {/* Office Info */}
              <motion.div
                className="border-2 border-[#050608] p-8 md:p-10 bg-[#F5EFE7]"
                whileHover={{
                  boxShadow: "16px 16px 0px 0px rgba(5,6,8,1)",
                  x: -4,
                  y: -4,
                }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <MapPin className="w-6 h-6 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl mb-4">
                      {contactData.office.title}
                    </h3>
                    <p className="text-lg opacity-70 mb-2">
                      {contactData.office.address}
                    </p>
                    <p className="text-lg opacity-70 mb-4">
                      {contactData.office.city}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-6 border-t-2 border-[#050608] border-opacity-10">
                  <Clock className="w-6 h-6 shrink-0 mt-1" />
                  <div>
                    <p className="text-base uppercase tracking-wider opacity-50 mb-2">
                      Часы работы
                    </p>
                    <p className="text-lg opacity-70">
                      {contactData.office.hours}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Stylized Map - Dark Theme */}
              <motion.div
                className="aspect-square border-2 border-[#050608] overflow-hidden relative"
                whileHover={{
                  boxShadow: "16px 16px 0px 0px rgba(5,6,8,1)",
                  x: -4,
                  y: -4,
                }}
              >
                {/* Dark Map Placeholder */}
                <div className="w-full h-full bg-linear-to-br from-[#050608] via-[#1a1a1a] to-[#050608] relative">
                  {/* Grid Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div
                      className="w-full h-full"
                      style={{
                        backgroundImage:
                          "repeating-linear-gradient(0deg, #F5EFE7 0px, #F5EFE7 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, #F5EFE7 0px, #F5EFE7 1px, transparent 1px, transparent 40px)",
                      }}
                    />
                  </div>

                  {/* Marker */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="text-center"
                    >
                      <MapPin className="w-16 h-16 text-[#F5EFE7] mx-auto mb-4" />
                      <div className="px-6 py-3 bg-[#F5EFE7] text-[#050608]">
                        <p className="text-sm uppercase tracking-wider">
                          Tel Aviv
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Pulsing Circle */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      animate={{
                        scale: [1, 2.5, 1],
                        opacity: [0.3, 0, 0.3],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeOut",
                      }}
                      className="w-32 h-32 rounded-full border-2 border-[#F5EFE7]"
                    />
                  </div>

                  {/* Coordinates Text */}
                  <div className="absolute bottom-4 left-4 text-[#F5EFE7] opacity-30 text-xs font-mono">
                    {contactData.office.coordinates.lat.toFixed(4)},{" "}
                    {contactData.office.coordinates.lng.toFixed(4)}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-12 lg:px-20 py-32 md:py-40 bg-[#050608] text-[#F5EFE7] relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl mb-8 leading-tight">
              {contactData.cta.title}
            </h2>

            <p className="text-xl md:text-2xl opacity-70 mb-16 max-w-3xl mx-auto leading-relaxed">
              {contactData.cta.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
              <motion.a
                href="#"
                className="inline-flex items-center gap-3 px-10 py-5 bg-[#F5EFE7] text-[#050608] text-lg group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5" />
                <span>Скачать Portfolio</span>
              </motion.a>

              <motion.a
                href="#"
                className="inline-flex items-center gap-3 px-10 py-5 border-2 border-[#F5EFE7] text-[#F5EFE7] text-lg group hover:bg-[#F5EFE7] hover:text-[#050608] transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Calendar className="w-5 h-5" />
                <span>Записаться на консультацию</span>
              </motion.a>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-8">
              {contactData.cta.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <p className="text-4xl md:text-5xl mb-3">{stat.value}</p>
                  <p className="text-base opacity-60 uppercase tracking-wider">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <motion.div
            className="w-full h-full"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, #F5EFE7 0px, #F5EFE7 2px, transparent 2px, transparent 60px)",
            }}
            animate={{
              backgroundPosition: ["0px 0px", "60px 60px"],
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>
      </section>
    </div>
  );
}

// ============= COMPONENTS =============

interface FormFieldProps {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

function FormField({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  required,
}: FormFieldProps) {
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

function ContactCard({
  contact,
  index,
}: {
  contact: (typeof contactData.contacts)[0];
  index: number;
}) {
  return (
    <motion.a
      href={contact.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="flex items-center gap-6 p-6 md:p-8 border-2 border-[#050608] bg-white hover:bg-[#F5EFE7] transition-all group"
      whileHover={{
        boxShadow: "12px 12px 0px 0px rgba(5,6,8,1)",
        x: -4,
        y: -4,
      }}
    >
      <motion.div
        className="text-4xl shrink-0"
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
      >
        {contact.icon}
      </motion.div>
      <div className="flex-1">
        <p className="text-sm uppercase tracking-wider opacity-50 mb-2">
          {contact.label}
        </p>
        <p className="text-xl md:text-2xl group-hover:translate-x-2 transition-transform">
          {contact.value}
        </p>
      </div>
      <ArrowRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.a>
  );
}

function FloatingDots() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-[#050608] opacity-10"
          style={{
            left: `${10 + i * 8}%`,
            top: `${20 + (i % 4) * 20}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2,
          }}
        />
      ))}
    </div>
  );
}
