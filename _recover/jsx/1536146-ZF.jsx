function ZF({ index: e, steps: t }) {
  let n = (0, React.useRef)(null),
    r = (0, React.useRef)(null),
    i = (0, React.useRef)(null)
  return (
    (0, React.useEffect)(() => {
      let t = 0,
        a = () => {
          let o = pD(e)
          if (
            (r.current && (r.current.style.transform = `scaleX(${o})`),
            i.current && (i.current.textContent = String(Math.round(o * 100)).padStart(3, `0`)),
            n.current)
          ) {
            let e = n.current.querySelectorAll(`[data-step]`)
            e.forEach((t, n) => {
              let r = o >= n / e.length + 0.02
              t.classList.toggle(`is-on`, r)
            })
          }
          t = requestAnimationFrame(a)
        }
      return ((t = requestAnimationFrame(a)), () => cancelAnimationFrame(t))
    }, [e]),
    (
      <div className="flex items-end gap-5 md:gap-8">
        <div className="hidden shrink-0 flex-col gap-2 lg:flex">
          <span className="text-[8px] uppercase tracking-[0.26em] text-bone/25">Build</span>
          <span className="font-serif text-2xl leading-none text-bone/65 tabular-nums" ref={i}>
            000
          </span>
        </div>
        <div className="min-w-0">
          <div
            ref={n}
            className="flex flex-wrap items-center gap-x-5 gap-y-2 md:gap-x-7"
            aria-label="Dish components"
          >
            {t.map((e, t) => (
              <span
                key={e}
                data-step={!0}
                className="build-step flex items-center gap-2 whitespace-nowrap text-[8px] uppercase tracking-[0.2em]"
              >
                <span className="build-dot h-[3px] w-[3px] rounded-full" />
                <span className="hidden text-bone/25 sm:inline">
                  {String(t + 1).padStart(2, `0`)}
                </span>
                {e}
              </span>
            ))}
          </div>
          <div className="mt-3 hidden h-px w-full overflow-hidden bg-bone/10 sm:block">
            <div
              ref={r}
              className="h-full w-full origin-left bg-ice/70"
              style={{
                transform: `scaleX(0)`,
              }}
            />
          </div>
        </div>
      </div>
    )
  )
}
