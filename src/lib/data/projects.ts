import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
  {
    slug: 'Shelf-Savy',
    color: '#5e95e3',
    description:
      '',
    shortDescription:
      'Shelf-Savvy is a mobile application designed to combat food waste and foster a community of responsible food consumers.',
    links: [{ to: 'https://github.com/Infinite-Sum-Games/shelf-savvy-server', label: 'GitHub' }],
    logo: Assets.Unknown,
    name: 'Shelf-Savy',
    period: {
      from: new Date()
    },
    skills: getSkills('ts', 'postgresql', 'expressjs', 'prisma'),
    type: 'Mobile Application'
  },
  {
    slug: 'Chronos',
    color: '#5e95e3',
    description:
      '',
    shortDescription:
      'Complete self-hostable time-table application for classrooms of size 100',
    links: [{ to: 'https://github.com/Infinite-Sum-Games/chronos', label: 'GitHub' }],
    logo: Assets.Unknown,
    name: 'Chronos',
    period: {
      from: new Date()
    },
    skills: getSkills('ts', 'honojs', 'drizzle'),
    type: 'Mobile Application'

  }

];

export const title = 'Projects';
