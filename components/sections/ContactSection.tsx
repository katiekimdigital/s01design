'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { EyebrowLabel } from '@/components/ui/EyebrowLabel'
import { Button } from '@/components/ui/Button'
import { StatusDot } from '@/components/ui/StatusDot'

const EASE = [0.16, 1, 0.3, 1] as const

const projectTypes = [
  'Website Design + Build',
  'Shopify Experience',
  'UX Architecture',
  'Design System',
  'Brand Sprint',
  'Retained Partnership',
  'Other',
]

const budgets = [
  '$1,500–$5,000 (Sprint)',
  '$6,000–$12,000 (Studio Project)',
  '$12,000–$20,000 (Studio Project)',
  '$3,000+/month (Retained)',
  'Not sure yet',
]

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="contact" className="border-t-4 border-black py-[clamp(72px,10vw,120px)] bg-black bg-override">
      <div className="w-full max-w-[1280px] mx-auto px-[clamp(20px,5vw,72px)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(40px,8vw,120px)]">

          {/* Left — headline + context */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <EyebrowLabel
              number="06"
              label="Start a Project"
              className="mb-6 [&>span]:text-zinc-600 [&>div]:bg-zinc-800"
            />
            <h2
              className="font-sans font-black uppercase text-white leading-[0.90] tracking-[-0.03em] mb-6"
              style={{ fontSize: 'clamp(40px,5.5vw,72px)' }}
            >
              LET'S BUILD<br />SOMETHING.
            </h2>
            <p className="font-sans text-[15px] text-zinc-400 leading-[1.65] mb-8">
              I take on a small number of projects per quarter. If you have the right
              brief and the budget to do it properly — send it through.
            </p>

            <StatusDot label="Currently booking new projects" className="mb-10" />

            {/* Contact details */}
            <div className="space-y-4 border-t border-zinc-800 pt-8">
              {[
                { label: 'Email', value: 'katiekimdigital@gmail.com', href: 'mailto:katiekimdigital@gmail.com' },
                { label: 'Location', value: 'Sydney, Australia · Works globally', href: null },
                { label: 'Response', value: 'Within 24 business hours', href: null },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <span className="font-mono text-[10px] font-bold tracking-[0.18em] uppercase text-zinc-700 w-20 shrink-0 pt-0.5">{item.label}</span>
                  {item.href
                    ? <a href={item.href} className="font-sans text-[14px] text-zinc-400 hover:text-[#FF3000] transition-colors duration-150">{item.value}</a>
                    : <span className="font-sans text-[14px] text-zinc-400">{item.value}</span>
                  }
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.15 }}
          >
            {submitted ? (
              <div className="border-2 border-zinc-800 p-10 flex flex-col items-start gap-4 h-full justify-center">
                <span className="font-mono text-[10px] font-bold tracking-[0.22em] uppercase text-[#FF3000]">SENT ✓</span>
                <h3 className="font-sans font-black text-white text-[28px] uppercase tracking-[-0.03em] leading-tight">
                  Brief received.
                </h3>
                <p className="font-sans text-[15px] text-zinc-400 leading-[1.65]">
                  I'll review and respond within 24 hours. If the project looks like a good fit, I'll send through the intake questionnaire.
                </p>
              </div>
            ) : (
              <form
                action="https://formspree.io/f/meendzaw"
                method="POST"
                onSubmit={() => setSubmitted(true)}
                className="flex flex-col gap-5"
              >
                {/* Formspree config — replace YOUR_FORM_ID with your Formspree form ID */}
                <input type="hidden" name="_subject" value="New project brief — s01.design" />
                <input type="text" name="_gotcha" className="hidden" />

                {/* Name + Email row */}
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

                {/* Project type */}
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-[10px] font-bold tracking-[0.18em] uppercase text-zinc-500">Project Type</label>
                  <select
                    name="project_type"
                    required
                    className="bg-black border-b-2 border-zinc-700 focus:border-[#FF3000] outline-none px-0 py-2 font-sans text-[14px] text-white transition-colors duration-150 cursor-pointer"
                  >
                    <option value="" disabled selected>Select one</option>
                    {projectTypes.map((t) => (
                      <option key={t} value={t} className="bg-black">{t}</option>
                    ))}
                  </select>
                </div>

                {/* Budget */}
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-[10px] font-bold tracking-[0.18em] uppercase text-zinc-500">Budget Range</label>
                  <select
                    name="budget"
                    required
                    className="bg-black border-b-2 border-zinc-700 focus:border-[#FF3000] outline-none px-0 py-2 font-sans text-[14px] text-white transition-colors duration-150 cursor-pointer"
                  >
                    <option value="" disabled selected>Select one</option>
                    {budgets.map((b) => (
                      <option key={b} value={b} className="bg-black">{b}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-[10px] font-bold tracking-[0.18em] uppercase text-zinc-500">Brief</label>
                  <textarea
                    name="brief"
                    required
                    rows={4}
                    placeholder="What are you building and what outcome matters most?"
                    className="bg-transparent border-b-2 border-zinc-700 focus:border-[#FF3000] outline-none px-0 py-2 font-sans text-[14px] text-white placeholder:text-zinc-700 transition-colors duration-150 resize-none"
                  />
                </div>

                {/* Submit */}
                <div className="pt-2">
                  <Button type="submit" variant="accent" arrow className="w-full justify-center">
                    Send Brief
                  </Button>
                  <p className="font-mono text-[9px] tracking-[0.14em] uppercase text-zinc-500 mt-3">
                    · No spec work · No retainers without a signed brief · Response within 24 hours ·
                  </p>
                </div>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
