# Marketing Agency Landing Page

## Overview

This is a full-stack React application for "Jusikhoesa Aneun Marketing" (주식회사 아는마케팅), a Korean marketing agency that specializes in e-commerce development with payment integration and comprehensive marketing services. The application serves as a single-page landing site showcasing the company's services, portfolio, and contact capabilities.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing
- **UI Framework**: Radix UI components with shadcn/ui component library
- **Styling**: Tailwind CSS with custom design tokens and Korean-focused color scheme
- **Animations**: Framer Motion for smooth page transitions and interactive elements
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript throughout the entire stack
- **API Design**: RESTful endpoints for contact form submissions
- **Validation**: Zod schemas for runtime type checking and validation
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Session Storage**: In-memory storage for development (easily replaceable with PostgreSQL)

### Key Components

#### Landing Page Sections
1. **Hero Section**: Animated introduction with floating icons and compelling headlines
2. **Services Section**: Four-card layout showcasing core business offerings
3. **About Section**: Company credibility with Toss Payments partnership highlight
4. **Portfolio Section**: Filterable gallery of success stories and case studies
5. **Contact Section**: Multi-step inquiry form with conditional fields
6. **Footer**: Company information and social media links

#### Contact Form System
- Progressive form with service selection checkboxes
- Conditional budget field based on website-related service selection
- Real-time validation with user-friendly error messages
- Korean language support throughout the interface

## Data Flow

### Contact Inquiry Process
1. User fills out multi-step contact form
2. Frontend validates input using Zod schemas
3. Form data sent to `/api/contact` endpoint via POST request
4. Backend validates and stores inquiry in database
5. Success confirmation displayed to user
6. Admin can retrieve inquiries via GET `/api/contact`

### Form Validation Flow
- Client-side validation using React Hook Form + Zod resolver
- Server-side validation using shared Zod schemas
- Graceful error handling with Korean language error messages
- Optimistic UI updates with loading states

## External Dependencies

### UI and Styling
- **Radix UI**: Accessible component primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library for interactive elements
- **Lucide React**: Icon library for consistent visual elements

### Database and Validation
- **Drizzle ORM**: Type-safe database operations
- **Neon Database**: PostgreSQL serverless database (configured but not required)
- **Zod**: Runtime type validation and schema definition

### Development Tools
- **Vite**: Fast build tool with HMR
- **TypeScript**: Static type checking
- **ESBuild**: Fast JavaScript bundler for production

## Deployment Strategy

### Development Environment
- Vite dev server with HMR for frontend development
- Express server with TypeScript compilation via tsx
- Automatic Replit integration with runtime error overlay

### Production Build Process
1. Frontend build: `vite build` creates optimized static assets
2. Backend build: `esbuild` bundles server code for Node.js
3. Static files served from Express in production mode
4. Database migrations handled via `drizzle-kit push`

### Environment Configuration
- Database URL configured via environment variables
- Production/development mode switching via NODE_ENV
- Replit-specific optimizations for cloud deployment

The application is designed to be easily deployable on Replit with minimal configuration, while maintaining the flexibility to migrate to other hosting platforms. The modular architecture allows for easy feature additions and maintenance.