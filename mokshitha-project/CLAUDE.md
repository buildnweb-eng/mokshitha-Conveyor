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
- `src/app/` - Next.js App Router pages (about, clients, contact, industries, products)
- `src/components/ui/` - shadcn/ui component library (44 components)
- `src/components/layout/` - Header and Footer components
- `src/components/` - Custom components (AnimatedCounter, ProductCard, FloatingCTA, etc.)
- `src/hooks/` - Custom hooks (use-mobile, use-toast)
- `src/lib/utils.ts` - Utility functions (cn for className merging)
- `public/` - Static assets (images, videos, favicon)

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

**Custom Components**: Beyond shadcn/ui, the project has custom components:
- `AnimatedCounter` - Number animation with Intersection Observer
- `ProductCard` / `IndustryCard` - Display cards for products and industries
- `FloatingCTA` - Floating call-to-action button
- `NavLink` - Navigation link utility

**SEO & Structured Data**: Pages include JSON-LD schemas (Organization, LocalBusiness, FAQPage, Product, Reviews) for rich search results.

**Custom Animations**: CSS animations defined in `globals.css` (e.g., `.animate-scroll-left` for infinite logo scrolling).

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
