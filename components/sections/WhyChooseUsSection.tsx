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
          <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#EB4D98] bg-pink-100/60 px-3 py-1 rounded-full border border-pink-200">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3 tracking-tight">
            Trusted by Melbourne Homeowners
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-pink-50/30 hover:bg-pink-50/70 border border-pink-100/80 rounded-2xl p-6 sm:p-7 text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-md group"
              >
                <div className="w-14 h-14 rounded-full bg-white border border-pink-200 text-[#EB4D98] flex items-center justify-center mx-auto mb-5 shadow-xs group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#EB4D98] transition-colors">
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
