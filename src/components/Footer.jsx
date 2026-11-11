import { useState } from 'react'
import Brand from './Brand'
import { SampleBadge, SampleWatermark } from './Sample'
import { ArrowUpRight, Star } from './Icons'
import { scrollToEl, scrollToY } from '../lib/scroll'

const linkGroups = [
  {
    title: 'Explore',
    links: [
      { label: 'The dishes', href: '#dishes' },
      { label: 'The ritual', href: '#story' },
      { label: 'The blend', href: '#spices' },
      { label: 'Hours', href: '#hours' },
    ],
  },
  {
    title: 'Visit',
    links: [
      { label: 'Find us', href: '#visit' },
      { label: 'Book a table', action: 'book' },
      { label: 'The menu', action: 'menu' },
      { label: 'Private hires', action: 'book' },
    ],
  },
]

export default function Footer({ onMenu, onBook }) {
  const [email, setEmail] = useState('')
  const [state, setState] = useState('idle')

  const subscribe = async (e) => {
    e.preventDefault()
    if (!email || state === 'sending') return
    setState('sending')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (!res.ok) throw Error('failed')
      setState('done')
      setEmail('')
    } catch {
      window.setTimeout(() => setState('done'), 700)
      setEmail('')
    }
  }

  return (
    <footer className="relative overflow-hidden border-t border-line bg-[#06070b]">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[40vw] w-[80vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6d8596]/[0.08] blur-[130px]" />

      <div className="shell relative">
        <div className="grid grid-cols-1 gap-10 border-b border-line py-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <p className="label mb-4 text-ice/60">(Stay a little longer)</p>
            <p className="max-w-sm font-serif text-[clamp(1.8rem,3.4vw,2.6rem)] leading-[1.05] text-bone/85">
              One letter a month.
              <br />
              <em className="italic text-bone/40">New dishes, old stories.</em>
            </p>

            <div className="mt-6 flex max-w-sm items-center justify-between">
              <p className="sample-tag">Sample newsletter</p>
              <SampleBadge label="Sample" />
            </div>

            <form
              onSubmit={subscribe}
              className="mt-3 flex max-w-sm items-center gap-3 border-b border-bone/20 pb-2 focus-within:border-ice/60"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                aria-label="Email address"
                className="field-email w-full bg-transparent text-[11px] font-light text-bone outline-none placeholder:text-bone/20"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-bone/20 text-bone/60 transition-colors hover:border-ice/60 hover:text-ice"
              >
                <ArrowUpRight size={13} />
              </button>
            </form>

            <p className="mt-3 text-[8px] uppercase tracking-[0.22em] text-bone/20">
              {state === 'done' ? 'You are on the list. See you after dark.' : 'No spam. Only smoke.'}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7 lg:pl-16">
            {linkGroups.map((group) => (
              <div key={group.title}>
                <p className="label mb-5 text-bone/30">{group.title}</p>
                <ul className="space-y-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href || '#'}
                        onClick={(e) => {
                          if (link.action === 'menu') {
                            e.preventDefault()
                            onMenu?.()
                          } else if (link.action === 'book') {
                            e.preventDefault()
                            onBook?.()
                          } else if (link.href) {
                            e.preventDefault()
                            scrollToEl(document.querySelector(link.href))
                          }
                        }}
                        className="text-[11px] font-light text-bone/45 transition-colors duration-500 hover:text-bone"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="relative">
              <SampleBadge className="absolute right-0 top-0" label="Sample" />
              <p className="label mb-5 pr-16 text-bone/30">Find us</p>
              <p className="text-[11px] font-light leading-relaxed text-bone/45">
                14, Koliwada Lane
                <br />
                Bandra West
                <br />
                Mumbai 400050
              </p>
              <a
                href="tel:+919820000003"
                className="mt-3 inline-block text-[11px] text-bone/45 transition-colors hover:text-bone"
              >
                +91 98200 00003
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between border-b border-line py-8">
          <div className="flex items-center gap-4">
            <Star size={10} className="text-ice/60" />
            <p className="text-[8px] uppercase tracking-[0.28em] text-bone/25">
              Open at sunset · pouring until five
            </p>
          </div>
          <div className="hidden items-center gap-6 text-[8px] uppercase tracking-[0.24em] text-bone/30 sm:flex">
            <a href="#" className="link-line hover:text-bone">
              Instagram
            </a>
            <a href="#" className="link-line hover:text-bone">
              Zomato
            </a>
            <a href="#" className="link-line hover:text-bone">
              Swiggy
            </a>
          </div>
        </div>

        <div className="relative overflow-hidden py-12">
          <SampleWatermark className="opacity-40" />
          <SampleBadge className="absolute right-0 top-3" label="Sample wordmark" />
          <p
            aria-hidden="true"
            className="display relative select-none whitespace-nowrap text-[clamp(2.2rem,13.5vw,15rem)] leading-[0.78] text-bone/[0.08]"
          >
            KISSA<span className="ml-4 italic text-ice/20">Est. 2003</span>
          </p>

          <div className="mt-8 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
            <Brand onClick={() => scrollToY(0, { duration: 1.6 })} />
            <p className="text-[8px] uppercase leading-relaxed tracking-[0.24em] text-bone/20">
              {'© '}
              {new Date().getFullYear()}
              {' Kissa · All nights reserved'}
              <br />
              Built after dark in Bombay
            </p>
            <button
              type="button"
              onClick={() => scrollToY(0, { duration: 1.6 })}
              className="group flex items-center gap-2 text-[8px] uppercase tracking-[0.24em] text-bone/35 transition-colors hover:text-ice"
            >
              Back to top
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-bone/15 transition-colors group-hover:border-ice/50">
                <ArrowUpRight size={11} className="-rotate-45" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
