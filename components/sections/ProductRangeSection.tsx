"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

interface ProductItem {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  buttonLabel: string;
  features: string[];
}

const products: ProductItem[] = [
  {
    id: "curtains",
    category: "Curtains",
    title: "Custom Curtains",
    description: "A wide range of fabrics, styles and finishes to suit your home and lifestyle. From sheer wave folds to full blockout drapes.",
    image: "/images/curtains-bedroom.jpg",
    buttonLabel: "Explore Curtains",
    features: ["Sheer S-Fold & Wave Fold", "Full Blockout Linings", "Custom Heading Styles"],
  },
  {
    id: "blinds",
    category: "Roller Blinds & Indoor Blinds",
    title: "Roller Blinds & Indoor Blinds",
    description: "Stylish and practical blinds for every room, with options to suit your space, light control and thermal privacy needs.",
    image: "/images/roller-blinds-dining.jpg",
    buttonLabel: "Explore Blinds",
    features: ["Blockout & Sunscreen", "Double Roller Systems", "Durable Easy-Clean Fabrics"],
  },
  {
    id: "motorised-blinds",
    category: "Motorised Blinds",
    title: "Motorised Blinds",
    description: "Convenient smart control, modern wireless motors and a seamless cordless finish engineered for comfort and modern living.",
    image: "/images/motorised-blinds.jpg",
    buttonLabel: "Explore Motorised Blinds",
    features: ["Remote & App Automation", "Rechargeable Wire-Free", "Child & Pet Safe"],
  },
];

export const ProductRangeSection: React.FC = () => {
  const handleSelectCategory = (categoryName: string) => {
    // Dispatch custom event to preselect in form
    if (typeof window !== "undefined") {
      const event = new CustomEvent("selectProductCategory", { detail: categoryName });
      window.dispatchEvent(event);

      // Smooth scroll to quote form
      const el = document.getElementById("quote-form");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        const nameInput = document.getElementById("lead-name");
        if (nameInput) {
          setTimeout(() => nameInput.focus(), 650);
        }
      }
    }
  };

  return (
    <section id="our-range" className="perspective-container py-16 md:py-24 bg-gray-50/70 border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold tracking-wider uppercase text-[#EB4D98] bg-pink-100/70 px-3.5 py-1 rounded-full border border-pink-200/80 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#EB4D98]" />
            <span>Our Range</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3 tracking-tight">
            Custom Curtains &amp; Blinds in Melbourne
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mt-3 leading-relaxed">
            Explore our popular window covering solutions, all made to measure for your home.
          </p>
        </div>

        {/* 3 Product Cards with 3D Effect & Smooth Hover */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((item) => (
            <div
              key={item.id}
              id={item.id}
              className="card-3d bg-white rounded-3xl overflow-hidden border border-gray-200/80 shadow-sm flex flex-col group cursor-pointer"
              onClick={() => handleSelectCategory(item.category)}
            >
              {/* Product Image with smooth parallax zoom */}
              <div className="relative aspect-4/3 w-full overflow-hidden bg-gray-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-md text-xs font-bold px-3 py-1.5 rounded-full text-gray-800 shadow-md">
                  {item.category}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-[#EB4D98] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base mt-2.5 leading-relaxed">
                    {item.description}
                  </p>

                  <ul className="mt-4 space-y-2 text-xs font-medium text-gray-500">
                    {item.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 group-hover:text-gray-700 transition-colors">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#EB4D98] ring-4 ring-pink-100" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Button */}
                <div className="pt-6 mt-6 border-t border-gray-100">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSelectCategory(item.category);
                    }}
                    className="w-full inline-flex items-center justify-center gap-2 bg-pink-50/80 hover:bg-[#EB4D98] text-[#EB4D98] hover:text-white border border-pink-200/90 hover:border-transparent py-3 px-5 rounded-2xl font-bold text-sm shadow-xs hover:shadow-md transition-all duration-300 group/btn cursor-pointer"
                  >
                    <span>{item.buttonLabel}</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
