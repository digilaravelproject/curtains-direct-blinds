"use client";

import React, { useState, useEffect } from "react";
import { Phone, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/config";

export const MobileFloatingBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show only after scrolling past top hero (e.g. 300px)
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-white/95 backdrop-blur-md border-t border-pink-100 p-3 shadow-xl animate-in slide-in-from-bottom duration-300">
      <div className="flex items-center gap-2">
        <a
          href={`tel:${siteConfig.phoneRaw}`}
          className="flex-1 flex items-center justify-center gap-2 bg-pink-50 hover:bg-pink-100 text-[#EB4D98] border border-pink-200 py-3 rounded-full font-bold text-xs shadow-xs transition-colors"
        >
          <Phone className="w-3.5 h-3.5 fill-current" />
          <span>Call Now</span>
        </a>

        <a
          href="#quote-form"
          className="flex-1 flex items-center justify-center gap-1.5 bg-[#EB4D98] hover:bg-[#d83784] text-white py-3 rounded-full font-bold text-xs shadow-md shadow-pink-200 transition-colors"
        >
          <span>Free Quote</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};
