# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

FREEBIE TERRORIST is a dark cyberpunk-themed Next.js application that provides curated free offers and discounts for students. The project features a "digital anarchist" aesthetic with green/black color schemes, advanced animations, and interactive 3D elements.

## Development Commands

### Essential Commands
```bash
# Development server with hot reload
pnpm dev

# Production build
pnpm build

# Start production server
pnpm start

# Lint code
pnpm lint
```

### Package Management
The project uses `pnpm` as the package manager:
```bash
# Install dependencies
pnpm install

# Add new dependency
pnpm add <package>

# Add dev dependency
pnpm add -D <package>
```

## Architecture Overview

### Framework Stack
- **Next.js 15.4.6** with App Router
- **React 19.1.1** with TypeScript
- **Tailwind CSS 3.4.1** for styling
- **Framer Motion** + **Anime.js** + **GSAP** for animations
- **Radix UI** + **shadcn/ui** for components
- **pnpm** for package management

### Project Structure
```
app/                    # Next.js App Router pages
├── globals.css        # Global styles with cyberpunk theme
├── layout.tsx         # Root layout with Space Mono font
├── page.tsx          # Main homepage
components/
├── ui/               # 80+ reusable UI components
├── magicui/         # Advanced animation components
└── [feature]/       # Feature-specific components
lib/
├── studentOffers.ts  # Core data structure (400+ offers)
├── utils.ts         # Tailwind merge utilities
hooks/               # Custom React hooks
public/              # Static assets including logos and payment QR codes
```

### Design System

**Color Palette:**
- Primary: Green (`#22c55e`, `#4ade80`, `#16a34a`)
- Background: Pure black (`#000000`)
- Text: White and green variants
- Accents: Matrix green (`#00ff00`) for special effects

**Typography:**
- Primary Font: Space Mono (Google Font, 400 & 700 weights)
- Used across 90% of the website for consistent monospace aesthetic

**Animation Libraries:**
- Framer Motion: Page transitions and micro-interactions
- Anime.js: Complex SVG animations and stagger effects  
- GSAP: Advanced timeline animations
- Custom CSS keyframes: Cyberpunk-specific effects

### Data Architecture

**Student Offers System:**
- **Location:** `lib/studentOffers.ts`
- **Structure:** TypeScript interfaces with 400+ curated offers
- **Categories:** AI/Cloud, Design, Hosting, Security, Productivity, etc.
- **Fields:** provider, offer, duration, savings, eligibility, verification, notes, link

### Component Patterns

**Motion Components:**
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
```

**Cyberpunk Styling:**
```tsx
className="bg-gradient-to-br from-gray-900 via-black to-gray-800 border-green-500/30"
```

**Consistent Green Theming:**
- Text: `text-green-400`, `text-green-300`, `text-green-500`
- Backgrounds: `bg-green-600`, `bg-green-500/20`
- Borders: `border-green-400/50`

## Key Configuration Files

### Next.js Configuration
- **File:** `next.config.mjs`
- **Notable:** ESLint and TypeScript errors ignored during builds, unoptimized images
- **Reasoning:** Allows for rapid development while maintaining performance

### Tailwind Configuration
- **File:** `tailwind.config.js`
- **Features:** Extensive custom animations, cyberpunk color system, advanced keyframes
- **Animations:** Matrix effects, gradient scanning, terminal-style animations

### TypeScript Configuration
- **File:** `tsconfig.json`
- **Features:** ES6 target, strict mode enabled, path aliases for imports
- **Aliases:** `@/*` maps to root directory for clean imports

## Important Development Notes

### Design System Integration
The project includes comprehensive Cursor AI rules in `.cursor/rules/design_system_rules.mdc` that define:
- Token definitions and color system
- Component architecture patterns  
- Animation system guidelines
- Asset management workflow
- Figma integration standards

### Component Development
- All components follow React 19 patterns with TypeScript
- Animation-first approach using Framer Motion
- Consistent cyberpunk aesthetic with green accents
- Mobile-responsive design using Tailwind breakpoints

### Logo Management
- Automated logo fetching system in development
- Manual overrides for specific providers
- Support for PNG, JPG, SVG, WebP formats
- Local caching for performance

### Performance Considerations
- Next.js font optimization for Space Mono
- Image optimization with Next.js Image component
- GPU-accelerated animations using transforms
- Component lazy loading with dynamic imports

### Testing & Quality
- ESLint configuration with Next.js rules
- TypeScript strict mode for type safety
- Component testing setup with Vitest and Playwright
- Build optimization with Next.js Turbopack

This codebase emphasizes visual impact through advanced animations while maintaining clean, scalable architecture patterns suitable for rapid feature development.