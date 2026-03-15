'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as gtag from '@/lib/gtag';
import { LocaleLink as Link } from '@/i18n/navigation';
import { ProBadge } from '@/components/custom/ProBadge';

const MODELS = [
  { id: 'gpt-4', name: 'GPT-4o', provider: 'OpenAI' },
  { id: 'claude-3-5', name: 'Claude 3.5 Sonnet', provider: 'Anthropic' },
  { id: 'gemini-1.5', name: 'Gemini 1.5 Pro', provider: 'Google' },
  { id: 'llama-3', name: 'Llama 3 70B', provider: 'Meta' },
];

const OPTIMIZATION_GOALS = [
  { id: 'creative', name: 'Creative & Evocative', icon: '🎨' },
  { id: 'precise', name: 'Precise & Logic-driven', icon: '📐' },
  { id: 'technical', name: 'Technical & Code-focused', icon: '💻' },
  { id: 'casual', name: 'Casual & Conversational', icon: '💬' },
];

const BATTLE_TESTS = [
  { name: 'Instruction Adherence', status: 'checking' },
  { name: 'Tone Stability', status: 'waiting' },
  { name: 'Edge Case Robustness', status: 'waiting' },
  { name: 'Jailbreak Resistance', status: 'waiting' },
  { name: 'Ambiguity Resolution', status: 'waiting' },
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

export default function PromptOptimizerPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    prompt: '',
    model: 'gpt-4',
    goal: 'precise',
    context: '',
  });

  const [isProcessing, setIsProcessing] = useState(false);
  const [testResults, setTestResults] = useState(BATTLE_TESTS);
  const [optimizedResult, setOptimizedResult] = useState<{
    original: string;
    optimized: string;
    score: number;
    improvements: string[];
    battleReport: { name: string; score: number; comment: string }[];
  } | null>(null);

  // Simulation effect for Battle Testing
  useEffect(() => {
    if (step === 2 && isProcessing) {
      let currentTest = 0;
      const interval = setInterval(() => {
        setTestResults((prev) =>
          prev.map((test, idx) => {
            if (idx === currentTest) return { ...test, status: 'complete' };
            if (idx === currentTest + 1) return { ...test, status: 'checking' };
            return test;
          })
        );
        currentTest++;
        if (currentTest >= BATTLE_TESTS.length) {
          clearInterval(interval);
          setTimeout(() => {
            handleComplete();
          }, 1000);
        }
      }, 800);
      return () => clearInterval(interval);
    }
  }, [step, isProcessing]);

  const handleStartOptimization = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.prompt.trim()) return;
    setStep(2);
    setIsProcessing(true);
    setTestResults(BATTLE_TESTS);

    gtag.event({
      action: 'start_prompt_optimization',
      category: 'tool',
      label: formData.goal,
    });
  };

  const handleComplete = () => {
    setOptimizedResult({
      original: formData.prompt,
      optimized: `### Optimized System Prompt (${formData.goal.toUpperCase()})\n\n**Role:** Expert assistant specialized in ${formData.goal} outputs.\n\n**Directives:**\n1. Maintain a high degree of ${formData.goal} fidelity in all responses.\n2. Prioritize accuracy and structural integrity.\n3. ${formData.context ? `Incorporate context: ${formData.context}` : 'Handle all queries with professional rigor.'}\n\n**Constraints:**\n- Avoid redundant hedging language.\n- Ensure outputs are formatted for immediate utility.`,
      score: 94,
      improvements: [
        'Removed redundant conversational filler.',
        'Strengthened role-play consistency.',
        'Added explicit formatting constraints.',
        'Improved task-specific focus.',
      ],
      battleReport: [
        {
          name: 'Instruction Adherence',
          score: 98,
          comment: 'Follows complex sub-tasks perfectly.',
        },
        {
          name: 'Tone Stability',
          score: 92,
          comment: 'Consistent voice throughout long-form output.',
        },
        {
          name: 'Edge Case Robustness',
          score: 89,
          comment: 'Handles empty or malformed inputs gracefully.',
        },
        {
          name: 'Jailbreak Resistance',
          score: 95,
          comment: 'Strong guardrails against prompt injection.',
        },
        {
          name: 'Ambiguity Resolution',
          score: 87,
          comment: 'Asks for clarification when intent is unclear.',
        },
      ],
    });
    setIsProcessing(false);
    setStep(3);
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
              Linguistic Refinement / Module 03
            </div>
            <h1 className="text-5xl sm:text-7xl font-heading font-black tracking-tighter leading-[0.9] mb-8 italic uppercase">
              Prompt <span className="text-primary italic">Optimizer</span>
            </h1>
            <p className="text-xl text-[#888] font-mono leading-tight max-w-xl">
              Transform latent intent into high-fidelity directives. Stress-test
              your logic chains against industrial edge cases.
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
                ? 'Logic Injection'
                : step === 2
                  ? 'Stress Verification'
                  : 'Diagnostic Output'}
            </div>
            <div className="w-10" />
          </div>

          <div className="p-8 lg:p-12">
            <AnimatePresence mode="wait">
              {/* STEP 1: INPUT */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="space-y-12"
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    <div className="md:col-span-8 space-y-2">
                      <label className="text-[10px] uppercase font-bold text-primary tracking-widest block mb-4">
                        Raw Input Stream
                      </label>
                      <textarea
                        value={formData.prompt}
                        onChange={(e) =>
                          setFormData({ ...formData, prompt: e.target.value })
                        }
                        placeholder="PASTE_PROMPT_HERE &gt;"
                        className="w-full h-[400px] p-8 border border-[#222] bg-black text-white font-mono text-sm focus:outline-none focus:border-primary transition-colors resize-none leading-relaxed"
                      />
                    </div>

                    <div className="md:col-span-4 space-y-12">
                      <div className="space-y-6">
                        <label className="text-[10px] uppercase font-bold text-[#444] tracking-widest block">
                          Refinement Vector
                        </label>
                        <div className="grid grid-cols-1 gap-4">
                          {OPTIMIZATION_GOALS.map((goal) => (
                            <button
                              key={goal.id}
                              onClick={() =>
                                setFormData({ ...formData, goal: goal.id })
                              }
                              className={`flex items-center justify-between p-5 border transition-all duration-300 ${
                                formData.goal === goal.id
                                  ? 'border-primary bg-primary/5 text-primary'
                                  : 'border-[#222] bg-[#0a0a0a] text-[#555] hover:border-[#333]'
                              }`}
                            >
                              <div className="flex items-center gap-4">
                                <span className="text-xl grayscale group-hover:grayscale-0">
                                  {goal.icon}
                                </span>
                                <span className="text-[10px] font-mono uppercase tracking-widest">
                                  {goal.name}
                                </span>
                              </div>
                              {formData.goal === goal.id && (
                                <span className="text-xs">●</span>
                              )}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-6">
                        <label className="text-[10px] uppercase font-bold text-[#444] tracking-widest block">
                          Reference Logic Model
                        </label>
                        <select
                          value={formData.model}
                          onChange={(e) =>
                            setFormData({ ...formData, model: e.target.value })
                          }
                          className="w-full p-4 border border-[#222] bg-[#0a0a0a] text-white font-mono text-[10px] uppercase focus:outline-none focus:border-primary appearance-none tracking-widest"
                        >
                          {MODELS.map((m) => (
                            <option key={m.id} value={m.id}>
                              {m.name} / {m.provider}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="pt-8 border-t border-[#222]">
                        <button
                          onClick={handleStartOptimization}
                          disabled={!formData.prompt.trim()}
                          className="w-full py-6 bg-primary text-black font-black uppercase italic tracking-tighter hover:bg-primary/90 transition-all disabled:opacity-30 flex items-center justify-center gap-3"
                        >
                          INIT_OPTIMIZATION &rarr;
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* STEP 2: BATTLE TESTING */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-12 flex flex-col items-center justify-center"
                >
                  <div className="w-full max-w-2xl industrial-glass p-12 border-dashed relative">
                    <div className="flex items-center justify-between mb-12">
                      <h2 className="text-3xl font-heading font-black italic uppercase tracking-tighter text-white">
                        Logic Stress{' '}
                        <span className="text-primary">Verification</span>
                      </h2>
                      <div className="font-mono text-[10px] text-primary animate-pulse tracking-widest">
                        RUNNING_STRESS_TEST_v3
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-8">
                      {testResults.map((test, i) => (
                        <div key={i} className="space-y-2">
                          <div className="flex justify-between items-center text-[10px] font-mono uppercase">
                            <span
                              className={
                                test.status === 'complete'
                                  ? 'text-emerald-400'
                                  : test.status === 'checking'
                                    ? 'text-primary'
                                    : 'text-[#333]'
                              }
                            >
                              {test.name}
                            </span>
                            <span
                              className={
                                test.status === 'complete'
                                  ? 'text-emerald-400'
                                  : test.status === 'checking'
                                    ? 'text-primary'
                                    : 'text-[#333]'
                              }
                            >
                              {test.status.toUpperCase()}
                            </span>
                          </div>
                          <div className="h-1 bg-[#111] border border-[#222] overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{
                                width:
                                  test.status === 'complete'
                                    ? '100%'
                                    : test.status === 'checking'
                                      ? '60%'
                                      : '0%',
                              }}
                              transition={{ duration: 0.8, ease: 'easeInOut' }}
                              className={`h-full ${test.status === 'complete' ? 'bg-emerald-500' : 'bg-primary'}`}
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-16 pt-8 border-t border-[#222] flex justify-center">
                      <div className="text-[9px] font-mono text-[#444] uppercase tracking-[0.3em] flex items-center gap-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
                        Simulating Malicious Payloads + Ambiguous Intent
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* STEP 3: RESULTS */}
              {step === 3 && optimizedResult && (
                <motion.div
                  key="step3"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-12"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Logic Matrix Diagnostics */}
                    <motion.div
                      variants={itemVariants}
                      className="lg:col-span-4 space-y-8"
                    >
                      <div className="p-8 border border-primary/20 bg-primary/5 rounded-sm">
                        <div className="flex items-center justify-between mb-8">
                          <h3 className="font-heading font-black italic uppercase tracking-tighter text-white">
                            Logic Matrix
                          </h3>
                          <div className="text-[24px] font-black italic text-primary leading-none tracking-tighter">
                            {optimizedResult.score}%
                          </div>
                        </div>

                        <div className="space-y-6">
                          {optimizedResult.battleReport.map((item, i) => (
                            <div key={i} className="space-y-2">
                              <div className="flex justify-between text-[10px] font-mono uppercase tracking-widest">
                                <span className="text-[#666]">{item.name}</span>
                                <span className="text-white">
                                  {item.score}/100
                                </span>
                              </div>
                              <div className="h-0.5 bg-black overflow-hidden flex gap-0.5">
                                {Array.from({ length: 20 }).map((_, idx) => (
                                  <div
                                    key={idx}
                                    className={`h-full flex-1 transition-colors duration-1000 ${idx < (item.score / 5) ? (item.score > 90 ? 'bg-emerald-500' : 'bg-primary') : 'bg-[#111]'}`}
                                  />
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-8 border-t border-[#222]">
                        <div className="flex items-center gap-2 mb-4">
                          <ProBadge />
                          <span className="text-[10px] font-mono text-emerald-500 uppercase font-black italic">
                            Neural Validation Active
                          </span>
                        </div>
                        <p className="text-[9px] font-mono text-[#444] leading-relaxed uppercase">
                          Pro AI Oracles have analyzed this manifest for
                          cross-model compatibility and logic density.
                        </p>
                      </div>
                    </motion.div>

                    {/* Comparison Area */}
                    <motion.div
                      variants={itemVariants}
                      className="lg:col-span-8 flex flex-col gap-12"
                    >
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <label className="text-[10px] uppercase font-bold text-[#444] tracking-widest">
                            Legacy Input Stream
                          </label>
                          <div className="text-[9px] font-mono text-red-500/50 uppercase">
                            Inefficient / Unstructured
                          </div>
                        </div>
                        <div className="p-6 border border-[#222] bg-black text-[#444] font-mono text-xs leading-relaxed overflow-y-auto max-h-[250px] opacity-50 grayscale">
                          {optimizedResult.original}
                        </div>
                      </div>

                      <div className="space-y-4 flex-1 flex flex-col">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <label className="text-[10px] uppercase font-bold text-primary tracking-widest">
                              Optimized Manifest
                            </label>
                            <ProBadge />
                          </div>
                          <div className="text-[9px] font-mono text-emerald-500 uppercase tracking-widest">
                            Validated Protocol v2.4
                          </div>
                        </div>
                        <div className="relative group flex-1">
                          <div className="absolute -inset-0.5 bg-primary/20 rounded-sm blur opacity-50"></div>
                          <div className="relative h-full p-8 border border-primary/40 bg-black text-white font-mono text-xs leading-relaxed overflow-y-auto whitespace-pre-wrap">
                            {optimizedResult.optimized}
                            <button className="absolute top-6 right-6 px-4 py-2 bg-primary text-black font-black uppercase italic tracking-tighter text-[10px] hover:bg-white transition-all">
                              Copy Manifest
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Upsell to Pro */}
                  <div className="p-12 border border-[#222] industrial-glass relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -mr-32 -mt-32 transition-colors group-hover:bg-primary/10" />
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                      <div className="max-w-2xl">
                        <div className="text-[10px] font-mono text-[#444] uppercase tracking-[0.3em] font-bold mb-4">
                          Neural Architecture Validation
                        </div>
                        <h4 className="text-3xl font-heading font-black italic uppercase tracking-tighter mb-4 text-white">
                          Real-time{' '}
                          <span className="text-primary">
                            API Stress Testing
                          </span>
                        </h4>
                        <p className="text-sm font-mono text-[#888] leading-relaxed uppercase">
                          Pro users unlock direct API validation against 15+
                          industrial LLMs. Verify adherence, safety, and token
                          efficiency with live diagnostic cycles.
                        </p>
                      </div>
                      <Link
                        href="/pricing"
                        className="px-12 py-5 bg-white text-black font-black uppercase italic tracking-tighter hover:bg-gray-200 transition-all whitespace-nowrap group-hover:-translate-y-1 group-hover:shadow-[0_10px_40px_rgba(255,255,255,0.2)]"
                      >
                        Upgrade To Enterprise &rarr;
                      </Link>
                    </div>
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
