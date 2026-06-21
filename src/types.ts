export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: "Web App" | "Library" | "Data Science" | "Other";
  featured: boolean;
}

export interface Skill {
  name: string;
  level: "Expert" | "Intermediate" | "Beginner";
  iconName: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: Skill[];
}

export interface SEOAdvice {
  id: string;
  title: string;
  status: "success" | "pending" | "info";
  message: string;
  solution: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  content: string;
  avatarUrl?: string;
}
