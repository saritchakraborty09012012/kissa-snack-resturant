function GF() {
  let e = (0, v.useRef)()
  return (
    Jx(({ camera: t }) => {
      e.current && (e.current.position.x = t.position.x)
    }),
    (0, K.jsxs)(K.Fragment, {
      children: [
        (0, K.jsx)(`ambientLight`, { intensity: 0.4, color: `#8da4b6` }),
        (0, K.jsxs)(`group`, {
          ref: e,
          children: [
            (0, K.jsx)(`pointLight`, {
              position: [2.6, 3.6, 3.2],
              intensity: 60,
              color: `#ffedd8`,
              distance: 28,
              decay: 2,
            }),
            (0, K.jsx)(`pointLight`, {
              position: [-3.2, 1.3, -2.2],
              intensity: 90,
              color: `#8dbcf0`,
              distance: 28,
              decay: 2,
            }),
            (0, K.jsx)(`pointLight`, {
              position: [0, 0.3, 3.4],
              intensity: 16,
              color: `#ffdfbe`,
              distance: 16,
              decay: 2,
            }),
            (0, K.jsx)(`spotLight`, {
              position: [0, 5.5, 2],
              angle: 0.7,
              penumbra: 1,
              intensity: 40,
              color: `#f3e7d6`,
              distance: 22,
              decay: 2,
            }),
          ],
        }),
      ],
    })
  )
}
