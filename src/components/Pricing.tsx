const plans = [
  {
    name: "Starter",
    price: "$29.9",
    period: "/mo",
    description: "Perfect for small businesses getting started with AI automation.",
    features: [
      "1 AI Agent",
      "Up to 1,000 tasks/month",
      "Email support",
      "Basic analytics dashboard",
      "Standard integrations",
    ],
    cta: "Join Waitlist",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$59.9",
    period: "/mo",
    description: "For growing teams that need multiple agents and advanced features.",
    features: [
      "Up to 5 AI Agents",
      "Up to 10,000 tasks/month",
      "Priority support",
      "Advanced analytics & reporting",
      "Custom integrations",
      "Dedicated account manager",
    ],
    cta: "Join Waitlist",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Tailored solutions for large organizations with complex needs.",
    features: [
      "Unlimited AI Agents",
      "Unlimited tasks",
      "24/7 dedicated support",
      "Custom agent development",
      "SLA guarantees",
      "On-premise deployment option",
      "White-label available",
    ],
    cta: "Contact Us",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-px bg-gradient-to-r from-transparent via-[#2a2a2a] to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-[#7c3aed] tracking-widest uppercase mb-3">
            Pricing
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-[#a3a3a3] max-w-xl mx-auto">
            Choose the plan that fits your needs. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-xl border p-8 transition-all flex flex-col h-full ${
                plan.highlighted
                  ? "border-[#7c3aed] bg-[#7c3aed]/5 scale-[1.02] shadow-xl shadow-[#7c3aed]/10"
                  : "border-[#2a2a2a] bg-[#1a1a1a]/50"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-medium bg-[#7c3aed] text-white rounded-full">
                  Most Popular
                </div>
              )}

              <h3 className="text-xl font-semibold">{plan.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.period && (
                  <span className="text-[#a3a3a3] text-sm">{plan.period}</span>
                )}
              </div>
              <p className="mt-3 text-sm text-[#a3a3a3]">{plan.description}</p>

              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-[#ccc]"
                  >
                    <svg
                      className="w-4 h-4 text-[#7c3aed] shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#waitlist"
                className={`mt-auto block w-full text-center px-6 py-3 text-sm font-medium rounded-lg transition-all ${
                  plan.highlighted
                    ? "bg-[#7c3aed] text-white hover:bg-[#6d28d9] hover:shadow-lg hover:shadow-[#7c3aed]/20"
                    : "bg-[#2a2a2a] text-[#f5f5f5] hover:bg-[#333]"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-[#666]">
          All prices in USD. Billed monthly. Cancel anytime.{" "}
          <a href="/refund-policy" className="text-[#7c3aed] hover:underline">
            Refund policy
          </a>{" "}
          applies.
        </p>
      </div>
    </section>
  );
}
