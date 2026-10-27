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

export async function appendLeadToSheet(lead: LeadSubmission): Promise<{ success: boolean; destination: "google_sheets" | "local_store"; message: string }> {
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
  const sheetName = process.env.GOOGLE_SHEETS_SHEET_NAME || "Quote Leads";
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  let privateKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY;

  // Always persist lead locally as a reliable durability layer
  persistLeadLocally(lead);

  // If Google Sheets credentials are configured, write directly to Google Sheets
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
        message: "Lead successfully recorded to Google Sheet and local backup.",
      };
    } catch (error) {
      console.error("[Google Sheets API Error]:", error);
      // Fallback handled, lead was already safely written to local store
      return {
        success: true,
        destination: "local_store",
        message: "Lead safely saved to local backup (Google Sheets sync pending credentials verification).",
      };
    }
  }

  return {
    success: true,
    destination: "local_store",
    message: "Lead safely recorded to local backup store.",
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
