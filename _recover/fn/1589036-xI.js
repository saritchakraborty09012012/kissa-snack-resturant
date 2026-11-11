function xI({ onMenu: e, onBook: t }) {
  let [n, r] = (0, v.useState)(``),
    [i, a] = (0, v.useState)(`idle`),
    o = async (e) => {
      if ((e.preventDefault(), n && i !== `sending`)) {
        a(`sending`)
        try {
          if (
            !(
              await fetch(`/api/subscribe`, {
                method: `POST`,
                headers: { 'Content-Type': `application/json` },
                body: JSON.stringify({ email: n }),
              })
            ).ok
          )
            throw Error(`failed`)
          ;(a(`done`), r(``))
        } catch {
          ;(window.setTimeout(() => a(`done`), 700), r(``))
        }
      }
    },
    s = (e) => (t) => {
      ;(t.preventDefault(), gA(document.querySelector(e)))
    }
  return (0, K.jsxs)(`footer`, {
    className: `relative overflow-hidden border-t border-line bg-[#06070b]`,
    children: [
      (0, K.jsx)(`div`, {
        className: `pointer-events-none absolute left-1/2 top-0 h-[40vw] w-[80vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6d8596]/[0.08] blur-[130px]`,
      }),
      (0, K.jsxs)(`div`, {
        className: `shell relative`,
        children: [
          (0, K.jsxs)(`div`, {
            className: `grid grid-cols-1 gap-10 border-b border-line py-12 lg:grid-cols-12 lg:gap-8`,
            children: [
              (0, K.jsxs)(`div`, {
                className: `lg:col-span-5`,
                children: [
                  (0, K.jsx)(`p`, {
                    className: `label mb-4 text-ice/60`,
                    children: `(Stay a little longer)`,
                  }),
                  (0, K.jsxs)(`p`, {
                    className: `max-w-sm font-serif text-[clamp(1.8rem,3.4vw,2.6rem)] leading-[1.05] text-bone/85`,
                    children: [
                      `One letter a month.`,
                      (0, K.jsx)(`br`, {}),
                      (0, K.jsx)(`em`, {
                        className: `italic text-bone/40`,
                        children: `New dishes, old stories.`,
                      }),
                    ],
                  }),
                  (0, K.jsxs)(`form`, {
                    onSubmit: o,
                    className: `mt-6 flex max-w-sm items-center gap-3 border-b border-bone/20 pb-2 focus-within:border-ice/60`,
                    children: [
                      (0, K.jsx)(`input`, {
                        type: `email`,
                        required: !0,
                        value: n,
                        onChange: (e) => r(e.target.value),
                        placeholder: `your@email.com`,
                        'aria-label': `Email address`,
                        className: `w-full bg-transparent text-[11px] font-light text-bone outline-none placeholder:text-bone/20`,
                      }),
                      (0, K.jsx)(`button`, {
                        type: `submit`,
                        'aria-label': `Subscribe`,
                        className: `flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-bone/20 text-bone/60 transition-colors hover:border-ice/60 hover:text-ice`,
                        children: (0, K.jsx)(cr, { size: 13 }),
                      }),
                    ],
                  }),
                  (0, K.jsx)(`p`, {
                    className: `mt-3 text-[8px] uppercase tracking-[0.22em] text-bone/20`,
                    children:
                      i === `done`
                        ? `You are on the list. See you after dark.`
                        : `No spam. Only smoke.`,
                  }),
                ],
              }),
              (0, K.jsxs)(`div`, {
                className: `grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7 lg:pl-16`,
                children: [
                  bI.map((n) =>
                    (0, K.jsxs)(
                      `div`,
                      {
                        children: [
                          (0, K.jsx)(`p`, {
                            className: `label mb-5 text-bone/30`,
                            children: n.title,
                          }),
                          (0, K.jsx)(`ul`, {
                            className: `space-y-3`,
                            children: n.links.map((n) =>
                              (0, K.jsx)(
                                `li`,
                                {
                                  children: (0, K.jsx)(`a`, {
                                    href: n.href || `#`,
                                    onClick: (r) => {
                                      n.action === `menu`
                                        ? (r.preventDefault(), e?.())
                                        : n.action === `book`
                                          ? (r.preventDefault(), t?.())
                                          : n.href && s(n.href)(r)
                                    },
                                    className: `text-[11px] font-light text-bone/45 transition-colors duration-500 hover:text-bone`,
                                    children: n.label,
                                  }),
                                },
                                n.label,
                              ),
                            ),
                          }),
                        ],
                      },
                      n.title,
                    ),
                  ),
                  (0, K.jsxs)(`div`, {
                    children: [
                      (0, K.jsx)(`p`, {
                        className: `label mb-5 text-bone/30`,
                        children: `Find us`,
                      }),
                      (0, K.jsxs)(`p`, {
                        className: `text-[11px] font-light leading-relaxed text-bone/45`,
                        children: [
                          `14, Koliwada Lane`,
                          (0, K.jsx)(`br`, {}),
                          `Bandra West`,
                          (0, K.jsx)(`br`, {}),
                          `Mumbai 400050`,
                        ],
                      }),
                      (0, K.jsx)(`a`, {
                        href: `tel:+919820000003`,
                        className: `mt-3 inline-block text-[11px] text-bone/45 transition-colors hover:text-bone`,
                        children: `+91 98200 00003`,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          (0, K.jsxs)(`div`, {
            className: `flex items-center justify-between border-b border-line py-8`,
            children: [
              (0, K.jsxs)(`div`, {
                className: `flex items-center gap-4`,
                children: [
                  (0, K.jsx)(pr, { size: 10, className: `text-ice/60` }),
                  (0, K.jsx)(`p`, {
                    className: `text-[8px] uppercase tracking-[0.28em] text-bone/25`,
                    children: `Open at sunset · pouring until five`,
                  }),
                ],
              }),
              (0, K.jsxs)(`div`, {
                className: `hidden items-center gap-6 text-[8px] uppercase tracking-[0.24em] text-bone/30 sm:flex`,
                children: [
                  (0, K.jsx)(`a`, {
                    href: `#`,
                    className: `link-line hover:text-bone`,
                    children: `Instagram`,
                  }),
                  (0, K.jsx)(`a`, {
                    href: `#`,
                    className: `link-line hover:text-bone`,
                    children: `Zomato`,
                  }),
                  (0, K.jsx)(`a`, {
                    href: `#`,
                    className: `link-line hover:text-bone`,
                    children: `Swiggy`,
                  }),
                ],
              }),
            ],
          }),
          (0, K.jsxs)(`div`, {
            className: `relative py-12`,
            children: [
              (0, K.jsxs)(`p`, {
                'aria-hidden': `true`,
                className: `display select-none whitespace-nowrap text-[clamp(3.4rem,11.4vw,12.4rem)] leading-[0.78] text-bone/[0.08]`,
                children: [
                  `MR. CHAIWALA`,
                  (0, K.jsx)(`span`, {
                    className: `ml-4 italic text-ice/20`,
                    children: `Est. 2003`,
                  }),
                ],
              }),
              (0, K.jsxs)(`div`, {
                className: `mt-8 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center`,
                children: [
                  (0, K.jsx)(or, {}),
                  (0, K.jsxs)(`p`, {
                    className: `text-[8px] uppercase leading-relaxed tracking-[0.24em] text-bone/20`,
                    children: [
                      `© `,
                      new Date().getFullYear(),
                      ` Mr. Chaiwala · All nights reserved`,
                      (0, K.jsx)(`br`, {}),
                      `Built after dark in Bombay`,
                    ],
                  }),
                  (0, K.jsxs)(`button`, {
                    type: `button`,
                    onClick: () => hA(0, { duration: 1.6 }),
                    className: `group flex items-center gap-2 text-[8px] uppercase tracking-[0.24em] text-bone/35 transition-colors hover:text-ice`,
                    children: [
                      `Back to top`,
                      (0, K.jsx)(`span`, {
                        className: `flex h-7 w-7 items-center justify-center rounded-full border border-bone/15 transition-colors group-hover:border-ice/50`,
                        children: (0, K.jsx)(cr, { size: 11, className: `-rotate-45` }),
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
}
