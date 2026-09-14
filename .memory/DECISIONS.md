# Architectural Decision Records (ADRs) — Portfolio Web App

## ADR-001: Modernization from Single HTML File to Vite + React 19 + TypeScript + Tailwind CSS v4
- **Status**: ACCEPTED (2026-09-14)
- **Context**: The portfolio was previously a large 79KB monolithic HTML file. It required modernization into a clean, modular, typed codebase reflective of a Senior Software Engineer's caliber.
- **Decision**: Adopted Vite 8.3 + React 19 + TypeScript 7 with Tailwind CSS v4 and shadcn/ui design tokens.
- **Consequences**: Lightning-fast local dev and sub-second builds, modular component reuse, clean separation of concerns, and full type safety.

## ADR-002: Base Path Relative Asset Resolution for GitHub Pages
- **Status**: ACCEPTED (2026-09-14)
- **Context**: GitHub Pages can host portfolios either under `username.github.io/repo/` or custom domains. Hardcoded root paths (`/assets/...`) break on subpath repositories.
- **Decision**: Set `base: './'` in `vite.config.ts`.
- **Consequences**: Emitted asset references are strictly relative (`./assets/...`), ensuring 100% reliable deployment on any GitHub Pages configuration.

## ADR-003: Strict Demarcation of Enterprise Roles vs Personal Product Lab
- **Status**: ACCEPTED (2026-09-14)
- **Context**: A clear distinction is vital between enterprise employment (Currencies Direct, SUGAR Cosmetics, Provab, JAWK) and self-directed commercial creations (MacMint, TopBump, DotMesh, TinyOrbit URL).
- **Decision**: Implemented two separate UI sections:
  1. `ExperienceSection.tsx`: Enterprise tenures with company logos, official App Store links, and enterprise metrics.
  2. `PersonalProjectsSection.tsx`: Independent product creations featuring the user's exact preamble ("Independent Engineering & Product Lab (Nov 2025 – Present)...") with live launch URLs, App Store, and Google Play links.
