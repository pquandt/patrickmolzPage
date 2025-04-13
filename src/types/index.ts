export interface Skill {
  name: string;
  level: number;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  technologies: string[];
} 