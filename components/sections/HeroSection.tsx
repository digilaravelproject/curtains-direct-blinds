import React from "react";
import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { LeadFormCard } from "@/components/ui/LeadFormCard";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-visible z-20 bg-gradient-to-b from-pink-50/50 via-white to-white py-8 md:py-12 border-b border-gray-100">
      {/* Background Image: Vivid, high visual impact with clear window & curtains */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <Image
          src="/images/hero-living.jpg"
          alt="Custom curtains and roller blinds in Melbourne living room"
          fill
          priority
          sizes="(max-width: 1500px) 100vw, 1500px"
          className="object-cover object-center scale-102"
        />
        {/* Soft directional gradient: white behind left text, open & clear over window & living space */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/75 to-white/20 lg:from-white/92 lg:via-white/55 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/60" />
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
                className="btn-sheen inline-flex items-center gap-2 bg-[#EB4D98] hover:bg-[#d83784] text-white px-6 py-3 rounded-full font-bold text-sm sm:text-base shadow-md shadow-pink-200/80 hover:shadow-lg transition-all duration-300 active:scale-[0.98] group"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href="#our-range"
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
