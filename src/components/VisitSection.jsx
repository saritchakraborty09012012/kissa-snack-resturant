import { Reveal, SplitLines } from './Reveal'
import { SampleBadge, SampleWatermark } from './Sample'
import { ArrowUpRight, Pin, Star } from './Icons'

const MAP_SRC =
  'https://www.openstreetmap.org/export/embed.html?bbox=72.8155%2C19.0475%2C72.8425%2C19.0725&layer=mapnik&marker=19.0596%2C72.8295'

function MapPanel() {
  return (
    <div className="relative h-full min-h-[320px] w-full overflow-hidden border border-line bg-[#070a0f] sm:min-h-[420px]">
      <iframe
        title="Map showing Kissa at Koliwada Lane, Bandra West, Mumbai"
        src={MAP_SRC}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="map-embed absolute inset-0 h-full w-full border-0"
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#05060a] via-transparent to-[#05060a]/35" />
      <div className="pointer-events-none absolute inset-0 bg-[#05060a]/10" />

      <SampleBadge className="absolute left-1/2 top-4 -translate-x-1/2" label="Sample map" />

      <div className="pointer-events-none absolute right-5 top-5 flex items-center gap-2 text-[7px] uppercase tracking-[0.24em] text-bone/60">
        <Pin size={11} /> Koliwada Lane
      </div>

      <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-4 border-t border-line bg-gradient-to-t from-[#05060a] via-[#05060a]/92 to-transparent p-5 pt-12">
        <div>
          <p className="label mb-2 text-bone/30">(We are here)</p>
          <p className="font-serif text-2xl leading-none text-bone/85">14, Koliwada Lane</p>
          <p className="mt-1.5 text-[8px] uppercase tracking-[0.2em] text-bone/30">
            Bandra West, Mumbai 400050
          </p>
        </div>
        <a
          href="https://www.openstreetmap.org/?mlat=19.0596&mlon=72.8295#map=16/19.0596/72.8295"
          target="_blank"
          rel="noreferrer"
          data-cursor="view"
          className="group relative z-[2] flex items-center gap-2 border-b border-bone/20 pb-1 text-[8px] uppercase tracking-[0.24em] text-bone/60 transition-colors hover:border-ice/60 hover:text-ice"
        >
          Get directions
          <ArrowUpRight
            size={11}
            className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </a>
      </div>

      <a
        href="https://www.openstreetmap.org/copyright"
        target="_blank"
        rel="noreferrer"
        className="relative z-[2] absolute bottom-2 left-5 text-[6px] uppercase tracking-[0.2em] text-bone/25"
      >
        © OpenStreetMap
      </a>

      <span className="pointer-events-none absolute left-5 top-5 h-7 w-px bg-ice/30" />
      <span className="pointer-events-none absolute left-5 top-5 h-px w-7 bg-ice/30" />
    </div>
  )
}

export default function VisitSection({ onBook }) {
  return (
    <section id="visit" className="relative section-pad overflow-hidden border-t border-line bg-ink">
      <div className="pointer-events-none absolute -right-[15%] top-[10%] h-[50vw] w-[50vw] rounded-full bg-[#6f8797]/[0.09] blur-[140px]" />

      <div className="shell relative">
        <div className="flex items-center justify-between border-b border-line pb-5">
          <p className="label">(Visit)</p>
          <p className="hidden text-[8px] uppercase tracking-[0.24em] text-bone/25 sm:block">
            Six nights a week · 6 PM — 5 AM
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 pt-14 lg:grid-cols-12 lg:gap-8 lg:pt-20">
          <div className="lg:col-span-5">
            <h2 className="display text-[clamp(3.8rem,8.4vw,9rem)] text-bone">
              <SplitLines lines={['Find us']} />
              <SplitLines lines={['after dark.']} lineClassName="italic text-ice/90" delay={120} />
            </h2>

            <Reveal className="mt-8 max-w-sm" delay={160}>
              <p className="text-[12px] font-light leading-relaxed text-bone/45">
                Behind the fish market, past the last tea stall, under the one light that stays on.
                Look for the smoke and the plastic chairs. That is us.
              </p>
            </Reveal>

            <div className="relative mt-10 overflow-hidden border-t border-line pt-8">
              <SampleWatermark />
              <SampleBadge className="absolute right-0 top-5" label="Sample details" />
              <div className="relative grid grid-cols-2 gap-x-6 gap-y-8 sm:gap-x-8">
                <div>
                  <p className="label mb-3 text-bone/30">Address</p>
                  <p className="text-[11px] leading-relaxed text-bone/60">
                    14, Koliwada Lane
                    <br />
                    Bandra West
                    <br />
                    Mumbai 400050
                  </p>
                </div>
                <div>
                  <p className="label mb-3 text-bone/30">Hours</p>
                  <p className="text-[11px] leading-relaxed text-bone/60">
                    6:00 PM — 5:00 AM
                    <br />
                    Monday to Saturday
                    <br />
                    <span className="text-bone/30">Closed Sunday</span>
                  </p>
                </div>
                <div>
                  <p className="label mb-3 text-bone/30">Call</p>
                  <a
                    href="tel:+919820000003"
                    className="link-line text-[11px] leading-relaxed text-bone/60 hover:text-bone"
                  >
                    +91 98200 00003
                  </a>
                  <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-bone/25">
                    After 6 PM only
                  </p>
                </div>
                <div>
                  <p className="label mb-3 text-bone/30">Write</p>
                  <a
                    href="mailto:hello@kissa.in"
                    className="link-line text-[11px] leading-relaxed text-bone/60 hover:text-bone"
                  >
                    hello@kissa.in
                  </a>
                  <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-bone/25">
                    We reply slowly
                  </p>
                </div>
              </div>
            </div>

            <Reveal className="mt-9 flex flex-wrap items-center gap-4" delay={240}>
              <button type="button" onClick={onBook} className="btn btn-ice" data-cursor="view">
                Book a table <ArrowUpRight size={13} />
              </button>
              <span className="flex items-center gap-2 text-[8px] uppercase tracking-[0.22em] text-bone/25">
                <Star size={8} className="text-ice/50" />
                Walk-ins welcome
              </span>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal className="h-full" delay={140}>
              <MapPanel />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
