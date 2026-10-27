import React from "react";
import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { LeadFormCard } from "@/components/ui/LeadFormCard";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-pink-50/40 via-white to-white py-12 md:py-16 lg:py-20 border-b border-gray-100">
      {/* Background Image with soft gradient overlay for contrast */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-25 lg:opacity-30">
        <Image
          src="/images/hero-living.jpg"
          alt="Curtains and roller blinds in modern Melbourne living room"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-white/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Heading, Subtitle & Badges */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-100/70 border border-pink-200 text-[#EB4D98] text-xs sm:text-[13px] font-bold tracking-wider uppercase">
              <span>Custom Curtains &amp; Blinds Melbourne</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.12]">
              Beautiful Windows. <br />
              <span className="text-[#EB4D98]">A More Comfortable Home.</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Custom curtains, roller blinds and motorised blinds, made to measure and professionally installed across Melbourne.
            </p>

            {/* 3 Key Checkmarks */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-sm sm:text-base font-semibold text-gray-800">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#EB4D98] shrink-0 fill-pink-50" />
                <span>Free In-Home Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#EB4D98] shrink-0 fill-pink-50" />
                <span>Expert Advice &amp; Measuring</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#EB4D98] shrink-0 fill-pink-50" />
                <span>Professional Installation</span>
              </div>
            </div>

            {/* Hero Quick Buttons */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="#quote-form"
                className="inline-flex items-center gap-2 bg-[#EB4D98] hover:bg-[#d83784] text-white px-7 py-3.5 rounded-full font-bold text-base shadow-md shadow-pink-200 hover:shadow-lg transition-all active:scale-[0.98]"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#curtains"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 border border-gray-300 text-gray-800 px-6 py-3.5 rounded-full font-semibold text-base transition-all hover:border-pink-300 hover:text-[#EB4D98]"
              >
                <span>Explore Our Range</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Lead Form Card above the fold */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <LeadFormCard />
          </div>
        </div>
      </div>
    </section>
  );
};
