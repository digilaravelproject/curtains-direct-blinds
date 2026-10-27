import { google } from "googleapis";
import fs from "fs";
import path from "path";

export interface LeadSubmission {
  id: string;
  name: string;
  phone: string;
  email?: string;
  suburb: string;
  product: string;
  message?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  pageUrl?: string;
  createdAt: string; // ISO string
  formattedDate: string; // Human readable formatted timestamp
}

/**
 * Formula injection protection:
 * Characters =, +, -, @ at the start of a cell in spreadsheets can trigger formulas.
 * We prefix with a single quote ' to treat as literal text in Google Sheets.
 */
function sanitizeForSpreadsheet(val: string | undefined): string {
  if (!val) return "";
  const trimmed = val.trim();
  if (/^[=+\-@\t\r]/.test(trimmed)) {
    return `'${trimmed}`;
  }
  return trimmed;
}

export async function appendLeadToSheet(lead: LeadSubmission): Promise<{
  success: boolean;
  destination: "google_sheets" | "google_webhook" | "local_store";
  message: string;
}> {
  // Always persist lead locally as a reliable durability layer first
  persistLeadLocally(lead);

  // Method 1: Google Apps Script Webhook (Easiest, zero-console 1-minute setup)
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  if (webhookUrl && webhookUrl.startsWith("http")) {
    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          leadId: lead.id,
          date: lead.formattedDate,
          name: lead.name,
          phone: lead.phone,
          email: lead.email || "N/A",
          product: lead.product,
          suburb: lead.suburb,
          message: lead.message || "N/A",
          pageUrl: lead.pageUrl || "/",
          status: "New Enquiry",
        }),
      });

      if (response.ok) {
        return {
          success: true,
          destination: "google_webhook",
          message: "Lead successfully recorded to Google Sheet via Webhook.",
        };
      }
    } catch (err) {
      console.error("[Google Sheet Webhook Error]:", err);
    }
  }

  // Method 2: Google Cloud Service Account (Enterprise Google Sheets API)
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
  const sheetName = process.env.GOOGLE_SHEETS_SHEET_NAME || "Quote Leads";
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  let privateKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY;

  if (spreadsheetId && clientEmail && privateKey) {
    try {
      if (privateKey.startsWith('"') && privateKey.endsWith('"')) {
        privateKey = privateKey.slice(1, -1);
      }
      privateKey = privateKey.replace(/\\n/g, "\n");

      const auth = new google.auth.JWT({
        email: clientEmail,
        key: privateKey,
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
      });

      const sheets = google.sheets({ version: "v4", auth });

      const rowValues = [
        sanitizeForSpreadsheet(lead.id),
        sanitizeForSpreadsheet(lead.formattedDate),
        sanitizeForSpreadsheet(lead.name),
        sanitizeForSpreadsheet(lead.phone),
        sanitizeForSpreadsheet(lead.email || "N/A"),
        sanitizeForSpreadsheet(lead.product),
        sanitizeForSpreadsheet(lead.suburb),
        sanitizeForSpreadsheet(lead.message || "N/A"),
        sanitizeForSpreadsheet(lead.pageUrl || "/"),
        sanitizeForSpreadsheet(lead.utmSource || ""),
        sanitizeForSpreadsheet(lead.utmMedium || ""),
        sanitizeForSpreadsheet(lead.utmCampaign || ""),
        "New Enquiry",
      ];

      await sheets.spreadsheets.values.append({
        spreadsheetId,
        range: `${sheetName}!A:M`,
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [rowValues],
        },
      });

      return {
        success: true,
        destination: "google_sheets",
        message: "Lead successfully recorded to Google Sheet via Service Account.",
      };
    } catch (error) {
      console.error("[Google Sheets API Error]:", error);
    }
  }

  return {
    success: true,
    destination: "local_store",
    message: "Lead safely saved to local backup store.",
  };
}

function persistLeadLocally(lead: LeadSubmission) {
  try {
    const dataDir = path.join(process.cwd(), "data");
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    const filePath = path.join(dataDir, "leads.json");
    let leads: LeadSubmission[] = [];
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, "utf8");
      try {
        leads = JSON.parse(content);
      } catch {
        leads = [];
      }
    }
    leads.unshift(lead);
    fs.writeFileSync(filePath, JSON.stringify(leads, null, 2), "utf8");
  } catch (err) {
    console.error("[Local Lead Persistence Error]:", err);
  }
}
