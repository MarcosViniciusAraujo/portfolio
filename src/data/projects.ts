import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "portfolio",
    title: "Personal Portfolio",
    description:
      "A modern portfolio built with Next.js, Three.js, and Framer Motion. Features 3D interactive elements and smooth animations.",
    tags: ["Next.js", "Three.js", "Tailwind CSS", "Framer Motion"],
    featured: true,
    year: 2026,
    repoUrl: "https://github.com/marcosviniciusaraujo/portfolio",
  },
  {
    id: "task-manager",
    title: "Task Manager App",
    description:
      "A full-stack task management application with real-time updates, team collaboration, and project tracking features.",
    tags: ["React", "Node.js", "PostgreSQL", "Socket.io"],
    featured: true,
    year: 2025,
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/marcosviniciusaraujo/task-manager",
  },
  {
    id: "weather-app",
    title: "Weather Dashboard",
    description:
      "A beautiful weather dashboard with location-based forecasts, interactive maps, and severe weather alerts.",
    tags: ["React", "TypeScript", "REST API", "Chart.js"],
    year: 2024,
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/marcosviniciusaraujo/weather",
  },
  {
    id: "ecommerce",
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce platform with product search, cart management, payment processing, and order tracking.",
    tags: ["Next.js", "Stripe", "PostgreSQL", "Tailwind CSS"],
    featured: true,
    year: 2024,
    repoUrl: "https://github.com/marcosviniciusaraujo/ecommerce",
  },
  {
    id: "cli-tool",
    title: "Dev CLI Tool",
    description:
      "A command-line tool that automates common development workflows including project scaffolding and deployment.",
    tags: ["Node.js", "TypeScript", "CLI"],
    year: 2023,
    repoUrl: "https://github.com/marcosviniciusaraujo/dev-cli",
  },
  {
    id: "chat-app",
    title: "Real-time Chat",
    description:
      "A real-time messaging app with rooms, direct messages, file sharing, and message search capabilities.",
    tags: ["React", "Socket.io", "Node.js", "MongoDB"],
    year: 2023,
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/marcosviniciusaraujo/chat",
  },
];
