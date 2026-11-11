function LF({ index: e }) {
  let t = yD(),
    n = (0, v.useMemo)(() => new Tp({ color: `#cdb08a`, roughness: 0.7 }), []),
    r = (0, v.useRef)(),
    i = (0, v.useRef)(),
    a = (0, v.useRef)(),
    o = (0, v.useRef)(),
    s = (0, v.useRef)(),
    c = (0, v.useRef)(),
    l = (0, v.useRef)()
  return (
    bD(e, [
      { ref: r, at: 0.01, dur: 0.28, from: [0, -1, 0] },
      { ref: i, at: 0.18, dur: 0.24, from: [0, 1.4, 0], fromRot: [0.3, 0, 0.3] },
      { ref: a, at: 0.34, dur: 0.26, from: [0, 1.8, 0] },
      { ref: o, at: 0.5, dur: 0.26, from: [1.6, 0.8, 0], fromRot: [0, 0, -1.2] },
      { ref: s, at: 0.64, dur: 0.3, from: [0, 1.9, 0], fromRot: [-0.6, 0.4, -0.5] },
      { ref: c, at: 0.44, dur: 0.26, from: [0, 2.2, 0] },
      { ref: l, at: 0.76, dur: 0.22 },
    ]),
    (0, K.jsxs)(`group`, {
      scale: 0.98,
      children: [
        (0, K.jsx)(TD, {
          index: e,
          scale: 5.5,
          position: [0.55, 0.15, -1.8],
          color: `#d0a07e`,
        }),
        (0, K.jsx)(ED, { index: e, y: -1.5, scale: 5.6, color: `#b98d6e`, opacity: 0.3 }),
        (0, K.jsxs)(`group`, {
          ref: r,
          children: [
            (0, K.jsx)(VT, {
              args: [2.7, 0.42, 2],
              radius: 0.16,
              smoothness: 4,
              material: t.bread,
              position: [0, -1.06, 0],
            }),
            (0, K.jsx)(`mesh`, {
              position: [0, -0.82, 0],
              scale: [1.2, 0.04, 0.85],
              material: t.chutneyGreen,
              children: (0, K.jsx)(`sphereGeometry`, { args: [1, 24, 10] }),
            }),
          ],
        }),
        (0, K.jsx)(`group`, {
          ref: i,
          children: (0, K.jsx)(VT, {
            args: [2.35, 0.4, 1.7],
            radius: 0.08,
            smoothness: 4,
            material: t.paneer,
            position: [0, -0.58, 0],
          }),
        }),
        (0, K.jsxs)(`group`, {
          ref: a,
          children: [
            [
              [-0.72, -0.25, 0.28, 0.2],
              [0.05, -0.2, 0.38, -0.15],
              [0.78, -0.25, 0.2, 0.35],
              [-0.4, -0.15, -0.38, -0.3],
              [0.5, -0.18, -0.3, 0.1],
            ].map(([e, n, r, i], a) =>
              (0, K.jsx)(
                VT,
                {
                  args: [0.62, 0.36, 0.55],
                  radius: 0.06,
                  smoothness: 3,
                  material: t.tandoori,
                  position: [e, n, r],
                  rotation: [0.1, i, 0.06],
                },
                a,
              ),
            ),
            (0, K.jsx)(jF, {
              count: 16,
              seed: 61,
              material: t.char,
              center: [0, -0.05, 0],
              spread: [2.2, 0.1, 1.5],
              size: [0.06, 0.01, 0.05],
              type: `ico`,
            }),
          ],
        }),
        (0, K.jsxs)(`group`, {
          ref: o,
          children: [
            (0, K.jsx)(MF, {
              count: 8,
              seed: 63,
              material: t.leaf,
              spread: 2.3,
              y: 0.02,
              size: 0.19,
            }),
            [-0.7, 0, 0.7].map((e, n) =>
              (0, K.jsx)(
                `mesh`,
                {
                  position: [e, 0.12, 0.42],
                  rotation: [Math.PI / 2, 0, 0],
                  material: t.tomato,
                  children: (0, K.jsx)(`cylinderGeometry`, { args: [0.42, 0.42, 0.12, 24] }),
                },
                n,
              ),
            ),
            [-0.5, 0.3, 0.8].map((e, n) =>
              (0, K.jsx)(
                `mesh`,
                {
                  position: [e, 0.26, -0.45],
                  rotation: [Math.PI / 2, 0.2, 0],
                  material: t.onion,
                  children: (0, K.jsx)(`torusGeometry`, { args: [0.4, 0.045, 8, 26] }),
                },
                n,
              ),
            ),
          ],
        }),
        (0, K.jsxs)(`group`, {
          ref: s,
          children: [
            (0, K.jsx)(VT, {
              args: [2.62, 0.44, 1.92],
              radius: 0.17,
              smoothness: 4,
              material: t.bread,
              position: [0, 0.55, 0],
              rotation: [0, 0.03, 0.025],
            }),
            (0, K.jsx)(jF, {
              count: 9,
              seed: 67,
              material: t.chutneyGreen,
              center: [0, 0.78, 0],
              spread: [2.2, 0.02, 1.5],
              size: [0.12, 0.015, 0.1],
              type: `ico`,
            }),
          ],
        }),
        (0, K.jsxs)(`group`, {
          ref: c,
          position: [0.45, 0.1, 0.55],
          children: [
            (0, K.jsx)(`mesh`, {
              material: n,
              rotation: [0.05, 0, 0.03],
              children: (0, K.jsx)(`cylinderGeometry`, { args: [0.028, 0.028, 3.1, 10] }),
            }),
            (0, K.jsx)(`mesh`, {
              position: [0, 1.55, 0],
              material: t.tomato,
              children: (0, K.jsx)(`sphereGeometry`, { args: [0.12, 16, 12] }),
            }),
          ],
        }),
        (0, K.jsx)(`group`, {
          ref: l,
          children: (0, K.jsx)(MF, {
            count: 5,
            seed: 69,
            material: t.leaf,
            spread: 2.2,
            y: 0.82,
            size: 0.15,
          }),
        }),
        (0, K.jsx)(DD, {
          index: e,
          count: 11,
          radius: 2.3,
          height: 2.6,
          baseY: 0.15,
          seed: 71,
        }),
      ],
    })
  )
}
