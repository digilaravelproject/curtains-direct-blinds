import React from "react";
import Image from "next/image";
import { MapPin, Check, ArrowRight } from "lucide-react";
import { siteConfig, assetUrl } from "@/lib/config";

const suburbsList = [
  "Melbourne",
  "Bayswater",
  "Ringwood",
  "Doncaster",
  "Glen Waverley",
  "Camberwell",
  "and surrounding suburbs",
];

export const MelbourneServiceAreaSection: React.FC = () => {
  return (
    <section className="py-8 md:py-12 bg-white border-b border-gray-100">
      <div className="max-w-[1500px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Melbourne Skyline Image (Left) */}
          <div className="lg:col-span-6">
            <div className="relative aspect-16/10 rounded-2xl overflow-hidden shadow-md border border-gray-200">
              <Image
                src={assetUrl("/images/melbourne-skyline.jpg")}
                alt="Curtains and blinds across Melbourne and surrounding suburbs"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-bold text-gray-900 shadow-sm">
                Melbourne Victoria
              </div>
            </div>
          </div>

          {/* Service Area Content & Checklist Card (Right) */}
          <div className="lg:col-span-6 space-y-4">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
                Curtains and Blinds <br />
                <span className="text-[#EB4D98]">Across Melbourne</span>
              </h2>
              <p className="text-gray-600 text-xs sm:text-sm mt-2.5 leading-relaxed">
                Looking for curtains or blinds in Melbourne? Curtains Direct &amp; Blinds offers a wide range of custom curtains, roller blinds and motorised blinds for homes across Melbourne and surrounding areas.
              </p>
              <p className="text-gray-600 text-xs sm:text-sm mt-1.5 leading-relaxed">
                We work with homeowners in suburbs including Bayswater, Doncaster, Ringwood, Glen Waverley, Camberwell and nearby areas with personalized in-home measuring.
              </p>
            </div>

            {/* Checklist Card */}
            <div className="bg-pink-50/50 border border-pink-100 rounded-2xl p-5 sm:p-6">
              <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-[#EB4D98] mb-3">
                <MapPin className="w-4.5 h-4.5 fill-pink-100" />
                <span>Our Service Area</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-gray-700 font-medium">
                {suburbsList.map((suburb, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#EB4D98] shrink-0 stroke-3" />
                    <span>{suburb}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <a
                href="#quote-form"
                className="btn-sheen inline-flex items-center gap-2 bg-[#EB4D98] hover:bg-[#d83784] text-white px-6 py-3 rounded-full font-bold text-sm sm:text-base shadow-md shadow-pink-200/80 hover:shadow-lg transition-all duration-300 active:scale-[0.98] group"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
