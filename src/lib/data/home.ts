import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Nandgopal';

export const lastName = 'R Nair';

export const description =
  "I'm a Backend Developer with a knack for crafting efficient and performant APIs. Currently my journey involves deep diving into DevOps and  developing scalable, maintainable software systems.";

export const links: Array<{ platform: Platform; link: string }> = [
  { platform: Platform.GitHub, link: 'https://github.com/Nandgopal-R' },
  {
    platform: Platform.Linkedin,
    link: 'https://www.linkedin.com/in/nandgopal-nair2005/'
  },
  {
    platform: Platform.Twitter,
    link: 'https://x.com/nandu24_here'
  },
  {
    platform: Platform.Email,
    link: 'nandgopalrnair@gmail.com'
  },
];

export const skills = getSkills('js', 'css', 'html', 'ts', 'expressjs', 'postgresql', 'golang', 'python', 'c', 'cpp', 'docker', 'prsima', 'honojs', 'drizzle',);
