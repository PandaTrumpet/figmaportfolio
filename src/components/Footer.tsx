


import * as React from "react";
// import Link from "next/link";
import { Mail, Phone, ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { PageContainer } from "./Layout/PageContainer";

export function Footer() {

  const currentYear = new Date().getFullYear();

  const pages = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Process", href: "/process" },
    { label: "Pricing", href: "/pricing" },
    { label: "Reviews", href: "/reviews" },
    { label: "Contact", href: "/contact" },
  ];

  const legal = [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "Cookies", href: "/cookies" },
    { label: "Accessibility", href: "/accessibility" },
    { label: "Refunds", href: "/refund" },
  ];

  return (
    <footer
      className="relative overflow-hidden bg-[#020410] py-12 md:py-16 text-slate-100"
      aria-label="Footer"
    >
      <div
        className="pointer-events-none absolute bottom-[-25%] left-[-10%] h-[26rem] w-[26rem] rounded-full opacity-55 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(58,123,255,0.8), transparent 55%)",
        }}
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.10]"
        aria-hidden="true"
      >
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(51,65,85,0.28) 1px, transparent 1px), linear-gradient(90deg, rgba(51,65,85,0.28) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <PageContainer className="relative z-10 max-w-[1200px]">
        {/* Top */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          {/* Brand */}
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-5">
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

            <p className="text-base md:text-lg text-slate-300/85 leading-relaxed mb-5">
              Премиальные сайты и автоматизация для бизнеса в Израиле — от
              структуры оффера до запусков и CRM/WhatsApp-воронок.
            </p>

            <div className="flex flex-col gap-3">
              <a
                href="mailto:hello@studio.com"
                className="inline-flex items-center gap-2 text-slate-100 opacity-90 hover:opacity-100 transition-opacity group"
              >
                <Mail className="w-5 h-5 text-cyan-200/90" />
                hello@studio.com
                <ArrowRight className="w-4 h-4 opacity-60 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="tel:+972501234567"
                className="inline-flex items-center gap-2 text-slate-100/85 hover:text-slate-100 transition-colors group"
              >
                <Phone className="w-5 h-5 text-cyan-200/85" />
                +972 50-123-4567
                <ArrowRight className="w-4 h-4 opacity-60 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Sitemap */}
          <div className="w-full md:max-w-[520px]">
            <h3 className="text-xs uppercase tracking-[0.22em] text-slate-200/50 mb-4">
              Sitemap
            </h3>

            <nav aria-label="Footer navigation">
              <ul className="flex flex-wrap gap-x-5 gap-y-3">
                {pages.map((p) => (
                  <li key={p.href}>
                    <Link
                      href={p.href}
                      className="text-slate-200/70 hover:text-slate-100 transition-colors"
                    >
                      {p.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-xs md:text-sm text-slate-200/55">
              {legal.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="hover:text-slate-100 transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-cyan-200/10 pt-7">
          <div className="text-sm text-slate-200/55 text-center">
            © {currentYear} SavonDev. All rights reserved.
          </div>
        </div>
      </PageContainer>
    </footer>
  );
}
