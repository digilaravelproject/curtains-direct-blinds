"use client";

import { useEffect } from "react";

export const ThankYouTracker: React.FC = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const w = window as unknown as { dataLayer?: Array<Record<string, unknown>> };
      w.dataLayer = w.dataLayer || [];
      w.dataLayer.push({
        event: "conversion_thank_you",
        event_category: "Lead Generation",
        event_action: "Form Submission",
        page_path: "/web/thank-you",
        timestamp: new Date().toISOString(),
      });
    }
  }, []);

  return null;
};
