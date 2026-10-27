# Product Requirements Document (PRD)
## Curtains Direct & Blinds — Landing Page

**Document status:** Ready for implementation planning  
**Version:** 1.0  
**Primary language:** English  
**Business / brand:** Curtains Direct & Blinds  
**Primary market:** Mumbai, Maharashtra, India  
**Brand color:** `#EB4D98`  
**Typography:** Jost  
**Frontend:** Next.js + TypeScript + Tailwind CSS  
**Lead destination:** A newly created Google Sheet, accessed through a secure backend integration  
**Domain:** Existing domain; exact domain to be supplied before production deployment

---

## 1. Product Summary

Build a polished, trustworthy, mobile-first landing page for Curtains Direct & Blinds that presents the business’s curtain, blind, and motorized blind offerings and turns relevant visitors into enquiries.

The landing page must be professional, visually consistent, fast, accessible, and prepared for both local and broader organic search. Two user-provided screenshots will be supplied as the **primary visual references**. The implementation team must inspect both screenshots before finalizing layout, content hierarchy, image treatment, spacing, section order, and visual details.

The page must not invent business facts. Missing details—including phone number, email, exact address, business hours, service claims, testimonials, pricing, warranty, years of experience, brand partnerships, and domain—must be requested from the owner or left as clearly marked configuration/content placeholders until verified.

### Primary conversion outcomes
1. Visitors call the business using a working click-to-call link.
2. Visitors submit the Request a Quote form.
3. Visitors understand the offered categories: Curtains, Blinds, and Motorized Blinds.
4. Visitors can find the business’s actual service area and contact details without confusion.

### Non-goals for the initial release
- Full e-commerce checkout or online payments.
- Customer accounts or user login.
- A product inventory or order-management system.
- Unsupported claims of guaranteed Google rankings.
- A multi-page website unless required by the screenshots or explicitly approved.
- Automated pricing, measurement, installation scheduling, or quote calculation unless the owner later specifies those workflows.

---

## 2. Goals and Success Measures

### 2.1 Business goals
- Generate qualified quote requests.
- Make it easy for mobile visitors to call.
- Communicate the product categories clearly.
- Establish a professional and consistent brand presentation.
- Support discoverability for relevant curtain and blind searches in Mumbai.
- Make submitted leads reliably available to the business in a new Google Sheet.

### 2.2 Success metrics
Track these metrics only after analytics and consent requirements have been configured appropriately.

| Metric | Definition | Measurement |
|---|---|---|
| Quote form submissions | Successful server-accepted quote requests | Analytics event plus backend logs |
| Call CTA clicks | Clicks on verified `tel:` links | Analytics event |
| Form completion rate | Successful submissions divided by form starts | Analytics funnel |
| Form error rate | Validation or submission errors divided by form attempts | Frontend/backend event counts |
| Lead delivery success | Accepted submissions successfully written to Google Sheets | Backend integration logs and test records |
| Organic search visibility | Search impressions, clicks, and relevant queries | Google Search Console |
| Landing-page performance | Core Web Vitals and loading metrics | Lighthouse and field data when available |
| Accessibility | Automated checks plus manual keyboard/screen-reader review | Accessibility test checklist |

Do not promise a specific conversion rate, ranking, lead volume, or revenue outcome.

---

## 3. Target Audience

The initial audience is people in Mumbai who are exploring curtains, blinds, or motorized blinds for a residential or commercial space. This is a working audience definition, not a claim about the business’s exact customer mix.

Potential user needs:
- Understand available product categories.
- View visual examples and understand the style.
- Contact the business quickly.
- Request a quote without a complicated process.
- Know whether the business serves their locality.

Do not add unsupported audience-specific promises or service guarantees.

---

## 4. Design Reference and Screenshot-First Workflow

### 4.1 Mandatory screenshot inspection
The owner will attach two screenshots. Before coding the page:

1. Open and inspect both screenshots at their original available resolution.
2. Identify which screenshot represents which page, section, viewport, or state. Do not assume they show the same viewport.
3. Document the visible structure: header, navigation, hero, content sections, product presentation, CTA placement, forms, footer, and any floating actions.
4. Record typography hierarchy, alignment, spacing, image proportions, card sizes, borders, corner radii, shadows, button treatment, and background colors.
5. Identify the visual patterns shared by the screenshots and turn them into reusable design tokens/components.
6. Identify details that are unclear or cropped. Do not invent exact content from unreadable areas.
7. Use the screenshots as the primary design direction. Do not replace them with an unrelated generic template.
8. If a screenshot conflicts with usability, accessibility, responsive behavior, or secure form requirements, preserve the overall design intent while making the minimum necessary adjustment.
9. If a screenshot includes a logo, contact detail, testimonial, review rating, price, or other factual claim, use it only if it is legible and the owner confirms it is current and authorized for use.
10. If the screenshots have not yet been attached, create the project foundation and this PRD first, but do not claim that the visual design has been inspected. Request the screenshots before declaring the visual implementation approved.

### 4.2 Visual QA
Compare the built page with the screenshots at comparable viewport sizes. Review:
- Section order and overall hierarchy.
- Header and hero proportions.
- Image crop and aspect ratios.
- Typography scale and line breaks.
- Spacing rhythm and alignment.
- Button size and shape.
- Card dimensions and content alignment.
- Mobile navigation and stacking behavior.
- Footer and CTA treatment.

Do not chase pixel-perfect reproduction at the expense of responsive usability or accessible contrast.

---

## 5. Brand and Design System

### 5.1 Brand tokens
- Primary brand color: `#EB4D98`.
- Font family: `Jost`.
- Use the exact brand color for primary brand accents and primary CTA treatment where contrast permits.
- Use neutral surfaces and text colors selected to maintain readability and complement the reference screenshots.
- Do not invent a logo. Use an owner-supplied logo if available; otherwise use a clean text-based wordmark treatment that can be replaced later.
- Avoid excessive gradients, decorative animation, inconsistent shadows, or arbitrary accent colors unless supported by the screenshots.

### 5.2 Typography
Use Jost consistently for headings, body text, labels, buttons, and navigation unless the screenshot clearly establishes an intentional secondary typeface and the owner approves it.

Define a clear type scale with responsive sizing:
- Display / hero heading.
- Section heading.
- Card heading.
- Body text.
- Supporting text.
- Form labels and helper text.
- Navigation and button labels.

Use readable line lengths, adequate line height, and responsive wrapping. Do not use font size alone to communicate importance.

### 5.3 Unified components
Build reusable components and design tokens rather than styling every instance independently.

Required consistency:
- Every card in the same component family has consistent padding, border treatment, radius, title hierarchy, and CTA placement.
- Cards in a shared grid align to a consistent layout and equal visual height where practical. Avoid forced equal heights when it causes large blank spaces or harms readability.
- All primary buttons share the same height, padding, typography, radius, focus state, and interaction behavior.
- All secondary buttons share a separate, consistent style.
- Form controls share consistent height, border, label placement, error presentation, and focus state.
- Icons use one consistent icon set and stroke/size treatment.
- Spacing follows a documented scale; do not use arbitrary one-off values without a clear reason.
- Hover, active, focus-visible, disabled, loading, success, and error states are defined.
- Do not make a card clickable if it contains multiple independent interactive controls.

### 5.4 Suggested semantic design tokens
Exact neutral colors and spacing should be reconciled with the screenshots.

```css
:root {
  --brand-primary: #EB4D98;
  --font-brand: "Jost", sans-serif;

  /* Set these after reviewing the supplied references. */
  --color-text: /* approved readable text color */;
  --color-text-muted: /* approved secondary text color */;
  --color-surface: /* approved main surface color */;
  --color-surface-muted: /* approved alternate surface color */;
  --color-border: /* approved border color */;
  --color-focus: /* accessible focus indicator color */;

  /* Use a consistent spacing and radius scale. */
  --radius-card: /* shared card radius */;
  --radius-control: /* shared control radius */;
  --content-max-width: /* chosen responsive content width */;
}
```

Replace all comments with valid values during implementation; do not ship this illustrative snippet as-is.

### 5.5 Accessibility and contrast
- Ensure text and controls meet WCAG 2.2 AA contrast requirements where applicable.
- Do not assume white text on `#EB4D98` has sufficient contrast; measure the actual color pair and choose a compliant treatment.
- Never remove visible keyboard focus without replacing it with a clear focus indicator.
- Respect `prefers-reduced-motion`.
- Use meaningful alt text for informative images and empty alt text for purely decorative images.
- Do not embed important text inside images.

---

## 6. Information Architecture and Page Sections

The exact section order and layout must be reconciled with the two screenshots. The following is the recommended content model, not permission to ignore the references.

### 6.1 Header
Purpose: provide clear navigation and fast access to the main actions.

Possible elements, depending on screenshot reference:
- Brand logo or approved text wordmark.
- Navigation links that scroll to relevant page sections.
- Primary “Request a Quote” CTA.
- Click-to-call CTA if space and reference design support it.
- Responsive mobile menu with accessible open/close behavior.

Requirements:
- Use semantic `<header>` and `<nav>`.
- Navigation links must point to real section IDs or valid URLs.
- The mobile menu must be keyboard-operable, announce its expanded state, close appropriately, and not trap focus incorrectly.
- Avoid placing too many competing CTAs in the header.

### 6.2 Hero section
Purpose: communicate the offering and present a clear next step.

Content should include:
- One clear, meaningful H1.
- A concise supporting sentence based on owner-approved business positioning.
- A primary CTA leading to the quote form.
- A secondary CTA using the verified phone number, if supplied.
- A relevant visual sourced from owner-approved imagery or licensed assets.

Content rules:
- Do not invent claims such as “No. 1 in Mumbai,” “lowest prices,” “same-day installation,” “free measurement,” or “100% satisfaction.”
- Avoid keyword stuffing in the H1.
- Keep the primary CTA visible and understandable without scrolling where the reference permits.
- Use optimized responsive imagery with an intentional crop.

### 6.3 Product/service categories
Present the three confirmed categories:
1. Curtains
2. Blinds
3. Motorized Blinds

Requirements:
- Use a consistent card system.
- Keep image aspect ratios, padding, headings, descriptions, and CTA alignment consistent.
- Each category needs an owner-approved image and concise factual description.
- If category-specific detail is not provided, use restrained descriptive copy and mark it for owner review rather than asserting product materials, brands, warranties, automation compatibility, or installation terms.
- CTA behavior must be deliberate: scroll to quote form with the category preselected, or navigate to a corresponding section. Do not use dead links.
- If category cards are not included in the screenshots, confirm with the owner before adding a large new section.

### 6.4 Benefits / differentiators
Include only if supported by the screenshots or owner-approved content.

Potential content topics to confirm—not claims to publish automatically:
- Product customization.
- Consultation or measurement service.
- Installation.
- Fabric/material options.
- Motorization features.
- Residential or commercial suitability.

Never state a service is available unless the owner confirms it.

### 6.5 Gallery / project imagery
Use only owner-provided, licensed, or otherwise authorized images. Do not imply a generic stock image is a completed customer project.

Requirements:
- Provide appropriate image dimensions and formats.
- Use descriptive alt text when the image conveys content.
- Lazy-load below-the-fold images.
- Avoid lazy-loading the main hero/LCP image.
- Do not place sensitive personal information in image metadata.

### 6.6 Testimonials / reviews
Optional and only publish with authentic, authorized source material.

- Never fabricate names, review text, ratings, star counts, or customer logos.
- If verified testimonials are not supplied, omit the section or use an approved non-testimonial section instead.
- Do not add review structured data for self-serving testimonials in a way that violates applicable Google structured-data guidelines.
- If Google review content is displayed, respect applicable platform terms and accurately identify its source.

### 6.7 FAQ
Include only if the owner approves the questions and answers. Potential questions to confirm include product selection, motorized blinds, service area, quote process, measurement, installation, and lead times.

Do not invent policies, prices, service guarantees, turnaround times, or availability. FAQ structured data is not guaranteed to generate a special search result.

### 6.8 Quote form section
Must be easy to locate and accessible from every major CTA.

Requirements are detailed in Section 8.

### 6.9 Footer
Include only verified details:
- Brand name.
- Approved navigation links.
- Verified phone number and email.
- Verified service-area wording.
- Approved social links.
- Privacy policy link.
- Copyright line using the actual launch year or a dynamically generated current year.

Do not display a fabricated street address, opening hours, social handle, or map location.

### 6.10 Floating actions
A sticky call or quote action may be used on mobile only if it is useful, supported by the visual reference, and does not cover content or form controls. It must respect safe-area insets, keyboard focus, and reduced viewport height.

---

## 7. Functional Requirements: CTAs and Navigation

### 7.1 Request a Quote CTA
- Scroll to the quote form or navigate to a valid form route.
- If a category CTA is used, preselect that category in the form.
- Do not imply that a quote is instantly generated unless that capability is implemented.
- Track CTA clicks with analytics when configured.
- Use clear accessible text, not an icon alone.

### 7.2 Click-to-call CTA
- Use a valid anchor with a `tel:` URI, for example `<a href="tel:+91XXXXXXXXXX">Call Now</a>` after the owner supplies and confirms the actual number.
- Replace the placeholder before launch.
- Normalize the number for the URI while displaying the business-approved formatted number.
- Do not fabricate a number or leave a placeholder call link in production.
- On supported devices, clicking should invoke the device’s calling handler. Desktop behavior depends on installed calling applications; the site cannot guarantee a call will connect.
- Test the CTA on iOS, Android, and desktop browsers where available.
- Track a `click_to_call` event without sending unnecessary personal information to analytics.

### 7.3 Navigation and anchors
- Every internal navigation item must lead to an existing section or route.
- Use smooth scrolling only if it does not conflict with reduced-motion preferences.
- Ensure fixed headers do not obscure anchor targets; use appropriate scroll margin.
- Prevent layout shifts when mobile menus open or close.

### 7.4 WhatsApp
WhatsApp is not an approved requirement yet. Do not add it as a prominent CTA unless the owner supplies and verifies the number and approves the workflow.

---

## 8. Request a Quote Form

### 8.1 Purpose
Collect only the information needed to follow up on a customer enquiry and write each accepted lead to the owner’s newly created Google Sheet through a secure backend integration.

### 8.2 Proposed fields
Confirm the final form with the owner. Recommended initial fields:

| Field | Requirement | Notes |
|---|---|---|
| Full name | Required | Trim whitespace; enforce a reasonable length limit |
| Phone number | Required | Validate a reasonable phone format; support Indian numbers and explicitly approved international formats if needed |
| Email | Optional unless owner requires it | Validate only when provided |
| Product interest | Required | Curtains, Blinds, or Motorized Blinds; allow “Not sure yet” only if approved |
| Locality / area | Optional or required after owner decision | Useful for service qualification; do not request a full address unless needed |
| Message / requirements | Optional | Length-limited plain text |
| Privacy acknowledgement | Required where applicable | Link to the actual privacy notice; no prechecked marketing consent |
| Honeypot / anti-bot field | Hidden from normal users | Server-side spam signal, not a substitute for other controls |

Do not collect payment information, government IDs, or other unnecessary sensitive data.

### 8.3 User experience
- Labels must remain visible and programmatically associated with controls.
- Required fields must be identified in text, not color alone.
- Inline errors must explain how to fix the issue.
- On failed validation, preserve safe field values and focus or announce the first relevant error.
- Disable duplicate submissions while a request is in progress.
- Show a clear loading state.
- On confirmed success, show a clear confirmation message.
- On failure, show a useful retry message without exposing internal service errors.
- Never show success until the backend confirms the lead was accepted according to the defined delivery policy.
- Do not clear the form if submission has failed.
- Avoid sending the user’s full form content to analytics.

### 8.4 Server-side validation
Client-side validation improves usability but is not a security boundary.

The server must:
- Validate the request body against an explicit schema.
- Reject missing or invalid required fields.
- Enforce maximum field lengths and request-body size limits.
- Normalize strings safely and reject unexpected field types.
- Validate the selected product against the allowed list.
- Treat user input as untrusted plain text.
- Reject malformed or suspicious requests with appropriate HTTP status codes.
- Avoid reflecting submitted values into HTML or logs without safe handling.
- Return a stable, non-sensitive response shape.

### 8.5 Google Sheets integration architecture
Use a server-side Next.js route handler or a separate trusted backend endpoint. The browser must never call Google Sheets using a privileged credential.

Recommended flow:

1. Visitor fills in the form.
2. Browser performs usability validation and submits over HTTPS to the application backend.
3. Backend validates and normalizes the payload.
4. Backend applies rate limits and spam checks.
5. Backend assigns a server-generated unique lead ID and timestamp.
6. Backend writes the lead to the configured Google Sheet using the Google Sheets API and a server-side service identity or other approved secure Google authentication method.
7. Backend records the result without logging secrets or unnecessary personal data.
8. Browser receives a success response only when the configured acceptance/delivery policy is satisfied.
9. The owner reviews new leads in the Google Sheet.

### 8.6 New Google Sheet setup
The owner requested a new sheet. Create it in the owner’s Google account or an explicitly approved Google Workspace account; do not create it under an undocumented personal account or assume access to the owner’s Google account.

Recommended sheet name: `Curtains Direct & Blinds — Quote Leads` (editable by the owner).

Recommended columns:
1. `Lead ID`
2. `Submitted At (Asia/Kolkata)`
3. `Full Name`
4. `Phone`
5. `Email`
6. `Product Interest`
7. `Locality / Area`
8. `Message`
9. `Landing Page`
10. `UTM Source`
11. `UTM Medium`
12. `UTM Campaign`
13. `Lead Status` (optional, owner-managed)

Store timestamps as an unambiguous ISO 8601 value and/or a spreadsheet date value formatted in `Asia/Kolkata` time. The server must generate the authoritative timestamp; do not trust the visitor’s device clock. Example display: `2026-10-27 14:35:12 IST` is illustrative only and must not be hardcoded as a submission.

### 8.7 Google Sheets access and security
- Prefer a dedicated service account or approved server-side OAuth approach, according to the selected deployment and account configuration.
- Share only the target sheet with the integration identity and grant the minimum permissions needed.
- Store service-account credentials or OAuth refresh credentials in the deployment platform’s encrypted secret manager/environment configuration—not in source control, client code, public variables, or the Google Sheet.
- Never expose private keys in `NEXT_PUBLIC_*` variables.
- Do not commit `.env` files or credential JSON files.
- Restrict the API to the intended spreadsheet ID and target range.
- Validate spreadsheet ID and range from trusted server configuration, not user input.
- Do not expose the sheet’s private URL or identifiers unnecessarily in frontend responses.
- Consider spreadsheet formula injection: values beginning with characters such as `=`, `+`, `-`, or `@` may be interpreted as formulas in some spreadsheet contexts. Write user-supplied text in a safe literal form and test that text cannot execute as a formula. Preserve legitimate phone numbers and ordinary text accurately.
- Apply least-privilege access, review sharing settings, and do not publish the sheet to the web.
- Keep lead data accessible only to authorized staff.
- Define a retention and deletion policy with the owner.

### 8.8 Reliability and delivery policy
Google Sheets may be unavailable or rate-limited. Define a reliable behavior rather than silently losing leads.

Preferred production approach:
- Validate and accept the request on the backend.
- Persist a minimal lead record in a durable store/queue before acknowledging receipt if the deployment architecture supports it.
- Deliver the lead to Google Sheets asynchronously with retry and idempotency.
- Track delivery status and alert the operator when delivery repeatedly fails.

If no durable database or queue is included in the approved MVP, explicitly document the limitation: a temporary Sheets API failure may prevent a lead from being recorded. In that simpler implementation, return a failure message rather than falsely claiming the lead was saved, and provide a monitored recovery path. Do not claim guaranteed delivery without durable persistence and tested retries.

Use a stable lead ID or idempotency mechanism to avoid duplicate rows during retries. Do not retry indefinitely; use bounded exponential backoff and an operational alert or error log.

### 8.9 Spam protection and abuse prevention
Implement layered protections:
- Server-side rate limiting, ideally keyed by a privacy-conscious combination of IP/network signal and time window.
- A honeypot field and minimum-submission-time heuristic.
- Input length limits and strict schema validation.
- Duplicate-submit protection.
- Optional CAPTCHA/Turnstile or equivalent challenge if observed abuse warrants it.
- Origin/host validation as an additional defense, not as the only defense.
- Request-size limits and safe error responses.
- Monitoring for unusual volume and integration failures.

Do not rely on a hidden field alone. Avoid permanently blocking legitimate users due to one signal. Do not store raw IP addresses longer than operationally necessary; document retention if they are processed.

### 8.10 Privacy
- Provide a privacy policy before launch.
- Explain what is collected, why it is collected, where it is stored, who can access it, and how a user can contact the business about their data.
- Obtain any consent required for the actual processing and marketing use.
- Do not treat a quote enquiry as blanket consent for marketing.
- Do not enable advertising/analytics cookies or non-essential tracking without the appropriate consent where legally required.
- Have the owner review applicable Indian privacy and data-protection obligations with qualified counsel if needed.

---

## 9. Technical Architecture

### 9.1 Stack
- Next.js using the App Router unless the existing repository requires a documented alternative.
- TypeScript with strict type checking.
- Tailwind CSS.
- Server-rendered or statically rendered content where suitable for SEO and performance.
- Route Handler or trusted server endpoint for quote submissions.
- Google Sheets API from the server only.
- A maintained validation library or equivalent explicit runtime schema validation.
- A maintained icon library, used consistently and accessibly.
- A maintained analytics integration selected with the owner.
- Testing tools appropriate to the repository, such as unit/component tests and Playwright for critical browser flows.

Choose current stable, mutually compatible versions at implementation time. Do not pin obsolete versions merely because they appear in this document.

### 9.2 Rendering strategy
- Render important page content in the initial HTML.
- Use Server Components by default; add Client Components only where interactivity requires them.
- Keep the quote form interactive without making the entire landing page client-rendered unnecessarily.
- Ensure the page is crawlable without requiring a crawler to execute complex client-side logic.
- Avoid unnecessary client-side JavaScript and large UI dependencies.

### 9.3 Suggested project structure
Adapt to the existing repository instead of overwriting working files without inspection.

```text
app/
  layout.tsx
  page.tsx
  globals.css
  robots.ts
  sitemap.ts
  privacy/
    page.tsx
  api/
    quote/
      route.ts
components/
  layout/
    site-header.tsx
    site-footer.tsx
    mobile-navigation.tsx
  sections/
    hero-section.tsx
    product-categories.tsx
    quote-section.tsx
    faq-section.tsx
  ui/
    button.tsx
    card.tsx
    form-field.tsx
    section-heading.tsx
lib/
  config.ts
  validation/
    quote-schema.ts
  google-sheets/
    client.ts
    append-lead.ts
  security/
    rate-limit.ts
    spam-check.ts
  analytics/
    events.ts
types/
  lead.ts
public/
  images/
tests/
  unit/
  e2e/
```

This is a suggested structure, not a requirement to create empty files or force every section into a separate component.

### 9.4 Configuration and environment variables
Document all required variables in `.env.example` using placeholder values only. The exact authentication mechanism depends on the approved Google integration.

Potential server-only variables:
- `GOOGLE_SHEETS_SPREADSHEET_ID`
- `GOOGLE_SHEETS_SHEET_NAME`
- `GOOGLE_SERVICE_ACCOUNT_EMAIL` (if using a service account)
- `GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY` (if using a service account and supported securely by the deployment platform)
- `QUOTE_RATE_LIMIT_*` configuration appropriate to the chosen rate-limiting service
- `NEXT_PUBLIC_SITE_URL` for the public canonical origin
- Analytics public measurement ID only after the provider is selected and privacy configuration is approved

Rules:
- Never invent the production domain.
- Never put secrets in public environment variables.
- Handle multiline private keys correctly and document the deployment-specific format.
- Fail safely if required production configuration is missing; do not silently pretend that submissions are being saved.
- Keep `.env.local` out of version control.
- Ensure logs do not print environment variables or credentials.

---

## 10. SEO Requirements

SEO is a deliverable, not a ranking guarantee. Search results depend on competition, relevance, site quality, business legitimacy, location, and other factors outside the application’s control.

### 10.1 Technical SEO
- One clear, descriptive H1 for the page.
- Logical heading hierarchy without choosing heading levels solely for visual size.
- Server-rendered HTML for essential copy and links.
- Unique, accurate `<title>` and meta description.
- Canonical URL based on the owner-confirmed production domain.
- Open Graph and social-sharing metadata with approved image assets.
- `robots.txt` that permits intended public content and avoids accidentally blocking the site.
- XML sitemap containing only canonical, indexable URLs.
- Valid HTTP status codes and no unintended redirect chains.
- HTTPS in production.
- No placeholder URLs, staging URLs, or localhost canonical values in production.
- No accidental `noindex` on the live site.
- Descriptive internal links and useful anchor text.
- Semantic HTML and accessible navigation.
- Image optimization, intrinsic dimensions/aspect ratios, and appropriate alt text.
- Custom not-found handling where appropriate.
- No duplicate title tags or multiple conflicting canonical declarations.
- Ensure the site is usable if optional third-party scripts fail.
- Validate structured data with Google’s Rich Results Test and Schema Markup Validator as appropriate.

### 10.2 Metadata and keyword direction
Potential search themes to research and validate before final copy:
- curtains in Mumbai
- curtains and blinds in Mumbai
- blinds in Mumbai
- motorized blinds in Mumbai
- curtain and blind solutions for the relevant customer segment

These are candidate topics, not verified search-volume claims. Use natural language, avoid repeating city keywords unnaturally, and do not create doorway pages for localities without unique useful content and genuine service relevance.

Suggested metadata pattern—final text must be reviewed and must not contain unverified claims:
- **Title:** `Curtains & Blinds in Mumbai | Curtains Direct & Blinds`
- **Meta description:** `Explore curtains, blinds and motorized blinds from Curtains Direct & Blinds. Contact the team to discuss your requirements in Mumbai.`

Use these as drafts only. Verify the business’s actual offering and wording before publication.

### 10.3 Local SEO
- Confirm the exact service area and whether Mumbai suburbs or nearby cities are included.
- Display consistent business name, phone number, address (if the business chooses to publish one), and opening hours wherever used.
- Do not invent a street address or create a map embed centered on an assumed location.
- If the business is eligible for a Google Business Profile, provide a setup/optimization checklist for the owner. Do not claim to have connected or verified the profile without access and confirmation.
- Encourage authentic customer reviews through a compliant process; do not incentivize reviews in violation of platform rules.
- Add LocalBusiness or a more specific appropriate schema only using verified details. Do not guess the business type, address, coordinates, rating, opening hours, price range, or social profiles.
- If address is not public or the business is service-area-based, follow current Google guidance for the business’s actual profile configuration.
- Add location-specific copy only where accurate and genuinely useful.
- Make phone details consistent between page content and structured data.

### 10.4 Structured data
Use JSON-LD only for entities and claims that are visible on the page and verified by the owner.

Possible schema types, subject to validation:
- `Organization` or an appropriate `LocalBusiness` subtype.
- `WebSite`.
- `BreadcrumbList` only if the actual site architecture warrants it.

Do not:
- Invent a physical address or coordinates.
- Mark up fake ratings or reviews.
- Add product prices, availability, offers, or catalog details that are not true and visible.
- Expect schema to guarantee a rich result or higher ranking.

### 10.5 Search Console and launch checklist
- Verify the site in Google Search Console using an owner-approved method.
- Submit the sitemap after production deployment.
- Inspect the canonical URL and indexing status.
- Test the live page URL.
- Monitor indexing, impressions, clicks, search queries, and technical errors.
- Fix crawl or indexing issues based on observed evidence.
- Do not claim indexing is immediate or guaranteed.

### 10.6 SEO content quality
- Write helpful, clear English content.
- Explain the actual product categories and quote process.
- Avoid generic filler paragraphs, hidden keywords, and location keyword stuffing.
- Use descriptive image alt text where meaningful; do not stuff alt text with keywords.
- Do not publish placeholder copy, fake awards, fake business history, or fabricated trust signals.

---

## 11. Performance Requirements

### 11.1 Targets
Aim for the following Core Web Vitals “good” thresholds at the 75th percentile when sufficient real-user data is available:
- Largest Contentful Paint (LCP): **2.5 seconds or less**
- Interaction to Next Paint (INP): **200 milliseconds or less**
- Cumulative Layout Shift (CLS): **0.1 or less**

These are target thresholds, not a guarantee. Lab tests are useful but do not substitute for field data.

### 11.2 Implementation practices
- Use Next.js image optimization or a verified equivalent.
- Supply responsive image sizes and modern formats where supported.
- Set image dimensions or aspect ratios to prevent layout shifts.
- Do not lazy-load the likely LCP hero image; prioritize it appropriately.
- Lazy-load below-the-fold images.
- Use Jost efficiently; avoid unnecessary weights and variants.
- Prefer self-hosted or appropriately optimized font delivery when licensing and setup permit.
- Minimize client-side JavaScript and third-party scripts.
- Avoid autoplay video and heavy animation unless clearly required by the reference and justified.
- Use stable layout dimensions for cards, images, and banners.
- Avoid loading multiple icon libraries.
- Test on throttled mobile connections and a representative mid-range mobile device.
- Do not introduce large background images without checking their real impact.

### 11.3 Performance acceptance
Run production-build Lighthouse audits on mobile and desktop. Record the results, fix material issues, and document any third-party or environment-specific limitations. Do not promise a perfect score in every environment.

---

## 12. Analytics and Measurement

Select the analytics provider with the owner before adding tracking. Google Analytics 4 may be used if approved, but it is not assumed to be configured.

Recommended events:
- `quote_cta_click`
- `quote_form_start`
- `quote_form_validation_error`
- `quote_form_submit_attempt`
- `quote_form_submit_success`
- `quote_form_submit_error`
- `click_to_call`
- `product_category_select`

Event requirements:
- Use a consistent event naming convention.
- Include only necessary non-personal parameters, such as the CTA location or product category.
- Do not send names, phone numbers, email addresses, free-text messages, or other personal data to analytics.
- Do not fire a success event until the backend confirms the defined successful acceptance state.
- Prevent duplicate events from rerenders or repeated handlers.
- Respect consent requirements for non-essential tracking.
- Document how to test events in the analytics debug tools.
- Use UTM parameters only for attribution; never treat user-provided UTM values as trusted HTML or executable content.

---

## 13. Security Requirements

### 13.1 Application security
- Validate every form submission on the server.
- Use HTTPS in production.
- Keep secrets on the server and out of the repository/client bundle.
- Use dependency scanning and keep packages maintained.
- Set appropriate security headers, including a considered Content Security Policy, `X-Content-Type-Options`, and a suitable `Referrer-Policy`.
- Configure framing protections through CSP `frame-ancestors` or equivalent.
- Avoid unsafe HTML rendering. If rich text is ever introduced, sanitize it with a vetted library.
- Avoid exposing stack traces, internal API responses, credentials, spreadsheet identifiers, or service-account details.
- Ensure error messages are useful but non-sensitive.
- Rate-limit the quote endpoint.
- Validate `Origin`/host expectations as defense in depth.
- Use CSRF protections where relevant to the chosen authentication/session architecture; do not assume CORS is a CSRF defense.
- Restrict HTTP methods and content types accepted by the endpoint.
- Set request timeouts and payload size limits.
- Add monitoring for repeated failures and unusual traffic.
- Never use a client-supplied timestamp as the authoritative submission time.

### 13.2 Google credential handling
- Use a dedicated least-privilege identity.
- Share only the intended sheet with that identity.
- Rotate credentials if exposure is suspected.
- Keep credentials in encrypted deployment secrets.
- Never expose credentials through `NEXT_PUBLIC_*`, page props, logs, error responses, or client bundles.
- Ensure preview/staging environments cannot write to the production sheet unless explicitly authorized.
- Document a process to revoke the integration identity’s access.

### 13.3 Data minimization
- Collect only information needed to respond to the enquiry.
- Limit access to leads.
- Agree on retention and deletion rules with the owner.
- Avoid unnecessary analytics identifiers or IP retention.
- Do not add third-party trackers without approval and privacy review.

---

## 14. Accessibility Requirements

Target WCAG 2.2 AA practices:
- All functionality available by keyboard.
- Logical tab order and visible focus.
- Proper landmarks, headings, and accessible names.
- Associated labels and instructions for every form control.
- Errors announced accessibly and described in text.
- Sufficient contrast for text, controls, and focus indicators.
- Buttons and touch targets appropriately sized for practical use.
- Mobile menu behavior accessible to assistive technology.
- Images have correct alt treatment.
- Decorative icons are hidden from assistive technology when appropriate.
- Reduced-motion preference is respected.
- No interaction depends on hover alone.
- Success/error messages are announced using appropriate live-region semantics.
- Form submission and error recovery are possible without a mouse.

Test with automated accessibility checks and manual keyboard navigation. Automated tools alone do not establish full conformance.

---

## 15. Responsive Requirements

Test at minimum:
- 320 px narrow mobile viewport.
- 375 px and 390 px common mobile viewports.
- 430 px larger mobile viewport.
- Tablet portrait and landscape widths.
- 1280 px desktop.
- 1440 px wide desktop.

Requirements:
- No horizontal overflow.
- No overlapping text, cards, navigation, or CTAs.
- Product cards follow a deliberate responsive grid.
- Images retain intentional crops and aspect ratios.
- Buttons remain easy to tap.
- The quote form remains usable with the mobile keyboard open.
- Long headings wrap cleanly.
- Sticky elements do not cover the submit button, errors, or footer content.
- The design adapts to content length and not just the tested sample text.
- Test at 200% zoom and with text enlargement where practical.

---

## 16. Content and Asset Management

### 16.1 Owner-provided content required
Collect before launch:
- Two design reference screenshots.
- Logo files, if available.
- Confirmed phone number.
- Confirmed email address, if to be shown.
- Actual domain and preferred canonical host (`www` or non-`www`).
- Approved service-area wording.
- Approved product descriptions and any verified differentiators.
- Owner-approved product photography and image rights.
- Approved business address, hours, social links, if these will be shown.
- Authentic testimonials/reviews and permission to display them, if desired.
- Privacy policy content/contact for privacy requests.
- Analytics provider and measurement ID, if used.
- Google account/Workspace owner who will own the new Sheet and approve integration access.

### 16.2 Asset rules
- Do not use images copied from competitors without permission.
- Prefer owner-supplied images or properly licensed assets.
- Do not present stock images as the business’s own installations or customer projects.
- Use meaningful filenames where practical.
- Compress assets while retaining sufficient visual quality.
- Keep a record of image source/licensing where needed.
- If a required asset is missing, use a clearly temporary local placeholder during development and replace it before launch.

---

## 17. Deployment and Environments

### 17.1 Environments
Maintain distinct development, preview/staging, and production configuration where supported.

- Development uses test data and test integration credentials.
- Preview/staging must not write to the production lead sheet by default.
- Production uses the verified domain, HTTPS, production analytics configuration, and approved Google integration.
- Environment variables must be configured securely in the hosting platform.

### 17.2 Deployment checklist
- Confirm hosting provider and Next.js runtime compatibility.
- Confirm the existing domain’s DNS and canonical host.
- Configure HTTPS and redirect HTTP to HTTPS.
- Choose and enforce one canonical hostname.
- Verify production environment variables.
- Verify the Google Sheet and least-privilege integration access.
- Test quote submission end to end on production using an explicitly identified test lead, then remove or label the test row appropriately.
- Verify the call CTA with the owner’s real number.
- Verify sitemap, robots file, canonical metadata, and structured data.
- Connect Search Console and submit the sitemap if approved.
- Confirm analytics consent and event behavior.
- Check 404s, redirects, and error pages.
- Ensure no staging or placeholder content is indexed.
- Verify mobile layout and key conversions after deployment.
- Document rollback steps and who can access deployment settings.

### 17.3 Monitoring and operations
- Log request IDs/lead IDs and integration status without unnecessary personal data.
- Monitor quote API error rates and Google Sheets write failures.
- Alert the owner/operator through an agreed channel for persistent integration failure, if monitoring is included.
- Document how to rotate credentials and recover from an unavailable Google API.
- Keep dependencies updated and periodically review access to the lead sheet.
- Do not claim 24/7 monitoring unless it has been implemented and staffed.

---

## 18. Testing Plan

### 18.1 Unit/component tests
- Quote schema validation.
- Product category allowlist.
- Phone and optional email validation.
- Text length limits.
- Safe error response formatting.
- Google Sheets payload mapping.
- Timestamp generation and `Asia/Kolkata` formatting.
- Formula-injection protection.
- CTA link construction from verified configuration.
- Component states: loading, disabled, error, success.

### 18.2 Integration tests
- Valid quote request reaches the backend.
- Invalid requests are rejected server-side.
- Missing Google credentials fail safely.
- Google Sheets API success returns the expected accepted state.
- Google Sheets API failure does not return false success.
- Retries do not create duplicate rows when durable retry handling is implemented.
- Rate limits and spam checks work.
- Production secrets are not returned to the browser.
- Sheet access is restricted to authorized identities.

Use a test spreadsheet or mocked Google API in automated tests; do not write automated test records to the real customer lead sheet.

### 18.3 End-to-end tests
- Landing page loads on desktop and mobile.
- Header navigation reaches correct sections.
- Quote CTA scrolls/navigates correctly.
- Product selection preselects the right category if implemented.
- Empty form shows accessible validation errors.
- Valid submission shows success only after the backend response.
- Failure state preserves the form data and offers a retry.
- Call CTA contains the owner-approved `tel:` destination.
- Mobile navigation works with keyboard and touch.
- Privacy link is present and valid.
- No console errors or broken images on the main user journey.

### 18.4 SEO and performance tests
- Production build succeeds.
- TypeScript type check passes.
- Lint checks pass.
- Canonical URL is correct.
- Title and description are present.
- H1 and heading structure are sensible.
- Sitemap and robots file resolve correctly.
- Structured data contains only verified data and parses correctly.
- Lighthouse mobile/desktop audits are recorded.
- Images have dimensions and appropriate loading priorities.
- No important content is missing from initial HTML.
- No accidental `noindex`, staging canonical, or broken internal links.

### 18.5 Manual QA
- Compare the finished page against both screenshots.
- Test on at least one iOS and one Android device if available.
- Test keyboard-only operation.
- Check at 200% zoom.
- Check visual contrast and form error announcements.
- Verify actual call number and quote-sheet destination with the owner.
- Confirm the sheet timestamp corresponds to server time and is displayed in the intended timezone.

---

## 19. Acceptance Criteria

The release is acceptable only when all critical criteria below pass.

### Design and content
- [ ] Both reference screenshots have been inspected and their design implications documented.
- [ ] The finished page reflects the reference design rather than an unrelated template.
- [ ] `#EB4D98` and Jost are applied consistently.
- [ ] Cards, buttons, form controls, and spacing follow a documented design system.
- [ ] No obvious inconsistent card sizes, random button styles, broken alignment, or unintended overflow remain.
- [ ] The page includes the confirmed categories: Curtains, Blinds, and Motorized Blinds.
- [ ] No invented business details, claims, testimonials, addresses, prices, ratings, or service guarantees are published.
- [ ] All placeholder content and assets are removed or approved before launch.

### CTAs and form
- [ ] Every CTA has a real, intentional destination.
- [ ] Request a Quote CTA reaches the correct form.
- [ ] The call CTA uses the verified business phone number in a valid `tel:` URI.
- [ ] Form fields have labels, server-side validation, clear errors, loading state, and success/failure feedback.
- [ ] Duplicate submissions are handled.
- [ ] Spam protection and rate limiting are enabled.
- [ ] A successful submission appears in the new Google Sheet with a unique lead ID and server-generated timestamp.
- [ ] The timestamp is recorded/displayed consistently in `Asia/Kolkata` time.
- [ ] User-submitted values cannot be interpreted as spreadsheet formulas.
- [ ] The site never reports a lead as saved when the configured acceptance/delivery condition has not been met.
- [ ] Google credentials and spreadsheet access are not exposed to the browser.
- [ ] Sheet sharing is restricted to approved users and integration identities.

### SEO and analytics
- [ ] Metadata and canonical URL use the confirmed production domain.
- [ ] Sitemap and robots file work as intended.
- [ ] Local SEO content and structured data use only verified business details.
- [ ] No fake reviews or unsupported schema claims are present.
- [ ] Analytics events are tested if analytics is enabled.
- [ ] Personal data is not sent to analytics events.
- [ ] Consent behavior is implemented where required.
- [ ] Search Console setup is documented and completed if owner access is provided.

### Accessibility, performance, and deployment
- [ ] Layout works at the required mobile, tablet, and desktop widths.
- [ ] Keyboard navigation and visible focus work.
- [ ] Form errors and status messages are accessible.
- [ ] Contrast is checked and appropriate.
- [ ] Production build, type checks, linting, and critical tests pass.
- [ ] Performance audits are run and material issues addressed.
- [ ] HTTPS and canonical host redirects are correct.
- [ ] Production secrets are configured securely.
- [ ] A post-deployment quote submission and call CTA test has been completed.
- [ ] Rollback and integration recovery steps are documented.

---

## 20. Risks and Mitigations

| Risk | Impact | Mitigation |
|---|---|---|
| Screenshots are missing or unclear | Design may diverge from expectations | Inspect references first; flag unclear areas; obtain approval before final visual sign-off |
| Business contact information is missing | Calls or enquiries cannot be completed reliably | Keep configurable placeholders in development; block production launch until required details are verified |
| Google credentials are configured incorrectly | Quote submissions fail | Use a test sheet, least-privilege access, clear health/error logging, and end-to-end tests |
| Google Sheets API outage or quota limit | Leads may not be delivered | Durable queue/store and retries where included; otherwise report failure honestly and define manual recovery |
| Spam submissions | Sheet clutter and wasted follow-up time | Rate limiting, schema validation, honeypot, monitoring, optional challenge |
| Unsupported SEO claims | Trust and compliance risks | Verify content and structured data; no ranking guarantees |
| Large images or third-party scripts | Slow mobile experience | Optimize images, limit scripts, measure performance |
| Inconsistent components | Unprofessional appearance | Shared component library and visual regression/QA checks |
| Privacy or access misconfiguration | Exposure of lead data | Minimize data, restrict sheet sharing, secure credentials, review retention and consent |

---

## 21. Decisions Required Before Production

These details are intentionally unresolved and must not be invented:

1. The two reference screenshots.
2. Verified phone number for the click-to-call button.
3. Business email, if it will be displayed.
4. Existing production domain and preferred canonical hostname.
5. Whether the business publishes a physical address or only service-area information.
6. Exact service coverage within Mumbai and surrounding areas.
7. Approved product descriptions, imagery, and any genuine differentiators.
8. Whether measurement, consultation, installation, or other services are offered.
9. Google account/Workspace owner for the new Sheet.
10. Hosting provider and secret-management method.
11. Whether a durable database/queue is in scope for reliable lead delivery.
12. Analytics provider and consent requirements.
13. Privacy policy and data-retention rules.
14. Whether WhatsApp, testimonials, FAQs, gallery, or floating mobile actions should be included.

Do not block initial local development on every optional item. However, missing required contact information, production domain, secure Google integration, and privacy requirements must be resolved before public launch.

---

## 22. Implementation Order

### Phase 1 — Inspect and plan
- Inspect the existing repository before changing files.
- Review both screenshots.
- Confirm content/assets and record open questions.
- Define the design tokens and responsive section map.

### Phase 2 — Build the visual foundation
- Configure Next.js, TypeScript, Tailwind CSS, and Jost.
- Implement shared buttons, cards, form fields, navigation, and footer.
- Build the screenshot-aligned responsive page structure.
- Use temporary clearly marked assets only during development.

### Phase 3 — Implement conversions
- Add functional section navigation and quote CTAs.
- Add the click-to-call CTA using verified configuration.
- Build the accessible quote form and server-side schema validation.

### Phase 4 — Integrate Google Sheets securely
- Create the new sheet in the approved owner account.
- Configure least-privilege backend credentials.
- Implement server-side append, timestamp, unique lead ID, error handling, and formula-injection protection.
- Add rate limiting, spam controls, logging, and retry/persistence behavior according to the approved reliability scope.
- Test with a non-production sheet first.

### Phase 5 — SEO, privacy, analytics, and performance
- Add metadata, canonical handling, sitemap, robots, structured data, and local SEO copy.
- Implement privacy notice and approved analytics.
- Optimize images, fonts, and JavaScript.
- Run accessibility and performance checks.

### Phase 6 — QA and launch
- Run automated and manual tests.
- Compare against both screenshots.
- Verify the live call and quote workflows with the owner.
- Configure the production domain, HTTPS, and environment secrets.
- Deploy, smoke-test, and document recovery steps.

---

## 23. Definition of Done

The landing page is complete when:
- It matches the approved screenshot-based visual direction.
- It uses a consistent design system and is responsive.
- All CTAs work and the call CTA uses a verified phone number.
- The quote form validates correctly and leads are recorded in the newly created Google Sheet according to the documented delivery policy.
- No secret credentials are exposed to the client.
- SEO metadata, crawl controls, structured data, and local business details are correct and verified.
- Accessibility, performance, security, and testing requirements have been checked.
- No fake or unverified business claims remain.
- The owner has verified the contact information, sheet access, privacy details, and production behavior.

**Final rule:** Accuracy and trust take priority over filling every section. If a business fact, visual detail, integration credential, or contact detail is not available, flag it for confirmation rather than inventing it.
