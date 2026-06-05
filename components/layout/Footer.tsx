export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-black bg-override border-t-4 border-zinc-800">
      <div className="w-full max-w-[1280px] mx-auto px-[clamp(20px,5vw,72px)] py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Left */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1.5">
              <span className="font-sans font-black text-white text-[22px] tracking-[-0.06em] leading-none">S01</span>
              <span className="font-mono font-bold text-[9px] tracking-[0.18em] uppercase text-zinc-500">.design</span>
            </div>
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-zinc-600">
              UX Architecture · Frontend Engineering · Digital Experience
            </p>
          </div>

          {/* Center */}
          <div className="flex items-center gap-6">
            {['Work', 'Services', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-mono text-[10px] font-bold tracking-[0.18em] uppercase text-zinc-600 hover:text-[#FF3000] transition-colors duration-150"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Right */}
          <a
            href="mailto:katiekimdigital@gmail.com"
            className="font-mono text-[10px] font-bold tracking-[0.18em] uppercase text-zinc-400 hover:text-[#FF3000] transition-colors duration-150"
          >
            katiekimdigital@gmail.com
          </a>
        </div>

        <div className="mt-10 pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-zinc-500">
            © Katie Kim · s01.design · {year}
          </span>
          <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-zinc-500">
            Sydney, Australia
          </span>
        </div>
      </div>
    </footer>
  )
}
