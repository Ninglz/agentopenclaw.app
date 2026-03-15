'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as gtag from '@/lib/gtag';
import { LocaleLink as Link } from '@/i18n/navigation';
import { ProBadge } from '@/components/custom/ProBadge';
import { useRouter } from 'next/navigation';

const AGENT_TYPES = [
  {
    id: 'seo',
    name: 'SEO Optimizer',
    icon: '🔍',
    isPro: false,
    description: 'Master search rankings with precision.',
  },
  {
    id: 'writer',
    name: 'Content Writer',
    icon: '✍️',
    isPro: false,
    description: 'Eloquence at the speed of thought.',
  },
  {
    id: 'dev',
    name: 'Coding Assistant',
    icon: '💻',
    isPro: false,
    description: 'Your architectural co-pilot.',
  },
  {
    id: 'support',
    name: 'Customer Support',
    icon: '🎧',
    isPro: true,
    description: 'Empathetic, scalable resolutions.',
  },
  {
    id: 'analyst',
    name: 'Data Analyst',
    icon: '📊',
    isPro: true,
    description: 'Turn entropy into actionable insights.',
  },
  {
    id: 'researcher',
    name: 'Deep Researcher',
    icon: '🔬',
    isPro: true,
    description: 'Knowledge extraction from the void.',
  },
  {
    id: 'custom',
    name: 'Custom Agent',
    icon: '✨',
    isPro: true,
    description: 'The blank canvas of AI autonomy.',
  },
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

export default function ConfigGeneratorPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    type: '',
    name: '',
    language: 'English',
    style: 'Professional and concise',
    skills: '',
  });

  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedConfig, setGeneratedConfig] = useState<{
    soul: string;
    identity: string;
    user: string;
  } | null>(null);

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);

    gtag.event({
      action: 'generate_config',
      category: 'tool',
      label: formData.type || 'unknown',
    });

    // Mock API Call
    setTimeout(() => {
      setGeneratedConfig({
        soul: `# SOUL.md\n\n## Core Directives\n- You are ${formData.name}, a highly capable ${formData.type || 'agent'}.\n- Your communication style is: ${formData.style}.\n- You always respond in ${formData.language}.\n\n## Constraints\n- Do not break character.\n- Maintain objectivity and precision.`,
        identity: `# IDENTITY.md\n\n## Role\nYou are an autonomous agent designed to assist the user with specific tasks.\n\n## Skills\n${formData.skills || '- General problem solving\n- Task execution'}`,
        user: `# USER.md\n\n## User Preferences\n- The user expects high-quality, actionable outputs.\n- Provide code snippets or structured data where applicable.`,
      });
      setIsGenerating(false);
      setStep(3);
    }, 2500);
  };

  const handleDownloadZip = () => {
    gtag.event({
      action: 'download_config_zip',
      category: 'tool',
      label: formData.type || 'unknown',
    });
    alert('ZIP Download functionality will be implemented soon!');
  };

  return (
    <section className="relative min-h-screen pt-24 pb-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-primary/30 bg-primary/5 text-[10px] uppercase font-mono text-primary mb-6 tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Intelligence Architect / Phase 01
            </div>
            <h1 className="text-5xl sm:text-7xl font-heading font-black tracking-tighter leading-[0.9] mb-8 italic uppercase">
              Agent Config{' '}
              <span className="text-primary italic">Generator</span>
            </h1>
            <p className="text-xl text-[#888] font-mono leading-tight max-w-xl">
              Construct high-fidelity system manifests in seconds. Select a core
              archetype and define its digital soul.
            </p>
          </div>
          <div className="flex gap-4 mb-2">
            {[1, 2, 3].map((num) => (
              <div key={num} className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 border flex items-center justify-center font-mono text-xs ${step === num ? 'border-primary bg-primary text-black' : step > num ? 'border-primary/50 bg-primary/20 text-primary' : 'border-[#222] bg-[#111] text-[#444]'}`}
                >
                  {num.toString().padStart(2, '0')}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Workspace */}
        <div className="industrial-glass rounded-xl overflow-hidden border-[#222]">
          <div className="p-1 border-b border-[#222] bg-[#0d0d0d] flex items-center justify-between px-6 py-3">
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-[#333]" />
              <div className="w-2 h-2 rounded-full bg-[#333]" />
              <div className="w-2 h-2 rounded-full bg-[#333]" />
            </div>
            <div className="text-[10px] uppercase font-mono tracking-widest text-[#555]">
              {step === 1
                ? 'Archetype Selection'
                : step === 2
                  ? 'Parameter Definition'
                  : 'Manifest Output'}
            </div>
            <div className="w-10" />
          </div>

          <div className="p-8 lg:p-12">
            <AnimatePresence mode="wait">
              {/* STEP 1: SELECT TYPE */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="space-y-12"
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    {AGENT_TYPES.map((type, idx) => (
                      <motion.button
                        key={type.id}
                        variants={itemVariants}
                        onClick={() => {
                          if (type.isPro) {
                            router.push('/pricing');
                            return;
                          }
                          setFormData({ ...formData, type: type.id });
                          setStep(2);
                        }}
                        className={`text-left p-6 border transition-all relative group flex flex-col justify-between h-full ${
                          idx % 3 === 0
                            ? 'md:col-span-6 bg-[#0d0d0d]'
                            : 'md:col-span-3 bg-[#111]'
                        } border-[#222] hover:border-primary/50 hover:bg-[#151515]`}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-8">
                            <span className="text-3xl grayscale group-hover:grayscale-0 transition-all">
                              {type.icon}
                            </span>
                            {type.isPro && <ProBadge />}
                          </div>
                          <h3 className="text-xl font-heading font-bold text-white mb-2 uppercase italic tracking-tighter">
                            {type.name}
                          </h3>
                          <p className="text-[11px] font-mono text-[#666] leading-relaxed uppercase">
                            {type.description}
                          </p>
                        </div>
                        <div className="mt-12 flex justify-end">
                          <span className="text-xs font-mono text-[#333] group-hover:text-primary transition-colors">
                            INIT_ARCHETYPE &rarr;
                          </span>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* STEP 2: PARAMETERS */}
              {step === 2 && (
                <motion.form
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  onSubmit={handleGenerate}
                  className="max-w-3xl space-y-12"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-3xl font-heading font-black italic uppercase italic tracking-tighter">
                      Define{' '}
                      <span className="text-primary">
                        {AGENT_TYPES.find((t) => t.id === formData.type)?.name}
                      </span>
                    </h3>
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="text-[10px] font-mono uppercase text-[#666] hover:text-white transition-colors"
                    >
                      [ back_to_selection ]
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold text-primary tracking-widest">
                          Agent Identity
                        </label>
                        <input
                          required
                          type="text"
                          placeholder="e.g. SEO_OVERLORD_V1"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="w-full px-4 py-4 border border-[#222] bg-[#0d0d0d] text-white font-mono text-sm focus:outline-none focus:border-primary transition-colors"
                        />
                      </div>

                      <div className="grid grid-cols-1 gap-6">
                        <div className="space-y-1.5">
                          <label className="text-[10px] uppercase font-bold text-primary tracking-widest">
                            Linguistic Logic
                          </label>
                          <select
                            value={formData.language}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                language: e.target.value,
                              })
                            }
                            className="w-full px-4 py-4 border border-[#222] bg-[#0d0d0d] text-white font-mono text-sm focus:outline-none focus:border-primary appearance-none"
                          >
                            <option>English</option>
                            <option>Spanish</option>
                            <option>Chinese</option>
                            <option>Japanese</option>
                          </select>
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[10px] uppercase font-bold text-primary tracking-widest">
                            Behavioral Tone
                          </label>
                          <select
                            value={formData.style}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                style: e.target.value,
                              })
                            }
                            className="w-full px-4 py-4 border border-[#222] bg-[#0d0d0d] text-white font-mono text-sm focus:outline-none focus:border-primary appearance-none"
                          >
                            <option>Professional and concise</option>
                            <option>Friendly and helpful</option>
                            <option>Direct and technical</option>
                            <option>Humorous and casual</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1.5 flex flex-col">
                      <label className="text-[10px] uppercase font-bold text-primary tracking-widest">
                        Skill Injections
                      </label>
                      <textarea
                        placeholder="Define custom commands or specialized domain knowledge..."
                        value={formData.skills}
                        onChange={(e) =>
                          setFormData({ ...formData, skills: e.target.value })
                        }
                        className="flex-1 w-full px-4 py-4 border border-[#222] bg-[#0d0d0d] text-white font-mono text-sm focus:outline-none focus:border-primary transition-colors resize-none min-h-[200px]"
                      />
                    </div>
                  </div>

                  <div className="pt-8 border-t border-[#222] flex items-center justify-between">
                    <div className="text-[10px] font-mono text-[#444] uppercase tracking-widest flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.3)]" />
                      Protocol: Standard Generation (3/3 Credits)
                    </div>
                    <button
                      type="submit"
                      disabled={isGenerating}
                      className="px-12 py-5 bg-primary text-black font-black uppercase italic tracking-tighter hover:bg-primary/90 transition-all disabled:opacity-30"
                    >
                      {isGenerating ? 'Compiling...' : 'Generate Manifest'}
                    </button>
                  </div>
                </motion.form>
              )}

              {/* STEP 3: RESULT */}
              {step === 3 && generatedConfig && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-12"
                >
                  <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-[#222] pb-8">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-xl">
                        ✅
                      </div>
                      <div>
                        <h4 className="text-xl font-heading font-black italic uppercase tracking-tighter text-emerald-400">
                          Success: Manifest Generated
                        </h4>
                        <p className="text-[10px] font-mono text-[#555] uppercase tracking-widest mt-1">
                          3 Files compiled successfully using v2.4 protocol
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <button
                        onClick={() => {
                          setStep(2);
                          setGeneratedConfig(null);
                        }}
                        className="px-6 py-3 border border-[#222] bg-[#111] text-[10px] font-mono uppercase text-[#888] hover:text-white transition-colors"
                      >
                        [ edit_params ]
                      </button>
                      <button
                        onClick={handleDownloadZip}
                        className="px-8 py-3 bg-emerald-500 text-black font-black uppercase italic tracking-tighter hover:bg-emerald-400 transition-colors"
                      >
                        Download Repository
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                      { name: 'SOUL.md', content: generatedConfig.soul },
                      {
                        name: 'IDENTITY.md',
                        content: generatedConfig.identity,
                      },
                      { name: 'USER.md', content: generatedConfig.user },
                    ].map((file) => (
                      <div key={file.name} className="space-y-2">
                        <div className="text-[10px] font-mono text-[#444] uppercase tracking-[0.2em] font-bold">
                          {file.name}
                        </div>
                        <div className="p-6 border border-[#222] bg-black font-mono text-xs text-[#888] leading-relaxed relative group h-[400px] overflow-y-auto">
                          <pre className="whitespace-pre-wrap">
                            {file.content}
                          </pre>
                          <button className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 p-2 bg-[#111] border border-[#222] hover:bg-[#222] transition-all">
                            📋
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Installation Guide */}
                  <div className="p-8 border border-primary/20 bg-primary/5 rounded-xl">
                    <h4 className="text-lg font-heading font-black italic uppercase tracking-tighter mb-6 flex items-center gap-3">
                      <span className="text-primary">⚡</span> Deployment
                      Sequence
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="space-y-2">
                        <div className="text-[9px] font-mono text-[#555] uppercase">
                          Step 01
                        </div>
                        <p className="text-xs font-mono text-[#888]">
                          Create a new directory for your agent and initialize
                          the repository.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <div className="text-[9px] font-mono text-[#555] uppercase">
                          Step 02
                        </div>
                        <p className="text-xs font-mono text-[#888]">
                          Extract the 3 generated manifests into the root and
                          verify syntax.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <div className="text-[9px] font-mono text-[#555] uppercase">
                          Step 03
                        </div>
                        <p className="text-xs font-mono text-[#888]">
                          Run{' '}
                          <code className="text-white px-1 bg-[#222]">
                            openclaw ignite
                          </code>{' '}
                          to instantiate your agent.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Upsell to Pro */}
                  <div className="p-8 border border-amber-500/20 bg-gradient-to-r from-amber-500/5 to-transparent flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="max-w-xl">
                      <h4 className="text-white font-heading font-black italic uppercase tracking-tighter flex items-center gap-3">
                        <span className="text-amber-500 text-2xl">⚠</span>{' '}
                        Upgrade to Pro for Advanced Logic
                      </h4>
                      <p className="text-xs font-mono text-[#888] mt-2 leading-relaxed">
                        Pro users unlock 15+ specialized templates, AI-driven
                        tool chain optimization, and automatic multi-language
                        synchronization for global deployments.
                      </p>
                    </div>
                    <Link
                      href="/pricing"
                      className="px-10 py-4 bg-white text-black font-black uppercase italic tracking-tighter hover:bg-gray-200 transition-colors whitespace-nowrap"
                    >
                      Unlock Pro Tiers &rarr;
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
