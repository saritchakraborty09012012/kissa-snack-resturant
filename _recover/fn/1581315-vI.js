function vI() {
  return (0, K.jsxs)(`div`, {
    className: `relative h-full min-h-[440px] w-full overflow-hidden border border-line bg-[#070a0f]`,
    children: [
      (0, K.jsx)(`div`, {
        className: `absolute inset-0 opacity-[0.16]`,
        style: {
          backgroundImage: `linear-gradient(rgba(237,233,224,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(237,233,224,0.16) 1px, transparent 1px)`,
          backgroundSize: `46px 46px`,
        },
      }),
      (0, K.jsxs)(`svg`, {
        viewBox: `0 0 600 560`,
        className: `absolute inset-0 h-full w-full`,
        'aria-hidden': `true`,
        children: [
          (0, K.jsx)(`path`, {
            d: `M-40 470 C 90 420, 120 340, 250 330 S 470 380, 660 300`,
            fill: `none`,
            stroke: `#16222c`,
            strokeWidth: `54`,
          }),
          (0, K.jsx)(`path`, {
            d: `M-40 470 C 90 420, 120 340, 250 330 S 470 380, 660 300`,
            fill: `none`,
            stroke: `#223644`,
            strokeWidth: `1.2`,
            strokeDasharray: `8 10`,
            opacity: `0.8`,
          }),
          (0, K.jsxs)(`g`, {
            stroke: `rgba(237,233,224,0.11)`,
            strokeWidth: `1`,
            children: [
              (0, K.jsx)(`path`, { d: `M42 -20 L120 580` }),
              (0, K.jsx)(`path`, { d: `M210 -20 L260 580` }),
              (0, K.jsx)(`path`, { d: `M378 -20 L340 580` }),
              (0, K.jsx)(`path`, { d: `M520 -20 L470 580` }),
              (0, K.jsx)(`path`, { d: `M-20 120 L620 150` }),
              (0, K.jsx)(`path`, { d: `M-20 250 L620 268` }),
              (0, K.jsx)(`path`, { d: `M-20 360 L620 352` }),
              (0, K.jsx)(`path`, { d: `M-20 500 L620 470` }),
            ],
          }),
          (0, K.jsxs)(`g`, {
            stroke: `rgba(237,233,224,0.055)`,
            strokeWidth: `0.8`,
            children: [
              Array.from({ length: 12 }, (e, t) =>
                (0, K.jsx)(`path`, { d: `M${t * 55} -20 L${t * 55 + 18} 600` }, `v${t}`),
              ),
              Array.from({ length: 11 }, (e, t) =>
                (0, K.jsx)(`path`, { d: `M-20 ${t * 56} L620 ${t * 56 + 14}` }, `h${t}`),
              ),
            ],
          }),
          (0, K.jsxs)(`g`, {
            fill: `rgba(237,233,224,0.22)`,
            fontSize: `7`,
            letterSpacing: `2.2`,
            children: [
              (0, K.jsx)(`text`, { x: `64`, y: `112`, children: `KOLIWADA` }),
              (0, K.jsx)(`text`, { x: `392`, y: `240`, children: `BANDRA WEST` }),
              (0, K.jsx)(`text`, { x: `468`, y: `452`, children: `THE SEA` }),
              (0, K.jsx)(`text`, { x: `150`, y: `392`, children: `BAZAAR ROAD` }),
            ],
          }),
          (0, K.jsxs)(`g`, {
            fill: `rgba(185,214,231,0.32)`,
            fontSize: `5.2`,
            letterSpacing: `1.4`,
            children: [
              (0, K.jsx)(`text`, { x: `64`, y: `126`, children: `FISHING VILLAGE` }),
              (0, K.jsx)(`text`, { x: `392`, y: `252`, children: `19.0596° N · 72.8295° E` }),
              (0, K.jsx)(`text`, { x: `468`, y: `464`, children: `ARABIAN SEA` }),
            ],
          }),
          (0, K.jsx)(`circle`, {
            cx: `330`,
            cy: `300`,
            r: `42`,
            fill: `none`,
            stroke: `rgba(185,214,231,0.18)`,
            strokeWidth: `1`,
          }),
          (0, K.jsx)(`circle`, {
            cx: `330`,
            cy: `300`,
            r: `70`,
            fill: `none`,
            stroke: `rgba(185,214,231,0.08)`,
            strokeWidth: `1`,
          }),
        ],
      }),
      (0, K.jsxs)(`div`, {
        className: `absolute left-[55%] top-[53%] -translate-x-1/2 -translate-y-1/2`,
        children: [
          (0, K.jsx)(`span`, {
            className: `pulse-ring absolute left-1/2 top-1/2 -ml-3 -mt-3 block h-6 w-6 rounded-full border border-ice/50`,
          }),
          (0, K.jsx)(`span`, {
            className: `relative flex h-2.5 w-2.5 items-center justify-center rounded-full bg-ice shadow-[0_0_28px_rgba(185,214,231,0.9)]`,
          }),
        ],
      }),
      (0, K.jsxs)(`div`, {
        className: `pointer-events-none absolute right-5 top-5 flex items-center gap-2 text-[7px] uppercase tracking-[0.24em] text-bone/30`,
        children: [(0, K.jsx)(fr, { size: 11 }), ` Koliwada Lane`],
      }),
      (0, K.jsxs)(`div`, {
        className: `absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-4 border-t border-line bg-gradient-to-t from-[#05060a] via-[#05060a]/90 to-transparent p-5 pt-12`,
        children: [
          (0, K.jsxs)(`div`, {
            children: [
              (0, K.jsx)(`p`, {
                className: `label mb-2 text-bone/30`,
                children: `(We are here)`,
              }),
              (0, K.jsx)(`p`, {
                className: `font-serif text-2xl leading-none text-bone/85`,
                children: `14, Koliwada Lane`,
              }),
              (0, K.jsx)(`p`, {
                className: `mt-1.5 text-[8px] uppercase tracking-[0.2em] text-bone/30`,
                children: `Bandra West, Mumbai 400050`,
              }),
            ],
          }),
          (0, K.jsxs)(`a`, {
            href: `https://maps.google.com/?q=Bandra+West+Mumbai`,
            target: `_blank`,
            rel: `noreferrer`,
            'data-cursor': `view`,
            className: `group flex items-center gap-2 border-b border-bone/20 pb-1 text-[8px] uppercase tracking-[0.24em] text-bone/60 transition-colors hover:border-ice/60 hover:text-ice`,
            children: [
              `Get directions`,
              (0, K.jsx)(cr, {
                size: 11,
                className: `transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5`,
              }),
            ],
          }),
        ],
      }),
      (0, K.jsx)(`span`, {
        className: `pointer-events-none absolute left-5 top-5 h-7 w-px bg-ice/30`,
      }),
      (0, K.jsx)(`span`, {
        className: `pointer-events-none absolute left-5 top-5 h-px w-7 bg-ice/30`,
      }),
    ],
  })
}
