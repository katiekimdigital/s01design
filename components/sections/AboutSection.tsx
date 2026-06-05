'use client'
import { motion } from 'framer-motion'
import { EyebrowLabel } from '@/components/ui/EyebrowLabel'
import { Button } from '@/components/ui/Button'

const EASE = [0.16, 1, 0.3, 1] as const

const facts = [
  { label: 'Based in',    value: 'Sydney, Australia' },
  { label: 'Experience',  value: '8+ years enterprise APAC' },
  { label: 'Markets',     value: '13 across Asia-Pacific' },
  { label: 'Clients',     value: 'Tech, corporate, Shopify brands' },
  { label: 'Stack',       value: 'Next.js · Shopify · React · CMS' },
  { label: 'Available',   value: 'Currently booking' },
]

// ─── COPY PLACEHOLDER ────────────────────────────────────────────────────────
// Katie — replace the three paragraphs below with your own copy.
// Keep it first person, direct, no agency language.
// Target: ~120 words total across the three paragraphs.
// ─────────────────────────────────────────────────────────────────────────────
const bio = [
  `I'm Katie Kim — a web designer and developer based in Sydney.
   Eight years building enterprise digital systems across APAC: banks, telcos,
   SaaS platforms, and Shopify experiences that perform.`,

  `The studio operates at the intersection of Swiss Modernist visual discipline
   and senior engineering practice. I take on a small number of projects per quarter
   and take full responsibility for the outcome — no handoffs, no surprises.`,

  `I'm the person you hire when you need a site that works, not just a site
   that photographs well.`,
]
// ─────────────────────────────────────────────────────────────────────────────

export function AboutSection() {
  return (
    <section id="about" className="border-t-4 border-black py-[clamp(72px,10vw,120px)]">
      <div className="w-full max-w-[1280px] mx-auto px-[clamp(20px,5vw,72px)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(40px,6vw,96px)]">

          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <EyebrowLabel number="04" label="About" className="mb-6" />
            <h2
              className="font-sans font-black uppercase text-black leading-[0.90] tracking-[-0.03em] mb-8"
              style={{ fontSize: 'clamp(32px,4vw,56px)' }}
            >
              ONE ARCHITECT.<br />FULL RESPONSIBILITY.
            </h2>

            <div className="space-y-4">
              {bio.map((p, i) => (
                <p key={i} className="font-sans text-[15px] text-zinc-600 leading-[1.65]">{p}</p>
              ))}
            </div>

            <div className="mt-8">
              <Button href="#contact" variant="primary" arrow>Work Together</Button>
            </div>
          </motion.div>

          {/* Right — fact table */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.15 }}
            className="flex flex-col justify-center"
          >
            <div className="border-2 border-black">
              {facts.map((f, i) => (
                <div
                  key={f.label}
                  className={`flex items-start justify-between gap-6 px-6 py-4 ${i < facts.length - 1 ? 'border-b border-zinc-200' : ''}`}
                >
                  <span className="font-mono text-[10px] font-bold tracking-[0.18em] uppercase text-zinc-400 shrink-0 pt-0.5">{f.label}</span>
                  <span className="font-sans text-[14px] text-black font-medium text-right">{f.value}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 border-l-4 border-[#FF3000] pl-5 py-2">
              <p className="font-mono text-[10px] font-bold tracking-[0.18em] uppercase text-zinc-400 mb-1">Response time</p>
              <p className="font-sans text-[14px] text-zinc-600">
                Inquiry responses within 24 hours on business days. Discovery call within 48 hours of intake questionnaire.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
