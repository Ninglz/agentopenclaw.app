function CoreMatrix() {
  return (
    <div className="relative w-full max-w-5xl mx-auto mt-20 animate-fade-in-up-delay-3" aria-hidden="true">
      {/* Central Hub Glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px]" />
      
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 px-4 sm:px-0">
        {[
          { label: 'Neural_Core', value: 'SYSTM_ACTIVE', detail: '0.002ms Latency' },
          { label: 'mtls_tunnel', value: 'ENCRYPTED', detail: 'Zero-Trust Protocol' },
          { label: 'agent_logic', value: 'OPTIMIZED', detail: '99.8% Efficiency' },
          { label: 'relay_node', value: 'GLOBAL_19', detail: 'Production Tier' }
        ].map((item, i) => (
          <div key={i} className="group relative p-6 bg-background/50 backdrop-blur-sm border border-border/50 hover:border-emerald-500/50 transition-all duration-500 overflow-hidden">
            <div className="absolute inset-x-0 bottom-0 h-0.5 bg-emerald-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-4 group-hover:text-emerald-500 transition-colors">{item.label}</p>
            <h3 className="text-lg font-heading font-black italic uppercase tracking-tighter text-foreground mb-1">{item.value}</h3>
            <p className="text-[9px] font-mono text-[#444] uppercase tracking-tight">{item.detail}</p>
          </div>
        ))}
      </div>
      
      {/* Decorative Matrix Lines */}
      <div className="hidden lg:block absolute -top-10 left-1/4 w-px h-20 bg-gradient-to-b from-transparent via-emerald-500/20 to-transparent" />
      <div className="hidden lg:block absolute -bottom-10 right-1/4 w-px h-20 bg-gradient-to-b from-transparent via-emerald-500/20 to-transparent" />
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-24 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-emerald-500/30 bg-emerald-500/5 text-[10px] uppercase font-mono text-emerald-500 mb-12 tracking-[0.3em]">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Elite Deployment Protocol — V3.0 Active
          </div>
        </div>

        <h1
          className="text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-heading font-black italic uppercase tracking-tighter leading-[0.8] mb-10 text-foreground"
          style={{ animationDelay: '100ms' }}
        >
          Scale Your <br />
          <span className="text-emerald-500">Empire</span>
        </h1>

        <p
          className="mt-6 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed font-mono uppercase tracking-widest"
          style={{ animationDelay: '200ms' }}
        >
          The production-grade suite for{' '}
          <span className="text-foreground font-bold">autonomous revenue-engines</span>.{' '}
          <br className="hidden md:block" />
          High-density configuration, battle-testing, and zero-trust
          distribution.
        </p>

        <div
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 px-6 md:px-0"
          style={{ animationDelay: '300ms' }}
        >
          <a
             href="/auth/register"
             className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-14 py-6 text-sm font-black uppercase italic tracking-tighter bg-emerald-500 text-black shadow-[0_40px_100px_rgba(16,185,129,0.2)] hover:bg-emerald-400 hover:shadow-[0_40px_120px_rgba(16,185,129,0.4)] transition-all transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Deploy_Unit_Now_ &rarr;
          </a>
          <a
            href="/#pricing"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-12 py-6 text-sm font-black uppercase italic tracking-tighter border border-border text-muted-foreground hover:bg-muted transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            Tiered Solutions
          </a>
        </div>

        <CoreMatrix />
      </div>
    </section>
  );
}
