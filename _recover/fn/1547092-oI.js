function oI() {
  return (0, K.jsxs)(`section`, {
    id: `story`,
    className: `relative overflow-hidden bg-ink section-pad`,
    children: [
      (0, K.jsx)(`div`, {
        className: `pointer-events-none absolute -right-[18%] top-[8%] h-[60vw] w-[60vw] rounded-full bg-[#5d7383]/10 blur-[140px]`,
      }),
      (0, K.jsx)(`div`, {
        className: `pointer-events-none absolute -left-[22%] bottom-[2%] h-[46vw] w-[46vw] rounded-full bg-[#b9d6e7]/[0.04] blur-[120px]`,
      }),
      (0, K.jsxs)(`div`, {
        className: `shell relative`,
        children: [
          (0, K.jsxs)(`div`, {
            className: `flex items-start justify-between gap-8 border-b border-line pb-5`,
            children: [
              (0, K.jsx)(`p`, { className: `label`, children: `(The ritual)` }),
              (0, K.jsxs)(`p`, {
                className: `hidden max-w-[260px] text-right text-[8px] uppercase leading-relaxed tracking-[0.22em] text-bone/30 sm:block`,
                children: [
                  `No shortcuts · no freezers`,
                  (0, K.jsx)(`br`, {}),
                  `Everything begins at the counter`,
                ],
              }),
            ],
          }),
          (0, K.jsxs)(`div`, {
            className: `mt-14 grid grid-cols-1 gap-14 lg:mt-20 lg:grid-cols-12 lg:gap-8`,
            children: [
              (0, K.jsxs)(`div`, {
                className: `lg:col-span-7`,
                children: [
                  (0, K.jsxs)(`h2`, {
                    className: `display text-[clamp(4rem,10.2vw,11rem)] text-bone`,
                    children: [
                      (0, K.jsx)(nI, { lines: [`Made`] }),
                      (0, K.jsx)(nI, {
                        lines: [`to order.`],
                        lineClassName: `italic text-ice/90`,
                        delay: 120,
                      }),
                    ],
                  }),
                  (0, K.jsxs)(tI, {
                    className: `mt-10 max-w-md`,
                    delay: 200,
                    children: [
                      (0, K.jsx)(`p`, {
                        className: `text-[13px] font-light leading-relaxed text-bone/50`,
                        children: `The chai is brewed in small batches. The vada is fried when you ask. The paratha is rolled, stuffed and griddled after the order reaches the kitchen. It takes the time it takes.`,
                      }),
                      (0, K.jsx)(`p`, {
                        className: `mt-4 text-[13px] font-light leading-relaxed text-bone/35`,
                        children: `This is a night café. The pace is slow because the night is long.`,
                      }),
                    ],
                  }),
                  (0, K.jsxs)(tI, {
                    className: `mt-10 flex flex-wrap items-center gap-5`,
                    delay: 300,
                    children: [
                      (0, K.jsxs)(`button`, {
                        type: `button`,
                        onClick: () => gA(document.querySelector(`#dishes`)),
                        className: `btn btn-ghost`,
                        'data-cursor': `view`,
                        children: [`Watch a dish build `, (0, K.jsx)(cr, { size: 13 })],
                      }),
                      (0, K.jsxs)(`span`, {
                        className: `flex items-center gap-2 text-[8px] uppercase tracking-[0.24em] text-bone/30`,
                        children: [
                          (0, K.jsx)(pr, { size: 8, className: `text-ice/60` }),
                          ` Eight plates · one kettle`,
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, K.jsxs)(`div`, {
                className: `relative lg:col-span-5`,
                children: [
                  (0, K.jsx)(tI, {
                    className: `relative mx-auto aspect-[4/5] w-full max-w-[440px]`,
                    delay: 180,
                    children: (0, K.jsxs)(`div`, {
                      className: `absolute inset-0 overflow-hidden rounded-[2px] border border-line bg-gradient-to-b from-[#0b1017] to-[#06070b]`,
                      children: [
                        (0, K.jsx)(`div`, {
                          className: `absolute left-1/2 top-[44%] h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#89a7bb]/15 blur-[70px]`,
                        }),
                        (0, K.jsx)(`img`, {
                          src: `/renders/dish-05.png`,
                          alt: `A bowl of masala maggi under a low light`,
                          className: `dish-render hover-img absolute inset-0 h-full w-full object-contain p-6 mix-blend-screen`,
                          loading: `lazy`,
                          onError: (e) => {
                            e.currentTarget.style.display = `none`
                          },
                        }),
                        (0, K.jsx)(`div`, {
                          className: `absolute inset-0 bg-gradient-to-t from-[#05060a] via-transparent to-transparent`,
                        }),
                        (0, K.jsxs)(`div`, {
                          className: `absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6`,
                          children: [
                            (0, K.jsxs)(`div`, {
                              children: [
                                (0, K.jsx)(`p`, {
                                  className: `label mb-2 text-bone/40`,
                                  children: `(On the pass)`,
                                }),
                                (0, K.jsx)(`p`, {
                                  className: `font-serif text-3xl leading-none text-bone/90`,
                                  children: `Masala Maggi`,
                                }),
                              ],
                            }),
                            (0, K.jsx)(`span`, {
                              className: `font-serif text-xl text-bone/60`,
                              children: `05`,
                            }),
                          ],
                        }),
                        (0, K.jsx)(`span`, {
                          className: `absolute left-5 top-5 h-8 w-px bg-ice/40`,
                        }),
                        (0, K.jsx)(`span`, {
                          className: `absolute left-5 top-5 h-px w-8 bg-ice/40`,
                        }),
                        (0, K.jsx)(`span`, {
                          className: `absolute bottom-5 right-5 h-8 w-px bg-bone/15`,
                        }),
                        (0, K.jsx)(`span`, {
                          className: `absolute bottom-5 right-5 h-px w-8 bg-bone/15`,
                        }),
                      ],
                    }),
                  }),
                  (0, K.jsxs)(tI, {
                    className: `mx-auto mt-5 flex max-w-[440px] items-center justify-between border-t border-line pt-4 text-[8px] uppercase tracking-[0.22em] text-bone/25`,
                    delay: 260,
                    children: [
                      (0, K.jsx)(`span`, { children: `Nothing waits under a lamp` }),
                      (0, K.jsx)(`span`, { children: `₹50` }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          (0, K.jsx)(`div`, {
            className: `mt-20 grid grid-cols-1 border-t border-line sm:grid-cols-3`,
            children: aI.map((e, t) =>
              (0, K.jsxs)(
                tI,
                {
                  delay: t * 120,
                  className: `group border-b border-line px-0 py-8 sm:border-b-0 sm:px-8 sm:py-10 ${t === 0 ? `sm:pl-0` : ``} ${t === 2 ? `sm:pr-0` : ``} ${t > 0 ? `sm:border-l` : ``}`,
                  children: [
                    (0, K.jsxs)(`div`, {
                      className: `flex items-start justify-between`,
                      children: [
                        (0, K.jsx)(`span`, {
                          className: `font-serif text-lg italic text-ice/60`,
                          children: e.no,
                        }),
                        (0, K.jsx)(cr, {
                          size: 12,
                          className: `text-bone/20 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ice`,
                        }),
                      ],
                    }),
                    (0, K.jsx)(`h3`, {
                      className: `mt-6 font-serif text-3xl leading-none text-bone/90`,
                      children: e.title,
                    }),
                    (0, K.jsx)(`p`, {
                      className: `mt-4 max-w-[260px] text-[11px] font-light leading-relaxed text-bone/35`,
                      children: e.text,
                    }),
                  ],
                },
                e.no,
              ),
            ),
          }),
        ],
      }),
      (0, K.jsx)(`div`, {
        className: `mt-16 border-y border-line py-4`,
        children: (0, K.jsx)(iI, {
          speed: 44,
          children: (0, K.jsxs)(`div`, {
            className: `flex items-center gap-10 pr-10 text-[8px] uppercase tracking-[0.32em] text-bone/30`,
            children: [
              (0, K.jsx)(`span`, { children: `Fresh milk` }),
              (0, K.jsx)(`span`, { className: `text-ice/40`, children: `✳` }),
              (0, K.jsx)(`span`, { children: `Whole spices` }),
              (0, K.jsx)(`span`, { className: `text-ice/40`, children: `✳` }),
              (0, K.jsx)(`span`, { children: `No shortcuts` }),
              (0, K.jsx)(`span`, { className: `text-ice/40`, children: `✳` }),
              (0, K.jsx)(`span`, { children: `Small batches` }),
              (0, K.jsx)(`span`, { className: `text-ice/40`, children: `✳` }),
              (0, K.jsx)(`span`, { children: `Poured slow` }),
              (0, K.jsx)(`span`, { className: `text-ice/40`, children: `✳` }),
              (0, K.jsx)(`span`, { children: `Since 2003` }),
              (0, K.jsx)(`span`, { className: `text-ice/40`, children: `✳` }),
              (0, K.jsx)(`span`, { children: `Fresh milk` }),
              (0, K.jsx)(`span`, { className: `text-ice/40`, children: `✳` }),
              (0, K.jsx)(`span`, { children: `Whole spices` }),
              (0, K.jsx)(`span`, { className: `text-ice/40`, children: `✳` }),
              (0, K.jsx)(`span`, { children: `No shortcuts` }),
              (0, K.jsx)(`span`, { className: `text-ice/40`, children: `✳` }),
              (0, K.jsx)(`span`, { children: `Small batches` }),
              (0, K.jsx)(`span`, { className: `text-ice/40`, children: `✳` }),
              (0, K.jsx)(`span`, { children: `Poured slow` }),
              (0, K.jsx)(`span`, { className: `text-ice/40`, children: `✳` }),
              (0, K.jsx)(`span`, { children: `Since 2003` }),
              (0, K.jsx)(`span`, { className: `text-ice/40`, children: `✳` }),
            ],
          }),
        }),
      }),
    ],
  })
}
