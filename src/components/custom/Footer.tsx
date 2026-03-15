import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start justify-between gap-12">
          <div className="space-y-6">
            <Link
              href="/"
              className="text-sm font-heading font-black italic uppercase tracking-tighter text-white"
            >
              AgentOpenClaw / <span className="text-primary">Vanguard</span>
            </Link>
            <p className="text-[10px] font-mono text-[#444] uppercase tracking-widest leading-relaxed max-w-xs">
              Autonomous Intelligence Foundry. <br />
              Hardened for high-fidelity deployment.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 sm:gap-24">
            <div className="space-y-4">
              <h4 className="text-[10px] font-mono font-black text-white/40 uppercase tracking-[0.3em]">
                System
              </h4>
              <nav className="flex flex-col gap-3">
                <a
                  href="#services"
                  className="text-[10px] font-mono font-bold text-[#666] hover:text-primary uppercase tracking-[0.2em] transition-colors duration-300"
                >
                  / Protocols
                </a>
                <a
                  href="#pricing"
                  className="text-[10px] font-mono font-bold text-[#666] hover:text-primary uppercase tracking-[0.2em] transition-colors duration-300"
                >
                  / Allocation
                </a>
                <a
                  href="#waitlist"
                  className="text-[10px] font-mono font-bold text-[#666] hover:text-primary uppercase tracking-[0.2em] transition-colors duration-300"
                >
                  / Genesis
                </a>
              </nav>
            </div>

            <div className="space-y-4">
              <h4 className="text-[10px] font-mono font-black text-white/40 uppercase tracking-[0.3em]">
                Legal
              </h4>
              <nav className="flex flex-col gap-3">
                <Link
                  href="/terms"
                  className="text-[10px] font-mono font-bold text-[#666] hover:text-white uppercase tracking-[0.2em] transition-colors"
                >
                  / Terms
                </Link>
                <Link
                  href="/privacy"
                  className="text-[10px] font-mono font-bold text-[#666] hover:text-white uppercase tracking-[0.2em] transition-colors"
                >
                  / Privacy
                </Link>
                <Link
                  href="/refund-policy"
                  className="text-[10px] font-mono font-bold text-[#666] hover:text-white uppercase tracking-[0.2em] transition-colors"
                >
                  / Refunds
                </Link>
              </nav>
            </div>

            <div className="space-y-4">
              <h4 className="text-[10px] font-mono font-black text-white/40 uppercase tracking-[0.3em]">
                Connect
              </h4>
              <nav className="flex flex-col gap-3">
                <a
                  href="mailto:ninglz2073@gmail.com"
                  className="text-[10px] font-mono font-bold text-[#666] hover:text-white uppercase tracking-[0.2em] transition-colors"
                >
                  / Terminal
                </a>
              </nav>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] font-mono text-[#333] uppercase tracking-[0.2em]">
            © 2026 Foundry_Protocol. All rights reserved.
          </p>
          <div className="text-[10px] font-mono text-[#333] uppercase tracking-[0.2em] flex items-center gap-4">
            <span>U_TIME: 1773564597</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/20 animate-pulse" />
          </div>
        </div>
      </div>
    </footer>
  );
}
