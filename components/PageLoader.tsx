"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/lib/config";

export default function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade out after 1.2s
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 1200);

    // Remove from DOM after fade completes
    const removeTimer = setTimeout(() => {
      setVisible(false);
    }, 1700);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFFFFF",
        transition: "opacity 0.5s ease",
        opacity: fadeOut ? 0 : 1,
        pointerEvents: fadeOut ? "none" : "all",
      }}
    >
      {/* Logo with pulse animation */}
      <div
        style={{
          width: 120,
          height: 120,
          borderRadius: 20,
          overflow: "hidden",
          boxShadow: "0 8px 32px rgba(235,77,152,0.25)",
          animation: "loaderPulse 1.2s ease-in-out infinite",
        }}
      >
        <Image
          src={`${siteConfig.basePath}/images/logo.svg`}
          alt="Curtains Direct & Blinds"
          width={120}
          height={120}
          priority
          unoptimized
        />
      </div>

      {/* Brand name */}
      <p
        style={{
          marginTop: 20,
          fontSize: 15,
          fontWeight: 600,
          color: "#EB4D98",
          letterSpacing: "0.04em",
          fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        }}
      >
        Curtains Direct &amp; Blinds
      </p>

      {/* Loading dots */}
      <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: "#EB4D98",
              display: "inline-block",
              animation: `loaderDot 1s ease-in-out ${i * 0.2}s infinite`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes loaderPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.06); }
        }
        @keyframes loaderDot {
          0%, 100% { opacity: 0.3; transform: translateY(0); }
          50% { opacity: 1; transform: translateY(-4px); }
        }
      `}</style>
    </div>
  );
}

