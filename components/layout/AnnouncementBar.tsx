import React from "react";
import { MapPin, ShieldCheck, Ruler, Wrench } from "lucide-react";

export const AnnouncementBar: React.FC = () => {
  return (
    <header className="w-full bg-gradient-to-r from-pink-50/80 via-white to-pink-50/80 border-b border-pink-100/70 py-2 px-8 text-xs font-medium text-gray-700">
      <div className="max-w-[1500px] mx-auto flex items-center justify-center">
        {/* Centered Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-gray-600">
          <div className="flex items-center gap-1.5 hover:text-gray-900 transition-colors">
            <MapPin className="w-3.5 h-3.5 text-[#EB4D98] shrink-0" />
            <span>
              <strong className="text-gray-900 font-semibold">Melbourne</strong> Local &amp; Reliable
            </span>
          </div>

          <div className="flex items-center gap-1.5 hover:text-gray-900 transition-colors">
            <ShieldCheck className="w-3.5 h-3.5 text-[#EB4D98] shrink-0" />
            <span>Free In-Home Consultation</span>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 hover:text-gray-900 transition-colors">
            <Ruler className="w-3.5 h-3.5 text-[#EB4D98] shrink-0" />
            <span>Made to Measure Solutions</span>
          </div>

          <div className="hidden md:flex items-center gap-1.5 hover:text-gray-900 transition-colors">
            <Wrench className="w-3.5 h-3.5 text-[#EB4D98] shrink-0" />
            <span>Professional Installation</span>
          </div>
        </div>
      </div>
    </header>
  );
};
