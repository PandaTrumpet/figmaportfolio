// "use client";

// import { useEffect, useId, useState } from "react";
// import { Menu, X } from "lucide-react";
// import { Link, usePathname, useRouter } from "@/i18n/navigation";
// import { useLocale, useTranslations } from "next-intl";

// import { PageContainer } from "./Layout/PageContainer";
// import { LanguageSwitcher } from "@/src/components/LanguageSwitcher";

// const NAV_OFFSET = 80;

// type NavLinkItem = {
//   key:
//     | "home"
//     | "about"
//     | "services"
//     | "portfolio"
//     | "process"
//     | "pricing"
//     | "reviews"
//     | "contact";
//   href: string;
//   isPage: boolean;
//   scrollTo?: string;
// };

// const navLinks: NavLinkItem[] = [
//   { key: "home", href: "/", isPage: true, scrollTo: "#hero" },
//   { key: "about", href: "/about", isPage: true },
//   { key: "services", href: "/services", isPage: true },
//   { key: "portfolio", href: "/portfolio", isPage: true },
//   { key: "process", href: "/process", isPage: true },
//   { key: "pricing", href: "/pricing", isPage: true },
//   { key: "reviews", href: "/reviews", isPage: true },
//   { key: "contact", href: "/contact", isPage: true },
// ];

// export function Navigation() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const pathname = usePathname();
//   const router = useRouter();
//   const locale = useLocale();
//   const t = useTranslations("navigation");

//   const mobileMenuId = useId();
//   const isRTL = locale === "he";

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 50);
//     handleScroll();
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     if (!isMobileMenuOpen) return;

//     const handleKeyDown = (event: KeyboardEvent) => {
//       if (event.key === "Escape") {
//         setIsMobileMenuOpen(false);
//       }
//     };

//     document.addEventListener("keydown", handleKeyDown);
//     return () => document.removeEventListener("keydown", handleKeyDown);
//   }, [isMobileMenuOpen]);

//   useEffect(() => {
//     if (!isMobileMenuOpen) {
//       document.body.style.overflow = "";
//       return;
//     }

//     document.body.style.overflow = "hidden";

//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [isMobileMenuOpen]);

// useEffect(() => {
//   const handleScroll = () => setIsScrolled(window.scrollY > 50);
//   handleScroll();
//   window.addEventListener("scroll", handleScroll, { passive: true });
//   return () => window.removeEventListener("scroll", handleScroll);
// }, []);

// useEffect(() => {
//   if (!isMobileMenuOpen) return;

//   const handleKeyDown = (event: KeyboardEvent) => {
//     if (event.key === "Escape") {
//       setIsMobileMenuOpen(false);
//     }
//   };

//   document.addEventListener("keydown", handleKeyDown);
//   return () => document.removeEventListener("keydown", handleKeyDown);
// }, [isMobileMenuOpen]);

// useEffect(() => {
//   if (!isMobileMenuOpen) {
//     document.body.style.overflow = "";
//     return;
//   }

//   document.body.style.overflow = "hidden";

//   return () => {
//     document.body.style.overflow = "";
//   };
// }, [isMobileMenuOpen]);

//   const closeMobileMenu = () => setIsMobileMenuOpen(false);

//   const scrollToSection = (selector: string) => {
//     if (pathname !== "/") {
//       router.push(`/${selector}`);
//       closeMobileMenu();
//       return;
//     }

//     const el = document.querySelector(selector);
//     if (!el) return;

//     const top =
//       el.getBoundingClientRect().top + window.pageYOffset - NAV_OFFSET;

//     window.scrollTo({ top, behavior: "smooth" });
//     closeMobileMenu();
//   };

//   const handleLogoClick = (
//     e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
//   ) => {
//     if (pathname === "/") {
//       e.preventDefault();
//       scrollToSection("#hero");
//       return;
//     }

//     closeMobileMenu();
//   };

//   const isLinkActive = (link: NavLinkItem) => {
//     if (link.href === "/") return pathname === "/";
//     return pathname === link.href || pathname.startsWith(`${link.href}/`);
//   };

//   return (
//     <>
//       <a
//         href="#main-content"
//         className="
//           sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[120]
//           rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-950
//           shadow-lg
//         "
//       >
//         {t("skipToContent")}
//       </a>

//       <nav
//         aria-label={t("aria.primaryNav")}
//         className={`
//           fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300
//           ${
//             isScrolled
//               ? "border-slate-800/80 bg-[#050814]/95 shadow-[0_10px_40px_rgba(15,23,42,0.85)] backdrop-blur-xl"
//               : "border-transparent bg-linear-to-b from-[#050814]/90 via-[#050818]/40 to-transparent backdrop-blur-md"
//           }
//         `}
//       >
//         <PageContainer className="max-w-[1200px]">
//           <div className="flex h-20 items-center justify-between">
//             <Link
//               href="/"
//               onClick={handleLogoClick}
//               aria-label={t("aria.logoHome")}
//               className="group flex items-center gap-3"
//             >
//               <div
//                 aria-hidden="true"
//                 className="
//                   relative h-9 w-9 rounded-xl
//                   bg-linear-to-tr from-[#3A7BFF] via-[#4CC2FF] to-[#8B5CF6]
//                   shadow-[0_0_30px_rgba(76,194,255,0.65)]
//                   transition-transform duration-300
//                   group-hover:rotate-6 group-hover:scale-105
//                 "
//               >
//                 <span className="absolute inset-0.5 rounded-[0.65rem] bg-slate-950/80 backdrop-blur-md" />
//                 <span className="relative z-10 flex h-full w-full items-center justify-center text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-100/80">
//                   SD
//                 </span>
//               </div>

//               <span className="text-sm uppercase tracking-[0.22em] text-slate-200/90 md:text-base">
//                 SavonDev Studio
//               </span>
//             </Link>

//             <div className="hidden items-center gap-8 lg:flex">
//               {navLinks.map((link) => {
//                 const isActive = isLinkActive(link);

//                 return (
//                   <Link
//                     key={link.key}
//                     href={link.href}
//                     onClick={(e) => {
//                       if (
//                         link.key === "home" &&
//                         pathname === "/" &&
//                         link.scrollTo
//                       ) {
//                         e.preventDefault();
//                         scrollToSection(link.scrollTo);
//                       } else {
//                         closeMobileMenu();
//                       }
//                     }}
//                     aria-current={isActive ? "page" : undefined}
//                     className={`
//                       relative group text-[11px] uppercase tracking-[0.22em]
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
//                     {t(`links.${link.key}`)}

//                     <span
//                       aria-hidden="true"
//                       className={`
//                         absolute -bottom-1 left-0 h-0.5 w-full origin-left rounded-full
//                         bg-linear-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#8B5CF6]
//                         shadow-[0_0_12px_rgba(76,194,255,0.7)]
//                         transition-transform duration-500 ease-out
//                         ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}
//                       `}
//                     />
//                   </Link>
//                 );
//               })}
//             </div>

//             <div className="hidden lg:block">
//               <LanguageSwitcher />
//             </div>

//             <button
//               type="button"
//               className="p-2 text-slate-100 transition-transform hover:scale-110 lg:hidden"
//               onClick={() => setIsMobileMenuOpen((prev) => !prev)}
//               aria-label={
//                 isMobileMenuOpen ? t("aria.closeMenu") : t("aria.openMenu")
//               }
//               aria-expanded={isMobileMenuOpen}
//               aria-controls={mobileMenuId}
//             >
//               {isMobileMenuOpen ? (
//                 <X aria-hidden="true" className="h-6 w-6" />
//               ) : (
//                 <Menu aria-hidden="true" className="h-6 w-6" />
//               )}
//             </button>
//           </div>
//         </PageContainer>
//       </nav>

//       <div
//         className={`
//           fixed inset-0 z-40 transition-all duration-300 lg:hidden
//           ${
//             isMobileMenuOpen
//               ? "pointer-events-auto opacity-100"
//               : "pointer-events-none opacity-0"
//           }
//         `}
//         aria-hidden={!isMobileMenuOpen}
//       >
//         <button
//           type="button"
//           aria-label={t("aria.closeMenu")}
//           className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
//           onClick={closeMobileMenu}
//         />

//         <div
//           id={mobileMenuId}
//           role="dialog"
//           aria-modal="true"
//           aria-label={t("aria.mobileMenu")}
//           className={`
//             absolute top-0 ${isRTL ? "left-0 border-r" : "right-0 border-l"} bottom-0 w-full max-w-xs
//             border-slate-800/80 bg-[rgba(5,8,20,0.96)] backdrop-blur-2xl
//             shadow-[0_0_40px_rgba(15,23,42,0.9)]
//             transition-transform duration-300
//             ${isMobileMenuOpen ? "translate-x-0" : isRTL ? "-translate-x-full" : "translate-x-full"}
//           `}
//         >
//           <div className="space-y-6 px-8 pt-24 pb-10 text-slate-100">
//             {navLinks.map((link, i) => {
//               const delay = 0.1 + i * 0.08;
//               const isActive = isLinkActive(link);

//               const baseClasses = `
//                 mobile-nav-link block text-xl font-medium tracking-wide transition-all
//                 hover:drop-shadow-[0_0_12px_rgba(76,194,255,0.55)] hover:scale-[1.02]
//                 ${
//                   isActive
//                     ? "text-cyan-200"
//                     : "text-slate-200/80 hover:text-cyan-200"
//                 }
//               `;

//               const animateClass = isMobileMenuOpen
//                 ? "mobile-nav-link-animate"
//                 : "";

//               const animatedStyle = {
//                 animationDelay: `${delay}s`,
//               };

//               return (
//                 <Link
//                   key={link.key}
//                   href={link.href}
//                   onClick={(e) => {
//                     if (
//                       link.key === "home" &&
//                       pathname === "/" &&
//                       link.scrollTo
//                     ) {
//                       e.preventDefault();
//                       scrollToSection(link.scrollTo);
//                     } else {
//                       closeMobileMenu();
//                     }
//                   }}
//                   aria-current={isActive ? "page" : undefined}
//                   className={`${baseClasses} ${animateClass}`}
//                   style={animatedStyle}
//                 >
//                   {t(`links.${link.key}`)}
//                 </Link>
//               );
//             })}

//             <div className="border-slate-700/60 pt-6 border-t">
//               <div className="mb-5">
//                 <LanguageSwitcher />
//               </div>

//               <button
//                 type="button"
//                 onClick={() => scrollToSection("#contact")}
//                 className="
//                   group relative block w-full cursor-pointer overflow-hidden rounded-full
//                   px-6 py-4 text-center text-sm font-semibold uppercase tracking-[0.18em]
//                   text-[#050816]
//                   shadow-[0_0_40px_rgba(76,194,255,0.55)]
//                   transition-shadow hover:shadow-[0_0_65px_rgba(76,194,255,0.85)]
//                 "
//                 aria-label={t("cta")}
//               >
//                 <span
//                   aria-hidden="true"
//                   className="absolute inset-0 bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#9B5DFF]"
//                 />

//                 <span
//                   aria-hidden="true"
//                   className="
//                     pointer-events-none absolute inset-0 rounded-full
//                     bg-white/10 opacity-0 transition-opacity group-hover:opacity-100
//                   "
//                 />

//                 <span className="relative z-10">{t("cta")}</span>
//               </button>
//             </div>
//           </div>

//           <div
//             aria-hidden="true"
//             className="absolute bottom-8 left-8 h-0.5 w-20 bg-linear-to-r from-slate-600/40 via-slate-500/60 to-transparent"
//           />
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
        <PageContainer className="max-w-[1320px]">
          <div className="flex h-20 items-center justify-between gap-4 xl:gap-6">
            <Link
              href="/"
              onClick={handleLogoClick}
              aria-label={t("aria.logoHome")}
              className="group flex shrink-0 items-center gap-3"
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

              <span className="text-xs uppercase tracking-[0.16em] text-slate-200/90 sm:text-sm xl:text-[15px]">
                SavonDev Studio
              </span>
            </Link>


            <div className="hidden xl:grid xl:flex-1 xl:grid-cols-[1fr_auto_1fr] xl:items-center">
              <div />

              <div className="flex items-center justify-center gap-4 2xl:gap-6">
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
            relative group whitespace-nowrap
            text-[10px] 2xl:text-[11px]
            uppercase tracking-[0.14em] 2xl:tracking-[0.18em]
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

              <div className="flex justify-end">
                <LanguageSwitcher />
              </div>
            </div>
            <button
              type="button"
              className="p-2 text-slate-100 transition-transform hover:scale-110 xl:hidden"
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
          fixed inset-0 z-40 transition-all duration-300 xl:hidden
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