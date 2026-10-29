import type { NextConfig } from "next";

const isCpanel =
  process.env.BUILD_TARGET === "cpanel" ||
  process.env.NEXT_PUBLIC_BUILD_TARGET === "cpanel";

const nextConfig: NextConfig = {
  generateBuildId: async () => {
    return `build-${Date.now()}`;
  },
  images: {
    localPatterns: [
      {
        pathname: "/**",
      },
    ],
    ...(isCpanel
      ? {
          unoptimized: true,
        }
      : {}),
  },
  ...(isCpanel
    ? {
        output: "export",
        basePath: "/web",
        trailingSlash: true,
      }
    : {}),
};

export default nextConfig;
