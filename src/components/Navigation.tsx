

"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PageContainer } from "./Layout/PageContainer";

const NAV_OFFSET = 80;

const navLinks = [
  { label: "Home", href: "/", isPage: true, scrollTo: "#hero" },
  { label: "About", href: "/about", isPage: true },
  { label: "Services", href: "/services", isPage: true },
  { label: "Portfolio", href: "/portfolio", isPage: true },
  { label: "Process", href: "/process", isPage: true },
  { label: "Pricing", href: "/pricing", isPage: true },
  { label: "Reviews", href: "/reviews", isPage: true },
  { label: "Contact", href: "/contact", isPage: true },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const rawPathname = usePathname();
  const pathname = rawPathname ?? "/"; // ✅ всегда строка
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (selector: string) => {
    const el = document.querySelector(selector);
    if (!el) return;

    const top =
      el.getBoundingClientRect().top + window.pageYOffset - NAV_OFFSET;

    window.scrollTo({ top, behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-300
          border-b
          ${
            isScrolled
              ? "bg-[#050814]/95 border-slate-800/80 shadow-[0_10px_40px_rgba(15,23,42,0.85)] backdrop-blur-xl"
              : "bg-linear-to-b from-[#050814]/90 via-[#050818]/40 to-transparent border-transparent backdrop-blur-md"
          }
        `}
      >
        <PageContainer className="max-w-[1200px]">
          <div className="flex items-center justify-between h-20">
            {/* LOGO */}
            <Link
              href="/"
              onClick={(e) => {
                if (pathname === "/" && typeof window !== "undefined") {
                  e.preventDefault();
                  scrollToSection("#hero");
                } else {
                  setIsMobileMenuOpen(false);
                }
              }}
              className="group flex items-center gap-3"
            >
              <div
                className="
                  relative w-9 h-9 rounded-xl
                  bg-linear-to-tr from-[#3A7BFF] via-[#4CC2FF] to-[#8B5CF6]
                  shadow-[0_0_30px_rgba(76,194,255,0.65)]
                  transition-transform duration-300
                  group-hover:rotate-6 group-hover:scale-105
                "
              >
                <span className="absolute inset-0.5 rounded-[0.65rem] bg-slate-950/80 backdrop-blur-md" />
                <span className="relative z-10 flex h-full w-full items-center justify-center text-[10px] font-semibold tracking-[0.16em] uppercase text-slate-100/80">
                  SD
                </span>
              </div>
              <span className="text-sm md:text-base tracking-[0.22em] uppercase text-slate-200/90">
                SavonDev Studio
              </span>
            </Link>

            {/* DESKTOP NAV */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive =
                  link.isPage &&
                  link.href !== "/" &&
                  pathname.startsWith(link.href);

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={(e) => {
                      if (
                        link.label === "Home" &&
                        pathname === "/" &&
                        link.scrollTo
                      ) {
                        e.preventDefault();
                        scrollToSection(link.scrollTo);
                      } else {
                        setIsMobileMenuOpen(false);
                      }
                    }}
                    className={`
                      relative group
                      text-[11px] tracking-[0.22em] uppercase
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
                    {link.label}
                    <span
                      className={`
                        absolute -bottom-1 left-0 h-0.5 w-full rounded-full
                        bg-linear-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#8B5CF6]
                        transform transition-transform duration-500 ease-out
                        shadow-[0_0_12px_rgba(76,194,255,0.7)]
                        ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}
                        origin-left
                      `}
                    />
                  </Link>
                );
              })}
            </div>

            {/* DESKTOP CTA */}
            <div className="hidden lg:block">
              <button
                type="button"
                onClick={() => scrollToSection("#contact")}
                className="
                  relative inline-flex items-center rounded-full px-6 py-3
                  text-[11px] font-semibold tracking-[0.22em] uppercase
                  bg-linear-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#63E5FF]
                  text-slate-950
                  shadow-[0_0_40px_rgba(76,194,255,0.7)]
                  hover:shadow-[0_0_60px_rgba(76,194,255,0.9)]
                  transition-transform duration-200 hover:scale-[1.03]
                "
              >
                <span className="relative z-10">Get Started</span>
              </button>
            </div>

            {/* MOBILE TOGGLE */}
            <button
              className="lg:hidden p-2 transition-transform hover:scale-110 text-slate-100"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </PageContainer>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`
          fixed inset-0 z-40 lg:hidden transition-all duration-300
          ${
            isMobileMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        `}
      >
        {/* BACKDROP */}
        <div
          className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* SIDE PANEL */}
        <div
          className={`
            absolute top-0 right-0 bottom-0 w-full max-w-xs
            bg-[rgba(5,8,20,0.96)] backdrop-blur-2xl
            border-l border-slate-800/80
            shadow-[0_0_40px_rgba(15,23,42,0.9)]
            transition-transform duration-300
            ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
          `}
        >
          {/* <div className="pt-24 pb-10 px-8 space-y-6 text-slate-100">
            {navLinks.map((link, i) => {
              const delay = 0.1 + i * 0.08;

              const baseClasses = `
                mobile-nav-link
                block text-xl font-medium tracking-wide
                text-slate-200/80
                transition-all
                hover:text-cyan-200 
                hover:drop-shadow-[0_0_12px_rgba(76,194,255,0.55)]
                hover:scale-[1.02]
              `;

              const animatedStyle: React.CSSProperties = {
                animationName: isMobileMenuOpen ? "neon-glitch-in" : "none",
                animationDelay: `${delay}s`,
              };

              if (link.isPage) {
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={(e) => {
                      if (
                        link.label === "Home" &&
                        pathname === "/" &&
                        link.scrollTo
                      ) {
                        e.preventDefault();
                        scrollToSection(link.scrollTo);
                      } else {
                        setIsMobileMenuOpen(false);
                      }
                    }}
                    className={baseClasses}
                    style={animatedStyle}
                  >
                    {link.label}
                  </Link>
                );
              }

              return (
                <button
                  key={link.label}
                  type="button"
                  onClick={() => scrollToSection(link.href)}
                  className={baseClasses}
                  style={animatedStyle}
                >
                  {link.label}
                </button>
              );
            })}

            <div className="pt-6 border-t border-slate-700/60">
              <button
                type="button"
                onClick={() => scrollToSection("#contact")}
                className="
                  block w-full rounded-full px-6 py-4 text-center text-sm font-semibold tracking-[0.18em] uppercase
                  bg-gradient-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#63E5FF]
                  text-slate-950
                  shadow-[0_0_30px_rgba(76,194,255,0.8)]
                  hover:shadow-[0_0_45px_rgba(76,194,255,0.95)]
                  transition-transform duration-150 hover:scale-[1.02]
                "
              >
                Get Started
              </button>
            </div>
          </div> */}
          <div className="pt-24 pb-10 px-8 space-y-6 text-slate-100">
            {navLinks.map((link, i) => {
              const delay = 0.1 + i * 0.08;

              const baseClasses = `
                mobile-nav-link
                block text-xl font-medium tracking-wide
                text-slate-200/80
                transition-all
                hover:text-cyan-200 
                hover:drop-shadow-[0_0_12px_rgba(76,194,255,0.55)]
                hover:scale-[1.02]
              `;

              const animateClass = isMobileMenuOpen
                ? "mobile-nav-link-animate"
                : "";

              const animatedStyle = {
                animationDelay: `${delay}s`,
              };

              // PAGE link
              if (link.isPage) {
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={(e) => {
                      if (
                        link.label === "Home" &&
                        pathname === "/" &&
                        link.scrollTo
                      ) {
                        e.preventDefault();
                        scrollToSection(link.scrollTo);
                      } else {
                        setIsMobileMenuOpen(false);
                      }
                    }}
                    className={`${baseClasses} ${animateClass}`}
                    style={animatedStyle}
                  >
                    {link.label}
                  </Link>
                );
              }

              // SCROLL link (Contact)
              return (
                <button
                  key={link.label}
                  type="button"
                  onClick={() => scrollToSection(link.href)}
                  className={`${baseClasses} ${animateClass}`}
                  style={animatedStyle}
                >
                  {link.label}
                </button>
              );
            })}

            <div className="pt-6 border-t border-slate-700/60">
              <button
                type="button"
                onClick={() => scrollToSection("#contact")}
                className="
                  block w-full rounded-full px-6 py-4 text-center text-sm font-semibold tracking-[0.18em] uppercase
                 bg-linear-to-r from-[#3A7BFF] via-[#4CC2FF] to-[#63E5FF]
                  text-slate-950
                  shadow-[0_0_30px_rgba(76,194,255,0.8)]
                  hover:shadow-[0_0_45px_rgba(76,194,255,0.95)]
                  transition-transform duration-150 hover:scale-[1.02]
                "
              >
                Get Started
              </button>
            </div>
          </div>

          <div className="absolute bottom-8 left-8 w-20 h-0.5 bg-linear-to-r from-slate-600/40 via-slate-500/60 to-transparent" />
        </div>
      </div>
    </>
  );
}
