import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#1a1a1a] py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Link
              href="/"
              className="text-sm font-semibold text-[#f5f5f5]"
            >
              AgentOpenClaw
            </Link>
            <nav
              className="flex flex-wrap items-center gap-4"
              aria-label="Footer navigation"
            >
              <a
                href="#services"
                className="text-xs text-[#666] hover:text-[#a3a3a3] transition-colors"
              >
                Services
              </a>
              <a
                href="#pricing"
                className="text-xs text-[#666] hover:text-[#a3a3a3] transition-colors"
              >
                Pricing
              </a>
              <a
                href="#waitlist"
                className="text-xs text-[#666] hover:text-[#a3a3a3] transition-colors"
              >
                Waitlist
              </a>
              <Link
                href="/refund-policy"
                className="text-xs text-[#666] hover:text-[#a3a3a3] transition-colors"
              >
                Refund Policy
              </Link>
              <Link
                href="/terms"
                className="text-xs text-[#666] hover:text-[#a3a3a3] transition-colors"
              >
                Terms
              </Link>
              <Link
                href="/privacy"
                className="text-xs text-[#666] hover:text-[#a3a3a3] transition-colors"
              >
                Privacy
              </Link>
              <a
                href="mailto:ninglz2073@gmail.com"
                className="text-xs text-[#666] hover:text-[#a3a3a3] transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>
          <p className="text-xs text-[#444]">
            © 2026 AgentOpenClaw. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
