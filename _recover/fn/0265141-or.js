function or({ onClick: e, compact: t = !1 }) {
  return (0, K.jsxs)(`button`, {
    type: `button`,
    onClick: e,
    'aria-label': `MR. CHAIWALA — home`,
    'data-cursor': `home`,
    className: `group flex items-center gap-3 text-bone`,
    children: [
      (0, K.jsx)(ir, {
        size: t ? 34 : 42,
        className: `transition-transform duration-700 ease-silk group-hover:rotate-[18deg]`,
      }),
      (0, K.jsxs)(`span`, {
        className: `flex flex-col items-start leading-none`,
        children: [
          (0, K.jsx)(ar, { className: `text-bone` }),
          (0, K.jsx)(`span`, {
            className: `mt-1.5 font-sans text-[7px] uppercase tracking-[0.34em] text-bone/35`,
            children: `Est. 2003 · Mumbai`,
          }),
        ],
      }),
    ],
  })
}
