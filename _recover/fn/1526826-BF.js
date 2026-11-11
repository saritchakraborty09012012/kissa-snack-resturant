function BF({ index: e }) {
  yD()
  let t = (0, v.useMemo)(
      () => (
        WE(101),
        Array.from({ length: 26 }, () => ({
          p: [($() - 0.5) * 1.5, ($() - 0.5) * 0.28, ($() - 0.5) * 1.2],
          r: [$() * Math.PI, $() * Math.PI, $() * Math.PI],
          s: 0.7 + $() * 0.65,
        }))
      ),
      [],
    ),
    n = (0, v.useRef)([])
  return (
    Jx(() => {
      n.current.forEach((n, r) => {
        if (!n) return
        let i = 0.28 + (r / t.length) * 0.34,
          a = KE(i, i + 0.12, pD(e))
        ;((n.visible = a > 0.002),
          n.scale.setScalar(a * t[r].s),
          n.position.set(t[r].p[0], t[r].p[1], t[r].p[2]),
          n.rotation.set(t[r].r[0], t[r].r[1], t[r].r[2]))
      })
    }),
    (0, K.jsx)(`group`, {
      position: [0, -0.3, 0],
      children: t.map((e, t) =>
        (0, K.jsx)(
          `group`,
          { ref: (e) => (n.current[t] = e), children: (0, K.jsx)(zF, {}) },
          t,
        ),
      ),
    })
  )
}
