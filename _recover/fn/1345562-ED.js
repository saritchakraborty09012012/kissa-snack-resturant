function ED({
  index: e,
  y: t = -1.3,
  scale: n = 5.2,
  opacity: r = 0.34,
  color: i = `#8aa9be`,
}) {
  let a = SD(),
    o = (0, v.useRef)()
  return (
    Jx(() => {
      o.current && (o.current.material.opacity = r * KE(0.08, 0.62, pD(e)))
    }),
    (0, K.jsxs)(`mesh`, {
      ref: o,
      rotation: [-Math.PI / 2, 0, 0],
      position: [0.65, t, 0],
      children: [
        (0, K.jsx)(`planeGeometry`, { args: [n, n * 0.58] }),
        (0, K.jsx)(`meshBasicMaterial`, {
          map: a,
          color: i,
          transparent: !0,
          opacity: 0,
          depthWrite: !1,
          blending: 2,
        }),
      ],
    })
  )
}
