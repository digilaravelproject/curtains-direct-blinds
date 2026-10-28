<?php
/**
 * Curtains Direct & Blinds - cPanel Quote API Handler
 *
 * Runs natively on Apache / PHP (cPanel) without Node.js processes.
 * Handles form validation, Indian Standard Time (IST) formatting,
 * local backup durability, and forwards to Google Sheets Webhook.
 */

header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed. Only POST is accepted.']);
    exit();
}

// Load config
$configFile = __DIR__ . '/config.php';
$config = file_exists($configFile) ? require $configFile : [];

$timezone = $config['timezone'] ?? 'Asia/Kolkata';
date_default_timezone_set($timezone);

// Read JSON input payload
$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);

if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON payload received.']);
    exit();
}

$name     = trim($data['name'] ?? '');
$phone    = trim($data['phone'] ?? '');
$email    = trim($data['email'] ?? '');
$suburb   = trim($data['suburb'] ?? '');
$product  = trim($data['product'] ?? 'Curtains & Blinds Package');
$message  = trim($data['message'] ?? '');
$honeypot = trim($data['honeypot'] ?? '');
$pageUrl  = trim($data['pageUrl'] ?? 'https://www.curtainsdirect.com.au/web/');

// Honeypot spam trap
if (!empty($honeypot)) {
    echo json_encode(['success' => true, 'leadId' => 'CDB-SPAM-FILTERED']);
    exit();
}

// Mandatory field validations
if (mb_strlen($name) < 2) {
    http_response_code(400);
    echo json_encode(['error' => 'Please enter your full name (minimum 2 characters).']);
    exit();
}

if (mb_strlen($phone) < 8) {
    http_response_code(400);
    echo json_encode(['error' => 'Please enter a valid Australian contact phone number.']);
    exit();
}

// Email is strictly mandatory
if (empty($email)) {
    http_response_code(400);
    echo json_encode(['error' => 'Email address is mandatory.']);
    exit();
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Please enter a valid email address.']);
    exit();
}

if (mb_strlen($suburb) < 2) {
    http_response_code(400);
    echo json_encode(['error' => 'Please provide your suburb or area in Melbourne.']);
    exit();
}

// Generate unique lead ID
$leadId = 'CDB-' . date('Ymd-His') . '-' . substr(strtoupper(bin2hex(random_bytes(2))), 0, 4);

// Format date in Indian Standard Time (IST)
$formattedDate = date('d/m/Y h:i:s A') . ' IST';

// Prepare payload for Google Sheets Webhook
$webhookPayload = [
    'leadId'   => $leadId,
    'date'     => $formattedDate,
    'name'     => $name,
    'phone'    => $phone,
    'email'    => $email,
    'product'  => $product,
    'suburb'   => $suburb,
    'message'  => !empty($message) ? $message : 'N/A',
    'pageUrl'  => $pageUrl,
];

// Always persist lead locally as a durability backup layer
$backupDir = __DIR__ . '/storage';
if (!is_dir($backupDir)) {
    @mkdir($backupDir, 0755, true);
}
$backupFile = $backupDir . '/leads_' . date('Y-m') . '.jsonl';
@file_put_contents($backupFile, json_encode($webhookPayload) . "\n", FILE_APPEND | LOCK_EX);

// Forward to Google Sheets Webhook if configured
$webhookUrl = $config['google_sheet_webhook'] ?? '';
$webhookSent = false;

if (!empty($webhookUrl) && filter_var($webhookUrl, FILTER_VALIDATE_URL)) {
    $ch = curl_init($webhookUrl);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($webhookPayload));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($ch, CURLOPT_MAXREDIRS, 5);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Content-Type: application/json',
        'User-Agent: CurtainsDirectBlinds-PHP/1.0',
    ]);
    curl_setopt($ch, CURLOPT_TIMEOUT, 12);
    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 6);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, true);

    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    if ($httpCode >= 200 && $httpCode < 400) {
        $webhookSent = true;
    }
}

// Return success response to frontend
http_response_code(200);
echo json_encode([
    'success'       => true,
    'leadId'        => $leadId,
    'formattedDate' => $formattedDate,
    'webhookSent'   => $webhookSent,
    'message'       => 'Your consultation request has been received.'
]);
