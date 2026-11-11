function dA({ ready: e, active: t = !0 }) {
  return (0, K.jsxs)(DC, {
    frameloop: t ? `always` : `never`,
    dpr: tA ? [0.75, 1] : [1, 1.6],
    gl: { antialias: !0, alpha: !0, powerPreference: `high-performance` },
    camera: { fov: 32, position: [0, 0.55, 5.15], near: 0.1, far: 60 },
    onCreated: ({ gl: e }) => {
      ;((e.toneMapping = 4), (e.toneMappingExposure = 1.12), (e.outputColorSpace = ga))
    },
    children: [
      (0, K.jsx)(iA, {}),
      (0, K.jsx)(`ambientLight`, { intensity: 0.45, color: `#91a7b7` }),
      (0, K.jsx)(`pointLight`, {
        position: [3, 3.4, 3],
        intensity: 55,
        color: `#ffe8cc`,
        distance: 20,
        decay: 2,
      }),
      (0, K.jsx)(`pointLight`, {
        position: [-3.4, 1.4, -1.4],
        intensity: 75,
        color: `#8fbdff`,
        distance: 20,
        decay: 2,
      }),
      (0, K.jsx)(`pointLight`, {
        position: [0, 0.2, 3.4],
        intensity: 12,
        color: `#ffe1c0`,
        distance: 12,
        decay: 2,
      }),
      (0, K.jsx)(wD, {
        position: [1.25, 0.6, -1.7],
        scale: 6.5,
        color: `#a8c6da`,
        opacity: 0.3,
      }),
      (0, K.jsxs)(v.Suspense, {
        fallback: null,
        children: [
          (0, K.jsx)(cA, { ready: e }),
          (0, K.jsx)(lA, { ready: e }),
          (0, K.jsx)(sA, {
            type: `cinnamon`,
            position: [-2.15, 0.45, -0.6],
            scale: 0.55,
            speed: 0.22,
            rotation: [0.2, 0.7, -0.5],
          }),
          (0, K.jsx)(sA, {
            type: `star`,
            position: [1.9, 1.15, -0.9],
            scale: 0.55,
            speed: 0.3,
            rotation: [0.8, 0.2, 0.4],
          }),
          (0, K.jsx)(sA, {
            type: `cardamom`,
            position: [-2.05, -0.75, -0.8],
            scale: 0.7,
            speed: 0.35,
            rotation: [0.4, 0.8, 0.9],
          }),
          (0, K.jsx)(sA, {
            type: `clove`,
            position: [2, -0.55, -0.3],
            scale: 0.7,
            speed: 0.28,
            rotation: [0.2, 0.9, -0.6],
          }),
        ],
      }),
      (0, K.jsx)(VE, {
        count: 120,
        scale: [9, 6, 5],
        position: [0.4, 0.6, -0.8],
        size: 1.6,
        speed: 0.24,
        opacity: 0.55,
        color: `#dbe6ec`,
        noise: 0.6,
      }),
      (0, K.jsx)(uA, {}),
      (0, K.jsx)(aA, { bloom: 0.75, noise: 0.05 }),
    ],
  })
}
