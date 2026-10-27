"use client";

import React, { useState } from "react";
import { Phone, Mail, ArrowRight, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { siteConfig } from "@/lib/config";

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

    if (!name.trim() || !phone.trim() || !suburb.trim()) {
      setErrorMsg("Please complete Name, Phone, and Suburb.");
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch("/api/quote", {
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
      }
    } catch {
      setErrorMsg("Connection error. Please try again or call us.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-14 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-pink-50/60 border border-pink-100 rounded-3xl p-8 sm:p-10 lg:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Heading and Contact Links */}
            <div className="lg:col-span-5 space-y-5">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#EB4D98] tracking-tight">
                Get a Free In-Home Consultation
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Contact Curtains Direct &amp; Blinds to discuss your curtains, blinds, shutters or motorised blinds. Our experienced Melbourne team is here to help.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row lg:flex-col gap-4">
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="flex items-center gap-3 text-gray-800 hover:text-[#EB4D98] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-pink-100 text-[#EB4D98] flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
                    <Phone className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-medium">Call Us</div>
                    <div className="text-base font-bold text-gray-900 group-hover:text-[#EB4D98] transition-colors">
                      {siteConfig.phone}
                    </div>
                  </div>
                </a>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-gray-800 hover:text-[#EB4D98] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-pink-100 text-[#EB4D98] flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-medium">Email Us</div>
                    <div className="text-base font-bold text-gray-900 group-hover:text-[#EB4D98] transition-colors">
                      {siteConfig.email}
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Column: Inline Quote Form (Screenshot 2) */}
            <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-pink-100 shadow-sm">
              {isSuccess ? (
                <div className="text-center py-8">
                  <CheckCircle2 className="w-12 h-12 text-[#EB4D98] mx-auto mb-3" />
                  <h3 className="text-xl font-bold text-gray-900">Enquiry Sent!</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    We will be in touch shortly to book your free in-home consultation.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSuccess(false)}
                    className="mt-4 text-xs font-semibold text-[#EB4D98] underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMsg && (
                    <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="bottom-name" className="sr-only">Name *</label>
                      <input
                        id="bottom-name"
                        type="text"
                        required
                        placeholder="Name *"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#EB4D98]/40 focus:border-[#EB4D98] focus:bg-white transition-all"
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
                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#EB4D98]/40 focus:border-[#EB4D98] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="bottom-email" className="sr-only">Email</label>
                      <input
                        id="bottom-email"
                        type="email"
                        placeholder="Email (optional)"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#EB4D98]/40 focus:border-[#EB4D98] focus:bg-white transition-all"
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
                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#EB4D98]/40 focus:border-[#EB4D98] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                    <div className="sm:col-span-7">
                      <label htmlFor="bottom-product" className="sr-only">I&apos;m interested in</label>
                      <select
                        id="bottom-product"
                        value={product}
                        onChange={(e) => setProduct(e.target.value)}
                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#EB4D98]/40 focus:border-[#EB4D98] focus:bg-white transition-all"
                      >
                        <option value="Curtains">Curtains</option>
                        <option value="Roller Blinds & Indoor Blinds">Roller Blinds &amp; Indoor Blinds</option>
                        <option value="Motorised Blinds">Motorised Blinds</option>
                        <option value="Curtains & Blinds Package">Curtains &amp; Blinds Package</option>
                        <option value="Complete Home Package">Complete Home Package</option>
                      </select>
                    </div>

                    <div className="sm:col-span-5">
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="btn-sheen w-full flex items-center justify-center gap-2 bg-[#EB4D98] hover:bg-[#d83784] text-white py-2.5 px-5 rounded-xl font-bold text-sm shadow-md shadow-pink-200/80 hover:shadow-lg transition-all duration-300 active:scale-[0.99] disabled:opacity-75 cursor-pointer group"
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
