function AE({
  background: e = !1,
  scene: t,
  blur: n,
  backgroundBlurriness: r,
  backgroundIntensity: i,
  backgroundRotation: a,
  environmentIntensity: o,
  environmentRotation: s,
  ...c
}) {
  let l = bE(c),
    u = qx((e) => e.scene)
  return (
    v.useLayoutEffect(() =>
      OE(e, t, u, l, {
        backgroundBlurriness: n ?? r,
        backgroundIntensity: i,
        backgroundRotation: a,
        environmentIntensity: o,
        environmentRotation: s,
      }),
    ),
    v.useEffect(
      () => () => {
        l.dispose()
      },
      [l],
    ),
    null
  )
}
