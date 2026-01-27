
export type Category = 'All' | 'AI Reliability & Governance' | 'Intelligence Platforms' | 'Software Engineering Tools' | 'Specialized Web Systems';

export interface Repository {
  name: string;
  description: string;
  url: string;
  live_link: string | null;
  stars: number;
  language: string | null;
  ai_summary: string;
  category: Category;
}

export interface PortfolioConfig {
  name: string;
  role: string;
  bio: string;
  primaryColor: string;
  githubUser: string;
  socials: {
    github: string;
    linkedin: string;
    twitter: string;
    email: string;
  };
}
