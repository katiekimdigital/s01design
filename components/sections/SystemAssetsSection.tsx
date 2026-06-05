'use client'
import { motion } from 'framer-motion'
import { EyebrowLabel } from '@/components/ui/EyebrowLabel'
import { Button } from '@/components/ui/Button'

const EASE = [0.16, 1, 0.3, 1] as const

const ETSY_URL = 'https://www.etsy.com/shop/bys01design'

const assets = [
  {
    name: 'Portfolio Template Kit',
    price: 'From $49',
    format: 'Next.js · Framer Motion',
    description: 'The system behind this site — a Swiss-grid portfolio starter. Drop in your work and ship.',
    items: ['Editorial bento grid', 'Scroll-reveal motion', 'Fully responsive'],
  },
  {
    name: 'Design System Starter',
    price: 'From $89',
    format: 'Tailwind · Tokens',
    description: 'Component library and design tokens — buttons, eyebrows, grids, the lot. Documented and extractable.',
    items: ['Token architecture', 'Core components', 'Usage documentation'],
  },
  {
    name: 'Shopify Editorial Theme',
    price: 'From $149',
    format: 'Shopify · Dawn base',
    description: 'Section-schema theme for editorial commerce — the Namisan approach, productised.',
    items: ['Section schema', 'Metafields setup', 'Performance-tuned'],
  },
]

export function SystemAssetsSection() {
  return (
    <section id="assets" className="border-t-4 border-black py-[clamp(72px,10vw,120px)]">
      <div className="w-full max-w-[1280px] mx-auto px-[clamp(20px,5vw,72px)]">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-14"
        >
          <EyebrowLabel label="System Assets" accent className="mb-6" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
            <h2
              className="font-sans font-black uppercase text-black leading-[0.90] tracking-[-0.03em]"
              style={{ fontSize: 'clamp(36px,5vw,68px)' }}
            >
              NOT READY FOR<br />A FULL PROJECT?
            </h2>
            <p className="font-sans text-[15px] text-zinc-600 leading-[1.65] max-w-[460px]">
              Productised templates and kits — the same systems I build for clients, packaged for you to run yourself.
              One-time purchase, yours to keep.
            </p>
          </div>
        </motion.div>

        {/* Asset cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-2 border-black">
          {assets.map((a, i) => (
            <motion.div
              key={a.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: EASE, delay: i * 0.1 }}
              className="p-8 border-b-2 md:border-b-0 md:border-r-2 border-black last:border-0 flex flex-col gap-6"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-[10px] font-bold tracking-[0.22em] uppercase text-zinc-400">{a.format}</span>
                <span className="font-mono text-[10px] font-bold tracking-[0.14em] uppercase text-[#FF3000]">{a.price}</span>
              </div>

              <h3 className="font-sans font-black text-[20px] uppercase tracking-[-0.02em] leading-tight text-black">{a.name}</h3>

              <p className="font-sans text-[14px] text-zinc-600 leading-[1.65] flex-1">{a.description}</p>

              <ul className="space-y-2">
                {a.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] uppercase text-zinc-500">
                    <span className="text-[#FF3000]">→</span>{item}
                  </li>
                ))}
              </ul>

              <Button href={ETSY_URL} variant="ghost" className="border-zinc-300 w-full justify-center" arrow>
                Get on Etsy
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.3 }}
          className="mt-8 font-mono text-[10px] tracking-[0.14em] uppercase text-zinc-400 flex items-center gap-2"
        >
          <span className="text-[#FF3000]">·</span>
          Instant download · Lifetime updates · Built and maintained by bys01design
        </motion.p>

      </div>
    </section>
  )
}
