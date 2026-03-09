export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
  year: number;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights?: string[];
  technologies?: string[];
}

export interface Skill {
  name: string;
  category: "ai" | "cloud" | "data" | "backend" | "frontend" | "tools" | "other";
}

export interface Profile {
  name: string;
  tagline: string;
  bio: string;
  avatar?: string;
  location?: string;
  socials: {
    github?: string;
    linkedin?: string;
    email?: string;
  };
  skills: Skill[];
  interests?: string[];
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  period: string;
  description?: string;
}

export interface Course {
  name: string;
  provider: string;
  year: number;
  certificate?: string;
  tags?: string[];
}

export interface Award {
  title: string;
  issuer: string;
  year: number;
  description?: string;
}

export interface NavLink {
  label: string;
  href: string;
}
