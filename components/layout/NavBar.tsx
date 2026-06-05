'use client'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

const links = [
  { label: 'Home',     href: '/',         id: null },
  { label: 'Work',     href: '#work',     id: 'work' },
  { label: 'Services', href: '#services', id: 'services' },
  { label: 'Process',  href: '#process',  id: 'process' },
  { label: 'Pricing',  href: '#pricing',  id: 'pricing' },
  { label: 'Contact',  href: '#contact',  id: 'contact' },
]

export function NavBar() {
  const pathname = usePathname()
  const [active, setActive] = useState('Home')
  const [scrollPct, setScrollPct] = useState(0)

  // The studio hero (/) and /about have their own top bar — the pill nav is only
  // for the archived name-led build at /classic.
  const hidden = pathname !== '/classic'

  useEffect(() => {
    const el = document.documentElement
    const onScroll = () => {
      setScrollPct((el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100)
      // Near the very top → Home is active regardless of observer state.
      if (el.scrollTop < 80) setActive('Home')
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = links
      .filter((l) => l.id)
      .map((l) => ({ label: l.label, el: document.getElementById(l.id as string) }))
      .filter((s): s is { label: string; el: HTMLElement } => s.el !== null)

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (document.documentElement.scrollTop < 80) return
        // Pick the entry nearest the top of the viewport that is intersecting.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible.length > 0) {
          const match = sections.find((s) => s.el === visible[0].target)
          if (match) setActive(match.label)
        }
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    )

    sections.forEach((s) => observer.observe(s.el))
    return () => observer.disconnect()
  }, [])

  if (hidden) return null

  return (
    <>
      {/* Scroll progress */}
      <div
        className="fixed top-0 left-0 h-[2px] bg-[#FF3000] z-[9999] transition-all duration-75"
        style={{ width: `${scrollPct}%` }}
      />

      {/* Pill nav */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 max-w-[calc(100vw-1.5rem)]">
        <div className="flex items-center gap-1 bg-white border border-zinc-200 shadow-sm px-2 py-2 overflow-x-auto no-scrollbar">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setActive(link.label)}
              className={`
                font-sans text-[13px] font-medium px-4 py-2 whitespace-nowrap transition-colors duration-150
                ${active === link.label
                  ? 'bg-black text-white'
                  : 'text-zinc-600 hover:text-black'
                }
              `}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </>
  )
}
