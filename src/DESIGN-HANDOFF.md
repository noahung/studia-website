# Studia Landing Page - Design Handoff

**Version:** 1.0.0  
**Date:** 21 October 2025  
**Framework:** React + Tailwind CSS + Motion (Framer Motion)

---

## Overview

A single-page, scroll-driven landing website for the Studia mobile app featuring cinematic dark aesthetics, parallax animations, and scrollytelling effects. Inspired by Firebase Studio's visual language.

---

## Design Tokens

### Colors

#### Backgrounds
- **Navy (Primary):** `#061022`
- **Charcoal:** `#0F1720`
- **Surface Primary:** `#0B0F12`
- **Surface Secondary:** `#101418`

#### Accent
- **UK Dark Blue:** `#0033A0` (primary brand colour)

#### Status Colors
- **Success:** `#26A65B` (green)
- **Error:** `#F44336` (red)
- **Warning:** `#FFC107` (amber)
- **Info:** `#2196F3` (blue)

#### Text
- **Primary:** `rgba(255, 255, 255, 0.95)`
- **Secondary:** `rgba(255, 255, 255, 0.65)`
- **Muted:** `rgba(255, 255, 255, 0.45)`

#### Borders
- **Default:** `rgba(255, 255, 255, 0.12)`
- **Muted:** `rgba(255, 255, 255, 0.06)`

### Typography

**Font Family:** Nunito Sans (Google Fonts)  
Import: `@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;500;600;700;800&display=swap');`

#### Font Sizes & Styles

| Element | Desktop | Tablet | Mobile | Weight | Line Height | Letter Spacing |
|---------|---------|--------|--------|--------|-------------|----------------|
| H1      | 72px    | 56px   | 40px   | 700    | 1.05        | -0.02em        |
| H2      | 48px    | 36px   | 28px   | 700    | 1.1         | -0.01em        |
| H3      | 32px    | 24px   | 20px   | 600    | 1.2         | 0              |
| Body    | 16px    | 16px   | 16px   | 400    | 1.5         | 0              |
| Small   | 14px    | 14px   | 14px   | 400    | 1.4         | 0              |

### Border Radius

- **Button:** `14px` (primary radius)
- **Card:** `20px`
- **Mockup Frames:** `24px`
- **Container:** `20-28px` (use `24px` as standard)
- **Pill:** `9999px` (fully rounded)

### Spacing (8px Grid)

| Token | Value |
|-------|-------|
| `--space-1` | 8px |
| `--space-2` | 16px |
| `--space-3` | 24px |
| `--space-4` | 32px |
| `--space-5` | 40px |
| `--space-6` | 48px |
| `--space-8` | 64px |
| `--space-10` | 80px |
| `--space-12` | 96px |
| `--space-15` | 120px |
| `--space-20` | 160px |

**Section Padding:**
- Desktop: `120-160px` vertical
- Tablet: `80-120px` vertical
- Mobile: `60-100px` vertical

### Shadows

#### Volumetric Glow (Layered)
```css
/* Light (top-left) */
--shadow-light: rgba(255, 255, 255, 0.02) 0px -8px 24px;

/* Dark (bottom-right) */
--shadow-dark: rgba(0, 0, 0, 0.6) 0px 20px 60px;

/* Glow (accent) */
--shadow-glow: 0 0 40px rgba(0, 51, 160, 0.15);
```

**Usage:** Layer light and dark shadows together for depth:
```css
box-shadow: 
  rgba(255,255,255,0.02) 0px -8px 24px,
  rgba(0,0,0,0.6) 0px 20px 60px;
```

---

## Animation Specifications

### Timing & Easing

| Property | Value |
|----------|-------|
| **Base Duration** | `520ms` |
| **Slow Duration** | `800ms` |
| **Flip Duration** | `600ms` |
| **Smooth Easing** | `cubic-bezier(0.22, 0.78, 0.4, 1)` |

### Scroll-Parallax Layers

Three-layer parallax system based on scroll position:

| Layer | Transform Y |
|-------|-------------|
| Background | `-10%` |
| Middle | `0%` |
| Foreground | `+10%` |

**Implementation (Motion):**
```tsx
const y = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);
```

### Section Reveal Animation

On scroll into viewport:
- **Fade:** opacity `0 → 1`
- **Translate:** `Y: 30px → 0px`
- **Duration:** `520ms`
- **Easing:** `cubic-bezier(0.22, 0.78, 0.4, 1)`

**Implementation:**
```tsx
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, margin: '-100px' }}
transition={{ duration: 0.8, ease: [0.22, 0.78, 0.4, 1] }}
```

### Pinning

| Section | Pin Duration |
|---------|--------------|
| Hero headline | First 20% of scroll |
| Course titles | ~15% each subscene |

### Micro-Interactions

#### Flashcard Flip
- **3D Transform:** `rotateY(180deg)`
- **Duration:** `600ms`
- **Backface Visibility:** `hidden`

#### Button Hover
- **Scale:** `1.0 → 1.05`
- **Shadow:** Add glow on hover
- **Duration:** `300ms`

---

## Components

### Button Specifications

#### Primary (Pill)
```css
height: 48px;
padding: 0 32px;
background: #0033A0;
color: #ffffff;
border-radius: 9999px;
transition: all 300ms ease;

/* Hover */
background: #0033A0/90%;
box-shadow: 0 0 40px rgba(0, 51, 160, 0.3);
```

#### Secondary (Outline Pill)
```css
height: 48px;
padding: 0 32px;
background: transparent;
border: 1px solid rgba(255, 255, 255, 0.12);
color: rgba(255, 255, 255, 0.95);
border-radius: 9999px;
transition: all 300ms ease;

/* Hover */
background: rgba(255, 255, 255, 0.05);
```

### Input (Rounded)
```css
height: 48px;
padding: 0 16px;
background: #101418;
border: 1px solid rgba(255, 255, 255, 0.12);
border-radius: 14px;
color: rgba(255, 255, 255, 0.95);

/* Focus */
border-color: #0033A0;
outline: none;
```

### Badge (Course Tag)
```css
padding: 4px 8px;
background: rgba(0, 51, 160, 0.1);
border: 1px solid rgba(0, 51, 160, 0.2);
border-radius: 6px;
font-size: 12px;
color: #0033A0;
```

---

## Breakpoints

| Breakpoint | Range |
|------------|-------|
| **Mobile** | ≤ 767px |
| **Tablet** | 768px - 1279px |
| **Desktop** | ≥ 1280px |

**Tailwind Classes:**
- Mobile: default (no prefix)
- Tablet: `md:`
- Desktop: `lg:`

---

## Accessibility

### Reduced Motion

For users with `prefers-reduced-motion`, all animations are reduced to simple fades:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Contrast

- **Body Text:** WCAG AA compliant
  - White text `rgba(255,255,255,0.95)` on dark backgrounds
  - Minimum contrast ratio: 7:1
- **Secondary Text:** `rgba(255,255,255,0.65)` - 4.5:1 ratio

### Focus States

All interactive elements have visible focus states using the accent blue with reduced opacity ring.

---

## CSS Custom Properties (React/Next.js)

Copy these into your CSS:

```css
:root {
  /* Colors */
  --bg-navy: #061022;
  --bg-charcoal: #0F1720;
  --surface-primary: #0B0F12;
  --surface-secondary: #101418;
  --accent-blue: #0033A0;
  --status-success: #26A65B;
  --status-error: #F44336;
  --status-warning: #FFC107;
  --status-info: #2196F3;
  --text-primary: rgba(255, 255, 255, 0.95);
  --text-secondary: rgba(255, 255, 255, 0.65);
  --text-muted: rgba(255, 255, 255, 0.45);
  
  /* Radius */
  --radius-button: 14px;
  --radius-card: 20px;
  --radius-mockup: 24px;
  --radius-pill: 9999px;
  
  /* Animation */
  --ease-smooth: cubic-bezier(0.22, 0.78, 0.4, 1);
  --duration-base: 520ms;
  --duration-slow: 800ms;
}
```

---

## React Native Token Mapping

```typescript
export const colors = {
  bgNavy: '#061022',
  bgCharcoal: '#0F1720',
  surfacePrimary: '#0B0F12',
  surfaceSecondary: '#101418',
  accentBlue: '#0033A0',
  statusSuccess: '#26A65B',
  statusError: '#F44336',
  statusWarning: '#FFC107',
  statusInfo: '#2196F3',
  textPrimary: 'rgba(255, 255, 255, 0.95)',
  textSecondary: 'rgba(255, 255, 255, 0.65)',
  textMuted: 'rgba(255, 255, 255, 0.45)',
};

export const borderRadius = {
  button: 14,
  card: 20,
  mockup: 24,
  pill: 999,
};

export const spacing = {
  xs: 8,
  sm: 16,
  md: 24,
  lg: 32,
  xl: 40,
  xxl: 48,
  xxxl: 64,
};
```

---

## Component File Structure

```
/components
  ├── Header.tsx
  ├── HeroSection.tsx
  ├── ProblemSolution.tsx
  ├── CoursesSection.tsx
  ├── FeaturesSection.tsx
  ├── PricingSection.tsx
  ├── HowItWorksSection.tsx
  ├── TestimonialsSection.tsx
  ├── DownloadSection.tsx
  └── Footer.tsx
```

---

## Section Details

### 1. Hero Section
- Full viewport height
- Animated gradient background (slow radial movement)
- Parallax phone mockups (3 layers)
- H1 pins for first 20% scroll
- CTAs: "Get started" (primary) + "View pricing" (secondary)

### 2. Problem → Solution
- Full-height text transitions
- 3 statements fade in sequentially on scroll
- Horizontal slide animation for emphasis

### 3. Courses Section
- Vertical scrollytelling list
- 11 courses with descriptions
- Course title parallax from left
- "Start learning" micro button on hover

### 4. Features Section (5 tiles)
- Each feature consumes full canvas
- Left: H2 + description
- Right: Interactive mockup
- Parallax mockups with 3D transforms
- Flashcard flip interaction (600ms)

### 5. Pricing Section
- Typographic rows (no boxed cards)
- Sequential reveal on scroll
- "Pro" plan highlighted
- CTAs: "Start free" + "Compare plans"

### 6. How It Works
- Vertical timeline with 4 steps
- Animated progress line
- Icon + title + description per step
- Step number indicator

### 7. Testimonials
- Centered quotes
- 5-star rating display
- Author meta + course badge
- Sequential fade on scroll

### 8. Download CTA
- App Store + Google Play badges
- Email waitlist form
- Phone mockup with app preview

### 9. Footer
- 4-column link grid
- Social icons (monochrome)
- Copyright notice

---

## Motion Library Usage

**Install:**
```bash
npm install motion
```

**Import:**
```tsx
import { motion, useScroll, useTransform } from 'motion/react';
```

**Key Hooks:**
- `useScroll()` - Track scroll progress
- `useTransform()` - Map scroll to values
- `motion.div` - Animated components

---

## Copy Guidelines

- **British English** spelling throughout
- **Voice:** Confident, concise, no gimmicks
- **Sentence length:** Short and punchy
- **Verbs:** Results-oriented (e.g., "Prepare smarter", "Measure progress", "Pass with confidence")

---

## Export Assets

All mockup frames and UI elements are built with code using CSS gradients and borders. No external images required for mockups.

For production, export the following at **@2x resolution**:
1. Phone mockup screenshots (if using real app screens)
2. App Store badge (official asset)
3. Google Play badge (official asset)
4. App icon (1024x1024)

---

## Notes for Developers

1. **Scroll Performance:** Use `will-change: transform` on parallax elements
2. **Mobile:** Reduce parallax intensity on touch devices
3. **Loading:** Implement skeleton screens for sections below fold
4. **Analytics:** Track scroll depth and section visibility
5. **SEO:** Add semantic HTML and meta tags
6. **Forms:** Validate email inputs and handle errors gracefully

---

## Browser Support

- Chrome/Edge: Latest 2 versions
- Safari: Latest 2 versions
- Firefox: Latest 2 versions
- Mobile Safari: iOS 14+
- Chrome Mobile: Latest version

---

## Questions?

For implementation questions or design clarifications, refer to:
- Design tokens JSON: `/design-tokens-studia.json`
- Component source: `/components/`
- Global styles: `/styles/globals.css`

---

**End of Design Handoff Document**
