function MenuOverlay({ open: e, onClose: t, onBook: n, onPickDish: r }) {
  let [i, a] = (0, React.useState)(null),
    o = (0, React.useRef)(null),
    s = (0, React.useRef)(null)
  ;((0, React.useEffect)(() => {
    if (!e) {
      a(null)
      return
    }
    let n = (e) => {
      e.key === `Escape` && t?.()
    }
    return (window.addEventListener(`keydown`, n), () => window.removeEventListener(`keydown`, n))
  }, [e, t]),
    (0, React.useEffect)(() => {
      e &&
        s.current?.scrollTo({
          top: 0,
        })
    }, [e]))
  let c = (e) => {
      o.current &&
        (o.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`)
    },
    l = (e, n) => {
      n && n.preventDefault()
      let i = wI[e]
      i !== void 0 && (t?.(), window.setTimeout(() => r?.(i), 450))
    }
  return (
    <div
      aria-hidden={!e}
      className={`fixed inset-0 z-[120] transition-[opacity,visibility] duration-700 ease-silk ${e ? `visible opacity-100` : `invisible opacity-0`}`}
    >
      <div
        className={`absolute inset-0 bg-ink/80 backdrop-blur-md transition-opacity duration-700 ${e ? `opacity-100` : `opacity-0`}`}
        onClick={t}
      />
      <div
        ref={s}
        className={`absolute inset-0 overflow-y-auto overscroll-contain bg-[#07080c] transition-transform duration-[900ms] ease-silk ${e ? `translate-y-0` : `translate-y-8`}`}
        onPointerMove={c}
      >
        <div className="pointer-events-none absolute -right-[10%] top-0 h-[70vh] w-[70vh] rounded-full bg-[#6f8797]/10 blur-[140px]" />
        <div className="pointer-events-none absolute -left-[15%] bottom-0 h-[60vh] w-[60vh] rounded-full bg-[#b9d6e7]/5 blur-[120px]" />
        <div className="relative">
          <div className="shell flex items-center justify-between border-b border-line py-5">
            <div className="flex items-center gap-3">
              <CupLogo size={34} />
              <Wordmark className="text-bone/80" />
            </div>
            <div className="flex items-center gap-5">
              <span className="hidden text-[8px] uppercase tracking-[0.28em] text-bone/35 sm:block">
                The full menu · 6 PM — 5 AM
              </span>
              <button
                type="button"
                onClick={t}
                data-cursor="view"
                className="flex h-11 items-center gap-2 rounded-full border border-bone/20 px-5 text-[9px] uppercase tracking-[0.24em] text-bone/80 transition-colors hover:border-bone/50 hover:text-bone"
              >
                {'Close '}
                <Close size={15} />
              </button>
            </div>
          </div>
          <div className="shell grid grid-cols-1 gap-14 pb-24 pt-14 lg:grid-cols-12 lg:gap-8 lg:pt-20">
            <div className="lg:col-span-5 lg:pr-16">
              <p className="label mb-8">(The menu)</p>
              <h2 className="display text-[clamp(3.4rem,7vw,7.4rem)] text-bone">
                The whole menu,
                <br />
                <em className="text-ice/90">made to order.</em>
              </h2>
              <p className="mt-8 max-w-sm text-[13px] font-light leading-relaxed text-bone/50">
                Eight plates, one kettle, and a counter that never closes early. Everything is
                cooked when you ask for it. Nothing waits under a lamp.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <button type="button" onClick={n} className="btn btn-ice">
                  {'Book a table '}
                  <ArrowUpRight />
                </button>
                <span className="text-[8px] uppercase tracking-[0.24em] text-bone/35">
                  No delivery · No shortcuts
                </span>
              </div>
              <div className="mt-14 grid max-w-sm grid-cols-2 gap-6 border-t border-line pt-7 text-[10px] leading-relaxed text-bone/45">
                <div>
                  <p className="label mb-2 text-bone/30">Find us</p>14, Koliwada Lane
                  <br />
                  Bandra West, Mumbai
                </div>
                <div>
                  <p className="label mb-2 text-bone/30">Call</p>+91 98200 00003
                  <br />
                  hello@mrchaiwala.in
                </div>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2">
                {vr.map((e) => (
                  <div key={e.section}>
                    <div className="mb-5 flex items-center justify-between border-b border-line pb-3">
                      <h3 className="text-[9px] uppercase tracking-[0.28em] text-bone/40">
                        {e.section}
                      </h3>
                      <span className="text-[8px] tabular-nums text-bone/25">
                        {String(e.items.length).padStart(2, `0`)}
                      </span>
                    </div>
                    <ul className="space-y-1">
                      {e.items.map((e) => {
                        let t = !!CI[e.name]
                        return (
                          <li key={e.name}>
                            <button
                              type="button"
                              onMouseEnter={() => a(CI[e.name] || null)}
                              onMouseLeave={() => a(null)}
                              onClick={(t) => l(e.name, t)}
                              data-cursor={t ? `view` : void 0}
                              data-cursor-label={t ? `View dish` : void 0}
                              className="group flex w-full items-start justify-between gap-4 border-b border-white/[0.055] py-4 text-left transition-colors duration-500 hover:border-bone/25"
                            >
                              <span className="min-w-0">
                                <span className="block font-serif text-[22px] leading-none text-bone/80 transition-colors duration-500 group-hover:text-bone">
                                  {e.name}
                                </span>
                                <span className="mt-2 block text-[9px] uppercase tracking-[0.16em] text-bone/30">
                                  {e.note}
                                </span>
                              </span>
                              <span className="flex shrink-0 items-center gap-3 pt-1">
                                <span className="text-[10px] tracking-[0.08em] text-bone/45">
                                  {e.price}
                                </span>
                                <ArrowUpRight
                                  size={12}
                                  className="text-bone/20 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ice"
                                />
                              </span>
                            </button>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="mt-16 flex flex-col justify-between gap-6 border-t border-line pt-6 sm:flex-row sm:items-center">
                <p className="max-w-md text-[11px] font-light leading-relaxed text-bone/35">
                  Ask about the day's special, the extra-adrak pour, and the plate we are testing.
                  The kitchen will tell you the truth.
                </p>
                <div className="flex gap-5 text-[8px] uppercase tracking-[0.24em] text-bone/40">
                  <a href="#" className="link-line hover:text-bone">
                    Instagram
                  </a>
                  <a href="#" className="link-line hover:text-bone">
                    Zomato
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          ref={o}
          className={`pointer-events-none fixed left-0 top-0 z-[130] hidden h-52 w-52 md:block ${i ? `opacity-100` : `opacity-0`} transition-opacity duration-500`}
          style={{
            transform: `translate3d(-999px, -999px, 0)`,
          }}
        >
          {i && (
            <img
              src={`/renders/${i}.png`}
              alt=""
              className="h-full w-full object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
            />
          )}
        </div>
      </div>
    </div>
  )
}
var EI = (() => {
    let e = [],
      t = (t, n) => {
        let r = `${String(t).padStart(2, `0`)}:${String(n).padStart(2, `0`)}`,
          i = t % 12 == 0 ? 12 : t % 12,
          a = t >= 12 && t < 24 ? `PM` : `AM`
        e.push({
          value: r,
          label: `${i}:${String(n).padStart(2, `0`)} ${a}`,
        })
      }
    for (let e = 18; e <= 23; e++) (t(e, 0), t(e, 30))
    for (let e = 0; e <= 4; e++) (t(e, 0), t(e, 30))
    return e
  })(),
  DI = new Date().toISOString().split(`T`)[0]
