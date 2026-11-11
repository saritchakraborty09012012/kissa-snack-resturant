function HF({ index: e }) {
  let t = yD(),
    n = (0, v.useRef)(),
    r = (0, v.useRef)(),
    i = (0, v.useRef)(),
    a = (0, v.useRef)(),
    o = (0, v.useRef)(),
    s = (0, v.useRef)()
  return (
    bD(e, [
      { ref: n, at: 0.01, dur: 0.3, from: [0, -0.8, 0], fromRot: [0, 0, -0.4] },
      { ref: r, at: 0.26, dur: 0.28, from: [0, 1.4, 0], fromRot: [0.5, 0, 0.6] },
      { ref: i, at: 0.5, dur: 0.22 },
      { ref: a, at: 0.64, dur: 0.22, from: [0, 1.2, 0], fromRot: [0, 1.5, 0] },
      { ref: o, at: 0.72, dur: 0.24 },
      { ref: s, at: 0.78, dur: 0.2 },
    ]),
    (0, K.jsxs)(`group`, {
      scale: 1.08,
      children: [
        (0, K.jsx)(TD, { index: e, scale: 5.6, position: [0.55, 0.1, -1.8], color: `#d3b489` }),
        (0, K.jsx)(ED, { index: e, y: -1.35, scale: 5.6, color: `#b19269`, opacity: 0.28 }),
        (0, K.jsx)(`group`, {
          ref: n,
          children: (0, K.jsx)(AF, {
            scale: [1.65, 0.18, 1.35],
            seed: 131,
            amp: 0.22,
            freq: 3.2,
            material: t.paratha,
            position: [0, -0.55, 0],
            rotation: [0.04, -0.25, 0.03],
            detail: 64,
          }),
        }),
        (0, K.jsxs)(`group`, {
          ref: r,
          children: [
            (0, K.jsx)(AF, {
              scale: [1.48, 0.17, 1.15],
              seed: 133,
              amp: 0.24,
              freq: 3.4,
              material: t.paratha,
              position: [0.02, -0.36, -0.12],
              rotation: [-0.18, 0.18, 0.05],
              detail: 64,
            }),
            (0, K.jsx)(kF, {
              points: [
                [-1.25, -0.28, 0.42],
                [-0.5, -0.24, 0.62],
                [0.4, -0.24, 0.6],
                [1.2, -0.3, 0.4],
              ],
              radius: 0.035,
              material: t.char,
            }),
          ],
        }),
        (0, K.jsx)(`group`, {
          ref: i,
          children: (0, K.jsx)(jF, {
            count: 16,
            seed: 135,
            material: t.char,
            center: [0, -0.17, 0],
            spread: [2.4, 0.04, 1.9],
            size: [0.15, 0.012, 0.12],
            type: `ico`,
          }),
        }),
        (0, K.jsxs)(`group`, {
          ref: a,
          children: [
            (0, K.jsx)(VT, {
              args: [0.5, 0.14, 0.36],
              radius: 0.05,
              smoothness: 3,
              material: t.butter,
              position: [0.15, -0.12, 0.05],
              rotation: [0.15, 0.4, 0.08],
            }),
            (0, K.jsx)(AF, {
              scale: [0.22, 0.03, 0.18],
              seed: 137,
              amp: 0.2,
              material: t.butter,
              position: [0.15, -0.2, 0.05],
            }),
          ],
        }),
        (0, K.jsx)(`group`, {
          ref: o,
          position: [0, -0.05, 0],
          children: (0, K.jsx)(CD, {
            count: 9,
            height: 1.5,
            radius: 0.6,
            opacity: 0.17,
            speed: 0.15,
            spread: 0.55,
          }),
        }),
        (0, K.jsx)(`group`, {
          ref: s,
          children: (0, K.jsx)(MF, {
            count: 7,
            seed: 139,
            material: t.leaf,
            spread: 2,
            y: -0.1,
            size: 0.11,
          }),
        }),
        (0, K.jsx)(DD, { index: e, count: 9, radius: 2.3, height: 2.4, baseY: 0.1, seed: 141 }),
      ],
    })
  )
}
