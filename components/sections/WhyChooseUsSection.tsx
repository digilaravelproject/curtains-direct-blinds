import React from "react";
import { Trophy, Users, Ruler, Wrench } from "lucide-react";

const reasons = [
  {
    icon: Trophy,
    title: "Local Melbourne Experts",
    description: "Over 30 years helping Melbourne homes look and feel their best with tailored window coverings.",
  },
  {
    icon: Users,
    title: "Personalised Service",
    description: "A friendly, family-owned team dedicated to your specific design, privacy, and insulation needs.",
  },
  {
    icon: Ruler,
    title: "Made-to-Measure Solutions",
    description: "Custom designed and precision-measured for your windows, architecture, and lifestyle.",
  },
  {
    icon: Wrench,
    title: "Professional Installation",
    description: "Experienced technicians guarantee a clean, secure, and perfect finish, every time.",
  },
];

export const WhyChooseUsSection: React.FC = () => {
  return (
    <section id="why-choose-us" className="py-16 md:py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#EB4D98] bg-pink-100/70 px-3.5 py-1 rounded-full border border-pink-200 shadow-2xs">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3 tracking-tight">
            Trusted by Melbourne Homeowners
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="card-3d bg-gradient-to-b from-white to-pink-50/20 hover:from-pink-50/40 hover:to-pink-50/80 border border-gray-200/80 hover:border-pink-300 rounded-3xl p-6 sm:p-7 text-center transition-all duration-300 group cursor-default"
              >
                <div className="w-16 h-16 rounded-2xl bg-white border border-pink-200/80 text-[#EB4D98] flex items-center justify-center mx-auto mb-5 shadow-sm group-hover:scale-110 group-hover:shadow-md group-hover:shadow-pink-100 group-hover:border-[#EB4D98] transition-all duration-300">
                  <Icon className="w-8 h-8 transition-transform group-hover:scale-105" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#EB4D98] transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2.5 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
