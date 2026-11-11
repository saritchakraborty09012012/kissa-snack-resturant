function HE({ pixelated: e }) {
  let t = qx((e) => e.gl),
    n = qx((e) => e.internal.active),
    r = qx((e) => e.performance.current),
    i = qx((e) => e.viewport.initialDpr),
    a = qx((e) => e.setDpr)
  return (
    v.useEffect(() => {
      let r = t.domElement
      return () => {
        ;(n && a(i), e && r && (r.style.imageRendering = `auto`))
      }
    }, []),
    v.useEffect(() => {
      ;(a(r * i),
        e &&
          t.domElement &&
          (t.domElement.style.imageRendering = r === 1 ? `auto` : `pixelated`))
    }, [r]),
    null
  )
}
var UE = 11
