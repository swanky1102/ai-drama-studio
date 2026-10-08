# AI Drama Studio v0.6

Production hardening for the Next.js + React + TypeScript studio.

## v0.6
- Authenticated account state inside the studio.
- Sign out without losing local projects.
- Signed-in project hydration from Supabase.
- Production loading, error and not-found boundaries.
- /api/health readiness endpoint without secret exposure.
- Package version 0.6.0.

## Deployment
Set ANTHROPIC_API_KEY, SUPABASE_URL, and SUPABASE_ANON_KEY in the deployment environment. Run supabase/schema.sql once in Supabase, enable email/password authentication, then deploy the Next.js app. Never expose a Supabase service-role key to browser code.
