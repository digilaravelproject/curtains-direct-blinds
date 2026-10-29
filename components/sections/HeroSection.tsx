"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { LeadFormCard } from "@/components/ui/LeadFormCard";
import { assetUrl } from "@/lib/config";

export const HeroSection: React.FC = () => {
  return (
      <section className="relative overflow-visible z-20 bg-gradient-to-b from-pink-50/30 via-white/50 to-white py-8 md:py-12 border-b border-gray-100">
        {/* Background Image: Crisp, clear cinematic window view with soft curtains */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <Image
            src={`${assetUrl("/images/hero-curtains-view.jpg")}?v=20261029`}
            alt="Modern window framed by custom curtains with scenic garden and ocean view"
            fill
            loading="lazy"
            sizes="(max-width: 1500px) 100vw, 1500px"
            className="object-cover object-center"
          />
          {/* Subtle, soft gradient: keeps text legible without washing out the vibrant image */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/75 via-white/30 to-transparent lg:from-white/70 lg:via-white/20 lg:to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column: Heading, Subtitle & Badges */}
            <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
              {/* Tagline Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-100/80 border border-pink-200/90 text-[#EB4D98] text-xs sm:text-[13px] font-bold tracking-wider uppercase shadow-2xs hover:scale-102 transition-transform">
                <span>Custom Curtains &amp; Blinds Melbourne</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 leading-[1.14]">
                Beautiful Windows. <br />
                <span className="text-[#EB4D98]">A More Comfortable Home.</span>
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Custom curtains, roller blinds and motorised blinds, made to measure and professionally installed across Melbourne.
              </p>

              {/* 3 Key Checkmarks */}
              <div className="pt-1 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-5 text-sm sm:text-base font-semibold text-gray-800">
                <div className="flex items-center gap-2 hover:translate-x-0.5 transition-transform">
                  <CheckCircle2 className="w-4.5 h-4.5 text-[#EB4D98] shrink-0 fill-pink-50" />
                  <span>Free In-Home Consultation</span>
                </div>
                <div className="flex items-center gap-2 hover:translate-x-0.5 transition-transform">
                  <CheckCircle2 className="w-4.5 h-4.5 text-[#EB4D98] shrink-0 fill-pink-50" />
                  <span>Expert Advice &amp; Measuring</span>
                </div>
                <div className="flex items-center gap-2 hover:translate-x-0.5 transition-transform">
                  <CheckCircle2 className="w-4.5 h-4.5 text-[#EB4D98] shrink-0 fill-pink-50" />
                  <span>Professional Installation</span>
                </div>
              </div>

              {/* Hero Quick Buttons */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <a
                  href="#quote-form"
                  onClick={(e) => { e.preventDefault(); const el = document.getElementById('quote-form'); if (el) { const top = el.getBoundingClientRect().top + window.scrollY - 80; window.scrollTo({ top, behavior: 'smooth' }); } }}
                  className="btn-sheen inline-flex items-center gap-2 bg-[#EB4D98] hover:bg-[#d83784] text-white px-6 py-3 rounded-full font-bold text-sm sm:text-base shadow-md shadow-pink-200/80 hover:shadow-lg transition-all duration-300 active:scale-[0.98] group"
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
                <a
                  href="#our-range"
                  onClick={(e) => { e.preventDefault(); const el = document.getElementById('our-range'); if (el) { const top = el.getBoundingClientRect().top + window.scrollY - 80; window.scrollTo({ top, behavior: 'smooth' }); } }}
                  className="inline-flex items-center gap-2 bg-white/90 hover:bg-white border border-gray-200 text-gray-800 px-5 py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 hover:border-pink-300 hover:text-[#EB4D98] hover:shadow-xs"
                >
                  <span>Explore Our Range</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Column: 3D interactive Lead Form Card above the fold */}
            <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
              <LeadFormCard />
            </div>
          </div>
        </div>
      </section>
      );
};
