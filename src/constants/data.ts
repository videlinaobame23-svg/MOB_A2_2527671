import { Skill, Education, Project } from '../types';

export const VERIFICATION_CODE = 'MOB-A2-7671';
export const STUDENT_FULL_NAME = 'OBAME Videlina Ketsia';
export const REGISTRATION_NUMBER = '25/27671';
export const APP_NAME = 'OBAMEPortfolio';

export const DEFAULT_PROFILE = {
  fullName: STUDENT_FULL_NAME,
  headline: 'SWE Student | Web & Mobile Developer',
  biography:
    'I am an SWE student passionate about web development, mobile applications, and creating user-friendly digital experiences. I have experience working with HTML, CSS, JavaScript, TypeScript, and React Native. I also work with Git and GitHub for version control and have explored database technologies such as SQL and Firebase. I enjoy building practical projects that solve real-world problems while continuously improving my software development skills.',
  primarySkill: 'HTML,CSS & jS',
  availability: 'Available for internships',
  profileImageUri: null as string | null,
};

export const SKILLS: Skill[] = [
  { name: 'HTML & CSS', level: 'Advanced' },
  { name: 'JavaScript', level: 'Intermediate' },
  { name: 'java', level: 'Intermediate' },
  { name: 'Git & GitHub', level: 'Intermediate' },
  { name: 'SQL Databases', level: 'Beginner' },
];

export const EDUCATION: Education[] = [
  {
    institution: 'INES Ruhengeri',
    qualification: 'BSc in Computer Science option SWE',
    year: '2024 – 2027',
  },
  {
    institution: 'Secondary School',
    qualification: 'Advanced Certificate in Mathematics & Sciences',
    year: '2020 – 2023',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Campus Lost & Found',
    problem:
      'Students lose items on campus with no central place to report or reclaim them.',
    contribution:
      'Designed and built the mobile client: item listing, search, and image upload.',
    technology: 'React Native, Firebase',
    description:
      'A mobile app where students post lost or found items. Includes categories, search, and a claim flow. I led the frontend build and integrated Firebase Storage for images.',
  },
  {
    id: 'p2',
    title: 'Smart Study Planner',
    problem: 'Students struggle to balance multiple courses and deadlines.',
    contribution: 'Built the scheduling logic and notification reminders.',
    technology: 'React Native, AsyncStorage, Expo Notifications',
    description:
      'A personal study planner that lets students add courses, deadlines, and study sessions with local notifications. I designed the data model and offline-first storage.',
  },
];