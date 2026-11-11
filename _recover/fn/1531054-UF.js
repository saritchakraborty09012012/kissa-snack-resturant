function UF({ index: e }) {
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
      { ref: r, at: 0.18, dur: 0.28, from: [0, 0.9, 0] },
      { ref: i, at: 0.38, dur: 0.28, from: [0, 1.4, 0] },
      { ref: a, at: 0.52, dur: 0.3, from: [0, 1, 0] },
      { ref: o, at: 0.66, dur: 0.22 },
      { ref: s, at: 0.72, dur: 0.22 },
      { ref: c, at: 0.8, dur: 0.18 },
    ]),
    (0, K.jsxs)(`group`, {
      scale: 1.04,
      children: [
        (0, K.jsx)(TD, {
          index: e,
          scale: 5.6,
          position: [0.55, 0.15, -1.8],
          color: `#c2a378`,
        }),
        (0, K.jsx)(ED, { index: e, y: -1.5, scale: 5.8, color: `#a98c68`, opacity: 0.26 }),
        (0, K.jsx)(`group`, {
          ref: n,
          children: (0, K.jsx)(`group`, {
            position: [0, -1.22, 0],
            scale: 1.14,
            rotation: [0, 0.2, 0],
            children: (0, K.jsx)(AD, {}),
          }),
        }),
        (0, K.jsxs)(`group`, {
          ref: r,
          children: [
            (0, K.jsx)(AF, {
              scale: [0.86, 0.17, 0.75],
              seed: 143,
              amp: 0.16,
              material: t.milk,
              position: [0, -0.5, 0],
            }),
            [
              [-0.35, -0.4, 0.2, 0.24],
              [0.3, -0.38, 0.18, 0.2],
              [0.05, -0.36, -0.22, 0.26],
            ].map(([e, n, r, i], a) =>
              (0, K.jsx)(
                AF,
                {
                  scale: [i, 0.07, i * 0.8],
                  seed: 145 + a,
                  amp: 0.2,
                  material: t.milk,
                  position: [e, n, r],
                },
                a,
              ),
            ),
          ],
        }),
        (0, K.jsx)(`group`, {
          ref: i,
          children: Array.from({ length: 9 }, (e, n) => {
            let r = (n / 9) * Math.PI * 2 + 0.3
            return (0, K.jsx)(
              VT,
              {
                args: [0.62, 0.08, 0.48],
                radius: 0.05,
                smoothness: 2,
                material: t.papdi,
                position: [Math.cos(r) * 0.66, -0.28 + (n % 3) * 0.03, Math.sin(r) * 0.58],
                rotation: [0.2 * Math.sin(r), -r, 0.16 * Math.cos(r)],
              },
              n,
            )
          }),
        }),
        (0, K.jsxs)(`group`, {
          ref: a,
          position: [0, -0.2, 0],
          children: [
            (0, K.jsx)(FD, {
              index: e,
              count: 46,
              radius: 0.011,
              scale: 0.72,
              seed: 151,
              spread: 1.1,
              y: 0,
            }),
            (0, K.jsx)(jF, {
              count: 22,
              seed: 153,
              material: t.sev,
              center: [0, 0.02, 0],
              spread: [1.3, 0.1, 1.1],
              size: [0.02, 0.02, 0.02],
            }),
          ],
        }),
        (0, K.jsxs)(`group`, {
          ref: o,
          children: [
            (0, K.jsx)(kF, {
              points: [
                [-0.55, 0, 0.35],
                [-0.2, 0.04, 0.5],
                [0.2, 0.02, 0.1],
                [0.5, 0, -0.2],
              ],
              radius: 0.035,
              material: t.chutneyGreen,
            }),
            (0, K.jsx)(kF, {
              points: [
                [0.45, 0.01, 0.35],
                [0.2, 0.05, 0.1],
                [-0.2, 0.03, -0.2],
                [-0.5, 0.01, -0.3],
              ],
              radius: 0.03,
              material: t.tamarind,
            }),
            (0, K.jsx)(kF, {
              points: [
                [-0.1, 0.06, 0.4],
                [0.15, 0.1, 0.25],
                [0.35, 0.06, -0.05],
              ],
              radius: 0.025,
              material: t.milk,
            }),
          ],
        }),
        (0, K.jsx)(`group`, {
          ref: s,
          children: (0, K.jsx)(jF, {
            count: 24,
            seed: 157,
            material: t.pomegranate,
            center: [0, 0.05, 0],
            spread: [1.2, 0.14, 1],
            size: [0.055, 0.055, 0.055],
          }),
        }),
        (0, K.jsxs)(`group`, {
          ref: c,
          children: [
            (0, K.jsx)(MF, {
              count: 10,
              seed: 159,
              material: t.leaf,
              spread: 1.6,
              y: 0.06,
              size: 0.06,
            }),
            (0, K.jsx)(jF, {
              count: 20,
              seed: 161,
              material: t.char,
              center: [0, 0.08, 0],
              spread: [1.4, 0.08, 1.1],
              size: [0.012, 0.012, 0.012],
            }),
          ],
        }),
        (0, K.jsx)(DD, { index: e, count: 8, radius: 2.2, height: 2.2, baseY: 0.1, seed: 163 }),
      ],
    })
  )
}
var WF = [NF, FF, IF, LF, RF, VF, HF, UF]
