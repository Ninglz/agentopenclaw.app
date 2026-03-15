'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as gtag from '@/lib/gtag';
import { LocaleLink as Link } from '@/i18n/navigation';
import { ProBadge } from '@/components/custom/ProBadge';

const DEPLOY_STEPS = [
  { id: 1, name: 'Target VPS', icon: '🌐' },
  { id: 2, name: 'Establish Link', icon: '🔗' },
  { id: 3, name: 'Push Agent', icon: '🚀' },
  { id: 4, name: 'Live Monitor', icon: '📺' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { stiffness: 300, damping: 24 },
  },
};

export default function DeployHelperPage() {
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    ip: '',
    agentName: 'SEO-Optimizer-01',
    connectionToken:
      'CLAW-' + Math.random().toString(36).substring(2, 10).toUpperCase(),
  });

  const [logs, setLogs] = useState<string[]>([]);
  const [connectionStatus, setConnectionStatus] = useState<
    'waiting' | 'signal_received' | 'linking'
  >('waiting');

  const addLog = (msg: string) => {
    setLogs((prev) => [...prev, `[${new Date().toLocaleTimeString()}] ${msg}`]);
  };

  // Step 2: Waiting for server signal simulation
  useEffect(() => {
    if (step === 2 && connectionStatus === 'waiting') {
      const timer = setTimeout(() => {
        setConnectionStatus('signal_received');
        setTimeout(() => {
          setStep(3);
        }, 1500);
      }, 5000); // Wait 5 seconds to simulate user running the command
      return () => clearTimeout(timer);
    }
  }, [step, connectionStatus]);

  const startLinking = () => {
    if (!formData.ip) return;
    setStep(2);
    setConnectionStatus('waiting');
  };

  const startDeployment = () => {
    setStep(4);
    setIsProcessing(true);
    setLogs([]);
    const sequence = [
      'Target server signal confirmed.',
      'Syncing deployment manifest via secure relay...',
      'Server | [ACTION] Pulling image: agent-openclaw-seo:latest',
      'Server | [INFO] Image pull complete.',
      "Server | [ACTION] Creating container 'claw-runner'...",
      'Server | [INFO] Applying security context...',
      "Server | [SUCCESS] Container 'claw-runner' is UP.",
      'Streaming output...',
      'claw-runner | [BOOT] AgentOpenClaw v2.4 initialized.',
      'claw-runner | [INFO] Agent identity verified via token.',
      'claw-runner | [INFO] Scanning targets: https://example.com',
      'claw-runner | [LOG] First optimization task queued.',
    ];

    sequence.forEach((msg, i) => {
      setTimeout(() => {
        addLog(msg);
        if (i === sequence.length - 1) setIsProcessing(false);
      }, i * 1000);
    });

    gtag.event({
      action: 'deploy_agent_zerotrust',
      category: 'tool',
      label: formData.agentName,
    });
  };

  return (
    <section className="relative min-h-screen pt-24 pb-20 bg-[#020202] text-white overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[200px] pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-emerald-500/30 bg-emerald-500/5 text-[10px] uppercase font-mono text-emerald-400 mb-6 tracking-widest">
              <span className="w-2 h-2 bg-emerald-500 animate-pulse rounded-full" />
              Secure Prod-Relay Mode (Zero-Trust)
            </div>
            <h1 className="text-5xl sm:text-7xl font-heading font-black tracking-tighter leading-[0.9] mb-8 italic uppercase">
              Deploy <span className="text-emerald-400 italic">Helper</span>
            </h1>
            <p className="text-xl text-[#666] font-mono leading-tight max-w-xl">
              We never ask for credentials. Deploy with industrial-grade
              confidence using our secure server-pull architecture.
            </p>
          </div>

          <div className="flex gap-4 mb-2">
            {DEPLOY_STEPS.map((s) => (
              <div key={s.id} className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 border flex items-center justify-center font-mono text-xs transition-all ${step === s.id ? 'border-emerald-500 bg-emerald-500 text-black shadow-[0_0_20px_rgba(16,185,129,0.3)]' : step > s.id ? 'border-emerald-500/50 bg-emerald-500/10 text-emerald-400' : 'border-[#222] bg-[#111] text-[#444]'}`}
                >
                  {step > s.id ? '✓' : s.id.toString().padStart(2, '0')}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="industrial-glass rounded-xl overflow-hidden border-[#222]">
          <div className="p-1 border-b border-[#222] bg-[#0d0d0d] flex items-center justify-between px-6 py-3">
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-[#333]" />
              <div className="w-2 h-2 rounded-full bg-[#333]" />
              <div className="w-2 h-2 rounded-full bg-[#333]" />
            </div>
            <div className="text-[10px] uppercase font-mono tracking-widest text-[#555]">
              {step === 1
                ? 'Auth Verification'
                : step === 2
                  ? 'Tunneling Link'
                  : step === 3
                    ? 'Manifest Delivery'
                    : 'Telemetry Monitor'}
            </div>
            <div className="w-10" />
          </div>

          <AnimatePresence mode="wait">
            {/* STEP 1: DEFINE TARGET */}
            {step === 1 && (
              <motion.div
                key="step1"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="p-8 lg:p-12"
              >
                <div className="max-w-2xl space-y-12">
                  <div className="space-y-4">
                    <h3 className="text-3xl font-heading font-black italic uppercase tracking-tighter">
                      Target Identification
                    </h3>
                    <p className="text-sm text-[#666] font-mono leading-relaxed">
                      Enter the IP address of the target VPS. The system will
                      generate a one-time secure link command. No SSH
                      credentials or private keys are transmitted.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <label className="text-[10px] uppercase font-bold text-[#444] tracking-widest block">
                      Remote Endpoint IP
                    </label>
                    <input
                      type="text"
                      placeholder="IP_ADDRESS &gt;"
                      value={formData.ip}
                      onChange={(e) =>
                        setFormData({ ...formData, ip: e.target.value })
                      }
                      className="w-full bg-black border border-[#222] p-8 font-mono text-xl text-emerald-400 focus:outline-none focus:border-emerald-500 transition-colors uppercase"
                    />
                  </div>

                  <div className="pt-8 border-t border-[#222]">
                    <button
                      onClick={startLinking}
                      disabled={!formData.ip}
                      className="px-12 py-6 bg-emerald-500 text-black font-black uppercase italic tracking-tighter hover:bg-emerald-400 transition-all disabled:opacity-30 flex items-center gap-4"
                    >
                      Establish Secure Link &rarr;
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 2: ESTABLISH LINK */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="p-8 lg:p-12"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                  <div className="lg:col-span-7 space-y-12">
                    <div className="space-y-4">
                      <h3 className="text-3xl font-heading font-black italic uppercase tracking-tighter">
                        Secure Link Initialization
                      </h3>
                      <p className="text-sm text-[#666] font-mono leading-relaxed">
                        Execute the following automated setup script on your
                        target server. This initiates a local pull manifest.
                      </p>
                    </div>

                    <div className="relative group">
                      <div className="absolute -inset-1 bg-emerald-500/20 rounded-sm blur opacity-50"></div>
                      <div className="relative bg-black border border-emerald-500/30 p-8 font-mono text-xs leading-relaxed overflow-x-auto">
                        <span className="text-emerald-500">curl</span> -sSL
                        https://agentopenclaw.app/setup.sh |{' '}
                        <span className="text-[#666]">bash -s -- --token</span>{' '}
                        <span className="text-white bg-emerald-500/20 px-1">
                          {formData.connectionToken}
                        </span>
                        <button className="absolute top-6 right-6 px-4 py-2 bg-[#111] border border-[#222] text-[10px] uppercase font-bold hover:bg-emerald-500 hover:text-black transition-colors">
                          Copy Script
                        </button>
                      </div>
                    </div>

                    <div className="p-6 border border-emerald-500/20 bg-emerald-500/5 flex items-center gap-6">
                      <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                      <div>
                        <p className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest font-mono">
                          {connectionStatus === 'waiting'
                            ? 'Awaiting Remote Acknowledgement...'
                            : 'Handshake Successful'}
                        </p>
                        <p className="text-[11px] text-[#666] font-mono uppercase mt-1">
                          {connectionStatus === 'waiting'
                            ? `Node [${formData.ip}] must check in via secure relay.`
                            : 'Encrypted tunnel active. Loading manifest v2.4...'}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-5 p-8 border border-[#222] bg-[#0d0d0d] space-y-8">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 border border-emerald-500/50 flex items-center justify-center text-emerald-500">
                        🛡️
                      </div>
                      <h4 className="font-heading font-black italic uppercase tracking-tighter text-white">
                        Trust Protocol
                      </h4>
                    </div>
                    <ul className="space-y-4 font-mono text-[10px] text-[#444] uppercase tracking-widest">
                      <li className="flex gap-4">
                        <span className="text-emerald-500">✓</span> No Private
                        Keys Required
                      </li>
                      <li className="flex gap-4">
                        <span className="text-emerald-500">✓</span> Enforced
                        mTLS Tunneling
                      </li>
                      <li className="flex gap-4">
                        <span className="text-emerald-500">✓</span> Immutable
                        Container Context
                      </li>
                      <li className="flex gap-4">
                        <span className="text-emerald-500">✓</span> One-Time
                        Setup Token
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 3: PUSH AGENT */}
            {step === 3 && (
              <motion.div
                key="step3"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="p-8 lg:p-12 space-y-12"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                  <div className="lg:col-span-8 space-y-12">
                    <div className="space-y-4">
                      <h3 className="text-3xl font-heading font-black italic uppercase tracking-tighter">
                        Execution Manifest
                      </h3>
                      <p className="text-sm text-[#666] font-mono">
                        Review the deployment parameters before initiating the
                        server pull.
                      </p>
                    </div>

                    <div className="space-y-8">
                      <div className="p-8 border border-emerald-500/30 bg-emerald-500/5 flex items-center justify-between">
                        <div>
                          <div className="text-[10px] text-emerald-500 font-mono uppercase tracking-widest mb-1">
                            Active Identity
                          </div>
                          <div className="font-heading font-black italic text-2xl uppercase tracking-tighter text-white">
                            {formData.agentName}
                          </div>
                        </div>
                        <button className="text-[10px] font-mono text-[#444] uppercase hover:text-white transition-colors underline">
                          Modify_Static_Ref &gt;
                        </button>
                      </div>

                      <div className="space-y-4">
                        <label className="text-[10px] uppercase font-bold text-[#444] tracking-widest block">
                          Environment Variables
                        </label>
                        <div className="p-8 border border-[#222] bg-black font-mono text-[11px] space-y-3">
                          <div className="flex justify-between">
                            <span className="text-[#333]">
                              SECURE_RELAY_ID:
                            </span>
                            <span className="text-emerald-500">
                              {formData.connectionToken}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[#333]">LOG_LEVEL:</span>
                            <span className="text-emerald-500">
                              INDUSTRIAL_DEBUG
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[#333]">AUTH_MODE:</span>
                            <span className="text-emerald-500">
                              ZERO_TRUST_PULL
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-4 space-y-6">
                    <div className="p-8 border border-[#222] bg-[#0d0d0d] space-y-8">
                      <div className="text-[10px] font-mono text-[#444] uppercase tracking-widest">
                        Node Diagnostic
                      </div>
                      <div className="space-y-4">
                        <div className="flex justify-between text-xs font-mono uppercase">
                          <span className="text-[#333]">Target:</span>
                          <span className="text-white">{formData.ip}</span>
                        </div>
                        <div className="flex justify-between text-xs font-mono uppercase">
                          <span className="text-[#333]">Link:</span>
                          <span className="text-emerald-400">Stable</span>
                        </div>
                      </div>
                      <div className="border-t border-[#222] pt-8">
                        <button
                          onClick={startDeployment}
                          className="w-full py-6 bg-primary text-black font-black uppercase italic tracking-tighter hover:bg-primary/90 transition-all flex items-center justify-center gap-3"
                        >
                          Push Manifest &rarr;
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 4: MONITOR */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-8 lg:p-12 space-y-8"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-3 h-3 rounded-full ${isProcessing ? 'bg-amber-500 animate-pulse' : 'bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]'}`}
                    />
                    <h3 className="font-heading font-black italic uppercase tracking-tighter text-white">
                      {isProcessing
                        ? 'Transmission Active'
                        : 'Production Ready'}
                    </h3>
                  </div>
                  <ProBadge />
                </div>

                <div className="bg-black border border-[#222] p-8 min-h-[450px] font-mono text-[11px] leading-relaxed overflow-y-auto max-h-[600px]">
                  {logs.map((log, i) => (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      key={i}
                      className={`mb-1 ${log.includes('SUCCESS') || log.includes('UP') ? 'text-emerald-400 font-bold' : 'text-[#444]'}`}
                    >
                      <span className="opacity-20 mr-4 font-normal">
                        [{i.toString().padStart(3, '0')}]
                      </span>{' '}
                      {log}
                    </motion.div>
                  ))}
                  {isProcessing && (
                    <div className="flex items-center gap-4 mt-6">
                      <span className="w-1.5 h-4 bg-emerald-500 animate-pulse" />
                      <span className="text-[#666] animate-pulse italic uppercase text-[10px] tracking-widest">
                        Ingesting node telemetry...
                      </span>
                    </div>
                  )}
                </div>

                {!isProcessing && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-10 border border-emerald-500/30 bg-emerald-500/5 flex flex-col md:flex-row items-center justify-between gap-12"
                  >
                    <div className="flex items-center gap-8">
                      <div className="w-14 h-14 border-4 border-emerald-500 text-emerald-500 flex items-center justify-center text-3xl font-black italic tracking-tighter">
                        OK
                      </div>
                      <div>
                        <p className="text-emerald-400 font-heading font-black italic text-3xl uppercase tracking-tighter">
                          Node CLAW-SEO-01 Active
                        </p>
                        <p className="text-[#666] text-[10px] font-mono uppercase tracking-[0.2em] mt-2 italic">
                          Status: Secure Persistence | Mode: Production-Scale
                        </p>
                      </div>
                    </div>
                    <Link
                      href="/"
                      className="px-12 py-5 bg-white text-black font-black uppercase italic tracking-tighter hover:bg-gray-200 transition-colors"
                    >
                      Return To Command &rarr;
                    </Link>
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Security Summary Footer */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-16 text-[#444] font-mono text-[10px] uppercase tracking-widest leading-loose">
          <div className="space-y-6">
            <h5 className="text-white font-bold italic">Node Sovereignty</h5>
            <p>
              Under the Zero-Trust Pull model, codebase manifest binary blobs
              never transition through third-party storage. All source
              instantiation is handled by the authenticated node pull mechanism.
            </p>
          </div>
          <div className="space-y-6">
            <h5 className="text-white font-bold italic">mTLS Encryption</h5>
            <p>
              Bidirectional telemetry is tunneled through AES-256-GCM encrypted
              mTLS sockets. Every deployment instance maintains an isolated
              session context verified by high-entropy setup tokens.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
