'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'

const EASE = [0.16, 1, 0.3, 1] as const

const specRows: [string, string][] = [
  ['Studio', 'S01.DESIGN'],
  ['Lead', 'Katie Kim — Web Designer & Developer'],
  ['Disciplines', 'Web design · Front-end · Content & SEO'],
  ['Experience', '8+ yrs enterprise'],
  ['Markets', 'APAC · EU · CAM — open to global'],
  ['Stack', 'Next.js · Shopify · Sitecore · React'],
  ['Status', 'Booking — Q3 2026'],
]

function useSydneyTime() {
  const [time, setTime] = useState('')
  useEffect(() => {
    const fmt = () =>
      new Intl.DateTimeFormat('en-AU', { timeZone: 'Australia/Sydney', hour: '2-digit', minute: '2-digit', hour12: false }).format(new Date())
    setTime(fmt())
    const id = setInterval(() => setTime(fmt()), 30_000)
    return () => clearInterval(id)
  }, [])
  return time
}

export function HeroSpec() {
  const time = useSydneyTime()

  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Status bar */}
      <div className="border-b-2 border-black">
        <div className="w-full max-w-[1280px] mx-auto px-[clamp(20px,5vw,72px)] py-3 flex items-center justify-between gap-4 font-mono text-[10px] sm:text-[11px] tracking-[0.14em] uppercase">
          <span className="flex items-center gap-2 text-black shrink-0">
            <span className="w-[7px] h-[7px] bg-[#FF3000] rounded-full-force animate-s01-pulse inline-block" aria-hidden />
            <span className="hidden sm:inline">All systems operational</span>
            <span className="sm:hidden">Online</span>
          </span>
          <nav className="flex items-center gap-3 sm:gap-5">
            <a href="#work" className="text-zinc-600 hover:text-[#FF3000] transition-colors">Work</a>
            <a href="/about" className="text-zinc-600 hover:text-[#FF3000] transition-colors">About</a>
            <a href="#pricing" className="hidden sm:inline text-zinc-600 hover:text-[#FF3000] transition-colors">Pricing</a>
            <a href="#contact" className="text-zinc-600 hover:text-[#FF3000] transition-colors">Contact</a>
          </nav>
          <span className="hidden md:inline text-zinc-500 shrink-0">SYD {time || '—'}</span>
        </div>
      </div>

      {/* Spec body */}
      <div className="flex-1 w-full max-w-[1280px] mx-auto px-[clamp(20px,5vw,72px)] py-[clamp(40px,7vw,90px)] grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-[clamp(32px,5vw,72px)] items-center">

        {/* Left — spec title */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <p className="font-mono text-[11px] font-bold tracking-[0.2em] uppercase text-[#FF3000] mb-6">
            Specification / 00 — Studio
          </p>
          <h1
            className="font-sans font-black text-black tracking-[-0.045em] leading-[0.85]"
            style={{ fontSize: 'clamp(52px, 9vw, 132px)' }}
          >
            S01<span className="text-[#FF3000]">.</span>DESIGN
          </h1>
          <p className="font-sans text-[clamp(16px,1.6vw,21px)] text-zinc-700 leading-[1.5] mt-6 max-w-[520px]">
            A web systems studio — designed, built, and maintained by Katie Kim. Enterprise rigour, boutique attention.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <Button href="#contact" variant="primary" arrow>Start a Project</Button>
            <Button href="#work" variant="ghost" arrow>View the Work</Button>
          </div>
        </motion.div>

        {/* Right — datasheet */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
          className="border-2 border-black"
        >
          <div className="border-b-2 border-black px-4 py-2.5 bg-black">
            <span className="font-mono text-[9px] font-bold tracking-[0.2em] uppercase text-white">// studio.spec</span>
          </div>
          {specRows.map(([k, v], i) => (
            <div key={k} className={`grid grid-cols-[96px_1fr] sm:grid-cols-[120px_1fr] ${i < specRows.length - 1 ? 'border-b border-zinc-200' : ''}`}>
              <div className="border-r border-zinc-200 px-4 py-3 font-mono text-[9px] font-bold tracking-[0.16em] uppercase text-zinc-400">
                {k}
              </div>
              <div className="px-4 py-3 font-sans text-[13px] text-black flex items-center gap-2">
                {k === 'Status' && <span className="w-[6px] h-[6px] bg-[#FF3000] rounded-full-force inline-block shrink-0" aria-hidden />}
                {v}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
