import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/lib/config";
import { Shield, ArrowLeft } from "lucide-react";

export const metadata = {
  title: `Privacy Policy | ${siteConfig.name}`,
  description: `Privacy policy and information handling practices of ${siteConfig.name}.`,
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#EB4D98] hover:text-[#d83784] mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-pink-50 text-[#EB4D98] flex items-center justify-center">
            <Shield className="w-5 h-5" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Privacy Policy
          </h1>
        </div>

        <p className="text-sm text-gray-500 mb-8">
          Last updated: October 2026
        </p>

        <div className="prose prose-gray max-w-none space-y-6 text-gray-700 leading-relaxed text-sm sm:text-base">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-900">1. Information We Collect</h2>
            <p>
              When you submit a quote request on our website, we collect personal contact details provided directly by you, including your full name, telephone number, email address (optional), suburb/locality, and window furnishings of interest.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-900">2. How We Use Your Information</h2>
            <p>
              We collect this information strictly for the purpose of:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Responding to your enquiry and providing quotes for curtains and blinds.</li>
              <li>Scheduling your free in-home consultation and measuring appointment.</li>
              <li>Delivering professional customer service and installation support.</li>
            </ul>
            <p>
              We do not sell, rent, or lease your personal information to any third parties for unsolicited marketing purposes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-900">3. Data Storage &amp; Security</h2>
            <p>
              Enquiries are securely recorded and transmitted using industry-standard SSL encryption. Lead records are stored in secure, access-controlled databases and Google Sheets strictly restricted to authorised company staff.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-900">4. Contact Us Regarding Your Data</h2>
            <p>
              If you wish to update, review, or request deletion of your contact information from our records, please reach out to us:
            </p>
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
              <p className="font-semibold text-gray-900">{siteConfig.name}</p>
              <p>Email: <a href={`mailto:${siteConfig.email}`} className="text-[#EB4D98]">{siteConfig.email}</a></p>
              <p>Phone: <a href={`tel:${siteConfig.phoneRaw}`} className="text-[#EB4D98]">{siteConfig.phone}</a></p>
              <p>Location: {siteConfig.address}</p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
