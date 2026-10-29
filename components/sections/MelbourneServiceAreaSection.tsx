"use client";

import React from "react";
import { MapPin, Navigation } from "lucide-react";

export const MelbourneServiceAreaSection: React.FC = () => {
  return (
    <section id="location-map" className="w-full relative bg-gray-100 border-t border-gray-200">
      <div className="relative w-full h-[320px] sm:h-[400px] md:h-[480px]">
        {/* Full Width Google Map Iframe */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150.6903597166606!2d145.23981457631908!3d-37.84413417196796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad63bf17dd02d5f%3A0xf077950320eb6d2a!2s447%20Mountain%20Hwy%2C%20Bayswater%20VIC%203153%2C%20Australia!5e0!3m2!1sen!2sin!4v1793262234665!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          title="Curtains Direct & Blinds Melbourne Location Map"
          className="w-full h-full"
        />

        {/* Mobile-Optimized Floating Location Badge */}
        <div className="absolute bottom-3 left-3 right-3 sm:right-auto sm:left-8 bg-white/95 backdrop-blur-md px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-semibold text-gray-900 shadow-xl border border-gray-200/80 flex items-center justify-between gap-2.5 max-w-md">
          <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-pink-100 text-[#EB4D98] flex items-center justify-center shrink-0">
              <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
            </div>
            <div className="min-w-0">
              <div className="text-[10px] sm:text-[11px] text-gray-500 font-medium">Showroom &amp; Office</div>
              <div className="text-xs sm:text-sm font-bold text-gray-900 truncate">
                447 Mountain Hwy, Bayswater VIC
              </div>
            </div>
          </div>
          <a
            href="https://maps.google.com/?q=447+Mountain+Hwy,+Bayswater+VIC+3153,+Australia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-bold text-[#EB4D98] bg-pink-50 hover:bg-pink-100 transition-colors shrink-0"
          >
            <Navigation className="w-3 h-3" />
            <span>Directions</span>
          </a>
        </div>
      </div>
    </section>
  );
};
