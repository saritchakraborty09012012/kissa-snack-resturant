import { Reveal, SplitLines, Counter, Marquee } from './Reveal'
import { SampleBadge } from './Sample'
import { ArrowDown, ArrowUpRight, Star } from './Icons'
import { stats } from '../data/content'
import { scrollToEl } from '../lib/scroll'

export default function StatsSection({ onBook }) {
  return (
    <section id="invitation" className="relative overflow-hidden border-t border-line bg-ink">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[42%] h-[70vw] w-[70vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6f8ba0]/[0.1] blur-[150px]" />
        <div className="absolute bottom-0 left-1/2 h-[40vw] w-[90vw] -translate-x-1/2 translate-y-1/2 rounded-full bg-[#0b1119] blur-[100px]" />
        <img
          src="/photos/dish-08.webp"
          alt=""
          className="absolute bottom-[-16%] left-1/2 w-[62vw] max-w-[900px] -translate-x-1/2 opacity-[0.16] mask-fade-b"
          loading="lazy"
        />
      </div>

      <div className="shell relative flex min-h-[100svh] flex-col justify-between pb-10 pt-28 md:pt-32">
        <div className="flex items-center justify-between gap-4 border-b border-line pb-5">
          <div className="flex items-center gap-3">
            <p className="label">(The invitation)</p>
            <SampleBadge label="Sample facts" />
          </div>
          <p className="hidden text-[8px] uppercase tracking-[0.24em] text-bone/25 sm:block">
            14, Koliwada Lane · Bandra West
          </p>
        </div>

        <div className="flex flex-1 flex-col justify-center py-16 text-center">
          <div className="mx-auto mb-8 flex items-center gap-2">
            <Star size={9} className="text-ice/60" />
            <p className="text-[8px] uppercase tracking-[0.3em] text-bone/30">
              No reservation required
            </p>
            <Star size={9} className="text-ice/60" />
          </div>

          <h2 className="display text-[clamp(4.2rem,12.4vw,13.5rem)] text-bone">
            <SplitLines lines={['Come and']} />
            <SplitLines lines={['sit down.']} lineClassName="italic text-ice/90" delay={130} />
          </h2>

          <Reveal className="mx-auto mt-9 max-w-md" delay={200}>
            <p className="text-[12px] font-light leading-relaxed text-bone/40">
              Pull up a chair. The fan is on, the kettle is warm, and nobody is counting the minutes.
              Stay for one glass or for the whole night.
            </p>
          </Reveal>

          <Reveal className="mt-9 flex flex-wrap items-center justify-center gap-3" delay={280}>
            <button type="button" onClick={onBook} className="btn btn-ice" data-cursor="view">
              Book a table <ArrowUpRight size={13} />
            </button>
            <button
              type="button"
              onClick={() => scrollToEl(document.querySelector('#visit'))}
              className="btn btn-ghost"
            >
              Find the light <ArrowDown size={13} />
            </button>
          </Reveal>
        </div>

        <div className="relative">
          <SampleBadge className="absolute right-0 top-3 z-[2]" label="Sample numbers" />
          <div className="grid grid-cols-2 border-t border-line lg:grid-cols-4">
            {stats.map((stat, i) => (
              <Reveal
                key={stat.unit}
                delay={i * 90}
                className={`flex flex-col items-center border-b border-line py-8 text-center lg:border-b-0 ${
                  i > 0 ? 'lg:border-l' : ''
                } ${i % 2 === 1 ? 'border-l' : ''}`}
              >
                <p className="display text-[clamp(3rem,6.5vw,6.4rem)] leading-none text-bone/90">
                  <Counter to={stat.value} duration={2000} />
                </p>
                <p className="mt-3 text-[8px] uppercase tracking-[0.28em] text-bone/40">{stat.unit}</p>
                <p className="mt-1.5 text-[8px] uppercase tracking-[0.22em] text-bone/20">{stat.label}</p>
              </Reveal>
            ))}
          </div>

          <div className="flex items-center justify-between gap-4 pt-5 text-[8px] uppercase tracking-[0.24em] text-bone/20">
            <span>Chai · coffee · comfort · chaat</span>
            <span className="hidden sm:block">Open 6 PM — 5 AM · six nights</span>
            <span className="text-ice/40">Est. 2003</span>
          </div>
        </div>
      </div>

      <div className="border-y border-line py-3.5">
        <Marquee speed={52}>
          <div className="flex items-center gap-8 pr-8 text-[8px] uppercase tracking-[0.34em] text-bone/25">
            <span>Chai, poured slow.</span>
            <span className="text-ice/30">✳</span>
            <span>Come and sit down.</span>
            <span className="text-ice/30">✳</span>
            <span>Open at sunset.</span>
            <span className="text-ice/30">✳</span>
            <span>Pouring until five.</span>
            <span className="text-ice/30">✳</span>
            <span>Chai, poured slow.</span>
            <span className="text-ice/30">✳</span>
            <span>Come and sit down.</span>
            <span className="text-ice/30">✳</span>
            <span>Open at sunset.</span>
            <span className="text-ice/30">✳</span>
            <span>Pouring until five.</span>
            <span className="text-ice/30">✳</span>
          </div>
        </Marquee>
      </div>
    </section>
  )
}
