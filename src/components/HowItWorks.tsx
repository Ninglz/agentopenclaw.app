const steps = [
  {
    number: "01",
    title: "Tell Us Your Goal",
    description:
      "Share your business objectives and the tasks you want automated. We'll identify the right agent strategy.",
  },
  {
    number: "02",
    title: "We Configure Your Agent",
    description:
      "Our team builds and fine-tunes a custom AI agent using OpenClaw, tailored to your specific needs.",
  },
  {
    number: "03",
    title: "Agent Executes & Delivers",
    description:
      "Your agent runs autonomously, delivering results while you focus on what matters most.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 md:py-32 relative">
      {/* Divider line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-px bg-gradient-to-r from-transparent via-[#2a2a2a] to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-[#7c3aed] tracking-widest uppercase mb-3">
            Process
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            How It Works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-px bg-gradient-to-r from-[#7c3aed]/40 via-[#7c3aed]/20 to-[#7c3aed]/40" />

          {steps.map((step) => (
            <div key={step.number} className="relative text-center group">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-[#7c3aed]/30 bg-[#7c3aed]/10 text-[#7c3aed] font-mono font-bold text-lg mb-6 group-hover:bg-[#7c3aed]/20 group-hover:border-[#7c3aed]/50 transition-all">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-sm text-[#a3a3a3] leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
