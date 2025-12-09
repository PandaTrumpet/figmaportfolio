
"use client";
import { ArrowUpRight } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: 'Brand Strategy', href: 'services', isPage: true },
      { label: 'Web Design', href: 'services', isPage: true },
      { label: 'Development', href: 'services', isPage: true },
      { label: 'Digital Products', href: 'services', isPage: true },
    ],
    company: [
      { label: 'About', href: '#' },
      { label: 'Process', href: '#process' },
      { label: 'Case Studies', href: '#cases' },
      { label: 'Contact', href: '#contact' },
    ],
    social: [
      { label: 'Instagram', href: '#' },
      { label: 'LinkedIn', href: '#' },
      { label: 'Behance', href: '#' },
      { label: 'Dribbble', href: '#' },
    ],
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isPage?: boolean) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      
      if (isPage) {
        // Navigate to a different page
        if ((window as any).navigateTo) {
          (window as any).navigateTo(href.replace('#', ''));
        }
      } else {
        // Scroll to section
        const element = document.querySelector(href);
        if (element) {
          const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth',
          });
        }
      }
    }
  };

  return (
    <footer className="bg-[#050608] text-[#F5EFE7] px-6 md:px-12 lg:px-20 py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-12 gap-12 md:gap-16 mb-16 md:mb-24">
          {/* Brand Column */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-[#F5EFE7]" />
              <span className="text-2xl tracking-tight">STUDIO</span>
            </div>
            <p className="text-lg opacity-70 leading-relaxed mb-8 max-w-md">
              We craft digital experiences for Israeli businesses who refuse to blend in. 
              Strategy first, pixels second.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:hello@studio.com"
                className="text-lg block group transition-opacity hover:opacity-70"
              >
                hello@studio.com
                <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href="tel:+972501234567"
                className="opacity-70 block hover:opacity-100 transition-opacity"
              >
                +972 50-123-4567
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-12">
            {/* Services */}
            <div>
              <h3 className="text-sm uppercase tracking-wider opacity-50 mb-6">
                Services
              </h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href, link.isPage)}
                      className="opacity-70 hover:opacity-100 transition-opacity inline-block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-sm uppercase tracking-wider opacity-50 mb-6">
                Company
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="opacity-70 hover:opacity-100 transition-opacity inline-block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-sm uppercase tracking-wider opacity-50 mb-6">
                Social
              </h3>
              <ul className="space-y-3">
                {footerLinks.social.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="opacity-70 hover:opacity-100 transition-opacity inline-flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-50 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-[#F5EFE7] border-opacity-20 pt-12 mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl mb-3">
                Stay in the Loop
              </h3>
              <p className="opacity-70">
                Insights on design, strategy, and building better digital products.
              </p>
            </div>
            <div>
              <form className="flex gap-3" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-6 py-4 bg-[#F5EFE7] text-[#050608] placeholder:text-[#050608] placeholder:opacity-50 outline-none focus:ring-2 focus:ring-[#F5EFE7]"
                  aria-label="Email address"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-[#F5EFE7] text-[#050608] transition-all hover:scale-[1.02] whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#F5EFE7] border-opacity-20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap gap-6 text-sm opacity-50">
              <a href="#" className="hover:opacity-100 transition-opacity">
                Privacy Policy
              </a>
              <a href="#" className="hover:opacity-100 transition-opacity">
                Terms of Service
              </a>
              <a href="#" className="hover:opacity-100 transition-opacity">
                Accessibility
              </a>
            </div>
            <div className="text-sm opacity-50">
              © {currentYear} STUDIO. All rights reserved.
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="mt-16 flex gap-4 opacity-20">
          <div className="w-16 h-[2px] bg-[#F5EFE7]" />
          <div className="w-8 h-[2px] bg-[#F5EFE7]" />
          <div className="w-4 h-[2px] bg-[#F5EFE7]" />
        </div>
      </div>
    </footer>
  );
}