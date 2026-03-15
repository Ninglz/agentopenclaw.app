import { getDb } from '@/db';
import { skills } from '@/db/skills.schema';
import { ilike, and, eq, count, desc } from 'drizzle-orm';
import SkillsClient from './SkillsClient';
import { setRequestLocale } from 'next-intl/server';

export const metadata = {
  title: 'Skills Explorer | OpenClaw',
  description:
    'Discover, compare, and install community-built OpenClaw skills.',
};

export default async function SkillsExplorerPage(props: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { locale } = await props.params;
  const searchParams = await props.searchParams;

  setRequestLocale(locale);

  const q = typeof searchParams.q === 'string' ? searchParams.q : undefined;
  const category =
    typeof searchParams.category === 'string'
      ? searchParams.category
      : undefined;
  const pageStr =
    typeof searchParams.page === 'string' ? searchParams.page : '1';

  const pageNum = parseInt(pageStr, 10) || 1;
  const limit = 6;
  const offset = (pageNum - 1) * limit;

  const db = await getDb();

  const conditions = [];
  if (q) conditions.push(ilike(skills.name, `%${q}%`));
  if (category && category !== 'All')
    conditions.push(eq(skills.category, category));

  const where = conditions.length > 0 ? and(...conditions) : undefined;

  const data = await db.query.skills.findMany({
    where,
    limit,
    offset,
    orderBy: [desc(skills.createdAt)],
  });

  const totalRes = await db
    .select({ count: count() })
    .from(skills)
    .where(where);
  const total = totalRes[0].count;

  // Convert Drizzle numeric string back to something serializable to Client Components
  // Drizzle numeric comes back as string e.g. "4.9"
  const serializableSkills = data.map((skill) => ({
    ...skill,
    rating:
      typeof skill.rating === 'string'
        ? skill.rating
        : skill.rating
          ? String(skill.rating)
          : null,
  }));

  return (
    <SkillsClient
      skills={serializableSkills}
      total={total}
      currentPage={pageNum}
      currentCategory={category || 'All'}
      currentQuery={q || ''}
    />
  );
}
