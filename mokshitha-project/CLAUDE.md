# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Mokshitha Industrial Automation website - a marketing site for an industrial conveyor belt manufacturer. Built with Next.js 15 (App Router), TypeScript, Tailwind CSS, and shadcn/ui components.

## Commands

```bash
# Development
npm run dev       # Start dev server at http://localhost:3000

# Production
npm run build     # Build for production
npm start         # Start production server

# Quality
npm run lint      # Run ESLint
```

## Architecture

### Directory Structure
- `mokshitha-project/src/app/` - Next.js App Router pages (about, clients, contact, industries, products)
- `mokshitha-project/src/components/ui/` - shadcn/ui component library (44 components)
- `mokshitha-project/src/components/layout/` - Header and Footer components
- `mokshitha-project/src/hooks/` - Custom hooks (use-mobile, use-toast)
- `mokshitha-project/src/lib/utils.ts` - Utility functions (cn for className merging)
- `mokshitha-project/public/` - Static assets (images, videos, favicon)

### Key Patterns

**Path Alias**: Use `@/` for all imports
```typescript
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
```

**Client Components**: Add `'use client'` directive at top of files with interactivity (state, hooks, event handlers). Server components are the default.

**Providers**: All global providers (QueryClient, Tooltip, Toast) are wrapped in `src/components/providers.tsx`.

**Styling**: Tailwind CSS utility classes with custom design tokens defined in `src/app/globals.css`. Color palette uses CSS variables (--primary, --accent, --secondary).

**Form Handling**: React Hook Form + Zod validation pattern (see contact page for example).

### Tech Stack
- Next.js 15 (App Router)
- TypeScript (strict mode)
- Tailwind CSS 3.4 + tailwindcss-animate
- shadcn/ui (Radix UI primitives)
- TanStack React Query
- React Hook Form + Zod
- Lucide React icons
- next-themes (dark mode support)

## Design System

- **Primary**: Industrial Blue `hsl(215 85% 25%)`
- **Accent**: Orange `hsl(25 95% 53%)`
- **Typography**: Raleway (headings), Inter (body)
- Use existing shadcn/ui components from `src/components/ui/`
