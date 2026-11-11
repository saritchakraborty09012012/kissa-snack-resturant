function wD({
  position: e = [0, 0, -1.4],
  scale: t = 4,
  color: n = `#a9c8de`,
  opacity: r = 0.32,
}) {
  let i = SD()
  return (0, K.jsx)(`sprite`, {
    position: e,
    scale: [t, t, 1],
    children: (0, K.jsx)(`spriteMaterial`, {
      map: i,
      color: n,
      transparent: !0,
      opacity: r,
      depthWrite: !1,
      blending: 2,
    }),
  })
}
