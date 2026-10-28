export interface SiteConfig {
  name: string;
  tagline: string;
  phone: string;
  phoneRaw: string;
  email: string;
  address: string;
  serviceAreas: string[];
  primaryColor: string;
  domain: string;
  googleReviewsRating: number;
  googleReviewsCount: string;
  yearsExperience: string;
}

export const siteConfig: SiteConfig = {
  name: "Curtains Direct & Blinds",
  tagline: "Custom Curtains, Roller Blinds & Motorised Blinds Melbourne",
  phone: process.env.NEXT_PUBLIC_SITE_PHONE || "(03) 9729 5414",
  phoneRaw: process.env.NEXT_PUBLIC_SITE_PHONE_RAW || "+61397295414", // Australia international dial format (+61)
  email: "info@curtainsdirect.com.au",
  address: process.env.NEXT_PUBLIC_SITE_ADDRESS || "447 Mountain Highway, Bayswater VIC 3153",
  serviceAreas: [
    "Melbourne CBD",
    "Bayswater",
    "Ringwood",
    "Doncaster",
    "Glen Waverley",
    "Camberwell",
    "Box Hill",
    "Hawthorn",
    "Surrounding Suburbs",
  ],
  primaryColor: "#EB4D98",
  domain: process.env.NEXT_PUBLIC_SITE_URL || "https://web.curtainsdirectblinds.com.au",
  googleReviewsRating: 5.0,
  googleReviewsCount: "100+",
  yearsExperience: "30+",
};
