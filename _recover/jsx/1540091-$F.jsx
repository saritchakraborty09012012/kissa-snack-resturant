function DishStage({ onBook: e }) {
  let t = (0, React.useRef)(null),
    n = (0, React.useRef)(null),
    [r, i] = (0, React.useState)(0),
    a = (0, React.useRef)(0),
    o = (0, React.useRef)({
      on: !1,
      x: 0,
      spin: 0,
    })
  ;(0, React.useEffect)(() => {
    let e = t.current
    if (!e) return
    let n = qn.create({
      trigger: e,
      start: `top top`,
      end: `bottom bottom`,
      invalidateOnRefresh: !0,
      onUpdate: (e) => {
        let t = e.progress * br
        fD.pos = t
        let n = XF(Math.floor(t), 0, br - 1)
        n !== a.current && ((a.current = n), i(n))
      },
      onRefresh: (e) => {
        let t = e.progress * br
        fD.pos = t
        let n = XF(Math.floor(t), 0, br - 1)
        n !== a.current && ((a.current = n), i(n))
      },
    })
    gD((t) => {
      let n = XF(t, 0, br - 1),
        r = e.getBoundingClientRect().top + window.scrollY,
        i = e.offsetHeight - window.innerHeight
      hA(r + (n / br) * i + 2, {
        duration: 1.5,
      })
    })
    let r = () => qn.refresh(),
      o = window.setTimeout(r, 350)
    return (
      window.addEventListener(`resize`, r),
      () => {
        ;(n.kill(), window.clearTimeout(o), window.removeEventListener(`resize`, r), gD(null))
      }
    )
  }, [])
  let s = (e) => {
      let n = t.current
      if (!n) return
      let r = n.getBoundingClientRect().top + window.scrollY,
        i = n.offsetHeight - window.innerHeight
      hA(r + (e / br) * i + 2, {
        duration: 1.5,
      })
    },
    c = (e) => {
      e.target.closest(`button, a`) ||
        ((o.current.on = !0),
        (o.current.x = e.clientX),
        (o.current.spin = fD.spinTarget),
        n.current?.setPointerCapture?.(e.pointerId))
    },
    l = (e) => {
      let t = window.innerWidth,
        n = window.innerHeight
      if (!o.current.on) {
        ;((fD.pointer.x = (e.clientX / t) * 2 - 1), (fD.pointer.y = (e.clientY / n) * 2 - 1))
        return
      }
      let r = e.clientX - o.current.x
      ;((o.current.x = e.clientX),
        (fD.spinTarget = o.current.spin + r * 0.0026),
        (fD.pointer.x = (e.clientX / t) * 2 - 1),
        (fD.pointer.y = (e.clientY / n) * 2 - 1))
    },
    u = () => {
      o.current.on && ((o.current.on = !1), (fD.spinTarget = Math.round(fD.spinTarget * 2) / 2))
    }
  return (
    <section
      id="dishes"
      ref={t}
      className="relative bg-ink"
      style={{
        height: `${br * 100}vh`,
      }}
    >
      <div
        ref={n}
        className="sticky top-0 h-[100svh] w-full touch-pan-y overflow-hidden bg-ink"
        onPointerDown={c}
        onPointerMove={l}
        onPointerUp={u}
        onPointerCancel={u}
        onPointerLeave={u}
        style={{
          cursor: `grab`,
        }}
      >
        <div className="pointer-events-none absolute inset-0 z-0 atmosphere opacity-80" />
        <div className="pointer-events-none absolute left-[54%] top-[46%] z-0 h-[46vw] w-[46vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7f9eb2]/[0.11] blur-[130px]" />
        <div className="pointer-events-none absolute bottom-0 left-1/2 z-0 h-[22vw] w-[90vw] -translate-x-1/2 translate-y-1/2 rounded-full bg-[#0b1119] blur-[100px]" />
        {mr.map((e, t) => (
          <QF key={e.id} dish={e} index={t} active={t === r} />
        ))}
        <div className="pointer-events-none absolute inset-0 z-[2]">
          <fA rootMargin="80px 0px">{(e) => <YF active={e} />}</fA>
        </div>
        <div className="pointer-events-none absolute inset-0 z-[3]">
          <div className="shell flex h-full flex-col justify-between pb-[104px] pt-24 md:pt-28">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="label">(The dishes)</p>
                <p className="mt-2 text-[8px] uppercase leading-relaxed tracking-[0.22em] text-bone/25">
                  Eight plates, made to order
                </p>
              </div>
              <div className="text-right">
                <p className="label-bone label">
                  {mr[r].id} <span className="text-bone/20">/ 08</span>
                </p>
                <p className="mt-2 hidden text-[8px] uppercase tracking-[0.22em] text-bone/30 sm:block">
                  Scroll to build · drag to turn
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-[calc(var(--pad)*0.55)] top-1/2 z-[6] hidden -translate-y-1/2 flex-col items-end gap-3 md:flex">
          {mr.map((e, t) => {
            let n = t === r
            return (
              <button
                key={e.id}
                type="button"
                onClick={() => s(t)}
                data-cursor="view"
                className={`group flex items-center gap-3 py-0.5 text-[8px] uppercase tracking-[0.2em] transition-all duration-500 ${n ? `text-ice` : `text-bone/25 hover:text-bone/70`}`}
                aria-label={`Go to ${e.name}`}
              >
                <span
                  className={`overflow-hidden whitespace-nowrap text-[7px] tracking-[0.18em] transition-all duration-500 ${n ? `w-[92px] opacity-100` : `w-0 opacity-0 group-hover:w-[92px] group-hover:opacity-100`}`}
                >
                  {e.name}
                </span>
                <span className="tabular-nums">{e.id}</span>
                <span
                  className={`h-px transition-all duration-500 ${n ? `w-7 bg-ice` : `w-3 bg-bone/25 group-hover:w-5 group-hover:bg-bone/50`}`}
                />
              </button>
            )
          })}
        </div>
        <div className="absolute inset-x-0 bottom-0 z-[6] border-t border-line bg-gradient-to-t from-ink via-ink/90 to-transparent">
          <div className="shell flex items-center justify-between gap-6 py-5">
            <div className="min-w-0 flex-1">
              <ZF index={r} steps={mr[r].components} />
            </div>
            <div className="hidden shrink-0 items-center gap-4 md:flex">
              <span className="text-[8px] uppercase tracking-[0.22em] text-bone/25">
                {mr[r].spec}
              </span>
              <button
                type="button"
                onClick={e}
                className="btn btn-ghost h-10 px-5"
                data-cursor="view"
              >
                {'Book a table '}
                <ArrowUpRight size={12} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
