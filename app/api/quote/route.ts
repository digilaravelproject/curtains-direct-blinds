import { NextRequest, NextResponse } from "next/server";
import { appendLeadToSheet, LeadSubmission } from "@/lib/google-sheets";

// Simple in-memory rate limiter per IP
const rateLimitMap = new Map<string, { count: number; firstRequestTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5;

const ALLOWED_PRODUCTS = [
  "Curtains",
  "Roller Blinds & Indoor Blinds",
  "Motorised Blinds",
  "Curtains & Blinds Package",
  "Complete Home Package",
  "Other / Consultation",
];

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() || "127.0.0.1";
    const now = Date.now();

    // Check rate limit
    const userLimit = rateLimitMap.get(ip);
    if (userLimit) {
      if (now - userLimit.firstRequestTime < RATE_LIMIT_WINDOW) {
        if (userLimit.count >= MAX_REQUESTS_PER_WINDOW) {
          return NextResponse.json(
            { error: "Too many requests. Please wait a moment before trying again." },
            { status: 429 }
          );
        }
        userLimit.count++;
      } else {
        rateLimitMap.set(ip, { count: 1, firstRequestTime: now });
      }
    } else {
      rateLimitMap.set(ip, { count: 1, firstRequestTime: now });
    }

    const body = await req.json().catch(() => null);
    if (!body) {
      return NextResponse.json({ error: "Invalid request payload" }, { status: 400 });
    }

    const {
      name,
      phone,
      email,
      suburb,
      product,
      message,
      honeypot,
      utmSource,
      utmMedium,
      utmCampaign,
      pageUrl,
    } = body;

    // Honeypot spam trap
    if (honeypot && String(honeypot).trim().length > 0) {
      // Silently return success to bot without saving
      return NextResponse.json({ success: true, leadId: "CDB-SPAM-FILTERED" });
    }

    // Required fields check
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json({ error: "Please enter your full name (minimum 2 characters)." }, { status: 400 });
    }

    if (!phone || typeof phone !== "string" || phone.trim().length < 8) {
      return NextResponse.json({ error: "Please enter a valid contact phone number." }, { status: 400 });
    }

    if (!suburb || typeof suburb !== "string" || suburb.trim().length < 2) {
      return NextResponse.json({ error: "Please provide your suburb or area." }, { status: 400 });
    }

    // Email format check if provided
    if (email && typeof email === "string" && email.trim().length > 0) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.trim())) {
        return NextResponse.json({ error: "Please enter a valid email address or leave it blank." }, { status: 400 });
      }
    }

    // Validate product against allowlist or default
    let validatedProduct = "Curtains & Blinds Package";
    if (product && ALLOWED_PRODUCTS.includes(product.trim())) {
      validatedProduct = product.trim();
    } else if (product && typeof product === "string") {
      validatedProduct = product.trim().slice(0, 50);
    }

    // Generate unique Lead ID
    const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, "");
    const randomHex = Math.random().toString(36).substring(2, 7).toUpperCase();
    const leadId = `CDB-${dateStr}-${randomHex}`;

    // Timestamp formatting
    const submissionDate = new Date();
    const formattedDate = submissionDate.toLocaleString("en-AU", {
      timeZone: "Australia/Melbourne",
      dateStyle: "medium",
      timeStyle: "medium",
    });

    const lead: LeadSubmission = {
      id: leadId,
      name: name.trim().slice(0, 100),
      phone: phone.trim().slice(0, 25),
      email: email ? email.trim().slice(0, 100) : undefined,
      suburb: suburb.trim().slice(0, 100),
      product: validatedProduct,
      message: message ? String(message).trim().slice(0, 1000) : undefined,
      utmSource: utmSource ? String(utmSource).slice(0, 50) : undefined,
      utmMedium: utmMedium ? String(utmMedium).slice(0, 50) : undefined,
      utmCampaign: utmCampaign ? String(utmCampaign).slice(0, 50) : undefined,
      pageUrl: pageUrl ? String(pageUrl).slice(0, 150) : "/",
      createdAt: submissionDate.toISOString(),
      formattedDate,
    };

    // Save lead to Google Sheet (with local fallback)
    const result = await appendLeadToSheet(lead);

    return NextResponse.json({
      success: true,
      leadId,
      message: "Thank you! Your quote request has been received. Our team will contact you shortly.",
      syncStatus: result.destination,
    });
  } catch (error) {
    console.error("[Quote API Route Error]:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your request. Please try again or call us directly." },
      { status: 500 }
    );
  }
}
