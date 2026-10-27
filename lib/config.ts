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
  phone: "(03) 9876 1234",
  phoneRaw: "+61398761234", // E.164 format for tel: link
  email: "info@curtainsdirect.com.au",
  address: "Melbourne, Victoria, Australia",
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
  domain: process.env.NEXT_PUBLIC_SITE_URL || "https://curtainsdirectblinds.com.au",
  googleReviewsRating: 5.0,
  googleReviewsCount: "100+",
  yearsExperience: "30+",
};
