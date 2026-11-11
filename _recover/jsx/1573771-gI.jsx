function MenuSection({ onMenu: e, onBook: t, onPickDish: n }) {
  return (
    <section id="menu" className="relative overflow-hidden border-t border-line bg-ink section-pad">
      <div className="pointer-events-none absolute right-0 top-0 h-[50vw] w-[50vw] translate-x-1/3 rounded-full bg-[#69808f]/[0.08] blur-[140px]" />
      <div className="shell relative">
        <div className="flex items-start justify-between gap-8 border-b border-line pb-5">
          <p className="label">(The whole menu)</p>
          <p className="hidden max-w-[260px] text-right text-[8px] uppercase leading-relaxed tracking-[0.22em] text-bone/25 sm:block">
            Eight plates, one kettle
            <br />
            Cooked when you ask for it
          </p>
        </div>
        <div className="grid grid-cols-1 gap-10 pt-14 lg:grid-cols-12 lg:gap-6 lg:pt-20">
          <div className="lg:col-span-7">
            <h2 className="display text-[clamp(3.8rem,8.8vw,10rem)] text-bone">
              <SplitLines lines={[`The whole`, `menu,`]} />
              <SplitLines
                lines={[`made to order.`]}
                lineClassName="italic text-ice/90"
                delay={140}
              />
            </h2>
          </div>
          <div className="flex flex-col justify-end lg:col-span-5">
            <Reveal delay={160}>
              <p className="max-w-md text-[12px] font-light leading-relaxed text-bone/45">
                No delivery, no shortcuts, no food waiting under a lamp. Everything on this list is
                made when you order it — from the chai to the chaat.
              </p>
              <p className="mt-4 max-w-md text-[10px] font-light leading-relaxed text-bone/25">
                Prices are honest. Portions are generous. The kitchen will tell you what is good
                tonight.
              </p>
            </Reveal>
            <Reveal className="mt-8 flex flex-wrap items-center gap-4" delay={240}>
              <button type="button" onClick={e} className="btn btn-ice" data-cursor="view">
                {'Open the full menu '}
                <ArrowUpRight size={13} />
              </button>
              <button type="button" onClick={t} className="btn btn-ghost">
                Book a table
              </button>
            </Reveal>
          </div>
        </div>
        <div className="mt-16 border-t border-line pt-8 md:mt-20">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-[8px] uppercase tracking-[0.26em] text-bone/35">
              (On the pass tonight)
            </p>
            <p className="text-[8px] uppercase tracking-[0.24em] text-bone/20">Drag / scroll →</p>
          </div>
          <div className="-mx-[var(--pad)] flex snap-x snap-mandatory gap-5 overflow-x-auto px-[var(--pad)] pb-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {mr.map((e, t) => (
              <hI key={e.id} dish={e} index={t} onPick={n} />
            ))}
            <div className="flex w-[74vw] shrink-0 snap-start flex-col justify-between border border-line bg-[#07090e] p-6 sm:w-[46vw] lg:w-[300px]">
              <Star size={14} className="text-ice/50" />
              <div>
                <p className="font-serif text-3xl leading-[1.02] text-bone/80">
                  The kitchen is
                  <br />
                  {'still '}
                  <em className="italic text-ice/80">open.</em>
                </p>
                <p className="mt-4 max-w-[220px] text-[10px] font-light leading-relaxed text-bone/30">
                  Ask about the day's special, the extra-adrak pour, and the plate we are testing.
                </p>
                <button
                  type="button"
                  onClick={e}
                  className="mt-6 inline-flex items-center gap-2 text-[8px] uppercase tracking-[0.24em] text-bone/60 transition-colors hover:text-ice"
                >
                  {'See everything '}
                  <ArrowUpRight size={12} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-x-10 gap-y-12 border-t border-line pt-12 sm:grid-cols-2 xl:grid-cols-4">
          {vr.map((t, n) => (
            <Reveal key={t.section} delay={n * 90}>
              <div className="mb-5 flex items-center justify-between border-b border-line pb-3">
                <h3 className="text-[9px] uppercase tracking-[0.28em] text-bone/40">{t.section}</h3>
                <span className="text-[8px] tabular-nums text-bone/20">
                  {String(t.items.length).padStart(2, `0`)}
                </span>
              </div>
              <ul className="space-y-1">
                {t.items.map((t) => (
                  <li key={t.name}>
                    <button
                      type="button"
                      onClick={e}
                      className="group flex w-full items-start justify-between gap-4 border-b border-white/[0.05] py-3.5 text-left transition-colors duration-500 hover:border-bone/25"
                    >
                      <span className="min-w-0">
                        <span className="block font-serif text-[20px] leading-tight text-bone/75 transition-colors duration-500 group-hover:text-bone">
                          {t.name}
                        </span>
                        <span className="mt-1.5 block text-[8px] uppercase tracking-[0.16em] text-bone/25">
                          {t.note}
                        </span>
                      </span>
                      <span className="shrink-0 pt-1 text-[10px] tracking-[0.08em] text-bone/40">
                        {t.price}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
        <div className="mt-12 flex flex-col justify-between gap-5 border-t border-line pt-6 sm:flex-row sm:items-center">
          <p className="max-w-md text-[10px] font-light leading-relaxed text-bone/30">
            All prices in INR. Vegetarian kitchen. Jain options on request. Ask about allergens — we
            will tell you the truth.
          </p>
          <div className="flex items-center gap-6 text-[8px] uppercase tracking-[0.24em] text-bone/35">
            <span>No delivery</span>
            <span className="h-3 w-px bg-bone/15" />
            <span>No shortcuts</span>
            <span className="h-3 w-px bg-bone/15" />
            <span className="text-ice/50">Since 2003</span>
          </div>
        </div>
      </div>
    </section>
  )
}
