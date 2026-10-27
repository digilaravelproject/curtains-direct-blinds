"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { siteConfig } from "@/lib/config";

export const Footer: React.FC = () => {
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-gray-950 text-gray-400 py-12 border-t border-gray-900 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          {/* Logo on dark background */}
          <Logo variant="light" />

          {/* Links & Suburbs */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-6 gap-y-2 text-xs sm:text-sm">
            <span className="text-gray-300 font-medium">
              Proudly Servicing Melbourne &amp; Surrounding Suburbs
            </span>
            <span className="text-gray-700 hidden sm:inline">|</span>
            <Link href="/privacy" className="hover:text-[#EB4D98] transition-colors">
              Privacy Policy
            </Link>
            <span className="text-gray-700 hidden sm:inline">|</span>
            <Link href="/terms" className="hover:text-[#EB4D98] transition-colors">
              Terms
            </Link>
            <span className="text-gray-700 hidden sm:inline">|</span>
            <a href="#contact" className="hover:text-[#EB4D98] transition-colors">
              Contact Us
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-900 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>
            Custom made-to-measure curtains, roller blinds, and motorised window solutions across Melbourne.
          </p>
        </div>
      </div>
    </footer>
  );
};
