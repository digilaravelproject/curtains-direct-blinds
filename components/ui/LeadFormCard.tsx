"use client";

import React, { useState, useEffect, useRef } from "react";
import { Lock, ArrowRight, Loader2, CheckCircle2, AlertCircle, Sparkles } from "lucide-react";

interface LeadFormCardProps {
  id?: string;
  defaultProduct?: string;
  compact?: boolean;
}

export const LeadFormCard: React.FC<LeadFormCardProps> = ({
  id = "quote-form",
  defaultProduct = "Curtains",
  compact = false,
}) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [suburb, setSuburb] = useState("");
  const [product, setProduct] = useState(defaultProduct);
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successLeadId, setSuccessLeadId] = useState<string | null>(null);

  // 3D Tilt interaction
  const cardRef = useRef<HTMLDivElement>(null);
  const [tiltStyle, setTiltStyle] = useState({
    transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)",
    transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -5; // max 5 deg tilt
    const rotateY = ((x - centerX) / centerX) * 5;

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`,
      transition: "transform 0.1s ease-out",
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)",
      transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
    });
  };

  // Listen for custom event if external button selects category
  useEffect(() => {
    const handleSelectProduct = (e: CustomEvent<string>) => {
      if (e.detail) {
        setProduct(e.detail);
      }
    };
    window.addEventListener("selectProductCategory" as any, handleSelectProduct);
    return () => window.removeEventListener("selectProductCategory" as any, handleSelectProduct);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!name.trim()) {
      setErrorMsg("Please enter your name.");
      return;
    }
    if (!phone.trim()) {
      setErrorMsg("Please enter your contact phone number.");
      return;
    }
    if (!suburb.trim()) {
      setErrorMsg("Please enter your suburb.");
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
          message: message || undefined,
          honeypot,
          pageUrl: typeof window !== "undefined" ? window.location.href : "/",
        }),
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        setErrorMsg(data.error || "Unable to submit your quote request. Please try again.");
      } else {
        setSuccessLeadId(data.leadId || "SUBMITTED");
        // Reset form
        setName("");
        setPhone("");
        setEmail("");
        setSuburb("");
        setMessage("");
      }
    } catch {
      setErrorMsg("Connection issue. Please check your network or call us directly.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={tiltStyle}
      id={id}
      className={`relative bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl shadow-pink-200/50 border border-pink-100/90 p-6 sm:p-8 transform-gpu preserve-3d ${
        compact ? "max-w-xl mx-auto" : "w-full max-w-md"
      }`}
    >
      {/* 3D ambient glow edge */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-400 to-[#EB4D98] rounded-3xl opacity-15 blur-xs -z-10 group-hover:opacity-30 transition-opacity" />

      {successLeadId ? (
        <div className="text-center py-6 animate-in fade-in zoom-in-95 duration-400">
          <div className="relative w-16 h-16 bg-pink-50 text-[#EB4D98] rounded-full flex items-center justify-center mx-auto mb-4 ring-8 ring-pink-50/70 shadow-inner">
            <CheckCircle2 className="w-10 h-10 animate-bounce duration-700" />
            <Sparkles className="w-5 h-5 absolute -top-1 -right-1 text-[#EB4D98] animate-pulse" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Quote Request Received!</h3>
          <p className="text-gray-600 text-sm mb-4 leading-relaxed">
            Thank you! Our friendly Melbourne team will contact you shortly to confirm your free in-home consultation.
          </p>
          <div className="inline-block bg-pink-50/80 border border-pink-200 text-[#EB4D98] text-xs font-semibold px-4 py-1.5 rounded-full mb-6 shadow-xs">
            Ref ID: {successLeadId}
          </div>
          <div>
            <button
              type="button"
              onClick={() => setSuccessLeadId(null)}
              className="text-xs font-semibold text-gray-500 hover:text-[#EB4D98] underline transition-colors cursor-pointer"
            >
              Submit another request
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          <div>
            <h3 className="text-2xl sm:text-[26px] font-bold text-[#EB4D98] tracking-tight">
              Get Your Free Quote
            </h3>
            <p className="text-gray-600 text-xs sm:text-[13px] mt-1 leading-relaxed">
              Fill in the form and our friendly team will arrange your free in-home consultation.
            </p>
          </div>

          {errorMsg && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl flex items-start gap-2 animate-in fade-in">
              <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Honeypot field (hidden from screen, bots fill it) */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="company_website_hp">Leave blank</label>
            <input
              id="company_website_hp"
              type="text"
              name="company_website"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div>
            <label htmlFor="lead-name" className="sr-only">Full Name *</label>
            <input
              id="lead-name"
              type="text"
              required
              placeholder="Full Name *"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50/80 border border-gray-200 rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#EB4D98]/40 focus:border-[#EB4D98] focus:bg-white shadow-2xs transition-all duration-200"
            />
          </div>

          <div>
            <label htmlFor="lead-phone" className="sr-only">Phone Number *</label>
            <input
              id="lead-phone"
              type="tel"
              required
              placeholder="Phone Number *"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50/80 border border-gray-200 rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#EB4D98]/40 focus:border-[#EB4D98] focus:bg-white shadow-2xs transition-all duration-200"
            />
          </div>

          <div>
            <label htmlFor="lead-email" className="sr-only">Email (optional)</label>
            <input
              id="lead-email"
              type="email"
              placeholder="Email (optional)"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50/80 border border-gray-200 rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#EB4D98]/40 focus:border-[#EB4D98] focus:bg-white shadow-2xs transition-all duration-200"
            />
          </div>

          <div>
            <label htmlFor="lead-suburb" className="sr-only">Your Suburb *</label>
            <input
              id="lead-suburb"
              type="text"
              required
              placeholder="Your Suburb *"
              value={suburb}
              onChange={(e) => setSuburb(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50/80 border border-gray-200 rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#EB4D98]/40 focus:border-[#EB4D98] focus:bg-white shadow-2xs transition-all duration-200"
            />
          </div>

          <div>
            <label htmlFor="lead-product" className="sr-only">What are you interested in?</label>
            <div className="relative">
              <select
                id="lead-product"
                value={product}
                onChange={(e) => setProduct(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50/80 border border-gray-200 rounded-xl text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#EB4D98]/40 focus:border-[#EB4D98] focus:bg-white shadow-2xs transition-all duration-200 appearance-none cursor-pointer"
              >
                <option value="Curtains">Curtains</option>
                <option value="Roller Blinds & Indoor Blinds">Roller Blinds &amp; Indoor Blinds</option>
                <option value="Motorised Blinds">Motorised Blinds</option>
                <option value="Curtains & Blinds Package">Curtains &amp; Blinds Package</option>
                <option value="Complete Home Package">Complete Home Package</option>
                <option value="Other / Consultation">Other / Custom Enquiry</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="btn-sheen w-full flex items-center justify-center gap-2 bg-[#EB4D98] hover:bg-[#d83784] text-white py-3.5 px-6 rounded-xl font-bold text-sm shadow-lg shadow-pink-200/80 hover:shadow-xl hover:shadow-pink-300 transition-all duration-300 active:scale-[0.98] disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Sending Request...</span>
              </>
            ) : (
              <>
                <span>Request a Free Quote</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </button>

          {/* Privacy & Trust Lock Note */}
          <div className="flex items-center justify-center gap-2 text-[11px] text-gray-400 pt-1 text-center">
            <Lock className="w-3.5 h-3.5 text-gray-400 shrink-0" />
            <span>Your information is secure and will only be used to respond to your enquiry.</span>
          </div>
        </form>
      )}
    </div>
  );
};
