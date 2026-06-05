'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1] as const

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: EASE, delay: i * 0.07 },
  }),
}

interface Project {
  href: string
  img: string
  imgPosition?: string  // tailwind object-position class
  type: string
  title: string
  descriptor: string
  meta: [string, string][]
  palette: string[]
  index: number
}

// Editorial split tile — photo on top, case-study block (descriptor + meta + palette + CTA) below
function ProjectTile({ href, img, imgPosition = 'object-center', type, title, descriptor, meta, palette, index }: Project) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      custom={index}
      variants={fadeUp}
      className="group relative border-2 border-black bg-white flex flex-col aspect-square overflow-hidden"
    >
      {/* Photo — top */}
      <div className="relative h-[55%] overflow-hidden bg-zinc-900">
        <Image
          src={img}
          alt={title}
          fill
          className={`object-cover ${imgPosition} opacity-90 group-hover:opacity-60 transition-opacity duration-300`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <p className="font-mono text-[9px] font-bold tracking-[0.18em] uppercase text-zinc-400 mb-1">{type}</p>
          <p className="font-sans font-black text-white text-[20px] leading-tight group-hover:text-[#FF3000] transition-colors duration-150">{title}</p>
        </div>
      </div>

      {/* Case-study block */}
      <div className="flex-1 p-5 flex flex-col justify-between gap-4">
        <p className="font-sans text-[13px] text-zinc-600 leading-[1.6]">{descriptor}</p>

        <div className="flex flex-col gap-4">
          {/* Meta row */}
          <div className="grid grid-cols-3 gap-2 border-t border-zinc-200 pt-3">
            {meta.map(([k, v]) => (
              <div key={k} className="flex flex-col gap-0.5">
                <span className="font-mono text-[8px] font-bold tracking-[0.16em] uppercase text-zinc-400">{k}</span>
                <span className="font-sans text-[11px] text-black font-medium leading-tight">{v}</span>
              </div>
            ))}
          </div>

          {/* Palette + CTA */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5" aria-hidden>
              {palette.map((c) => (
                <span key={c} className="w-4 h-4 border border-black" style={{ backgroundColor: c }} />
              ))}
            </div>
            <span className="font-mono text-[10px] font-bold tracking-[0.16em] uppercase text-black group-hover:text-[#FF3000] transition-colors duration-150">
              View Project ↗
            </span>
          </div>
        </div>
      </div>
    </motion.a>
  )
}

// Cochlear — editorial split, matching the project tiles
function CochlearTile({ index }: { index: number }) {
  const palette = ['#3B1B6C', '#F1BE24', '#F0F1F3', '#2D2D2D']
  const meta: [string, string][] = [['Role', 'APAC Web Lead'], ['Type', 'Enterprise'], ['Platform', 'Sitecore']]
  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      className="group relative border-2 border-black bg-white flex flex-col aspect-square overflow-hidden"
    >
      {/* Photo — top */}
      <div className="relative h-[55%] overflow-hidden bg-black">
        <Image
          src="/cochlear-thumb.png"
          alt="Cochlear APAC"
          fill
          className="object-cover object-top opacity-45 group-hover:opacity-30 transition-opacity duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
        <div className="absolute top-5 left-5">
          <Image
            src="/cochlear.png"
            alt="Cochlear"
            width={104}
            height={32}
            className="object-contain object-left brightness-0 invert opacity-90"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <p className="font-mono text-[9px] font-bold tracking-[0.18em] uppercase text-zinc-300 mb-1">
            ASX:COH · Contract · 2 yrs
          </p>
          <p className="font-sans font-black text-white text-[20px] leading-tight">APAC Web Operations</p>
        </div>
      </div>

      {/* Case-study block */}
      <div className="flex-1 p-5 flex flex-col justify-between gap-4">
        <p className="font-sans text-[13px] text-zinc-600 leading-[1.6]">
          Owned full-cycle web production across 13 APAC markets in Sitecore — 10+ product launches and BAU time cut 50%.
        </p>
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-3 gap-2 border-t border-zinc-200 pt-3">
            {meta.map(([k, v]) => (
              <div key={k} className="flex flex-col gap-0.5">
                <span className="font-mono text-[8px] font-bold tracking-[0.16em] uppercase text-zinc-400">{k}</span>
                <span className="font-sans text-[11px] text-black font-medium leading-tight">{v}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5" aria-hidden>
              {palette.map((c) => (
                <span key={c} className="w-4 h-4 border border-black" style={{ backgroundColor: c }} />
              ))}
            </div>
            <span className="font-mono text-[10px] font-bold tracking-[0.16em] uppercase text-zinc-400">
              Case study on request
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function StatTile({ number, label, index }: { number: string; label: string; index: number }) {
  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      className="border-2 border-black bg-white p-6 flex flex-col justify-end aspect-square"
    >
      <span className="font-sans font-black text-[clamp(40px,5vw,64px)] leading-none tracking-[-0.04em] text-black">{number}</span>
      <span className="font-mono text-[10px] font-bold tracking-[0.18em] uppercase text-zinc-400 mt-2">{label}</span>
    </motion.div>
  )
}

function OpenTile({ index }: { index: number }) {
  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      className="border-2 border-[#FF3000] bg-[#FF3000] p-6 flex flex-col justify-between aspect-square bg-override"
    >
      <span className="font-mono text-[10px] font-bold tracking-[0.22em] uppercase text-white/70">OPEN</span>
      <div>
        <p className="font-sans font-black text-white text-[22px] leading-tight tracking-[-0.02em]">
          Currently<br />booking
        </p>
      </div>
    </motion.div>
  )
}

function StackTile({ index }: { index: number }) {
  const buildStack = ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel']
  const cmsStack   = ['Shopify', 'Webflow', 'WordPress', 'Squarespace', 'Sanity', 'CMS Migration']

  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      className="border-2 border-black bg-black p-6 flex flex-col justify-between aspect-square bg-override"
    >
      <span className="font-mono text-[10px] font-bold tracking-[0.22em] uppercase text-zinc-500">STACK</span>

      <div className="grid grid-cols-2 gap-x-4 gap-y-1">
        {/* Build column */}
        <div className="flex flex-col gap-1">
          <span className="font-mono text-[8px] font-bold tracking-[0.18em] uppercase text-zinc-700 mb-1">BUILD</span>
          {buildStack.map((s) => (
            <span key={s} className="font-mono text-[10px] text-zinc-400 flex items-center gap-1.5">
              <span className="text-[#FF3000] text-[8px]">·</span>{s}
            </span>
          ))}
        </div>

        {/* CMS column */}
        <div className="flex flex-col gap-1">
          <span className="font-mono text-[8px] font-bold tracking-[0.18em] uppercase text-zinc-700 mb-1">CMS</span>
          {cmsStack.map((s) => (
            <span key={s} className="font-mono text-[10px] text-zinc-400 flex items-center gap-1.5">
              <span className="text-[#FF3000] text-[8px]">·</span>{s}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

const projects: Project[] = [
  {
    href: 'https://namisan.com.au',
    img: '/namisan-thumb.png',
    imgPosition: 'object-top',            // matcha hero is at the top
    type: 'Shopify · Editorial Commerce',
    title: 'Namisan Matcha',
    descriptor: 'Editorial Shopify build for a Japanese matcha brand — custom theme, structured product content, and a conversion-focused storefront.',
    meta: [['Role', 'Design + Build'], ['Type', 'Commerce'], ['Platform', 'Shopify']],
    palette: ['#2A603B', '#6AA83C', '#443229', '#F1E7D4'],
    index: 0,
  },
  {
    href: 'https://precious-dusk-c1dd17.netlify.app',
    img: '/press-flat-thumb.png',
    imgPosition: 'object-top object-left', // bold type is top-left
    type: 'Next.js · Editorial',
    title: 'Press Flat',
    descriptor: 'Concept site for a risograph print studio — bold editorial type, a print-inspired grid, and a fast Next.js front end.',
    meta: [['Role', 'Brand + Build'], ['Type', 'Editorial'], ['Stack', 'Next.js']],
    palette: ['#1A1A1A', '#F2EDE6', '#E03A1E', '#1B4FD8', '#D4B800'],
    index: 1,
  },
  {
    href: 'https://seve-botanicals-staging.netlify.app',
    img: '/seve-thumb.png',
    imgPosition: 'object-center',          // centered luxury layout
    type: 'Next.js · Luxury Commerce',
    title: 'SÈVE Botanicals',
    descriptor: 'Luxury commerce concept for a botanical fragrance house — a restrained editorial system, built in Next.js.',
    meta: [['Role', 'Design + Build'], ['Type', 'Commerce'], ['Stack', 'Next.js']],
    palette: ['#1F271D', '#5E6B4F', '#C9A96A', '#F1EDE4'],
    index: 2,
  },
  {
    href: 'https://farrow-coffee-concept.netlify.app',
    img: '/farrow-thumb-2.png',
    imgPosition: 'object-top',
    type: 'Next.js · Brand Direction',
    title: 'Farrow Coffee',
    descriptor: 'Brand direction and concept build for a specialty coffee roaster — editorial layout, custom type, full Next.js front end.',
    meta: [['Role', 'Brand + Build'], ['Type', 'Concept'], ['Stack', 'Next.js']],
    palette: ['#1E140E', '#6F4326', '#B07C4F', '#E7D8C3'],
    index: 3,
  },
]

// Upskilled LMS — editorial split with a colour panel (no public URL → internal/NDA)
function LmsTile({ index }: { index: number }) {
  const palette = ['#3B28CC', '#4F12F9', '#E8F6F5', '#222222']
  const meta: [string, string][] = [['Role', 'UX + Content'], ['Type', 'EdTech'], ['Platform', 'Canvas']]
  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      className="group relative border-2 border-black bg-white flex flex-col aspect-square overflow-hidden"
    >
      {/* Screenshot — top */}
      <div className="relative h-[55%] overflow-hidden bg-[#3B28CC]">
        <Image
          src="/upskilled-thumb.png"
          alt="Upskilled LMS redesign"
          fill
          className="object-cover object-top opacity-95 group-hover:opacity-70 transition-opacity duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <p className="font-mono text-[9px] font-bold tracking-[0.18em] uppercase text-zinc-300 mb-1">
            Canvas LMS · UX Redesign
          </p>
          <p className="font-sans font-black text-white text-[20px] leading-tight">Upskilled LMS</p>
        </div>
      </div>

      {/* Case-study block */}
      <div className="flex-1 p-5 flex flex-col justify-between gap-4">
        <p className="font-sans text-[13px] text-zinc-600 leading-[1.6]">
          Rebuilt the student journey across 40+ courses on Canvas LMS — IA, UX writing, and content design that
          lifted course completion 25% and engagement 35%.
        </p>
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-3 gap-2 border-t border-zinc-200 pt-3">
            {meta.map(([k, v]) => (
              <div key={k} className="flex flex-col gap-0.5">
                <span className="font-mono text-[8px] font-bold tracking-[0.16em] uppercase text-zinc-400">{k}</span>
                <span className="font-sans text-[11px] text-black font-medium leading-tight">{v}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5" aria-hidden>
              {palette.map((c) => (
                <span key={c} className="w-4 h-4 border border-black" style={{ backgroundColor: c }} />
              ))}
            </div>
            <span className="font-mono text-[10px] font-bold tracking-[0.16em] uppercase text-zinc-400">
              Case study on request
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function BentoGrid({ showLms = false }: { showLms?: boolean }) {
  return (
    <section id="work" className="border-t-4 border-black">
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        {/* Row 1 — Namisan, Press Flat, SÈVE */}
        {projects.slice(0, 3).map((p) => (
          <ProjectTile key={p.title} {...p} />
        ))}

        {/* Row 2 — Farrow + (Upskilled LMS on V2) + Cochlear */}
        <ProjectTile {...projects[3]} />
        {showLms && <LmsTile index={4} />}
        <CochlearTile index={5} />

        {/* Stats + studio tiles */}
        <StatTile number="40+" label="Projects Shipped" index={6} />
        <OpenTile index={7} />
        <StackTile index={8} />
      </motion.div>
    </section>
  )
}
