function mI({ onBook: e }) {
  return (0, K.jsxs)(`section`, {
    id: `invitation`,
    className: `relative overflow-hidden border-t border-line bg-ink`,
    children: [
      (0, K.jsxs)(`div`, {
        className: `pointer-events-none absolute inset-0`,
        children: [
          (0, K.jsx)(`div`, {
            className: `absolute left-1/2 top-[42%] h-[70vw] w-[70vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6f8ba0]/[0.1] blur-[150px]`,
          }),
          (0, K.jsx)(`div`, {
            className: `absolute bottom-0 left-1/2 h-[40vw] w-[90vw] -translate-x-1/2 translate-y-1/2 rounded-full bg-[#0b1119] blur-[100px]`,
          }),
          (0, K.jsx)(`img`, {
            src: `/renders/dish-08.png`,
            alt: ``,
            className: `absolute bottom-[-16%] left-1/2 w-[62vw] max-w-[900px] -translate-x-1/2 opacity-[0.14] mix-blend-screen mask-fade-b`,
            loading: `lazy`,
            onError: (e) => {
              e.currentTarget.style.display = `none`
            },
          }),
        ],
      }),
      (0, K.jsxs)(`div`, {
        className: `shell relative flex min-h-[100svh] flex-col justify-between pb-10 pt-28 md:pt-32`,
        children: [
          (0, K.jsxs)(`div`, {
            className: `flex items-center justify-between border-b border-line pb-5`,
            children: [
              (0, K.jsx)(`p`, { className: `label`, children: `(The invitation)` }),
              (0, K.jsx)(`p`, {
                className: `hidden text-[8px] uppercase tracking-[0.24em] text-bone/25 sm:block`,
                children: `14, Koliwada Lane · Bandra West`,
              }),
            ],
          }),
          (0, K.jsxs)(`div`, {
            className: `flex flex-1 flex-col justify-center py-16 text-center`,
            children: [
              (0, K.jsxs)(`div`, {
                className: `mx-auto mb-8 flex items-center gap-2`,
                children: [
                  (0, K.jsx)(pr, { size: 9, className: `text-ice/60` }),
                  (0, K.jsx)(`p`, {
                    className: `text-[8px] uppercase tracking-[0.3em] text-bone/30`,
                    children: `No reservation required`,
                  }),
                  (0, K.jsx)(pr, { size: 9, className: `text-ice/60` }),
                ],
              }),
              (0, K.jsxs)(`h2`, {
                className: `display text-[clamp(4.2rem,12.4vw,13.5rem)] text-bone`,
                children: [
                  (0, K.jsx)(nI, { lines: [`Come and`] }),
                  (0, K.jsx)(nI, {
                    lines: [`sit down.`],
                    lineClassName: `italic text-ice/90`,
                    delay: 130,
                  }),
                ],
              }),
              (0, K.jsx)(tI, {
                className: `mx-auto mt-9 max-w-md`,
                delay: 200,
                children: (0, K.jsx)(`p`, {
                  className: `text-[12px] font-light leading-relaxed text-bone/40`,
                  children: `Pull up a chair. The fan is on, the kettle is warm, and nobody is counting the minutes. Stay for one glass or for the whole night.`,
                }),
              }),
              (0, K.jsxs)(tI, {
                className: `mt-9 flex flex-wrap items-center justify-center gap-3`,
                delay: 280,
                children: [
                  (0, K.jsxs)(`button`, {
                    type: `button`,
                    onClick: e,
                    className: `btn btn-ice`,
                    'data-cursor': `view`,
                    children: [`Book a table `, (0, K.jsx)(cr, { size: 13 })],
                  }),
                  (0, K.jsxs)(`button`, {
                    type: `button`,
                    onClick: () => gA(document.querySelector(`#visit`)),
                    className: `btn btn-ghost`,
                    children: [`Find the light `, (0, K.jsx)(lr, { size: 13 })],
                  }),
                ],
              }),
            ],
          }),
          (0, K.jsxs)(`div`, {
            children: [
              (0, K.jsx)(`div`, {
                className: `grid grid-cols-2 border-t border-line lg:grid-cols-4`,
                children: gr.map((e, t) =>
                  (0, K.jsxs)(
                    tI,
                    {
                      delay: t * 90,
                      className: `flex flex-col items-center border-b border-line py-8 text-center lg:border-b-0 ${t > 0 ? `lg:border-l` : ``} ${t % 2 == 1 ? `border-l` : ``}`,
                      children: [
                        (0, K.jsx)(`p`, {
                          className: `display text-[clamp(3rem,6.5vw,6.4rem)] leading-none text-bone/90`,
                          children: (0, K.jsx)(rI, { to: e.value, duration: 2e3 }),
                        }),
                        (0, K.jsx)(`p`, {
                          className: `mt-3 text-[8px] uppercase tracking-[0.28em] text-bone/40`,
                          children: e.unit,
                        }),
                        (0, K.jsx)(`p`, {
                          className: `mt-1.5 text-[8px] uppercase tracking-[0.22em] text-bone/20`,
                          children: e.label,
                        }),
                      ],
                    },
                    e.unit,
                  ),
                ),
              }),
              (0, K.jsxs)(`div`, {
                className: `flex items-center justify-between gap-4 pt-5 text-[8px] uppercase tracking-[0.24em] text-bone/20`,
                children: [
                  (0, K.jsx)(`span`, { children: `Chai · coffee · comfort · chaat` }),
                  (0, K.jsx)(`span`, {
                    className: `hidden sm:block`,
                    children: `Open 6 PM — 5 AM · six nights`,
                  }),
                  (0, K.jsx)(`span`, { className: `text-ice/40`, children: `Est. 2003` }),
                ],
              }),
            ],
          }),
        ],
      }),
      (0, K.jsx)(`div`, {
        className: `border-y border-line py-3.5`,
        children: (0, K.jsx)(iI, {
          speed: 52,
          children: (0, K.jsxs)(`div`, {
            className: `flex items-center gap-8 pr-8 text-[8px] uppercase tracking-[0.34em] text-bone/25`,
            children: [
              (0, K.jsx)(`span`, { children: `Chai, poured slow.` }),
              (0, K.jsx)(`span`, { className: `text-ice/30`, children: `✳` }),
              (0, K.jsx)(`span`, { children: `Come and sit down.` }),
              (0, K.jsx)(`span`, { className: `text-ice/30`, children: `✳` }),
              (0, K.jsx)(`span`, { children: `Open at sunset.` }),
              (0, K.jsx)(`span`, { className: `text-ice/30`, children: `✳` }),
              (0, K.jsx)(`span`, { children: `Pouring until five.` }),
              (0, K.jsx)(`span`, { className: `text-ice/30`, children: `✳` }),
              (0, K.jsx)(`span`, { children: `Chai, poured slow.` }),
              (0, K.jsx)(`span`, { className: `text-ice/30`, children: `✳` }),
              (0, K.jsx)(`span`, { children: `Come and sit down.` }),
              (0, K.jsx)(`span`, { className: `text-ice/30`, children: `✳` }),
              (0, K.jsx)(`span`, { children: `Open at sunset.` }),
              (0, K.jsx)(`span`, { className: `text-ice/30`, children: `✳` }),
              (0, K.jsx)(`span`, { children: `Pouring until five.` }),
              (0, K.jsx)(`span`, { className: `text-ice/30`, children: `✳` }),
            ],
          }),
        }),
      }),
    ],
  })
}
