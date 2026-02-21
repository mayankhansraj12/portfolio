# Mayank Hansraj — Portfolio

Personal portfolio website built with React 18, TypeScript, Vite, and Tailwind CSS.

**Live:** [mayankhansraj.vercel.app](https://mayankhansraj.vercel.app)

## Stack

- **Framework:** React 18 + TypeScript
- **Build tool:** Vite 5
- **Styling:** Tailwind CSS v3 with custom design tokens
- **Animations:** Framer Motion
- **Icons:** Lucide React + Devicons
- **Contact form:** Formspree
- **Deployment:** Vercel

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Before Deploying

1. Replace `'YOUR_FORM_ID'` in `src/components/Contact.tsx` with your [Formspree](https://formspree.io) form ID
2. Add your resume PDF at `public/resume.pdf`
3. Update GitHub/LinkedIn URLs in `src/data/projects.ts`, `src/components/Contact.tsx`, and `src/components/Footer.tsx`
4. Update the site URL in `public/sitemap.xml` and `index.html` OG tags
5. Generate a real OG image at `public/og-image.png` (1200×630px)

## Deployment (Vercel)

1. Push this repo to GitHub
2. Import project on [vercel.com](https://vercel.com)
3. Vercel auto-detects Vite — no extra config needed
4. Set any environment variables if required
