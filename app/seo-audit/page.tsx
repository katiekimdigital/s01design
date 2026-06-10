import type { Metadata } from 'next'
import { EyebrowLabel } from '@/components/ui/EyebrowLabel'
import { Button } from '@/components/ui/Button'
import { StatusDot } from '@/components/ui/StatusDot'
import { SnapshotForm } from '@/components/sections/SnapshotForm'

export const metadata: Metadata = {
  title: 'Free SEO Snapshot + Full SEO Audit — S01.DESIGN',
  description:
    'Get a free lo-fi SEO snapshot of your website — your 3 biggest blockers in 48 hours, no call required. Full technical + content SEO audit from $450 AUD.',
}

const fullAuditIncludes = [
  'Full technical crawl — indexing, speed, Core Web Vitals',
  'On-page audit — metadata, headings, content structure',
  'Keyword gap snapshot vs your competitors',
  'Prioritised fix roadmap, in plain English',
  'Written report + 30-min walkthrough call',
]

const steps: [string, string][] = [
  ['01', 'Drop your URL — get the free snapshot within 48 hours.'],
  ['02', 'Want the rest fixed? Book the full audit from $450.'],
  ['03', 'Audit fee credited against a Sprint if you continue.'],
]

export default function SeoAuditPage() {
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

      {/* Hero */}
      <section className="w-full max-w-[1280px] mx-auto px-[clamp(20px,5vw,72px)] py-[clamp(56px,8vw,96px)]">
        <EyebrowLabel label="Free SEO Snapshot" className="mb-6" />
        <h1
          className="font-sans font-black uppercase text-black leading-[0.92] tracking-[-0.03em] mb-8 max-w-[16ch]"
          style={{ fontSize: 'clamp(40px,6.5vw,88px)' }}
        >
          Find out why Google isn't finding you.
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-[clamp(32px,5vw,80px)] items-start">
          <p className="font-sans text-[clamp(16px,1.5vw,20px)] text-zinc-700 leading-[1.6] max-w-[52ch]">
            Drop your URL below. Within 48 hours you get a free one-page, lo-fi SEO snapshot —
            the three biggest things blocking your site in search and what they're costing you.
            No meeting required.
          </p>
          <StatusDot label="Snapshots open — limited per week" />
        </div>
      </section>

      {/* Free snapshot form — the lead magnet */}
      <section id="snapshot" className="border-t-4 border-black py-[clamp(56px,8vw,96px)] bg-black bg-override">
        <div className="w-full max-w-[1280px] mx-auto px-[clamp(20px,5vw,72px)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(40px,8vw,120px)]">
            <div>
              <EyebrowLabel
                number="01"
                label="Get the Free Snapshot"
                className="mb-6 [&>span]:text-zinc-600 [&>div]:bg-zinc-800"
              />
              <h2
                className="font-sans font-black uppercase text-white leading-[0.90] tracking-[-0.03em] mb-6"
                style={{ fontSize: 'clamp(32px,4.5vw,56px)' }}
              >
                FREE.<br />ACTUALLY FREE.
              </h2>
              <p className="font-sans text-[15px] text-zinc-400 leading-[1.65] max-w-[46ch]">
                One page. Your three biggest SEO blockers, ranked by impact, written in plain
                English. If you can fix them yourself — great, go do it. If you'd rather I did,
                the full audit is below.
              </p>
            </div>
            <div>
              <SnapshotForm />
            </div>
          </div>
        </div>
      </section>

      {/* Full audit — the upsell */}
      <section className="border-t-4 border-black py-[clamp(56px,8vw,96px)] bg-[#F2F2F2] bg-override">
        <div className="w-full max-w-[1280px] mx-auto px-[clamp(20px,5vw,72px)]">
          <EyebrowLabel number="02" label="Want the Full Picture?" className="mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-2 border-black bg-white">
            {/* Offer */}
            <div className="p-8 border-b-2 md:border-b-0 md:border-r-2 border-black flex flex-col gap-6">
              <div>
                <h2 className="font-sans font-black text-[clamp(26px,3vw,38px)] uppercase tracking-[-0.03em] text-black leading-tight">
                  The Full SEO Audit
                </h2>
                <p className="font-sans font-black text-[clamp(24px,2.5vw,32px)] leading-none tracking-[-0.04em] text-black mt-4">
                  From $450
                </p>
                <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-zinc-400 mt-1">AUD · one-off</p>
                <p className="font-mono text-[10px] font-bold tracking-[0.14em] uppercase text-[#FF3000] mt-1">5-day delivery</p>
              </div>
              <p className="font-sans text-[14px] text-zinc-600 leading-[1.65]">
                Everything the snapshot can't cover — a full technical and content audit of your
                site with a prioritised roadmap, so you know exactly what to fix and in what order.
              </p>
              <div className="h-px bg-zinc-200" />
              <ul className="flex flex-col gap-2.5">
                {fullAuditIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 font-sans text-[13px] leading-snug text-zinc-600">
                    <span className="text-[#FF3000] shrink-0 mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="font-mono text-[9px] tracking-[0.12em] uppercase leading-relaxed text-zinc-400">
                Best for: sites that look good but don't get found.
              </p>
              <Button href="/#contact" variant="accent" arrow>Book the Full Audit</Button>
            </div>

            {/* How the funnel runs */}
            <div className="p-8 flex flex-col justify-center gap-6 bg-black">
              <span className="font-mono text-[10px] font-bold tracking-[0.22em] uppercase text-zinc-500">
                How it works
              </span>
              <div className="flex flex-col gap-5">
                {steps.map(([num, text]) => (
                  <div key={num} className="flex items-start gap-4">
                    <span className="font-mono text-[11px] font-bold tracking-[0.14em] text-[#FF3000] pt-0.5 shrink-0">{num}</span>
                    <p className="font-sans text-[14px] text-zinc-300 leading-[1.6]">{text}</p>
                  </div>
                ))}
              </div>
              <div className="h-px bg-zinc-800" />
              <p className="font-mono text-[9px] tracking-[0.14em] uppercase text-zinc-500 leading-relaxed">
                · Fixed scope, fixed price · + GST for Australian clients · Response within 24 hours ·
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
