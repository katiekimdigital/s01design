'use client'
import { motion } from 'framer-motion'
import { EyebrowLabel } from '@/components/ui/EyebrowLabel'

const EASE = [0.16, 1, 0.3, 1] as const

const steps = [
  {
    n: '01',
    phase: 'Discovery',
    duration: '2–3 days',
    description: 'Intake questionnaire → 30-min discovery call → brief confirmed. No speculation, no mood boards before the brief is locked.',
    deliverable: 'Client brief doc',
  },
  {
    n: '02',
    phase: 'UX Architecture',
    duration: '3–5 days',
    description: 'Sitemap, content hierarchy, conversion strategy, CTA structure, trust architecture — all defined before any visual work begins.',
    deliverable: 'UX architecture doc',
  },
  {
    n: '03',
    phase: 'Visual Direction',
    duration: '2–3 days',
    description: 'Typography system, layout rhythm, motion direction, component inventory, and 3 visual references with extraction notes.',
    deliverable: 'Visual direction brief',
  },
  {
    n: '04',
    phase: 'Build',
    duration: '1–4 weeks',
    description: 'Component-first build in Next.js + Tailwind. TypeScript strict. CMS-ready architecture. Framer Motion for scroll reveals.',
    deliverable: 'Staged preview on Vercel',
  },
  {
    n: '05',
    phase: 'Review + QA',
    duration: '3–5 days',
    description: 'Two rounds of revisions. Lighthouse audit > 90 on mobile. All breakpoints tested. Zero console errors before handoff.',
    deliverable: 'QA checklist signed off',
  },
  {
    n: '06',
    phase: 'Deploy + Handoff',
    duration: '1–2 days',
    description: 'Vercel deployment. Credentials transferred. 14-day support window for bug fixes. Case study process begins within 2 weeks.',
    deliverable: 'Live site + handoff doc',
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="border-t-4 border-black py-[clamp(72px,10vw,120px)] bg-black bg-override">
      <div className="w-full max-w-[1280px] mx-auto px-[clamp(20px,5vw,72px)]">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-14"
        >
          <EyebrowLabel
            number="03"
            label="Way of Working"
            className="mb-6 [&>span]:text-zinc-500 [&>div]:bg-zinc-800"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
            <h2
              className="font-sans font-black uppercase text-white leading-[0.90] tracking-[-0.03em]"
              style={{ fontSize: 'clamp(40px,5.5vw,72px)' }}
            >
              NO SURPRISES.<br />ONLY SYSTEMS.
            </h2>
            <p className="font-sans text-[15px] text-zinc-400 leading-[1.65] max-w-[420px]">
              Every project follows the same six-phase process. Each phase ends with a specific deliverable.
              Client feedback windows are explicit. Nothing proceeds without sign-off.
            </p>
          </div>
        </motion.div>

        {/* Steps */}
        <div className="border-2 border-zinc-800">
          {steps.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, ease: EASE, delay: i * 0.06 }}
              className={`
                grid grid-cols-[48px_1fr_1fr_auto] gap-6 items-start px-6 py-5
                ${i < steps.length - 1 ? 'border-b border-zinc-800' : ''}
                group hover:bg-zinc-900 transition-colors duration-150
              `}
            >
              {/* Step number */}
              <span className="font-mono text-[11px] font-bold tracking-[0.16em] text-zinc-500 pt-0.5">
                {step.n}
              </span>

              {/* Phase + description */}
              <div className="flex flex-col gap-2">
                <h3 className="font-sans font-black text-[16px] uppercase tracking-[-0.02em] text-white group-hover:text-[#FF3000] transition-colors duration-150">
                  {step.phase}
                </h3>
                <p className="font-sans text-[14px] text-zinc-500 leading-[1.6]">
                  {step.description}
                </p>
              </div>

              {/* Deliverable */}
              <div className="hidden md:flex items-start pt-0.5">
                <span className="font-mono text-[9px] font-bold tracking-[0.18em] uppercase text-[#FF3000] bg-zinc-900 border border-zinc-800 px-2 py-1">
                  → {step.deliverable}
                </span>
              </div>

              {/* Duration */}
              <span className="font-mono text-[10px] font-bold tracking-[0.14em] uppercase text-zinc-400 whitespace-nowrap pt-0.5">
                {step.duration}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.4 }}
          className="mt-6 font-mono text-[10px] tracking-[0.14em] uppercase text-zinc-600"
        >
          · Client feedback window: 5 business days per phase · Delays caused by client extend the timeline · 2 revision rounds included ·
        </motion.p>

      </div>
    </section>
  )
}
