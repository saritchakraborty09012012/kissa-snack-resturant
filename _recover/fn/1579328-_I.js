function _I() {
  return (0, K.jsxs)(`section`, {
    id: `quote`,
    className: `relative flex min-h-[100svh] flex-col justify-between overflow-hidden border-t border-line bg-ink pb-8 pt-24 md:pt-28`,
    children: [
      (0, K.jsxs)(`div`, {
        className: `pointer-events-none absolute inset-0`,
        children: [
          (0, K.jsx)(`div`, {
            className: `absolute left-[12%] top-[20%] h-[48vw] w-[48vw] rounded-full bg-[#547083]/[0.09] blur-[150px]`,
          }),
          (0, K.jsx)(`img`, {
            src: `/renders/dish-07.png`,
            alt: ``,
            className: `absolute -bottom-[18%] right-[-6%] w-[62vw] max-w-[900px] opacity-20 mix-blend-screen mask-fade-b`,
            loading: `lazy`,
            onError: (e) => {
              e.currentTarget.style.display = `none`
            },
          }),
          (0, K.jsx)(`div`, {
            className: `absolute inset-0 bg-gradient-to-r from-ink via-transparent to-transparent`,
          }),
        ],
      }),
      (0, K.jsxs)(`div`, {
        className: `shell relative flex flex-1 flex-col justify-center`,
        children: [
          (0, K.jsxs)(`div`, {
            className: `flex items-center gap-3`,
            children: [
              (0, K.jsx)(`span`, { className: `h-px w-8 bg-ice/40` }),
              (0, K.jsx)(`p`, { className: `label text-ice/60`, children: `(No shortcuts)` }),
            ],
          }),
          (0, K.jsxs)(`h2`, {
            className: `mt-8 display text-[clamp(3.6rem,10.4vw,12.4rem)] text-bone`,
            children: [
              (0, K.jsx)(nI, { lines: [`Nothing here`] }),
              (0, K.jsx)(nI, { lines: [`waits for you.`], delay: 110 }),
              (0, K.jsx)(nI, {
                lines: [`It begins`],
                lineClassName: `italic text-ice/90`,
                delay: 220,
              }),
              (0, K.jsx)(nI, {
                lines: [`when you do.`],
                lineClassName: `italic text-ice/90`,
                delay: 320,
              }),
            ],
          }),
          (0, K.jsxs)(`div`, {
            className: `mt-12 flex flex-col justify-between gap-6 border-t border-line pt-5 sm:flex-row sm:items-center`,
            children: [
              (0, K.jsx)(tI, {
                delay: 200,
                children: (0, K.jsx)(`p`, {
                  className: `max-w-sm text-[11px] font-light leading-relaxed text-bone/35`,
                  children: `The kettle is already on. The first glass is for the staff. The next one is for you.`,
                }),
              }),
              (0, K.jsxs)(tI, {
                delay: 280,
                className: `flex items-center gap-4`,
                children: [
                  (0, K.jsx)(pr, { size: 9, className: `text-ice/60` }),
                  (0, K.jsx)(`p`, {
                    className: `text-[8px] uppercase tracking-[0.26em] text-bone/30`,
                    children: `Mr. Chaiwala · Bandra West · Est. 2003`,
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  })
}
