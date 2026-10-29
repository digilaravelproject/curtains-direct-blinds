"use client";

import React from "react";
import { MapPin, Check, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/config";

const suburbsList = [
  "Melbourne CBD",
  "Bayswater",
  "Ringwood",
  "Doncaster",
  "Glen Waverley",
  "Camberwell",
  "Box Hill",
  "and surrounding suburbs",
];

export const MelbourneServiceAreaSection: React.FC = () => {
  return (
    <section id="service-area" className="py-8 md:py-12 bg-white border-b border-gray-100">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Interactive Google Map (Left) */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="relative w-full h-[380px] sm:h-[440px] lg:h-full min-h-[380px] rounded-2xl overflow-hidden shadow-md border border-gray-200 bg-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150.6903597166606!2d145.23981457631908!3d-37.84413417196796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad63bf17dd02d5f%3A0xf077950320eb6d2a!2s447%20Mountain%20Hwy%2C%20Bayswater%20VIC%203153%2C%20Australia!5e0!3m2!1sen!2sin!4v1793262234665!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Curtains Direct & Blinds Melbourne Location Map"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 right-3 sm:right-auto bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl text-xs font-semibold text-gray-900 shadow-md border border-gray-100 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#EB4D98] shrink-0" />
                <span>447 Mountain Hwy, Bayswater VIC 3153 &bull; Showroom &amp; Mobile Service</span>
              </div>
            </div>
          </div>

          {/* Service Area Content, Suburbs & Social Media (Right) */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-[#EB4D98] bg-pink-50 border border-pink-200/60 mb-2">
                <MapPin className="w-3.5 h-3.5 fill-pink-100" />
                <span>Melbourne Wide Service</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
                Curtains and Blinds <br />
                <span className="text-[#EB4D98]">Across Melbourne</span>
              </h2>
              <p className="text-gray-600 text-xs sm:text-sm mt-2.5 leading-relaxed">
                Looking for custom curtains or blinds in Melbourne? Curtains Direct &amp; Blinds offers premium made-to-measure curtains, roller blinds, plantation shutters and motorised blinds across Melbourne and surrounding areas.
              </p>
              <p className="text-gray-600 text-xs sm:text-sm mt-1.5 leading-relaxed">
                We bring our mobile showroom with fabric samples directly to your door for a free in-home measure and quote.
              </p>
            </div>

            {/* Checklist Card: Suburbs */}
            <div className="bg-pink-50/50 border border-pink-100 rounded-2xl p-4 sm:p-5">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-[#EB4D98]">
                  <MapPin className="w-4 h-4 fill-pink-100" />
                  <span>Our Service Area</span>
                </div>
                <span className="text-[11px] font-semibold text-gray-500 bg-white px-2.5 py-0.5 rounded-full border border-pink-100">
                  Free In-Home Visits
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm text-gray-700 font-medium">
                {suburbsList.map((suburb, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#EB4D98] shrink-0 stroke-3" />
                    <span>{suburb}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media Links & Quote Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 border-t border-gray-100">
              <a
                href="#quote-form"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById("quote-form");
                  if (el) {
                    const top = el.getBoundingClientRect().top + window.scrollY - 80;
                    window.scrollTo({ top, behavior: "smooth" });
                  }
                }}
                className="btn-sheen inline-flex items-center justify-center gap-2 bg-[#EB4D98] hover:bg-[#d83784] text-white px-6 py-2.5 rounded-full font-bold text-xs sm:text-sm shadow-md shadow-pink-200/80 hover:shadow-lg transition-all duration-300 active:scale-[0.98] group"
              >
                <span>Request Free Quote</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>

              {/* Social Media Pill Buttons */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500 font-semibold hidden sm:inline">Follow Us:</span>
                
                {/* Instagram */}
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-bold text-pink-600 bg-pink-50 hover:bg-pink-100 border border-pink-200 transition-all hover:scale-105 active:scale-95 shadow-2xs"
                  aria-label="Follow Curtains Direct & Blinds on Instagram"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>Instagram</span>
                </a>

                {/* Facebook */}
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-all hover:scale-105 active:scale-95 shadow-2xs"
                  aria-label="Follow Curtains Direct & Blinds on Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
