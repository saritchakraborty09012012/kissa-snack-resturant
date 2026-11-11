function ZF({ index: e, steps: t }) {
  let n = (0, v.useRef)(null),
    r = (0, v.useRef)(null),
    i = (0, v.useRef)(null)
  return (
    (0, v.useEffect)(() => {
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
    (0, K.jsxs)(`div`, {
      className: `flex items-end gap-5 md:gap-8`,
      children: [
        (0, K.jsxs)(`div`, {
          className: `hidden shrink-0 flex-col gap-2 lg:flex`,
          children: [
            (0, K.jsx)(`span`, {
              className: `text-[8px] uppercase tracking-[0.26em] text-bone/25`,
              children: `Build`,
            }),
            (0, K.jsx)(`span`, {
              className: `font-serif text-2xl leading-none text-bone/65 tabular-nums`,
              ref: i,
              children: `000`,
            }),
          ],
        }),
        (0, K.jsxs)(`div`, {
          className: `min-w-0`,
          children: [
            (0, K.jsx)(`div`, {
              ref: n,
              className: `flex flex-wrap items-center gap-x-5 gap-y-2 md:gap-x-7`,
              'aria-label': `Dish components`,
              children: t.map((e, t) =>
                (0, K.jsxs)(
                  `span`,
                  {
                    'data-step': !0,
                    className: `build-step flex items-center gap-2 whitespace-nowrap text-[8px] uppercase tracking-[0.2em]`,
                    children: [
                      (0, K.jsx)(`span`, {
                        className: `build-dot h-[3px] w-[3px] rounded-full`,
                      }),
                      (0, K.jsx)(`span`, {
                        className: `hidden text-bone/25 sm:inline`,
                        children: String(t + 1).padStart(2, `0`),
                      }),
                      e,
                    ],
                  },
                  e,
                ),
              ),
            }),
            (0, K.jsx)(`div`, {
              className: `mt-3 hidden h-px w-full overflow-hidden bg-bone/10 sm:block`,
              children: (0, K.jsx)(`div`, {
                ref: r,
                className: `h-full w-full origin-left bg-ice/70`,
                style: { transform: `scaleX(0)` },
              }),
            }),
          ],
        }),
      ],
    })
  )
}
