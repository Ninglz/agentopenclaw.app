import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | AgentOpenClaw",
  description:
    "AgentOpenClaw terms of service — read the terms governing the use of our AI agent platform and services.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5]">
      <nav className="border-b border-[#1a1a1a]">
        <div className="max-w-3xl mx-auto px-6 h-16 flex items-center">
          <Link
            href="/"
            className="text-lg font-bold tracking-tight hover:text-[#7c3aed] transition-colors"
          >
            AgentOpenClaw
          </Link>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
          Terms of Service
        </h1>
        <p className="text-sm text-[#666] mb-12">
          Last updated: March 14, 2026
        </p>

        <div className="space-y-8 text-[#ccc] text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-[#f5f5f5] mb-3">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using AgentOpenClaw (&quot;the Service&quot;),
              operated by AgentOpenClaw (&quot;we,&quot; &quot;us,&quot; or
              &quot;our&quot;), you agree to be bound by these Terms of Service.
              If you do not agree, you may not use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#f5f5f5] mb-3">
              2. Description of Service
            </h2>
            <p>
              AgentOpenClaw provides AI agent services built on the OpenClaw
              framework. Our agents automate business tasks including SEO
              optimization, content creation, research, social media management,
              email automation, and custom workflows.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#f5f5f5] mb-3">
              3. Account Registration
            </h2>
            <p>
              You must provide accurate, complete information when creating an
              account. You are responsible for maintaining the confidentiality
              of your account credentials and for all activities under your
              account.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#f5f5f5] mb-3">
              4. Subscription & Billing
            </h2>
            <p>
              Paid features are billed on a recurring monthly basis through
              Stripe. By subscribing, you authorize us to charge your payment
              method on each billing cycle. All fees are quoted in USD. You may
              cancel at any time; your subscription remains active until the
              end of the current billing period.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#f5f5f5] mb-3">
              5. Acceptable Use
            </h2>
            <p>You agree not to:</p>
            <ul className="list-disc list-inside space-y-2 mt-3 ml-4">
              <li>Use the Service for any unlawful or fraudulent purpose</li>
              <li>
                Attempt to reverse-engineer, decompile, or extract source code
              </li>
              <li>
                Interfere with or disrupt the Service or its infrastructure
              </li>
              <li>
                Resell or redistribute the Service without prior written consent
              </li>
              <li>Violate any applicable law or regulation</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#f5f5f5] mb-3">
              6. Intellectual Property
            </h2>
            <p>
              All content, features, and functionality of the Service are owned
              by AgentOpenClaw and are protected by copyright, trademark, and
              other intellectual property laws. You retain ownership of any data
              you input into the Service.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#f5f5f5] mb-3">
              7. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by law, AgentOpenClaw shall not be
              liable for any indirect, incidental, special, consequential, or
              punitive damages, or any loss of profits or revenue, whether
              incurred directly or indirectly. Our total liability shall not
              exceed the amount you paid us in the 12 months preceding the
              claim.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#f5f5f5] mb-3">
              8. Disclaimer of Warranties
            </h2>
            <p>
              The Service is provided &quot;as is&quot; and &quot;as
              available&quot; without warranties of any kind, whether express or
              implied. We do not guarantee uninterrupted, error-free, or secure
              access to the Service.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#f5f5f5] mb-3">
              9. Termination
            </h2>
            <p>
              We may suspend or terminate your access at our discretion if you
              violate these Terms. Upon termination, your right to use the
              Service ceases immediately. Sections that by nature should survive
              termination will remain in effect.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#f5f5f5] mb-3">
              10. Changes to Terms
            </h2>
            <p>
              We may revise these Terms at any time. Material changes will be
              communicated via email or through the Service. Continued use after
              changes constitutes acceptance.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#f5f5f5] mb-3">
              11. Contact
            </h2>
            <p>
              For questions about these Terms, contact us at{" "}
              <a
                href="mailto:ninglz2073@gmail.com"
                className="text-[#7c3aed] hover:underline"
              >
                ninglz2073@gmail.com
              </a>
              .
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-[#1a1a1a]">
          <Link
            href="/"
            className="text-sm text-[#7c3aed] hover:underline"
          >
            ← Back to home
          </Link>
        </div>
      </main>
    </div>
  );
}
