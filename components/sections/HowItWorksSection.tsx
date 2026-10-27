import React from "react";
import { Home, Ruler, FileText, Wrench, ArrowRight } from "lucide-react";

const steps = [
  {
    step: 1,
    title: "Book a Free Consultation",
    description: "Get in touch and we'll arrange a convenient time.",
    icon: Home,
  },
  {
    step: 2,
    title: "In-Home Measure & Advice",
    description: "We measure your windows and provide expert recommendations.",
    icon: Ruler,
  },
  {
    step: 3,
    title: "Receive a Quote",
    description: "Get a personalised, no-obligation quote for your chosen products.",
    icon: FileText,
  },
  {
    step: 4,
    title: "Professional Installation",
    description: "Our experienced team installs your curtains or blinds.",
    icon: Wrench,
  },
];

export const HowItWorksSection: React.FC = () => {
  return (
    <section className="py-8 md:py-12 bg-white border-b border-gray-100 overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-8">
        <div className="text-center max-w-3xl mx-auto mb-6 md:mb-8">
          <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#EB4D98] bg-pink-100/70 px-3.5 py-1 rounded-full border border-pink-200 shadow-2xs">
            Simple Process
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mt-2 tracking-tight">
            How It Works
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-2">
            A simple process from consultation to installation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex flex-col items-center text-center relative group">
                {/* 3D Elevated Number Badge & Icon */}
                <div className="relative mb-4 transform-gpu transition-transform duration-300 group-hover:-translate-y-1.5">
                  <div className="w-16 h-16 rounded-2xl bg-pink-50/90 border-2 border-[#EB4D98] text-[#EB4D98] flex items-center justify-center shadow-sm group-hover:scale-105 group-hover:bg-[#EB4D98] group-hover:text-white group-hover:shadow-lg group-hover:shadow-pink-300/40 transition-all duration-300">
                    <Icon className="w-7 h-7 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <div className="absolute -top-2 -left-2 w-7 h-7 rounded-full bg-[#EB4D98] text-white text-xs font-bold flex items-center justify-center shadow-xs ring-2 ring-white">
                    {item.step}
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-[#EB4D98] transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm mt-1.5 leading-relaxed max-w-xs">
                  {item.description}
                </p>

                {/* Connecting arrow for desktop */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-7 -right-4 text-pink-300/80 pointer-events-none transform translate-x-1/2">
                    <ArrowRight className="w-5 h-5 stroke-2 animate-pulse" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
