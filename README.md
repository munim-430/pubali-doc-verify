# Document Verification System

A Next.js 14 (App Router) rebuild of the Pubali Bank PLC document verifier
page, populated with the NID record and wired to the bank verification route.

## Stack

- Next.js 14.2 (App Router, TypeScript)
- Tailwind CSS 3.4 (utility classes + a few component classes in
  `app/globals.css` that mirror the original Bootstrap theme)

## Routes

| Route | Description |
| --- | --- |
| `/` | Document verifier page with the NID record and the **Verify Linked Bank Account** button. |
| `/bank-verify` | Shows a spinner for 2 seconds, then redirects to `https://verify.pubalibankbd.com/verify/226019711`. |

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm run start
```

## Deploy to Vercel

```bash
npx vercel
```

Or import the repository in the Vercel dashboard — the default Next.js preset
needs no extra configuration.

## Where the data lives

All hardcoded record values (NID, names, address, MRZ) and the bank
verification URL live in `lib/nid.ts`. Update that single file to change the
displayed record or the redirect target.
