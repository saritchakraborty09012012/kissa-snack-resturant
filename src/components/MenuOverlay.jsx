import { useEffect, useRef, useState } from 'react'
import { CupLogo, Wordmark } from './Brand'
import { SampleBadge, SampleWatermark } from './Sample'
import { ArrowUpRight, Close } from './Icons'
import { menu } from '../data/content'

const dishSlug = {
  'Signature Chai': 'dish-01',
  'KitKat Shake': 'dish-02',
  'Classic Vada Pav': 'dish-03',
  'Paneer Tandoori Sandwich': 'dish-04',
  'Masala Maggi': 'dish-05',
  'White Sauce Pasta': 'dish-06',
  'Stuffed Paratha': 'dish-07',
  'Papadi Chaat': 'dish-08',
}

const dishIndex = {
  'Signature Chai': 0,
  'KitKat Shake': 1,
  'Classic Vada Pav': 2,
  'Paneer Tandoori Sandwich': 3,
  'Masala Maggi': 4,
  'White Sauce Pasta': 5,
  'Stuffed Paratha': 6,
  'Papadi Chaat': 7,
}

export default function MenuOverlay({ open, onClose, onBook, onPickDish }) {
  const [hover, setHover] = useState(null)
  const cursor = useRef(null)
  const scroller = useRef(null)

  useEffect(() => {
    if (!open) {
      setHover(null)
      return undefined
    }
    const onKey = (e) => {
      if (e.key === 'Escape') onClose?.()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  useEffect(() => {
    if (open) scroller.current?.scrollTo({ top: 0 })
  }, [open])

  const onPointerMove = (e) => {
    if (!cursor.current) return
    cursor.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`
  }

  const pick = (name, e) => {
    e?.preventDefault()
    const index = dishIndex[name]
    if (index === undefined) return
    onClose?.()
    window.setTimeout(() => onPickDish?.(index), 450)
  }

  return (
    <div
      aria-hidden={!open}
      className={`fixed inset-0 z-[120] transition-[opacity,visibility] duration-700 ease-silk ${
        open ? 'visible opacity-100' : 'invisible opacity-0'
      }`}
    >
      <div
        className={`absolute inset-0 bg-ink/80 backdrop-blur-md transition-opacity duration-700 ${
          open ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />

      <div
        ref={scroller}
        className={`absolute inset-0 overflow-y-auto overscroll-contain bg-[#07080c] transition-transform duration-[900ms] ease-silk ${
          open ? 'translate-y-0' : 'translate-y-8'
        }`}
        onPointerMove={onPointerMove}
      >
        <div className="pointer-events-none absolute -right-[10%] top-0 h-[70vh] w-[70vh] rounded-full bg-[#6f8797]/10 blur-[140px]" />
        <div className="pointer-events-none absolute -left-[15%] bottom-0 h-[60vh] w-[60vh] rounded-full bg-[#b9d6e7]/5 blur-[120px]" />

        <div className="relative">
          <div className="shell flex items-center justify-between border-b border-line py-5">
            <div className="flex items-center gap-3">
              <CupLogo size={34} />
              <Wordmark className="text-bone/80" />
              <SampleBadge label="Sample menu" className="ml-1 hidden sm:inline-flex" />
            </div>
            <div className="flex items-center gap-5">
              <span className="hidden text-[8px] uppercase tracking-[0.28em] text-bone/35 sm:block">
                The full menu · 6 PM — 5 AM
              </span>
              <button
                type="button"
                onClick={onClose}
                data-cursor="view"
                className="flex h-11 items-center gap-2 rounded-full border border-bone/20 px-5 text-[9px] uppercase tracking-[0.24em] text-bone/80 transition-colors hover:border-bone/50 hover:text-bone"
              >
                {'Close '}
                <Close size={15} />
              </button>
            </div>
          </div>

          <div className="shell grid grid-cols-1 gap-14 pb-24 pt-14 lg:grid-cols-12 lg:gap-8 lg:pt-20">
            <div className="lg:col-span-5 lg:pr-16">
              <p className="label mb-8">(The menu)</p>
              <h2 className="display text-[clamp(3.4rem,7vw,7.4rem)] text-bone">
                The whole menu,
                <br />
                <em className="text-ice/90">made to order.</em>
              </h2>
              <p className="mt-8 max-w-sm text-[13px] font-light leading-relaxed text-bone/50">
                Eight plates, one kettle, and a counter that never closes early. Everything is
                cooked when you ask for it. Nothing waits under a lamp.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <button type="button" onClick={onBook} className="btn btn-ice">
                  {'Book a table '}
                  <ArrowUpRight />
                </button>
                <span className="text-[8px] uppercase tracking-[0.24em] text-bone/35">
                  No delivery · No shortcuts
                </span>
              </div>

              <div className="relative mt-14 grid max-w-sm grid-cols-2 gap-6 overflow-hidden border-t border-line pt-7 text-[10px] leading-relaxed text-bone/45">
                <SampleWatermark className="opacity-40" />
                <SampleBadge className="absolute right-0 top-2" label="Sample" />
                <div className="relative">
                  <p className="label mb-2 text-bone/30">Find us</p>
                  14, Koliwada Lane
                  <br />
                  Bandra West, Mumbai
                </div>
                <div className="relative">
                  <p className="label mb-2 text-bone/30">Call</p>
                  +91 98200 00003
                  <br />
                  hello@kissa.in
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="relative mb-5 flex items-center justify-between">
                <span className="sample-tag">Sample prices</span>
                <SampleBadge label="Sample menu" />
              </div>
              <div className="grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2">
                {menu.map((group) => (
                  <div key={group.section}>
                    <div className="mb-5 flex items-center justify-between border-b border-line pb-3">
                      <h3 className="text-[9px] uppercase tracking-[0.28em] text-bone/40">
                        {group.section}
                      </h3>
                      <span className="text-[8px] tabular-nums text-bone/25">
                        {String(group.items.length).padStart(2, '0')}
                      </span>
                    </div>

                    <ul className="space-y-1">
                      {group.items.map((item) => {
                        const linkable = !!dishSlug[item.name]
                        return (
                          <li key={item.name}>
                            <button
                              type="button"
                              onMouseEnter={() => setHover(dishSlug[item.name] || null)}
                              onMouseLeave={() => setHover(null)}
                              onClick={(e) => pick(item.name, e)}
                              data-cursor={linkable ? 'view' : undefined}
                              data-cursor-label={linkable ? 'View dish' : undefined}
                              className="group flex w-full items-start justify-between gap-4 border-b border-white/[0.055] py-4 text-left transition-colors duration-500 hover:border-bone/25"
                            >
                              <span className="min-w-0">
                                <span className="block font-serif text-[22px] leading-none text-bone/80 transition-colors duration-500 group-hover:text-bone">
                                  {item.name}
                                </span>
                                <span className="mt-2 block text-[9px] uppercase tracking-[0.16em] text-bone/30">
                                  {item.note}
                                </span>
                              </span>
                              <span className="flex shrink-0 items-center gap-3 pt-1">
                                <span className="text-[10px] tracking-[0.08em] text-bone/45">
                                  {item.price}
                                </span>
                                <ArrowUpRight
                                  size={12}
                                  className="text-bone/20 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ice"
                                />
                              </span>
                            </button>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-16 flex flex-col justify-between gap-6 border-t border-line pt-6 sm:flex-row sm:items-center">
                <p className="max-w-md text-[11px] font-light leading-relaxed text-bone/35">
                  Ask about the day's special, the extra-adrak pour, and the plate we are testing.
                  The kitchen will tell you the truth.
                </p>
                <div className="flex gap-5 text-[8px] uppercase tracking-[0.24em] text-bone/40">
                  <a href="#" className="link-line hover:text-bone">
                    Instagram
                  </a>
                  <a href="#" className="link-line hover:text-bone">
                    Zomato
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          ref={cursor}
          className={`pointer-events-none fixed left-0 top-0 z-[130] hidden h-52 w-52 md:block ${
            hover ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-500`}
          style={{ transform: 'translate3d(-999px, -999px, 0)' }}
        >
          {hover && (
            <img
              src={`/photos/${hover}.webp`}
              alt=""
              className="dish-render h-full w-full object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
            />
          )}
        </div>
      </div>
    </div>
  )
}
