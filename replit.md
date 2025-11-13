# AI Solutions IT Agency Website

## Overview

This is a modern, single-page marketing website for an AI solutions IT agency. Built with React, TypeScript, and Express, it showcases AI services, team members, client testimonials, and includes a contact form for lead generation. The application features a sleek, tech-forward design inspired by modern SaaS leaders (Linear, Vercel, Stripe, OpenAI) with smooth scrolling navigation and responsive layouts.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build Tool:**
- React 18 with TypeScript for type safety
- Vite as the build tool and development server
- Wouter for lightweight client-side routing
- Single-page application (SPA) architecture with smooth scroll navigation

**UI Component System:**
- Shadcn/ui component library (New York style variant)
- Radix UI primitives for accessible, unstyled components
- Tailwind CSS for utility-first styling with custom design tokens
- Class Variance Authority (CVA) for component variant management

**Design System:**
- Custom color scheme using CSS variables for theming
- Typography system with Inter and Space Grotesk fonts
- Consistent spacing primitives using Tailwind's scale (4, 6, 8, 12, 16, 20, 24)
- Responsive grid patterns for services (3-col), team (4-col), and testimonials (2-col)
- Hover and active state elevations for interactive elements

**State Management:**
- TanStack Query (React Query) for server state management
- React Hook Form with Zod validation for form handling
- Local component state using React hooks

**Key Features:**
- Fixed navigation header with backdrop blur
- Hero section with full-screen background image and gradient overlay
- Service cards with icon mapping
- Team member profiles with avatars and LinkedIn links
- Client testimonials with star ratings
- Contact form with validation and toast notifications
- Smooth scrolling between sections

### Backend Architecture

**Server Framework:**
- Express.js for HTTP server and API routes
- TypeScript for type safety across the stack
- ESM module system

**API Structure:**
- RESTful API endpoints under `/api` prefix
- POST `/api/contact` - Create contact form submission
- GET `/api/contact` - Retrieve all contact submissions

**Request Handling:**
- JSON body parsing with raw buffer capture for webhooks
- CORS and security headers (implied standard practice)
- Request logging middleware with duration tracking
- Error handling with appropriate HTTP status codes

**Development Setup:**
- Vite integration in development mode for HMR
- Static file serving in production
- Separate build process for client and server

### Data Storage Solutions

**Current Implementation:**
- In-memory storage using Map data structure (MemStorage class)
- IStorage interface defining contract for storage operations
- UUID-based record identification

**Database Schema (Drizzle ORM):**
- PostgreSQL dialect configured via Drizzle Kit
- Schema defined in `shared/schema.ts` for code sharing
- Contact submissions table with fields: id, name, email, company, service, message, createdAt
- Migrations output to `./migrations` directory

**Data Validation:**
- Zod schemas for runtime validation
- Drizzle-Zod integration for type-safe schema generation
- Client and server share validation schemas via shared directory

**Future Database Integration:**
- Neon serverless PostgreSQL driver included in dependencies
- Connection pooling support via connect-pg-simple
- Environment variable `DATABASE_URL` for connection string

### External Dependencies

**Core Runtime:**
- Node.js runtime with ES modules
- TypeScript compiler for type checking (no emit, Vite handles bundling)

**Third-Party UI Libraries:**
- @radix-ui/* - 20+ accessible component primitives
- lucide-react - Icon system
- embla-carousel-react - Carousel functionality
- cmdk - Command menu component
- date-fns - Date manipulation utilities
- react-day-picker - Calendar component

**Data & Forms:**
- @tanstack/react-query - Server state management
- react-hook-form - Form handling
- @hookform/resolvers - Form validation integration
- zod - Schema validation
- drizzle-zod - ORM-to-Zod schema generation

**Database & ORM:**
- drizzle-orm - TypeScript ORM
- @neondatabase/serverless - PostgreSQL driver for serverless environments
- drizzle-kit - Migration and schema management CLI

**Build & Development:**
- vite - Build tool and dev server
- @vitejs/plugin-react - React Fast Refresh
- esbuild - Production server bundling
- tsx - TypeScript execution for development
- @replit/* plugins - Replit-specific development tools

**Styling:**
- tailwindcss - Utility-first CSS framework
- tailwind-merge - Conditional class merging
- clsx - Class name composition
- class-variance-authority - Type-safe variant API
- autoprefixer - CSS vendor prefixing

**Assets:**
- Generated images stored in `attached_assets/generated_images/`
- Hero background, team member photos included
- Favicon support configured