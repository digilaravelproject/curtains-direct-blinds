<?php
/**
 * Curtains Direct & Blinds - Server Configuration (cPanel)
 *
 * You can edit this file directly in cPanel File Manager without running any commands!
 * Changes here take effect immediately.
 */

return [
    // Google Sheets Webhook URL (Paste your Google Apps Script deployment URL here)
    'google_sheet_webhook' => 'https://script.google.com/macros/s/AKfycbyXbaffekehYzjRAaIZH244lEVPF9eVc_NLAVfVvJRJwieZocLfuZupuPNAGTRMFe6hkA/exec',

    // Timezone for logging into Google Sheet (Indian Standard Time)
    'timezone' => 'Asia/Kolkata',

    // Notification email
    'notification_email' => 'info@curtainsdirect.com.au',

    // Rate Limiting (max requests per IP per window)
    'rate_limit_max' => 10,
    'rate_limit_window_seconds' => 60,
];
