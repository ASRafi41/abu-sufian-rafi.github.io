# Abu Sufian Rafi - Portfolio

**Live Site:** [abu-sufian-rafi.vercel.app](https://abu-sufian-rafi.vercel.app/)

Personal portfolio website built with Next.js to showcase experience, projects, skills, competitive programming achievements, and contact information.

## Tech Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- React Hook Form + Zod

## Features

- Modern single-page portfolio layout
- Sections for About, Experience, Projects, Skills, Competitive Programming, Education, and Contact
- Responsive navigation with smooth scrolling
- Dark/light theme toggle
- Animated UI elements (section reveals, counters, hover interactions)
- Contact form that opens Gmail compose with prefilled content

## Run Locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Build for Production

```bash
npm run build
npm run start
```

## Project Structure

- `app/page.tsx` - main page entry
- `app/components/` - reusable UI and site chrome components
- `app/sections/portfolio-sections.tsx` - portfolio section content
- `app/lib/data.ts` - personal info, projects, experience, skills, and stats
- `app/globals.css` - global styles and utility classes

## Customize Content

Update `app/lib/data.ts` to quickly edit:

- personal information
- social links
- experience and education
- projects
- skills and competitive programming profiles

## Scripts

- `npm run dev` - run development server
- `npm run build` - create production build
- `npm run start` - run production server
- `npm run lint` - run ESLint

