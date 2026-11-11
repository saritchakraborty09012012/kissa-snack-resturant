function VF({ index: e }) {
  let t = yD(),
    n = (0, v.useRef)(),
    r = (0, v.useRef)(),
    i = (0, v.useRef)(),
    a = (0, v.useRef)(),
    o = (0, v.useRef)(),
    s = (0, v.useRef)(),
    c = (0, v.useRef)()
  return (
    (0, v.useMemo)(() => WE(111), []),
    bD(e, [
      { ref: n, at: 0.01, dur: 0.28, from: [0, -1, 0] },
      { ref: r, at: 0.16, dur: 0.26, from: [0, 0.8, 0] },
      { ref: i, at: 0.26, dur: 0.3, from: [0, 0.6, 0], grow: !0 },
      { ref: a, at: 0.56, dur: 0.24, from: [0, 1.3, 0] },
      { ref: s, at: 0.68, dur: 0.22 },
      { ref: c, at: 0.75, dur: 0.2 },
      { ref: o, at: 0.78, dur: 0.24 },
    ]),
    (0, K.jsxs)(`group`, {
      scale: 1.02,
      children: [
        (0, K.jsx)(TD, {
          index: e,
          scale: 5.8,
          position: [0.55, 0.15, -1.8],
          color: `#d5c8ad`,
        }),
        (0, K.jsx)(ED, { index: e, y: -1.5, scale: 5.8, color: `#b3a487`, opacity: 0.28 }),
        (0, K.jsx)(`group`, {
          ref: n,
          children: (0, K.jsx)(`group`, {
            position: [0, -1.22, 0],
            scale: 1.15,
            rotation: [0, -0.15, 0],
            children: (0, K.jsx)(AD, {}),
          }),
        }),
        (0, K.jsxs)(`group`, {
          ref: r,
          children: [
            (0, K.jsx)(AF, {
              scale: [0.82, 0.18, 0.72],
              seed: 113,
              amp: 0.2,
              material: t.sauce,
              position: [0, -0.55, 0],
            }),
            (0, K.jsx)(AF, {
              scale: [0.5, 0.12, 0.45],
              seed: 115,
              amp: 0.2,
              material: t.sauce,
              position: [0.3, -0.45, 0.2],
            }),
          ],
        }),
        (0, K.jsx)(`group`, { ref: i, children: (0, K.jsx)(BF, { index: e }) }),
        (0, K.jsxs)(`group`, {
          ref: a,
          children: [
            (0, K.jsx)(jF, {
              count: 15,
              seed: 117,
              material: t.greenBright,
              center: [0, -0.22, 0],
              spread: [1.5, 0.2, 1.15],
              size: [0.075, 0.07, 0.075],
            }),
            (0, K.jsx)(jF, {
              count: 9,
              seed: 119,
              material: t.butter,
              center: [0, -0.2, 0],
              spread: [1.35, 0.18, 1],
              size: [0.09, 0.06, 0.06],
              type: `box`,
            }),
            (0, K.jsx)(jF, {
              count: 5,
              seed: 121,
              material: t.tomato,
              center: [0, -0.12, 0],
              spread: [1.2, 0.15, 0.9],
              size: [0.13, 0.1, 0.13],
              type: `ico`,
            }),
          ],
        }),
        (0, K.jsx)(`group`, {
          ref: s,
          children: (0, K.jsx)(MF, {
            count: 10,
            seed: 123,
            material: t.leaf,
            spread: 1.7,
            y: -0.05,
            size: 0.07,
          }),
        }),
        (0, K.jsx)(`group`, {
          ref: c,
          children: (0, K.jsx)(jF, {
            count: 28,
            seed: 125,
            material: t.char,
            center: [0, -0.05, 0],
            spread: [1.6, 0.08, 1.2],
            size: [0.018, 0.018, 0.018],
          }),
        }),
        (0, K.jsx)(`group`, {
          ref: o,
          position: [0, 0.08, 0],
          children: (0, K.jsx)(CD, {
            count: 8,
            height: 1.4,
            radius: 0.45,
            opacity: 0.15,
            speed: 0.14,
            spread: 0.45,
          }),
        }),
        (0, K.jsx)(DD, { index: e, count: 8, radius: 2.2, height: 2.4, baseY: 0.1, seed: 127 }),
      ],
    })
  )
}
