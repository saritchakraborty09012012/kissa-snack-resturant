function gI({ onMenu: e, onBook: t, onPickDish: n }) {
  return (0, K.jsxs)(`section`, {
    id: `menu`,
    className: `relative overflow-hidden border-t border-line bg-ink section-pad`,
    children: [
      (0, K.jsx)(`div`, {
        className: `pointer-events-none absolute right-0 top-0 h-[50vw] w-[50vw] translate-x-1/3 rounded-full bg-[#69808f]/[0.08] blur-[140px]`,
      }),
      (0, K.jsxs)(`div`, {
        className: `shell relative`,
        children: [
          (0, K.jsxs)(`div`, {
            className: `flex items-start justify-between gap-8 border-b border-line pb-5`,
            children: [
              (0, K.jsx)(`p`, { className: `label`, children: `(The whole menu)` }),
              (0, K.jsxs)(`p`, {
                className: `hidden max-w-[260px] text-right text-[8px] uppercase leading-relaxed tracking-[0.22em] text-bone/25 sm:block`,
                children: [
                  `Eight plates, one kettle`,
                  (0, K.jsx)(`br`, {}),
                  `Cooked when you ask for it`,
                ],
              }),
            ],
          }),
          (0, K.jsxs)(`div`, {
            className: `grid grid-cols-1 gap-10 pt-14 lg:grid-cols-12 lg:gap-6 lg:pt-20`,
            children: [
              (0, K.jsx)(`div`, {
                className: `lg:col-span-7`,
                children: (0, K.jsxs)(`h2`, {
                  className: `display text-[clamp(3.8rem,8.8vw,10rem)] text-bone`,
                  children: [
                    (0, K.jsx)(nI, { lines: [`The whole`, `menu,`] }),
                    (0, K.jsx)(nI, {
                      lines: [`made to order.`],
                      lineClassName: `italic text-ice/90`,
                      delay: 140,
                    }),
                  ],
                }),
              }),
              (0, K.jsxs)(`div`, {
                className: `flex flex-col justify-end lg:col-span-5`,
                children: [
                  (0, K.jsxs)(tI, {
                    delay: 160,
                    children: [
                      (0, K.jsx)(`p`, {
                        className: `max-w-md text-[12px] font-light leading-relaxed text-bone/45`,
                        children: `No delivery, no shortcuts, no food waiting under a lamp. Everything on this list is made when you order it — from the chai to the chaat.`,
                      }),
                      (0, K.jsx)(`p`, {
                        className: `mt-4 max-w-md text-[10px] font-light leading-relaxed text-bone/25`,
                        children: `Prices are honest. Portions are generous. The kitchen will tell you what is good tonight.`,
                      }),
                    ],
                  }),
                  (0, K.jsxs)(tI, {
                    className: `mt-8 flex flex-wrap items-center gap-4`,
                    delay: 240,
                    children: [
                      (0, K.jsxs)(`button`, {
                        type: `button`,
                        onClick: e,
                        className: `btn btn-ice`,
                        'data-cursor': `view`,
                        children: [`Open the full menu `, (0, K.jsx)(cr, { size: 13 })],
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
            className: `mt-16 border-t border-line pt-8 md:mt-20`,
            children: [
              (0, K.jsxs)(`div`, {
                className: `mb-6 flex items-center justify-between`,
                children: [
                  (0, K.jsx)(`p`, {
                    className: `text-[8px] uppercase tracking-[0.26em] text-bone/35`,
                    children: `(On the pass tonight)`,
                  }),
                  (0, K.jsx)(`p`, {
                    className: `text-[8px] uppercase tracking-[0.24em] text-bone/20`,
                    children: `Drag / scroll →`,
                  }),
                ],
              }),
              (0, K.jsxs)(`div`, {
                className: `-mx-[var(--pad)] flex snap-x snap-mandatory gap-5 overflow-x-auto px-[var(--pad)] pb-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden`,
                children: [
                  mr.map((e, t) => (0, K.jsx)(hI, { dish: e, index: t, onPick: n }, e.id)),
                  (0, K.jsxs)(`div`, {
                    className: `flex w-[74vw] shrink-0 snap-start flex-col justify-between border border-line bg-[#07090e] p-6 sm:w-[46vw] lg:w-[300px]`,
                    children: [
                      (0, K.jsx)(pr, { size: 14, className: `text-ice/50` }),
                      (0, K.jsxs)(`div`, {
                        children: [
                          (0, K.jsxs)(`p`, {
                            className: `font-serif text-3xl leading-[1.02] text-bone/80`,
                            children: [
                              `The kitchen is`,
                              (0, K.jsx)(`br`, {}),
                              `still `,
                              (0, K.jsx)(`em`, {
                                className: `italic text-ice/80`,
                                children: `open.`,
                              }),
                            ],
                          }),
                          (0, K.jsx)(`p`, {
                            className: `mt-4 max-w-[220px] text-[10px] font-light leading-relaxed text-bone/30`,
                            children: `Ask about the day's special, the extra-adrak pour, and the plate we are testing.`,
                          }),
                          (0, K.jsxs)(`button`, {
                            type: `button`,
                            onClick: e,
                            className: `mt-6 inline-flex items-center gap-2 text-[8px] uppercase tracking-[0.24em] text-bone/60 transition-colors hover:text-ice`,
                            children: [`See everything `, (0, K.jsx)(cr, { size: 12 })],
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
            className: `mt-6 grid grid-cols-1 gap-x-10 gap-y-12 border-t border-line pt-12 sm:grid-cols-2 xl:grid-cols-4`,
            children: vr.map((t, n) =>
              (0, K.jsxs)(
                tI,
                {
                  delay: n * 90,
                  children: [
                    (0, K.jsxs)(`div`, {
                      className: `mb-5 flex items-center justify-between border-b border-line pb-3`,
                      children: [
                        (0, K.jsx)(`h3`, {
                          className: `text-[9px] uppercase tracking-[0.28em] text-bone/40`,
                          children: t.section,
                        }),
                        (0, K.jsx)(`span`, {
                          className: `text-[8px] tabular-nums text-bone/20`,
                          children: String(t.items.length).padStart(2, `0`),
                        }),
                      ],
                    }),
                    (0, K.jsx)(`ul`, {
                      className: `space-y-1`,
                      children: t.items.map((t) =>
                        (0, K.jsx)(
                          `li`,
                          {
                            children: (0, K.jsxs)(`button`, {
                              type: `button`,
                              onClick: e,
                              className: `group flex w-full items-start justify-between gap-4 border-b border-white/[0.05] py-3.5 text-left transition-colors duration-500 hover:border-bone/25`,
                              children: [
                                (0, K.jsxs)(`span`, {
                                  className: `min-w-0`,
                                  children: [
                                    (0, K.jsx)(`span`, {
                                      className: `block font-serif text-[20px] leading-tight text-bone/75 transition-colors duration-500 group-hover:text-bone`,
                                      children: t.name,
                                    }),
                                    (0, K.jsx)(`span`, {
                                      className: `mt-1.5 block text-[8px] uppercase tracking-[0.16em] text-bone/25`,
                                      children: t.note,
                                    }),
                                  ],
                                }),
                                (0, K.jsx)(`span`, {
                                  className: `shrink-0 pt-1 text-[10px] tracking-[0.08em] text-bone/40`,
                                  children: t.price,
                                }),
                              ],
                            }),
                          },
                          t.name,
                        ),
                      ),
                    }),
                  ],
                },
                t.section,
              ),
            ),
          }),
          (0, K.jsxs)(`div`, {
            className: `mt-12 flex flex-col justify-between gap-5 border-t border-line pt-6 sm:flex-row sm:items-center`,
            children: [
              (0, K.jsx)(`p`, {
                className: `max-w-md text-[10px] font-light leading-relaxed text-bone/30`,
                children: `All prices in INR. Vegetarian kitchen. Jain options on request. Ask about allergens — we will tell you the truth.`,
              }),
              (0, K.jsxs)(`div`, {
                className: `flex items-center gap-6 text-[8px] uppercase tracking-[0.24em] text-bone/35`,
                children: [
                  (0, K.jsx)(`span`, { children: `No delivery` }),
                  (0, K.jsx)(`span`, { className: `h-3 w-px bg-bone/15` }),
                  (0, K.jsx)(`span`, { children: `No shortcuts` }),
                  (0, K.jsx)(`span`, { className: `h-3 w-px bg-bone/15` }),
                  (0, K.jsx)(`span`, { className: `text-ice/50`, children: `Since 2003` }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  })
}
