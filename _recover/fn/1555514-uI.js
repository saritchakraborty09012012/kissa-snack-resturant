function uI() {
  let [e, t] = (0, v.useState)(0),
    { ref: n, inView: r } = eI({ threshold: 0.2, once: !1 }),
    i = hr[e]
  return (
    (0, v.useEffect)(() => {
      if (!r) return
      let e = window.setInterval(() => {
        t((e) => (e + 1) % hr.length)
      }, 5200)
      return () => window.clearInterval(e)
    }, [r]),
    (0, K.jsxs)(`section`, {
      id: `spices`,
      className: `relative overflow-hidden border-t border-line bg-ink section-pad`,
      children: [
        (0, K.jsx)(`div`, {
          className: `pointer-events-none absolute left-1/2 top-1/2 h-[70vw] w-[70vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6b8496]/[0.07] blur-[150px]`,
        }),
        (0, K.jsxs)(`div`, {
          ref: n,
          className: `shell relative`,
          children: [
            (0, K.jsxs)(`div`, {
              className: `flex flex-wrap items-end justify-between gap-8 border-b border-line pb-8`,
              children: [
                (0, K.jsxs)(`div`, {
                  children: [
                    (0, K.jsx)(`p`, { className: `label mb-6`, children: `(The blend)` }),
                    (0, K.jsxs)(`h2`, {
                      className: `display text-[clamp(3.4rem,7.2vw,8rem)] text-bone`,
                      children: [
                        `Six you can taste.`,
                        (0, K.jsx)(`br`, {}),
                        (0, K.jsx)(`em`, {
                          className: `text-ice/90`,
                          children: `Twenty-four you can't.`,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, K.jsx)(`p`, {
                  className: `mb-2 max-w-[300px] text-[11px] font-light leading-relaxed text-bone/40`,
                  children: `Our masala is a living recipe — measured by hand, adjusted with the weather, and never written down in one place. These are the six that speak first.`,
                }),
              ],
            }),
            (0, K.jsxs)(`div`, {
              className: `mt-4 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-6`,
              children: [
                (0, K.jsx)(`div`, {
                  className: `relative lg:col-span-6`,
                  children: (0, K.jsxs)(`div`, {
                    className: `relative h-[54vh] min-h-[340px] overflow-hidden border-x border-b border-line bg-[#06080c] lg:sticky lg:top-24 lg:h-[72vh]`,
                    children: [
                      (0, K.jsx)(`div`, {
                        className: `pointer-events-none absolute inset-0 z-[1]`,
                        children: (0, K.jsx)(fA, {
                          rootMargin: `80px 0px`,
                          children: (e) => (0, K.jsx)(lI, { active: e }),
                        }),
                      }),
                      (0, K.jsx)(`div`, {
                        className: `pointer-events-none absolute inset-0 z-[2] bg-gradient-to-t from-[#05060a] via-transparent to-transparent`,
                      }),
                      (0, K.jsxs)(`div`, {
                        className: `pointer-events-none absolute inset-x-0 bottom-0 z-[3] flex items-end justify-between gap-5 p-6 md:p-8`,
                        children: [
                          (0, K.jsxs)(`div`, {
                            children: [
                              (0, K.jsxs)(`p`, {
                                className: `label mb-3 flex items-center gap-2 text-bone/35`,
                                children: [
                                  (0, K.jsx)(pr, { size: 8, className: `text-ice/70` }),
                                  ` Now in the blend`,
                                ],
                              }),
                              (0, K.jsx)(`p`, {
                                className: `font-serif text-[clamp(2rem,4vw,3.4rem)] leading-none text-bone`,
                                children: i.name,
                              }),
                              (0, K.jsx)(`p`, {
                                className: `mt-2 text-[9px] uppercase tracking-[0.2em] text-bone/35`,
                                children: i.note,
                              }),
                            ],
                          }),
                          (0, K.jsx)(`span`, {
                            className: `display text-[clamp(3rem,7vw,5.5rem)] leading-[0.7] text-bone/20`,
                            children: i.no,
                          }),
                        ],
                      }),
                      (0, K.jsx)(`span`, {
                        className: `pointer-events-none absolute left-5 top-5 z-[3] h-8 w-px bg-ice/30`,
                      }),
                      (0, K.jsx)(`span`, {
                        className: `pointer-events-none absolute left-5 top-5 z-[3] h-px w-8 bg-ice/30`,
                      }),
                      (0, K.jsx)(`span`, {
                        className: `pointer-events-none absolute bottom-5 right-5 z-[3] h-8 w-px bg-bone/15`,
                      }),
                      (0, K.jsx)(`span`, {
                        className: `pointer-events-none absolute bottom-5 right-5 z-[3] h-px w-8 bg-bone/15`,
                      }),
                    ],
                  }),
                }),
                (0, K.jsxs)(`div`, {
                  className: `lg:col-span-6 lg:pl-10`,
                  children: [
                    (0, K.jsxs)(`div`, {
                      className: `flex items-center justify-between border-b border-line pb-3 text-[8px] uppercase tracking-[0.26em] text-bone/25`,
                      children: [
                        (0, K.jsx)(`span`, { children: `The six` }),
                        (0, K.jsx)(`span`, { children: `Hover to taste` }),
                      ],
                    }),
                    (0, K.jsx)(`div`, {
                      children: hr.map((n, r) => {
                        let i = r === e
                        return (0, K.jsxs)(
                          `button`,
                          {
                            type: `button`,
                            onMouseEnter: () => t(r),
                            onFocus: () => t(r),
                            onClick: () => t(r),
                            className: `group block w-full border-b border-line py-5 text-left transition-colors duration-500 md:py-6`,
                            children: [
                              (0, K.jsxs)(`div`, {
                                className: `flex items-center justify-between`,
                                children: [
                                  (0, K.jsx)(`span`, {
                                    className: `text-[8px] uppercase tracking-[0.24em] transition-colors duration-500 ${i ? `text-ice` : `text-bone/25`}`,
                                    children: n.no,
                                  }),
                                  (0, K.jsx)(`span`, {
                                    className: `text-[7px] uppercase tracking-[0.26em] transition-all duration-500 ${i ? `text-ice/60 opacity-100` : `text-bone/20 opacity-0`}`,
                                    children: `In the glass`,
                                  }),
                                ],
                              }),
                              (0, K.jsxs)(`div`, {
                                className: `mt-2 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1`,
                                children: [
                                  (0, K.jsx)(`h3`, {
                                    className: `font-serif text-[clamp(1.9rem,3.4vw,3.2rem)] leading-none transition-all duration-500 ${i ? `translate-x-1 text-bone` : `text-bone/45`}`,
                                    children: n.name,
                                  }),
                                  (0, K.jsx)(`p`, {
                                    className: `text-[8px] uppercase tracking-[0.18em] text-bone/30`,
                                    children: n.note,
                                  }),
                                ],
                              }),
                              (0, K.jsx)(`div`, {
                                className: `grid transition-all duration-700 ease-silk ${i ? `mt-3 grid-rows-[1fr] opacity-100` : `grid-rows-[0fr] opacity-0`}`,
                                children: (0, K.jsx)(`div`, {
                                  className: `overflow-hidden`,
                                  children: (0, K.jsx)(`p`, {
                                    className: `max-w-[520px] text-[11px] font-light leading-relaxed text-bone/40`,
                                    children: n.text,
                                  }),
                                }),
                              }),
                            ],
                          },
                          n.name,
                        )
                      }),
                    }),
                    (0, K.jsxs)(tI, {
                      className: `mt-8 flex items-start justify-between gap-6`,
                      delay: 100,
                      children: [
                        (0, K.jsx)(`p`, {
                          className: `max-w-[360px] text-[10px] font-light leading-relaxed text-bone/30`,
                          children: `The other eighteen stay in the kitchen. Cardamom, ginger, clove, cinnamon, fennel and pepper are simply the ones you can name.`,
                        }),
                        (0, K.jsx)(`span`, {
                          className: `shrink-0 text-[8px] uppercase tracking-[0.24em] text-bone/20`,
                          children: `06 / 24`,
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
    })
  )
}
