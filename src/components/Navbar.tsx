"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import * as gtag from "../lib/gtag";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-base sm:text-lg font-bold tracking-tight text-[#f5f5f5] hover:text-[#7c3aed] transition-colors"
          aria-label="AgentOpenClaw homepage"
        >
          <Image
            src="/logo.png"
            alt="AgentOpenClaw logo"
            width={28}
            height={28}
            className="rounded"
            priority
          />
          AgentOpenClaw
        </Link>
        <div className="flex items-center gap-3 sm:gap-6">
          <a
            href="#services"
            onClick={() => gtag.event({ action: "nav_click", category: "navigation", label: "Services" })}
            className="hidden sm:inline text-sm text-[#a3a3a3] hover:text-[#f5f5f5] transition-colors"
          >
            Services
          </a>
          <a
            href="#pricing"
            onClick={() => gtag.event({ action: "nav_click", category: "navigation", label: "Pricing" })}
            className="hidden sm:inline text-sm text-[#a3a3a3] hover:text-[#f5f5f5] transition-colors"
          >
            Pricing
          </a>
          <a
            href="#waitlist"
            onClick={() => gtag.event({ action: "click_navbar_cta", category: "conversion", label: "Join Waitlist" })}
            className="px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-lg bg-[#7c3aed] text-white hover:bg-[#6d28d9] transition-all hover:shadow-lg hover:shadow-[#7c3aed]/20"
          >
            Join Waitlist
          </a>
        </div>
      </div>
    </nav>
  );
}
