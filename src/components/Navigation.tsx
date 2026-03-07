// "use client";

// import { useState, useEffect } from "react";
// import { Menu, X } from "lucide-react";
// import { Link, usePathname, useRouter } from "@/i18n/navigation";
// import { PageContainer } from "./Layout/PageContainer";
// import { LanguageSwitcher } from "@/src/components/LanguageSwitcher";
//     const NAV_OFFSET = 80;

// const navLinks = [
//   { label: "Home", href: "/", isPage: true, scrollTo: "#hero" },
//   { label: "About", href: "/about", isPage: true },
//   { label: "Services", href: "/services", isPage: true },
//   { label: "Portfolio", href: "/portfolio", isPage: true },
//   { label: "Process", href: "/process", isPage: true },
//   { label: "Pricing", href: "/pricing", isPage: true },
//   { label: "Reviews", href: "/reviews", isPage: true },
//   { label: "Contact", href: "/contact", isPage: true },
// ];

// export function Navigation() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const pathname = usePathname(); // ✅ locale-safe (без /en)
//   const router = useRouter();

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

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
//     <>
//       {/* NAVBAR */}
//       <nav
//         className={`
//           fixed top-0 left-0 right-0 z-50 transition-all duration-300
//           border-b
//           ${
//             isScrolled
//               ? "bg-[#050814]/95 border-slate-800/80 shadow-[0_10px_40px_rgba(15,23,42,0.85)] backdrop-blur-xl"
//               : "bg-linear-to-b from-[#050814]/90 via-[#050818]/40 to-transparent border-transparent backdrop-blur-md"
//           }
//         `}
//       >
//         <PageContainer className="max-w-[1200px]">
//           <div className="flex items-center justify-between h-20">
//             {/* LOGO */}
//             <Link
//               href="/"
//               onClick={(e) => {
//                 if (pathname === "/" && typeof window !== "undefined") {
//                   e.preventDefault();
//                   scrollToSection("#hero");
//                 } else {
//                   setIsMobileMenuOpen(false);
//                 }
//               }}
//               className="group flex items-center gap-3"
//             >
//               <div
//                 className="
//                   relative w-9 h-9 rounded-xl
//                   bg-linear-to-tr from-[#3A7BFF] via-[#4CC2FF] to-[#8B5CF6]
//                   shadow-[0_0_30px_rgba(76,194,255,0.65)]
//                   transition-transform duration-300
//                   group-hover:rotate-6 group-hover:scale-105
//                 "
//               >
//                 <span className="absolute inset-0.5 rounded-[0.65rem] bg-slate-950/80 backdrop-blur-md" />
//                 <span className="relative z-10 flex h-full w-full items-center justify-center text-[10px] font-semibold tracking-[0.16em] uppercase text-slate-100/80">
//                   SD
//                 </span>
//               </div>
//               <span className="text-sm md:text-base tracking-[0.22em] uppercase text-slate-200/90">
//                 SavonDev Studio
//               </span>
//             </Link>

//             {/* DESKTOP NAV */}
//             <div className="hidden lg:flex items-center gap-8">
//               {navLinks.map((link) => {
//                 const isActive =
//                   link.isPage &&
//                   link.href !== "/" &&
//                   pathname.startsWith(link.href);

//                 return (
//                   <Link
//                     key={link.label}
//                     href={link.href}
//                     onClick={(e) => {
//                       if (
//                         link.label === "Home" &&
//                         pathname === "/" &&
//                         link.scrollTo
//                       ) {
//                         e.preventDefault();
//                         scrollToSection(link.scrollTo);
//                       } else {
//                         setIsMobileMenuOpen(false);
//                       }
//                     }}
//                     className={`
//                       relative group
//                       text-[11px] tracking-[0.22em] uppercase
//                       transition-all duration-300
//                       ${
//                         isActive
//                           ? "text-cyan-200 opacity-100"
//                           : "text-slate-300/80 hover:text-cyan-200 hover:opacity-100"
//                       }
//                       hover:scale-[1.03]
//                       hover:drop-shadow-[0_0_12px_rgba(76,194,255,0.6)]
//                     `}
//                   >
//                     {link.label}
//                     <span
//                       className={`
//                         absolute -bottom-1 left-0 h-0.5 w-full rounded-full
//                         bg-linear-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#8B5CF6]
//                         transform transition-transform duration-500 ease-out
//                         shadow-[0_0_12px_rgba(76,194,255,0.7)]
//                         ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}
//                         origin-left
//                       `}
//                     />
//                   </Link>
//                 );
//               })}
//             </div>

//             {/* DESKTOP CTA */}
//             <div className="hidden lg:block">

//               <LanguageSwitcher />
//             </div>

//             {/* MOBILE TOGGLE */}
//             <button
//               className="lg:hidden p-2 transition-transform hover:scale-110 text-slate-100"
//               onClick={() => setIsMobileMenuOpen((prev) => !prev)}
//               aria-label="Toggle menu"
//             >
//               {isMobileMenuOpen ? (
//                 <X className="w-6 h-6" />
//               ) : (
//                 <Menu className="w-6 h-6" />
//               )}
//             </button>
//           </div>
//         </PageContainer>
//       </nav>

//       {/* MOBILE MENU OVERLAY */}
//       <div
//         className={`
//           fixed inset-0 z-40 lg:hidden transition-all duration-300
//           ${
//             isMobileMenuOpen
//               ? "opacity-100 pointer-events-auto"
//               : "opacity-0 pointer-events-none"
//           }
//         `}
//       >
//         {/* BACKDROP */}
//         <div
//           className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
//           onClick={() => setIsMobileMenuOpen(false)}
//         />

//         {/* SIDE PANEL */}
//         <div
//           className={`
//             absolute top-0 right-0 bottom-0 w-full max-w-xs
//             bg-[rgba(5,8,20,0.96)] backdrop-blur-2xl
//             border-l border-slate-800/80
//             shadow-[0_0_40px_rgba(15,23,42,0.9)]
//             transition-transform duration-300
//             ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
//           `}
//         >
//           <div className="pt-24 pb-10 px-8 space-y-6 text-slate-100">
//             {navLinks.map((link, i) => {
//               const delay = 0.1 + i * 0.08;

//               const baseClasses = `
//                 mobile-nav-link
//                 block text-xl font-medium tracking-wide
//                 text-slate-200/80
//                 transition-all
//                 hover:text-cyan-200
//                 hover:drop-shadow-[0_0_12px_rgba(76,194,255,0.55)]
//                 hover:scale-[1.02]
//               `;

//               const animateClass = isMobileMenuOpen
//                 ? "mobile-nav-link-animate"
//                 : "";

//               const animatedStyle = {
//                 animationDelay: `${delay}s`,
//               };

//               // PAGE link
//               if (link.isPage) {
//                 return (
//                   <Link
//                     key={link.label}
//                     href={link.href}
//                     onClick={(e) => {
//                       if (
//                         link.label === "Home" &&
//                         pathname === "/" &&
//                         link.scrollTo
//                       ) {
//                         e.preventDefault();
//                         scrollToSection(link.scrollTo);
//                       } else {
//                         setIsMobileMenuOpen(false);
//                       }
//                     }}
//                     className={`${baseClasses} ${animateClass}`}
//                     style={animatedStyle}
//                   >
//                     {link.label}
//                   </Link>
//                 );
//               }

//               // SCROLL link (Contact)
//               return (
//                 <button
//                   key={link.label}
//                   type="button"
//                   onClick={() => scrollToSection(link.href)}
//                   className={`${baseClasses} ${animateClass}`}
//                   style={animatedStyle}
//                 >
//                   {link.label}
//                 </button>
//               );
//             })}

//             <div className="pt-6 border-t border-slate-700/60">

//               <button
//                 type="button"
//                 onClick={() => scrollToSection("#contact")}
//                 className=" cursor-pointer
//     group relative block w-full overflow-hidden rounded-full
//     px-6 py-4
//     text-center text-sm font-semibold tracking-[0.18em] uppercase
//     text-[#050816]

//     shadow-[0_0_40px_rgba(76,194,255,0.55)]
//     hover:shadow-[0_0_65px_rgba(76,194,255,0.85)]
//     transition-shadow
//   "
//               >
//                 {/* Unified gradient palette */}
//                 <span className="absolute inset-0 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]" />

//                 {/* Unified hover highlight */}
//                 <span
//                   className="
//       pointer-events-none absolute inset-0 rounded-full
//       bg-white/10 opacity-0
//       group-hover:opacity-100 transition-opacity
//     "
//                   aria-hidden="true"
//                 />

//                 <span className="relative z-10">Get Started</span>
//               </button>
//             </div>
//           </div>

//           <div className="absolute bottom-8 left-8 w-20 h-0.5 bg-linear-to-r from-slate-600/40 via-slate-500/60 to-transparent" />
//         </div>
//       </div>
//     </>
//   );
// }

"use client";

import { useEffect, useId, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";

import { PageContainer } from "./Layout/PageContainer";
import { LanguageSwitcher } from "@/src/components/LanguageSwitcher";

const NAV_OFFSET = 80;

type NavLinkItem = {
  key:
    | "home"
    | "about"
    | "services"
    | "portfolio"
    | "process"
    | "pricing"
    | "reviews"
    | "contact";
  href: string;
  isPage: boolean;
  scrollTo?: string;
};

const navLinks: NavLinkItem[] = [
  { key: "home", href: "/", isPage: true, scrollTo: "#hero" },
  { key: "about", href: "/about", isPage: true },
  { key: "services", href: "/services", isPage: true },
  { key: "portfolio", href: "/portfolio", isPage: true },
  { key: "process", href: "/process", isPage: true },
  { key: "pricing", href: "/pricing", isPage: true },
  { key: "reviews", href: "/reviews", isPage: true },
  { key: "contact", href: "/contact", isPage: true },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("navigation");

  const mobileMenuId = useId();
  const isRTL = locale === "he";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

useEffect(() => {
  const handleScroll = () => setIsScrolled(window.scrollY > 50);
  handleScroll();
  window.addEventListener("scroll", handleScroll, { passive: true });
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

useEffect(() => {
  if (!isMobileMenuOpen) return;

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setIsMobileMenuOpen(false);
    }
  };

  document.addEventListener("keydown", handleKeyDown);
  return () => document.removeEventListener("keydown", handleKeyDown);
}, [isMobileMenuOpen]);

useEffect(() => {
  if (!isMobileMenuOpen) {
    document.body.style.overflow = "";
    return;
  }

  document.body.style.overflow = "hidden";

  return () => {
    document.body.style.overflow = "";
  };
}, [isMobileMenuOpen]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const scrollToSection = (selector: string) => {
    if (pathname !== "/") {
      router.push(`/${selector}`);
      closeMobileMenu();
      return;
    }

    const el = document.querySelector(selector);
    if (!el) return;

    const top =
      el.getBoundingClientRect().top + window.pageYOffset - NAV_OFFSET;

    window.scrollTo({ top, behavior: "smooth" });
    closeMobileMenu();
  };

  const handleLogoClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    if (pathname === "/") {
      e.preventDefault();
      scrollToSection("#hero");
      return;
    }

    closeMobileMenu();
  };

  const isLinkActive = (link: NavLinkItem) => {
    if (link.href === "/") return pathname === "/";
    return pathname === link.href || pathname.startsWith(`${link.href}/`);
  };

  return (
    <>
      <a
        href="#main-content"
        className="
          sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[120]
          rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-950
          shadow-lg
        "
      >
        {t("skipToContent")}
      </a>

      <nav
        aria-label={t("aria.primaryNav")}
        className={`
          fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300
          ${
            isScrolled
              ? "border-slate-800/80 bg-[#050814]/95 shadow-[0_10px_40px_rgba(15,23,42,0.85)] backdrop-blur-xl"
              : "border-transparent bg-linear-to-b from-[#050814]/90 via-[#050818]/40 to-transparent backdrop-blur-md"
          }
        `}
      >
        <PageContainer className="max-w-[1200px]">
          <div className="flex h-20 items-center justify-between">
            <Link
              href="/"
              onClick={handleLogoClick}
              aria-label={t("aria.logoHome")}
              className="group flex items-center gap-3"
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

              <span className="text-sm uppercase tracking-[0.22em] text-slate-200/90 md:text-base">
                SavonDev Studio
              </span>
            </Link>

            <div className="hidden items-center gap-8 lg:flex">
              {navLinks.map((link) => {
                const isActive = isLinkActive(link);

                return (
                  <Link
                    key={link.key}
                    href={link.href}
                    onClick={(e) => {
                      if (
                        link.key === "home" &&
                        pathname === "/" &&
                        link.scrollTo
                      ) {
                        e.preventDefault();
                        scrollToSection(link.scrollTo);
                      } else {
                        closeMobileMenu();
                      }
                    }}
                    aria-current={isActive ? "page" : undefined}
                    className={`
                      relative group text-[11px] uppercase tracking-[0.22em]
                      transition-all duration-300
                      ${
                        isActive
                          ? "text-cyan-200 opacity-100"
                          : "text-slate-300/80 hover:text-cyan-200 hover:opacity-100"
                      }
                      hover:scale-[1.03]
                      hover:drop-shadow-[0_0_12px_rgba(76,194,255,0.6)]
                    `}
                  >
                    {t(`links.${link.key}`)}

                    <span
                      aria-hidden="true"
                      className={`
                        absolute -bottom-1 left-0 h-0.5 w-full origin-left rounded-full
                        bg-linear-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#8B5CF6]
                        shadow-[0_0_12px_rgba(76,194,255,0.7)]
                        transition-transform duration-500 ease-out
                        ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}
                      `}
                    />
                  </Link>
                );
              })}
            </div>

            <div className="hidden lg:block">
              <LanguageSwitcher />
            </div>

            <button
              type="button"
              className="p-2 text-slate-100 transition-transform hover:scale-110 lg:hidden"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label={
                isMobileMenuOpen ? t("aria.closeMenu") : t("aria.openMenu")
              }
              aria-expanded={isMobileMenuOpen}
              aria-controls={mobileMenuId}
            >
              {isMobileMenuOpen ? (
                <X aria-hidden="true" className="h-6 w-6" />
              ) : (
                <Menu aria-hidden="true" className="h-6 w-6" />
              )}
            </button>
          </div>
        </PageContainer>
      </nav>

      <div
        className={`
          fixed inset-0 z-40 transition-all duration-300 lg:hidden
          ${
            isMobileMenuOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }
        `}
        aria-hidden={!isMobileMenuOpen}
      >
        <button
          type="button"
          aria-label={t("aria.closeMenu")}
          className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
          onClick={closeMobileMenu}
        />

        <div
          id={mobileMenuId}
          role="dialog"
          aria-modal="true"
          aria-label={t("aria.mobileMenu")}
          className={`
            absolute top-0 ${isRTL ? "left-0 border-r" : "right-0 border-l"} bottom-0 w-full max-w-xs
            border-slate-800/80 bg-[rgba(5,8,20,0.96)] backdrop-blur-2xl
            shadow-[0_0_40px_rgba(15,23,42,0.9)]
            transition-transform duration-300
            ${isMobileMenuOpen ? "translate-x-0" : isRTL ? "-translate-x-full" : "translate-x-full"}
          `}
        >
          <div className="space-y-6 px-8 pt-24 pb-10 text-slate-100">
            {navLinks.map((link, i) => {
              const delay = 0.1 + i * 0.08;
              const isActive = isLinkActive(link);

              const baseClasses = `
                mobile-nav-link block text-xl font-medium tracking-wide transition-all
                hover:drop-shadow-[0_0_12px_rgba(76,194,255,0.55)] hover:scale-[1.02]
                ${
                  isActive
                    ? "text-cyan-200"
                    : "text-slate-200/80 hover:text-cyan-200"
                }
              `;

              const animateClass = isMobileMenuOpen
                ? "mobile-nav-link-animate"
                : "";

              const animatedStyle = {
                animationDelay: `${delay}s`,
              };

              return (
                <Link
                  key={link.key}
                  href={link.href}
                  onClick={(e) => {
                    if (
                      link.key === "home" &&
                      pathname === "/" &&
                      link.scrollTo
                    ) {
                      e.preventDefault();
                      scrollToSection(link.scrollTo);
                    } else {
                      closeMobileMenu();
                    }
                  }}
                  aria-current={isActive ? "page" : undefined}
                  className={`${baseClasses} ${animateClass}`}
                  style={animatedStyle}
                >
                  {t(`links.${link.key}`)}
                </Link>
              );
            })}

            <div className="border-slate-700/60 pt-6 border-t">
              <div className="mb-5">
                <LanguageSwitcher />
              </div>

              <button
                type="button"
                onClick={() => scrollToSection("#contact")}
                className="
                  group relative block w-full cursor-pointer overflow-hidden rounded-full
                  px-6 py-4 text-center text-sm font-semibold uppercase tracking-[0.18em]
                  text-[#050816]
                  shadow-[0_0_40px_rgba(76,194,255,0.55)]
                  transition-shadow hover:shadow-[0_0_65px_rgba(76,194,255,0.85)]
                "
                aria-label={t("cta")}
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]"
                />

                <span
                  aria-hidden="true"
                  className="
                    pointer-events-none absolute inset-0 rounded-full
                    bg-white/10 opacity-0 transition-opacity group-hover:opacity-100
                  "
                />

                <span className="relative z-10">{t("cta")}</span>
              </button>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="absolute bottom-8 left-8 h-0.5 w-20 bg-linear-to-r from-slate-600/40 via-slate-500/60 to-transparent"
          />
        </div>
      </div>
    </>
  );
}