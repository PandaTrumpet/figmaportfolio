// "use client"
// import * as React from "react";
// // import Link from "next/link";
// import { Mail, Phone, ArrowRight } from "lucide-react";

// import { PageContainer } from "./Layout/PageContainer";
// import { Link, usePathname, useRouter } from "@/i18n/navigation";
// const NAV_OFFSET = 80;
// export function Footer() {
//  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
//   const currentYear = new Date().getFullYear();
//   const pathname = usePathname(); // ✅ locale-safe (без /en)
//   const pages = [
//     { label: "Home", href: "/" },
//     { label: "About", href: "/about" },
//     { label: "Portfolio", href: "/portfolio" },
//     { label: "Process", href: "/process" },
//     { label: "Pricing", href: "/pricing" },
//     { label: "Reviews", href: "/reviews" },
//     { label: "Contact", href: "/contact" },
//   ];

//   const legal = [
//     { label: "Privacy", href: "/privacy" },
//     { label: "Terms", href: "/terms" },
//     { label: "Cookies", href: "/cookies" },
//     { label: "Accessibility", href: "/accessibility" },
//     { label: "Refunds", href: "/refund" },
//   ];
//   const router = useRouter();
//   const scrollToSection = (selector: string) => {
//     // если мы НЕ на главной — сначала уходим на главную с hash
//     if (pathname !== "/") {
//       router.push(`/${selector}`);
//       setIsMobileMenuOpen(false);
//       return;
//     }

//     const el = document.querySelector(selector);
//     if (!el) return;

//     const top =
//       el.getBoundingClientRect().top + window.pageYOffset - NAV_OFFSET;
//     window.scrollTo({ top, behavior: "smooth" });
//     setIsMobileMenuOpen(false);
//   };

//   return (
//     <footer
//       className="relative overflow-hidden bg-[#020410] py-12 md:py-16 text-slate-100"
//       aria-label="Footer"
//     >
//       <div
//         className="pointer-events-none absolute bottom-[-25%] left-[-10%] h-[26rem] w-[26rem] rounded-full opacity-55 blur-3xl"
//         style={{
//           background:
//             "radial-gradient(circle, rgba(58,123,255,0.8), transparent 55%)",
//         }}
//         aria-hidden="true"
//       />

//       <div
//         className="pointer-events-none absolute inset-0 opacity-[0.10]"
//         aria-hidden="true"
//       >
//         <div
//           className="h-full w-full"
//           style={{
//             backgroundImage:
//               "linear-gradient(rgba(51,65,85,0.28) 1px, transparent 1px), linear-gradient(90deg, rgba(51,65,85,0.28) 1px, transparent 1px)",
//             backgroundSize: "80px 80px",
//           }}
//         />
//       </div>

//       <PageContainer className="relative z-10 max-w-[1200px]">
//         {/* Top */}
//         <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
//           {/* Brand */}
//           <div className="max-w-xl">
//             <div className="flex items-center gap-3 mb-5">
//               <div
//                 className="
//                   relative h-10 w-10 rounded-2xl
//                   border border-cyan-400/40 bg-[#0A0F1E]/70 backdrop-blur-xl
//                   shadow-[0_0_40px_rgba(76,194,255,0.22)]
//                 "
//               >
//                 <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-300/25 via-transparent to-indigo-400/20" />
//                 <div className="absolute inset-0 rounded-2xl ring-1 ring-white/5" />
//               </div>
//               <span className="text-2xl tracking-tight">
//                 <span className="text-slate-100">Savon</span>
//                 <span className="text-slate-300/80">Dev</span>
//               </span>
//             </div>

//             <p className="text-base md:text-lg text-slate-300/85 leading-relaxed mb-5">
//               Премиальные сайты и автоматизация для бизнеса в Израиле — от
//               структуры оффера до запусков и CRM/WhatsApp-воронок.
//             </p>

//             <div className="flex flex-col gap-3">
//               <a
//                 href="mailto:hello@studio.com"
//                 className="inline-flex items-center gap-2 text-slate-100 opacity-90 hover:opacity-100 transition-opacity group"
//               >
//                 <Mail className="w-5 h-5 text-cyan-200/90" />
//                 hello@studio.com
//                 <ArrowRight className="w-4 h-4 opacity-60 transition-transform group-hover:translate-x-1" />
//               </a>

//               <a
//                 href="tel:+972501234567"
//                 className="inline-flex items-center gap-2 text-slate-100/85 hover:text-slate-100 transition-colors group"
//               >
//                 <Phone className="w-5 h-5 text-cyan-200/85" />
//                 +972 50-123-4567
//                 <ArrowRight className="w-4 h-4 opacity-60 transition-transform group-hover:translate-x-1" />
//               </a>
//             </div>
//           </div>

//           {/* Sitemap */}
//           <div className="w-full md:max-w-[520px]">
//             <h3 className="text-xs uppercase tracking-[0.22em] text-slate-200/50 mb-4">
//               Sitemap
//             </h3>

//             <nav aria-label="Footer navigation">
//               <ul className="flex flex-wrap gap-x-5 gap-y-3">
//                 {pages.map((p) => (
//                   <li key={p.href}>
//                     <Link
//                       href={p.href}
//                       className="text-slate-200/70 hover:text-slate-100 transition-colors"
//                     >
//                       {p.label}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </nav>

//             <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-xs md:text-sm text-slate-200/55">
//               {legal.map((l) => (
//                 <Link
//                   key={l.href}
//                   href={l.href}
//                   className="hover:text-slate-100 transition-colors"
//                 >
//                   {l.label}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Bottom */}
//         <div className="mt-10 border-t border-cyan-200/10 pt-7">
//           <div className="text-sm text-slate-200/55 text-center">
//             © {currentYear} SavonDev. All rights reserved.
//           </div>
//         </div>
//       </PageContainer>
//     </footer>
//   );
// }

"use client";

import * as React from "react";
import { Mail, Phone, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

import { PageContainer } from "./Layout/PageContainer";
import { Link } from "@/i18n/navigation";

type FooterNavItem = {
  key:
    | "home"
    | "about"
    | "portfolio"
    | "process"
    | "pricing"
    | "reviews"
    | "contact";
  href: string;
};

type FooterLegalItem = {
  key:
    | "privacy"
    | "terms"
    | "cookies"
    | "accessibility"
    | "refunds"
    | "disclaimer"
    | "ai-policy";
  href: string;
};

const pages: FooterNavItem[] = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "portfolio", href: "/portfolio" },
  { key: "process", href: "/process" },
  { key: "pricing", href: "/pricing" },
  { key: "reviews", href: "/reviews" },
  { key: "contact", href: "/contact" },
  
];

const legal: FooterLegalItem[] = [
  { key: "privacy", href: "/privacy" },
  { key: "terms", href: "/terms" },
  { key: "cookies", href: "/cookies" },
  { key: "accessibility", href: "/accessibility" },
  { key: "refunds", href: "/refund" },
  { key: "disclaimer", href: "/disclaimer" },
  { key: "ai-policy", href: "/ai-policy" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  const t = useTranslations("footer");

  return (
    <footer
      className="relative overflow-hidden bg-[#020410] py-12 text-slate-100 md:py-16"
      aria-label={t("aria.footer")}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-25%] left-[-10%] h-[26rem] w-[26rem] rounded-full opacity-55 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(58,123,255,0.8), transparent 55%)",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.10]"
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
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xl">
            <Link
              href="/"
              aria-label={t("aria.homeLink")}
              className="group mb-5 inline-flex items-center gap-3"
            >
              <div
                aria-hidden="true"
                className="
                  relative h-9 w-9 rounded-xl
                  bg-linear-to-tr from-[#3A7BFF] via-[#4CC2FF] to-[#8B5CF6]
                  shadow-[0_0_30px_rgba(76,194,255,0.65)]
                  transition-transform duration-300
                  group-hover:rotate-6 group-hover:scale-105
                "
              >
                <span className="absolute inset-0.5 rounded-[0.65rem] bg-slate-950/80 backdrop-blur-md" />
                <span className="relative z-10 flex h-full w-full items-center justify-center text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-100/80">
                  SD
                </span>
              </div>

              <span className="text-2xl tracking-tight">
                <span className="text-slate-100">Savon</span>
                <span className="text-slate-300/80">Dev</span>
              </span>
            </Link>

            <p className="mb-5 text-base leading-relaxed text-slate-300/85 md:text-lg">
              {t("description")}
            </p>

            <address className="not-italic">
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:dsavontrumpet@gmail.com"
                  className="group inline-flex items-center gap-2 text-slate-100 opacity-90 transition-opacity hover:opacity-100"
                  aria-label={t("aria.emailLink")}
                >
                  <Mail
                    aria-hidden="true"
                    className="h-5 w-5 text-cyan-200/90"
                  />
                  <span>dsavontrumpet@gmail.com</span>
                  <ArrowRight
                    aria-hidden="true"
                    className="h-4 w-4 opacity-60 transition-transform group-hover:translate-x-1"
                  />
                </a>

                <a
                  href="tel:+972557720977"
                  className="group inline-flex items-center gap-2 text-slate-100/85 transition-colors hover:text-slate-100"
                  aria-label={t("aria.phoneLink")}
                >
                  <Phone
                    aria-hidden="true"
                    className="h-5 w-5 text-cyan-200/85"
                  />
                  <span>+972557720977</span>
                  <ArrowRight
                    aria-hidden="true"
                    className="h-4 w-4 opacity-60 transition-transform group-hover:translate-x-1"
                  />
                </a>
              </div>
            </address>
          </div>

          <div className="w-full md:max-w-[520px]">
            <h2 className="mb-4 text-xs uppercase tracking-[0.22em] text-slate-200/50">
              {t("sitemapTitle")}
            </h2>

            <nav aria-label={t("aria.footerNav")}>
              <ul className="flex flex-wrap gap-x-5 gap-y-3">
                {pages.map((p) => (
                  <li key={p.href}>
                    <Link
                      href={p.href}
                      className="text-slate-200/70 transition-colors hover:text-slate-100"
                    >
                      {t(`links.${p.key}`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label={t("aria.legalNav")} className="mt-6">
              <ul className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-200/55 md:text-sm">
                {legal.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="transition-colors hover:text-slate-100"
                    >
                      {t(`legal.${item.key}`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="mt-10 border-t border-cyan-200/10 pt-7">
          <p className="text-center text-sm text-slate-200/55">
            © {currentYear} SavonDev Studio. {t("copyright")}
          </p>
        </div>
      </PageContainer>
    </footer>
  );
}