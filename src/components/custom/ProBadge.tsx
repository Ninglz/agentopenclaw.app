'use client';

import { motion } from 'framer-motion';

export function ProBadge({ className = '' }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`inline-flex items-center px-2 py-0.5 rounded-sm bg-primary/10 border border-primary/30 text-[10px] font-bold text-primary tracking-tighter uppercase ${className}`}
    >
      <span className="relative flex h-1.5 w-1.5 mr-1.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"></span>
      </span>
      Pro
    </motion.div>
  );
}
