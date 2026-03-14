import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | AgentOpenClaw",
  description:
    "AgentOpenClaw privacy policy — learn how we collect, use, and protect your personal data.",
};

export default function PrivacyPage() {
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
          Privacy Policy
        </h1>
        <p className="text-sm text-[#666] mb-12">
          Last updated: March 14, 2026
        </p>

        <div className="space-y-8 text-[#ccc] text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-[#f5f5f5] mb-3">
              1. Information We Collect
            </h2>
            <p>We collect information you provide directly to us:</p>
            <ul className="list-disc list-inside space-y-2 mt-3 ml-4">
              <li>
                <strong className="text-[#f5f5f5]">Account data:</strong> Name,
                email address, company name when you register or join our
                waitlist.
              </li>
              <li>
                <strong className="text-[#f5f5f5]">Payment data:</strong>{" "}
                Payment information processed securely through Stripe. We do not
                store credit card numbers on our servers.
              </li>
              <li>
                <strong className="text-[#f5f5f5]">Usage data:</strong> How you
                interact with our platform, agent configurations, and task logs.
              </li>
              <li>
                <strong className="text-[#f5f5f5]">Communications:</strong>{" "}
                Emails and support messages you send us.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#f5f5f5] mb-3">
              2. How We Use Your Information
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Provide, maintain, and improve the Service</li>
              <li>Process transactions and send billing notifications</li>
              <li>Send product updates and marketing communications</li>
              <li>Respond to support requests</li>
              <li>Detect and prevent fraud or abuse</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#f5f5f5] mb-3">
              3. Information Sharing
            </h2>
            <p>We do not sell your personal data. We may share information with:</p>
            <ul className="list-disc list-inside space-y-2 mt-3 ml-4">
              <li>
                <strong className="text-[#f5f5f5]">Service providers:</strong>{" "}
                Third parties that help us operate (e.g., Stripe for payments,
                hosting providers).
              </li>
              <li>
                <strong className="text-[#f5f5f5]">Legal requirements:</strong>{" "}
                When required by law, regulation, or legal process.
              </li>
              <li>
                <strong className="text-[#f5f5f5]">Business transfers:</strong>{" "}
                In connection with a merger, acquisition, or sale of assets.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#f5f5f5] mb-3">
              4. Data Security
            </h2>
            <p>
              We implement industry-standard security measures to protect your
              data, including encryption in transit (TLS) and at rest. However,
              no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#f5f5f5] mb-3">
              5. Data Retention
            </h2>
            <p>
              We retain your personal data for as long as your account is active
              or as needed to provide the Service. Upon account deletion, we
              will remove your data within 30 days, except where retention is
              required by law.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#f5f5f5] mb-3">
              6. Your Rights
            </h2>
            <p>Depending on your jurisdiction, you may have the right to:</p>
            <ul className="list-disc list-inside space-y-2 mt-3 ml-4">
              <li>Access and receive a copy of your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to or restrict processing</li>
              <li>Data portability</li>
              <li>Withdraw consent</li>
            </ul>
            <p className="mt-3">
              To exercise these rights, contact us at{" "}
              <a
                href="mailto:ninglz2073@gmail.com"
                className="text-[#7c3aed] hover:underline"
              >
                ninglz2073@gmail.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#f5f5f5] mb-3">
              7. Cookies
            </h2>
            <p>
              We use essential cookies to maintain session state. We may use
              analytics cookies to understand usage patterns. You can control
              cookie preferences through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#f5f5f5] mb-3">
              8. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We will
              notify you of material changes via email or through the Service.
              The updated policy is effective upon posting.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#f5f5f5] mb-3">
              9. Contact Us
            </h2>
            <p>
              For privacy-related inquiries, contact us at{" "}
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
