'use client'
import { motion } from 'framer-motion'
import { EyebrowLabel } from '@/components/ui/EyebrowLabel'
import { Button } from '@/components/ui/Button'

const EASE = [0.16, 1, 0.3, 1] as const

const tiers = [
  {
    name: 'SPRINT',
    price: 'From $1,500',
    unit: 'AUD · fixed price',
    timeline: '1–2 week delivery',
    description: 'Short, contained scope. One problem, one solution, shipped fast.',
    featured: false,
    includes: [
      'UX Audit + Strategy Report',
      'Landing Page Build',
      'Brand Positioning Sprint',
      'Shopify Performance Audit',
    ],
    note: 'Best for: a specific problem with a known brief.',
    cta: 'Book a Sprint',
  },
  {
    name: 'STUDIO PROJECT',
    price: 'From $6,000',
    unit: 'AUD · milestone billing',
    timeline: '4–8 week delivery',
    description: 'Full project scope. Structured phases. One architect, full ownership.',
    featured: true,
    includes: [
      'Full website design + build (Next.js)',
      'Brand Identity System',
      'Shopify Custom Theme',
      'Design System creation',
      '2 rounds of revisions included',
      '14-day support window',
    ],
    note: 'Best for: launching something that has to perform.',
    cta: 'Start a Project',
  },
  {
    name: 'RETAINED',
    price: 'From $3,000',
    unit: 'AUD · per month',
    timeline: '3-month minimum',
    description: 'Ongoing strategic + technical partnership. Priority access. Defined monthly scope.',
    featured: false,
    includes: [
      'Defined monthly sprint scope',
      'Priority scheduling (no waitlist)',
      'UX strategy on demand',
      'Monthly strategy call',
      'Async daily/weekly check-ins',
    ],
    note: 'Best for: growing businesses that need a senior resource without a full-time hire.',
    cta: 'Discuss Retainer',
  },
]

export function PricingSection({ showAuditTier = false }: { showAuditTier?: boolean }) {
  return (
    <section id="pricing" className="border-t-4 border-black py-[clamp(72px,10vw,120px)] bg-[#F2F2F2] bg-override">
      <div className="w-full max-w-[1280px] mx-auto px-[clamp(20px,5vw,72px)]">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-14"
        >
          <EyebrowLabel number="05" label="Investment" className="mb-6" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
            <h2
              className="font-sans font-black uppercase text-black leading-[0.90] tracking-[-0.03em]"
              style={{ fontSize: 'clamp(40px,5.5vw,72px)' }}
            >
              PRICED ON<br />OUTCOMES.
            </h2>
            <p className="font-sans text-[15px] text-zinc-600 leading-[1.65] max-w-[420px]">
              No hourly billing. No hidden costs. Every tier is fixed-scope at a fixed investment —
              scoped precisely before work begins.
            </p>
          </div>
        </motion.div>

        {/* Entry tier — low-commitment first step (V2 only) */}
        {showAuditTier && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="border-2 border-black bg-white p-6 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-5"
          >
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[10px] font-bold tracking-[0.22em] uppercase text-[#FF3000]">
                Start Small · Entry Point
              </span>
              <h3 className="font-sans font-black text-[22px] uppercase tracking-[-0.02em] text-black leading-tight">
                Power Hour / UX Audit
              </h3>
              <p className="font-sans text-[14px] text-zinc-600 leading-[1.6] max-w-[520px]">
                A 60-minute strategy call plus a written audit of your site — structure, UX, and the three
                highest-impact fixes. The lowest-commitment way to work with me.
              </p>
            </div>
            <div className="flex items-center gap-6 shrink-0">
              <div className="flex flex-col">
                <span className="font-sans font-black text-[clamp(24px,3vw,34px)] leading-none tracking-[-0.04em] text-black">
                  From $350
                </span>
                <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-zinc-400 mt-1">AUD · one-off</span>
              </div>
              <Button href="#contact" variant="accent" arrow>Book a Power Hour</Button>
            </div>
          </motion.div>
        )}

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-2 border-black">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE, delay: i * 0.1 }}
              className={`
                flex flex-col p-8 gap-6
                border-b-2 md:border-b-0 md:border-r-2 border-black last:border-0
                ${tier.featured ? 'bg-black' : 'bg-transparent'}
              `}
            >
              {/* Tier name + featured tag */}
              <div className="flex items-start justify-between">
                <span className={`font-mono text-[10px] font-bold tracking-[0.22em] uppercase ${tier.featured ? 'text-zinc-500' : 'text-zinc-400'}`}>
                  {tier.name}
                </span>
                {tier.featured && (
                  <span className="font-mono text-[9px] font-bold tracking-[0.18em] uppercase text-[#FF3000] border border-[#FF3000] px-2 py-0.5">
                    RECOMMENDED
                  </span>
                )}
              </div>

              {/* Price */}
              <div>
                <p className={`font-sans font-black text-[clamp(28px,3vw,40px)] leading-none tracking-[-0.04em] ${tier.featured ? 'text-white' : 'text-black'}`}>
                  {tier.price}
                </p>
                <p className={`font-mono text-[10px] tracking-[0.14em] uppercase mt-1 ${tier.featured ? 'text-zinc-500' : 'text-zinc-400'}`}>
                  {tier.unit}
                </p>
                <p className={`font-mono text-[10px] font-bold tracking-[0.14em] uppercase mt-1 ${tier.featured ? 'text-[#FF3000]' : 'text-[#FF3000]'}`}>
                  {tier.timeline}
                </p>
              </div>

              {/* Description */}
              <p className={`font-sans text-[14px] leading-[1.65] ${tier.featured ? 'text-zinc-400' : 'text-zinc-600'}`}>
                {tier.description}
              </p>

              {/* Divider */}
              <div className={`h-px ${tier.featured ? 'bg-zinc-800' : 'bg-zinc-200'}`} />

              {/* Includes */}
              <ul className="flex flex-col gap-2.5 flex-1">
                {tier.includes.map((item) => (
                  <li key={item} className={`flex items-start gap-2.5 font-sans text-[13px] leading-snug ${tier.featured ? 'text-zinc-300' : 'text-zinc-600'}`}>
                    <span className="text-[#FF3000] shrink-0 mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Note */}
              <p className={`font-mono text-[9px] tracking-[0.12em] uppercase leading-relaxed ${tier.featured ? 'text-zinc-600' : 'text-zinc-400'}`}>
                {tier.note}
              </p>

              {/* CTA */}
              <Button
                href="#contact"
                variant={tier.featured ? 'accent' : 'ghost'}
                className={!tier.featured ? 'border-zinc-300' : ''}
                arrow
              >
                {tier.cta}
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Footnote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.4 }}
          className="mt-8 flex flex-wrap gap-x-8 gap-y-2"
        >
          {[
            '+ GST for Australian clients',
            'Rush premium: +30% for < 2 weeks lead time',
            'All prices in AUD',
            'Deposit: 50% before project start',
          ].map((note) => (
            <span key={note} className="font-mono text-[10px] tracking-[0.14em] uppercase text-zinc-400 flex items-center gap-2">
              <span className="text-[#FF3000]">·</span>{note}
            </span>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
