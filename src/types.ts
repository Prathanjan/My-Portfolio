export interface Project {
  id: string;
  title: string;
  subtitle: string;
  status: 'Completed' | 'Current Project' | 'Coming Soon';
  description: string;
  longDescription: string;
  technologies: string[];
  category: 'Healthcare AI' | 'Healthcare Analytics' | 'FinTech / Payments'|'E-Commerce Analytics';
  highlights: string[];
  metrics?: { label: string; value: string }[];
  githubUrl?: string;
  demoUrl?: string;
  isCollaborativeAcademic?: boolean;
}

export interface SkillItem {
  name: string;
  category: 'Programming' | 'Database' | 'Spreadsheet' | 'Coding' | 'Python Libraries' | 'Tools' | 'Currently Learning' | string;
  iconName: string;
  level: number;
  description?: string;
  isCurrentlyLearning?: boolean;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  skillsVerified: string[];
  description: string;
  status: 'Completed' | 'In Progress';
  imageUrl?: string;
}

export interface EducationItem {
  degree: string;
  specialization: string;
  institution: string;
  timeline: string;
  cgpa: string;
  highlights: string[];
  coursework: string[];
}

export interface RecruiterInfo {
  name: string;
  headline: string;
  shortIntro: string;
  email: string;
  github: string;
  linkedin: string;
  location: string;
  availability: string;
  profileImage?: string;
  stats: {
    projectsCount: string;
    skillsCount: string;
    cgpa: string;
    certificationsCount: string;
  };
}

