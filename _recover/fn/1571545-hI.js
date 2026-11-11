function hI({ dish: e, index: t, onPick: n }) {
  return (0, K.jsxs)(`button`, {
    type: `button`,
    'data-cursor': `view`,
    'data-cursor-label': `View dish`,
    onClick: () => (n ? n(t) : _D(t)),
    className: `group w-[74vw] shrink-0 snap-start text-left sm:w-[46vw] lg:w-[300px]`,
    'aria-label': `View ${e.name}`,
    children: [
      (0, K.jsxs)(`div`, {
        className: `relative aspect-[4/5] overflow-hidden border border-line bg-gradient-to-b from-[#0a0e14] to-[#06070b] transition-colors duration-700 group-hover:border-bone/30`,
        children: [
          (0, K.jsx)(`div`, {
            className: `pointer-events-none absolute left-1/2 top-1/2 h-[62%] w-[62%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8fb0c4]/15 blur-[50px] transition-opacity duration-700 group-hover:opacity-100`,
          }),
          (0, K.jsx)(`img`, {
            src: `/renders/dish-${e.id}.png`,
            alt: e.name,
            loading: `lazy`,
            className: `dish-render hover-img absolute inset-0 h-full w-full object-contain p-3 mix-blend-screen`,
            onError: (e) => {
              e.currentTarget.style.display = `none`
            },
          }),
          (0, K.jsx)(`div`, {
            className: `absolute inset-x-0 bottom-0 z-[2] h-1/2 bg-gradient-to-t from-[#05060a] via-[#05060a]/35 to-transparent`,
          }),
          (0, K.jsx)(`span`, {
            className: `absolute left-4 top-4 z-[2] text-[8px] uppercase tracking-[0.24em] text-bone/35`,
            children: e.id,
          }),
          (0, K.jsxs)(`span`, {
            className: `absolute right-4 top-4 z-[2] flex items-center gap-1.5 text-[7px] uppercase tracking-[0.2em] text-ice/60 opacity-0 transition-opacity duration-500 group-hover:opacity-100`,
            children: [(0, K.jsx)(pr, { size: 7 }), ` View`],
          }),
          (0, K.jsx)(`span`, {
            className: `absolute bottom-4 right-4 z-[2] font-serif text-lg text-bone/60`,
            children: e.price,
          }),
          (0, K.jsx)(`span`, {
            className: `absolute bottom-4 left-4 z-[2] text-[7px] uppercase tracking-[0.2em] text-bone/25`,
            children: e.label,
          }),
        ],
      }),
      (0, K.jsxs)(`div`, {
        className: `mt-3.5 flex items-start justify-between gap-4`,
        children: [
          (0, K.jsxs)(`div`, {
            children: [
              (0, K.jsx)(`p`, {
                className: `font-serif text-2xl leading-none text-bone/80 transition-colors duration-500 group-hover:text-bone`,
                children: e.name,
              }),
              (0, K.jsx)(`p`, {
                className: `mt-2 text-[8px] uppercase tracking-[0.18em] text-bone/25`,
                children: e.kicker,
              }),
            ],
          }),
          (0, K.jsx)(cr, {
            size: 13,
            className: `mt-1 shrink-0 text-bone/20 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ice`,
          }),
        ],
      }),
    ],
  })
}
