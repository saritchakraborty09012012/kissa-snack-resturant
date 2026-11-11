function lI({ active: e = !0 }) {
  return (0, K.jsxs)(DC, {
    frameloop: e ? `always` : `never`,
    dpr: tA ? [0.75, 1] : [1, 1.6],
    gl: { antialias: !0, alpha: !0, powerPreference: `high-performance` },
    camera: { fov: 32, position: [0, 0.35, 5.4], near: 0.1, far: 50 },
    onCreated: ({ gl: e }) => {
      ;((e.toneMapping = 4), (e.toneMappingExposure = 1.1), (e.outputColorSpace = ga))
    },
    children: [
      (0, K.jsx)(iA, {}),
      (0, K.jsx)(`ambientLight`, { intensity: 0.5, color: `#95a8b4` }),
      (0, K.jsx)(`pointLight`, {
        position: [2.3, 2.8, 3],
        intensity: 42,
        color: `#ffe4c4`,
        distance: 18,
        decay: 2,
      }),
      (0, K.jsx)(`pointLight`, {
        position: [-3, 0.8, -1],
        intensity: 55,
        color: `#8ab6dd`,
        distance: 18,
        decay: 2,
      }),
      (0, K.jsx)(`group`, {
        position: [0, 0.05, 0],
        rotation: [-0.1, -0.35, 0],
        children: (0, K.jsxs)(v.Suspense, {
          fallback: null,
          children: [
            (0, K.jsx)(sI, {
              type: `cinnamon`,
              position: [0, 0.1, 0],
              scale: 1.4,
              speed: 0.2,
              rotation: [0.6, 0.35, -0.8],
            }),
            (0, K.jsx)(sI, {
              type: `star`,
              position: [-1.12, 0.9, -0.45],
              scale: 0.9,
              speed: 0.3,
              rotation: [0.8, 0, 0.3],
              phase: 1.2,
            }),
            (0, K.jsx)(sI, {
              type: `cardamom`,
              position: [1.02, 0.98, -0.2],
              scale: 0.72,
              speed: 0.36,
              rotation: [0.3, 0.4, 0.9],
              phase: 2.1,
            }),
            (0, K.jsx)(sI, {
              type: `clove`,
              position: [1, -0.82, 0.25],
              scale: 1,
              speed: 0.3,
              rotation: [0.4, 0.2, -0.7],
              phase: 3.4,
            }),
            (0, K.jsx)(sI, {
              type: `cardamom`,
              position: [-1.05, -0.72, 0.15],
              scale: 0.64,
              speed: 0.42,
              rotation: [0.7, 0.9, 0.2],
              phase: 4.2,
            }),
          ],
        }),
      }),
      (0, K.jsx)(VE, {
        count: 55,
        scale: [6, 4, 3],
        size: 1.4,
        speed: 0.2,
        opacity: 0.45,
        color: `#dbe6ec`,
        noise: 0.5,
      }),
      (0, K.jsx)(cI, {}),
      (0, K.jsx)(aA, { bloom: 0.5, noise: 0.04 }),
    ],
  })
}
