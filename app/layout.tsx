import type { Metadata, Viewport } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/config";
import PageLoader from "@/components/PageLoader";

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
  title: {
    default: "Curtains Direct & Blinds | Custom Curtains & Blinds Melbourne",
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Premium custom made-to-measure curtains, roller blinds, plantation shutters & motorised blinds across Melbourne. 30+ years experience, 5.0★ rating. Free in-home measure & quote!",
  keywords: [
    "curtains Melbourne",
    "blinds Melbourne",
    "custom curtains Melbourne",
    "roller blinds Melbourne",
    "motorised blinds Melbourne",
    "sheer curtains Melbourne",
    "blockout curtains Melbourne",
    "S-fold curtains Melbourne",
    "plantation shutters Melbourne",
    "custom blinds Melbourne",
    "curtains Berwick",
    "blinds Berwick",
    "Curtains Direct and Blinds",
    "Berwick Curtain Nook",
    "window coverings Melbourne",
    "in home curtain consultation Melbourne",
    "made to measure curtains Victoria",
    "commercial window furnishings Melbourne",
  ],
  metadataBase: new URL(siteConfig.domain),
  alternates: {
    canonical: "/",
    languages: {
      "en-AU": "/",
    },
  },
  authors: [{ name: siteConfig.name, url: siteConfig.domain }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  applicationName: siteConfig.name,
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    title: "Curtains Direct & Blinds | Custom Curtains & Blinds Melbourne",
    description:
      "Transform your home with custom curtains, roller blinds & motorised blinds. 30+ years experience, 5.0★ reviews. Free in-home consultation across Melbourne.",
    url: siteConfig.domain,
    siteName: siteConfig.name,
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: `${siteConfig.basePath}/images/hero-curtains-view.jpg?v=${siteConfig.version}`,
        width: 1200,
        height: 630,
        alt: "Curtains Direct & Blinds Melbourne Living Room Installation",
      },
      {
        url: `${siteConfig.basePath}/images/logo.svg`,
        width: 500,
        height: 500,
        alt: "Curtains Direct & Blinds Brand Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Curtains Direct & Blinds | Custom Curtains & Blinds Melbourne",
    description:
      "Custom curtains, roller blinds & motorised blinds in Melbourne. 30+ years experience, 5.0★ rating. Free in-home consultation & measuring.",
    images: [`${siteConfig.basePath}/images/hero-curtains-view.jpg?v=${siteConfig.version}`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: `${siteConfig.basePath}/favicon.svg`, type: "image/svg+xml" },
      { url: `${siteConfig.basePath}/images/logo.svg`, type: "image/svg+xml" },
    ],
    apple: [
      { url: `${siteConfig.basePath}/images/logo.svg` },
    ],
    shortcut: `${siteConfig.basePath}/favicon.svg`,
  },
  other: {
    "geo.region": "AU-VIC",
    "geo.placename": "Melbourne",
    "geo.position": "-37.8136;144.9631",
    "ICBM": "-37.8136, 144.9631",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["HomeAndConstructionBusiness", "Store", "LocalBusiness"],
        "@id": `${siteConfig.domain}/#localbusiness`,
        "name": siteConfig.name,
        "alternateName": "Berwick Curtain Nook",
        "description":
          "Melbourne's trusted specialists in custom made-to-measure curtains, roller blinds, plantation shutters, and motorised blinds. Over 30 years of local manufacturing and installation excellence.",
        "url": siteConfig.domain,
        "telephone": siteConfig.phoneRaw,
        "email": siteConfig.email,
        "priceRange": "$$",
        "image": `${siteConfig.domain}/images/hero-curtains-view.jpg`,
        "logo": `${siteConfig.domain}/images/logo.svg`,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "447 Mountain Highway",
          "addressLocality": "Bayswater",
          "addressRegion": "VIC",
          "postalCode": "3153",
          "addressCountry": "AU",
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -37.8136,
          "longitude": 144.9631,
        },
        "areaServed": siteConfig.serviceAreas.map((area) => ({
          "@type": "City",
          "name": area,
        })),
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "reviewCount": "100",
          "bestRating": "5",
          "worstRating": "1",
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "08:30",
            "closes": "18:00",
          },
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Custom Window Furnishings Melbourne",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Custom Curtains (Sheer, S-Fold, Blockout & Wave Fold)",
                "description": "Custom made-to-measure curtains with premium fabrics, thermal insulation, and custom curtain tracks.",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Custom Roller Blinds (Sunscreen, Blockout & Dual)",
                "description": "High performance roller blinds for modern Melbourne homes and offices with sleek finishes.",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Motorised Curtains & Blinds",
                "description": "Somfy & smart motorisation with app control, voice integration (Alexa/Google), and timer automation.",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Plantation Shutters & Venetian Blinds",
                "description": "Custom crafted PVC & timber plantation shutters and timber-look venetian blinds.",
              },
            },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.domain}/#website`,
        "url": siteConfig.domain,
        "name": siteConfig.name,
        "publisher": {
          "@id": `${siteConfig.domain}/#localbusiness`,
        },
      },
    ],
  };

  const gtmId =
    process.env.GTM_ID ||
    process.env.NEXT_PUBLIC_GTM_ID ||
    "GTM-WFKK7VSD";

  return (
    <html lang="en" className={`${jost.variable} h-full antialiased`}>
      <head>
        {/* Dynamic cPanel Configuration File (Allows editing GTM, phone, and URLs without rebuilding) */}
        <script src={`${siteConfig.basePath}/config.js`}></script>

        {/* Google Tag Manager initialization */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){
              var id = (w.__SITE_CONFIG__ && w.__SITE_CONFIG__.GTM_ID) || '${gtmId}';
              w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+id+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer');`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-white text-gray-900 selection:bg-pink-100 selection:text-[#EB4D98]">
        {gtmId && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}
        <PageLoader />
        {children}
      </body>
    </html>
  );
}
