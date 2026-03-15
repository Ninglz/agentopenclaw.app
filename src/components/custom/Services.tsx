const services = [
  {
    icon: '🪄',
    title: '1. Agent Config Wizard',
    description:
      'Generate high-performance SOUL.md and IDENTITY.md files in seconds. Turn your vision into a structured, autonomous Agent identity effortlessly.',
  },
  {
    icon: '🧩',
    title: '2. Skills Explorer',
    description:
      "Browse and integrate 150+ specialized skills from our global repository. From SEO audits to spatial computing, expand your Agent's reach with zero code.",
  },
  {
    icon: '⚔️',
    title: '3. Prompt Battle Optimizer',
    description:
      'Stress-test your prompts against extreme edge cases. Our Battle-Testing simulation finds vulnerabilities, refines tone, and guarantees instruction adherence.',
  },
  {
    icon: '🛡️',
    title: '4. Zero-Trust Deploy System',
    description:
      'Move from local dev to production VPS in minutes. Our secure server-pull architecture handles the heavy lifting without ever seeing your sensitive credentials.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-40 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-24">
          <div className="max-w-2xl">
            <p className="text-[10px] font-bold text-emerald-500 tracking-[0.4em] uppercase mb-4">
              Infrastructure Pillar
            </p>
            <h2 className="text-5xl md:text-7xl font-heading font-black italic uppercase tracking-tighter leading-[0.9] text-white">
              Drive <span className="text-emerald-400 italic">Unlimited</span>{' '}
              ROI
            </h2>
          </div>
          <p className="mt-4 text-[#666] max-w-sm font-mono text-sm leading-tight uppercase">
            Stop doing manual work. We blueprint specialized AI agents that
            execute complex business logic with industrial precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {services.map((service, idx) => (
            <article
              key={service.title}
              className={`industrial-glass group p-8 border-[#222] transition-all hover:border-emerald-500/50 hover:bg-emerald-500/[0.02] ${
                idx === 0 || idx === 3 ? 'md:col-span-2' : 'md:col-span-2'
              } ${idx % 2 === 0 ? 'bg-[#0d0d0d]' : 'bg-[#080808]'}`}
            >
              <div className="flex justify-between items-start mb-12">
                <div className="text-4xl filter grayscale group-hover:grayscale-0 transition-all duration-500">
                  {service.icon}
                </div>
                <div className="text-[10px] font-mono text-[#333] group-hover:text-emerald-500 transition-colors uppercase font-bold">
                  Module 0{idx + 1}
                </div>
              </div>
              <h3 className="text-2xl font-heading font-black italic uppercase tracking-tighter mb-4 text-white leading-none">
                {service.title.split('. ')[1]}
              </h3>
              <p className="text-sm text-[#555] font-mono uppercase leading-relaxed max-w-sm">
                {service.description}
              </p>

              <div className="mt-12 pt-6 border-t border-[#222] flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest font-black">
                  Ready for Deploy
                </span>
                <span className="text-white text-xl">&rarr;</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
