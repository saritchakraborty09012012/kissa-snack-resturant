import { useEffect, useState } from 'react'
import { Reveal, SplitLines } from './Reveal'
import { SampleBadge } from './Sample'
import { Star } from './Icons'
import { hoursInfo } from '../data/content'

/* night progress, 18:00 -> 05:00 in IST */
function nightProgress() {
  const [h, m] = new Intl.DateTimeFormat('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZone: 'Asia/Kolkata',
  })
    .format(new Date())
    .split(':')
    .map(Number)
  const mins = (((h * 60 + m + 1440) % 1440) - 1080 + 1440) % 1440
  return Math.min(1, mins / 660)
}

function NightChart() {
  const [progress, setProgress] = useState(0.42)

  useEffect(() => {
    const tick = () => setProgress(nightProgress())
    tick()
    const id = window.setInterval(tick, 60000)
    return () => window.clearInterval(id)
  }, [])

  const ticks = Array.from({ length: 13 }, (_, i) => {
    const angle = Math.PI - (i / 12) * Math.PI
    const len = i % 3 === 0 ? 74 : 78
    return {
      x1: 120 + Math.cos(angle) * 84,
      y1: 118 - Math.sin(angle) * 84,
      x2: 120 + Math.cos(angle) * len,
      y2: 118 - Math.sin(angle) * len,
      major: i % 3 === 0,
    }
  })

  const angle = Math.PI - progress * Math.PI
  const dotX = 120 + Math.cos(angle) * 92
  const dotY = 118 - Math.sin(angle) * 92

  return (
    <div className="relative mx-auto w-full max-w-[430px]">
      <div className="absolute inset-x-0 top-[16%] mx-auto h-[62%] w-[62%] rounded-full bg-[#9cc4dc]/20 blur-[55px]" />
      <svg viewBox="0 0 240 160" className="relative w-full">
        <defs>
          <linearGradient id="arcGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#b9d6e7" stopOpacity="0.12" />
            <stop offset="55%" stopColor="#b9d6e7" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#b9d6e7" stopOpacity="0.25" />
          </linearGradient>
        </defs>

        <path d="M28 118 A92 92 0 0 1 212 118" fill="none" stroke="rgba(237,233,224,0.12)" strokeWidth="1" />
        <path
          d="M28 118 A92 92 0 0 1 212 118"
          fill="none"
          stroke="url(#arcGrad)"
          strokeWidth="1.4"
          strokeDasharray="289"
          strokeDashoffset={289 - progress * 289}
          strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 1.4s cubic-bezier(0.16,1,0.3,1)' }}
        />

        {ticks.map((t, i) => (
          <line
            key={i}
            x1={t.x1}
            y1={t.y1}
            x2={t.x2}
            y2={t.y2}
            stroke={i / 12 <= progress ? 'rgba(185,214,231,0.8)' : 'rgba(237,233,224,0.16)'}
            strokeWidth={t.major ? 1.2 : 0.7}
          />
        ))}

        <circle cx={dotX} cy={dotY} r="4.4" fill="#b9d6e7" opacity="0.18" />
        <circle cx={dotX} cy={dotY} r="1.6" fill="#e7f4fb" />

        <text x="28" y="138" fill="rgba(237,233,224,0.3)" fontSize="6" letterSpacing="1.6">
          6 PM
        </text>
        <text x="196" y="138" fill="rgba(237,233,224,0.3)" fontSize="6" letterSpacing="1.6">
          5 AM
        </text>
      </svg>

      <div className="pointer-events-none absolute inset-x-0 top-[38%] text-center">
        <p className="font-serif text-[clamp(4rem,8vw,6.8rem)] leading-[0.8] text-bone/90">11</p>
        <p className="mt-3 text-[8px] uppercase tracking-[0.3em] text-bone/35">hours a night</p>
      </div>
    </div>
  )
}

export default function HoursSection() {
  return (
    <section id="hours" className="relative section-pad overflow-hidden border-t border-line bg-ink">
      <div className="pointer-events-none absolute -left-[12%] top-[20%] h-[46vw] w-[46vw] rounded-full bg-[#7a93a5]/[0.09] blur-[140px]" />

      <div className="shell relative">
        <div className="flex items-center justify-between gap-4 border-b border-line pb-5">
          <div className="flex items-center gap-3">
            <p className="label">(Hours)</p>
            <SampleBadge label="Sample hours" />
          </div>
          <p className="text-[8px] uppercase tracking-[0.24em] text-bone/30">Six nights a week</p>
        </div>

        <div className="grid grid-cols-1 gap-14 pt-14 lg:grid-cols-12 lg:gap-6 lg:pt-20">
          <div className="lg:col-span-7">
            <p className="label mb-6 text-ice/70">(A night café)</p>
            <h2 className="display text-[clamp(3.8rem,8.6vw,9.6rem)] text-bone">
              <SplitLines lines={['Open at sunset.']} />
              <SplitLines lines={['Pouring']} lineClassName="italic text-ice/90" delay={110} />
              <SplitLines lines={['until five.']} delay={200} />
            </h2>

            <Reveal className="mt-10 max-w-md" delay={150}>
              <p className="text-[12px] font-light leading-relaxed text-bone/45">
                We open when the light goes and close when the city starts to wake. There is no last
                order. If the kettle is on, you are welcome.
              </p>
            </Reveal>

            <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-4">
              <div>
                <p className="font-serif text-3xl leading-none text-bone/90">6:00 PM — 5:00 AM</p>
                <p className="mt-2 flex items-center gap-2 text-[8px] uppercase tracking-[0.24em] text-bone/30">
                  Monday to Saturday
                  <span className="sample-tag">Sample</span>
                </p>
              </div>
              <div className="h-8 w-px bg-bone/15" />
              <div className="flex items-center gap-3">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ice/50" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-ice/80" />
                </span>
                <p className="text-[8px] uppercase leading-relaxed tracking-[0.24em] text-bone/40">
                  Open now
                  <br />
                  <span className="text-bone/20">Bandra West · Mumbai</span>
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center lg:col-span-5">
            <div className="relative border border-line bg-gradient-to-b from-[#0a0e14] to-[#06070b] p-6 md:p-9">
              <div className="absolute inset-0 atmosphere opacity-60" />
              <div className="relative">
                <div className="mb-2 flex items-center justify-between">
                  <p className="label text-bone/35">(The night, measured)</p>
                  <Star size={8} className="text-ice/50" />
                </div>
                <NightChart />
                <div className="mt-6 flex items-center justify-between border-t border-line pt-4 text-[8px] uppercase tracking-[0.22em] text-bone/25">
                  <span>First pour · 6:00 PM</span>
                  <span>Last pour · 5:00 AM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 border-t border-line md:grid-cols-2 xl:grid-cols-4">
          {hoursInfo.map((item, i) => (
            <Reveal
              key={item.label}
              delay={i * 90}
              className={`border-b border-line py-8 xl:border-b-0 ${i > 0 ? 'xl:border-l xl:pl-8' : ''} ${
                i > 0 && i % 2 === 0 ? 'md:border-l md:pl-8' : ''
              } ${i === 2 ? 'md:border-l md:pl-8' : ''}`}
            >
              <div className="flex items-baseline justify-between gap-3">
                <p className="text-[8px] uppercase tracking-[0.24em] text-bone/30">{item.label}</p>
                <span className="font-serif text-lg italic text-ice/60">{item.time}</span>
              </div>
              <p className="mt-4 max-w-[250px] text-[11px] font-light leading-relaxed text-bone/40">
                {item.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
