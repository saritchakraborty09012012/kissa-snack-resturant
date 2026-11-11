function kF({ points: e, radius: t = 0.03, material: n, tubular: r = 32, radial: i = 7 }) {
  let a = (0, v.useMemo)(
    () => new up(new Wd(e.map((e) => new Y(...e))), r, t, i, !1),
    [e, t, r, i],
  )
  return (0, K.jsx)(`mesh`, { geometry: a, material: n })
}
