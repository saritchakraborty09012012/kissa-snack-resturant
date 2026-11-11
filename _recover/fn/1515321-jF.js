function jF({
  count: e = 14,
  seed: t = 1,
  material: n,
  center: r = [0, 0, 0],
  spread: i = [1, 0.05, 0.8],
  size: a = [0.06, 0.06, 0.06],
  type: o = `sphere`,
  rotation: s = [0, 0, 0],
}) {
  let c = (0, v.useMemo)(
    () => (
      WE(t),
      Array.from({ length: e }, () => ({
        p: [($() - 0.5) * i[0], ($() - 0.5) * i[1], ($() - 0.5) * i[2]],
        r: [$() * Math.PI, $() * Math.PI, $() * Math.PI],
        s: 0.6 + $() * 0.8,
      }))
    ),
    [e, t, i],
  )
  return (0, K.jsx)(`group`, {
    position: r,
    rotation: s,
    children: c.map((e, t) =>
      (0, K.jsxs)(
        `mesh`,
        {
          material: n,
          position: e.p,
          rotation: e.r,
          scale: [a[0] * e.s, a[1] * e.s, a[2] * e.s],
          children: [
            o === `sphere` && (0, K.jsx)(`sphereGeometry`, { args: [1, 10, 8] }),
            o === `box` && (0, K.jsx)(`boxGeometry`, { args: [1, 1, 1] }),
            o === `ico` && (0, K.jsx)(`icosahedronGeometry`, { args: [1, 0] }),
          ],
        },
        t,
      ),
    ),
  })
}
