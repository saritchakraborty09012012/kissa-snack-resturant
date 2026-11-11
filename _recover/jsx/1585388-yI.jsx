function VisitSection({ onBook: e }) {
  return (
    <section
      id="visit"
      className="relative overflow-hidden border-t border-line bg-ink section-pad"
    >
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
              <SplitLines lines={[`Find us`]} />
              <SplitLines lines={[`after dark.`]} lineClassName="italic text-ice/90" delay={120} />
            </h2>
            <Reveal className="mt-8 max-w-sm" delay={160}>
              <p className="text-[12px] font-light leading-relaxed text-bone/45">
                Behind the fish market, past the last tea stall, under the one light that stays on.
                Look for the smoke and the plastic chairs. That is us.
              </p>
            </Reveal>
            <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-line pt-8">
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
                  href="mailto:hello@mrchaiwala.in"
                  className="link-line text-[11px] leading-relaxed text-bone/60 hover:text-bone"
                >
                  hello@mrchaiwala.in
                </a>
                <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-bone/25">
                  We reply slowly
                </p>
              </div>
            </div>
            <Reveal className="mt-9 flex flex-wrap items-center gap-4" delay={240}>
              <button type="button" onClick={e} className="btn btn-ice" data-cursor="view">
                {'Book a table '}
                <ArrowUpRight size={13} />
              </button>
              <span className="flex items-center gap-2 text-[8px] uppercase tracking-[0.22em] text-bone/25">
                <Star size={8} className="text-ice/50" />
                {' Walk-ins welcome'}
              </span>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal className="h-full" delay={140}>
              <vI />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
var bI = [
  {
    title: `Explore`,
    links: [
      {
        label: `The dishes`,
        href: `#dishes`,
      },
      {
        label: `The ritual`,
        href: `#story`,
      },
      {
        label: `The blend`,
        href: `#spices`,
      },
      {
        label: `Hours`,
        href: `#hours`,
      },
    ],
  },
  {
    title: `Visit`,
    links: [
      {
        label: `Find us`,
        href: `#visit`,
      },
      {
        label: `Book a table`,
        action: `book`,
      },
      {
        label: `The menu`,
        action: `menu`,
      },
      {
        label: `Private hires`,
        action: `book`,
      },
    ],
  },
]
