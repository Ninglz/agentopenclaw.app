'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import * as gtag from '@/lib/gtag';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3 text-sm font-heading font-black tracking-tighter text-white hover:text-primary transition-all group uppercase italic"
          aria-label="AgentOpenClaw homepage"
        >
          <div className="relative w-8 h-8 border border-white/20 group-hover:border-primary/50 transition-colors p-1">
            <Image
              src="/logo.png"
              alt="AgentOpenClaw logo"
              width={28}
              height={28}
              className="grayscale group-hover:grayscale-0 transition-all"
              priority
            />
          </div>
          AgentOpenClaw
        </Link>
        <div className="flex items-center gap-8">
          <nav className="hidden md:flex items-center gap-10">
            <a
              href="#services"
              className="text-[11px] font-mono font-black uppercase tracking-[0.3em] text-[#555] hover:text-primary transition-all duration-300"
            >
              / Protocols
            </a>
            <a
              href="#pricing"
              className="text-[11px] font-mono font-black uppercase tracking-[0.3em] text-[#555] hover:text-primary transition-all duration-300"
            >
              / Allocation
            </a>
          </nav>
          <a
            href="#waitlist"
            onClick={() =>
              gtag.event({
                action: 'click_navbar_cta',
                category: 'conversion',
                label: 'Join Waitlist',
              })
            }
            className="px-5 py-2.5 text-[10px] font-mono font-black uppercase tracking-[0.2em] bg-primary text-black hover:bg-white transition-all"
          >
            Initialize_Access
          </a>
        </div>
      </div>
    </nav>
  );
}
