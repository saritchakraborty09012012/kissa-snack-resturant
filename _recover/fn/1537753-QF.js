function QF({ dish: e, index: t, active: n }) {
  return (0, K.jsx)(`div`, {
    className: `dish-overlay absolute inset-0 z-[1]`,
    'data-active': n ? `true` : `false`,
    'aria-hidden': !n,
    children: (0, K.jsxs)(`div`, {
      className: `shell relative h-full`,
      children: [
        (0, K.jsxs)(`div`, {
          className: `absolute left-[var(--pad)] top-[16%] max-w-[56vw] md:top-[19%] md:max-w-[46vw]`,
          children: [
            (0, K.jsxs)(`div`, {
              className: `mb-5 flex items-center gap-3 md:mb-7`,
              children: [
                (0, K.jsx)(`span`, { className: `h-px w-8 bg-bone/30` }),
                (0, K.jsxs)(`p`, {
                  className: `label whitespace-nowrap`,
                  children: [`(`, e.kicker, `)`],
                }),
              ],
            }),
            (0, K.jsx)(`h2`, {
              className: `display text-[clamp(3.5rem,8.2vw,9.4rem)] text-bone`,
              children: e.lines.map((t, n) =>
                (0, K.jsx)(
                  `span`,
                  {
                    className: `block overflow-hidden`,
                    children: (0, K.jsx)(`span`, {
                      className: `dish-line ${n === e.lines.length - 1 && e.lines.length > 1 ? `italic text-ice/90` : ``}`,
                      style: { transitionDelay: `${120 + n * 90}ms` },
                      children: t,
                    }),
                  },
                  t,
                ),
              ),
            }),
            (0, K.jsxs)(`div`, {
              className: `dish-fade mt-7 hidden max-w-[310px] md:block`,
              style: { transitionDelay: `480ms` },
              children: [
                (0, K.jsx)(`p`, {
                  className: `text-[11px] font-light leading-relaxed text-bone/45`,
                  children: e.description,
                }),
                (0, K.jsxs)(`div`, {
                  className: `mt-5 flex items-center gap-5`,
                  children: [
                    (0, K.jsx)(`span`, {
                      className: `font-serif text-2xl leading-none text-bone/85`,
                      children: e.price,
                    }),
                    (0, K.jsx)(`span`, { className: `h-3 w-px bg-bone/20` }),
                    (0, K.jsx)(`span`, {
                      className: `text-[8px] uppercase tracking-[0.22em] text-bone/35`,
                      children: e.since,
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        (0, K.jsxs)(`div`, {
          className: `dish-fade absolute bottom-[124px] left-[var(--pad)] hidden items-center gap-3 lg:flex`,
          style: { transitionDelay: `600ms` },
          children: [
            (0, K.jsx)(pr, { size: 8, className: `text-ice/60` }),
            (0, K.jsx)(`span`, {
              className: `text-[8px] uppercase tracking-[0.24em] text-bone/35`,
              children: e.label,
            }),
            (0, K.jsx)(`span`, { className: `h-px w-10 bg-bone/15` }),
            (0, K.jsx)(`span`, {
              className: `text-[8px] uppercase tracking-[0.24em] text-bone/25`,
              children: e.spec,
            }),
          ],
        }),
        (0, K.jsxs)(`div`, {
          className: `pointer-events-none absolute bottom-[15%] right-[var(--pad)] flex items-start gap-4 md:bottom-[20%]`,
          children: [
            (0, K.jsxs)(`span`, {
              className: `mt-2 hidden text-[7px] uppercase leading-relaxed tracking-[0.3em] text-bone/25 md:block`,
              children: [`Dish`, (0, K.jsx)(`br`, {}), `number`],
            }),
            (0, K.jsx)(`span`, {
              className: `display text-[clamp(5.2rem,15vw,15rem)] leading-[0.7] text-bone/[0.14]`,
              children: e.id,
            }),
          ],
        }),
      ],
    }),
  })
}
