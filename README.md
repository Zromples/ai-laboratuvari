# AI.LAB Studio — Starter

This is the first front-end prototype for AI.LAB, inspired by the workflow patterns of AI video template platforms. It is an original interface, not a copy of YESSAI.

## Included
- Responsive Turkish-first dashboard
- Video / image workspace switch
- Seedance, Kling and Wan model selector (UI only)
- Prompt field and local reference-file picker
- Template discovery cards
- Placeholder credit and history navigation

## Important
Generation is intentionally disabled until provider APIs are integrated. Do not put provider secrets in `NEXT_PUBLIC_*` variables. API keys must be stored server-side.

## Run locally
1. Install Node.js 20+
2. Run `npm install`
3. Copy `.env.example` to `.env.local` and fill values when available
4. Run `npm run dev`

## Deployment
Push this folder to a GitHub repository and import it in Vercel. Set environment variables in Vercel only after Supabase and provider accounts are configured.

## Next implementation milestones
1. Supabase Auth and database schema
2. Server-side provider adapters for Seedance, Kling and Wan
3. Upload storage and asynchronous job tracking
4. Credits, billing, usage limits and admin dashboard
