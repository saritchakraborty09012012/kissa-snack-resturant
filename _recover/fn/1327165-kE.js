function kE({ scene: e, background: t = !1, map: n, ...r }) {
  let i = qx((e) => e.scene)
  return (
    v.useLayoutEffect(() => {
      if (n) return OE(t, e, i, n, r)
    }),
    null
  )
}
