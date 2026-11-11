function MF({
  count: e = 6,
  seed: t = 5,
  material: n,
  spread: r = 1,
  y: i = 0,
  size: a = 0.16,
}) {
  let o = (0, v.useMemo)(
    () => (
      WE(t),
      Array.from({ length: e }, () => ({
        p: [($() - 0.5) * r, ($() - 0.5) * 0.08 + i, ($() - 0.5) * r * 0.7],
        r: [$() * Math.PI, $() * Math.PI, $() * Math.PI],
        s: a * (0.6 + $()),
      }))
    ),
    [e, t, r, i, a],
  )
  return (0, K.jsx)(`group`, {
    children: o.map((e, t) =>
      (0, K.jsx)(
        `mesh`,
        {
          position: e.p,
          rotation: e.r,
          scale: [e.s, e.s * 0.12, e.s * 0.55],
          material: n,
          children: (0, K.jsx)(`sphereGeometry`, { args: [1, 10, 8] }),
        },
        t,
      ),
    ),
  })
}
