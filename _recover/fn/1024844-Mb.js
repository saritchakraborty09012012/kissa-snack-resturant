function Mb(e, t = null, n = !1, r = {}) {
  t === null && (t = [e])
  for (let e of Ab)
    if (jb(t, e.keys, e.equal)) {
      if (n) return
      if (Object.prototype.hasOwnProperty.call(e, `error`)) throw e.error
      if (Object.prototype.hasOwnProperty.call(e, `response`))
        return (
          r.lifespan &&
            r.lifespan > 0 &&
            (e.timeout && clearTimeout(e.timeout),
            (e.timeout = setTimeout(e.remove, r.lifespan))),
          e.response
        )
      if (!n) throw e.promise
    }
  let i = {
    keys: t,
    equal: r.equal,
    remove: () => {
      let e = Ab.indexOf(i)
      e !== -1 && Ab.splice(e, 1)
    },
    promise: (kb(e) ? e : e(...t))
      .then((e) => {
        ;((i.response = e),
          r.lifespan && r.lifespan > 0 && (i.timeout = setTimeout(i.remove, r.lifespan)))
      })
      .catch((e) => (i.error = e)),
  }
  if ((Ab.push(i), !n)) throw i.promise
}
var Nb = (e, t, n) => Mb(e, t, !1, n),
  Pb = (e, t, n) => void Mb(e, t, !0, n),
  Fb = (e) => {
    if (e === void 0 || e.length === 0) Ab.splice(0, Ab.length)
    else {
      let t = Ab.find((t) => jb(e, t.keys, t.equal))
      t && t.remove()
    }
  }
typeof window < `u` &&
(window.document?.createElement || window.navigator?.product === `ReactNative`)
  ? v.useLayoutEffect
  : v.useEffect
