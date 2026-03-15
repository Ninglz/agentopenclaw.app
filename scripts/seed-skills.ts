import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { skills } from '../src/db/skills.schema';
import crypto from 'crypto';

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  console.error('DATABASE_URL is not set in .env');
  process.exit(1);
}

const client = postgres(connectionString, { prepare: false });
const db = drizzle(client);

const MOCK_SKILLS = [
  {
    slug: 'puppeteer-browser',
    name: 'Puppeteer Browser',
    description:
      'Enables OpenClaw to spin up an invisible Chrome browser to click, scrape, and navigate dynamic heavy-JS websites.',
    category: 'Development',
    author: 'openclaw-team',
    downloads: 12400,
    rating: '4.9',
    command: 'openclaw install browser-automation',
    isProOnly: false,
    icon: '🌐',
  },
  {
    slug: 'gmail-secretary',
    name: 'Gmail Secretary',
    description:
      'Read, draft, and autonomously reply to your emails based on complex rules using the official Gmail API.',
    category: 'Productivity',
    author: 'community',
    downloads: 8200,
    rating: '4.7',
    command: 'openclaw install gmail-assistant',
    isProOnly: false,
    icon: '📧',
  },
  {
    slug: 'ahrefs-semantic-engine',
    name: 'Ahrefs Semantic Engine',
    description:
      'Connects your Ahrefs API key to allow OpenClaw to automatically pull keyword volumes and KD metrics during research.',
    category: 'SEO',
    author: 'openclaw-seo',
    downloads: 4100,
    rating: '4.8',
    command: 'openclaw install ahrefs-api',
    isProOnly: true,
    icon: '📈',
  },
  {
    slug: 'x-twitter-bot',
    name: 'X/Twitter Growth Bot',
    description:
      'Drafts viral tweets, schedules threads, and replies to mentions autonomously mimicking your persona.',
    category: 'Social Media',
    author: 'social-hacker',
    downloads: 15900,
    rating: '4.6',
    command: 'openclaw install x-api-v2',
    isProOnly: false,
    icon: '🐦',
  },
  {
    slug: 'postgres-dba',
    name: 'PostgreSQL DBA',
    description:
      'Allows the agent to write and execute raw SQL queries, run EXPLAIN PLANS, and optimize your database schemas.',
    category: 'Data',
    author: 'db-admin',
    downloads: 2300,
    rating: '4.9',
    command: 'openclaw install pg-toolkit',
    isProOnly: true,
    icon: '🐘',
  },
  {
    slug: 'cron-job-scheduler',
    name: 'Cron Job Scheduler',
    description:
      'A system-level skill that lets OpenClaw schedule its own autonomous wake-ups to perform recurring background tasks.',
    category: 'System',
    author: 'openclaw-team',
    downloads: 9800,
    rating: '5.0',
    command: 'openclaw install sys-cron',
    isProOnly: false,
    icon: '⏰',
  },
];

async function seed() {
  console.log('Seeding skills database...');
  try {
    for (const skill of MOCK_SKILLS) {
      await db
        .insert(skills)
        .values({
          id: crypto.randomUUID(),
          ...skill,
          createdAt: new Date(),
          updatedAt: new Date(),
        })
        .onConflictDoUpdate({
          target: skills.slug,
          set: {
            name: skill.name,
            description: skill.description,
            category: skill.category,
            author: skill.author,
            downloads: skill.downloads,
            rating: skill.rating,
            command: skill.command,
            isProOnly: skill.isProOnly,
            icon: skill.icon,
            updatedAt: new Date(),
          },
        });
      console.log(`Upserted skill: ${skill.name}`);
    }
    console.log('Seeding complete!');
  } catch (error) {
    console.error('Error seeding skills:', error);
  } finally {
    await client.end();
    process.exit(0);
  }
}

seed();
