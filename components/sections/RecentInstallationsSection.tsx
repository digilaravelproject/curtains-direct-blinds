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
    <section id="recent-work" className="perspective-container py-16 md:py-24 bg-gray-50/50 border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#EB4D98] bg-pink-100/70 px-3.5 py-1 rounded-full border border-pink-200 shadow-2xs">
            Recent Installations
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3 tracking-tight">
            Real Homes. Real Results.
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mt-3 leading-relaxed">
            Take a look at some of our recent curtain and blind installations across Melbourne.
          </p>
        </div>

        {/* 4 Cards Grid with 3D depth */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {installations.map((item, idx) => (
            <div
              key={idx}
              className="card-3d relative rounded-3xl overflow-hidden bg-white border border-gray-200/90 shadow-sm group hover:border-pink-300 transition-all duration-300"
            >
              <div className="relative aspect-4/3 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Pill Tag at bottom */}
              <div className="p-4 text-center bg-white relative z-10">
                <div className="inline-block bg-white text-gray-900 font-bold text-sm px-4 py-1.5 rounded-full border border-gray-100 shadow-sm group-hover:text-[#EB4D98] group-hover:border-pink-200 transition-all duration-200">
                  {item.title}
                </div>
                <div className="text-[11px] text-gray-400 mt-1 font-medium">{item.suburb}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
