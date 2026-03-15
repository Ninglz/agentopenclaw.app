'use client';

import { useState } from 'react';
import * as gtag from '@/lib/gtag';

export default function SEOKeywordAgentPage() {
  const [email, setEmail] = useState('');
  const [downloading, setDownloading] = useState(false);

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setDownloading(true);
    gtag.event({
      action: 'download_free_agent',
      category: 'conversion',
      label: 'SEO Keyword Agent Base Config',
    });

    // Simulate API call for email capture
    setTimeout(() => {
      setDownloading(false);
      alert('Thanks! The base configuration file has been sent to your email.');
      setEmail('');
    }, 1500);
  };

  return (
    <section className="relative min-h-screen pt-24 pb-20">
      {/* Background Orbs */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-[#7c3aed]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Breadcrumbs */}
        <div className="mb-8">
          <a
            href="/agents"
            className="text-sm text-[#7c3aed] hover:underline flex items-center gap-1"
          >
            &larr; Back to Agents
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Copy & Value Prop */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-xs text-emerald-400 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Agent Active & Ready
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] mb-6">
              SEO Keyword <span className="gradient-text">Analyzer Agent</span>
            </h1>

            <p className="text-lg text-[#a3a3a3] leading-relaxed mb-8">
              Stop manually exporting Ahrefs data and analyzing SERPs. This
              autonomous OpenClaw agent takes a single seed keyword and delivers
              a complete content action plan in seconds.
            </p>

            <div className="space-y-6 mb-12">
              <VProp
                icon="🎯"
                title="Search Intent Analysis"
                desc="Automatically determines if the keyword needs a guide, listicle, or product page based on current top 10 SERPs."
              />
              <VProp
                icon="⚔️"
                title="Difficulty Assessment"
                desc="Parses the top 5 ranking pages to give a realistic assessment of ranking payload."
              />
              <VProp
                icon="📝"
                title="Suggested Article Structure"
                desc="Generates an optimized H1/H2 outline based on what's currently winning in search."
              />
              <VProp
                icon="🕸️"
                title="Long-Tail Clusters"
                desc="Recommends semantic keyword variations for internal linking and LSI."
              />
            </div>
          </div>

          {/* Right Column: Demo & Conversion */}
          <div className="space-y-8">
            {/* Demo Container */}
            <div className="rounded-2xl border border-[#2a2a2a] bg-[#111] overflow-hidden shadow-2xl">
              <div className="p-4 border-b border-[#2a2a2a] bg-[#1a1a1a] flex justify-between items-center text-sm text-[#888]">
                <span>terminal — openclaw</span>
                <span className="text-xs border border-[#333] px-2 py-0.5 rounded">
                  Demo
                </span>
              </div>
              <div className="p-6 font-mono text-sm leading-relaxed min-h-[300px]">
                <div className="text-[#ccc] mb-4">
                  <span className="text-[#7c3aed] mr-2">$</span>
                  openclaw run seo-keyword-agent --keyword "what is openclaw"
                </div>
                <div className="text-emerald-400 mb-2">
                  Analyzing search intent... [Informational]
                </div>
                <div className="text-emerald-400 mb-2">
                  Scraping top 5 SERPs... [Done]
                </div>
                <div className="text-[#ccc] mb-4 opacity-80 animate-pulse">
                  Generating H1/H2 structure...
                </div>

                <div className="text-[#888] border-l-2 border-[#333] pl-4 space-y-1">
                  <div># What is OpenClaw?</div>
                  <div>## Why OpenClaw is Trending</div>
                  <div>## Top 5 Autonomous Use Cases</div>
                  <div>## OpenClaw vs Cursor</div>
                </div>
              </div>
            </div>

            {/* Pricing / Conversion Tiers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Free Tier */}
              <div className="rounded-xl border border-[#2a2a2a] bg-[#1a1a1a] p-6 hover:border-[#7c3aed]/50 transition-colors">
                <h3 className="text-xl font-bold mb-2">Base Config</h3>
                <div className="text-2xl font-bold text-white mb-2">Free</div>
                <p className="text-sm text-[#888] mb-6 min-h-[40px]">
                  Basic keyword analysis and SERP scraping. Runs locally.
                </p>

                <form onSubmit={handleDownload} className="space-y-3">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-[#333] bg-[#0d0d0d] text-white placeholder:text-[#555] focus:outline-none focus:border-[#7c3aed]"
                  />
                  <button
                    type="submit"
                    disabled={downloading}
                    className="w-full inline-flex items-center justify-center py-2.5 text-sm font-medium rounded-lg bg-white text-black hover:bg-[#eee] transition-colors disabled:opacity-70"
                  >
                    {downloading ? 'Sending...' : 'Download Free'}
                  </button>
                </form>
              </div>

              {/* Paid Tier */}
              <div className="rounded-xl border-2 border-[#7c3aed]/50 bg-[#111] p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-[#7c3aed] text-[10px] font-bold px-3 py-1 rounded-bl-lg">
                  PRO
                </div>
                <h3 className="text-xl font-bold mb-2">Full Automation</h3>
                <div className="text-2xl font-bold text-white mb-2">
                  $29{' '}
                  <span className="text-sm font-normal text-[#888]">
                    one-time
                  </span>
                </div>
                <p className="text-sm text-[#888] mb-6 min-h-[40px]">
                  Includes CMS auto-posting, bulk CSV uploads, and premium LLM
                  prompts.
                </p>

                <button
                  onClick={() => {
                    gtag.event({
                      action: 'click_pro_agent_buy',
                      category: 'conversion',
                      label: 'SEO Keyword Agent Pro',
                    });
                    // Placeholder for Stripe link
                    alert('Stripe checkout integration coming soon!');
                  }}
                  className="w-full inline-flex items-center justify-center py-2.5 text-sm font-medium rounded-lg bg-[#7c3aed] text-white hover:bg-[#6d28d9] transition-colors mt-auto shadow-lg shadow-[#7c3aed]/20"
                >
                  Buy Pro Config
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function VProp({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-10 h-10 rounded-lg border border-[#2a2a2a] bg-[#1a1a1a] flex items-center justify-center text-xl">
        {icon}
      </div>
      <div>
        <h4 className="text-white font-medium mb-1">{title}</h4>
        <p className="text-[#888] text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
