function HoursSection() {
  return (
    <section
      id="hours"
      className="relative overflow-hidden border-t border-line bg-ink section-pad"
    >
      <div className="pointer-events-none absolute -left-[12%] top-[20%] h-[46vw] w-[46vw] rounded-full bg-[#7a93a5]/[0.09] blur-[140px]" />
      <div className="shell relative">
        <div className="flex items-center justify-between border-b border-line pb-5">
          <p className="label">(Hours)</p>
          <p className="text-[8px] uppercase tracking-[0.24em] text-bone/30">Six nights a week</p>
        </div>
        <div className="grid grid-cols-1 gap-14 pt-14 lg:grid-cols-12 lg:gap-6 lg:pt-20">
          <div className="lg:col-span-7">
            <p className="label mb-6 text-ice/70">(A night café)</p>
            <h2 className="display text-[clamp(3.8rem,8.6vw,9.6rem)] text-bone">
              <SplitLines lines={[`Open at sunset.`]} />
              <SplitLines lines={[`Pouring`]} lineClassName="italic text-ice/90" delay={110} />
              <SplitLines lines={[`until five.`]} delay={200} />
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
                <p className="mt-2 text-[8px] uppercase tracking-[0.24em] text-bone/30">
                  Monday to Saturday
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
                <fI />
                <div className="mt-6 flex items-center justify-between border-t border-line pt-4 text-[8px] uppercase tracking-[0.22em] text-bone/25">
                  <span>First pour · 6:00 PM</span>
                  <span>Last pour · 5:00 AM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 grid grid-cols-1 border-t border-line md:grid-cols-2 xl:grid-cols-4">
          {_r.map((e, t) => (
            <Reveal
              key={e.label}
              delay={t * 90}
              className={`border-b border-line py-8 xl:border-b-0 ${t > 0 ? `xl:border-l xl:pl-8` : ``} ${t > 0 && t % 2 == 0 ? `md:border-l md:pl-8` : ``} ${t === 2 ? `md:border-l md:pl-8` : ``}`}
            >
              <div className="flex items-baseline justify-between gap-3">
                <p className="text-[8px] uppercase tracking-[0.24em] text-bone/30">{e.label}</p>
                <span className="font-serif text-lg italic text-ice/60">{e.time}</span>
              </div>
              <p className="mt-4 max-w-[250px] text-[11px] font-light leading-relaxed text-bone/40">
                {e.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
