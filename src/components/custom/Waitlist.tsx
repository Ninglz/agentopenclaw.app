'use client';

import { useState, type FormEvent } from 'react';
import * as gtag from '@/lib/gtag';
import { motion } from 'framer-motion';

export default function Waitlist() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    gtag.event({
      action: 'waitlist_attempt',
      category: 'conversion',
      label: email,
    });

    try {
      const res = await fetch(
        'https://formsubmit.co/ajax/ninglz2073@gmail.com',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            email,
            _subject: 'New Waitlist Signup — AgentOpenClaw',
          }),
        }
      );

      if (res.ok) {
        setStatus('success');
        setEmail('');
        gtag.event({
          action: 'waitlist_success',
          category: 'conversion',
          label: 'waitlist_signup',
        });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="waitlist" className="py-32 relative overflow-hidden">
      {/* Industrial Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'circOut' }}
          className="industrial-glass p-12 md:p-20 relative border border-white/10"
        >
          {/* Decorative Corner Flanges */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/40 -translate-x-1 -translate-y-1" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/40 translate-x-1 translate-y-1" />

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-primary/30 bg-primary/5 text-[10px] uppercase font-mono text-primary mb-8 tracking-widest">
            Module 05 / Early_Access_Protocol
          </div>

          <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tighter leading-[0.9] italic uppercase mb-6">
            Join the <span className="text-primary italic">Vanguard</span>
          </h2>

          <p className="mt-4 font-mono text-xs uppercase tracking-widest text-[#666] max-w-lg mx-auto leading-relaxed mb-12">
            INITIALIZING EARLY ADOPTER SEQUENCE. <br />
            PRIORITY ONBOARDING INJECTED FOR WHITELISTED ADDRESSES.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-10 flex flex-col sm:flex-row gap-0 border border-white/10 bg-black/40 backdrop-blur-sm p-1"
          >
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="TERMINAL@VANGUARD.SYSTEM"
              required
              aria-label="Email address"
              className="flex-1 px-6 py-4 bg-transparent text-[#f5f5f5] placeholder-[#333] font-mono text-xs uppercase tracking-widest focus:outline-none focus:bg-white/5 transition-all outline-none border-none"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-8 py-4 text-xs font-mono font-black uppercase tracking-[0.2em] bg-primary text-black hover:bg-white transition-all disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
            >
              {status === 'loading' ? 'PROCESSING...' : 'INITIALIZE_JOIN'}
            </button>
          </form>

          {status === 'success' && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-6 font-mono text-[10px] uppercase tracking-widest text-primary"
            >
              [AUTH_SUCCESS]: ADDRESS_STAKED_IN_QUEUE.
            </motion.p>
          )}
          {status === 'error' && (
            <p className="mt-6 font-mono text-[10px] uppercase tracking-widest text-red-500">
              [SYSTEM_ERROR]: SUBMISSION_FAILED. RETRY_SEQUENCE.
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
