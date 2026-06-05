// S01.DESIGN — main site (studio-branded, client-ready).
// Previously this was the name-led build, now archived at /classic.
import { HeroStudio }       from '@/components/sections/HeroStudio'
import { SystematicSection } from '@/components/sections/SystematicSection'
import { ServicesSection }   from '@/components/sections/ServicesSection'
import { BentoGrid }         from '@/components/sections/BentoGrid'
import { ProcessSection }    from '@/components/sections/ProcessSection'
import { AboutSection }      from '@/components/sections/AboutSection'
import { PricingSection }    from '@/components/sections/PricingSection'
import { ContactSection }    from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <>
      <HeroStudio />                    {/* Studio hero                     */}
      <SystematicSection />             {/* 01 — Systematic by Design       */}
      <ServicesSection />               {/* 02 — Services                   */}
      <BentoGrid showLms />             {/* Selected Work + Upskilled LMS    */}
      <ProcessSection />                {/* 03 — Way of Working              */}
      <AboutSection />                  {/* 04 — About                       */}
      <PricingSection showAuditTier />  {/* 05 — Investment + Power Hour      */}
      <ContactSection />                {/* 06 — Start a Project             */}
    </>
  )
}
