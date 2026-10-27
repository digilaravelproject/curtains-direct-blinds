import React from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah",
    location: "Melbourne Homeowner",
    stars: 5,
    text: "Great service and quality curtains. The team was professional and easy to deal with. Highly recommend!",
  },
  {
    name: "Michael",
    location: "Bayswater Customer",
    stars: 5,
    text: "We are very happy with our new roller blinds. Excellent service from start to finish.",
  },
  {
    name: "Emma",
    location: "Doncaster Homeowner",
    stars: 5,
    text: "From consultation to installation, everything was seamless. The team did an amazing job.",
  },
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-8 md:py-12 bg-gray-50/60 border-b border-gray-100">
      <div className="max-w-[1500px] mx-auto px-8">
        <div className="text-center max-w-3xl mx-auto mb-6 md:mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-2">
            Real reviews from Melbourne homeowners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="card-3d bg-white rounded-2xl p-6 sm:p-7 border border-gray-200/90 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between relative group"
            >
              <div>
                {/* 5 Yellow Stars & Quote icon */}
                <div className="flex items-center justify-between mb-3.5">
                  <div className="flex text-amber-400 text-base tracking-tight" aria-label="5 stars rating">
                    ★★★★★
                  </div>
                  <Quote className="w-7 h-7 text-pink-200 group-hover:text-[#EB4D98] transition-colors" />
                </div>

                <p className="text-gray-700 text-sm sm:text-base leading-relaxed italic">
                  &ldquo;{item.text}&rdquo;
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-gray-100 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-pink-100 text-[#EB4D98] font-bold text-xs flex items-center justify-center">
                  {item.name[0]}
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">
                    {item.name}
                  </div>
                  <div className="text-xs text-gray-500 font-medium">
                    {item.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
