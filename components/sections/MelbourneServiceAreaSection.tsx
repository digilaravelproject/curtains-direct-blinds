import React from "react";
import Image from "next/image";
import { MapPin, Check, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/config";

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
    <section className="py-16 md:py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Melbourne Skyline Image (Left) */}
          <div className="lg:col-span-6">
            <div className="relative aspect-16/10 rounded-2xl overflow-hidden shadow-lg border border-gray-200">
              <Image
                src="/images/melbourne-skyline.jpg"
                alt="Curtains and blinds across Melbourne and surrounding suburbs"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-xs px-3.5 py-1.5 rounded-full text-xs font-bold text-gray-900 shadow-md">
                Melbourne Victoria
              </div>
            </div>
          </div>

          {/* Service Area Content & Checklist Card (Right) */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
                Curtains and Blinds <br />
                <span className="text-[#EB4D98]">Across Melbourne</span>
              </h2>
              <p className="text-gray-600 text-sm sm:text-base mt-4 leading-relaxed">
                Looking for curtains or blinds in Melbourne? Curtains Direct &amp; Blinds offers a wide range of custom curtains, roller blinds and motorised blinds for homes across Melbourne and surrounding areas.
              </p>
              <p className="text-gray-600 text-sm sm:text-base mt-2 leading-relaxed">
                We work with homeowners in suburbs including Bayswater, Doncaster, Ringwood, Glen Waverley, Camberwell and nearby areas with personalized in-home measuring.
              </p>
            </div>

            {/* Checklist Card */}
            <div className="bg-pink-50/50 border border-pink-100 rounded-2xl p-6 sm:p-7">
              <div className="flex items-center gap-2 text-base font-bold text-[#EB4D98] mb-4">
                <MapPin className="w-5 h-5 fill-pink-100" />
                <span>Our Service Area</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-gray-700 font-medium">
                {suburbsList.map((suburb, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#EB4D98] shrink-0 stroke-3" />
                    <span>{suburb}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <a
                href="#quote-form"
                className="inline-flex items-center gap-2 bg-[#EB4D98] hover:bg-[#d83784] text-white px-7 py-3 rounded-full font-bold text-sm sm:text-base shadow-md shadow-pink-200 transition-all active:scale-[0.98]"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
