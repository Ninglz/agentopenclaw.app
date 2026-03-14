"use client";

import { useState, FormEvent } from "react";
import * as gtag from "../lib/gtag";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    gtag.event({
      action: "waitlist_attempt",
      category: "conversion",
      label: email,
    });

    try {
      const res = await fetch("https://formsubmit.co/ajax/ninglz2073@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email,
          _subject: "New Waitlist Signup — AgentOpenClaw",
        }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
        gtag.event({
          action: "waitlist_success",
          category: "conversion",
          label: "waitlist_signup",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="waitlist" className="py-24 md:py-32 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-px bg-gradient-to-r from-transparent via-[#2a2a2a] to-transparent" />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#7c3aed]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-2xl mx-auto px-6 text-center">
        <p className="text-sm font-medium text-[#7c3aed] tracking-widest uppercase mb-3">
          Early Access
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Join the Waitlist
        </h2>
        <p className="mt-4 text-[#a3a3a3] max-w-lg mx-auto leading-relaxed">
          Be among the first to access our agent services. Early users get
          priority onboarding and locked-in pricing.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            required
            aria-label="Email address"
            className="flex-1 px-4 py-3 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] text-[#f5f5f5] placeholder-[#555] text-sm focus:outline-none focus:border-[#7c3aed] focus:ring-1 focus:ring-[#7c3aed] transition-all"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="px-6 py-3 text-sm font-medium rounded-lg bg-[#7c3aed] text-white hover:bg-[#6d28d9] transition-all hover:shadow-lg hover:shadow-[#7c3aed]/20 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
          >
            {status === "loading" ? "Submitting..." : "Request Early Access"}
          </button>
        </form>

        {status === "success" && (
          <p className="mt-4 text-sm text-emerald-400">
            🎉 You&apos;re on the list! We&apos;ll be in touch soon.
          </p>
        )}
        {status === "error" && (
          <p className="mt-4 text-sm text-red-400">
            Something went wrong. Please try again.
          </p>
        )}
      </div>
    </section>
  );
}
