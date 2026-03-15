'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: 'WHAT_IS_AGENTOPENCLAW',
    a: 'AgentOpenClaw is a production-grade AI agent foundry. We deploy elite autonomous entities hardened for industrial automation, SEO conquest, and algorithmic research.',
  },
  {
    q: 'DEPLOYMENT_DYNAMICS',
    a: 'We architect custom agent manifests based on your strategic baseline. These entities operate under zero-trust protocols, executing high-fidelity tasks with zero oversight required.',
  },
  {
    q: 'AGENT_CLASSIFICATIONS',
    a: 'Our foundry produces SEO Command Units, Content Synthesis Proxies, Research Oracles, and Social Intelligence Swarms. Each is tuned for specific ROI extraction.',
  },
  {
    q: 'RESOURCE_ALLOCATION',
    a: 'Pricing is scaled based on compute complexity and protocol tier. Pro-tier assets unlock multi-agent orchestration and global deployment vectors.',
  },
  {
    q: 'INTEGRATION_SURFACE',
    a: 'Every agent includes a native API bridge. We configure the neural handshake between our foundry and your existing tech infrastructure during the initialization phase.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-32 relative border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-primary/30 bg-primary/5 text-[10px] uppercase font-mono text-primary mb-6 tracking-widest">
              Knowledge Base / Module 06
            </div>
            <h2 className="text-5xl md:text-6xl font-heading font-black tracking-tighter leading-[0.9] italic uppercase">
              Operational{' '}
              <span className="text-primary italic">Intelligence</span>
            </h2>
          </div>
          <div className="text-[10px] font-mono text-[#444] uppercase tracking-[0.3em] font-bold">
            DOC_REF_FAQ_v2.0
          </div>
        </div>

        <div className="border-t border-white/10">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border-b border-white/10 overflow-hidden transition-all group hover:bg-white/[0.02]"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-0 py-8 text-left transition-colors"
                aria-expanded={openIndex === i}
              >
                <span
                  className={`font-mono text-xs uppercase tracking-[0.2em] transition-colors ${openIndex === i ? 'text-primary' : 'text-[#666] group-hover:text-white'}`}
                >
                  {faq.q}
                </span>
                <div className="w-10 h-10 border border-white/10 flex items-center justify-center group-hover:border-primary/40 transition-colors">
                  <svg
                    className={`w-3 h-3 text-[#555] transition-transform duration-300 ${
                      openIndex === i ? 'rotate-180 text-primary' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: 'circOut' }}
                  >
                    <div className="pb-10 max-w-2xl">
                      <p className="text-sm font-mono text-[#888] leading-[1.8] uppercase">
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
