import type { Metadata } from 'next'
import { EyebrowLabel } from '@/components/ui/EyebrowLabel'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'About — Katie Kim · S01.DESIGN',
  description: 'Web designer and developer. 8+ years building web systems across APAC.',
}

const facts: [string, string][] = [
  ['Based in', 'Sydney, Australia'],
  ['Experience', '8+ years, enterprise APAC'],
  ['Most recent', 'APAC Web Lead, Cochlear (2023–25)'],
  ['Stack', 'Sitecore · Next.js · Shopify · React · Figma'],
  ['Languages', 'English · Vietnamese (fluent) · Japanese (learning)'],
  ['Availability', 'Currently booking'],
]

const timeline: { years: string; role: string; org: string; note: string }[] = [
  {
    years: '2024 — Present',
    role: 'Founder & Web Experience Architect',
    org: 'S01.DESIGN · Contra & Toptal',
    note: 'End-to-end web systems, CMS builds, and content strategy for SME and enterprise clients, globally.',
  },
  {
    years: '2023 — 2025',
    role: 'Web Content Specialist & APAC Regional Web Lead',
    org: 'Cochlear Limited (ASX: COH) · Contract',
    note: 'Owned full-cycle web production across 13 APAC markets in Sitecore — 10+ product launches, BAU time cut 50% via 20+ SOPs still in use after my tenure.',
  },
  {
    years: '2022 — 2023',
    role: 'Content Designer / Digital Content Producer',
    org: 'Upskilled / Keypath Education',
    note: 'Rebuilt the student journey across 40+ Canvas LMS courses — lifting completion 25% and engagement 35%.',
  },
  {
    years: '2020 — 2024',
    role: 'Web Developer & Consultant',
    org: 'Simpl Optiml Co · Freelance',
    note: 'Full-lifecycle web design, build, and CMS work for SaaS and health/wellness brands — WCAG and technical SEO as default benchmarks.',
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Top bar — back to studio (pill nav is hidden on this route) */}
      <div className="w-full max-w-[1280px] mx-auto px-[clamp(20px,5vw,72px)] pt-8 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 font-mono text-[11px] font-bold tracking-[0.16em] uppercase text-zinc-500 hover:text-black transition-colors">
          ← S01.DESIGN
        </a>
        <a href="/#contact" className="font-mono text-[11px] font-bold tracking-[0.16em] uppercase text-zinc-500 hover:text-[#FF3000] transition-colors">
          Start a Project
        </a>
      </div>

      {/* Intro */}
      <section className="w-full max-w-[1280px] mx-auto px-[clamp(20px,5vw,72px)] py-[clamp(56px,8vw,96px)]">
        <EyebrowLabel label="About" className="mb-6" />
        <h1
          className="font-sans font-black uppercase text-black leading-[0.92] tracking-[-0.03em] mb-8 max-w-[14ch]"
          style={{ fontSize: 'clamp(40px,7vw,96px)' }}
        >
          Katie Kim
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-[clamp(40px,6vw,96px)]">
          {/* Bio */}
          <div className="space-y-5">
            <p className="font-sans text-[clamp(16px,1.5vw,20px)] text-zinc-700 leading-[1.6]">
              I'm a web designer and developer in Sydney — eight years turning complex, multi-market web work into
              systems that actually ship. I design, build, and write the content behind them.
            </p>
            <p className="font-sans text-[15px] text-zinc-600 leading-[1.7]">
              Most recently I was APAC Web Lead at <strong className="text-black font-semibold">Cochlear</strong> (ASX: COH),
              owning web content production across 13 markets in Sitecore — delivering 10+ product launches and cutting
              BAU production time by 50% through SOP-driven workflows that are still in use after I left. Before that,
              content design at <strong className="text-black font-semibold">Upskilled / Keypath</strong> across 40+
              university courses on Canvas LMS, where rebuilding the information architecture lifted completion 25%.
            </p>
            <p className="font-sans text-[15px] text-zinc-600 leading-[1.7]">
              Across the years that's spanned enterprise, health, pharma, EdTech, and Shopify brands — deep capability
              in Sitecore, WordPress, Webflow, Shopify and HubSpot, paired with technical SEO, WCAG accessibility,
              UX writing, and a modern front end (React, Next.js, Tailwind). Today I run{' '}
              <strong className="text-black font-semibold">S01.DESIGN</strong> as a studio of one, and founded
              Namisan Matcha (Shopify) and{' '}
              <a href="https://www.etsy.com/shop/bys01design" target="_blank" rel="noopener noreferrer" className="text-black underline decoration-[#FF3000] decoration-2 underline-offset-2 hover:text-[#FF3000] transition-colors">
                bys01design
              </a>{' '}
              (Etsy templates) on the side.
            </p>
            <p className="font-sans text-[15px] text-zinc-600 leading-[1.7]">
              Outside the studio: cat and dog mum, devoted café-table regular, and slowly building a more intentional
              life — with a soft spot for Japan and the art of doing fewer things, better. I write about that at{' '}
              <a href="https://multiplelivestheory.substack.com/" target="_blank" rel="noopener noreferrer" className="text-black underline decoration-[#FF3000] decoration-2 underline-offset-2 hover:text-[#FF3000] transition-colors">
                Multiple Lives Theory
              </a>.
            </p>
            <div className="pt-2">
              <Button href="/#contact" variant="primary" arrow>Work Together</Button>
            </div>
          </div>

          {/* Facts */}
          <div className="flex flex-col justify-start">
            <div className="border-2 border-black">
              {facts.map(([k, v], i) => (
                <div
                  key={k}
                  className={`flex items-start justify-between gap-6 px-6 py-4 ${i < facts.length - 1 ? 'border-b border-zinc-200' : ''}`}
                >
                  <span className="font-mono text-[10px] font-bold tracking-[0.18em] uppercase text-zinc-400 shrink-0 pt-0.5">{k}</span>
                  <span className="font-sans text-[14px] text-black font-medium text-right">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="border-t-4 border-black py-[clamp(56px,8vw,96px)]">
        <div className="w-full max-w-[1280px] mx-auto px-[clamp(20px,5vw,72px)]">
          <EyebrowLabel number="01" label="Experience" className="mb-12" />
          <div className="border-2 border-black">
            {timeline.map((t, i) => (
              <div
                key={t.org}
                className={`grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-8 px-6 py-7 ${i < timeline.length - 1 ? 'border-b-2 border-black' : ''}`}
              >
                <span className="font-mono text-[11px] font-bold tracking-[0.14em] uppercase text-[#FF3000] pt-1">{t.years}</span>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-sans font-black text-[18px] uppercase tracking-[-0.02em] text-black leading-tight">{t.role}</h3>
                  <p className="font-mono text-[10px] font-bold tracking-[0.14em] uppercase text-zinc-500">{t.org}</p>
                  <p className="font-sans text-[14px] text-zinc-600 leading-[1.6] mt-1">{t.note}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 font-mono text-[10px] tracking-[0.14em] uppercase text-zinc-400">
            · BSc (Adv) STEM, Western Sydney · Cert IV Web Development (HD) · HubSpot Content Marketing · UX Writing · W3Cx Accessibility · CS50 ·
          </p>
        </div>
      </section>
    </main>
  )
}
