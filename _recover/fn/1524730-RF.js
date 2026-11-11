function RF({ index: e }) {
  let t = yD(),
    n = (0, v.useRef)(),
    r = (0, v.useRef)(),
    i = (0, v.useRef)(),
    a = (0, v.useRef)(),
    o = (0, v.useRef)(),
    s = (0, v.useRef)()
  return (
    bD(e, [
      { ref: n, at: 0.01, dur: 0.28, from: [0, -1, 0] },
      { ref: r, at: 0.22, dur: 0.34, from: [0, 0.7, 0] },
      { ref: i, at: 0.5, dur: 0.26, from: [0, 1.4, 0] },
      { ref: a, at: 0.68, dur: 0.22, from: [0, 1.5, 0], fromRot: [0, 1.3, 0] },
      { ref: o, at: 0.74, dur: 0.26, from: [1.8, 0.8, 0], fromRot: [0, 0, -1.3] },
      { ref: s, at: 0.78, dur: 0.24 },
    ]),
    (0, K.jsxs)(`group`, {
      scale: 1.02,
      children: [
        (0, K.jsx)(TD, {
          index: e,
          scale: 5.6,
          position: [0.55, 0.15, -1.8],
          color: `#cbb08b`,
        }),
        (0, K.jsx)(ED, { index: e, y: -1.5, scale: 5.8, color: `#a99272`, opacity: 0.28 }),
        (0, K.jsx)(`group`, {
          ref: n,
          children: (0, K.jsx)(`group`, {
            position: [0, -1.22, 0],
            scale: 1.12,
            rotation: [0, 0.15, 0],
            children: (0, K.jsx)(AD, {}),
          }),
        }),
        (0, K.jsx)(`group`, {
          ref: r,
          children: (0, K.jsxs)(`group`, {
            position: [0, -0.42, 0],
            children: [
              (0, K.jsx)(FD, { index: e, count: 34, y: 0, scale: 0.92, seed: 81, spread: 1.4 }),
              (0, K.jsx)(FD, {
                index: e,
                count: 20,
                y: 0.13,
                scale: 0.82,
                seed: 83,
                spread: 1.15,
                colorMat: t.noodlePale,
              }),
            ],
          }),
        }),
        (0, K.jsxs)(`group`, {
          ref: i,
          children: [
            (0, K.jsx)(jF, {
              count: 18,
              seed: 85,
              material: t.greenBright,
              center: [0, -0.18, 0],
              spread: [1.4, 0.16, 1.1],
              size: [0.075, 0.075, 0.075],
            }),
            (0, K.jsx)(jF, {
              count: 14,
              seed: 87,
              material: t.butter,
              center: [0, -0.16, 0],
              spread: [1.3, 0.15, 1],
              size: [0.06, 0.06, 0.06],
              type: `box`,
            }),
            (0, K.jsx)(jF, {
              count: 10,
              seed: 89,
              material: t.tomato,
              center: [0, -0.2, 0],
              spread: [1.2, 0.12, 0.9],
              size: [0.06, 0.06, 0.06],
              type: `box`,
            }),
            (0, K.jsx)(MF, {
              count: 8,
              seed: 91,
              material: t.leaf,
              spread: 1.8,
              y: 0.05,
              size: 0.1,
            }),
          ],
        }),
        (0, K.jsx)(`group`, {
          ref: a,
          children: (0, K.jsx)(VT, {
            args: [0.34, 0.16, 0.3],
            radius: 0.05,
            smoothness: 3,
            material: t.butter,
            position: [0.1, 0.1, 0.1],
            rotation: [0.1, 0.4, 0.05],
          }),
        }),
        (0, K.jsx)(`group`, {
          ref: o,
          position: [0.7, -0.35, 0.35],
          scale: 0.8,
          children: (0, K.jsx)(`group`, {
            rotation: [0, 0.6, 0.18],
            children: (0, K.jsx)(jD, {}),
          }),
        }),
        (0, K.jsx)(`group`, {
          ref: s,
          position: [0, 0.15, 0],
          children: (0, K.jsx)(CD, {
            count: 9,
            height: 1.5,
            radius: 0.5,
            opacity: 0.16,
            speed: 0.15,
            spread: 0.5,
          }),
        }),
        (0, K.jsx)(DD, { index: e, count: 8, radius: 2.2, height: 2.4, baseY: 0.1, seed: 93 }),
      ],
    })
  )
}
