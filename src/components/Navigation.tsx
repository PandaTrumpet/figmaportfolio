"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "about", isPage: true },
  { label: "Services", href: "services", isPage: true },
  { label: "Portfolio", href: "portfolio", isPage: true },
  { label: "Process", href: "process", isPage: true },
  { label: "Pricing", href: "pricing", isPage: true },
  { label: "Reviews", href: "reviews", isPage: true },
  { label: "Contact", href: "contact", isPage: true },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    isPage?: boolean
  ) => {
    e.preventDefault();

    if (isPage) {
      // Navigate to a different page
      if ((window as any).navigateTo) {
        (window as any).navigateTo(href);
      }
    } else {
      // Scroll to section
      const element = document.querySelector(href);
      if (element) {
        const offsetTop =
          element.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#F5EFE7] shadow-[0_4px_20px_rgba(5,6,8,0.1)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, "home", true)}
              className="group flex items-center gap-2"
            >
              <div className="w-8 h-8 bg-[#050608] transition-transform group-hover:rotate-45" />
              <span className="text-xl tracking-tight">STUDIO</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.isPage ? `#${link.href}` : link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.isPage)}
                  className="text-sm uppercase tracking-wider opacity-70 hover:opacity-100 transition-opacity relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#050608] transition-all group-hover:w-full" />
                </a>
              ))}

              {/* Case Study Link */}
              <a
                href="#case-study-premium"
                onClick={(e) => handleNavClick(e, "case-study-premium", true)}
                className="text-sm uppercase tracking-wider opacity-70 hover:opacity-100 transition-opacity relative group"
              >
                Premium Case
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#050608] transition-all group-hover:w-full" />
              </a>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="px-6 py-3 bg-[#050608] text-[#F5EFE7] transition-all hover:scale-[1.02] inline-block"
              >
                Get Started
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 transition-transform hover:scale-110"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-[#050608] bg-opacity-50"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`absolute top-20 right-0 bottom-0 w-full max-w-sm bg-[#F5EFE7] transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-8 space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.isPage ? `#${link.href}` : link.href}
                onClick={(e) => handleNavClick(e, link.href, link.isPage)}
                className="block text-2xl opacity-70 hover:opacity-100 transition-opacity"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-6 border-t-2 border-[#050608] border-opacity-10">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="block w-full px-6 py-4 bg-[#050608] text-[#F5EFE7] text-center transition-all hover:scale-[1.02]"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Decorative element */}
          <div className="absolute bottom-8 left-8 w-16 h-[2px] bg-[#050608] opacity-20" />
        </div>
      </div>
    </>
  );
}
