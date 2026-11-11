function DD({
  index: e,
  count: t = 12,
  radius: n = 2.1,
  height: r = 1.8,
  colors: i = [`#c9894b`, `#ede9e0`, `#4f7d31`],
  baseY: a = 0.1,
  seed: o = 3,
}) {
  let s = (0, v.useRef)(),
    c = yD(),
    l = (0, v.useMemo)(
      () => [
        c.bun,
        c.cream,
        c.green,
        c.chili || c.tomato,
        c.butter,
        c.papdi,
        c.pomegranate,
        c.chocolate,
      ],
      [c],
    )
  WE(o)
  let u = (0, v.useMemo)(
    () =>
      Array.from({ length: t }, (e, t) => ({
        a: $() * Math.PI * 2,
        r: n * (0.55 + $() * 0.7),
        y: ($() - 0.5) * r,
        s: 0.03 + $() * 0.075,
        speed: 0.2 + $() * 0.4,
        phase: $() * 10,
        rot: $() * Math.PI,
        mat: l[t % l.length],
        type: t % 4,
      })),
    [t, n, r, l],
  )
  return (
    Jx(({ clock: t }) => {
      if (!s.current) return
      let n = t.elapsedTime,
        r = KE(0.6, 0.92, pD(e))
      s.current.children.forEach((e, t) => {
        let i = u[t],
          o = i.a + n * i.speed * 0.24
        ;(e.position.set(
          Math.cos(o) * i.r,
          a + i.y + Math.sin(n * i.speed + i.phase) * 0.13,
          Math.sin(o) * i.r * 0.55,
        ),
          e.rotation.set(i.rot + n * 0.12, i.rot + n * 0.2, i.rot),
          e.scale.setScalar(r * i.s * 1))
      })
    }),
    (0, K.jsx)(`group`, {
      ref: s,
      children: u.map((e, t) => {
        let n = e.mat
        return e.type === 0
          ? (0, K.jsx)(
              `mesh`,
              { material: n, children: (0, K.jsx)(`sphereGeometry`, { args: [1, 12, 10] }) },
              t,
            )
          : e.type === 1
            ? (0, K.jsx)(
                `mesh`,
                {
                  material: n,
                  children: (0, K.jsx)(`boxGeometry`, { args: [1.4, 0.46, 0.7] }),
                },
                t,
              )
            : e.type === 2
              ? (0, K.jsx)(
                  `mesh`,
                  {
                    material: n,
                    children: (0, K.jsx)(`dodecahedronGeometry`, { args: [1, 0] }),
                  },
                  t,
                )
              : (0, K.jsx)(
                  `mesh`,
                  {
                    material: n,
                    children: (0, K.jsx)(`torusGeometry`, { args: [0.7, 0.24, 8, 16] }),
                  },
                  t,
                )
      }),
    })
  )
}
