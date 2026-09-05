# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # Dev server at http://localhost:3000
npm run build    # Production build
npm run start    # Run production build (build first)
npm run lint     # ESLint
```

## Stack

- **Next.js 16.3.4** + **React 19.2.8** — App Router, JavaScript (no TypeScript)
- **Tailwind CSS v4** via `@tailwindcss/postcss` (PostCSS plugin, not the v3 CLI/Webpack plugin — config lives in `postcss.config.mjs`, not `tailwind.config.js`)
- **Decap CMS** (headless, git-based) at `/admin` — content stored as markdown in `content/`, deployed via Netlify

## Architecture

**Content layer:** Markdown files in `content/` are parsed server-side using `gray-matter` via `src/lib/content.js`. Functions like `getAllPhotos()`, `getAllVideos()`, `getAboutPage()`, `getContactPage()` use Node's `fs` module — they only work in Server Components (no `'use client'`).

**Routing:** App Router under `src/app/`. Pages:
- `/` — photos gallery (Server Component)
- `/videos` — videos gallery (Server Component)
- `/about`, `/contact` — static info pages (Server Components)
- `/admin` — Decap CMS admin (served from `public/admin/index.html`, not a Next.js route)

**Server vs. Client boundary:** Components using `useState`/`useEffect` need `'use client'`. Components that read from `content/` via `src/lib/content.js` must NOT be client components — `fs` doesn't exist in the browser. Pass data as props to client components if interactivity is needed.

**Netlify Identity + Git Gateway:** The Netlify Identity widget script must be loaded site-wide in `src/app/layout.js` (not just in `public/admin/index.html`) — Netlify's invite/recovery emails redirect to the site root, so the widget must be present there to handle tokens. The CMS only works on a deployed Netlify instance; `npm run dev` does not support Git Gateway.

**Decap CMS config:** `public/admin/config.yml` — uses `git-gateway` backend. Media uploads land in `public/img/uploads/`; `public_path` must be `/img/uploads` (strip the `public/` prefix since Next.js serves the `public/` directory from `/`).

## Path Alias

`@/` resolves to `src/` (configured in `jsconfig.json`).
