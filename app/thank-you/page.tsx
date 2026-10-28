import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/lib/config";
import { CheckCircle2, Phone, Calendar, Ruler, Sparkles, ArrowRight, Home } from "lucide-react";
import { ThankYouTracker } from "@/components/analytics/ThankYouTracker";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Thank You | ${siteConfig.name}`,
  description: `Thank you for requesting a free quote from ${siteConfig.name}. We will contact you shortly.`,
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50/50">
      <ThankYouTracker />
      <Navbar />

      <main className="flex-1 max-w-[1000px] w-full mx-auto px-6 sm:px-8 py-12 md:py-16">
        <div className="bg-white rounded-3xl border border-pink-100 shadow-xl shadow-pink-500/5 p-8 sm:p-12 text-center">
          {/* Animated Success Badge */}
          <div className="w-20 h-20 mx-auto rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center border-4 border-emerald-100 mb-6 shadow-sm">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <span className="inline-block px-3.5 py-1 rounded-full bg-pink-50 text-[#EB4D98] font-semibold text-xs tracking-wide uppercase mb-3">
            Enquiry Received
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Thank You for Your Enquiry!
          </h1>

          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            We have received your free quote request. Our Melbourne window furnishing specialists will review your requirements and get in touch within <strong className="text-gray-900">1 business day</strong> to confirm your free in-home consultation &amp; measure.
          </p>

          {/* Urgent Call Banner */}
          <div className="bg-gradient-to-r from-pink-50 via-pink-50/70 to-pink-50 rounded-2xl p-6 border border-pink-100 max-w-xl mx-auto mb-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
            <div>
              <p className="font-bold text-gray-900 text-sm sm:text-base">Need immediate assistance?</p>
              <p className="text-xs sm:text-sm text-gray-600">Speak directly with our Berwick &amp; Melbourne team.</p>
            </div>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="inline-flex items-center gap-2 bg-[#EB4D98] hover:bg-[#d83784] text-white px-5 py-2.5 rounded-full font-bold text-sm shadow-sm transition-all hover:scale-105 active:scale-95 flex-shrink-0"
            >
              <Phone className="w-4 h-4 fill-white/20" />
              <span>Call {siteConfig.phone}</span>
            </a>
          </div>

          {/* What happens next */}
          <div className="border-t border-gray-100 pt-8 mb-10 text-left">
            <h2 className="text-lg font-bold text-gray-900 mb-6 text-center">What Happens Next?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-pink-100/70 text-[#EB4D98] flex items-center justify-center font-bold mb-3">
                  <Calendar className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-1">1. Consultation Booking</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  We schedule a convenient time to visit your home with fabric samples and swatch books.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-pink-100/70 text-[#EB4D98] flex items-center justify-center font-bold mb-3">
                  <Ruler className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-1">2. Laser-Accurate Measure</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Our professional fitter takes millimeter-exact window measurements and provides styling advice.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-pink-100/70 text-[#EB4D98] flex items-center justify-center font-bold mb-3">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-1">3. Custom Crafting &amp; Fit</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Your custom curtains or blinds are locally manufactured and installed with a 5-year warranty.
                </p>
              </div>
            </div>
          </div>

          {/* Return Home Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900 hover:bg-gray-800 text-white font-semibold text-sm transition-all"
            >
              <Home className="w-4 h-4" />
              <span>Back to Homepage</span>
            </Link>
            <a
              href="/#curtains"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 font-semibold text-sm transition-all"
            >
              <span>Explore Window Treatments</span>
              <ArrowRight className="w-4 h-4 text-[#EB4D98]" />
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
