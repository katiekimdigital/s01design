'use client'
import Image from 'next/image'
import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'

const EASE = [0.16, 1, 0.3, 1] as const

const labelStickers = [
  { text: 'SYSTEMATIC BY DESIGN ↗', bg: '#000000', color: '#ffffff', rotate: -2 },
  { text: '8+ YRS ENTERPRISE',       bg: '#FF3000', color: '#ffffff', rotate:  1 },
  { text: 'APAC × 13 MKTS',          bg: '#1a1a1a', color: '#ffffff', rotate: -1 },
]

const photoStickers = [
  { src: '/stickers/pug.png',    alt: 'Pug',    w: 185, h: 225, initialX: 10,  initialY: 60,  rotate: -8 },
  { src: '/stickers/cat.png',    alt: 'Cat',    w: 155, h: 200, initialX: 195, initialY: 0,   rotate:  6 },
  { src: '/stickers/katie.png',  alt: 'Katie',  w: 135, h: 215, initialX: 110, initialY: 80,  rotate:  3 },
  { src: '/stickers/coffee.png', alt: 'Coffee', w: 165, h: 175, initialX: 260, initialY: 100, rotate: -5 },
]

// Sketch arrow SVGs — deliberately imperfect curves to feel hand-drawn
function ArrowCatDog() {
  return (
    <svg width="90" height="70" viewBox="0 0 90 70" fill="none" className="absolute"
      style={{ left: -30, top: 10 }}>
      {/* Wobbly curve from label down-right to pug/cat area */}
      <path
        d="M10,5 C15,20 30,35 55,55 C62,60 68,62 72,60"
        stroke="#1a1a1a" strokeWidth="1.8" strokeLinecap="round"
        fill="none" strokeDasharray="0"
        style={{ filter: 'url(#rough)' }}
      />
      {/* Arrowhead */}
      <path d="M72,60 L62,52 M72,60 L65,68"
        stroke="#1a1a1a" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

function ArrowCafe() {
  return (
    <svg width="80" height="60" viewBox="0 0 80 60" fill="none" className="absolute"
      style={{ right: -10, top: 0 }}>
      {/* Curve from label left to coffee sticker */}
      <path
        d="M70,8 C55,10 40,18 25,35 C18,43 16,50 18,55"
        stroke="#1a1a1a" strokeWidth="1.8" strokeLinecap="round" fill="none"
      />
      <path d="M18,55 L12,44 M18,55 L28,50"
        stroke="#1a1a1a" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export function HeroSection({ studioFramed = false }: { studioFramed?: boolean }) {
  const constraintRef = useRef<HTMLDivElement>(null)

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-20 pb-0 overflow-hidden">

      <div className="flex-1 w-full max-w-[1280px] mx-auto px-[clamp(20px,5vw,72px)] flex items-center">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

          {/* LEFT */}
          <div>
            {/* Studio wordmark — confirms S01.DESIGN on landing (V2 only) */}
            {studioFramed && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE }}
                className="flex items-center gap-2 mb-5"
              >
                <span className="font-sans font-black text-black text-[15px] tracking-[-0.04em] leading-none">S01</span>
                <span className="font-mono font-bold text-[10px] tracking-[0.18em] uppercase text-zinc-500">
                  .design — UX &amp; Front-End Studio · Sydney
                </span>
              </motion.div>
            )}

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: studioFramed ? 0.1 : 0 }}
              className="font-sans font-black text-black leading-[0.88] tracking-[-0.04em] mb-6"
              style={{ fontSize: 'clamp(72px, 13vw, 160px)' }}
            >
              Katie<br />Kim
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.15 }}
            >
              {studioFramed ? (
                <p className="font-sans text-[15px] text-zinc-600 leading-[1.6] max-w-[440px] mb-2">
                  Systematic digital systems for brands that need their site to work — not just look like it works.
                </p>
              ) : (
                <p className="font-sans text-[15px] text-zinc-500 mb-1">
                  UX Architect · Frontend Engineer · Digital Experience Studio
                </p>
              )}
              <p className="font-sans text-[14px] text-zinc-400 flex items-center gap-2">
                <span className="w-[6px] h-[6px] bg-[#FF3000] inline-block shrink-0" aria-hidden />
                {studioFramed
                  ? '8+ yrs enterprise UX · Cochlear · 13 APAC markets'
                  : 'Sydney, Australia · s01.design'}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.25 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Button href="#contact" variant="primary" arrow>Start a Project</Button>
              <Button href="#work" variant="ghost" arrow>See the Work</Button>
            </motion.div>
          </div>

          {/* RIGHT — sticker cluster */}
          <div ref={constraintRef} className="relative flex flex-col items-center md:items-end select-none min-h-[480px] md:min-h-[560px]">

            {/* Label pills */}
            <div className="flex flex-col items-end gap-2 mb-6">
              {labelStickers.map((s, i) => (
                <motion.div
                  key={s.text}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: EASE, delay: 0.2 + i * 0.08 }}
                  style={{ rotate: s.rotate, backgroundColor: s.bg, color: s.color }}
                  className="px-4 py-2 font-mono font-bold text-[11px] tracking-[0.18em] uppercase whitespace-nowrap"
                >
                  {s.text}
                </motion.div>
              ))}
            </div>

            {/* Sticker cluster + sketch labels overlay */}
            <div className="relative w-[420px] h-[300px] scale-[0.85] sm:scale-100 md:scale-[1.22] origin-top">

              {/* ── Sketch label: cat & dog mum ────────────────────────── */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="absolute z-20 pointer-events-none"
                style={{ left: 130, top: -38 }}
              >
                <div className="relative">
                  <span
                    className="font-handwriting text-[18px] text-zinc-700 whitespace-nowrap"
                    style={{ transform: 'rotate(-4deg)', display: 'inline-block' }}
                  >
                    cat &amp; dog mum
                  </span>
                  {/* Arrow curves down-left to the pug */}
                  <svg
                    width="80" height="65"
                    viewBox="0 0 80 65"
                    fill="none"
                    className="absolute"
                    style={{ left: -15, top: 18 }}
                  >
                    <path
                      d="M55,4 C45,12 30,28 18,48 C14,54 10,58 8,60"
                      stroke="#52525B" strokeWidth="1.6" strokeLinecap="round" fill="none"
                    />
                    <path
                      d="M8,60 L4,50 M8,60 L17,56"
                      stroke="#52525B" strokeWidth="1.6" strokeLinecap="round"
                    />
                  </svg>
                </div>
              </motion.div>

              {/* ── Sketch label: cafe lover ───────────────────────────── */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.05, duration: 0.5 }}
                className="absolute z-20 pointer-events-none"
                style={{ left: 210, top: 248 }}
              >
                <div className="relative">
                  <span
                    className="font-handwriting text-[18px] text-zinc-700 whitespace-nowrap"
                    style={{ transform: 'rotate(3deg)', display: 'inline-block' }}
                  >
                    cafe lover
                  </span>
                  {/* Arrow curves up-right to the coffee sticker */}
                  <svg
                    width="75" height="70"
                    viewBox="0 0 75 70"
                    fill="none"
                    className="absolute"
                    style={{ left: 55, top: -52 }}
                  >
                    <path
                      d="M5,65 C10,50 25,30 45,15 C52,10 58,7 62,6"
                      stroke="#52525B" strokeWidth="1.6" strokeLinecap="round" fill="none"
                    />
                    <path
                      d="M62,6 L55,14 M62,6 L70,12"
                      stroke="#52525B" strokeWidth="1.6" strokeLinecap="round"
                    />
                  </svg>
                </div>
              </motion.div>

              {/* Draggable photo stickers */}
              {photoStickers.map((s, i) => (
                <motion.div
                  key={s.src}
                  drag
                  dragMomentum={false}
                  dragConstraints={constraintRef}
                  initial={{ opacity: 0, scale: 0.85, rotate: s.rotate }}
                  animate={{ opacity: 1, scale: 1, rotate: s.rotate }}
                  transition={{ duration: 0.55, ease: EASE, delay: 0.35 + i * 0.07 }}
                  whileDrag={{ scale: 1.06, zIndex: 50, cursor: 'grabbing' }}
                  style={{
                    position: 'absolute',
                    left: s.initialX,
                    top: s.initialY,
                    rotate: s.rotate,
                    cursor: 'grab',
                    zIndex: i + 1,
                  }}
                  className="touch-none"
                >
                  <Image
                    src={s.src}
                    alt={s.alt}
                    width={s.w}
                    height={s.h}
                    className="object-contain pointer-events-none"
                    style={{ background: 'transparent' }}
                    draggable={false}
                  />
                </motion.div>
              ))}

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.4 }}
                className="absolute -bottom-6 right-0 font-mono text-[9px] tracking-[0.16em] uppercase text-zinc-300"
              >
                drag me →
              </motion.p>
            </div>
          </div>

        </div>
      </div>

      {/* Ticker */}
      <div className="mt-16 border-t-2 border-black overflow-hidden bg-white">
        <div className="flex w-max" style={{ animation: 'ticker 30s linear infinite' }}>
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center shrink-0">
              {[
                'Next.js 16', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'React 19',
                'Shopify', 'Webflow', 'WordPress', 'Squarespace', 'Sitecore',
                'UX Architecture', 'Design Systems', 'CMS Migration', 'Brand Governance', 'Template Engineering',
              ].map((skill) => (
                <span
                  key={skill}
                  className="font-mono text-[10px] font-bold tracking-[0.18em] uppercase text-zinc-400 px-8 border-r border-zinc-200 py-3 whitespace-nowrap"
                >
                  {skill}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
