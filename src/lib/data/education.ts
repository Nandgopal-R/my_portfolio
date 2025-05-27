import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
  {
    degree: 'Bacherlors Degree in Computer Science',
    description: '',
    location: 'Coimbator, Tamil Nadu',
    logo: Assets.Unknown,
    name: '',
    organization: 'Amrita Vishwa Vidhyapeetham',
    period: { from: new Date(2023, 5, 2), to: new Date(2027, 5, 1) },
    shortDescription: '',
    slug: 'dummy-education-item-2',
    subjects: ['Python', 'Java', 'C', 'C++',]
  },
  {
    degree: '12th Boards',
    description: '',
    location: 'Chennai, Tamil Nadu',
    logo: Assets.Unknown,
    name: '',
    organization: 'The PSBB Millenium School',
    period: { from: new Date(2022, 3, 13), to: new Date(2023, 3, 13) },
    shortDescription: '',
    slug: 'dummy-education-item',
    subjects: ['Python', 'SQL']
  },
];

export const title = 'Education';
