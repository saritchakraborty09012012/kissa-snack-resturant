function SpiceSection() {
  let [e, t] = (0, React.useState)(0),
    { ref: n, inView: r } = useInView({
      threshold: 0.2,
      once: !1,
    }),
    i = hr[e]
  return (
    (0, React.useEffect)(() => {
      if (!r) return
      let e = window.setInterval(() => {
        t((e) => (e + 1) % hr.length)
      }, 5200)
      return () => window.clearInterval(e)
    }, [r]),
    (
      <section
        id="spices"
        className="relative overflow-hidden border-t border-line bg-ink section-pad"
      >
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[70vw] w-[70vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6b8496]/[0.07] blur-[150px]" />
        <div ref={n} className="shell relative">
          <div className="flex flex-wrap items-end justify-between gap-8 border-b border-line pb-8">
            <div>
              <p className="label mb-6">(The blend)</p>
              <h2 className="display text-[clamp(3.4rem,7.2vw,8rem)] text-bone">
                Six you can taste.
                <br />
                <em className="text-ice/90">Twenty-four you can't.</em>
              </h2>
            </div>
            <p className="mb-2 max-w-[300px] text-[11px] font-light leading-relaxed text-bone/40">
              Our masala is a living recipe — measured by hand, adjusted with the weather, and never
              written down in one place. These are the six that speak first.
            </p>
          </div>
          <div className="mt-4 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-6">
            <div className="relative lg:col-span-6">
              <div className="relative h-[54vh] min-h-[340px] overflow-hidden border-x border-b border-line bg-[#06080c] lg:sticky lg:top-24 lg:h-[72vh]">
                <div className="pointer-events-none absolute inset-0 z-[1]">
                  <fA rootMargin="80px 0px">{(e) => <lI active={e} />}</fA>
                </div>
                <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-t from-[#05060a] via-transparent to-transparent" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] flex items-end justify-between gap-5 p-6 md:p-8">
                  <div>
                    <p className="label mb-3 flex items-center gap-2 text-bone/35">
                      <Star size={8} className="text-ice/70" />
                      {' Now in the blend'}
                    </p>
                    <p className="font-serif text-[clamp(2rem,4vw,3.4rem)] leading-none text-bone">
                      {i.name}
                    </p>
                    <p className="mt-2 text-[9px] uppercase tracking-[0.2em] text-bone/35">
                      {i.note}
                    </p>
                  </div>
                  <span className="display text-[clamp(3rem,7vw,5.5rem)] leading-[0.7] text-bone/20">
                    {i.no}
                  </span>
                </div>
                <span className="pointer-events-none absolute left-5 top-5 z-[3] h-8 w-px bg-ice/30" />
                <span className="pointer-events-none absolute left-5 top-5 z-[3] h-px w-8 bg-ice/30" />
                <span className="pointer-events-none absolute bottom-5 right-5 z-[3] h-8 w-px bg-bone/15" />
                <span className="pointer-events-none absolute bottom-5 right-5 z-[3] h-px w-8 bg-bone/15" />
              </div>
            </div>
            <div className="lg:col-span-6 lg:pl-10">
              <div className="flex items-center justify-between border-b border-line pb-3 text-[8px] uppercase tracking-[0.26em] text-bone/25">
                <span>The six</span>
                <span>Hover to taste</span>
              </div>
              <div>
                {hr.map((n, r) => {
                  let i = r === e
                  return (
                    <button
                      key={n.name}
                      type="button"
                      onMouseEnter={() => t(r)}
                      onFocus={() => t(r)}
                      onClick={() => t(r)}
                      className="group block w-full border-b border-line py-5 text-left transition-colors duration-500 md:py-6"
                    >
                      <div className="flex items-center justify-between">
                        <span
                          className={`text-[8px] uppercase tracking-[0.24em] transition-colors duration-500 ${i ? `text-ice` : `text-bone/25`}`}
                        >
                          {n.no}
                        </span>
                        <span
                          className={`text-[7px] uppercase tracking-[0.26em] transition-all duration-500 ${i ? `text-ice/60 opacity-100` : `text-bone/20 opacity-0`}`}
                        >
                          In the glass
                        </span>
                      </div>
                      <div className="mt-2 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                        <h3
                          className={`font-serif text-[clamp(1.9rem,3.4vw,3.2rem)] leading-none transition-all duration-500 ${i ? `translate-x-1 text-bone` : `text-bone/45`}`}
                        >
                          {n.name}
                        </h3>
                        <p className="text-[8px] uppercase tracking-[0.18em] text-bone/30">
                          {n.note}
                        </p>
                      </div>
                      <div
                        className={`grid transition-all duration-700 ease-silk ${i ? `mt-3 grid-rows-[1fr] opacity-100` : `grid-rows-[0fr] opacity-0`}`}
                      >
                        <div className="overflow-hidden">
                          <p className="max-w-[520px] text-[11px] font-light leading-relaxed text-bone/40">
                            {n.text}
                          </p>
                        </div>
                      </div>
                    </button>
                  )
                })}
              </div>
              <Reveal className="mt-8 flex items-start justify-between gap-6" delay={100}>
                <p className="max-w-[360px] text-[10px] font-light leading-relaxed text-bone/30">
                  The other eighteen stay in the kitchen. Cardamom, ginger, clove, cinnamon, fennel
                  and pepper are simply the ones you can name.
                </p>
                <span className="shrink-0 text-[8px] uppercase tracking-[0.24em] text-bone/20">
                  06 / 24
                </span>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    )
  )
}
