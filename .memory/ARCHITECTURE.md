# Architecture — Portfolio Web App

## System Architecture Overview
```text
┌─────────────────────────────────────────────────────────────┐
│                 Browser Client (Desktop / Mobile)           │
└──────────────────────────────┬──────────────────────────────┘
                               │ HTTP GET
                               ▼
┌─────────────────────────────────────────────────────────────┐
│                     GitHub Pages CDN                        │
│   ├── index.html (Vite SPA Production Entry)                │
│   ├── assets/ (Hashed CSS and JS bundle chunks)             │
│   ├── images / logos (App & enterprise brand icons)         │
│   └── Alok_Kumar_Rathaur_Senior_iOS_Engineer_Resume.docx    │
└─────────────────────────────────────────────────────────────┘
                               ▲
                               │ Automated Push to `main`
┌──────────────────────────────┴──────────────────────────────┐
│       GitHub Actions CI/CD (.github/workflows/deploy.yml)   │
│   ├── Checkout repository                                   │
│   ├── Node.js 20 environment                                │
│   ├── npm run build (tsc -b && vite build)                  │
│   └── actions/deploy-pages@v4                               │
└─────────────────────────────────────────────────────────────┘
```

## Directory & Component Tree
```text
portfolio/
├── .github/workflows/deploy.yml     # Automated build & deploy to GitHub Pages
├── .memory/                         # Living project memory & context
├── public/                          # Static assets copied into dist/
│   ├── *.png, *.jpg (company & project logos)
│   └── Alok_Kumar_Rathaur_Senior_iOS_Engineer_Resume.docx
├── src/
│   ├── components/
│   │   ├── ui/                      # Primitive shadcn-style atoms (Button, Card, Badge)
│   │   ├── Icons.tsx                # Custom SVG brand icons (GitHub, LinkedIn)
│   │   ├── Navbar.tsx               # Sticky glassmorphic navigation with resume CTA
│   │   ├── Hero.tsx                 # Headline, proof badges, primary CTAs
│   │   ├── StatsRow.tsx             # 6 High-proof conversion metrics (10k-websites)
│   │   ├── SkillsSection.tsx        # 10 categorized technical skill clusters
│   │   ├── ExperienceSection.tsx    # Professional Enterprise & Client roles with logos
│   │   ├── PersonalProjectsSection.tsx # Independent Engineering & Product Lab
│   │   ├── EducationSection.tsx     # B.Tech + Certifications
│   │   └── ContactFooter.tsx        # Email copy, contact links, resume download
│   ├── data/
│   │   └── portfolioData.ts         # Single Source of Truth for resume data & links
│   ├── lib/
│   │   └── utils.ts                 # cn() class utility combining clsx + tailwind-merge
│   ├── App.tsx                      # Root page composition
│   ├── index.css                    # Tailwind v4 import + dark tokens + glassmorphism
│   └── main.tsx                     # React 19 entry point
├── vite.config.ts                   # Base './' for GitHub Pages relative asset loading
└── package.json                     # Vite + React 19 + Tailwind v4 dependencies
```
