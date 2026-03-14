import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Refund Policy | AgentOpenClaw",
  description:
    "AgentOpenClaw refund policy — learn about our cancellation, refund, and billing practices for AI agent services.",
};

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5]">
      {/* Nav */}
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
          Refund Policy
        </h1>
        <p className="text-sm text-[#666] mb-12">
          Last updated: March 14, 2026
        </p>

        <div className="prose-custom space-y-8 text-[#ccc] text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-[#f5f5f5] mb-3">
              1. Overview
            </h2>
            <p>
              At AgentOpenClaw, we want you to be completely satisfied with our
              AI agent services. This refund policy outlines the terms under
              which refunds may be issued for our subscription plans.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#f5f5f5] mb-3">
              2. Free Trial Period
            </h2>
            <p>
              All new subscriptions include a 14-day free trial. During this
              period, you will not be charged. You may cancel at any time during
              the trial without any financial obligation. No refund is necessary
              for trial cancellations as no payment is collected.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#f5f5f5] mb-3">
              3. Subscription Cancellation
            </h2>
            <p>
              You may cancel your subscription at any time through your account
              dashboard or by contacting our support team. Upon cancellation:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-3 ml-4">
              <li>
                Your subscription will remain active until the end of the
                current billing period.
              </li>
              <li>
                You will not be charged for subsequent billing periods.
              </li>
              <li>
                No partial refunds are issued for unused time within a billing
                period.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#f5f5f5] mb-3">
              4. Refund Eligibility
            </h2>
            <p>
              Refunds may be granted in the following circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-3 ml-4">
              <li>
                <strong className="text-[#f5f5f5]">Service outage:</strong> If
                our platform experiences significant downtime (more than 24
                consecutive hours) during your billing period, you are eligible
                for a prorated refund.
              </li>
              <li>
                <strong className="text-[#f5f5f5]">Billing error:</strong> If
                you were charged incorrectly or billed after cancellation, we
                will issue a full refund for the erroneous charge.
              </li>
              <li>
                <strong className="text-[#f5f5f5]">
                  First billing cycle dissatisfaction:
                </strong>{" "}
                If you are unsatisfied with the service within the first 7 days
                of your first paid billing cycle, you may request a full refund.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#f5f5f5] mb-3">
              5. Non-Refundable Items
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Custom agent development fees for Enterprise plans</li>
              <li>
                Setup or onboarding fees, if applicable
              </li>
              <li>Periods beyond the first 7 days of a billing cycle</li>
              <li>
                Third-party integration costs incurred on your behalf
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#f5f5f5] mb-3">
              6. How to Request a Refund
            </h2>
            <p>
              To request a refund, please contact us at{" "}
              <a
                href="mailto:ninglz2073@gmail.com"
                className="text-[#7c3aed] hover:underline"
              >
                ninglz2073@gmail.com
              </a>{" "}
              with:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-3 ml-4">
              <li>Your account email address</li>
              <li>The reason for your refund request</li>
              <li>The billing period in question</li>
            </ul>
            <p className="mt-3">
              We aim to process all refund requests within 5–10 business days.
              Approved refunds will be credited back to your original payment
              method.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#f5f5f5] mb-3">
              7. Changes to This Policy
            </h2>
            <p>
              We reserve the right to update this refund policy at any time.
              Changes will be posted on this page with an updated effective
              date. Continued use of our services after changes constitutes
              acceptance of the revised policy.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#f5f5f5] mb-3">
              8. Contact Us
            </h2>
            <p>
              If you have questions about this refund policy, please contact us
              at{" "}
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
