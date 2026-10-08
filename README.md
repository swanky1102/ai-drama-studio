# AI Drama Studio v0.3

AI Drama Studio is a production-style AI writers room built with Next.js, React, TypeScript and Claude.

## v0.3
- Production screenplay editor
- Claude Writers Room with structured project context
- Local continuity engine
- Character relationship map
- Series Bible
- Visual development board
- Browser autosave
- Revision snapshots
- JSON export / print screenplay
- Optional Supabase cloud persistence API
- Database schema included in `supabase/schema.sql`

## Run locally
1. Copy `.env.example` to `.env.local`.
2. Add `ANTHROPIC_API_KEY`.
3. Optionally add Supabase credentials for cloud persistence.
4. Run `npm install`.
5. Run `npm run dev`.

Cloud persistence starts with RLS enabled and no public policies. Authentication and user-scoped policies are the next security layer.

## Direction
The data model is JSON-first so the same project can move from browser storage to authenticated cloud storage without changing the screenplay model.