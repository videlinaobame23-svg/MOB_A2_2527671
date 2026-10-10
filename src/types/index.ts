export interface Project {
  id: string;
  title: string;
  problem: string;
  contribution: string;
  technology: string;
  description: string;
}

export interface Skill {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
}

export interface Education {
  institution: string;
  qualification: string;
  year: string;
}

export interface Profile {
  fullName: string;
  headline: string;
  biography: string;
  primarySkill: string;
  availability: string;
  profileImageUri: string | null;
}