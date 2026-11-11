function FF({ index: e }) {
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
      { ref: n, at: 0.01, dur: 0.3, from: [0, -1, 0], fromRot: [0.1, -0.8, -0.1] },
      { ref: r, at: 0.26, dur: 0.28, from: [0, 0.9, 0] },
      { ref: i, at: 0.48, dur: 0.24, from: [-1.4, 1.8, 0.4], fromRot: [0, 0, -1.6] },
      { ref: a, at: 0.58, dur: 0.24, from: [1.5, 1.7, 0.2], fromRot: [0, 0, 1.7] },
      { ref: o, at: 0.45, dur: 0.26, from: [0.7, 1.8, 0], fromRot: [0, 0, 0.6] },
      { ref: s, at: 0.68, dur: 0.22, from: [0, 0.8, 0] },
      { ref: c, at: 0.62, dur: 0.26 },
    ]),
    (0, K.jsxs)(`group`, {
      children: [
        (0, K.jsx)(TD, { index: e, scale: 5.2, position: [0.6, 0.5, -1.8], color: `#c9a07e` }),
        (0, K.jsx)(ED, { index: e, y: -1.4, scale: 5.4, color: `#a98972`, opacity: 0.28 }),
        (0, K.jsx)(`group`, {
          ref: n,
          children: (0, K.jsx)(`group`, {
            position: [0, -1.28, 0],
            scale: 1.1,
            rotation: [0, 0.18, 0],
            children: (0, K.jsx)(kD, { variant: `chocolate` }),
          }),
        }),
        (0, K.jsxs)(`group`, {
          ref: r,
          position: [0, 0.55, 0],
          children: [
            (0, K.jsx)(AF, {
              scale: [0.62, 0.44, 0.58],
              seed: 2,
              material: t.cream,
              position: [0, 0, 0],
            }),
            (0, K.jsx)(AF, {
              scale: [0.54, 0.4, 0.5],
              seed: 5,
              material: t.cream,
              position: [0.02, 0.26, 0.01],
            }),
            (0, K.jsx)(AF, {
              scale: [0.44, 0.36, 0.42],
              seed: 8,
              material: t.cream,
              position: [-0.03, 0.47, 0.02],
            }),
            (0, K.jsx)(AF, {
              scale: [0.32, 0.32, 0.3],
              seed: 11,
              material: t.cream,
              position: [0.02, 0.65, 0],
            }),
            (0, K.jsx)(AF, {
              scale: [0.18, 0.26, 0.17],
              seed: 13,
              material: t.cream,
              position: [-0.02, 0.8, 0],
            }),
          ],
        }),
        (0, K.jsx)(`group`, {
          ref: i,
          position: [0.38, 1.16, 0.24],
          children: (0, K.jsx)(`group`, { scale: 0.78, children: (0, K.jsx)(PF, {}) }),
        }),
        (0, K.jsx)(`group`, {
          ref: a,
          position: [-0.52, 1.28, 0.04],
          rotation: [0, 0, 0.2],
          children: (0, K.jsx)(`group`, { scale: 0.7, children: (0, K.jsx)(PF, { flip: !0 }) }),
        }),
        (0, K.jsxs)(`group`, {
          ref: o,
          position: [-0.38, 0.92, -0.05],
          children: [
            (0, K.jsx)(`mesh`, {
              rotation: [0, 0, 0.22],
              material: t.straw,
              children: (0, K.jsx)(`cylinderGeometry`, {
                args: [0.035, 0.035, 1.85, 16, 1, !0],
              }),
            }),
            (0, K.jsx)(`mesh`, {
              position: [-0.2, 0.55, 0],
              rotation: [0, 0, 0.55],
              material: t.straw,
              children: (0, K.jsx)(`cylinderGeometry`, {
                args: [0.034, 0.034, 0.6, 16, 1, !0],
              }),
            }),
          ],
        }),
        (0, K.jsx)(`group`, {
          ref: s,
          position: [0, 0.9, 0],
          children: (0, K.jsx)(kF, {
            points: [
              [-0.5, 0.05, 0.25],
              [-0.2, 0.35, 0.35],
              [0.2, 0.18, 0.3],
              [0.35, -0.1, 0.18],
            ],
            radius: 0.028,
            material: t.chocolate,
          }),
        }),
        (0, K.jsxs)(`group`, {
          ref: c,
          children: [
            (0, K.jsx)(jF, {
              count: 11,
              seed: 41,
              material: t.chocolate,
              center: [0, 1.1, 0.5],
              spread: [3.4, 1.6, 1.2],
              size: [0.1, 0.06, 0.08],
              type: `box`,
            }),
            (0, K.jsx)(DD, {
              index: e,
              count: 8,
              radius: 2.1,
              height: 2.5,
              baseY: 0.7,
              seed: 53,
            }),
          ],
        }),
        (0, K.jsx)(DD, { index: e, count: 8, radius: 2.2, height: 2.6, baseY: 0.65, seed: 9 }),
      ],
    })
  )
}
