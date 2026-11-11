import { useEffect, useState } from 'react'
import Brand from './Brand'
import { Menu } from './Icons'
import { navLinks } from '../data/content'

export default function Header({ onMenu, onBook, onNav }) {
  const [scrolled, setScrolled] = useState(false)
  const [time, setTime] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const tick = () => {
      try {
        setTime(
          new Intl.DateTimeFormat('en-GB', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
            timeZone: 'Asia/Kolkata',
          }).format(new Date()),
        )
      } catch {
        setTime('')
      }
    }
    tick()
    const id = setInterval(tick, 30000)
    return () => clearInterval(id)
  }, [])

  const linkClick = (link) => (e) => {
    e.preventDefault()
    if (link.action === 'menu') onMenu?.()
    else onNav?.(link.href)
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[60] transition-all duration-700 ease-silk ${
        scrolled ? 'bg-ink/55 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <div
        className={`shell flex items-center justify-between transition-all duration-700 ease-silk ${
          scrolled ? 'py-3.5' : 'py-5 md:py-6'
        }`}
      >
        <Brand compact={scrolled} onClick={() => onNav?.('top')} />

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 xl:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={linkClick(link)}
              className="group relative flex items-center gap-2 text-[9px] uppercase tracking-[0.28em] text-bone/55 transition-colors duration-500 hover:text-bone"
            >
              <span className="h-1 w-1 rounded-full bg-ice/0 transition-all duration-500 group-hover:bg-ice/80" />
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 md:gap-6">
          <div className="hidden items-center gap-2 md:flex">
            <span className="h-1 w-1 animate-pulse rounded-full bg-ice/70" />
            <span className="text-[8px] uppercase tracking-[0.24em] text-bone/40">
              {time}
              {' IST · Open'}
            </span>
          </div>

          <div className="hidden sm:block">
            <button type="button" onClick={onBook} className="btn btn-ghost h-10 px-5">
              Book a table
            </button>
          </div>

          <button
            type="button"
            onClick={onMenu}
            aria-label="Open menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-bone/20 text-bone/80 transition-colors hover:border-bone/50 hover:text-bone xl:hidden"
          >
            <Menu size={18} />
          </button>
        </div>
      </div>

      <div className={`hairline transition-opacity duration-700 ${scrolled ? 'opacity-100' : 'opacity-0'}`} />
    </header>
  )
}
