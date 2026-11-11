function TD({
  index: e,
  opacity: t = 0.34,
  scale: n = 4.6,
  position: r = [0.4, 0.2, -1.6],
  color: i = `#a9c8de`,
}) {
  let a = SD(),
    o = (0, v.useRef)()
  return (
    Jx(() => {
      o.current && (o.current.material.opacity = t * KE(0.02, 0.5, pD(e)))
    }),
    (0, K.jsx)(`sprite`, {
      ref: o,
      position: r,
      scale: [n, n, 1],
      children: (0, K.jsx)(`spriteMaterial`, {
        map: a,
        color: i,
        transparent: !0,
        opacity: 0,
        depthWrite: !1,
        blending: 2,
      }),
    })
  )
}
