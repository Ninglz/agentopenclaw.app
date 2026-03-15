import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'GOAL_INJECTION',
    description:
      'Define your baseline objectives. Our architectural oracle identifies the optimal autonomous path.',
  },
  {
    number: '02',
    title: 'MANIFEST_CONFIG',
    description:
      'We compile a production-grade agent manifest, hardened for industrial-scale high-fidelity execution.',
  },
  {
    number: '03',
    title: 'DEPLOY_EXECUTE',
    description:
      'Your agent initializes under zero-trust protocols, delivering validated results with professional rigor.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'circOut' },
  },
};

export default function HowItWorks() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-primary/30 bg-primary/5 text-[10px] uppercase font-mono text-primary mb-6 tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Operational Protocol / Module 04
            </div>
            <h2 className="text-5xl md:text-6xl font-heading font-black tracking-tighter leading-[0.9] italic uppercase">
              Deployment <span className="text-primary italic">Lifecycle</span>
            </h2>
          </div>
          <div className="text-[10px] font-mono text-[#555] uppercase tracking-[0.3em] font-bold">
            PHASE_STABILIZATION_v4.2
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={itemVariants}
              className="relative group p-8 border border-[#222] bg-[#0d0d0d] hover:border-primary/30 transition-all duration-500"
            >
              <div className="absolute top-0 right-0 p-4 font-mono text-4xl text-primary/10 font-black group-hover:text-primary/20 transition-colors italic">
                {step.number}
              </div>
              <div className="w-10 h-10 border border-primary/40 flex items-center justify-center font-mono font-bold text-xs text-primary mb-8 bg-primary/5">
                {step.number}
              </div>
              <h3 className="text-xl font-heading font-black italic uppercase tracking-tighter text-white mb-4 group-hover:text-primary transition-colors">
                {step.title}
              </h3>
              <p className="text-sm font-mono text-[#666] leading-relaxed uppercase group-hover:text-[#a3a3a3] transition-colors">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
