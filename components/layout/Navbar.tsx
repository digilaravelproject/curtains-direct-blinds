"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Menu, X, ArrowRight, Phone } from "lucide-react";
import { siteConfig } from "@/lib/config";

const navItems = [
  { label: "Curtains", href: "#curtains" },
  { label: "Blinds", href: "#blinds" },
  { label: "Motorised Blinds", href: "#motorised-blinds" },
  { label: "Recent Work", href: "#recent-work" },
  { label: "Why Choose Us", href: "#why-choose-us" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact Us", href: "#contact" },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`sticky top-0 z-40 w-full transition-all duration-200 bg-white/95 backdrop-blur-md ${
        isScrolled ? "shadow-sm border-b border-gray-100 py-3" : "py-4 border-b border-gray-100"
      }`}
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-7 text-[15px] font-medium text-gray-700">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-[#EB4D98] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#EB4D98] hover:after:w-full after:transition-all"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#quote-form"
            className="inline-flex items-center gap-2 bg-[#EB4D98] hover:bg-[#d83784] text-white px-5 py-2.5 rounded-full font-semibold text-sm shadow-sm hover:shadow-md transition-all active:scale-[0.98]"
          >
            <span>Request a Quote</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-gray-700 hover:text-[#EB4D98] hover:bg-pink-50 rounded-lg transition-colors"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-white border-b border-gray-200 shadow-xl px-5 pt-4 pb-6 transition-all animate-in fade-in slide-in-from-top-2">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={handleLinkClick}
                className="text-base font-medium text-gray-800 hover:text-[#EB4D98] hover:bg-pink-50/70 px-3 py-2 rounded-lg transition-colors"
              >
                {item.label}
              </a>
            ))}

            <div className="pt-4 mt-2 border-t border-gray-100 flex flex-col gap-3">
              <a
                href="#quote-form"
                onClick={handleLinkClick}
                className="flex items-center justify-center gap-2 w-full bg-[#EB4D98] hover:bg-[#d83784] text-white py-3 rounded-full font-semibold text-sm shadow-sm"
              >
                <span>Request a Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="flex items-center justify-center gap-2 w-full border border-gray-200 hover:border-pink-300 py-2.5 rounded-full font-semibold text-sm text-gray-700"
              >
                <Phone className="w-4 h-4 text-[#EB4D98]" />
                <span>Call {siteConfig.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
