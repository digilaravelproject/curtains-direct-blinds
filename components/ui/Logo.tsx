import React from "react";
import Link from "next/link";

import Image from "next/image";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light";
}

export const Logo: React.FC<LogoProps> = ({ className = "", variant = "dark" }) => {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3 font-bold tracking-tight select-none group ${className}`}
      aria-label="Curtains Direct & Blinds - Home"
    >
      {/* Official 4-Quadrant Brand Logo */}
      <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-lg overflow-hidden border border-gray-200/80 shadow-xs flex-shrink-0 group-hover:scale-105 transition-transform bg-white">
        <Image
          src="/images/logo.svg"
          alt="Curtains Direct & Blinds / Berwick Curtain Nook Logo"
          fill
          sizes="48px"
          priority
          className="object-contain"
        />
      </div>

      <div className="flex flex-col leading-tight">
        <span
          className={`text-lg sm:text-xl font-bold tracking-tight transition-colors ${
            variant === "light"
              ? "text-white"
              : "text-[#EB4D98] group-hover:text-[#d83784]"
          }`}
        >
          Curtains Direct{" "}
          <span className={variant === "light" ? "text-pink-300" : "text-gray-900 font-semibold"}>
            &amp; Blinds
          </span>
        </span>
        <span
          className={`text-[10px] sm:text-[11px] tracking-wider uppercase font-medium ${
            variant === "light" ? "text-pink-200/80" : "text-gray-500"
          }`}
        >
          Melbourne Made-to-Measure
        </span>
      </div>
    </Link>
  );
};
