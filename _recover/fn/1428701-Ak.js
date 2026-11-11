function Ak(e, t, n, r = Ok, i = kk) {
  let a = (0, v.useRef)(null),
    o = qx((e) => e.invalidate)
  ;(0, v.useLayoutEffect)(() => {
    let s = wk(e)
    if (!s) return
    a.current?.instance !== s &&
      (a.current = { instance: s, defaults: new Map(), applied: new Map() })
    let { defaults: c, applied: l } = a.current,
      u = !1
    for (let e of n) {
      if (!c.has(e)) {
        let t = r(s, e)
        ;(c.set(e, t), l.set(e, t))
      }
      let n = t[e] === void 0 ? c.get(e) : t[e]
      Object.is(l.get(e), n) || (i(s, e, n), l.set(e, n), (u = !0))
    }
    u && o()
  })
}
var jk = new WeakMap(),
  Mk = 0,
  Nk = [`blendMode-blendFunction`, `blendMode-opacity-value`]
