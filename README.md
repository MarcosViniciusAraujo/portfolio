# Marcos Vinicius — Developer Portfolio

A modern, dark-themed portfolio built with Next.js, Three.js, and Framer Motion. Features interactive 3D crystal elements, smooth scroll animations, and a fantasy-inspired visual identity.

## Tech Stack

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS v4**
- **React Three Fiber + Drei** (3D scene)
- **Framer Motion** (animations)
- **Lucide React** (icons)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Adding Projects

Edit `src/data/projects.ts` and add an entry to the array:

```typescript
{
  id: "my-project",
  title: "My Project",
  description: "What it does",
  tags: ["React", "TypeScript"],
  year: 2026,
  featured: true,
  liveUrl: "https://...",
  repoUrl: "https://github.com/...",
  image: "/assets/projects/my-project.png", // optional
}
```

Place project screenshots in `public/assets/projects/`.

## Adding Work Experience

Edit `src/data/experience.ts` and add an entry.

## Project Structure

```
src/
├── app/              # Next.js app router
├── components/
│   ├── ui/           # Reusable primitives (Button, Badge, GlowCard, etc.)
│   ├── layout/       # Structural components (Navbar, Footer, Section)
│   ├── sections/     # Page sections (Hero, About, Timeline, Projects)
│   └── three/        # Three.js/R3F components (crystals, particles)
├── data/             # Content data files (easy to edit)
├── hooks/            # Custom React hooks
├── lib/              # Utilities and constants
└── types/            # Shared TypeScript interfaces
```
