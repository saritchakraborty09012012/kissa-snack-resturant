function YF({ active: e = !0 }) {
  return (0, K.jsxs)(DC, {
    frameloop: e ? `always` : `never`,
    dpr: tA ? [0.75, 1] : [1, 1.6],
    gl: { antialias: !0, alpha: !0, powerPreference: `high-performance` },
    camera: { fov: 34, position: [0, 0.55, 7.7], near: 0.1, far: 90 },
    onCreated: ({ gl: e }) => {
      ;((e.toneMapping = 4), (e.toneMappingExposure = 1.08), (e.outputColorSpace = ga))
    },
    children: [
      (0, K.jsx)(`fog`, { attach: `fog`, args: [`#05060a`, 9, 26] }),
      (0, K.jsx)(iA, {}),
      (0, K.jsx)(GF, {}),
      (0, K.jsx)(qF, {}),
      (0, K.jsx)(JF, {}),
      (0, K.jsx)(v.Suspense, {
        fallback: null,
        children: WF.map((e, t) => (0, K.jsx)(KF, { index: t }, t)),
      }),
      (0, K.jsx)(aA, { bloom: 0.55, noise: 0.045 }),
    ],
  })
}
OF.registerPlugin(qn)
var XF = (e, t, n) => Math.min(n, Math.max(t, e))
