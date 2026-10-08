{"name":"ai-drama-studio","version":"0.2.0","private":true,"scripts":{"dev":"next dev","build":"next build","start":"next start","lint":"tsc --noEmit"},"dependencies":{"@anthropic-ai/sdk":"^0.68.0","next":"^16.0.0","react":"^19.2.0","react-dom":"^19.2.0"},"devDependencies":{"@types/node":"^22.0.0","@types/react":"^19.0.0","@types/react-dom":"^19.0.0","typescript":"^5.7.0"}}

# v0.6 Production hardening
- Authenticated account state is visible inside the studio.
- Signed-in projects hydrate from Supabase automatically.
- New authenticated workspaces are onboarded to cloud persistence.
- Debounced cloud autosave protects active projects without writing on every keystroke.
- Production loading, error and not-found boundaries are included.
- /api/health reports integration readiness without exposing secrets.
- GitHub Actions CI runs TypeScript checks and the production build.
- Package version is now 0.6.0.

## Deployment
Set ANTHROPIC_API_KEY, SUPABASE_URL, and SUPABASE_ANON_KEY in the deployment environment. Run supabase/schema.sql once in Supabase, enable email/password authentication, then deploy the Next.js app. Never expose a Supabase service-role key to browser code.
