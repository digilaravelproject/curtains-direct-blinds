import React from "react";
import Link from "next/link";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light";
}

export const Logo: React.FC<LogoProps> = ({ className = "", variant = "dark" }) => {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 font-bold tracking-tight select-none group ${className}`}
      aria-label="Curtains Direct & Blinds - Home"
    >
      {/* Curtain wave icon */}
      <span className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#EB4D98] to-[#d83784] text-white shadow-sm shadow-pink-200 group-hover:scale-105 transition-transform">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          {/* Stylized curtain wave lines */}
          <path d="M4 4v16" />
          <path d="M20 4v16" />
          <path d="M4 4c2 0 4 2 6 2s4-2 6-2 4 2 4 2" />
          <path d="M4 10c2 0 4 2 6 2s4-2 6-2 4 2 4 2" />
          <path d="M4 16c2 0 4 2 6 2s4-2 6-2 4 2 4 2" />
        </svg>
      </span>

      <div className="flex flex-col leading-none">
        <span
          className={`text-xl font-bold tracking-tight transition-colors ${
            variant === "light"
              ? "text-white"
              : "text-[#EB4D98] group-hover:text-[#d83784]"
          }`}
        >
          Curtains Direct <span className={variant === "light" ? "text-pink-300" : "text-gray-900 font-semibold"}>&amp; Blinds</span>
        </span>
        <span className={`text-[10px] tracking-wider uppercase font-medium ${variant === "light" ? "text-pink-200" : "text-gray-500"}`}>
          Melbourne Made-to-Measure
        </span>
      </div>
    </Link>
  );
};
