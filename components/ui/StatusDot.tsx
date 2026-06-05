'use client'
import { cn } from '@/lib/utils'

interface StatusDotProps {
  label?: string
  className?: string
}

export function StatusDot({ label = 'Available', className }: StatusDotProps) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <span
        className="w-[6px] h-[6px] bg-[#FF3000] rounded-full-force animate-s01-pulse inline-block"
        aria-hidden
      />
      <span className="font-mono text-[10px] font-bold tracking-[0.18em] uppercase text-zinc-400">
        {label}
      </span>
    </div>
  )
}
