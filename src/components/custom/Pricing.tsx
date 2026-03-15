'use client';

import * as gtag from '@/lib/gtag';

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: '/mo',
    description: 'Ideal for testing the waters and small personal experiments.',
    features: [
      'Access to Agent Config Wizard',
      'Limited Skills Explorer (3/day)',
      'Standard Prompt Optimization',
      'Community support',
    ],
    cta: 'Start Building',
    highlighted: false,
    href: '/tools/agent-config-generator',
  },
  {
    name: 'Pro',
    price: '$9.9',
    period: '/mo',
    description: 'Professional grade tools for power users and small teams.',
    features: [
      'Everything in Free',
      'Unlimited Skills Library',
      'Advanced Battle-Testing Optimizer',
      'Priority Zero-Trust Deployment',
      'API Access for Agents',
    ],
    cta: 'Go Pro Now',
    highlighted: true,
    href: '/tools/prompt-optimizer',
  },
  {
    name: 'Lifetime',
    price: '$149',
    period: 'once',
    description: 'One-time payment for ultimate access. Never pay again.',
    features: [
      'Everything in Pro',
      'Lifetime Updates',
      'Early Beta Access',
      'Dedicated SSH Private Tunnel',
      'VVIP Support Channel',
    ],
    cta: 'Secure Lifetime',
    highlighted: false,
    href: '/pricing',
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-40 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-baseline justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <p className="text-[10px] font-bold text-emerald-500 tracking-[0.4em] uppercase mb-4">
              Subscription Matrix
            </p>
            <h2 className="text-5xl md:text-8xl font-heading font-black italic uppercase tracking-tighter leading-[0.85] text-foreground">
              Scale Your <span className="text-emerald-500">Empire</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-xs font-mono text-sm leading-tight uppercase font-medium">
            Clear, industrial pricing for elite agent deployment. No hidden
            fees. Zero friction.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:items-stretch">
          {plans.map((plan, idx) => (
            <div
              key={plan.name}
              className={`industrial-glass relative p-10 border-border transition-all flex flex-col h-full overflow-hidden ${
                plan.highlighted
                  ? 'bg-emerald-500/[0.03] border-emerald-500/50 shadow-[0_40px_100px_rgba(16,185,129,0.1)]'
                  : 'bg-background/80 backdrop-blur-sm'
              }`}
            >
              {plan.name === 'Lifetime' && (
                <div className="absolute top-0 right-0">
                  <div className="bg-emerald-500 text-black text-[10px] font-black uppercase tracking-widest px-8 py-2 rotate-45 translate-x-10 translate-y-2">
                    ELITE DEAL
                  </div>
                </div>
              )}

              <div className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-3xl font-heading font-black italic uppercase tracking-tighter text-foreground">
                    {plan.name}
                  </h3>
                  {plan.highlighted && (
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  )}
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-6xl font-heading font-black italic tracking-tighter text-foreground">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-muted-foreground font-mono text-xs uppercase font-bold">
                      {plan.period}
                    </span>
                  )}
                </div>
              </div>

              <p className="text-xs text-muted-foreground font-mono font-bold uppercase tracking-widest mb-10 leading-relaxed border-l-2 border-border pl-4">
                {plan.description}
              </p>

              <ul className="space-y-4 mb-14 flex-grow">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-4 text-[11px] font-mono text-muted-foreground uppercase tracking-tight group"
                  >
                    <span className="text-emerald-500 font-bold group-hover:animate-pulse">
                      /
                    </span>
                    <span className="group-hover:text-foreground transition-colors">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.href}
                onClick={() =>
                  gtag.event({
                    action: 'select_plan',
                    category: 'conversion',
                    label: plan.name,
                    value: plan.price.includes('$')
                      ? parseFloat(plan.price.replace('$', ''))
                      : 0,
                  })
                }
                className={`w-full py-6 text-sm font-black uppercase italic tracking-tighter text-center transition-all ${
                  plan.highlighted
                    ? 'bg-emerald-500 text-black shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:bg-emerald-400 hover:shadow-[0_0_50px_rgba(16,185,129,0.5)]'
                    : 'bg-white text-black hover:bg-emerald-500 transition-colors'
                }`}
              >
                {plan.cta} &rarr;
              </a>
            </div>
          ))}
        </div>

        <div className="mt-24 pt-12 border-t border-[#111] grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex gap-4">
            <div className="text-emerald-500 font-mono font-black italic text-xl">
              01
            </div>
            <div>
              <p className="text-[10px] font-mono text-[#333] uppercase leading-relaxed font-bold">
                Secure Enterprise Relay via Stripe. All deployments isolated via
                mTLS sockets.
              </p>
              <div className="mt-2 text-[9px] font-mono text-emerald-500/50 uppercase tracking-widest">
                Zero-Cloud Private Relay Protocol Active
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-emerald-500 font-mono font-black italic text-xl">
              02
            </div>
            <div>
              <p className="text-[10px] font-mono text-[#333] uppercase leading-relaxed font-bold">
                Pro plans unlock unlimited skill library and priority build
                queues.
              </p>
              <div className="mt-2 text-[9px] font-mono text-emerald-500/50 uppercase tracking-widest">
                Instant Build Manifest Delivery
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-emerald-500 font-mono font-black italic text-xl">
              03
            </div>
            <div>
              <p className="text-[10px] font-mono text-[#333] uppercase leading-relaxed font-bold">
                14-day zero-friction refund policy. We scale as you grow.
              </p>
              <div className="mt-2 text-[9px] font-mono text-emerald-500/50 uppercase tracking-widest">
                No Credentials Stored &bull; Verified Security
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
