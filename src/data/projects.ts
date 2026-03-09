import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "portfolio",
    title: "Personal Portfolio",
    description:
      "A modern portfolio built with Next.js, Three.js, and Framer Motion. Features 3D interactive elements and smooth animations.",
    tags: ["Next.js", "Three.js", "Tailwind CSS", "Framer Motion"],
    year: 2026,
    repoUrl: "https://github.com/marcosviniciusaraujo/portfolio",
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
    id: "guitar-app",
    title: "Guitar module with Arduino",
    description:
      "An eletric guitar mdoule that connects with guitar hero as a controller.",
    tags: ["Arduino", "Electronics", "Music", "Guitar"],
    featured: true,
    year: 2022,
    repoUrl: "https://github.com/MarcosViniciusAraujo/puc-projeto-micro",
  },
  {
    id: "chat-app",
    title: "Chat GPT Clone App",
    description:
        "A Chat GPT Clone App built with Vanilla JS and the OpenAI API.",
    tags: ["React", "TypeScript", "REST API", "ChatGPT", "OpenAI"],
    year: 2023,
    repoUrl: "https://github.com/MarcosViniciusAraujo/chatGPT-clone",
  },
  {
    id: "rust-mcp-server",
    title: "Rust MCP Server",
    description:
      "A MCP server for any Agent built in Rust.",
    tags: ["Rust", "MCP", "AI"],
    year: 2025,
    repoUrl: "hhttps://github.com/MarcosViniciusAraujo/mcp-rust",
  },
  {
    id: "final-project-puc-rio",
    title: "Final Project - PUC-Rio",
    description:
      "A Study about convolutional neural networks for medical image classification.",
    tags: ["CNN", "Research", "AI", "RESNET", "Medical Image Analysis"],
    featured: true,
    year: 2023,
    repoUrl: "https://github.com/MarcosViniciusAraujo/puc-rio-projeto-final",
  },
  {
    id: "corona-tracker",
    title: "Corona Virus Tracker",
    description:
      "A Web App for real time tracking of the COVID-19 virus around the world.",
    tags: ["React", "TypeScript", "REST API", "Chart.js"],
    featured: true,
    year: 2020,
    repoUrl: "https://github.com/MarcosViniciusAraujo/project_corona_tracker",
  },
  {
    id: "crypto-price-tracker",
    title: "Crypto Price Tracker",
    description:
      "A Web App for real time tracking of the price of a crypto currency.",
    tags: ["React", "TypeScript", "REST API", "Chart.js", "Crypto", "Bitcoin"],
    year: 2022,
    repoUrl: "https://github.com/MarcosViniciusAraujo/crypto-price-tracker",
  },
  {
    id: "latitude-90",
    title: "Latitude 90",
    description:
      "Desktop App recreating the game Latitude 90 in Java",
    tags: ["Java", "Game Development", "Desktop App", "Latitude 90"],
    year: 2021,
    repoUrl: "https://github.com/MarcosViniciusAraujo/Latitude90",
  },
];
