import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/lib/config";
import { FileText, ArrowLeft } from "lucide-react";

export const metadata = {
  title: `Terms & Conditions | ${siteConfig.name}`,
  description: `Terms and conditions for ${siteConfig.name}.`,
};

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1 max-w-[1500px] w-full mx-auto px-8 py-10 md:py-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#EB4D98] hover:text-[#d83784] mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-pink-50 text-[#EB4D98] flex items-center justify-center">
            <FileText className="w-5 h-5" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Terms &amp; Conditions
          </h1>
        </div>

        <div className="prose prose-gray max-w-none space-y-6 text-gray-700 leading-relaxed text-sm sm:text-base">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-900">1. Consultations &amp; Quotes</h2>
            <p>
              Free in-home consultations and quotations provided by {siteConfig.name} are offered with no obligation to purchase. All quotes are customized based on measurements, chosen fabric selections, and installation requirements.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-900">2. Custom Made-to-Measure Products</h2>
            <p>
              All curtains, roller blinds, and motorised blinds are custom manufactured to the agreed specifications of each customer. Production commences following final measurement sign-off and deposit receipt.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-900">3. Contact</h2>
            <p>
              For any questions regarding these terms, contact our Melbourne team at {siteConfig.phone} or via email at {siteConfig.email}.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
