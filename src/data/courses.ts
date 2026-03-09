import type { Course } from "@/types";

export const courses: Course[] = [
  {
    name: "React - The Complete Guide",
    provider: "Udemy",
    year: 2024,
    tags: ["React", "Redux", "Next.js"],
  },
  {
    name: "Docker & Kubernetes: The Practical Guide",
    provider: "Udemy",
    year: 2024,
    tags: ["Docker", "Kubernetes", "DevOps"],
  },
  {
    name: "TypeScript Masterclass",
    provider: "Coursera",
    year: 2023,
    tags: ["TypeScript", "Node.js"],
  },
  {
    name: "AWS Cloud Practitioner",
    provider: "AWS",
    year: 2023,
    certificate: "https://example.com/certificate",
    tags: ["AWS", "Cloud"],
  },
  {
    name: "CS50: Introduction to Computer Science",
    provider: "Harvard / edX",
    year: 2022,
    certificate: "https://example.com/certificate",
    tags: ["C", "Python", "Algorithms"],
  },
  {
    name: "JavaScript Algorithms and Data Structures",
    provider: "freeCodeCamp",
    year: 2021,
    certificate: "https://example.com/certificate",
    tags: ["JavaScript", "Algorithms"],
  },
];
