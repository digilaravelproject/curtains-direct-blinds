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
        isScrolled ? "shadow-xs border-b border-gray-100 py-2.5" : "py-3 border-b border-gray-100"
      }`}
      aria-label="Main Navigation"
    >
      <div className="max-w-[1500px] mx-auto px-8 flex items-center justify-between">
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

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="inline-flex items-center gap-2 bg-pink-50 hover:bg-pink-100 text-[#EB4D98] border border-pink-200/90 px-4 py-2.5 rounded-lg font-bold text-sm transition-all hover:scale-[1.02] active:scale-[0.98] shadow-2xs"
            aria-label={`Call ${siteConfig.phone}`}
          >
            <Phone className="w-4 h-4 fill-[#EB4D98]/20 text-[#EB4D98]" />
            <span className="font-bold">{siteConfig.phone}</span>
          </a>

          <a
            href="#quote-form"
            className="inline-flex items-center gap-2 bg-[#EB4D98] hover:bg-[#d83784] text-white px-5 py-2.5 rounded-lg font-bold text-sm shadow-xs hover:shadow-md transition-all active:scale-[0.98]"
          >
            <span>Request a Quote</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Header: Exact screenshot match: [ ☰ ] [ Call Now ] */}
        <div className="flex lg:hidden items-center gap-2 sm:gap-2.5">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 sm:p-2.5 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg text-gray-800 transition-colors cursor-pointer"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-gray-800" /> : <Menu className="w-5 h-5 text-gray-800" />}
          </button>

          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="inline-flex items-center justify-center bg-[#EB4D98] hover:bg-[#d83784] text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg font-bold text-xs sm:text-sm tracking-wide shadow-sm active:scale-95 transition-all"
            aria-label={`Call ${siteConfig.phone}`}
          >
            Call Now
          </a>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-white border-b border-gray-200 shadow-xl px-8 pt-4 pb-6 transition-all animate-in fade-in slide-in-from-top-2">
          <div className="flex flex-col gap-2.5">
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

            <div className="pt-3 mt-2 border-t border-gray-100 flex flex-col gap-2.5">
              <a
                href="#quote-form"
                onClick={handleLinkClick}
                className="flex items-center justify-center gap-2 w-full bg-[#EB4D98] hover:bg-[#d83784] text-white py-2.5 rounded-full font-semibold text-sm shadow-sm"
              >
                <span>Request a Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="flex items-center justify-center gap-2 w-full border border-gray-200 hover:border-pink-300 py-2 rounded-full font-semibold text-sm text-gray-700"
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
