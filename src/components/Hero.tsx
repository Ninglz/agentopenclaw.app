"use client";

import { useEffect, useState } from "react";
import * as gtag from "../lib/gtag";

const terminalLines = [
  { prompt: "$ ", text: "openclaw init --agent seo-optimizer", delay: 0 },
  { prompt: "", text: "✓ Agent configured successfully", delay: 1200 },
  { prompt: "$ ", text: "openclaw deploy --target production", delay: 2000 },
  { prompt: "", text: "✓ SEO Agent deployed — scanning 1,247 pages...", delay: 3200 },
  { prompt: "", text: "✓ 34 optimization opportunities found", delay: 4200 },
  { prompt: "$ ", text: "openclaw agent run --mode autonomous", delay: 5200 },
  { prompt: "", text: "✓ Agent executing... ETA: 12 minutes", delay: 6200 },
];

function TerminalAnimation() {
  const [visibleLines, setVisibleLines] = useState<number>(0);

  useEffect(() => {
    const timers = terminalLines.map((line, i) =>
      setTimeout(() => setVisibleLines(i + 1), line.delay)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="relative w-full max-w-2xl mx-auto mt-12 animate-fade-in-up-delay-3" aria-hidden="true">
      {/* Terminal glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#7c3aed]/20 to-[#7c3aed]/5 rounded-2xl blur-xl" />

      <div className="relative rounded-xl border border-[#2a2a2a] bg-[#111111] overflow-hidden shadow-2xl">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-[#2a2a2a] bg-[#0d0d0d]">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
          <span className="ml-2 text-xs text-[#666] font-mono">
            terminal — openclaw
          </span>
        </div>

        {/* Terminal body */}
        <div className="p-4 sm:p-5 font-mono text-xs sm:text-sm leading-relaxed min-h-[180px] sm:min-h-[220px]">
          {terminalLines.slice(0, visibleLines).map((line, i) => (
            <div key={i} className="flex">
              {line.prompt && (
                <span className="text-[#7c3aed] mr-1 select-none">
                  {line.prompt}
                </span>
              )}
              <span
                className={
                  line.text.startsWith("✓")
                    ? "text-emerald-400"
                    : "text-[#ccc]"
                }
              >
                {line.text}
              </span>
            </div>
          ))}
          {visibleLines < terminalLines.length && (
            <div className="flex">
              <span className="text-[#7c3aed] mr-1">$ </span>
              <span className="w-2 h-5 bg-[#7c3aed] cursor-blink inline-block" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] bg-[#7c3aed]/5 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[200px] sm:w-[400px] h-[200px] sm:h-[400px] bg-[#7c3aed]/3 rounded-full blur-[60px] sm:blur-[100px] pointer-events-none" />

      {/* Grid bg */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#f5f5f5 1px, transparent 1px), linear-gradient(90deg, #f5f5f5 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#2a2a2a] bg-[#1a1a1a] text-xs text-[#a3a3a3] mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Join 1,200+ businesses automating with AI
          </div>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]" style={{ animationDelay: '100ms' }}>
          Scale Your Business{" "}
          <span className="gradient-text">with Autonomous AI Agents</span>
        </h1>

        {/* AI SEO Definition Block - Highly extractable */}
        <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-[#a3a3a3] max-w-2xl mx-auto leading-relaxed border-l-2 border-[#7c3aed] pl-4 text-left" style={{ animationDelay: '200ms' }}>
          <strong className="text-white">AgentOpenClaw is an AI automation platform</strong> that designs, deploys, and manages intelligent agents capable of executing complex workflows—like SEO optimization, content generation, and prospect research—without human intervention.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 " style={{ animationDelay: '300ms' }}>
          <a
            href="#waitlist"
            onClick={() => gtag.event({
              action: "click_hero_cta",
              category: "conversion",
              label: "Start Automating Today"
            })}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-medium rounded-lg bg-[#7c3aed] text-white hover:bg-[#6d28d9] transition-all hover:shadow-xl hover:shadow-[#7c3aed]/25 hover:scale-[1.02] active:scale-[0.98]"
          >
            Start Automating Today
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
          <span className="text-sm text-[#666]">No credit card required. Lock in early pricing.</span>
        </div>

        <TerminalAnimation />
      </div>
    </section>
  );
}
