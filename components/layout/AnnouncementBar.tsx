import React from "react";
import { MapPin, ShieldCheck, Ruler, Wrench } from "lucide-react";

export const AnnouncementBar: React.FC = () => {
  return (
    <header className="w-full bg-gradient-to-r from-pink-50/80 via-white to-pink-50/80 border-b border-pink-100/70 py-1.5 px-3 sm:px-8 text-[11px] sm:text-xs font-medium text-gray-700">
      <div className="max-w-[1500px] mx-auto flex items-center justify-center">
        {/* Centered Trust Badges */}
        <div className="flex items-center justify-center gap-2 sm:gap-6 text-gray-600">
          <div className="flex items-center gap-1 hover:text-gray-900 transition-colors whitespace-nowrap">
            <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#EB4D98] shrink-0" />
            <span>
              <strong className="text-gray-900 font-semibold">Melbourne</strong> Local
            </span>
          </div>

          <span className="text-pink-300 text-[10px]">•</span>

          <div className="flex items-center gap-1 hover:text-gray-900 transition-colors whitespace-nowrap">
            <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#EB4D98] shrink-0" />
            <span>Free Consultation</span>
          </div>

          <span className="hidden sm:inline text-pink-300 text-[10px]">•</span>

          <div className="hidden sm:flex items-center gap-1.5 hover:text-gray-900 transition-colors whitespace-nowrap">
            <Ruler className="w-3.5 h-3.5 text-[#EB4D98] shrink-0" />
            <span>Made to Measure</span>
          </div>

          <span className="hidden md:inline text-pink-300 text-[10px]">•</span>

          <div className="hidden md:flex items-center gap-1.5 hover:text-gray-900 transition-colors whitespace-nowrap">
            <Wrench className="w-3.5 h-3.5 text-[#EB4D98] shrink-0" />
            <span>Professional Installation</span>
          </div>
        </div>
      </div>
    </header>
  );
};
