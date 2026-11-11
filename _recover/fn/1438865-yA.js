function yA() {
  return (0, K.jsxs)(`div`, {
    className: `relative hidden h-[92px] w-[92px] items-center justify-center md:flex`,
    children: [
      (0, K.jsxs)(`svg`, {
        viewBox: `0 0 100 100`,
        className: `spin-slow absolute inset-0 h-full w-full`,
        children: [
          (0, K.jsx)(`defs`, {
            children: (0, K.jsx)(`path`, {
              id: `sealPath`,
              d: `M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0`,
            }),
          }),
          (0, K.jsx)(`text`, {
            fill: `rgba(237,233,224,0.45)`,
            fontSize: `6.6`,
            letterSpacing: `3.1`,
            children: (0, K.jsx)(`textPath`, {
              href: `#sealPath`,
              children: `MR. CHAIWALA · EST. 2003 · MUMBAI ·`,
            }),
          }),
        ],
      }),
      (0, K.jsx)(pr, { size: 13, className: `text-ice/70` }),
    ],
  })
}
