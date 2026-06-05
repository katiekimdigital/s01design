'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1] as const

const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/katie-tran/' },
  { label: 'GitHub',   href: 'https://github.com/katiekimdigital' },
  { label: 'Substack', href: 'https://multiplelivestheory.substack.com/' },
]

const navCells = [
  { label: 'About & Services', href: '/about' },
  { label: 'Work (09)',        href: '#work' },
  { label: 'Contact',          href: '#contact' },
]

function useSydneyTime() {
  const [time, setTime] = useState('')
  useEffect(() => {
    const fmt = () =>
      new Intl.DateTimeFormat('en-AU', {
        timeZone: 'Australia/Sydney', hour: '2-digit', minute: '2-digit', hour12: false,
      }).format(new Date())
    setTime(fmt())
    const id = setInterval(() => setTime(fmt()), 30_000)
    return () => clearInterval(id)
  }, [])
  return time
}

export function HeroStudio() {
  const time = useSydneyTime()

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden pt-6 pb-10">
      <div className="w-full max-w-[1280px] mx-auto px-[clamp(20px,5vw,72px)] flex-1 flex flex-col">

        {/* Utility bar */}
        <div className="flex items-center justify-between font-mono text-[11px] tracking-[0.12em] uppercase text-zinc-500">
          <span className="flex items-center gap-2">
            <span className="w-[6px] h-[6px] bg-[#FF3000] inline-block" aria-hidden />
            Sydney · {time || '—'} AEST
          </span>
          <span className="hidden md:inline text-zinc-600">Katie Kim · Web Designer &amp; Developer</span>
          <a href="#contact" className="flex items-center gap-2 hover:text-black transition-colors">
            Menu
            <span className="inline-grid grid-cols-2 gap-[2px]" aria-hidden>
              {[0, 1, 2, 3].map((i) => <span key={i} className="w-[3px] h-[3px] bg-current inline-block" />)}
            </span>
          </a>
        </div>

        {/* Mega wordmark */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="font-sans font-black text-black tracking-[-0.05em] leading-[0.82] mt-5 whitespace-nowrap"
          style={{ fontSize: 'clamp(40px, 14vw, 200px)' }}
        >
          S01.DESIGN
        </motion.h1>

        {/* Segmented nav */}
        <div className="grid grid-cols-3 border-2 border-black mt-6">
          {navCells.map((c, i) => (
            <a
              key={c.label}
              href={c.href}
              className={`text-center py-4 font-sans text-[12px] sm:text-[14px] md:text-[15px] font-medium hover:bg-black hover:text-white transition-colors duration-150 ${i < 2 ? 'border-r-2 border-black' : ''}`}
            >
              {c.label}
            </a>
          ))}
        </div>

        {/* Lower band */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end mt-auto pt-14">

          {/* Left — positioning */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.15 }}
          >
            <div className="flex items-center gap-2 mb-5">
              <span className="w-[7px] h-[7px] bg-[#FF3000] rounded-full-force animate-s01-pulse inline-block" aria-hidden />
              <span className="font-mono text-[11px] font-bold tracking-[0.16em] uppercase text-zinc-600">Currently booking</span>
            </div>

            <h2
              className="font-sans font-black text-black tracking-[-0.02em] leading-[1.05]"
              style={{ fontSize: 'clamp(26px, 3.6vw, 46px)' }}
            >
              Helping Brands &amp; Startups Build Web Systems That Work As Hard As They Look.
            </h2>

            <p className="font-mono text-[11px] tracking-[0.12em] uppercase text-zinc-500 mt-5">
              Web Design · Front-End · Content &amp; SEO · 8+ Yrs Enterprise
            </p>

            <div className="flex flex-wrap gap-2 mt-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-zinc-300 font-mono text-[11px] tracking-[0.1em] uppercase text-zinc-700 hover:border-black hover:text-black transition-colors duration-150"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — featured case */}
          <motion.a
            href="https://farrow-coffee-concept.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.25 }}
            className="group relative border-2 border-black bg-zinc-900 block overflow-hidden aspect-[16/10]"
          >
            <Image
              src="/farrow-thumb-2.png"
              alt="Farrow Coffee — featured case"
              fill
              className="object-cover object-top opacity-90 group-hover:opacity-70 transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
            <span className="absolute top-4 right-4 bg-white text-black font-mono text-[9px] font-bold tracking-[0.18em] uppercase px-3 py-1.5">
              Featured
            </span>
            <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
              <div>
                <p className="font-sans font-black text-white text-[20px] leading-tight group-hover:text-[#FF3000] transition-colors duration-150">
                  Farrow Coffee
                </p>
                <p className="font-mono text-[9px] tracking-[0.14em] uppercase text-zinc-400 mt-1">Brand · Next.js</p>
              </div>
              <span className="font-mono text-[14px] text-white group-hover:text-[#FF3000] transition-colors duration-150">↗</span>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  )
}
