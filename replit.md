# Maison Nomade Tourism Contact Page

## Overview

This is a modern, mobile-responsive single-page contact application for Maison Nomade Tourism. The application provides a bilingual (Russian/English) interface where visitors can connect with the company through their preferred communication channel. Built with React, TypeScript, and Tailwind CSS, it features a clean, centered design with a dark navy background (#1e2e52) and seven prominent contact buttons linking to various social media and communication platforms.

The application is built on a full-stack Express.js + React architecture with Vite as the build tool, though the current implementation focuses purely on the frontend contact page without active backend functionality.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework Stack:**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server
- Wouter for client-side routing (lightweight alternative to React Router)
- TanStack Query (React Query) for server state management (configured but not actively used)

**UI Component System:**
- Shadcn UI component library (New York style variant) with Radix UI primitives
- Tailwind CSS for styling with custom design system
- Component library includes 40+ pre-built UI components (buttons, forms, dialogs, etc.)
- CSS variables for theming with light/dark mode support built into the system

**Styling Approach:**
- Tailwind utility classes with custom color palette defined in CSS variables
- Design system with specific border radius values (9px, 6px, 3px)
- Elevation system using opacity-based overlays (--elevate-1, --elevate-2)
- Mobile-first responsive design with breakpoint at 768px

**State Management:**
- Local component state using React hooks (useState, useEffect)
- Language toggle maintained in local state (ru/en)
- No global state management library required for current scope

**Internationalization:**
- Custom translation system using typed TypeScript interfaces
- Translation data stored in `/client/src/config/translations.ts`
- Supports Russian (default) and English with runtime language switching
- Type-safe translation keys prevent runtime errors

### Backend Architecture

**Server Framework:**
- Express.js with TypeScript
- ESM module system (type: "module" in package.json)
- Development server with hot module replacement via Vite middleware

**Database Configuration:**
- Drizzle ORM configured for PostgreSQL
- Neon serverless PostgreSQL driver (@neondatabase/serverless)
- Schema defined in `/shared/schema.ts` with basic user model
- Migration directory configured but not actively used
- Note: Current implementation uses in-memory storage (MemStorage class) rather than actual database

**Session Management:**
- connect-pg-simple configured for PostgreSQL session storage
- Session configuration present but not actively implemented

**API Design:**
- RESTful API structure with `/api` prefix convention
- Route registration system in `/server/routes.ts`
- Currently minimal backend - no active API endpoints for contact page
- Storage interface pattern for abstracting data access (IStorage interface)

**Build & Deployment:**
- esbuild for server-side bundling
- Separate build outputs: client to `/dist/public`, server to `/dist`
- Production mode serves static files from dist directory

### Design System

**Color Palette:**
- Fixed background: #1e2e52 (dark navy blue)
- Content uses white and light gray tones
- HSL-based color system with CSS variables for consistency
- Separate theme definitions for light/dark modes

**Typography:**
- Inter and Poppins font families from Google Fonts
- Semantic font sizing with clear hierarchy (title, body, helper text)
- Font weights: 300-800 range for both font families

**Layout Principles:**
- Centered vertical layout using flexbox (min-h-screen, items-center, justify-center)
- Responsive grid for contact buttons (1 column mobile, 2 columns desktop)
- Top-right positioned language switcher
- Logo at top, footer at bottom with vertical flow

**Component Specifications:**
- Seven contact buttons with external links (Telegram, WhatsApp, Instagram, Website, Email, LinkedIn, Phone)
- Buttons use Lucide React icons
- Fade-in animation on page load
- Hover and active state elevations

## External Dependencies

**UI & Styling:**
- @radix-ui/* (v1.x) - Unstyled accessible UI primitives for 25+ component types
- Tailwind CSS - Utility-first CSS framework with PostCSS
- class-variance-authority - For variant-based component styling
- clsx & tailwind-merge - Class name utilities
- Lucide React - Icon library

**Data & Forms:**
- @tanstack/react-query (v5.60.5) - Server state management
- @hookform/resolvers (v3.10.0) - Form validation resolvers
- drizzle-orm (v0.39.1) - TypeScript ORM
- drizzle-zod (v0.7.0) - Zod schema integration for database models
- zod - TypeScript-first schema validation

**Database:**
- @neondatabase/serverless (v0.10.4) - Neon PostgreSQL serverless driver
- connect-pg-simple (v10.0.0) - PostgreSQL session store for Express

**Development Tools:**
- Vite - Fast build tool with HMR
- TypeScript - Type safety across full stack
- tsx - TypeScript execution for development server
- @replit/vite-plugin-* - Replit-specific development enhancements

**Utilities:**
- date-fns (v3.6.0) - Date manipulation library
- wouter - Lightweight routing for React
- nanoid - Unique ID generation
- embla-carousel-react - Carousel component

**Asset Management:**
- Logo image: `/attached_assets/logo_1760818509957.png`
- Asset alias configured in Vite: `@assets` points to `/attached_assets`

**External Services (Links Only - No Integration):**
- Telegram: https://t.me/faklllp
- WhatsApp: https://wa.me/375333712473
- Instagram: https://www.instagram.com/maison.nomade.tourism/
- Company Website: https://maison-nomade-tourism.com/
- Email: info@mn-tourism.com
- LinkedIn: https://www.linkedin.com/company/maison-nomade-tourism
- Phone: tel:+375333712473

**Hosting & Deployment:**
- Configured for Replit deployment
- Environment variable: DATABASE_URL for PostgreSQL connection
- Production build serves static React app from Express