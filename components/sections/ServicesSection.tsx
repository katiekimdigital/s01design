'use client'
import { motion } from 'framer-motion'
import { EyebrowLabel } from '@/components/ui/EyebrowLabel'
import { Button } from '@/components/ui/Button'

const EASE = [0.16, 1, 0.3, 1] as const

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: EASE, delay: i * 0.1 },
  }),
}

const services = [
  {
    number: '01',
    title: 'UX ARCHITECTURE.',
    lede: 'Information systems before aesthetics. I map the conversion architecture — sitemap, content hierarchy, CTA strategy, trust structure — before a single pixel is placed.',
    items: ['Sitemap + IA', 'Conversion strategy', 'UX audit + report', 'Component planning'],
  },
  {
    number: '02',
    title: 'FRONTEND BUILD.',
    lede: 'React/Next.js builds that perform. TypeScript, Tailwind, Framer Motion, MDX. CMS-ready architecture. Vercel deployment. Lighthouse > 90 on mobile.',
    items: ['Next.js App Router', 'Tailwind + design systems', 'MDX/CMS integration', 'Performance optimisation'],
  },
  {
    number: '03',
    title: 'SHOPIFY EXPERIENCE.',
    lede: 'Editorial commerce that converts. Schema-first theme development on Dawn. Metafields for structured content. Built for luxury perception and measurable performance.',
    items: ['Custom theme (Dawn base)', 'Section schema architecture', 'Metafields strategy', 'Lighthouse audit + fix'],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="border-t-4 border-black bg-[#F2F2F2] bg-override py-[clamp(72px,10vw,120px)]">
      <div className="w-full max-w-[1280px] mx-auto px-[clamp(20px,5vw,72px)]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <EyebrowLabel number="02" label="Services" className="mb-6" />
          <h2
            className="font-sans font-black uppercase text-black leading-[0.90] tracking-[-0.03em]"
            style={{ fontSize: 'clamp(32px,5vw,68px)' }}
          >
            SYSTEMS BUILT<br />TO SCALE.
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 border-2 border-black"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {services.map((s, i) => (
            <motion.div
              key={s.number}
              custom={i}
              variants={fadeUp}
              className="p-8 border-b-2 md:border-b-0 md:border-r-2 border-black last:border-0 flex flex-col gap-6"
            >
              <div>
                <span className="font-mono text-[10px] font-bold tracking-[0.22em] uppercase text-zinc-400">{s.number} —</span>
                <h3 className="font-sans font-black text-[22px] uppercase tracking-[-0.02em] leading-tight mt-2 text-black">{s.title}</h3>
              </div>
              <p className="font-sans text-[15px] text-zinc-600 leading-[1.65] flex-1">{s.lede}</p>
              <ul className="space-y-2">
                {s.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] uppercase text-zinc-500">
                    <span className="text-[#FF3000]">→</span>{item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <Button href="#contact" variant="primary" arrow>Start a Project</Button>
          <Button href="#contact" variant="ghost">View Pricing</Button>
        </motion.div>
      </div>
    </section>
  )
}
