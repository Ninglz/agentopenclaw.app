const services = [
  {
    icon: "🔍",
    title: "1. Autonomous SEO Optimization",
    description:
      "Increase organic traffic by up to 240% with an agent that continuously runs technical audits, uncovers low-KD keywords, and implements on-page schema markup 24/7.",
  },
  {
    icon: "✍️",
    title: "2. At-Scale Content Generation",
    description:
      "Cut content creation time by 85%. Our AI generates, fact-checks, and publishes SEO-optimized articles, maintaining your specific brand voice and EEAT guidelines.",
  },
  {
    icon: "📊",
    title: "3. Deep-Dive Market Research",
    description:
      "Process 10,000+ data points per hour. The research agent continuously scrapes competitors, monitors pricing changes, and identifies emerging market trends automatically.",
  },
  {
    icon: "💬",
    title: "4. Omnichannel Social Engagement",
    description:
      "Never miss a brand mention. This agent monitors Reddit, Twitter, and niche forums, instantly drafting contextual replies to surface your product to high-intent leads.",
  },
  {
    icon: "📧",
    title: "5. Intelligent Email Outreach",
    description:
      "Achieve 3x higher reply rates. Our email agent researches prospects, writes hyper-personalized cold emails, and manages follow-up sequences based on recipient behavior.",
  },
  {
    icon: "⚙️",
    title: "6. Custom Workflow Automation",
    description:
      "Replace tedious manual tasks with bespoke AI agents built on OpenClaw. We map your specific business logic into autonomous systems that integrate directly with your tech stack.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-[#7c3aed] tracking-widest uppercase mb-3">
            Core Capabilities
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            How OpenClaw Agents Drive ROI
          </h2>
          <p className="mt-4 text-[#a3a3a3] max-w-xl mx-auto">
            Stop doing manual work. We configure specialized AI agents that execute complex business functions with higher speed and accuracy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <article
              key={service.title}
              className="card-hover group p-6 rounded-xl border border-[#2a2a2a] bg-[#1a1a1a]/50 backdrop-blur-sm"
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">{service.title}</h3>
              <p className="text-sm text-[#a3a3a3] leading-relaxed">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
