function bA({ ready: e, onBook: t }) {
  let n = (0, v.useRef)(null),
    r = (e) => ({ transitionDelay: `${e}ms` })
  return (0, K.jsxs)(`section`, {
    id: `top`,
    ref: n,
    className: `relative min-h-[680px] h-[100svh] w-full overflow-hidden bg-ink`,
    children: [
      (0, K.jsxs)(`div`, {
        className: `pointer-events-none absolute inset-0 z-0`,
        children: [
          (0, K.jsx)(`div`, {
            className: `absolute left-[52%] top-[38%] h-[52vw] w-[52vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6c8699]/10 blur-[120px]`,
          }),
          (0, K.jsx)(`div`, {
            className: `absolute bottom-0 left-1/2 h-[30vw] w-[80vw] -translate-x-1/2 translate-y-1/2 rounded-full bg-[#1b242d]/60 blur-[110px]`,
          }),
        ],
      }),
      (0, K.jsx)(`div`, {
        className: `absolute inset-0 z-[1]`,
        children: (0, K.jsx)(fA, {
          rootMargin: `600px 0px`,
          children: (t) => (0, K.jsx)(dA, { ready: e, active: t }),
        }),
      }),
      (0, K.jsx)(`div`, {
        className: `pointer-events-none absolute inset-0 z-[2] bg-gradient-to-b from-ink/65 via-transparent to-ink/85`,
      }),
      (0, K.jsx)(`div`, {
        className: `pointer-events-none absolute inset-y-0 left-0 z-[2] w-[62%] bg-gradient-to-r from-ink/85 via-ink/35 to-transparent`,
      }),
      (0, K.jsx)(`div`, {
        className: `pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-[62%] bg-gradient-to-t from-ink via-ink/70 to-transparent md:hidden`,
      }),
      (0, K.jsxs)(`div`, {
        className: `relative z-10 flex h-full flex-col justify-between pb-6 pt-28 md:pb-8 md:pt-32`,
        children: [
          (0, K.jsxs)(`div`, {
            className: `shell flex items-start justify-between`,
            children: [
              (0, K.jsxs)(`div`, {
                className: `transition-all duration-[1300ms] ease-silk ${e ? `translate-y-0 opacity-100` : `translate-y-4 opacity-0`}`,
                style: r(300),
                children: [
                  (0, K.jsx)(`p`, {
                    className: `label`,
                    children: `(A night café · Bandra West)`,
                  }),
                  (0, K.jsxs)(`p`, {
                    className: `mt-3 max-w-[220px] text-[10px] uppercase leading-relaxed tracking-[0.2em] text-bone/35`,
                    children: [
                      `Eleven hours a night.`,
                      (0, K.jsx)(`br`, {}),
                      `One kettle. No shortcuts.`,
                    ],
                  }),
                ],
              }),
              (0, K.jsxs)(`div`, {
                className: `hidden text-right transition-all duration-[1300ms] ease-silk md:block ${e ? `translate-y-0 opacity-100` : `translate-y-4 opacity-0`}`,
                style: r(450),
                children: [
                  (0, K.jsx)(`p`, { className: `label`, children: `(Open at sunset)` }),
                  (0, K.jsx)(`p`, {
                    className: `mt-2 text-[10px] uppercase tracking-[0.2em] text-bone/55`,
                    children: `6:00 PM — 5:00 AM`,
                  }),
                  (0, K.jsx)(`p`, {
                    className: `mt-1 text-[8px] uppercase tracking-[0.24em] text-bone/25`,
                    children: `19.0596° N · 72.8295° E`,
                  }),
                ],
              }),
            ],
          }),
          (0, K.jsxs)(`div`, {
            className: `shell relative flex flex-1 flex-col justify-end`,
            children: [
              (0, K.jsxs)(`div`, {
                className: `relative z-10 max-w-[820px]`,
                children: [
                  (0, K.jsx)(`div`, {
                    className: `overflow-hidden`,
                    children: (0, K.jsx)(`p`, {
                      className: `label mb-4 transition-all duration-[1100ms] ease-silk ${e ? `translate-y-0 opacity-100` : `translate-y-4 opacity-0`}`,
                      style: r(600),
                      children: `(Chai, poured slow)`,
                    }),
                  }),
                  (0, K.jsxs)(`h1`, {
                    className: `display text-[clamp(4.6rem,12vw,12rem)] text-bone`,
                    children: [
                      (0, K.jsx)(`span`, {
                        className: `block overflow-hidden`,
                        children: (0, K.jsx)(`span`, {
                          className: `block transition-transform duration-[1400ms] ease-silk ${e ? `translate-y-0` : `translate-y-[108%]`}`,
                          style: r(650),
                          children: `Chai,`,
                        }),
                      }),
                      (0, K.jsx)(`span`, {
                        className: `block overflow-hidden`,
                        children: (0, K.jsx)(`span`, {
                          className: `block italic text-ice/95 transition-transform duration-[1400ms] ease-silk ${e ? `translate-y-0` : `translate-y-[108%]`}`,
                          style: r(780),
                          children: `poured slow.`,
                        }),
                      }),
                    ],
                  }),
                  (0, K.jsxs)(`div`, {
                    className: `mt-8 flex flex-col gap-6 transition-all duration-[1200ms] ease-silk sm:flex-row sm:items-end sm:justify-between ${e ? `translate-y-0 opacity-100` : `translate-y-5 opacity-0`}`,
                    style: r(1e3),
                    children: [
                      (0, K.jsx)(`p`, {
                        className: `max-w-[300px] text-[11px] font-light leading-relaxed text-bone/45`,
                        children: `Strong tea, whole spices, fresh milk. Poured in a cutting or a full glass — the same glass the city has been waking up to since 2003.`,
                      }),
                      (0, K.jsxs)(`div`, {
                        className: `flex flex-wrap items-center gap-3`,
                        children: [
                          (0, K.jsxs)(`button`, {
                            type: `button`,
                            onClick: () => gA(document.querySelector(`#dishes`)),
                            className: `btn btn-ice`,
                            'data-cursor': `view`,
                            children: [`Explore the night `, (0, K.jsx)(lr, { size: 13 })],
                          }),
                          (0, K.jsx)(`button`, {
                            type: `button`,
                            onClick: t,
                            className: `btn btn-ghost`,
                            children: `Book a table`,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, K.jsxs)(`div`, {
                className: `mt-10 flex items-end justify-between border-t border-line pt-5 transition-all duration-[1200ms] ease-silk ${e ? `opacity-100` : `opacity-0`}`,
                style: r(1200),
                children: [
                  (0, K.jsxs)(`div`, {
                    className: `flex items-center gap-4`,
                    children: [
                      (0, K.jsx)(`span`, { className: `scroll-line` }),
                      (0, K.jsxs)(`div`, {
                        children: [
                          (0, K.jsx)(`p`, {
                            className: `text-[8px] uppercase tracking-[0.24em] text-bone/45`,
                            children: `Scroll to enter`,
                          }),
                          (0, K.jsx)(`p`, {
                            className: `mt-1 text-[8px] uppercase tracking-[0.24em] text-bone/20`,
                            children: `Drag the dish once inside`,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, K.jsx)(`p`, {
                    className: `hidden text-[8px] uppercase tracking-[0.24em] text-bone/30 sm:block`,
                    children: `01 / 08 — Signature Chai`,
                  }),
                  (0, K.jsx)(yA, {}),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  })
}
