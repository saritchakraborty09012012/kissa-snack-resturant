function IF({ index: e }) {
  let t = yD(),
    n = (0, v.useRef)(),
    r = (0, v.useRef)(),
    i = (0, v.useRef)(),
    a = (0, v.useRef)(),
    o = (0, v.useRef)(),
    s = (0, v.useRef)(),
    c = (0, v.useRef)()
  return (
    bD(e, [
      { ref: n, at: 0.01, dur: 0.28, from: [0, -1, 0] },
      { ref: r, at: 0.18, dur: 0.22, from: [0, 1.2, 0] },
      { ref: i, at: 0.32, dur: 0.26, from: [0, 1.5, 0], fromRot: [0, 0.5, 0.2] },
      { ref: a, at: 0.46, dur: 0.22, from: [0, 1, 0], grow: !0 },
      { ref: o, at: 0.58, dur: 0.3, from: [0, 1.7, 0], fromRot: [0.5, -0.4, 0.4] },
      { ref: s, at: 0.72, dur: 0.24, from: [1.7, 1, 0.4], fromRot: [0, 0, -1.2] },
      { ref: c, at: 0.78, dur: 0.22 },
    ]),
    (0, K.jsxs)(`group`, {
      scale: 1.05,
      children: [
        (0, K.jsx)(TD, {
          index: e,
          scale: 5.8,
          position: [0.55, 0.25, -1.9],
          color: `#c6a678`,
        }),
        (0, K.jsx)(ED, { index: e, y: -1.5, scale: 5.8, color: `#b08d63`, opacity: 0.3 }),
        (0, K.jsx)(`group`, {
          ref: n,
          children: (0, K.jsx)(AF, {
            scale: [1.5, 0.56, 1.18],
            seed: 21,
            amp: 0.09,
            freq: 2.6,
            material: t.bun,
            position: [0, -1.05, 0],
            detail: 52,
          }),
        }),
        (0, K.jsx)(`group`, {
          ref: r,
          children: (0, K.jsx)(AF, {
            scale: [1.28, 0.09, 1.02],
            seed: 23,
            amp: 0.24,
            freq: 3.4,
            material: t.chutneyGreen,
            position: [0, -0.52, 0],
          }),
        }),
        (0, K.jsxs)(`group`, {
          ref: i,
          children: [
            (0, K.jsx)(AF, {
              scale: [1.12, 0.3, 1],
              seed: 25,
              amp: 0.16,
              freq: 3.2,
              material: t.potato,
              position: [0, -0.38, 0],
              detail: 48,
            }),
            (0, K.jsx)(`mesh`, {
              position: [0, -0.38, 0],
              scale: [1.05, 1, 0.95],
              material: t.potato,
              children: (0, K.jsx)(`cylinderGeometry`, { args: [1, 1, 0.16, 28] }),
            }),
          ],
        }),
        (0, K.jsx)(`group`, {
          ref: a,
          children: (0, K.jsx)(jF, {
            count: 30,
            seed: 27,
            material: t.chutneyRed,
            center: [0, -0.2, 0],
            spread: [1.9, 0.06, 1.5],
            size: [0.04, 0.012, 0.035],
            type: `ico`,
          }),
        }),
        (0, K.jsxs)(`group`, {
          ref: o,
          children: [
            (0, K.jsx)(AF, {
              scale: [1.46, 0.7, 1.18],
              seed: 29,
              amp: 0.1,
              freq: 2.4,
              material: t.bun,
              position: [0, 0.2, 0],
              rotation: [0.02, 0.1, 0.02],
              detail: 56,
            }),
            (0, K.jsx)(`mesh`, {
              position: [0, -0.14, 0.62],
              rotation: [0, 0.1, 0],
              material: t.bun,
              children: (0, K.jsx)(`torusGeometry`, { args: [0.42, 0.05, 8, 18, Math.PI] }),
            }),
          ],
        }),
        (0, K.jsxs)(`group`, {
          ref: s,
          children: [
            (0, K.jsx)(kF, {
              points: [
                [0.3, 0.9, 0.5],
                [0.75, 0.65, 0.55],
                [1, 0.35, 0.4],
                [1.02, 0.06, 0.2],
              ],
              radius: 0.055,
              material: t.green,
              tubular: 24,
            }),
            (0, K.jsx)(`mesh`, {
              position: [1.03, 0, 0.19],
              scale: [0.06, 0.09, 0.06],
              material: t.green,
              children: (0, K.jsx)(`sphereGeometry`, { args: [1, 12, 8] }),
            }),
          ],
        }),
        (0, K.jsx)(`group`, {
          ref: c,
          children: (0, K.jsx)(MF, {
            count: 7,
            seed: 33,
            material: t.leaf,
            spread: 1.8,
            y: 0.5,
            size: 0.14,
          }),
        }),
        (0, K.jsx)(DD, { index: e, count: 12, radius: 2.2, height: 2.4, baseY: 0.25, seed: 5 }),
      ],
    })
  )
}
