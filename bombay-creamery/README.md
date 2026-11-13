# Bombay Creamery website

A responsive Next.js App Router website scaffold for Bombay Creamery, built with TypeScript, React, Tailwind CSS v4 and Lucide icons.

## Included
- Homepage and 17 supporting content routes, including three business-model pages.
- Reusable navigation, footer, business cards and enquiry form.
- Formspree POST integration using the supplied endpoint.
- Indian mobile/email validation, honeypot field, loading/error/success states and source URL capture.
- Per-route metadata, canonical URLs, Open Graph metadata, sitemap and robots rules.
- Responsive layouts and accessible native FAQ disclosures.
- Optional GA4 configuration through an environment variable.

## Important source-data limitations
The brief refers to a supplied product catalogue and payment-stage figures, but those details were not present in the source material received for this build. Product names, pack sizes, prices, registration fees, security deposits and initial-stock payment figures have therefore not been invented. Add the verified catalogue and written payment schedule before publishing those details. The stated investment and gross invoice margin figures are displayed as supplied business information, not guaranteed returns. Confirm all commercial terms in writing.

The brief asks to preserve an existing website design, but no existing site URL, source repository or design assets were provided. This project uses the supplied palette and type direction as the basis for a premium responsive design. Replace the illustrative food photography with licensed, brand-approved assets before launch. The imagery is illustrative and is not represented as Bombay Creamery packaging.

## 1. Installation
Install Node.js 20.9 or newer. Then:

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000.

## 2. Local development
- Edit content and business figures in `lib/site.ts`.
- Page content is generated from `app/[slug]/page.tsx`.
- Homepage is `app/page.tsx`.
- Shared UI is in `components/`.
- Styling is in `app/globals.css`.

## 3. Formspree configuration
The enquiry form posts to `NEXT_PUBLIC_FORMSPREE_ENDPOINT`, defaulting to the supplied `https://formspree.io/f/mwlovovk`. Confirm the Formspree form is active and configured to accept the submitted fields. Test a real submission from a staging deployment. The UI only shows success after an HTTP success response from Formspree.

## 4. Environment variables
- `NEXT_PUBLIC_SITE_URL`: production canonical origin; replace the example domain.
- `NEXT_PUBLIC_FORMSPREE_ENDPOINT`: Formspree endpoint.
- `NEXT_PUBLIC_GA_ID`: optional GA4 measurement ID.
- `NEXT_PUBLIC_GTM_ID`: reserved for GTM integration.
- `NEXT_PUBLIC_GOOGLE_ADS_ID`: reserved for Google Ads conversion integration.

No fake analytics IDs are included. GTM and Google Ads event mapping still need to be connected to real configured IDs and verified before use.

## 5. GitHub upload
Create a repository, then:

```bash
git init
git add .
git commit -m "Build Bombay Creamery website"
git branch -M main
git remote add origin https://github.com/YOUR-ORG/YOUR-REPOSITORY.git
git push -u origin main
```

## 6. Vercel deployment
Import the GitHub repository into Vercel, select Next.js, add environment variables, then deploy. Run `npm run build` locally before production deployment.

## 7. Custom domain
Add the domain in Vercel project settings and follow Vercel's DNS instructions. Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS origin and redeploy.

## 8. Google Search Console
Verify the domain property using DNS, submit `https://YOUR-DOMAIN/sitemap.xml`, inspect key landing pages and monitor indexing, enhancements and search performance. Rankings and indexing are not guaranteed.

## Pre-launch checklist
- [ ] Replace `NEXT_PUBLIC_SITE_URL` with the real domain.
- [ ] Verify Formspree endpoint, notifications and successful live test.
- [ ] Add approved catalogue SKUs, sizes, prices and product imagery.
- [ ] Obtain written confirmation of registration, deposit, stock and tax payment terms.
- [ ] Replace illustrative photography with licensed, approved brand assets.
- [ ] Confirm company claims, legal entity details, policies and footer requirements.
- [ ] Configure GA4, GTM and Google Ads only with real IDs; validate event firing.
- [ ] Test all pages, forms, links and viewport widths (320–1440px).
- [ ] Run `npm audit` and review dependency advisories.
- [ ] Run `npm run build` and resolve any deployment-specific warnings.
