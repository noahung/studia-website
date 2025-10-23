# Studia Website - Image Requirements Guide

This document outlines all the images needed for your Studia website, including file names, recommended sizes, and optimization guidelines for instant loading.

## 📁 Directory Structure

Place all images in the following directory:
```
public/
├── images/           # Static images (PNG, JPG, WebP)
├── animated-icon.gif # ProblemSolution animated icon
└── plan-animation.gif # PricingSection animated icon
```

## 🎯 Required Images

### 1. **Hero Section**
**File:** `public/images/hero-image.png`  
**Size:** 700x700px (1:1 square ratio)  
**Format:** PNG or WebP  
**Purpose:** Main hero image showing Studia app interface  
**Description:** Should showcase the app's main interface, study dashboard, or key features in action

### 1.2 **Download Section App Image**
**File:** `public/images/download-app-mockup.png`  
**Size:** 288x580px (mobile phone aspect ratio)  
**Format:** PNG or WebP  
**Purpose:** App interface showcase in download section  
**Description:** Your actual app interface screenshot showing the main features and design

---

### 2. **Feature Section Images** (5 images)
All feature images should be **336x716px** (mobile phone aspect ratio) and show the actual app interface:

#### 2.1 AI Study Plans
**File:** `public/images/feature-ai-study-plan.png`  
**Size:** 336x716px (mobile phone aspect ratio)  
**Description:** Screenshot of AI study plan creation or management interface

#### 2.2 Smart Flashcards
**File:** `public/images/feature-flashcards-question.png`  
**Size:** 336x716px (mobile phone aspect ratio)  
**Description:** Screenshot showing smart flashcards interface (question view)

#### 2.3 Mock Exam
**File:** `public/images/feature-mock-exam.png`  
**Size:** 336x716px (mobile phone aspect ratio)  
**Description:** Screenshot of mock exam interface in progress

#### 2.4 Progress Tracking
**File:** `public/images/feature-progress.png`  
**Size:** 336x716px (mobile phone aspect ratio)  
**Description:** Screenshot of progress dashboard or analytics

#### 2.5 Offline Mode
**File:** `public/images/feature-offline.png`  
**Size:** 336x716px (mobile phone aspect ratio)  
**Description:** Screenshot showing offline mode or sync status

---

### 3. **Animated Icons** (4 files)
These should be **GIF files with transparent backgrounds**:

#### 3.1 Problem Solution Icon
**File:** `public/animated-icon.gif`  
**Size:** 200x200px (will be scaled to 200x200 in component)  
**Format:** GIF with transparent background  
**Description:** Animated icon for "Study smarter, not harder" section

#### 3.2 Pricing Plan Icon
**File:** `public/plan-animation.gif`  
**Size:** 160x160px (will be scaled to 160x160 in component)  
**Format:** GIF with transparent background  
**Description:** Animated icon for "Choose your plan" section

#### 3.3 Journey Icon
**File:** `public/journey-animation.gif`  
**Size:** 120x120px (will be scaled to 120x120 in component)  
**Format:** GIF with transparent background  
**Description:** Animated icon for "Start your journey today" section

#### 3.4 Courses Icon
**File:** `public/courses-animation.gif`  
**Size:** 140x140px (will be scaled to 140x140 in component)  
**Format:** GIF with transparent background  
**Description:** Animated icon for "Courses we support" section

---

## 🚀 Optimization Guidelines

### File Size Recommendations
- **Hero Image:** Max 500KB
- **Feature Images:** Max 300KB each (mobile screenshots can be larger)
- **Animated GIFs:** Max 2MB each (optimize for web)

### Format Recommendations
1. **PNG** - For images with transparency or sharp graphics
2. **WebP** - For photos and complex images (better compression)
3. **GIF** - For animated icons only

### Image Quality Settings
- **Hero Image:** 85-90% quality
- **Feature Images:** 80-85% quality
- **Animated GIFs:** Optimize for web (reduce colors if needed)

---

## 📱 Responsive Considerations

### Breakpoints
- **Mobile:** 320px - 768px
- **Tablet:** 768px - 1024px
- **Desktop:** 1024px+

### Image Scaling
All images will be automatically scaled using CSS `object-fit: cover` and responsive sizing, so the recommended sizes above will work across all devices.

---

## 🎨 Design Guidelines

### Visual Style
- **Consistent UI:** All app screenshots should show the same design system
- **Modern Interface:** Clean, professional look matching your brand
- **High Contrast:** Ensure text is readable in screenshots
- **Consistent Branding:** Use your brand colors and typography

### Screenshot Best Practices
- **Real Content:** Use realistic data, not Lorem ipsum
- **Clean State:** Show interfaces in their best state
- **Key Features:** Highlight the main functionality being described
- **Consistent Lighting:** Similar lighting and shadows across all screenshots

---

## 🔧 Technical Implementation

### Current Implementation
The website is already set up to load these images with:
- ✅ Fallback handling for missing images
- ✅ Responsive sizing
- ✅ Optimized loading
- ✅ Error handling

### File Naming Convention
- Use kebab-case: `feature-ai-study-plan.png`
- Be descriptive: `hero-image.png` not `image1.png`
- Include purpose: `feature-` prefix for feature images

---

## 📋 Checklist

### Required Files
- [ ] `public/images/hero-image.png` (700x700px)
- [ ] `public/images/download-app-mockup.png` (288x580px)
- [ ] `public/images/feature-ai-study-plan.png` (336x716px)
- [ ] `public/images/feature-flashcards-question.png` (336x716px)
- [ ] `public/images/feature-mock-exam.png` (336x716px)
- [ ] `public/images/feature-progress.png` (336x716px)
- [ ] `public/images/feature-offline.png` (336x716px)
- [ ] `public/animated-icon.gif` (200x200px, transparent)
- [ ] `public/plan-animation.gif` (160x160px, transparent)
- [ ] `public/journey-animation.gif` (120x120px, transparent)
- [ ] `public/courses-animation.gif` (140x140px, transparent)

### Optimization Checklist
- [ ] All images under recommended file sizes
- [ ] WebP format used where appropriate
- [ ] Animated GIFs optimized for web
- [ ] Consistent visual style across all images
- [ ] All images tested on different screen sizes

---

## 🚨 Important Notes

1. **File Paths:** The code expects images in `/public/images/` directory
2. **Base Path:** Your site uses `/studia-website/` base path, so images will be served from `/studia-website/images/`
3. **Fallbacks:** If images are missing, placeholder content will be shown
4. **Performance:** Larger images will slow down loading - stick to recommended sizes
5. **Testing:** Test all images on mobile, tablet, and desktop before going live

---

## 🎯 Quick Start

1. Create the `public/images/` directory
2. Add your images with the exact filenames listed above
3. Ensure all images meet the size requirements
4. Test the website to verify all images load correctly
5. Optimize file sizes if needed

Your website is already configured to handle these images automatically once you add them to the correct directories!
