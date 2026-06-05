import { cn } from '@/lib/utils'

interface EyebrowLabelProps {
  number?: string
  label: string
  accent?: boolean
  withRule?: boolean
  className?: string
}

export function EyebrowLabel({ number, label, accent = false, withRule = true, className }: EyebrowLabelProps) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      {number && (
        <span className="font-mono text-[10px] font-bold tracking-[0.18em] uppercase text-zinc-400 shrink-0">
          {number} —
        </span>
      )}
      <span className={cn(
        'font-mono text-[10px] font-bold tracking-[0.18em] uppercase whitespace-nowrap shrink-0',
        accent ? 'text-[#FF3000]' : 'text-zinc-400'
      )}>
        {label}
      </span>
      {withRule && <div className="flex-1 h-px bg-black" />}
    </div>
  )
}
