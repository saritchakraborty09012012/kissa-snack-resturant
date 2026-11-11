function CD({
  position: e = [0, 1, 0],
  count: t = 9,
  radius: n = 0.35,
  height: r = 1.5,
  opacity: i = 0.22,
  speed: a = 0.16,
  spread: o = 0.2,
}) {
  let s = xD(),
    c = (0, v.useRef)(),
    l = (0, v.useMemo)(
      () =>
        Array.from({ length: t }, (e, t) => ({
          offset: $(),
          x: ($() - 0.5) * o,
          z: ($() - 0.5) * o,
          scale: 0.35 + $() * 0.8,
          drift: ($() - 0.5) * 0.35,
          rot: $() * Math.PI * 2,
          speed: a * (0.7 + $() * 0.8),
        })),
      [t, o, a],
    )
  return (
    Jx(({ clock: e }) => {
      if (!c.current) return
      let t = e.elapsedTime
      c.current.children.forEach((e, n) => {
        let a = l[n],
          o = (t * a.speed + a.offset) % 1
        ;((e.position.y = o * r),
          (e.position.x = a.x + Math.sin(o * 4 + a.rot) * a.drift * o),
          (e.position.z = a.z + Math.cos(o * 3 + a.rot) * a.drift * o * 0.5))
        let s = (0.5 + o * 1.25) * a.scale
        ;(e.scale.set(s, s * 1.4, 1),
          (e.material.opacity = Math.sin(o * Math.PI) * i),
          (e.material.rotation = a.rot + o * 0.5))
      })
    }),
    (0, K.jsx)(`group`, {
      ref: c,
      position: e,
      children: l.map((e, t) =>
        (0, K.jsx)(
          `sprite`,
          {
            position: [e.x, 0, e.z],
            scale: [0.5, 0.7, 1],
            children: (0, K.jsx)(`spriteMaterial`, {
              map: s,
              color: `#d7e7f2`,
              transparent: !0,
              opacity: 0,
              depthWrite: !1,
              blending: 2,
            }),
          },
          t,
        ),
      ),
    })
  )
}
