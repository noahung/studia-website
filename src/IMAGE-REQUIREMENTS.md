# Image Requirements for Studia Landing Page

This document outlines the required image specifications and placement locations for all screenshots and visual assets used in the Studia landing page.

## Mobile App Screenshot Specifications

All mobile app screenshots should follow these standard dimensions:

### General Requirements
- **Aspect Ratio**: 9:19.5 (standard smartphone ratio)
- **Recommended Dimensions**: 
  - Width: 1170px
  - Height: 2532px
  - Or proportionally scaled versions (e.g., 1080 x 2340px)
- **Format**: PNG, JPG, or **GIF** (animated GIFs are fully supported!)
- **Color Profile**: sRGB
- **File Size**: 
  - Static images: Optimize to < 500KB per image
  - Animated GIFs: Keep under 2MB for best performance

### Styling & Effects
- **Rounded Corners**: Applied programmatically at 38px border-radius
- **Neon Glow**: Animated blue gradient border applied via code
- **Shadow**: Blue neon glow effect added via CSS
- **Animation**: GIF animations are fully supported and will play automatically
- Do NOT include rounded corners or glow effects in your source images
- For GIFs, ensure the animation loops seamlessly

---

## Feature Section Screenshots

The Features section displays 5 mobile app screenshots, one for each feature:

### 1. AI Study Plans Screenshot
**File Location**: `/public/images/feature-ai-study-plan.png`

**What to Show**:
- Main study plan dashboard view
- List of study topics/modules
- Progress indicators for each topic
- AI-personalized recommendations
- Clear chapter/section organization
- Completion checkmarks for finished items

**Recommended Size**: 1170 x 2532px (or 1080 x 2340px)

---

### 2. Smart Flashcards Screenshots (Dual Images)
**File Location**: 
- `/public/images/feature-flashcards-question.png` (Question state)
- `/public/images/feature-flashcards-answer.png` (Answer state)

**Question Image - What to Show**:
- A flashcard in the middle of the screen
- Question visible on the card
- "Tap to reveal" or similar instruction
- Card counter (e.g., "15/50")
- Swipe indicators or navigation buttons
- Clean, focused design highlighting the flashcard

**Answer Image - What to Show**:
- Same flashcard but flipped to show the answer
- Answer text clearly visible
- "Tap to flip back" or similar instruction
- Same card counter and navigation elements
- Slightly different styling to indicate "answered" state

**Recommended Size**: 1170 x 2532px (or 1080 x 2340px) for both images

---

### 3. Timed Mock Exams Screenshot
**File Location**: `/public/images/feature-mock-exam.png`

**What to Show**:
- Active exam question interface
- Timer countdown displayed prominently
- Question number indicator (e.g., "Question 7 of 50")
- Multiple choice options
- Progress bar showing exam completion
- Next/Submit button

**Recommended Size**: 1170 x 2532px (or 1080 x 2340px)

---

### 4. Progress Tracking Screenshot
**File Location**: `/public/images/feature-progress.png`

**What to Show**:
- Circular or linear progress charts
- Overall completion percentage
- Subject breakdown with individual progress
- Study time statistics
- Performance metrics (accuracy, tests completed)
- Visual graphs/charts showing improvement over time

**Recommended Size**: 1170 x 2532px (or 1080 x 2340px)

---

### 5. Offline & Multi-Course Screenshot
**File Location**: `/public/images/feature-offline.png`

**What to Show**:
- List of available courses
- Offline indicator/badge
- Download status for each course
- Progress for multiple courses
- Course switching interface
- "Add course" button or similar

**Recommended Size**: 1170 x 2532px (or 1080 x 2340px)

---

## Hero Section Image

The hero section uses a single hero image for all screen sizes (mobile, tablet, and desktop).

### Hero Image (All Devices)
**File Location**: `/public/images/hero-image.png`

**What to Show**:
- Main app interface showcasing key features
- Dashboard or study plan view
- Clean, modern UI design
- Should represent the core value proposition
- Should work well on both mobile and desktop layouts

**Recommended Size**: 1170 x 2532px (or 1080 x 2340px)
**Aspect Ratio**: 9:19.5 (standard smartphone ratio)

**Parallax Effect**: This image will have a parallax scrolling effect that moves slower than the page scroll, creating depth and visual interest on all devices.

**Responsive Behavior**: The image will scale appropriately for different screen sizes while maintaining its aspect ratio and visual impact.

---

## Problem/Solution Scrollytelling Images

The ProblemSolution section uses a scrollytelling effect where each statement appears with its own image as you scroll. This creates an engaging narrative flow.

### Problem Images (Left Side)
These images should visually represent the problems with traditional study methods:

#### Problem 1: Study Complexity
**File Location**: `/public/images/problem-1.png`

**What to Show**:
- Overwhelming amount of study material
- Dense technical content
- Student struggling with complexity
- Visual representation of "hundreds of hours of focused study"

**Recommended Size**: 800 x 400px (2:1 aspect ratio)

---

#### Problem 2: One-Size-Fits-All Approach
**File Location**: `/public/images/problem-2.png`

**What to Show**:
- Generic study plan or schedule
- Multiple students with different needs using same approach
- Visual contrast between different learning styles
- Representation of non-adaptive methods

**Recommended Size**: 800 x 400px (2:1 aspect ratio)

---

#### Problem 3: Time Wasting
**File Location**: `/public/images/problem-3.png`

**What to Show**:
- Student reviewing easy topics they already know
- Clock or time being wasted
- Visual representation of inefficient study time
- Contrast between easy and difficult topics

**Recommended Size**: 800 x 400px (2:1 aspect ratio)

---

### Solution Images (Right Side - Glass Container)
These images should showcase Studia's AI-powered solutions:

#### Solution 1: AI Analysis
**File Location**: `/public/images/solution-1.png`

**What to Show**:
- AI analyzing student performance
- Real-time data visualization
- Knowledge gap identification
- Dashboard showing personalized insights

**Recommended Size**: 800 x 400px (2:1 aspect ratio)

---

#### Solution 2: Personalized Study Paths
**File Location**: `/public/images/solution-2.png`

**What to Show**:
- Customized study plan interface
- Adaptive learning path
- Personalization features
- Student-specific recommendations

**Recommended Size**: 800 x 400px (2:1 aspect ratio)

---

#### Solution 3: Adaptive Learning
**File Location**: `/public/images/solution-3.png`

**What to Show**:
- Learning that evolves with progress
- Real-time adaptation
- Success metrics and progress tracking
- Dynamic content adjustment

**Recommended Size**: 800 x 400px (2:1 aspect ratio)

---

## Scrollytelling Effect

The images are designed to work with a scrollytelling effect where:
- Each statement fades in as you scroll
- Images appear simultaneously with their corresponding text
- Smooth transitions between different problem/solution pairs
- Glass effect container with glowing neon background for solutions
- Color-coded problem containers (red, orange, yellow gradients)

---

## How to Replace Images

### Step 1: Prepare Your Screenshots
1. Take high-quality screenshots from your mobile app (or record screen for GIFs)
2. Ensure they match the recommended dimensions
3. Export as PNG, JPG, or GIF files
   - For static images: Use PNG for best quality
   - For animated demos: Use GIF format (animations will play automatically)
4. Optimize file size:
   - Static images: Use tools like TinyPNG or ImageOptim
   - GIFs: Use tools like ezgif.com or Gifski to optimize and reduce file size

### Step 2: Name Your Files
Follow the exact naming convention specified in this document:
- `feature-ai-study-plan.png` (or `.gif` for animated version)
- `feature-flashcards-question.png` (or `.gif` for animated version)
- `feature-flashcards-answer.png` (or `.gif` for animated version)
- `feature-mock-exam.png` (or `.gif` for animated version)
- `feature-progress.png` (or `.gif` for animated version)
- `feature-offline.png` (or `.gif` for animated version)
- `hero-image.png` (or `.gif` for animated version)
- `problem-1.png` (or `.gif` for animated version)
- `problem-2.png` (or `.gif` for animated version)
- `problem-3.png` (or `.gif` for animated version)
- `solution-1.png` (or `.gif` for animated version)
- `solution-2.png` (or `.gif` for animated version)
- `solution-3.png` (or `.gif` for animated version)

**Note**: You can mix and match - some screenshots can be static PNGs while others are animated GIFs!

### Step 3: Place Files
1. Create a `/public/images/` folder if it doesn't exist
2. Copy all your prepared images into this folder

### Step 4: Update Component Code

#### For Feature Screenshots:
Open `/components/FeaturesSection.tsx` and import your images at the top:

```tsx
import aiStudyPlanImg from '/public/images/feature-ai-study-plan.png';
import flashcardQuestionImg from '/public/images/feature-flashcards-question.png';
import flashcardAnswerImg from '/public/images/feature-flashcards-answer.png';
import mockExamImg from '/public/images/feature-mock-exam.png';
import progressImg from '/public/images/feature-progress.png';
import offlineImg from '/public/images/feature-offline.png';
```

The images are already integrated into the components with proper styling and animations. The flashcard feature uses both question and answer images with a flip animation.

#### For Hero Image:
Open `/components/HeroSection.tsx` and import your hero image:

```tsx
import heroImage from '/public/images/hero-image.png';
```

The hero image is already integrated with parallax scrolling effects for all devices.

---

## Design Tips

### Color Scheme
- Use the Studia brand colors in your app screenshots:
  - Primary Blue: `#0033A0`
  - Secondary Blue: `#2196F3`
  - Dark Background: `#061022` or `#0B0F12`
  - Success Green: `#26A65B`
  - Accent Yellow: `#FFC107`

### UI Consistency
- Ensure all screenshots show a consistent UI design
- Use the same app theme across all images
- Keep text readable and UI elements clear
- Avoid cluttered screens - show key features clearly

### Lighting & Quality
- Use high contrast for better visibility
- Ensure text is crisp and readable
- Avoid blurry or low-resolution screenshots
- Consider using light mode or dark mode consistently

### Content Accuracy
- Use realistic sample data in screenshots
- Show actual course names (CeMAP, CeRER, etc.)
- Display believable progress percentages
- Include proper exam terminology

---

## Optional: Adding More Images

If you want to add additional imagery to other sections:

### Testimonial Avatars
**Location**: `/public/images/testimonials/`
**Size**: 400 x 400px (square)
**Format**: PNG or JPG

### Background Images
**Location**: `/public/images/backgrounds/`
**Size**: 1920 x 1080px or larger
**Format**: JPG (optimized)

---

## GIF Best Practices

### Creating Effective Animated Screenshots

1. **Recording**:
   - Use screen recording software (e.g., QuickTime, OBS, or built-in iOS/Android screen recording)
   - Keep recordings short (3-5 seconds) for smaller file sizes
   - Show a complete user interaction flow

2. **Converting to GIF**:
   - Use tools like Gifski (Mac), ScreenToGif (Windows), or online converters
   - Reduce frame rate to 15-20 fps for smaller files
   - Optimize colors (256 colors is usually sufficient)
   - Ensure the loop is seamless

3. **File Size Optimization**:
   - Target 1-2MB maximum per GIF
   - Reduce dimensions if needed while maintaining aspect ratio
   - Use dithering sparingly
   - Consider removing redundant frames

4. **What to Animate**:
   - **AI Study Plans**: Scrolling through topics, checking off completed items
   - **Flashcards**: Flipping a card to reveal the answer
   - **Mock Exams**: Selecting an answer, timer counting down
   - **Progress**: Progress bar filling up, stats updating
   - **Offline**: Switching between courses, download indicator

---

## Questions or Issues?

If you encounter any issues replacing images:

1. Check file paths are correct
2. Ensure image names match exactly (case-sensitive)
3. Verify image dimensions are appropriate
4. Confirm file formats are supported (PNG, JPG, or GIF)
5. For GIFs, ensure they're optimized and under 2MB
6. Clear browser cache after updating images

---

**Last Updated**: October 21, 2025
