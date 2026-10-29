"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, ArrowRight, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { CustomSelect, SelectOption } from "@/components/ui/CustomSelect";

const BOTTOM_PRODUCT_OPTIONS: SelectOption[] = [
  { value: "Curtains", label: "Curtains" },
  { value: "Roller Blinds & Indoor Blinds", label: "Roller Blinds & Indoor Blinds" },
  { value: "Motorised Blinds", label: "Motorised Blinds" },
  { value: "Curtains & Blinds Package", label: "Curtains & Blinds Package" },
  { value: "Complete Home Package", label: "Complete Home Package" },
];

export const BottomConsultationSection: React.FC = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [suburb, setSuburb] = useState("");
  const [product, setProduct] = useState("Curtains");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name.trim() || !phone.trim() || !email.trim() || !suburb.trim()) {
      setErrorMsg("Please complete Name, Phone, Email, and Suburb.");
      return;
    }
    if (!emailRegex.test(email.trim())) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    setIsLoading(true);
    try {
      const endpoint = siteConfig.basePath
        ? `${siteConfig.basePath}/api/quote.php`
        : "/api/quote";
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          email: email || undefined,
          suburb,
          product,
          pageUrl: typeof window !== "undefined" ? window.location.href : "/",
        }),
      });
      const data = await res.json();
      if (!res.ok || data.error) {
        setErrorMsg(data.error || "Submission failed. Please try again.");
      } else {
        setIsSuccess(true);
        if (typeof window !== "undefined") {
          const w = window as unknown as { dataLayer?: Array<Record<string, unknown>> };
          w.dataLayer = w.dataLayer || [];
          w.dataLayer.push({
            event: "generate_lead",
            event_category: "Consultation Form",
            event_label: product,
            lead_id: data.leadId,
            suburb: suburb,
          });
        }
        window.location.href = siteConfig.basePath
          ? `${siteConfig.basePath}/thank-you/`
          : "/thank-you";
      }
    } catch {
      setErrorMsg("Connection error. Please try again or call us.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-8 md:py-12 bg-white">
      <div className="max-w-[1500px] mx-auto px-8">
        <div className="bg-pink-50/60 border border-pink-100 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Heading and Contact Links */}
            <div className="lg:col-span-5 space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#EB4D98] tracking-tight">
                Get a Free In-Home Consultation
              </h2>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Contact Curtains Direct &amp; Blinds to discuss your curtains, blinds, shutters or motorised blinds. Our experienced Melbourne team is here to help.
              </p>

              <div className="pt-1 flex flex-col sm:flex-row lg:flex-col gap-3">
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="flex items-center gap-3 text-gray-800 hover:text-[#EB4D98] transition-colors group"
                >
                  <div className="w-9 h-9 rounded-full bg-pink-100 text-[#EB4D98] flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
                    <Phone className="w-4 h-4 fill-current" />
                  </div>
                  <div>
                    <div className="text-[11px] text-gray-500 font-medium">Call Us</div>
                    <div className="text-sm sm:text-base font-bold text-gray-900 group-hover:text-[#EB4D98] transition-colors">
                      {siteConfig.phone}
                    </div>
                  </div>
                </a>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-gray-800 hover:text-[#EB4D98] transition-colors group"
                >
                  <div className="w-9 h-9 rounded-full bg-pink-100 text-[#EB4D98] flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-gray-500 font-medium">Email Us</div>
                    <div className="text-sm sm:text-base font-bold text-gray-900 group-hover:text-[#EB4D98] transition-colors">
                      {siteConfig.email}
                    </div>
                  </div>
                </a>

                <div className="flex items-start gap-3 text-gray-800">
                  <div className="w-9 h-9 rounded-full bg-pink-100 text-[#EB4D98] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-gray-500 font-medium">Showroom &amp; Office</div>
                    <div className="text-xs sm:text-sm font-semibold text-gray-900">
                      {siteConfig.address}
                    </div>
                  </div>
                </div>

                {/* Social Media Links */}
                <div className="pt-2 flex items-center gap-2">
                  <span className="text-xs text-gray-500 font-semibold">Follow Us:</span>
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-pink-600 bg-white hover:bg-pink-100 border border-pink-200 transition-all hover:scale-105 active:scale-95 shadow-2xs"
                    aria-label="Instagram"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span>Instagram</span>
                  </a>
                  <a
                    href={siteConfig.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-blue-600 bg-white hover:bg-blue-50 border border-blue-200 transition-all hover:scale-105 active:scale-95 shadow-2xs"
                    aria-label="Facebook"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <span>Facebook</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Inline Quote Form (Screenshot 2) */}
            <div className="lg:col-span-7 bg-white rounded-2xl p-5 sm:p-7 border border-pink-100 shadow-2xs">
              {isSuccess ? (
                <div className="text-center py-6">
                  <CheckCircle2 className="w-10 h-10 text-[#EB4D98] mx-auto mb-2.5" />
                  <h3 className="text-lg font-bold text-gray-900">Enquiry Sent!</h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">
                    We will be in touch shortly to book your free in-home consultation.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSuccess(false)}
                    className="mt-3 text-xs font-semibold text-[#EB4D98] underline cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  {errorMsg && (
                    <div className="p-2.5 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="bottom-name" className="sr-only">Name *</label>
                      <input
                        id="bottom-name"
                        type="text"
                        required
                        placeholder="Name *"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs sm:text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#EB4D98]/40 focus:border-[#EB4D98] focus:bg-white transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="bottom-phone" className="sr-only">Phone *</label>
                      <input
                        id="bottom-phone"
                        type="tel"
                        required
                        placeholder="Phone *"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs sm:text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#EB4D98]/40 focus:border-[#EB4D98] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="bottom-email" className="sr-only">Email Address *</label>
                      <input
                        id="bottom-email"
                        type="email"
                        required
                        placeholder="Email Address *"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs sm:text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#EB4D98]/40 focus:border-[#EB4D98] focus:bg-white transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="bottom-suburb" className="sr-only">Suburb *</label>
                      <input
                        id="bottom-suburb"
                        type="text"
                        required
                        placeholder="Suburb *"
                        value={suburb}
                        onChange={(e) => setSuburb(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs sm:text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#EB4D98]/40 focus:border-[#EB4D98] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
                    <div className="sm:col-span-7">
                      <label htmlFor="bottom-product" className="sr-only">I&apos;m interested in</label>
                      <CustomSelect
                        id="bottom-product"
                        value={product}
                        onChange={setProduct}
                        options={BOTTOM_PRODUCT_OPTIONS}
                        placeholder="I'm interested in..."
                      />
                    </div>

                    <div className="sm:col-span-5">
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="btn-sheen w-full flex items-center justify-center gap-2 bg-[#EB4D98] hover:bg-[#d83784] text-white py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm shadow-md shadow-pink-200/80 hover:shadow-lg transition-all duration-300 active:scale-[0.99] disabled:opacity-75 cursor-pointer group"
                      >
                        {isLoading ? (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                          <>
                            <span>Request a Quote</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
