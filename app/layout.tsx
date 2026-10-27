import type { Metadata, Viewport } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/config";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#EB4D98",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Curtains Direct & Blinds | Custom Curtains & Blinds Melbourne",
  description:
    "Custom curtains, roller blinds & motorised blinds in Melbourne. Free in-home consultation, expert advice & measuring, and professional installation. Request your free quote today!",
  keywords: [
    "curtains Melbourne",
    "blinds Melbourne",
    "custom curtains",
    "roller blinds Melbourne",
    "motorised blinds",
    "curtains direct blinds",
    "window coverings Melbourne",
    "in-home consultation blinds",
  ],
  metadataBase: new URL(siteConfig.domain),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Curtains Direct & Blinds | Custom Curtains & Blinds Melbourne",
    description:
      "Transform your home with custom curtains, roller blinds and motorised blinds. Free in-home consultation & professional installation across Melbourne.",
    url: siteConfig.domain,
    siteName: siteConfig.name,
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "/images/hero-living.jpg",
        width: 1200,
        height: 630,
        alt: "Curtains Direct & Blinds Melbourne Living Room Installation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Curtains Direct & Blinds | Custom Curtains & Blinds Melbourne",
    description:
      "Custom curtains, roller blinds & motorised blinds in Melbourne. Free in-home consultation & measuring.",
    images: ["/images/hero-living.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": siteConfig.name,
    "description":
      "Custom curtains, roller blinds and motorised blinds made to measure and professionally installed across Melbourne.",
    "url": siteConfig.domain,
    "telephone": siteConfig.phoneRaw,
    "email": siteConfig.email,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Melbourne",
      "addressRegion": "VIC",
      "addressCountry": "AU",
    },
    "areaServed": siteConfig.serviceAreas.map((area) => ({
      "@type": "Place",
      "name": area,
    })),
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "08:30",
        "closes": "18:00",
      },
    ],
  };

  return (
    <html lang="en" className={`${jost.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-white text-gray-900 selection:bg-pink-100 selection:text-[#EB4D98]">
        {children}
      </body>
    </html>
  );
}
