

"use client";

import * as React from "react";
import { ArrowUpRight, ArrowRight, Mail } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function Footer() {
  const reduce = useReducedMotion();
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: "Сайты (лендинг / многостраничный)", href: "#", isPage: false },
      {
        label: "Автоматизация (WhatsApp / учёт заявок)",
        href: "#",
        isPage: false,
      },
      { label: "UI/UX дизайн (под ваш бренд)", href: "#", isPage: false },
      { label: "AI-боты и чат-боты", href: "#", isPage: false },
    ],
    company: [
      { label: "Процесс", href: "#process" },
      { label: "Кейсы", href: "#cases" },
      { label: "Отзывы", href: "#testimonials" },
      { label: "Контакты", href: "#contact" },
    ],
    social: [
      { label: "Instagram", href: "#" },
      { label: "LinkedIn", href: "#" },
      { label: "Behance", href: "#" },
      { label: "Dribbble", href: "#" },
    ],
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (!href?.startsWith("#")) return;

    e.preventDefault();
    const el = document.querySelector(href);
    if (!el) return;

    const offsetTop = el.getBoundingClientRect().top + window.pageYOffset - 80;
    window.scrollTo({ top: offsetTop, behavior: "smooth" });
  };

  return (
    <footer
      className="
        relative overflow-hidden
        px-6 md:px-12 lg:px-20 py-16 md:py-24
        bg-linear-to-b from-[#050814] via-[#050818] to-[#020410]
        text-slate-100
      "
      aria-label="Footer"
    >
      {/* Neon waves */}
      <div
        className="pointer-events-none absolute -top-40 right-[-10%] h-96 w-96 rounded-full opacity-55 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(76,194,255,0.85), transparent 60%)",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-[-25%] left-[-10%] h-[26rem] w-[26rem] rounded-full opacity-55 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(58,123,255,0.8), transparent 55%)",
        }}
      />

      {/* Subtle grid overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.10]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(51,65,85,0.28) 1px, transparent 1px), linear-gradient(90deg, rgba(51,65,85,0.28) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-12 gap-10 md:gap-14 mb-14 md:mb-20">
          {/* Brand Column */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-7">
              {/* Neon mark */}
              <div
                className="
                  relative h-10 w-10 rounded-2xl
                  border border-cyan-400/40 bg-[#0A0F1E]/70 backdrop-blur-xl
                  shadow-[0_0_40px_rgba(76,194,255,0.22)]
                "
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-300/25 via-transparent to-indigo-400/20" />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-white/5" />
              </div>
              <span className="text-2xl tracking-tight">
                <span className="text-slate-100">Savon</span>
                <span className="text-slate-300/80">Dev</span>
              </span>
            </div>

            <p className="text-lg text-slate-300/85 leading-relaxed mb-7 max-w-md">
              Премиальные сайты и автоматизация для бизнеса в Израиле: заявки в
              WhatsApp, учёт клиентов и меньше ручной рутины.
            </p>

            <div className="space-y-3">
              <a
                href="mailto:hello@studio.com"
                className="
                  inline-flex items-center gap-2
                  text-base md:text-lg text-slate-100
                  opacity-90 hover:opacity-100 transition-opacity
                  group
                "
              >
                <Mail className="w-5 h-5 text-cyan-200/90" />
                hello@studio.com
                <ArrowRight className="w-4 h-4 opacity-60 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="tel:+972501234567"
                className="block text-sm md:text-base text-slate-200/70 hover:text-slate-100 transition-colors"
              >
                +972 50-123-4567
              </a>

              <p className="text-sm text-slate-200/55">
                Работаем по всему Израилю и за его пределами.
              </p>
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-10">
            {/* Services */}
            <div>
              <h3 className="text-xs uppercase tracking-[0.22em] text-slate-200/50 mb-5">
                Services
              </h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="
                        inline-flex items-center gap-2
                        text-slate-200/70 hover:text-slate-100
                        transition-colors group
                      "
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-300/50 group-hover:bg-cyan-200/80 transition-colors" />
                      <span>{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-xs uppercase tracking-[0.22em] text-slate-200/50 mb-5">
                Company
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="
                        inline-flex items-center gap-2
                        text-slate-200/70 hover:text-slate-100
                        transition-colors group
                      "
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-300/40 group-hover:bg-cyan-200/80 transition-colors" />
                      <span>{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-xs uppercase tracking-[0.22em] text-slate-200/50 mb-5">
                Social
              </h3>
              <ul className="space-y-3">
                {footerLinks.social.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex items-center gap-2
                        text-slate-200/70 hover:text-slate-100
                        transition-colors group
                      "
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-50 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter / CTA Strip */}
        <div
          className="
            relative overflow-hidden rounded-3xl
            border border-cyan-400/25 bg-[#0A0F1E]/70 backdrop-blur-xl
            shadow-[0_0_70px_rgba(76,194,255,0.12)]
            p-7 md:p-10
            mb-12
          "
        >
          {/* inner glow */}
          <div className="pointer-events-none absolute inset-0 opacity-70">
            <div
              className="absolute -top-20 -right-16 h-64 w-64 rounded-full blur-3xl opacity-55"
              style={{
                background:
                  "radial-gradient(circle, rgba(76,194,255,0.35), transparent 60%)",
              }}
            />
            <div
              className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full blur-3xl opacity-45"
              style={{
                background:
                  "radial-gradient(circle, rgba(58,123,255,0.28), transparent 60%)",
              }}
            />
          </div>

          <div className="relative z-10 grid md:grid-cols-2 gap-7 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl text-slate-100 mb-2">
                Хотите увидеть демо под вашу нишу?
              </h3>
              <p className="text-slate-300/85">
                Покажем на примере вашего бизнеса: сайт → WhatsApp → учёт заявок
                → уведомления и аналитика.
              </p>
            </div>

            <form
              className="flex flex-col sm:flex-row gap-3"
              onSubmit={(e) => e.preventDefault()}
            >
              <label className="sr-only" htmlFor="footer-email">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                placeholder="your@email.com"
                className="
                  flex-1 rounded-full
                  px-6 py-4
                  bg-[#0B1020]/75 text-slate-100
                  placeholder:text-slate-300/50
                  border border-cyan-400/25
                  outline-none
                  focus:ring-2 focus:ring-cyan-300/40
                "
              />
              <button
                type="submit"
                className="
                  relative group inline-flex items-center justify-center gap-2
                  px-7 py-4 rounded-full font-medium whitespace-nowrap
                  bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#63E5FF]
                  text-slate-900
                  shadow-[0_0_34px_rgba(76,194,255,0.45)]
                  hover:shadow-[0_0_55px_rgba(76,194,255,0.75)]
                  transition-all
                "
              >
                Запросить демо
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                <span className="pointer-events-none absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cyan-200/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap gap-6 text-sm text-slate-200/55">
              <a href="#" className="hover:text-slate-100 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-slate-100 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-slate-100 transition-colors">
                Accessibility
              </a>
            </div>

            <div className="text-sm text-slate-200/55">
              © {currentYear} SavonDev. All rights reserved.
            </div>
          </div>
        </div>

        {/* Decorative bars */}
        <div className="mt-12 flex gap-4 opacity-25">
          <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-200/70 to-transparent" />
          <div className="w-10 h-0.5 bg-cyan-200/35" />
          <div className="w-6 h-0.5 bg-cyan-200/25" />
        </div>
      </div>
    </footer>
  );
}
