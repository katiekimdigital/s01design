'use client'
import { useState } from 'react'

export function SnapshotForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    try {
      const res = await fetch('https://formspree.io/f/meendzaw', {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })
      setStatus(res.ok ? 'sent' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="flex flex-col items-start gap-3 py-2">
        <span className="font-mono text-[10px] font-bold tracking-[0.22em] uppercase text-[#FF3000]">SENT ✓</span>
        <h3 className="font-sans font-black text-white text-[24px] uppercase tracking-[-0.03em] leading-tight">
          Snapshot on the way.
        </h3>
        <p className="font-sans text-[14px] text-zinc-400 leading-[1.65]">
          Your free lo-fi SEO snapshot lands in your inbox within 48 hours. No call, no pitch — just the three things holding your site back.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <input type="hidden" name="_subject" value="Free SEO snapshot request — s01.design" />
      <input type="hidden" name="offer" value="Free Lo-Fi SEO Snapshot" />
      <input type="text" name="_gotcha" className="hidden" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <label className="font-mono text-[10px] font-bold tracking-[0.18em] uppercase text-zinc-500">Name</label>
          <input
            type="text"
            name="name"
            required
            placeholder="Your name"
            className="bg-transparent border-b-2 border-zinc-700 focus:border-[#FF3000] outline-none px-0 py-2 font-sans text-[14px] text-white placeholder:text-zinc-700 transition-colors duration-150"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-mono text-[10px] font-bold tracking-[0.18em] uppercase text-zinc-500">Email</label>
          <input
            type="email"
            name="email"
            required
            placeholder="your@email.com"
            className="bg-transparent border-b-2 border-zinc-700 focus:border-[#FF3000] outline-none px-0 py-2 font-sans text-[14px] text-white placeholder:text-zinc-700 transition-colors duration-150"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-mono text-[10px] font-bold tracking-[0.18em] uppercase text-zinc-500">Website URL</label>
        <input
          type="url"
          name="website"
          required
          placeholder="https://yoursite.com"
          className="bg-transparent border-b-2 border-zinc-700 focus:border-[#FF3000] outline-none px-0 py-2 font-sans text-[14px] text-white placeholder:text-zinc-700 transition-colors duration-150"
        />
      </div>

      <div className="pt-1">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full justify-center inline-flex items-center gap-2 font-mono text-[11px] font-bold tracking-[0.18em] uppercase px-5 py-3 border-2 transition-colors duration-150 bg-[#FF3000] text-white border-[#FF3000] hover:bg-[#B81F00] hover:border-[#B81F00] disabled:opacity-60 disabled:cursor-wait"
        >
          {status === 'sending' ? 'Sending…' : <>Send me the free snapshot <span aria-hidden>→</span></>}
        </button>
        {status === 'error' && (
          <p className="font-sans text-[13px] text-[#FF3000] mt-3">
            Something went wrong — email me instead at katiekimdigital@gmail.com
          </p>
        )}
        <p className="font-mono text-[9px] tracking-[0.14em] uppercase text-zinc-500 mt-3">
          · 3 fields, 20 seconds · Delivered within 48 hours · No call required ·
        </p>
      </div>
    </form>
  )
}
