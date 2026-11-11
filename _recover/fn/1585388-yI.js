function yI({ onBook: e }) {
  return (0, K.jsxs)(`section`, {
    id: `visit`,
    className: `relative overflow-hidden border-t border-line bg-ink section-pad`,
    children: [
      (0, K.jsx)(`div`, {
        className: `pointer-events-none absolute -right-[15%] top-[10%] h-[50vw] w-[50vw] rounded-full bg-[#6f8797]/[0.09] blur-[140px]`,
      }),
      (0, K.jsxs)(`div`, {
        className: `shell relative`,
        children: [
          (0, K.jsxs)(`div`, {
            className: `flex items-center justify-between border-b border-line pb-5`,
            children: [
              (0, K.jsx)(`p`, { className: `label`, children: `(Visit)` }),
              (0, K.jsx)(`p`, {
                className: `hidden text-[8px] uppercase tracking-[0.24em] text-bone/25 sm:block`,
                children: `Six nights a week · 6 PM — 5 AM`,
              }),
            ],
          }),
          (0, K.jsxs)(`div`, {
            className: `grid grid-cols-1 gap-12 pt-14 lg:grid-cols-12 lg:gap-8 lg:pt-20`,
            children: [
              (0, K.jsxs)(`div`, {
                className: `lg:col-span-5`,
                children: [
                  (0, K.jsxs)(`h2`, {
                    className: `display text-[clamp(3.8rem,8.4vw,9rem)] text-bone`,
                    children: [
                      (0, K.jsx)(nI, { lines: [`Find us`] }),
                      (0, K.jsx)(nI, {
                        lines: [`after dark.`],
                        lineClassName: `italic text-ice/90`,
                        delay: 120,
                      }),
                    ],
                  }),
                  (0, K.jsx)(tI, {
                    className: `mt-8 max-w-sm`,
                    delay: 160,
                    children: (0, K.jsx)(`p`, {
                      className: `text-[12px] font-light leading-relaxed text-bone/45`,
                      children: `Behind the fish market, past the last tea stall, under the one light that stays on. Look for the smoke and the plastic chairs. That is us.`,
                    }),
                  }),
                  (0, K.jsxs)(`div`, {
                    className: `mt-10 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-line pt-8`,
                    children: [
                      (0, K.jsxs)(`div`, {
                        children: [
                          (0, K.jsx)(`p`, {
                            className: `label mb-3 text-bone/30`,
                            children: `Address`,
                          }),
                          (0, K.jsxs)(`p`, {
                            className: `text-[11px] leading-relaxed text-bone/60`,
                            children: [
                              `14, Koliwada Lane`,
                              (0, K.jsx)(`br`, {}),
                              `Bandra West`,
                              (0, K.jsx)(`br`, {}),
                              `Mumbai 400050`,
                            ],
                          }),
                        ],
                      }),
                      (0, K.jsxs)(`div`, {
                        children: [
                          (0, K.jsx)(`p`, {
                            className: `label mb-3 text-bone/30`,
                            children: `Hours`,
                          }),
                          (0, K.jsxs)(`p`, {
                            className: `text-[11px] leading-relaxed text-bone/60`,
                            children: [
                              `6:00 PM — 5:00 AM`,
                              (0, K.jsx)(`br`, {}),
                              `Monday to Saturday`,
                              (0, K.jsx)(`br`, {}),
                              (0, K.jsx)(`span`, {
                                className: `text-bone/30`,
                                children: `Closed Sunday`,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, K.jsxs)(`div`, {
                        children: [
                          (0, K.jsx)(`p`, {
                            className: `label mb-3 text-bone/30`,
                            children: `Call`,
                          }),
                          (0, K.jsx)(`a`, {
                            href: `tel:+919820000003`,
                            className: `link-line text-[11px] leading-relaxed text-bone/60 hover:text-bone`,
                            children: `+91 98200 00003`,
                          }),
                          (0, K.jsx)(`p`, {
                            className: `mt-1 text-[9px] uppercase tracking-[0.18em] text-bone/25`,
                            children: `After 6 PM only`,
                          }),
                        ],
                      }),
                      (0, K.jsxs)(`div`, {
                        children: [
                          (0, K.jsx)(`p`, {
                            className: `label mb-3 text-bone/30`,
                            children: `Write`,
                          }),
                          (0, K.jsx)(`a`, {
                            href: `mailto:hello@mrchaiwala.in`,
                            className: `link-line text-[11px] leading-relaxed text-bone/60 hover:text-bone`,
                            children: `hello@mrchaiwala.in`,
                          }),
                          (0, K.jsx)(`p`, {
                            className: `mt-1 text-[9px] uppercase tracking-[0.18em] text-bone/25`,
                            children: `We reply slowly`,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, K.jsxs)(tI, {
                    className: `mt-9 flex flex-wrap items-center gap-4`,
                    delay: 240,
                    children: [
                      (0, K.jsxs)(`button`, {
                        type: `button`,
                        onClick: e,
                        className: `btn btn-ice`,
                        'data-cursor': `view`,
                        children: [`Book a table `, (0, K.jsx)(cr, { size: 13 })],
                      }),
                      (0, K.jsxs)(`span`, {
                        className: `flex items-center gap-2 text-[8px] uppercase tracking-[0.22em] text-bone/25`,
                        children: [
                          (0, K.jsx)(pr, { size: 8, className: `text-ice/50` }),
                          ` Walk-ins welcome`,
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, K.jsx)(`div`, {
                className: `lg:col-span-7`,
                children: (0, K.jsx)(tI, {
                  className: `h-full`,
                  delay: 140,
                  children: (0, K.jsx)(vI, {}),
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  })
}
var bI = [
  {
    title: `Explore`,
    links: [
      { label: `The dishes`, href: `#dishes` },
      { label: `The ritual`, href: `#story` },
      { label: `The blend`, href: `#spices` },
      { label: `Hours`, href: `#hours` },
    ],
  },
  {
    title: `Visit`,
    links: [
      { label: `Find us`, href: `#visit` },
      { label: `Book a table`, action: `book` },
      { label: `The menu`, action: `menu` },
      { label: `Private hires`, action: `book` },
    ],
  },
]
