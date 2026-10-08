# AI Drama Studio

A production-oriented web studio for building AI-powered drama series.

## Included in v0.1
- Series dashboard and season overview
- Character roster with editable profiles
- Episode board
- Writers Room with Claude API integration
- Series Bible / continuity context
- Local browser persistence
- Responsive dark cinematic UI

## Run locally

npm install
cp .env.example .env.local
Add ANTHROPIC_API_KEY to .env.local for live Claude generation.
npm run dev

Open http://localhost:3000.

## Architecture
Next.js App Router + React + TypeScript. The UI works without an API key using a safe demo fallback. When ANTHROPIC_API_KEY is configured, /api/generate sends writing requests to Claude.

## Roadmap
1. Multi-project workspace and database persistence
2. Structured episode/scene editor
3. Character relationship graph
4. Automatic continuity checking
5. Image generation and visual boards
6. Voice casting and scene audio
7. Render/export pipeline
8. Authentication and cloud sync