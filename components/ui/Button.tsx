import { cn } from '@/lib/utils'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'ghost' | 'accent'
  href?: string
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit'
  arrow?: boolean
}

export function Button({ children, variant = 'primary', href, onClick, className, type = 'button', arrow = false }: ButtonProps) {
  const base = 'inline-flex items-center gap-2 font-mono text-[11px] font-bold tracking-[0.18em] uppercase px-5 py-3 border-2 transition-colors duration-150'
  const variants = {
    primary: 'bg-black text-white border-black hover:bg-[#FF3000] hover:border-[#FF3000]',
    ghost: 'bg-transparent text-black border-black hover:bg-[#FF3000] hover:text-white hover:border-[#FF3000]',
    accent: 'bg-[#FF3000] text-white border-[#FF3000] hover:bg-[#B81F00] hover:border-[#B81F00]',
  }
  const content = <>{children}{arrow && <span aria-hidden>→</span>}</>
  if (href) return <a href={href} className={cn(base, variants[variant], className)}>{content}</a>
  return <button type={type} onClick={onClick} className={cn(base, variants[variant], className)}>{content}</button>
}
