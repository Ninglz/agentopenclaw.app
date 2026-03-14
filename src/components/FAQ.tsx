"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What is AgentOpenClaw?",
    a: "AgentOpenClaw is an AI agent services platform built on OpenClaw. We design, configure, and deploy custom AI agents that automate business-critical tasks like SEO, content creation, research, and more.",
  },
  {
    q: "How do OpenClaw agent services work?",
    a: "You tell us your business goals, and our team configures a custom AI agent using the OpenClaw framework. The agent runs autonomously, executing tasks and delivering measurable results — no technical expertise required on your end.",
  },
  {
    q: "What types of AI agents can you build?",
    a: "We offer SEO agents, content agents, research agents, social media agents, email automation agents, and fully custom agents. Each is tailored to your specific workflows and objectives.",
  },
  {
    q: "How much do AI agent services cost?",
    a: "Pricing depends on the agent type and complexity. Early waitlist members get locked-in pricing and priority access. Join the waitlist to learn more about our plans.",
  },
  {
    q: "Can I integrate an OpenClaw agent with my existing tools?",
    a: "Yes. Our agents are designed to integrate with popular platforms and APIs. During onboarding, we'll configure your agent to work seamlessly with your existing tech stack.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-px bg-gradient-to-r from-transparent via-[#2a2a2a] to-transparent" />

      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-[#7c3aed] tracking-widest uppercase mb-3">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl border border-[#2a2a2a] bg-[#1a1a1a]/50 overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left text-[#f5f5f5] hover:text-[#7c3aed] transition-colors"
                aria-expanded={openIndex === i}
              >
                <span className="text-sm font-medium pr-4">{faq.q}</span>
                <svg
                  className={`w-4 h-4 text-[#555] shrink-0 transition-transform duration-200 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`grid transition-all duration-200 ${
                  openIndex === i
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-4 text-sm text-[#a3a3a3] leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
