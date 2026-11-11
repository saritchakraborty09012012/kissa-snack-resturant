function TI({ open: e, onClose: t, onBook: n, onPickDish: r }) {
  let [i, a] = (0, v.useState)(null),
    o = (0, v.useRef)(null),
    s = (0, v.useRef)(null)
  ;((0, v.useEffect)(() => {
    if (!e) {
      a(null)
      return
    }
    let n = (e) => {
      e.key === `Escape` && t?.()
    }
    return (
      window.addEventListener(`keydown`, n),
      () => window.removeEventListener(`keydown`, n)
    )
  }, [e, t]),
    (0, v.useEffect)(() => {
      e && s.current?.scrollTo({ top: 0 })
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
  return (0, K.jsxs)(`div`, {
    'aria-hidden': !e,
    className: `fixed inset-0 z-[120] transition-[opacity,visibility] duration-700 ease-silk ${e ? `visible opacity-100` : `invisible opacity-0`}`,
    children: [
      (0, K.jsx)(`div`, {
        className: `absolute inset-0 bg-ink/80 backdrop-blur-md transition-opacity duration-700 ${e ? `opacity-100` : `opacity-0`}`,
        onClick: t,
      }),
      (0, K.jsxs)(`div`, {
        ref: s,
        className: `absolute inset-0 overflow-y-auto overscroll-contain bg-[#07080c] transition-transform duration-[900ms] ease-silk ${e ? `translate-y-0` : `translate-y-8`}`,
        onPointerMove: c,
        children: [
          (0, K.jsx)(`div`, {
            className: `pointer-events-none absolute -right-[10%] top-0 h-[70vh] w-[70vh] rounded-full bg-[#6f8797]/10 blur-[140px]`,
          }),
          (0, K.jsx)(`div`, {
            className: `pointer-events-none absolute -left-[15%] bottom-0 h-[60vh] w-[60vh] rounded-full bg-[#b9d6e7]/5 blur-[120px]`,
          }),
          (0, K.jsxs)(`div`, {
            className: `relative`,
            children: [
              (0, K.jsxs)(`div`, {
                className: `shell flex items-center justify-between border-b border-line py-5`,
                children: [
                  (0, K.jsxs)(`div`, {
                    className: `flex items-center gap-3`,
                    children: [
                      (0, K.jsx)(ir, { size: 34 }),
                      (0, K.jsx)(ar, { className: `text-bone/80` }),
                    ],
                  }),
                  (0, K.jsxs)(`div`, {
                    className: `flex items-center gap-5`,
                    children: [
                      (0, K.jsx)(`span`, {
                        className: `hidden text-[8px] uppercase tracking-[0.28em] text-bone/35 sm:block`,
                        children: `The full menu · 6 PM — 5 AM`,
                      }),
                      (0, K.jsxs)(`button`, {
                        type: `button`,
                        onClick: t,
                        'data-cursor': `view`,
                        className: `flex h-11 items-center gap-2 rounded-full border border-bone/20 px-5 text-[9px] uppercase tracking-[0.24em] text-bone/80 transition-colors hover:border-bone/50 hover:text-bone`,
                        children: [`Close `, (0, K.jsx)(ur, { size: 15 })],
                      }),
                    ],
                  }),
                ],
              }),
              (0, K.jsxs)(`div`, {
                className: `shell grid grid-cols-1 gap-14 pb-24 pt-14 lg:grid-cols-12 lg:gap-8 lg:pt-20`,
                children: [
                  (0, K.jsxs)(`div`, {
                    className: `lg:col-span-5 lg:pr-16`,
                    children: [
                      (0, K.jsx)(`p`, { className: `label mb-8`, children: `(The menu)` }),
                      (0, K.jsxs)(`h2`, {
                        className: `display text-[clamp(3.4rem,7vw,7.4rem)] text-bone`,
                        children: [
                          `The whole menu,`,
                          (0, K.jsx)(`br`, {}),
                          (0, K.jsx)(`em`, {
                            className: `text-ice/90`,
                            children: `made to order.`,
                          }),
                        ],
                      }),
                      (0, K.jsx)(`p`, {
                        className: `mt-8 max-w-sm text-[13px] font-light leading-relaxed text-bone/50`,
                        children: `Eight plates, one kettle, and a counter that never closes early. Everything is cooked when you ask for it. Nothing waits under a lamp.`,
                      }),
                      (0, K.jsxs)(`div`, {
                        className: `mt-10 flex flex-wrap items-center gap-4`,
                        children: [
                          (0, K.jsxs)(`button`, {
                            type: `button`,
                            onClick: n,
                            className: `btn btn-ice`,
                            children: [`Book a table `, (0, K.jsx)(cr, {})],
                          }),
                          (0, K.jsx)(`span`, {
                            className: `text-[8px] uppercase tracking-[0.24em] text-bone/35`,
                            children: `No delivery · No shortcuts`,
                          }),
                        ],
                      }),
                      (0, K.jsxs)(`div`, {
                        className: `mt-14 grid max-w-sm grid-cols-2 gap-6 border-t border-line pt-7 text-[10px] leading-relaxed text-bone/45`,
                        children: [
                          (0, K.jsxs)(`div`, {
                            children: [
                              (0, K.jsx)(`p`, {
                                className: `label mb-2 text-bone/30`,
                                children: `Find us`,
                              }),
                              `14, Koliwada Lane`,
                              (0, K.jsx)(`br`, {}),
                              `Bandra West, Mumbai`,
                            ],
                          }),
                          (0, K.jsxs)(`div`, {
                            children: [
                              (0, K.jsx)(`p`, {
                                className: `label mb-2 text-bone/30`,
                                children: `Call`,
                              }),
                              `+91 98200 00003`,
                              (0, K.jsx)(`br`, {}),
                              `hello@mrchaiwala.in`,
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, K.jsxs)(`div`, {
                    className: `lg:col-span-7`,
                    children: [
                      (0, K.jsx)(`div`, {
                        className: `grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2`,
                        children: vr.map((e) =>
                          (0, K.jsxs)(
                            `div`,
                            {
                              children: [
                                (0, K.jsxs)(`div`, {
                                  className: `mb-5 flex items-center justify-between border-b border-line pb-3`,
                                  children: [
                                    (0, K.jsx)(`h3`, {
                                      className: `text-[9px] uppercase tracking-[0.28em] text-bone/40`,
                                      children: e.section,
                                    }),
                                    (0, K.jsx)(`span`, {
                                      className: `text-[8px] tabular-nums text-bone/25`,
                                      children: String(e.items.length).padStart(2, `0`),
                                    }),
                                  ],
                                }),
                                (0, K.jsx)(`ul`, {
                                  className: `space-y-1`,
                                  children: e.items.map((e) => {
                                    let t = !!CI[e.name]
                                    return (0, K.jsx)(
                                      `li`,
                                      {
                                        children: (0, K.jsxs)(`button`, {
                                          type: `button`,
                                          onMouseEnter: () => a(CI[e.name] || null),
                                          onMouseLeave: () => a(null),
                                          onClick: (t) => l(e.name, t),
                                          'data-cursor': t ? `view` : void 0,
                                          'data-cursor-label': t ? `View dish` : void 0,
                                          className: `group flex w-full items-start justify-between gap-4 border-b border-white/[0.055] py-4 text-left transition-colors duration-500 hover:border-bone/25`,
                                          children: [
                                            (0, K.jsxs)(`span`, {
                                              className: `min-w-0`,
                                              children: [
                                                (0, K.jsx)(`span`, {
                                                  className: `block font-serif text-[22px] leading-none text-bone/80 transition-colors duration-500 group-hover:text-bone`,
                                                  children: e.name,
                                                }),
                                                (0, K.jsx)(`span`, {
                                                  className: `mt-2 block text-[9px] uppercase tracking-[0.16em] text-bone/30`,
                                                  children: e.note,
                                                }),
                                              ],
                                            }),
                                            (0, K.jsxs)(`span`, {
                                              className: `flex shrink-0 items-center gap-3 pt-1`,
                                              children: [
                                                (0, K.jsx)(`span`, {
                                                  className: `text-[10px] tracking-[0.08em] text-bone/45`,
                                                  children: e.price,
                                                }),
                                                (0, K.jsx)(cr, {
                                                  size: 12,
                                                  className: `text-bone/20 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ice`,
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      },
                                      e.name,
                                    )
                                  }),
                                }),
                              ],
                            },
                            e.section,
                          ),
                        ),
                      }),
                      (0, K.jsxs)(`div`, {
                        className: `mt-16 flex flex-col justify-between gap-6 border-t border-line pt-6 sm:flex-row sm:items-center`,
                        children: [
                          (0, K.jsx)(`p`, {
                            className: `max-w-md text-[11px] font-light leading-relaxed text-bone/35`,
                            children: `Ask about the day's special, the extra-adrak pour, and the plate we are testing. The kitchen will tell you the truth.`,
                          }),
                          (0, K.jsxs)(`div`, {
                            className: `flex gap-5 text-[8px] uppercase tracking-[0.24em] text-bone/40`,
                            children: [
                              (0, K.jsx)(`a`, {
                                href: `#`,
                                className: `link-line hover:text-bone`,
                                children: `Instagram`,
                              }),
                              (0, K.jsx)(`a`, {
                                href: `#`,
                                className: `link-line hover:text-bone`,
                                children: `Zomato`,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          (0, K.jsx)(`div`, {
            ref: o,
            className: `pointer-events-none fixed left-0 top-0 z-[130] hidden h-52 w-52 md:block ${i ? `opacity-100` : `opacity-0`} transition-opacity duration-500`,
            style: { transform: `translate3d(-999px, -999px, 0)` },
            children:
              i &&
              (0, K.jsx)(`img`, {
                src: `/renders/${i}.png`,
                alt: ``,
                className: `h-full w-full object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.8)]`,
              }),
          }),
        ],
      }),
    ],
  })
}
var EI = (() => {
    let e = [],
      t = (t, n) => {
        let r = `${String(t).padStart(2, `0`)}:${String(n).padStart(2, `0`)}`,
          i = t % 12 == 0 ? 12 : t % 12,
          a = t >= 12 && t < 24 ? `PM` : `AM`
        e.push({ value: r, label: `${i}:${String(n).padStart(2, `0`)} ${a}` })
      }
    for (let e = 18; e <= 23; e++) (t(e, 0), t(e, 30))
    for (let e = 0; e <= 4; e++) (t(e, 0), t(e, 30))
    return e
  })(),
  DI = new Date().toISOString().split(`T`)[0]
