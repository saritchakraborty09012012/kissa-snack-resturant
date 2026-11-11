function PF({ flip: e = !1 }) {
  let t = yD()
  return (0, K.jsxs)(`group`, {
    rotation: [0.08, e ? -0.5 : 0.35, e ? -0.42 : -0.22],
    children: [
      (0, K.jsx)(VT, {
        args: [0.36, 1.35, 0.24],
        radius: 0.04,
        smoothness: 3,
        material: t.chocolate,
      }),
      [-0.12, -0.04, 0.04, 0.12].map((e, n) =>
        (0, K.jsx)(
          VT,
          {
            args: [0.075, 1.22, 0.065],
            radius: 0.02,
            smoothness: 2,
            material: t.chocolateLight,
            position: [e, 0, 0.14],
          },
          n,
        ),
      ),
      (0, K.jsx)(VT, {
        args: [0.365, 0.12, 0.245],
        radius: 0.02,
        smoothness: 2,
        material: t.tomato,
        position: [0, 0.45, 0],
      }),
    ],
  })
}
