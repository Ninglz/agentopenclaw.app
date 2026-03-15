import { getDb } from '@/db';
import { skills } from '@/db/skills.schema';
import { eq } from 'drizzle-orm';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { LocaleLink as Link } from '@/i18n/navigation';

export async function generateMetadata({
  params: paramsPromise,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await paramsPromise;
  const db = await getDb();
  const skillData = await db.query.skills.findFirst({
    where: eq(skills.slug, slug),
  });

  if (!skillData) {
    return { title: 'Skill Not Found | OpenClaw' };
  }

  return {
    title: `${skillData.name} | OpenClaw Skills`,
    description: skillData.description,
  };
}

export default async function SkillDetailPage(props: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await props.params;
  setRequestLocale(locale);

  const db = await getDb();
  const skill = await db.query.skills.findFirst({
    where: eq(skills.slug, slug),
  });

  if (!skill) {
    notFound();
  }

  return (
    <section className="relative min-h-screen pt-32 pb-20">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        <Link
          href="/skills"
          className="inline-flex items-center text-sm text-[#888] hover:text-white mb-8 transition-colors"
        >
          ← Back to Skills Explorer
        </Link>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Icon Box */}
          <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl bg-[#111] border border-[#2a2a2a] flex items-center justify-center text-4xl sm:text-6xl shadow-2xl shrink-0">
            {skill.icon || '🔧'}
          </div>

          {/* Core Info */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium">
                {skill.category}
              </span>
              {skill.isProOnly && (
                <span className="px-3 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-500 text-xs font-medium">
                  PRO ONLY
                </span>
              )}
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              {skill.name}
            </h1>

            <p className="text-xl text-[#a3a3a3] leading-relaxed mb-6">
              {skill.description}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-[#666] font-mono mb-8">
              <div className="flex items-center gap-2">
                <span className="text-[#888]">Author:</span> @{skill.author}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#888]">Downloads:</span>{' '}
                {skill.downloads?.toLocaleString() || 0}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#888]">Rating:</span> ⭐ {skill.rating}
              </div>
            </div>

            {/* Terminal Installation Box */}
            <div className="bg-[#0d0d0d] border border-[#333] rounded-xl p-6 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 opacity-50" />
              <div className="text-xs text-[#555] uppercase tracking-wider font-mono mb-3">
                Installation Command
              </div>
              <div className="flex items-center justify-between">
                <code className="text-emerald-400 font-mono text-sm sm:text-base">
                  <span className="text-[#555] mr-2">$</span>
                  {skill.command}
                </code>
              </div>
              <p className="mt-4 text-xs text-[#666]">
                Run this command inside your OpenClaw agent directory to
                automatically install and link the required dependencies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
