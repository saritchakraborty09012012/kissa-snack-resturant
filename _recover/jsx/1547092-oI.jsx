function MadeToOrder() {
  return (
    <section id="story" className="relative overflow-hidden bg-ink section-pad">
      <div className="pointer-events-none absolute -right-[18%] top-[8%] h-[60vw] w-[60vw] rounded-full bg-[#5d7383]/10 blur-[140px]" />
      <div className="pointer-events-none absolute -left-[22%] bottom-[2%] h-[46vw] w-[46vw] rounded-full bg-[#b9d6e7]/[0.04] blur-[120px]" />
      <div className="shell relative">
        <div className="flex items-start justify-between gap-8 border-b border-line pb-5">
          <p className="label">(The ritual)</p>
          <p className="hidden max-w-[260px] text-right text-[8px] uppercase leading-relaxed tracking-[0.22em] text-bone/30 sm:block">
            No shortcuts · no freezers
            <br />
            Everything begins at the counter
          </p>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-14 lg:mt-20 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <h2 className="display text-[clamp(4rem,10.2vw,11rem)] text-bone">
              <SplitLines lines={[`Made`]} />
              <SplitLines lines={[`to order.`]} lineClassName="italic text-ice/90" delay={120} />
            </h2>
            <Reveal className="mt-10 max-w-md" delay={200}>
              <p className="text-[13px] font-light leading-relaxed text-bone/50">
                The chai is brewed in small batches. The vada is fried when you ask. The paratha is
                rolled, stuffed and griddled after the order reaches the kitchen. It takes the time
                it takes.
              </p>
              <p className="mt-4 text-[13px] font-light leading-relaxed text-bone/35">
                This is a night café. The pace is slow because the night is long.
              </p>
            </Reveal>
            <Reveal className="mt-10 flex flex-wrap items-center gap-5" delay={300}>
              <button
                type="button"
                onClick={() => scrollToEl(document.querySelector(`#dishes`))}
                className="btn btn-ghost"
                data-cursor="view"
              >
                {'Watch a dish build '}
                <ArrowUpRight size={13} />
              </button>
              <span className="flex items-center gap-2 text-[8px] uppercase tracking-[0.24em] text-bone/30">
                <Star size={8} className="text-ice/60" />
                {' Eight plates · one kettle'}
              </span>
            </Reveal>
          </div>
          <div className="relative lg:col-span-5">
            <Reveal className="relative mx-auto aspect-[4/5] w-full max-w-[440px]" delay={180}>
              <div className="absolute inset-0 overflow-hidden rounded-[2px] border border-line bg-gradient-to-b from-[#0b1017] to-[#06070b]">
                <div className="absolute left-1/2 top-[44%] h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#89a7bb]/15 blur-[70px]" />
                <img
                  src="/renders/dish-05.png"
                  alt="A bowl of masala maggi under a low light"
                  className="dish-render hover-img absolute inset-0 h-full w-full object-contain p-6 mix-blend-screen"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = `none`
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05060a] via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
                  <div>
                    <p className="label mb-2 text-bone/40">(On the pass)</p>
                    <p className="font-serif text-3xl leading-none text-bone/90">Masala Maggi</p>
                  </div>
                  <span className="font-serif text-xl text-bone/60">05</span>
                </div>
                <span className="absolute left-5 top-5 h-8 w-px bg-ice/40" />
                <span className="absolute left-5 top-5 h-px w-8 bg-ice/40" />
                <span className="absolute bottom-5 right-5 h-8 w-px bg-bone/15" />
                <span className="absolute bottom-5 right-5 h-px w-8 bg-bone/15" />
              </div>
            </Reveal>
            <Reveal
              className="mx-auto mt-5 flex max-w-[440px] items-center justify-between border-t border-line pt-4 text-[8px] uppercase tracking-[0.22em] text-bone/25"
              delay={260}
            >
              <span>Nothing waits under a lamp</span>
              <span>₹50</span>
            </Reveal>
          </div>
        </div>
        <div className="mt-20 grid grid-cols-1 border-t border-line sm:grid-cols-3">
          {aI.map((e, t) => (
            <Reveal
              key={e.no}
              delay={t * 120}
              className={`group border-b border-line px-0 py-8 sm:border-b-0 sm:px-8 sm:py-10 ${t === 0 ? `sm:pl-0` : ``} ${t === 2 ? `sm:pr-0` : ``} ${t > 0 ? `sm:border-l` : ``}`}
            >
              <div className="flex items-start justify-between">
                <span className="font-serif text-lg italic text-ice/60">{e.no}</span>
                <ArrowUpRight
                  size={12}
                  className="text-bone/20 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ice"
                />
              </div>
              <h3 className="mt-6 font-serif text-3xl leading-none text-bone/90">{e.title}</h3>
              <p className="mt-4 max-w-[260px] text-[11px] font-light leading-relaxed text-bone/35">
                {e.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
      <div className="mt-16 border-y border-line py-4">
        <Marquee speed={44}>
          <div className="flex items-center gap-10 pr-10 text-[8px] uppercase tracking-[0.32em] text-bone/30">
            <span>Fresh milk</span>
            <span className="text-ice/40">✳</span>
            <span>Whole spices</span>
            <span className="text-ice/40">✳</span>
            <span>No shortcuts</span>
            <span className="text-ice/40">✳</span>
            <span>Small batches</span>
            <span className="text-ice/40">✳</span>
            <span>Poured slow</span>
            <span className="text-ice/40">✳</span>
            <span>Since 2003</span>
            <span className="text-ice/40">✳</span>
            <span>Fresh milk</span>
            <span className="text-ice/40">✳</span>
            <span>Whole spices</span>
            <span className="text-ice/40">✳</span>
            <span>No shortcuts</span>
            <span className="text-ice/40">✳</span>
            <span>Small batches</span>
            <span className="text-ice/40">✳</span>
            <span>Poured slow</span>
            <span className="text-ice/40">✳</span>
            <span>Since 2003</span>
            <span className="text-ice/40">✳</span>
          </div>
        </Marquee>
      </div>
    </section>
  )
}
