// S01.DESIGN — main site. Hero direction: "The Spec Sheet".
import { HeroSpec }         from '@/components/sections/HeroSpec'
import { SpecMetrics }      from '@/components/sections/SpecMetrics'
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
      <HeroSpec />                      {/* Spec-sheet hero (status bar + datasheet) */}
      <SpecMetrics />                   {/* Measured Output — count-up proof          */}
      <SystematicSection />             {/* 01 — Systematic by Design                 */}
      <ServicesSection />               {/* 02 — Services                             */}
      <BentoGrid showLms />             {/* Selected Work + Upskilled LMS              */}
      <ProcessSection />                {/* 03 — Way of Working                       */}
      <AboutSection />                  {/* 04 — About                                */}
      <PricingSection showAuditTier />  {/* 05 — Investment + Power Hour               */}
      <ContactSection />                {/* 06 — Start a Project                       */}
    </>
  )
}
