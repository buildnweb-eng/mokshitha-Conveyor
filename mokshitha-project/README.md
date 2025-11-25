# Mokshitha Industrial Automation - Next.js Website

This is the official website for Mokshitha Industrial Automation, a leading manufacturer of industrial conveyor belts and automation solutions in Hyderabad, India.

## 🚀 Project Overview

This Next.js application has been converted from a React Vite project while maintaining 100% UI/UX consistency, including all colors, components, and design elements.

## 📁 Project Structure

```
mokshitha-project/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── about/             # About Us page
│   │   ├── clients/           # Clients page
│   │   ├── contact/           # Contact page
│   │   ├── industries/        # Industries We Serve page
│   │   ├── products/          # Products page
│   │   ├── layout.tsx         # Root layout with providers
│   │   ├── page.tsx           # Home page
│   │   ├── globals.css        # Global styles with design system
│   │   └── not-found.tsx      # 404 page
│   ├── components/
│   │   ├── ui/                # shadcn/ui components (44 components)
│   │   ├── layout/            # Header & Footer components
│   │   ├── IndustryCard.tsx   # Industry card component
│   │   ├── ProductCard.tsx    # Product card component
│   │   ├── NavLink.tsx        # Navigation link component (adapted for Next.js)
│   │   └── providers.tsx      # Client-side providers wrapper
│   ├── hooks/
│   │   ├── use-mobile.tsx     # Mobile detection hook
│   │   └── use-toast.ts       # Toast notification hook
│   └── lib/
│       └── utils.ts           # Utility functions (cn)
├── public/
│   ├── assets/                # Images and media
│   ├── videos/                # Video content
│   ├── favicon.ico            # Favicon
│   └── robots.txt             # SEO robots file
├── tailwind.config.ts         # Tailwind configuration
├── components.json            # shadcn/ui configuration
└── package.json               # Dependencies
```

## 🎨 Design System

### Color Palette
- **Primary**: `hsl(215 85% 25%)` - Industrial Blue
- **Accent**: `hsl(25 95% 53%)` - Orange Accent
- **Secondary**: `hsl(215 15% 92%)` - Light Gray
- **Muted**: `hsl(215 15% 95%)` - Background Gray

### Typography
- **Headings**: Raleway
- **Body**: Inter

### Custom Design Tokens
- Gradient primary
- Gradient hero (for video overlays)
- Custom shadows (card, hover)
- Industrial color palette

## 📄 Pages

1. **Home** (`/`) - Hero section with video background, stats, product categories, why choose us
2. **About Us** (`/about`) - Company overview, core values, capabilities
3. **Products** (`/products`) - Tabbed product showcase with 4 categories
4. **Industries** (`/industries`) - Industries served with 24+ sectors
5. **Clients** (`/clients`) - Client showcase and statistics
6. **Contact** (`/contact`) - Contact form and facility information
7. **404** (`/not-found`) - Custom 404 error page

## 🛠 Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Icons**: Lucide React
- **State Management**: React Query (TanStack Query)
- **Forms**: React Hook Form + Zod
- **Animations**: Tailwind CSS Animate

## 📦 Key Dependencies

- `next` - Next.js framework
- `react` & `react-dom` - React 18
- `@radix-ui/*` - Headless UI primitives
- `tailwindcss` - Utility-first CSS
- `lucide-react` - Icon library
- `@tanstack/react-query` - Data fetching
- `react-hook-form` - Form management
- `zod` - Schema validation
- `class-variance-authority` - Component variants
- `tailwind-merge` - Tailwind class merging
- `next-themes` - Theme management
- `sonner` - Toast notifications

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## 🔧 Configuration

### Path Aliases

The project uses the `@/` path alias for imports:

```typescript
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
```

### Environment Variables

No environment variables are required for basic functionality. Add `.env.local` for custom configurations if needed.

## 📝 Key Features

✅ **Fully Responsive Design** - Mobile-first approach
✅ **SEO Optimized** - Next.js metadata and semantic HTML
✅ **Performance Optimized** - Image optimization with Next.js Image
✅ **Accessible** - WCAG compliant with Radix UI primitives
✅ **Type Safe** - Full TypeScript coverage
✅ **Modern UI** - shadcn/ui components with customizable themes
✅ **Fast Navigation** - Next.js App Router for instant page transitions

## 🔄 Migration from React Vite

This project was migrated from React Vite to Next.js with the following changes:

1. **Routing**: `react-router-dom` → Next.js App Router
2. **Navigation**: `<Link>` component adapted for Next.js
3. **Images**: Standard `<img>` → Next.js `<Image>` component
4. **Client Components**: Added `'use client'` directive where needed
5. **Providers**: Moved to separate client component file
6. **Assets**: Moved from `src/assets` to `public/assets`

## 📞 Contact Information

- **Phone**: 7288048689, 8885565829
- **Email**: info@mokshithaautomation.com
- **Address**: Plot No. 54, Kushaiguda IDA Phase-IV, Medchal, Hyderabad – 500 005

## 📄 License

© 2025 Mokshitha Industrial Automation. All rights reserved.

---

Built with ❤️ using Next.js and modern web technologies
