import React from "react";
import Link from "next/link";

import Image from "next/image";
import { assetUrl } from "@/lib/config";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light";
}

export const Logo: React.FC<LogoProps> = ({ className = "", variant = "dark" }) => {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2 sm:gap-2.5 select-none group min-w-0 flex-shrink ${className}`}
      aria-label="Curtains Direct & Blinds - Home"
    >
      {/* Official 4-Quadrant Brand Logo */}
      <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-lg overflow-hidden border border-gray-200/80 shadow-xs flex-shrink-0 group-hover:scale-105 transition-transform bg-white">
        <Image
          src={assetUrl("/images/logo.svg")}
          alt="Curtains Direct & Blinds Logo"
          fill
          sizes="40px"
          priority
          className="object-contain"
        />
      </div>

      <div className="flex flex-col justify-center min-w-0 leading-tight">
        <span
          className={`text-[13.5px] sm:text-[16px] font-extrabold tracking-tight truncate ${
            variant === "light" ? "text-white" : "text-gray-900 group-hover:text-black"
          }`}
        >
          Curtains Direct
        </span>
        <span
          className={`text-[11px] sm:text-xs font-bold tracking-tight ${
            variant === "light" ? "text-pink-300" : "text-[#EB4D98]"
          }`}
        >
          &amp; Blinds{" "}
          <span className="hidden sm:inline text-gray-400 font-medium text-[10px] tracking-normal uppercase ml-1">
            • Made-to-Measure
          </span>
        </span>
      </div>
    </Link>
  );
};
