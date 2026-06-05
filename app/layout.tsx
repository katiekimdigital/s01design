import type { Metadata } from 'next'
import { inter, ibmPlexMono, caveat } from '@/lib/fonts'
import { NavBar } from '@/components/layout/NavBar'
import { Footer } from '@/components/layout/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'Katie Kim — Web Designer & Developer · S01.DESIGN',
  description: 'I architect and build digital systems for brands that need their site to work — not just look like it works. Sydney-based. 8+ years enterprise APAC.',
  openGraph: {
    title: 'Katie Kim — s01.design',
    description: 'Web Designer & Developer · S01.DESIGN — web design, front-end & content',
    url: 'https://s01.design',
    siteName: 's01.design',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${ibmPlexMono.variable} ${caveat.variable}`}>
      <body className="min-h-full flex flex-col">
        <NavBar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
