'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as gtag from '@/lib/gtag';
import { LocaleLink as Link } from '@/i18n/navigation';
import { useRouter, useSearchParams } from 'next/navigation';
import { ProBadge } from '@/components/custom/ProBadge';

const CATEGORIES = [
  'All',
  'Productivity',
  'Development',
  'SEO',
  'Social Media',
  'Data',
  'System',
];

type Skill = {
  id: string;
  slug: string;
  name: string;
  description: string;
  category: string;
  author: string;
  downloads: number | null;
  rating: string | null;
  command: string;
  isProOnly: boolean;
  icon: string | null;
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { stiffness: 300, damping: 24 },
  },
};

export default function SkillsClient({
  skills,
  total,
  currentPage,
  currentCategory,
  currentQuery,
}: {
  skills: Skill[];
  total: number;
  currentPage: number;
  currentCategory: string;
  currentQuery: string;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(currentQuery);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const totalPages = Math.ceil(total / 6);

  const updateFilters = (category: string, query: string, page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    if (category && category !== 'All') params.set('category', category);
    else params.delete('category');

    if (query) params.set('q', query);
    else params.delete('q');

    if (page > 1) params.set('page', page.toString());
    else params.delete('page');

    router.push(`?${params.toString()}`);
  };

  const handleSearchSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      updateFilters(currentCategory, searchQuery, 1);
    }
  };

  const handleCopy = (e: React.MouseEvent, id: string, command: string) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(command);
    setCopiedId(id);

    gtag.event({
      action: 'copy_skill_command',
      category: 'tool',
      label: id,
    });

    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleProClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    router.push('/#pricing');
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-primary/30 bg-primary/5 text-[10px] uppercase font-mono text-primary mb-6 tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Manifest Repository / v2.0
            </div>
            <h1 className="text-5xl sm:text-7xl font-heading font-black tracking-tighter leading-[0.9] mb-8 italic uppercase">
              Skills <span className="text-primary italic">Explorer</span>
            </h1>
            <p className="text-xl text-[#888] font-mono leading-tight max-w-xl">
              Discover and install high-performance capabilities. Expand your
              agent&apos;s digital reaching with peer-reviewed modules.
            </p>
          </div>
          <div className="flex flex-col items-end gap-2">
            <div className="text-[10px] font-mono text-[#444] uppercase tracking-widest">
              Total Modules Indexed
            </div>
            <div className="text-4xl font-heading font-black italic text-white leading-none tracking-tighter">
              {total.toString().padStart(3, '0')}
            </div>
          </div>
        </div>

        {/* Search & Filters */}
        <div className="industrial-glass p-2 mb-16 sticky top-20 z-20 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex space-x-2 overflow-x-auto w-full md:w-auto px-2 py-1 scrollbar-hide">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => updateFilters(category, searchQuery, 1)}
                className={`whitespace-nowrap px-4 py-2 rounded-sm text-[11px] font-mono uppercase tracking-wider transition-all duration-300 ${
                  currentCategory === category
                    ? 'bg-primary text-black font-black'
                    : 'text-[#666] hover:text-white hover:bg-[#111]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="w-full md:w-80 px-2 relative">
            <span className="absolute left-6 top-1/2 -translate-y-1/2 text-primary font-mono text-xs">
              CMD &gt;
            </span>
            <input
              type="text"
              placeholder="FILTER_QUERY..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleSearchSubmit}
              className="w-full pl-16 pr-4 py-3 bg-black border border-[#222] text-white font-mono text-xs focus:outline-none focus:border-primary transition-colors"
            />
          </div>
        </div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-12 gap-8"
        >
          {skills.length === 0 ? (
            <div className="col-span-full py-20 text-center industrial-glass border-dashed">
              <div className="text-4xl mb-4 font-mono text-[#333]">
                ERR: NO_RESULTS
              </div>
              <p className="font-mono text-xs text-[#555] uppercase tracking-widest">
                Search query returned zero validated manifests.
              </p>
            </div>
          ) : (
            skills.map((skill, idx) => {
              const isLarge = idx === 0 && currentPage === 1;
              return (
                <motion.div
                  key={skill.id}
                  variants={itemVariants}
                  className={`${isLarge ? 'md:col-span-8 lg:col-span-8' : 'md:col-span-6 lg:col-span-4'}`}
                >
                  <Link
                    href={`/skills/${skill.slug}`}
                    className="group h-full flex flex-col border border-[#222] bg-[#0d0d0d] hover:border-primary/50 transition-all relative overflow-hidden"
                  >
                    {isLarge && (
                      <div className="absolute top-0 right-0 p-4 z-10">
                        <div className="px-2 py-1 bg-emerald-500 text-black font-mono text-[9px] font-black uppercase tracking-widest italic flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-black rounded-full animate-pulse" />
                          ROI_OPTIMIZED MODULE
                        </div>
                      </div>
                    )}

                    <div className="p-8 flex-1 flex flex-col">
                      <div className="flex items-start justify-between mb-8">
                        <div className="w-16 h-16 border border-[#222] bg-black flex items-center justify-center text-3xl grayscale group-hover:grayscale-0 transition-all group-hover:border-primary/30">
                          {skill.icon || '🔧'}
                        </div>
                        <div className="flex flex-col items-end gap-1 font-mono text-[10px] uppercase tracking-tighter">
                          <span className="text-amber-500">
                            REL: {skill.rating}★
                          </span>
                          <span className="text-[#444]">
                            OPS: {skill.downloads}
                          </span>
                          {skill.isProOnly && <ProBadge className="mt-2" />}
                        </div>
                      </div>

                      <h3
                        className={`font-heading font-black italic uppercase italic tracking-tighter text-white group-hover:text-primary transition-colors ${isLarge ? 'text-3xl lg:text-4xl mb-4' : 'text-xl mb-2'}`}
                      >
                        {skill.name}
                      </h3>
                      <p
                        className={`font-mono text-[#666] leading-relaxed uppercase group-hover:text-[#888] transition-colors mb-8 flex-1 ${isLarge ? 'text-sm' : 'text-[11px] line-clamp-3'}`}
                      >
                        {skill.description}
                      </p>

                      <div className="flex items-center gap-4 mb-10">
                        <div className="px-2 py-1 border border-[#222] text-[#444] text-[9px] font-mono uppercase tracking-widest group-hover:border-primary/20 group-hover:text-primary/50 transition-colors">
                          {skill.category}
                        </div>
                        <div className="h-px bg-[#222] flex-1" />
                        <span className="text-[9px] font-mono text-[#333] uppercase">
                          Author: {skill.author}
                        </span>
                      </div>

                      {/* Install Command */}
                      <div className="mt-auto relative">
                        <div
                          onClick={(e) =>
                            skill.isProOnly
                              ? handleProClick(e)
                              : handleCopy(e, skill.id, skill.command)
                          }
                          className={`flex items-center justify-between p-4 border font-mono text-[10px] cursor-pointer transition-all group/cmd ${
                            copiedId === skill.id
                              ? 'border-emerald-500 bg-emerald-500/10 text-emerald-400'
                              : skill.isProOnly
                                ? 'border-amber-500/30 bg-amber-500/5 text-[#444] hover:border-amber-500/50'
                                : 'border-[#1a1a1a] bg-black text-[#666] hover:border-primary/40 hover:text-white'
                          }`}
                        >
                          <span className="truncate mr-4 uppercase">
                            <span className="text-primary opacity-50 mr-3">
                              #
                            </span>
                            {skill.command}
                          </span>
                          <span className="text-xs group-hover/cmd:scale-110 transition-transform">
                            {copiedId === skill.id
                              ? '✔️'
                              : skill.isProOnly
                                ? '🔒'
                                : '📋'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })
          )}
        </motion.div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-20 flex justify-center gap-4">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() =>
                  updateFilters(currentCategory, currentQuery, i + 1)
                }
                className={`w-12 h-12 flex items-center justify-center border font-mono text-xs transition-all ${
                  currentPage === i + 1
                    ? 'bg-primary text-black border-primary font-black scale-110'
                    : 'bg-[#0d0d0d] border-[#222] text-[#444] hover:text-white hover:border-[#444]'
                }`}
              >
                {(i + 1).toString().padStart(2, '0')}
              </button>
            ))}
          </div>
        )}

        {/* Pro Upsell Banner */}
        <div className="mt-24 p-12 border border-[#222] industrial-glass relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -mr-32 -mt-32 transition-colors group-hover:bg-primary/10" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl">
              <div className="text-[10px] font-mono text-[#444] uppercase tracking-[0.3em] font-bold mb-4">
                Architecture Optimization
              </div>
              <h4 className="text-3xl font-heading font-black italic uppercase tracking-tighter mb-4 text-white">
                Autonomous <span className="text-primary">Skill Chaining</span>
              </h4>
              <p className="text-sm font-mono text-[#888] leading-relaxed uppercase">
                Let our orchestrator analyze your logic manifests and recommend
                the optimal sequence of skills. Automate dependency resolution
                and ensure 100% manifest safety.
              </p>
            </div>
            <Link
              href="/pricing"
              className="px-12 py-5 bg-white text-black font-black uppercase italic tracking-tighter hover:bg-gray-200 transition-all whitespace-nowrap group-hover:-translate-y-1 group-hover:shadow-[0_10px_40px_rgba(255,255,255,0.2)]"
            >
              Unlock Enterprise Suite &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
