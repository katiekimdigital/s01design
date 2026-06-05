// PROTOTYPE — "The Spec Sheet" design direction. Non-destructive: the live
// site at `/` is untouched. This is just the hero + one section to feel it out.
import { HeroSpec } from '@/components/sections/HeroSpec'
import { SpecMetrics } from '@/components/sections/SpecMetrics'

export default function Lab() {
  return (
    <>
      <HeroSpec />
      <SpecMetrics />
    </>
  )
}
