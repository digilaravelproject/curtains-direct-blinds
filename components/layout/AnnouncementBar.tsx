import React from "react";
import { MapPin, ShieldCheck, Ruler, Wrench, Phone } from "lucide-react";
import { siteConfig } from "@/lib/config";

export const AnnouncementBar: React.FC = () => {
  return (
    <header className="w-full bg-white border-b border-gray-100 py-2 px-8 text-xs font-medium text-gray-700">
      <div className="max-w-[1500px] mx-auto flex flex-col md:flex-row items-center justify-between gap-2.5">
        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6 text-gray-600">
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

          <div className="hidden lg:flex items-center gap-1.5 hover:text-gray-900 transition-colors">
            <Wrench className="w-3.5 h-3.5 text-[#EB4D98] shrink-0" />
            <span>Professional Installation</span>
          </div>
        </div>

        {/* Call CTA Pill (Top Right) */}
        <a
          href={`tel:${siteConfig.phoneRaw}`}
          className="inline-flex items-center gap-2 bg-[#EB4D98] hover:bg-[#d83784] text-white px-3.5 py-1 rounded-full shadow-xs hover:shadow transition-all group shrink-0"
          aria-label={`Call us at ${siteConfig.phone}`}
        >
          <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-105 transition-transform">
            <Phone className="w-3 h-3 fill-current" />
          </div>
          <div className="text-left leading-tight">
            <div className="text-xs font-bold tracking-tight">{siteConfig.phone}</div>
          </div>
        </a>
      </div>
    </header>
  );
};
