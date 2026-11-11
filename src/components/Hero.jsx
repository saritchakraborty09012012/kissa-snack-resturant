import HeroPhoto from './HeroPhoto'
import { ArrowDown, Star } from './Icons'
import { scrollToEl } from '../lib/scroll'

function Seal() {
  return (
    <div className="hero-compact-hide relative hidden h-[92px] w-[92px] items-center justify-center md:flex">
      <svg viewBox="0 0 100 100" className="spin-slow absolute inset-0 h-full w-full">
        <defs>
          <path id="sealPath" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
        </defs>
        <text fill="rgba(237,233,224,0.45)" fontSize="6.6" letterSpacing="3.1">
          <textPath href="#sealPath">KISSA · EST. 2003 · MUMBAI ·</textPath>
        </text>
      </svg>
      <Star size={13} className="text-ice/70" />
    </div>
  )
}

export default function Hero({ ready, onBook }) {
  const reveal = (delay) => ({ transitionDelay: `${delay}ms` })

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] w-full flex-col overflow-hidden bg-ink"
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-[52%] top-[38%] h-[52vw] w-[52vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6c8699]/10 blur-[120px]" />
        <div className="absolute bottom-0 left-1/2 h-[30vw] w-[80vw] -translate-x-1/2 translate-y-1/2 rounded-full bg-[#1b242d]/60 blur-[110px]" />
      </div>

      <div className="absolute inset-0 z-[1]">
        <HeroPhoto ready={ready} />
      </div>

      <div className="hero-inner relative z-10 flex min-h-[100svh] flex-1 flex-col justify-between pb-6 pt-24 md:pb-8 md:pt-32">
        <div className="shell flex items-start justify-between">
          <div
            className={`transition-all duration-[1300ms] ease-silk ${
              ready ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
            style={reveal(300)}
          >
            <p className="label">(A night café · Bandra West)</p>
            <p className="mt-3 max-w-[220px] text-[10px] uppercase leading-relaxed tracking-[0.2em] text-bone/35">
              Eleven hours a night.
              <br />
              One kettle. No shortcuts.
            </p>
          </div>

          <div
            className={`hidden text-right transition-all duration-[1300ms] ease-silk hero-compact-hide md:block ${
              ready ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
            style={reveal(450)}
          >
            <p className="label">(Open at sunset)</p>
            <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-bone/55">
              6:00 PM — 5:00 AM
            </p>
            <p className="mt-1 text-[8px] uppercase tracking-[0.24em] text-bone/25">
              19.0596° N · 72.8295° E
            </p>
          </div>
        </div>

        <div className="shell relative flex flex-1 flex-col justify-end">
          <div className="relative z-10 max-w-[820px]">
            <div className="overflow-hidden">
              <p
                className={`label mb-4 transition-all duration-[1100ms] ease-silk ${
                  ready ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
                style={reveal(600)}
              >
                (Chai, poured slow)
              </p>
            </div>

            <h1 className="display text-[clamp(2.9rem,min(12.4vw,18vh),12rem)] text-bone">
              <span className="block overflow-hidden">
                <span
                  className={`block transition-transform duration-[1400ms] ease-silk ${
                    ready ? 'translate-y-0' : 'translate-y-[108%]'
                  }`}
                  style={reveal(650)}
                >
                  Chai,
                </span>
              </span>
              <span className="block overflow-hidden">
                <span
                  className={`block italic text-ice/95 transition-transform duration-[1400ms] ease-silk ${
                    ready ? 'translate-y-0' : 'translate-y-[108%]'
                  }`}
                  style={reveal(780)}
                >
                  poured slow.
                </span>
              </span>
            </h1>

            <div
              className={`mt-6 flex flex-col gap-5 transition-all duration-[1200ms] ease-silk sm:flex-row sm:items-end sm:justify-between md:mt-8 md:gap-6 ${
                ready ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
              }`}
              style={reveal(1000)}
            >
              <p className="max-w-[300px] text-[11px] font-light leading-relaxed text-bone/45">
                Strong tea, whole spices, fresh milk. Poured in a cutting or a full glass — the same
                glass the city has been waking up to since 2003.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => scrollToEl(document.querySelector('#dishes'))}
                  className="btn btn-ice"
                  data-cursor="view"
                >
                  Explore the night <ArrowDown size={13} />
                </button>
                <button type="button" onClick={onBook} className="btn btn-ghost">
                  Book a table
                </button>
              </div>
            </div>
          </div>

          <div
            className={`mt-6 flex items-end justify-between border-t border-line pt-5 transition-all duration-[1200ms] ease-silk md:mt-10 ${
              ready ? 'opacity-100' : 'opacity-0'
            }`}
            style={reveal(1200)}
          >
            <div className="flex items-center gap-4">
              <span className="scroll-line" />
              <div>
                <p className="text-[8px] uppercase tracking-[0.24em] text-bone/45">
                  Scroll to enter
                </p>
                <p className="hero-compact-hide mt-1 text-[8px] uppercase tracking-[0.24em] text-bone/20">
                  Drag the dish once inside
                </p>
              </div>
            </div>
            <p className="hidden text-[8px] uppercase tracking-[0.24em] text-bone/30 sm:block">
              01 / 08 — Signature Chai
            </p>
            <Seal />
          </div>
        </div>
      </div>
    </section>
  )
}
