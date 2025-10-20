# FREEBIE TERRORIST - Setup & Configuration Guide

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Configuration

Create a `.env.local` file in the root directory:

```bash
# Email Service Configuration (Resend)
RESEND_API_KEY=re_your_actual_api_key_here
```

**Get your Resend API Key:**
1. Go to [resend.com](https://resend.com)
2. Sign up for a free account (3,000 emails/month free)
3. Navigate to API Keys section
4. Create a new API key
5. Copy and paste it into `.env.local`

### 3. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 4. Build for Production
```bash
npm run build
npm start
```

## 📧 Email Configuration

### Resend Setup (Current Implementation)
- **Why Resend?** The `@getbrevo/brevo` SDK had configuration issues. Resend is more reliable and has better Next.js integration.
- **Location:** `app/api/send/route.tsx`
- **Environment Variable:** `RESEND_API_KEY`

### Domain Verification (Optional for Production)
For production, verify your domain in Resend:
1. Go to Domains in your Resend dashboard
2. Add `terrorist.me`
3. Follow DNS verification steps
4. Update the `from` email address in `app/api/send/route.tsx`

## 🎨 New Components

### HackerShimmerButton
**Location:** `components/ui/hacker-shimmer-button.tsx`

Advanced button component with:
- Animated shimmer effect
- Glowing border on hover
- Scanline effect overlay
- Optimized performance

```tsx
<HackerShimmerButton
  shimmerColor="#22c55e"
  onClick={handleClick}
>
  <Terminal className="w-5 h-5" />
  <span>Button Text</span>
  <ArrowRight className="w-5 h-5" />
</HackerShimmerButton>
```

### HackerTitle
**Location:** `components/ui/hacker-title.tsx`

Enhanced title component with:
- Anime.js-powered glitch effects
- SVG stroke animation
- Matrix-style rain overlay
- Performance optimized with requestAnimationFrame

```tsx
<HackerTitle 
  text={["FREEBIE", "TERRORIST"]} 
  className="my-custom-class"
/>
```

## ⚡ Performance Optimizations

### Next.js Config Updates
- **SWC Minification:** Enabled for faster builds
- **React Strict Mode:** Enabled for better development
- **Console Removal:** Auto-removes console.log in production
- **CSS Optimization:** Experimental CSS optimization enabled

### Magnet Lines Optimization
Reduced from:
- 20 rows × 35 columns = 700 elements
- To: 12 rows × 20 columns = 240 elements (66% reduction)

### Animation Performance
- Used CSS transforms instead of layout properties
- Implemented requestAnimationFrame for smooth animations
- Reduced Anime.js stagger delays
- Optimized SVG stroke dasharray calculations

## 🎭 Animation System

### Anime.js Integration
**Location:** `components/ui/hacker-title.tsx`

Features:
- Glitch effects with random delays
- SVG path stroke animations
- Easing functions for smooth transitions
- Loop management with proper cleanup

### Framer Motion
Used for:
- Page transitions
- Component entrance animations
- Hover effects
- Modal animations

## 🐛 Bug Fixes

### 1. Button Text Alignment
**Fixed:** Added proper flex layout with gap spacing
**Files:** `app/page.tsx`

### 2. Title Animation
**Problem:** Cheesy pulsating heartbeat animation
**Solution:** Replaced with subtle glitch effects and SVG stroke animation
**Files:** `components/ui/hacker-title.tsx`

### 3. Background Lines
**Problem:** Intermittent mouse tracking
**Solution:** 
- Reduced element count (66% fewer elements)
- Added passive event listeners
- Implemented RAF throttling
**Files:** `app/page.tsx`, `components/ui/magnet-lines.tsx`

### 4. Offer Modal
**Status:** Modal component properly configured with createPortal
**Files:** `components/ui/offer-details-modal.tsx`, `components/ui/enhanced-offer-card-fixed.tsx`
**Note:** Added debug console.log statements to track modal state

## 🔍 Troubleshooting

### CSS Parsing Errors
If you see `Module parse failed: Unexpected character '@'`:
```bash
rm -rf .next node_modules package-lock.json
npm install
npm run dev
```

### Slow Development Server
1. Reduce animation complexity in dev mode
2. Use `npm run build` to test production performance
3. Check browser dev tools Performance tab
4. Disable browser extensions that might interfere

### Modal Not Opening
1. Check browser console for errors
2. Verify modal state in React DevTools
3. Check z-index conflicts
4. Ensure createPortal is rendering to document.body

### File Not Found Errors
These are typically from:
- Missing logo files (handled by fallback initials)
- Next.js optimization attempting to load missing assets
- Check `public/` directory structure

## 📦 Dependencies

### Core
- Next.js 15.4.6
- React 19.1.1
- TypeScript 5.x

### Animation Libraries
- **Anime.js** 4.1.2 - Advanced animations
- **Framer Motion** latest - React animations
- **GSAP** 3.13.0 - Complex animations

### UI Libraries
- **Radix UI** - Primitive components
- **Tailwind CSS** 3.4.1 - Styling
- **Shadcn/ui** - Component system

### Email
- **Resend** 6.0.2 - Email API

## 🎯 Next Steps

### Recommended Improvements
1. Add more Anime.js animations to other components
2. Implement page transition animations
3. Add loading skeletons
4. Optimize image loading with blurhash
5. Add service worker for offline support

### Performance Monitoring
- Use Vercel Analytics (already installed)
- Monitor Core Web Vitals
- Set up error tracking (Sentry recommended)

## 📝 Environment Variables for Production

### Vercel Deployment
1. Go to project settings
2. Navigate to Environment Variables
3. Add: `RESEND_API_KEY` = `your_api_key`
4. Redeploy

### Email Testing
Send test emails to verify configuration:
1. Open the website
2. Click "Want a .EDU e-mail?" button
3. Fill out the form
4. Check email at configured recipient address

## 🎨 Design System

### Colors
- **Primary Green:** `#22c55e` (green-500)
- **Dark Green:** `#16a34a` (green-600)
- **Matrix Green:** `#00ff00` (effects only)
- **Accent Pink:** `#ec4899` (pink-500)
- **Background:** Pure black `#000000`

### Typography
- **Font:** Space Mono (monospace)
- **Weights:** 400 (regular), 700 (bold)
- **Loading:** Local fonts from `/app/fonts/`

### Animation Timing
- **Fast:** 150-300ms (UI feedback)
- **Medium:** 300-600ms (transitions)
- **Slow:** 600ms-2s (page enter/exit)
- **Loops:** 2-8s (ambient animations)

## 🔐 Security Notes

- API keys are server-side only (not exposed to client)
- Email service uses POST route in `/app/api/send/`
- CORS configured for production domain
- Rate limiting recommended for production

## 📚 Documentation Links

- [Next.js Docs](https://nextjs.org/docs)
- [Anime.js Docs](https://animejs.com/documentation/)
- [Resend Docs](https://resend.com/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)







