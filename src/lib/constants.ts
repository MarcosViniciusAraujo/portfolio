import type { NavLink } from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Courses", href: "#courses" },
  { label: "Projects", href: "#projects" },
  { label: "Awards", href: "#awards" },
];

export const SECTION_IDS = {
  hero: "hero",
  about: "about",
  education: "education",
  experience: "experience",
  courses: "courses",
  projects: "projects",
  awards: "awards",
} as const;
