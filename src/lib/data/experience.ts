import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
  {
    slug: 'open-sourcer',
    company: 'Amrita Center for Entrepreneurship',
    description: "Collaborated in a team of 5 to develop and maintain the backend for the ACM club's main and admin website.Designed and optimized database schemas to ensure efficient data storage and retrieval. Implemented authentication, role-based access control, and event management features.Conducted API testing with Postman to ensure the reliability and correctness of backend services.",
    contract: ContractType.PartTime,
    type: 'Software Development',
    location: 'Online',
    period: { from: new Date(2024, 8), to: new Date(2025, 0) },
    skills: getSkills('ts', 'js', 'expressjs', 'postgresql'),
    name: 'Backend Developer',
    color: 'red',
    links: [],
    logo: Assets.Amrita,
    shortDescription: "Collaborated in a team of 5 to develop and maintain the backend for the ACM club's main and admin website."
  },
];

export const title = 'Experience';
