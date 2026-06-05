'use client'
import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { EyebrowLabel } from '@/components/ui/EyebrowLabel'

const EASE = [0.16, 1, 0.3, 1] as const

const metrics = [
  { prefix: '−', value: 50, suffix: '%', label: 'BAU production time', context: 'Cochlear · 13 markets, Sitecore' },
  { prefix: '+', value: 25, suffix: '%', label: 'Course completion', context: 'Upskilled · 40+ Canvas courses' },
  { prefix: '', value: 13, suffix: '', label: 'APAC markets owned', context: 'Multi-market web operations' },
  { prefix: '', value: 40, suffix: '+', label: 'Projects shipped', context: 'Enterprise → boutique brands' },
]

function CountUp({ to, duration = 1400 }: { to: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!inView) return
    let raf = 0
    const start = performance.now()
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - t, 3) // easeOutCubic
      setN(Math.round(eased * to))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, to, duration])

  return <span ref={ref}>{n}</span>
}

export function SpecMetrics() {
  return (
    <section className="border-t-4 border-black py-[clamp(60px,9vw,110px)]">
      <div className="w-full max-w-[1280px] mx-auto px-[clamp(20px,5vw,72px)]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-12"
        >
          <EyebrowLabel label="Measured Output" accent className="mb-6" />
          <h2
            className="font-sans font-black uppercase text-black leading-[0.90] tracking-[-0.03em]"
            style={{ fontSize: 'clamp(40px,6vw,84px)' }}
          >
            PROOF,<br />NOT POLISH.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-2 border-black">
          {metrics.map((m, i) => (
            <div
              key={m.label}
              className={`p-7 flex flex-col gap-3 border-black
                ${i < metrics.length - 1 ? 'border-b-2 lg:border-b-0 lg:border-r-2' : ''}
                ${i % 2 === 0 ? 'sm:border-r-2 lg:border-r-2' : ''}
                ${i < 2 ? 'sm:border-b-2 lg:border-b-0' : ''}`}
            >
              <span className="font-sans font-black text-black leading-none tracking-[-0.04em]" style={{ fontSize: 'clamp(44px,5vw,68px)' }}>
                <span className="text-[#FF3000]">{m.prefix}</span><CountUp to={m.value} />{m.suffix}
              </span>
              <span className="font-sans font-bold text-[14px] text-black leading-tight">{m.label}</span>
              <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-zinc-400 leading-relaxed">{m.context}</span>
            </div>
          ))}
        </div>

        <p className="mt-6 font-mono text-[10px] tracking-[0.14em] uppercase text-zinc-400">
          · Figures from delivered enterprise engagements · References on request ·
        </p>
      </div>
    </section>
  )
}
