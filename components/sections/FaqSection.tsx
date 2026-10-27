"use client";

import React, { useState } from "react";
import { ChevronDown, Phone, ArrowRight, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/config";

const faqs = [
  {
    question: "Do you offer custom curtains in Melbourne?",
    answer:
      "Yes, absolutely! Every curtain we make is tailor-made to your exact window dimensions, preferred fullness, and heading style. We bring a full range of fabric samples directly to your home across Melbourne.",
  },
  {
    question: "What types of blinds are available?",
    answer:
      "We provide custom roller blinds, dual roller blinds (sunscreen + blockout), indoor blinds, and blackout solutions engineered for privacy, light control, and Australian climate insulation.",
  },
  {
    question: "Do you provide motorised blinds?",
    answer:
      "Yes, we specialize in wire-free and hardwired motorised blinds. You can control them with a stylish handheld remote, smartphone app, or integrate them into your home automation system.",
  },
  {
    question: "Do you offer free in-home consultations?",
    answer:
      "Yes, our in-home measure and design consultations are 100% complimentary and obligation-free. We measure your windows precisely and help you select the ideal fabrics and mechanisms.",
  },
  {
    question: "How long does fabrication and installation take?",
    answer:
      "Because our products are custom-made to measure, typical turnaround is 2 to 3 weeks from order confirmation, followed by prompt, clean professional installation by our team.",
  },
  {
    question: "Which areas do you service in Melbourne?",
    answer:
      "We proudly service homeowners across Melbourne including Bayswater, Ringwood, Doncaster, Glen Waverley, Camberwell, Hawthorn, Box Hill, and surrounding suburbs.",
  },
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-16 md:py-24 bg-gray-50/50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#EB4D98] bg-pink-100/60 px-3 py-1 rounded-full border border-pink-200">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mt-2.5">
            Find answers to common questions about our curtains, blinds and installation services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* FAQ Accordion (Left) */}
          <div className="lg:col-span-7 space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs transition-colors hover:border-pink-200"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full py-4.5 px-6 text-left flex items-center justify-between gap-4 font-bold text-gray-900 hover:text-[#EB4D98] transition-colors cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-[#EB4D98]" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-sm sm:text-base text-gray-600 leading-relaxed border-t border-gray-100 animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Side Callout Box (Screenshot 1) */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-pink-50 via-white to-pink-50/40 rounded-2xl p-7 sm:p-9 border border-pink-200 shadow-md">
              <div className="w-12 h-12 rounded-2xl bg-pink-100 text-[#EB4D98] flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight leading-snug">
                Ready to Transform Your Home?
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mt-3 leading-relaxed">
                Book your free in-home consultation and get a personalised, no-obligation quote today.
              </p>

              <div className="pt-8 space-y-3">
                <a
                  href="#quote-form"
                  className="w-full flex items-center justify-center gap-2 bg-[#EB4D98] hover:bg-[#d83784] text-white py-3.5 px-6 rounded-xl font-bold text-sm shadow-md shadow-pink-200 hover:shadow-lg transition-all active:scale-[0.99]"
                >
                  <span>Get a Free Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="w-full flex items-center justify-center gap-2 bg-white hover:bg-gray-50 border border-gray-300 text-gray-800 py-3.5 px-6 rounded-xl font-semibold text-sm transition-all hover:border-pink-300 hover:text-[#EB4D98]"
                >
                  <Phone className="w-4 h-4 text-[#EB4D98]" />
                  <span>Call {siteConfig.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
