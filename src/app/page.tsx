import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Waitlist from "@/components/Waitlist";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://agentopenclaw.app/#organization",
      name: "AgentOpenClaw",
      url: "https://agentopenclaw.app",
      logo: {
        "@type": "ImageObject",
        url: "https://agentopenclaw.app/logo.png",
      },
      description:
        "AgentOpenClaw provides custom AI agent services built on OpenClaw — including SEO agents, content agents, research agents and automation.",
      contactPoint: {
        "@type": "ContactPoint",
        email: "ninglz2073@gmail.com",
        contactType: "customer support",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://agentopenclaw.app/#website",
      url: "https://agentopenclaw.app",
      name: "AgentOpenClaw",
      publisher: { "@id": "https://agentopenclaw.app/#organization" },
    },
    {
      "@type": "WebPage",
      "@id": "https://agentopenclaw.app/#webpage",
      url: "https://agentopenclaw.app",
      name: "Agent OpenClaw Services | AI-Powered Agent Solutions",
      description:
        "AgentOpenClaw provides custom AI agent services built on OpenClaw — including SEO agents, content agents, research agents and automation. Join the waitlist today.",
      isPartOf: { "@id": "https://agentopenclaw.app/#website" },
      about: { "@id": "https://agentopenclaw.app/#organization" },
      datePublished: "2026-03-14",
      dateModified: "2026-03-14",
    },
    {
      "@type": "SoftwareApplication",
      name: "AgentOpenClaw",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Custom AI agent platform that designs, deploys, and manages AI agents for SEO, content creation, research, email automation, and more.",
      offers: {
        "@type": "AggregateOffer",
        lowPrice: "299",
        highPrice: "799",
        priceCurrency: "USD",
        offerCount: "3",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is AgentOpenClaw?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AgentOpenClaw is an AI agent services platform built on OpenClaw. We design, configure, and deploy custom AI agents that automate business-critical tasks like SEO, content creation, research, and more.",
          },
        },
        {
          "@type": "Question",
          name: "How do OpenClaw agent services work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You tell us your business goals, and our team configures a custom AI agent using the OpenClaw framework. The agent runs autonomously, executing tasks and delivering measurable results — no technical expertise required on your end.",
          },
        },
        {
          "@type": "Question",
          name: "What types of AI agents can you build?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We offer SEO agents, content agents, research agents, social media agents, email automation agents, and fully custom agents. Each is tailored to your specific workflows and objectives.",
          },
        },
        {
          "@type": "Question",
          name: "How much do AI agent services cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Plans start at $299/month for a single AI agent. Our Pro plan at $799/month includes up to 5 agents. Enterprise pricing is custom. Early waitlist members get locked-in pricing and priority access.",
          },
        },
        {
          "@type": "Question",
          name: "Can I integrate an OpenClaw agent with my existing tools?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Our agents are designed to integrate with popular platforms and APIs. During onboarding, we configure your agent to work seamlessly with your existing tech stack.",
          },
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <Pricing />
        <Waitlist />
        <FAQ />
      </main>
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
}
