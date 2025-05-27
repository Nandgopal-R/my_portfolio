import Assets from './assets';
import type { Skill, SkillCategory } from '../types';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
  defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
  defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
  defineSkillCategory({ name: 'Libraries', slug: 'library' }),
  defineSkillCategory({ name: 'Langauges', slug: 'lang' }),
  defineSkillCategory({ name: 'Databases', slug: 'db' }),
  defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
  defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
  defineSkillCategory({ name: 'Testing', slug: 'test' }),
  defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
  defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
  defineSkillCategory({ name: 'Design', slug: 'design' }),
  defineSkillCategory({ name: 'Soft Skills', slug: 'soft' })
] as const;

const defineSkill = <S extends string>(
  skill: Omit<Skill<S>, 'category'> & {
    category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
  }
): Skill<S> => {
  const out: Skill<S> = omit(skill, 'category');

  if (skill.category) {
    out.category = categories.find((it) => it.slug === skill.category);
  }

  return out;
};

export const items = [
  defineSkill({
    slug: 'js',
    color: 'yellow',
    description: 'High-level, dynamic scripting language primarily used for adding interactivity to web pages.',
    logo: Assets.JavaScript,
    name: 'Javascript',
    category: 'pro-lang'
  }),
  defineSkill({
    slug: 'ts',
    color: 'blue',
    description: 'A superset of JavaScript that adds static typing for scalable and maintainable code.',
    logo: Assets.TypeScript,
    name: 'Typescript',
    category: 'pro-lang'
  }),
  defineSkill({
    slug: 'css',
    color: 'blue',
    description: 'Style sheet language used for describing the look and formatting of a document written in HTML.',
    logo: Assets.CSS,
    name: 'CSS',
    category: 'markup-style'
  }),
  defineSkill({
    slug: 'html',
    color: 'orange',
    description: 'Standard markup language for creating the structure of web pages and web applications.',
    logo: Assets.HTML,
    name: 'HTML',
    category: 'markup-style'
  }),
  defineSkill({
    slug: 'reactjs',
    color: 'cyan',
    description: 'Popular JavaScript library for building fast, responsive user interfaces using a component-based architecture.',
    logo: Assets.ReactJs,
    name: 'React Js',
    category: 'library'
  }),
  defineSkill({
    slug: 'expressjs',
    color: 'yellow',
    description: 'Minimal and flexible Node.js web application framework for building APIs and web servers.',
    logo: Assets.ExpressJs,
    name: 'ExpressJs',
    category: 'framework'
  }),
  defineSkill({
    slug: 'postgresql',
    color: 'blue',
    description: 'Powerful, open-source object-relational database known for its reliability, robustness, and SQL compliance.',
    logo: Assets.PostgreSQL,
    name: 'PostgreSQL',
    category: 'db'
  }),
  defineSkill({
    slug: 'golang',
    color: 'blue',
    description: 'Compiled, statically typed language designed for simplicity and performance, ideal for backend systems.',
    logo: Assets.Go,
    name: 'Golang',
    category: 'pro-lang'
  }),
  defineSkill({
    slug: 'python',
    color: 'blue',
    description: 'Versatile, high-level language known for its readability and wide range of use cases from web to AI.',
    logo: Assets.Python,
    name: 'Python',
    category: 'pro-lang'
  }),
  defineSkill({
    slug: 'c',
    color: 'blue',
    description: 'Low-level, powerful programming language often used in systems programming and embedded systems.',
    logo: Assets.C,
    name: 'C',
    category: 'pro-lang'
  }),
  defineSkill({
    slug: 'cpp',
    color: 'blue',
    description: 'Extension of C that includes object-oriented features, widely used in game development and high-performance applications.',
    logo: Assets.Cpp,
    name: 'Cpp',
    category: 'pro-lang'
  }),
  defineSkill({
    slug: 'java',
    color: 'blue',
    description: 'Robust, object-oriented programming language widely used for building cross-platform applications, from enterprise systems to Android apps.',
    logo: Assets.Java,
    name: 'Java',
    category: 'pro-lang'
  }),
  defineSkill({
    slug: 'docker',
    color: 'blue',
    description: 'Platform for developing, shipping, and running applications in isolated containers for consistency across environments.',
    logo: Assets.Docker,
    name: 'Docker',
    category: 'devops'
  }),
  defineSkill({
    slug: 'prisma',
    color: 'purple',
    description: 'Next-generation TypeScript ORM for Node.js and TypeScript, providing type-safe database access.',
    logo: Assets.Prisma,
    name: 'Prisma',
    category: 'orm'
  }),
  defineSkill({
    slug: 'honojs',
    color: 'green',
    description: 'Ultra-fast web framework for Cloudflare Workers, built on Web Standards and focused on simplicity.',
    logo: Assets.Honojs,
    name: 'Honojs',
    category: 'framework'
  }),
  defineSkill({
    slug: 'drizzle',
    color: 'teal',
    description: 'Lightweight, type-safe SQL ORM for JavaScript/TypeScript with a focus on performance and flexibility.',
    logo: Assets.Drizzle,
    name: 'Drizzle',
    category: 'orm'
  }),
] as const;

export const title = 'Skills';

export const getSkills = (
  ...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => items.filter((it) => slugs.includes(it.slug));

export const groupByCategory = (
  query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
  const out: ReturnType<typeof groupByCategory> = [];

  const others: Array<Skill> = [];

  items.forEach((item) => {
    if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

    // push to others if item does not have a category
    if (!item.category) {
      others.push(item);
      return;
    }

    // check if category exists
    let category = out.find((it) => it.category.slug === item.category?.slug);

    if (!category) {
      category = { items: [], category: item.category };

      out.push(category);
    }

    category.items.push(item);
  });

  if (others.length !== 0) {
    out.push({ category: { name: 'Others', slug: 'others' }, items: others });
  }

  return out;
};
