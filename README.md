# AI Drama Studio v0.5

Production-style AI writers room built with Next.js, React, TypeScript and Claude.

## v0.5
- Supabase email/password authentication foundation
- User-scoped project persistence with RLS
- Project ownership enforced by authenticated user UUID
- No service-role key is used by browser code
- Local browser mode remains available
- Multi-project workspace, revisions and AI Writers Room from v0.4

## Setup
Copy .env.example to .env.local and set ANTHROPIC_API_KEY, SUPABASE_URL and SUPABASE_ANON_KEY.

Run supabase/schema.sql in Supabase SQL Editor. Enable Email provider under Supabase Authentication. Then run npm install and npm run dev.

For production, configure the same environment variables in your deployment platform and run npm run build before deployment.
