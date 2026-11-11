function pI() {
  return (0, K.jsxs)(`section`, {
    id: `hours`,
    className: `relative overflow-hidden border-t border-line bg-ink section-pad`,
    children: [
      (0, K.jsx)(`div`, {
        className: `pointer-events-none absolute -left-[12%] top-[20%] h-[46vw] w-[46vw] rounded-full bg-[#7a93a5]/[0.09] blur-[140px]`,
      }),
      (0, K.jsxs)(`div`, {
        className: `shell relative`,
        children: [
          (0, K.jsxs)(`div`, {
            className: `flex items-center justify-between border-b border-line pb-5`,
            children: [
              (0, K.jsx)(`p`, { className: `label`, children: `(Hours)` }),
              (0, K.jsx)(`p`, {
                className: `text-[8px] uppercase tracking-[0.24em] text-bone/30`,
                children: `Six nights a week`,
              }),
            ],
          }),
          (0, K.jsxs)(`div`, {
            className: `grid grid-cols-1 gap-14 pt-14 lg:grid-cols-12 lg:gap-6 lg:pt-20`,
            children: [
              (0, K.jsxs)(`div`, {
                className: `lg:col-span-7`,
                children: [
                  (0, K.jsx)(`p`, {
                    className: `label mb-6 text-ice/70`,
                    children: `(A night café)`,
                  }),
                  (0, K.jsxs)(`h2`, {
                    className: `display text-[clamp(3.8rem,8.6vw,9.6rem)] text-bone`,
                    children: [
                      (0, K.jsx)(nI, { lines: [`Open at sunset.`] }),
                      (0, K.jsx)(nI, {
                        lines: [`Pouring`],
                        lineClassName: `italic text-ice/90`,
                        delay: 110,
                      }),
                      (0, K.jsx)(nI, { lines: [`until five.`], delay: 200 }),
                    ],
                  }),
                  (0, K.jsx)(tI, {
                    className: `mt-10 max-w-md`,
                    delay: 150,
                    children: (0, K.jsx)(`p`, {
                      className: `text-[12px] font-light leading-relaxed text-bone/45`,
                      children: `We open when the light goes and close when the city starts to wake. There is no last order. If the kettle is on, you are welcome.`,
                    }),
                  }),
                  (0, K.jsxs)(`div`, {
                    className: `mt-10 flex flex-wrap items-center gap-x-10 gap-y-4`,
                    children: [
                      (0, K.jsxs)(`div`, {
                        children: [
                          (0, K.jsx)(`p`, {
                            className: `font-serif text-3xl leading-none text-bone/90`,
                            children: `6:00 PM — 5:00 AM`,
                          }),
                          (0, K.jsx)(`p`, {
                            className: `mt-2 text-[8px] uppercase tracking-[0.24em] text-bone/30`,
                            children: `Monday to Saturday`,
                          }),
                        ],
                      }),
                      (0, K.jsx)(`div`, { className: `h-8 w-px bg-bone/15` }),
                      (0, K.jsxs)(`div`, {
                        className: `flex items-center gap-3`,
                        children: [
                          (0, K.jsxs)(`span`, {
                            className: `relative flex h-2 w-2`,
                            children: [
                              (0, K.jsx)(`span`, {
                                className: `absolute inline-flex h-full w-full animate-ping rounded-full bg-ice/50`,
                              }),
                              (0, K.jsx)(`span`, {
                                className: `relative inline-flex h-2 w-2 rounded-full bg-ice/80`,
                              }),
                            ],
                          }),
                          (0, K.jsxs)(`p`, {
                            className: `text-[8px] uppercase leading-relaxed tracking-[0.24em] text-bone/40`,
                            children: [
                              `Open now`,
                              (0, K.jsx)(`br`, {}),
                              (0, K.jsx)(`span`, {
                                className: `text-bone/20`,
                                children: `Bandra West · Mumbai`,
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
                className: `flex flex-col justify-center lg:col-span-5`,
                children: (0, K.jsxs)(`div`, {
                  className: `relative border border-line bg-gradient-to-b from-[#0a0e14] to-[#06070b] p-6 md:p-9`,
                  children: [
                    (0, K.jsx)(`div`, { className: `absolute inset-0 atmosphere opacity-60` }),
                    (0, K.jsxs)(`div`, {
                      className: `relative`,
                      children: [
                        (0, K.jsxs)(`div`, {
                          className: `mb-2 flex items-center justify-between`,
                          children: [
                            (0, K.jsx)(`p`, {
                              className: `label text-bone/35`,
                              children: `(The night, measured)`,
                            }),
                            (0, K.jsx)(pr, { size: 8, className: `text-ice/50` }),
                          ],
                        }),
                        (0, K.jsx)(fI, {}),
                        (0, K.jsxs)(`div`, {
                          className: `mt-6 flex items-center justify-between border-t border-line pt-4 text-[8px] uppercase tracking-[0.22em] text-bone/25`,
                          children: [
                            (0, K.jsx)(`span`, { children: `First pour · 6:00 PM` }),
                            (0, K.jsx)(`span`, { children: `Last pour · 5:00 AM` }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
          (0, K.jsx)(`div`, {
            className: `mt-20 grid grid-cols-1 border-t border-line md:grid-cols-2 xl:grid-cols-4`,
            children: _r.map((e, t) =>
              (0, K.jsxs)(
                tI,
                {
                  delay: t * 90,
                  className: `border-b border-line py-8 xl:border-b-0 ${t > 0 ? `xl:border-l xl:pl-8` : ``} ${t > 0 && t % 2 == 0 ? `md:border-l md:pl-8` : ``} ${t === 2 ? `md:border-l md:pl-8` : ``}`,
                  children: [
                    (0, K.jsxs)(`div`, {
                      className: `flex items-baseline justify-between gap-3`,
                      children: [
                        (0, K.jsx)(`p`, {
                          className: `text-[8px] uppercase tracking-[0.24em] text-bone/30`,
                          children: e.label,
                        }),
                        (0, K.jsx)(`span`, {
                          className: `font-serif text-lg italic text-ice/60`,
                          children: e.time,
                        }),
                      ],
                    }),
                    (0, K.jsx)(`p`, {
                      className: `mt-4 max-w-[250px] text-[11px] font-light leading-relaxed text-bone/40`,
                      children: e.text,
                    }),
                  ],
                },
                e.label,
              ),
            ),
          }),
        ],
      }),
    ],
  })
}
