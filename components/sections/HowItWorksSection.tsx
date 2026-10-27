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
    <section className="py-16 md:py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            How It Works
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mt-2.5">
            A simple process from consultation to installation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex flex-col items-center text-center relative group">
                {/* Number Badge and Icon */}
                <div className="relative mb-5">
                  <div className="w-16 h-16 rounded-full bg-pink-50 border-2 border-[#EB4D98] text-[#EB4D98] flex items-center justify-center shadow-sm group-hover:scale-105 group-hover:bg-[#EB4D98] group-hover:text-white transition-all">
                    <Icon className="w-7 h-7" />
                  </div>
                  <div className="absolute -top-2 -left-2 w-7 h-7 rounded-full bg-[#EB4D98] text-white text-xs font-bold flex items-center justify-center shadow-xs">
                    {item.step}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#EB4D98] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  {item.description}
                </p>

                {/* Connecting arrow for desktop except last */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 text-pink-200 pointer-events-none">
                    <ArrowRight className="w-6 h-6 stroke-2" />
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
