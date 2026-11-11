function zF({ material: e = null }) {
  let t = yD()
  return (0, K.jsx)(`mesh`, {
    material: e || t.pasta,
    rotation: [0.2, 0, 0],
    children: (0, K.jsx)(`cylinderGeometry`, { args: [0.105, 0.1, 0.55, 12, 1, !0] }),
  })
}
