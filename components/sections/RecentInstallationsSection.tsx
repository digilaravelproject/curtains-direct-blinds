import React from "react";
import Image from "next/image";

const installations = [
  {
    title: "Living Room Curtains",
    image: "/images/hero-living.jpg",
    suburb: "Bayswater, VIC",
  },
  {
    title: "Roller Blinds in Dining",
    image: "/images/roller-blinds-dining.jpg",
    suburb: "Doncaster, VIC",
  },
  {
    title: "Motorised Blinds",
    image: "/images/motorised-blinds.jpg",
    suburb: "Ringwood, VIC",
  },
  {
    title: "Bedroom Curtains",
    image: "/images/curtains-bedroom.jpg",
    suburb: "Camberwell, VIC",
  },
];

export const RecentInstallationsSection: React.FC = () => {
  return (
    <section id="recent-work" className="py-16 md:py-24 bg-gray-50/50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#EB4D98] bg-pink-100/60 px-3 py-1 rounded-full border border-pink-200">
            Recent Installations
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3 tracking-tight">
            Real Homes. Real Results.
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mt-3 leading-relaxed">
            Take a look at some of our recent curtain and blind installations across Melbourne.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {installations.map((item, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-sm group hover:shadow-lg transition-all"
            >
              <div className="relative aspect-4/3 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Pill Tag at bottom */}
              <div className="p-4 text-center">
                <div className="inline-block bg-white text-gray-900 font-bold text-sm px-3.5 py-1.5 rounded-full border border-gray-100 shadow-xs group-hover:text-[#EB4D98] transition-colors">
                  {item.title}
                </div>
                <div className="text-[11px] text-gray-400 mt-1">{item.suburb}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
