function OI({ open: e, onClose: t }) {
  let [n, r] = (0, v.useState)({
      name: ``,
      phone: ``,
      date: DI,
      time: `20:00`,
      guests: `2`,
      notes: ``,
    }),
    [i, a] = (0, v.useState)(`idle`),
    [o, s] = (0, v.useState)(``),
    [c, l] = (0, v.useState)(``),
    u = (0, v.useRef)(null)
  ;(0, v.useEffect)(() => {
    if (!e) return
    a((e) => (e === `sending` ? e : `idle`))
    let n = window.setTimeout(() => u.current?.focus(), 500),
      r = (e) => {
        e.key === `Escape` && t?.()
      }
    return (
      window.addEventListener(`keydown`, r),
      () => {
        ;(window.clearTimeout(n), window.removeEventListener(`keydown`, r))
      }
    )
  }, [e, t])
  let d = (e) => (t) => r((n) => ({ ...n, [e]: t.target.value })),
    f = (0, v.useMemo)(
      () => `MCW-${new Date().getFullYear()}-${String(Math.floor(Math.random() * 9e3) + 1e3)}`,
      [],
    )
  return (0, K.jsxs)(`div`, {
    'aria-hidden': !e,
    className: `fixed inset-0 z-[140] flex items-center justify-center p-3 transition-[opacity,visibility] duration-700 ease-silk sm:p-6 ${e ? `visible opacity-100` : `invisible opacity-0`}`,
    children: [
      (0, K.jsx)(`div`, {
        className: `absolute inset-0 bg-ink/85 backdrop-blur-md`,
        onClick: t,
      }),
      (0, K.jsxs)(`div`, {
        role: `dialog`,
        'aria-modal': `true`,
        'aria-label': `Book a table at Mr. Chaiwala`,
        className: `relative grid max-h-[92vh] w-full max-w-5xl grid-cols-1 overflow-y-auto overscroll-contain border border-line bg-[#080a10] shadow-[0_40px_140px_rgba(0,0,0,0.8)] transition-all duration-[900ms] ease-silk md:grid-cols-[0.85fr_1.15fr] ${e ? `translate-y-0 scale-100` : `translate-y-8 scale-[0.98]`}`,
        children: [
          (0, K.jsx)(`button`, {
            type: `button`,
            onClick: t,
            'aria-label': `Close booking`,
            className: `absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-bone/15 bg-ink/40 text-bone/70 backdrop-blur transition-colors hover:border-bone/40 hover:text-bone`,
            children: (0, K.jsx)(ur, { size: 17 }),
          }),
          (0, K.jsxs)(`div`, {
            className: `relative hidden min-h-[560px] overflow-hidden border-r border-line bg-gradient-to-b from-[#0b1017] to-[#06070b] p-8 md:block`,
            children: [
              (0, K.jsxs)(`div`, {
                className: `absolute inset-0`,
                children: [
                  (0, K.jsx)(`div`, {
                    className: `absolute left-1/2 top-[18%] h-[340px] w-[340px] -translate-x-1/2 rounded-full bg-[#7f9cb0]/15 blur-[80px]`,
                  }),
                  (0, K.jsx)(`img`, {
                    src: `/renders/dish-01.png`,
                    alt: ``,
                    className: `absolute bottom-[-6%] left-1/2 w-[120%] max-w-none -translate-x-1/2 opacity-90 mix-blend-screen`,
                    onError: (e) => {
                      e.currentTarget.style.display = `none`
                    },
                  }),
                  (0, K.jsx)(`div`, {
                    className: `absolute inset-0 bg-gradient-to-t from-[#06070b] via-transparent to-[#06070b]/40`,
                  }),
                ],
              }),
              (0, K.jsxs)(`div`, {
                className: `relative flex h-full flex-col justify-between`,
                children: [
                  (0, K.jsx)(ir, { size: 38, className: `text-bone/60` }),
                  (0, K.jsxs)(`div`, {
                    children: [
                      (0, K.jsx)(`p`, { className: `label mb-4`, children: `(Reservations)` }),
                      (0, K.jsxs)(`p`, {
                        className: `display text-5xl leading-[0.92] text-bone/90`,
                        children: [
                          `A table`,
                          (0, K.jsx)(`br`, {}),
                          `under the`,
                          (0, K.jsx)(`br`, {}),
                          (0, K.jsx)(`em`, { className: `text-ice/90`, children: `fan.` }),
                        ],
                      }),
                      (0, K.jsx)(`p`, {
                        className: `mt-6 max-w-[240px] text-[10px] uppercase leading-relaxed tracking-[0.18em] text-bone/35`,
                        children: `We hold tables for fifteen minutes. The kettle waits longer.`,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          (0, K.jsxs)(`div`, {
            className: `relative p-6 sm:p-10 md:p-12`,
            children: [
              (0, K.jsxs)(`div`, {
                className: `mb-8 flex items-center justify-between`,
                children: [
                  (0, K.jsxs)(`div`, {
                    children: [
                      (0, K.jsx)(`p`, { className: `label mb-2`, children: `(Book a table)` }),
                      (0, K.jsxs)(`h2`, {
                        className: `display text-4xl text-bone sm:text-5xl`,
                        children: [
                          `Come and `,
                          (0, K.jsx)(`em`, { className: `text-ice/90`, children: `sit down.` }),
                        ],
                      }),
                    ],
                  }),
                  (0, K.jsx)(ir, { size: 30, className: `text-bone/25 md:hidden` }),
                ],
              }),
              i === `done`
                ? (0, K.jsxs)(`div`, {
                    className: `flex min-h-[380px] flex-col justify-center`,
                    children: [
                      (0, K.jsx)(`p`, {
                        className: `label mb-4 text-ice/70`,
                        children: `(Table held)`,
                      }),
                      (0, K.jsxs)(`h3`, {
                        className: `display text-5xl leading-[0.95] text-bone`,
                        children: [
                          `We'll put the`,
                          (0, K.jsx)(`br`, {}),
                          (0, K.jsx)(`em`, {
                            className: `text-ice/90`,
                            children: `kettle on.`,
                          }),
                        ],
                      }),
                      (0, K.jsxs)(`p`, {
                        className: `mt-6 max-w-sm text-[12px] font-light leading-relaxed text-bone/50`,
                        children: [
                          `Thank you, `,
                          n.name || `friend`,
                          `. A table for `,
                          n.guests,
                          ` is pencilled in for`,
                          ` `,
                          n.time,
                          ` on `,
                          n.date,
                          `. Your reference is`,
                          ` `,
                          (0, K.jsx)(`span`, {
                            className: `tracking-[0.12em] text-bone/80`,
                            children: o,
                          }),
                          `.`,
                        ],
                      }),
                      (0, K.jsxs)(`div`, {
                        className: `mt-8 flex flex-wrap items-center gap-4`,
                        children: [
                          (0, K.jsxs)(`button`, {
                            type: `button`,
                            onClick: t,
                            className: `btn btn-ice`,
                            children: [`Back to the night `, (0, K.jsx)(cr, {})],
                          }),
                          (0, K.jsx)(`span`, {
                            className: `text-[8px] uppercase tracking-[0.22em] text-bone/30`,
                            children: `14, Koliwada Lane · Bandra West`,
                          }),
                        ],
                      }),
                    ],
                  })
                : (0, K.jsxs)(`form`, {
                    onSubmit: async (e) => {
                      if ((e.preventDefault(), i !== `sending`)) {
                        ;(a(`sending`), l(``))
                        try {
                          let e = await fetch(`/api/reserve`, {
                            method: `POST`,
                            headers: { 'Content-Type': `application/json` },
                            body: JSON.stringify(n),
                          })
                          if (!e.ok) throw Error(`Could not reserve`)
                          let t = await e.json()
                          ;(s(t.code || f), a(`done`))
                        } catch {
                          window.setTimeout(() => {
                            ;(s(f), a(`done`))
                          }, 900)
                        }
                      }
                    },
                    className: `space-y-5`,
                    children: [
                      (0, K.jsxs)(`div`, {
                        className: `grid grid-cols-1 gap-5 sm:grid-cols-2`,
                        children: [
                          (0, K.jsx)(kI, {
                            label: `Your name`,
                            children: (0, K.jsx)(`input`, {
                              ref: u,
                              required: !0,
                              value: n.name,
                              onChange: d(`name`),
                              placeholder: `Full name`,
                              className: `field`,
                              autoComplete: `name`,
                            }),
                          }),
                          (0, K.jsx)(kI, {
                            label: `Phone`,
                            children: (0, K.jsx)(`input`, {
                              required: !0,
                              value: n.phone,
                              onChange: d(`phone`),
                              placeholder: `+91`,
                              className: `field`,
                              autoComplete: `tel`,
                              inputMode: `tel`,
                            }),
                          }),
                        ],
                      }),
                      (0, K.jsxs)(`div`, {
                        className: `grid grid-cols-1 gap-5 sm:grid-cols-3`,
                        children: [
                          (0, K.jsx)(kI, {
                            label: `Date`,
                            children: (0, K.jsx)(`input`, {
                              type: `date`,
                              required: !0,
                              min: DI,
                              value: n.date,
                              onChange: d(`date`),
                              className: `field scheme-dark`,
                            }),
                          }),
                          (0, K.jsx)(kI, {
                            label: `Time`,
                            children: (0, K.jsx)(`select`, {
                              value: n.time,
                              onChange: d(`time`),
                              className: `field`,
                              children: EI.map((e) =>
                                (0, K.jsx)(
                                  `option`,
                                  { value: e.value, children: e.label },
                                  e.value,
                                ),
                              ),
                            }),
                          }),
                          (0, K.jsx)(kI, {
                            label: `Guests`,
                            children: (0, K.jsx)(`select`, {
                              value: n.guests,
                              onChange: d(`guests`),
                              className: `field`,
                              children: Array.from({ length: 10 }, (e, t) => t + 1).map((e) =>
                                (0, K.jsxs)(
                                  `option`,
                                  {
                                    value: e,
                                    children: [e, ` `, e === 1 ? `guest` : `guests`],
                                  },
                                  e,
                                ),
                              ),
                            }),
                          }),
                        ],
                      }),
                      (0, K.jsx)(kI, {
                        label: `Anything we should know?`,
                        children: (0, K.jsx)(`input`, {
                          value: n.notes,
                          onChange: d(`notes`),
                          placeholder: `Birthday, allergies, favourite corner…`,
                          className: `field`,
                        }),
                      }),
                      (0, K.jsxs)(`div`, {
                        className: `flex flex-wrap items-center justify-between gap-4 pt-4`,
                        children: [
                          (0, K.jsx)(`p`, {
                            className: `max-w-[230px] text-[8px] uppercase leading-relaxed tracking-[0.18em] text-bone/30`,
                            children: `Held for 15 minutes. Open 6 PM to 5 AM, six nights.`,
                          }),
                          (0, K.jsxs)(`button`, {
                            type: `submit`,
                            disabled: i === `sending`,
                            className: `btn btn-ice min-w-[180px] disabled:opacity-60`,
                            children: [
                              i === `sending` ? `Holding your table…` : `Request table`,
                              i !== `sending` && (0, K.jsx)(cr, {}),
                            ],
                          }),
                        ],
                      }),
                      c &&
                        (0, K.jsx)(`p`, { className: `text-[10px] text-ember`, children: c }),
                    ],
                  }),
            ],
          }),
        ],
      }),
    ],
  })
}
