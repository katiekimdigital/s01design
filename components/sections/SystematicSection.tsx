'use client'
import { motion } from 'framer-motion'
import { EyebrowLabel } from '@/components/ui/EyebrowLabel'

const EASE = [0.16, 1, 0.3, 1] as const

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, ease: EASE, delay },
})

const principles = [
  {
    token: '[UX_FIRST]',
    headline: 'Architecture before aesthetics.',
    body: 'Every project starts with information hierarchy, conversion structure, and CTA strategy — before a single visual decision is made.',
  },
  {
    token: '[SYSTEMS_THINKING]',
    headline: 'Components, not pages.',
    body: 'Everything built is extractable, documented, and reusable. A design system is the deliverable — the website is a side effect.',
  },
  {
    token: '[ZERO_DECORATION]',
    headline: 'Decoration is a liability.',
    body: 'Swiss Modernist discipline applied to commercial problems. Every element earns its place or gets removed. The grid is the texture.',
  },
  {
    token: '[FULL_OWNERSHIP]',
    headline: 'One architect. Full responsibility.',
    body: 'No handoffs. No account managers. I take the brief, make the decisions, and ship the outcome. You speak directly to the person doing the work.',
  },
]

export function SystematicSection() {
  return (
    <section id="systematic" className="border-t-4 border-black py-[clamp(72px,10vw,120px)]">
      <div className="w-full max-w-[1280px] mx-auto px-[clamp(20px,5vw,72px)]">

        {/* Header */}
        <motion.div {...fadeUp(0)} className="mb-16">
          <EyebrowLabel number="01" label="Studio Philosophy" className="mb-6" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
            <h2
              className="font-sans font-black uppercase text-black leading-[0.90] tracking-[-0.03em]"
              style={{ fontSize: 'clamp(40px,6vw,80px)' }}
            >
              SYSTEMATIC<br />BY DESIGN.
            </h2>
            <motion.p {...fadeUp(0.1)} className="font-sans text-[clamp(15px,1.4vw,19px)] text-zinc-600 leading-[1.65] max-w-[480px]">
              I build digital systems for brands that need their site to work — not just look like it works.
              Swiss Modernist principles are my foundation: clear hierarchy, intentional structure, nothing wasted.
              But the system flexes to each brand — I design around your goals, your audience, and the outcome you're after.
            </motion.p>
          </div>
        </motion.div>

        {/* Red accent bar */}
        <motion.div {...fadeUp(0.15)} className="w-full h-[6px] bg-[#FF3000] mb-16" />

        {/* Principles grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-2 border-black">
          {principles.map((p, i) => (
            <motion.div
              key={p.token}
              {...fadeUp(0.1 + i * 0.08)}
              className="p-6 border-b-2 sm:border-b-0 lg:border-r-2 border-black last:border-r-0 last:border-b-0 sm:last:border-b-0 flex flex-col gap-4 group hover:bg-black transition-colors duration-150"
            >
              <span className="font-mono text-[9px] font-bold tracking-[0.20em] uppercase text-[#FF3000]">
                {p.token}
              </span>
              <h3 className="font-sans font-black text-[16px] uppercase tracking-[-0.02em] leading-tight text-black group-hover:text-white transition-colors duration-150">
                {p.headline}
              </h3>
              <p className="font-sans text-[14px] text-zinc-500 leading-[1.65] group-hover:text-zinc-400 transition-colors duration-150">
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom stats row */}
        <motion.div
          {...fadeUp(0.4)}
          className="mt-0 grid grid-cols-3 border-l-2 border-r-2 border-b-2 border-black"
        >
          {[
            { n: '8+',  label: 'Years enterprise APAC' },
            { n: '13',  label: 'Markets across Asia-Pacific' },
            { n: '40+', label: 'Projects shipped' },
          ].map((s, i) => (
            <div
              key={s.label}
              className={`px-6 py-5 flex flex-col gap-1 ${i < 2 ? 'border-r-2 border-black' : ''}`}
            >
              <span className="font-sans font-black text-[clamp(28px,4vw,48px)] leading-none tracking-[-0.04em] text-black">{s.n}</span>
              <span className="font-mono text-[10px] font-bold tracking-[0.16em] uppercase text-zinc-400">{s.label}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
