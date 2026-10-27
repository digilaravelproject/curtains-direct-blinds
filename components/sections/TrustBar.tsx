import React from "react";
import { Users, Home, Star, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/lib/config";

export const TrustBar: React.FC = () => {
  return (
    <section className="bg-white py-6 border-b border-gray-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-center text-center sm:text-left">
          {/* 1: 30+ Years */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
            <div className="w-12 h-12 rounded-2xl bg-pink-50 border border-pink-100 flex items-center justify-center text-[#EB4D98] shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <div className="text-base sm:text-lg font-bold text-gray-900 leading-tight">
                {siteConfig.yearsExperience} Years
              </div>
              <div className="text-xs sm:text-sm text-gray-500 font-medium">
                of Experience
              </div>
            </div>
          </div>

          {/* 2: Family Owned */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
            <div className="w-12 h-12 rounded-2xl bg-pink-50 border border-pink-100 flex items-center justify-center text-[#EB4D98] shrink-0">
              <Home className="w-6 h-6" />
            </div>
            <div>
              <div className="text-base sm:text-lg font-bold text-gray-900 leading-tight">
                Family-Owned
              </div>
              <div className="text-xs sm:text-sm text-gray-500 font-medium">
                Melbourne Business
              </div>
            </div>
          </div>

          {/* 3: 5.0 Google Reviews */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
            <div className="w-12 h-12 rounded-2xl bg-pink-50 border border-pink-100 flex items-center justify-center text-[#EB4D98] shrink-0">
              <Star className="w-6 h-6 fill-[#EB4D98]" />
            </div>
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-1">
                <span className="text-base sm:text-lg font-bold text-gray-900 leading-tight">
                  5.0
                </span>
                <span className="flex text-amber-400 text-xs tracking-tighter">
                  ★★★★★
                </span>
              </div>
              <div className="text-xs sm:text-sm text-gray-500 font-medium">
                Based on {siteConfig.googleReviewsCount} Google Reviews
              </div>
            </div>
          </div>

          {/* 4: Quality Materials */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
            <div className="w-12 h-12 rounded-2xl bg-pink-50 border border-pink-100 flex items-center justify-center text-[#EB4D98] shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="text-base sm:text-lg font-bold text-gray-900 leading-tight">
                Quality Materials
              </div>
              <div className="text-xs sm:text-sm text-gray-500 font-medium">
                from Trusted Brands
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
