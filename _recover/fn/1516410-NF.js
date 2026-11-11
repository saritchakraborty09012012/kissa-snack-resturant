function NF({ index: e }) {
  let t = (0, v.useRef)(),
    n = (0, v.useRef)()
  return (
    bD(e, [
      { ref: t, at: 0.01, dur: 0.32, from: [0, -1, 0], fromRot: [0.1, 0.9, 0.16] },
      { ref: n, at: 0.5, dur: 0.3 },
    ]),
    (0, K.jsxs)(`group`, {
      children: [
        (0, K.jsx)(TD, { index: e, scale: 5.4, position: [0.55, 0.4, -1.9], opacity: 0.34 }),
        (0, K.jsx)(ED, { index: e, y: -1.34, scale: 5.6 }),
        (0, K.jsx)(`group`, {
          ref: t,
          children: (0, K.jsx)(`group`, {
            position: [0, -1.02, 0],
            scale: 0.95,
            rotation: [0, -0.22, 0],
            children: (0, K.jsx)(kD, {}),
          }),
        }),
        (0, K.jsx)(`group`, {
          ref: n,
          position: [0, 1.02, 0],
          children: (0, K.jsx)(CD, {
            count: 11,
            height: 1.5,
            radius: 0.34,
            opacity: 0.2,
            speed: 0.14,
            spread: 0.26,
          }),
        }),
        (0, K.jsx)(DD, { index: e, count: 9, radius: 1.9, height: 2.3, baseY: 0.2, seed: 31 }),
      ],
    })
  )
}
