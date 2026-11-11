import { useEffect, useRef, useState } from 'react'
import { CupLogo, Wordmark } from './Brand'

const lines = [
  'Grinding the spices',
  'Lighting the stove',
  'Simmering the milk',
  'Pouring the first glass',
]

export default function Preloader({ onDone }) {
  const [progress, setProgress] = useState(0)
  const [phase, setPhase] = useState(0)
  const [line, setLine] = useState(0)
  const start = useRef(0)

  useEffect(() => {
    const duration = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 500 : 2800
    let raf = 0
    start.current = performance.now()

    const tick = (now) => {
      const p = Math.min(1, (now - start.current) / duration)
      const e = 1 - Math.pow(1 - p, 3)
      setProgress(Math.round(e * 100))
      if (p < 1) {
        raf = requestAnimationFrame(tick)
      } else {
        setPhase(1)
        window.setTimeout(() => {
          setPhase(2)
          onDone?.()
        }, 700)
      }
    }
    raf = requestAnimationFrame(tick)

    const id = window.setInterval(() => setLine((l) => (l + 1) % lines.length), 900)
    return () => {
      cancelAnimationFrame(raf)
      clearInterval(id)
    }
  }, [])

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-[300] flex flex-col justify-between overflow-hidden bg-ink px-6 py-8 transition-all duration-1000 ease-silk md:px-12 md:py-10 ${
        phase === 2 ? 'opacity-0' : 'opacity-100'
      }`}
      style={{ visibility: phase === 2 ? 'hidden' : 'visible' }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute left-[20%] top-[30%] h-[46vw] w-[46vw] rounded-full bg-[#6f8797]/20 blur-[110px]" />
        <div className="absolute right-[12%] top-[12%] h-[30vw] w-[30vw] rounded-full bg-[#b9d6e7]/10 blur-[90px]" />
        <div className="absolute bottom-[8%] left-[45%] h-[36vw] w-[36vw] rounded-full bg-[#3d4b57]/20 blur-[120px]" />
      </div>

      <div className="relative flex items-start justify-between">
        <div className="flex items-center gap-3 text-bone">
          <CupLogo size={38} />
          <div className="flex flex-col">
            <Wordmark />
            <span className="mt-1.5 text-[7px] uppercase tracking-[0.32em] text-bone/35">
              A night café · Mumbai
            </span>
          </div>
        </div>
        <div className="text-right">
          <p className="label">Opening hours</p>
          <p className="mt-2 text-[10px] tracking-[0.18em] text-bone/70">6:00 PM — 5:00 AM</p>
        </div>
      </div>

      <div className="relative flex flex-1 flex-col items-center justify-center">
        <div className="relative mb-10">
          <div className="absolute inset-0 rounded-full bg-ice/10 blur-3xl" />
          <CupLogo size={92} className="relative animate-pulse text-bone/80" />
        </div>
        <p className="max-w-md text-center font-serif text-3xl leading-tight text-bone/90 md:text-4xl">
          {'Chai, '}
          <em className="italic text-ice/90">poured slow.</em>
        </p>
        <p className="mt-5 h-4 text-[9px] uppercase tracking-[0.32em] text-bone/35 transition-all duration-500">
          {lines[line]}
        </p>
      </div>

      <div className="relative">
        <div className="mb-4 flex items-end justify-between">
          <p className="label">Loading the kettle</p>
          <p className="font-serif text-5xl leading-none text-bone/80 tabular-nums md:text-7xl">
            {String(progress).padStart(3, '0')}
          </p>
        </div>
        <div className="h-px w-full overflow-hidden bg-bone/15">
          <div
            className="h-full bg-ice/80 transition-[width] duration-150 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-4 flex justify-between text-[8px] uppercase tracking-[0.26em] text-bone/30">
          <span>Kissa — Est. 2003</span>
          <span>Best viewed after dark</span>
        </div>
      </div>
    </div>
  )
}
