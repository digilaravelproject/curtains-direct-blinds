"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";

export interface SelectOption {
  value: string;
  label: string;
  description?: string;
}

interface CustomSelectProps {
  id?: string;
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  placeholder?: string;
  className?: string;
}

export const CustomSelect: React.FC<CustomSelectProps> = ({
  id,
  value,
  onChange,
  options,
  placeholder = "Select an option",
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleSelect = (val: string) => {
    onChange(val);
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className={`relative w-full ${className}`}>
      {/* Trigger Button */}
      <button
        id={id}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className={`w-full flex items-center justify-between px-4 py-2.5 sm:py-3 bg-gray-50/90 hover:bg-white border rounded-xl text-xs sm:text-sm text-gray-800 transition-all duration-200 cursor-pointer shadow-2xs ${
          isOpen
            ? "border-[#EB4D98] ring-2 ring-[#EB4D98]/30 bg-white"
            : "border-gray-200 hover:border-pink-300"
        }`}
      >
        <span className="truncate font-medium">
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-gray-400 shrink-0 ml-2 transition-transform duration-200 ${
            isOpen ? "rotate-180 text-[#EB4D98]" : ""
          }`}
        />
      </button>

      {/* Custom Dropdown Menu */}
      {isOpen && (
        <div
          role="listbox"
          className="absolute z-50 left-0 right-0 mt-1.5 bg-white border border-pink-100 rounded-2xl shadow-xl shadow-pink-100/50 p-1.5 space-y-0.5 max-h-64 overflow-y-auto animate-in fade-in slide-in-from-top-1 duration-150"
        >
          {options.map((opt) => {
            const isSelected = opt.value === value;
            return (
              <div
                key={opt.value}
                role="option"
                aria-selected={isSelected}
                onClick={() => handleSelect(opt.value)}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-colors cursor-pointer select-none ${
                  isSelected
                    ? "bg-pink-50 text-[#EB4D98] font-bold"
                    : "text-gray-700 hover:bg-pink-50/60 hover:text-[#EB4D98]"
                }`}
              >
                <span>{opt.label}</span>
                {isSelected && (
                  <Check className="w-4 h-4 text-[#EB4D98] shrink-0 stroke-3" />
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
