'use client';

import * as gtag from '@/lib/gtag';

const agents = [
  {
    id: 'seo-optimizer',
    title: 'SEO Optimizer Agent',
    description:
      'Automates keyword research, on-page optimization, and SERP tracking. Analyzes your content and suggests improvements to boost organic traffic.',
    icon: '🔍',
    tags: ['SEO', 'Keywords', 'Content'],
    status: 'active' as const,
    href: '/agents/seo-keyword-agent',
  },
  {
    id: 'content-writer',
    title: 'Content Writer Agent',
    description:
      'Generates blog posts, product descriptions, and marketing copy optimized for your target audience and SEO goals.',
    icon: '✍️',
    tags: ['Writing', 'Blog', 'Marketing'],
    status: 'coming-soon' as const,
  },
  {
    id: 'code-review',
    title: 'Code Review Agent',
    description:
      'Reviews pull requests, identifies bugs, suggests refactors, and ensures code quality standards across your repositories.',
    icon: '🔧',
    tags: ['Code', 'Review', 'DevOps'],
    status: 'coming-soon' as const,
  },
  {
    id: 'data-analysis',
    title: 'Data Analysis Agent',
    description:
      'Connects to your data sources, generates insights, creates visualizations, and builds automated reporting pipelines.',
    icon: '📊',
    tags: ['Data', 'Analytics', 'Reports'],
    status: 'coming-soon' as const,
  },
  {
    id: 'devops-automation',
    title: 'DevOps Automation Agent',
    description:
      'Manages CI/CD pipelines, monitors infrastructure health, and automates deployment workflows across environments.',
    icon: '🚀',
    tags: ['DevOps', 'CI/CD', 'Infra'],
    status: 'coming-soon' as const,
  },
  {
    id: 'research-agent',
    title: 'Research Agent',
    description:
      'Conducts competitive analysis, market research, and trend monitoring. Delivers structured reports with actionable insights.',
    icon: '🧪',
    tags: ['Research', 'Analysis', 'Trends'],
    status: 'coming-soon' as const,
  },
];

export default function AgentsPage() {
  return (
    <section className="relative min-h-screen pt-32 pb-20">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm border border-primary/30 bg-primary/5 text-[10px] uppercase font-mono text-primary mb-6 tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Agent Repository / Module 03
          </div>
          <h1 className="text-5xl sm:text-7xl font-heading font-black tracking-tighter leading-[0.9] mb-8 italic uppercase">
            Elite Agent <span className="text-primary italic">Protocols</span>
          </h1>
          <p className="text-xl text-[#888] font-mono leading-tight max-w-2xl mx-auto uppercase">
            Access the production-grade repository of autonomous manifests.
            Validated for high-fidelity execution across industrial logic
            chains.
          </p>
        </div>

        {/* Agent Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {agents.map((agent) => {
            const CardWrapper = agent.href ? 'a' : 'div';
            const wrapperProps = agent.href ? { href: agent.href } : {};

            return (
              <CardWrapper
                key={agent.id}
                {...wrapperProps}
                className={`group relative border border-[#222] bg-[#0d0d0d] p-8 transition-all duration-500 ${agent.href ? 'hover:border-primary/50 hover:bg-black cursor-pointer block' : 'opacity-60 grayscale'}`}
              >
                {/* Status badge */}
                <div className="absolute top-4 right-4">
                  {agent.status === 'active' ? (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-sm text-[10px] font-mono font-bold uppercase tracking-widest bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Active
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-sm text-[10px] font-mono font-bold uppercase tracking-widest bg-primary/10 text-primary border border-primary/20">
                      Syncing
                    </span>
                  )}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 border border-[#222] bg-black flex items-center justify-center text-3xl mb-8 grayscale group-hover:grayscale-0 group-hover:border-primary/40 transition-all">
                  {agent.icon}
                </div>

                {/* Content */}
                <h2 className="text-xl font-heading font-black italic uppercase italic tracking-tighter text-white mb-4 group-hover:text-primary transition-colors">
                  {agent.title}
                </h2>
                <p className="text-sm font-mono text-[#666] leading-relaxed uppercase group-hover:text-[#a3a3a3] transition-colors mb-8">
                  {agent.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {agent.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[9px] font-mono font-bold uppercase tracking-widest rounded-sm bg-black border border-[#222] text-[#444]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardWrapper>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center border border-[#222] background-[#0a0a0a] p-12 md:p-20 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -mr-32 -mt-32 transition-colors group-hover:bg-primary/10 pointer-events-none" />

          <h2 className="text-3xl md:text-5xl font-heading font-black italic uppercase tracking-tighter mb-8 leading-none">
            Forge Your <span className="text-primary">Autonomous Future</span>
          </h2>
          <p className="text-sm font-mono text-[#666] uppercase tracking-widest max-w-xl mx-auto mb-12 leading-relaxed">
            DEPLOY CUSTOM AGENT MANIFESTS WITH INDUSTRIAL RIGOR. <br />
            WHITELIST ACCESS IS CURRENTLY RESTRICTED TO VANGUARD PROTOCOLS.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="/#waitlist"
              onClick={() =>
                gtag.event({
                  action: 'click_agents_waitlist',
                  category: 'conversion',
                  label: 'Join Waitlist from Agents Page',
                })
              }
              className="px-12 py-5 bg-primary text-black font-black uppercase italic tracking-tighter hover:bg-white transition-all whitespace-nowrap group-hover:-translate-y-1"
            >
              Initialize_Access
            </a>
            <a
              href="/blog/what-is-openclaw"
              className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#444] hover:text-white transition-colors"
            >
              / Manifest_Reference
            </a>
          </div>
        </div>

        {/* Internal linking for SEO */}
        <div className="mt-20 text-center">
          <p className="text-[10px] font-mono text-[#333] uppercase tracking-[0.2em]">
            SYSTEM_PROTOCOL_v4.2 //{' '}
            <a
              href="/blog/what-is-openclaw"
              className="text-primary hover:text-white transition-colors"
            >
              ARCHIVE_DOCUMENTATION
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
