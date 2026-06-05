'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'

const EASE = [0.16, 1, 0.3, 1] as const

const metrics = [
  { prefix: '−', value: 50, suffix: '%', label: 'BAU production time', context: 'Cochlear, 13 markets' },
  { prefix: '+', value: 25, suffix: '%', label: 'Course completion', context: 'Upskilled, 40+ courses' },
  { prefix: '', value: 13, suffix: '', label: 'Markets owned', context: 'APAC · EU · CAM' },
  { prefix: '', value: 40, suffix: '+', label: 'Projects shipped', context: 'Enterprise → boutique' },
]

// Counts up on mount (the hero IS the proof)
function CountUp({ to, delay = 0, duration = 1500 }: { to: number; delay?: number; duration?: number }) {
  const [n, setN] = useState(0)
  useEffect(() => {
    let raf = 0
    let start = 0
    const startAt = performance.now() + delay
    const tick = (now: number) => {
      if (now < startAt) { raf = requestAnimationFrame(tick); return }
      if (!start) start = now
      const t = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setN(Math.round(eased * to))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [to, delay, duration])
  return <span>{n}</span>
}

export function HeroResults() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden pt-6 pb-10">
      <div className="w-full max-w-[1280px] mx-auto px-[clamp(20px,5vw,72px)] flex-1 flex flex-col">

        {/* Utility row */}
        <div className="flex items-center justify-between font-mono text-[11px] tracking-[0.12em] uppercase text-zinc-500">
          <span className="flex items-center gap-2 text-black">
            <span className="w-[6px] h-[6px] bg-[#FF3000] inline-block" aria-hidden />
            S01.DESIGN · Web Designer &amp; Developer
          </span>
          <a href="#contact" className="hover:text-[#FF3000] transition-colors">Start a Project ↗</a>
        </div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mt-[clamp(32px,6vw,72px)] max-w-[16ch]"
        >
          <p className="font-mono text-[11px] font-bold tracking-[0.2em] uppercase text-[#FF3000] mb-5">
            ● Currently booking — Q3 2026
          </p>
          <h1
            className="font-sans font-black text-black tracking-[-0.04em] leading-[0.9]"
            style={{ fontSize: 'clamp(40px, 6.5vw, 96px)' }}
          >
            Design measured<br />in outcomes.
          </h1>
          <p className="font-sans text-[clamp(16px,1.5vw,20px)] text-zinc-600 leading-[1.55] mt-6 max-w-[540px]">
            Enterprise-grade web systems, designed and built by Katie Kim. I don't sell redesigns — I sell results.
            The numbers do the talking.
          </p>
        </motion.div>

        {/* The proof — giant metrics counting up on load */}
        <div className="mt-auto pt-[clamp(40px,6vw,80px)] grid grid-cols-2 lg:grid-cols-4 border-t-2 border-black">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE, delay: 0.2 + i * 0.1 }}
              className={`py-6 lg:py-8 flex flex-col gap-2
                ${i < metrics.length - 1 ? 'lg:border-r-2 lg:border-black' : ''}
                ${i % 2 === 0 ? 'border-r-2 border-black lg:border-r-2' : ''}
                ${i < 2 ? 'border-b-2 border-black lg:border-b-0' : ''}
                ${i === 0 ? 'pr-6 lg:pl-0 lg:pr-8' : 'px-6 lg:px-8'}`}
            >
              <span className="font-sans font-black text-black leading-[0.85] tracking-[-0.05em]" style={{ fontSize: 'clamp(52px,8vw,116px)' }}>
                <span className="text-[#FF3000]">{m.prefix}</span><CountUp to={m.value} delay={i * 120} />{m.suffix}
              </span>
              <span className="font-sans font-bold text-[14px] text-black leading-tight">{m.label}</span>
              <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-zinc-400">{m.context}</span>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3 mt-8">
          <Button href="#work" variant="primary" arrow>See the Work</Button>
          <Button href="#contact" variant="ghost" arrow>Start a Project</Button>
          <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-zinc-400 ml-1">References on request</span>
        </div>
      </div>
    </section>
  )
}
