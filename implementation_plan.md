# Raavi Exports Premium Website Redesign

This implementation plan outlines the strategy to rebuild the Raavi Exports website into a high-end, cinematic, and modern web application using React, Vite, Tailwind CSS, Framer Motion, and GSAP.

## Goal Description

The objective is to redesign the entire visual experience of the existing Raavi Exports website, transforming it from a standard corporate site into a premium, luxury global export brand experience. The new design will incorporate dark elegant themes, glassmorphism, parallax effects, and smooth scroll animations while retaining all original business data, certifications, and product categories.

## User Review Required

> [!IMPORTANT]
> The new design direction will be a significant departure from the current website's look and feel, adopting a much darker, more cinematic aesthetic. Please review the visual direction and features to ensure they align perfectly with your brand vision.

> [!WARNING]
> We will be migrating to a React Single Page Application (SPA) architecture. If your current site relies on specific WordPress plugins or server-side routing for SEO, we will need to implement SPA SEO best practices (React Helmet, clean URLs) to maintain search visibility.

## Open Questions

> [!WARNING]
> 1. Do you have high-resolution, premium imagery available for the products and factory? If not, we will generate placeholder premium imagery to demonstrate the layout.
> 2. Are there any specific colors from your brand guidelines that MUST be included, or do we have full creative freedom within the "spice-inspired, earthy, dark elegant theme"?
> 3. Should we implement a custom cursor or keep the native cursor for this luxury feel?

## Proposed Changes

We will restructure the frontend into a component-based architecture for maintainability and performance.

### Project Foundation
- Initialize Vite + React project.
- Configure Tailwind CSS for the premium design system (custom colors, fonts, spacing).
- Set up Framer Motion and GSAP for complex animations.

### Components Structure
#### [NEW] `src/components/Navbar.jsx`
- Glassmorphism header, sticky navigation, subtle hover states.

#### [NEW] `src/components/Hero.jsx`
- Cinematic fullscreen hero with parallax background, floating spice particles, and premium typography.

#### [NEW] `src/components/About.jsx`
- Storytelling section with smooth reveal animations and animated statistics.

#### [NEW] `src/components/Products.jsx`
- Interactive product grid with premium cards, hover reveals, and filtering.

#### [NEW] `src/components/ExportExperience.jsx`
- Interactive global map visualization using GSAP/Framer Motion.

#### [NEW] `src/components/Certifications.jsx`
- Premium animated cards with glowing trust badges.

#### [NEW] `src/components/Process.jsx`
- Scroll-triggered timeline animation detailing the export process.

#### [NEW] `src/components/Testimonials.jsx`
- Sleek, auto-scrolling carousel with glassmorphic cards.

#### [NEW] `src/components/Contact.jsx`
- Modern contact form with floating labels and map integration.

#### [NEW] `src/components/Footer.jsx`
- Elegant footer with comprehensive links and subtle branding.

### Global Styles and Utilities
#### [NEW] `src/index.css`
- Core CSS, Tailwind directives, and custom animation classes.

#### [NEW] `src/data/constants.js`
- Centralized data file containing all extracted content (products, testimonials, stats) for clean component logic.

## Verification Plan

### Automated Tests
- Build verification: `npm run build` to ensure production readiness.
- Linting: Ensure code meets React best practices.

### Manual Verification
- Review responsive behavior across mobile, tablet, and desktop views.
- Test scroll animations and performance (targeting 60fps).
- Verify all extracted business content is accurately represented.
